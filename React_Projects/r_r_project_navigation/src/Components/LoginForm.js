import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIslogged }) => {
  const navigate = useNavigate();
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

  const submitHandler = (event) => {
    event.preventDefault(event);
    setIslogged(true);
    toast("logged in");
    navigate("/dashboard");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <div className="flex flex-col w-full gap-y-2">
        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
            Email Address <sup className="text-red-400">*</sup>
          </p>
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          placeholder="Enter email id"
          onChange={changeHandler}
          className="bg-slate-700 rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2 "
        />
      </div>

      <div className="flex flex-col w-full relative gap-y-2">
        <label htmlFor="password" className="w-full">
          <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
            Enter Password <sup className="text-red-400">*</sup>
          </p>
        </label>
        <div className="relative w-full">
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formdata.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
            id="password"
            className=" bg-slate-700 rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="grey" />
            ) : (
              <AiOutlineEye fontSize={24} fill="grey" />
            )}
          </span>
        </div>
        <Link
          to="#"
          className="text-xs mt-1 text-blue-500 max-w-max ml-auto mt-4"
        >
          Forgot Password
        </Link>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="bg-yellow-500 w-full rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-6"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
