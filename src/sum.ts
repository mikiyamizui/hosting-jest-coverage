export function sum(...args: number[]): number {
  switch (args.length) {
    case 0:
      return 0;
    case 1:
      return args[0];
    default:
      return args.reduce((acc, num) => acc + num, 0);
  }
}
