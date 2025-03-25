import { assets, components } from "@exports";
import { motion } from "framer-motion";

export const Shared_Title = ({
  heading,
  headingTag = "h1",
  headingClass,
  subheading,
  subheadingClass,
  isSubheadingLine = true,
  subheadingLineColor = "black",
  motionProps = {},
}) => {
  const { Shared_Text: Text, Shared_Image: Image, Shared_Box: Box } = components;
  const { subheading_line, subheading_line_white } = assets;
  const line = subheadingLineColor === "black" ? subheading_line : subheading_line_white;
  return (
    <Box className="title" motionProps={{ ...motionProps }}>
      <Text type="heading" headingTag={headingTag} className={`title__heading ${headingClass}`}>
        {heading}
      </Text>
      <Text type="body" className={`title__subheading ${subheadingClass}`}>
        {isSubheadingLine && (
          <Image className="title__subheading-line" src={line} alt="subheading_line" />
        )}
        {subheading}
      </Text>
    </Box>
  );
};
