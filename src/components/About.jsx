import profileImg from "../assets/profileImg.jpeg";

function About() {
  return (
    <div
      className="flex flex-col items-center gap-3 mt-8 text-center"
      id="about"
    >
      <div>
        <h1 className="text-[3rem] font-bold">About Me</h1>
      </div>

      <div className="flex items-center gap-10 md:gap-12 mt-8 md:mt-12 about-layout">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-90 h-80 object-cover transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4  border-[red]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-w-lg mt-8 md:mt-0 md:ml-[8rem]">
          <div className="max-w-md">
            <p>
              A talented frontend developer with expertise in HTML, CSS,
              Bootstrap, Tailwind, JavaScript, and React.js, known for creating
              stunning, responsive web interfaces that enhance user experience
              and engagement.
            </p>
            <br />
            <p>
              I&apos; m passionate about the field of web development,
              constantly seeking out new technologies and best practices to
              innovate and push the boundaries of what&apos; possible on the
              web.
            </p>
          </div>
          <div className="flex items-center mt-8">
            <p className="w-1/2 text-left">HTML & CSS</p>
            <hr
              className="flex-grow border-t border-gray-400"
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                height: "8px",
                borderRadius: "50px",
                background: "linear-gradient(300deg,  white ,red )",
              }}
            />
          </div>
          <div className="flex items-center">
            <p className="w-1/2 text-left">Bootstrap & Tailwind</p>
            <hr
              className="flex-grow border-t border-gray-400"
              style={{
                outline: "none",
                border: "none",
                width: "50%",
                height: "8px",
                borderRadius: "50px",
                background: "linear-gradient(300deg,  white ,red)",
              }}
            />
          </div>
          <div className="flex items-center">
            <p className="w-1/2 text-left">JavaScript</p>
            <hr
              className="flex-grow border-t border-gray-400"
              style={{
                outline: "none",
                border: "none",
                width: "70%",
                height: "8px",
                borderRadius: "50px",
                background: "linear-gradient(300deg,  white ,red)",
              }}
            />
          </div>
          <div className="flex items-center">
            <p className="w-1/2 text-left">ReactJs</p>
            <hr
              className="flex-grow border-t border-gray-400"
              style={{
                outline: "none",
                border: "none",
                width: "200%",
                height: "8px",
                borderRadius: "50px",
                background: "linear-gradient(300deg,  white ,red)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
