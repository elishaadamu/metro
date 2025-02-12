import React from "react";
import { baseURL } from "../../utils/apiClient";

function ContainImage({ src }) {
    return <img className="rounded-lg object-contain" src={baseURL + src} alt="image" />;
}

export default ContainImage;
