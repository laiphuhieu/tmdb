import React, { useCallback, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPasswordPage = () => {
  const [resetEmail, setResetEmail] = useState("");

  const handleResetPassword = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      try {
        await sendPasswordResetEmail(auth, resetEmail);
        toast.success("Password reset email sent successfully.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setResetEmail("");
        console.log("done");
      } catch (error) {
        console.log(error);
      }
    },
    [resetEmail]
  );

  return (
    <div className="mt-[64px]">
      <div className="py-[30px] h-[calc(100vh-64px-327px)]">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <label>
            Email:
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
