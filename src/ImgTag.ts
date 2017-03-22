import { Rectangle } from "./Shapes";

export class ImgTag {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    rect: Rectangle;
    drag = false;

    constructor(canvasId: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        console.log(canvasId);

        this.canvas.addEventListener("mousedown", this.mouseDown, false);
        this.canvas.addEventListener("mouseup", this.mouseUp, false);
        this.canvas.addEventListener("mousemove", this.mouseMove, false);
    }

    mouseDown(e: any) {
        this.rect.x = e.pageX - this.canvas.offsetLeft;
        this.rect.y = e.pageY - this.canvas.offsetTop;
        this.drag = true;
    }

    mouseUp(e: any) {
        this.drag = false;
    }

    mouseMove(e: any) {
        if (this.drag) {
            this.rect.width = (e.pageX - this.canvas.offsetLeft) - this.rect.x;
            this.rect.height = (e.pageY - this.canvas.offsetTop) - this.rect.y;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw();
        }
    }

    draw() {
        this.ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}