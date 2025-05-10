import { assets, components, content, hooks } from "@exports";
import { services } from "@exports";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

export const Contact = () => {
  const { CONTACT_CARD_CONTACT: CARD_CONTACT } = content;
  const { map, form_feedback } = assets;
  const {
    Shared_Box: Box,
    Shared_Text: Text,
    Shared_Image: Image,
    Shared_Section: Section,
    Contact_CardContact: CardContact,
    Shared_SectionSponsor: SectionSponsor,
    Shared_Form: Form,
    Shared_Label: Label,
    Shared_Input: Input,
    Shared_Textarea: Textarea,
    Shared_Button: Button,
  } = components;
  const { useSectionAnimation } = hooks;
  const { postMember } = services;

  const sections = ["main", "feedback"];
  const animations = sections.map(() => useSectionAnimation({ amount: 0.2, once: true }));
  const [mainAnimation, feedbackAnimation] = animations;

  const [_phone, _setPhone] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const memberMutation = useMutation({
    mutationFn: (data) => postMember(data),
    onSuccess: () => {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    memberMutation.mutate(formData);
  };

  return (
    <main className="contact-page">
      <Section
        className="main"
        ref={mainAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Text
          as="h1"
          className="main__heading text-title-heading"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }}
        >
          Contact our team to find out more
        </Text>

        <Box
          className="main__map"
          motionProps={{
            initial: { opacity: 0, scale: 0.95 },
            animate: mainAnimation.isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
          }}
        >
          <Image className="main__image" src={map} />
          <Box className="main__address">
            <Box className="main__address-container">
              <Text className="main__address-global text-main-address-global">Yogja, INA</Text>
              <Text className="main__address-full text-main-address-full">
                100 Smith Street Collingwood VIC 3066 AU
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className="main__cards">
          {CARD_CONTACT.map((card, index) => (
            <CardContact
              key={card.id}
              {...card}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                transition: { duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.15 },
              }}
            />
          ))}
        </Box>
      </Section>
      <SectionSponsor />
      <Section
        className="feedback"
        ref={feedbackAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: feedbackAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Image
          className="feedback__image"
          src={form_feedback}
          motionProps={{
            initial: { opacity: 0, scale: 0.95 },
            animate: feedbackAnimation.isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
          }}
        />
        <Form
          className="form"
          onSubmit={handleSubmit}
          motionProps={{
            initial: { opacity: 0 },
            animate: feedbackAnimation.isInView ? { opacity: 1 } : { opacity: 0 },
            transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
          }}
        >
          <Box className="form__container">
            <Text
              as="h3"
              className="form__title text-feedback-form-title"
              motionProps={{
                initial: { opacity: 0, y: -20 },
                animate: feedbackAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
                transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
              }}
            >
              Let’s level up your brand
            </Text>
            <Text
              as="p"
              className="form__description text-feedback-form-description"
              motionProps={{
                initial: { opacity: 0, y: -10 },
                animate: feedbackAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 },
                transition: { duration: 0.4, ease: "easeOut", delay: 0.6 },
              }}
            >
              You can reach us anytime{" "}
              <Text as="span" className="form__description-email">
                hellosansbrothers@gmail.com
              </Text>
            </Text>
            {[
              { id: "first_name", label: "First name", type: "text", placeholder: "First name" },
              { id: "last_name", label: "Last name", type: "text", placeholder: "Last name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
              { id: "phone", label: "Phone number", component: "phone" },
              {
                id: "message",
                label: "Message",
                component: "textarea",
                placeholder: "Leave us a message...",
              },
            ].map((field, index) => (
              <Box
                key={field.id}
                className="form__group"
                motionProps={{
                  initial: { opacity: 0, y: 10 },
                  animate: feedbackAnimation.isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 },
                  transition: { duration: 0.3, ease: "easeOut", delay: 0.7 + index * 0.1 },
                }}
              >
                <Label className="form__label label-feedback-form" htmlFor={field.id}>
                  {field.label}
                </Label>
                {field.component === "phone" ? (
                  <PhoneInput
                    className="form__input input-feedback"
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handlePhoneChange}
                    international={true}
                    defaultCountry="US"
                    name={field.id}
                    maxLength={16}
                  />
                ) : field.component === "textarea" ? (
                  <Textarea
                    className="form__textarea textarea-feedback"
                    id={field.id}
                    placeholder={field.placeholder}
                    maxLength={255}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                ) : (
                  <Input
                    className="form__input input-feedback"
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                )}
              </Box>
            ))}

            <Button
              className="form__button button-black"
              type="submit"
              disabled={memberMutation.isLoading}
              motionProps={{
                initial: { opacity: 0, y: 10 },
                animate: feedbackAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
                transition: { duration: 0.3, ease: "easeOut", delay: 1.2 },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Form>
      </Section>
    </main>
  );
};
