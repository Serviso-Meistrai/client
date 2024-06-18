import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MasterCard from "@/components/MasterCard";
import { useMaster } from "@/contexts/MastersContext";

const ManageMasters = () => {
  const navigate = useNavigate();
  const { masters } = useMaster();

  return (
    <main className="min-h-[90vh]">
      <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {masters?.length > 0 ? (
          masters.map((master) => (
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
