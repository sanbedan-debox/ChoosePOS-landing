import { FC, useState } from "react";
import { createPortal } from "react-dom";

interface EnrollInputProps {
  buttonText: string;
}

const Toast: FC<{ message: string; type: "success" | "error" }> = ({
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

const EnrollInput: FC<EnrollInputProps> = ({ buttonText }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setToast({ message: "Invalid email address", type: "error" });
      setTimeout(() => {
        setToast(null);
      }, 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/enrollUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setToast({ message: "Email sent successfully", type: "success" });
        setEmail(""); // Clear the email field
      } else {
        setToast({ message: "Failed to send email", type: "error" });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setToast({ message: "Failed to send email", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setToast(null);
      }, 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <div className="flex rounded-full shadow-sm w-full bg-secondary bg-opacity-20 p-1">
      <div className="relative flex-grow">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        {/* Input field for email */}
        <input
          className="flex-1 w-full h-10 px-4 py-2 m-1 pl-10 text-white placeholder:text-xs md:placeholder:text-lg placeholder-neutral-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
          placeholder="Join the waitlist"
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>

      {/* Button to submit email */}
      <button
        type="button"
        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32 flex items-center justify-center"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-secondary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          buttonText
        )}
      </button>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default EnrollInput;
