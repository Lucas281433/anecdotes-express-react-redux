import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    /**
     * Sets the notification text in the Redux store to the given value.
     *
     * The notification text is used to display a notification to the user.
     * The notification text is a string and can be empty, in which case no
     * notification is shown.
     *
     * @param {string} state The current state of the notification text in the
     *   Redux store.
     * @param {object} action The action that triggered this reducer.
     * @param {string} action.payload The new value of the notification text.
     * @returns {string} The new value of the notification text.
     */
    showNotification(state, action) {
      return action.payload;
    },
    
    /**
     * Hides the notification by setting the notification text in the Redux
     * store to null.
     *
     * @returns {string} The new value of the notification text, which is null.
     */
    hideNotification() {
      return null;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

/**
 * Shows a notification with the given message for the given amount of
 * seconds, then hides it.
 *
 * This function is a thunk action creator that dispatches two actions to
 * the Redux store: showNotification and hideNotification. The first action
 * sets the notification text to the given message, and the second action
 * sets it to null, effectively hiding the notification. The time between
 * these two actions is the given amount of seconds.
 *
 * @param {string} message The message to show in the notification.
 * @param {number} seconds The number of seconds to show the notification for.
 * @returns {function} A thunk function that dispatches the above actions.
 */
export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch(showNotification(message));
    setTimeout(() => {
      dispatch(hideNotification());
    }, seconds*1000);
  };
};

export default notificationSlice.reducer;
