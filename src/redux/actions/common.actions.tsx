import Notifications from '../../models/notifications.models';

export const setNotification = (notification: Notifications) => {
  return { type: 'SET_NOTIFICATION', notification }
}
export const clearNotification = (notification: Notifications) => {
  return { type: 'CLEAR_NOTIFICATION', notification}
}