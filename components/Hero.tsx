import { Cursor } from "./Cursor";
import { useTypewriter } from "../Hooks/useTypewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const TypewriterHook = () => {
    const [text] = useTypewriter({
      words: [
        `Hi, Mi name is ${pageInfo?.name}`,
        "Guy-who-loves-workout.tsx",
        "<ButLovesToCodeMore/>",
        "And automate processes!",
      ],
      loop: 0,
      delaySpeed: 2000,
    });
    return (
      <div
        className="hero-container h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-25 
      ms:pt-20 mx:pt-32 sm:mt-[-150px] lg:mt-0 lg:pt-24 xl:pt-28"
      >
        <BackgroundCircles />
        <Image
          width="200"
          height="200"
          className="relative rounded-full h-32 w-32  mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          alt="github profile user image"
        />

        <div className="z-30">
          <h3
            className="text-xs mx:text-lg uppercase text-gray-500 pb-2 tracking-[15px]
          mx:px-20"
          >
            {pageInfo?.role}
          </h3>

          <h1
            className="font-semibold px-10 z-30
            text-xl
          mx:text-3xl lg:text-6xl "
          >
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5 z-30">
            <Link href="#about">
              <button className="heroButtons ms:text-xs mx:text-lg">
                About
              </button>
            </Link>
            <Link href="#experience">
              <button className="heroButtons ms:text-xs mx:text-lg">
                Experience
              </button>
            </Link>
            <Link href="#skills">
              <button className="heroButtons ms:text-xs mx:text-lg">
                Skills
              </button>
            </Link>
            <Link href="#projects">
              <button className="heroButtons ms:text-xs mx:text-lg">
                Projects
              </button>
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
