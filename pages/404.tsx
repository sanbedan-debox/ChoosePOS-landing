import Image from "next/legacy/image";
import Link from "next/link";

const NotFound404 = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#162CF1] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          href="/"
          className="relative inline-block text-sm font-medium text-[#162CF1] group active:text-secondary focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#162CF1] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <h1 className="text-white text-xl">Go to Landing page</h1>
          </span>
        </Link>
      </button>
    </main>
  );
};

export default NotFound404;
