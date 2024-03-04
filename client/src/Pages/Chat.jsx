import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../Components/chat/UserChat";
import PotentialChats from "../Components/chat/PotentialChats";
import ChatBox from "../Components/chat/ChatBox";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);

  return (
    <div className="px-20">
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <div className="flex items-start justify-between gap-[20px]">
          <div>
            {isUserChatsLoading && <p>Loading chats ...</p>}{" "}
            {userChats?.map((chat, index) => (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  updateCurrentChat(chat);
                }}
              >
                <UserChat chat={chat} user={user} />
              </div>
            ))}
          </div>
          <ChatBox />
        </div>
      )}
    </div>
  );
};

export default Chat;
