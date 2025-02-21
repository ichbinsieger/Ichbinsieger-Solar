import React, { useState } from "react";

function ContactUs() {
    const [message, setMessage] = useState("");
    const [name,setName] = useState("")
    const phoneNumber = "+2348095556675";
  const Customer = encodeURIComponent(name);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text= hello IchBinSieger Solar, my name is ${Customer}. ${encodedMessage}`;

  return (
    <div className="px-4 md:px-24 py-10 " id="contact">
      <div>
        <p className="text-2xl font-semibold border-b-2 border-[#0065A4] inline-flex pb-2 mb-8 md:mb-16">
          Get In Touch
        </p>
        <form className="w-full">
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 py-5 md:py-10">
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="bg-gray-200 border-none w-full md:w-1/2 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-gray-200 border-none w-full md:w-1/2 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
            />
          </div>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full bg-gray-200 border-none py-3 md:py-4 px-3 mb-5 md:mb-10 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            placeholder="Message"
            className="bg-gray-200 border-none w-full h-40 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
          />
        <div className="flex justify-center space-x-6 mt-8 md:mt-10">
            <button
              type="submit"
              className="px-6 py-2 md:px-8 md:py-3 bg-[#0065A4] text-white font-semibold rounded-sm hover:bg-[#00518a] transition-all focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:ring-offset-2"
            >
              Send via Mail
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="  px-6 py-2 md:px-8 md:py-3 bg-[#0065A4] text-white font-semibold rounded-sm hover:bg-[#00518a] transition-all focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:ring-offset-2" >
             Send via WhatsApp
              </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;