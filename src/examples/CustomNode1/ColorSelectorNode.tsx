import React, { memo, FC, CSSProperties } from "react";

import {
  Handle,
  Position,
  NodeProps,
  Connection,
  Edge,
} from "react-flow-renderer";

const targetHandleStyle: CSSProperties = { background: "#555" };
const sourceHandleStyleA: CSSProperties = {
  ...targetHandleStyle,
  left: 5,
};
const sourceHandleStyleB: CSSProperties = {
  ...targetHandleStyle,
  left: 25,
};
const sourceHandleStyleC: CSSProperties = {
  ...targetHandleStyle,
  left: 45,
};
const sourceHandleStyleD: CSSProperties = {
  ...targetHandleStyle,
  left: 65,
};

const onConnect = (params: Connection | Edge) =>
  console.log("handled onConnect", params);

/**
 * @description
 * Node which contains a color picker inside of it.
 */
const ColorSelectorNode: FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      {/* TODO: I don't see the benefit of this ENUM...use a Type */}
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
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

      <Handle
        id="b"
        type="source"
        position={Position.Bottom}
        style={sourceHandleStyleB}
        isConnectable={isConnectable}
      />
      <Handle
        id="c"
        type="source"
        position={Position.Bottom}
        style={sourceHandleStyleC}
        isConnectable={isConnectable}
      />
      <Handle
        id="d"
        type="source"
        position={Position.Bottom}
        style={sourceHandleStyleD}
        isConnectable={isConnectable}
      />
    </>
  );
};
// TODO: how do I attach a handle to a specific part of an element?
// TODO how do I show a tooltip for the edge?
// https://github.com/wbkd/react-flow/issues/313#issuecomment-657654727
export default memo(ColorSelectorNode);
