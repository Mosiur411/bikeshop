import { createBrowserRouter } from 'react-router-dom';
import App from "@/App";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";
import CartPage from '@/pages/CartPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ProfilePage from '@/pages/ProfilePage';
import AllProductPage from '@/pages/AllProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/all-products',
        element: <AllProductPage />
      },
      {
        path: '/product/:id',
        element: <ProductDetailsPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/login',
        element: <LoginPage />,
       
      },
      {
        path: '/register',
        element: <RegisterPage />,
       
      },
      {
        path: '/checkout',
        element: <PrivateRoutes />,
        children: [
          {
            index: true,
            element: <CheckoutPage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;
