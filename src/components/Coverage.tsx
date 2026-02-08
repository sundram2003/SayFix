export default function Coverage() {
  const sectors = [
    "Commercial Buildings",
    "Public & Private Sector",
    "Hotels",
    "Apartment Complexes",
    "Educational Institutes",
    "Hospitals",
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">
          Serving Across <span className="text-primary">All Sectors</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {sectors.map((sector, index) => (
            <span
              key={index}
              className="px-4 py-2 md:px-6 md:py-3 border border-gray-700 rounded-full text-sm md:text-base hover:border-primary hover:text-primary transition-colors"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
