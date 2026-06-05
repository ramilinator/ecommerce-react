import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1758186342771-b36aa21f8494?q=80&w=1632&auto=format&fit=crop",
      title: "Discover Amazing Products",
      description: "Shop the latest collection today.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1699796803679-4e8656256d72?q=80&w=1074&auto=format&fit=crop",
      title: "New Arrivals",
      description: "Fresh products added weekly.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1630512633843-043c3c6da96f?q=80&w=1632&auto=format&fit=crop",
      title: "Exclusive Deals",
      description: "Save big on selected items.",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="btn btn-primary btn-large btn-block">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
