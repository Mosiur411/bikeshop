export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          About <span className="text-blue-600">Bike Store</span>
        </h1>

        <p className="text-gray-600 mb-4 text-center">
          Welcome to <span className="font-semibold">Bike Store</span>, your ultimate destination for high-quality bikes, accessories, and expert service. Whether you're a professional cyclist, a daily commuter, or an adventure seeker, we have the perfect ride for you!
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At <span className="font-semibold">Bike Store</span>, we are dedicated to promoting a healthier and more eco-friendly lifestyle through cycling. Our mission is to provide top-notch bikes and accessories that cater to all riding styles while ensuring affordability and quality.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>🚴‍♂️ A wide range of road bikes, mountain bikes, and e-bikes.</li>
          <li>🔧 Professional bike servicing and repairs by skilled mechanics.</li>
          <li>📦 Fast and reliable shipping for online orders.</li>
          <li>💳 Secure payment options, including Stripe and PayPal.</li>
          <li>🎁 Exclusive discounts and special offers for cycling enthusiasts.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>✅ <span className="font-semibold">Premium Quality</span> – We partner with top brands for the best cycling experience.</li>
          <li>✅ <span className="font-semibold">Expert Guidance</span> – Our knowledgeable team helps you choose the right bike.</li>
          <li>✅ <span className="font-semibold">Customer Support</span> – We prioritize customer satisfaction with responsive service.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Join Our Cycling Community</h2>
        <p className="text-gray-600 mb-6">
          Become part of our passionate cycling community! Follow us on social media, subscribe to our newsletter, and stay updated on new arrivals, events, and cycling tips.
        </p>

        <p className="text-center font-semibold text-gray-700">Ride with us and explore the world on two wheels! 🚴‍♂️💙</p>
      </div>
    </div>
  );
}
