import Like from "./components/Emotes/Like";
import Question from "./components/Emotes/Question";
import Slow from "./components/Emotes/Slow";
import Understand from "./components/Emotes/Understand";

export const emotesList = [
  { id: "like", component: (size) => <Like size={size} /> },
  { id: "understand", component: (size) => <Understand size={size} /> },
  { id: "question", component: (size) => <Question size={size} /> },
  { id: "slow", component: (size) => <Slow size={size} /> },
];

export const room = "room#1";
