export interface Menu {
  label: string;
  status: number;
  imageId: number;
  price: number;
  availableForWeeks: Array<number>;
  ingredients: {
    label: string;
    status: number;
    imageId: number;
  };
}
