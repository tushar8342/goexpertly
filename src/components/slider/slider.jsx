import React, { useEffect, useState } from "react";

import firstslidelabel from "../../Assets/sliderImage/firstslidelabel.jpg";
import secondslidelabe from "../../Assets/sliderImage/secondslidelabel.jpg";
import thirdslidelabel from "../../Assets/sliderImage/thirdslidelabel.jpg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
export default function Slider() {
  // const carouselImages = [firstslidelabel, secondslidelabe, thirdslidelabel];
  const carouselImages = [
    {
      src: firstslidelabel,
      label: "First slide label",
      text: "The community thrives when learners share, not just stare",
    },
    {
      src: secondslidelabe,
      label: "Second slide label",
      text: "In the virtual classroom, every learner has a front-row seat",
    },
    {
      src: thirdslidelabel,
      label: "Third slide label",
      text: "Click, learn, grow: the mantra of the online training era",
    },
  ];

  const [carouselItem, setCarouselItem] = useState(0);
  const numCarouselItems = carouselImages.length;
  // const changeToPrevious = () => {
  //   setCarouselItem(Math.max(carouselItem - 1, 0));
  // };
  // const changeToNext = () => {
  //   setCarouselItem(Math.min(carouselItem + 1, numCarouselItems - 1));
  // };
  const changeToPrevious = () => {
    setCarouselItem((carouselItem - 1 + numCarouselItems) % numCarouselItems);
  };

  const changeToNext = () => {
    setCarouselItem((carouselItem + 1) % numCarouselItems);
  };
  const changeToGivenItem = (i) => {
    setCarouselItem(i);
  };

  const indicatorClasses = (i) =>
    `w-8 h-1.5 transition duration-500 ${
      carouselItem === i ? "bg-white" : "bg-gray-500  scale-75"
    }`;
  const imagesContainerStyle = { width: `${numCarouselItems}00%` };
  const imgContainerstyle = (index) =>
    index === 0
      ? {
          width: `${100 / numCarouselItems}%`,
          marginLeft: `-${(carouselItem * 100) / numCarouselItems}%`,
        }
      : {
          width: `${100 / numCarouselItems}%`,
        };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCarouselItem((carouselItem) => (carouselItem + 1) % numCarouselItems);
    }, 4000);
    return () => window.clearInterval(id);
  }, [numCarouselItems]);
  return (
    <>
      <div className="relative my-4 h-[65vh] w-[90%] overflow-hidden m-auto">
        <button
          onClick={changeToPrevious}
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-4 border-0 text-center font-bold opacity-30 hover:opacity-60 z-10"
        >
          <span className="text-white text-4xl">
            <IoIosArrowDropleftCircle />
          </span>
        </button>
        <button
          onClick={changeToNext}
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-4 border-0 text-center font-bold opacity-30 hover:opacity-60 z-10"
        >
          <span className="text-white text-4xl">
            <IoIosArrowDroprightCircle />
          </span>
        </button>

        <div className="z-10 absolute left-0 right-0 bottom-0 flex justify-center gap-4 p-0 mb-4">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              className={indicatorClasses(i)}
              onClick={() => changeToGivenItem(i)}
            ></button>
          ))}
        </div>

        <div className="flex relative h-full" style={imagesContainerStyle}>
          {carouselImages.map((carouselImg, i) => (
            <div
              key={i}
              className="relative h-full transition-all"
              style={imgContainerstyle(i)}
            >
              <img
                src={carouselImg.src}
                className="block w-full h-full object-cover "
                alt="goexpertly"
              />
              <div className="absolute  inset-0 flex items-center justify-center text-white p-4">
                {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{carouselImg.text}</p>
                 */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  {carouselImg.text}
                </p>
              </div>
              {/* <div className="absolute top-[90%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center bg-white shadow-md rounded-lg hidden md:inline-block lg:inline-block xl:inline-block">
                <p className="text-[20px] font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text inline-block px-2">
                  {carouselImg.text}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
