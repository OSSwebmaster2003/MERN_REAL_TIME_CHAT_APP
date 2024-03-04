import { useContext } from "react";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  if (!recipientUser)
    return (
      <p className="w-full text-center">
        Select conversation to start messaging
      </p>
    );
  if (isMessagesLoading) {
    return <p className="w-full text-center">Loading chat...</p>;
  }
  return (
    <div className="chat-box">
      <div className="flex items-center justify-center py-2 chat-header">
        <strong>{recipientUser?.name}</strong>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 p-2 messages">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message?.senderId === user?._id
                  ? "message flex flex-col items-end justify-end rounded-md p-2 self-end"
                  : "message flex flex-col items-start justify-start rounded-md self-start"
              }`}
            >
              <span className="text-sm ">{message.text}</span>
              <span className="text-xs ">
                {moment(message.createdAt).format("h:mm:ss a")}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatBox;
