import React from "react";
//import main from "../../public/Resources/nurture.mp"

const Page = () => {
  return (
    <>
      {/* Hero Section: Image Side with Simple Header */}
      <div className="relative overflow-hidden bg-white dark:text-gray-100  dark:bg-gray-900">
        {/* Main Header */}
        <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8"></div>
          {/* END Main Header Content */}
        </header>
        {/* END Main Header */}

        {/* Hero Content */}
        <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
              <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50">
                Come check this
              </div>
              <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                Women Sustainable{" "}
                <span className="text-[#ffa3a3] drop-shadow-md ">
                  Wardrobe collection
                </span>
              </h1>
              <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                "Discover your perfect style with our amazing collections of
                casuals, formals, partywear, festives, and everything in
                between!"
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a
                  href="/about"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-[#ffa3a3] bg-[#ffa3a3] text-white hover:text-white hover:bg-teal-600 hover:border-teal-600 focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700 "
                >
                  <span>more about us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-200 rounded-full -mt-16 -ml-20 dark:border-teal-900" />
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-100 rounded-full -mt-20 -ml-14 dark:border-[#ffe7e7]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-200 rounded-full -mb-16 -mr-20 dark:border-[#ffe7e7]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-100 rounded-full -mb-20 -mr-14 dark:border-teal-950" />
              <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800" />
              <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-[#ffa3a3] bg-opacity-75 shadow-inner dark:bg-teal-900 dark:bg-opacity-75" />
              <img
                src="https://images.pexels.com/photos/7037125/pexels-photo-7037125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="relative rounded-lg mx-auto shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Image Side with Simple Header */}

      {/* Product List Section: Categories Grid */}
      <div className="bg-[#ffe7e7] dark:text-gray-100 dark:bg-gray-900  ">
        <h1 className="flex justify-centre mx-[400px] pt-[80px]  bg-[#ffe7e7] font-bold text-5xl text-[#fd9c9c]">
          {" "}
          Categories we offer-
        </h1>
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 bg-[#ffe7e7] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/17548445/pexels-photo-17548445/free-photo-of-young-woman-in-a-casual-outfit-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c] dark:bg-gray-900/90 dark:border-gray-800">
                  Fusion wear
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/13754095/pexels-photo-13754095.png?auto=compress&cs=tinysrgb&w=600"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c] dark:bg-gray-900/90 dark:border-gray-800">
                  Indian
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/10600615/pexels-photo-10600615.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c] dark:bg-gray-900/90 dark:border-gray-800">
                  Footwear
                </div>
              </div>
            </a>
            <a
              href="#"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c]  dark:bg-gray-900/90 dark:border-gray-800">
                  Western
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1204459/pexels-photo-1204459.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c] dark:bg-gray-900/90 dark:border-gray-800">
                  handbags
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/7874277/pexels-photo-7874277.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-[#fd9c9c] dark:bg-gray-900/90 dark:border-gray-800">
                  Acessories
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}

      <section class="text-gray-600 body-font bg-white">
        <h1 className="flex justify-center text-5xl pt-[15px] font-bold text-[#4f7a6a]"> Our Collection</h1>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/15408499/pexels-photo-15408499/free-photo-of-model-in-brand-blouse.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">WESTERN WEAR</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">No Nasties</h2>
          <p class="mt-1">Rs.2400  produces 40% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">INDIAN WEAR</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">GrassRoot By Anita Dongre</h2>
          <p class="mt-1">Rs.3200  produces 40% less CO2e </p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/17435382/pexels-photo-17435382/free-photo-of-bag-flip-flops-and-shirt-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BAGS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Urth</h2>
          <p class="mt-1">Rs.1200 produces 70% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/4354694/pexels-photo-4354694.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">MAKEUP PROBUCTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Ilana Organic</h2>
          <p class="mt-1">Rs.1700 produces 70% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/17410095/pexels-photo-17410095/free-photo-of-crouching-model-holding-on-to-the-fence.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">HEELS AND FOOT WEAR</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Volair</h2>
          <p class="mt-1">Rs.3300 produces 65.75% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/3954166/pexels-photo-3954166.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">FUSION WEAR</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Bhoomi</h2>
          <p class="mt-1">Rs.3600 produces 89.99% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/16556019/pexels-photo-16556019/free-photo-of-woman-in-a-beautiful-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TRADITIONAL WEAR</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Raw Mango</h2>
          <p class="mt-1">Rs.4500 produces 92% less CO2e</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/16523665/pexels-photo-16523665/free-photo-of-fashion-models-posing-together.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">COMBOS </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Patagonia</h2>
          <p class="mt-1">Rs.7000 produces 66.66% less CO2e</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Page;
