import { Brand, Config, Social } from "@/lib/types/app";

const url = process.env.NODE_ENV === "development" ? 
'http://localhost:3000' : 'https://rtmtransit.com';

const config = {
    name: "RTM Transit",
    fbAppId: "",
    description: "Based in the heart of Ocean City, New Jersey, RTM Transportation LLC is your trusted partner in cargo distribution and shipping."
} as Config;

const social = {
    facebook: "https://www.facebook.com/rtmtransit/",
    twitter: "https://x.com/RTMtransit",
    //instagram: "URL_TO_INSTAGRAM_PROFILE",
    linkedin: "https://www.linkedin.com/company/rtm-transit",
    uship: "https://www.uship.com/service-provider/198946822-rtm-transportation-llc"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "RTM Transportation LLC",
    email: "hello@rtmtransit.com",
    telephone: "+16092149678",
    address: "1650 Simpson Ave, Ocean City, NJ 08226"
} as Brand;

export {
    config, brand, social, url
};