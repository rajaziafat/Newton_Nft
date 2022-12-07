import React from "react";

interface Props {
  direction: "left" | "right";
}

function Stripe({ direction }: Props) {
  return (
    <div
      className="h-[6px] bg-[#CED4D6] w-[80%]"
      style={{
        marginLeft: direction === "left" ? 0 : "auto",
        marginRight: direction === "right" ? 0 : "auto",
        clipPath:
          direction === "right"
            ? "polygon(2% 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0 0, 98% 0, 100% 100%, 0% 100%)",
      }}
    ></div>
  );
}

export default Stripe;
