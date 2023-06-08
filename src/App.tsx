import Routes from "routes";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
