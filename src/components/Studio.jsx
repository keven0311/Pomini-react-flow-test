import { useState, useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "../components/ReactFlow/styles/xy-theme.css";
import Scene from "./ReactFlow/Scene";
import generateTreeLayout from "../ultils/generateTreeLayout";

function Studio({story}) {
  const node = story;

  const nodeTypes = {
    scene: Scene,
  };

  const nodePositions = generateTreeLayout(node.nodes, node.startNode);

  const initialNodes = Object.values(node.nodes).map((scene) => ({
    id: scene.id,
    type: "scene",
    position: nodePositions[scene.id] || { x: 0, y: 0 },
    data: scene,
  }));

  const initialEdges = Object.values(node.nodes)
    .flatMap((scene) =>
      scene.choices.map((choice) => ({
        id: `${scene.id}-${choice.nextNode}`,
        source: scene.id,
        target: choice.nextNode,
        label: choice.text,
      }))
    )
    .filter((edge) => edge.target);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default Studio;
