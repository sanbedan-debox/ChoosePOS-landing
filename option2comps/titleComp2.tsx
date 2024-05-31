import Image from "next/image";
import React from "react";

const TitleComp2: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center mb-35">
      <Image
        src="/hello.jpg"
        alt="Large Image"
        width={1000} // Adjust width as needed
        height={1000} // Adjust height as needed
        objectFit="cover"
        className="z-0 rounded-xl"
      />

      {/* Updated styled div with decorative background */}
      <div
        style={{ height: "10rem", backgroundImage: "url('/vector-art.jpg')" }} // Replace 'vector-art.jpg' with your vector art image
        className="absolute bottom-0 left-0 w-full bg-cover flex flex-col justify-center items-center z-10"
      >
        <div
          className="text-white text-center px-6"
          style={{ textShadow: "1px 1px 0px black" }}
        >
          <p className="text-3xl font-bold mb-2">
            "Restaurant Owners should focus only on the Top 2 Metrics - Great
            Food and Great Service." For everything else they need to
            <span className="text-primary"> CHOOSE </span>
            the right partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleComp2;
