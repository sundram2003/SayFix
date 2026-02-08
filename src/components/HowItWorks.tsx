export default function HowItWorks() {
  const steps = [
    {
      number: "STEP 1",
      title: "Pick from a range of cleaning services",
      description: "Choose from deep cleaning, pest control, painting & more",
      bgColor: "bg-primary",
    },
    {
      number: "STEP 2",
      title: "Schedule at your convenience",
      description: "Book instantly or schedule for later — your choice",
      bgColor: "bg-secondary",
    },
    {
      number: "STEP 3",
      title: "Professionals arrive & get it done",
      description: "Verified experts complete the job to perfection",
      bgColor: "bg-primary",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <span className="section-badge">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            How it works
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Simple steps to a cleaner home
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
          Follow these simple steps to get lightning-fast household help
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 text-white relative overflow-hidden min-h-[320px] flex flex-col`}
            >
              {/* Step Number Badge */}
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 w-fit">
                {step.number}
              </span>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-base">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
