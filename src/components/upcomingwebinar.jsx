import React from "react";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FaUser, FaClock } from "react-icons/fa";
export default function UpcomingWebinar() {
  const { courses } = useCoursesContext();
  // console.log("courses:", courses);

  // Utility function to format the duration
  // const convertMinutes = (minutes) => {
  //   const hours = Math.floor(minutes / 60);
  //   const mins = minutes % 60;
  //   return `${hours}h ${mins}m`;
  // };

  // Utility function to truncate text
  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-cover bg-top bg-no-repeat pt-12 bg-[url(https://lenscorp.ai/_next/static/media/Gradient_bg_section4.71fb66b2.jpg)]">
      <div className="flex flex-col items-center py-8">
        <h3 className="text-center nunito_sans font-semibold text-4xl">
          Upcoming Webinars
        </h3>
        <div className="bg-gradient-to-r from-darksky to-darkcyan rounded-lg w-[145px] h-[8px] mt-2"></div>
      </div>
      <div className="flex flex-col items-center">
        {courses?.slice(0, 3).map((course) => (
          <div
            key={course?.courseID}
            className="text-black center px-4 py-4 sm:px-4 sm:py-6 lg:px-4 lg:py-4 border-2 border-[#ff5d5b] rounded-xl mb-8 mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  alt={course?.title || "Course Image"}
                  width={220}
                  height={200}
                  src={
                    course?.imageSrc || "https://via.placeholder.com/220x200"
                  }
                  className="inset-0 object-cover rounded-lg"
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-medium sm:text-2xl">
                  {course?.title || "Course Title"}
                </h2>
                <div className="flex items-center gap-2 my-4">
                  <div>
                    <FaUser size={16} />
                  </div>
                  <div className="text-sm">
                    {course?.instructor || "Instructor Name"}
                  </div>
                  <div className="pl-4">
                    <FaClock size={16} />
                  </div>
                  <div className="text-sm">
                    {course?.webinarDate
                      ? new Date(course?.webinarDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )
                      : "Date Not Available"}
                  </div>
                </div>
                <p className="mt-2 text-sm">
                  {course?.description
                    ? parse(truncateText(course.description, 198))
                    : null}
                </p>
                <div className="text-[#ff5d5b] hover:text-black cursor-pointer pt-4 w-fit font-bold text-sm">
                  <Link to={`/training/${course?.courseID}`}>
                    Read more &gt;&gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
