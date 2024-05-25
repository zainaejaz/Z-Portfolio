import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/profileImg.jpeg";
import resumePdf from "../assets/resume.pdf"; // Make sure the path is correct

function Section() {
  const openResume = () => {
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3" id="home">
      <img
        src={profileImg}
        className="w-50 h-40 object-contain rounded-full mt-[150px] transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4 border-[red]"
      />
      <h1 className="text-center text-[3rem]">
        <span
          style={{
            background: "linear-gradient(267deg, red , white)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="font-semibold"
        >
          I'am Zaina,
        </span>{" "}
        frontend developer from Pakistan
      </h1>
      <p className="text-center text-lg">
        A frontend developer skilled in HTML, CSS, Bootstrap, Tailwind,
        JavaScript, and React.js, capable of creating responsive and dynamic web
        applications
      </p>
      <div className="flex gap-5 mt-5">
        <div
          style={{ background: "linear-gradient(300deg, red, black)" }}
          className="p-3 rounded-xl transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4 border-[red]"
        >
          <AnchorLink href="#contact">Connect with me</AnchorLink>
        </div>
        <div
          onClick={openResume}
          className="p-3 rounded-xl transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4 border-[red]"
        >
          My Resume
        </div>
      </div>
    </div>
  );
}

export default Section;
