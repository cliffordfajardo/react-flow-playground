import React from "react";

import {
  Handle,
  Position,
  NodeProps,
  Connection,
  Edge,
} from "react-flow-renderer";

const targetHandleStyle: React.CSSProperties = { background: "#555" };
const sourceHandleStyleA: React.CSSProperties = {
  ...targetHandleStyle,
  left: 5,
};

const onConnect = (params: Connection | Edge) =>
  console.log("handled onConnect", params);

/**
 * @description
 * Node which contains a color picker inside of it.
 */
const CentralDevice: React.FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      {/* TODO: I don't see the benefit of this ENUM...use a Type */}
      <div style={{ width: 230, height: 100, border: "2px solid black" }}>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      {/* These are like port or connection points */}
      <Handle
        type="target"
        position={Position.Left}
        style={targetHandleStyle}
        onConnect={onConnect}
      />
      <Handle
        id="a"
        type="source"
        position={Position.Bottom}
        style={sourceHandleStyleA}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default React.memo(CentralDevice);

// TODO: how do I attach a handle to a specific part of an element?
// TODO how do I show a tooltip for the edge?
// https://github.com/wbkd/react-flow/issues/313#issuecomment-657654727
