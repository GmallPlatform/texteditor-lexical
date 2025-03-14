/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from "react";
interface Props {
    icon: React.ReactNode;
    disabled?: boolean;
    buttonAriaLabel?: string;
    buttonClassName: string;
    buttonIconClassName?: string;
    buttonLabel?: string;
    title?: string;
    stopCloseOnClickSelf?: boolean;
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
    container?: HTMLElement | null;
}
export default function DropdownColorPicker({ disabled, stopCloseOnClickSelf, color, onChange, container, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
