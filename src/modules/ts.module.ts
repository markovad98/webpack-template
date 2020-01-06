const name1: string = 'AlexTS';
const age: number = 21;

const alex: IPerson = {
    name1,
    age,
}

interface IPerson {
    name1: string;
    age: number;
}

console.log('[TypeScript]: ', alex);