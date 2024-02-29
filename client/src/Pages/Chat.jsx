import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../Components/chat/UserChat";
import PotentialChats from "../Components/chat/PotentialChats";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    <div className="px-20">
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <div className="flex items-center justify-between gap-[20px]">
          <div>
            {isUserChatsLoading && <p>Loading chats ...</p>}{" "}
            {userChats?.map((chat, index) => (
              <div key={index}>
                <UserChat chat={chat} user={user} />
              </div>
            ))}
          </div>
          <div>Chatbox</div>
        </div>
      )}
    </div>
  );
};

export default Chat;
