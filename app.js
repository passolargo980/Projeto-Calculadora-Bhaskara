function calcularDelta(a,b,c){
    return (b**2-4*a*c)   
}


function calcularBhaskara(){
    a=document.getElementById("a").value
    b=document.getElementById("b").value
    c=document.getElementById("c").value
    delta = calcularDelta(a,b,c)

    result1 = ((-b + Math.sqrt(delta)) / 2*a)
    result1=result1.toFixed(2)
    result2 = ((-b - Math.sqrt(delta)) / 2*a)
    result2=result2.toFixed(2)                        
    alert(result1,result2)
    return (result1+" "+ result2)
}

function mostrarResultado(){
    let caixinha=document.getElementById("poluicao")
    caixinha.innerHTML="<p>"+calcularBhaskara()+"</p>"
}