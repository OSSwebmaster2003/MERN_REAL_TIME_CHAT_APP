import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import profile from "../../assets/profile.svg";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";
import { useFetchLatestMessage } from "../../hooks/useFetchLatestMessage";
import moment from "moment";

const UserChat = ({ user, chat }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers, notifications, thisUserNotificationRead } =
    useContext(ChatContext);

  const { latestMessage } = useFetchLatestMessage(chat);

  const unreadNotifications = unreadNotificationsFunc(notifications);

  const thisUserNotifications = unreadNotifications?.filter(
    (n) => n.senderId === recipientUser?._id
  );

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  const truncatedText = (text) => {
    let shortText = text.substring(0, 20);

    if (text.length > 20) {
      shortText = shortText + "...";
    }

    return shortText;
  };

  return (
    <div
      className="flex items-start justify-between gap-3 p-2 user-card"
      onClick={() => {
        if (thisUserNotifications?.length > 0) {
          thisUserNotificationRead(thisUserNotifications, notifications);
        }
      }}
    >
      <div className="flex gap-2">
        <div className="">
          <img src={profile} alt="avatar" height="35px" className="w-12 h-12" />
        </div>
        <div className="text-content">
          <div className="text-sm font-bold">{recipientUser?.name}</div>
          <div className="ml-1 text-xs text-gray-300">
            {latestMessage?.text && (
              <span>{truncatedText(latestMessage?.text)}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm">
          {moment(latestMessage?.createdAt).subtract(10, "days").calendar()}
        </div>
        <div
          className={
            thisUserNotifications?.length > 0
              ? "flex items-center justify-center w-5 h-5 text-sm text-white bg-green-500 rounded-full"
              : ""
          }
        >
          {thisUserNotifications?.length > 0 && thisUserNotifications?.length}
        </div>
        <div className={isOnline ? "user-online" : ""}></div>
      </div>
    </div>
  );
};

export default UserChat;
