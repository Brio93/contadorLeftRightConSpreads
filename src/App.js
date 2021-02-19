import React, { useState } from "react";
import "./styles.css";

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  //Forma corta left
  const handleClickLeft = () =>
    setClicks({
      ...clicks,
      left: clicks.left + 1
    });

  //Forma corta right
  const handleClickRight = () =>
    setClicks({
      ...clicks,
      right: clicks.right + 1
    });

  //forma mas larga
  // const handleClickRight = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1
  //     // left: clicks.left
  //   };
  //   setClicks(newClicks);
  // };

  return (
    <div>
      {clicks.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {clicks.right}
    </div>
  );
};
export default App;
