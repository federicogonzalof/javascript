function saludar(){
    let nombre = prompt('¿Cómo es tu nombre?')
    alert(`Bienvenid@ ${nombre}`)
}
saludar()

function eventos(){
    let compra = prompt('¿Qué te gustaría comprar? \n 1- Cine  \n 2- Teatro \n 3- Recitales')
    if(compra == 1 || compra == 'Cine' || compra == 'cine' || compra == 'CINE'){
        cine()
    }else if(compra == 2 || compra == 'Teatro' || compra == 'TEATRO' || compra == 'teatro'){
        teatro()
    }else if(compra == 3 || compra == 'Recitales' || compra == 'recitales' || compra == 'RECITALES'){
        recitales()
    }else{
        alert('Ingrese un valor válido')
        eventos()
    }
}

function repreguntar(){
    let repregunta = prompt('¿Desea comprar algo mas? (si/no)')
    if(repregunta == 'si'){
        eventos()
    }else if(repregunta == 'no'){
        alert('Gracias por su compra')
    }else{
        alert('Ingrese una opción valida')
        repreguntar()
    }
}

function pagar(){
    let pago = prompt('¿Con qué desea pagar? (transferencia/tarjeta)')
    if(pago == 'transferencia' || pago == 'Transferencia' || pago == 'TRANSFERENCIA'){
        alert('Usted tiene un 15% de descuento')
        let monto = parseFloat(prompt('Ingrese el monto a pagar sin puntos ni comas')) 
        let descuento = monto * 0.15
        let total = monto - descuento
        alert(`Su pago es de: ${total}`)
    }else if(pago == 'tarjeta' || pago == 'Tarjeta' || pago == 'TARJETA'){
        let monto = parseFloat(prompt('Ingrese el monto a pagar sin puntos ni comas'))
        alert('Usted tiene para elegir (cuotas con interes):')
        for(let i = 1; i <= 6; i++){
            let interes = monto * (i * 0.05)
            let cuota = Math.round((monto + interes) / i) 
            let total = Math.round(monto + interes)
            alert(`${i} cuota/s de: $ ${cuota} \nTotal de: $ ${total}`)
        }
        let cuotas = parseInt(prompt('¿En cuantas cuotas desea pagar?')) 
        if(cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 4 || cuotas == 5 || cuotas == 6){
            alert(`Enhorabuena su pago se ha concretado en ${cuotas} cuota/s`)
        }else{
            alert('Ingrese una opción valida')
            pagar()
        }
    }
}

function cine(){
    let peliculaCine = prompt('Cartelera vigente: \n 1- Lightyear \n 2- Jurassic World \n 3- Top Gun \n 4- Sonic 2 \n 5- Doctor strange')
    if(peliculaCine == 1 || peliculaCine == '1' || peliculaCine == 'Lightyear' || peliculaCine == 'lightyear' || peliculaCine == 'LIGHTYEAR'){
        alert('Su compra es: Lightyear, precio de entrada $600')
        pagar()
        repreguntar()
    }else if(peliculaCine == 2 || peliculaCine == '2' || peliculaCine == 'Jurassic world' || peliculaCine == 'jurassic world' || peliculaCine == 'JURASSIC WORLD'){
        alert('Su compra es: Jurassic world, precio de entrada $600')
        pagar()
        repreguntar()
    }else if(peliculaCine == 3 || peliculaCine == '3' || peliculaCine == 'Top gun' || peliculaCine == 'top gun' || peliculaCine == 'TOP GUN'){
        alert('Su compra es: Top gun, precio de entrada $600')
        pagar()
        repreguntar()
    }else if(peliculaCine == 4 || peliculaCine == '4' || peliculaCine == 'Sonic 2' || peliculaCine == 'sonic 2' || peliculaCine == 'SONIC 2'){
        alert('Su compra es: Sonic 2, precio de entrada $600')
        pagar()
        repreguntar()
    }else if(peliculaCine == 5 || peliculaCine == '5' || peliculaCine == 'Doctor strange' || peliculaCine == 'doctor strange' || peliculaCine == 'DOCTOR STRANGE'){
        alert('Su compra es: Doctor strange, precio de entrada $600')
        pagar()
        repreguntar()
    }else{
        alert('Seleccione una película')
        cine()
    }
}

