import MasterCard from "@/components/MasterCard";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ filteredMasters, setMasters }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  });

  return (
    <main className="min-h-[90vh]">
      <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredMasters.length > 0 ? (
          filteredMasters.map((master) => (
            <MasterCard
              master={master}
              key={master._id}
              setMasters={setMasters}
              isAdmin={false}
            />
          ))
        ) : (
          <div>No masters found</div>
        )}
      </div>
    </main>
  );
};

export default Home;
