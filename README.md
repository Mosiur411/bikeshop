# User Guide for Bike Shop Application

## Features

### 1. **User Authentication**
- Users can register with **name, email, and password**.
- Users can **log in** with their email and password.
- JWT-based authentication for secure access.
- Logout functionality to clear user session.

### 2. **Product Browsing & Cart Management**
- Users can browse all available bikes.
- Search and filter products by **brand, name, category, and price**.
- Add products to the cart.
- Remove items from the cart.

### 3. **Order Management**
- Users can place an order from the cart.
- Users cannot order products that are out of stock.
- View past orders in the dashboard.
- Track order status (Pending, Processing, Shipped, Delivered).

### 4. **Payment Integration**
- Payments are processed via **SurjoPay**.
- Secure checkout with total price calculation.
- Users receive order confirmation upon successful payment.

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mosiur411/bikeshop.git
   cd bike-shop
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user.
- `POST /api/login` - Authenticate user and return JWT.
- `POST /api/logout` - Log out user.

### Products
- `GET /api/products` - Fetch all products.
- `GET /api/products/:id` - Fetch product details.

### Cart
- `POST /api/cart/add` - Add product to cart.
- `GET /api/cart` - Get user's cart items.
- `DELETE /api/cart/remove/:id` - Remove item from cart.

### Orders
- `POST /api/orders` - Create a new order.
- `GET /api/orders` - View user orders.
- `GET /api/orders/:id` - View specific order details.

### Payments
- `POST /api/payments` - Process payment using **Stripe**.

## Deployment
- Hosted on **Vercel/DigitalOcean** (update according to deployment method).
- Ensure **MongoDB connection string** is set in environment variables.

## Live Site
- [Bike Shop Store](https://bikeshopstore.vercel.app/)

Let me know if you need any modifications or additional details! 🚀

