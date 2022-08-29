import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    key: "general",
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // eslint-disable-next-line react/no-typos
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    key: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} | NewsApp`;
  }
  newsUpdate = async () => {
    this.props.setProgress(0);
    const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.newsUpdate();
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=436022d4a71f42d09cf2c2d0f1762b8b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };
  nextbtn = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
    this.newsUpdate();
  };
  prevbtn = async () => {
    await this.setState({
      page: this.state.page - 1,
    });
    this.newsUpdate();
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-5 mt-5">
          News App | Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            !this.state.totalResults && (
              <h4 className="text-center">Loading...</h4>
            )
          }
        >
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {this.state?.articles?.map((element) => {
                return (
                  <div className="col-md-3 my-2 mb" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 62)
                          : ""
                      }
                      urlToImage={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author ? element.author : "Unknown"}
                      source={
                        element.source.name ? element.source.name : "Unknown"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        <div className="d-flex justify-content-between">
          {/* <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.prevbtn}
            className="btn btn-dark"
          >
            &larr; prev
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
            }
            onClick={this.nextbtn}
            className="btn btn-dark"
          >
            Next &rarr;
          </button> */}
        </div>
      </div>
    );
  }
}

export default News;
