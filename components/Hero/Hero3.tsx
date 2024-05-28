export const Header = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-20 md:pb-20 lg:flex lg:h-screen lg:items-center">
      <div className="flex flex-col lg:h-full w-full">
        <div
          className="flex-grow flex flex-col justify-center items-center"
          style={{ flexBasis: "70%" }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
            Revolutionising how Restaurants use
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              Data{" "}
            </span>
            to Grow
          </h1>

          <div className="flex justify-center mx-auto my-10 w-full max-w-screen-sm">
            <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-grow">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full rounded-full text-sm bg-secondary bg-opacity-20  border-secondary placeholder-white text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Join the waitlist"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full border border-primary-600 rounded-full text-sm font-medium text-center cursor-pointer bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center"
          style={{ flexBasis: "30%" }}
        >
          <div className="font-semibold text-center text-white text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-6xl mx-auto">
            &quot;Restaurant Owners should focus only on the Top 2 Metrics -
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              Great Food and Great Service.{" "}
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
