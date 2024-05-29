export const Header = () => {
  return (
    <div className="px-4  mx-auto md:px-24 lg:px-8 mt-30 mb-35">
      <div className="mx-auto">
        <div className="text-center">
          <div className=" mb-10 md:mx-auto sm:text-center  md:mb-12">
            <div className=" flex-grow flex flex-col justify-center items-center">
              <h1 className="text-4xl max-w-7xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
                Revolutionising how Restaurants <br />
                use
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  Data{" "}
                </span>
                to Grow
              </h1>
            </div>
          </div>
          {/* 
          <div className="mb-35 w-full max-w-lg mx-auto mt-6 bg-transparent border rounded-full border-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
            <label htmlFor="hs-trailing-button-add-on" className="sr-only">
              Label
            </label>
            <div className="flex rounded-full shadow-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 w-full h-10 px-4 py-2 m-1 text-white placeholder:text-xs md:placeholder:text-lg placeholder-white bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 md:w-auto w-32"
              >
                Join Us
              </button>
            </div>
          </div> */}
          <div className="mb-35 flex justify-center mx-auto my-10 w-full max-w-screen-sm">
            <div className="flex rounded-full shadow-sm w-full bg-secondary bg-opacity-20  ">
              <div className="relative flex-grow">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
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
                {/* text-md mt-2 text-neutral-400 */}
                <input
                  className="flex-1 w-full h-10 px-4 py-2 m-1 pl-10 text-white placeholder:text-xs md:placeholder:text-lg placeholder-neutral-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
                  placeholder="Join the waitlist"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
              >
                Join Us
              </button>
            </div>
          </div>

          <div
            className="font-semibold text-center text-
          white text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-6xl mx-auto "
          >
            &quot;Restaurant Owners should focus only on the Top 2 Metrics -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Great Food and Great Service.
            </span>
            &quot; For everything else they need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              CHOOSE{" "}
            </span>
            the right partner
          </div>
        </div>
      </div>
    </div>
  );
};
