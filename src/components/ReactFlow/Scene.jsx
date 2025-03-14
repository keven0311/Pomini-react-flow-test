import { Handle, Position } from "@xyflow/react";


function Scene({data}) {
    const {id, sceneDescription, imagePropt, dislogues, choices, next} = data;

  return (
    <div style={{ padding: 10, background: "#ddd", borderRadius: 5, textAlign: "center", maxWidth:"300px", maxHeight:"200px", overflow:"auto" }}>
      <strong>{id}</strong>
      <p>{sceneDescription}</p>
      {choices.map((choice, index) => (
        <div key={index}>{choice.text}</div>
      ))}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  )
}

export default Scene

// node_01: {
//     id: "node_01",
//     sceneDescription:
//       "The storm rages outside as you drive along a desolate highway. The rain pounds against your windshield, and the wind howls like a banshee. Your navigation system suddenly reroutes you, directing you to a hotel you've never seen before. The sign reads 'Blackwood Hotel,' illuminated by a flickering neon light.",
//     imagePrompt:
//       "A dark, stormy night with heavy rain and lightning illuminating a desolate highway. A vintage car drives towards a gothic-style hotel with a flickering neon sign that reads 'Blackwood Hotel.' The hotel is surrounded by dense, ominous trees, and the atmosphere is eerie and foreboding.",
//     dialogues: [
//       {
//         speaker: "Navigation System",
//         text: "Recalculating route. Turn left in 500 meters to reach Blackwood Hotel.",
//       },
//       {
//         speaker: "Evelyn Harper",
//         text: "Blackwood Hotel? I've never heard of it. But with this storm, I don't have much choice.",
//       },
//       {
//         speaker: "Evelyn Harper",
//         text: "The rain's coming down so hard, I can barely see the road. This storm feels... unnatural.",
//       },
//       {
//         speaker: "Evelyn Harper",
//         text: "I hope this hotel has a vacancy. I can't keep driving in this weather.",
//       },
//       {
//         speaker: "Evelyn Harper",
//         text: "Something about this place... it feels like it's calling to me. Or maybe I'm just too tired.",
//       },
//     ],
//     choices: [
//       {
//         text: "Follow the navigation and head to the hotel",
//         nextNode: "node_02",
//       },
//       {
//         text: "Ignore the navigation and keep driving",
//         nextNode: "node_03",
//       },
//     ],
//     next: null,
//   }