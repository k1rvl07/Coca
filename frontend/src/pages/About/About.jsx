import { assets, components, content, hooks } from "@exports";
import React from "react";
import { useMediaQuery } from "react-responsive";

export const About = () => {
  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Text: Text,
    Shared_Link: Link,
    Shared_Image: Image,
    Shared_Slider: Slider,
    Shared_Line: Line,
    Shared_Box: Box,
    About_CardTeam: CardTeam,
  } = components;
  const { get_in_touch, unite_work, unite_team, unite_worker, dragger, link_arrow } = assets;
  const { useSectionAnimation } = hooks;
  const { ABOUT_TEAM_CARD_TEAM: CARD_TEAM } = content;

  const sections = ["main", "ideas", "team"];
  const animations = sections.map(() => useSectionAnimation({ amount: 0.2, once: true }));
  const [main, ideas, team] = animations;

  const isMobile = useMediaQuery({ maxWidth: 1440 });

  return (
    <main className="about-page">
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
          heading="Everything you need to get the attention of your audience"
          headingClass="text-title-heading"
          subheading="Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow."
          subheadingClass="text-title-subheading"
          motionProps={{
            initial: { opacity: 0, x: -50 },
            animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
        <Link
          className="main__link"
          href="#"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
          }}
        >
          <Image
            className="main__link-image"
            src={get_in_touch}
            alt="get_in_touch"
            motionProps={{
              animate: { rotate: 360 },
              transition: { repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "linear" },
            }}
          />
        </Link>
        <Slider
          draggerClass="main__dragger"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
        >
          <Image
            className="main__image"
            src={unite_work}
            alt="unite_work"
            motionProps={{
              initial: { opacity: 0, x: -20 },
              animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
            }}
          />
          <Box
            className="main__card"
            motionProps={{
              initial: { opacity: 0, y: 30 },
              animate: main.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
            }}
          >
            <Image className="main__card-image" src={unite_team} alt="unite_team" />
            <Text as="p" className="main__card-title text-main-card-title">
              What we believe in
            </Text>
            <Text as="p" className="main__card-description text-main-card-description">
              Over the years at Sans, we’ve put a lot of thought into what it is that makes us who
              we are. The qualities that unite us, that make us such an effective team, and...
            </Text>
            <Link href="#" className="main__card-link button-black text-button-black">
              See Details 🡪
            </Link>
          </Box>
          <Image
            className="main__image"
            src={unite_worker}
            alt="unite_worker"
            motionProps={{
              initial: { opacity: 0, x: 20 },
              animate: main.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
            }}
          />
          <Image className="main__dragger" src={dragger} data-no-slide={true} alt="" />
        </Slider>
      </Section>

      <Section
        className="ideas"
        ref={ideas.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: ideas.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Line
          className="ideas__hr"
          motionProps={{
            initial: { opacity: 0, scale: 0.9 },
            animate: ideas.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
            transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
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
            animate: ideas.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
        />
        <Line
          className="ideas__hr"
          motionProps={{
            initial: { opacity: 0, scale: 0.9 },
            animate: ideas.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
            transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
          }}
        />
      </Section>

      <Section
        className="team"
        ref={team.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Title
          heading="Meet our team of creators, designers, and world-class problem solvers"
          headingTag="h2"
          headingClass="text-title-heading-second-black"
          subheading="To become the company that customers want, it takes a group of passionate people. Get to know the people who lead"
          subheadingClass="text-title-subheading-small"
          isSubheadingLine={false}
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }}
        />
        <Slider
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
        >
          {CARD_TEAM.map((card, index) => (
            <CardTeam
              key={card.id}
              {...card}
              img={assets[card.img]}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                transition: { duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.2 },
              }}
            />
          ))}
          <Image
            className="team__dragger"
            src={dragger}
            alt=""
            data-no-slide={true}
            motionProps={{
              initial: { opacity: 0, scale: 0.8 },
              animate: team.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
              transition: { duration: 0.4, ease: "easeOut", delay: 0.8 },
            }}
          />
        </Slider>
        <Box
          className="team__join"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
          }}
        >
          <Text as="h2" className="team__join-title text-title-heading-second-black">
            {isMobile ? "Join the team" : "Join our team, The one with the master touch"}
          </Text>
          <Box className="team__join-description">
            <Text as="p" className="team__join-text text-title-subheading-small">
              We believe it takes great people to make a great product. That’s why we hire not only
              the perfect professional fits, but people who embody our company values.
            </Text>
            <Link
              href="#"
              className="team__join-link link-team-join"
              motionProps={{
                initial: { opacity: 0, x: -20 },
                animate: team.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
                transition: { duration: 0.4, ease: "easeOut", delay: 1 },
              }}
            >
              See open positions <Image src={link_arrow} alt="" />
            </Link>
          </Box>
        </Box>
      </Section>
    </main>
  );
};
