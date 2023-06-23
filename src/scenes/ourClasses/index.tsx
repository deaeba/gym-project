import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Exercises that require the coordination and movement of multiple joints, such as squats, deadlifts, Olympic lifts, pull-ups and push-ups, are the most effective for maximizing fat loss and muscle gain.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga has nothing but only benefitial activities for you body and soul. Join our Yoga classes and leave the class stressfree.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "In order to “flatten” your stomach, you need to reduce the amount of fat in your abdomen area, and this is only achieved through weight loss. Doing abdominal exercises does help burn ypur belly fat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Adventure classes are for those, who loves having fun while exercise. It is 45 minute class that you will love and enjoy with a high core movements and weights.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Fitness Classes are the mix of you the most popular classes together. You have 10 minutes of each class gatheren in our 60 minute Fitness Class.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Training classes are our most popular classes, where you have 60 minutes of nontop sweat and tears. You are able to lose at least 1000kl and feel happy after class.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              The physical exertion involved in gym class results in endorphin
              production in the brain. Endorphins are the "feel good" hormones
              that improve mood and outlook. People who engage in robust gym
              classes benefit from the release of endorphins. The physical
              activity becomes fun.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
