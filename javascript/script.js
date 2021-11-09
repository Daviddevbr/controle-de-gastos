
let buttons = document.querySelectorAll("button.button");//variavel recebe todas tags com a classa button
let intro = document.querySelector("div#bemvindo")//texto com instruções
let grafico = document.querySelector("div.container")//é a div que guarda o grafico
let divvalores = document.querySelector("div.valores")//div que quarda os inputs
let valors = document.querySelectorAll("input.inputvalor")//todos os inputs atravez de querySelectorAll
let graficozera = document.querySelector("button#zeravalor")
graficozera.addEventListener('click', zeravalor)

let arraylist = [];//array que vai receber os inputs criados pelo java scrypt
const modalcont = document.querySelector("div#modal")//contant que contem o modal
let fechar = document.querySelector("button.fecharX");//botão de feichar
fechar.addEventListener('click', sumirmodal)//chama o evento (função que feicha o modal)


const ctx = document.getElementById('chart').getContext('2d');//esse é grafico biblioteca chart.js
const graficodia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        datasets: [{
            label: '# of Votes',
            data: [valors[0].value, valors[1].value, valors[2].value, valors[3].value, valors[4].value, valors[5].value, valors[6].value],
            backgroundColor: [
                'rgba(200, 0, 700, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(200, 50, 100, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }

        }

    }
});
for (let cont = 0; cont < buttons.length; cont++) {//laço que sabe qual button foi clicado
    buttons[cont].addEventListener('click', updatechart)//ao click no butão vai chamar a função updatechart

    function updatechart() {
        switch (cont) {//estrutura de escollha switch case
            case 0:

                if ((valors[0].value == "") || (valors[1].value == "") || (valors[2].value == "") ||//a condição do if é saber se os inputs estão nulos
                    (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value == "")) {

                    valors.forEach(function alteraborda(cont, i) {//laço de repetição que faz alteração css nos input
                        if (valors[i].value !== "") {
                            valors[i].style.borderColor = "green"
                            valors[i].style.boxShadow = "0px 0px 5px green"

                        } else {
                            valors[i].style.borderColor = "red"
                            valors[i].style.boxShadow = "0px 0px 5px red"
                        }
                    }) 

                } else {//caso estajem com valor
                    valors.forEach(function alteraborda(item, i) {//laço de repetição que faz alteração css nos input

                        valors[i].style.borderColor = "green"
                        valors[i].style.boxShadow = "0px 0px 20px green"


                    })

                    graficododia();//chama a função grafico dia
                    aparecercampos()//chama a função que ira aparecer os inputs

                }

                break;
            case 1:

                if ((valors[0].value == "") || (valors[1].value == "") || (valors[2].value == "") ||//a condição do if é saber se os inputs estão nulos
                    (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value == "")) {

                    valors.forEach(function alteraborda(item, i) {//laço de repetição que faz alteração css nos input
                        if (valors[i].value !== "") {
                            valors[i].style.borderColor = "green"
                            valors[i].style.boxShadow = "0px 0px 5px green"

                        } else {
                            valors[i].style.borderColor = "red"
                            valors[i].style.boxShadow = "0px 0px 5px red"
                        }
                    })
                    


                } else {
    
                    valors.forEach(function alteraborda(cont, i) {//laço de repetição que faz alteração css nos input

                        if (valors[i].value !== "") {
                            valors[i].style.borderColor = "green"
                            valors[i].style.boxShadow = "0px 0px 5px green"
        
                        }else{
                            valors[i].style.borderColor = "red"
                            valors[i].style.boxShadow = "0px 0px 5px red"
                        }
                    })


                    graficosemana()//chama a função grafico semana

                }
                break;
            case 2:

                if ((valors[0].value == "") || (valors[1].value == "") || (valors[2].value == "") ||//a condição do if é saber se os inputs estão nulos
                    (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value == "")) {

                    valors.forEach(function alteraborda(cont, i) {//laço d repetição que faz alteração css nos input
                        if (valors[i].value !== "") {
                            valors[i].style.borderColor = "green"
                            valors[i].style.boxShadow = "0px 0px 5px green"

                        } else {
                            valors[i].style.borderColor = "red"
                            valors[i].style.boxShadow = "0px 0px 5px red"
                        }

                    })

                } else {
                   
                    arraylist.forEach(function alteraborda(cont, i) {//laço d repetição que faz alteração css nos input
                        
                        if (arraylist[i].value !== "" ) {
                            arraylist[i].style.borderColor = "green"
                            arraylist[i].style.boxShadow = "0px 0px 5px green"

        
                        }else{

                            arraylist[i].style.borderColor="red"
                            arraylist[i].style.boxShadow = "0px 0px 5px red"
        

                        }
                    })

                    
                    valors.forEach(function alteraborda(cont, i) {//laço d repetição que faz alteração css nos input
                        if (valors[i].value !== "") {
                            valors[i].style.borderColor = "green"
                            valors[i].style.boxShadow = "0px 0px 5px green"

                        } else {
                            valors[i].style.borderColor = "red"
                            valors[i].style.boxShadow = "0px 0px 5px red"
                        }

                    })

                    

                    graficomes();//chama a função grafico semana
                    aparecercampos()


                }
                break;
            default:
                break;
        }
    }
}



