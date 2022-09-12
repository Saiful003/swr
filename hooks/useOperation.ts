export const allOperation = {
  ADD: "add",
  SUBSTRACT: "substract",
  MULTIPLE: "multiple",
  DIVISION: "division",
};

interface IOptions {
  operationType: string;
}

export function useOperation(
  number1: number,
  number2: number,
  options: IOptions
) {
  switch (options?.operationType) {
    case allOperation.ADD: {
      return number1 + number2;
    }
    case allOperation.DIVISION: {
      return number1 / number2;
    }
    case allOperation.MULTIPLE: {
      return number1 * number2;
    }
    case allOperation.SUBSTRACT: {
      return number1 - number2;
    }
  }
}
