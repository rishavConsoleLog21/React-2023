import MeetupItem from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupItem meetups={DUMMY_MEETUPS} />
    </>
  );
}

// getServersideProps is a function that will run on the server
// export async function getServersideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// getStaticProps is a function that will run on the client
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // if revalidate is set to true, then the page will be regenerated on the client after every 10 seconds
    revalidate: 10,
  };
}

export default HomePage;
