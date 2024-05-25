export default function Footer() {
  return (
    <div className="m-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-[1rem]">
            I am ReactJS developer from Pakistan <br /> with the experience of
            Web designing and Technologies.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-60 h-12"
            />
          </div>
          <div
            style={{ background: "linear-gradient(300deg,  red , black)" }}
            className="p-3 rounded-xl transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4  border-[red] mt-3"
          >
            Subscribe
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <p className="font-semibold text-[1rem]">
          @2024 Zaina Ijaz, All rights
        </p>
        <div className="flex gap-2 mb-5">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
}
