declare class MadNews {
    private dictionary;
    private predicts;
    private actions;
    private conclusions;
    sex: string;
    person: string;
    action: string;
    conclusion: string;
    fullString: string;
    constructor(language?: string);
    generate(): void;
    private getPerson;
    private getAction;
    private getConclusion;
    private static spliceRandom;
    private replaceSets;
}
export default MadNews;
