import LoginImage from "../assets/loginImage.png";
import GoogleImage from "../assets/googleImage.png";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleLogin = () => {
    if (!email) {
      setEmailError("Please enter your email address! ");
    }

    if (!password) {
      setPasswordError("Please enter your password!");
    }
    if (email && password) {
        setEmail("");
        setPassword("")
        
    }

  };

  return (
    <div className="flex items-center justify-center">
      <div className="left  ">
        <h1 className="font-Open-Sans font-bold text-[34px] text-Blue">
          Login to your account!
        </h1>
        <div
          className="flex items-center px-6 py-6 w-[250px] border border-Gray/50 rounded-xl gap-3
            "
        >
          <img src={GoogleImage} alt="" />
          <p className=" font-Open-Sans font-semibold text-[14px] text-Blue">
            Login with Google
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-8 ">
          <div className="input w-[360px] relative ">
            <input
              onChange={handleEmail}
              id="email"
              type="email"
              placeholder=""
              value={email}
              className={`peer border rounded-sm outline-none px-4 py-5 w-full text-Blue font-Nunito font-semibold ${
                emailError
                  ? "border-red-600"
                  : "border-Black/30 focus:border-green-600 "
              }`}
            />
            <label
              htmlFor="email"
              className={` absolute top-[-13px] left-[15px] px-3 bg-white border  rounded-[4px]  peer-placeholder-shown:top[-13px] ${
                emailError
                  ? "border-red-600 text-red-600"
                  : "peer-focus:text-green-600 peer-focus:border-green-600 border-Black/30"
              }`}
            >
              Email Address
            </label>
            <p className="text-red-600 px-4 py-2 font-Nunito ">{emailError}</p>
          </div>
          <div className="input w-[360px] relative">
            <input
              onChange={handlePassword}
              id="password"
              type={passwordShow ? "text": "password"}
              placeholder=""
              value={password}
              className={`peer border border-Black/30 outline-none px-4 py-5 w-full rounded-sm text-Blue font-Nunito font-semibold  ${
                passwordError ? "border-red-600" : "focus:border-green-600"
              }`}
            />
            {password &&
              (passwordShow ? (
                <IoMdEye
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute right-4 size-6 top-[21px] cursor-pointer"
                />
              ) : (
                <IoMdEyeOff
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute right-4 size-6 top-[21px] cursor-pointer"
                />
              ))}

            <label
              htmlFor="password"
              className={`absolute top-[-13px] left-[15px] px-3 bg-White border border-Black/30 rounded-[4px]  peer-placeholder-shown:top-[-13px] ${
                passwordError
                  ? " border-red-600 text-red-600"
                  : "peer-focus:border-green-600 peer-focus:text-green-600 "
              }`}
            >
              Enter your password
            </label>
            <p className="text-red-600 px-4 py-2 font-Nunito ">
              {passwordError}
            </p>
          </div>
          <button
            onClick={handleLogin}
            className="w-[360px] py-6 bg-Black text-White font-Open-Sans font-semibold text-[20px] rounded-lg cursor-pointer"
          >
            Login To Continue
          </button>
           <p className=" font-Open-Sans text-center text-Blue text-[14px]">Don't have an account? <Link to="/registration" className="font-semibold text-[#EA6C00]">Sign up</Link></p>
        </div>
      </div>

      <div className="right">
        {/* <img className="h-screen" src={LoginImage} alt="" /> */}
      </div>
    </div>
  );
};

export default Login;
