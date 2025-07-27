import { IPageTitle } from "./data";

export default function PageTitle(props: IPageTitle){
    return (
        <div className={`border-b py-4 ${props.bg || 'bg-gray-50'} select-none`}>
            <h1 className="text-4xl text-center py-8 text-gray-800">
                {props.title}
            </h1>
            <span className="block text-center pb-8 text-gray-600 mb-1 text-md font-medium tracking-widest uppercase">
                {props.subtitle}
            </span>
        </div>
    )
}