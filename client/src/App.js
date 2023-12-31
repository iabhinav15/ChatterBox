import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import User from "./User";
import React from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
    <Header username={username}/>
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
            onKeyDown={(event) => {
              if(event.key === "Enter"){
                joinRoom()
              }
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : ( <>
        <User username={username}/>
        <Chat socket={socket} username={username} room={room} /></>
      )}
    </div>
    </>
  );
}

export default App;
