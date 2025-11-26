import { useState } from "react";
import gmail from "../assets/free-mail-icon-142-thumb.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation: check if any field is empty
    if (!formData.name || !formData.email || !formData.msg) {
      alert("All fields are required!");
      return;
    }

    const data = new FormData();
    data.append("access_key", "b1bdbfc1-d087-47e6-9015-d059692b2ddb");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("msg", formData.msg);

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        msg: "",
      });
    } else {
      alert("Failed to send email");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-3 mt-8"
      id="contact"
    >
      <div className="relative">
        <h1 className="text-[3rem] font-bold">Get in Touch</h1>
      </div>
      <div className="flex gap-20 contact-layout">
        <div className="flex flex-col gap-6 contact-margin">
          <h1
            style={{
              background: "linear-gradient(267deg, red ,  white)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold text-[2rem]"
          >
            Let&apos; Talk
          </h1>
          <p className="font-semibold text-[1rem]">
            I&apos; m available 24/7 to take on new projects💻. You can contact
            me anytime😊
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={gmail}
                alt="Gmail"
                className="bg-white w-10 rounded-md"
              />
                  {/* Email Link */}
          <a 
            href="mailto:zainaijaz32@gmail.com" 
            className="underline hover:text-blue-600"
          >
            zainaijaz32@gmail.com
          </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={phone} alt="Phone" className="w-10" />
                      <a 
            href="tel:+923001234567" 
            className="underline hover:text-blue-600"
          >
            03144232659
          </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={location} alt="Location" className="w-10" />
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-2" onSubmit={onSubmit}>
          <label
            htmlFor="name"
            style={{
              background: "linear-gradient(267deg, red ,  white)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold text-[1.5rem]"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-none w-80 h-10 text-black"
            required
          />
          <label
            htmlFor="email"
            style={{
              background: "linear-gradient(267deg, red ,  white)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold text-[1.5rem]"
          >
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-none w-80 h-10 text-black"
            required
          />
          <label
            htmlFor="msg"
            style={{
              background: "linear-gradient(267deg, red ,  white)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold text-[1.5rem]"
          >
            Write Your Message Here
          </label>
          <textarea
            name="msg"
            rows="8"
            placeholder="Enter your message"
            value={formData.msg}
            onChange={handleChange}
            className="w-80 text-black"
            required
          ></textarea>
          <button
            type="submit"
            style={{ background: "linear-gradient(300deg, red , black)" }}
            className="p-3 rounded-xl transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer border-4 border-[red] mt-4"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
