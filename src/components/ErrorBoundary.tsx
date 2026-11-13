import { Component, type ErrorInfo, type ReactNode } from "react";
import { RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Logged locally only — no data leaves the browser.
    console.error("Unhandled UI error:", error, info.componentStack);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-4 bg-base px-6 text-center"
        >
          <p className="font-display text-2xl text-ink">Something went wrong.</p>
          <p className="max-w-sm text-stone">
            Refresh the page to try again. If the problem continues, please reach us directly by phone or email.
          </p>
          <button onClick={this.handleRefresh} className="btn-primary mt-2">
            <RefreshCw size={16} aria-hidden="true" />
            Refresh page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
