import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField } from "../../components/form/formFields";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
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
      </div>
    </div>
  );
};

export default RegisterPage;
