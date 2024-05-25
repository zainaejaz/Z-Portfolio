import MyWork_List from "./mywork.js";

function Work() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 m-3 mt-6"
      id="work"
    >
      <div className="text-center">
        <h1 className="text-[3rem] font-bold">My Latest Work</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {MyWork_List.map((work, index) => (
          <a
            href={work.w_url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative w-full h-60 overflow-hidden work-layout"
          >
            <img
              src={work.w_img}
              alt={work.w_name}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg font-bold">{work.w_name}</h2>
              <p className="text-sm text-center">{work.w_desc}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="cursor-pointer bg-[red] p-2 rounded-md btn-layout">
          Show More
        </p>
      </div>
    </div>
  );
}

export default Work;
