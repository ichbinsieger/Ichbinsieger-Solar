import { useState } from "react";
import { FaInbox, FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const phoneNumber = "+2348095556675";
  const encodedName = encodeURIComponent(name);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello IchBinSieger Solar, my name is ${encodedName}. ${encodedMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailtoLink = `mailto:oluwaseun.vi@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodedMessage}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="px-4 md:px-24 py-10" id="contact">
      <div>
        <p className="text-2xl font-semibold border-b-2 border-[#0065A4] inline-flex pb-2 mb-8 md:mb-16">
          Get In Touch
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 py-5 md:py-10">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-gray-200 border-none w-full md:w-1/2 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
              placeholder="Name"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-gray-200 border-none w-full md:w-1/2 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
              placeholder="Email"
              required
            />
          </div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="w-full bg-gray-200 border-none py-3 md:py-4 px-3 mb-5 md:mb-10 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
            placeholder="Phone Number"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-200 border-none w-full h-40 px-3 py-3 md:py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:bg-white transition-all"
            placeholder="Message"
            required
          />

          <div className="flex justify-center space-x-6 mt-8 md:mt-10 text-sm md:text-base">
            <button
              type="submit"
              className="px-6 py-2 md:px-8 md:py-3 bg-[#0065A4] text-white font-semibold rounded-sm hover:bg-[#00518a] transition-all focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:ring-offset-2"
            >
              Send via Mail <FaInbox className="inline" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 md:px-8 md:py-3 bg-[#0065A4] text-white font-semibold rounded-sm hover:bg-[#00518a] transition-all focus:outline-none focus:ring-2 focus:ring-[#0065A4] focus:ring-offset-2"
            >
              Send via WhatsApp <FaWhatsapp className="inline" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
