export function drawStrokeText(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string,
  strokeStyle = "black",
  lineWidth = 8,
  fillStyle = "white"
): void {
  context.save();

  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.fillStyle = fillStyle;

  context.strokeText(text, x, y);
  context.fillText(text, x, y);

  context.restore();
}
