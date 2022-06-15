export default class City {
    constructor(name,xCoord,yCoord) {
        this.name = name;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }

    print() {
        console.log(`City: ${this.name}, X: ${this.xCoord}, Y: ${this.yCoord}`)
    }
}