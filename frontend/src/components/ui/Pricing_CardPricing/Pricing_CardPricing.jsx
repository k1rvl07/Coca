import { assets, components } from "@exports";
import React from "react";

export const Pricing_CardPricing = ({
  color,
  icon,
  hasNotice = false,
  notice,
  title,
  description,
  price,
  features,
  motionProps = {},
  isInView,
  index,
  isSwitchOn,
}) => {
  const {
    Shared_Box: Box,
    Shared_Text: Text,
    Shared_Button: Button,
    Shared_List: List,
    Shared_Image: Image,
    Shared_Item: Item,
  } = components;
  const { enabled_ok, disabled_ok } = assets;

  return (
    <Box
      className="card-pricing"
      motionProps={{
        ...motionProps,
      }}
    >
      <Box
        className={`card-pricing__background ${color === "black" ? "card-pricing__background-black" : "card-pricing__background-white"}`}
      >
        {hasNotice ? (
          <Box className="card-pricing__header">
            <Image
              className="card-pricing__header-icon"
              src={icon}
              alt=""
              motionProps={{
                initial: { scale: 0.9, opacity: 0 },
                animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 },
                transition: {
                  delay: (motionProps.transition?.delay || 0) + 0.15 + index * 0.1,
                  duration: 0.6,
                },
              }}
            />
            <Box
              className="card-pricing__header-notice"
              motionProps={{
                initial: { opacity: 0, y: 5 },
                animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 },
                transition: {
                  delay: (motionProps.transition?.delay || 0) + 0.3 + index * 0.1,
                  duration: 0.8,
                },
              }}
            >
              <Text
                as="p"
                className="card-pricing__header-notice-text text-card-pricing-header-notice-text"
                motionProps={{
                  initial: { opacity: 0, y: 5 },
                  animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 },
                  transition: {
                    delay: (motionProps.transition?.delay || 0) + 0.3 + index * 0.1,
                    duration: 0.8,
                  },
                }}
              >
                {notice}
              </Text>
            </Box>
          </Box>
        ) : (
          <Image
            className="card-pricing__icon"
            src={icon}
            alt=""
            motionProps={{
              initial: { scale: 0.9, opacity: 0 },
              animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 },
              transition: {
                delay: (motionProps.transition?.delay || 0) + 0.15 + index * 0.1,
                duration: 0.8,
              },
            }}
          />
        )}

        <Text
          as="h3"
          className={`card-pricing__title ${color === "black" ? "text-card-pricing-title-white" : "text-card-pricing-title-black"}`}
          motionProps={{
            initial: { opacity: 0, y: 10 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
            transition: {
              delay: (motionProps.transition?.delay || 0) + 0.35 + index * 0.1,
              duration: 0.8,
            },
          }}
        >
          {title}
        </Text>

        <Text
          as="p"
          className="card-pricing__description text-card-pricing-description"
          motionProps={{
            initial: { opacity: 0, y: 5 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 },
            transition: {
              delay: (motionProps.transition?.delay || 0) + 0.4 + index * 0.1,
              duration: 0.8,
            },
          }}
        >
          {description}
        </Text>

        <Text
          as="p"
          key={isSwitchOn ? "discount" : "regular"}
          className={`card-pricing__price ${color === "black" ? "text-card-pricing-price-white" : "text-card-pricing-price-black"}`}
          motionProps={{
            initial: { opacity: 0, scale: 0.95 },
            animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
            transition: {
              delay: (motionProps.transition?.delay || 0) + 0.4 + index * 0.1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          {"$"}
          {price}{" "}
          <Text as="span" className="card-pricing__period text-card-pricing-period">
            /mo
          </Text>
        </Text>

        <Text
          as="p"
          className={`card-pricing__features ${
            color === "black"
              ? "text-card-pricing-features-white"
              : "text-card-pricing-features-black"
          }`}
          motionProps={{
            initial: { opacity: 0 },
            animate: isInView ? { opacity: 1 } : { opacity: 0 },
            transition: {
              delay: (motionProps.transition?.delay || 0) + 0.5 + index * 0.1,
              duration: 0.8,
            },
          }}
        >
          What's included:
        </Text>

        <List className="card-pricing__features-list">
          {features.map((feature, featureIndex) => (
            <Item
              className="card-pricing__feature-item"
              key={feature.id}
              motionProps={{
                initial: { opacity: 0, x: -5 },
                animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 },
                transition: {
                  delay:
                    (motionProps.transition?.delay || 0) + 0.55 + featureIndex * 0.05 + index * 0.1,
                  duration: 1,
                },
              }}
            >
              <Image
                className="card-pricing__feature-icon"
                src={feature.active ? enabled_ok : disabled_ok}
                alt=""
              />
              <Text
                as="span"
                className={`card-pricing__feature ${
                  feature.active
                    ? color === "black"
                      ? "text-card-pricing-feature-white"
                      : "text-card-pricing-feature-black"
                    : "text-card-pricing-feature-disabled"
                }`}
              >
                {feature.text}
              </Text>
            </Item>
          ))}
        </List>

        <Button
          className={`card-pricing__button ${color === "black" ? "button-white" : "button-grey"}`}
          motionProps={{
            initial: { opacity: 0 },
            animate: isInView ? { opacity: 1 } : { opacity: 0 },
            transition: {
              delay: (motionProps.transition?.delay || 0) + 0.65 + index * 0.1,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          Choose Plan
        </Button>
      </Box>
    </Box>
  );
};
