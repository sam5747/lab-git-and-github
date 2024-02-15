const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = parseInt(document.getElementById('number-input1').value);

  if (numberInput1 < 0 || numberInput1 > 100) {
    message1 = "This is not possible. An error has occurred.";
  } else if (numberInput1 <= 19) {
    message1 = "That was a terrible score!";
  } else if (numberInput1 <= 39) {
    message1 = "You know some things. Needs improvement.";
  } else if (numberInput1 <= 69) {
    message1 = "You did a passable job, not bad!";
  } else if (numberInput1 <= 89) {
    message1 = "That’s a great score. You really know your stuff.";
  } else {
    message1 = "What an amazing score!";
  }

  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = parseInt(document.getElementById('number-input2').value);
  let scoreRange = '';

  if (numberInput2 < 0 || numberInput2 > 100) {
    scoreRange = 'error';
  } else if (numberInput2 <= 19) {
    scoreRange = '0-19';
  } else if (numberInput2 <= 39) {
    scoreRange = '20-39';
  } else if (numberInput2 <= 69) {
    scoreRange = '40-69';
  } else if (numberInput2 <= 89) {
    scoreRange = '70-89';
  } else {
    scoreRange = '90-100';
  }

  switch (scoreRange) {
    case 'error':
      message2 = "This is not possible. An error has occurred.";
      break;
    case '0-19':
      message2 = "That was a terrible score!";
      break;
    case '20-39':
      message2 = "You know some things. Needs improvement.";
      break;
    case '40-69':
      message2 = "You did a passable job, not bad!";
      break;
    case '70-89':
      message2 = "That’s a great score. You really know your stuff.";
      break;
    case '90-100':
      message2 = "What an amazing score!";
      break;
    default:
      message2 = "Invalid input.";
      break;
  }

  commentContainer2.innerHTML = message2;
};
