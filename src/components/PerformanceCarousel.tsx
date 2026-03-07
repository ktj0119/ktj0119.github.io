import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { concerts } from '../data/concertData';

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[38px] top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[var(--color-opera-burgundy)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[38px] top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[var(--color-opera-burgundy)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function PerformanceCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          swipeToSlide: true,
          touchThreshold: 10,
        },
      },
    ],
    customPaging: (i: number) => (
      <button
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[var(--color-opera-burgundy)] transition-all duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: 'slick-dots !flex !justify-center !gap-2 !mt-8',
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-opera-burgundy)] mb-4">공연 목록</h2>
          <p className="text-gray-600">
            최근 공연의 감동을 다시 만나보세요
          </p>
        </div>

        <div className="relative performance-carousel">
          <style>{`
            /* Slick Slider Base Styles */
            .slick-slider {
              position: relative;
              display: block;
              box-sizing: border-box;
              user-select: none;
              touch-action: pan-y;
            }
            .slick-list {
              position: relative;
              display: block;
              overflow: hidden;
              margin: 0;
              padding: 0;
            }
            .slick-list:focus {
              outline: none;
            }
            .slick-list.dragging {
              cursor: pointer;
              cursor: hand;
            }
            .slick-slider .slick-track,
            .slick-slider .slick-list {
              transform: translate3d(0, 0, 0);
            }
            .slick-track {
              position: relative;
              top: 0;
              left: 0;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            .slick-track:before,
            .slick-track:after {
              display: table;
              content: '';
            }
            .slick-track:after {
              clear: both;
            }
            .slick-loading .slick-track {
              visibility: hidden;
            }
            .slick-slide {
              display: none;
              float: left;
              height: 100%;
              min-height: 1px;
            }
            .slick-slide img {
              display: block;
            }
            .slick-slide.slick-loading img {
              display: none;
            }
            .slick-slide.dragging img {
              pointer-events: none;
            }
            .slick-initialized .slick-slide {
              display: block;
            }
            .slick-loading .slick-slide {
              visibility: hidden;
            }
            .slick-vertical .slick-slide {
              display: block;
              height: auto;
              border: 1px solid transparent;
            }
            
            /* Dots */
            .slick-dots {
              position: relative;
              display: flex !important;
              justify-content: center;
              gap: 0.5rem;
              margin-top: 2rem;
              padding: 0;
              list-style: none;
            }
            .slick-dots li {
              position: relative;
              display: inline-block;
              margin: 0;
              padding: 0;
              cursor: pointer;
            }
            .slick-dots li button {
              font-size: 0;
              line-height: 0;
              display: block;
              padding: 0;
              cursor: pointer;
              color: transparent;
              border: 0;
              outline: none;
              background: transparent;
            }
            
            /* Custom Styles */
            .performance-carousel .slick-slide {
              padding: 0 12px;
            }
            .performance-carousel .slick-list {
              margin: 0 -12px;
            }
            @media (max-width: 768px) {
              .performance-carousel .slick-slide {
                padding: 0 8px;
              }
              .performance-carousel .slick-list {
                margin: 0 -8px;
              }
            }
            .performance-carousel .slick-dots li button:before {
              display: none;
            }
            .performance-carousel .slick-dots li {
              margin: 0;
            }
            .performance-carousel .slick-dots li.slick-active button {
              width: 2rem;
              background-color: var(--color-opera-burgundy);
            }
          `}</style>

          <div className="mx-auto" style={{ maxWidth: 'calc(100% - 152px)' }}>
            <Slider ref={sliderRef} {...settings}>
              {concerts.map((performance) => (
                <div key={performance.id} className="px-3">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <h3 className="text-sm md:text-base mb-1 text-white">{performance.title}</h3>
                      <p className="text-xs md:text-sm text-[var(--color-opera-gold)] mb-1">
                        {performance.composer}
                      </p>
                      <p className="text-xs md:text-sm opacity-90">{performance.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}