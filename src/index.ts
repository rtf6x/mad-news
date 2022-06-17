import Dic_ru from './dictionaries/ru';
import Dic_en from './dictionaries/en';

type Predict = {
  sex: string;
  message: string;
};

type Predicts = Predict[];

interface Actions {
  [index: string]: string[];
}

interface Conclusions {
  [index: string]: string[];
}

class MadNews {
  private dictionary: any;
  private predicts: Predicts;
  private actions: Actions;
  private conclusions: Conclusions;

  sex: string;
  person: string;
  action: string;
  conclusion: string;
  fullString: string;

  constructor(language = 'en') {
    this.dictionary = language === 'ru' ? Dic_ru : Dic_en;
    this.sex = 'male';
    this.predicts = JSON.parse(JSON.stringify(this.dictionary.predicts));
    this.actions = JSON.parse(JSON.stringify(this.dictionary.actions));
    this.conclusions = JSON.parse(JSON.stringify(this.dictionary.conclusions));
    this.person = this.getPerson().trim();
    this.action = this.getAction().trim();
    this.conclusion = this.getConclusion().trim();
    this.fullString = this.person + ' ' + this.action + ' ' + this.conclusion;
  }

  generate() {
    this.person = this.getPerson().trim();
    this.action = this.getAction().trim();
    this.conclusion = this.getConclusion().trim();
    this.fullString = this.person + ' ' + this.action + ' ' + this.conclusion;
  }

  private getPerson() {
    this.predicts =
      this.predicts && this.predicts.length ? this.predicts : JSON.parse(JSON.stringify(this.dictionary.predicts));
    const seed = MadNews.spliceRandom(this.predicts);
    this.sex = seed.sex;
    return this.replaceSets(seed.message).toUpperCase();
  }

  private getAction() {
    if (!this.actions) {
      this.actions = JSON.parse(JSON.stringify(this.dictionary.actions));
    }
    if (!this.actions[this.sex].length) {
      this.actions[this.sex] = JSON.parse(JSON.stringify(this.dictionary.actions[this.sex]));
    }
    return this.replaceSets(MadNews.spliceRandom(this.actions[this.sex])).toUpperCase();
  }

  private getConclusion() {
    if (!this.conclusions) {
      this.conclusions = JSON.parse(JSON.stringify(this.dictionary.conclusions));
    }
    if (!this.conclusions[this.sex].length) {
      this.conclusions[this.sex] = JSON.parse(JSON.stringify(this.dictionary.conclusions[this.sex]));
    }
    return this.replaceSets(MadNews.spliceRandom(this.conclusions[this.sex])).toUpperCase();
  }

  private static spliceRandom(array: any[]) {
    return array.splice(Math.floor(Math.random() * array.length), 1)[0];
  }

  private replaceSets(template: string) {
    let content = template || '';
    const matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches) {
      matches.forEach((key: string) => {
        key = key.substring(1).substring(0, key.length - 2);
        const set: any = this.dictionary.sets.find((set: any) => set.key === key);
        const replacements: string[] = (set || { replacements: [key] }).replacements;
        const variant = replacements[Math.floor(Math.random() * replacements.length)];
        content = content.replace('[' + key + ']', variant).trim();
      });
    }
    return content;
  }
}

export default MadNews;
