import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Survey from "./components/Survey";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Service />
      <Menu />
      <Survey />
    </main>
  );
}
