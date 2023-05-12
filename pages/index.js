import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    address: "1 Meetup Street, ABC city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    address: "2 Meetup Street, ABC city",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   //fetchdata
  //   // const data = DUMMY_MEETUPS;
  //   // console.log(data);
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}

// export function getStaticProps() {
//   //  thsi function has to be nameed getStaticProps for it to work and has to be declared in the pages files.
//   //  this will be excecuted by next in the npm run build process.(which means it won't be updated if theres an update of the database?)
//   // always return an object hrere
//   // fecth code here from real API
//without this(aka the useState and useEffect route that fectch data in component), the view source will be rendered without the fecthed data with initial request, becasue react will take over and render with useEffect after component is first loaded
// better for no authentication or no high frequency update, because a static HTML is created and served on a CDN, and can be cached resued instead of regenerated all the time

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//     revalidate: 10,
//     // unlock increamental static generation, 10 is 10 seconds next will wait untill it regenerate a page for a incoming request
//     // in this case the page will be generated (pre-rendered) again on the server every 10 seconds as long as theres request from user for this page
//     //Static site generation
//   };
// }

export function getServerSideProps(context) {
  const req = context.req; // good for authentication and cookie session
  const res = context.res;

  //fetch data from api
  //getServerSideProps will not run during the build process but will stay and run on the server(and never on client side) during deployment
  //  getServerSideProps is a reserved function name for next and allows server fecth new data generate new page with every request
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
