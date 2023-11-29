import React, { useRef } from "react";
import { Carousel } from "antd";
import LinkedInButton from "../linkedInButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import "./index.less";
import SliderItems from "@/pages/profilePage/slider";


const LinedInCarousel = ({
  width,
  height,
  autoplay,
  showDots,
  dotPosition,
  draggable,
  pauseOnHover,
  pauseOnDotsHover,
  childers,
}) => {
  const ref = useRef();
  const carouselStyles = {
    height: `${height ? `${height}px` : `50px`}`,
    width: `${width ? `${width}` : `fit-content`}`,
  };
  return (
    <div className="linkedIn-carousel" style={carouselStyles}>
      <Carousel
        autoplay={autoplay}
        dots={showDots}
        dotPosition={dotPosition}
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        pauseOnDotsHover={pauseOnDotsHover}
        ref={ref}
      >
        <SliderItems />
      </Carousel>
      <div className="carouselbuttons">
        <LinkedInButton
          height={"32"}
          width={'35'}
          icon={<RiArrowLeftSLine />}
          className={"carouselLeftButton"}
          onclick={() => {
            ref.current.prev();
          }}
        />
        <LinkedInButton
          height={"32"}
          width={'35'}
          icon={<RiArrowRightSLine />}
          className={"carouselRightButton"}
          onclick={() => {
            ref.current.next();
          }}
        />
      </div>
    </div>
  );
};

export default LinedInCarousel;
