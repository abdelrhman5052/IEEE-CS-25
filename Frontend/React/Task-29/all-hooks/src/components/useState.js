import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [state, updater]
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
