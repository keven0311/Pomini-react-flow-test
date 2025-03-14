export default function generateTreeLayout(nodesData, rootId, startX = 50, startY = 300, levelGap = 500, siblingGap = 300){
    const positions = {};
    let depthMap = {}; // Track the number of nodes at each depth level
    const visited = new Set();
  
    const placeNode = (nodeId, depth) => {
        if (!nodesData[nodeId] || visited.has(nodeId)) return;

        visited.add(nodeId)
    
        // Calculate x position based on depth (left to right)
        const x = startX + depth * levelGap;
        
        // Ensure spacing between siblings
        const y = startY + (depthMap[depth] || 0) * siblingGap;
        positions[nodeId] = { x, y };
    
        // Increment depth counter
        depthMap[depth] = (depthMap[depth] || 0) + 1;
    
        // Recursively place child nodes
        nodesData[nodeId].choices.forEach((choice) => {
          placeNode(choice.nextNode, depth + 1);
        });
      };
    
      placeNode(rootId, 0);
      return positions;
}