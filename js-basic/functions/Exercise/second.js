const circle={
    radius:23,
    get getArea()
    {
        return Math.PI*this.radius**2;
    },
    set getArea(value)
    {
        this.radius=value;
    }
}
console.log(circle.getArea);
circle.getArea=27;
console.log(circle.getArea);

