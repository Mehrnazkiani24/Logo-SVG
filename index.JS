const { Circle, Square, Triangle } = require("./library/shapes")
const SVG = require("./library/SVG")
const fs = require("fs")
const inquirer = require("inquirer")


function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter LOGO text",
            name: "logotext"
        },
        {
            type: "list",
            message: "Please enter textColor",
            name: "textColor",
            choices:["Blue","Black","White","Green","Purple","Yellow","Grey"]
        },

        {
            type: "list",
            message: "Please select shape",
            name: "logoshape",
            choices:["Circle","Square","Triangle"]
        },
        {
            type: "list",
            message: "Please enter shapeColor",
            name: "shapeColor",
            choices:["Blue","Black","White","Green","Purple","Yellow","Grey"]

        }
    ]).then(response => {
        let userShape;
        let shapeRender;
        switch(response.logoshape){
            case "Circle":
                userShape = new Circle(response.shapeColor)
                userShape.setShapeRender()
                 shapeRender = userShape.render()
                createSVG(shapeRender, response)
                break;
       
            case "Square":
                userShape = new Square(response.shapeColor)
                createSVG(shapeRender, response)
                shapeRender = userShape.render()
                createSVG(shapeRender, response)
                break;

                case "Triangle":
                userShape = new Triangle(response.shapeColor)
                shapeRender = userShape.render()
                createSVG(shapeRender, response)
                createSVG(shapeRender, response)
                break;
        }
    })
}

  
function createSVG(shapeRender, response){
    console.log (shapeRender, response)
    let userSvg = new SVG(response.textColor)
    userSvg.setTextRender(response.logotext)
    userSvg.setShapeRender(shapeRender)
    fs.writeFileSync("OUTPUT.svg",userSvg.renderSVG(),(err)=>{
        if(err) throw err
    })

    console.log("LOGO GENERATED")

}   

init()