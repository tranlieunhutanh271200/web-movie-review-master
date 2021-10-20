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
        src="https://imdb-video.media-imdb.com/vi3963797529/1434659607842-pgv4ql-1629772272608.mp4?Expires=1633759289&Signature=Mf6pY3aibgn368kWkKeAqBlVNw0j0aJ3ERtci8qwN0~wKrD17FgTG8e0wHN4tajSmNGDlIVZ3H5hvyYhIUoMfSGFpUgS6aJaET1hs9p7~y7k-EN1ojVtNJS7jZQsWICKidzK3nfV1H9Or2QT-W~rt5Dvtzv9qeY7fJ~EZfi5209P6qyrz~sl4CqWWTatMrPzXygVVOmuj9WxB1WNagDzARLyiymmUcYiGX8bpcEnKFtrCU4-1Ze0uif2VL-SZAMBba~CBgiH22dQG4J7n3Dn2CowepBHPShFPhhGkOqq46Hgtw02i1bcP9wd0Ejlh6Ez8k-09LSVRTs0U0E-wKm2Ng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      />
    </div>
  );
}
