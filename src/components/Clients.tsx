"use client";
import Image from "next/image";

export default function Clients() {
  const clients = [
    {
      name: "Hindustan Unilever",
      logo: (
        <div className="flex flex-col items-center">
          <div className="text-blue-800 font-bold text-lg">U</div>
          <span className="text-[10px] text-gray-600">Hindustan Unilever Limited</span>
        </div>
      ),
    },
    {
      name: "HDFC Bank",
      logo: (
        <div className="flex items-center gap-1">
          <div className="bg-red-600 text-white text-xs font-bold px-1">HDFC</div>
          <div className="text-blue-800 font-bold text-xs">BANK</div>
        </div>
      ),
    },
    {
      name: "Britannia",
      logo: (
        <div className="bg-red-600 text-white font-bold text-lg px-4 py-1 rounded">
          BRITANNIA
        </div>
      ),
    },
    {
      name: "Fortis",
      logo: (
        <div className="flex items-center gap-1">
          <div className="text-red-600 text-2xl font-bold">|</div>
          <span className="text-blue-800 font-bold text-xl">Fortis</span>
        </div>
      ),
    },
    {
      name: "KFC",
      logo: (
        <div className="text-red-600 font-extrabold text-2xl italic">KFC</div>
      ),
    },
    {
      name: "Ginger",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-green-600 font-bold text-xl">GINGER</span>
          <span className="text-[8px] text-gray-500">A TATA Enterprise</span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Clients
        </h2>

        {/* Client Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-0">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 min-w-[100px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Orange Call Bar */}
      <div className="bg-[#ff5722] mt-10 py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
          <div className="flex items-center gap-3 text-white">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="text-xl md:text-2xl font-bold">+91 7815 01 01 01</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-xl md:text-2xl font-bold">www.sayfix.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
