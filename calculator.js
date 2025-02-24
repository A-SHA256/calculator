const table = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, 'C', '=', '+'],
];

// Var for stocking result of expression
let result = '';

// Creating parent container
const mainDiv = document.createElement('div');
mainDiv.classList.add('calculator');

//Creating display for numbers
const display = document.createElement('input');
display.classList.add('display');
mainDiv.append(display);
display.disabled = true;
display.setAttribute('placeholder', '0');

//Adding child containers to main container - rows of calculator
const container = table.forEach((row) => {
  //console.log(row);

  const line = document.createElement('div');
  line.classList.add('row');
  mainDiv.append(line);
  console.log(line, 'line div');

  //Adding buttons with numbers to row-containers
  row.forEach((char) => {
    //console.log(char);

    let btnElement = document.createElement('button');
    btnElement.innerText = `${char}`;

    //btnElement.addEventListener('click');

    // Adding event listener to the button
    btnElement.addEventListener('click', (event) => {
      if (event.target.innerText === '=') {
        result = eval(display.value);

        //console.log(result);

        display.value = Number(result);
      } else if (event.target.innerText === 'C') {
        display.value = null;
      } else {
        display.value += btnElement.innerText;
      }

      return display.value;
    });

    //console.log(btnElement);
    line.append(btnElement);
  });
});

//console.log(mainDiv.innerHTML, 'main div');

document.body.append(mainDiv);

//console.log(line.innerHTML, 'line div');
