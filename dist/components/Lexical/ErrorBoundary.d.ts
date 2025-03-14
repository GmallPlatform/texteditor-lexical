import { default as React, Component, ReactElement } from 'react';
interface ErrorBoundaryProps {
    children: ReactElement;
    onError: (error: Error) => void;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ErrorBoundary;
