import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createService } from "@/services/ads/adsServices";

const CreateService = ({ setServices }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialization: "",
    serviceName: "",
    img: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("userData"));
    createService(formData, user.token, setServices);
    navigate("/");
  };

  return (
    <div className="pageContainer">
      <Card className="w-[22rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Service</CardTitle>
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
              <Label htmlFor="serviceName">Service Name</Label>
              <Input
                id="serviceName"
                type="text"
                name="serviceName"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                name="city"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create Service
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

export default CreateService;
