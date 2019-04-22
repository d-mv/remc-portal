import React from "react";

import DocCard from "../components/DocCard";

import * as Style from "../styles/Documents";

interface DocProps {
    categories: [];
    documents: [];
}
class Documents extends React.Component<DocProps> {
    render() {
        return (
            <Style.documents id="news" data-test="component-documents">
                {this.props.documents.length > 0 ? (
                    this.props.documents.map((docItem: any) => {
                        return (
                            <DocCard
                                key={docItem.id}
                                item={docItem}
                                data-test="component-document-card"
                            />
                        );
                    })
                ) : (
                    <Style.message data-test="message-documents">
                        Документов нет
                    </Style.message>
                )}
            </Style.documents>
        );
    }
}

export default Documents;
