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

export function getStaticProps() {
  //  thsi function has to be nameed getStaticProps for it to work and has to be declared in the pages files.
  //  this will be excecuted by next in the npm run build process.(which means it won't be updated if theres an update of the database?)
  // always return an object hrere
  // fecth code here from real API
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
    // unlock increamental static generation, 10 is 10 seconds next will wait untill it regenerate a page for a incoming request
    // in this case the page will be generated (pre-rendered) again on the server every 10 seconds as long as theres request from user for this page
    //Static site generation
  };
}

export default HomePage;
