import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
import Upcomingwebinar from "../upcomingwebinar";
import OurExperts from "../OurExperts";
// import OurClients from "../OurClients";sss
// import Testimonials from '../Testimonials'

function Home() {
  return (
    <Layout>
      <Slider />
      <Upcomingwebinar />
      <OurExperts />
      {/* <OurClients /> */}
    </Layout>
  );
}

export default Home;