function teatro(){
    let eventoTeatro = prompt('Nuestras opciones son: \n 1- El metodo moldavsky \n 2- Kinky boots \n 3- La verdad \n 4- PIAF')
    if(eventoTeatro == 1 || eventoTeatro == '1' || eventoTeatro == 'El metodo moldavsky' || eventoTeatro == 'el metodo moldavsky' || eventoTeatro == 'EL METODO MOLDAVSKY'){
        alert('Su entrada para "El metodo moldavsky" tiene un valor de $1200')
        pagar()
        repreguntar()
    }else if(eventoTeatro == 2 || eventoTeatro == '2' || eventoTeatro == 'Kinky boots' || eventoTeatro == 'kinky boots' || eventoTeatro == 'KINKY BOOTS'){
        alert('Su entrada para "kinky boots" tiene un valor de $1500' )
        pagar()
        repreguntar()
    }else if(eventoTeatro == 3 || eventoTeatro == '3' || eventoTeatro == 'La verdad' || eventoTeatro == 'la verdad' || eventoTeatro == 'LA VERDAD'){
        alert('Su entrada para "la verdad" tiene un valor de $2000')
        pagar()
        repreguntar()
    }else if(eventoTeatro == 4 || eventoTeatro == '4' || eventoTeatro == 'Piaf' || eventoTeatro == 'piaf' || eventoTeatro == 'PIAF'){
        alert('Su entrada para "piaf" tiene un valor de $800')
        pagar()
        repreguntar()
    }else{
        alert('Seleccione una función')
        teatro()
    }
}

function recitales(){
    let opcionShow = prompt('Nuestras opciones son: \n 1- Twenty one pilots \n 2- Marina \n 3- Arctic monkeys \n 4- Paramore \n 5- Metallica \n 6- Foo fighters')
    if(opcionShow == 1 || opcionShow == '1' || opcionShow == 'Twenty one pilots' || opcionShow == 'twenty one pilots' || opcionShow == 'TWENTY ONE PILOTS'){
        alert('Su entrada para "Twenty one pilots" tiene un valor de $10000')
        pagar()
        repreguntar()
    }else if(opcionShow == 2 || opcionShow == '2' || opcionShow == 'Marina' || opcionShow == 'marina' || opcionShow == 'MARINA'){
        alert('Su entrada para "Marina" tiene un valor de $9000')
        pagar()
        repreguntar()
    }else if(opcionShow == 3 || opcionShow == '3' || opcionShow == 'Arctic monkeys' || opcionShow == 'arctic monkeys' || opcionShow == 'ARCTIC MONKEYS'){
        alert('Su entrada para "Arctic monkeys" tiene un valor de $13000')
        pagar()
        repreguntar()
    }else if(opcionShow == 4 || opcionShow == '4' || opcionShow == 'Paramore' || opcionShow == 'paramore' || opcionShow == 'PARAMORE'){
        alert('Su entrada para "Paramore" tiene un valor de $10500')
        pagar()
        repreguntar()
    }else if(opcionShow == 5 || opcionShow == '5' || opcionShow == 'Metallica' || opcionShow == 'metallica' || opcionShow == 'METALLICA'){
        alert('Su entrada para "Metallica" tiene un valor de $15000')
        pagar()
        repreguntar()
    }else if(opcionShow == 6 || opcionShow == '6' || opcionShow == 'Foo fighters' || opcionShow == 'foo fighters' || opcionShow == 'FOO FIGHTERS'){
        alert('Su entrada para "Foo fighters" tiene un valor de $12000')
        pagar()
        repreguntar()
    }else{
        alert('No se encontró la opción')
        recitales()
    }
}

eventos()

