import Landscape from "../assets/téléchargement.png";
import logo from "../assets/logo-youtube.jpeg";
import VideoCards from "./VideoCards";

const Video = () => {
  return (
    <div>
      <VideoCards
        img={Landscape}
        logo={logo}
        description="Description for service 1"
        author="gerard"
        data = "250k de vue . il ya 3 ans"
      />

     <VideoCards
        img={Landscape}
        logo={logo}
        description="Description for service 1"
        author="gerard"
        data = "250k de vue . il ya 3 ans"
      />
      <VideoCards
        img={Landscape}
        logo={logo}
        description="Description for service 1"
        author="gerard"
        data = "250k de vue . il ya 3 ans"
      />
      <VideoCards
        img={Landscape}
        logo={logo}
        description="Description for service 1"
        author="gerard"
        data = "250k de vue . il ya 3 ans"
      />
      <VideoCards
        img={Landscape}
        logo={logo}
        description="Description for service 1"
        author="gerard"
        data = "250k de vue . il ya 3 ans"
      />
      
    </div>
  );
};

export default Video;
