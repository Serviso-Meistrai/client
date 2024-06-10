import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useService } from "@/contexts/ServicesContext";
import { useNavigate } from "react-router-dom";

const CreateService = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const {
    createAd,
    name,
    surname,
    specialization,
    imageUrl,
    serviceName,
    city,
    dispatch,
  } = useService();

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createAd();
    navigate("/");
  }

  function handleChange(e) {
    const { id, value } = e.target;
    dispatch({
      type: "ads/create",
      payload: { [id]: value },
    });
  }

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
                required
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Surname">Surname</Label>
              <Input
                id="Surname"
                type="text"
                required
                value={surname}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                type="text"
                required
                value={specialization}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input
                id="imageUrl"
                type="text"
                required
                value={imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serviceName">Service Name</Label>
              <Input
                id="serviceName"
                type="text"
                required
                value={serviceName}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                required
                value={city}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Create Service
            </Button>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateService;
