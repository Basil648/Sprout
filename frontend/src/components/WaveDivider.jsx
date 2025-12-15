export default function WaveDivider({ flip = false, color = "#F5EFE7" }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "70px",
          display: "block",
        }}
      >
        <path
          d="M985.66,29.66c-75.43,17.44-148.94,45.16-224.61,63.39C679.93,110.21,598.1,114,520.18,102.58,438.83,90.51,361.56,64.23,283.63,45.64,207,27.47,129.49,17.56,51.29,24.31,34.91,25.77,17.32,27.9,0,30.53V0H1200V27.35C1131.9,12.1,1058.58,17.4,985.66,29.66Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );
}
