import { Nav, Hero, Features, Steps, Pricing, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider">
        <hr />
      </div>
      <Features />
      <div className="divider">
        <hr />
      </div>
      <Steps />
      <div className="divider">
        <hr />
      </div>
      <Pricing />
      <Footer />
    </>
  );
}
