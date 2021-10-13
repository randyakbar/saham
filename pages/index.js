import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Portofolio from "../components/Sections/Portofolio";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Portofolio />
      <About />
      <Contact />
      <Footer />
      
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2021</small>
        </div>
      </div>
    </div>
  );
}

export default HomePage;