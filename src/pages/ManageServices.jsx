import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ManageServices = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[90vh]">
      <Button variant="outline" className="w-1/6" onClick={() => navigate("/")}>
        Main Page
      </Button>
    </main>
  );
};

export default ManageServices;
