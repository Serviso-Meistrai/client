import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = ({ services, setFilteredServices }) => {
  const navigate = useNavigate();
  const { isAuthenticated, username } = useAuth();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredServices(
      services.filter((service) =>
        service.serviceName.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    );
  }, [searchInput, services]);

  return (
    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <ThemeSwitch />
      {isAuthenticated && <p>Hello, {username}</p>}
      <form className="ml-auto flex-1 sm:flex-initial">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search services..."
            className="pl-8 sm:w-[200px] md:w-[200px] lg:w-[300px]"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            {/* -----change avatar depending on login state ---- */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex justify-center">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {isAuthenticated ? (
            <>
              <DropdownMenuItem
                onClick={() => navigate("/create")}
                className="justify-center"
              >
                Create New Service
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/manage")}
                className="justify-center"
              >
                Manage My Services
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutButton />
            </>
          ) : (
            <>
              <DropdownMenuItem
                onClick={() => navigate("/login")}
                className="justify-center"
              >
                Login
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/register")}
                className="justify-center"
              >
                Register
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
