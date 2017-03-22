class Shape {
	x: number;
	y: number;
	color: string;
	lineWidth: number;
}

export class Rectangle implements Shape {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public color: string;
	public lineWidth: number;

	constructor(x: number, y: number, height: number, width: number,
				color: string = "", lineWidth: number = 0) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.color = color;
		this.lineWidth = lineWidth;
	}

}

export class Circle implements Shape {
	public x: number;
	public y: number;
	public radius: number;
	public color: string;
	public lineWidth: number;

	constructor(x: number, y: number, radius: number,
				color: string = "", lineWidth: number = 0) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.lineWidth = lineWidth;
	}

}