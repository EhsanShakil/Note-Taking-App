import React from "react";
import { NameProvider } from "./src/global/context";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <NameProvider>
      <Home />
    </NameProvider>
  );
}
