import { FC  } from "react";

interface MainProps {
  first: boolean;
  second: string;
}

const Main:FC<MainProps> = (props) => {
  return (
    <div>{props.second}</div>
  )
}

export default Main