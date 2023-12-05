import React from "react";
import Navbar from "./Navbar";
import ProfileAboutCard from "../view-comp/ProfielAboutCard";
import ProfileRatingCard from "../view-comp/ProfileRatingCard";
import { ReactComponent as ViewIcon } from "../../assets/ViewIcon.svg";
import { ReactComponent as EducationIconOne } from "../../assets/EducationItemOne.svg";
import { ReactComponent as EducationIcon } from "../../assets/EducationIcon.svg";
import { ReactComponent as PersonIcon } from "../../assets/PersonIcon.svg";
import { ReactComponent as ProfileDetailIcon } from "../../assets/ProfileDetail.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/ExperienceIcon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/SkillsIcon.svg";
import { ReactComponent as ContactIcon } from "../../assets/contactIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/locationIcon.svg";
import { ReactComponent as LockIcon } from "../../assets/lock.svg";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";
import ProgressBar from "../view-comp/ProgressBar";
import HiringImage from "../../assets/wearehiring.png";
import { ReactComponent as MapIcon } from "../../assets/mapIcon.svg";
import { ReactComponent as CallIcon } from "../../assets/call.svg";
import CardItem from "../view-comp/CardItem";
import Button from "../view-comp/Button";
export default function CompanyProfileDetail() {
  const itemDescription =
    "I'm Cam! A highly motivated individual passionate about sales and marketing. With a strong work ethic and commitment to excellence, I strive for success. Growing up in Utah, I developed a love for the outdoors, spending free time exploring mountains and forests. As an avid snowboarder, carving down slopes gives me a thrill. In my academic journey, I found a deep interest in sales and marketing, recognizing its role in business growth. With a natural ability to connect with others and curiosity about consumer behavior, I excel in sales, marketing, and related fields.";
  const EducationItems = [
    {
      icon: <EducationIconOne />,
      title: "Bachelor of Science, Marketting",
      subtitle: "Utah Valley University - (2017 - 2021) ",
      description: itemDescription,
    },
    {
      icon: <EducationIconOne />,
      title: "Bachelor of Science, Marketting",
      subtitle: "Utah Valley University - (2017 - 2021) ",
      description: itemDescription,
    },
  ];
  const ExperienceItems = [
    {
      title: "Bachelor of Science, Marketting",
      subtitle: "Utah Valley University - (2017 - 2021) ",
      description: itemDescription,
    },
    {
      title: "Bachelor of Science, Marketting",
      subtitle: "Utah Valley University - (2017 - 2021) ",
      description: itemDescription,
    },
  ];
  const SkillItems = [
    {
      title: "Team Leadership",
      percentage: "85%",
    },
    {
      title: "Presenting",
      percentage: "80%",
    },
    {
      title: "Management",
      percentage: "85%",
    },
    {
      title: "Direct Sales",
      percentage: "90%",
    },
    {
      title: "Critical Thinking",
      percentage: "85%",
    },
    {
      title: "Microsoft Excel",
      percentage: "90%",
    },
    {
      title: "Team Leadership",
      percentage: "45%",
    },
  ];
  const ProfileRatingItems = [
    {
      itemTitle: "Year Founded",
      desc: "2017",
      Icon: <ViewIcon />,
    },
    {
        itemTitle: "Website",
        desc: "https://www.crumblecookies.com",
        Icon: <ViewIcon />,
      },
      {
        itemTitle: "Last Job Posted",
        desc: "10 min ago",
        Icon: <ViewIcon />,
      },
     
  ];
  return (
    <>
      <Navbar />
      <div className="px-6 flex justify-center items-center">
        <div className="container mx-auto flex items-center bg-[#191A1E] h-[223px] rounded-lg border border-[#61d1815b]">
          <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row ">
            <div className="flex items-center ">
              <ProfileDetailIcon />
              <div className="ml-2">
                <div className="leading-snug text-3xl text-[#fff] mb-2 font-bold">
                  Crumbl Cookies
                  <span className="text-[#61D180] text-sm ">
                    <MapIcon /> Logan, Utah
                  </span>
                </div>

                <div className="flex gap-2">
                  <p className="text-[#ffffff70] text-sm">
                    Crumbl Cookies is a thriving franchise that specializes in
                    delivering freshly baked, oversized, gourmet cookies with a
                    weekly rotating menu of flavors, using high-quality
                    ingredients and exceptional customer service.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-[170px]">
              <Button icon2={<CallIcon />} text={"Contact"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-8">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className=" col-span-2 ">
              <ProfileAboutCard
                title="Welcome to Crumbl!"
                icon={<PersonIcon />}
                cardItem={<CardItem description={itemDescription} />}
              />
              <ProfileAboutCard
                title="Education"
                icon={<EducationIcon />}
                cardItem={EducationItems.map((item) => (
                  <CardItem
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                ))}
              />
              <ProfileAboutCard
                title="Experience"
                icon={<ExperienceIcon />}
                cardItem={ExperienceItems.map((item) => (
                  <CardItem
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                ))}
              />
              <ProfileAboutCard
                title="Skill"
                icon={<SkillsIcon />}
                cardItem={SkillItems.map((item) => (
                  <ProgressBar
                    title={item.title}
                    percentage={item.percentage}
                  />
                ))}
              />
            </div>
            <div className="col-span-1 gap-y-8">
              <ProfileRatingCard
                title="Overview"
                ProfileRatingItems={ProfileRatingItems}
                btnIcon={<ShareIcon />}
              />
              <div className="flex justify-center items-center mt-6">
                <div className="container mx-auto items-center bg-[#191A1E] rounded-lg border border-[#61d1815b]">
                  <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row ">
                    <div className="flex gap-2 items-center justify-between w-full mt-3 pb-4 border-b-2 border-[#61d1815b]">
                      <div className="flex gap-2 items-center">
                        <ContactIcon />
                        <p className="leading-snug text-3xl text-[#fff] mb-2 font-bold">
                          Contact Cameron
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-8 py-8">
                    <div className="flex gap-2">
                      <LocationIcon />
                      <p className="text-[#ffffff70] text-sm">
                        <span className="text-[#ffffff70] font-bold">
                          cameronallen77@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8 flex justify-between w-full gap-4">
                    <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
                      <input
                        className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                        placeholder="Send Cameron a message."
                      />
                    </div>

                    <button className="bg-[#61D180] flex justify-center items-center h-[55px] rounded-[10px] px-12 gap-2 btn font-semibold">
                      <LockIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <img src={HiringImage} height="400" width="auto" alt="person" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
