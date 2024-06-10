import NavBar from "@/components/NavBar";
import ServiceCard from "@/components/ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/ads");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    getServices();
  }, []);

  return (
    <div className="min-h-[90vh]">
      <NavBar services={services} setFilteredServices={setFilteredServices} />
      <main className="">
        <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
