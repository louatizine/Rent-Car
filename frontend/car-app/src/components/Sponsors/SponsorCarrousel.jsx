import { Box, Container, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const VendorCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change this based on your design
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box py={5} bg="gray.50">
      <Container py={5}>
        <Slider {...settings} className="vendor-carousel">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num}>
              <Image
                /* src={`img/gallery-${num}.jpg`}*/
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNH5jn_0kTTlKJgl8bymWfvwJdhAj_xUUUA&s-${num}.jpg`}
                alt={`Gallery Image ${num}`}
                width="100%"
                borderRadius="md"
              />
            </Box>
          ))}
          <img src="" alt="Vendor 8" />{" "}
        </Slider>
      </Container>
    </Box>
  );
};

export default VendorCarousel;
