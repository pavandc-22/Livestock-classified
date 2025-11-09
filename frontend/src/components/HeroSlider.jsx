import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ margin: "10px auto", width: "100%", maxWidth:"1000px" }}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <img key={i} src={img} style={{ width: "100%", borderRadius:"5px" }} />
        ))}
      </Slider>
    </div>
  );
}
