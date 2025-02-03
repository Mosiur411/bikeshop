export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold">[Your Bookshop Name]</span>, your one-stop destination for books that inspire, educate, and entertain! We believe in the power of stories and knowledge, and our mission is to make reading accessible to everyone.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At <span className="font-semibold">[Your Bookshop Name]</span>, we are passionate about books and committed to fostering a love for reading. Whether you are a student, a book enthusiast, or someone looking for the perfect gift, we provide a vast selection of books across various genres at affordable prices.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>📚 A wide collection of books, including fiction, non-fiction, academic, and self-help.</li>
          <li>📦 Fast and reliable delivery to ensure your books reach you on time.</li>
          <li>💳 Secure payment options, including Stripe, for a smooth shopping experience.</li>
          <li>🎁 Special discounts and exclusive deals for book lovers.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>✅ <span className="font-semibold">Quality Selection</span> – Carefully curated books from renowned authors and publishers.</li>
          <li>✅ <span className="font-semibold">Customer Satisfaction</span> – Our friendly support team ensures you have a great shopping experience.</li>
          <li>✅ <span className="font-semibold">Affordable Prices</span> – Great books at competitive prices with special promotions.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Join Our Reading Community</h2>
        <p className="text-gray-600 mb-6">
          We are more than just an online bookstore; we are a community of passionate readers. Follow us on social media, sign up for our newsletter, and stay updated with the latest book releases, reviews, and reading tips.
        </p>
        
        <p className="text-center font-semibold text-gray-700">Happy Reading! 📖💙</p>
      </div>
    </div>
  );
}
