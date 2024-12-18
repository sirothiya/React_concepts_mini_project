import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({setIslogged}) => {
  const navigate=useNavigate()
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setformdata((prev) => {
      return { ...prev, [event.target.name]: [event.target.value] };
    });
  };

  const submitHandler=(event)=>{
   event.preventDefault(event)
   setIslogged(true);
   toast("logged in")
   navigate("/dashboard")

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <p>
            Email Address<sup>*</sup>
          </p>
        </label>
        <br></br>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          placeholder="Enter email id "
          onChange={changeHandler}
        />
        <br></br>
        <label>
          <p>
            PassWord <sup>*</sup>
          </p>
          <br></br>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formdata.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
          />
          <span onClick={()=>{
            setShowPassword(prev=>!prev)
          }}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
          <Link to="#"><p>Forgot Password</p></Link>
        </label>
        <button>SignIn</button>
      </form>
    </div>
  );
};

export default LoginForm;
