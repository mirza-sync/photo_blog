import Image from "next/image";

type SliderProps = {
  slides: { image: string }[];
};

const Slider = ({ slides }: SliderProps) => {
  return (
    <div id="gallery">
      <h2>Gallery</h2>
      {slides.map((slide, index) => {
        return (
          <Image
            key={index}
            src={slide.image}
            alt=""
            width={1440}
            height={600}
          />
        );
      })}
    </div>
  );
};

export default Slider;
