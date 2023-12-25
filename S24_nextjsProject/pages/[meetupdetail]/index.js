import { useRouter } from "next/router";

const MeetupDetailPage = () => {
  const router = useRouter();
  const { meetupdetail } = router.query;

  return (
    <div>
      <h1>Meetup Detail Page</h1>
      <p>Meetup ID: {meetupdetail}</p>
    </div>
  );
};

export default MeetupDetailPage;
