import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Fleet',
    description: 'Check out our vehicle fleet.'
}

export default async function Page(){
    return (
        <p>
            Check out our vehicle fleet
        </p>
    );
}