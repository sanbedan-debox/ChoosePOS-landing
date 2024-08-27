import React from 'react';
import Image3 from "../../assets/jpg/darshan.png";
import Image2 from "../../assets/jpg/mehank.jpg";
import Image from 'next/image';
import { TracingBeam } from './tracing-beam';

const WhyChoose = () => {
  return (
    <div className='mx-auto px-4 lg:flex flex-col items-center overflow-hidden bg-feature-bg mt-10 mb-12 md:mb-35'>
       <div className="gradient-02 absolute w-full h-[20px] md:h-[300px] right-0 bottom-0 z-[-8]"></div>
      <div className="text-center sm:mb-20 mb-5 lg:px-36 md:px-12 px-1">
      <div
        className="h-screen md:h-[74vh] w-full bg-grid-white/[0.03] 
        absolute top-0 bottom-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
        <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl md:mt-0 md:mb-10 mb-5 font-semibold">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Us
          </span>
        </h2>
        <div className='sm:text-lg text-[16px] text-start ' >
          <p>
          Lorem ipsum, door sit amet consectetur adipisicing elit. Explicabo reprehenderit eveniet veritatis animi. Hic laboriosam ducimus, dolor ut numquam tempore, qui animi doloribus consequatur nostrum sit id! Temporibus maxime dolor delectus doloremque ipsa dolorem repellendus tempore explicabo adipisci hic quas inventore iste amet voluptatum cupiditate placeat, molestias pariatur
          </p>
          <br/>
          
          <p>
           laudantium error dolores ea nihil quos accusantium fuga? Sit eum rerum, fugit officiis totam aspernatur voluptates quaerat tempore explicabo culpa.
           Autem quia iure itaque, rerum, aliquid deserunt sint mollitia eligendi sapiente quasi asperiores laboriosam facere, expedita tempore accusamus minus laborum assumenda corporis dolorum libero fuga explicabo amet incidunt totam. Blanditiis, officiis molestias explicabo soluta vel amet dolorem, 
          </p>
          <br/>
        
           {/* <p>

            libero quos et fuga accusantium nisi accusamus voluptate eaque id? Placeat quam adipisci esse delectus ipsam sequi nam nisi beatae debitis. Soluta numquam, neque possimus nulla deleniti quod! Commodi esse repudiandae, facilis quasi obcaecati eaque magnam architecto eveniet molestiae cupiditate illo cumque quam ipsam hic.
           </p> */}
        </div>
      </div>
      <TracingBeam/>
    
    </div>
  );
}

export default WhyChoose;
