import React from "react";
import logo1 from "../../assets/logo/logoWhite.png";
import Image from "next/image";

const MetricsComponent: React.FC = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center space-y-4 h-64 md:h-60 ">
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="font-bold text-white text-2xl md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl my-auto">
          &quot;Restaurant Owners should focus only on the Top 2 Metrics - Great
          Food and Great Service.&quot; For everything else they need to{" "}
          <span className="inline-block">
            <Image className="" height={30} src={logo1} alt="Logo" />
          </span>{" "}
          the right partner
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;
