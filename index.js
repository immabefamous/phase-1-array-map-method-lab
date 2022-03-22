const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    let answer = tutorials.map((element) => {
      let sentencesplit = element.split(" ");
      let capWords = sentencesplit.map((splitWords) => splitWords.substring(0, 1).toUpperCase() + splitWords.substring(1, splitWords.length));
       return capWords.join(" ");
    })
      return answer
    }
  
  
