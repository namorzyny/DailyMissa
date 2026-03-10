import type {Processor} from '.';
import Role from '../types/role';
import type {Line} from '../types/section';

const responsorialPsalm: Processor = rawSection => {
    const replaced = rawSection.map(line => (line
        .replace(/^(領|【答】)：/, ''))
        .replace(/【答】$/, ''));
    const answer = replaced.shift()!;
    const result: Line[] = [{
        role: Role.Faithful,
        text: answer,
    }];
    replaced.forEach(line => {
        result.push({
            role: Role.Lector,
            text: line,
        });
        result.push(result[0]!);
    });
    return result;
};

export default responsorialPsalm;
