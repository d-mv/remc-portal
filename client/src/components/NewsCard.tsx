import React from "react";

import * as Style from "../styles/NewsCard";

interface CardProps {
    item: {
        id: string;
        title: string;
        date: string;
        source: string;
        text: string;
        link: string;
    };
}
class NewsCard extends React.Component<CardProps> {
    render() {
        return (
            <Style.card id={this.props.item.id}>
                <Style.header>
                    <Style.title>{this.props.item.title}</Style.title>
                    <Style.date id="date">{this.props.item.date}</Style.date>
                </Style.header>
                <Style.text id="text">{this.props.item.text}</Style.text>
                <Style.link id="link">{this.props.item.link}</Style.link>
            </Style.card>
        );
    }
}

export default NewsCard;
