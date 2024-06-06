import { BentoGrid, BentoGridItem } from "./bento";

const Grid = () => {
  const gridFeatItems = [
    {
      id: 1,
      title: "Cutting-edge Online Ordering",
      description:
        "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-center  text-center md:justify-end",
      img: "/tech.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "Seamless 3rd Party integrations",
      description:
        "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center  text-center",
      img: "/grid.svg",
      // img: "/party.jpg",
      spareImg: "",
    },
    {
      id: 3,
      title: "Data Insights like never before",
      description:
        "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center  text-center",
      // img: "/insight.jpg",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 4,
      title: "Protection against Disputes",
      description:
        "No questions asked coverage against customer disputes and chargebacks",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center  text-center",
      spareImg: "",
      // img: "/disputes.jpg",
      img: "/grid.svg",
    },

    {
      id: 5,
      title: "Reports that drive Business",
      description:
        "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "",
      // imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg ",
      // titleClassName: "justify-center md:justify-start lg:justify-center",
      titleClassName: "justify-center  text-center  md:justify-end",
      img: "/reports.webp",
      spareImg: "",
    },
    {
      id: 6,
      title: "Join the Waitlist",
      description: "And do note that we are just getting started!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "/grid.svg",
      spareImg: "",
    },
  ];
  return (
    <section
      id="feat"
      className="mx-auto  px-4  lg:flex  flex-col items-center overflow-hidden bg-feature-bg mb-12 md:mb-24 "
    >
      <div className="text-center z-20">
        <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl  md:mt-0  md:justify-center font-semibold">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Features
          </span>
        </h2>
      </div>
      <BentoGrid className="w-full py-8 md:py-20">
        {gridFeatItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
