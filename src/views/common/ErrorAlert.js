import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ErrorAlert = (title) => {
  NotificationManager.error(title);
}

export default ErrorAlert