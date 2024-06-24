import { CoreComponent } from "@internal/core";
import React from "react";

export const CompositeComponent = (): JSX.Element => {
  return (
    <div>
      <div>Composite Component</div>
      <CoreComponent />
    </div>
  );
};
