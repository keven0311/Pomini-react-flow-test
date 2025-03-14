import { useParams, useNavigate } from "react-router-dom";
import Studio from "./Studio";
import { Feb26_Colin_sample_story, Feb27_ShengRong_sample_story_converted } from "../ultils/exampleNodes";

const stories = {
  1: Feb26_Colin_sample_story,
  2: Feb27_ShengRong_sample_story_converted
};

function StudioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const story = stories[id] || { title: "Unknown Story", content: "No story found." };

  return (
    <div style={{ position: "relative", padding: "20px" }}>
         <button 
        onClick={() => navigate("/studioList")} 
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: "1"
        }}
      >
        ← Go Back
      </button>
        <Studio story={story} />
    </div>
  )
}

export default StudioDetail;
