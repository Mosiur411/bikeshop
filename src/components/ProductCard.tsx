import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/cartSlice';

interface Product {
  _id?: string;
  title?: string;
  author?: string;
  category?: {
    title:string
  };
  description?: string;
  image?: string;
  inStock?: boolean;
  price?: number;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ 
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      inStock:product?.inStock,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="relative group h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              Out of Stock
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 truncate">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-2">{product.author}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 text-sm">{product.category?.title}</span>
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
              ${product.inStock 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
          >
            Add to Cart
          </button>
          
         {/*  <Link 
            to={`/product/${product._id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}
