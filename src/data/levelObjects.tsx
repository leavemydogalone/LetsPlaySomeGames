interface IObject {
  readonly text: string;
  cleared: boolean;
}

let levelObjectsArray: IObject[] = [
  {
    text: "One",
    cleared: false,
  },
  {
    text: "Two",
    cleared: false,
  },
];
export default levelObjectsArray;
