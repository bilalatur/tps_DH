let confirma = confirm('¿Quiere iniciar el proceso?')
if(!confirma){
    alert('Gracias por haber venido');
    location.href = 'https://www.netflix.com'
} else {
    let integrantes;
    do {
        integrantes = prompt('¿Cúantos integrantes son en tu familia?')
    } while(isNaN(integrantes) || integrantes < 3)
    let arrayGastos = [];
    for(i=1;i<=integrantes;i++){
        let nombre = prompt('Ingrese el nombre del integrante ' + i)
        let gasto = prompt('Ingrese el gasto del integrante ' + i)
        if(isNaN(nombre.trim()) && gasto > 0 && !isNaN(gasto)){
           let = gastos = {
                nombre: nombre.trim(),
                gastos: gasto
            }
            arrayGastos.push(gastos)
        } else {
            alert('Ingrese un nombre y gasto válido');
            i = i-1;
        }
    }
    console.log(arrayGastos);
}
