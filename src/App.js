import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import "./App.css";
import TravelData from "./TravelData";

function App() {
  const travelBlogs = TravelData.map((item) => {
    //generalization of TravelBlog Component invocation
    return (
      <TravelBlog
        key={item.id}
        heading={item.placeHeading}
        img1={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        desc={item.placeDescription}
      />
    );
  });

  return (
    <div className="App">
      {/* Hero Section Component */}
      <Hero />
      {/* container for collection of TravelBlog components generated from */}
      <section className="travel-blog-parent-container">{travelBlogs}</section>
    </div>
  );
}

export default App;
