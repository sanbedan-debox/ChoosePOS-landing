import Image from "next/image";

const ImageWithText: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen mb-35">
      <Image
        src="/jojo.jpg"
        alt="Large Image"
        width={1000} // Adjust width as needed
        height={1000} // Adjust height as needed
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute mx-auto bottom-0  w-full bg-primary text-white py-8 text-center">
        <p className="text-2xl mx-auto md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl text-center">
          &quot;Restaurant Owners should focus only on the Top 2 Metrics - Great
          Food and Great Service. &quot; For everything else they need to CHOOSE{" "}
          the right partner
        </p>
      </div>
    </div>
  );
};

export default ImageWithText;
