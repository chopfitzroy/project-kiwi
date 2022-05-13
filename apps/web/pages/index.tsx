import { usePreview } from "./usePreview";
import { Skill } from "@discretize/gw2-ui-new";
import { ErrorBoundary } from "react-error-boundary";

const components = { Skill };

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default function Web() {
  const { content, Preview, setContent } = usePreview();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div>
        <h1>Web</h1>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <Preview components={components} />
      </div>
    </ErrorBoundary>
  );
}
