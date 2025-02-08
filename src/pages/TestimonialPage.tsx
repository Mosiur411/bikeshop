import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Motorbike Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    content: "দারুণ বাইকের কালেকশন! দামও সাশ্রয়ী, এবং সার্ভিস ছিল একদম সময়মতো।",
    rating: 5
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "Daily Commuter",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    content: "প্রতিদিন অফিস যাওয়ার জন্য এখান থেকে বাইক নিয়েছি, দুর্দান্ত পারফরম্যান্স!",
    rating: 4
  },
  {
    id: 3,
    name: "Fahim Rahman",
    role: "Bike Lover",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    content: "সেরা বাইক শপ! নতুন মডেল ও এক্সেসরিজের বিশাল কালেকশন আছে।",
    rating: 5
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Touring Rider",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    content: "লং রাইডের জন্য এখান থেকে বাইক কিনেছি, এক কথায় অসাধারণ অভিজ্ঞতা!",
    rating: 5
  },
  {
    id: 5,
    name: "Hasan Ali",
    role: "Bike Mechanic",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    content: "এখানকার বাইক পার্টসের কোয়ালিটি খুব ভালো। নিয়মিত এখান থেকে পার্টস নেই।",
    rating: 4
  }
];


export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 3000 })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Customer Testimonials</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Hear from our valued customers about their experiences shopping with us.
        </p>
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map(({ id, name, role, avatar, content, rating }) => (
                <div key={id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                    <div className="flex items-center mb-4">
                      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-600">{role}</p>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-blue-500 mb-2" size={20} />
                    <p className="text-gray-700 mb-4">{content}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft className="text-gray-600" size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronRight className="text-gray-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}