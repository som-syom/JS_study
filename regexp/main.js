const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http:://localhost:1234
가나다라 
`;

// const regexp = new RegExp("the", "gi");
// const regexp = /the/gi;
// console.log(regexp.test(str));
// console.log(str.match(/\bf\w{1,}\b/g)); // f로 시작하는 모든 영단어

// const h = `  the hello  world		!

// `;
// console.log(h.replace(/\s/g, "")); // 공백 없애기

console.log(str.match(/(?<=@).{1,}/g));
