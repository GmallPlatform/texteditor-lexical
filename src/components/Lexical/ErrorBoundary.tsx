import React, { Component, ReactElement } from "react";

// Define interfaces for props and state types
interface ErrorBoundaryProps {
  children: ReactElement; // Changing type to ReactElement
  onError: (error: Error) => void; // Function to handle errors
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Class component ErrorBoundary
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Method to update state when an error occurs
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // Method to capture errors and call the onError function from props
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.props.onError(error); // Calling onError from props
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
