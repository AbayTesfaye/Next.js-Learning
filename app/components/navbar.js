import React from "react";
import NavSearch from "./linkSearch";
import NavLinks from "./navLinks";

export default function NavBar() {
  console.log("This is NavBar");
  return (
    <>
      <NavLinks />
      <NavSearch />
    </>
  );
}
