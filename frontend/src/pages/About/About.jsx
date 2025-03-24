import { assets, components, hooks } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Text: Text,
    Shared_Link: Link,
    Shared_Image: Image,
    Shared_Button: Button,
    Shared_Slider: Slider,
    Shared_Line: Line,
  } = components;
  const { get_in_touch, unite_work, unite_team, unite_worker, dragger } = assets;
  const { useAnimatedIntersection } = hooks;

  const sections = ["main", "ideas"];
  const animations = sections.map(() => useAnimatedIntersection(0.2));
  const [main, ideas] = animations;

  return (
    <main className="about-page">
      <Section
        tagName="section"
        className="main"
        motionProps={{
          ref: main.targetRef,
          initial: { opacity: 0, y: 50 },
          animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Title
          heading="Everything you need to get the attention of your audience"
          headingClass="text-title-heading"
          subheading="Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow."
          subheadingClass="text-title-subheading"
          motionProps={{
            initial: { opacity: 0, x: -50 },
            animate: main.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
        <Link
          className="main__link"
          href="#"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
          }}
        >
          <Image className="main__link-image" src={get_in_touch} alt="get_in_touch" />
        </Link>
        <Slider
          draggerClass="main__dragger"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
        >
          <Image
            className="main__image"
            src={unite_work}
            alt="unite_work"
            motionProps={{
              initial: { opacity: 0, x: -20 },
              animate: main.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
            }}
          />
          <motion.div
            className="main__card"
            initial={{ opacity: 0, y: 30 }}
            animate={main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Image className="main__card-image" src={unite_team} alt="unite_team" />
            <Text type="body" className="main__card-title text-main-card-title">
              What we believe in
            </Text>
            <Text type="body" className="main__card-description text-main-card-description">
              Over the years at Sans, we’ve put a lot of thought into what it is that makes us who
              we are. The qualities that unite us, that make us such an effective team, and...
            </Text>
            <Link href="#" className="main__card-link button-black text-button-black">
              See Details 🡪
            </Link>
          </motion.div>
          <Image
            className="main__image"
            src={unite_worker}
            alt="unite_worker"
            motionProps={{
              initial: { opacity: 0, x: 20 },
              animate: main.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.7 },
            }}
          />
          <Button
            type="button"
            className="main__dragger"
            data-no-slide={true}
            motionProps={{
              initial: { opacity: 0, scale: 0.9 },
              animate: main.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
            }}
          >
            <Image className="main__dragger-image" src={dragger} alt="" />
          </Button>
        </Slider>
      </Section>
      <Section
        tagName="section"
        className="ideas"
        motionProps={{
          ref: ideas.targetRef,
          initial: { opacity: 0, y: 50 },
          animate: ideas.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        <Line
          className="ideas__hr"
          motionProps={{
            initial: { opacity: 0, scale: 0.9 },
            animate: ideas.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
            transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
          }}
        />
        <Title
          heading="Powerful ideas & sales acceleration"
          headingTag="h2"
          headingClass="text-title-heading-second-black"
          subheading="We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all."
          subheadingClass="text-ideas-title-subheading"
          isSubheadingLine={false}
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: ideas.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        />
        <Line
          className="ideas__hr"
          motionProps={{
            initial: { opacity: 0, scale: 0.9 },
            animate: ideas.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
            transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
          }}
        />
      </Section>
    </main>
  );
};
