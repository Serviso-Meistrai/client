import NavBar from "@/components/NavBar";
import Rating from "@/components/ui/rating";

const Home = () => {
  return (
    <div className="min-h-[90vh]">
      <NavBar />
      <main className="">
        <div>
          <Rating/>
        </div>
      </main>
    </div>
  );
};

export default Home;
