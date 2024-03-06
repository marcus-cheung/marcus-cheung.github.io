export function getCurrentTheme() {
    let curTheme = 0;
    const savedTheme = localStorage.getItem("themeIndex");
    if (savedTheme) {
      curTheme = JSON.parse(savedTheme);
    } else {
      localStorage.setItem("themeIndex", JSON.stringify(0));
    }
    return curTheme;
  }
  

export interface Coordinate{
    X: number;
    Y: number;
}

export function getCenter(rect: any): Coordinate {
    return {X: rect.left + 80,
            Y: rect.top + 80};
}

export function getRelativeToCenter(rect: any, end: Coordinate): Coordinate {
    // return {X: end.X - rect.width / 2,
    //         Y: end.Y - rect.height / 2};
    return {X: end.X - 80,
            Y: end.Y - 80};
}

export function distance(start: Coordinate, end: Coordinate): number {
    return ((start.X - end.X) ** 2 + (start.Y - end.Y) ** 2) ** 0.5;
}

export function inBounds(point: Coordinate, rect: any): boolean {
    return (point.X >= rect.left &&
            point.X <= rect.right &&
            point.Y >= rect.top &&
            point.Y <= rect.bottom)
}