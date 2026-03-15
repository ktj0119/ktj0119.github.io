import { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { concerts } from '../data/concertData';

interface ConcertListProps {
  onViewAll?: () => void;
  onSelectConcert?: (concertId: number) => void;
}

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--color-opera-burgundy)] text-white p-2 md:px-3 md:py-2 rounded-full shadow-md hover:bg-[var(--color-opera-dark)] transition-colors z-10"
      aria-label="Next"
    >
      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-opera-burgundy)] text-white p-2 md:px-3 md:py-2 rounded-full shadow-md hover:bg-[var(--color-opera-dark)] transition-colors z-10"
      aria-label="Previous"
    >
      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
}

export function ConcertList({ onViewAll, onSelectConcert }: ConcertListProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1536px' }}>
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-opera-burgundy)] mb-4">공연</h2>
        </div>

        <div className="relative concert-list-carousel px-12 md:px-16">
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
            
            /* Custom Styles for Concert List */
            .concert-list-carousel .slick-slide {
              padding: 0 12px;
            }
            .concert-list-carousel .slick-list {
              margin: 0 -12px;
            }
            .concert-list-carousel .slick-slider {
              padding: 0 48px;
            }
            .concert-list-carousel .slick-slide img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
            @media (min-width: 768px) {
              .concert-list-carousel .slick-slider {
                padding: 0 56px;
              }
            }
            @media (max-width: 768px) {
              .concert-list-carousel .slick-slide {
                padding: 0 8px;
              }
              .concert-list-carousel .slick-list {
                margin: 0 -8px;
              }
            }
            @media (max-width: 640px) {
              .concert-list-carousel .slick-slider {
                padding: 0;
              }
            }
          `}</style>

          <Slider ref={sliderRef} {...settings}>
            {concerts.map((concert) => (
              <div 
                key={concert.id} 
                className="group cursor-pointer"
                onClick={() => onSelectConcert?.(concert.id)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow w-full aspect-[2/3]">
                  <img
                    src={concert.image}
                    alt={concert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-sm mb-1 text-white">{concert.title}</h3>
                    <p className="text-xs text-[var(--color-opera-gold)]">{concert.composer}</p>
                    <p className="text-xs mt-1 opacity-90">{concert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 bg-[var(--color-opera-burgundy)] text-white px-8 py-3 rounded hover:bg-[var(--color-opera-dark)] transition-colors"
          >
            <span>더보기</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}