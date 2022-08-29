// import React, { Component } from "react";

const NewsItem = (props) => {
//  let { title, description, urlToImage, newsUrl, author, date, source } =
//     this.props; 
  return (
    <div>
      <div className="card mb-3" style={{ height: "27rem" }}>
        <img
          src={props.urlToImage ? props.urlToImage : "ina2.jpg"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "ina2.jpg";
          }}
          className="card-img-top"
          alt="Loading"
          style={{ height: "10rem" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {props.title}...
            <hr />
            <span
              className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
              style={{ left: "100", zIndex: "1" }}
            >
              {props.source}
            </span>
          </h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By <b>{props.author}</b> on <b>{new Date(props.date).toGMTString()}</b>
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            ReadMore
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
