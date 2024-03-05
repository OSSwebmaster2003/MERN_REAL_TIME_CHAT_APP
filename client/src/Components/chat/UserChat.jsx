import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import profile from "../../assets/profile.svg";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const UserChat = ({ user, chat }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers } = useContext(ChatContext);

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );
  return (
    <div className="flex items-start justify-between gap-3 p-2 user-card">
      <div className="flex gap-2">
        <div className="">
          <img src={profile} alt="avatar" height="35px" className="w-12 h-12" />
        </div>
        <div className="text-content">
          <div className="text-sm font-bold">{recipientUser?.name}</div>
          <div className="ml-1 text-xs text-gray-300">Text Message</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm">12/12/2022</div>
        <div className="flex items-center justify-center w-5 h-5 text-sm text-white bg-green-500 rounded-full">
          2
        </div>
        <div className={isOnline ? "user-online" : ""}></div>
      </div>
    </div>
  );
};

export default UserChat;
