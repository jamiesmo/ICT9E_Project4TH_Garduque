function centimeter() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 10 ;
    
    document.getElementsByName('output')[0].value= result;

}

function meter() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 1000 ;
    
    document.getElementsByName('output')[0].value= result;

}

function kilometer() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 1000000 ;
    
    document.getElementsByName('output')[0].value= result;
}