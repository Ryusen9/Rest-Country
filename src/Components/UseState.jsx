import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
    return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-3">
      <p className="text-3xl">Count: {count}</p>
      <button className="bg-emerald-500 p-3 rounded-xl" onClick={() => setCount(count + 1)}>Add</button>
      <button className="bg-emerald-500 p-3 rounded-xl" onClick={() => setCount(count - 1)}>Reduce</button>
    </div>
  );
};

export default UseState;
