import { blurHashToDataURL } from "@/utils/blurhash";
import { cn } from "@/utils/cn";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { useRouter } from "next/router";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  blurredURL,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  blurredURL?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 h-48 md:h-full",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      onClick={() => {
        if (id === 6) {
          router.push("#enroll");
        }
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          <div
            style={{
              position: "absolute",
              zIndex: "20",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(4, 9, 54,0.2)",
            }}
          />
          {img && (
            <Image
              fill
              placeholder="blur"
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              blurDataURL={blurHashToDataURL(blurredURL)}
            />
          )}
          {id !== 6 ? (
            <div
              className="h-full w-full absolute bg-black bg-opacity-45 md:bg-opacity-35"
              // style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            />
          ) : null}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <div className="w-full h-full relative">
              <Image
                src={spareImg}
                alt={spareImg}
                fill
                className="object-cover object-center"
              />
            </div>
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            " group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}

          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={` text-lg lg:text-3xl max-w-96 md:font-bold z-10 font-semibold`}
          >
            {title}
          </div>
          <div className="text-md font-extralight md:max-w-screen-md  lg:text-base  text-neutral-300 z-10">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
