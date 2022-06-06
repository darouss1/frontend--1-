import React, { useEffect, useRef, useState } from "react";
import anime from "../anime";
import { emotesList } from "../config";

const FlyingEmoji = ({ key, xPosition, reactId, size, screenHeight }) => {
  const [show, setShow] = useState(true);
  const yRef = useRef();
  const xRef = useRef();
  useEffect(() => {
    //Y-axis motion
    anime({
      targets: yRef?.current,
      opacity: [1, 0],
      translateY: -screenHeight * 1.5,
      duration: Math.random() * 500 + 2000,
      easing: "easeInQuad",
    });

    // X-axis motion
    const xAmplitude = Math.random() * 80 - 40;
    anime({
      targets: xRef?.current,
      translateX: [-xAmplitude, xAmplitude],
      duration: 900,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  }, [screenHeight]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  if (!show) {
    return null;
  }
  return (
    <div
      ref={yRef}
      key={key}
      className="flying-emote"
      style={{ bottom: -size }}
    >
      <div ref={xRef} className="box" style={{ left: xPosition }}>
        {emotesList
          .find((r) => r.id === reactId)
          .component(size * (screenHeight / 400))}
      </div>
    </div>
  );
};

export default FlyingEmoji;
