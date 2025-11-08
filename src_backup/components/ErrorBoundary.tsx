import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App crashed with error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          <h1 className="text-3xl font-bold mb-4">âš ï¸ Something went wrong</h1>
          <p className="mb-6 opacity-80">
            Donâ€™t worry â€” itâ€™s not you. Try refreshing the page, or contact the
            developer if this keeps happening.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
