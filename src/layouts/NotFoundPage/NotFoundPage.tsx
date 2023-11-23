import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="mt-[64px]">
      <div className="py-[30px] px-[40px] h-[calc(100vh-64px-327px)]">
        <div className="mb-[20px] flex items-center">
          <h2 className="text-[24px] font-semibold">
            Oops! We can&apos;t find the page you&apos;re looking for
          </h2>
        </div>
        <div className="text-[16px]">
          You tried to request a page that doesn&apos;t exist. If you believe
          this to be in error, let us know.{" "}
          <div>
            <Link to="/" className="text-[#01b4e4]">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
