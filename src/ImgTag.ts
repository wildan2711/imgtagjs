
export class ImgTag {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;


	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._ctx = this._canvas.getContext("2d");
	}

}