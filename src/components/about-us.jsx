import React from "react";
import Layout from "./layout";
import tailoredSolutions from "../Assets/about/undraw_solution_mindset_re_57bf.svg";
import experts from "../Assets/about/undraw_experts_re_i40h.svg";
import patners from "../Assets/about/undraw_team_up_re_84ok.svg";
import excel from "../Assets/about/undraw_details_8k13.svg";
import impact from "../Assets/about/24372256_6909933.svg";
function Aboutus() {
  return (
    <Layout>
      {/* 
<!-- Section 2 --> */}
      <section class="px-2 py-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline"></span>
                  <span class="block text-blue-600 xl:inline">
                    Welcome to Expertly
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Where we believe in empowering individuals and organizations
                  to reach their full potential through innovative training and
                  strategic consulting solutions. Founded with a passion for
                  driving growth and fostering excellence, our team is dedicated
                  to delivering impactful results that propel our clients
                  forward.
                </p>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  At Expertly, we understand that in today's rapidly evolving
                  business landscape, continuous learning and adaptation are
                  essential for success. That's why we offer a comprehensive
                  range of training programs and consulting services designed to
                  equip individuals and businesses with the knowledge, skills,
                  and strategies needed to thrive in their respective
                  industries.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#section1"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 3 --> */}

      <section
        class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24"
        id="section1"
      >
        <div class="box-border flex flex-col items-center content-center pb-6 px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-col max-w-7xl lg:px-16">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline"></span>
            <span class="block text-blue-600 xl:inline">Our Approach</span>
          </h1>
        </div>

        <div class="box-border flex flex-col items-center justify-center pb-6 px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Image --> */}
          <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src={tailoredSolutions}
              class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          {/* 
        <!-- Content --> */}
          <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Tailored Solutions
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-500 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              We recognize that every client is unique, with specific goals,
              challenges, and objectives. That's why we take a personalized
              approach to every project, working closely with our clients to
              understand their needs and develop customized solutions that
              address their unique circumstances.
            </p>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Content --> */}
          <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Expertise & Experience
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-500 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Backed by a team of seasoned professionals with years of industry
              experience, we bring a wealth of knowledge and expertise to every
              engagement. Whether it's leadership development, compliance
              training, organizational change management, or strategic planning,
              you can trust that our team has the skills and know-how to deliver
              exceptional results.
            </p>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src={experts} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
          </div>
        </div>
        <div class="box-border flex flex-col items-center content-center  pb-6 px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Image --> */}
          <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src={patners} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
          </div>
          {/* 
        <!-- Content --> */}
          <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Collaborative Partnership
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-500 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              We believe in the power of collaboration and teamwork. When you
              partner with Expertly, you're not just hiring a service provider;
              you're forming a collaborative partnership dedicated to achieving
              your goals. We work closely with our clients every step of the
              way, fostering open communication and mutual respect.
            </p>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Content --> */}
          <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Commitment to Excellence
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-500 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Excellence is at the heart of everything we do. From the quality
              of our training programs to the professionalism of our consulting
              services, we are committed to delivering excellence in all aspects
              of our work. Our relentless pursuit of excellence drives us to
              continually innovate, evolve, and exceed expectations.
            </p>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src={excel} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
          </div>
        </div>
      </section>
      {/* <!-- Section 4 --> */}
      <section class="py-20 bg-gray-50">
        <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div class="flex flex-wrap items-center -mx-3">
            <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div class="w-full lg:max-w-md">
                <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Impact & Results
                </h2>
                <p class="mb-4 font-xl tracking-tight text-gray-400 xl:mb-6">
                  Ultimately, our success is measured by the impact we make and
                  the results we deliver. Whether it's helping individuals
                  unlock their full potential or guiding organizations towards
                  sustainable growth and success, we are dedicated to making a
                  positive difference in the lives of our clients.
                </p>
              </div>
            </div>
            <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                class="mx-auto sm:max-w-sm lg:max-w-full"
                src={impact}
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Aboutus;
