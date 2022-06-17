export default class City {
    constructor(name,xCoord,yCoord) {
        this.name = name;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }

    print() {
        console.log(`City: ${this.name}, X: ${this.xCoord}, Y: ${this.yCoord}`)
    }

    toJson() {
        /**
         * Used to return the right format in json for post
         */
        return JSON.stringify({city: this.name, coords: { x:this.xCoord, y:this.yCoord }})
    }
}