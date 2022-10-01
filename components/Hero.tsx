import { Cursor } from "./Cursor";
import { useTypewriter } from "../Hooks/useTypewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

export default function Hero() {
  const TypewriterHook = () => {
    const [text, count] = useTypewriter({
      words: [
        "Hi, Mi name is Leonel Mira",
        "Guy-who-loves-workout.tsx",
        "<ButLovesToCodeMore/>",
        "And scripting with AutoHotKey!",
      ],
      loop: 0,
      delaySpeed: 2000,
      // typeSpeed: 20,
      //onLoopDone: () => console.log("done from typewriter hook")
    });

    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        {/*todo pending change to <Image/> component*/}
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://avatars.githubusercontent.com/u/21028236?v=4"
          alt="github profile user image"
        />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            FrontEnd Engineer
          </h2>

          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButtons">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButtons">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButtons">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButtons">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TypewriterHook />
    </div>
  );
}
