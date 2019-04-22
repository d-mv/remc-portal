import React from "react";

import * as Style from "../styles/News";
import NewsCard from "../components/NewsCard";

// temp db
// const news = [
//   {
//     id: "1",
//     title: "news 1",
//     date: "01/01/1990",
//     source: "Newspaper #1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
//     link: "https://www.google.com"
//   },
//   {
//     id: "2",
//     title: "news 1",
//     date: "01/01/1990",
//     source: "Newspaper #1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
//     link: "https://www.google.com"
//   },
//   {
//     id: "3",
//     title: "news 1",
//     date: "01/01/1990",
//     source: "Newspaper #1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
//     link: "https://www.google.com"
//   },
//   {
//     id: "4",
//     title: "news 1",
//     date: "01/01/1990",
//     source: "Newspaper #1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
//     link: "https://www.google.com"
//   }
// ];

// format interface
interface NewsProps {
    news: Array<object>;
}

class News extends React.Component<NewsProps> {
    render() {
        return (
            <Style.news id="news" data-test="component-news">
                {this.props.news.length > 0 ? (
                    this.props.news.map((newsItem: any) => {
                        return (
                            <NewsCard
                                key={newsItem.id}
                                item={newsItem}
                                data-test="component-news-card"
                            />
                        );
                    })
                ) : (
                    <Style.message data-test="message-news">
                        Новостей нет
                    </Style.message>
                )}
            </Style.news>
        );
    }
}

export default News;
