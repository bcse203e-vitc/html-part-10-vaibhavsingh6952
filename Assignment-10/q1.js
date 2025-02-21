let cno;
let no;

while(guess !== cno){
    no = parseInt(prompt("Guess a number bw 1 to 50: "));
    if(no !== cno){
        alert("Wrong guess! Try again.");
    }
}

alert("Congratulations! You guessed the correct number.");


do {
  no = parseInt(prompt("Guess a number bw 1 to 50:"));
  if (no !== cno) {
    alert("Wrong guess! Try again.");
  }
} while (no !== cno);

alert("Congratulations! You guessed the correct number.");
