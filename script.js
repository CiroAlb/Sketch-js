const containerDiv  = document.getElementById('main-container');
containerDiv.style.margin = '0';
containerDiv.style.height = '100vh';
containerDiv.style.width = '100%';
containerDiv.style.backgroundColor = 'blue'

const quantityButton = document.createElement("button");
quantityButton.textContent = "Ingrese tamaño de grilla";
containerDiv.appendChild(quantityButton);
quantityButton.style.display = 'block';

const gridDiv = document.createElement("div");
containerDiv.appendChild(gridDiv);
gridDiv.style.display = "block";


quantityButton.addEventListener('click', function foo (){
    let inputNumber = prompt('ingrese numero',0);
    inputNumber = Number(inputNumber);
    if(inputNumber > 100){foo()};

    gridDiv.innerHTML = '';
    gridDiv.appendChild(quantityButton);

     // Obtener el tamaño del contenedor
     const containerSize = containerDiv.clientHeight;
 
     // Calcular el tamaño de cada celda
     const cellSize = (containerSize / inputNumber);

    for (let i = 0 ; i < inputNumber ; i++){
        const columnDiv = document.createElement('div');
        columnDiv.style.backgroundColor = 'green';
        columnDiv.style.display = 'flex';
        gridDiv.appendChild(columnDiv);
        for (let j = 0 ; j < inputNumber ; j++){
            const divArray = document.createElement("div");
            divArray.textContent = `${i},${j}`;
            divArray.style.width = `${cellSize}px`;
            divArray.style.height = `${cellSize}px`;
            divArray.style.backgroundColor = "red";
            divArray.style.display = "inline-block";
            divArray.style.margin = '1px'
            columnDiv.appendChild(divArray);

            divArray.addEventListener('mouseover', () => {
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                const rgb = `rgb(${r} ${g} ${b})`;
                divArray.style.backgroundColor = `${rgb}`;
            })
            let opacityVar = 0;
            divArray.addEventListener('click', () => {
                opacityVar = opacityVar + 0.1;
                divArray.style.opacity = opacityVar;
            })
        }
        
    }

} )





