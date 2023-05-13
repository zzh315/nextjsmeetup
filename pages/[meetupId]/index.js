import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  // this is required when using getStaticProps on a dynamic page component(eg:[meetupId]).
  // this function returns a object that describe all the params that [meetupId] can have in order to pregenerate them(html) during build.
  // if a [meetupId] is not listed here, 404 error will be thrown if fallback is set to false

  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupIds = await meetupsCollection
    .find({})
    .project({ _id: 1 })
    .toArray();

  client.close();
  // const meetupIds = meetupData.map((meetup) => {
  //   return meetup._id.toString();
  // });
  // console.log(meetupIds);
  return {
    fallback: "blocking",
    // blocking or true wil generate page on the run and cache the page
    //blocking user will not see anything before page is generated
    //tells next whether path contains all supported params/urls/ids or just some of them. when set to
    //false means contains all supported url and all other params will return 404
    // true means next js will generate page dynamically(ie new server side evaluation instead of being hardcoded here) and support urls not listed here

    paths: meetupIds.map((id) => {
      // console.log(id);
      return { params: { meetupId: id._id.toString() } };
    }),

    // for every params here , getStaticProps will be called for each to pregenerae a html on build
  };
}

export async function getStaticProps(context) {
  //  thsi function has to be nameed getStaticProps for it to work and has to be declared in the pages files.
  //  this will be excecuted by next in the npm run build process.(which means it won't be updated if theres an update of the database?)
  // always return an object hrere
  // fecth code here from real API
  //without this(aka the useState and useEffect route that fectch data in component), the view source will be rendered without the fecthed data with initial request, becasue react will take over and render with useEffect after component is first loaded
  //better for no authentication or no high frequency update, because a static HTML is created and served on a CDN, and can be cached resued instead of regenerated all the time
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(process.env.MONGO_URL);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log(selectedMeetup);
  client.close();
  //fetch(meetupId)
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image || "",
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      },
    },
    revalidate: 1,
    // unlock increamental static generation, 10 is 10 seconds next will wait untill it regenerate a page for a incoming request
    // in this case the page will be generated (pre-rendered) again on the server every 10 seconds as long as theres request from user for this page
    //Static site generation
  };
}

export default MeetupDetails;
