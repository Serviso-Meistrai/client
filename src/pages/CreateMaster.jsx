import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMaster } from "@/contexts/MastersContext";
import { useService } from "@/contexts/ServiceContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateMaster = () => {
  const navigate = useNavigate();
  const { services } = useService();
  const { createMaster } = useMaster();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialization: "",
    img: "",
    serviceName: services[0].name,
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (value) => {
    setFormData({
      ...formData,
      serviceName: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    await createMaster(
      formData.name,
      formData.surname,
      formData.specialization,
      formData.img,
      formData.serviceName,
      formData.city,
    );
    navigate("/");
  }

  return (
    <div className="pageContainer">
      <Card className="w-[22rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Master</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                type="text"
                name="surname"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serviceName">Service</Label>
              <Select
                onValueChange={(value) => handleSelect(value)}
                name="serviceName"
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="w-[18.8rem] pr-7 text-center">
                  {services?.map((service) => (
                    <SelectItem
                      key={service._id}
                      value={service.name}
                      className="pl-28"
                    >
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                type="text"
                name="specialization"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input
                id="img"
                type="text"
                name="img"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                name="city"
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create Master
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full"
            >
              Go back
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateMaster;
