import CommonUpButton from "@/components/CommonUpButton";
import DoctorsFooter from "@/components/DoctorsFooter";
import DoctorsNavbar from "@/components/DoctorsNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { details } from "@/lib/docData";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const currentSlug = router.query.slug || `/services/${router.query.slug}` || `/gallery/${router.query.slug}`;
  
  const isSlugPath = details.some(detail => detail.business.slug === currentSlug);
  
  return (
    <div className="flex justify-center">
      <div className={isSlugPath ? "mx-auto w-full max-w-[1440px] overflow-x-hidden" :"mx-5 sm:mx-12 lg:mx-16 xl:mx-24 w-full max-w-[1440px] overflow-x-hidden"}>
      {isSlugPath ? <DoctorsNavbar slug={currentSlug}/> : <Navbar />}
      <CommonUpButton />
        <div className={isSlugPath ? "my-0" :"my-32"}>
          <Component {...pageProps} />
        </div>
        {isSlugPath ? <DoctorsFooter /> : <Footer />}
      </div>
    </div>
  );
}
