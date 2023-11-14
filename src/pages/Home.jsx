import Attendance from "../components/home/Attendance";
import BehavioralAnalytics from "../components/home/BehavioralAnalytics";
import HomeWorks from "../components/home/HomeWorks";

const Home = () => {
  return (
    <section className="container mx-auto sm:px-6 my-6">
      <h2 className="text-xl font-semibold">HELLO! PISENCE</h2>
      <Attendance />
      <div className="grid sm:grid-cols-12 sm:space-x-10 sm:space-y-0 grid-cols-1 space-y-5">
        <HomeWorks className={"sm:col-span-4"} />
        <BehavioralAnalytics className={"sm:col-span-8"} />
      </div>
    </section>
  );
};

export default Home;
