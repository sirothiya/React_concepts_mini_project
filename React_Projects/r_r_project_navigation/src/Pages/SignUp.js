import Template from "../Components/Template";

const SignUp = ({ setIslogged }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today,tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={require("../Assets/signup.png")}
      formType="signup"
      setIslogged={setIslogged}
    />
  );
};

export default SignUp;
