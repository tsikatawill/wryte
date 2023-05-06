import { AnimatedPenHead, Container } from ".";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <section ref={scrollRef} className="hero">
      <Container>
        <div className="max-w-xl text-center pt-12 pb-24 mx-auto">
          <div className="icon-wrapper mx-auto mb-7">
            <AnimatedPenHead parentRef={scrollRef} />
          </div>

          <motion.div
            whileInView={{
              y: [100, 0],
              opacity: [0, 1],
              offset: ["top center"],
              transition: { ease: "easeIn", delay: 0.5, duration: 1 },
            }}
            viewport={{ once: true }}
            className="py-10 grid place-content-center mb-10"
          >
            <h1 className="font-bold text-5xl md:text-7xl md:leading-[7rem]">
              Wryte
            </h1>
            <p className="text-xl md:text-3xl font-semibold md:leading-10 mt-5">
              Insightful Articles Curated By A Wonderful Community For Everyone
              In The Tech Space
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
