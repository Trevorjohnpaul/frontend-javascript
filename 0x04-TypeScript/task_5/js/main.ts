// task_5/js/main.ts

// Declare unique symbols to brand the types
const MajorBrand: unique symbol = Symbol();
const MinorBrand: unique symbol = Symbol();

// Interfaces with branding for nominal typing
interface MajorCredits {
  credits: number;
  readonly brand: typeof MajorBrand;
}

interface MinorCredits {
  credits: number;
  readonly brand: typeof MinorBrand;
}

// Sum functions
function sumMajorCredits(a: MajorCredits, b: MajorCredits): MajorCredits {
  return { credits: a.credits + b.credits, brand: MajorBrand };
}

function sumMinorCredits(a: MinorCredits, b: MinorCredits): MinorCredits {
  return { credits: a.credits + b.credits, brand: MinorBrand };
}


const math: MajorCredits = { credits: 10, brand: MajorBrand };
const physics: MajorCredits = { credits: 5, brand: MajorBrand };

const majorSum = sumMajorCredits(math, physics);
console.log(majorSum.credits); // 15

const music: MinorCredits = { credits: 3, brand: MinorBrand };
const art: MinorCredits = { credits: 2, brand: MinorBrand };

const minorSum = sumMinorCredits(music, art);
console.log(minorSum.credits); // 5
