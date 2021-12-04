let questionsData = {
    q1: {
        desc: "What color is the sky?",
        answers: ["Blue", "Yellow", "Green"],
        trueAnswer: "A"
    },
    q2: {
        desc: "What do you call people who are 18+ ?",
        answers: ["Baby", "Adult", "Person"],
        trueAnswer: "B"
    },
    q3: {
        desc: "What color is the tree?",
        answers: ["Red", "Brown", "Green"],
        trueAnswer: "C"
    },
    q4: {
        desc: "What do you call someone who has a wife?",
        answers: ["Wife", "Husband", "Married"],
        trueAnswer: "B"
    },
    q5: {
        desc: "Which is the most us level in English?",
        answers: ["B1", "C2", "A2"],
        trueAnswer: "B"
    }
}

class ReactComponent {
    //Dom elements
    questionnum = document.querySelector('#questionnum')
    questionheading = document.querySelector('#questionheading')
    questionlist = document.querySelector('#questionlist')
    answer1 = document.querySelector('#score')
}


class Question extends ReactComponent {
    suallar = [];
    uservariant = null;
    suallarindeksi = 0;
    qelebe = 0;

    constructor(obj) {
        super()
        this.suallar = Object.values(obj)
    }
    userSelect(userinsecdiyivariant) {
        if ('abc'.indexOf(userinsecdiyivariant) === -1) {

            alert('Klavyede A B C cariantlarindan birini secin')
            return
        }


        this.uservariant = userinsecdiyivariant.toUpperCase();

        this.nextQuestion()

    }
    showQues() {
        if (!this.suallar[this.suallarindeksi]) {
            this.answer1.innerHTML = `Oyun bitdi,sizin xalınız: ${this.qelebe} xal`;
            this.answer1.classList.add('text-danger')
        }
        this.questionheading.innerHTML = this.suallar[this.suallarindeksi].desc;
        this.questionnum.innerHTML = `Question ${this.suallarindeksi+1}`;
        this.questionnum.classList.remove('text-dark');
        this.questionnum.classList.add('text-info');
        this.questionheading.classList.add('text-success');
        let answers = this.suallar[this.suallarindeksi] && this.suallar[this.suallarindeksi].answers
        console.log(answers);
        this.questionlist.innerHTML = answers.map((answer, index) => `
        <div class="col">
            <div class="card" id="card${index}">
                <div class="card-header h4  bg-dark text-white">
                    ${index === 0 ? 'A)' : ''} 
                    ${index === 1 ? 'B)' : ''} 
                    ${index === 2 ? 'C)' : ''} 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item h5">${answer}</li>
                </ul>
            </div>
        </div>   
    `).join('')

    }

    nextQuestion() {
        let trueanswer = this.suallar[this.suallarindeksi].trueAnswer;

        console.log(this.uservariant);
        console.log(trueanswer);





        if (trueanswer === this.uservariant) {
            console.log('Duz tapdiz');

            this.qelebe += 20;
            alert(`Tebrikler:Cavab dogrudur,Variant ${this.uservariant},Sizin xaliniz ${this.qelebe} xal`)






        } else {
            console.log('Sehv tapdiz')
            alert(`Teessuf:Cavab sehvdir, duzgun variant ${trueanswer}`)



        }

        this.suallarindeksi++;

        this.showQues()
    }

}

let que = new Question(questionsData)
que.showQues()



window.onkeydown = function(event) {
    que.userSelect(event.key);
}