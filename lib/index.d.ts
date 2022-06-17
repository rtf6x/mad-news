declare type Predict = {
    sex: string;
    message: string;
};
declare type Predicts = Predict[];
interface Actions {
    [index: string]: string[];
}
interface Conclusions {
    [index: string]: string[];
}
declare class MadNews {
    dictionary: any;
    predicts: Predicts;
    actions: Actions;
    conclusions: Conclusions;
    sex: string;
    person: string;
    action: string;
    conclusion: string;
    fullString: string;
    constructor(language?: string);
    generate(): void;
    getPerson(): string;
    getAction(): string;
    getConclusion(): string;
    private static spliceRandom;
    private replaceSets;
}
export default MadNews;
