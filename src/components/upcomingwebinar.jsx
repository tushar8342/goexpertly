import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingWebinar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://api.goexpertly.com/admin/courses/upcoming/"
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section className="relative py-14">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Upcoming Webinars
          </h3>
        </div>
        <div className="mt-12 px-4">
          {" "}
          <Slider {...settings}>
            {courses?.map((item) => (
              <div key={item?.courseID} className="p-4">
                <div className="bg-white rounded-xl border shadow-md min-h-[250px]">
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-lg font-semibold px-4 py-1 line-clamp-2 overflow-hidden text-ellipsis">
                        {item?.title}
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                      <img
                        src={item?.imageSrc}
                        className="w-16 h-16 rounded-full border-2 border-indigo-500"
                        alt=""
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item?.instructor}
                        </span>
                        <span className="block text-indigo-600 text-sm mt-0.5">
                          {formatDate(item?.webinarDate)}
                          <div className="text-[#ff5d5b] hover:text-black cursor-pointer pt-4 w-fit font-bold text-sm">
                            <Link to={`/training/${item?.courseID}`}>
                              Read more &gt;&gt;&gt;
                            </Link>
                          </div>
                        </span>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>

      {/* Custom CSS for slider arrows */}
      <style jsx>{`
        .slick-prev,
        .slick-next {
          width: 40px; /* Increase width */
          height: 40px; /* Increase height */
          background-color: rgba(255, 255, 255, 0.8); /* Change color */
          border-radius: 50%; /* Make them circular */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1; /* Make sure they are on top */
        }

        .slick-prev:before,
        .slick-next:before {
          color: black; /* Arrow color */
          font-size: 20px; /* Adjust arrow size */
        }

        .slick-prev {
          left: -25px; /* Adjust position */
        }

        .slick-next {
          right: -25px; /* Adjust position */
        }
      `}</style>
    </section>
  );
};

export default UpcomingWebinar;

// import React from "react";
// import { useCoursesContext } from "../context/courses_context";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// import { FaUser, FaClock } from "react-icons/fa";
// export default function UpcomingWebinar() {
//   const { courses } = useCoursesContext();
//   // console.log("courses:", courses);

//   // Utility function to format the duration
//   // const convertMinutes = (minutes) => {
//   //   const hours = Math.floor(minutes / 60);
//   //   const mins = minutes % 60;
//   //   return `${hours}h ${mins}m`;
//   // };

//   // Utility function to truncate text
//   const truncateText = (text, length) => {
//     if (text.length <= length) return text;
//     return text.slice(0, length) + "...";
//   };
//   if (!courses || courses.length === 0) {
//     return null;
//   }

//   return (
//     <section className="overflow-hidden bg-cover bg-top bg-no-repeat pt-12 bg-[url(https://lenscorp.ai/_next/static/media/Gradient_bg_section4.71fb66b2.jpg)]">
//       <div className="flex flex-col items-center py-8">
//         <h3 className="text-center nunito_sans font-semibold text-4xl">
//           Upcoming Webinars
//         </h3>
//         <div className="bg-gradient-to-r from-darksky to-darkcyan rounded-lg w-[145px] h-[8px] mt-2"></div>
//       </div>
//       <div className="flex flex-col items-center">
//         {courses?.slice(0, 3).map((course) => (
//           <div
//             key={course?.courseID}
//             className="text-black center px-4 py-4 sm:px-4 sm:py-6 lg:px-4 lg:py-4 border-2 border-[#ff5d5b] rounded-xl mb-8 mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
//           >
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//               <div className="flex justify-center">
//                 <img
//                   alt={course?.title || "Course Image"}
//                   width={220}
//                   height={200}
//                   src={
//                     course?.imageSrc || "https://via.placeholder.com/220x200"
//                   }
//                   className="inset-0 object-cover rounded-lg"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-medium sm:text-2xl">
//                   {course?.title || "Course Title"}
//                 </h2>
//                 <div className="flex items-center gap-2 my-4">
//                   <div>
//                     <FaUser size={16} />
//                   </div>
//                   <div className="text-sm">
//                     {course?.instructor || "Instructor Name"}
//                   </div>
//                   <div className="pl-4">
//                     <FaClock size={16} />
//                   </div>
//                   <div className="text-sm">
//                     {course?.webinarDate
//                       ? new Date(course?.webinarDate).toLocaleDateString(
//                           "en-US",
//                           {
//                             weekday: "long",
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                           }
//                         )
//                       : "Date Not Available"}
//                   </div>
//                 </div>
//                 <p className="mt-2 text-sm">
//                   {course?.description
//                     ? parse(truncateText(course.description, 198))
//                     : null}
//                 </p>
//                 <div className="text-[#ff5d5b] hover:text-black cursor-pointer pt-4 w-fit font-bold text-sm">
//                   <Link to={`/training/${course?.courseID}`}>
//                     Read more &gt;&gt;&gt;
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
