import { useEffect, useRef, useState } from "react";
import { connectSocket, socket } from "./socket";
import FlyingEmote from "./components/FlyingEmote";

import { room, emotesList } from "./config";

function App() {
  const [emotesCloud, setEmotesCloud] = useState([]);
  const screenRef = useRef();

  // Function called when the user clicks on a react button
  const reactHandler = (emote) => {
    socket.emit("user-reacted", { emote, room });
  };

  // Create a flying Emote
  const createEmote = (reactId) => {
    // Horizontal Postion of Emote
    const xPosition =
      Math.random() * (screenRef?.current.clientWidth - 120) + 40;

    // Create new Emote Object
    const emote = (size, key) => (
      <FlyingEmote
        size={size}
        key={key}
        xPosition={xPosition}
        reactId={reactId}
        screenHeight={screenRef?.current.clientHeight}
      />
    );

    // Add new Emote to the Array of Flying Emotes
    setEmotesCloud((prev) => [...prev, emote]);
  };

  useEffect(() => {
    // Connect to the websocket server when app is started
    connectSocket();
    if (socket) {
      // Join the room immediately after the app is started and the client is connected to the websocket server
      socket.emit("join", { room });
    }
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    // Response from server to show the reaction
    if (socket) {
      socket.on("show-reaction", ({ emote }) => {
        createEmote(emote);
      });
    }

    return () => {
      // clean up function
      socket.off("show-reaction");
    };
  }, []);

  return (
    <div className="App">
      <div ref={screenRef} className="screen">
        <div className="emotes">{emotesCloud.map((e, i) => e(40, i))}</div>
        <div className="content"></div>
      </div>

      <div className="emotes-list">
        {emotesList.map((emote, index) => {
          return (
            <div
              key={index}
              className="emote"
              onClick={() => reactHandler(emote.id)}
            >
              <div className="toolTip">{emote.id}</div>
              {emote.component(32)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
