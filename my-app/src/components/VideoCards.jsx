import Landscape from "../assets/téléchargement.png"
import logo  from "../assets/logo-youtube.jpeg"
const VideoCards = (props) => {
  return (
    <div className="Video">
        
            
<img className="core-video" src={props.Landscape} alt="landscape"/>
            
       
<div className="data">
    
<img src={props.logo} alt="" className="logo"    />  

<div className="text">

      <h4> {props.description}</h4>
      <h5> {props.author} </h5>
      <h6> {props.data} </h6>


</div>
</div>     



      

</div>




  )
}

export default VideoCards