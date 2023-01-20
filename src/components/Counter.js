import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count=>count+1);
    setCount(count=>count+1);
    console.log(count);
  }

  return <div id="button-div">
            <button onClick={increment}>I have been clicked {count} times</button>
          </div>;

}

export default Counter;
