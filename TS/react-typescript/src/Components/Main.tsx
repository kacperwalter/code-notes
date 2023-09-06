import { FC } from "react";
import { useState } from "react";

interface MainProps {
  first?: boolean;
  second?: string;
}

const Main: FC<MainProps> = ({ first, second }) => {
  const [value, setValue] = useState(0)

  const someHelperFunction = (event:Object) => {
    setValue(event)
  }

  return (
    <>
      <div>{first}</div>
      <div>{second}</div>
    </>
  )
}

export default Main