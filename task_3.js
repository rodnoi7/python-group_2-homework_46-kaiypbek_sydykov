let answer = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?", )

function riddle(answer) {
	if (answer == 5 || answer =='пять') {
		return alert('You win!!!')
	}
	else {
		return alert('You lose...')
	}
}

riddle(answer)