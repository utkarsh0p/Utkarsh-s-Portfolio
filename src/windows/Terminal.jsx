import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { techStack } from "@constants/index.js";
import { Check, Flag } from "lucide-react";
import { WindowControlls  } from "@components";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="terminal"/>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@utkarshsingh % </span>
          show tech stack
        </p>
        <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
        </div>

        <ul className="content">
            {techStack.map(({category, items, id})=>(
            <li key={id} className="flex items-ceter">
                <Check className="check" size={20} />
                <h3>{category}</h3>
                <ul>
                    {items.map((item ,i)=>(
                        <li key={i}>{item} {items.length - 1 !== i && ","}</li>
                    ))}
                </ul>
            </li>
            ))}
        </ul>

        <div className="footnote">
            <p>
                <Check size={20}/>
                5 out of 5 stacks loaded successfully (100%)
            </p>
            <p className="text-black" fill="black">
                <Flag size={15}/>
                Render time 5ms
            </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
