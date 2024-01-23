import React, { useCallback, useState } from "react";

import { auth } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { ReactComponent as CautionIcon } from "@/assets/images/caution.svg";
import { useNavigate } from "react-router-dom";
import { setFlash } from "@/redux/slice.ts/flashSlice";
import { useAppDispatch } from "@/custom-hooks/useApp";

const ResetPasswordPage = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleResetPassword = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      try {
        await sendPasswordResetEmail(auth, resetEmail);
        dispatch(
          setFlash(
            "The reset instructions have been sent to this email address if it belongs to a registered account on TMDB."
          )
        );
        setResetEmail("");
        setIsError("");
        navigate("/signIn");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.code === "auth/missing-email") {
          setIsError("Please enter a valid email address.");
        }
      }
    },
    [resetEmail, navigate, dispatch]
  );

  return (
    <div className="mt-[64px] flex justify-center items-center">
      <div className="w-full ">
        <div className="py-[30px] px-[40px] h-[calc(100vh-64px-327px)] max-w-[1400px] ">
          <div className="w-full">
            <h2 className="mb-[4px] text-[24px]">Reset Password</h2>
            {!isError && (
              <>
                <p className="text-[16px] mb-[16px] text-black">
                  Enter the email you used to sign up for a TMDB account and
                  we&apos;ll send you the steps required to reset your password.
                </p>
              </>
            )}
            {isError && (
              <>
                <div className="mt-[30px] border-[1px] border-solid border-[#e3e3e3] rounded-[8px] mb-[30px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <div>
                    <div>
                      <h2 className="bg-[#d40242] justify-between p-[20px] text-[19.2px] leading-[23px] text-white">
                        <span className="flex items-center font-thin ">
                          <CautionIcon />
                          &nbsp; Email Required
                        </span>
                      </h2>
                    </div>
                    <div className="p-[20px]">
                      <ul className="leading-[22.4px] list-none">
                        <li>{isError}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            <form onSubmit={(e) => handleResetPassword(e)}>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="What's your email?"
                  className="w-full border-[1px] border-solid border-[#dedede] py-[6px] px-[12px] focus:text-[#495057] focus:border-[#01b4e4] transition-color duration-300 outline-none"
                />
              </label>
              <div className="flex items-center mt-[30px]">
                <button
                  type="submit"
                  className="border[#01b4e4] rounded-[8px] text-white !bg-[#01b4e4] cursor-pointer py-[6px] px-[20px] hover:!bg-[#032541] transition-colors duration-200 ease-in-out"
                >
                  Continue
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
  );
};

export default ResetPasswordPage;
