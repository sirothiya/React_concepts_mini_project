import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUpForm = ({ setIslogged }) => {
  const navigate = useNavigate();
  const [accounttype, setAccounttype] = useState("student");
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
      toast.success("Password not match");
      return;
    }
    setIslogged(true);
    toast.success("Account Created");
    const accountData={
      ...formData
    }
    const finaldata={
      ...accountData,accounttype
    }
    console.log(finaldata);
    navigate("/dashboard");
  };
  return (
    <div className=" p-4">
      <div className="flex bg-slate-700 p-2 gap-x-1 my-6 rounded-full w-full">
        <button
          onClick={() => {
            setAccounttype("student");
          }}
          className={`${
            accounttype === "student"
              ? "bg-slate-900 text-white"
              : "bg-slate-700 text-slate-400"
          } py-2 px-5 w-full rounded-full transition-all duration-200 `}
        >
          Student
        </button>
        <button
          onClick={() => {
            setAccounttype("instructor");
          }}
          className={`${
            accounttype === "instructor"
              ? "bg-slate-900 text-white"
              : "bg-slate-700 text-slate-400"
          } py-2 px-5 w-full rounded-full transition-all duration-200 `}
        >
          Instructor
        </button>
      </div>
      <br></br>
      <form onSubmit={submitHandler} className="w-full">
        <div className="flex  gap-x-3">
          <lable className="w-full">
            <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
              First Name <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter firstname"
              onChange={changeHandler}
              className="bg-slate-700 rounded-[0.5rem] text-[0.875rem] text-slate-200 w-full p-[8px] border-b-2 "
            ></input>
          </lable>

          <lable className="w-full">
            <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
              Last Name <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Enter lastname"
              onChange={changeHandler}
              className="bg-slate-700 text-[0.875rem] rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2 "
            ></input>
          </lable>
        </div>
        <br></br>
        <lable>
          <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
            Email Address <sup className="text-red-400">*</sup>
          </p>

          <input
            required
            type="email" 
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={changeHandler}
            className="bg-slate-700 text-[0.875rem]  rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2 "
          ></input>
        </lable>
        <br></br>
        <br></br>
        <div className="flex gap-x-3">
          <lable className="relative w-full">
            <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
              Create Password <sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={changeHandler}
              className="bg-slate-700 text-[0.875rem]  rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2 "
            ></input>
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-8 cursor-pointer "
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="grey" />
              ) : (
                <AiOutlineEye fontSize={24} fill="grey" />
              )}
            </span>
          </lable>

          <lable className="relative w-full">
            <p className="text-[0.875rem] text-slate-200 mb-0.5 leading-[1.375rem]">
              Confirm Password <sup className="text-red-400">*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Enter Confirm Password"
              onChange={changeHandler}
              className="bg-slate-700 text-[0.875rem]  rounded-[0.5rem] text-slate-200 w-full p-[8px] border-b-2 "
            ></input>
            <span
              onClick={() => {
                setShowConfirmPassword((prev) => !prev);
              }}
              className="absolute right-3 top-8 cursor-pointer "
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="grey" />
              ) : (
                <AiOutlineEye fontSize={24} fill="grey" />
              )}
            </span>
          </lable>
        </div>
        <button className="bg-yellow-500 w-full rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
