import React, { useState, useEffect, MouseEvent } from "react";
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
import { graphData } from "./data";

import CentralDevice from "./CentralDevice";
import ConnectedDevice from "./ConnectedDevice";

const onLoad = (reactFlowInstance: OnLoadParams) =>
  console.log("flow loaded:", reactFlowInstance);
const onNodeDragStop = (_: MouseEvent, node: Node) =>
  console.log("drag stop", node);
const onElementClick = (_: MouseEvent, element: FlowElement) =>
  console.log("click", element);

const initBgColor = "#1A192B";

const nodeTypes = {
  connectedDevice: ConnectedDevice,
  centralDevice: CentralDevice,
};

export const DeviceConnectionsExample = () => {
  const [elements, setElements] = useState<Elements>([]);
  const [bgColor, setBgColor] = useState<string>(initBgColor);

  // When the component mounts...do this setup
  useEffect(() => {
    setElements(graphData);
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
