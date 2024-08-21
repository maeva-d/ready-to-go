import { useState } from "react";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [status, setStatus] = useState("No way!");

  const handleSwitch = () => {
    setIsActive(!isActive);
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
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              On
            </button>
            <button
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              On
            </button>
            <button
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              On
            </button>
          </div>
          <div>
            <button
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              Off
            </button>
            <button
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              Off
            </button>
            <button
              className={isActive ? "active" : "not-active"}
              onClick={handleSwitch}
            >
              Off
            </button>
          </div>
        </aside>
        <button>
          <span>{status}</span>
        </button>
      </main>
    </>
  );
};

export default App;
