import Services_Data from "./services";

function Services() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 m-3"
      id="services"
    >
      <div className="relative">
        <h1 className="text-[3rem] font-bold p-4">My services</h1>
        <img src="" alt="" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Services_Data.map((service, index) => {
          return (
            <div
              className="service-layout flex flex-col items-center justify-center gap-3 m-3 cursor-pointer translate-x-1 border-4 border-white p-5"
              key={index}
            >
              <h1
                style={{
                  background: "linear-gradient(267deg, red ,  white)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-semibold text-[2rem]"
              >
                {service.s_no}
              </h1>
              <h1
                style={{
                  background: "linear-gradient(267deg, red ,  white)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-semibold  text-[2rem]"
              >
                {service.s_name}
              </h1>
              <h1>{service.s_desc}</h1>
              <div className="bg-[red] p-2 rounded-md btn-layout">
                <p>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
