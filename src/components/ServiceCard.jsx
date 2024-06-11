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

const ServiceCard = ({ service, setServices }) => {
  const userData = localStorage.getItem("userData");
  const user = userData ? JSON.parse(userData) : null;

  return (
    <Card className="flex flex-col justify-between">
      <div className="flex justify-between p-3">
        <Rating service={service} setServices={setServices} />
        {user?._id === service.user._id && <DeleteButton id={service._id} />}
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
