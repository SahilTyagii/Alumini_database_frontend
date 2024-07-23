import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./Components/Comman_Components/NavBar";
import Homepage from "./Page/Homepage";
import Footer from "./Components/Comman_Components/Footer";
import Alumini_Achivements_Page from "./Page/Alumini-Achivements";
import Alumini_Directory from "./Page/Alumini-Directory";
import Contact from "./Page/Contact";
import Netwoking_Opportunities from "./Page/Netwoking_Opportunities";
import LoadingBar from "react-top-loading-bar";
import useAutoIncrementProgress from "./hooks/useAutoIncrementProgress";
import { useEffect } from "react";
import News from "./Page/News";
import Mobile from "./Page/Mobile";
import Cards from "./Page-Components/Registered-Candidates/Card";
import RegisterPage from "./Page-Components/Networking-Opportunities/RegisterPage";
import JobsSection from "./Page-Components/Networking-Opportunities/JobsSection";
import New_eventpage from "./Page-Components/Networking-Opportunities/New_eventpage";
import Body from "./Page-Components/Resume-components/Resume_body";
import EventDetailsPage from "./Page-Components/Networking-Opportunities/EventDetailsPage";
import AboutUs from "./Page/About";
import JobPostingPage from "./Page/Job_Posting_Page";
import RanklistPage from "./Page/Rank_List";
import InterviewList from "./Page-Components/Interview-Experience/InterviewList";
import InterviewDetail from "./Page-Components/Interview-Experience/InterviewDetail";
import TabComponent from "./Page-Components/Alumni_portfolio/tabcomponent";
import InterviewExp from "./Page-Components/Interview-Experience/InterviewPage";
import { SearchContextProvider } from "../src/Context/SearchContextProvider";

import Login from "./Page/Login";
import Signup from "./Page/Signup";

import MainPage from "./Page/Explore/MainPage";
import MoreNews from "./Page-Components/News-Components/MoreNews";
import ForgetPassword from "./Page/ForgetPassword";
import TabComponentStudent from "./Page-Components/Student_portfolio/Tab_component_student";
import Gallery from "./Page/Gallery";
import AlbumDetails from "./Page-Components/Gallery/AlbumDetails";


function App() {
  const location = useLocation();
  const [progress, setProgress] = useAutoIncrementProgress();

  useEffect(() => {
    setProgress(0);
  }, [location.pathname, setProgress]);

  return (
    <>
      <SearchContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Alumini-Achivements"
            element={<Alumini_Achivements_Page />}
          />
          <Route path="/Alumini_Directory" element={<Alumini_Directory />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Netwoking_Opportunities"
            element={<Netwoking_Opportunities />}
          />
          <Route
            path="/Networking_Opportunities/RegisterPage"
            element={<RegisterPage />}
          />
          <Route
            path="/Networking_Opportunities/JobsSection"
            element={<JobsSection />}
          />
          <Route path="/News" element={<News />} />
          <Route path="/MoreNews" element={<MoreNews />} />
          <Route path="/Mobile_App" element={<Mobile />} />
          <Route path="/registered_candidates" element={<Cards />} />
          <Route path="/JobSection" element={<JobsSection />} />
          <Route
            path="/Networking_Opportunities/New_eventpage"
            element={<New_eventpage />}
          />
          <Route path="/About" element={<AboutUs />} />
          <Route
            path="/Networking_Opportunities/EventDetailsPage"
            element={<EventDetailsPage />}
          />
          <Route path="/Student_Registration" element={<Body />} />
          <Route path="/JobRankForm" element={<JobPostingPage />} />
          <Route path="/JobRanklist" element={<RanklistPage />} />
          <Route path="/interview_experience" element={<InterviewList />} />
          <Route path="/InterviewDetails" element={<InterviewDetail />} />
          <Route path="/interview-experience" element={<InterviewExp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<MainPage />} />
          <Route path="/portfolio" element={<TabComponent />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/albums/:id" element={<AlbumDetails />} /> {/* Add this route */}

        </Routes>
        <LoadingBar color="#9333ea" height={3} progress={progress} />

        <Footer />
        <TabComponentStudent/>
      </SearchContextProvider>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
