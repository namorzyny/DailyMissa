import processors from './processors';
import Role from './types/role';
import {type RawSection, type Section, SectionType} from './types/section';
import {replaceAmbiguousCharacters, splitToRawSections} from './utils';

const keywords = {
    進堂詠: SectionType.EntranceAntiphon,
    集禱經: SectionType.Collect,
    讀經一: SectionType.FirstReading,
    答唱詠: SectionType.ResponsorialPsalm,
    讀經二: SectionType.SecondReading,
    福音前歡呼: SectionType.GospelAcclamation,
    福音: SectionType.Gospel,
    獻禮經: SectionType.PrayerOverTheOfferings,
    頌謝詞: SectionType.Preface,
    領主詠: SectionType.CommunionAntiphon,
    領主後經: SectionType.PrayerAfterCommunion,
    領聖體後經: SectionType.PrayerAfterCommunion,
    隆重祝福: SectionType.SolemnBlessing,
};

const keywordList = Object.keys(keywords) as unknown as (keyof typeof keywords)[];

function parseRawSection(input: RawSection): Section | null {
    const keyword = keywordList.find(word => {
        const index = input.findIndex(line => line.includes(word));
        if (index >= 0) {
            input.splice(0, index + 1);
            return true;
        }
        return false;
    });
    const altIndex = input.indexOf('或');
    if (altIndex >= 0) input.splice(altIndex);
    const result: Section = {
        type: keyword ? keywords[keyword] : SectionType.Unknown,
        script: [],
    };
    if (result.type === SectionType.Gospel && !input[0]?.startsWith('恭讀')) {
        result.type = SectionType.Unknown;
    }
    const processor = processors[result.type];
    if (!processor) return null;
    result.script = processor(input.filter(line => !!line));
    if (!result.script.length) return null;
    return result;
}

export function parser(input: string) {
    const sections = splitToRawSections(
        replaceAmbiguousCharacters(input),
    );
    const output: Section[] = [];
    const eventName = sections.shift()?.pop() ?? '';
    output.push({
        type: SectionType.EventName,
        script: [{
            role: Role.Lector,
            text: `${eventName}。`,
        },
        {
            role: Role.Lector,
            text: '進堂詠：',
        }],
    },
    ...sections.map(section => parseRawSection(section)).filter(s => !!s));
    return output;
}
