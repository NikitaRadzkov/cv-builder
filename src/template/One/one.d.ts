export interface TProps {
    theme: {
        color: string;
        fontFamily: string;
    };
    userData: {
        name: string;
        position: string;
        infoTitle: string;
        language: string;
        email: string;
        mobile: string;
        userData: string;
        experienceTitle: string;
        experience: string;
        languageProficiency: string;
        projectsTitle: string;
        educationTitle: string;
        education: string;
        domains: string;
        domainsTitle: string;
        programmingLanguagesTitle: string;
        programmingLanguages: string;
        programmingTechnologiesTitle: string;
        programmingTechnologiesLeft: string;
        programmingTechnologiesRight: string;
        skillsTitle: string;
    };
    workExperience: [];
    education: [];
    skills: [];
    professionalSkills: [];
    itemStatus: {
        [key: string]: boolean;
    };
}
