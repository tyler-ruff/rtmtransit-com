import { Metadata } from "next";

import Script from "next/script";
import { cargoFleet } from "@/config/fleet";
import PageTitle from "@/components/page/pageTitle";
import FleetCTA from "@/components/cta/fleet";

export const metadata: Metadata = {
    title: 'Our Fleet',
    description: 'Check out our vehicle fleet.'
}

export default async function Page(){
    return (
        <div>
            <PageTitle 
                title="Cargo Fleet" 
                subtitle="Check out our fleet of trucks and cargo vans." 
            />
            <Script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></Script>
            <div className="Sirv py-5 select-none">
                {
                    cargoFleet.map((vehicle, index) => (
                        <div 
                            key={index}
                            data-src={vehicle.image}
                            title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                        ></div>
                    ))
                }
            </div>
            <FleetCTA />
        </div>
    );
}