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
    Blog_CardReport: CardReport,
    Shared_Arrows: Arrows,
    Blog_CardArticle: CardArticle,
  } = components;
  const {
    BLOG_MAIN_BUTTONS: MAIN_BUTTONS,
    BLOG_REPORT_CARD_REPORT: CARD_REPORT,
    BLOG_ARTICLES_CARD_ARTICLE: CARD_ARTICLE,
  } = content;
  const { fetchBlog } = services;
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

  const { data: fetchedBlogData } = useQuery({
    queryKey: ["fetchBlog", { category: CATEGORY_MAP[activeButton] }],
    queryFn: () => fetchBlog(CATEGORY_MAP[activeButton]),
  });

  const sections = ["main", "report", "articles"];
  const animations = sections.map(() => useSectionAnimation({ amount: 0.2, once: true }));
  const [mainAnimation, reportAnimation, articlesAnimation] = animations;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < CARD_ARTICLE.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = (currentPage + 1) * itemsPerPage >= CARD_ARTICLE.length;

  return (
    <main className="blog-page">
      <Section
        className="main"
        ref={mainAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
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
            animate: mainAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
        <Slider
          motionProps={{
            initial: { opacity: 0, x: -30 },
            animate: mainAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
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
                animate: mainAnimation.isInView ? { opacity: 1 } : { opacity: 0 },
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
              animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
            }}
          >
            {(fetchedBlogData || []).map((item, index) => (
              <CardBlog
                key={item.id}
                {...item}
                img={assets[`card_blog_img_${item.id}`]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.35 * index },
                }}
              />
            ))}
            <Image className="main__dragger" src={dragger} data-no-slide={true} />
          </Slider>
        </AnimatePresence>
      </Section>
      <Section
        className="report"
        ref={reportAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: reportAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        {CARD_REPORT.map((item, index) => (
          <CardReport
            key={item.id}
            {...item}
            img={assets[`report_img_${item.id}`]}
            motionProps={{
              initial: { opacity: 0, y: 20 },
              animate: reportAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.35 * index },
            }}
          />
        ))}
      </Section>
      <Section className="articles" ref={articlesAnimation.sectionRef}>
        <Title
          heading="Articles"
          headingClass="text-title-heading-second-black"
          subheading="Complex tech decoded by engineers, business trends analyzed by experts."
          subheadingClass="text-title-subheading-small"
          isSubheadingLine={false}
          motionProps={{
            initial: { opacity: 0, x: -20 },
            animate: articlesAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
          }}
        />
        <Arrows
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={isFirstPage}
          isLast={isLastPage}
          motionProps={{
            initial: { opacity: 0, y: 20 },
            animate: articlesAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.35 },
          }}
        />
        <Slider>
          {CARD_ARTICLE.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map(
            (item, index) => (
              <CardArticle
                key={item.id}
                {...item}
                img={assets[`article_img_${item.id}`]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: articlesAnimation.isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.35 * index },
                }}
              />
            ),
          )}
        </Slider>
      </Section>
    </main>
  );
};
