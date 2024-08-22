import { useState } from "react";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);
  const [isActive3, setIsActive3] = useState(true);
  const [status, setStatus] = useState("No way!");

  const handleSwitch1 = () => {
    setIsActive1(!isActive1);
  };
  const handleSwitch2 = () => {
    setIsActive2(!isActive2);
  };
  const handleSwitch3 = () => {
    setIsActive3(!isActive3);
  };

  const changeText = () => {
    setStatus("Go!");
  };

  return (
    <>
      <header>
        <h1>Ready to Go</h1>
      </header>
      <main>
        <aside>
          <div>
            <button
              className={isActive1 ? "active" : "not-active"}
              onClick={!isActive1 ? handleSwitch1 : null}
              // onClick={() => {
              //   if (!isActive1) {
              //     handleSwitch1();
              //   } else {
              //     return;
              //   }
              // }}
            >
              On
            </button>
            <button
              className={isActive2 ? "active" : "not-active"}
              onClick={handleSwitch2}
            >
              On
            </button>
            <button
              className={isActive3 ? "active" : "not-active"}
              onClick={handleSwitch3}
            >
              On
            </button>
          </div>
          <div>
            <button
              className={isActive1 ? "not-active" : "active"}
              onClick={handleSwitch1}
            >
              Off
            </button>
            <button
              className={isActive2 ? "not-active" : "active"}
              onClick={handleSwitch2}
            >
              Off
            </button>
            <button
              className={isActive3 ? "not-active" : "active"}
              onClick={handleSwitch3}
            >
              Off
            </button>
          </div>
        </aside>
        <span
          className={
            isActive1 && isActive2 && isActive3 ? "statusOK" : "statusNO"
          }
        >
          {/* {isActive1 && isActive2 && isActive3 ? changeText : status} */}
        </span>
      </main>
    </>
  );
};

export default App;
