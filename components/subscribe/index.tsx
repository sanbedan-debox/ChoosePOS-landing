import { neongGradient } from "@/colors/gradients";

const Subscribe = (): JSX.Element => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span
          style={{
            color: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
        >
          {" "}
          Updates{" "}
        </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-md">
        <input
          type="text"
          placeholder="subscribe@choose.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <a
            href="#"
            className="py-3 px-4  rounded-md text-black text-bold "
            style={{
              backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
            }}
          >
            Know More
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
