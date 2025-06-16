// Day 1 Monday

// Create a class named Rectangle.
// It should have a constructor that takes width and height and sets them as properties.
// Add a method calculateArea that returns the area of the rectangle.
// Add a method calculatePerimeter that returns the perimeter of the rectangle.
// Create another instance of the Rectangle class that is a square. Verify the isSquare method returns true.



class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    area(){
        let result = this.width * this.height
        return result
    }

    perimeter(){
        let width = this.width *2
        let height = this.height *2
        let result = width + height
        return result
    }
    isSquare(){
        if (this.width == this.height){
            return true
        } else {
            return false
        }
        
    }


}
const rectangle = new Rectangle(23,10);
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(rectangle.isSquare());





// Create an instance of the Rectangle class.
// Set width to 5 and height to 10.
// Call the calculateArea, calculatePerimeter, and isSquare methods on the instance.




class Dog{
    constructor (name, breed){
        this.name = name
        this.breed = breed

    }

    bark(){
        return `The name of the dog is ${this.name} and is ${this.breed} breed`
    }
}

const dog = new Dog("Buddy","Golden Retriever")
console.log(dog.bark());





