export interface Menu {
  id: number;
  label: string;
  status: number;
  imageId: number;
  price: number;
  availableForWeeks: Array<number>;
  ingredients: {
    id: string;
    label: string;
    status: number;
    imageId: number;
  };
}
