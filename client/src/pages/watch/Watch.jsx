import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://imdb-video.media-imdb.com/vi3963797529/1434659607842-pgv4ql-1629772272608.mp4?Expires=1633544164&Signature=HThqg8f-mOAR18FJ0Ron~szPYtE1aokI1L6IyvitNZO3mOjVJcBkSRkvkZcxF5wLXVDg24JA61iG-2RzGri9obSE8~y95cRrv6CY8bnYPUbX2wdYcV10TIms5bfUJcbl2YMzScZqB7VKzavoJCqvGtbM0q1yCslmxqkv5e-xGiypqogcd2AiwQYlystTy71BCqxXIlU-An-s-Ys2Kn2JXKMdYYPgyRE2QGbc0MtDOXHBeYnm854Z9f02e0ymf-P1J~NZSCJs-EYZYS2UchTuzDwHAyKC5fk9HZpjIz3ynCWJNp4n47k-Svd38w9YVHZFnRQqTWiWJG6NivVjjvBDXQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      />
    </div>
  );
}
