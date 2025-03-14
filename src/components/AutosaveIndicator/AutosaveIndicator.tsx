/**
 * AutosaveIndicator Component
 *
 * Displays a status indicator showing whether content is currently being saved
 * or has been saved successfully. Automatically hides after save completion.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether content is currently being saved
 *
 * @example
 * // Basic usage
 * <AutosaveIndicator isLoading={isSaving} />
 */

import { useEffect, useMemo, useReducer } from "react";
import "./AutosaveIndicator.css";

/**
 * State type for the autosave indicator
 */
interface State {
  visible: boolean;
  timeoutId: NodeJS.Timeout | null;
}

/**
 * Action types for state management
 */
type Action =
  | { type: "SHOW" }
  | { type: "HIDE" }
  | { type: "SET_TIMEOUT"; payload: NodeJS.Timeout }
  | { type: "CLEAR_TIMEOUT" };

/**
 * Reducer function to handle state updates
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SHOW":
      return { ...state, visible: true };
    case "HIDE":
      return { ...state, visible: false };
    case "SET_TIMEOUT":
      return { ...state, timeoutId: action.payload };
    case "CLEAR_TIMEOUT":
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return { ...state, timeoutId: null };
    default:
      return state;
  }
};

const AutosaveIndicator = ({ isLoading }: { isLoading: boolean }) => {
  // Time to wait before hiding indicator after save completes
  const HIDE_DELAY = 2000;

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    timeoutId: null,
  });

  // Text to display based on loading state
  const statusText = useMemo(
    () => (isLoading ? "Saving" : "Saved"),
    [isLoading],
  );

  useEffect(() => {
    if (isLoading) {
      // When save starts:
      // 1. Show indicator
      // 2. Clear any existing hide timeout
      dispatch({ type: "SHOW" });
      dispatch({ type: "CLEAR_TIMEOUT" });
    } else {
      // When save completes:
      // Start timer to hide indicator
      const timeoutId = setTimeout(() => {
        dispatch({ type: "HIDE" });
      }, HIDE_DELAY);
      dispatch({ type: "SET_TIMEOUT", payload: timeoutId });
    }

    // Cleanup timeouts on unmount
    return () => {
      dispatch({ type: "CLEAR_TIMEOUT" });
    };
  }, [isLoading]);

  if (!state.visible) return null;

  return (
    <div className="autosave-indicator">
      <span
        className={`body-m-medium autosave-text ${isLoading ? "saving" : "saved"}`}
      >
        {statusText}
      </span>
    </div>
  );
};

export default AutosaveIndicator;
