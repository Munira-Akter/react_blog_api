import { Fragment } from "react/cjs/react.production.min";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop/Shop";

function App() {
  
  return (
    <Fragment>

      <Header />
      <Hero />
      <Shop />
      <Blog />
      <Footer />

    </Fragment>
 
  );
}

export default App;
