import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trending from "./components/TrendingCourses";
import WhyChoose from "./components/WhyChooseUs";
import Interactive from "./components/InteractiveCourses";
import AppDownload from "./components/AppDownload";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Trending />
        <WhyChoose />
        <Interactive />
        <AppDownload />
        <Subscribe />
        <Footer />
      </main>
      
    </>
  );
}

export default App;
