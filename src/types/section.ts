import type Role from './role';

export enum SectionType {
    Unknown = '未知',
    Date = '日期',
    EventName = '主題',

    Greeting = '致候詞',
    PenitentialAct = '懺悔詞',
    Kyrie = '求主垂憐經',
    Gloria = '光榮頌',
    BeforeGospel = '恭讀福音前',
    Creed = '信經',
    EucharisticLiturgy = '聖祭禮儀',
    PrefaceOpening = '頌謝詞前',
    PrefaceEnding = '頌謝詞後',
    EucharisticPrayer = '感恩經',
    Consecration = '成聖體聖血經',
    MemorialAcclamation = '祝聖後歡呼',
    CommunionRite = '領聖體禮',
    Blessing = '祝福',
    Dismissal = '彌撒禮成',
    Recessional = '離堂',

    EntranceAntiphon = '進堂詠',
    Collect = '集禱經',
    FirstReading = '讀經一',
    ResponsorialPsalm = '答唱詠',
    SecondReading = '讀經二',
    GospelAcclamation = '福音前歡呼',
    Gospel = '福音',
    PrayerOverTheOfferings = '獻禮經',
    Preface = '頌謝詞',
    CommunionAntiphon = '領主詠',
    PrayerAfterCommunion = '領聖體後經',
    SolemnBlessing = '隆重祝福',
}

export interface Section {
    type: SectionType;
    script: Line[];
}

export interface Line {
    role: Role;
    text: string;
}

export type RawSection = string[];
