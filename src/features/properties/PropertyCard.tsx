import { Property } from "./types";

type Props = {
  property: Property;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PropertyCard({ property }: Props) {
  return (
    <div>
      <div>{currencyFormatter.format(property.purchasePrice)}</div>
      <div>{`${property.units[0].bedroom}bd, ${property.units[0].bathroom}ba, ${property.units[0].squareFootage}ft2`}</div>
      <div>{`${property.address.streetNumber} ${property.address.route}`}</div>
      <div>{`${property.address.locality}, ${property.address.stateCode}`}</div>
      <div>{property.status}</div>
      <div>{`${new Date(property.createdAt)}`}</div>
    </div>
  );
}
