import collection1 from '../assets/bookCollection1.png'
import collection2 from '../assets/bookCollection4.png'
import collection3 from '../assets/bookCollection3.png'
import { Link } from 'react-router-dom';

interface Collection {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 1,
    image: collection1,
    title: "Academic Books",
    description: "Find your essential academic materials",
    link: "/collections/academic"
  },
  {
    id: 2,
    image: collection2,
    title: "Story Books",
    description: "Discover amazing stories",
    link: "/collections/story"
  },
  {
    id: 3,
    image: collection3,
    title: "Stationery",
    description: "Quality stationery supplies",
    link: "/collections/stationery"
  }
];

export default function CollectionCard() {
  return (
    <section className="py-12 bg-gray-100">
    {/*   <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link 
              to={collection.link}
              key={collection.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">View Collection</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </section>
  );
}
