import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useService } from "@/contexts/ServiceContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManageServices = () => {
  const navigate = useNavigate();
  const { services } = useService();
  console.log(services);

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center">
      <Card className="w-[24rem]">
        <CardHeader>
          <CardTitle>Manage Services</CardTitle>
        </CardHeader>

        {services?.map((service) => (
          <CardContent className="flex flex-col gap-3 p-2" key={service._id}>
            {service.name}
            <Button>Edit</Button>
          </CardContent>
        ))}
        <Button
          variant="outline"
          className="w-3/6"
          onClick={() => navigate("/")}
        >
          Main Page
        </Button>
      </Card>
    </div>
  );
};

export default ManageServices;
