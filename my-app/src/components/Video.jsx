import Landscape from "../assets/téléchargement.png";
import logo from "../assets/logo-youtube.jpeg";
import VideoCards from "./VideoCards";

const Video = () => {
  return (
    <div>
      <VideoCards
        img={Landscape}
        author=
        description="Description for service 1"
        logo={logo}
      />

      <VideoCards
        img={Landscape}
        title="Video 2"
        description="Another description"
        logo={logo}
      />

      <VideoCards
        img={Landscape}
        title="Video 3"
        description="More content here"
        logo={logo}
      />
    </div>
  );
};

export default Video;
