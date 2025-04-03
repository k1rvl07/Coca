import { assets, components } from "@exports";
import React from "react";

export const About_CardTeam = ({ img, name, position, links, motionProps = {} }) => {
  const { Shared_Box: Box, Shared_Text: Text, Shared_Image: Image, Shared_Link: Link } = components;
  const { team_twitter, team_linkedin, team_instagram } = assets;
  return (
    <Box className="card-team" motionProps={{ ...motionProps }}>
      <Image className="card-team__image" src={img} alt="" />
      <Box className="card-team__info">
        <Text as="p" className="card-team__name text-card-team-name">
          {name}
        </Text>
        <Text as="p" className="card-team__role text-card-team-role">
          {position}
        </Text>
      </Box>
      <Box className="card-team__socials">
        <Link href={links[0]} className="card-team__socials-link">
          <Image className="card-team__socials-icon" src={team_twitter} alt="" />
        </Link>
        <Link href={links[1]} className="card-team__socials-link">
          <Image className="card-team__socials-icon" src={team_linkedin} alt="" />
        </Link>
        <Link href={links[2]} className="card-team__socials-link">
          <Image className="card-team__socials-icon" src={team_instagram} alt="" />
        </Link>
      </Box>
    </Box>
  );
};
