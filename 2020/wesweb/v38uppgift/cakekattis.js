let s = 10;
let h = 4;
let v = 7;

let A = h*v;
let B = (s-h) * v;
let C = h * (s-v);
let D = (s-h) * (s-v);

let pieces = [A,B,C,D];

pieces.sort();

let largestPiece = pieces[pieces.length -1] * 4;

console.log(largestPiece);