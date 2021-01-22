import logo from "./logo.svg";
import "./App.css";
import Bubble from "./Bubble";
import { AiOutlineInfoCircle, AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1 className="primary-color">20AID</h1>
      </header>
      <main>
        <Bubble />
      </main>
      <footer>
        <AiOutlineInfoCircle />
        <AiFillGithub />
      </footer>
    </div>
  );
}

export default App;