function sumirmodal() {//função que faz modal desaparecer

    modalcont.style.display = "none"

}


function graficododia() {

    graficodia.data.datasets[0].label = "Grafico do dia"//esta mudando o nome do grafico
    graficodia.data.labels = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],//esta mudando o nome das barras do grafico
        graficodia.data.datasets[0].data = [valors[0].value, valors[1].value, valors[2].value,
        valors[3].value, valors[4].value, valors[5].value, valors[6].value];//esta colocando mais elementos no array do grafico (mais barras sendo adicionada)
    graficodia.update()//função da biblioteca para atualizar o grafico

    arraylist.forEach(function (intem, i) {//esse forEach ira foça sempre que os inputs criado pelo javascrypt ira sempre parecer assim que a função graficomes for chamada

        arraylist[i].style.display = "none"//manipulação javascrypt

    })

}
function graficosemana() {
    graficodia.data.datasets[0].label = "Graficos da semana"//esta mudando o nome do grafico
    graficodia.data.labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],//esta mudando o nome das barras do grafico

        graficodia.data.datasets[0].data = [valors[0].value, valors[1].value, valors[2].value,//esta atualizando o array do grafico (reduzindo as barras)
        valors[3].value];
    graficodia.update()//função da biblioteca para atualizar o grafico

    for (let cont = 4; cont < valors.length; cont++) {

        valors[cont].style.display = "none"//manipulação css para o array que a variavel valors que tem quereSelectorAll
    }

    arraylist.forEach(function (intem, i) {//esse forEach ira foça sempre que os inputs criado pelo javascrypt ira sempre parecer assim que a função graficomes for chamada

        arraylist[i].style.display = "none"//manipulação javascrypt

    })

}
function graficomes() {


   if (arraylist.length < 5) {//condição que aassegura que o array ira ser criados um unica vez.   
        for (let contnum = 0; contnum <= 5; contnum++) {//laço de uma a 5

            let inputcamp = document.createElement("input");//criando um elemeto HTMl pela função createElement (elemento input)
            inputcamp.type = "number";//passando o tipo de input
            inputcamp.className = "inputvalor";//atribuido classe
            inputcamp.style.marginRight = "4px"//atribuido css
            inputcamp.style.marginTop = "4px"//atribuido css
            inputcamp.placeholder = "$:" 
            inputcamp.style.borderColor="red"
            inputcamp.style.boxShadow = "0px 0px 5px red"
            arraylist.push(inputcamp)//passando o elemento criado peara a função

            divvalores.appendChild(inputcamp);//crindo o input

        }
    }

    arraylist.forEach(function(item,cont){//função que faz os input do grafico mes aparecer
        arraylist[cont].style.display="inline-block"
    })

  

    graficodia.data.datasets[0].label = "Grafico do Ano"
    graficodia.data.labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    graficodia.data.datasets[0].data = [valors[0].value, valors[1].value, valors[2].value,
    valors[3].value, valors[4].value, valors[5].value, valors[6].value, arraylist[0].value, arraylist[1].value, arraylist[3].value, arraylist[4].value, arraylist[5].value];
    graficodia.update()


}

function aparecercampos() {//essa função ira fazer aparecer os inputs da variavel valors que sumiram.

    valors.forEach(function (item, cont) {

        valors[cont].style.display = "inline-block";

    })



}
function zeravalor() {//função que ira zera os valores do input

    graficodia.data.datasets[0].data = [valors[0].value, valors[1].value, valors[2].value,
    valors[3].value, valors[4].value, valors[5].value, valors[6].value, arraylist[0].value, arraylist[1].value, arraylist[3].value, arraylist[4].value, arraylist[5].value];

    valors.forEach(function (cont, i) {
        valors[i].value = 0
        
    })


    arraylist.forEach(function (cont, i) {

        arraylist[i].value = 0

    })

    graficodia.update()


}
