import React from "react";
import AuthForm from "../components/form";
import AuthInfoPanel from "../components/FormInfo";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-blue-100 px-6 md:px-20">
      <AuthInfoPanel />
      <div className="mt-10 md:mt-0">
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Login;
