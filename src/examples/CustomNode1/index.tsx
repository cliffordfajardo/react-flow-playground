import React, { useState, useEffect, MouseEvent } from "react";
import { ChangeEvent } from "react";

import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Node,
  FlowElement,
  OnLoadParams,
  Elements,
  Position,
  Connection,
  Edge,
} from "react-flow-renderer";

import ColorSelectorNode from "./ColorSelectorNode";

const onLoad = (reactFlowInstance: OnLoadParams) =>
  console.log("flow loaded:", reactFlowInstance);
const onNodeDragStop = (_: MouseEvent, node: Node) =>
  console.log("drag stop", node);
const onElementClick = (_: MouseEvent, element: FlowElement) =>
  console.log("click", element);

const initBgColor = "#1A192B";

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

export const CustomNodeExample1 = () => {
  const [elements, setElements] = useState<Elements>([]);
  const [bgColor, setBgColor] = useState<string>(initBgColor);

  // When the component mounts...do this setup
  useEffect(() => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || e.id !== "2") {
            return e;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...e,
            data: {
              ...e.data,
              color,
            },
          };
        })
      );
    };

    setElements([
      {
        id: "1",
        type: "input",
        data: { label: "Im node1" },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: "2",
        type: "selectorNode", // custom node we defined above.
        data: { onChange: onChange, color: initBgColor },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 250, y: 50 },
      },
      {
        id: "3",
        type: "output",
        data: { label: "Im Node3" },
        position: { x: 150, y: 225 }, // define custom coordinates
        targetPosition: Position.Left,
      },
      {
        id: "4",
        type: "output",
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
    ]);
  }, []);

  const onElementsRemove = (elementsToRemove: Elements) => {
    console.log(`[onElementsRemove]: elementsToRemove`, { elementsToRemove });
    setElements((els) => removeElements(elementsToRemove, els));
  };

  /**
   * @description
   * Gets called when a node handle is dragged to a connection point.
   */
  const onConnect = (params: Connection | Edge) => {
    console.log(`[onConnect]: params: `, { params });
    setElements((els) =>
      addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, els)
    );
  };

  return (
    <section style={{ height: 700, width: 1200, border: "3px solid black" }}>
      <ReactFlow
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        style={{ background: "lightpink" }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        connectionLineStyle={{ stroke: "#fff" }}
        snapToGrid={true}
        snapGrid={[16, 16]}
        defaultZoom={1.5}
      >
        <MiniMap
          nodeStrokeColor={(n: Node): string => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";

            return "#eee";
          }}
          nodeColor={(n: Node): string => {
            if (n.type === "selectorNode") return bgColor;

            return "#fff";
          }}
        />
        <Controls />
      </ReactFlow>
    </section>
  );
};
