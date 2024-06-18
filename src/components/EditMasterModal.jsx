import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useService } from "@/contexts/ServiceContext";

export const EditMasterModal = ({ master }) => {
  const { services } = useService();
  const [formData, setFormData] = useState({
    name: master.name,
    surname: master.surname,
    specialization: master.specialization,
    img: master.img,
    serviceName: master.serviceName,
    city: master.city,
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

  const handleSubmit = () => {
    // updateService({ name }, service._id, userData.token);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Master</DialogTitle>
          <DialogDescription>
            Make changes to Master. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="surname" className="text-right">
              Surname
            </Label>
            <Input
              id="surname"
              value={formData.surname}
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="specialization" className="text-right">
              Specialization
            </Label>
            <Input
              id="name"
              value={formData.specialization}
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="img" className="text-right">
              Image Url
            </Label>
            <Input
              id="img"
              value={formData.img}
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="serviceName" className="w-[7rem] text-right">
              Service
            </Label>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input
              id="city"
              value={formData.city}
              className="col-span-3"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={() => handleSubmit()}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
