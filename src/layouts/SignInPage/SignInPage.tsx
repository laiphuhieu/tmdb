import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useNavigate } from "react-router-dom";

import { ReactComponent as CautionIcon } from "@/assets/images/caution.svg";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/useApp";
import { setError } from "@/redux/slice.ts/errorSlice";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState<string[]>([]);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.error.error);
  const dispatch = useAppDispatch();
  console.log("error:", error);
  console.log("isError:", isError);

  const handleSignIn = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      try {
        setIsError([]);
      } catch (signInError) {
        if (!email) {
          setIsError(["Please fill email."]);
          return;
        } else if (!password) {
          setIsError(["Please fill password."]);
          return;
        }
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setEmail("");
        setPassword("");
        if (userCredential.user.emailVerified) {
          navigate("/");
        } else {
          dispatch(
            setError(
              "Your email address hasn't been verified. Please click the verification link in the email that was sent to the address you signed up with. (Don't forget to check your spam folder.)"
            )
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.code === "auth/invalid-credential") {
          setIsError(["Please check your username or password"]);
          setEmail("");
          setPassword("");
        } else {
          setIsError(["We couldn't find your username."]);
          setEmail("");
          setPassword("");
        }

        setEmail("");
        setPassword("");
      }
    },

    [email, password, navigate, dispatch]
  );

  const combinedErrors = [...isError, error].filter(Boolean);

  return (
    <div className="mt-[64px]">
      <section>
        <div className="py-[30px]  ">
          <div className="w-full">
            <h2 className="mb-[4px] text-[24px]">Login to your account</h2>
            <p className="text-[16px] mb-[16px] text-black">
              In order to use the editing and rating capabilities of TMDB, as
              well as get personal recommendations you will need to login to
              your account. If you do not have an account, registering for an
              account is free and simple.{" "}
              <Link
                to="/register"
                className="text-[#01b4e4] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#01b4e4]"
              >
                Click here
              </Link>{" "}
              to get started.
            </p>
            <p className="text-[16px] mb-[16px] text-black">
              If you signed up but didn&apos;t get your verification email,{" "}
              <Link
                to="resend-email-verification"
                className="text-[#01b4e4] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#01b4e4]"
              >
                Click here
              </Link>{" "}
              to have it resent.
            </p>

            {combinedErrors?.length > 0 && (
              <>
                <div className="mt-[30px] border-[1px] border-solid border-[#e3e3e3] rounded-[8px] mb-[30px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <div>
                    <div>
                      <h2 className="bg-[#d40242] justify-between p-[20px] text-[19.2px] leading-[23px] text-white">
                        <span className="flex items-center font-thin ">
                          <CautionIcon />
                          &nbsp; There was a problem
                        </span>
                      </h2>
                    </div>
                    <div className="p-[20px]">
                      <ul className="list-none leading-[22.4px]">
                        {combinedErrors?.map((err, idx) => (
                          <li key={idx}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            <form onSubmit={handleSignIn}>
              <fieldset>
                <div className="mt-[16px]">
                  <label htmlFor="username">
                    <span className="text-[#212529]">Username</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounder-[4px] py-[6px] px-[12px] w-full border-[1px] border-solid border-[#CED4DA] outline-none"
                    />
                  </label>
                </div>
                <div className="mt-[16px]">
                  <label htmlFor="password">
                    <span className="text-[#212529]">Password</span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounder-[4px] py-[6px] px-[12px] w-full border-[1px] border-solid border-[#CED4DA] outline-none"
                    />
                  </label>
                </div>
              </fieldset>

              <div className="flex items-center mt-[30px]">
                <button
                  type="submit"
                  className="border[#01b4e4] rounded-[8px] text-white !bg-[#01b4e4] cursor-pointer py-[6px] px-[20px] hover:!bg-[#032541] transition-colors duration-200 ease-in-out"
                >
                  Đăng nhập
                </button>
                <p className="ml-[10px] ">
                  <Link
                    to="/reset-password"
                    className="text-[#01b4e4] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#01b4e4]"
                  >
                    Reset password
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
