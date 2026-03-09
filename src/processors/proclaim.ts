import type {Processor} from '.';
import Role from '../types/role';

export default function proclaim(role: Role = Role.Reader): Processor {
    return rawSection => {
        const opening = rawSection.shift()!.split(' ').shift()!;
        return [
            {role, text: opening},
            {role, text: rawSection.join('').replaceAll('——上主的話。', '')},
            {role, text: '——上主的話。'},
            {role: Role.All, text: '感謝天主。'},
        ];
    };
}
