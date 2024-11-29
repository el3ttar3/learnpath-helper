import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PopularCourses from "../components/PopularCourses";
import About from "../components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="courses">
          <PopularCourses />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  );
};

export default Index;