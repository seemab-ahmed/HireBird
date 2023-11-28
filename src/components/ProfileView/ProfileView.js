import React from "react";
import Navbar from "./Navbar";
import ProfileNameInfoCard from "../view-comp/ProfileNameInfoCard";
import ProfileAboutCard from "../view-comp/ProfielAboutCard";
import ProfileRatingCard from "../view-comp/ProfileRatingCard";
import {ReactComponent as ViewIcon} from '../../assets/ViewIcon.svg';
import {ReactComponent as EducationIconOne} from '../../assets/EducationOne.svg';
import CardItem from "../view-comp/CardItem";
export default function ProfileView() {
  return (
    <>
      <Navbar />
      <ProfileNameInfoCard />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className=" col-span-2 "><ProfileAboutCard title="About Cameron" /></div>
        <div className="col-span-1"><ProfileRatingCard  title="Overview" itemTitle="Views" desc="895" Icon={<ViewIcon />}/></div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className=" col-span-2 "><ProfileAboutCard title="Education" cardItem={<CardItem icon={<EducationIconOne />} title="Bachelor of Science, Marketting" subtitle="Utah Valley University - (2017 - 2021) " />} /></div>
        {/* <div className="col-span-1"><ProfileRatingCard  title="Overview" itemTitle="Views" desc="895" Icon={<ViewIcon />}/></div> */}
      </div>
    </>
  );
}
