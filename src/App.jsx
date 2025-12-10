import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Navbar, Dock } from "@components";
import { Terminal } from "@windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <>
      <Navbar />
      <Dock />
      <Terminal />
    </>
  );
}

export default App;
