import { Button } from "@/components/ui/button";
import { getUserMasters } from "@/services/mastersServices";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MasterCard from "@/components/MasterCard";

const ManageMasters = () => {
  const [userMasters, setUserMasters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    getUserMasters(setUserMasters, user.token);
  }, []);

  return (
    <main className="min-h-[90vh]">
      <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {userMasters.length > 0 ? (
          userMasters.map((master) => (
            <MasterCard master={master} key={master._id} isAdmin={true} />
          ))
        ) : (
          <div>No Masters Found</div>
        )}
      </div>
      <Button variant="outline" className="w-1/6" onClick={() => navigate("/")}>
        Main Page
      </Button>
    </main>
  );
};

export default ManageMasters;
