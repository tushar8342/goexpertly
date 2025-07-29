import { useEffect, useState } from "react";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../context/courses_context";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";

function SingleLifeSciences() {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleCourse(id);
      setLoading(false);
    };
    fetchData();
  }, [id, fetchSingleCourse]);

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

  const {
    title,
    description,
    what_you_will_learn,
    areas_covered,
    who_will_benefit,
    why_register,
  } = single_course;

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 py-10 px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-white tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          <span className="text-blue-500">{title}</span>
        </h2>
      </div> */}

      <section className="bg-white dark:bg-gray-900">
        {[
          { title: "Description", content: description },
          { title: "Why Register", content: why_register },
          { title: "Why Should You Attend", content: what_you_will_learn },
          {
            title: "Areas Covered in the Webinar Session",
            content: areas_covered,
          },
          { title: "Who will benefit?", content: who_will_benefit },
        ].map(
          (section, idx) =>
            section.content && (
              <div
                key={idx}
                className="container flex flex-col mt-3 dark:text-white text-gray-800"
              >
                <h2 className="text-2xl font-semibold text-blue-500">
                  {section.title} :
                </h2>
                <div className="text-gray-500 dark:text-gray-300">
                  {parse(section.content)}
                </div>
              </div>
            )
        )}
      </section>
    </Layout>
  );
}

export default SingleLifeSciences;
