import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex w-full max-w-[1300px] mx-auto my-0 justify-center">
      {children}
    </div>
  );
};

export default Container;
