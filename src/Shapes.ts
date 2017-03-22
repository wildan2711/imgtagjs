export class Shape {
	x: number;
	y: number;
	color: string;
	lineWidth: number;
}

export class Rectangle extends Shape {
	width: number;
	height: number;
}

export class Circle extends Shape {
	radius: number;
}
