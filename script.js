function triangleCalculator(){

    // math functionality
    const triangularBase= document.getElementById('triangle-base');
    const triangularHeight= document.getElementById('triangle-height');
    const Base= parseInt(triangularBase.value)
    const Height= parseInt(triangularHeight.value)
    const Area= parseInt((Base*Height)*0.5);
    // console.log( Area)

    // putting numbers in html

    const area= document.getElementById('trian-area')
    area.innerHTML= Area;
}



// Area (A) = w x l
function rectangleCalculator(){ 

    // math functionality
    const rectangleWidth= document.getElementById('rectangle-width');
    const rectangleLength= document.getElementById('rectangle-length');
    const recBase= parseInt(rectangleWidth.value)
    const recHeight= parseInt(rectangleLength.value)
    const rArea= parseInt(recBase*recHeight);
    // console.log( Area)

    // putting numbers in html

    const recArea= document.getElementById('rec-area')
    recArea.innerHTML= rArea;
}