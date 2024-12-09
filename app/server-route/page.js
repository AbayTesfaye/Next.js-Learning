import React from "react";
import ImageSlider from "../components/imageSlider";

import { ServerSideFunction } from "../utils/server-utils";
export default function ServerRoutePage() {
  const result = ServerSideFunction();

  return (
    <div>
      <h1>serverRoutePage</h1>
      <p>{result}</p>

      <ImageSlider />
    </div>
  );
}
