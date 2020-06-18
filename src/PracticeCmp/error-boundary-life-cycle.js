import React from "react";

export default class ErrorBoundary extends React.Component {
  // used constructor component to show Something went wrong.
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }
  // It's used to write code which will be executed when we get an error
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          // You can render any custom fallback UI
          <h1>Something went wrong.</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
