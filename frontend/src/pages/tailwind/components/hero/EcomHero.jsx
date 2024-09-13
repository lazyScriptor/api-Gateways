import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import Image8 from "../../assets/Image8.png";
import Image9 from "../../assets/Image9.png";
import Image10 from "../../assets/Image10.png";
import ShareButton from "../share/ShareButton";
const heroSliderData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
    description:
      "Experience crystal-clear sound with Beats Solo wireless headphones. Designed for comfort, these headphones offer noise cancellation, up to 40 hours of battery life, and Bluetooth connectivity for seamless music playback.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Apple",
    title: "iPhone 15",
    title2: "Pro",
    description:
      "The iPhone 15 Pro delivers unrivaled performance with the A16 Bionic chip, a 48MP camera system, and a stunning 6.7-inch display. Get cutting-edge features for photography, gaming, and productivity.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Sony",
    title: "PlayStation 5",
    title2: "Console",
    description:
      "Immerse yourself in next-gen gaming with PlayStation 5. Featuring lightning-fast load times, stunning 4K graphics, and a revolutionary DualSense controller, this console redefines gaming for ultimate entertainment.",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Samsung",
    title: "Galaxy",
    title2: "Watch 6",
    description:
      "Stay connected and track your fitness goals with the Galaxy Watch 6. Its sleek design, heart rate monitor, GPS, and customizable watch faces make it the perfect companion for daily life.",
  },
  {
    id: 5,
    img: Image5,
    subtitle: "Dell",
    title: "XPS 13",
    title2: "Laptop",
    description:
      "The Dell XPS 13 delivers power in a sleek form. With a stunning 4K display, 11th Gen Intel processor, and all-day battery life, it's perfect for work, creativity, or entertainment.",
  },
  {
    id: 6,
    img: Image6,
    subtitle: "GoPro",
    title: "Hero 11",
    title2: "Action Camera",
    description:
      "Capture every adventure with the GoPro Hero 11. Featuring 5.3K video recording, waterproof design, and advanced stabilization, it's the perfect choice for thrill-seekers and vloggers capturing on the go.",
  },
  {
    id: 7,
    img: Image7,
    subtitle: "Microsoft",
    title: "Surface",
    title2: "Pro 9",
    description:
      "Meet the Microsoft Surface Pro 9, your ultimate 2-in-1 laptop and tablet. With a detachable keyboard, high-resolution display, and Intel Evo platform, it’s ideal for professionals on the move.",
  },
  {
    id: 8,
    img: Image8,
    subtitle: "Bose",
    title: "QuietComfort",
    title2: "Earbuds",
    description:
      "Bose QuietComfort Earbuds offer superior noise cancellation, clear calls, and deep bass. With up to 18 hours of total playtime, these wireless earbuds provide an exceptional audio experience for music lovers.",
  },
  {
    id: 9,
    img: Image9,
    subtitle: "Canon",
    title: "EOS R6",
    title2: "Camera",
    description:
      "The Canon EOS R6 is a high-performance mirrorless camera with a 20MP sensor, 4K video, and advanced autofocus. Perfect for both photographers and videographers seeking top-tier image quality.",
  },
  {
    id: 10,
    img: Image10,
    subtitle: "Dyson",
    title: "V15",
    title2: "Vacuum",
    description:
      "Dyson V15 is the most powerful cordless vacuum, engineered for deep cleaning with laser detection for dust, powerful suction, and smart sensors. Ideal for homes with pets or allergens.",
  },
];

function EcomHero() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container mt-1">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm-min-h-[650px] flex flex-col justify-center p-4 
     hero-bg-color relative shadow-black shadow-sm" // Make sure it's relative for proper layering
      >
        <Slider {...settings}>
          {heroSliderData.map((item) => (
            <div key={item.id}>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                {/* Title section */}
                <div className="flex justify-center flex-col gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                  >
                    {item.subtitle}
                  </h2>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-delay="150"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <h2 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold z-30">
                    {item.title2}
                  </h2>
                  <div>
                    <ShareButton
                      text={"Shop now"}
                      bgColor={"primary"}
                      textColor={"white"}
                      handler={""}
                    />
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2 relative z-20">
                  {" "}
                  {/* Ensure this z-index is higher */}
                  <img
                    src={item.img}
                    className="w-[400px] h-[400px] sx:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4 )] z-30"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EcomHero;
