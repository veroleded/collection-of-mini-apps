type math = (a:string | number, b: string | number) => number; 

export default class Calculator {
  static inc: math = (a, b) => {
    return (Number(a) + Number(b));
  }

  static dec: math = (a, b) => {
    return Number(a) - Number(b);
  }

  static multiply: math = (a, b) => {
    return Number(a) * Number(b);
  }

  static divide: math = (a, b) => {
    return Number(a) / Number(b);
  }
}