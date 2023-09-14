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

function createWheelContainer(wheelName: string, extractions: number[]) {
    const wheelDiv = document.createElement('div');
    wheelDiv.className = `ruota ${wheelName.toLowerCase()}`;
    const nameH2 = document.createElement('h2');
    nameH2.className = 'ruota-title';
    nameH2.innerText = wheelName;
    wheelDiv.appendChild(nameH2);

    for(const num of extractions){
        const numP = document.createElement('p');
        numP.innerText = '' + num;
        const numDiv = document.createElement('div');
        numDiv.className = 'ruota-estrazione';
        numDiv.appendChild(numP);
        wheelDiv.appendChild(numDiv);
    }


    return wheelDiv
}

const container = document.getElementById('container');
if(container){
    const pre = document.createElement('pre');

    for(const wheel of wheels){
        const wheelExtractions = extractions[wheel];
        const wheelDiv = createWheelContainer(wheel, wheelExtractions);
        container.appendChild(wheelDiv);
    }
}