import { FC } from "react";
import { createPortal } from "react-dom";

export const Toast: FC<{ message: string; type: "success" | "error" }> = ({
  message,
  type,
}) => {
  return createPortal(
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      style={{ zIndex: 1000 }}
    >
      {message}
    </div>,
    document.body
  );
};
