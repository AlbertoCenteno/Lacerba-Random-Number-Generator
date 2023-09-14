function RNG(min: number, max: number){
    const rng = Math.random();
    return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number){

    if (len > max - min) {
        throw new Error(`can't find ${len} numbers between ${min} and ${max}`);
    }
    const result: number[] = [];
    
    while(result.length < len){
        const rn = RNG(min, max);
        if(result.includes(rn)){
            continue;
        }
        result.push(rn);
    }
    return result;
}

const wheels = ['Bari', 'cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
const extractions: {[ruota: string]: number[]} = {};

for(const ruota of wheels){
    const extraction = RNGSequence(5, 1, 100);
    extractions[ruota] = extraction;
}

console.log(extractions);