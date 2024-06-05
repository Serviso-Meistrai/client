import NavBar from "@/components/NavBar";
import React from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="grid h-[80vh] items-center">
        <Login />
        {/* <Register /> */}
      </main>
    </>
  );
};

export default Home;
