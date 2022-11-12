/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPropertiesAsync, selectProperties } from "./propertiesSlice";
import PropertyCard from "./PropertyCard";

const styles = css({
  padding: "0 22px 0 28px",
});

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
    <div css={styles}>
      {propertiesStatus !== "loading" &&
        properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
    </div>
  );
}
