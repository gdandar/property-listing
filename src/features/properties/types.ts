export type Property = {
  _id: string;
  address: {
    locality: string;
    route: string;
    stateCode: string;
    streetNumber: number;
  };
  lotSize: number;
  purchasePrice: number;
};
