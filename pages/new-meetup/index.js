import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("../api/new-meetup", {
      // this will make nextjs to trigger the handler function in the API/new-meetup page
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log("page response", data);

    router.push("/");
    // push and replace will both navigate to new page, but replace makes you unable to go back
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
