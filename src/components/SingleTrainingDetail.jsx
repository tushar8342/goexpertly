import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useCoursesContext } from "../context/courses_context";
import { TbWorld } from "react-icons/tb";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { Oval } from "react-loader-spinner";

const SingleTrainingDetail = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleCourse(id);
      setLoading(false);
    };
    fetchData();
  }, [id,fetchSingleCourse]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
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
    courseID,
    title,
    instructors,
    // duration,
    price,
    discountedPrice,
    description,
    what_you_will_learn,
    // content,
    imageSrc,
  } = single_course;

  return (
    <Layout>
      <SingleCourseWrapper>
        <div className="course-intro mx-auto grid">
          <div className="course-img flex justify-center items-center">
            <img className="w-3/4 h-auto" src={imageSrc} alt={imageSrc} />
          </div>

          <div className="course-details">
            {/* <div className="course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block">
            {category}
          </div> */}
            <div className="course-head">
              <div className="font-semibold text-2xl">{title}</div>
            </div>

            <div className="course-body">
              <p className="course-para ">{description}</p>
              {/* <div className="course-rating flex">
              <span className="rating-star-val fw-8 fs-16">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="rating-count fw-5 fs-14">({rating_count})</span>
              <span className="students-count fs-14">{students}</span>
            </div> */}

              <ul className="course-info">
                <li>
                  <span className="fs-14">
                    Created by:{" "}
                    <span className="fw-6 opacity-08">
                      {instructors?.replace(/"/g, "")}
                    </span>
                  </span>
                </li>
                {/* <li className="flex">
                  <span>
                    <MdInfo />
                  </span>
                  <span className="fs-14 course-info-txt fw-5">
                    Last updated 9/2015
                  </span>
                </li> */}
                <li className="flex">
                  <span>
                    <TbWorld />
                  </span>
                  <span className="fs-14 course-info-txt fw-5">English </span>
                </li>
                <li className="flex">
                  <span>
                    <RiClosedCaptioningFill />
                  </span>
                  <span className="fs-14 course-info-txt fw-5">
                    English [Auto]
                  </span>
                </li>
              </ul>
            </div>

            <div className="course-foot">
              <div className="course-price">
                <span className="new-price fs-26 fw-8">${price}</span>
                <span className="old-price fs-26 fw-6">${discountedPrice}</span>
              </div>
            </div>

            <Link
              to="/cart"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              onClick={() =>
                addToCart(
                  courseID,
                  imageSrc,
                  title,
                  instructors,
                  price,
                  discountedPrice
                  // category
                )
              }
            >
              Add to Cart
            </Link>

            {/* <div className="course-btn">
              <Link
                to="/cart"
                className="add-to-cart-btn d-inline-block fw-7 bg-purple"
                onClick={() =>
                  addToCart(
                    courseID,
                    imageSrc,
                    title,
                    instructors,
                    discountedPrice
                    // category
                  )
                }
              >
                <FaShoppingCart /> Add to cart
              </Link>
            </div> */}
          </div>
        </div>

        {/* <div className="course-full bg-white text-dark">
        <div className="course-learn mx-auto">
          <div className="course-sc-title">What you'll learn</div>
          <ul className="course-learn-list grid">
            {learnItems &&
              learnItems.map((learnItem, idx) => {
                return (
                  <li key={idx}>
                    <span>
                      <BiCheck />
                    </span>
                    <span className="fs-14 fw-5 opacity-09">{learnItem}</span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="course-content mx-auto">
          <div className="course-sc-title">Course content</div>
          <ul className="course-content-list">
            {content &&
              content.map((contentItem, idx) => {
                return (
                  <li key={idx}>
                    <span>{contentItem}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div> */}
      </SingleCourseWrapper>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col  px-4 py-12">
          <h2 className="max-w-2xl  text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            <span className="text-blue-500">Why Should You Attend : </span>
          </h2>

          <p className=" mt-2  text-gray-500 dark:text-gray-300">
            {what_you_will_learn}
          </p>
        </div>
      </section>
    </Layout>
  );
};

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

    .course-details {
      padding-top: 20px;
    }

    .course-category {
      padding: 0px 8px;
      border-radius: 6px;
    }

    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }
    .course-para {
      padding: 12px 0;
    }
    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }
    .students-count {
      margin-left: 8px;
    }
    .rating-count {
      margin-left: 6px;
      color: #d097f6;
    }
    .course-info {
      li {
        margin-bottom: 2px;
        &:nth-child(2) {
          margin-top: 10px;
        }
      }
      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }
    .course-price {
      margin-top: 12px;
      .old-price {
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
    .course-btn {
      margin-top: 16px;
      .add-to-cart-btn {
        padding: 12px 28px;
        span {
          margin-left: 12px;
        }
      }
    }

    @media screen and (min-width: 880px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details {
        padding-top: 0;
      }
      .course-img {
        order: 2;
      }
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: 60% 40%;
    }
  }

  .course-full {
    padding: 40px 16px;
    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;
          span {
            &:nth-child(1) {
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }
`;

export default SingleTrainingDetail;
