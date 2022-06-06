import React from "react";

const Question = ({ size }) => {
  return (
    <div style={{ height: size, width: size }}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 512 512"
      >
        <path
          d="M176.44,449.45q-10-9.63-9.95-26.95,0-16,9.95-25.34t26.63-9.31q16.67,0,26,9.31t9.31,25.34q0,17.33-9.31,26.95t-26,9.62Q186.38,459.07,176.44,449.45Zm18-149.82q-6.74-19.56-6.73-35l.64-6.41q3.19-19.89,14.44-34t31.11-30.8a320.34,320.34,0,0,0,26.31-24.38,90.67,90.67,0,0,0,16.36-25.34q6.74-15.08,6.74-36.26,0-18-5.45-29.83T260.17,65.76q-17.33,0-19.89,25.66-1.29,16-8.34,27.59t-26.31,11.55q-14.12,0-21.49-7.7t-7.38-19.25q0-24.37,26.63-37.53T265.3,52.93q36.58,0,58.39,15.72t21.82,45.87a135.26,135.26,0,0,1-1.29,15.4,95.92,95.92,0,0,1-13.47,34,132.3,132.3,0,0,1-19.89,24.38q-10.28,9.63-30.8,26.95-29.52,22.45-42.35,39.46a84,84,0,0,0-16,39.46,110.18,110.18,0,0,0-.64,14.11A135.78,135.78,0,0,0,223,330.75c.42,1.72-.87,3.21-3.85,4.49s-4.93,1.07-5.78-.64A117.43,117.43,0,0,1,194.4,299.63Z"
          style={{
            fill: "#ef4136",
          }}
        />
      </svg>
    </div>
  );
};

export default Question;
