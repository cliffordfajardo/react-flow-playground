export const getCanvasCenterPoint = ({ width, height }: { width: number; height: number }) => {
  const xPostion = width / 2;
  const yPosition = height / 2;

  return { x: xPostion, y: yPosition } as const;
};

type CalculateCenterItemStartPositionArgs = {
  canvasCenterPoint: { x: number; y: number };
  itemToPlaceDimensions: { width: number; height: number };
};
