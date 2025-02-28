import { HttpError, type PageProps, type PageResponse, page } from "fresh";
import type { JSX } from "preact";
import { define } from "../utils.ts";

export const handler = define.handlers({
  GET(ctx): PageResponse<number> {
    const status = errorToStatus(ctx.error);

    switch (status) {
      case 404: {
        ctx.state.meta = {
          title: "404 - Page Not Found",
          hidden: true,
        };

        break;
      }

      case 500: {
        ctx.state.meta = {
          title: "500 - Internal Server Error",
          hidden: true,
        };

        break;
      }

      default: {
        ctx.state.meta = {
          title: "Unknown Error",
          hidden: true,
        };

        break;
      }
    }

    return page(status);
  },
});

function errorToStatus(error: unknown): number {
  if (error instanceof HttpError) {
    return error.status;
  }

  return 500;
}

export default define.page<typeof handler>((props: PageProps): JSX.Element => {
  const error = props.error;

  if (error instanceof HttpError) {
    const status = error.status;

    // Render a 404 not found page
    if (status === 404) {
      return <Error404 />;
    }
  }
  return <Error500 />;
});

function Error404() {
  return (
    <>
      <p>The page you were looking for doesn't exist.</p>
      <a href="/" class="underline">
        Go back home
      </a>
    </>
  );
}

function Error500() {
  return (
    <>
      <p>An internal server error occurred.</p>
      <a href="/" class="underline">
        Go back home
      </a>
    </>
  );
}
