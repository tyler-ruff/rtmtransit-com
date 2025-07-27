import { Metadata } from 'next';

import ServiceCard from "@/components/services/card";
import ContactCTA from "@/components/cta/contact";

import { servicesList } from "@/config/services";
import PageTitle from '@/components/page/pageTitle';

export const metadata: Metadata = {
    title: 'Our Services',
}

export default function Services() {
    return (
    <div className="select-none bg-gray-50">
        <PageTitle 
            title="Our Services" 
            subtitle={`RTM offers a variety of services in the logistics industry, these include: warehousing, shipping, and transportation.`}
            bg="bg-white" 
        />
        <section className="max-w-5xl relative mx-auto mb-5 grid md:grid-cols-2 lg:grid-cols-3 py-5 px-7 space-x-2">
            {
                servicesList.map((service, index) => (
                    <div key={index} className="my-2">
                        <ServiceCard
                            {...service}
                        />
                    </div>
                ))
            }
        </section>
        <section aria-description="Contact Us for a quote today.">
            <ContactCTA />
        </section>
      </div>
    );
  }