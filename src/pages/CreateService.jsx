import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateService = () => {
  return (
    <div className="pageContainer">
      <Card className="w-[22rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Surname">Surname</Label>
              <Input id="Surname" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input id="imageUrl" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serviceName">Service Name</Label>
              <Input id="serviceName" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" required />
            </div>
            <Button type="submit" className="w-full">
              Create Service
            </Button>
            <Button variant="outline" className="w-full">
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateService;
