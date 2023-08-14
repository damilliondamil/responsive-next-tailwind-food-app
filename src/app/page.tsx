import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Feature from "./components/Feature";
import Service from "./components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Service />
    </main>
  );
}
