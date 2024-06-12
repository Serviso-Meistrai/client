import { Button } from "@/components/ui/button";
import { getUserServices } from "@/services/ads/adsServices";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";

const ManageServices = () => {
  const [userServices, setUserServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    getUserServices(setUserServices, user.token);
  }, []);

  return (
    <main className="min-h-[90vh]">
      <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {userServices.length > 0 ? (
          userServices.map((service) => (
            <ServiceCard service={service} key={service._id} isAdmin={true} />
          ))
        ) : (
          <div>No Services Found</div>
        )}
      </div>
      <Button variant="outline" className="w-1/6" onClick={() => navigate("/")}>
        Main Page
      </Button>
    </main>
  );
};

export default ManageServices;
