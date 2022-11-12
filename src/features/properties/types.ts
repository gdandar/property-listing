export type Property = {
  _id: string;
  createdAt: number;
  status: "active" | "sold";
  images: Array<string>;
  address: {
    locality: string;
    route: string;
    stateCode: string;
    streetNumber: number;
  };
  units: Array<{
    bathroom: number;
    bedroom: number;
    squareFootage: number;
  }>;
  purchasePrice: number;
};
