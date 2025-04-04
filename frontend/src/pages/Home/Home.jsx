import { assets, components, content, hooks, services } from "@exports";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState, Fragment } from "react";

export const Home = () => {
  const {
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
    Shared_SectionSponsors: SectionSponsors,
    Home_CardBenefit: CardBenefit,
    Shared_Slider: Slider,
    Home_CardNews: CardNews,
    Home_CardReview: CardReview,
    Shared_Image: Image,
    Shared_Box: Box,
  } = components;

  const {
    sales_report,
    features: features_image,
    more,
    growth_team,
    results_line,
    dragger,
    backtick,
  } = assets;

  const {
    HOME_MAIN_CARD_SALES_REPORT: MAIN_CARD_SALES_REPORT,
    HOME_OVERVIEW_CARD_OVERVIEW: CARD_OVERVIEW,
    HOME_FEATURES_ADVANTAGES: FEATURES_ADVANTAGES,
    HOME_FEATURES_CARD_STATISTIC: FEATURES_CARD_STATISTIC,
    HOME_GROWTH_RESULTS: GROWTH_RESULTS,
    HOME_BENEFITS_CARD_BENEFIT: BENEFITS_CARD_BENEFIT,
    HOME_REVIEWS_CARD_REVIEW: REVIEWS_CARD_REVIEW,
  } = content;

  const { useSectionAnimation } = hooks;
  const { news: newsService, subscribe } = services;

  const sections = ["main", "overview", "features", "growth", "benefits", "news", "reviews"];
  const [main, overview, features, growth, benefits, news, reviews] = Array.from(
    { length: sections.length },
    () => useSectionAnimation({ amount: 0.2, once: true }),
  );

  const [email, setEmail] = useState("");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const { data: newsData } = useQuery({
    queryKey: ["news"],
    queryFn: newsService,
  });

  const subscribeMutation = useMutation({
    mutationFn: (email) => subscribe(email),
    onSuccess: () => {
      setEmail("");
    },
    onError: (error) => {
      console.error("Subscription error:", error);
    },
  });

  const handleSubmitSubscribe = async (e) => {
    e.preventDefault();
    subscribeMutation.mutate(email);
  };

  return (
    <>
      <main className="home-page">
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
            heading="Digitally forward creative"
            headingClass="text-title-heading"
            subheading="When it comes to interactive marketing, we've got you covered. Be where the world is going."
            subheadingClass="text-title-subheading"
            motionProps={{
              initial: { opacity: 0, x: -50 },
              animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          />
          <Form
            className="form"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
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
            <Button
              className="form__button button-black text-button-black"
              type="submit"
              disabled={subscribeMutation.isLoading}
            >
              Try for free
            </Button>
          </Form>
          <Box
            className="main__image"
            motionProps={{
              initial: { scale: 0.9, opacity: 0 },
              animate: main.isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
            }}
          >
            <Text as="p" className="main__image-text text-main-image">
              Sales Report
            </Text>
            <Image className="main__image-img" src={sales_report} alt="" />
          </Box>
          <Box
            className="main__sales-report"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
            }}
          >
            <Box className="main__sales-report-container">
              {MAIN_CARD_SALES_REPORT.map((item, index) => (
                <CardSalesReport
                  key={item.id}
                  {...item}
                  motionProps={{
                    initial: { opacity: 0, y: 20 },
                    animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.7 + index * 0.2 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Section>
        <Section
          className="overview"
          ref={overview.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: overview.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="Coca help our client solve complex customer problems."
            headingTag="h2"
            headingClass="text-title-heading-second-white"
            subheading="Our platform offers modern solutions for identity, activation, and data collaboration."
            subheadingClass="text-title-subheading-small"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: overview.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          />
          <Box className="overview__cards">
            {CARD_OVERVIEW.map((item, index) => (
              <CardOverview
                key={item.id}
                {...item}
                icon={assets[item.icon]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: overview.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.2 },
                }}
              />
            ))}
          </Box>
        </Section>
        <Section
          className="features"
          ref={features.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Box
            className="features__image-statistic"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          >
            <Image className="features__image" src={features_image} alt="" />
            <Box className="statistic">
              <Box className="statistic__container">
                <Box className="statistic__title">
                  <Text as="p" className="statistic__heading text-statistic-heading">
                    Statistic
                  </Text>
                  <Image className="statistic__more" src={more} alt="" />
                </Box>
                {FEATURES_CARD_STATISTIC.map((item, index) => (
                  <CardStatistic
                    key={item.id}
                    {...item}
                    icon={assets[item.icon]}
                    exchange={assets[item.exchange]}
                    motionProps={{
                      initial: { opacity: 0, y: 20 },
                      animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.2 },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Title
            heading="Passion to increase company revenue up to 85%"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subheadingClass="text-title-subheading-small"
            subheading="Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
            }}
          />
          <Box
            className="features__advantages"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 1.0 },
            }}
          >
            {FEATURES_ADVANTAGES.map((item, index) => (
              <Advantage
                key={item.id}
                {...item}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: features.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 1.2 + index * 0.2 },
                }}
              />
            ))}
          </Box>
        </Section>
        <Section
          className="growth"
          ref={growth.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: growth.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Box
            className="growth__results"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: growth.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          >
            {GROWTH_RESULTS.map((item, index) => (
              <Fragment key={item.id}>
                <Result
                  {...item}
                  motionProps={{
                    initial: { opacity: 0, y: 20 },
                    animate: growth.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.2 },
                  }}
                />
                {index < 3 && (
                  <Image
                    className="growth__results-line"
                    src={results_line}
                    alt="line"
                    motionProps={{
                      initial: { opacity: 0, x: -20 },
                      animate: growth.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.2 },
                    }}
                  />
                )}
              </Fragment>
            ))}
          </Box>
          <Image
            className="growth__image"
            src={growth_team}
            alt=""
            motionProps={{
              initial: { opacity: 0, scale: 0.9 },
              animate: growth.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
              transition: { duration: 0.6, ease: "easeOut", delay: 1.0 },
            }}
          />
          <Title
            heading="Lift your business to new heights with our digital marketing services"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subheadingClass="text-title-subheading-small"
            subheading="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: growth.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 1.4 },
            }}
          />
        </Section>
        <SectionSponsors />
        <Section
          className="benefits"
          ref={benefits.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: benefits.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="Here’s how Coca can benefit your business"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subheadingClass="text-title-subheading-small"
            subheading="Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: benefits.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          />
          <Box className="benefits__cards">
            {BENEFITS_CARD_BENEFIT.map((item, index) => (
              <CardBenefit
                key={item.id}
                {...item}
                img={assets[item.png]}
                svg={assets[item.svg]}
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: benefits.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.2 },
                }}
              />
            ))}
          </Box>
        </Section>
        <Section
          className="news"
          ref={news.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: news.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="Trending news from Coca"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subheadingClass="text-title-subheading-small"
            subheading="we have some new Service to pamper you"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: news.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          />
          <Slider
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: news.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
            }}
          >
            {(newsData || []).map((item, index) => (
              <CardNews
                key={item.id}
                {...item}
                img={assets[`card_news_img_${item.id}`]}
                motionProps={{
                  initial: { opacity: 0, x: -20 },
                  animate: news.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 1.2 - index * 0.2 },
                }}
              />
            ))}
            <Image
              className="news__dragger"
              src={dragger}
              alt=""
              data-no-slide={true}
              motionProps={{
                initial: { opacity: 0, scale: 0.9 },
                animate: news.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
                transition: { duration: 0.6, ease: "easeOut", delay: 1.0 },
              }}
            />
          </Slider>
        </Section>
        <Section
          className="reviews"
          ref={reviews.sectionRef}
          motionProps={{
            initial: { opacity: 0, y: 50 },
            animate: reviews.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
          }}
        >
          <Title
            heading="What our customers are saying"
            headingTag="h2"
            headingClass="text-title-heading-second-black"
            subheadingClass="text-title-subheading-small"
            subheading="We are trusted numerous companies from different business to meet their needs"
            isSubheadingLine={false}
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: reviews.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
          />
          <Box
            className="reviews__cards"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: reviews.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
            }}
          >
            <Image
              className="reviews__cards-backtick"
              src={backtick}
              alt=""
              key={currentReviewIndex}
              motionProps={{
                initial: { opacity: 0, scale: 0.9, x: -20 },
                animate: reviews.isInView
                  ? { opacity: 1, scale: 1, x: 0 }
                  : { opacity: 0, scale: 0.9, x: -20 },
                exit: { opacity: 0, scale: 0.9, x: -20 },
                transition: { duration: 0.4, ease: "easeOut", delay: 0.6 },
              }}
            />
            <CardReview
              reviews={REVIEWS_CARD_REVIEW}
              reviewsAnimation={reviews}
              onUpdateIndex={setCurrentReviewIndex}
              motionProps={{
                initial: { opacity: 0, x: -20 },
                animate: reviews.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                transition: { duration: 0.6, ease: "easeOut", delay: 1.0 },
              }}
            />
          </Box>
        </Section>
      </main>
    </>
  );
};
