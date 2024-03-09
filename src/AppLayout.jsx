import Header from "./ui/Header/Header";
import Hero from "./ui/Hero/Hero";
import Sidebar from "./ui/Sidebar/Sidebar";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="flex w-[90%] m-auto">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
