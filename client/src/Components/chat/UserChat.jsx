import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import profile from "../../assets/profile.svg";

const UserChat = ({ user, chat }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <div className="user-card gap-3 flex items-start justify-between p-2">
      <div className="flex gap-2">
        <div className="">
          <img src={profile} alt="avatar" height="35px" className="w-12 h-12" />
        </div>
        <div className="text-content">
          <div className="text-sm font-bold">{recipientUser?.name}</div>
          <div className="text-xs text-gray-300 ml-1">Text Message</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm">12/12/2022</div>
        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
          2
        </div>
        <div className="user-online"></div>
      </div>
    </div>
  );
};

export default UserChat;
