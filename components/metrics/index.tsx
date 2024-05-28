import React from "react";
import logo1 from "../../assets/logo/logoWhite.png";
import Image from "next/image";

const MetricsComponent: React.FC = () => {
  return (
    <div className="px-6 flex flex-col justify-center items-center space-y-4  ">
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="font-bold text-white text-2xl md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl my-auto">
          &quot;Restaurant Owners should focus only on the Top 2 Metrics -
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-primary">
            {" "}
            Great Food and Great Service.{" "}
          </span>
          &quot; For everything else they need to{" "}
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-primary">
            CHOOSE{" "}
          </span>
          the right partner
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;
