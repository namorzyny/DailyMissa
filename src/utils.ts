import predefinedScripts from './predefinedScripts';
import {type RawSection, type Section, SectionType} from './types/section';

export function replaceAmbiguousCharacters(input: string): string {
    let text: string = input.replaceAll('\u00a0', '');
    text = text.replaceAll('\u3000', ' ');
    text = text.replaceAll('（', '(');
    text = text.replaceAll('）', ')');
    text = text.replaceAll('X', '');
    return text;
}

export function splitToRawSections(input: string): RawSection[] {
    return input.split('\n\n').map(section => {
        return section.split('\n')
            .map(removeComment)
            .filter(s => s.length > 0);
    });
}

export function removeComment(input: string) {
    return input.replaceAll(/\(.*\)/g, '');
}

export function trimStart(input: string, to: string = '：') {
    return input.substring(input.indexOf(to) + 1);
}

export function getDate() {
    const date = new Date();
    return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`;
}

export function newPicker(sections: Section[]): (type: SectionType) => Section {
    return (type: SectionType) => sections.find(section => section.type === type)
        ?? predefinedScripts.find(section => section.type === type)
        ?? {type: SectionType.Unknown, script: []};
}
