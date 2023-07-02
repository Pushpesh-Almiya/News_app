import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger text-light">
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://img.etimg.com/thumb/msid-96935650,width-1070,height-580,imgsize-35592,overlay-etmarkets/photo.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}.....
            <span className="badge rounded-pill bg-success text-light">
              New
            </span>
          </h5>
          <p className="card-text text-primary">{description}....</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
