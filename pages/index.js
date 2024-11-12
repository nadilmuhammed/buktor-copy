import Accept from "@/components/Accept";
import Connect from "@/components/Connect";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Office from "@/components/Office";
import Payment from "@/components/Payment";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="">
      <SEO 
      title={"Home"}
      description={"Home page"}
      keywords={""}
      url={"/"}
      />
      <Hero />
      <Features />
      <Office />
      <Accept />
      <Connect />
      <Payment />
    </div>
  );
}
