export default interface IProject {
    id?: string;
    title: string;
    description: string;
    image: string[];
    techs: string[];
    deployUrl: string;
    repoUrl: string
}