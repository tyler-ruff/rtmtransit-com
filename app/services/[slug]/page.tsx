import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

import { Icon } from "@iconify/react";

import { getSingleService } from '@/lib/hooks/services';
import { url } from '@/config/app';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ sortOrder: string }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    //const slug = (await params).slug;
    const params = await props.params;
    const {
        slug
    } = params;
    const service = getSingleService(slug);
    if(!service){ 
        redirect('/404');
    }
    return {
        title: `${service.title} | Services`,
        description: service.description,
        openGraph: {
            title: service.title,
            type: "article",
            url: new URL(`/services/${service.slug}`, url)
        }
    }
}

export default async function Page(props: Props){
    const params = await props.params;
    const {
        slug
    } = params;
    //const slug = params.slug;
    const service = getSingleService(slug);

    return service && (
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 text-gray-900">
            <div className="w-full mx-auto space-y-4">
                <span className="inline-block pr-4 text-gray-700 text-center">
                    <Icon icon={service.icon} height={64} width={64} />
                </span>
                <h1 className="text-5xl font-bold text-gray-700 leading-none select-none">
                    {service.title}
                </h1>
            </div>
            <div className="text-gray-800">
                <p>
                    {service.description}
                </p>
            </div>
            <div className="flex flex-wrap space-x-2 text-sm text-gray-600">
                <a rel="noopener noreferrer" title="Return to the Services page." href="/services" className="flex p-1 hover:underline active:text-gray-800">
                    <i className="inline-flex pr-2 pt-1">
                        <Icon icon="mdi:arrow-left-thin-circle-outline" height={20} width={20} />
                    </i>
                    <span className="inline-flex pt-1 select-none">
                        Back to Services
                    </span>
                </a>
            </div>
        </article>
    );
}