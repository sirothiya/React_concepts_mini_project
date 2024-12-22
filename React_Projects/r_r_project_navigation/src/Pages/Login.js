import Template from "../Components/Template";

const Login = ({setIslogged}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today,tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={require("../Assets/login.png")}
      formType="login"
      setIslogged={setIslogged}
    />
  );
};

export default Login;
