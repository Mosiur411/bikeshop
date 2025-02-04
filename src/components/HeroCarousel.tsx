import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"

const SLIDER_IMAGES = [slider1, slider2, slider3] as const;

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-full mx-auto overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {SLIDER_IMAGES.map((src, index) => (
            <div
              className="min-w-full flex-shrink-0 h-[450px] flex justify-center items-center"
              key={index}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={scrollPrev}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={scrollNext}
      >
        &#8594;
      </button>
    </div>
  );
};

export default EmblaCarousel;
