import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = ({ setIslogged }) => {
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast("Password not match");
      return;
    }
    setIslogged(true);
    toast("Account Created");
    navigate("/dashboard");
  };
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <lable>
            <p>
              First Name <sup>*</sup>
            </p>
            <br></br>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter firstname"
              onChange={changeHandler}
            ></input>
          </lable>
          <br></br>
          <lable>
            <p>
              Last Name <sup>*</sup>
            </p>
            <br></br>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Enter lastname"
              onChange={changeHandler}
            ></input>
          </lable>
        </div>
        <br></br>
        <lable>
          <p>
            Email Address <sup>*</sup>
          </p>
          <br></br>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={changeHandler}
          ></input>
        </lable>
        <br></br>
        <div>
          <lable>
            <p>
              Create Password <sup>*</sup>
            </p>
            <br></br>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={changeHandler}
            ></input>
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </lable>

          <lable>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <br></br>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Enter Confirm Password"
              onChange={changeHandler}
            ></input>
            <span
              onClick={() => {
                setShowConfirmPassword((prev) => !prev);
              }}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </lable>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
