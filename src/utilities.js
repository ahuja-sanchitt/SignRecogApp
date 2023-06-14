const labelMap = {
    1:{name:'7', color:'red'},
    2:{name:'A', color:'grey'},
    3:{name:'D', color:'blue'},
    4:{name:'F', color:'green'},
    5:{name:'J', color:'red'},
    6:{name:'L', color:'black'},
    7:{name:'S', color:'white'},
    8:{name:'U', color:'blue'},
    9:{name:'W', color:'red'},
    10:{name:'Z', color:'yellow'},

}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}