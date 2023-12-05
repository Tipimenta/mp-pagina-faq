const faqs = [
    {
        question: 'Como faço para redefinir minha senha?',
        answer: 'Você pode redefinir sua senha clicando em "Esqueceu sua senha" na página de login.',
    },
    {
        question: 'Quais são os métodos de pagamento aceitos?',
        answer: 'Aceitamos Visa, MasterCard, American Express e Paylpal',
    }, 
    {
        question: 'Qual é a política de reembolso',
        answer: 'Oferecemos reebolso total até 30 dias após a compra.',
    },
    {
        question: 'Como entro em contato com o suporte?',
        answer: 'Você pode nos contatar pelo e-mail, telefone ou chat ao vivo.',
    },
];

function toogleAnswer(event){
    const questionCard = event.currentTarget;

    const answer = questionCard.querySelector('.answer');
    const icon = questionCard.querySelector('.icon');
    if(answer.classList.contains("open"))
    {
        answer.classList.remove("open");
        icon.classList.remove("open")
    } else {
        answer.classList.add("open");
        icon.classList.add("open");
    }
}

window.onload = function() {

    const questions = document.querySelector(".questions");
    const questionTemplate = document.querySelector("#question-cards");

    faqs.forEach((faq) => {
        const newfaq = document.importNode(questionTemplate.content, true);

        newfaq.querySelector('.question-text').textContent = faq.question;
        newfaq.querySelector('.answer').textContent = faq.answer;

        newfaq.querySelector('.question-card').addEventListener('click', toogleAnswer);

        questions.appendChild(newfaq);
    });
};