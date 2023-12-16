import React, { useState } from "react";

const NewEventPage = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handleInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to submit the event data to the server
    console.log(event);
  };

  return (
    <div>
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default NewEventPage;
