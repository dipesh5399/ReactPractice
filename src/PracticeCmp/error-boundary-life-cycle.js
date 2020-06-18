import React, { Component } from "react";

export default class ErrorBoundary extends React.Component {
  // used constructor component to show Something went wrong.
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
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
