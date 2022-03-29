import React from "react";
import { Image } from "../utils";
import { Logout } from "@mui/icons-material";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="profile">
        <div className="image-container">
          <Image />
        </div>
        <h3>User Name</h3>
      </div>
      <span className="log-out-icon">{Logout}</span>
    </div>
  );
};

export default ChatHeader;
