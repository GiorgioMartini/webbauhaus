import { Outlet } from "@tanstack/react-router";
import Navigation from "./components/Navigation";
import OfferBanner from "./components/home/OfferBanner";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <OfferBanner />
      <Navigation />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
