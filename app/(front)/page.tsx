import Brand from "@/components/frontend/Brands";
import { DoctorList } from "@/components/frontend/Doctors/DoctorList";
import Hero from "@/components/frontend/Hero";
import { TabbedSection } from "@/components/frontend/TabbedSection";
import { TabsItems } from "@/components/frontend/TabesItemes";

import React from "react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full text-3xl">
      <Hero/>
      <Brand/>
      <TabbedSection/>
      <DoctorList title="Telehealth visit " address={false} />
      <DoctorList backGround map={true} title="In-person doctor visit" address ={true}/>
     
    </section>
  );
}
