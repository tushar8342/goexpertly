import React from "react";
import Layout from "./layout";

function Subscribe() {
  return (
    <Layout>
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            <span class="text-blue-500">Subscribe</span>
          </h2>

          <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Are you a regulatory compliance or healthcare professional who is
            always eager to stay informed about the latest developments in your
            field? If so, Expertly is your go-to destination.
          </p>
          <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Discover a wealth of insightful information tailored to your
            interests and industry. Subscribe now to stay updated with the
            latest happenings and advancements in your area of expertise
          </p>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-4 py-8 mx-auto md:w-2/3">
          <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-6">
            <form>
              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Deo"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your Mobile
                  </label>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-0000"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="-mx-2 md:items-center md:flex mt-4">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Industry
                  </label>
                  <input
                    type="text"
                    placeholder="Your Industry"
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

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Subscribe;
