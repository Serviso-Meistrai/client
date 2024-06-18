import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useService } from "@/contexts/ServiceContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditServiceModal } from "@/components/EditServiceModal";

const ManageServices = () => {
  const navigate = useNavigate();
  const { services } = useService();

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center">
      <Card className="w-[24rem] p-6">
        <CardHeader>
          <CardTitle>Manage Services</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 p-3">
          {services?.map((service) => (
            <div
              key={service._id}
              className="flex flex-col gap-2 rounded-md border p-4"
            >
              <p>{service.name}</p>
              <EditServiceModal service={service} />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="m-3 w-full"
            onClick={() => navigate("/")}
          >
            Main Page
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ManageServices;
