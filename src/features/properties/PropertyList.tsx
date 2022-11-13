/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AwarenessCard from "./AwerenessCard";
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
      {propertiesStatus === "loading" ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        properties.map((property, index) => (
          <div key={property._id}>
            <PropertyCard property={property} />
            {(index === 1 ||
              (properties.length < 2 && index === properties.length - 1)) && (
              <AwarenessCard />
            )}
          </div>
        ))
      )}
    </div>
  );
}
