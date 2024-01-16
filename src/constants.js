const store = {
    questions: [
        {
            questionNumber: '1 вопрос',
            points: '3',
            question: 'Сколько дней в неделе?',
            optionA: '10',
            optionB: '14',
            optionC: '5',
            optionD: '7',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '1',
            link: '/2',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '2 вопрос',
            points: '2',
            question: 'вопрос без ответа',
            optionA: '1',
            optionB: '2',
            optionC: '3',
            optionD: '4',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/2',
            link: '/3',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '3 вопрос',
            points: '4',
            question: 'воспрос 3?',
            optionA: '1',
            optionB: '2',
            optionC: '3',
            optionD: '4',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/3',
            link: '/4',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '4 вопрос',
            points: '3',
            question: 'вопрос 4?',
            optionA: '1',
            optionB: '2',
            optionC: '3',
            optionD: '4',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/4',
            link: '/5',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '5 вопрос',
            points: '1',
            question: 'вопрос 5?',
            optionA: '1',
            optionB: '2',
            optionC: '3',
            optionD: '4',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/5',
            link: '/6',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '6 вопрос',
            points: '5',
            question: 'вопсрос 6?',
            optionA: 'River Nile',
            optionB: 'Long River',
            optionC: 'River Niger',
            optionD: 'Lake Chad',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/6',
            link: '/7',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '7 вопрос',
            points: '3',
            question: '_____ is the hottest Continent on Earth ?',
            optionA: 'Oceania',
            optionB: 'Antarctica',
            optionC: 'Africa',
            optionD: 'North America',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/7',
            link: '/8',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '8 вопрос',
            points: '1',
            question: 'Which country is the largest in the world ?',
            optionA: 'Russia',
            optionB: 'Canada',
            optionC: 'Africa',
            optionD: 'Egypt',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/8',
            link: '/9',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '9 вопрос',
            points: '100',
            question: 'Which of these numbers is an odd number ?',
            optionA: 'Ten',
            optionB: 'Twelve',
            optionC: 'Eight',
            optionD: 'Eleven',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/9',
            link: '/10',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '10 вопрос',
            points: '4',
            question: `You Can't see me' is a popular saying by`,
            optionA: 'Eminem',
            optionB: 'Bill Gates',
            optionC: 'Chris Brown',
            optionD: 'John Cena',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/10',
            link: '/11',
            next: 'Отправить ответ'
        },

        {
            questionNumber: '11 вопрос',
            points: '3',
            question: 'Where is the world tallest building located ?',
            optionA: 'Africa',
            optionB: 'California',
            optionC: 'Dubai',
            optionD: 'Italy',
            valueA: 'yes',
            valueB: 'no',
            valueC: 'no',
            valueD: 'no',
            path: '/11',
            link: '/result',
            next: 'Завершить тест'
        }
    ]
};

export  {store}
