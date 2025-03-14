import { useNavigate } from "react-router-dom";
import {Feb27_ShengRong_sample_story_converted,Feb26_Colin_sample_story} from "../ultils/exampleNodes"

const stories = [
  { id: 1, title: "Feb26_Colin_sample_story" },
  { id: 2, title: "Feb27_ShengRong_sample_story" }
];

function StudioList() {
  const navigate = useNavigate();

  console.log(Feb27_ShengRong_sample_story_converted)
  console.log(Feb26_Colin_sample_story)

  return (
    <div>
      <h1>Story List</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <button onClick={() => navigate(`/studio/${story.id}`)}>
              {story.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudioList;
