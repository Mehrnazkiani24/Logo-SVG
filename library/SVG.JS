class SVG {
    constructor(textColor) {
        this.textColor = textColor
        this.shapeRender = ""
        this.textRender = ""
    }
    setTextRender(text) {
        this.textRender = `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${text}</text>
        `
    }
    setShapeRender(shapeRender) {
        this.shapeRender = shapeRender
    }


    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       ${this.shapeRender}
    ${this.textRender}

</svg>
        `
    }

}
module.exports=SVG