import React from 'react'
import logo from './assets/logo.png'
import btn from './assets/Vector.png'
import sect from './assets/intersect.png'
import logo01 from './assets/pngwing 4.png'
import logo02 from './assets/pngwing 6.png'
import logo03 from './assets/pngwing3.png'
import logo04 from './assets/pngwing 7.png'
import logo05 from './assets/Vegetable salad.png'
import logo06 from './assets/Egg salad.png'
import logo07 from './assets/Fattoush salad.png'

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>

          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Menu</a></li>
              <li><a href="#" className="hover:text-green-600">Services</a></li>
              <li><a href="#" className="hover:text-green-600">Offers</a></li>
            </ul>

            <button className="flex gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
              <img src={btn} alt="Contact Icon" />
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-[48px] font-bold leading-tight">
              Dive into Delights <br />
              Of Delectable <span className="text-green-500">Food</span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
                Order Now
              </button>
              <button className="flex items-center gap-2 text-gray-800 hover:text-green-500 transition">
                <span>Watch Video</span>
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                  ▶
                </div>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
            <div className="w-[300px] h-[300px] bg-green-200 rounded-full absolute top-0 md:top-[-40px] z-0"></div>
            <img src={sect} alt="Delicious Food" className="relative z-10 w-[250px] h-auto rounded-full object-cover" />
            <span className="absolute top-2 left-4 bg-white text-red-500 px-2 py-1 rounded-full text-sm font-medium shadow z-20">
              Hot spicy Food 🌶
            </span>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-10 bg-white text-center">
        <h3 className="text-red-500 text-sm mb-2">Customer Favorites</h3>
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow rounded-xl p-6 w-40">
            <img src={logo01} alt="Main Dish" className="w-12 h-12 mx-auto mb-3" />
            <h4 className="font-semibold">Main Dish</h4>
            <p className="text-gray-500 text-sm">86 dishes</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 w-40">
            <img src={logo03} alt="Breakfast" className="w-12 h-12 mx-auto mb-3" />
            <h4 className="font-semibold">Break Fast</h4>
            <p className="text-gray-500 text-sm">12 break fast</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 w-40">
            <img src={logo04} alt="Dessert" className="w-12 h-12 mx-auto mb-3" />
            <h4 className="font-semibold">Dessert</h4>
            <p className="text-gray-500 text-sm">48 dessert</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 w-40">
            <img src={logo02} alt="Browse All" className="w-12 h-12 mx-auto mb-3" />
            <h4 className="font-semibold">Browse All</h4>
            <p className="text-gray-500 text-sm">255 items</p>
          </div>
        </div>
      </section>

      {/* Standout Dishes */}
      <section className="py-10 bg-gray-50 text-center">
        <h3 className="text-red-500 text-sm mb-2">Special Dishes</h3>
        <h2 className="text-3xl font-bold mb-8">Standout Dishes From Our Menu</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-xl shadow p-4 w-64 text-left">
            <img src={logo05} alt="Fattoush Salad" className="w-full h-40 object-cover rounded-lg mb-3" />
            <h4 className="font-semibold">Fattoush Salad</h4>
            <p className="text-sm text-gray-500">Description of the item</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-semibold">$24.00</span>
              <span className="text-yellow-500">⭐ 4.9</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 w-64 text-left">
            <img src={logo06} alt="Vegetable Salad" className="w-full h-40 object-cover rounded-lg mb-3" />
            <h4 className="font-semibold">Vegetable Salad</h4>
            <p className="text-sm text-gray-500">Description of the item</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-semibold">$26.00</span>
              <span className="text-yellow-500">⭐ 4.6</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 w-64 text-left">
            <img src={logo07} alt="Egg Vegi Salad" className="w-full h-40 object-cover rounded-lg mb-3" />
            <h4 className="font-semibold">Egg Vegi Salad</h4>
            <p className="text-sm text-gray-500">Description of the item</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-semibold">$23.00</span>
              <span className="text-yellow-500">⭐ 4.5</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
