'use client'

import { TabsItems } from "./TabesItemes";
import { TestTabs } from "./Test-Tabs";

export const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] w-full lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto  mb-12 max-w-[910px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-gray-600">
                Our Services
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Browse Your  doctors & specialists By.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose from Thoussnds of Providers at everyday afforable price, Book online Today.
              </p>
            </div>
          </div>
         
        </div>
        <TestTabs/>
        
            
        
      </div>
      
    </section>
  );
};

