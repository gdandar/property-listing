import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPropertiesAsync, selectProperties } from "./propertiesSlice";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const dispatch = useAppDispatch();
  const properties = useAppSelector(selectProperties);

  const propertiesStatus = useAppSelector((state) => state.properties.status);

  useEffect(() => {
    if (propertiesStatus === "initial") {
      dispatch(fetchPropertiesAsync(""));
    }
  }, [propertiesStatus, dispatch]);

  return (
    <div>
      {propertiesStatus !== "loading" &&
        properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
    </div>
  );
}
