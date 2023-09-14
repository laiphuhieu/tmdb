import React, { useMemo } from "react";

import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  position: "top" | "right" | "bottom" | "left";
  theme: "dark" | "light";
}

const Tooltip = ({ children, title, position, theme }: TooltipProps) => {
  const tooltipPosition = useMemo(() => {
    switch (position) {
      case "top":
        return styles["tooltip__top"];
      case "right":
        return styles["tooltip__right"];
      case "left":
        return styles["tooltip__left"];
      default:
        return styles["tooltip__bottom"];
    }
  }, [position]);

  return (
    <div className={`${styles["tooltip"]}`}>
      {children}
      <div
        className={`${styles["tooltip-text"]} ${
          theme === "dark" ? "dark" : "light"
        } ${tooltipPosition}`}
      >
        {title}
        <span className={`${styles["arrow"]}`}></span>
      </div>
    </div>
  );
};

export default Tooltip;
