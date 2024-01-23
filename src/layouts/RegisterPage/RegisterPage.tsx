import React, { useState, useCallback } from "react";

import { ReactComponent as CheckIcon } from "@/assets/images/check.svg";
import { ReactComponent as CautionIcon } from "@/assets/images/caution.svg";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import * as yup from "yup";
import { useAppDispatch } from "@/custom-hooks/useApp";
import { setError } from "@/redux/slice.ts/errorSlice";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validateSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup
      .string()
      .min(6, "6 characters minimum")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Password must match")
      .required("Confirm password is required"),
  });

  const handleRegister = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      try {
        await validateSchema.validate({ email, password, confirmPassword });

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        if (user) {
          await sendEmailVerification(user);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setIsError("");

          navigate("/signIn");
          if (!user.emailVerified) {
            dispatch(
              setError(
                "Your email address hasn't been verified. Please click the verification link in the email that was sent to the address you signed up with. (Don't forget to check your spam folder.)"
              )
            );
          }
        } else {
          setIsError("");
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        if (!email) {
          setIsError("Email is required");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else if (!password) {
          setIsError("Password is required");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else if (password.length < 6) {
          setIsError("Password needs to be at least 6 characters long");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else if (confirmPassword !== password) {
          setIsError("Password must match");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else if (error.code === "auth/email-already-in-use") {
          setIsError("Email already in use");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
        return;
      }
    },
    [email, password, confirmPassword, validateSchema, navigate, dispatch]
  );

  return (
    <div className="mt-[64px]">
      <div className="py-[30px] h-[calc(100vh-64px-327px)]">
        <div className="my-[20px]">
          <div className="w-full flex items-center justify-center">
            <div className="max-w-[1400px] w-full px-[40px]">
              <div className="flex items-start w-full">
                <div className="min-w-[260px] w-[260px] border-[1px] border-solid border-[#e3e3e3] rounded-[8px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <h3 className="flex items-center justify-between p-[20px] text-white text-[19.2px] bg-[#01b4e4]">
                    Benefits of being a member
                  </h3>
                  <div>
                    <ul className="overflow-visible py-[8px]">
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Find something to watch on your subscribed streaming
                        services
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Log the movies and TV shows you have watched
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Keep track of your favourite movies and TV shows and get
                        recommendations from them
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Build and maintain a personal watchlist
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Build custom mixed lists (movies and TV)
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Take part in movie and TV discussions
                      </li>
                      <li className="pl-[40px] flex w-full text-[16px] leading-[22.4px]">
                        <span className="ml-[-20px] top-[5px] mr-[3px]">
                          <CheckIcon className="w-[19.2px] h-[19.2px]" />
                        </span>
                        Contribute to, and improve the information in our
                        database
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full">
                  <div className="pl-[30px] w-full">
                    <h2 className="text-[24px]">Sign up for an account</h2>
                    <p className="mt-[10px] text-[16px] text-black">
                      Signing up for an account is free and easy. Fill out the
                      form below to get started. JavaScript is required to to
                      continue.
                    </p>

                    {isError && (
                      <>
                        <div className="mt-[30px] border-[1px] border-solid border-[#e3e3e3] rounded-[8px] mb-[30px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                          <div>
                            <div>
                              <h2 className="bg-[#d40242] justify-between p-[20px] text-[19.2px] leading-[23px] text-white">
                                <span className="flex items-center font-thin ">
                                  <CautionIcon />
                                  &nbsp; There was an error processing your
                                  signup
                                </span>
                              </h2>
                            </div>
                            <div className="p-[20px]">
                              <ul className="list-none leading-[22.4px]">
                                <li>{isError}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <form onSubmit={handleRegister}>
                      <fieldset>
                        <div className="mt-[16px]">
                          <label htmlFor="username">
                            <span className="text-[#212529]">Username</span>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="rounder-[4px] py-[6px] px-[12px] w-full border-[1px] border-solid border-[#CED4DA] outline-none"
                            />
                          </label>
                        </div>
                        <div className="mt-[16px]">
                          <label htmlFor="password">
                            <span className="text-[#212529]">
                              Password (6 characters minimum)
                            </span>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="rounder-[4px] py-[6px] px-[12px] w-full border-[1px] border-solid border-[#CED4DA] outline-none"
                            />
                          </label>
                        </div>

                        <div className="mt-[16px]">
                          <label htmlFor="password">
                            <span className="text-[#212529]">
                              Password Confirm
                            </span>
                            <input
                              type="password"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              required
                              className="rounder-[4px] py-[6px] px-[12px] w-full border-[1px] border-solid border-[#CED4DA] outline-none"
                            />
                          </label>
                        </div>
                      </fieldset>

                      <p className="mt-[30px] text-black text-[16px]">
                        By clicking the &quot;Sign up&quot; button below, I
                        certify that I have read and agree to the TMDB terms of
                        use and privacy policy.
                      </p>

                      <div className="flex items-center mt-[30px]">
                        <button
                          type="submit"
                          className="border[#01b4e4] rounded-[8px] text-white !bg-[#01b4e4] cursor-pointer py-[6px] px-[20px] hover:!bg-[#032541] transition-colors duration-200 ease-in-out"
                        >
                          Đăng ký
                        </button>
                        <p className="ml-[10px] ">
                          <Link
                            to="/"
                            className="text-[#01b4e4] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#01b4e4]"
                          >
                            Cancel
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
