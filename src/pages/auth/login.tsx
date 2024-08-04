import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField } from "../../components/form/formFields";
import { FaUserLock } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Background Section */}

      {/* Login Form Section */}
      <div className="w-full  flex items-center justify-center p-6 lg:p-12">
        <div className="bg-white p-8 rounded-lg  max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <FaUserLock className="text-4xl text-blue-600" />
          </div>
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
                <div className="mt-4 text-sm text-right">
                  <a
                    href="/forgot-password"
                    className="text-btnHover hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Button label="Login" type="submit" className="w-full mt-4" />
              </Form>
            )}
          </Formik>

          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <a
                href="/auth/register"
                className="text-btnHover hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
