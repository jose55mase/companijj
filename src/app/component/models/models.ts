export interface Models {
}

export interface Product{
  id:string,
  descriptionstring:string,
  image:string,
  name:string,
  price:string
}

export interface Responses{
  code: number;
  dateTime: string;
  message: string;
  data: any;
}
