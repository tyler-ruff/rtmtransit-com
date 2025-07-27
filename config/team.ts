import { ITeamItem } from "@/components/team/data";

export const teamList = [
    {
        name: 'Robert Ruff',
        title: 'CEO',
        contact: {
            email: 'rruff331970@hotmail.com',
            phone: '+16092149678'
        },
        image: 'https://blazed.sirv.com/RTM/team/robert-ruff.jpg'
    },
    {
        name: 'Tyler Ruff',
        title: 'CFO',
        social: {
            twitter: 'https://x.com/TylerRuffDev',
            linkedin: 'https://www.linkedin.com/in/blz-one/',
            github: 'https://github.com/tyler-ruff',
            website: 'https://tyler-ruff.com/'
        },
        contact: {
            email: 'truff@blazed.work',
            phone: '+16097788424'
        },
        image: 'https://blazed.sirv.com/RTM/team/tyler-ruff.png',
    },
    {
        name: 'Matthew Ruff',
        title: 'COO',
        social: {
            linkedin: 'https://www.linkedin.com/in/matthew-ruff-45872a216/',
            github: 'https://github.com/matt-ruff'
        },
        contact: {
            email: 'pickle@blazed.space'
        },
        image: 'https://blazed.sirv.com/RTM/team/matthew-ruff.jpg'
    }
] as ITeamItem[];