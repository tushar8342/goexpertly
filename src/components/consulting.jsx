import React from "react";
import Layout from "./layout";
function Consulting() {
  return (
    <Layout>
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            <span class="text-blue-500">Consulting</span>
          </h2>
        </div>
      </section>

      <div className="">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="mb-4">
            Experience the ease and flexibility of personalized, expert-led
            consultation or instruction at the time and place that suits you
            best.
          </p>

          <p className="mb-4">
            Simply share your needs with us, and we'll craft a tailored solution
            designed to alleviate any concerns while maximizing the benefits for
            you and your team.
          </p>

          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Our customized consulting/training services offer:
          </h2>
          <ul class="max-w-md space-y-1  list-disc list-inside dark:text-gray-400">
            <li>Tailored curriculum to align with your specific goals.</li>
            <li>Flexible scheduling and course delivery options.</li>
            <li>Exclusive access to expert instructors.</li>
            <li>
              Scalable training solutions suitable for groups of any size.
            </li>
          </ul>
        </div>
      </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-4 py-8 mx-auto md:w-2/3">
          <p className="mt-2 text-lg text-gray-800 font-medium leading-relaxed   bg-clip-text">
            Take the next step towards tailored training excellence or a private
            consulting session by requesting a personalized estimate today.
          </p>

          <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-6">
            <form>
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Current Role
                  </label>
                  <input
                    type="text"
                    placeholder="Type Your Role"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Company Address
                </label>
                <input
                  type="text"
                  placeholder="Your Company Adress"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="-mx-2 md:items-center md:flex mt-4">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your City
                  </label>
                  <input
                    type="text"
                    placeholder="Your City"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Your Country"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  class="block w-full h-24 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Consulting;
