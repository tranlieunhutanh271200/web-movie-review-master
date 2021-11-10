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
        src="https://imdb-video.media-imdb.com/vi3963797529/1434659607842-pgv4ql-1629772272608.mp4?Expires=1636525359&Signature=tN41L9KIxTMlIz75psp7AcDi1cUTZSYSgFxJ3H0MWohstA0W3H2bc8T70ErMW0h4rMXvsPmh5ssJK2rWTKbRWL83dBCfSdatOLMw2W6hw3WB0uWhVZGvFnilIVwSBVbMZSF39tPnWyoFnoY70KpUiwLj8mqRRRc9Uwqv21gfUQt~Uxe~ddvXgVdS6NYeXAosWhnULfwD3BLLZnfNs6XUJc95TwWOH6UTF26yEOWVmpyymY9rbyscXqufKxwClPOca0pvLpW4PjX9~ARI6wbnMhipNScwZOLRQh~rt8VhQK2X34jcP7DR-qa6TDrUPhmC-kU8~L067nL6rcFzSslMPg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      />
    </div>
  );
}
