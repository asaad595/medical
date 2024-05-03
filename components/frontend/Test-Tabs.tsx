
import { Tabs } from "flowbite-react";
import { ServerCrashIcon, X } from "lucide-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { ServicesList } from "./services/ServicesList";

export function TestTabs() {

  const services = [
    {
      title:"Telhealth",
      image:"/doctor/blackdoctors.jpg",
      slug:"Telhealth",

    },
    {
      title:"Video Perscription",
      image:"/doctor/blackdoctors.jpg",
      slug:"Video-Perscription",

    },
    {
      title:"In person doctor visit",
      image:"/doctor/blackdoctors.jpg",
      slug:"In-person-doctor-visit",

    },
    {
      title:"UTI consult",
      image:"/doctor/blackdoctors.jpg",
      slug:"UTI-consult",

    },
    {
      title:"Edi consult",
      image:"/doctor/blackdoctors.jpg",
      slug:"Edi-consult",

    },
    {
      title:"Mental Health consult",
      image:"/doctor/blackdoctors.jpg",
      slug:"Mental-consult",

    },
    {
      title:"Urgent Care Visit",
      image:"/doctor/blackdoctors.jpg",
      slug:"Urgent-visit",

    },
  ]
  const tabs = [
    {
        title:"Popular Services",
        component:<ServicesList data={ services }/>,
        icon:ServerCrashIcon,
        content:["our populer services"

        ]
    },
    {
        title:"Doctors",
        component:"",
        icon:X,
        content:[

        ]
    },
    {
        title:"Spacialist",
        component:"",
        icon:X,
        content:[

        ]
    },
    {
        title:"Symptoms",
        component:"",
        icon:X,
        content:[

        ]
    },
]
  return (
    <Tabs aria-label="Tabs with underline" style="underline">

      {
        tabs.map((tab,i)=>{return (
          <Tabs.Item active title={tab.title} icon={tab.icon} key={i}>
        {tab.component}
      </Tabs.Item>

        )})
      }
      
     
    </Tabs>
  );
}
