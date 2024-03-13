import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const SuccessAlert = (title) => {
    NotificationManager.success(title);
}

export default SuccessAlert