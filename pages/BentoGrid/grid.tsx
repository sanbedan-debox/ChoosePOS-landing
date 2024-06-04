import { gridFeatItems } from "@/utils/constant";
import { BentoGrid, BentoGridItem } from "./bento";

const Grid = () => {
  return (
    <section
      id="feat"
      className="mx-auto  px-4  lg:flex  flex-col items-center overflow-hidden bg-feature-bg mb-35 "
    >
      <div className="text-center z-20">
        <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl  md:mt-0  md:justify-center font-semibold">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Features
          </span>
        </h2>
      </div>
      <BentoGrid className="w-full py-20">
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
