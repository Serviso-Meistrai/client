import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { DeleteButton } from "./DeleteButton";

const ServiceCard = ({ service }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div>
          <CardTitle>{service.serviceName}</CardTitle>
          <CardDescription>{service.city}</CardDescription>
          <DeleteButton id={service._id} />
        </div>
      </CardHeader>
      <CardContent>
        <p>
          {service.name} {service.surname}
        </p>
        <p>{service.specialization}</p>
      </CardContent>
      <CardFooter>
        <img
          src={service.img}
          alt="Service Image"
          className="w-full rounded-lg"
        />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
