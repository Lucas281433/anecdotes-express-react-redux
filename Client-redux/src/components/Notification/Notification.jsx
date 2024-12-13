import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

import "./Notification.css";

/**
 * A component that renders a notification message. The notification message is
 * taken from the Redux store, and is expected to be a string. If the message is
 * null, the component returns null.
 *
 * The component renders the notification message inside a Material UI Alert
 * component with a "success" severity and a CSS class of "notification". The
 * component is responsible for styling the notification message.
 *
 * @returns {JSX.Element} A JSX element representing the notification message.
 */
const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification === null) {
    return null;
  }

  return (
    <Alert variant="filled" severity="success" className="notification">
      {notification}
    </Alert>
  );
};

export default Notification;
