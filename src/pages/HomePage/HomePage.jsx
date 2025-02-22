import { assets, components, content, hooks } from "@exports";
import { motion } from "framer-motion";
import React, { useState, Fragment } from "react";

export const HomePage = () => {
  const {
    Shared_Header: Header,
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Form: Form,
    Shared_Input: Input,
    Shared_Button: Button,
    Shared_Text: Text,
    Home_CardSalesReport: CardSalesReport,
    Home_CardOverview: CardOverview,
    Home_CardStatistic: CardStatistic,
    Home_Advantage: Advantage,
    Home_Result: Result,
  } = components;
  const { sales_report, features: features_image, more, growth_team, results_line } = assets;
  const {
    HOME_MAIN_CARD_SALES_REPORT: MAIN_CARD_SALES_REPORT,
    HOME_OVERVIEW_CARDS: OVERVIEW_CARDS,
    HOME_FEATURES_ADVANTAGES: FEATURES_ADVANTAGES,
    HOME_FEATURES_CARD_STATISTIC: FEATURES_CARD_STATISTIC,
    HOME_GROWTH_RESULTS: GROWTH_RESULTS,
    HOME_MAIN_SWAL_CONFIG: MAIN_SWAL_CONFIG,
  } = content;
  const { useAnimatedIntersection, useFormSubmit } = hooks;

  const sections = ["main", "overview", "features", "growth"];
  const animations = sections.map(() => useAnimatedIntersection(0.2));
  const [main, overview, features, growth] = animations;

  const [email, setEmail] = useState("");
  const { submit, loading } = useFormSubmit("http://localhost:5000/api/subscribe");

  const handleSubmitSubscribe = async (e) => {
    e.preventDefault();

    const swalConfig = MAIN_SWAL_CONFIG;

    await submit({ email }, swalConfig);
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <Section
          className="main"
          motionProps={{
            ref: main.targetRef,
            initial: { opacity: 0, y: 50 },
            animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="Digitally forward creative"
            headingClass="text-title-heading"
            subHeading="When it comes to interactive marketing, we've got you covered. Be where the world is going."
            subHeadingClass="text-title-subheading"
            motionProps={{
              initial: { opacity: 0, x: -50 },
              animate: main.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          />
          <Form
            className="form"
            motionProps={{
              ref: main.formRef,
              initial: { opacity: 0, y: 30 },
              animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
            }}
            onSubmit={handleSubmitSubscribe}
          >
            <Input
              className="form__input input-main"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="form__button button-black" type="submit" disabled={loading}>
              Try for free
            </Button>
          </Form>
          <motion.div
            className="main__image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={main.hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Text type="body" className="main__image-text text-main-image">
              Sales Report
            </Text>
            <img className="main__image-img" src={sales_report} alt="" />
          </motion.div>
          <motion.div
            className="main__sales-report"
            initial={{ opacity: 0, y: 30 }}
            animate={main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="main__sales-report-container">
              {MAIN_CARD_SALES_REPORT.map((item, index) => (
                <CardSalesReport
                  key={item.id}
                  {...item}
                  motionProps={{
                    initial: { opacity: 0, y: 20 },
                    animate: main.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.7 + index * 0.2 },
                  }}
                />
              ))}
            </div>
          </motion.div>
        </Section>
        <Section
          className="overview"
          motionProps={{
            ref: overview.targetRef,
            initial: { opacity: 0, y: 50 },
            animate: overview.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="Coca help our client solve complex customer problems."
            headingTag="h2"
            headingClass="text-title-heading-second-white"
            subHeading="Our platform offers modern solutions for identity, activation, and data collaboration."
            subHeadingClass="text-title-subheading-small"
            isSubheadingLine={false}
          />
          <div className="overview__cards">
            {OVERVIEW_CARDS.map((item, index) => (
              <CardOverview
                key={item.id}
                {...item}
                icon={assets[item.icon]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: overview.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.2 },
                }}
              />
            ))}
          </div>
        </Section>
        <Section
          className="features"
          motionProps={{
            ref: features.targetRef,
            initial: { opacity: 0, y: 50 },
            animate: features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          <motion.div
            className="features__image-statistic"
            initial={{ opacity: 0, y: 30 }}
            animate={features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img className="features__image" src={features_image} alt="" />
            <div className="statistic">
              <div className="statistic__container">
                <div className="statistic__title">
                  <Text type="body" className="statistic__heading text-statistic-heading">
                    Statistic
                  </Text>
                  <img className="statistic__more" src={more} alt="" />
                </div>
                {FEATURES_CARD_STATISTIC.map((item, index) => (
                  <CardStatistic
                    key={item.id}
                    {...item}
                    icon={assets[item.icon]}
                    exchange={assets[item.exchange]}
                    motionProps={{
                      initial: { opacity: 0, y: 20 },
                      animate: features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 + index * 0.2 },
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <Title
            heading="Passion to increase company revenue up to 85%"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subHeadingClass="text-title-subheading-small"
            subHeading="Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
            }}
          />
          <motion.div
            className="features__advantages"
            initial={{ opacity: 0, y: 30 }}
            animate={features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            {FEATURES_ADVANTAGES.map((item, index) => (
              <Advantage
                key={item.id}
                {...item}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: features.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.6, ease: "easeOut", delay: 1.2 + index * 0.2 },
                }}
              />
            ))}
          </motion.div>
        </Section>
        <Section
          className="growth"
          motionProps={{
            ref: growth.targetRef,
            initial: { opacity: 0, y: 50 },
            animate: growth.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          <motion.div
            className="growth__results"
            initial={{ opacity: 0, y: 30 }}
            animate={growth.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {GROWTH_RESULTS.map((item, index) => (
              <Fragment key={item.id}>
                <Result
                  {...item}
                  motionProps={{
                    initial: { opacity: 0, y: 20 },
                    animate: growth.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 + index * 0.2 },
                  }}
                />
                {index < 3 && (
                  <motion.img
                    className="growth__results-line"
                    src={results_line}
                    alt="line"
                    initial={{ opacity: 0, x: -20 }}
                    animate={growth.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + index * 0.2 }}
                  />
                )}
              </Fragment>
            ))}
          </motion.div>
          <motion.img
            className="growth__image"
            src={growth_team}
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={growth.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          />
          <Title
            heading="Lift your business to new heights with our digital marketing services"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subHeadingClass="text-title-subheading-small"
            subHeading="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: growth.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.8, ease: "easeOut", delay: 1.4 },
            }}
          />
        </Section>
      </main>
    </div>
  );
};
