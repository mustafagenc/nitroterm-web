import { Footer } from "@/components/footer";
import { Features } from "@components/features";
import { Header } from "@components/header";
import { Installation } from "@components/installation";
import { Usage } from "@components/usage";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Installation />
      <Usage />
      <Footer />
    </>
  );
}
