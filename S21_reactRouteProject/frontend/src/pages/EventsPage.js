import React from "react";
import { Link } from "react-router-dom";

export const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Learn the basics of programming in JavaScript, Python, Java, C++, and many more!",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "You probably have not heard of them jean shorts biodiesel shabby chic, gastropub gluten-free.",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably have not heard of them jean shorts biodiesel shabby chic, gastropub gluten-free.",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    isFeatured: true,
  },
];

const EventsPage = () => {
  return (
    <div>
      <h1>Events Page: How to Learn React</h1>
      <p>
        Welcome to our events page! Join us to learn React and enhance your web
        development skills.
      </p>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
