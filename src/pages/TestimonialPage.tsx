import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Lover",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Amazing collection of books! The delivery was quick and the books were in perfect condition.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Found all my academic books here. Great prices and excellent customer service!",
    rating: 4
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Teacher",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The variety of educational materials is impressive. recommended  educators.",
    rating: 5
  },
  {
    id: 4,
    name: "David Brown",
    role: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "Been shopping here for years. Never disappointed with the service and quality.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "Great selection of children's books. My kids love everything we've bought here!",
    rating: 4
  }
];

export default function TestimonialPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    }, 
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-gray-200 py-5 mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our valued customers about their experiences shopping with us.
          </p>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="embla__slide flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <FaQuoteLeft className="text-blue-500 mb-2" size={20} />
                      <p className="text-gray-700">{testimonial.content}</p>
                    </div>

                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${
                            index < testimonial.rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <FaChevronLeft className="text-gray-600" size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <FaChevronRight className="text-gray-600" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
