import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      title="first mettup"
      address="fake address"
      description="meetup"
    />
  );
}

export async function getStaticPaths() {
  // this is required when using getStaticProps on a dynamic page component(eg:[meetupId]).
  // this function returns a object that describe all the params that [meetupId] can have in order to pregenerate them(html) during build.
  // if a [meetupId] is not listed here, 404 error will be thrown
  return {
    fallback: false,
    //tells next whether path contains all supported params/urls/ids or just some of them. when set to
    //false means contains all supported url and all other params will return 404
    // true means next js will generate page dynamically(ie new server side evaluation instead of being hardcoded here) and support urls not listed here

    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
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

  //fetch(meetupId)
  return {
    props: {
      meetupdata: {
        image:
          "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        id: meetupId,
        title: "first metup",
        description: "first met up",
        address: "fake address",
      },
    },
    revalidate: 10,
    // unlock increamental static generation, 10 is 10 seconds next will wait untill it regenerate a page for a incoming request
    // in this case the page will be generated (pre-rendered) again on the server every 10 seconds as long as theres request from user for this page
    //Static site generation
  };
}

export default MeetupDetails;
