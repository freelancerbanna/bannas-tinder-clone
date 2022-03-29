import { Button } from "@mui/material";
import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";

const ChatConatainer = () => {
  return (
    <div className="chat-container">
      <ChatHeader />
      <div className="">
        <Button className="options">Matches</Button>
        <Button className="options">Chat</Button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatConatainer;
