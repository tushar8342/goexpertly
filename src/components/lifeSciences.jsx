import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Layout from "./layout";

function LifeSciences() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.goexpertly.com/admin/courses/lifescience")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <Layout>
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        <div className="mb-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center text-blue-800">
            Life Sciences Courses
          </h1>
          {/* <div className="w-24 h-1 mx-auto bg-blue-600 rounded"></div> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.courseID}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between min-h-[280px] hover:shadow-xl transition-shadow duration-300"
            >
              <h2
                onClick={() => navigate(`/lifesciences/${course.courseID}`)}
                className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer hover:underline"
              >
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 flex-1 mb-4">
                {stripHtml(course.description).slice(0, 180)}...
              </p>
              <button
                className="self-start px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                onClick={() => navigate(`/lifesciences/${course.courseID}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default LifeSciences;
