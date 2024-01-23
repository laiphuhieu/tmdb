import React from "react";
import Layout from "@/layouts/components/Layout";
import Container from "@/layouts/components/Container/Container";
import SignInPage from "@/layouts/SignInPage/SignInPage";
import { useAppSelector } from "@/custom-hooks/useApp";

const SignIn = () => {
  const flash = useAppSelector((state) => state.flash.flash);

  return (
    <Layout>
      {flash ? (
        <>
          <section className="w-full bg-[#01b4e4] mt-[60px]">
            <div className="w-full flex justify-center">
              <div className="max-w-[1400px] py-[30px] px-[40px] justify-center flex-wrap">
                <div className="w-full flex justify-center flex-nowrap items-center">
                  <h2 className="text-[24px] text-white">Reset Password</h2>
                </div>
                <p className="text-[20.8px] text-white">{flash}</p>
                <p className="text-[20.8px] text-white flex justify-center flex-nowrap items-center">
                  Make sure to check both your inbox and spam folder!
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
      <Container>
        <SignInPage />
      </Container>
    </Layout>
  );
};

export default SignIn;
