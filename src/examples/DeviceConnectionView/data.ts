import { Position } from "react-flow-renderer";

export const graphData = [
  {
    id: "1",
    type: "connectedDevice",
    data: { label: "Im node1" },
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    type: "centralDevice", // custom node we defined above.
    data: { color: "yellow" },
    style: { border: "1px solid #777", padding: 10 },
    // position: { x: 250, y: 50 },
    position: { x: 600, y: 350 },
  },
  {
    id: "3",
    type: "connectedDevice",
    data: { label: "Im Node3" },
    position: { x: 150, y: 225 }, // define custom coordinates
    targetPosition: Position.Left,
  },
  {
    id: "4",
    type: "connectedDevice",
    data: { label: "Im Node4" },
    position: { x: 350, y: 125 },
    targetPosition: Position.Left,
  },

  // Is this an Edge?
  {
    // Connect Node 1 to Node 2
    id: "e1-2",
    source: "1",
    target: "2", // how does it know to connect to the left side?
    animated: true, // dashed with animation
    style: { stroke: "white" },
  },
  {
    id: "e2a-3",
    source: "2",
    sourceHandle: "a",
    target: "3",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "e2b-4",
    source: "2",
    sourceHandle: "b", //
    target: "4",
    animated: true,
    style: { stroke: "blue" },
  },
];
