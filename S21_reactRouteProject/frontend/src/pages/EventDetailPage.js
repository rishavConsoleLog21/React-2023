import { useParams } from 'react-router-dom';
import { DUMMY_EVENTS } from './EventsPage';

const EventDetailPage = () => {
    const params = useParams();

    return (
        <div>
            <h2>Event Detail</h2>
            <p>Event ID: {params.id}</p>
            {/* Display other event details here */}
        </div>
    );
};

export default EventDetailPage;

