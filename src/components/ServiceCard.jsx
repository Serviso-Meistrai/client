import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Rating from "./ui/rating";


const ServiceCard = ({ service }) => {
  return (
    <Card className="flex flex-col justify-between">
      <Rating service={service}/>
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
