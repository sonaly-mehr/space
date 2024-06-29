import Build from "@/components/layout/Build";
import ExploreWebinars from "@/components/layout/ExploreWebinars";
import Hero from "@/components/layout/Hero";
import PowerOfDrupal from "@/components/layout/PowerOfDrupal";
import TryDrupal from "@/components/layout/TryDrupal";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Build/>
      <PowerOfDrupal/>
      <TryDrupal/>
      <ExploreWebinars/>
    </main>
  );
}
