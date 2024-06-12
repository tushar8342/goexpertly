import React, { useContext, useReducer, useEffect } from "react";
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from "../actions";
import reducer from "../reducers/courses_reducer";
import courses from "../utils/data";
import axios from "axios"; // Import Axios

const initialState = {
  courses: [],
  single_course: {},
  categories: [],
};

const CoursesContext = React.createContext();

export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        "http://52.72.83.112:8000/admin/courses"
      );
      dispatch({ type: GET_COURSES, payload: response.data });
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchSingleCourse = async (id) => {
    try {
      const Coursedata = await axios.get(
        "http://52.72.83.112:8000/admin/courses"
      );
      // console.log("Coursedata:", Coursedata);

      const singleCourse = Coursedata.data.find(
        (course) => course.courseID === Number(id)
      );
      dispatch({ type: GET_SINGLE_COURSE, payload: singleCourse });
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchCategories = () => {
    const categories = [...new Set(courses.map((item) => item.category))];
    dispatch({ type: GET_CATEGORIES, payload: categories });
  };

  useEffect(() => {
    fetchCourse();
    fetchCategories();
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        ...state,
        fetchSingleCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
