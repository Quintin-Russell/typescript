type Color = Record<string, number>

export function decodedValue(colors: string[]): number {
const color: Color = {
  'black' : 0,
  'brown' : 1,
  'red' : 2,
  'orange' : 3,
  'yellow' : 4,
  'green' : 5,
  'blue' : 6,
  'violet' : 7,
  'grey' : 8,
  'white' : 9
}
let translation = ""
  for (let i = 0; i <= 1; i++) {
    translation += color[colors[i].toLowerCase()]
  }

  return parseInt(translation)
}
