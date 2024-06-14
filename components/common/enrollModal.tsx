import { fadeIn } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import group4 from "../../assets/jpg/group4.webp";
import useStore from "@/store/store";
import Select from "react-select";
import { SingleValue } from "react-select";
import { sdk } from "@/utils/graphqlClient";
import { SoftWareEnum, WaitListUser } from "@/generated/graphql";

const ModalPopUp: FC = () => {

  const { isModalOpen, toggleModal, emailp, setToast, setEmailp } = useStore();

  const options = [
    { value: SoftWareEnum.Software1, label: "software1" },
    { value: SoftWareEnum.Software2, label: "software2" },
    { value: SoftWareEnum.Software3, label: "software3" },
  ];

  const [loading, setLoading] = useState(false);

  const [waitListUser, setWaitListUser] = useState<WaitListUser>({
    name: "",
    email: emailp,
    website: "",
    software: SoftWareEnum.None,
    number: "",
  })

  const [software, setSoftware] =
  useState<SingleValue<{ value: string; label: string }>>();

  useEffect(() => {
    if (isModalOpen) {
      setWaitListUser((prevFormData) => ({
        ...prevFormData,
        email: emailp,
      }));
    }
  }, [isModalOpen, emailp]);


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
  // className="appearance-none bg-secondary bg-opacity-30 border border-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:outline-none focus:border-transparent block w-full pl-3 pr-10 py-2.5 text-neutral-400 placeholder-neutral-400 focus:bg-black transition duration-150 ease-in-out"

  const handleCreateWaitListUser = async () => {
    try {

      if (!waitListUser.name || !waitListUser.email || !waitListUser.number) {
        setToast({ message: "Please fill all the fields", type: "error" });
        setTimeout(() => {
          setToast(null);
        }, 2000);
        return;
      }

      if (!isValidEmail(waitListUser.email.trim())) {
        setToast({
          message: "Please enter a valid email address",
          type: "error",
        });
        setTimeout(() => {
          setToast(null);
        }, 2000);
        return;
      }

      if (waitListUser.website.trim()) {
        waitListUser.website = getClickableLink(waitListUser.website.trim());
      }

      if (!isValidUrl(waitListUser.website.trim())) {
        setToast({ message: "Please enter a valid website URL", type: "error" });
        setTimeout(() => {
          setToast(null);
        }, 2000);
        return;
      }

      if (waitListUser.website.trim()) {
        waitListUser.website = getClickableLink(waitListUser.website.trim());
      }
      if (waitListUser.website.trim() && !isValidUrl(waitListUser.website.trim())) {
        setToast({ message: "Please enter a valid website URL", type: "error" });
        setTimeout(() => {
          setToast(null);
        }, 2000);
        return;
      }
      setLoading(true)
      const response = await sdk.AddWaitListUsers({
        input: {
          email: waitListUser.email.trim(),
          name: waitListUser.name.trim(),
          number: waitListUser.number.trim(),
          software: waitListUser.software,
          website: waitListUser.website,
        }
      })
      console.log(response)
      setLoading(false)

      if (response) {
        setToast({
          message: "We Successfully Received your Request",
          type: "success",
        });
        toggleModal();
        setWaitListUser({
          name: "",
          email: "",
          website: "",
          software: SoftWareEnum.None,
          number: "",
        });
        setEmailp("")
      }
      return
      
    } catch (error:any) {
      setToast({ message: error.response.errors[0].message.split(":")[1], type: "error" });
      setLoading(false)
      return
    }
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center ">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md overflow-hidden"
            onClick={toggleModal}
          ></div>

          <motion.div
            variants={fadeIn("up", "tween", 0, 0.5)} // Adjust direction, type, delay, and duration for desired effect
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: true, amount: 0.25 }}
            className="relative flex items-center justify-center p-4 w-full max-w-5xl mx-auto"
          >
            <div
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              className="relative rounded-lg shadow-lg w-full max-h-full"
            >
              <div className="bg-dot-white/[0.12] md:bg-dot-white/[0.15]">
                <div className="flex">
                  <div className="hidden sm:block h-auto relative w-full">
                    <Image
                      className="rounded-l-lg"
                      src={group4}
                      alt="text"
                      fill
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h2 className="text-white font-bold text-4xl mb-2">
                        Join the Waitlist
                      </h2>
                      <p className="text-neutral-400 text-xl  text-left">
                        Built along with Restaurant Owners, Marketers,
                        Technology Experts to revolutionize the Restaurant
                        space.
                      </p>
                    </div>
                  </div>

                  <form className="px-4 w-full">
                    <div className="flex items-start justify-between p-4 py-2 rounded-t dark:border-gray-600">
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
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={waitListUser.name}
                          onChange={(e) => {
                            setWaitListUser((pre) => ({
                              ...pre,
                              name: e.target.value,
                            }))
                          }}
                          className="bg-secondary bg-opacity-30 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-transparent block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-transparent"
                          placeholder="Enter your name"
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
                          name="email"
                          id="email"
                          value={waitListUser.email}
                          onChange={(e) => {
                            setWaitListUser((pre) => ({
                              ...pre,
                              email: e.target.value,
                            }))
                          }}
                          className="bg-secondary bg-opacity-30 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-transparent block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-transparent"
                          placeholder="Enter your email"
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
                          value={waitListUser.website}
                          onChange={(e) => {
                            setWaitListUser((pre) => ({
                              ...pre,
                              website: e.target.value,
                            }))
                          }}
                          className="bg-secondary bg-opacity-30 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-transparent block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-transparent"
                          placeholder="Enter your website URL"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Current Software List
                        </label>
                        <div className="relative">
                          <Select
                            classNames={{
                              placeholder: (state) => "!text-gray-400",
                              control: (state) =>
                                "!bg-secondary !bg-opacity-30 !border-none !text-sm !rounded-lg  !w-full  transition duration-150 ease-in-out !shadow-none ",
                              menu: (state) => "z-[100] !bg-[#142D5F] ",
                              singleValue: (state) => "!text-white",
                              option: (state) =>
                                `!text-sm hover:!bg-white hover:!text-black focus:!bg-transparent  ${
                                  state.isFocused || state.isSelected
                                    ? "!bg-transparent"
                                    : ""
                                }`,
                            }}
                            // styles={reactSelectColorStyles}
                            options={options}
                            value={software}
                            onChange={(
                              value: SingleValue<{
                                value: string;
                                label: string;
                              }>
                            ) => {
                              setSoftware(value)
                              setWaitListUser((pre) => ({
                                ...pre,
                                software: value?.value as SoftWareEnum
                              }))
                            }}
                          />
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
                          <span className="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-slate-800 text-gray-300 border-slate-800">
                            +1
                          </span>
                          <input
                            type="number"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={waitListUser.number}
                            onChange={((e) => {
                              setWaitListUser((pre) => ({
                                ...pre,
                                number:e.target.value
                              }))
                            })}
                            className="bg-secondary bg-opacity-30 border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-primary-600 focus:outline-none focus:border-transparent block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-transparent"
                            placeholder="Enter your phone number"
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
                      onClick={handleCreateWaitListUser}
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalPopUp;
