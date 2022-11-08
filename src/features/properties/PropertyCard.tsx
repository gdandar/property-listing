import { Property } from "./types";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div>
      <div>{property.purchasePrice}</div>
      <div>{property.lotSize}</div>
      <div>{property.address.route}</div>
      <div>{property.address.locality}</div>
    </div>
  );
}
