import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField } from "../../components/form/formFields";

const LoginPage: React.FC = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg  max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
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
              <Button
                label="Login"
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

export default LoginPage;
