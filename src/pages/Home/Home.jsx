import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { GiSnake } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiAmazongames } from "react-icons/si";
import { Link } from "react-router-dom";
import weldoneAudio from "../../assets/audio/weldone.wav";
import ArrowKeyButtons from "../../components/ArrowButtons/ArrowButtons";
import SnackGame from "../../components/SnakeGame/SnakeGame";
const Home = () => {
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [wellDone, setWellDone] = useState(false);
  console.log(eatenApples);

  const playAudio = () => {
    const audio = new Audio(weldoneAudio);
    audio.play();
  };
  useEffect(() => {
    if (eatenApples === 0) {
      playAudio();
      setPlayGame(!playGame);
      setWellDone(true);
    }
  }, [eatenApples]);
  const snakeFood = (
    <>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-a2 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-a2"></span>
      </span>
    </>
  );
  const repeatedSnakeFood = Array(eatenApples).fill(snakeFood);

  return (
    <>
      <Helmet>
        <title>Home | Mahamudul Hasan</title>
      </Helmet>
      <div className="w-4/5 mx-auto flex justify-center items-center h-[calc(100vh-6rem)] gap-10">
        <div className="">
          <div className="text-[#E5E9F0]">
            <p className="text-lg ">Hi all. I am</p>
            <h1 className="text-6xl">Mahamudul Hasan</h1>
            <h3 className="text-s3 text-3xl">
              {"<"}Web Application Developer{"/>"}
            </h3>
          </div>
          <div className="mt-20">
            <p className="text-s1">{"// complete the game to continue"}</p>
            <p className="text-s1">
              {"// you can also see it on my Github page"}
            </p>
            <p>
              <span className="text-s3">const</span>{" "}
              <span className="text-a2">githubLink</span>{" "}
              <span className="text-white"> = </span>
              <span className="text-a3">
                “
                <Link className="underline ">
                  https://github.com/example/url
                </Link>
                ”
              </span>
            </p>
          </div>
        </div>
        <div className="relative h-full flex justify-start items-center">
          <div
            className="z-50 rounded-lg border-2 border-[#010e0e] px-8 py-7 flex justify-center items-center gap-2"
            style={{
              width: "500px",
              height: "475px",
              background:
                "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
              boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
              backdropFilter: "blur(32px)",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(1, 22, 39, 0.84)",
                boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
              }}
              className="w-3/5 h-full rounded-md flex justify-center items-center "
            >
              {playGame ? (
                <SnackGame
                  isGameOver={setIsGameOver}
                  setPlayGame={setPlayGame}
                  eatenApples={eatenApples}
                  setEatenApples={setEatenApples}
                />
              ) : (
                <div
                  data-aos="zoom-in"
                  className="flex flex-col text-7xl text-a2"
                >
                  <GiSnake />
                  {/* <RiGamepadFill /> */}
                  <SiAmazongames />
                </div>
              )}
              {wellDone && (
                <div
                  data-aos="zoom-in"
                  style={{ background: "rgba(1, 22, 39, 0.84)" }}
                  className="absolute left-9 right-[13.2rem] bottom-36 text-center text-a2 text-2xl uppercase py-2"
                >
                  well-done!
                </div>
              )}
              {/* play game button */}
              {isGameOver ? (
                <button
                  onClick={() => {
                    setPlayGame(!playGame);
                    setEatenApples(10);
                    setWellDone(false);
                  }}
                  className="absolute bottom-16 text-s1 font-semibold px-7 py-3 rounded-lg outline-none"
                >
                  Double Click Play Again
                </button>
              ) : (
                <button
                  data-aos="zoom-in"
                  disabled={playGame}
                  onClick={() => {
                    setPlayGame(!playGame),
                      setWellDone(false),
                      setEatenApples(10);
                  }}
                  className="absolute bottom-16 bg-a1 text-p1 font-semibold px-7 py-3 rounded-lg outline-none"
                >
                  play-game
                </button>
              )}
            </div>
            {/* arrow key button  */}
            <div className="w-2/5 h-full rounded-lg">
              <div
                style={{ background: "rgba(1, 20, 35, 0.19)" }}
                className="p-2 rounded-lg"
              >
                <p className="text-white">
                  {`//use keyboard`} <br /> {`//arrow to play`}
                </p>
                <div className="mt-5">
                  <ArrowKeyButtons />
                </div>
              </div>
              {/* snake food section  */}
              <div className="mt-8 p-2">
                <p className="text-white">{`//food left`}</p>
                <div className="mt-4 grid grid-cols-5 gap-4  justify-evenly items-center">
                  {repeatedSnakeFood}
                </div>
              </div>
              <button
                onClick={() => {
                  setPlayGame(false), setEatenApples(10);
                }}
                className="outline-none absolute bottom-10 right-5 border border-white rounded-xl text-white  px-6 py-3"
              >
                skip
              </button>
            </div>
            <span className="absolute top-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full">
              <RiCloseCircleFill />
            </span>
            <span className="absolute top-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
              <RiCloseCircleFill />
            </span>
            <span className="absolute bottom-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full">
              <RiCloseCircleFill />
            </span>
            <span className="absolute bottom-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
              <RiCloseCircleFill />
            </span>
          </div>
          <div className="absolute w-96 h-80 bg-a2 top-[20%] left-[10%] opacity-40 rotate-[20deg] blur-[87px] "></div>
          <div className="absolute bg-a2 w-40 rounded-3xl h-64 top-5 -left-5 rotate-[-35deg] opacity-40 blur-[87px] "></div>
          <div className="absolute w-80 h-[450px] bg-s3 bottom-0 right-20 rotate-[75deg] blur-[85px]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
