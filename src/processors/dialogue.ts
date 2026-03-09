import type {Processor} from '.';
import Role from '../types/role';
import type {Line} from '../types/section';
import {trimStart} from '../utils';

export const lector: Processor = rawSection => {
    const result: Line[] = [];
    rawSection.forEach(line => {
        if (line.startsWith('領：')) {
            result.push({
                role: Role.Lector,
                text: trimStart(line),
            });
        } else if (line.startsWith('眾：')) {
            result.push({
                role: Role.Faithful,
                text: trimStart(line),
            });
        }
    });
    return result;
};

export const celebrant: Processor = rawSection => {
    const result: Line[] = [];
    rawSection.forEach(line => {
        if (line.includes('主祭')) {
            result.push({
                role: Role.Lector,
                text: trimStart(line),
            });
        } else if (line.startsWith('會眾')) {
            result.push({
                role: Role.Faithful,
                text: trimStart(line).replace('亞孟', 'Amen'),
            });
        }
    });
    return result;
};
