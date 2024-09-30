import { blue } from '@mui/material/colors';

const Avatar: React.FC<{ src: string }> = ({ src }) => {
  return (
    <>
      {/* <svg width="40" height="40" viewBox="0 0 100 100"> */}
      <rect x="-20" y="-20" rx="20" ry="20" width="40" height="40" fill="none" stroke={blue[900]} stroke-width="8" />
      <image
        href="https://avatar.iran.liara.run/public/boy"
        x="-20"
        y="-20"
        width="40"
        height="40"
        preserveAspectRatio="xMidYMid meet"
      />
      {/* </svg> */}
    </>
  );
};

export default Avatar;
