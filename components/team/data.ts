export interface ITeamItem{
    name: string;
    title: string;
    image?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        facebook?: string;
        website?: string;
    };
    contact?: {
        phone?: string;
        email?:  string;
    };
};