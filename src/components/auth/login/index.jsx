import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../layout";
import Header from "../Header";
import Input from "../Input";
import { loginFields } from "../formFields";
import FormExtra from "../FormExtra";
// import { useNavigate } from "react-router-dom";
import FormAction from "../FormAction";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [userDetails, setUserDetails] = useState(null);
  console.log("userDetails:", userDetails);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authenticateUser();
      await fetchUserDetails(token);
      toast.success("Login successful!"); // Display success toast
    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("Login failed. Please check your credentials."); // Display error toast
    }
  };

  const authenticateUser = async () => {
    try {
      const response = await fetch(
        "https://expertly.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginState),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }
      const data = await response.json();
      console.log("data:", data);
      const token = data.token;
      const userId = data.userId;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("https://expertly.onrender.com/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const userData = await response.json();
      setUserDetails(userData);
    } catch (error) {
      console.error("Failed to fetch user details:", error.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Login;
