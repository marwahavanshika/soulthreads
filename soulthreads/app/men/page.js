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
                Mens Sustainable{" "}
                <span className="text-teal-600 dark:text-teal-500">
                  Wardrobe collection
                </span>
              </h1>
              <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
              "Discover your perfect style with our amazing collections of casuals, formals, partywear, festives, and everything in between!"
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-teal-700 bg-teal-700 text-white hover:text-white hover:bg-teal-600 hover:border-teal-600 focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:bg-teal-700 active:border-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
                >
                  
                  <span>more about us</span>
                </a>
                
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-200 rounded-full -mt-16 -ml-20 dark:border-teal-900" />
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-100 rounded-full -mt-20 -ml-14 dark:border-teal-950" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-200 rounded-full -mb-16 -mr-20 dark:border-teal-900" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-teal-100 rounded-full -mb-20 -mr-14 dark:border-teal-950" />
              <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800" />
              <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-teal-800 bg-opacity-75 shadow-inner dark:bg-teal-900 dark:bg-opacity-75" />
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
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
       <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Electronics
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Computers
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Clothes
                </div>
              </div>
            </a>
            <a href="#" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Smart Home
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Shoes
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                  Wearables
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}


      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Page;
