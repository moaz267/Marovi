import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import toast from "react-hot-toast";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Button from "../../components/button/Button";

export default function Login() {
    const navigate =useNavigate()
    const loginMutation = useMutation({
        mutationFn: async (values) =>
            await AxiosConfig("api/auth/login", {
                method: "POST",
                data: values,
            }),
        onSuccess: (data) => { 
            toast.success("Login Success", {
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
            console.log(data?.data?.data?.token?.plainTextToken);
            
            navigate("/")
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
            
        }
    });
    const initialValues = {
        user: "",
        password: "",
    };
    const onSubmit = (values) => {
        loginMutation.mutate(values);
        console.log(loginMutation.data);
        
    };
    useEffect(() => {        
        if (sessionStorage.getItem("token")) {
            navigate("/")
        }
    },[])
    return (
        <div className="login_page px">
            <h6>Login</h6>
            {/* validationSchema={LoginValidation} */}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <WrapperInput name={"user"} label={"Email"} isDefault />
                    <WrapperInput name={"password"} label={"Password"} isPassword />
                    <Button title={"Login"} isLoading={loginMutation.isPending ? true : false} />
                    <p className="login_footer">
                        Don’t have Account? <Link to="/Register">Register</Link>
                    </p>
                </Form>
            </Formik>
        </div>
    );
}
