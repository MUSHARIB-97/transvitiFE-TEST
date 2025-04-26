import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { Styles } from "./Styles";
import MenuButton from "../../components/menu-button";
import {
  cardData,
  InitialValues,
  jobTypes,
  locations,
} from "../../helper/Constant";
import CustomButton from "../../components/CustomButton";
import { SearchProps } from "../../types/dataTypes";
import UserProfile from "../../components/user-profile-container/UserProfile";
import CustomAnchorCard from "../../components/anchor-card/CustomAnchorCard";
import IMAGES from "../../assets/images";

const LandingPage: React.FC = () => {
  const [selected, setSelected] = useState<SearchProps>(InitialValues);
  return (
    <MainLayout>
      <main className={Styles.userProfileContainer}>
        <section className={Styles.userProfileSUbContainer}>
          <UserProfile />
        </section>
        {/* main content */}
        <section className="flex-1">
          <div className="heading">
            <h3 className="text-2xl font-bold capitalize">
              Find Your Dream Job, <span className="text-primary">Albert</span>
            </h3>
            <p className="text-text-secondary">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </div>
          {/* hero */}
          <div
            className={`w-full bg-white rounded-lg my-6 flex-col flex
    md:flex-row items-center justify-between px-2 md:px-4 shadow-md py-2 md:py-4 gap-4 md:gap-0`}
          >
            <div>
              <p className="text-text-secondary text-base flex searchtextcustom:hidden titlecustom:block">
                Job Title, Company, or Keywords
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full titlecustom:w-1/2 justify-end">
              <MenuButton
                title="Select Location"
                list={locations}
                selected={selected.locations}
                setSelected={(value: string) =>
                  setSelected((prevState) => ({
                    ...prevState,
                    locations: value,
                  }))
                }
                // style="w-full md:w-auto"
              />
              <MenuButton
                title="Job Type"
                list={jobTypes}
                selected={selected.jobTypes}
                setSelected={(value: string) =>
                  setSelected((prevState) => ({
                    ...prevState,
                    jobTypes: value,
                  }))
                }
                // style="w-full md:w-auto"
              />
              <CustomButton
                title="Search"
                onClick={() => setSelected(InitialValues)}
                rightIcon={IMAGES.search}
                // customStyles="w-full md:w-auto px-4"
              />
            </div>
          </div>

          {/* similar jobs */}
          <div className="flex items-center gap-4 border-b border-border-primary pb-4">
            <div className="hidden md:block">
              <p className="text-xl font-light text-text-secondary">Similar:</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap overflow-hidden">
              <CustomButton title="Frontend" isOutline={true} />
              <CustomButton title="Backend" isOutline={true} />
              <CustomButton title="Graphic designer" isOutline={true} />
            </div>
          </div>
          {/* cards */}
          {cardData.map((section) => (
            <div
              key={section.id}
              className="my-4 border-b pb-10 last:border-b-0"
            >
              <div className="flex items-center gap-2 my-6">
                <h2 className="text-text-card sm:text-base md:text-xl whitespace-nowrap truncate overflow-hidden">
                  {section.key}
                </h2>
                <a
                  title={section.seeMore}
                  href="#"
                  className="text-primary sm:text-base border-b-2 border-primary whitespace-nowrap truncate overflow-hidden"
                >
                  {section.seeMore}
                </a>
              </div>

              <div className="grid grid-cols-1 smcustom:grid-cols-2 sm:grid-cols-3 mdcustom:grid-cols-4 xlcustom:grid-cols-5 gap-2">
                {section.data.map((job) => (
                  <CustomAnchorCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    datePosted={job.datePosted}
                    applicants={job.applicants}
                    isSaved={job.isSaved || false}
                    jobType={job.jobType}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </MainLayout>
  );
};

export default LandingPage;
