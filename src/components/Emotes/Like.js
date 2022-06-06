import React from "react";

const Like = ({ size }) => {
  return (
    <div style={{ height: size, width: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        width={"100%"}
        height={"100%"}
      >
        <defs>
          <linearGradient
            id="a"
            x1={849.05}
            y1={75.44}
            x2={757.8}
            y2={75.44}
            gradientTransform="rotate(4.52 -1237.994 -4849.56)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.24} stopColor="#952f1f" />
            <stop offset={1} stopColor="#010101" />
          </linearGradient>
          <linearGradient
            id="e"
            x1={325.77}
            y1={35.37}
            x2={632.12}
            y2={221.49}
            gradientTransform="rotate(.35 -20666.058 -50969.729)"
            xlinkHref="#a"
          />
          <linearGradient
            id="c"
            x1={400.81}
            y1={12.92}
            x2={454.07}
            y2={136.97}
            gradientTransform="rotate(.35 -20666.058 -50969.729)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.11} stopColor="#e2c7c2" />
            <stop offset={0.26} stopColor="#c1867d" />
            <stop offset={0.38} stopColor="#a9574a" />
            <stop offset={0.47} stopColor="#9b3a2b" />
            <stop offset={0.51} stopColor="#952f1f" />
            <stop offset={1} stopColor="#010101" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={565.85}
            y1={-100.01}
            x2={632.72}
            y2={5.75}
            gradientTransform="rotate(.35 -20666.058 -50969.729)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.54} stopColor="#952f1f" />
            <stop offset={1} stopColor="#010101" />
          </linearGradient>
          <linearGradient
            id="f"
            x1={273.39}
            y1={-116.62}
            x2={340.99}
            y2={-9.71}
            gradientTransform="matrix(-.99 -.11 -.11 .99 534.73 173.46)"
            xlinkHref="#b"
          />
          <linearGradient
            id="g"
            x1={357.69}
            y1={-2108.74}
            x2={458.36}
            y2={-2108.74}
            gradientTransform="rotate(-179.65 402.606 -961.744)"
            xlinkHref="#c"
          />
          <radialGradient
            id="d"
            cx={586.55}
            cy={-15.92}
            r={336.38}
            gradientTransform="rotate(.35 -20666.058 -50969.729)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ed2224" />
            <stop offset={0.19} stopColor="#e02023" />
            <stop offset={0.53} stopColor="#bd1c1f" />
            <stop offset={1} stopColor="#861619" />
          </radialGradient>
        </defs>
        <g
          data-name="Layer 6"
          style={{
            isolation: "isolate",
          }}
        >
          <path
            d="M253.94 447.88c97.39-147.33 173.71-176 190.16-270.42 10.15-58.23-36.5-94.39-80.67-94.66s-103.78 23.83-107.81 93.49c-7.79-70.64-63.1-111.89-107.28-112.16s-87.72 37.29-81.19 111c8.45 95.46 91.24 124.22 186.79 272.75Z"
            style={{
              fill: "url(#d)",
            }}
          />
          <path
            d="M386.63 99c9 16.31 24 44.77 23.86 72.05-.42 69.21-46.18 116.63-84.42 163.69 53.76-51.73 91.52-82.61 106.5-142.47 11.27-45.13-13.45-79.14-45.94-93.27Z"
            style={{
              mixBlendMode: "screen",
              fill: "url(#a)",
            }}
          />
          <g
            style={{
              mixBlendMode: "screen",
            }}
          >
            <path
              d="M88.9 175.25c-3.05-37.67 5.56-66.18 20.12-85.37-22.64 16.31-38.12 47-34.16 91.82 8 90.79 86.78 118.14 177.65 259.38C224.37 370 96.55 269.58 88.9 175.25Z"
              style={{
                fill: "url(#e)",
              }}
            />
          </g>
          <path
            d="M116.48 172s-6.69 31.39 25.36 99.74c0 0-52.47-56.61-46.89-118.93Z"
            style={{
              mixBlendMode: "screen",
              fill: "url(#c)",
            }}
          />
          <path
            d="M377.66 89.18c-107.57-5.65-115.29 88.48-115.29 88.48s6.37-33.41 44.87-62.07c35.11-26.14 70.42-26.41 70.42-26.41Z"
            style={{
              mixBlendMode: "screen",
              fill: "url(#b)",
            }}
          />
          <path
            d="M146 73.61c93.64-5.2 104 101.47 104 101.47s-10.26-31.62-39.26-60.74C179.91 83.33 146 73.61 146 73.61Z"
            style={{
              mixBlendMode: "screen",
              fill: "url(#f)",
            }}
          />
          <path
            d="M402.44 188c-3.92 24.87-15 43.79-24.7 42.25s-14.42-22.92-10.5-47.79 15-43.8 24.7-42.26 14.41 22.89 10.5 47.8Z"
            style={{
              mixBlendMode: "screen",
              fill: "url(#g)",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Like;
