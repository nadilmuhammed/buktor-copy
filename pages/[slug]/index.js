import DocHero from "@/components/DocHero";
import { details } from "@/lib/docData";
import { useRouter } from "next/router";
import React from "react";

const DoctorsDetails = ({ doctor }) => {
  const router = useRouter();
  // Show a loading state if the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DocHero doctor={doctor}/>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = details.map((doctor) => ({
    params: { slug: doctor.business.slug },
  }));

  return {
    paths,
    fallback: true, 
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const doctor = details.find((doctor) => doctor.business.slug === slug);

  // Handle case where the slug is not found
  if (!doctor) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doctor,
    },
  };
}

export default DoctorsDetails;
