import React from "react";
import Navbar from "./Navbar";
import ProfileNameInfoCard from "../view-comp/ProfileNameInfoCard";
import ProfileAboutCard from "../view-comp/ProfielAboutCard";
import ProfileRatingCard from "../view-comp/ProfileRatingCard";
import { ReactComponent as ViewIcon } from "../../assets/ViewIcon.svg";
import { ReactComponent as EducationIconOne } from "../../assets/EducationOne.svg";
import { ReactComponent as EducationIcon } from "../../assets/EducationIcon.svg";
import { ReactComponent as PersonIcon } from "../../assets/PersonIcon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/ExperienceIcon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/SkillsIcon.svg";
import ProgressBar from "../view-comp/ProgressBar";
import manImage from "../../assets/Man.png";

import CardItem from "../view-comp/CardItem";
export default function ProfileView() {
  const itemDescription = "I'm Cam! A highly motivated individual passionate about sales and marketing. With a strong work ethic and commitment to excellence, I strive for success. Growing up in Utah, I developed a love for the outdoors, spending free time exploring mountains and forests. As an avid snowboarder, carving down slopes gives me a thrill. In my academic journey, I found a deep interest in sales and marketing, recognizing its role in business growth. With a natural ability to connect with others and curiosity about consumer behavior, I excel in sales, marketing, and related fields.";
  const EducationItems = [
    {
      icon :<EducationIconOne />,
      title : "Bachelor of Science, Marketting",
      subtitle : "Utah Valley University - (2017 - 2021) ",
      description:itemDescription
    },
    {
      icon :<EducationIconOne />,
      title : "Bachelor of Science, Marketting",
      subtitle : "Utah Valley University - (2017 - 2021) ",
      description:itemDescription
    }
  ]
  const ExperienceItems = [
    {
      title : "Bachelor of Science, Marketting",
      subtitle : "Utah Valley University - (2017 - 2021) ",
      description:itemDescription
    },
    {
      title : "Bachelor of Science, Marketting",
      subtitle : "Utah Valley University - (2017 - 2021) ",
      description:itemDescription
    }
  ]
  const SkillItems = [
    {
      title : "Team Leadership",
      percentage :'85%'
    },
    {
      title : "Presenting",
      percentage :'80%'
    },
    {
      title : "Management",
      percentage :'85%'
    },
    {
      title : "Direct Sales",
      percentage :'90%'
    },
    {
      title : "Critical Thinking",
      percentage :'85%'
    },
    {
      title : "Microsoft Excel",
      percentage :'90%'
    },
    {
      title : "Team Leadership",
      percentage :'45%'
    },
  ]
  return (
    <>
      <Navbar />
      <ProfileNameInfoCard />
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className=" col-span-2 ">
              <ProfileAboutCard
                title="About Cameron"
                icon={<PersonIcon />}
                cardItem={<CardItem description={itemDescription} />}
              />
              <ProfileAboutCard
                title="Education"
                icon={<EducationIcon />}
                cardItem={
                  EducationItems.map((item) => <CardItem
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                />)
                  
                }
              />
              <ProfileAboutCard
                title="Experience"
                icon={<ExperienceIcon />}
                cardItem={
                  ExperienceItems.map((item) => <CardItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                />)}
              />
              <ProfileAboutCard
                title="Skill"
                icon={<SkillsIcon />}
                cardItem={SkillItems.map((item)=> <ProgressBar title={item.title} percentage={item.percentage} />)}
              />
            </div>
            <div className="col-span-1 gap-1">
              <ProfileRatingCard
                title="Overview"
                itemTitle="Views"
                desc="895"
                Icon={<ViewIcon />}
              />
              <image src={manImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
