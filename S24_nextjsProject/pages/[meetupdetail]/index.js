import { useRouter } from "next/router";
import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetailPage = (props) => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <h1>{props.meetupData.title}</h1>
      <img src={props.meetupData.image} alt={props.meetupData.title} />
      <address>{props.meetupData.address}</address>
      <p>{props.meetupData.description}</p>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://consolelog21:ziHpmgA3tNriGNYL@novereact-app.3fehbac.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupdetail: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupdetail;

  const client = await MongoClient.connect(
    "mongodb+srv://consolelog21:ziHpmgA3tNriGNYL@novereact-app.3fehbac.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
