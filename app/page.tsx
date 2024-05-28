import About from "./components/About";
import Airways from "./components/Airways";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
    <div className="font-nunito font-semibold text-dspDarkGray">
      <Hero />
      <About />
      <Service />
      <Airways />
      <Facilities />
      <Testimonial />
      <Gallery />
    </div>
    </>
  );
}
