import React from "react";

import {
  Handle,
  Position,
  NodeProps,
  Connection,
  Edge,
} from "react-flow-renderer";

// const targetHandleStyle: React.CSSProperties = { background: "#555" };
// const sourceHandleStyleA: React.CSSProperties = {
//   ...targetHandleStyle,
//   left: 5,
// };
// const sourceHandleStyleB: React.CSSProperties = {
//   ...targetHandleStyle,
//   left: 25,
// };
// const sourceHandleStyleC: React.CSSProperties = {
//   ...targetHandleStyle,
//   left: 45,
// };
// const sourceHandleStyleD: React.CSSProperties = {
//   ...targetHandleStyle,
//   left: 65,
// };

// const onConnect = (params: Connection | Edge) =>
//   console.log("handled onConnect", params);

/**
 * @description
 * Node which contains a color picker inside of it.
 */
const ConnectedNode: React.FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      <div style={{ width: 150, height: 50, border: "2px solid red" }}>
        <div>I am a connected device</div>
      </div>
    </>
  );
};

export default React.memo(ConnectedNode);
// TODO: how do I attach a handle to a specific part of an element?
// TODO how do I show a tooltip for the edge?
// https://github.com/wbkd/react-flow/issues/313#issuecomment-657654727
