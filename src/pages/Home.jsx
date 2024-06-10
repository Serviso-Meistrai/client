import NavBar from "@/components/NavBar";
import ServiceCard from "@/components/ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { getServices } from "@/services/ads/adsServices";

const Home = () => {
  const [filteredServices, setFilteredServices] = useState([]);
  
  useEffect(() => {
    getServices(setFilteredServices)
  }, []);

  return (
    <div className="min-h-[90vh]">
      <NavBar />
      <main className="">
        <div className="grid grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard service={service} key={service._id} />
            ))
          ) : (
            <p>No services found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
