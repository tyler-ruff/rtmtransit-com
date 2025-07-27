import { Icon } from "@iconify/react";

export default function FleetCTA(){
    return (
        <section className="border-t py-6 bg-gray-50 text-gray-900 select-none">
            <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                <div className="flex flex-col justify-center lg:text-left">
                    <p className="mb-1 text-sm font-medium tracking-widest uppercase text-blue-600">
                        Discover our Luxurious Passenger Vehicles
                    </p>
                    <h1 className="py-2 text-3xl font-medium leading-tight title-font">
                        Ocean Car Service Fleets
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                    <a title="Check out our fleet of cars." href="https://www.oceancarservice.com/fleet/car/" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-800 active:ring ring-blue-500 text-gray-50">
                        <span className="text-gray-50">
                            <Icon icon="mdi:car" height={32} width={32} />
                        </span>
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs">SMALL GROUPS</span>
                            <span className="font-semibold title-font">Car Fleet</span>
                        </span>
                    </a>
                    <a title="Check out our fleet of busses." href="https://www.oceancarservice.com/fleet/bus/" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-800 active:ring ring-blue-500 text-gray-50">
                        <span className="text-gray-50">
                            <Icon icon="mdi:bus" height={32} width={32} />
                        </span>
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs">LARGE GROUPS</span>
                            <span className="font-semibold title-font">Bus Fleet</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}