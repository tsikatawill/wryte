import { motion, useScroll, useTransform } from "framer-motion";

export const AnimatedPenHead = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "1%"]);
  return (
    <motion.svg
      style={{ scale }}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <g id="pen">
        <motion.path
          animate={{
            pathLength: [0, 1],
            fillOpacity: [0, 0.1, 0.2, 0.5, 0.8, 1],
            transition: { duration: 2 },
          }}
          id="pen_top"
          data-name="pen top"
          d="M158,81.76l-45.63,94.1H87.63L42,81.76C73.36,65,90.73,25.83,97.13,8.5V109.56a8.82,8.82,0,1,0,5.72,0V8.5C109.25,25.83,126.61,65,158,81.76Z"
          style={{ fill: "#509dff", stroke: "#509dff", strokeMiterlimit: 10 }}
        />
        <motion.rect
          animate={{
            pathLength: [0, 1],
            fillOpacity: [0, 0.1, 0.2, 0.5, 0.8, 1],
            transition: { duration: 2 },
          }}
          id="ferule"
          x="87.24"
          y="178.38"
          width="25.51"
          height="13.11"
          style={{ fill: "#509dff", stroke: "#509dff", strokeMiterlimit: 10 }}
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.38,
            transition: { duration: 1, delay: 1 },
          }}
          id="pen_top_shadow"
          data-name="pen top shadow"
          d="M158,81.76l-45.64,94.1h-7.51C99.6,151.34,85.43,145.52,73,145.62l-3.08-6.38c6.14-3.89,14-8.9,23.72-15.24a8.83,8.83,0,0,0,15.2-6.1,8.53,8.53,0,0,0-.91-3.91c21.46-21.1,8-70-1.23-95.93C115,37.51,131.52,67.59,158,81.76Z"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.38,
            transition: { duration: 0.8, delay: 1.2 },
          }}
          id="ferule_shadow"
          data-name="ferule shadow"
          d="M114.05,189.19v2.31H88.54v-3.92a7.68,7.68,0,0,0,3.06-1.53,1.46,1.46,0,0,0,.89,2.21,2.15,2.15,0,0,0,2.27-1.37A4.07,4.07,0,0,0,95,185a2.65,2.65,0,0,0,4.77.65,2.49,2.49,0,0,0,2.41,2.73,2.59,2.59,0,0,0,2.36-2.81,2.35,2.35,0,0,0,2.68,1.34,3.9,3.9,0,0,0,2.47-2,11.38,11.38,0,0,0,1-3.1,9.87,9.87,0,0,0,.85,4.83A6,6,0,0,0,114.05,189.19Z"
        />
      </g>
    </motion.svg>
  );
};
