import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sayfix transformed our home! The deep cleaning team was professional, thorough, and completed the job on time. Highly recommend their services.",
      name: "Priya Sharma",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    },
    {
      quote: "I'd say it was great value for money. The urgency was handled well, without compromising quality. Really satisfied with the experience.",
      name: "Rajesh Kumar",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
    {
      quote: "The water tank cleaning service was excellent. The team was punctual and explained the entire process. Our residents are very satisfied.",
      name: "Anita Patel",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <span className="section-badge">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Our Testimonials
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          User reviews and feedback
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
          See how Sayfix has transformed users' experiences through their own words
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200 text-6xl font-serif">
                "
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
