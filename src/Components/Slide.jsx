import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container mt-10 overflow-hidden">
      <Slider {...settings}>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white ">
          <img
            src="/assets/mqulon.png"
            className="max-w-full max-h-full object-contain "
            alt="المقاولون العرب"
          />
        </div>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white">
          <img
            src="/assets/mollarap.png"
            className="max-w-full max-h-full object-contain"
            alt="مول العرب"
          />
        </div>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white">
          <img
            src="/assets/mollegypt.png"
            className="max-w-full max-h-full object-contain"
            alt="مول مصر"
          />
        </div>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white">
          <img
            src="/assets/arial.png"
            className="max-w-full max-h-full object-contain"
            alt="اريال"
          />
        </div>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white">
          <img
            src="/assets/shipse.png"
            className="max-w-full max-h-full object-contain"
            alt="شيبسي"
          />
        </div>
        <div className="w-32 h-50 !flex items-center justify-center p-2 bg-white">
          <img
            src="/assets/pepsi.png"
            className="max-w-full max-h-full object-contain"
            alt="بيبسي"
          />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
