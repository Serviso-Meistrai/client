import { DeleteButton } from "./DeleteButton";
import { EditMasterModal } from "./EditMasterModal";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Rating from "./ui/rating";

const MasterCard = ({ master, setMasters, isAdmin }) => {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex justify-end p-3">
        {isAdmin && (
          <>
            <EditMasterModal master={master} />
            <DeleteButton id={master._id} />
          </>
        )}
      </div>
      <CardHeader>
        <div>
          <CardTitle>{master.serviceName.name}</CardTitle>
          <CardDescription>{master.city}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          {master.name} {master.surname}
        </p>
        <p>{master.specialization}</p>
      </CardContent>
      <CardFooter className="h-50 flex flex-col gap-3">
        <div>
          <Rating master={master} setMasters={setMasters} />
        </div>
        <div className="w-full">
          <img
            src={master.img}
            alt="Master Image"
            className="h-64 w-full rounded-b-lg object-cover"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default MasterCard;
