import { assets, components } from "@exports";
import { motion } from "framer-motion";

export const Shared_Title = ({
  heading,
  headingTag = "h1",
  headingClass,
  subHeading,
  subHeadingClass,
  isSubheadingLine = true,
  motionProps = {},
}) => {
  const { Shared_Text: Text } = components;
  const { subheading_line } = assets;
  return (
    <motion.div className="title" {...motionProps}>
      <Text type="heading" headingTag={headingTag} className={`title__heading ${headingClass}`}>
        {heading}
      </Text>
      <Text type="body" className={`title__subheading ${subHeadingClass}`}>
        {isSubheadingLine && (
          <img className="title__subheading-line" src={subheading_line} alt="subheading_line" />
        )}
        {subHeading}
      </Text>
    </motion.div>
  );
};
