import React from "react";
import Box from "./Box";
import Timeline from "../components/Timeline";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import userimage from "../assets/images/userimage.png";
import Address from "../components/Address";
import Skills from "./Skills";


const MainContent = ({ isOpen }) => {
  const mainContentClasses = `transition-margin ${
    isOpen
      ? "-ml-4 sm:ml-[-6rem] md:ml-[-8rem] lg:ml-[-10rem]"
      : "ml-10 sm:ml-8 md:ml-10 lg:ml-10"
  }`;
  return (
    <div className={mainContentClasses}>
      <div id="top"></div>
      <div id="about" className="p-r my-5 md:pr-8 lg:pr-16">
        <Box
          title="About me"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque"
        />
      </div>
      <div id="education">
        <Box title="Education" />
        <Timeline
          id="education"
          data={[
            {
              date: 2016,
              title: "Bachelors degree, law",
              text: "Lorem ipsum dolor sit amet, conscetur ridiculus Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque     ",
            },
            {
              date: 2019,
              title: "Masters degree, law",
              text: "Lorem ipsum dolor sit amet, conscetur ridiculus Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque     ",
            },
            {
              date: 2023,
              title: "Learn Digital Platform - EPAM",
              text: "Lorem ipsum dolor sit amet, conscetur ridiculus Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque     ",
            },
          ]}
        />
      </div>
      <div id="experience">
        <Box title="Experience" />
        <Expertise
          id="experience"
          data={[
            {
              date: "2020 – 2022",
              info: {
                company: "Adjara group",
                job: "UX/UI Designer",
                description:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
              },
            },
            {
              date: "2023",
              info: {
                company: "Google",
                job: "Front-End Developer",
                description:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
              },
            },
          ]}
        />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Box title="Portfolio" />
        <Portfolio />
      </div>
      <div id="contacts" className="mt-[2rem]">
        <Box title="Contact" />
        <Address />
      </div>
      <div id="feedback" className="mt-[2rem]">
        <Box title="Feedback" />
        <Feedback
          data={[
            {
              feedback:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
              reporter: {
                photoUrl: userimage,
                name: "John Doe Programer",
                citeUrl: "https://www.citeexample.com",
              },
            },
            {
              feedback:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
              reporter: {
                photoUrl: userimage,
                name: "John Doe Programer",
                citeUrl: "https://www.citeexample.com",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MainContent;
