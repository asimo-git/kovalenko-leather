import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Contacts from "./components/Contacts";
import WorkSchem from "./components/WorkScheme";
import Materials from "./components/Materials";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <WorkSchem />
      <Materials />
      <Advantages />
      <Contacts />
    </>
  );
}
