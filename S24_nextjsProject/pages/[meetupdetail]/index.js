import { useRouter } from "next/router";
import { Fragment } from "react";

const MeetupDetailPage = () => {
  const router = useRouter();
  const { meetupdetail } = router.query;

  return (
    <Fragment>
      <h1>Meetup Detail Page</h1>
      <p>Meetup ID: {meetupdetail}</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg" />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupdetail: "m1",
        },
      },
      {
        params: {
          meetupdetail: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupdetail;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetailPage;
