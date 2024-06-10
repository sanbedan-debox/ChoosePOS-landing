import React, { FC, useState, useEffect } from "react";
import { Toast } from "./Toast";
import group4 from "../../assets/jpg/group4.webp";
import Image from "next/image";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface ModalbtnProps {
  text: string;
  emailp: string;
}

const Modalbtn: FC<ModalbtnProps> = ({ text, emailp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Initial form data setup
  const [formData, setFormData] = useState({
    name: "",
    email: emailp,
    website: "",
    software: "None",
    phoneNumber: "",
  });

  useEffect(() => {
    if (isModalOpen) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: emailp,
      }));
    }
  }, [isModalOpen, emailp]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidUrl = (urlString: string): boolean => {
    try {
      return (
        urlString.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        ) !== null
      );
    } catch (e) {
      return false;
    }
  };
  const isValidEmail = (emailString: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailString);
  };

  const getClickableLink = (link: string) => {
    return link.startsWith("http://") || link.startsWith("https://")
      ? link
      : `https://${link}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name.trim()) {
      setToast({ message: "Please enter your name", type: "error" });
      return;
    }
    if (!formData.email.trim()) {
      setToast({ message: "Please enter your email", type: "error" });
      return;
    }
    if (!isValidEmail(formData.email.trim())) {
      setToast({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }
    if (formData.website.trim()) {
      formData.website = getClickableLink(formData.website.trim());
    }
    if (formData.website.trim() && !isValidUrl(formData.website.trim())) {
      setToast({ message: "Please enter a valid website URL", type: "error" });
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setToast({ message: "Please enter your phone number", type: "error" });
      return;
    }
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber.trim())) {
      setToast({
        message: "Please enter a valid 10-digit phone number",
        type: "error",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({
          message: "We Successfully Received your Request",
          type: "success",
        });
        toggleModal();
        setFormData({
          name: "",
          email: "",
          website: "",
          software: "None",
          phoneNumber: "",
        });
      } else {
        setToast({ message: "Failed to send email", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setToast({ message: "Failed to send email", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setToast(null);
      }, 3000);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <button
          type="button"
          className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
          onClick={toggleModal}
        >
          {text}
        </button>

        {isModalOpen && (
          <>
            <div
              className="fixed top-0 w-screen h-screen right-0 bottom-0 left-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md z-10"
              // onClick={toggleModal}
              onClick={toggleModal}
            ></div>
            <m.div
              variants={fadeIn("up", "tween", 0, 0.2)} // Adjust direction, type, delay, and duration for desired effect
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              id="crud-modal"
              tabIndex={-1}
              aria-hidden="true"
              className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full h-full "
            >
              <div className="relative p-4 w-full max-w-5xl max-h-full">
                <div
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  }}
                  className="relative rounded-lg shadow"
                >
                  <div className="bg-dot-white/[0.12] md:bg-dot-white/[0.15]">
                    <div className="flex">
                      {/* <div className="hidden sm:block h-auto relative w-full">
                        <Image className=" " src={group4} alt="text" fill />
                        <p className="absolute bottom-0 left-0 text-white p-2 text-left font-bold text-xl">
                          Built along with Restaurant Owners, Marketers,
                          Technology Experts to revolutionise the Restaurant
                          space.
                        </p>
                      </div> */}
                      <div className="hidden sm:block  h-auto relative w-full">
                        <Image
                          className="rounded-l-lg"
                          src={group4}
                          alt="text"
                          fill
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                          <p className="text-white p-2 text-center font-bold text-xl">
                            Built along with Restaurant Owners, Marketers,
                            Technology Experts to revolutionise the Restaurant
                            space.
                          </p>
                        </div>
                      </div>

                      <form className="px-4 w-full" onSubmit={handleSubmit}>
                        <div className="flex items-start justify-between p-4 py-2  rounded-t dark:border-gray-600 ">
                          <div className="flex items-center space-x-4"></div>
                          <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={toggleModal}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        <div className="grid gap-4 mb-4 grid-cols-2 text-start">
                          <div className="col-span-2 ">
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="bg-secondary bg-opacity-30  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="bg-secondary bg-opacity-30  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="website"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Current Website
                            </label>
                            <input
                              type="text"
                              name="website"
                              id="website"
                              value={formData.website}
                              onChange={handleChange}
                              className="bg-secondary bg-opacity-30  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Enter your website URL"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Current Software List
                            </label>
                            <div className="relative">
                              <select
                                name="software"
                                id="software"
                                value={formData.software}
                                onChange={handleChange}
                                className="appearance-none border text-sm rounded-lg focus:bg-black block w-full p-2.5 bg-secondary bg-opacity-30 border-gray-500 placeholder-black text-neutral-400"
                              >
                                <option value="None">None</option>
                                <option value="Software1">Software1</option>
                                <option value="Software2">Software2</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                  className="w-4 h-4 text-gray-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-2">
                            <label
                              htmlFor="phoneNumber"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Phone Number
                            </label>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-300 border-gray-600">
                                +1
                              </span>
                              <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="bg-secondary bg-opacity-30 border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter your phone number"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className={`h-10 px-4 py-2 m-1 mb-10 text-white transition-colors duration-300 transform rounded-full focus:outline-none md:w-auto w-32 flex items-center justify-center ${
                            loading
                              ? "bg-gray-400"
                              : "bg-primary hover:bg-white hover:text-primary"
                          }`}
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
                            "Submit"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </>
        )}
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </LazyMotion>
  );
};

export default Modalbtn;
