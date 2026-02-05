import { Hero } from "@/components/home/Hero";
import { JobCategory } from "@/components/home/JobCategory";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { PeoplePreview } from "@/components/home/PeoplePreview";

export default function Home() {
  return (
    <>
      <Hero />
      <JobCategory />
      <FeaturedJobs />
      <PeoplePreview />
    </>
  );
}
