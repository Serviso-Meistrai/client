import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <Card className="w-[20rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>

              <Input id="username" type="username" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>

              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repassword">Re-Type Password</Label>

              <Input id="repassword" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
          <div className="mt-4 flex justify-center gap-1 text-center text-sm">
            Have an account?
            <Link to="/login" className="cursor-pointer underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
