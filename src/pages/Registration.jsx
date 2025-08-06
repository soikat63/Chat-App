import { useState } from "react";
import RegistrationImage from "../assets/RegistrationImage.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNmaeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNmaeError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleRegistration = () => {
    if (!email) {
      setEmailError("Please enter your email address!");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError(" Please enter your valid email address!");
      }
    }
    if (!fullName) {
      setFullNmaeError("Please enter your name!");
    }

    if (!password) {
      setPasswordError("Please enter your password!");
    } else {
      // if (!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)) {
      //   setPasswordError("Password must be 8 character, with 1 uppercase, 1 lowercase, 1 number & 1 special character.")
      // }
    }

    if (email && fullName && password) {
      // Email&password- authentication-with firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
         sendEmailVerification(auth.currentUser)
          console.log("Registration Done! 👍");
          setTimeout(()=>{
            navigate ("/login");
          }, 2000) 
          
          setEmail("");
          setFullName("");
          setPassword("");
          
        })
        .catch((error) => {
          // console.log(error);
          const emailAuthErrorMassege = error.message
          if (emailAuthErrorMassege.includes("auth/email-already-in-use")) {
            setEmailError("This email is already exist!");
           }
         
        });
    }
  };
  return (
    <>
      <div className=" flex justify-between">
        {/* Left-Side */}
        <div className=" left w-40% h-screen mt-[100px] ml-[400px]">
          <div className="heading">
            <h1 className="font-Nunito font-bold text-[35px] text-Blue">
              Get started with easily register
            </h1>
            <p className="font-Nunito text-[20px] text-Gray">
              Free register and you can enjoy it
            </p>
          </div>

          {/* Form-Field */}
          <div className=" input-Field flex flex-col gap-7 justify-center items-center  ">
            {/* Email-Field */}
            <div className="input relative mt-4 w-[400px]">
              <input
                onChange={handleEmail}
                id="email"
                type="email"
                value={email}
                placeholder=""
                className={`peer px-3 py-5 w-[400px] rounded-[8px] outline-none border-2  ${
                  emailError
                    ? "border-red-500"
                    : "border-black/30 focus:border-green-600"
                }`}
              />
              <p className="px-3 py-2 text-red-500">{emailError}</p>
              <label
                htmlFor="email"
                className={` absolute left-[15px] text-base top-[-13px] px-4 bg-white   peer-focus:top-[-13px] peer-focus:text-base peer-focus:text-green-600 focus:text-sm cursor-auto  font-semibold  text-black/50
              peer-placeholder-shown:top-[-13px] border border-Gray rounded  ${
                emailError ? "text-red-500 border-red-500" : "text-black/50"
              }`}
              >
                {" "}
                Email Address
              </label>
            </div>

            {/* FullName-Field */}
            <div className="input relative mt-4 w-[400px]">
              <input
                onChange={handleFullName}
                id="name"
                type="text"
                value={fullName}
                placeholder=""
                className={`peer px-3 py-5 w-[400px] rounded-[8px] outline-none border-2  ${
                  fullNameError
                    ? "border-red-500"
                    : "border-black/30 focus:border-green-600"
                }`}
              />

              <p className="px-3 py-2 text-red-500">{fullNameError}</p>
              <label
                htmlFor="name"
                className={`absolute left-[15px] text-base top-[-13px] px-4 bg-white rounded border border-Gray  peer-focus:top-[-13px] peer-focus:text-base  
              peer-focus:text-green-600 focus:text-sm cursor-auto  font-semibold  text-black/50 peer-placeholder-shown:top-[-13px] ${
                emailError ? "text-red-500 border-red-500" : "text-black/50"
              }`}
              >
                Full Name
              </label>
            </div>

            {/* Password-Field  */}
            <div className="input relative mt-4 w-[400px]">
              <input
                onChange={handlePassword}
                id="password"
                value={password}
                type={passwordShow ? "text" : "password"}
                placeholder=""
                className={`peer pl-3 pr-9 py-5 w-[400px] rounded-[8px] outline-none border-2 ${
                  passwordError
                    ? "border-red-500"
                    : "border-black/30 focus:border-green-600"
                }`}
              />

              {password &&
                (passwordShow ? (
                  <IoMdEye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-[25px] right-[15px] cursor-pointer "
                  />
                ) : (
                  <IoMdEyeOff
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-[25px] right-[15px] cursor-pointer "
                  />
                ))}

              <p className="px-3 py-2 text-red-500">{passwordError}</p>
              <label
                htmlFor="password"
                className={`absolute left-[15px] text-base top-[-13px] px-4 bg-white   peer-focus:top-[-13px] peer-focus:text-base peer-focus:text-green-600 focus:text-sm cursor-auto  font-semibold  text-black/50
               peer-placeholder-shown:top-[-13px] border border-Gray rounded ${
                 emailError ? "text-red-500 border-red-500" : "text-black/50"
               }`}
              >
                {" "}
                Enter Your Password
              </label>
            </div>

            {/* Button-For-SignUp  */}
            <div className="button flex flex-col items-center gap-4">
              <button
                onClick={handleRegistration}
                className="font-Nunito font-bold text-[20px] py-4 text-White bg-Black w-[368px] rounded-full cursor-pointer"
              >
                Sign Up
              </button>
              <p className=" font-Open-Sans text-Blue">
                Already have an account ?
                <Link to="/login" className="font-bold text-[#EA6C00] ">
                  {" "}
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right-Side */}
        <div className="div">
          <img className="w-full h-screen" src={RegistrationImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Registration;
