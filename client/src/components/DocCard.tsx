import React from "react";

import * as Style from "../styles/DocCard";

const DocCard = (document: any) => {
    return Object.keys(document).length > 0 ? (
        <Style.document data-test="component-document">
            {document}
        </Style.document>
    ) : null;
};

export default DocCard;
