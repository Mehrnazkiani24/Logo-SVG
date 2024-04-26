class Shape{
    constructor(color){
        this.shapecolor = this.color
    }

}

class Circle extends Shape{
    constructor(color){
        super(color)
        this.renderShape = ""
    }

    setShapeRender(){
        this.renderShape = `  <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
        `
    }
    render(){
        return this.renderShape
    }
}
class Triangle extends Shape{
    constructor(color){
        super(color)
        this.renderShape = ""
    }

    setShapeRender(){
        this.renderShape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
    }
    render(){
        return this.renderShape
    }
}
class Square extends Shape{
    constructor(color){
        super(color)
        this.renderShape = ""
    }

    setShapeRender(){
        this.renderShape = `  <rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" />`
    }
    render(){
        return this.renderShape
    }
}

module.exports={Circle,Triangle,Square}