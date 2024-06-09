import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !repeatPassword) return;
    if (password !== repeatPassword) {
      alert("Passwords do not match !");
      return;
    }

    await register(username, email, password, repeatPassword);
  };

  return (
    <div className="pageContainer">
      <Card className="w-[20rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>

                <Input
                  id="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="repassword">Re-Type Password</Label>

                <Input
                  id="repassword"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Register
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
