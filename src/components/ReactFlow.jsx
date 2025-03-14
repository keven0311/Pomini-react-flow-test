import { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./ReactFlow/styles/xy-theme.css";

import ColorSelectorNode from "./ReactFlow/ColorSelectorNode";
import Scene from "./ReactFlow/Scene";

const initBgColor = "#c9f1dd";

const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
  scene: Scene,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== "2") {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: "1",
        type: "input",
        data: { label: "An input node" },
        position: { x: 0, y: 50 },
        sourcePosition: "right",
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        position: { x: 300, y: 50 },
      },
      {
        id: "3",
        type: "output",
        data: { label: "Output A" },
        position: { x: 650, y: 25 },
        targetPosition: "left",
      },
      {
        id: "4",
        type: "output",
        data: { label: "Output B" },
        position: { x: 650, y: 100 },
        targetPosition: "left",
      },
      {
        id: "node_1",
        type: "scene",
        data: {
          scene: {
            id: "node_01",
            sceneDescription:
              "The storm rages outside as you drive along a desolate highway. The rain pounds against your windshield, and the wind howls like a banshee. Your navigation system suddenly reroutes you, directing you to a hotel you've never seen before. The sign reads 'Blackwood Hotel,' illuminated by a flickering neon light.",
            imagePrompt:
              "A dark, stormy night with heavy rain and lightning illuminating a desolate highway. A vintage car drives towards a gothic-style hotel with a flickering neon sign that reads 'Blackwood Hotel.' The hotel is surrounded by dense, ominous trees, and the atmosphere is eerie and foreboding.",
            dialogues: [
              {
                speaker: "Navigation System",
                text: "Recalculating route. Turn left in 500 meters to reach Blackwood Hotel.",
              },
              {
                speaker: "Evelyn Harper",
                text: "Blackwood Hotel? I've never heard of it. But with this storm, I don't have much choice.",
              },
              {
                speaker: "Evelyn Harper",
                text: "The rain's coming down so hard, I can barely see the road. This storm feels... unnatural.",
              },
              {
                speaker: "Evelyn Harper",
                text: "I hope this hotel has a vacancy. I can't keep driving in this weather.",
              },
              {
                speaker: "Evelyn Harper",
                text: "Something about this place... it feels like it's calling to me. Or maybe I'm just too tired.",
              },
            ],
            choices: [
              {
                text: "Follow the navigation and head to the hotel",
                nextNode: "node_02",
              },
              {
                text: "Ignore the navigation and keep driving",
                nextNode: "node_03",
              },
            ],
            next: null,
          },
        },
        position: { x: 300, y: 200 },
      },
    ]);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        sourceHandle: "b",
        animated: true,
      },
      {
        id: "eNode_1",
        source: "node_1",
        target: "4",
        animated: true,
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
