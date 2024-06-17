import React, { useState } from "react";
import Layout from "./layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Consulting() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentRole: "",
    companyName: "",
    companyAddress: "",
    city: "",
    country: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://send.com/spi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to send message.");
      }

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        currentRole: "",
        companyName: "",
        companyAddress: "",
        city: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            <span className="text-blue-500">Consulting</span>
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

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Our customized consulting/training services offer:
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            <li>Tailored curriculum to align with your specific goals.</li>
            <li>Flexible scheduling and course delivery options.</li>
            <li>Exclusive access to expert instructors.</li>
            <li>
              Scalable training solutions suitable for groups of any size.
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-4 py-8 mx-auto md:w-2/3">
          <p className="mt-2 text-lg text-gray-800 font-medium leading-relaxed bg-clip-text">
            Take the next step towards tailored training excellence or a private
            consulting session by requesting a personalized estimate today.
          </p>

          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-6">
            <form onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Current Role
                  </label>
                  <input
                    required
                    type="text"
                    name="currentRole"
                    placeholder="Type Your Role"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Company Name
                </label>
                <input
                  required
                  type="text"
                  name="companyName"
                  placeholder="Your Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Company Address
                </label>
                <input
                  required
                  type="text"
                  name="companyAddress"
                  placeholder="Your Company Address"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="-mx-2 md:items-center md:flex mt-4">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your City
                  </label>
                  <input
                    required
                    type="text"
                    name="city"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Country
                  </label>
                  <input
                    required
                    type="text"
                    name="country"
                    placeholder="Your Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              {error && (
                <div className="mt-4 text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Consulting;
