export class ShapeDrawer {

  static drawPoint(ctx, position) {
    ctx.fillStyle = 'red';
    ctx.fillRect(position.x, position.y, 3, 3);
  }

  static drawLine(ctx, fromPosition, toPosition) {
    if (!fromPosition.x || !fromPosition.y || !toPosition.x || !toPosition.y) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(fromPosition.x, fromPosition.y);
    ctx.lineTo(toPosition.x, toPosition.y);
    ctx.stroke();
  }

}
