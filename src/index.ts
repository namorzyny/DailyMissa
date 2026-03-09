import {parser} from './parser';
import Role from './types/role';
import {SectionType, type Section} from './types/section';
import {getDate, newPicker} from './utils';

const parsedContent = parser(args.shortcutParameter as string);
const pick = newPicker(parsedContent);
const eventName = pick(SectionType.EventName).script[0]!.text;
const sunday = eventName.includes('主日');
const ignoreGloria = /將臨期|四旬期/.test(eventName) || !sunday;
const acclamationAfterGospel: Section = {
    type: SectionType.GospelAcclamation,
    script: [pick(SectionType.GospelAcclamation).script[0]!],
};

const output: Section[] = [
    {
        type: SectionType.Date,
        script: [{
            role: Role.Lector,
            text: `各位兄弟姊妹早晨，今日係 ${getDate()}，`,
        }],
    },
    pick(SectionType.EventName),
    pick(SectionType.EntranceAntiphon),
    pick(SectionType.Greeting),
    pick(SectionType.PenitentialAct),
    pick(SectionType.Kyrie),
    ignoreGloria ? pick(SectionType.Unknown) : pick(SectionType.Gloria),
    pick(SectionType.Collect),
    pick(SectionType.FirstReading),
    pick(SectionType.ResponsorialPsalm),
    pick(SectionType.SecondReading),
    pick(SectionType.GospelAcclamation),
    pick(SectionType.BeforeGospel),
    pick(SectionType.Gospel),
    acclamationAfterGospel,
    sunday ? pick(SectionType.Creed) : pick(SectionType.Unknown),
    pick(SectionType.EucharisticLiturgy),
    pick(SectionType.PrayerOverTheOfferings),
    pick(SectionType.PrefaceOpening),
    pick(SectionType.Preface),
    pick(SectionType.PrefaceEnding),
    pick(SectionType.EucharisticPrayer),
    pick(SectionType.Consecration),
    pick(SectionType.MemorialAcclamation),
    pick(SectionType.CommunionRite),
    pick(SectionType.CommunionAntiphon),
    pick(SectionType.PrayerAfterCommunion),
    sunday ? pick(SectionType.SolemnBlessing) : pick(SectionType.Blessing),
    pick(SectionType.Dismissal),
    pick(SectionType.Recessional),
];

const joined = output.map(section => {
    return section.script.map(line => {
        return `${line.role === Role.Celebrant ? 'C' : 'F'}: ${line.text}`;
    }).join('\n');
}).join('\n');

Script.setShortcutOutput(joined);
Script.complete();
