export interface Profile {
    name: string;
    title: string;
    email: string;
    address: string;
    spokenLanguages: LanguageSkill[];
    phoneNumber: string;
    pictures: string[];
    technologies: string[];
    bulletPoints: BulletPoints[];
}

export interface BulletPoints {
    title: string;
    description: string;
}

export interface LanguageSkill {
    language: string;
    level: string;
    description: string;
}