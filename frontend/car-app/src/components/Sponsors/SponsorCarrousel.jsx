import { Box, Container, Image } from "@chakra-ui/react";
import Slider from "react-slick";

// Import images from the local folder
import img1 from '../Assests/logoTwo.png';
import img2 from '../Assests/logoThree.png';
import img3 from '../Assests/logoOne.png';
import img4 from '../Assests/logoFour.png';



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

  const images = [img1, img2, img3, img4]; // Array of imported images

  return (
    <Box py={5} bg="gray.50">
      <Container py={5}>
        <Slider {...settings} className="vendor-carousel">
          {images.map((img, index) => (
            <Box key={index}>
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                width="40%"
                height="30%"
                borderRadius="md"
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default VendorCarousel;
