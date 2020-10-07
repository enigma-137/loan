document.getElementById('load-form').addEventListener('submit', function (e) {
  //hide ressult
  document.getElementById('results').style.display = 'none';
  //hide loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 5000);
  e.preventDefault();
});

let userName = prompt(`WelCome schorlar, Please What's your name?`);

//calculating results
function calculateResults(e) {
  console.log('calculating.......');
  // Ui VARS
  //Input
  const jambScore = document.getElementById('input-utme').value;
  const score1 = document.getElementById('score-1').value;
  const score2 = document.getElementById('score-2').value;
  const score3 = document.getElementById('score-3').value;
  const score4 = document.getElementById('score-4').value;
  const score5 = document.getElementById('score-5').value;
  //OUTPUT
  const jambOutput = document.getElementById('output-utme');
  const waecOutput = document.getElementById('output-waec');
  const totalOutput = document.getElementById('total-value');
  const highMsg = document.getElementById('high-msg');
  const lowMsg = document.getElementById('low-msg');
  const personName = document.querySelector('.name');
  const total =
    Number(score1) +
    Number(score2) +
    Number(score3) +
    Number(score4) +
    Number(score5);

  //  const main = score1 + score2 + score3 + score4 + score5;
  //  const total = Number(main);
  personName.textContent = userName;

  if (isFinite(jambScore)) {
    let score = jambScore / 8;
    waecOutput.value = total;
    let numb = score + total;
    jambOutput.value = score;
    totalOutput.value = numb;

    if (numb > 40) {
      highMsg.style.display = 'block';
      lowMsg.style.display = 'none';
      highMsg.style.color = 'green';
    } else {
      lowMsg.style.display = 'block';
      highMsg.style.display = 'none';
      lowMsg.style.color = 'blue';
    }

    // console.log(waecOutput);
    document.getElementById('results').style.display = 'block';
    //hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    //console.log('please check your number')
    showError('please check your number');
  }
}

//erroe

function showError(error) {
  //hide error during error display
  document.getElementById('results').style.display = 'none';
  //hide loader
  document.getElementById('loading').style.display = 'none';
  // create the error element
  const errorDiv = document.createElement('div');

  //get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //add a class
  errorDiv.className = 'alert alert-danger';
  //append created element to text node
  errorDiv.appendChild(document.createTextNode(error));
  // insert it before header
  card.insertBefore(errorDiv, heading);

  //clear error timeout

  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector('.alert').remove();
}
