import { Brand, Config, Social } from "@/lib/types/app";

const config = {
    name: "RTM Transit",
    fbAppId: "",
    description: "RTM Transportation LLC main website."
} as Config;

const social = {
    facebook: "https://www.facebook.com/rtmtransit/",
    twitter: "https://x.com/RTMtransit",
    //instagram: "URL_TO_INSTAGRAM_PROFILE",
    linkedin: "https://www.linkedin.com/company/rtm-transit",
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "RTM Transportation LLC",
    email: "hello@rtmtransit.com"
} as Brand;

export {
    config, brand, social
};