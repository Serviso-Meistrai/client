import ServiceCard from "@/components/ServiceCard";

const Home = ({ filteredServices, setServices }) => {
  return (
    <main className="min-h-[90vh]">
      <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard
              service={service}
              key={service._id}
              setServices={setServices}
              isAdmin={false}
            />
          ))
        ) : (
          <p>No services found</p>
        )}
      </div>
    </main>
  );
};

export default Home;
