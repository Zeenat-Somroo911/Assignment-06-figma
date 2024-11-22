import Header from "../components/Header";
import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import CoursesSection from "@/components/CourseCategory";
import Achievement from "@/components/Achievements";
import Courses from "@/components/Courses";
import OurTeam from "@/components/OurTeam";
import CustomerTestimomial from "@/components/customertestonomials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <CoursesSection/>
      <Achievement/>
      <Courses/>
      <OurTeam/>
      <CustomerTestimomial/>
      <Footer/>
    </div>
    
  );
}