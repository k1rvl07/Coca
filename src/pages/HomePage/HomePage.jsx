import { assets, components, content, hooks } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const HomePage = () => {
  const {
    Shared_Header: Header,
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Form: Form,
    Shared_Input: Input,
    Shared_Button: Button,
    Shared_Text: Text,
    Home_CardStatistic: CardStatistic,
  } = components;
  const { sales_report } = assets;
  const { HOME_MAIN_STATISTIC } = content;
  const { useIntersectionObserver } = hooks;

  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="home-page">
      <Header />
      <motion.main
        ref={targetRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Section tagName="section" className="main">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Title
              heading="Digitally forward creative"
              headingClass="text-title-heading"
              subHeading="When it comes to interactive marketing, we've got you covered. Be where the world is going"
              subHeadingClass="text-title-subheading"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Form className="form">
              <Input
                className="form__input input-main"
                type="email"
                placeholder="Enter your email"
              />
              <Button className="form__button button-black" type="submit">
                Sign up
              </Button>
            </Form>
          </motion.div>

          <motion.div
            className="main__image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Text type="body" className="main__image-text text-main-image">
              Sales Report
            </Text>
            <img className="main__image-img" src={sales_report} alt="" />
          </motion.div>

          <motion.div
            className="main__statistic"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="main__statistic-container">
              {HOME_MAIN_STATISTIC.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 + index * 0.2 }}
                >
                  <CardStatistic
                    name={item.name}
                    price={item.price}
                    percent={item.percent}
                    color={item.color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      </motion.main>
    </div>
  );
};
