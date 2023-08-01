import { useAppContext } from "../../Context";

export default function BackButton({
  width = 24,
  height = 24,
  
})

 {
  const {state} = useAppContext()
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke= {state.mode == 'dark' ? '#fff' :'#000'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
