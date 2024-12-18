import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Template = ({ title, desc1, desc2, image, formType, setIslogged }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <br />
          <span>{desc2}</span>
        </p>
        {formType === "signup" ? (
          <SignUpForm setIslogged={setIslogged} />
        ) : (
          <LoginForm setIslogged={setIslogged} />
        )}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Goggle</p>
        </button>
      </div>

      <div>
        <img
          src={require("../Assets/template.jpg")}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        ></img>
        <img
          src={image}
          alt="Pattern"
          width={558}
          height={490}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};

export default Template;
