import { assets, components, content, hooks, services } from "@exports";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export const Blog = () => {
  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Image: Image,
    Shared_Button: Button,
    Blog_CardBlog: CardBlog,
    Shared_Slider: Slider,
  } = components;
  const { BLOG_MAIN_BUTTONS: MAIN_BUTTONS } = content;
  const { blog: blogService } = services;
  const { dragger } = assets;
  const { useSectionAnimation } = hooks;
  const [activeButton, setActiveButton] = useState(1);

  const CATEGORY_MAP = {
    1: null,
    2: "design",
    3: "articles",
    4: "product",
    5: "software development",
    6: "customer success",
  };

  const { data: blogData } = useQuery({
    queryKey: ["blog", activeButton],
    queryFn: () => blogService(CATEGORY_MAP[activeButton]),
  });

  const main = useSectionAnimation({ amount: 0.2, once: true });

  return (
    <main className="blog-page">
      <Section
        className="main"
        ref={main.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Title
          heading="Activity & Updates"
          headingClass="text-title-heading"
          subheading="Our biggest challenge is making sure we're always designing and building products that will help you run your business better."
          subheadingClass="text-title-subheading"
          motionProps={{
            initial: { opacity: 0, x: -50 },
            animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
        <Slider
          motionProps={{
            initial: { opacity: 0, x: -30 },
            animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
          }}
        >
          {MAIN_BUTTONS.map((item, index) => (
            <Button
              key={item.id}
              className="main__button button-activity"
              onClick={() => setActiveButton(item.id)}
              style={
                activeButton === item.id ? { color: "#1D1E25", textDecoration: "underline" } : {}
              }
              motionProps={{
                initial: { opacity: 0 },
                animate: main.isInView ? { opacity: 1 } : { opacity: 0 },
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 * index,
                  opacity: { duration: 0.6, delay: 0.2 * index },
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Slider>
        <AnimatePresence mode="wait">
          <Slider
            key={activeButton}
            draggerClass="main__dragger"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
            }}
          >
            {(blogData || []).map((item, index) => (
              <CardBlog
                key={item.id}
                {...item}
                img={assets[`card_blog_img_${item.id}`]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.35 * index },
                }}
              />
            ))}
            <Image className="main__dragger" src={dragger} data-no-slide={true} />
          </Slider>
        </AnimatePresence>
      </Section>
    </main>
  );
};
