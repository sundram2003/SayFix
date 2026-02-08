import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Full House Deep Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Water Tank Cleaning",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Pest Control",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Water Proofing",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Painting",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop&q=80",
    },
  ];

  const categories = [
    "Commercial Buildings",
    "Public & Private Sector",
    "Hotels",
    "Apartment Complexes",
    "Educational Institutes",
    "Hospitals",
  ];

  return (
    <section id="services" className="section-padding bg-white py-16">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        {/* Services Grid - 2x2 + 1 layout */}
        <div className="grid grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>


        {/* Categories Banner */}
        <div className="bg-gray-900 rounded-2xl py-6 px-8 text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            {categories.join(" | ")}
          </p>
        </div>
      </div>
    </section>
  );
}
