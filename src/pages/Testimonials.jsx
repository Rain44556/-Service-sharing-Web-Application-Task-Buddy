import React from "react";

const testimonials = [
  {
    name: "Alex",
    role: "Manager, IIT Docs",
    image:
      "https://i.ibb.co.com/JRHXpS8j/young-smiling-office-worker-man-headphones-optical-glasses-sits-desk-with-office-tools-using-laptop.jpg",
    rating: 4.5,
    feedback:
      "Task Buddy played a vital role in guiding us through a crucial phase of development. Their insights and strategic approach were instrumental in our success.",
  },
  {
    name: "Doremon",
    role: "Manager, IIT Docs",
    image:
      "https://i.ibb.co.com/XfHw7yk6/teenage-student-glasses-headphones-sitting-table-classroom.jpg",
    rating: 4,
    feedback:
      "Partnering with Task Buddy helped us overcome complex challenges with confidence. Their team's dedication and deep understanding provided us with the clarity needed for growth.",
  },
  {
    name: "Sultan",
    role: "Manager, IIT Docs",
    image: "https://i.ibb.co.com/ccvJFpvc/c.jpg",
    rating: 5,
    feedback:
      "We engaged with Task Buddy to help us navigate a challenging period of growth and expansion. Their team provided invaluable insights, strategic guidance.",
  },
];
const Testimonials = () => {
  return (
    <div className="py-12 my-10 text-gray-300">
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold text-white">Client's Feedback</h2>
        <h1 className="text-3xl font-bold text-yellow-300">
          Amazing Feedback Say About Services
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} 
          className="card bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] shadow-xl p-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 border-b-2 mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-full mb-3"
              />
           <div>
           <h3 className="font-semibold text-lg text-yellow-300">{testimonial.name}</h3>
           <p className="text-sm">{testimonial.role}</p>
           </div>

           <div className="rating my-2 flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < testimonial.rating ? "gold" : "none"}
                    viewBox="0 0 24 24"
                    stroke="gold"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              </div>
              


              <p className="text-justify">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
