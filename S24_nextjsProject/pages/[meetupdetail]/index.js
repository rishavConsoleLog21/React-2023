import { useRouter } from "next/router";
import { Fragment } from "react";
const MeetupDetailPage = () => {
  const router = useRouter();
  const { meetupdetail } = router.query;

  return (
    <Fragment>
      <h1>Meetup Detail Page</h1>
      <p>Meetup ID: {meetupdetail}</p>
    </Fragment>
  );
};

export default MeetupDetailPage;
