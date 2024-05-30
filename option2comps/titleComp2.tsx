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

      <div
        style={{ height: "10rem" }}
        className="absolute bottom-0 left-0 w-full bg-primary bg-opacity-20 flex flex-col justify-center items-center z-10"
      >
        <div className="text-white text-center">
          <p className="text-3xl flex flex-col font-bold mb-2">
            {" "}
            &quot;Restaurant Owners should focus only on the Top 2 Metrics -
            Great Food and Great Service.&quot;
          </p>
          <p className="text-2xl font-semibold">
            For everything else they need to CHOOSE the right partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleComp2;
