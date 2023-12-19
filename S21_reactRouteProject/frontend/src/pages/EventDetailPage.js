import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading..Please Wait</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading..</p>}>
        <Await resolve={events}>
          {(loadedEvent) => <EventsList events={loadedEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      json({ message: "Failed to load details for selected event!" }),
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Failed to load events!" }), {
    //   status: 500,});
    throw json({ message: "Failed to load events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(json({ message: "Failed to delete selected event!" }), {
      status: 500,
    });
  }
  return redirect("/events");
}
