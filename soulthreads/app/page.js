import Image from "next/image";
import i1 from "../public/Resources/i1.png";
import i2 from "../public/Resources/hemp.jpg";
import i3 from "../public/Resources/i3.jpg";
import i4 from "../public/Resources/i4.jpg";
import g1 from "../public/Resources/g1.jpg";
import g2 from "../public/Resources/g2.jpg";
import g3 from "../public/Resources/g3.jpg";
import g4 from "../public/Resources/g4.jpg";
import g5 from "../public/Resources/g5.jpg";
import g6 from "../public/Resources/g6.jpg";
import closet from "../public/Resources/closet.jpg";
import g7 from "../public/Resources/g7.jpg";
import ind from "../public/Resources/ind.jpeg";
import men from "../public/Resources/men1.jpeg";
import women from "../public/Resources/women1.jpeg";
import kid from "../public/Resources/kid2.jpeg";
import bottom from "../public/Resources/bottom.jpeg";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center primary  h-screen  ">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
              <div className="flex flex-col  text-black md:items-start items-center justify-between  space-y-3 px-8">
                <div className="text-5xl md:text-7xl font-bold ">
                  SoulThreads
                </div>
                <div className="text-base uppercase md:text-base  ">
                  Empowering Sustainable Fashion Choices
                </div>
                <div className="text-sm md:text-sm text-extrabold  ">
                  A Platform for Ethical Shopping and Token Economics
                </div>
              </div>
              <div className="flex space-x-2 md:space-x-6 md:m-4">
                <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                  <Image
                    src={i3}
                    className="h-full w-full"
                    alt=""
                    width={0}
                    height={0}
                  />
                </div>
                <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                  <Image
                    src={i2}
                    className="h-full w-full"
                    alt=""
                    width={0}
                    height={0}
                  />
                </div>
                <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                  <Image
                    src={i1}
                    className="h-full w-full"
                    alt=""
                    width={0}
                    height={0}
                  />
                </div>
                <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                  <Image
                    src={i4}
                    className="h-full w-full"
                    alt=""
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-green-900 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              What makes us different?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              At our core, we are more than just an online marketplace for
              sustainable fashion. We are a movement, a catalyst for change, and
              a platform that empowers you to make a positive impact on the
              world through your fashion choices. Here's what sets us apart-{" "}
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-black-900 font-medium title-font mb-2">
                Curated Consciousness:
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Our collection is carefully curated, featuring only brands that
                meet stringent sustainability and ethical standards. Every
                purchase contributes to a greener, fairer, and more responsible
                fashion industry.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-black-900 font-medium title-font mb-2">
                Circular Fashion Advocacy
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We go beyond selling clothes; we champion a circular economy by
                facilitating fabric recycling and second-hand sales, giving new
                life to old garments and reducing textile waste.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-black-900 font-medium title-font mb-2">
                Education at Heart
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We believe that informed consumers are catalysts for change. Our
                platform provides educational resources, empowering users to
                understand the impact of their choices on the environment and
                society.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-black-900 font-medium title-font mb-2">
                Community of Changemakers
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Join a thriving community of like-minded individuals who share a
                passion for sustainable fashion and collectively strive for a
                greener and fairer fashion industry.
              </p>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white secondary border-0 py-2 px-8 focus:outline-none hover:primary rounded text-lg">
            Know more about us
          </button>
        </div>
      </section>
      <section className="text-black-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black-900 lg:w-1/3 lg:mb-0 mb-4">
              {" "}
              "A World of Conscious Fashion"
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Step into a world where fashion embraces sustainability and
              ethical choices. Discover a curated gallery of eco-friendly
              designs, innovative upcycled fashion, and the allure of organic
              textiles. Experience the beauty of conscious fashion that reflects
              your values and makes a positive impact on the planet.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g1}
                  width={0}
                  height={0}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g3}
                  width={0}
                  height={0}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={g7}
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={closet}
                  width={0}
                  height={0}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g2}
                  width={0}
                  height={0}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g6}
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center bg-white h-[80vh]">
        <div className="flex-col items-center justify-center text-black-800 text-center">
          <div className="flex items-center justify-center">
            <div className="h-36 w-[90%] flex items-center justify-center md:text-4xl text-2xl lg:text-5xl font-bold ">
              "The Impact of Fashion on Our Planet"
            </div>
          </div>

          <div className="flex ">
            <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
              <div className=" w-[70%] md:w-1/2 bg-[#acc4b245] py-10 rounded-2xl flex items-center justify-center ml-4">
                <div className="flex-col  items-center px-0 md:px-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400  bg-clip-text text-transparent">
                    60%
                  </div>
                  <div className="text-md mt-8 font-bold text-black-800">
                    The demand for fashion has increased by 60% in the last 15
                    years,
                  </div>
                  <div className="text-xs font-medium text-black-800">
                    This results in excessive resource consumption and waste
                    generation
                  </div>
                </div>
              </div>

              <div className=" w-[70%] md:w-1/ bg-[#acc4b245]  py-10 rounded-2xl flex items-center justify-center ml-4">
                <div className="flex-col  items-center px-0 md:px-6">
                  <div className="text-5xl font-bold bg-gradient-to-l from-fuchsia-500 to-orange-500  bg-clip-text text-transparent">
                    92 million tons
                  </div>
                  <div className="text-md mt-8 font-bold text-black-800">
                    The global fashion industry generates 92 million tons of
                    textile waste each year.
                  </div>
                  <div className="text-xs font-medium text-black-800">
                    (Source: Global Fashion Agenda)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-black-600 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-black-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-black-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                What we offer- Eco-Friendly Fashion for All
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                At our sustainable fashion platform, we take pride in offering a
                diverse and stylish range of eco-friendly clothing for men,
                women, and children. Each product is thoughtfully curated to not
                only elevate your style but also make a positive impact on the
                planet. Discover how fashion meets sustainability for every
                member of your family.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={men}
                  height={0}
                  width={0}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-black-900 mt-5">
                Men: Timeless Style with a Conscience
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Elevate your wardrobe with our collection of sustainable
                menswear, where classic designs meet eco-conscious materials.
                From organic cotton shirts to responsibly sourced accessories,
                our men's range offers a perfect blend of style and
                sustainability. Embrace fashion that aligns with your values,
                empowering you to look good while doing good.
              </p>
              <a className="text-[#4f7a6a] inline-flex items-center mt-3">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={women}
                  height={0}
                  width={0}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-black-900 mt-5">
                Women: Embrace Ethical Elegance
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Celebrate your individuality with our eco-friendly women's
                collection that blends elegance and ethics. Explore a diverse
                range of chic dresses, cruelty-free accessories, and versatile
                separates, all crafted from sustainable materials. Dress
                responsibly without compromising on style, and make a statement
                for conscious fashion..
              </p>
              <a className="text-[#4f7a6a] inline-flex items-center mt-3">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={kid}
                  width={0}
                  height={0}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-black-900 mt-5">
                Kids: Fashionable, Fun, and Earth-Friendly
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Nurture a love for the environment from an early age with our
                adorable and sustainable kids' fashion. Our collection showcases
                playful designs made from organic fabrics, ensuring comfort and
                care for your little ones. Dress your children in fashion that
                reflects your values and sets the foundation for a sustainable
                future.
              </p>
              <a className="text-[#4f7a6a] inline-flex items-center mt-3">
                Explore
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center max-w-7xl ">
          <h1 className="text-3xl md:text-[50px] text-black-700 font-bold mt-5 ">
            Elevate Your Wardrobe with our Tips!
          </h1>
          <div className="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div className="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              <h1 className="text-black-700 text-2xl font-bold">Service</h1>
              <div className="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={g3}
                    className="w-[20%] md:w-[5%]"
                    alt=""
                    height={0}
                    width={0}
                  />
                  <h1 className="text-lg font-semibold mt-3">
                    Choose Quality Over Quantity:
                  </h1>
                </div>
                <h1 className="text-justify text-black-700 md:w-[250px]">
                  Quality is the cornerstone of sustainable fashion. Instead of
                  filling your closet with fast-fashion trends that quickly lose
                  their appeal, opt for high-quality, timeless pieces that stand
                  the test of time. Embrace durability and craftsmanship,
                  ensuring that your clothing remains fashionable for years to
                  come while minimizing your environmental footprint.
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col space-y-2 mt-5">
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={g1}
                    className="w-[20%] md:w-[5%]"
                    alt=""
                    height={0}
                    width={0}
                  />
                  <h1 className="text-lg font-semibold mt-2">
                    Shop Second-Hand:
                  </h1>
                </div>
                <h1 className="text-justify text-black-700 md:w-[250px]">
                  Explore thrift stores, consignment shops, and online platforms
                  for pre-loved clothing. Buying second-hand helps extend the
                  lifespan of garments and reduces demand for new production.
                  It's a sustainable and budget-friendly way to refresh your
                  wardrobe.
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col space-y-2 mt-3">
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={g4}
                    className="w-[20%] md:w-[5%]"
                    alt=""
                    height={0}
                    width={0}
                  />
                  <h1 className="text-lg font-semibold mt-5">
                    Support Ethical Brands:
                  </h1>
                </div>
                <h1 className="text-justify text-black-700 md:w-[250px]">
                  Choose brands that prioritize ethical and fair labor
                  practices, ensuring workers' rights and well-being are
                  respected throughout the supply chain. By supporting ethical
                  brands, you contribute to a more sustainable and socially
                  responsible fashion industry.
                </h1>
              </div>
            </div>
            <div className="w-60 lg:w-96 h-60 lg:h-96 overflow-hidden  ">
              <Image
                src={bottom}
                className="h-full w-full"
                alt=""
                height={0}
                width={0}
              />
            </div>
            <div className="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
              <div className="flex flex-col items-start">
                <h1 className="text-black-700 text-2xl font-bold">
                  Together we can make a change!
                </h1>
                <p className="text-justify text-black-700 md:w-[250px] mt-5">
                  In a world where the fashion industry's environmental impact
                  is increasingly scrutinized, eco-conscious fashion choices are
                  not only trendy but also crucial for making a positive impact
                  on the planet. Embracing sustainable style goes beyond just
                  looking good; it involves adopting mindful practices that
                  respect the environment, promote ethical values, and support a
                  more equitable world.
                </p>
                <p className="text-justify text-black-700 md:w-[250px] mt-5">
                  Here are three essential tips to help you elevate your
                  wardrobe with eco-conscious choices and contribute to a more
                  sustainable future:
                </p>
                <button className="mt-5 px-6 py-1 text-lg text-white hover:bg-black-800 secondary">
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </>
  );
}
