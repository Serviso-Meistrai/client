import ServiceCard from "@/components/ServiceCard";

const Home = ({ filteredServices }) => {
  return (
    <div className="min-h-[90vh]">
      <main>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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

