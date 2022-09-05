function calcular(tipo, valor) {

    if (tipo === 'acao') {

        //apagar tudo
        if (valor === 'c') {
            document.querySelector('.visor').value = ''
        }

        //digitar as ações
        if (valor !== 'c' && valor !== '=' && valor !== '%' && valor !== 'n') {
            document.querySelector('.visor').value += valor
        }   

        //positivo e negativo
        if (valor === 'n') { 
            negado = document.querySelector('.visor').value
            document.querySelector('.visor').value = -negado
        }

        //porcentagem
        if (valor === '%') {
            
            let texto = document.querySelector('.visor').value
            let separar = texto.split('')
            
            if (separar.indexOf('-') === -1 && separar.indexOf('+') === -1 ) {

                let num1 = Number(texto[0])
                document.querySelector('.visor').value = porcentagem3(num1)

            } else if (separar.indexOf('-') === -1) {
            
                let texto2 = texto.split('+')

                let num1 = Number(texto2[0])
                let num2 = Number(texto2[1])

                document.querySelector('.visor').value = porcentagem1(num1, num2)

            } else if (separar.indexOf('+') === -1) {

                let texto2 = texto.split('-')

                let num1 = Number(texto2[0])
                let num2 = Number(texto2[1])

                document.querySelector('.visor').value = porcentagem2(num1, num2)

            }

            function porcentagem1(a, b) {
                let porcento = a * (b / 100)
                return porcento + a

            }

            function porcentagem2(a, b) {
                let porcento = a * (b / 100)
                return a - porcento

            }

            function porcentagem3(a) {
                return a / 100
            }

        }

        //resultado
        if (valor === '=') {
            let resolvido = eval(document.querySelector('.visor').value)
            document.querySelector('.visor').value = resolvido
        }


    }

    if (tipo === 'numero') {
        document.querySelector('.visor').value += valor
    }
    
}