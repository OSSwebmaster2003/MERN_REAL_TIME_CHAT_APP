import { useContext, useState } from "react";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, sendTextMessage } =
    useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  const [textMessage, setTextMessage] = useState("");

  console.log(textMessage);

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
      <div className="flex flex-col justify-between chat-container">
        <div className="flex flex-col items-start justify-start gap-3 p-2 overflow-y-auto messages">
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message?.senderId === user?._id
                    ? "message flex flex-col items-end justify-end rounded-md p-2 self-end bg-green-500"
                    : "message flex flex-col items-end justify-start rounded-md p-2 self-start bg-[rgb(40,40,40)]"
                }`}
              >
                <span className="text-sm ">{message.text}</span>
                <span className="text-xs ">
                  {moment(message.createdAt).format("h:mm:ss a")}
                </span>
              </div>
            ))}
        </div>
        <div className="flex flex-grow-0 w-full px-2 pr-3 chat-input">
          <InputEmoji
            value={textMessage}
            onChange={setTextMessage}
            borderColor="rgba(72,112,223,0.2)"
            borderRadius={"10px"}
          />
          <button
            className="flex items-center justify-center"
            onClick={() =>
              sendTextMessage(textMessage, user, currentChat, setTextMessage)
            }
          >
            {/* send icon */}
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
