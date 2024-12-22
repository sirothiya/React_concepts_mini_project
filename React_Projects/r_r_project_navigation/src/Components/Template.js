import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIslogged }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.75rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-slate-300 ">{desc1}</span>
          <br />
          <span className="text-slate-600 italic">{desc2}</span>
        </p>
        {formType === "signup" ? (
          <SignUpForm setIslogged={setIslogged} />
        ) : (
          <LoginForm setIslogged={setIslogged} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-slate-900"></div>
          <p className="text-slate-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-slate-900"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-slate-300 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Goggle</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={require("../Assets/template.jpg")}
          alt="Pattern"
          width={558}
          height={104}
          loading="lazy"
        ></img>
        <img
          src={image}
          alt="Pattern"
          width={150}
          height={90}
          loading="lazy"
          className="absolute top-6 right-14"
        ></img>
      </div>
    </div>
  );
};

export default Template;
