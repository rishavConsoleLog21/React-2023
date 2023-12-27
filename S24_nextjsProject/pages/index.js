import { MongoClient } from "mongodb";
import MeetupItem from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <MeetupItem meetups={props.meetups} />
    </>
  );
}

// getServersideProps is a function that will run on the server
// export async function getServerSideProps(context) {
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
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://consolelog21:ziHpmgA3tNriGNYL@novereact-app.3fehbac.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // if revalidate is set to true, then the page will be regenerated on the client after every 10 seconds
    revalidate: 10,
  };
}

export default HomePage;
