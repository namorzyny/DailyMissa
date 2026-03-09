import Role from '../types/role';
import {type Line, type RawSection, SectionType} from '../types/section';
import proclaim from './proclaim';
import responsorialPsalm from './responsorialPsalm';
import * as dialogue from './dialogue';

export type Processor = (section: RawSection) => Line[];

function normal(role: Role = Role.Faithful): Processor {
    return rawSection => {
        const joined = rawSection.join('');
        if (joined.endsWith('亞孟。')) {
            return [{
                role,
                text: joined.substring(0, joined.length - 3),
            },
            {
                role: Role.Faithful,
                text: 'Amen。',
            }];
        } else {
            return joined ? [{role, text: joined}] : [];
        }
    };
}

const processors: Partial<Record<SectionType, Processor>> = {
    [SectionType.EntranceAntiphon]: normal(),
    [SectionType.Collect]: normal(Role.Celebrant),
    [SectionType.FirstReading]: proclaim(),
    [SectionType.ResponsorialPsalm]: responsorialPsalm,
    [SectionType.SecondReading]: proclaim(),
    [SectionType.GospelAcclamation]: dialogue.lector,
    [SectionType.Gospel]: proclaim(Role.Celebrant),
    [SectionType.PrayerOverTheOfferings]: normal(Role.Celebrant),
    [SectionType.Preface]: normal(Role.Celebrant),
    [SectionType.CommunionAntiphon]: normal(),
    [SectionType.PrayerAfterCommunion]: normal(Role.Celebrant),
    [SectionType.SolemnBlessing]: dialogue.celebrant,
};

export default processors;
