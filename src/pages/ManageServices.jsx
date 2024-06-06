import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ManageServices = () => {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div>Manager</div>
      <Button variant="outline" className="w-1/6" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </div>
  );
};

export default ManageServices;
