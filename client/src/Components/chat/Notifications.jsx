import { useContext, useState } from "react";
import moment from "moment";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    notifications,
    userChats,
    allUsers,
    markAllNotificationsAsRead,
    markNotificationAsRead,
  } = useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const modifiedNotifications = notifications?.map((n) => {
    const sender = allUsers?.find((user) => user._id == n.senderId);

    return {
      ...n,
      senderName: sender?.name,
    };
  });

  console.log("un ", unreadNotifications);
  console.log("mn ", modifiedNotifications);
  return (
    <div className="relative notifications">
      <div
        className="cursor-pointer notification-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
        {unreadNotifications?.length === 0 ? null : (
          <span className="notification-count">
            <span>{unreadNotifications?.length}</span>
          </span>
        )}
      </div>
      {isOpen && (
        <div className="absolute z-20 bg-blue-600 notifications-box w-[350px] rounded-md right-0 top-7">
          <div className="flex items-center justify-between gap-3 p-2 notifications-header">
            <h3>Notifications</h3>
            <div
              className="cursor-pointer mark-as-read"
              onClick={() => markAllNotificationsAsRead(notifications)}
            >
              Mark all as read
            </div>
          </div>
          {modifiedNotifications?.length === 0 ? (
            <span className="p-2">No notifications</span>
          ) : null}
          {modifiedNotifications?.length > 0 &&
            modifiedNotifications.map((n, index) => (
              <div
                key={index}
                className={n.isRead ? "notification" : "notification not-read"}
                onClick={() => {
                  markNotificationAsRead(n, userChats, user, notifications);
                  setIsOpen(false);
                }}
              >
                <span className="text-sm font-bold">{`${n.senderName} sent you a message`}</span>
                <span className="notification-time">
                  {moment(n.date).subtract(3, "days").calendar()}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
