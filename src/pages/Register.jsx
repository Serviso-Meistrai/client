import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  return (
    <Card className="mx-auto max-w-sm p-10">
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
            <Label htmlFor="password">Re-Type Password</Label>

            <Input id="repassword" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </div>
        <div className="mt-4 flex gap-1 text-center text-sm">
          Have an account?
          <a href="#" className="cursor-pointer underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
