import io from "socket.io-client";
var connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
const ENDPOINT = "http://localhost:2022";
let socket;

const connectSocket = () => {
  socket = io.connect(ENDPOINT, connectionOptions);
};
export { socket, connectSocket };
