import React, { useState } from "react";

// With memo
const Child = ({ name }: { name: string }) => {
  console.log("Child rendered");
  return <div>Hello, {name}</div>;
};

// Without memo
// const Child = (props:{name:string}) => {
//   const {name} = props;
//   console.log("Child rendered");
//   return <div>Hello, {name}</div>;
// };

const MemoizedChild = React.memo(Child);

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {<MemoizedChild name="Ram" />}
    </>
  );
}