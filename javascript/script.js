
let buttons = document.querySelectorAll("button.button");//variavel recebe todas tags com a classa button
let intro = document.querySelector("div#bemvindo")//texto com instruções

let grafico = document.querySelector("div.container")//é a div que guarda o grafico
let divvalores=document.querySelector("div.valores")//div que quarda os inputs
let valors = document.querySelectorAll("input.inputvalor")//todos os inputs atravez de querySelectorAll
let graficozera=document.querySelector("button#zeravalor")
graficozera.addEventListener('click' , zeravalor)
let arraylist=[];//array que vai receber os inputs criados pelo java scrypt

const ctx = document.getElementById('chart').getContext('2d');//esse é grafico biblioteca chart.js
const graficodia = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
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
                    (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value=="")) {
                    window.alert("Insira valores no campos valor")

                } else {//caso estajem com valor
                    intro.style.display = "none"//manipulação css faz que oculta a introdução
                    grafico.style.display="block"//manipulação css faz aparecer o display 
                    
                   graficododia();//chama a função grafico dia
                   aparecercampos()//chama a função que ira aparecer os inputs

                }
                break;
            case 1:

                if ((valors[0].value == "") || (valors[1].value == "") || (valors[2].value == "") ||//a condição do if é saber se os inputs estão nulos
                    (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value=="")) {
                    window.alert("Insira valores no campos valor")

                } else {
                    intro.style.display = "none"//manipulação css faz que oculta a introdução
                    grafico.style.display="block"//chama a função que ira aparecer os inputs
                    
                   graficosemana()//chama a função grafico semana

                }
                break;
            case 2:

                if ((valors[0].value == "") || (valors[1].value == "") || (valors[2].value == "") ||//a condição do if é saber se os inputs estão nulos
                (valors[3].value == "") || (valors[4].value == "") || (valors[5].value == "") || (valors[6].value=="")) {
                 window.alert("Insira valores no campos valor")
            } else {
                intro.style.display = "none"//manipulação css faz que oculta a introdução
                grafico.style.display="block"//chama a função que ira aparecer os inputs
                
                graficomes();//chama a função grafico semana

    
            }
            break;
            default:
            break;
        }
    }
}

function graficododia(){

    graficodia.data.datasets[0].label="Grafico do dia"//esta mudando o nome do grafico
    graficodia.data.labels=['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],//esta mudando o nome das barras do grafico
    graficodia.data.datasets[0].data=[valors[0].value, valors[1].value, valors[2].value, 
    valors[3].value, valors[4].value, valors[5].value,valors[6].value];//esta colocando mais elementos no array do grafico (mais barras sendo adicionada)
    graficodia.update()//função da biblioteca para atualizar o grafico

    for(let cont=0;cont<arraylist.length;cont++){//nesse array ira ocultar os inputs que foram criados pelo java scripty 
        arraylist[cont].style.display="none"//manipulação css para o array que recebe os inputs criados pelo java scripty
    }

}
function graficosemana(){
    graficodia.data.datasets[0].label="Graficos da semana"//esta mudando o nome do grafico
    graficodia.data.labels=['Semana 1','Semana 2', 'Semana 3', 'Semana 4'],//esta mudando o nome das barras do grafico

    graficodia.data.datasets[0].data=[valors[0].value, valors[1].value, valors[2].value,//esta atualizando o array do grafico (reduzindo as barras)
    valors[3].value];
    graficodia.update()//função da biblioteca para atualizar o grafico

    for(let cont=4;cont<valors.length ;cont++){

        valors[cont].style.display="none"//manipulação css para o array que a variavel valors que tem quereSelectorAll
    }
    for(let cont=0;cont<arraylist.length;cont++){//nesse array ira ocultar os inputs que foram criados pelo java scripty 
        arraylist[cont].style.display="none"//manipulação css para o array que recebe os inputs criados pelo java scripty
    }    
}
function graficomes(){

    for(let cont=0;cont<arraylist.length;cont++){//esse laço ira foça sempre que os inputs criado pelo javascrypt ira sempre parecer assim que a função graficomes for chamada

        arraylist[cont].style.display="inline-block"//manipulação javascrypt
    }

    if(arraylist.length<5){//condição que aassegura que o array ira ser criados um unica vez.

        for(let contnum=0;contnum<=5;contnum++){//laço de uma a 5

            let inputcamp=document.createElement("input");//criando um elemeto HTMl pela função createElement (elemento input)
            inputcamp.type="number";//passando o tipo de input
            inputcamp.className="inputvalor";//atribuido classe
            inputcamp.style.marginRight="4px"//atribuido css
            inputcamp.style.marginTop="4px"//atribuido css
            inputcamp.placeholder="$:"

            arraylist.push(inputcamp)//passando o elemento criado peara a função
            
            divvalores.appendChild(inputcamp);//crindo o input

        }
    }

    graficodia.data.datasets[0].label="Grafico do Ano"
    graficodia.data.labels=['Jan','Fev', 'Mar', 'Abr', 'Maio', 'Jun','Jul','Ago','Set','Out','Nov','Dez'],
    graficodia.data.datasets[0].data=[valors[0].value, valors[1].value, valors[2].value, 
    valors[3].value, valors[4].value, valors[5].value,valors[6].value, arraylist[0].value, arraylist[1].value, arraylist[3].value, arraylist[4].value,arraylist[5].value];
    graficodia.update()

}

function aparecercampos(){//essa função ira fazer aparecer os inputs da variavel valors que sumiram.
    for(numconta=0;numconta<=valors.length;numconta++){
        valors[numconta].style.display = "inline-block";
    }
   
}  
function zeravalor(){
   
    graficodia.data.datasets[0].data=[valors[0].value, valors[1].value, valors[2].value, 
    valors[3].value, valors[4].value, valors[5].value,valors[6].value, arraylist[0].value, arraylist[1].value, arraylist[3].value, arraylist[4].value,arraylist[5].value];
    
    for(let cont=0;cont<=7;cont++){
        valors[cont].value=0
        arraylist[cont].value=0
    }
    
    
  
    
    graficodia.update()
   

}
