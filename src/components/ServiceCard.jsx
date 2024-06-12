import { DeleteButton } from "./DeleteButton";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Rating from "./ui/rating";

const ServiceCard = ({ service, setServices, isAdmin }) => {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex justify-between p-3">
        <Rating service={service} setServices={setServices} />
        {isAdmin && <DeleteButton id={service._id} />}
      </div>
      <CardHeader>
        <div>
          <CardTitle>{service.serviceName}</CardTitle>
          <CardDescription>{service.city}</CardDescription>
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
