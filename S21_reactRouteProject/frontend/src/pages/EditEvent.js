import React, { useState, useEffect } from 'react';

const EditEvent = () => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        // Fetch the existing event data from the server
        const fetchEvent = async () => {
            try {
                const response = await fetch('/api/events/123'); // Replace '123' with the actual event ID
                const eventData = await response.json();
                setEvent(eventData);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the updated event data to the server
            const response = await fetch('/api/events/123', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            });
            if (response.ok) {
                console.log('Event updated successfully!');
            } else {
                console.error('Failed to update event:', response.status);
            }
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    return (
        <div>
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input
                        type="text"
                        name="name"
                        value={event.name || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Event Date:
                    <input
                        type="date"
                        name="date"
                        value={event.date || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditEvent;
