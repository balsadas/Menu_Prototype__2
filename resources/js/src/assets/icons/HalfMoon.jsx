export default function HalfMoon({ width = 16, height = 16, color = "white" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7.67107C2 11.1664 4.83356 14 8.32894 14C10.8139 14 12.9644 12.5679 14 10.4839C8.32894 10.4839 5.51608 7.67107 5.51608 2C3.43214 3.03563 2 5.1861 2 7.67107Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
