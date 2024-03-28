function desenharTabuleiro(container){
    var tabela = document.createElement('table');

    var linha1 = document.createElement('tr');
    var linha2 = document.createElement('tr');
    var linha3 = document.createElement('tr');

    var coluna1_1 = document.createElement('td');
    var coluna1_2 = document.createElement('td');
    var coluna1_3 = document.createElement('td');

    var coluna2_1 = document.createElement('td');
    var coluna2_2 = document.createElement('td');
    var coluna2_3 = document.createElement('td');

    var coluna3_1 = document.createElement('td');
    var coluna3_2 = document.createElement('td');
    var coluna3_3 = document.createElement('td');

    tabela.id='tabela';

    coluna1_1.id='coluna1_1';
    coluna1_1.innerText='1';

    coluna2_1.id='coluna2_1';
    coluna2_1.innerText='2';

    coluna3_1.id='coluna3_1';
    coluna3_1.innerText='3';


    coluna1_2.id='coluna1_2';
    coluna1_2.innerText='4';

    coluna2_2.id='coluna2_2';
    coluna2_2.innerText='5';

    coluna3_2.id='coluna3_2';
    coluna3_2.innerText='6';


    coluna1_3.id='coluna1_3';
    coluna1_3.innerText='7';

    coluna2_3.id='coluna2_3';
    coluna2_3.innerText='8';

    coluna3_3.id='coluna3_3';
    coluna3_3.innerText='';

    linha1.appendChild(coluna1_1);
    linha1.appendChild(coluna2_1);
    linha1.appendChild(coluna3_1);

    linha2.appendChild(coluna1_2);
    linha2.appendChild(coluna2_2);
    linha2.appendChild(coluna3_2);

    linha3.appendChild(coluna1_3);
    linha3.appendChild(coluna2_3);
    linha3.appendChild(coluna3_3);

    tabela.appendChild(linha1);
    tabela.appendChild(linha2);
    tabela.appendChild(linha3);

    container.appendChild(tabela);

}

window.addEventListener('load',()=>{
    var tabuleiro = document.getElementById("tabuleiro");
    desenharTabuleiro(container);

    var 

});