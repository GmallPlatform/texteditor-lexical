import { ReactNode } from 'react';
type Props = Readonly<{
    "data-test-id"?: string;
    children: ReactNode;
}>;
export declare function DialogButtonsList({ children }: Props): JSX.Element;
export declare function DialogActions({ "data-test-id": dataTestId, children, }: Props): JSX.Element;
export {};
