import React from "react";

export default function UpcomingWebinar() {
  const webinars = [
    {
      title: "Learn React Basics",
      date: "September 15, 2024",
      imageUrl: "https://via.placeholder.com/600x400?text=React",
      description:
        "Join us for an in-depth session on the basics of React. Perfect for beginners!",
    },
    {
      title: "Advanced CSS Techniques",
      date: "October 5, 2024",
      imageUrl: "https://via.placeholder.com/600x400?text=CSS",
      description:
        "Explore advanced CSS techniques to enhance your web design skills.",
    },
    {
      title: "Mastering JavaScript",
      date: "November 10, 2024",
      imageUrl: "https://via.placeholder.com/600x400?text=JavaScript",
      description:
        "Deep dive into JavaScript and learn advanced concepts and best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white text-center py-4 mb-6">
        <h1 className="text-3xl font-bold">Upcoming Webinars</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={webinar.imageUrl}
              alt={webinar.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {webinar.title}
              </h2>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              <p className="text-sm text-gray-500">{webinar.date}</p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-center text-sm font-semibold rounded hover:bg-blue-700"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
