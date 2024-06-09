import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const ServiceCard = ({ service }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div>
          <CardTitle>{service.serviceName}</CardTitle>
          <CardDescription>{service.city}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{service.name}</p>
        <p>{service.surname}</p>
        <p>{service.specialization}</p>
      </CardContent>
      <CardFooter>
        <img src={service.img} alt="Service Image" />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
