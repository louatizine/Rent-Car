import Download from "../Download/Download";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import PickCar from "../PickCar/PickCar";
import PlanTrip from "../planTrip/PlanTrip";


function Home() {
  return (
    <>
      <Hero/>
      <PlanTrip />
      <PickCar />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
