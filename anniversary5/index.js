const showWrongAnswer = (inputElement) => {
    inputElement.classList.add('wrong-answer');

    setTimeout(() => {
        inputElement.classList.remove('wrong-answer');
    }, 400);
}

const initialisePuzzle = (answerButtonId, answerInputId, successEndpoint, test) => {
    const answerButton = document.getElementById(answerButtonId);
    const answerInput = document.getElementById(answerInputId);

    const onAnswerSubmit = event => {
        event.preventDefault();

        const answer = answerInput.value;
        if (test(answer)) {
            window.location.href = successEndpoint;
            return;
        }

        showWrongAnswer(answerInput);
        answerInput.value = '';
        answerInput.focus();
    };



    answerButton.addEventListener('click', onAnswerSubmit);
    answerInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            onAnswerSubmit(event);
        }
    });

    answerInput.focus();
}