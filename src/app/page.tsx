import { SliderData } from "@/data/SliderData";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";

export default function Home() {
  return (
    <div>
      <Hero
        heading={"Next Photography"}
        message={"Envisioning the next level photography"}
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
