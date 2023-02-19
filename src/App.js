import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">

      <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
