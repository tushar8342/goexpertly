import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../layout";
import Header from "../Header";
import Input from "../Input";
import { signupFields } from "../formFields";
import FormAction from "../FormAction";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupState);
    await createAccount();
  };

  const createAccount = async () => {
    try {
      const response = await fetch("http://52.72.83.112:8000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupState),
      });
      const data = await response.json();
      console.log(data);
      // Check response from backend and show appropriate toast message
      if (response.ok) {
        toast.success("Account created successfully!", {
          onClose: () => navigate("/login"),
        });

        return;
      } else {
        toast.error(data.message); // Assuming the backend sends error messages in a 'message' field
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Error creating account. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={signupState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
              <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Signup;
