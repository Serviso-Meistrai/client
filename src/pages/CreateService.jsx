import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useService } from "@/contexts/ServiceContext";

const CreateService = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { createService } = useService();

  async function handleSubmit(e) {
    e.preventDefault();
    await createService(name);
    navigate("/");
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
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full"
            >
              Go back
            </Button>
            <Button type="submit" className="w-full">
              Create Service
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateService;
