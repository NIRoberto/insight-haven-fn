import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField } from "../../components/form/formFields";
import { FaUserPlus } from "react-icons/fa";

const RegisterPage: React.FC = () => {
  const handleSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle registration logic here
    console.log(values);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Background Section */}

      {/* Registration Form Section */}
      <div className="w-full  flex items-center justify-center p-6 lg:p-12">
        <div className="bg-white p-8 rounded-lg  max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <FaUserPlus className="text-4xl text-btnHover " />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Register</h1>
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Passwords must match")
                .required("Required"),
            })}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
                <Button
                  label="Register"
                  type="submit"
                  variant="primary"
                  className="w-full mt-4"
                />
              </Form>
            )}
          </Formik>
          <div className="mt-4  text-center">
            <p>
              Already have an account?{" "}
              <a href="/auth/login" className="text-btnHover  hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
