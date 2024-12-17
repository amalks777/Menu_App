// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({children}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
