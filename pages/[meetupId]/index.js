import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      title="A First Meetup"
      address="Some Street 5, Some City"
      descritpion="This is a first meetup"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://c8.alamy.com/comp/R5J6WE/big-ben-clock-tower-and-house-of-parliament-in-the-night-london-uk-R5J6WE.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        descritpion: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
