import Image from "next/image";

export default function Hero() {
  const cities = [
    { name: "Hyderabad", color: "text-primary" },
    { name: "Bangalore", color: "text-secondary" },
    { name: "Chennai", color: "text-primary" },
    { name: "Mumbai", color: "text-secondary" },
  ];

  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Professional Home
            <br />
            Cleaning Services
          </h1>

          {/* City Names */}
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            Now serving in{" "}
            {cities.map((city, index) => (
              <span key={city.name}>
                <span className={`font-semibold ${city.color}`}>{city.name}</span>
                {index < cities.length - 1 && (
                  <span className="text-gray-400">{index === cities.length - 2 ? " & " : ", "}</span>
                )}
              </span>
            ))}
          </p>

          {/* Tagline */}
          <p className="text-gray-500 text-lg mb-10">
            Your home, professionally cleaned — exactly when you need it
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="tel:+917815010101" className="btn-primary text-lg px-8 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 7815 01 01 01
            </a>
            <a href="#services" className="btn-outline text-lg px-8 py-4">
              View Services
            </a>
          </div>
        </div>

        {/* Hero Images */}
        <div className="relative flex justify-center items-end gap-4 md:gap-8">
          {/* Left Professional */}
          <div className="relative w-32 md:w-48 lg:w-56 aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
              alt="Professional cleaner"
              fill
              className="object-cover rounded-t-full"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
            />
          </div>

          {/* Center - Stats Card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-xl p-6 md:p-8 -mb-4">
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-gray-900">20K+</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Homes cleaned</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-2xl md:text-4xl font-bold text-gray-900">50K+</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Hours saved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-gray-900">250+</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Professionals</p>
              </div>
            </div>
          </div>

          {/* Right Professional */}
          <div className="relative w-32 md:w-48 lg:w-56 aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&q=80"
              alt="Professional cleaner"
              fill
              className="object-cover rounded-t-full"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
