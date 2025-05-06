import { Form, Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import WrapperInput from '../../components/wrapperInput/WrapperInput';
import Button from '../../components/button/Button';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Footer  from '../../components/Footer/Footer'
export default function Register() {
  const navigate = useNavigate();
  const registerMutation = useMutation({
      mutationFn: async (values) =>
          await AxiosConfig("api/auth/register", {
              method: "POST",
              data: values,
          }),
      onSuccess: (data) => {
          toast.success("Welcome New User", {
              style: {
                  border: "1px solid #A52C45",
                  padding: "16px",
                  color: "#A52C45",
              },
              iconTheme: {
                  primary: "#A52C45",
                  secondary: "#FFFAEE",
              },
          });
          sessionStorage.setItem("token", data?.data?.data?.token?.plainTextToken);
          navigate("/");
          // redirect home page
      },
      onError: (error) => {
          console.log("Error", error.response.data.code);
          if (error.response.data.code == 401) {
              toast.error("Email not Auth", {
                  style: {
                      border: "1px solid #A52C45",
                      padding: "16px",
                      color: "#A52C45",
                  },
                  iconTheme: {
                      primary: "#A52C45",
                      secondary: "#FFFAEE",
                  },
              });
          }
      },
  });
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    };
    const onSubmit = (values) => {
        console.log(values);
        registerMutation.mutate(values)
    }
  return (
      <div className="login_page px">
        {/* validationSchema={registerValidation} */}
          <h6>Register</h6>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                  <WrapperInput name={"name"} label={"name"} isDefault />
                  <WrapperInput name={"email"} label={"Email"} isDefault />
                  <WrapperInput name={"phone"} label={"phone"} isPhone />
                  <WrapperInput name={"password"} label={"Password"} isPassword />
                  <WrapperInput name={"password_confirmation"} label={"Password"} isPassword />
                  <Button title={"Register"} isLoading={registerMutation.isPending ? true : false} />
                  <p className="login_footer">
                      already have account? <Link to={"/Login"}>login</Link>
                  </p>
              </Form>
          </Formik>
          <Footer />
      </div>
  );
}
