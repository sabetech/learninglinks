/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
    
	var level1Numeracy = 
{  
 	2001:{
  	question_tag: "L1MALP1QG",
   code: "2001",
   title: "Maths Class Q1",
   learner_question: "How many? ($ $ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
  	question: "How many do you see? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! $ $ $ $ -4",
  	incorrectAnswerResponse: "Incorrect. $ $ $ $ -4",
  	set: 1
  	},

 	2002:{
  	question_tag: "L1MALP1Q1",
   code: "2002",
   title: "Maths Q1",
   learner_question: "How many? ($ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! $ $ $ -3",
  	incorrectAnswerResponse: "Incorrect. $ $ $ -3",
  	set: 1
  	},

 	2003:{
  	question_tag: "L1MALP1Q2",
   code: "2003",
   title: "Maths Q2",
   learner_question: "How many? ($ $ $ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! $ $ $ $ $-5",
  	incorrectAnswerResponse: "Incorrect. $ $ $ $ $-5",
  	set: 1
  	},

 	2004:{
  	question_tag: "L1MALP2QG",
   code: "2004",
   title: "Maths Class Q2",
   learner_question: "How many? (@ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
  	question: "How many do you see? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (@ @ @ @ @ @) 6",
  	incorrectAnswerResponse: "Incorrect. (@ @ @ @ @ @) 6",
  	set: 2
  	},

 	2005:{
  	question_tag: "L1MALP2Q1",
   code: "2005",
   title: "Maths Q3",
   learner_question: "How many? (@ @ @ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (@ @ @ @ @ @ @ @) 8",
  	incorrectAnswerResponse: "Incorrect. (@ @ @ @ @ @ @ @) 8",
  	set: 2
  	},

 	2006:{
  	question_tag: "L1MALP2Q2",
   code: "2006",
   title: "Maths Q4",
   learner_question: "How many? (@ @ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (@ @ @ @ @ @ @) 7",
  	incorrectAnswerResponse: "Incorrect. (@ @ @ @ @ @ @) 7",
  	set: 2
  	},

 	2007:{
  	question_tag: "L1MALP3QG",
   code: "2007",
   title: "Maths Class Q3",
   learner_question: "6___7 \r\n1. < \r\n2. > \r\n3. =",
  	question: "Which symbol is missing? Greater than, less than or equals? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 6<7",
  	incorrectAnswerResponse: "Incorrect. 6<7",
  	set: 3
  	},

 	2008:{
  	question_tag: "L1MALP3Q1",
   code: "2008",
   title: "Maths Q5",
   learner_question: "6___4 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 6>4",
  	incorrectAnswerResponse: "Incorrect. 6>4",
  	set: 3
  	},

 	2009:{
  	question_tag: "L1MALP3Q2",
   code: "2009",
   title: "Maths Q6",
   learner_question: "6___6 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6=6",
  	incorrectAnswerResponse: "Incorrect. 6=6",
  	set: 3
  	},

 	2010:{
  	question_tag: "L1MALP4QG",
   code: "2010",
   title: "Maths Class Q4",
   learner_question: "How many? (I I I I I I I I I I I I I I) \r\n1. 10 \r\n2. 14 \r\n3. 20",
  	question: "How many lines? (I I I I I I I I I I I I I I) Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (I I I I I I I I I I I I I I) 14",
  	incorrectAnswerResponse: "Incorrect. (I I I I I I I I I I I I I I) 14",
  	set: 4
  	},

 	2011:{
  	question_tag: "L1MALP4Q1",
   code: "2011",
   title: "Maths Q7",
   learner_question: "How many? (I I I I I I I I I I ) \r\n1. 10 \r\n2. 14 \r\n3. 20",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (I I I I I I I I I I ) 10",
  	incorrectAnswerResponse: "Incorrect. (I I I I I I I I I I ) 10",
  	set: 4
  	},

 	2012:{
  	question_tag: "L1MALP4Q2",
   code: "2012",
   title: "Maths Q8",
   learner_question: "13___20 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 13 < 20",
  	incorrectAnswerResponse: "Incorrect. 13 < 20",
  	set: 4
  	},

 	2013:{
  	question_tag: "L1MALP5QG",
   code: "2013",
   title: "Maths Class Q5",
   learner_question: "11, 12, ____, 14, 15 \r\n1. 10 \r\n2. 13 \r\n3. 20",
  	question: "Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 11, 12, 13, 14, 15.",
  	incorrectAnswerResponse: "Incorrect. 11, 12, 13, 14, 15.",
  	set: 5
  	},

 	2014:{
  	question_tag: "L1MALP5Q1",
   code: "2014",
   title: "Maths Q9",
   learner_question: "17,18,____,20 \r\n1. 16 \r\n2. 19 \r\n3. 22",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 17,18, 19, 20.",
  	incorrectAnswerResponse: "Incorrect. 17,18, 19, 20.",
  	set: 5
  	},

 	2015:{
  	question_tag: "L1MALP5Q2",
   code: "2015",
   title: "Maths Q10",
   learner_question: "18, 17, 16, ___, 14 \r\n1. 20 \r\n2. 15 \r\n3. 13",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18, 17, 16, 15, 14",
  	incorrectAnswerResponse: "Incorrect. 18, 17, 16, 15, 14",
  	set: 5
  	},

 	2016:{
  	question_tag: "L1MALP6QG",
   code: "2016",
   title: "Maths Class Q6",
   learner_question: "2, 4, ___, 8, 10 \r\n1. 5 \r\n2. 6 \r\n3. 7",
  	question: "Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2,4,6,8,10.",
  	incorrectAnswerResponse: "Incorrect. 2,4,6,8,10.",
  	set: 6
  	},

 	2017:{
  	question_tag: "L1MALP6Q1",
   code: "2017",
   title: "Maths Q11",
   learner_question: "10, 12, ___, 16, 18 \r\n1. 13 \r\n2. 14 \r\n3. 15",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 10,12, 14, 16.",
  	incorrectAnswerResponse: "Incorrect. 10,12, 14, 16.",
  	set: 6
  	},

 	2018:{
  	question_tag: "L1MALP6Q2",
   code: "2018",
   title: "Maths Q12",
   learner_question: "8,___, 12, 14 \r\n1. 9 \r\n2. 10 \r\n3. 11",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 8, 10, 12, 14.",
  	incorrectAnswerResponse: "Incorrect. 8, 10, 12, 14.",
  	set: 6
  	},

 	2019:{
  	question_tag: "L1MALP7QG",
   code: "2019",
   title: "Maths Class Q7",
   learner_question: "$5, $1, $1= ? \r\n1. $7 \r\n2. $8 \r\n3. $9",
  	question: "How much money? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! $7",
  	incorrectAnswerResponse: "Incorrect. $7",
  	set: 7
  	},

 	2020:{
  	question_tag: "L1MALP7Q1",
   code: "2020",
   title: "Maths Q13",
   learner_question: "$1, $10=? \r\n1. $9 \r\n2. $110 \r\n3. $11",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! $11",
  	incorrectAnswerResponse: "Incorrect. $11",
  	set: 7
  	},

 	2021:{
  	question_tag: "L1MALP7Q2",
   code: "2021",
   title: "Maths Q14",
   learner_question: "$1, $5, $5=? \r\n1. $155 \r\n2. $6 \r\n3. 11",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! $11",
  	incorrectAnswerResponse: "Incorrect. $11",
  	set: 7
  	},

 	2022:{
  	question_tag: "L1MALP8QG",
   code: "2022",
   title: "Maths Class Q8",
   learner_question: "88, 89, ___, 91, 92 \r\n1. 80 \r\n2. 87 \r\n3. 90",
  	question: "Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 88,89,90,91,92",
  	incorrectAnswerResponse: "Incorrect. 88,89,90,91,92",
  	set: 8
  	},

 	2023:{
  	question_tag: "L1MALP8Q1",
   code: "2023",
   title: "Maths Q15",
   learner_question: "77, 78, 79 ___ \r\n1. 80 \r\n2. 70 \r\n3. 81",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 77,78,79,80",
  	incorrectAnswerResponse: "Incorrect. 77,78,79,80",
  	set: 8
  	},

 	2024:{
  	question_tag: "L1MALP8Q2",
   code: "2024",
   title: "Maths Q16",
   learner_question: "95, 94, ___, 92, 91 \r\n1. 93 \r\n2. 95 \r\n3. 90",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 95, 94, 93, 92, 91",
  	incorrectAnswerResponse: "Incorrect. 95, 94, 93, 92, 91",
  	set: 8
  	},

 	2025:{
  	question_tag: "L1MALP9QG",
   code: "2025",
   title: "Maths Class Q9",
   learner_question: "38 ___ 63 \r\n1. < \r\n2. > \r\n3. =",
  	question: "Which symbol is missing? Greater than, less than or equals? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 38 <63",
  	incorrectAnswerResponse: "Incorrect. 38 <63",
  	set: 9
  	},

 	2026:{
  	question_tag: "L1MALP9Q1",
   code: "2026",
   title: "Maths Q17",
   learner_question: "91___88 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 91 > 88",
  	incorrectAnswerResponse: "Incorrect. 91 > 88",
  	set: 9
  	},

 	2027:{
  	question_tag: "L1MALPQ2",
   code: "2027",
   title: "Maths Q18",
   learner_question: "19___31 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 19 < 31",
  	incorrectAnswerResponse: "Incorrect. 19 < 31",
  	set: 9
  	},

 	2028:{
  	question_tag: "L1MALP10QG",
   code: "2028",
   title: "Maths Class Q10",
   learner_question: "9 ___ 61 \r\n1. < \r\n2. > \r\n3. =",
  	question: "Which symbol is missing? Greater than, less than or equals? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 9 < 61",
  	incorrectAnswerResponse: "Incorrect. 9 < 61",
  	set: 10
  	},

 	2029:{
  	question_tag: "L1MALP10Q1",
   code: "2029",
   title: "Maths Q19",
   learner_question: "83___80 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 83 > 80",
  	incorrectAnswerResponse: "Incorrect. 83 > 80",
  	set: 10
  	},

 	2030:{
  	question_tag: "L1MALP10Q2",
   code: "2030",
   title: "Maths Q20",
   learner_question: "19___91 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 19 < 91",
  	incorrectAnswerResponse: "Incorrect. 19 < 91",
  	set: 10
  	},

 	2031:{
  	question_tag: "L1MALP11QG",
   code: "2031",
   title: "Maths Class Q11",
   learner_question: "5, 10, ___, 20, 25 \r\n1. 11 \r\n2. 15 \r\n3. 19",
  	question: "Say: Skip count by 5. Which number is missing?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 5, 10, 15, 20, 25",
  	incorrectAnswerResponse: "Incorrect. 5, 10, 15, 20, 25",
  	set: 11
  	},

 	2032:{
  	question_tag: "L1MALP11Q1",
   code: "2032",
   title: "Maths Q21",
   learner_question: "25,30, ___, 40, 45 \r\n1. 31 \r\n2. 35 \r\n3. 39",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 25, 30, 35, 40, 45",
  	incorrectAnswerResponse: "Incorrect. 25, 30, 35, 40, 45",
  	set: 11
  	},

 	2033:{
  	question_tag: "L1MALP11Q2",
   code: "2033",
   title: "Maths Q22",
   learner_question: "10, 20, ___, 40, 50, 60 \r\n1. 30 \r\n2. 25 \r\n3. 21",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 10, 20, 30, 40, 50, 60",
  	incorrectAnswerResponse: "Incorrect. 10, 20, 30, 40, 50, 60",
  	set: 11
  	},

 	2034:{
  	question_tag: "L1MALP12QG",
   code: "2034",
   title: "Maths Class Q12",
   learner_question: "\r\n1. $25 \r\n2. $30 \r\n3. $15",
  	question: "Write on the board: $5, $5, $10, $10= ___How much money? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 5,5,10,10=30",
  	incorrectAnswerResponse: "Incorrect. 5,5,10,10=30",
  	set: 12
  	},

 	2035:{
  	question_tag: "L1MALP12Q1",
   code: "2035",
   title: "Maths Q23",
   learner_question: "$5, $10, $10, $10=? \r\n1. $35 \r\n2. $40 \r\n3. $80",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 5,10,10,10=35",
  	incorrectAnswerResponse: "Incorrect. 5,10,10,10=35",
  	set: 12
  	},

 	2036:{
  	question_tag: "L1MALP12Q2",
   code: "2036",
   title: "Maths Q24",
   learner_question: "$5, $5, $5, $10=? \r\n1. $15 \r\n2. $60 \r\n3. $25",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 5, 5, 5, 10=25",
  	incorrectAnswerResponse: "Incorrect. 5, 5, 5, 10=25",
  	set: 12
  	},

 	2037:{
  	question_tag: "L1MALP13QG",
   code: "2037",
   title: "Maths Class Q13",
   learner_question: "\r\n1. 13 \r\n2. 58 \r\n3. 85",
  	question: "Write the following on the board: 8 Tens, 5 Ones =? Say: Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 8 Tens, 5 Ones =85",
  	incorrectAnswerResponse: "Incorrect. 8 Tens, 5 Ones =85",
  	set: 13
  	},

 	2038:{
  	question_tag: "L1MALP13Q1",
   code: "2038",
   title: "Maths Q25",
   learner_question: "3 Tens, 2 Ones =? \r\n1. 32 \r\n2. 23 \r\n3. 5",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 3 Tens, 2 Ones=32",
  	incorrectAnswerResponse: "Incorrect. 3 Tens, 2 Ones=32",
  	set: 13
  	},

 	2039:{
  	question_tag: "L1MALP13Q2",
   code: "2039",
   title: "Maths Q26",
   learner_question: "9 Tens, 3 Ones =? \r\n1. 39 \r\n2. 93 \r\n3. 12",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 9 Tens, 3 Ones =93",
  	incorrectAnswerResponse: "Incorrect. 9 Tens, 3 Ones =93",
  	set: 13
  	},

 	2040:{
  	question_tag: "L1MALP14QG",
   code: "2040",
   title: "Maths Class Q14 ",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 8___12 Say: Which symbol is missing? Greater than, less than or equals? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 8<12",
  	incorrectAnswerResponse: "Incorrect. 8<12",
  	set: 14
  	},

 	2041:{
  	question_tag: "L1MALP14Q1",
   code: "2041",
   title: "Maths Q27",
   learner_question: "61 ___ 38 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 61>38",
  	incorrectAnswerResponse: "Incorrect. 61>38",
  	set: 14
  	},

 	2042:{
  	question_tag: "L1MALP14Q2",
   code: "2042",
   title: "Maths Q28",
   learner_question: "5, 10, 15, 20, ___, 30,35 \r\n1. 21 \r\n2. 25 \r\n3. 29",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 5,10,15, 20, 25, 30, 35",
  	incorrectAnswerResponse: "Incorrect. 5,10,15, 20, 25, 30, 35",
  	set: 14
  	},

 	2043:{
  	question_tag: "L1MALP15QG",
   code: "2043",
   title: "Maths Class Q15",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write on the board: 13___13 Say: Which symbol is missing? Greater than, less than or equals? ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 13=13",
  	incorrectAnswerResponse: "Incorrect. 13=13",
  	set: 15
  	},

 	2044:{
  	question_tag: "L1MALP15Q1",
   code: "2044",
   title: "Maths Q29",
   learner_question: "10, 20, 30, ___, 50, 60 \r\n1. 31 \r\n2. 35 \r\n3. 40",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 10, 20, 30, 40, 50, 60",
  	incorrectAnswerResponse: "Incorrect. 10, 20, 30, 40, 50, 60",
  	set: 15
  	},

 	2045:{
  	question_tag: "L1MALP15Q2",
   code: "2045",
   title: "Maths Q30",
   learner_question: "15, 20, 25,___, 35, 40, 45 \r\n1. 26 \r\n2. 30 \r\n3. 34",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 15, 20, 25, 30, 35, 40, 45",
  	incorrectAnswerResponse: "Incorrect. 15, 20, 25, 30, 35, 40, 45",
  	set: 15
  	},

 	2046:{
  	question_tag: "L1MALP16QG",
   code: "2046",
   title: "Maths Class Q16",
   learner_question: "3+5=? \r\n1. 25 \r\n2. 2 \r\n3. 8",
  	question: "Write on the board: 3+5=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3+5=8",
  	incorrectAnswerResponse: "Incorrect. 3+5=8",
  	set: 16
  	},

 	2047:{
  	question_tag: "L1MALP16Q1",
   code: "2047",
   title: "Maths Q31",
   learner_question: "2+4=? \r\n1. 24 \r\n2. 2 \r\n3. 6",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 2+4=6",
  	incorrectAnswerResponse: "Incorrect. 2+4=6",
  	set: 16
  	},

 	2048:{
  	question_tag: "L1MALP16Q2",
   code: "2048",
   title: "Maths Q32",
   learner_question: "1+7=? \r\n1. 8 \r\n2. 6 \r\n3. 17",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1+7=8",
  	incorrectAnswerResponse: "Incorrect. 1+7=8",
  	set: 16
  	},

 	2049:{
  	question_tag: "L1MALP17QG",
   code: "2049",
   title: "Maths Class Q17",
   learner_question: "\r\n1. 36 \r\n2. 9 \r\n3. 3",
  	question: "Write on the board: 3+6=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3+6=9",
  	incorrectAnswerResponse: "Incorrect. 3+6=9",
  	set: 17
  	},

 	2050:{
  	question_tag: "L1MALP17Q1",
   code: "2050",
   title: "Maths Q33",
   learner_question: "4+4=? \r\n1. 4 \r\n2. 8 \r\n3. 0",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 4+4=8",
  	incorrectAnswerResponse: "Incorrect. 4+4=8",
  	set: 17
  	},

 	2051:{
  	question_tag: "L1MALP17Q2",
   code: "2051",
   title: "Maths Q34",
   learner_question: "2+7=? \r\n1. 9 \r\n2. 5 \r\n3. 10",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 2+7=9",
  	incorrectAnswerResponse: "Incorrect. 2+7=9",
  	set: 17
  	},

 	2052:{
  	question_tag: "L1MALP18QG",
   code: "2052",
   title: "Maths Class Q18",
   learner_question: "\r\n1. 90 \r\n2. 9 \r\n3. 10",
  	question: "Write on the board: 9+0=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 9+0=9",
  	incorrectAnswerResponse: "Incorrect. 9+0=9",
  	set: 18
  	},

 	2053:{
  	question_tag: "L1MALP18Q1",
   code: "2053",
   title: "Maths Q35",
   learner_question: "5+0=? \r\n1. 50 \r\n2. 6 \r\n3. 5",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 5+0=5",
  	incorrectAnswerResponse: "Incorrect. 5+0=5",
  	set: 18
  	},

 	2054:{
  	question_tag: "L1MALP18Q2",
   code: "2054",
   title: "Maths Q36",
   learner_question: "5+7=? \r\n1. 57 \r\n2. 2 \r\n3. 12",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 5+7=12",
  	incorrectAnswerResponse: "Incorrect. 5+7=12",
  	set: 18
  	},

 	2055:{
  	question_tag: "L1MALP19QG",
   code: "2055",
   title: "Maths Class Q19",
   learner_question: "\r\n1. 12 \r\n2. 93 \r\n3. 6",
  	question: "Write on the board: 9-3=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 9-3=6",
  	incorrectAnswerResponse: "Incorrect. 9-3=6",
  	set: 19
  	},

 	2056:{
  	question_tag: "L1MALP19Q1",
   code: "2056",
   title: "Maths Q37",
   learner_question: "6 - 4=? \r\n1. 64 \r\n2. 2 \r\n3. 10",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 6-4=2",
  	incorrectAnswerResponse: "Incorrect. 6-4=2",
  	set: 19
  	},

 	2057:{
  	question_tag: "L1MALP19Q2",
   code: "2057",
   title: "Maths Q38",
   learner_question: "4 - 1=? \r\n1. 41 \r\n2. 5 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 4-1=3",
  	incorrectAnswerResponse: "Incorrect. 4-1=3",
  	set: 19
  	},

 	2058:{
  	question_tag: "L1MALP20QG",
   code: "2058",
   title: "Maths Class Q20",
   learner_question: "\r\n1. 22 \r\n2. 12 \r\n3. 8",
  	question: "Write on the board: 15-7=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 15-7=8",
  	incorrectAnswerResponse: "Incorrect. 15-7=8",
  	set: 20
  	},

 	2059:{
  	question_tag: "L1MALP20Q1",
   code: "2059",
   title: "Maths Q39",
   learner_question: "12 - 6=? \r\n1. 126 \r\n2. 6 \r\n3. 18",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 12-6=6",
  	incorrectAnswerResponse: "Incorrect. 12-6=6",
  	set: 20
  	},

 	2060:{
  	question_tag: "L1MALP20Q2",
   code: "2060",
   title: "Maths Q40",
   learner_question: "13 - 3=? \r\n1. 10 \r\n2. 16 \r\n3. 11",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 13-3=10",
  	incorrectAnswerResponse: "Incorrect. 13-3=10",
  	set: 20
  	},

 	2061:{
  	question_tag: "L1MALP21QG",
   code: "2061",
   title: "Maths Class Q21",
   learner_question: "\r\n1. 26 \r\n2. 12 \r\n3. 9",
  	question: "Write on the board: 19-7=? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 19-7=12",
  	incorrectAnswerResponse: "Incorrect. 19-7=12",
  	set: 21
  	},

 	2062:{
  	question_tag: "L1MALP21Q1",
   code: "2062",
   title: "Maths Q41",
   learner_question: "20 - 5= ? \r\n1. 10 \r\n2. 15 \r\n3. 25",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 20-5=15",
  	incorrectAnswerResponse: "Incorrect. 20-5=15",
  	set: 21
  	},

 	2063:{
  	question_tag: "L1MALP21Q2",
   code: "2063",
   title: "Maths Q42",
   learner_question: "20-10=? \r\n1. 10 \r\n2. 20 \r\n3. 30",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 20-10=10",
  	incorrectAnswerResponse: "Incorrect. 20-10=10",
  	set: 21
  	},

 	2064:{
  	question_tag: "L1MALP22QG",
   code: "2064",
   title: "Maths Class Q22",
   learner_question: "\r\n1. 0 chickens \r\n2. 5 chickens \r\n2. 15 chickens",
  	question: "Say: You have 10 chickens. You sell 5 chickens. How many chickens do you have now? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 10 - 5=5",
  	incorrectAnswerResponse: "Incorrect. 10 - 5=5",
  	set: 22
  	},

 	2065:{
  	question_tag: "L1MALP22Q1",
   code: "2065",
   title: "Maths Q43",
   learner_question: "20-3=? \r\n1. 17 \r\n2. 13 \r\n3. 23",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 20-3=17",
  	incorrectAnswerResponse: "Incorrect. 20-3=17",
  	set: 22
  	},

 	2066:{
  	question_tag: "L1MALP22Q2",
   code: "2066",
   title: "Maths Q44",
   learner_question: "12-5=? \r\n1. 17 \r\n2. 15 \r\n3. 7",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 12-5=7",
  	incorrectAnswerResponse: "Incorrect. 12-5=7",
  	set: 22
  	},

 	2067:{
  	question_tag: "L1MALP23QG",
   code: "2067",
   title: "Maths Class Q23",
   learner_question: "\r\n1. 6 chickens \r\n2. 10 chickens \r\n3. 4 chickens",
  	question: "Say: You have 8 chickens. You buy 2 chickens. How many chickens do you have now? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 8+2=10.",
  	incorrectAnswerResponse: "Incorrect. 8+2=10.",
  	set: 23
  	},

 	2068:{
  	question_tag: "L1MALP23Q1",
   code: "2068",
   title: "Maths Q45",
   learner_question: "3+8=? \r\n1. 12 \r\n2. 5 \r\n3. 11",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3=8=11",
  	incorrectAnswerResponse: "Incorrect. 3=8=11",
  	set: 23
  	},

 	2069:{
  	question_tag: "L1MALP23Q2",
   code: "2069",
   title: "Maths Q46",
   learner_question: "13-4=? \r\n1. 9 \r\n2. 17 \r\n3. 134",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 13-4= 9",
  	incorrectAnswerResponse: "Incorrect. 13-4= 9",
  	set: 23
  	},

 	2070:{
  	question_tag: "L1MALP24QG",
   code: "2070",
   title: "Maths Class Q24",
   learner_question: "\r\n1. 15 \r\n2. 25 \r\n3. 1",
  	question: "Write the following on the board: 12 +13 Say: 12 plus 1\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 12+13=25",
  	incorrectAnswerResponse: "Incorrect. 12+13=25",
  	set: 24
  	},

 	2071:{
  	question_tag: "L1MALP24Q1",
   code: "2071",
   title: "Maths Q47",
   learner_question: "35+23=? \r\n1. 3523 \r\n2. 56 \r\n3. 58",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 35+23=58",
  	incorrectAnswerResponse: "Incorrect. 35+23=58",
  	set: 24
  	},

 	2072:{
  	question_tag: "L1MALP24Q2",
   code: "2072",
   title: "Maths Q48",
   learner_question: "13+64=? \r\n1. 95 \r\n2. 77 \r\n3. 56",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 13+64=77",
  	incorrectAnswerResponse: "Incorrect. 13+64=77",
  	set: 24
  	},

 	2073:{
  	question_tag: "L1MALP25QG",
   code: "2073",
   title: "Maths Class Q25",
   learner_question: "\r\n1. 95 \r\n2. 96 \r\n3. 97",
  	question: "Write the following on the board: 62 +33 Say: 62 plus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 62+33=95",
  	incorrectAnswerResponse: "Incorrect. 62+33=95",
  	set: 25
  	},

 	2074:{
  	question_tag: "L1MALP25Q1",
   code: "2074",
   title: "Maths Q49",
   learner_question: "15+42=? \r\n1. 66 \r\n2. 67 \r\n3. 78",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 15+42=67",
  	incorrectAnswerResponse: "Incorrect. 15+42=67",
  	set: 25
  	},

 	2075:{
  	question_tag: "L1MALP25Q2",
   code: "2075",
   title: "Maths Q50",
   learner_question: "23+34=? \r\n1. 57 \r\n2. 58 \r\n3. 59",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 23+34= 57",
  	incorrectAnswerResponse: "Incorrect. 23+34= 57",
  	set: 25
  	},

 	2076:{
  	question_tag: "L1MALP26QG",
   code: "2076",
   title: "Maths Class Q26",
   learner_question: "\r\n1. $49 \r\n2. $51 \r\n3. $61",
  	question: "Say: Ellen has 50 dollars. Ellen\'s mother gives her 11 dollars. How much money does Ellen have now? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 50+11=61",
  	incorrectAnswerResponse: "Incorrect. 50+11=61",
  	set: 26
  	},

 	2077:{
  	question_tag: "L1MALP26Q1",
   code: "2077",
   title: "Maths Q51",
   learner_question: "45+51=? \r\n1. 91 \r\n2. 96 \r\n3. 85",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 45+51=96",
  	incorrectAnswerResponse: "Incorrect. 45+51=96",
  	set: 26
  	},

 	2078:{
  	question_tag: "L1MALP26Q2",
   code: "2078",
   title: "Maths Q52",
   learner_question: "21+43=? \r\n1. 64 \r\n2. 55 \r\n3. 19",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 21+43=64",
  	incorrectAnswerResponse: "Incorrect. 21+43=64",
  	set: 26
  	},

 	2079:{
  	question_tag: "L1MALP27QG",
   code: "2079",
   title: "Maths Class Q27",
   learner_question: "\r\n1. 100 \r\n2. 34 \r\n3. 11",
  	question: "Write the following on the board: 67 - 33 Say: 67 minus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 67-33=34",
  	incorrectAnswerResponse: "Incorrect. 67-33=34",
  	set: 27
  	},

 	2080:{
  	question_tag: "L1MALP27Q1",
   code: "2080",
   title: "Maths Q53",
   learner_question: "57-32=? \r\n1. 25 \r\n2. 34 \r\n3. 89",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 57-32=25",
  	incorrectAnswerResponse: "Incorrect. 57-32=25",
  	set: 27
  	},

 	2081:{
  	question_tag: "L1MALP27Q2",
   code: "2081",
   title: "Maths Q54",
   learner_question: "47-21=? \r\n1. 24 \r\n2. 25 \r\n3. 26",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 47-21= 26",
  	incorrectAnswerResponse: "Incorrect. 47-21= 26",
  	set: 27
  	},

 	2082:{
  	question_tag: "L1MALP28QG",
   code: "2082",
   title: "Maths Class Q28",
   learner_question: "\r\n1. 52 \r\n2. 54 \r\n3. 56",
  	question: "Write the following on the board: 93 - 41 Say: 93 minus 4\r\n1. Enter the answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 93-41=52",
  	incorrectAnswerResponse: "Incorrect. 93-41=52",
  	set: 28
  	},

 	2083:{
  	question_tag: "L1MALP28Q1",
   code: "2083",
   title: "Maths Q55",
   learner_question: "18-12=? \r\n1. 30 \r\n2. 6 \r\n3. 10",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18-12=6",
  	incorrectAnswerResponse: "Incorrect. 18-12=6",
  	set: 28
  	},

 	2084:{
  	question_tag: "L1MALP28Q2",
   code: "2084",
   title: "Maths Q56",
   learner_question: "65-13=? \r\n1. 52 \r\n2. 58 \r\n3. 87",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 65-13= 52",
  	incorrectAnswerResponse: "Incorrect. 65-13= 52",
  	set: 28
  	},

 	2085:{
  	question_tag: "L1MALP29QG",
   code: "2085",
   title: "Maths Class Q29",
   learner_question: "\r\n1. $105 \r\n2. $65 \r\n3. $55",
  	question: "Say: Sonie had 80 dollars. She spent 25 dollars on food. How much money does Sonie have now? Enter the number of the correct answer 1, 2 or \r\n3. ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 80-25=55",
  	incorrectAnswerResponse: "Incorrect. 80-25=55",
  	set: 29
  	},

 	2086:{
  	question_tag: "L1MALP29Q1",
   code: "2086",
   title: "Maths Q57",
   learner_question: "56-22= ? \r\n1. 24 \r\n2. 34 \r\n3. 22",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 56-22= 34",
  	incorrectAnswerResponse: "Incorrect. 56-22= 34",
  	set: 29
  	},

 	2087:{
  	question_tag: "L1MALP29Q2",
   code: "2087",
   title: "Maths Q58",
   learner_question: "34-14= ? \r\n1. 24 \r\n2. 20 \r\n3. 10",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 34-14=20",
  	incorrectAnswerResponse: "Incorrect. 34-14=20",
  	set: 29
  	},

 	2088:{
  	question_tag: "L1MALP30QG",
   code: "2088",
   title: "Maths Class Q30",
   learner_question: "\r\n1. 8 eggs \r\n2. 32 eggs \r\n3. No eggs",
  	question: "Say: Janet has 20 eggs. She eats 12 eggs. How many eggs does Janet have now? Enter the number of the correct answer 1, 2 or \r\n3. ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 20-12=8",
  	incorrectAnswerResponse: "Incorrect. 20-12=8",
  	set: 30
  	},

 	2089:{
  	question_tag: "L1MALP30Q1",
   code: "2089",
   title: "Maths Q59",
   learner_question: "77-22=? \r\n1. 33 \r\n2. 44 \r\n3. 55",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 77-22=55",
  	incorrectAnswerResponse: "Incorrect. 77-22=55",
  	set: 30
  	},

 	2090:{
  	question_tag: "L1MALP30Q2",
   code: "2090",
   title: "Maths Q60",
   learner_question: "64+23=? \r\n1. 41 \r\n2. 77 \r\n3. 87",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 64+23=87",
  	incorrectAnswerResponse: "Incorrect. 64+23=87",
  	set: 30
  	},

 	2091:{
  	question_tag: "L1MALP31QG",
   code: "2091",
   title: "Maths Class Q31",
   learner_question: "\r\n1. 80 \r\n2. 90 \r\n3. 84",
  	question: "Write the following on the board: 57 + 33 Say: 57 Plus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 57+33=90",
  	incorrectAnswerResponse: "Incorrect. 57+33=90",
  	set: 31
  	},

 	2092:{
  	question_tag: "L1MALP31Q1",
   code: "2092",
   title: "Maths Q61",
   learner_question: "25+45=? \r\n1. 80 \r\n2. 85 \r\n3. 70",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 25+45=70",
  	incorrectAnswerResponse: "Incorrect. 25+45=70",
  	set: 31
  	},

 	2093:{
  	question_tag: "L1MALP31Q2",
   code: "2093",
   title: "Maths Q62",
   learner_question: "48+13=? \r\n1. 71 \r\n2. 62 \r\n3. 61",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 48+13=61",
  	incorrectAnswerResponse: "Incorrect. 48+13=61",
  	set: 31
  	},

 	2094:{
  	question_tag: "L1MALP32QG",
   code: "2094",
   title: "Maths Class Q32",
   learner_question: "\r\n1. 92 \r\n2. 4 \r\n3. 82",
  	question: "Write the following on the board: 48 +44 Say: 48 plus 44. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 48+44=92",
  	incorrectAnswerResponse: "Incorrect. 48+44=92",
  	set: 32
  	},

 	2095:{
  	question_tag: "L1MALP32Q1",
   code: "2095",
   title: "Maths Q63",
   learner_question: "18+38=? \r\n1. 48 \r\n2. 56 \r\n3. 58",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18+38= 56",
  	incorrectAnswerResponse: "Incorrect. 18+38= 56",
  	set: 32
  	},

 	2096:{
  	question_tag: "L1MALP32Q2",
   code: "2096",
   title: "Maths Q64",
   learner_question: "26+56=? \r\n1. 82 \r\n2. 30 \r\n3. 72",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 26+56=82",
  	incorrectAnswerResponse: "Incorrect. 26+56=82",
  	set: 32
  	},

 	2097:{
  	question_tag: "L1MALP33QG",
   code: "2097",
   title: "Maths Class Q33",
   learner_question: "\r\n1. 34 \r\n2. 36 \r\n3. 44",
  	question: "Write the following on the board: 18 12 +14 Say: 18 plus 12 plus 14. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 18+12+14=44",
  	incorrectAnswerResponse: "Incorrect. 18+12+14=44",
  	set: 33
  	},

 	2098:{
  	question_tag: "L1MALP33Q1",
   code: "2098",
   title: "Maths Q65",
   learner_question: "8+12+15=? \r\n1. 35 \r\n2. 25 \r\n3. 33",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 8+12+15=35",
  	incorrectAnswerResponse: "Incorrect. 8+12+15=35",
  	set: 33
  	},

 	2099:{
  	question_tag: "L1MALP33Q2",
   code: "2099",
   title: "Maths Q66",
   learner_question: "23+11+7=? \r\n1. 31 \r\n2. 41 \r\n3. 51",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23+11+7=41",
  	incorrectAnswerResponse: "Incorrect. 23+11+7=41",
  	set: 33
  	},

 	2100:{
  	question_tag: "L1MALP34QG",
   code: "2100",
   title: "Maths Class Q34",
   learner_question: "\r\n1. 6 \r\n2. 18 \r\n3. 8",
  	question: "Write the following on the board: 24 - 18 Say: 24 minus 18. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 24-18= 6",
  	incorrectAnswerResponse: "Incorrect. 24-18= 6",
  	set: 34
  	},

 	2101:{
  	question_tag: "L1MALP34Q1",
   code: "2101",
   title: "Maths Q67",
   learner_question: "32-13=? \r\n1. 11 \r\n2. 21 \r\n3. 19",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32-13=19",
  	incorrectAnswerResponse: "Incorrect. 32-13=19",
  	set: 34
  	},

 	2102:{
  	question_tag: "L1MALP34Q2",
   code: "2102",
   title: "Maths Q68",
   learner_question: "41-23=? \r\n1. 12 \r\n2. 18 \r\n3. 22",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 41-23=18",
  	incorrectAnswerResponse: "Incorrect. 41-23=18",
  	set: 34
  	},

 	2103:{
  	question_tag: "L1MALP35QG",
   code: "2103",
   title: "Maths Class Q35",
   learner_question: "\r\n1. 27 \r\n2. 37 \r\n3. 33",
  	question: "Write the following on the board: 54 - 27 Say: 54 minus 27. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 54-27=27",
  	incorrectAnswerResponse: "Incorrect. 54-27=27",
  	set: 35
  	},

 	2104:{
  	question_tag: "L1MALP35Q1",
   code: "2104",
   title: "Maths Q69",
   learner_question: "83-47=? \r\n1. 36 \r\n2. 46 \r\n3. 26",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 83-47=36",
  	incorrectAnswerResponse: "Incorrect. 83-47=36",
  	set: 35
  	},

 	2105:{
  	question_tag: "L1MALP35Q2",
   code: "2105",
   title: "Maths Q70",
   learner_question: "67-28=? \r\n1. 49 \r\n2. 25 \r\n3. 39",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 67-28=39",
  	incorrectAnswerResponse: "Incorrect. 67-28=39",
  	set: 35
  	},

 	2106:{
  	question_tag: "L1MALP36QG",
   code: "2106",
   title: "Maths Class Q36",
   learner_question: "\r\n1. 36 \r\n2. 37 \r\n3. 38",
  	question: "Write the following on the board: 67 - 29 Say: 67 minus 29. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 67+29=38",
  	incorrectAnswerResponse: "Incorrect. 67+29=38",
  	set: 36
  	},

 	2107:{
  	question_tag: "L1MALP36Q1",
   code: "2107",
   title: "Maths Q71",
   learner_question: "45-38=? \r\n1. 15 \r\n2. 17 \r\n3. 7",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 45-38=7",
  	incorrectAnswerResponse: "Incorrect. 45-38=7",
  	set: 36
  	},

 	2108:{
  	question_tag: "L1MALP36Q2",
   code: "2108",
   title: "Maths Q72",
   learner_question: "65-37=? \r\n1. 18 \r\n2. 28 \r\n3. 38",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 65-37=28",
  	incorrectAnswerResponse: "Incorrect. 65-37=28",
  	set: 36
  	},

 	2109:{
  	question_tag: "L1MALP37QG",
   code: "2109",
   title: "Maths Class Q37",
   learner_question: "\r\n1. $15 \r\n2. $55 \r\n3. $25",
  	question: "Say: Pinky has 35 dollars. She spends 20 dollars at a shop. How much money does Pinky have now. Enter the number of the correct answer 1, 2 or \r\n3. ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 35-20= 15",
  	incorrectAnswerResponse: "Incorrect. 35-20= 15",
  	set: 37
  	},

 	2110:{
  	question_tag: "L1MALP37Q1",
   code: "2110",
   title: "Maths Q73",
   learner_question: "24+47=? \r\n1. 71 \r\n2. 81 \r\n3. 72",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 24+47= 71",
  	incorrectAnswerResponse: "Incorrect. 24+47= 71",
  	set: 37
  	},

 	2111:{
  	question_tag: "L1MALP37Q2",
   code: "2111",
   title: "Maths Q74",
   learner_question: "65-36=? \r\n1. 39 \r\n2. 29 \r\n3. 19",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 65-36= 29",
  	incorrectAnswerResponse: "Incorrect. 65-36= 29",
  	set: 37
  	},

 	2112:{
  	question_tag: "L1MALP38QG",
   code: "2112",
   title: "Maths Class Q38",
   learner_question: "\r\n1. 70 \r\n2. 10 \r\n3. 43",
  	question: "Say: Ruth has 40 pencils. She gets 30 pencils from a friend. How many pencils does Ruth have now. Enter the number of the correct answer 1, 2 or \r\n3. ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 40+30=70",
  	incorrectAnswerResponse: "Incorrect. 40+30=70",
  	set: 38
  	},

 	2113:{
  	question_tag: "L1MALP38Q1",
   code: "2113",
   title: "Maths Q75",
   learner_question: "8-8=? \r\n1. 8 \r\n2. 16 \r\n3. 0",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 8-8= 0",
  	incorrectAnswerResponse: "Incorrect. 8-8= 0",
  	set: 38
  	},

 	2114:{
  	question_tag: "L1MALP38Q2",
   code: "2114",
   title: "Maths Q76",
   learner_question: "81-62=? \r\n1. 9 \r\n2. 19 \r\n3. 12",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 81-62=19",
  	incorrectAnswerResponse: "Incorrect. 81-62=19",
  	set: 38
  	},

 	2115:{
  	question_tag: "L1MALP39QG",
   code: "2115",
   title: "Maths Class Q39",
   learner_question: "\r\n1. 8 \r\n2. 2 \r\n3. 15",
  	question: "Write the following on the board: 5 x 3=? Say: What is 5 times 3? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 5 x 3= 15",
  	incorrectAnswerResponse: "Incorrect. 5 x 3= 15",
  	set: 39
  	},

 	2116:{
  	question_tag: "L1MALP39Q1",
   code: "2116",
   title: "Maths Q77",
   learner_question: "4 x 3=? \r\n1. 7 \r\n2. 12 \r\n3. 14",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 4 x 3= 12",
  	incorrectAnswerResponse: "Incorrect. 4 x 3= 12",
  	set: 39
  	},

 	2117:{
  	question_tag: "L1MALP39Q2",
   code: "2117",
   title: "Maths Q78",
   learner_question: "2 x 6=? \r\n1. 12 \r\n2. 8 \r\n3. 4",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 2 x 6= 12",
  	incorrectAnswerResponse: "Incorrect. 2 x 6= 12",
  	set: 39
  	},

	2118:{
  	question_tag: "L1MALP40QG",
   code: "2118",
   title: "Maths Class Q40",
   learner_question: "\r\n1. 9 \r\n2. 90 \r\n3. 0",
  	question: "Say: What is 9 times 0? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 9 x 0= 0. All numbers x 0= 0",
  	incorrectAnswerResponse: "Incorrect. 9 x 0= 0. All numbers x 0= 0",
  	set: 40
  	},

 	2119:{
  	question_tag: "L1MALP40Q1",
   code: "2119",
   title: "Maths Q79",
   learner_question: "25 x 0=? \r\n1. 25 \r\n2. 250 \r\n3. 0",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 25 x 0= 0. All numbers x 0= 0",
  	incorrectAnswerResponse: "Incorrect. 25 x 0= 0. All numbers x 0= 0",
  	set: 40
  	},

 	2120:{
  	question_tag: "L1MALP40Q2",
   code: "2120",
   title: "Maths Q80",
   learner_question: "9 x 9=? \r\n1. 81 \r\n2. 99 \r\n3. 18",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 9 x 9= 81",
  	incorrectAnswerResponse: "Incorrect. 9 x 9= 81",
  	set: 40
  	},

 	2121:{
  	question_tag: "L1MALP41QG",
   code: "2121",
   title: "Maths Class Q41",
   learner_question: "\r\n1. 10 \r\n2. 9 \r\n3. 8",
  	question: "Say: What is 9 times 1? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 9 x 1= 9",
  	incorrectAnswerResponse: "Incorrect. 9 x 1= 9",
  	set: 41
  	},

 	2122:{
  	question_tag: "L1MALP41Q1",
   code: "2122",
   title: "Maths Q81",
   learner_question: "13 x 1=? \r\n1. 13 \r\n2. 14 \r\n3. 15",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 13 x 1= 13",
  	incorrectAnswerResponse: "Incorrect. 13 x 1= 13",
  	set: 41
  	},

 	2123:{
  	question_tag: "L1MALP41Q2",
   code: "2123",
   title: "Maths Q82",
   learner_question: "6 x 6=? \r\n1. 12 \r\n2. 1 \r\n3. 36",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6 x 6=36",
  	incorrectAnswerResponse: "Incorrect. 6 x 6=36",
  	set: 41
  	},

 	2124:{
  	question_tag: "L1MALP42QG",
   code: "2124",
   title: "Maths Class Q42",
   learner_question: "\r\n1. 7 \r\n2. 21 \r\n3. 28",
  	question: "How many days are in 4 weeks? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 7x4= 28",
  	incorrectAnswerResponse: "Incorrect. 7x4= 28",
  	set: 42
  	},

 	2125:{
  	question_tag: "L1MALP42Q1",
   code: "2125",
   title: "Maths Q83",
   learner_question: "6 x 5=? \r\n1. 11 \r\n2. 30 \r\n3. 25",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 6 x 5= 30",
  	incorrectAnswerResponse: "Incorrect. 6 x 5= 30",
  	set: 42
  	},

 	2126:{
  	question_tag: "L1MALP42Q2",
   code: "2126",
   title: "Maths Q84",
   learner_question: "3 x 7=? \r\n1. 21 \r\n2. 22 \r\n3. 10",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 3 x 7=21",
  	incorrectAnswerResponse: "Incorrect. 3 x 7=21",
  	set: 42
  	},

 	2127:{
  	question_tag: "L1MALP43QG",
   code: "2127",
   title: "Maths Class Q43",
   learner_question: "\r\n1. 45 \r\n2. 50 \r\n3. 75",
  	question: "Write the following on the board: 25 x 2 Say: What is 25 times \r\n2. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 25 x 2= 50",
  	incorrectAnswerResponse: "Incorrect. 25 x 2= 50",
  	set: 43
  	},

 	2128:{
  	question_tag: "L1MALP43Q1",
   code: "2128",
   title: "Maths Q85",
   learner_question: "32 x 3 =? \r\n1. 66 \r\n2. 86 \r\n3. 96",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32 x 3= 96",
  	incorrectAnswerResponse: "Incorrect. 32 x 3= 96",
  	set: 43
  	},

 	2129:{
  	question_tag: "L1MALP43Q2",
   code: "2129",
   title: "Maths Q86",
   learner_question: "21 x 4=? \r\n1. 88 \r\n2. 25 \r\n3. 84",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 21 x 4= 84",
  	incorrectAnswerResponse: "Incorrect. 21 x 4= 84",
  	set: 43
  	},

 	2130:{
  	question_tag: "L1MALP44QG",
   code: "2130",
   title: "Maths Class Q44",
   learner_question: "\r\n1. 14 \r\n2. 30 \r\n3. 33",
  	question: "Say: Miriam gives her children 11 books each. She has three children. How many books did she give in total? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 11 x 3= 33 books.",
  	incorrectAnswerResponse: "Incorrect. 11 x 3= 33 books.",
  	set: 44
  	},

 	2131:{
  	question_tag: "L1MALP44Q1",
   code: "2131",
   title: "Maths Q87",
   learner_question: "13 x 2=? \r\n1. 26 \r\n2. 15 \r\n3. 30",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 13 x 2 =26",
  	incorrectAnswerResponse: "Incorrect. 13 x 2 =26",
  	set: 44
  	},

 	2132:{
  	question_tag: "L1MALP44Q2",
   code: "2132",
   title: "Maths Q88",
   learner_question: "22 x 3=? \r\n1. 66 \r\n2. 76 \r\n3. 56",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 22 x 3= 66",
  	incorrectAnswerResponse: "Incorrect. 22 x 3= 66",
  	set: 44
  	},

 	2133:{
  	question_tag: "L1MALP45QG",
   code: "2133",
   title: "Maths Class Q45",
   learner_question: "\r\n1. 27 \r\n2. 6 \r\n3. 3",
  	question: "Write the following on the board: 9÷3=? Say: Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 9÷3=3",
  	incorrectAnswerResponse: "Incorrect. 9÷3=3",
  	set: 45
  	},

 	2134:{
  	question_tag: "L1MALP45Q1",
   code: "2134",
   title: "Maths Q89",
   learner_question: "12÷4=? \r\n1. 8 \r\n2. 16 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 12÷4=3",
  	incorrectAnswerResponse: "Incorrect. 12÷4=3",
  	set: 45
  	},

 	2135:{
  	question_tag: "L1MALP45Q2",
   code: "2135",
   title: "Maths Q90",
   learner_question: "8÷2=? \r\n1. 4 \r\n2. 2 \r\n3. 3",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 8÷2=4",
  	incorrectAnswerResponse: "Incorrect. 8÷2=4",
  	set: 45
  	},

 	2136:{
  	question_tag: "L1MALP46QG",
   code: "2136",
   title: "Maths Class Q46",
   learner_question: "\r\n1. 60 bags \r\n2. 6 bags \r\n3. 10 bags",
  	question: "Say: Mark has $60 dollars to buy rice. Each bag of rice costs 10 dollars. How many bags of rice can Mark buy? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 60÷10= 6",
  	incorrectAnswerResponse: "Incorrect. 60÷10= 6",
  	set: 46
  	},

 	2137:{
  	question_tag: "L1MALP46Q1",
   code: "2137",
   title: "Maths Q91",
   learner_question: "25 ÷ 5=? \r\n1. 20 \r\n2. 15 \r\n3. 5",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 25 ÷ 5= 5",
  	incorrectAnswerResponse: "Incorrect. 25 ÷ 5= 5",
  	set: 46
  	},

 	2138:{
  	question_tag: "L1MALP46Q2",
   code: "2138",
   title: "Maths Q92",
   learner_question: "24 ÷ 6=? \r\n1. 18 \r\n2. 6 \r\n3. 4",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 24 ÷ 6= 4",
  	incorrectAnswerResponse: "Incorrect. 24 ÷ 6= 4",
  	set: 46
  	},

 	2139:{
  	question_tag: "L1MALP47QG",
   code: "2139",
   title: "Maths Class Q47",
   learner_question: "\r\n1. 12 oranges \r\n2. 7 oranges \r\n3. 1 orange",
  	question: "Say: Naomi has 3 bags. Each bag has 4 oranges. How many oranges does Naomi have? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 3 x 4= 12",
  	incorrectAnswerResponse: "Incorrect. 3 x 4= 12",
  	set: 47
  	},

 	2140:{
  	question_tag: "L1MALP47Q1",
   code: "2140",
   title: "Maths Q93",
   learner_question: "23 x 0=? \r\n1. 23 \r\n2. 0 \r\n3. 230",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23 x 0= 0",
  	incorrectAnswerResponse: "Incorrect. 23 x 0= 0",
  	set: 47
  	},

 	2141:{
  	question_tag: "L1MALP47Q2",
   code: "2141",
   title: "Maths Q94",
   learner_question: "12 ÷ 2=? \r\n1. 6 \r\n2. 10 \r\n2. 24",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 12 ÷ 2= 6",
  	incorrectAnswerResponse: "Incorrect. 12 ÷ 2= 6",
  	set: 47
  	},

 	2142:{
  	question_tag: "L1MALP48QG",
   code: "2142",
   title: "Maths Class Q48",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 1/3 ___ 2/3 Say: Is one third Greater than, less than or equal to two thirds? Enter the correct symbol.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/3 < 2/3",
  	incorrectAnswerResponse: "Incorrect. 1/3 < 2/3",
  	set: 48
  	},

 	2143:{
  	question_tag: "L1MALP48Q1",
   code: "2143",
   title: "Maths Q95",
   learner_question: "2/3 ____ 1/3 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2/3 > 1/3",
  	incorrectAnswerResponse: "Incorrect. 2/3 > 1/3",
  	set: 48
  	},

 	2144:{
  	question_tag: "L1MALP48Q2",
   code: "2144",
   title: "Maths Q96",
   learner_question: "1/4 ____ 3/4 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/4 < 3/4",
  	incorrectAnswerResponse: "Incorrect. 1/4 < 3/4",
  	set: 48
  	},

 	2145:{
  	question_tag: "L1MALP49QG",
   code: "2145",
   title: "Maths Class Q49",
   learner_question: "What fraction are \'A\'? \r\n1. 1/4 \r\n2. 1/3 \r\n3. 1/2",
  	question: "Write the following on the board: (ABBB) Say: I wrote four letters on the board. What fraction of the letters are letter A?",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (ABBB) 1/4 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (ABBB) 1/4 of the letters are A.",
  	set: 49
  	},

 	2146:{
  	question_tag: "L1MALP49Q1",
   code: "2146",
   title: "Maths Q97",
   learner_question: "What fraction are A? (AABBB) \r\n1. 2/3 \r\n2. 1/5 \r\n3. 2/5",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (AABBB) 2/5 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (AABBB) 2/5 of the letters are A.",
  	set: 49
  	},

 	2147:{
  	question_tag: "L1MALP49Q2",
   code: "2147",
   title: "Maths Q98",
   learner_question: "What fraction are A? (ABB) \r\n1. 1/2 \r\n2. 1/3 \r\n3. 1/4",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (ABB) 1/3 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (ABB) 1/3 of the letters are A.",
  	set: 49
  	},

 	2148:{
  	question_tag: "L1MALP50QG",
   code: "2148",
   title: "Maths Class Q50",
   learner_question: "What fraction are O? \r\n1. 1/5 \r\n2. 2/5 \r\n3. 1/2",
  	question: "Write the following on the board: (OOLLL) Say: I wrote four letters on the board. What fraction of the letters are letter O?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (OOLLL) 2/5 of the letters are O.",
  	incorrectAnswerResponse: "Incorrect. (OOLLL) 2/5 of the letters are O.",
  	set: 50
  	},

 	2149:{
  	question_tag: "L1MALP50Q1",
   code: "2149",
   title: "Maths Q99",
   learner_question: "What fraction are O? (OOOL) \r\n1. 1/4 \r\n2. 3/5 \r\n3. 3/4",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (OOOL) 3/4 of the letters are O.",
  	incorrectAnswerResponse: "Incorrect. (OOOL) 3/4 of the letters are O.",
  	set: 50
  	},

 	2150:{
  	question_tag: "L1MALP50Q2",
   code: "2150",
   title: "Maths Q100",
   learner_question: "What fraction are O? (OLL) \r\n1. 1/4 \r\n2. 1/3 \r\n3. 3/4",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (OLL) 1/3 of the letters are O.",
  	incorrectAnswerResponse: "Incorrect. (OLL) 1/3 of the letters are O.",
  	set: 50
  	},

 	2151:{
  	question_tag: "L1MALP51QG",
   code: "2151",
   title: "Maths Class Q51",
   learner_question: "\r\n1. 41 \r\n2. 43 \r\n2. 42",
  	question: "Write the following on the board: 23 +18 Say: Let\'s review. What is 23 plus 18? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 23 + 18= 41",
  	incorrectAnswerResponse: "Incorrect. 23 + 18= 41",
  	set: 51
  	},

 	2152:{
  	question_tag: "L1MALP51Q1",
   code: "2152",
   title: "Maths Q101",
   learner_question: "23 x 1 =? \r\n1. 231 \r\n2. 23 \r\n3. 24",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23 x 1= 23",
  	incorrectAnswerResponse: "Incorrect. 23 x 1= 23",
  	set: 51
  	},

 	2153:{
  	question_tag: "L1MALP51Q2",
   code: "2153",
   title: "Maths Q102",
   learner_question: "15÷5=? \r\n1. 10 \r\n2. 5 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 15 ÷ 5= 3",
  	incorrectAnswerResponse: "Incorrect. 15 ÷ 5= 3",
  	set: 51
  	},

 	2154:{
  	question_tag: "L1MALP52QG",
   code: "2154",
   title: "Maths Class Q52",
   learner_question: "\r\n1. $10 \r\n2. $3 \r\n3. $15",
  	question: "Say: Ellen buys shirts for 10 dollars. He sells them for 15 dollars. He sells 3 shirts. How much does he make? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (15-10) x 3= 5x3=15",
  	incorrectAnswerResponse: "Incorrect. (15-10) x 3= 5x3=15",
  	set: 52
  	},

 	2155:{
  	question_tag: "L1MALP52Q1",
   code: "2155",
   title: "Maths Q103",
   learner_question: "Pam buys pens for LD $50. She sells pens for LD $80. She sells 2 pens. How much does she make? \r\n1. LD $60 \r\n2. LD $80 \r\n3. LD $100",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! LD $30 x 2 =LD $60",
  	incorrectAnswerResponse: "Incorrect. LD $30 x 2 =LD $60",
  	set: 52
  	},

 	2156:{
  	question_tag: "L1MALP52Q2",
   code: "2156",
   title: "Maths Q104",
   learner_question: "Ben buys mats for $5. He sells mats for $7. He sells 10 mats. How much does he make? \r\n1. $10 \r\n2. $20 \r\n3. $30",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! ($7-$5)x10=2 x $10= $20",
  	incorrectAnswerResponse: "Incorrect. ($7-$5)x10=2 x $10= $20",
  	set: 52
  	},

 	2157:{
  	question_tag: "L1MALP53QG",
   code: "2157",
   title: "Maths Class Q53",
   learner_question: "\r\n1. 24 \r\n2. 48 \r\n3. 12",
  	question: "Say: Charles has 4 bags of pens. There are 12 pens in each bag. How many pens does Charles have? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 4 x 12= 48",
  	incorrectAnswerResponse: "Incorrect. 4 x 12= 48",
  	set: 53
  	},

 	2158:{
  	question_tag: "L1MALP53Q1",
   code: "2158",
   title: "Maths Q105",
   learner_question: "34 x 2=? \r\n1. 68 \r\n2. 17 \r\n3. 36",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 34 x 2= 68",
  	incorrectAnswerResponse: "Incorrect. 34 x 2= 68",
  	set: 53
  	},

 	2159:{
  	question_tag: "L1MALP53Q2",
   code: "2159",
   title: "Maths Q106",
   learner_question: "18÷9=? \r\n1. 9 \r\n2. 2 \r\n3. 27",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18÷9=2",
  	incorrectAnswerResponse: "Incorrect. 18÷9=2",
  	set: 53
  	},

 	2160:{
  	question_tag: "L1MALP54QG",
   code: "2160",
   title: "Maths Class Q54",
   learner_question: "\r\n1. $15 \r\n2. $3 \r\n3. $6",
  	question: "Say: Sarah has 18 dollars. She gives the money to her 3 children. How much does each child get? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 18÷3=6",
  	incorrectAnswerResponse: "Incorrect. 18÷3=6",
  	set: 54
  	},

 	2161:{
  	question_tag: "L1MALP54Q1",
   code: "2161",
   title: "Maths Q107",
   learner_question: "6 x 7= ? \r\n1. 13 \r\n2. 35 \r\n3. 42",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6 x 7= 42",
  	incorrectAnswerResponse: "Incorrect. 6 x 7= 42",
  	set: 54
  	},

 	2162:{
  	question_tag: "L1MALP54Q2",
   code: "2162",
   title: "Maths Q108",
   learner_question: "14 ÷ 7=? \r\n1. 21 \r\n2. 2 \r\n3. 7",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 14 ÷ 7=2",
  	incorrectAnswerResponse: "Incorrect. 14 ÷ 7=2",
  	set: 54
  	},

 	4001:{
  	question_tag: "L2MALP1QG",
   code: "4001",
   title: "Num Class Q1",
   learner_question: "19___91 \r\n1. < \r\n2. > \r\n3. =",
  	question: "Which symbol is missing? Greater than, less than or equals? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 19<91. 19 is less than 91.",
  	incorrectAnswerResponse: "Incorrect. 19<91. 19 is less than 91.",
  	set: 1
  	},

 	4002:{
  	question_tag: "L2MALP1Q1",
   code: "4002",
   title: "Num Q1",
   learner_question: "56___48 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 56>48. 56 is greater than 48.",
  	incorrectAnswerResponse: "Incorrect. 56>48. 56 is greater than 48.",
  	set: 1
  	},

 	4003:{
  	question_tag: "L2MALP1Q2",
   code: "4003",
   title: "Num Q2",
   learner_question: "62___62 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 62=62",
  	incorrectAnswerResponse: "Incorrect. 62=62",
  	set: 1
  	},

 	4004:{
  	question_tag: "L2MALP2QG",
   code: "4004",
   title: "Num Class Q2",
   learner_question: "\r\n1. 8 \r\n2. 2 \r\n3. 3",
  	question: "Write: 328 Say: Which number is in the \'tens\' place? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In 328, the number \'2\' is in the tens place.",
  	incorrectAnswerResponse: "Incorrect. In 328, the number \'2\' is in the tens place.",
  	set: 2
  	},

 	4005:{
  	question_tag: "L2MALP2Q1",
   code: "4005",
   title: "Num Q3",
   learner_question: "Which digit is in the \'hundreds\' place of 587? \r\n1. 5 \r\n2. 8 \r\n3. 7",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! In 587, the number \'5\' is in the hundreds place.",
  	incorrectAnswerResponse: "Incorrect. In 587, the number \'5\' is in the hundreds place.",
  	set: 2
  	},

 	4006:{
  	question_tag: "L2MALP2Q2",
   code: "4006",
   title: "Num Q4",
   learner_question: "Which digit is in the \'ones\' place of 943? Enter the single digit number. \r\n1. 9 \r\n2. 4 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 943, the number \'3\' is in the ones place.",
  	incorrectAnswerResponse: "Incorrect. In 943, the number \'3\' is in the ones place.",
  	set: 2
  	},

 	4007:{
  	question_tag: "L2MALP3QG",
   code: "4007",
   title: "Num Class Q3",
   learner_question: "\r\n1. 689 \r\n2. 546 \r\n3. 810",
  	question: "Write: 689, 546, 810 Say: Which is the biggest number? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 810 > 689 > 546",
  	incorrectAnswerResponse: "Incorrect. 810 > 689 > 546",
  	set: 3
  	},

 	4008:{
  	question_tag: "L2MALP3Q1",
   code: "4008",
   title: "Num Q5",
   learner_question: "Which is the biggest number? 754, 498, or 102 \r\n1. 754 \r\n2. 498 \r\n3. 102",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 754 > 498 > 102",
  	incorrectAnswerResponse: "Incorrect. 754 > 498 > 102",
  	set: 3
  	},

 	4009:{
  	question_tag: "L2MALP3Q2",
   code: "4009",
   title: "Num Q6",
   learner_question: "Which is the smallest number? 99, 345, or 612 \r\n1. 99 \r\n2. 345 \r\n3. 612",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 99 < 345 < 612",
  	incorrectAnswerResponse: "Incorrect. 99 < 345 < 612",
  	set: 3
  	},

 	4010:{
  	question_tag: "L2MALP4QG",
   code: "4010",
   title: "Num Class Q4",
   learner_question: "\r\n1. 8 \r\n2. 2 \r\n3. 3",
  	question: "Write: 3,728 Say: Which number is in the \'thousands\' place? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 3,728, the number \'3\' is in the thousands place.",
  	incorrectAnswerResponse: "Incorrect. In 3,728, the number \'3\' is in the thousands place.",
  	set: 4
  	},

 	4011:{
  	question_tag: "L2MALP4Q1",
   code: "4011",
   title: "Num Q7",
   learner_question: "Which digit is in the \'hundreds\' place of 1,587? \r\n1. 1 \r\n2. 5 \r\n3. 7",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In 1,587, the number \'5\' is in the hundreds place.",
  	incorrectAnswerResponse: "Incorrect. In 1,587, the number \'5\' is in the hundreds place.",
  	set: 4
  	},

 	4012:{
  	question_tag: "L2MALP4Q2",
   code: "4012",
   title: "Num Q8",
   learner_question: "Which digit is in the \'ones\' place of 9,543? Enter the single digit number. \r\n1. 9 \r\n2. 5 \r\n3. 3 ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 9,543, the number \'3\' is in the ones place.",
  	incorrectAnswerResponse: "Incorrect. In 9,543, the number \'3\' is in the ones place.",
  	set: 4
  	},

 	4013:{
  	question_tag: "L2MALP5QG",
   code: "4013",
   title: "Num Class Q5",
   learner_question: "\r\n1. (9,841) \r\n2. (8,419) \r\n3. (1,489) ",
  	question: "Write: [4,9,1,8] Say: What is the biggest number you can make from the numbers I wrote? Enter the number of the best answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 9,841 > 8,419 > 1,489",
  	incorrectAnswerResponse: "Incorrect. 9,841 > 8,419 > 1,489",
  	set: 5
  	},

 	4014:{
  	question_tag: "L2MALP5Q1",
   code: "4014",
   title: "Num Q9",
   learner_question: "What is the biggest number you can make from [3,5,7,6]? \r\n1. (7,356) \r\n2. (3,567) \r\n3. (7,653)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 7,653 > 7,356 > 3,567",
  	incorrectAnswerResponse: "Incorrect. 7,653 > 7,356 > 3,567",
  	set: 5
  	},

 	4015:{
  	question_tag: "L2MALP5Q2",
   code: "4015",
   title: "Num Q10",
   learner_question: "What is the biggest number you can make from [2,6,3,1]? \r\n1. (1,236) \r\n2. (3,621) \r\n3. (6,321)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6,321 > 3,621 > 1,236",
  	incorrectAnswerResponse: "Incorrect. 6,321 > 3,621 > 1,236",
  	set: 5
  	},

 	4016:{
  	question_tag: "L2MALP6QG",
   code: "4016",
   title: "Num Class Q6",
   learner_question: "\r\n1. (32 + 56 + 7) \r\n2. (32 + 567) \r\n3. (30,000 + 2,000 + 500 + 60 + 7)",
  	question: "Write: 32,567 Say: Which number is equal to 32,567? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32,567 = 30,000 + 2,000 + 500 + 60 + 7",
  	incorrectAnswerResponse: "Incorrect. 32,567 = 30,000 + 2,000 + 500 + 60 + 7",
  	set: 6
  	},

 	4017:{
  	question_tag: "L2MALP6Q1",
   code: "4017",
   title: "Num Q11",
   learner_question: "Enter the correct symbol: 10,102___9,879 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 10,102 > 9,9879",
  	incorrectAnswerResponse: "Incorrect. 10,102 > 9,9879",
  	set: 6
  	},

 	4018:{
  	question_tag: "L2MALP6Q2",
   code: "4018",
   title: "Num Q12",
   learner_question: "Enter the correct symbol: 58,709___71,171 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 58,709 < 71,171",
  	incorrectAnswerResponse: "Incorrect. 58,709 < 71,171",
  	set: 6
  	},

 	4019:{
  	question_tag: "L2MALP7QG",
   code: "4019",
   title: "Num Class Q7",
   learner_question: "\r\n1. (50,000 + 4,000 + 500 + 80) \r\n2. (54 + 580) \r\n3. (5 + 4 + 5 + 8 + 0)",
  	question: "Write: 54,580 Say: Which number is equal to 54,587? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 54,580 = 50,000+4,000+500+80",
  	incorrectAnswerResponse: "Incorrect. 54,580 = 50,000+4,000+500+80",
  	set: 7
  	},

 	4020:{
  	question_tag: "L2MALP7Q1",
   code: "4020",
   title: "Num Q13",
   learner_question: "Enter the correct symbol: 25,782___19,102 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 25,782>19,102",
  	incorrectAnswerResponse: "Incorrect. 25,782>19,102",
  	set: 7
  	},

 	4021:{
  	question_tag: "L2MALP7Q2",
   code: "4021",
   title: "Num Q14",
   learner_question: "Enter the correct symbol: 69,999___70,000 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 69,999<70,000",
  	incorrectAnswerResponse: "Incorrect. 69,999<70,000",
  	set: 7
  	},

 	4022:{
  	question_tag: "L2MALP8QG",
   code: "4022",
   title: "Num Class Q8",
   learner_question: "\r\n1. (123,456) \r\n2. (98,313) \r\n3. (312,864)",
  	question: "Write: 123,456 98,313 312,865 Say: Which is the biggest number? Enter the number of the correct answer on your phones.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 312,864 > 123,456 > 98,313",
  	incorrectAnswerResponse: "Incorrect. 312,864 > 123,456 > 98,313",
  	set: 8
  	},

 	4023:{
  	question_tag: "L2MALP8Q1",
   code: "4023",
   title: "Num Q15",
   learner_question: "Which number is biggest? \r\n1. (99) \r\n2. (103,000) \r\n3. (85,764)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 103,000 > 85,764 > 99",
  	incorrectAnswerResponse: "Incorrect. 103,000 > 85,764 > 99",
  	set: 8
  	},

 	4024:{
  	question_tag: "L2MALP8Q2",
   code: "4024",
   title: "Num Q16",
   learner_question: "Which number is smallest? \r\n1. (9,879) \r\n2. (123,000) \r\n3. (854,764)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 9,879 < 123,000 < 854,764",
  	incorrectAnswerResponse: "Incorrect. 9,879 < 123,000 < 854,764",
  	set: 8
  	},

 	4025:{
  	question_tag: "L2MALP9QG",
   code: "4025",
   title: "Num Class Q9",
   learner_question: "\r\n1. Bong \r\n2. Lofa \r\n3. Grand Bassa",
  	question: "Say: Open your books to page 47. Look at the chart. Which county has 224,839 people? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Grand Bassa has 224,839 people.",
  	incorrectAnswerResponse: "Incorrect. Grand Bassa has 224,839 people.",
  	set: 9
  	},

 	4026:{
  	question_tag: "L2MALP9Q1",
   code: "4026",
   title: "Num Q17",
   learner_question: "Enter the correct symbol: 135,782___69,102 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 135,782>19,102",
  	incorrectAnswerResponse: "Incorrect. 135,782>19,102",
  	set: 9
  	},

 	4027:{
  	question_tag: "L2MALPQ2",
   code: "4027",
   title: "Num Q18",
   learner_question: "Enter the correct symbol: 452,782___89,602 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 452,782>89,602",
  	incorrectAnswerResponse: "Incorrect. 452,782>89,602",
  	set: 9
  	},

 	4028:{
  	question_tag: "L2MALP10QG",
   code: "4028",
   title: "Num Class Q10",
   learner_question: "\r\n1. 1 \r\n2. 2 \r\n3. 3",
  	question: "Write: 1,2,2,1,2,2__ Say: Complete the pattern. What number goes in the missing space? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1,22,1,22,1",
  	incorrectAnswerResponse: "Incorrect. 1,22,1,22,1",
  	set: 10
  	},

 	4029:{
  	question_tag: "L2MALP10Q1",
   code: "4029",
   title: "Num Q19",
   learner_question: "Which number is missing? 1,4,__,10,13 \r\n1. 5 \r\n2. 7 \r\n3. 9",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1,4,7,10,13",
  	incorrectAnswerResponse: "Incorrect. 1,4,7,10,13",
  	set: 10
  	},

 	4030:{
  	question_tag: "L2MALP10Q2",
   code: "4030",
   title: "Num Q20",
   learner_question: "Which number is missing? 32, 31, 30, ___, 28 \r\n1. 31 \r\n2. 27 \r\n3. 29",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32,31,30,29,28",
  	incorrectAnswerResponse: "Incorrect. 32,31,30,29,28",
  	set: 10
  	},

 	4031:{
  	question_tag: "L2MALP11QG",
   code: "4031",
   title: "Num Class Q11",
   learner_question: "\r\n1. 16, 17 \r\n2. 18,21 \r\n3. 20,23",
  	question: "Write the following on the board: 9,12,15,____,____,24 Say: Which numbers are missing? Answer the text message.",
  	answer: "2",
  	correctAnswerResponse: "Correct! The pattern skip counted by 3\'s. 9,12,15,18,21,24",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 3\'s. 9,12,15,18,21,24",
  	set: 11
  	},

 	4032:{
  	question_tag: "L2MALP11Q1",
   code: "4032",
   title: "Num Q21",
   learner_question: "What number is missing? 10,15,20,____,30 \r\n1. 25 \r\n2. 21 \r\n3. 29",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! The pattern skip counted by 5\'s. 10,15,20,25,30.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 5\'s. 10,15,20,25,30.",
  	set: 11
  	},

 	4033:{
  	question_tag: "L2MALP11Q2",
   code: "4033",
   title: "Num Q22",
   learner_question: "What numbers are missing? 10, 12, 14, ___, ___ \r\n1. 16, 18 \r\n2. 15, 18 \r\n3. 15, 16",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! The pattern skip counted by 2\'s. 10,12,14,16,18.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 2\'s. 10,12,14,16,18.",
  	set: 11
  	},

 	4034:{
  	question_tag: "L2MALP12QG",
   code: "4034",
   title: "Num Class Q12",
   learner_question: " \r\n1. Return home with her family. \r\n2. Start night classes. \r\n3. Has a successful shop.",
  	question: "Say: Open to page 6\r\n2. Look at the timeline. What did Miatta do at age 21?",
  	answer: "2",
  	correctAnswerResponse: "Correct! The timeline tells us that Miatta started night classes at age 21.",
  	incorrectAnswerResponse: "Correct! The timeline tells us that Miatta started night classes at age 21.",
  	set: 12
  	},

 	4035:{
  	question_tag: "L2MALP12Q1",
   code: "4035",
   title: "Num Q23",
   learner_question: "What numbers are missing? 8, 12, 16, ___, ___ \r\n1. 16, 18 \r\n2. 17, 18 \r\n3. 20, 24",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! The pattern skip counted by 4\'s. 8,12,16,20,24",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 4\'s. 8,12,16,20,24",
  	set: 12
  	},

 	4036:{
  	question_tag: "L2MALP12Q2",
   code: "4036",
   title: "Num Q24",
   learner_question: "What numbers are missing? ____, 7,9,11,____ \r\n1. 6, 12 \r\n2. 5, 13 \r\n3. 4, 14",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! The pattern skip counted by 3\'s. 5,7,9,11,13",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 3\'s. 5,7,9,11,13",
  	set: 12
  	},

 	4037:{
  	question_tag: "L2MALP13QG",
   code: "4037",
   title: "Num Class Q13",
   learner_question: "\r\n1. 16 \r\n2. 79 \r\n3. 63",
  	question: "Say: Turn to page 66. Look at the multiplication table. What is 7x9?",
  	answer: "3",
  	correctAnswerResponse: "Correct! 7 x 9= 63. ",
  	incorrectAnswerResponse: "Correct! 7 x 9= 63. ",
  	set: 13
  	},

 	4038:{
  	question_tag: "L2MALP13Q1",
   code: "4038",
   title: "Num Q25",
   learner_question: "What is 5 x 0? \r\n1. 0 \r\n2. 5 \r\n3. 50",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! Any number times 0 is 0! 5 x 0= 0. 100 x 0= 0.",
  	incorrectAnswerResponse: "Correct! Any number times 0 is 0! 5 x 0= 0. 100 x 0= 0.",
  	set: 13
  	},

 	4039:{
  	question_tag: "L2MALP13Q2",
   code: "4039",
   title: "Num Q26",
   learner_question: "What is 115 + 0? \r\n1. 0 \r\n2. 115 \r\n3. 1150",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! When we add 0 to a number, the number stays the same! 1 + 0= 1. 100 + 0= 100.",
  	incorrectAnswerResponse: "Correct! When we add 0 to a number, the number stays the same! 1 + 0= 1. 100 + 0= 100.",
  	set: 13
  	},

 	4040:{
  	question_tag: "L2MALP14QG",
   code: "4040",
   title: "Num Class Q14 ",
   learner_question: "\r\n1. (3,345) \r\n2. (983) \r\n3. (11,341)",
  	question: "Write the following on the board: (3,345) (983) (11,341) Say: Which number is smallest? Answer the text message.",
  	answer: "2",
  	correctAnswerResponse: "Correct! 983 is the smallest number. 11,341 is the biggest number.",
  	incorrectAnswerResponse: "Correct! 983 is the smallest number. 11,341 is the biggest number.",
  	set: 14
  	},

 	4041:{
  	question_tag: "L2MALP14Q1",
   code: "4041",
   title: "Num Q27",
   learner_question: "Write the missing numbers. ___, 10, 12,___, 16. \r\n1. 9, 13 \r\n2. 7, 15 \r\n3. 8, 14",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! The pattern skip counted by 2\'s. 8,10,12,14,16.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 2\'s. 8,10,12,14,16.",
  	set: 14
  	},

 	4042:{
  	question_tag: "L2MALP14Q2",
   code: "4042",
   title: "Num Q28",
   learner_question: "What number comes after 11,239. \r\n1. 12,239 \r\n2. 21,239 \r\n3. 11,240",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! The next number is shown in the ones place. 11,239 - 11,240 - 11,241.",
  	incorrectAnswerResponse: "Correct! The next number is shown in the ones place. 11,239 - 11,240 - 11,241.",
  	set: 14
  	},

 	4043:{
  	question_tag: "L2MALP15QG",
   code: "4043",
   title: "Num Class Q15",
   learner_question: "\r\n1. 389 \r\n2. 390 \r\n3. 489",
  	question: "Say: What is 389 times 1? Answer the text message.",
  	answer: "1",
  	correctAnswerResponse: "Correct! When we multiply by 1, the number stays the same!",
  	incorrectAnswerResponse: "Correct! When we multiply by 1, the number stays the same!",
  	set: 15
  	},

 	4044:{
  	question_tag: "L2MALP15Q1",
   code: "4044",
   title: "Num Q29",
   learner_question: "In the number 10,456, what number is in the TENS place? \r\n1. 0 \r\n2. 5 \r\n3. 6",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! The tens place is the second digit from the right.",
  	incorrectAnswerResponse: "Correct! The tens place is the second digit from the right.",
  	set: 15
  	},

 	4045:{
  	question_tag: "L2MALP15Q2",
   code: "4045",
   title: "Num Q30",
   learner_question: "Which is the biggest number? \r\n1. (1,111) \r\n2. (456) \r\n3. (99)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! 1,111 is the biggest number. 99 is the smallest number.",
  	incorrectAnswerResponse: "Correct! 1,111 is the biggest number. 99 is the smallest number.",
  	set: 15
  	},

 	4046:{
  	question_tag: "L2MALP16QG",
   code: "4046",
   title: "Num Class Q16",
   learner_question: "\r\n1. 4 dollars \r\n2. 6 dollars \r\n3. 10 dollars",
  	question: "Say: Saah had ten dollars. He lost six dollars. How many dollars does Saah have now? Answer the text message. ",
  	answer: "1",
  	correctAnswerResponse: "Correct! Saah had 10 dollars. He lost 6 dollars. 10-6=4.",
  	incorrectAnswerResponse: "Correct! Saah had 10 dollars. He lost 6 dollars. 10-6=4.",
  	set: 16
  	},

 	4047:{
  	question_tag: "L2MALP16Q1",
   code: "4047",
   title: "Num Q31",
   learner_question: "Dan has 2 fish. Naomi has 4 fish. How many fish do Dan and Naomi have together? \r\n1. 2 fish \r\n2. 5 fish \r\n3. 6 fish ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! Dan has 2 fish. Naomi has 4 fish. Together they have 6 fish. 2+4=6. ",
  	incorrectAnswerResponse: "Correct! Dan has 2 fish. Naomi has 4 fish. Together they have 6 fish. 2+4=6. ",
  	set: 16
  	},

 	4048:{
  	question_tag: "L2MALP16Q2",
   code: "4048",
   title: "Num Q32",
   learner_question: "Ellen has eight bananas. She eats five bananas. How many bananas does Ellen have now? \r\n1. 5 \r\n2. 4 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct. Ellen had 8 bananas. She ate 5. Now she has 3 bananas. 8-5=3.",
  	incorrectAnswerResponse: "Correct. Ellen had 8 bananas. She ate 5. Now she has 3 bananas. 8-5=3.",
  	set: 16
  	},

 	4049:{
  	question_tag: "L2MALP17QG",
   code: "4049",
   title: "Num Class Q17",
   learner_question: "\r\n1. 589 \r\n2. 479 \r\n3. 579",
  	question: "Write the following on the board: 257 + 332 Say: 257 Plus 33\r\n2. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 257+332=589",
  	incorrectAnswerResponse: "Incorrect. 257+332=589",
  	set: 17
  	},

 	4050:{
  	question_tag: "L2MALP17Q1",
   code: "4050",
   title: "Num Q33",
   learner_question: "125+344=? \r\n1. 359 \r\n2. 369 \r\n3. 479",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 125+344=369",
  	incorrectAnswerResponse: "Incorrect. 125+344=369",
  	set: 17
  	},

 	4051:{
  	question_tag: "L2MALP17Q2",
   code: "4051",
   title: "Num Q34",
   learner_question: "482+213=? \r\n1. 695 \r\n2. 685 \r\n3. 675",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 482+213= 695",
  	incorrectAnswerResponse: "Incorrect. 482+213= 695",
  	set: 17
  	},

 	4052:{
  	question_tag: "L2MALP18QG",
   code: "4052",
   title: "Num Class Q18",
   learner_question: "\r\n1. 99 \r\n2. 97 \r\n3. 91",
  	question: "Write the following on the board: 19 +72 Say: 19 plus 7\r\n2. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 19+72=91",
  	incorrectAnswerResponse: "Incorrect. 19+72=91",
  	set: 18
  	},

 	4053:{
  	question_tag: "L2MALP18Q1",
   code: "4053",
   title: "Num Q35",
   learner_question: "18+38=? \r\n1. 46 \r\n2. 56 \r\n3. 58",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18+38=56",
  	incorrectAnswerResponse: "Incorrect. 18+38=56",
  	set: 18
  	},

 	4054:{
  	question_tag: "L2MALP18Q2",
   code: "4054",
   title: "Num Q36",
   learner_question: "26+26=? \r\n1. 46 \r\n2. 52 \r\n3. 56",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 26+26=52",
  	incorrectAnswerResponse: "Incorrect. 26+26=52",
  	set: 18
  	},

 	4055:{
  	question_tag: "L2MALP19QG",
   code: "4055",
   title: "Num Class Q19",
   learner_question: "\r\n1. 910 \r\n2. 908 \r\n3. 918",
  	question: "Write the following on the board: 418 +492 Say: 418 plus 49\r\n2. Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 418+492=910",
  	incorrectAnswerResponse: "Incorrect. 418+492=910",
  	set: 19
  	},

 	4056:{
  	question_tag: "L2MALP19Q1",
   code: "4056",
   title: "Num Q37",
   learner_question: "108+338=? \r\n1. 416 \r\n2. 456 \r\n3. 446",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 108+338=446",
  	incorrectAnswerResponse: "Incorrect. 108+338=446",
  	set: 19
  	},

 	4057:{
  	question_tag: "L2MALP19Q2",
   code: "4057",
   title: "Num Q38",
   learner_question: "256+256=? \r\n1. 506 \r\n2. 456 \r\n3. 512",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 256+256=512",
  	incorrectAnswerResponse: "Incorrect. 256+256=512",
  	set: 19
  	},

 	4058:{
  	question_tag: "L2MALP20QG",
   code: "4058",
   title: "Num Class Q20",
   learner_question: "\r\n1. 111 \r\n2. 121 \r\n3. 91",
  	question: "Write the following on the board: 234 -123 Say: What is 234 minus 123? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 234-123=111",
  	incorrectAnswerResponse: "Incorrect. 234-123=111",
  	set: 20
  	},

 	4059:{
  	question_tag: "L2MALP20Q1",
   code: "4059",
   title: "Num Q39",
   learner_question: "467-107=? \r\n1. 367 \r\n2. 360 \r\n3. 306",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 467-107=360",
  	incorrectAnswerResponse: "Incorrect. 467-107=360",
  	set: 20
  	},

 	4060:{
  	question_tag: "L2MALP20Q2",
   code: "4060",
   title: "Num Q40",
   learner_question: "563-312=? \r\n1. 251 \r\n2. 181 \r\n3. 261",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 563-312=251",
  	incorrectAnswerResponse: "Incorrect. 563-312=251",
  	set: 20
  	},

 	4061:{
  	question_tag: "L2MALP21QG",
   code: "4061",
   title: "Num Class Q21",
   learner_question: "\r\n1. 16 \r\n2. 6 \r\n3. 8",
  	question: "Write the following on the board: 24 - 18 Say: 24 minus 18. Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 24-18= 6",
  	incorrectAnswerResponse: "Incorrect. 24-18= 6",
  	set: 21
  	},

 	4062:{
  	question_tag: "L2MALP21Q1",
   code: "4062",
   title: "Num Q41",
   learner_question: "32-13=? \r\n1. 11 \r\n2. 21 \r\n3. 19",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32-13=19",
  	incorrectAnswerResponse: "Incorrect. 32-13=19",
  	set: 21
  	},

 	4063:{
  	question_tag: "L2MALP21Q2",
   code: "4063",
   title: "Num Q42",
   learner_question: "41-23=? \r\n1. 19 \r\n2. 18 \r\n3. 17",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 41-23=18",
  	incorrectAnswerResponse: "Incorrect. 41-23=18",
  	set: 21
  	},

 	4064:{
  	question_tag: "L2MALP22QG",
   code: "4064",
   title: "Num Class Q22",
   learner_question: "\r\n1. 87 \r\n2. 83 \r\n3. 183",
  	question: "Write the following on the board: 241 - 158 Say: 241 minus 158. Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 241-158=83",
  	incorrectAnswerResponse: "Incorrect. 241-158=83",
  	set: 22
  	},

 	4065:{
  	question_tag: "L2MALP22Q1",
   code: "4065",
   title: "Num Q43",
   learner_question: "312-173=? \r\n1. 139 \r\n2. 131 \r\n3. 41",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 312-173=139",
  	incorrectAnswerResponse: "Incorrect. 312-173=139",
  	set: 22
  	},

 	4066:{
  	question_tag: "L2MALP22Q2",
   code: "4066",
   title: "Num Q44",
   learner_question: "416-238=? \r\n1. 172 \r\n2. 272 \r\n3. 178",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 416-238=178",
  	incorrectAnswerResponse: "Incorrect. 416-238=178",
  	set: 22
  	},

 	4067:{
  	question_tag: "L2MALP23QG",
   code: "4067",
   title: "Num Class Q23",
   learner_question: "\r\n1. 137 \r\n2. 37 \r\n3. 27",
  	question: "Write the following on the board: 154 - 127 Say: 154 minus 127. Enter the answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 154-127=27",
  	incorrectAnswerResponse: "Incorrect. 154-127=27",
  	set: 23
  	},

 	4068:{
  	question_tag: "L2MALP23Q1",
   code: "4068",
   title: "Num Q45",
   learner_question: "283-147=? \r\n1. 136 \r\n2. 134 \r\n3. 46",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 283-147=136",
  	incorrectAnswerResponse: "Incorrect. 283-147=136",
  	set: 23
  	},

 	4069:{
  	question_tag: "L2MALP23Q2",
   code: "4069",
   title: "Num Q46",
   learner_question: "467-228=? \r\n1. 149 \r\n2. 239 \r\n3. 249 ",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 467-228=239",
  	incorrectAnswerResponse: "Incorrect. 467-228=239",
  	set: 23
  	},

 	4070:{
  	question_tag: "L2MALP24QG",
   code: "4070",
   title: "Num Class Q24",
   learner_question: "\r\n1. 148 \r\n2. 238 \r\n3. 168",
  	question: "Write the following on the board: 567 - 329 Say: 567 minus 329. Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 567+329=238",
  	incorrectAnswerResponse: "Incorrect. 567+329=238",
  	set: 24
  	},

 	4071:{
  	question_tag: "L2MALP24Q1",
   code: "4071",
   title: "Num Q47",
   learner_question: "45 + 138=? \r\n1. 193 \r\n2. 178 \r\n3. 183",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 45+138=193",
  	incorrectAnswerResponse: "Incorrect. 45+138=193",
  	set: 24
  	},

 	4072:{
  	question_tag: "L2MALP24Q2",
   code: "4072",
   title: "Num Q48",
   learner_question: "635-437=? \r\n1. 198 \r\n2. 208 \r\n3. 218",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 635-437=198",
  	incorrectAnswerResponse: "Incorrect. 635-437=198",
  	set: 24
  	},

 	4073:{
  	question_tag: "L2MALP25QG",
   code: "4073",
   title: "Num Class Q25",
   learner_question: "\r\n1. $55 \r\n2. $15 \r\n3. $5",
  	question: "Say: Flomo has 35 dollars. She spends 20 dollars at a shop. How much money does Flomo have now. Enter the answer on your phone. Do NOT add the \'$\' symbol. ",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 35-20= 15",
  	incorrectAnswerResponse: "Incorrect. 35-20= 15",
  	set: 25
  	},

 	4074:{
  	question_tag: "L2MALP25Q1",
   code: "4074",
   title: "Num Q49",
   learner_question: "Sonie has 25 eggs. She eats 16 eggs. How many eggs does she have now? \r\n1. 31 eggs \r\n2. 41 eggs \r\n3. 9 eggs",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 25-16=9",
  	incorrectAnswerResponse: "Incorrect. 25-16=9",
  	set: 25
  	},

 	4075:{
  	question_tag: "L2MALP25Q2",
   code: "4075",
   title: "Num Q50",
   learner_question: "Sarah buys 120 books. Her friend gives her 93 more books. How many books does she have? \r\n1. 27 books \r\n2. 193 books \r\n3. 213 books",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 120+93=213",
  	incorrectAnswerResponse: "Incorrect. 120+93=213",
  	set: 25
  	},

 	4076:{
  	question_tag: "L2MALP26QG",
   code: "4076",
   title: "Num Class Q26",
   learner_question: "\r\n1. 30 \r\n2. 50 \r\n3. 23",
  	question: "Write the following on the board: 25 x 2 Say: What is 25 times \r\n2. Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 25 x 2= 50",
  	incorrectAnswerResponse: "Incorrect. 25 x 2= 50",
  	set: 26
  	},

 	4077:{
  	question_tag: "L2MALP26Q1",
   code: "4077",
   title: "Num Q51",
   learner_question: "32 x 3 =? \r\n1. 96 \r\n2. 35 \r\n3. 36",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 32 x 3= 96",
  	incorrectAnswerResponse: "Incorrect. 32 x 3= 96",
  	set: 26
  	},

 	4078:{
  	question_tag: "L2MALP26Q2",
   code: "4078",
   title: "Num Q52",
   learner_question: "21 x 4=? \r\n1. 25 \r\n2. 84 \r\n3. 85",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 21 x 4= 84",
  	incorrectAnswerResponse: "Incorrect. 21 x 4= 84",
  	set: 26
  	},

 	4079:{
  	question_tag: "L2MALP27QG",
   code: "4079",
   title: "Num Class Q27",
   learner_question: "\r\n1. 31 \r\n2. 201 \r\n3. 210",
  	question: "Say: What is 21 times 10? Enter the correct answer on your phones.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 21 x 10= 210",
  	incorrectAnswerResponse: "Incorrect. 21 x 10= 210",
  	set: 27
  	},

 	4080:{
  	question_tag: "L2MALP27Q1",
   code: "4080",
   title: "Num Q53",
   learner_question: "5 x 100=? \r\n1. 505 \r\n2. 105 \r\n3. 500",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 5 x 100= 500",
  	incorrectAnswerResponse: "Incorrect. 5 x 100= 500",
  	set: 27
  	},

 	4081:{
  	question_tag: "L2MALP27Q2",
   code: "4081",
   title: "Num Q54",
   learner_question: "23 x 100=? \r\n1. (230) \r\n2. (2,300) \r\n3. (23,000)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23 x 100=2,300",
  	incorrectAnswerResponse: "Incorrect. 23 x 100=2,300",
  	set: 27
  	},

 	4082:{
  	question_tag: "L2MALP28QG",
   code: "4082",
   title: "Num Class Q28",
   learner_question: "\r\n1. 52 \r\n2. 56 \r\n3. 24",
  	question: "Write: 26 x 2 Say: What is 26 times 12? Enter the correct answer on your phones.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 26 x 2= 52",
  	incorrectAnswerResponse: "Incorrect. 26 x 2= 52",
  	set: 28
  	},

 	4083:{
  	question_tag: "L2MALP28Q1",
   code: "4083",
   title: "Num Q55",
   learner_question: "43 x 4=? \r\n1. 172 \r\n2. 171 \r\n3. 162",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 43 x 14=602",
  	incorrectAnswerResponse: "Incorrect. 43 x 14=602",
  	set: 28
  	},

 	4084:{
  	question_tag: "L2MALP28Q2",
   code: "4084",
   title: "Num Q56",
   learner_question: "26 x 8=? \r\n1. 102 \r\n2. 168 \r\n3. 188",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 26 x 8=168",
  	incorrectAnswerResponse: "Incorrect. 26 x 8=168",
  	set: 28
  	},

 	4085:{
  	question_tag: "L2MALP29QG",
   code: "4085",
   title: "Num Class Q29",
   learner_question: "\r\n1. 66 \r\n2. 52 \r\n3. 242",
  	question: "Write: 121 x 2 Say: What is 121 times 2? Enter the correct answer on your phones.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 121 x 2= 242",
  	incorrectAnswerResponse: "Incorrect. 121 x 2= 242",
  	set: 29
  	},

 	4086:{
  	question_tag: "L2MALP29Q1",
   code: "4086",
   title: "Num Q57",
   learner_question: "102 x 4=? \r\n1. 104 \r\n2. 448 \r\n3. 408",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 102 x 4=408",
  	incorrectAnswerResponse: "Incorrect. 102 x 4=408",
  	set: 29
  	},

 	4087:{
  	question_tag: "L2MALP29Q2",
   code: "4087",
   title: "Num Q58",
   learner_question: "223 x 3=? \r\n1. 679 \r\n2. 666 \r\n3. 669",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 223 x 3=669",
  	incorrectAnswerResponse: "Incorrect. 223 x 3=669",
  	set: 29
  	},

 	4088:{
  	question_tag: "L2MALP30QG",
   code: "4088",
   title: "Num Class Q30",
   learner_question: "\r\n1. 825 \r\n2. 565 \r\n3. 635",
  	question: "Write: 165 x 5 Say: What is 165 times 5? Enter the correct answer on your phones.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 165 x 5= 825",
  	incorrectAnswerResponse: "Incorrect. 165 x 5= 825",
  	set: 30
  	},

 	4089:{
  	question_tag: "L2MALP30Q1",
   code: "4089",
   title: "Num Q59",
   learner_question: "264 x 3=? \r\n1. 672 \r\n2. 792 \r\n3. 682",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 264 x 3=792",
  	incorrectAnswerResponse: "Incorrect. 264 x 3=792",
  	set: 30
  	},

 	4090:{
  	question_tag: "L2MALP30Q2",
   code: "4090",
   title: "Num Q60",
   learner_question: "358 x 2=? \r\n1. 716 \r\n2. 608 \r\n3. 816",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 358 x 2=716",
  	incorrectAnswerResponse: "Incorrect. 358 x 2=716",
  	set: 30
  	},

 	4091:{
  	question_tag: "L2MALP31QG",
   code: "4091",
   title: "Num Class Q31",
   learner_question: "\r\n1. 545 \r\n2. 925 \r\n3. 685",
  	question: "Write: 185 x 5 Say: What is 185 times 5? Enter the answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 185 x 5= 925",
  	incorrectAnswerResponse: "Incorrect. 185 x 5= 925",
  	set: 31
  	},

 	4092:{
  	question_tag: "L2MALP31Q1",
   code: "4092",
   title: "Num Q61",
   learner_question: "52 x 100=? \r\n1. (520) \r\n2. (5,200) \r\n3. (52,000)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 52 x 100=5,200",
  	incorrectAnswerResponse: "Incorrect. 52 x 100=5,200",
  	set: 31
  	},

 	4093:{
  	question_tag: "L2MALP31Q2",
   code: "4093",
   title: "Num Q62",
   learner_question: "35 x 6=? \r\n1. 180 \r\n2. 230 \r\n3. 210",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 35 x 6=210",
  	incorrectAnswerResponse: "Incorrect. 35 x 6=210",
  	set: 31
  	},

 	4094:{
  	question_tag: "L2MALP32QG",
   code: "4094",
   title: "Num Class Q32",
   learner_question: "\r\n1. 10 pens \r\n2. 210 pens \r\n3. 200 pens",
  	question: "Say: Every student has 10 pens. There are 20 students. How many pens are there in the class?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 10x 20=200 pens",
  	incorrectAnswerResponse: "Incorrect. 10x 20=200 pens",
  	set: 32
  	},

 	4095:{
  	question_tag: "L2MALP32Q1",
   code: "4095",
   title: "Num Q63",
   learner_question: "How many legs do 23 dogs have? \r\n1. 4 \r\n2. 92 \r\n3. 82",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23 x 4=92 legs.",
  	incorrectAnswerResponse: "Incorrect. 23 x 4=92 legs.",
  	set: 32
  	},

 	4096:{
  	question_tag: "L2MALP32Q2",
   code: "4096",
   title: "Num Q64",
   learner_question: "How many days are there in 32 weeks? \r\n1. 7 \r\n2. 214 \r\n3. 224",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 32 x 7=224",
  	incorrectAnswerResponse: "Incorrect. 32 x 7=224",
  	set: 32
  	},

 	4097:{
  	question_tag: "L2MALP33QG",
   code: "4097",
   title: "Num Class Q33",
   learner_question: "\r\n1. 6 \r\n2. 9 \r\n3. 15",
  	question: "Write the following on the board: 18÷3=? Say: Enter the answer on your phones.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 18÷3=6",
  	incorrectAnswerResponse: "Incorrect. 18÷3=6",
  	set: 33
  	},

 	4098:{
  	question_tag: "L2MALP33Q1",
   code: "4098",
   title: "Num Q65",
   learner_question: "12÷4=? \r\n1. 3 \r\n2. 8 \r\n3. 16",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 12÷4=3",
  	incorrectAnswerResponse: "Incorrect. 12÷4=3",
  	set: 33
  	},

 	4099:{
  	question_tag: "L2MALP33Q2",
   code: "4099",
   title: "Num Q66",
   learner_question: "36÷6=? \r\n1. 5 \r\n2. 6 \r\n3. 30",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 36÷6=6",
  	incorrectAnswerResponse: "Incorrect. 36÷6=6",
  	set: 33
  	},

 	4100:{
  	question_tag: "L2MALP34QG",
   code: "4100",
   title: "Num Class Q34",
   learner_question: "\r\n1. 1 \r\n2. 2 \r\n3. 3",
  	question: "Say: Mary has 15 books. She gives them to her 4 children. How many books will she have remaining if each child gets the same number of books? Enter the answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 15÷4= 3 Remainder 3",
  	incorrectAnswerResponse: "Incorrect. 15÷4= 3 Remainder 3",
  	set: 34
  	},

 	4101:{
  	question_tag: "L2MALP34Q1",
   code: "4101",
   title: "Num Q67",
   learner_question: "16÷5=? \r\n1. (1 R 5) \r\n2. (3 R 1) \r\n3. (2 R 0)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 16÷5=3 R 1",
  	incorrectAnswerResponse: "Incorrect. 16÷5=3 R 1",
  	set: 34
  	},

 	4102:{
  	question_tag: "L2MALP34Q2",
   code: "4102",
   title: "Num Q68",
   learner_question: "16 ÷ 7=? \r\n1. (2 R 2) \r\n2. (2 R 0) \r\n3. (2 R 3)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "16 ÷ 7 = 2 R 2",
  	incorrectAnswerResponse: "16 ÷ 7 = 2 R 2",
  	set: 34
  	},

 	4103:{
  	question_tag: "L2MALP35QG",
   code: "4103",
   title: "Num Class Q35",
   learner_question: "\r\n1. 2 days \r\n2. 20 days \r\n3. 200 days",
  	question: "Say: Flomo has 200 eggs. If she eats 10 eggs every day, how many days will she have eggs? Enter the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 200 ÷ 10= 20",
  	incorrectAnswerResponse: "Incorrect. 200 ÷ 10= 20",
  	set: 35
  	},

 	4104:{
  	question_tag: "L2MALP35Q1",
   code: "4104",
   title: "Num Q69",
   learner_question: "5,000 ÷ 500=? \r\n1. 1 \r\n2. 10 \r\n3. 100",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 5,000÷500= 10",
  	incorrectAnswerResponse: "Incorrect. 5,000÷500= 10",
  	set: 35
  	},

 	4105:{
  	question_tag: "L2MALP35Q2",
   code: "4105",
   title: "Num Q70",
   learner_question: "6,600 ÷ 10=? \r\n1. 66,000 \r\n2. 66 \r\n3. 660",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6,600 ÷ 10= 660",
  	incorrectAnswerResponse: "Incorrect. 6,600 ÷ 10= 660",
  	set: 35
  	},

 	4106:{
  	question_tag: "L2MALP36QG",
   code: "4106",
   title: "Num Class Q36",
   learner_question: "Enter the correct answer. \r\n1. 12 \r\n2. 11 \r\n3. 44",
  	question: "Say: What is 48 divided by 4? Enter the number of the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 48 ÷ 4=12",
  	incorrectAnswerResponse: "Incorrect. 48 ÷ 4=12",
  	set: 36
  	},

 	4107:{
  	question_tag: "L2MALP36Q1",
   code: "4107",
   title: "Num Q71",
   learner_question: "49 ÷ 7=? \r\n1. 42 \r\n2. 9 \r\n3. 7",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 49 ÷ 7=7",
  	incorrectAnswerResponse: "Incorrect. 49 ÷ 7=7",
  	set: 36
  	},

 	4108:{
  	question_tag: "L2MALP36Q2",
   code: "4108",
   title: "Num Q72",
   learner_question: "48 ÷ 6=? \r\n1. 42 \r\n2. 8 \r\n3. 12",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 48 ÷ 6= 8",
  	incorrectAnswerResponse: "Incorrect. 48 ÷ 6= 8",
  	set: 36
  	},

 	4109:{
  	question_tag: "L2MALP37QG",
   code: "4109",
   title: "Num Class Q37",
   learner_question: "\r\n1. 19 \r\n2. 13 \r\n3. 36",
  	question: "Say: What is 39 divided by 3? Enter the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 39 ÷ 3= 13",
  	incorrectAnswerResponse: "Incorrect. 39 ÷ 3= 13",
  	set: 37
  	},

 	4110:{
  	question_tag: "L2MALP37Q1",
   code: "4110",
   title: "Num Q73",
   learner_question: "60 ÷ 5=? Enter the correct answer. \r\n1. 11 \r\n2. 10 R 10 \r\n3. 12",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 60 ÷ 5=12",
  	incorrectAnswerResponse: "Incorrect. 60 ÷ 5=12",
  	set: 37
  	},

 	4111:{
  	question_tag: "L2MALP37Q2",
   code: "4111",
   title: "Num Q74",
   learner_question: "42 ÷ 2=? \r\n1. 40 \r\n2. 20 \r\n3. 21",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Correct! 42 ÷ 2= 21",
  	incorrectAnswerResponse: "Incorrect. Correct! 42 ÷ 2= 21",
  	set: 37
  	},

 	4112:{
  	question_tag: "L2MALP38QG",
   code: "4112",
   title: "Num Class Q38",
   learner_question: "\r\n1. (5 R 5) \r\n2. (4 R 1) \r\n3. (6 R 1)",
  	question: "Say: What is 25 divided by 4? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 25 ÷ 4= 6 R 1",
  	incorrectAnswerResponse: "Incorrect. 25 ÷ 4= 6 R 1",
  	set: 38
  	},

 	4113:{
  	question_tag: "L2MALP38Q1",
   code: "4113",
   title: "Num Q75",
   learner_question: "42 ÷ 5=? \r\n1. (8 R 2) \r\n2. (9 R 1) \r\n3. (7 R 4)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 42 ÷ 5= 8 R 2",
  	incorrectAnswerResponse: "Incorrect. 42 ÷ 5= 8 R 2",
  	set: 38
  	},

 	4114:{
  	question_tag: "L2MALP38Q2",
   code: "4114",
   title: "Num Q76",
   learner_question: "64 ÷ 2=? \r\n1. 8 \r\n2. 32 \r\n3. 24",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 64 ÷ 2= 32",
  	incorrectAnswerResponse: "Incorrect. 64 ÷ 2= 32",
  	set: 38
  	},

 	4115:{
  	question_tag: "L2MALP39QG",
   code: "4115",
   title: "Num Class Q39",
   learner_question: "\r\n1. 41 \r\n2. 55 \r\n3. 51",
  	question: "Say: What is 205 divided by 5? Enter the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 205 ÷ 5= 41",
  	incorrectAnswerResponse: "Incorrect. 205 ÷ 5= 41",
  	set: 39
  	},

 	4116:{
  	question_tag: "L2MALP39Q1",
   code: "4116",
   title: "Num Q77",
   learner_question: "333 ÷ 3=? \r\n1. 11 \r\n2. 111 \r\n3. 110",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 333 ÷ 3= 111",
  	incorrectAnswerResponse: "Incorrect. 333 ÷ 3= 111",
  	set: 39
  	},

 	4117:{
  	question_tag: "L2MALP39Q2",
   code: "4117",
   title: "Num Q78",
   learner_question: "335 ÷ 3=? \r\n1. (111 R 1) \r\n2. (112 R 2) \r\n3. (111 R 2)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 335 ÷ 3= 111 R 2",
  	incorrectAnswerResponse: "Incorrect. 335 ÷ 3= 111 R 2",
  	set: 39
  	},

 	4118:{
  	question_tag: "L2MALP40QG",
   code: "4118",
   title: "Num Class Q40",
   learner_question: "\r\n1. (85 R 1) \r\n2. (105 R 1) \r\n3. (86 R 1)",
  	question: "Say: What is 426 divided by 5? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 426 ÷ 5= 85 R 1",
  	incorrectAnswerResponse: "Incorrect. 426 ÷ 5= 85 R 1",
  	set: 40
  	},

 	4119:{
  	question_tag: "L2MALP40Q1",
   code: "4119",
   title: "Num Q79",
   learner_question: "87 ÷ 3=? \r\n1. (28 R 1) \r\n2. (29 R 0) \r\n3. (28 R 2)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 87 ÷ 3= 29",
  	incorrectAnswerResponse: "Incorrect. 87 ÷ 3= 29",
  	set: 40
  	},

 	4120:{
  	question_tag: "L2MALP40Q2",
   code: "4120",
   title: "Num Q80",
   learner_question: "125 ÷ 5=? \r\n1. 25 \r\n3. 5 \r\n3. 120",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 125 ÷ 5=25",
  	incorrectAnswerResponse: "Incorrect. 125 ÷ 5=25",
  	set: 40
  	},

 	4121:{
  	question_tag: "L2MALP41QG",
   code: "4121",
   title: "Num Class Q41",
   learner_question: "\r\n1. 122 \r\n2. 78 \r\n3. 82",
  	question: "Write: 234 - 156 Say: What is 234 minus 156? Enter the correct answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 234-156=78",
  	incorrectAnswerResponse: "Incorrect. 234-156=78",
  	set: 41
  	},

 	4122:{
  	question_tag: "L2MALP41Q1",
   code: "4122",
   title: "Num Q81",
   learner_question: "312 - 278=? \r\n1. 104 \r\n2. 54 \r\n3. 34",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 312-278=34",
  	incorrectAnswerResponse: "Incorrect. 312-278=34",
  	set: 41
  	},

 	4123:{
  	question_tag: "L2MALP41Q2",
   code: "4123",
   title: "Num Q82",
   learner_question: "367 + 245=? \r\n1. 122 \r\n2. 612 \r\n3. 542",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 367+245= 612",
  	incorrectAnswerResponse: "Incorrect. 367+245= 612",
  	set: 41
  	},

 	4124:{
  	question_tag: "L2MALP42QG",
   code: "4124",
   title: "Num Class Q42",
   learner_question: "\r\n1. 40 \r\n2. 400 \r\n3. 4000",
  	question: "Say: What is 4,000 divided by 100? Enter the answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 4,000 ÷ 100= 40",
  	incorrectAnswerResponse: "Incorrect. 4,000 ÷ 100= 40",
  	set: 42
  	},

 	4125:{
  	question_tag: "L2MALP42Q1",
   code: "4125",
   title: "Num Q83",
   learner_question: "319 ÷ 3=? \r\n1. (106 R 1) \r\n2. (107 R 0) \r\n3. (108 R 2)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 319 ÷ 3= 106 R 1 ",
  	incorrectAnswerResponse: "Incorrect. 319 ÷ 3= 106 R 1 ",
  	set: 42
  	},

 	4126:{
  	question_tag: "L2MALP42Q2",
   code: "4126",
   title: "Num Q84",
   learner_question: "234 X 4=? \r\n1. 816 \r\n2. 886 \r\n3. 936",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 234 x 4 =936",
  	incorrectAnswerResponse: "Incorrect. 234 x 4 =936",
  	set: 42
  	},

 	4127:{
  	question_tag: "L2MALP43QG",
   code: "4127",
   title: "Num Class Q43",
   learner_question: "\r\n1. 680 \r\n2. 710 \r\n3. 820",
  	question: "Write: 483 + 227 Say: What is 483 plus 227? Enter the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 483 + 227= 710",
  	incorrectAnswerResponse: "Incorrect. 483 + 227= 710",
  	set: 43
  	},

 	4128:{
  	question_tag: "L2MALP43Q1",
   code: "4128",
   title: "Num Q85",
   learner_question: "23 x 10=? \r\n1. 23 \r\n2. 230 \r\n3. 2,300",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 23 x 10= 230",
  	incorrectAnswerResponse: "Incorrect. 23 x 10= 230",
  	set: 43
  	},

 	4129:{
  	question_tag: "L2MALP43Q2",
   code: "4129",
   title: "Num Q86",
   learner_question: "108 ÷ 4=? \r\n1. 27 \r\n2. 22 \r\n3. 28",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 108÷ 4=27",
  	incorrectAnswerResponse: "Incorrect. 108÷ 4=27",
  	set: 43
  	},

 	4130:{
  	question_tag: "L2MALP44QG",
   code: "4130",
   title: "Num Class Q44",
   learner_question: "What fraction are \'A\'? \r\n1. 1/4 \r\n2. 1/3 \r\n3. 1/2",
  	question: "Write the following on the board: (ABBB) Say: I wrote four letters on the board. What fraction of the letters are letter A?",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (ABBB) 1/4 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (ABBB) 1/4 of the letters are A.",
  	set: 44
  	},

 	4131:{
  	question_tag: "L2MALP44Q1",
   code: "4131",
   title: "Num Q87",
   learner_question: "What fraction are A? (AABBB) \r\n1. 2/3 \r\n2. 1/5 \r\n3. 2/5",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (AABBB) 2/5 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (AABBB) 2/5 of the letters are A.",
  	set: 44
  	},

 	4132:{
  	question_tag: "L2MALP44Q2",
   code: "4132",
   title: "Num Q88",
   learner_question: "What fraction are A? (ABB) \r\n1. 1/2 \r\n2. 1/3 \r\n3. 1/4",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (ABB) 1/3 of the letters are A.",
  	incorrectAnswerResponse: "Incorrect. (ABB) 1/3 of the letters are A.",
  	set: 44
  	},

 	4133:{
  	question_tag: "L2MALP45QG",
   code: "4133",
   title: "Num Class Q45",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 1/3 ___ 2/3 Say: Is one third Greater than, less than or equal to two thirds? Enter the correct symbol.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/3 < 2/3",
  	incorrectAnswerResponse: "Incorrect. 1/3 < 2/3",
  	set: 45
  	},

 	4134:{
  	question_tag: "L2MALP45Q1",
   code: "4134",
   title: "Num Q89",
   learner_question: "2/6 ____ 1/6 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2/6 > 1/6",
  	incorrectAnswerResponse: "Incorrect. 2/6 > 1/6",
  	set: 45
  	},

 	4135:{
  	question_tag: "L2MALP45Q2",
   code: "4135",
   title: "Num Q90",
   learner_question: "1/4 ____ 3/4 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/4 < 3/4",
  	incorrectAnswerResponse: "Incorrect. 1/4 < 3/4",
  	set: 45
  	},

 	4136:{
  	question_tag: "L2MALP46QG",
   code: "4136",
   title: "Num Class Q46",
   learner_question: "\r\n1. (3/2) \r\n2. (2/5) \r\n3. (15)",
  	question: "Write: 3/5 Say: Which is a \'like\' fraction to three fifths? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3/5 and 2/5 are \'like\' fractions. They have the same denominator.",
  	incorrectAnswerResponse: "Incorrect. 3/5 and 2/5 are \'like\' fractions. They have the same denominator.",
  	set: 46
  	},

 	4137:{
  	question_tag: "L2MALP46Q1",
   code: "4137",
   title: "Num Q91",
   learner_question: "Which is a \'like\' fraction with 5/6? \r\n1. (3/5) \r\n2. (1/6) \r\n3. (6/5)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2/6 and 5/6 are like fractions. They have the same denominator.",
  	incorrectAnswerResponse: "Incorrect. 2/6 and 5/6 are like fractions. They have the same denominator.",
  	set: 46
  	},

 	4138:{
  	question_tag: "L2MALP46Q2",
   code: "4138",
   title: "Num Q92",
   learner_question: "Which is a \'like\' fraction with 3/7? \r\n1. (7/3) \r\n2. (1/3) \r\n3. (6/7)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3/7 and 6/7 are like fractions. They have the same denominator.",
  	incorrectAnswerResponse: "Incorrect. 3/7 and 6/7 are like fractions. They have the same denominator.",
  	set: 46
  	},

 	4139:{
  	question_tag: "L2MALP47QG",
   code: "4139",
   title: "Num Class Q47",
   learner_question: "\r\n1. (3) \r\n2. (2/6) \r\n3. (2/3)",
  	question: "Write: 1/3 + 1/3=? Say: What is one third plus one third? Enter the number of the correct answer on your phones",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1/3+1/3=2/3.",
  	incorrectAnswerResponse: "Incorrect. 1/3+1/3=2/3.",
  	set: 47
  	},

 	4140:{
  	question_tag: "L2MALP47Q1",
   code: "4140",
   title: "Num Q93",
   learner_question: "1/2 + 1/2=? \r\n1. (1/2) \r\n2. (1) \r\n3. (2/4)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1/2 + 1/2 = 1",
  	incorrectAnswerResponse: "Incorrect. 1/2 + 1/2 = 1",
  	set: 47
  	},

 	4141:{
  	question_tag: "L2MALP47Q2",
   code: "4141",
   title: "Num Q94",
   learner_question: "13/15 - 9/15 =? \r\n1. (4) \r\n2. (1/4) \r\n3. (4/15)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 13/15 - 9/15 = 4/15",
  	incorrectAnswerResponse: "Incorrect. 13/15 - 9/15 = 4/15",
  	set: 47
  	},

 	4142:{
  	question_tag: "L2MALP48QG",
   code: "4142",
   title: "Num Class Q48",
   learner_question: "\r\n1. (3) \r\n2. (3/10) \r\n3. (3/5)",
  	question: "Write: 1/5 + 2/5=? Say: What is one third plus one third? Enter the number of the correct answer on your phones",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1/5+2/5=3/5.",
  	incorrectAnswerResponse: "Incorrect. 1/5+2/5=3/5.",
  	set: 48
  	},

 	4143:{
  	question_tag: "L2MALP48Q1",
   code: "4143",
   title: "Num Q95",
   learner_question: "1/11 + 1/11=? \r\n1. (11/11) \r\n2. (2/11) \r\n3. (2/22)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1/11 + 1/11=2/11",
  	incorrectAnswerResponse: "Incorrect. 1/11 + 1/11=2/11",
  	set: 48
  	},

 	4144:{
  	question_tag: "L2MALP48Q2",
   code: "4144",
   title: "Num Q96",
   learner_question: "13/15 - 9/15 =? \r\n1. (4) \r\n2. (1/4) \r\n3. (4/15)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 13/15 - 9/15 = 4/15",
  	incorrectAnswerResponse: "Incorrect. 13/15 - 9/15 = 4/15",
  	set: 48
  	},

 	4145:{
  	question_tag: "L2MALP49QG",
   code: "4145",
   title: "Num Class Q49",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 1(2/3) ___ 2(1/3) Say: Is one and two thirds Greater than, less than or equal to two and one third? Enter the correct symbol.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1(2/3) < 1(1/3)",
  	incorrectAnswerResponse: "Incorrect. 1(2/3) < 1(1/3)",
  	set: 49
  	},

 	4146:{
  	question_tag: "L2MALP49Q1",
   code: "4146",
   title: "Num Q97",
   learner_question: "2(2/5) ____ 3(1/3) \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 2(2/5) <3(1/3)",
  	incorrectAnswerResponse: "Incorrect. 2(2/5) <3(1/3)",
  	set: 49
  	},

 	4147:{
  	question_tag: "L2MALP49Q2",
   code: "4147",
   title: "Num Q98",
   learner_question: "1(2/4) ____ 1(1/2) \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1(2/4) = 1(1/2)",
  	incorrectAnswerResponse: "Incorrect. 1(2/4) = 1(1/2)",
  	set: 49
  	},

 	4148:{
  	question_tag: "L2MALP50QG",
   code: "4148",
   title: "Num Class Q50",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 3/2 ___ 1/4 Say: Which is greater, three halves, or one quarter? Enter the number of the correct symbol on your phones.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3/2>1/4",
  	incorrectAnswerResponse: "Incorrect. 3/2>1/4",
  	set: 50
  	},

 	4149:{
  	question_tag: "L2MALP50Q1",
   code: "4149",
   title: "Num Q99",
   learner_question: "(77/1) ____ (1/77) \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 77/1 >1/77",
  	incorrectAnswerResponse: "Incorrect. 77/1 >1/77",
  	set: 50
  	},

 	4150:{
  	question_tag: "L2MALP50Q2",
   code: "4150",
   title: "Num Q100",
   learner_question: "13/13 ____ 3/3 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 13/13=3/3 = 1",
  	incorrectAnswerResponse: "Incorrect. 13/13=3/3 = 1",
  	set: 50
  	},

 	4151:{
  	question_tag: "L2MALP51QG",
   code: "4151",
   title: "Maths Class Q51",
   learner_question: "\r\n1. (12/4) \r\n2. 1 (3/4) \r\n3. (\r\n1.23)",
  	question: "Which number is an improper fraction? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) Improper fractions have numerators bigger than their denominators. 12/4 = 3",
  	incorrectAnswerResponse: "Incorrect. Improper fractions have numerators bigger than their denominators. 12/4 = 3",
  	set: 51
  	},

 	4152:{
  	question_tag: "L2MALP51Q1",
   code: "4152",
   title: "Maths Q101",
   learner_question: "8/4= ? \r\n1. 4(1/2) \r\n2. 4 \r\n3. 2",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 8/4 = 2",
  	incorrectAnswerResponse: "Incorrect. 8/4 = 2",
  	set: 51
  	},

 	4153:{
  	question_tag: "L2MALP51Q2",
   code: "4153",
   title: "Maths Q102",
   learner_question: "9/2= ? \r\n1. 4(1/2) \r\n2. 2(1/9) \r\n3. 5",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) 9/2 = 4(1/2)",
  	incorrectAnswerResponse: "Incorrect. 9/2 = 4(1/2)",
  	set: 51
  	},

 	4154:{
  	question_tag: "L2MALP52QG",
   code: "4154",
   title: "Maths Class Q52",
   learner_question: "\r\n1. (1/2) and (2/1) \r\n2. (3/4) and (2/4) \r\n3. (1/2) and (2/4)",
  	question: "Which pair of fractions are equivalent fractions? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 2/4 = 1/2",
  	incorrectAnswerResponse: "Incorrect. 2/4 = 1/2",
  	set: 52
  	},

 	4155:{
  	question_tag: "L2MALP52Q1",
   code: "4155",
   title: "Maths Q103",
   learner_question: "50/100 = ? \r\n1. 10/20 \r\n2. 5/50 \r\n2. 100/50",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) 50/100 = 10/20 = 1/2",
  	incorrectAnswerResponse: "Incorrect. 50/100 = 10/20 = 1/2",
  	set: 52
  	},

 	4156:{
  	question_tag: "L2MALP52Q2",
   code: "4156",
   title: "Maths Q104",
   learner_question: "22/1= ? \r\n1. 22 \r\n2. 23/2 \r\n3. 2",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) 22/1 = 22",
  	incorrectAnswerResponse: "Incorrect. 22/1 = 22",
  	set: 52
  	},

 	4157:{
  	question_tag: "L2MALP53QG",
   code: "4157",
   title: "Maths Class Q53",
   learner_question: "\r\n1. 1/2 \r\n2. 2/5 \r\n3. 4/12",
  	question: "Which fraction is the smallest? Enter the number of the smallest fraction.",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 4/12 < 2/5 < 1/2",
  	incorrectAnswerResponse: "Incorrect. 4/12 < 2/5 < 1/2",
  	set: 53
  	},

 	4158:{
  	question_tag: "L2MALP53Q1",
   code: "4158",
   title: "Maths Q105",
   learner_question: "6/5 = ? \r\n1. 5/6 \r\n2. 1 (1/5) \r\n3. 1(1/6)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) 6/5 = 1(1/5)",
  	incorrectAnswerResponse: "Incorrect. 6/5 = 1(1/5)",
  	set: 53
  	},

 	4159:{
  	question_tag: "L2MALP53Q2",
   code: "4159",
   title: "Maths Q106",
   learner_question: "Which is a mixed fraction? \r\n1. 22/5 \r\n2. 2(3/4) \r\n3. 4/5",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) Mixed fractions have a whole number and fraction. 2(3/4) is a mixed fraction.",
  	incorrectAnswerResponse: "Incorrect. Mixed fractions have a whole number and fraction. 2(3/4) is a mixed fraction.",
  	set: 53
  	},

 	4160:{
  	question_tag: "L2MALP54QG",
   code: "4160",
   title: "Maths Class Q54",
   learner_question: "\r\n1. 6/5 \r\n2. 2(1/10) \r\n3. 1/110",
  	question: "Which is the largest number? Enter the number of the largest answer.",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) 2(1/10) > 6/5 > 1/110",
  	incorrectAnswerResponse: "Incorrect. 2(1/10) > 6/5 > 1/110",
  	set: 54
  	},

 	4161:{
  	question_tag: "L2MALP54Q1",
   code: "4161",
   title: "Maths Q107",
   learner_question: "3/4 = ? \r\n1. 4/5 \r\n2. 12/16 \r\n3. 1(1/5)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) 3/4 = 12/16",
  	incorrectAnswerResponse: "Incorrect. 3/4 = 12/16",
  	set: 54
  	},

 	4162:{
  	question_tag: "L2MALP54Q2",
   code: "4162",
   title: "Maths Q108",
   learner_question: "10/3 = ? \r\n1. 3 \r\n2. 3 (1/10 \r\n3. 3(1/3)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 10/3 = 3(3/10)",
  	incorrectAnswerResponse: "Incorrect. 10/3 = 3(3/10)",
  	set: 54
  	},

 	6001:{
  	question_tag: "L3MALP1QG",
   code: "6001",
   title: "Maths Class Q1",
   learner_question: "\r\n1. Six thousand eight hundred sixty \r\n2. Six hundred eighty six \r\n3. Sixty-eight thousand five hundred.",
  	question: "Write the following on the board: 6,860 Say: What number is this. Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 6,860 is Six thousand eight hundred sixty",
  	incorrectAnswerResponse: "Incorrect. 6,860 is Six thousand eight hundred sixty",
  	set: 1
  	},

 	6002:{
  	question_tag: "L3MALP1Q1",
   code: "6002",
   title: "Maths Q1",
   learner_question: "What number is 1,000,000? \r\n1. One thousand \r\n2. One hundred thousand \r\n3. One million",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1,000,000 is One million",
  	incorrectAnswerResponse: "Incorrect. 1,000,000 is One million",
  	set: 1
  	},

 	6003:{
  	question_tag: "L3MALP1Q2",
   code: "6003",
   title: "Maths Q2",
   learner_question: "What number is 834? \r\n1. Eight thousand thirty-four \r\n2. Eight hundred thirty-four \r\n3. Eight hundred thirty",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 834 is Eight hundred thirty-four",
  	incorrectAnswerResponse: "Incorrect. 834 is Eight hundred thirty-four",
  	set: 1
  	},

 	6004:{
  	question_tag: "L3MALP2QG",
   code: "6004",
   title: "Maths Class Q2",
   learner_question: "\r\n1. It shows a customer has paid. \r\n2. It shows how much was paid for an item. \r\n3. It can be used as cash.",
  	question: "Say: What is NOT a reason a receipt is important? Enter the correct answer in your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Receipts cannot be used as cash.",
  	incorrectAnswerResponse: "Incorrect. Receipts cannot be used as cash.",
  	set: 2
  	},

 	6005:{
  	question_tag: "L3MALP2Q1",
   code: "6005",
   title: "Maths Q3",
   learner_question: "What is NOT something you write on a receipt? \r\n1. The date \r\n2. The price paid \r\n3. The age of the customer",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Receipts do not show the age of the customer.",
  	incorrectAnswerResponse: "Incorrect. Receipts do not show the age of the customer.",
  	set: 2
  	},

 	6006:{
  	question_tag: "L3MALP2Q2",
   code: "6006",
   title: "Maths Q4",
   learner_question: "What number is 82,300? \r\n1. Eighty-two thousand three hundred. \r\n2. Eight hundred thousand thirty \r\n3. Eight thousand two hundred thirty",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 82,300 is Eighty-two thousand three hundred.",
  	incorrectAnswerResponse: "Incorrect. 82,300 is Eighty-two thousand three hundred.",
  	set: 2
  	},

 	6007:{
  	question_tag: "L3MALP3QG",
   code: "6007",
   title: "Maths Class Q3",
   learner_question: "\r\n1. To take money out of the bank. \r\n2. To put money in the bank. \r\n3. To buy something from the bank.",
  	question: "Say: What does it mean to \'deposit\' money at the bank. Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When we deposit money, we put money in the bank.",
  	incorrectAnswerResponse: "Incorrect. When we deposit money, we put money in the bank.",
  	set: 3
  	},

 	6008:{
  	question_tag: "L3MALP3Q1",
   code: "6008",
   title: "Maths Q5",
   learner_question: "What do we call taking our money from the bank? \r\n1. Withdrawal \r\n2. Deposit \r\n3. Stealing ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Taking money from the bank is called a \'withdrawal\'.",
  	incorrectAnswerResponse: "Incorrect. Taking money from the bank is called a \'withdrawal\'.",
  	set: 3
  	},

 	6009:{
  	question_tag: "L3MALP3Q2",
   code: "6009",
   title: "Maths Q6",
   learner_question: "What number is 834,200? \r\n1. Eighty-three thousand four hundred twenty. \r\n2. Eight thousand three hundred forty-two \r\n3. Eight hundred thirty-four thousand two hundred. ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 834,200 is Eight hundred thirty-four thousand two hundred.",
  	incorrectAnswerResponse: "Incorrect. 834,200 is Eight hundred thirty-four thousand two hundred.",
  	set: 3
  	},

 	6010:{
  	question_tag: "L3MALP4QG",
   code: "6010",
   title: "Maths Class Q4",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 34___120 Say: What symbol belongs in the empty space? Greater than, less than or equal to? Enter the answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 34<120. 34 is less than 120.",
  	incorrectAnswerResponse: "Incorrect. 34<120. 34 is less than 120.",
  	set: 4
  	},

 	6011:{
  	question_tag: "L3MALP4Q1",
   code: "6011",
   title: "Maths Q7",
   learner_question: "1,230 ___999 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1,230 > 999. 1,230 is greater than 999.",
  	incorrectAnswerResponse: "Incorrect. 1,230 > 999. 1,230 is greater than 999.",
  	set: 4
  	},

 	6012:{
  	question_tag: "L3MALP4Q2",
   code: "6012",
   title: "Maths Q8",
   learner_question: "3,432 ___3,432 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3,432 = 3,432. 3,432 is equal to 3,432",
  	incorrectAnswerResponse: "Incorrect. 3,432 = 3,432. 3,432 is equal to 3,432",
  	set: 4
  	},

 	6013:{
  	question_tag: "L3MALP5QG",
   code: "6013",
   title: "Maths Class Q5",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: 341,321___56,000 Say: What symbol belongs in the empty space? Greater than, less than or equal to? Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 341,321 > 56,000",
  	incorrectAnswerResponse: "Incorrect. 341,321 > 56,000",
  	set: 5
  	},

 	6014:{
  	question_tag: "L3MALP5Q1",
   code: "6014",
   title: "Maths Q9",
   learner_question: "2,000 ___1,999 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2,000 > 1,999",
  	incorrectAnswerResponse: "Incorrect. 2,000 > 1,999",
  	set: 5
  	},

 	6015:{
  	question_tag: "L3MALP5Q2",
   code: "6015",
   title: "Maths Q10",
   learner_question: "41,132 ___39,835 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 41,132 >39,835",
  	incorrectAnswerResponse: "Incorrect. 41,132 >39,835",
  	set: 5
  	},

 	6016:{
  	question_tag: "L3MALP6QG",
   code: "6016",
   title: "Maths Class Q6",
   learner_question: "\r\n1. 83,456 \r\n2. 12,321 \r\n3. 999",
  	question: "Say: Which is the largest number? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 83,456 is the largest number.",
  	incorrectAnswerResponse: "Incorrect. 83,456 is the largest number.",
  	set: 6
  	},

 	6017:{
  	question_tag: "L3MALP6Q1",
   code: "6017",
   title: "Maths Q11",
   learner_question: "Which is the smallest number? \r\n1. 89 \r\n2. 632 \r\n3. 1,231",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 89 is the smallest number.",
  	incorrectAnswerResponse: "Incorrect. 89 is the smallest number.",
  	set: 6
  	},

 	6018:{
  	question_tag: "L3MALP6Q2",
   code: "6018",
   title: "Maths Q12",
   learner_question: "Which is the largest number? \r\n1. 546 \r\n2. 465 \r\n3. 654 ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 654 is the largest number.",
  	incorrectAnswerResponse: "Incorrect. 654 is the largest number.",
  	set: 6
  	},

 	6019:{
  	question_tag: "L3MALP7QG",
   code: "6019",
   title: "Maths Class Q7",
   learner_question: "\r\n1. (300) \r\n2. (350) \r\n3. (400)",
  	question: "Say: Round 345 to the nearest hundred. Enter the answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 300. 345 rounded to the nearest hundred is 300. We look at the tens place and round down because the number is less than 5. ",
  	incorrectAnswerResponse: "Incorrect. 300. 345 rounded to the nearest hundred is 300. We look at the tens place and round down because the number is less than 5. ",
  	set: 7
  	},

 	6020:{
  	question_tag: "L3MALP7Q1",
   code: "6020",
   title: "Maths Q13",
   learner_question: "Round to the nearest thousand: 3,621 \r\n1. (3,600) \r\n2. (4,000) \r\n3. (6,620)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 4,000. We look at the hundreds place and round up because the number is 5 or higher.",
  	incorrectAnswerResponse: "Incorrect. 4,000. We look at the hundreds place and round up because the number is 5 or higher.",
  	set: 7
  	},

 	6021:{
  	question_tag: "L3MALP7Q2",
   code: "6021",
   title: "Maths Q14",
   learner_question: "Round to the nearest ten: 128 \r\n1. (100) \r\n2. (130) \r\n3. (200)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 130. We look at the ones place and round up because the number is 5 or higher.",
  	incorrectAnswerResponse: "Incorrect. 130. We look at the ones place and round up because the number is 5 or higher.",
  	set: 7
  	},

 	6022:{
  	question_tag: "L3MALP8QG",
   code: "6022",
   title: "Maths Class Q8",
   learner_question: "\r\n1. 50 \r\n2. 55 \r\n3. 60",
  	question: "Write the following on the board: 20, 40, ___, 80, 100 Say: Which number is missing. Enter the missing number in your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 20, 40, 60, 80, 100.",
  	incorrectAnswerResponse: "Incorrect. 20, 40, 60, 80, 100.",
  	set: 8
  	},

 	6023:{
  	question_tag: "L3MALP8Q1",
   code: "6023",
   title: "Maths Q15",
   learner_question: "What number is missing? 4, 8, 12,___, 20. \r\n1. 16 \r\n2. 13 \r\n3. 18",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 4, 8, 12, 16, 20.",
  	incorrectAnswerResponse: "Incorrect. 4, 8, 12, 16, 20.",
  	set: 8
  	},

 	6024:{
  	question_tag: "L3MALP8Q2",
   code: "6024",
   title: "Maths Q16",
   learner_question: "What number is missing? 80,____, 120,140. \r\n1. 90 \r\n2. 100 \r\n3. 110",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 80,100, 120,140.",
  	incorrectAnswerResponse: "Incorrect. 80,100, 120,140.",
  	set: 8
  	},

 	6025:{
  	question_tag: "L3MALP9QG",
   code: "6025",
   title: "Maths Class Q9",
   learner_question: "\r\n1. 9. \r\n2. 10 \r\n3. 15",
  	question: "Say: What is the lowest common multiple of 3 and 5? Enter the answer in your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The lowest common multiple of 3 and 5 is 15.",
  	incorrectAnswerResponse: "Incorrect. The lowest common multiple of 3 and 5 is 15.",
  	set: 9
  	},

 	6026:{
  	question_tag: "L3MALP9Q1",
   code: "6026",
   title: "Maths Q17",
   learner_question: "What is the lowest common multiple of 4 and 5? \r\n1. 12 \r\n2. 15 \r\n3. 20",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The lowest common multiple of 4 and 5 is 20.",
  	incorrectAnswerResponse: "Incorrect. The lowest common multiple of 4 and 5 is 20.",
  	set: 9
  	},

 	6027:{
  	question_tag: "L3MALPQ2",
   code: "6027",
   title: "Maths Q18",
   learner_question: "What is the lowest common multiple of 6 and 9? \r\n1. 18 \r\n2. 24 \r\n3. 36",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The lowest common multiple of 6 and 9 is 18.",
  	incorrectAnswerResponse: "Incorrect. The lowest common multiple of 6 and 9 is 18.",
  	set: 9
  	},

 	6028:{
  	question_tag: "L3MALP10QG",
   code: "6028",
   title: "Maths Class Q10",
   learner_question: "\r\n1. (2,2,2,3) \r\n2. (2,3) \r\n3. (2,2,4)",
  	question: "Say: What are the prime factors of 24? Enter the number of the correct number on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 24 (2,2,2,3)",
  	incorrectAnswerResponse: "Incorrect. 24 (2,2,2,3)",
  	set: 10
  	},

 	6029:{
  	question_tag: "L3MALP10Q1",
   code: "6029",
   title: "Maths Q19",
   learner_question: "What are the prime factors of 30? \r\n1. (2,5,5) \r\n2. (2,3,5) \r\n3. (2,2,5)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 30 (2,3,5)",
  	incorrectAnswerResponse: "Incorrect. 30 (2,3,5)",
  	set: 10
  	},

 	6030:{
  	question_tag: "L3MALP10Q2",
   code: "6030",
   title: "Maths Q20",
   learner_question: "What are the prime factors of 50? \r\n1. (2,5,5) \r\n2. (2,3,5) \r\n3. (10,5)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 50 (2,5,5)",
  	incorrectAnswerResponse: "Incorrect. 50 (2,5,5)",
  	set: 10
  	},

 	6031:{
  	question_tag: "L3MALP11QG",
   code: "6031",
   title: "Maths Class Q11",
   learner_question: "\r\n1. 32 \r\n2. 6 \r\n3. 9",
  	question: "Say: How much is three squared? Enter the number in your phone now.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3 squared is 9 (3x3)",
  	incorrectAnswerResponse: "Incorrect. 3 squared is 9 (3x3)",
  	set: 11
  	},

 	6032:{
  	question_tag: "L3MALP11Q1",
   code: "6032",
   title: "Maths Q21",
   learner_question: "\r\n1. 6 \r\n2. 12 \r\n3. 27",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3 cubed is 27 (3x3x3)",
  	incorrectAnswerResponse: "Incorrect. 3 cubed is 27 (3x3x3)",
  	set: 11
  	},

 	6033:{
  	question_tag: "L3MALP11Q2",
   code: "6033",
   title: "Maths Q22",
   learner_question: "How much is 3 to the fourth power? \r\n1. 12 \r\n2. 81 \r\n3. 134",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3 to the fourth power is 81 (3x3x3x3)",
  	incorrectAnswerResponse: "Incorrect. 3 to the fourth power is 81 (3x3x3x3)",
  	set: 11
  	},

 	6034:{
  	question_tag: "L3MALP12QG",
   code: "6034",
   title: "Maths Class Q12",
   learner_question: "\r\n1. African \r\n2. Western Pacific \r\n3. Eastern Mediterranean",
  	question: "Say: Open your books to page 4\r\n2. Look at the HIV AIDS table. Which area has the LEAST number of people affected by HIV? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Eastern Mediterranean has the least HIV AIDS patients.",
  	incorrectAnswerResponse: "Incorrect. Eastern Mediterranean has the least HIV AIDS patients.",
  	set: 12
  	},

 	6035:{
  	question_tag: "L3MALP12Q1",
   code: "6035",
   title: "Maths Q23",
   learner_question: "Which is NOT a form used to write large numbers? \r\n1. Standard form \r\n2. Scientific notation \r\n3. Sequence form",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Standard form and Scientific notation ARE ways to write large numbers.",
  	incorrectAnswerResponse: "Incorrect. Standard form and Scientific notation ARE ways to write large numbers.",
  	set: 12
  	},

 	6036:{
  	question_tag: "L3MALP12Q2",
   code: "6036",
   title: "Maths Q24",
   learner_question: "What are the prime factors of 42? \r\n1. (2,2,5) \r\n2. (2,3,7) \r\n3. (3,5,7,)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 42(2,3,7)",
  	incorrectAnswerResponse: "Incorrect. 42(2,3,7)",
  	set: 12
  	},

 	6037:{
  	question_tag: "L3MALP13QG",
   code: "6037",
   title: "Maths Class Q13",
   learner_question: "\r\n1. < \r\n2. > \r\n3. =",
  	question: "Write the following on the board: -3__2 Say: Which symbol is missing? Greater than, less than or equal to? Enter the number of the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! -3 <2. Negative numbers are always less than positive numbers.",
  	incorrectAnswerResponse: "Incorrect. -3 <2. Negative numbers are always less than positive numbers.",
  	set: 13
  	},

 	6038:{
  	question_tag: "L3MALP13Q1",
   code: "6038",
   title: "Maths Q25",
   learner_question: "Which symbol is correct? -11___-8 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! -11<-8. With negative numbers, the higher number is less.",
  	incorrectAnswerResponse: "Incorrect. -11<-8. With negative numbers, the higher number is less.",
  	set: 13
  	},

 	6039:{
  	question_tag: "L3MALP13Q2",
   code: "6039",
   title: "Maths Q26",
   learner_question: "Which symbol is correct? 5___-7 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 5 > -7. Negative numbers are always less than positive numbers.",
  	incorrectAnswerResponse: "Incorrect. 5 > -7. Negative numbers are always less than positive numbers.",
  	set: 13
  	},

 	6040:{
  	question_tag: "L3MALP14QG",
   code: "6040",
   title: "Maths Class Q14 ",
   learner_question: "\r\n1. 0 degrees \r\n2. 5 degrees \r\n3. -5 degrees",
  	question: "Say: The temperature is zero degrees. Then the temperature goes down by 5 degrees. What is the temperature now? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 0 - 5 degrees= -5 degrees.",
  	incorrectAnswerResponse: "Incorrect. 0 - 5 degrees= -5 degrees.",
  	set: 14
  	},

 	6041:{
  	question_tag: "L3MALP14Q1",
   code: "6041",
   title: "Maths Q27",
   learner_question: "The temperature is +10 degrees. The temperature goes down 20 degrees. What is the temperature now? \r\n1. -30 degrees \r\n2. 30 degrees \r\n3. -10 degrees",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 10-20= -10 degrees",
  	incorrectAnswerResponse: "Incorrect. 10-20= -10 degrees",
  	set: 14
  	},

 	6042:{
  	question_tag: "L3MALP14Q2",
   code: "6042",
   title: "Maths Q28",
   learner_question: "Which symbol is correct? 1___-3 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1 > -3. Negative numbers are always less than positive numbers.",
  	incorrectAnswerResponse: "Incorrect. 1 > -3. Negative numbers are always less than positive numbers.",
  	set: 14
  	},

 	6043:{
  	question_tag: "L3MALP15QG",
   code: "6043",
   title: "Maths Class Q15",
   learner_question: "\r\n1. 2 \r\n2. 8 \r\n3. -8",
  	question: "Write the following on the board: (+2) x (-4)=? Say: Enter the number of the correct answer in your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (+2) x (-4)= -8. A negative times a positive is a negative.",
  	incorrectAnswerResponse: "Incorrect. (+2) x (-4)= -8. A negative times a positive is a negative.",
  	set: 15
  	},

 	6044:{
  	question_tag: "L3MALP15Q1",
   code: "6044",
   title: "Maths Q29",
   learner_question: "(-2) - (3)=? \r\n1. -5 \r\n2. 1 \r\n3. -1",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (-2) - (3)= -5",
  	incorrectAnswerResponse: "Incorrect. (-2) - (3)= -5",
  	set: 15
  	},

 	6045:{
  	question_tag: "L3MALP15Q2",
   code: "6045",
   title: "Maths Q30",
   learner_question: "(-3) x (-5)= ? \r\n1. -15 \r\n2. 15 \r\n3. 2",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (-3) x (-5)= 15. A negative times a negative is a positive.",
  	incorrectAnswerResponse: "Incorrect. (-3) x (-5)= 15. A negative times a negative is a positive.",
  	set: 15
  	},

 	6046:{
  	question_tag: "L3MALP16QG",
   code: "6046",
   title: "Maths Class Q16",
   learner_question: "\r\n1. -15 degrees \r\n2. 15 degrees \r\n3. 20 degrees",
  	question: "Say: The temperature is negative five degrees. The temperature increases by 20 degrees. What is the temperature now? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (-5)+(20)= 15. It might help to think of this question as 20-5=?",
  	incorrectAnswerResponse: "Incorrect. (-5)+(20)= 15. It might help to think of this question as 20-5=?",
  	set: 16
  	},

 	6047:{
  	question_tag: "L3MALP16Q1",
   code: "6047",
   title: "Maths Q31",
   learner_question: "(-12) ÷ (4)= ? \r\n1. -3 \r\n2. 3 \r\n3. -4",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (-12) ÷ (4)= -3 A negative divided by a positive is a negative.",
  	incorrectAnswerResponse: "Incorrect. (-12) ÷ (4)= -3 A negative divided by a positive is a negative.",
  	set: 16
  	},

 	6048:{
  	question_tag: "L3MALP16Q2",
   code: "6048",
   title: "Maths Q32",
   learner_question: "(-23)-(-23)=? \r\n1. -46 \r\n2. 23 \r\n3. 0",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (-23)-(-23)= 0. Subtracting a negative number is the same as adding. (-23)-(-23)= (-23) + 23=0.",
  	incorrectAnswerResponse: "Incorrect. (-23)-(-23)= 0. Subtracting a negative number is the same as adding. (-23)-(-23)= (-23) + 23=0.",
  	set: 16
  	},

 	6049:{
  	question_tag: "L3MALP17QG",
   code: "6049",
   title: "Maths Class Q17",
   learner_question: "\r\n1. 9 days \r\n2. 12 days \r\n3. 16 days",
  	question: "Say: Mary has two daughters. One daughter visits every three days. One visits every four days. If both daughters came today, after how many days will they both come again?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The LCM of 3 and 4 is 12.",
  	incorrectAnswerResponse: "Incorrect. The LCM of 3 and 4 is 12.",
  	set: 17
  	},

 	6050:{
  	question_tag: "L3MALP17Q1",
   code: "6050",
   title: "Maths Q33",
   learner_question: "Ma buys shoes for $300. She sells the shoes for $450. What is her profit? \r\n1. $150 \r\n2. $450 \r\n3. $750",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Profit is the money you make minus the money you spend. $450-$300=$150.",
  	incorrectAnswerResponse: "Incorrect. Profit is the money you make minus the money you spend. $450-$300=$150.",
  	set: 17
  	},

 	6051:{
  	question_tag: "L3MALP17Q2",
   code: "6051",
   title: "Maths Q34",
   learner_question: "Miriam owes her brother LD $1000. She pays him half of the money. How much does she owe now? \r\n1. LD $0 \r\n2. LD $500 \r\n3. LD $1000",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Half of 1000 is 500. $1000-$500= LD $500.",
  	incorrectAnswerResponse: "Incorrect. Half of 1000 is 500. $1000-$500= LD $500.",
  	set: 17
  	},

 	6052:{
  	question_tag: "L3MALP18QG",
   code: "6052",
   title: "Maths Class Q18",
   learner_question: "\r\n1. 15 degrees \r\n2. 35 degrees \r\n3. -15 degrees.",
  	question: "Say: The temperature is 10 degrees. The temperature goes down 25 degrees. What is the temperature now? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 10 -25 = -15 degrees",
  	incorrectAnswerResponse: "Incorrect. 10 -25 = -15 degrees",
  	set: 18
  	},

 	6053:{
  	question_tag: "L3MALP18Q1",
   code: "6053",
   title: "Maths Q35",
   learner_question: "Which symbol is correct: (1,000+300) ___ (800+500) \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (1,000+300) = (800+500). 1300 = 1,300.",
  	incorrectAnswerResponse: "Incorrect. (1,000+300) = (800+500). 1300 = 1,300.",
  	set: 18
  	},

 	6054:{
  	question_tag: "L3MALP18Q2",
   code: "6054",
   title: "Maths Q36",
   learner_question: "(-2) x (-25) =? \r\n1. -1\r\n2.5 \r\n2. -50 \r\n3. 50",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (-2) x (-25) = 50. A negative times a negative is a positive.",
  	incorrectAnswerResponse: "Incorrect. (-2) x (-25) = 50. A negative times a negative is a positive.",
  	set: 18
  	},

 	6055:{
  	question_tag: "L3MALP19QG",
   code: "6055",
   title: "Maths Class Q19",
   learner_question: "NA (no lesson in the ABE book)",
  	question: "NA",
  	answer: "",
  	correctAnswerResponse: ":) Correct!",
  	incorrectAnswerResponse: "Incorrect.",
  	set: 19
  	},

 	6056:{
  	question_tag: "L3MALP19Q1",
   code: "6056",
   title: "Maths Q37",
   learner_question: "NA",
  	question: "NA",
  	answer: "",
  	correctAnswerResponse: ":) Correct!",
  	incorrectAnswerResponse: "Incorrect.",
  	set: 19
  	},

 	6057:{
  	question_tag: "L3MALP19Q2",
   code: "6057",
   title: "Maths Q38",
   learner_question: "NA",
  	question: "NA",
  	answer: "",
  	correctAnswerResponse: ":) Correct!",
  	incorrectAnswerResponse: "Incorrect.",
  	set: 19
  	},

 	6058:{
  	question_tag: "L3MALP20QG",
   code: "6058",
   title: "Maths Class Q20",
   learner_question: "\r\n1. 1,211 \r\n2. 1,321 \r\n3. 1,421",
  	question: "Write the following on the board: 856 +355 Enter the number of the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 856+355=1,211",
  	incorrectAnswerResponse: "Incorrect. 856+355=1,211",
  	set: 20
  	},

 	6059:{
  	question_tag: "L3MALP20Q1",
   code: "6059",
   title: "Maths Q39",
   learner_question: "Enter the answer. 373+248=? \r\n1. 521 \r\n2. 621 \r\n3. 581",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 373+248=621",
  	incorrectAnswerResponse: "Incorrect. 373+248=621",
  	set: 20
  	},

 	6060:{
  	question_tag: "L3MALP20Q2",
   code: "6060",
   title: "Maths Q40",
   learner_question: "Enter the answer. 375+29=? \r\n1. 414 \r\n2. 408 \r\n3. 404",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 375+29=404",
  	incorrectAnswerResponse: "Incorrect. 375+29=404",
  	set: 20
  	},

 	6061:{
  	question_tag: "L3MALP21QG",
   code: "6061",
   title: "Maths Class Q21",
   learner_question: "\r\n1. 463,242 \r\n2. 444,242 \r\n3. 544,1,42",
  	question: "Write the following on the board: 256,857 +187,385 Enter the number of the correct answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 256,857+187,385= 444,242.",
  	incorrectAnswerResponse: "Incorrect. 256,857+187,385= 444,242.",
  	set: 21
  	},

 	6062:{
  	question_tag: "L3MALP21Q1",
   code: "6062",
   title: "Maths Q41",
   learner_question: "73,876 + 13,465=? \r\n1. 88,541 \r\n2. 87,341 \r\n3. 86,341",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 73,876 + 13,465= 87,341",
  	incorrectAnswerResponse: "Incorrect. 73,876 + 13,465= 87,341",
  	set: 21
  	},

 	6063:{
  	question_tag: "L3MALP21Q2",
   code: "6063",
   title: "Maths Q42",
   learner_question: "346,764 + 164,454=? \r\n1. 613,218 \r\n2. 612,318 \r\n3. 511,218",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 346,764 + 164,454= 511,218",
  	incorrectAnswerResponse: "Incorrect. 346,764 + 164,454= 511,218",
  	set: 21
  	},

 	6064:{
  	question_tag: "L3MALP22QG",
   code: "6064",
   title: "Maths Class Q22",
   learner_question: "\r\n1. 175 \r\n2. 205 \r\n3. 225",
  	question: "Write the following on the board: 303 - 128 Enter the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 303-128= 175",
  	incorrectAnswerResponse: "Incorrect. 303-128= 175",
  	set: 22
  	},

 	6065:{
  	question_tag: "L3MALP22Q1",
   code: "6065",
   title: "Maths Q43",
   learner_question: "85-37=? \r\n1. 52 \r\n2. 48 \r\n3. 42",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 85-37=48",
  	incorrectAnswerResponse: "Incorrect. 85-37=48",
  	set: 22
  	},

 	6066:{
  	question_tag: "L3MALP22Q2",
   code: "6066",
   title: "Maths Q44",
   learner_question: "1001-845=? \r\n1. 206 \r\n2. 156 \r\n3. 145",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1001-845=156",
  	incorrectAnswerResponse: "Incorrect. 1001-845=156",
  	set: 22
  	},

 	6067:{
  	question_tag: "L3MALP23QG",
   code: "6067",
   title: "Maths Class Q23",
   learner_question: "\r\n1. 90,459 \r\n2. 88,559 \r\n3. 89,459",
  	question: "Write the following on the board: 103,304 - 12,845 Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 103,304 - 12,845= 90,459",
  	incorrectAnswerResponse: "Incorrect. 103,304 - 12,845= 90,459",
  	set: 23
  	},

 	6068:{
  	question_tag: "L3MALP23Q1",
   code: "6068",
   title: "Maths Q45",
   learner_question: "245,471-185,367=? \r\n1. 61,104 \r\n2. 59,104 \r\n3. 60,104",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! = 245,471 - 185,367=60,104",
  	incorrectAnswerResponse: "Incorrect. = 245,471 - 185,367=60,104",
  	set: 23
  	},

 	6069:{
  	question_tag: "L3MALP23Q2",
   code: "6069",
   title: "Maths Q46",
   learner_question: "847,103 - 126,283= ? \r\n1. 731,820 \r\n2. 720,820 \r\n3. 631,820",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 847,103 - 126,283 = 720,820",
  	incorrectAnswerResponse: "Incorrect. 847,103 - 126,283 = 720,820",
  	set: 23
  	},

 	6070:{
  	question_tag: "L3MALP24QG",
   code: "6070",
   title: "Maths Class Q24",
   learner_question: "\r\n1. 5,780 \r\n2. 4,680 \r\n3. 3,880",
  	question: "Write the following on the board: 104 x 45 Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 104 x 45 =4,680",
  	incorrectAnswerResponse: "Incorrect. 104 x 45 =4,680",
  	set: 24
  	},

 	6071:{
  	question_tag: "L3MALP24Q1",
   code: "6071",
   title: "Maths Q47",
   learner_question: "657 x 17=? \r\n1. 13,169 \r\n2. 12,169 \r\n3. 11,169",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 657 x 17=11,169",
  	incorrectAnswerResponse: "Incorrect. 657 x 17=11,169",
  	set: 24
  	},

 	6072:{
  	question_tag: "L3MALP24Q2",
   code: "6072",
   title: "Maths Q48",
   learner_question: "312 x 22=? \r\n1. 5,664 \r\n2. 6,864 \r\n3. 4,664",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 312 x 22= 6,864",
  	incorrectAnswerResponse: "Incorrect. 312 x 22= 6,864",
  	set: 24
  	},

 	6073:{
  	question_tag: "L3MALP25QG",
   code: "6073",
   title: "Maths Class Q25",
   learner_question: "\r\n1. 7,000 \r\n2. 6,900 \r\n3. 6,845",
  	question: "Say: 20 women made 345 bags each. How many bags did the make together? Answer the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 345 x 20 = 6,900",
  	incorrectAnswerResponse: "Incorrect. 345 x 20 = 6,900",
  	set: 25
  	},

 	6074:{
  	question_tag: "L3MALP25Q1",
   code: "6074",
   title: "Maths Q49",
   learner_question: "192 x 21=? \r\n1. 4,032 \r\n2. 5,132 \r\n3. 4,232",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 192 x 21= 4,032",
  	incorrectAnswerResponse: "Incorrect. 192 x 21= 4,032",
  	set: 25
  	},

 	6075:{
  	question_tag: "L3MALP25Q2",
   code: "6075",
   title: "Maths Q50",
   learner_question: "185 x 30=? \r\n1. 6,550 \r\n2. 7,550 \r\n3. 5,550",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 185 x 30= 5,550",
  	incorrectAnswerResponse: "Incorrect. 185 x 30= 5,550",
  	set: 25
  	},

 	6076:{
  	question_tag: "L3MALP26QG",
   code: "6076",
   title: "Maths Class Q26",
   learner_question: "\r\n1. 450 \r\n2. 4,500 \r\n3. 45,000",
  	question: "Say: One book has 45 pages. How many pages would 100 copies of this book have? Enter the answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 45 x 100=4,500",
  	incorrectAnswerResponse: "Incorrect. 45 x 100=4,500",
  	set: 26
  	},

 	6077:{
  	question_tag: "L3MALP26Q1",
   code: "6077",
   title: "Maths Q51",
   learner_question: "Ellen has 22 bags of oranges. Each bag has 9 oranges. How many oranges does she have? \r\n1. 31 \r\n2. 198 \r\n3. 218",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 22 x 9= 198. (10 x 22 -22=198)",
  	incorrectAnswerResponse: "Incorrect. 22 x 9= 198. (10 x 22 -22=198)",
  	set: 26
  	},

 	6078:{
  	question_tag: "L3MALP26Q2",
   code: "6078",
   title: "Maths Q52",
   learner_question: "There are 11 rows of carrots. Each row has 25 carrots. How many carrots are there in total? \r\n1. 275 \r\n2. 255 \r\n3. 225",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 11 x 25=275. (10x25+25=275)",
  	incorrectAnswerResponse: "Incorrect. 11 x 25=275. (10x25+25=275)",
  	set: 26
  	},

 	6079:{
  	question_tag: "L3MALP27QG",
   code: "6079",
   title: "Maths Class Q27",
   learner_question: "\r\n1. 18 pencils \r\n2. 8 pencils \r\n3. 25 pencils",
  	question: "Say: Brenda has 200 pencils. She gives the pencils to her 25 learners. How many pencils does each learner get? Enter the answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2000÷25=80",
  	incorrectAnswerResponse: "Incorrect. 2000÷25=80",
  	set: 27
  	},

 	6080:{
  	question_tag: "L3MALP27Q1",
   code: "6080",
   title: "Maths Q53",
   learner_question: "2,340÷12=? \r\n1. 224 \r\n2. 28 \r\n3. 195",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 2,340÷12=195",
  	incorrectAnswerResponse: "Incorrect. 2,340÷12=195",
  	set: 27
  	},

 	6081:{
  	question_tag: "L3MALP27Q2",
   code: "6081",
   title: "Maths Q54",
   learner_question: "4,080 ÷ 34=? \r\n1. 139 \r\n2. 12 \r\n3. 120",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 4,080 ÷ 34= 120",
  	incorrectAnswerResponse: "Incorrect. 4,080 ÷ 34= 120",
  	set: 27
  	},

 	6082:{
  	question_tag: "L3MALP28QG",
   code: "6082",
   title: "Maths Class Q28",
   learner_question: "\r\n1. 5,600 \r\n2. 6,600 \r\n3. 7,600",
  	question: "Say: Sarah has a garden with 55 rows of carrots. Each row has 120 carrots. How many carrots does she have? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 55 x 120=6600",
  	incorrectAnswerResponse: "Incorrect. 55 x 120=6600",
  	set: 28
  	},

 	6083:{
  	question_tag: "L3MALP28Q1",
   code: "6083",
   title: "Maths Q55",
   learner_question: "55 x 1,000=? \r\n1. 550 \r\n2. 5,500 \r\n3. 55,000",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 55 x 1000= 55,000. ",
  	incorrectAnswerResponse: "Incorrect. 55 x 1000= 55,000. ",
  	set: 28
  	},

 	6084:{
  	question_tag: "L3MALP28Q2",
   code: "6084",
   title: "Maths Q56",
   learner_question: "34 x 9=? \r\n1. 306 \r\n2. 330 \r\n3. 184",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 34 x 9= 306. (34x10-34=306)",
  	incorrectAnswerResponse: "Incorrect. 34 x 9= 306. (34x10-34=306)",
  	set: 28
  	},

 	6085:{
  	question_tag: "L3MALP29QG",
   code: "6085",
   title: "Maths Class Q29",
   learner_question: "\r\n1. (.12) \r\n2. (\r\n1.5) \r\n3. (0.5)",
  	question: "Say: What is one half in decimal form? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1/2= .05= one half",
  	incorrectAnswerResponse: "Incorrect. 1/2= .05= one half",
  	set: 29
  	},

 	6086:{
  	question_tag: "L3MALP29Q1",
   code: "6086",
   title: "Maths Q57",
   learner_question: "80/100=? \r\n1. (.80) \r\n2. (.20) \r\n3. (.08) ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 8/10=.80",
  	incorrectAnswerResponse: "Incorrect. 8/10=.80",
  	set: 29
  	},

 	6087:{
  	question_tag: "L3MALP29Q2",
   code: "6087",
   title: "Maths Q58",
   learner_question: "3/4=? \r\n1. (.34) \r\n2. (\r\n1.2) \r\n3. (.75)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3/4 = .75= three quarters",
  	incorrectAnswerResponse: "Incorrect. 3/4 = .75= three quarters",
  	set: 29
  	},

 	6088:{
  	question_tag: "L3MALP30QG",
   code: "6088",
   title: "Maths Class Q30",
   learner_question: "\r\n1. 50% \r\n2. 0.5% \r\n3. 1/2%",
  	question: "Say: Janet has some bread. She eats half the bread. What percent of the bread does she still have?",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/2= 50%= one half",
  	incorrectAnswerResponse: "Incorrect. 1/2= 50%= one half",
  	set: 30
  	},

 	6089:{
  	question_tag: "L3MALP30Q1",
   code: "6089",
   title: "Maths Q59",
   learner_question: "1/4=? \r\n1. 20% \r\n2. 25% \r\n3. 40%",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1/4=25%= one quarter",
  	incorrectAnswerResponse: "Incorrect. 1/4=25%= one quarter",
  	set: 30
  	},

 	6090:{
  	question_tag: "L3MALP30Q2",
   code: "6090",
   title: "Maths Q60",
   learner_question: "Which is NOT true? \r\n1. 1/2=0.5=50% \r\n2. 1/4=0.25/25% \r\n3. 1/100=0.01=10%",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1/100=.01=1%",
  	incorrectAnswerResponse: "Incorrect. 1/100=.01=1%",
  	set: 30
  	},

 	6091:{
  	question_tag: "L3MALP31QG",
   code: "6091",
   title: "Maths Class Q31",
   learner_question: "\r\n1. 7 \r\n2. 10 \r\n2. 0.7",
  	question: "Say: In the fraction 7/10, which number is the denominator? Enter the denominator of 7/10 in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 10. The denominator is the bottom number of a fraction.",
  	incorrectAnswerResponse: "Incorrect. 10. The denominator is the bottom number of a fraction.",
  	set: 31
  	},

 	6092:{
  	question_tag: "L3MALP31Q1",
   code: "6092",
   title: "Maths Q61",
   learner_question: "1/2 + 1/2=? \r\n1. (1/2) \r\n2. (1) \r\n3. (1/4)",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1/2 + 1/2 = 1",
  	incorrectAnswerResponse: "Incorrect. 1/2 + 1/2 = 1",
  	set: 31
  	},

 	6093:{
  	question_tag: "L3MALP31Q2",
   code: "6093",
   title: "Maths Q62",
   learner_question: "13/15 - 9/15 =? \r\n1. (4) \r\n2. (1/4) \r\n3. (4/15)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 13/15 - 9/15 = 4/15",
  	incorrectAnswerResponse: "Incorrect. 13/15 - 9/15 = 4/15",
  	set: 31
  	},

 	6094:{
  	question_tag: "L3MALP32QG",
   code: "6094",
   title: "Maths Class Q32",
   learner_question: "\r\n1. 79.01 \r\n2. 80.11 \r\n3. 78.01",
  	question: "Write the following on the board: 55.34 +2\r\n3.67 Say: Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 55.34 + 23.67= 79.01",
  	incorrectAnswerResponse: "Incorrect. 55.34 + 23.67= 79.01",
  	set: 32
  	},

 	6095:{
  	question_tag: "L3MALP32Q1",
   code: "6095",
   title: "Maths Q63",
   learner_question: "8.2 + \r\n2.9=? \r\n1. (1\r\n1.1) \r\n2. (10.1) \r\n3. (8.1)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 8.2+2.9= 11.1",
  	incorrectAnswerResponse: "Incorrect. 8.2+2.9= 11.1",
  	set: 32
  	},

 	6096:{
  	question_tag: "L3MALP32Q2",
   code: "6096",
   title: "Maths Q64",
   learner_question: "1\r\n2.5 - \r\n3.8=? \r\n1. (8.5) \r\n2. (9.7) \r\n3. (8.7)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 12.5-3.8= 8.7",
  	incorrectAnswerResponse: "Incorrect. 12.5-3.8= 8.7",
  	set: 32
  	},

 	6097:{
  	question_tag: "L3MALP33QG",
   code: "6097",
   title: "Maths Class Q33",
   learner_question: "\r\n1. 6.29 \r\n2. 6\r\n2.9 \r\n3. 629",
  	question: "Write the following on the board: 18.5 x \r\n3.4 Say: What is 18.5 time \r\n3.4? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 18.5 x 3.4 =62.9",
  	incorrectAnswerResponse: "Incorrect. 18.5 x 3.4 =62.9",
  	set: 33
  	},

 	6098:{
  	question_tag: "L3MALP33Q1",
   code: "6098",
   title: "Maths Q65",
   learner_question: "4.5 x 5.2=? \r\n1. 2\r\n1.4 \r\n2. 2\r\n2.4 \r\n3. 2\r\n3.4 ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 4.5 x 5.2= 23.4",
  	incorrectAnswerResponse: "Incorrect. 4.5 x 5.2= 23.4",
  	set: 33
  	},

 	6099:{
  	question_tag: "L3MALP33Q2",
   code: "6099",
   title: "Maths Q66",
   learner_question: "8\r\n3.34 ÷ 10 =? \r\n1. 83\r\n3.4 \r\n2. 8\r\n3.34 \r\n3. 8.334",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 83.34 ÷ 10= 8.334",
  	incorrectAnswerResponse: "Incorrect. 83.34 ÷ 10= 8.334",
  	set: 33
  	},

 	6100:{
  	question_tag: "L3MALP34QG",
   code: "6100",
   title: "Maths Class Q34",
   learner_question: "\r\n1. $100 \r\n2. $50 \r\n3. $25",
  	question: "Say: Mary has $200. She must pay 25% of this money to the bank. How much will she pay the bank? Enter the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 25% of 200 is 50.",
  	incorrectAnswerResponse: "Incorrect. 25% of 200 is 50.",
  	set: 34
  	},

 	6101:{
  	question_tag: "L3MALP34Q1",
   code: "6101",
   title: "Maths Q67",
   learner_question: "What is 75% of 200? \r\n1. 150 \r\n2. 175 \r\n3. 100",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct!",
  	incorrectAnswerResponse: "Incorrect.",
  	set: 34
  	},

 	6102:{
  	question_tag: "L3MALP34Q2",
   code: "6102",
   title: "Maths Q68",
   learner_question: "100 is what % of 200? \r\n1. 100% \r\n2. 50% \r\n3. 10%",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 100 is 50% of 200. ",
  	incorrectAnswerResponse: "Incorrect. 100 is 50% of 200. ",
  	set: 34
  	},

 	6103:{
  	question_tag: "L3MALP35QG",
   code: "6103",
   title: "Maths Class Q35",
   learner_question: "\r\n1. 100% \r\n2. 400% \r\n3. 50%",
  	question: "Say: Learners in a class increased from 20 to 40. By what percent did the learners increase? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 40-20=20. 20 ÷ 20= 1. 1 x 100=100%",
  	incorrectAnswerResponse: "Incorrect. 40-20=20. 20 ÷ 20= 1. 1 x 100=100%",
  	set: 35
  	},

 	6104:{
  	question_tag: "L3MALP35Q1",
   code: "6104",
   title: "Maths Q69",
   learner_question: "Increase 200 by 20%. \r\n1. 202 \r\n2. 220 \r\n3. 240",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 100% +20%= 120. 200 x 120=24,000. 24,000 ÷ 100= 240 ",
  	incorrectAnswerResponse: "Incorrect. 100% +20%= 120. 200 x 120=24,000. 24,000 ÷ 100= 240 ",
  	set: 35
  	},

 	6105:{
  	question_tag: "L3MALP35Q2",
   code: "6105",
   title: "Maths Q70",
   learner_question: "Decrease 100 by 20%. \r\n1. 120 \r\n2. 80 \r\n3. 20",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 100%- 20%= 80%. 100 x 80= 8,000. 8,000÷100= 80.",
  	incorrectAnswerResponse: "Incorrect. 100%- 20%= 80%. 100 x 80= 8,000. 8,000÷100= 80.",
  	set: 35
  	},

 	6106:{
  	question_tag: "L3MALP36QG",
   code: "6106",
   title: "Maths Class Q36",
   learner_question: "\r\n1. 20 pencils \r\n2. 40 pencils \r\n3. 100 pencils",
  	question: "Say: If there are 10 pencils in 5 bags, how many pencils are there in 20 bags? Enter the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 10/5=x/20. 10=x/4. 10x4=x. x= 40 pencils.",
  	incorrectAnswerResponse: "Incorrect. 10/5=x/20. 10=x/4. 10x4=x. x= 40 pencils.",
  	set: 36
  	},

 	6107:{
  	question_tag: "L3MALP36Q1",
   code: "6107",
   title: "Maths Q71",
   learner_question: "The ratio of boys to girls in class is 2:\r\n1. If there are 20 boys in class, how many girls are there? Enter your answer. \r\n1. 1 girl \r\n2. 40 girls \r\n3. 10 girls",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 2/1=20/x. 1=1/x. 10=x. 10 girls.",
  	incorrectAnswerResponse: "Incorrect. 2/1=20/x. 1=1/x. 10=x. 10 girls.",
  	set: 36
  	},

 	6108:{
  	question_tag: "L3MALP36Q2",
   code: "6108",
   title: "Maths Q72",
   learner_question: "12/36 ___ 4/12 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 12/36=4/12=1/3.",
  	incorrectAnswerResponse: "Incorrect. 12/36=4/12=1/3.",
  	set: 36
  	},

 	6109:{
  	question_tag: "L3MALP37QG",
   code: "6109",
   title: "Maths Class Q37",
   learner_question: "\r\n1. 2(3+4) \r\n2. 5 x 4 \r\n3. 2x2 + 2x4",
  	question: "Write the following on the board: 2x3 + 2x4 Say: Which answer is the same? Enter the number of the equivalent answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (2x3 + 2x4)=2(3+4)=14",
  	incorrectAnswerResponse: "Incorrect. (2x3 + 2x4)=2(3+4)=14",
  	set: 37
  	},

 	6110:{
  	question_tag: "L3MALP37Q1",
   code: "6110",
   title: "Maths Q73",
   learner_question: "Which is NOT equivalent to 5(2+3)? \r\n1. 2(5+3) \r\n2. (5x2) + (5x 3) \r\n3. 5(5)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 5(2+3)=25. 2(5+3)=16",
  	incorrectAnswerResponse: "Incorrect. 5(2+3)=25. 2(5+3)=16",
  	set: 37
  	},

 	6111:{
  	question_tag: "L3MALP37Q2",
   code: "6111",
   title: "Maths Q74",
   learner_question: "Which is NOT equivalent to 4+3+12? \r\n1. 12+3+4 \r\n2. 4(3+12) \r\n3. 19",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 4+3+12=19. 4(3+12)=60",
  	incorrectAnswerResponse: "Incorrect. 4+3+12=19. 4(3+12)=60",
  	set: 37
  	},

 	6112:{
  	question_tag: "L3MALP38QG",
   code: "6112",
   title: "Maths Class Q38",
   learner_question: "\r\n1. 6x7 \r\n2. 6(3+4) \r\n3. 3(6+4)",
  	question: "Write the following on the board: 6x3 + 6x4 Say: Which answer is NOT the same? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 6x3 + 6x4=42. 3(6+4)=30",
  	incorrectAnswerResponse: "Incorrect. 6x3 + 6x4=42. 3(6+4)=30",
  	set: 38
  	},

 	6113:{
  	question_tag: "L3MALP38Q1",
   code: "6113",
   title: "Maths Q75",
   learner_question: "3x8x15 ___ 15x8x3 \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 3x815=15x8x3",
  	incorrectAnswerResponse: "Incorrect. 3x815=15x8x3",
  	set: 38
  	},

 	6114:{
  	question_tag: "L3MALP38Q2",
   code: "6114",
   title: "Maths Q76",
   learner_question: "2(4+3) ___ 4(2+3) \r\n1. < \r\n2. > \r\n3. =",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 2(4+3)<4(2+3). 14<20.",
  	incorrectAnswerResponse: "Incorrect. 2(4+3)<4(2+3). 14<20.",
  	set: 38
  	},

 	6115:{
  	question_tag: "L3MALP39QG",
   code: "6115",
   title: "Maths Class Q39",
   learner_question: "\r\n1. 39 \r\n2. 18 \r\n3. 8",
  	question: "Write the following on the board: 12+3x4-6. Enter the answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 12+3x4-6=12+12-6=24-6=18",
  	incorrectAnswerResponse: "Incorrect. 12+3x4-6=12+12-6=24-6=18",
  	set: 39
  	},

 	6116:{
  	question_tag: "L3MALP39Q1",
   code: "6116",
   title: "Maths Q77",
   learner_question: "(2+3) x 4 +3=? \r\n1. 17 \r\n2. 35 \r\n3. 23",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (2+3) x 4 +3= (5 x 4)+3=20+3=23",
  	incorrectAnswerResponse: "Incorrect. (2+3) x 4 +3= (5 x 4)+3=20+3=23",
  	set: 39
  	},

 	6117:{
  	question_tag: "L3MALP39Q2",
   code: "6117",
   title: "Maths Q78",
   learner_question: "24-3x4=? \r\n1. 12 \r\n2. 80 \r\n3. 84",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 24-3x4=24-12=12",
  	incorrectAnswerResponse: "Incorrect. 24-3x4=24-12=12",
  	set: 39
  	},

 	6118:{
  	question_tag: "L3MALP40QG",
   code: "6118",
   title: "Maths Class Q40",
   learner_question: "\r\n1. 225 chickens \r\n2. 250 chickens \r\n3. 150 chickens",
  	question: "Say: Selma had 200 chickens. She increase the number of chickens she has by 25%. How many chickens does she have now?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 100%+25%=125%. 200 x 125= 25,000. 25,000÷100=250.",
  	incorrectAnswerResponse: "Incorrect. 100%+25%=125%. 200 x 125= 25,000. 25,000÷100=250.",
  	set: 40
  	},

 	6119:{
  	question_tag: "L3MALP40Q1",
   code: "6119",
   title: "Maths Q79",
   learner_question: "1/2 x 1/3=? \r\n1. 6 \r\n2. 1/6 \r\n3. 2/3",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 1/2 x 1/3=1/6",
  	incorrectAnswerResponse: "Incorrect. 1/2 x 1/3=1/6",
  	set: 40
  	},

 	6120:{
  	question_tag: "L3MALP40Q2",
   code: "6120",
   title: "Maths Q80",
   learner_question: "1\r\n2.35+ \r\n3.72=? \r\n1. (16.07) \r\n2. (15.107 \r\n3. (\r\n1.5017)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 12.35+ 3.72= 16.07",
  	incorrectAnswerResponse: "Incorrect. 12.35+ 3.72= 16.07",
  	set: 40
  	},

 	6121:{
  	question_tag: "L3MALP41QG",
   code: "6121",
   title: "Maths Class Q41",
   learner_question: "\r\n1. 5 bags \r\n2. 6 bags \r\n3. 10 bags",
  	question: "Say: You buy onions for $10 per bag. You sell the bags for $20 each. You make $50 profit. How many bags did you sell?",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! You make $10 profit per bag. $50 profit means you sold 5 bags.",
  	incorrectAnswerResponse: "Incorrect. You make $10 profit per bag. $50 profit means you sold 5 bags.",
  	set: 41
  	},

 	6122:{
  	question_tag: "L3MALP41Q1",
   code: "6122",
   title: "Maths Q81",
   learner_question: "You pay LD $500 for three bags of salt. Each bag of salt costs LD$150. What is your balance? \r\n1. LD $150 \r\n2. LD $100 \r\n3. LD $50",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 500-(3x150)=500-450= LD $50 balance.",
  	incorrectAnswerResponse: "Incorrect. 500-(3x150)=500-450= LD $50 balance.",
  	set: 41
  	},

 	6123:{
  	question_tag: "L3MALP41Q2",
   code: "6123",
   title: "Maths Q82",
   learner_question: "You spend $125 to make two chairs. You sell the two chairs for $100 each. What is your profit? \r\n1. -$25 \r\n2. $200 \r\n3. $75",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 2x$100-$125=$200-$125=$75 profit",
  	incorrectAnswerResponse: "Incorrect. 2x$100-$125=$200-$125=$75 profit",
  	set: 41
  	},

 	6124:{
  	question_tag: "L3MALP42QG",
   code: "6124",
   title: "Maths Class Q42",
   learner_question: "\r\n1. $750 \r\n2. $300 \r\n3. $100",
  	question: "Say: Mary gives the shopkeeper LD $1000 for three boxes of soap. Each box costs $300. How much change will the shopkeeper give Mary?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 1000-3x300=1000-900= LD$ 100",
  	incorrectAnswerResponse: "Incorrect. 1000-3x300=1000-900= LD$ 100",
  	set: 42
  	},

 	6125:{
  	question_tag: "L3MALP42Q1",
   code: "6125",
   title: "Maths Q83",
   learner_question: "Sarah wants to buy 3 shirts for LD $1,000 each. She has LD $2,500. How much money does she need? \r\n1. LD $500 \r\n2. LD $1000 \r\n3. LD $3000",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 3x1000-2500=3000-2500=LD $500",
  	incorrectAnswerResponse: "Incorrect. 3x1000-2500=3000-2500=LD $500",
  	set: 42
  	},

 	6126:{
  	question_tag: "L3MALP42Q2",
   code: "6126",
   title: "Maths Q84",
   learner_question: "Jane buys 6 cabbages for LD$60 each. She gives the seller LD$400. How much change will she get? \r\n1. LD $240 \r\n2. LD $40 \r\n3. LD $100 ",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 400-6x60=400-360=$40",
  	incorrectAnswerResponse: "Incorrect. 400-6x60=400-360=$40",
  	set: 42
  	},

 	6127:{
  	question_tag: "L3MALP43QG",
   code: "6127",
   title: "Maths Class Q43",
   learner_question: "\r\n1. Her profits will go up because her price is high. \r\n2. Her profits will go down because no one will buy eggs. \r\n3. Nothing will change.",
  	question: "Say: Hawah sells eggs for LD $15. She raises the price to LD$500 for one egg. What will likely happen?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The higher the price of a good, the fewer people will buy it.",
  	incorrectAnswerResponse: "Incorrect. The higher the price of a good, the fewer people will buy it.",
  	set: 43
  	},

 	6128:{
  	question_tag: "L3MALP43Q1",
   code: "6128",
   title: "Maths Q85",
   learner_question: "What is profit? \r\n1. Income before expenses \r\n2. All Income \r\n2. Income after expenses",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Profit is income after expenses.",
  	incorrectAnswerResponse: "Incorrect. Profit is income after expenses.",
  	set: 43
  	},

 	6129:{
  	question_tag: "L3MALP43Q2",
   code: "6129",
   title: "Maths Q86",
   learner_question: "Jane spends LD $2,500 on her hair salon each week. She makes $350 from 10 customers. What is her profit for the week? \r\n1. $350 \r\n2. $1,000 \r\n3. $3,500",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 350x10-2,500=3,500-2,500=$1,000",
  	incorrectAnswerResponse: "Incorrect. 350x10-2,500=3,500-2,500=$1,000",
  	set: 43
  	},

 	6130:{
  	question_tag: "L3MALP44QG",
   code: "6130",
   title: "Maths Class Q44",
   learner_question: "\r\n1. A hammer \r\n2. Rent \r\n3. Petrol",
  	question: "Say: Which is an example of a fixed cost? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Tools are fixed costs because you use them over and over.",
  	incorrectAnswerResponse: "Incorrect. Tools are fixed costs because you use them over and over.",
  	set: 44
  	},

 	6131:{
  	question_tag: "L3MALP44Q1",
   code: "6131",
   title: "Maths Q87",
   learner_question: "Which is a variable cost? \r\n1. An axe \r\n2. A table \r\n3. phone credit",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Prices that vary depending how much you produce are called variable costs. ",
  	incorrectAnswerResponse: "Incorrect. Prices that vary depending how much you produce are called variable costs. ",
  	set: 44
  	},

 	6132:{
  	question_tag: "L3MALP44Q2",
   code: "6132",
   title: "Maths Q88",
   learner_question: "What is the name for costs new businesses pay in order to open for the first time? \r\n1. Variable costs \r\n2. Fixed costs \r\n3. Start-up costs",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Costs to new businesses are called Start-up Costs.",
  	incorrectAnswerResponse: "Incorrect. Costs to new businesses are called Start-up Costs.",
  	set: 44
  	},

 	6133:{
  	question_tag: "L3MALP45QG",
   code: "6133",
   title: "Maths Class Q45",
   learner_question: "\r\n1. LD $50 \r\n2. LD $100 \r\n3. LD $600",
  	question: "Say: Anne spends LD $50 on a hammer, LD $ 50 on an axe and LD $500 on rent. How much did she spend on fixed costs? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The hammer and the saw are fixed costs 50+50= 100. Rent is a variable cost.",
  	incorrectAnswerResponse: "Incorrect. The hammer and the saw are fixed costs 50+50= 100. Rent is a variable cost.",
  	set: 45
  	},

 	6134:{
  	question_tag: "L3MALP45Q1",
   code: "6134",
   title: "Maths Q89",
   learner_question: "Mark spends $100 on rent, $300 to pay for help and $100 for a new pot. What is the total of his variable costs? \r\n1. $100 \r\n2. $400 \r\n3. $500",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Rent and employees are variable costs. A pot is a fixed cost.",
  	incorrectAnswerResponse: "Incorrect. Rent and employees are variable costs. A pot is a fixed cost.",
  	set: 45
  	},

 	6135:{
  	question_tag: "L3MALP45Q2",
   code: "6135",
   title: "Maths Q90",
   learner_question: "Sarah will open a new shop. She buys cloth for $100, pays $300 for rent and gives $200 for help. How much are her start-up costs? \r\n1. $100 \r\n2. $500 \r\n3. $600",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Start up costs are all the costs to start a new business.",
  	incorrectAnswerResponse: "Incorrect. Start up costs are all the costs to start a new business.",
  	set: 45
  	},

 	6136:{
  	question_tag: "L3MALP46QG",
   code: "6136",
   title: "Maths Class Q46",
   learner_question: "\r\n1. $100 \r\n2. $150 \r\n3. $300",
  	question: "Say: Mary makes $100 each month. She spends $50 on her business each month. How much profit will she make in three months?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Profit is the money you make minus the money you spend. $300-$150=$150.",
  	incorrectAnswerResponse: "Incorrect. Profit is the money you make minus the money you spend. $300-$150=$150.",
  	set: 46
  	},

 	6137:{
  	question_tag: "L3MALP46Q1",
   code: "6137",
   title: "Maths Q91",
   learner_question: "Sally makes $300 each month. She spends $200 on her business. How much will she make in 4 months? \r\n1. $400 \r\n2. $500 \r\n3. $600 ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Each month she will make $100. She will make $400 in 4 months.",
  	incorrectAnswerResponse: "Incorrect. Each month she will make $100. She will make $400 in 4 months.",
  	set: 46
  	},

 	6138:{
  	question_tag: "L3MALP46Q2",
   code: "6138",
   title: "Maths Q92",
   learner_question: "Irma spends $900 to start a new business. She makes $150 each month in profit. After how many months will she make back her $900? \r\n1. 6 \r\n2. 12 \r\n3. 5",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 900÷150=6.",
  	incorrectAnswerResponse: "Incorrect. 900÷150=6.",
  	set: 46
  	},

 	6139:{
  	question_tag: "L3MALP47QG",
   code: "6139",
   title: "Maths Class Q47",
   learner_question: "\r\n1. (-$75) \r\n2. (+$50) \r\n3. (+$75)",
  	question: "Say: Hawah makes $50 each month from her business. She spends $75 each month on her business. How much will she make in three months? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Hawah loses $25 each month. After 3 months, she will have -$75.",
  	incorrectAnswerResponse: "Incorrect. Hawah loses $25 each month. After 3 months, she will have -$75.",
  	set: 47
  	},

 	6140:{
  	question_tag: "L3MALP47Q1",
   code: "6140",
   title: "Maths Q93",
   learner_question: "Kim makes $125 from her bakery. She spends $200 each month. How much will she make in 5 months? \r\n1. (-$375) \r\n2. (-$200) \r\n3. (-$75)",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! (125-200)5= (-75)5= -$375",
  	incorrectAnswerResponse: "Incorrect. (125-200)5= (-75)5= -$375",
  	set: 47
  	},

 	6141:{
  	question_tag: "L3MALP47Q2",
   code: "6141",
   title: "Maths Q94",
   learner_question: "Kim sells loaves of bread for LD $100. She spends LD $400 on her business each day. How many loaves of bread must she sell to make $200 proft each day? \r\n1. 4 \r\n2. 6 \r\n3. 20",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! (400+200)÷100= 6 loaves.",
  	incorrectAnswerResponse: "Incorrect. (400+200)÷100= 6 loaves.",
  	set: 48
  	},

 	6142:{
  	question_tag: "L3MALP48QG",
   code: "6142",
   title: "Maths Class Q48",
   learner_question: "\r\n1. $150 \r\n2. $15 3 $100",
  	question: "Say: Flomo can make 10 shirts for LD $1,500. What is the break even price of each shirt. Enter the answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! LD $1,500 ÷ 10= $150",
  	incorrectAnswerResponse: "Incorrect. LD $1,500 ÷ 10= $150",
  	set: 48
  	},

 	6143:{
  	question_tag: "L3MALP48Q1",
   code: "6143",
   title: "Maths Q95",
   learner_question: "Dina can make 20 bags for $400. What is the break even price for each bag? \r\n1. $200 \r\n2. $50 \r\n3. $20",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 400÷20=$20.",
  	incorrectAnswerResponse: "Incorrect. 400÷20=$20.",
  	set: 48
  	},

 	6144:{
  	question_tag: "L3MALP48Q2",
   code: "6144",
   title: "Maths Q96",
   learner_question: "Sonie can make 100 bowls of soup for LD $800. What is the break even price for one bowl of soup. \r\n1. $8 \r\n2. $80 \r\n3. $7",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! LD $8,000÷100=LD$80",
  	incorrectAnswerResponse: "Incorrect. LD $8,000÷100=LD$80",
  	set: 48
  	},

 	6145:{
  	question_tag: "L3MALP49QG",
   code: "6145",
   title: "Maths Class Q49",
   learner_question: "\r\n1. Rent \r\n2. An employee \r\n3. A stove",
  	question: "Say: Which is a fixed costs? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Fixed costs are one time costs.",
  	incorrectAnswerResponse: "Incorrect. Fixed costs are one time costs.",
  	set: 49
  	},

 	6146:{
  	question_tag: "L3MALP49Q1",
   code: "6146",
   title: "Maths Q97",
   learner_question: "Hannah sells 200 cakes for LD $40 each. She spends LD $500 to make the cakes. How much profit does she make? \r\n1. LD $500 \r\n2. LD -$3000 \r\n3. LD $7,500",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (200x40)-500= 8000-500=7500",
  	incorrectAnswerResponse: "Incorrect. (200x40)-500= 8000-500=7500",
  	set: 49
  	},

 	6147:{
  	question_tag: "L3MALP49Q2",
   code: "6147",
   title: "Maths Q98",
   learner_question: "Hawa can make 50 shirts for LD $3,000. What is the break even price of each shirt? \r\n1. $6 \r\n2. $60 \r\n3. $600",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3,000÷50= $600",
  	incorrectAnswerResponse: "Incorrect. 3,000÷50= $600",
  	set: 49
  	},

 	6148:{
  	question_tag: "L3MALP50QG",
   code: "6148",
   title: "Maths Class Q50",
   learner_question: "\r\n1. 4 shirts \r\n2. 40 shirts \r\n3. 400 shirts",
  	question: "Say: Sonie has no money. She owes LD $4,000. Sonie sells shirts for $1,000 each. How many shirts must she sell to pay her debt? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 4,000÷1,000=4.",
  	incorrectAnswerResponse: "Incorrect. 4,000÷1,000=4.",
  	set: 50
  	},

 	6149:{
  	question_tag: "L3MALP50Q1",
   code: "6149",
   title: "Maths Q99",
   learner_question: "Mary owes her mother $500. She sells 100 cakes for $3 each. How much more money does she need? \r\n1. $300 \r\n2. $200 \r\n3. $100",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 500-(100x3)=500-300=200",
  	incorrectAnswerResponse: "Incorrect. 500-(100x3)=500-300=200",
  	set: 50
  	},

 	6150:{
  	question_tag: "L3MALP50Q2",
   code: "6150",
   title: "Maths Q100",
   learner_question: "Flomo has $200. She needs $500. How many shirts must she sells for $60 to make the money she needs? \r\n1. 30 shirts \r\n2. 110 shirts \r\n3. 5 shirts",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! (500-200)÷60=300÷60=5 shirts",
  	incorrectAnswerResponse: "Incorrect. (500-200)÷60=300÷60=5 shirts",
  	set: 50
  	},

 	6151:{
  	question_tag: "L3MALP51QG",
   code: "6151",
   title: "Maths Class Q51",
   learner_question: "\r\n1. To get more customers \r\n2. To track expenses \r\n3. To understand your income",
  	question: "Which is NOT a reason to keep a cash book. Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) Cash books do not attract customers, they track income and expenditures.",
  	incorrectAnswerResponse: "Incorrect. Cash books do not attract customers, they track income and expenditures.",
  	set: 51
  	},

 	6152:{
  	question_tag: "L3MALP51Q1",
   code: "6152",
   title: "Maths Q101",
   learner_question: "Sonie earns $500 in sales. She spends $400 on rent. How much does she have now? \r\n1. $500 \r\n2. $400 \r\n3. $100",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 500-400 = $100",
  	incorrectAnswerResponse: "Incorrect. 500-400 = $100",
  	set: 51
  	},

 	6153:{
  	question_tag: "L3MALP51Q2",
   code: "6153",
   title: "Maths Q102",
   learner_question: "Jane sells 2 shirts for $50 each. She pays her employee $25. How much does she have now? \r\n1. $100 \r\n2. $125 \r\n3. $75",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 2x$50= $100 -$25 = $75",
  	incorrectAnswerResponse: "Incorrect. 2x$50= $100 -$25 = $75",
  	set: 51
  	},

 	6154:{
  	question_tag: "L3MALP52QG",
   code: "6154",
   title: "Maths Class Q52",
   learner_question: "\r\n1. A cash book \r\n2. An advertisement \r\n3. A receipt",
  	question: "Which is NOT a type of record? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) Advertisements are not a form of record.",
  	incorrectAnswerResponse: "Incorrect. Advertisements are not a form of record.",
  	set: 52
  	},

 	6155:{
  	question_tag: "L3MALP52Q1",
   code: "6155",
   title: "Maths Q103",
   learner_question: "Dan pays $300 for rent. He makes $200 fixing cars. Which describes his finances? \r\n1. He made a profit \r\n2. He made a loss \r\n3. He broke even",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) $200 - $300= -$100. Dan made a loss.",
  	incorrectAnswerResponse: "Incorrect. $200 - $300= -$100. Dan made a loss.",
  	set: 52
  	},

 	6156:{
  	question_tag: "L3MALP52Q2",
   code: "6156",
   title: "Maths Q104",
   learner_question: "Jane buys a dress at the shop. The shopkeeper gives her a ___. \r\n1. receipt \r\n2. stock list \r\n3. cash book",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) Receipts are given to customers to show was purchased.",
  	incorrectAnswerResponse: "Incorrect. Receipts are given to customers to show was purchased.",
  	set: 52
  	},

 	6157:{
  	question_tag: "L3MALP53QG",
   code: "6157",
   title: "Maths Class Q53",
   learner_question: "\r\n1. receipt \r\n2. stock list \r\n3. cash book",
  	question: "Sally cannot remember what items she has in her shop. Which record does she need? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) Stock lists show what is in a shop.",
  	incorrectAnswerResponse: "Incorrect. Stock lists show what is in a shop.",
  	set: 53
  	},

 	6158:{
  	question_tag: "L3MALP53Q1",
   code: "6158",
   title: "Maths Q105",
   learner_question: "Mary earned $500 and spent $300 on new supplies. On which form should she record this? \r\n1. receipt \r\n2. stock list \r\n3. cash book",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) Income and expenses are recorded in a cash book.",
  	incorrectAnswerResponse: "Incorrect. Income and expenses are recorded in a cash book.",
  	set: 53
  	},

 	6159:{
  	question_tag: "L3MALP53Q2",
   code: "6159",
   title: "Maths Q106",
   learner_question: "Sonie has $100. She needs $400. How many dresses must she sells for $50 to make the money she needs? \r\n1. 4 shirts \r\n2. 6 shirts \r\n3. 8 shirts",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) 400-100= 300. 300/50 = 6 dresses",
  	incorrectAnswerResponse: "Incorrect. 400-100= 300. 300/50 = 6 dresses",
  	set: 53
  	},

 	6160:{
  	question_tag: "L3MALP54QG",
   code: "6160",
   title: "Maths Class Q54",
   learner_question: "\r\n1. Records prevent misuse of money \r\n2. Records show if business is good \r\n3. Records can be sold for profit",
  	question: "Which is NOT a way keeping records helps a business improve.",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) Records are for internal use, they are not sold.",
  	incorrectAnswerResponse: "Incorrect. Records are for internal use, they are not sold.",
  	set: 54
  	},

 	6161:{
  	question_tag: "L3MALP54Q1",
   code: "6161",
   title: "Maths Q107",
   learner_question: "Ruth\'s shop needs more material to make dresses. Which form will help her? \r\n1. order form \r\n2. stock list \r\n3. cash book",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) An inventory form will track the material she buys",
  	incorrectAnswerResponse: "Incorrect. An inventory form will track the material she buys",
  	set: 54
  	},

 	6162:{
  	question_tag: "L3MALP54Q2",
   code: "6162",
   title: "Maths Q108",
   learner_question: "Jane buys 5 books for $20 each. She sells them for $35. What is her profit. \r\n1. $100 \r\n2. $75 \r\n3. $50",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) 5(35-20)= 5(15)= $75",
  	incorrectAnswerResponse: "Incorrect. 5(35-20)= 5(15)= $75",
  	set: 54
  	},

 	6163:{
  	question_tag: "L3MALP55QG",
   code: "6163",
   title: "Maths Class Q55",
   learner_question: "\r\n1. Profit is the money you spend. Income is the money you make. \r\n2. Income is a type of expense. \r\n3. Profit is income after expenses.",
  	question: "What is the difference between profit and income? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) Profit is income after expenses.",
  	incorrectAnswerResponse: "Incorrect. Profit is income after expenses.",
  	set: 55
  	},

 	6164:{
  	question_tag: "L3MALP55Q1",
   code: "6164",
   title: "Maths Q109",
   learner_question: "Jane\'s income for May was $1000. Her profit was only $100. What were her expenses? \r\n1. $900 \r\n2. $1,100 \r\n2. $100",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! :) 1000- 100= $900",
  	incorrectAnswerResponse: "Incorrect. 1000- 100= $900",
  	set: 55
  	},

 	6165:{
  	question_tag: "L3MALP55Q2",
   code: "6165",
   title: "Maths Q110",
   learner_question: "Which is a variable expense? \r\n1. An axe \r\n2. A table \r\n3. Power",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) Variable expenses can change from month to month.",
  	incorrectAnswerResponse: "Incorrect. Variable expenses can change from month to month.",
  	set: 55
  	},

 	6166:{
  	question_tag: "L3MALP56QG",
   code: "6166",
   title: "Maths Class Q56",
   learner_question: "\r\n1. Income \r\n2. Expense \r\n3. Profit",
  	question: "Jane takes out a loan. The loan is set at 10% interest. How should she record the interest? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: "Correct! :) Interest payments on a loan are an expense.",
  	incorrectAnswerResponse: "Incorrect. Interest payments on a loan are an expense.",
  	set: 56
  	},

 	6167:{
  	question_tag: "L3MALP56Q1",
   code: "6167",
   title: "Maths Q111",
   learner_question: "Jane makes $500 profit in June and July but loses $600 in August. What is her total profit? \r\n1. $1,600 \r\n2. $500 \r\n3. $400",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 2x$500= 1000-600= $400",
  	incorrectAnswerResponse: "Incorrect. 2x$500= 1000-600= $400",
  	set: 56
  	},

 	6168:{
  	question_tag: "L3MALP56Q2",
   code: "6168",
   title: "Maths Q112",
   learner_question: "Sara makes $1000 in June. In July she makes 20% more. How much does Sara make in July. \r\n1. $20 \r\n2. $200 \r\n3. $1200",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: "Correct! :) 1000 X .20= 200 + 1000= $1,200",
  	incorrectAnswerResponse: "Incorrect. 1000 X .20= 200 + 1000= $1,200",
  	set: 56
  	},

 	3001:{
  	question_tag: "L2ENLP1QG",
   code: "3001",
   title: "Eng Class Q1",
   learner_question: "\r\n1. 19 \r\n2. 17 \r\n3. 2",
  	question: "Say: Open to page 7. Read \'The Two Sisters and Their Workbooks\' again. How old was Luna? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \'Luna was 17.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Luna was 17.\'",
  	set: 1
  	},

 	3002:{
  	question_tag: "L2ENLP1Q1",
   code: "3002",
   title: "Eng Q1",
   learner_question: "Complete the sentence: I want to _____ a book. \r\n1. eat \r\n2. read \r\n3. play",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We read books. I want to read a book.",
  	incorrectAnswerResponse: "Incorrect. We read books. I want to read a book.",
  	set: 1
  	},

 	3003:{
  	question_tag: "L2ENLP1Q2",
   code: "3003",
   title: "Eng Q2",
   learner_question: "Complete the pattern: Aa, Bb, Cc, D___ \r\n1. b \r\n2. p \r\n3. d",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Lowercase D is written \'d\'.",
  	incorrectAnswerResponse: "Incorrect. Lowercase D is written \'d\'.",
  	set: 1
  	},

 	3004:{
  	question_tag: "L2ENLP2QG",
   code: "3004",
   title: "Eng Class Q2",
   learner_question: "\r\n1. bread \r\n2. soap \r\n3. homes",
  	question: "Say: Open to page 1\r\n2. Read \'Kona\'s Goals\' again. What does Kona want to sell? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \'Kona wants to sell soap.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Kona wants to sell soap.\'",
  	set: 2
  	},

 	3005:{
  	question_tag: "L2ENLP2Q1",
   code: "3005",
   title: "Eng Q3",
   learner_question: "Which sentence is correct? \r\n1. his name is Sam \r\n2. His Name is sam. \r\n3. His name is Sam.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Sentences begin with a capital letter and end with a full stop.",
  	incorrectAnswerResponse: "Incorrect. Sentences begin with a capital letter and end with a full stop. Names begin with a capital.",
  	set: 2
  	},

 	3006:{
  	question_tag: "L2ENLP2Q2",
   code: "3006",
   title: "Eng Q4",
   learner_question: "Which sentence is correct? \r\n1. Her name is Ellen. \r\n2. Hername isEllen. \r\n3. HernameisEllen.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We must add a space between each word in a sentence.",
  	incorrectAnswerResponse: "Incorrect. We must add a space between each word in a sentence.",
  	set: 2
  	},

 	3007:{
  	question_tag: "L2ENLP3QG",
   code: "3007",
   title: "Eng Class Q3",
   learner_question: "\r\n1. To sit at home. \r\n2. To be a singer. \r\n3. To have a job.",
  	question: "Say: Open to page 20. Read \'Keddah\'s Goal\' again. What is Keddah\'s goal? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \"Keddah\'s goal is to have a job.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"Keddah\'s goal is to have a job.\"",
  	set: 3
  	},

 	3008:{
  	question_tag: "L2ENLP3Q1",
   code: "3008",
   title: "Eng Q5",
   learner_question: "Complete the sentence: I will ____ new clothes. \r\n1. sew \r\n2. business \r\n3. so",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We sew clothes. I will sew new clothes.",
  	incorrectAnswerResponse: "Incorrect. We sew clothes. I will sew new clothes.",
  	set: 3
  	},

 	3009:{
  	question_tag: "L2ENLP3Q2",
   code: "3009",
   title: "Eng Q6",
   learner_question: "Complete the sentence. We _____ with our ears. \r\n1. speak up \r\n2. listen \r\n3. sew",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We listen with our ears. Listen means \'hear\'. I listen to music.",
  	incorrectAnswerResponse: "Incorrect. We listen with our ears. Listen means \'hear\'. I listen to music.",
  	set: 3
  	},

 	3010:{
  	question_tag: "L2ENLP4QG",
   code: "3010",
   title: "Eng Class Q4",
   learner_question: "\r\n1. customer \r\n2. consonant \r\n3. careful",
  	question: "Say: I will sound out a word. Listen. C-o-n-s-o-n-a-n-t. Which word did I sound out? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! C-o-n-s-o-n-a-n-t. Consonant.",
  	incorrectAnswerResponse: "Incorrect. C-o-n-s-o-na-n-t. Consonant.",
  	set: 4
  	},

 	3011:{
  	question_tag: "L2ENLP4Q1",
   code: "3011",
   title: "Eng Q7",
   learner_question: "Which letter is a vowel? \r\n1. T \r\n2. F \r\n3. E",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The vowels are A, E, I, O, U and sometimes Y. ",
  	incorrectAnswerResponse: "Incorrect. The vowels are A, E, I, O, U and sometimes Y. ",
  	set: 4
  	},

 	3012:{
  	question_tag: "L2ENLP4Q2",
   code: "3012",
   title: "Eng Q8",
   learner_question: "Who works with hair? \r\n1. A hunter \r\n2. A carpenter \r\n3. A barber",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A barber cuts hair.",
  	incorrectAnswerResponse: "Incorrect. A barber cuts hair.",
  	set: 4
  	},

 	3013:{
  	question_tag: "L2ENLP5QG",
   code: "3013",
   title: "Eng Class Q5",
   learner_question: "\r\n1. Two hundred fifty years ago. \r\n2. Last year \r\n3. Three hundred fifty years ago",
  	question: "Say: Open your books to page 36. Read \'The Dictionary\' again. When was the first dictionary made? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The story says, \'Then 250 years ago a big change came- the first dictionary.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Then 250 years ago a big change came- the first dictionary.\'",
  	set: 5
  	},

 	3014:{
  	question_tag: "L2ENLP5Q1",
   code: "3014",
   title: "Eng Q9",
   learner_question: "What is NOT a use of a dictionary? \r\n1. To hear stories \r\n2. To help spell words. \r\n3. To know what words mean.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Dictionaries help us spell words and know their meaning.",
  	incorrectAnswerResponse: "Incorrect. Dictionaries help us spell words and know their meaning.",
  	set: 5
  	},

 	3015:{
  	question_tag: "L2ENLP5Q2",
   code: "3015",
   title: "Eng Q10",
   learner_question: "Which word is spelled correctly? \r\n1. Dictionaree \r\n2. Dictionary \r\n3. Dikshonary",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct. Dictionary.",
  	incorrectAnswerResponse: "Correct. Dictionary.",
  	set: 5
  	},

 	3016:{
  	question_tag: "L2ENLP6QG",
   code: "3016",
   title: "Eng Class Q6",
   learner_question: "\r\n1. A form \r\n2. A pill \r\n3. A skill",
  	question: "Say: Open to page 44. Read \'Kona is ill.\' again. What does Kona learn?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \' Kona learns a skill.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \' Kona learns a skill.\'",
  	set: 6
  	},

 	3017:{
  	question_tag: "L2ENLP6Q1",
   code: "3017",
   title: "Eng Q11",
   learner_question: "Which word rhymes with \'skill\'? \r\n1. Skip \r\n2. Fill \r\n3. Skin",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. Skill, fill, bill, hill.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. Skill, fill, bill, hill.",
  	set: 6
  	},

 	3018:{
  	question_tag: "L2ENLP6Q2",
   code: "3018",
   title: "Eng Q12",
   learner_question: "Which words are in the same word family? \r\n1. dog, cat, goat \r\n2. Liberia, USA, China \r\n3. pill, Bill, chill",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Words in a word family have the same sounds or letter pattern.",
  	incorrectAnswerResponse: "Incorrect. Words in a word family have the same sounds or letter pattern.",
  	set: 6
  	},

 	3019:{
  	question_tag: "L2ENLP7QG",
   code: "3019",
   title: "Eng Class Q7",
   learner_question: "\r\n1. A baker \r\n2. A driver \r\n3. Kona\'s friend",
  	question: "Say: Open to page 50. Read \'Jobs in Vonzu\' again. Who is Helen? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'\'My friend Hellen knows Vonzu well,\' says Kona.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'\'My friend Hellen knows Vonzu well,\' says Kona.\'",
  	set: 7
  	},

 	3020:{
  	question_tag: "L2ENLP7Q1",
   code: "3020",
   title: "Eng Q13",
   learner_question: "Who makes bread? \r\n1. A baker \r\n2. A driver \r\n3. A seller",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A baker makes bread. A driver drives. A seller sells.",
  	incorrectAnswerResponse: "Incorrect. A baker makes bread. A driver drives. A seller sells.",
  	set: 7
  	},

 	3021:{
  	question_tag: "L2ENLP7Q2",
   code: "3021",
   title: "Eng Q14",
   learner_question: "Complete the sentence: She _____ the van. \r\n1. drives \r\n2. drive \r\n3. driver",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! With he, she, and it, we add \'s\' or \'es\' to the end of present tense verbs. He drives a car.",
  	incorrectAnswerResponse: "Incorrect. With he, she, and it, we add \'s\' or \'es\' to the end of present tense verbs. He drives a car.",
  	set: 7
  	},

 	3022:{
  	question_tag: "L2ENLP8QG",
   code: "3022",
   title: "Eng Class Q8",
   learner_question: "\r\n1. In a cook shop \r\n2. In a drugstore \r\n3. In an office",
  	question: "Say: Open to page 59. Read \'Meet Romo\' again. Where does a girl mop? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'In an office, a girl mops.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'In an office, a girl mops.\'",
  	set: 8
  	},

 	3023:{
  	question_tag: "L2ENLP8Q1",
   code: "3023",
   title: "Eng Q15",
   learner_question: "Complete the question: What _____ she want? \r\n1. do \r\n2. does \r\n3. done",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! With \'he\', \'she\' and \'it\' we use \'does\'. Does he see? What does it eat?",
  	incorrectAnswerResponse: "Incorrect. With \'he\', \'she\' and \'it\' we use \'does\'. Does he see? What does it eat?",
  	set: 8
  	},

 	3024:{
  	question_tag: "L2ENLP8Q2",
   code: "3024",
   title: "Eng Q16",
   learner_question: "Complete the question: Where _____ you live? \r\n1. do \r\n2. does \r\n3. done",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! With \'I\', \'you\', \'we\', and \'they\' we use \'do\'. Do they like rice? Where do we sit?",
  	incorrectAnswerResponse: "Incorrect. With \'I\', \'you\', \'we\', and \'they\' we use \'do\'. Do they like rice? Where do we sit?",
  	set: 8
  	},

 	3025:{
  	question_tag: "L2ENLP9QG",
   code: "3025",
   title: "Eng Class Q9",
   learner_question: "\r\n1. In our town \r\n2. Every year \r\n3. Every fifteen days",
  	question: "Say: Open to page 7\r\n1. Read \'Jobs in Dabu, Lofa\' again. When does the doctor come? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'A doctor comes very 15 days.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'A doctor comes very 15 days.\'",
  	set: 9
  	},

 	3026:{
  	question_tag: "L2ENLP9Q1",
   code: "3026",
   title: "Eng Q17",
   learner_question: "Which word means \'With someone or something\'? \r\n1. anything \r\n2. together \r\n3. change",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Together means \'With someone or something.\' The two girls walk together.",
  	incorrectAnswerResponse: "Incorrect. Together means \'With someone or something.\' The two girls walk together.",
  	set: 9
  	},

 	3027:{
  	question_tag: "L2ENLPQ2",
   code: "3027",
   title: "Eng Q18",
   learner_question: "What is a paragraph? \r\n1. A topic sentence, like an umbrella \r\n2. A group of sentences about the same idea. \r\n3. A story about jobs.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A paragraph is a group of sentences about the same topic or idea.",
  	incorrectAnswerResponse: "Incorrect. A paragraph is a group of sentences about the same topic or idea.",
  	set: 9
  	},

 	3028:{
  	question_tag: "L2ENLP10QG",
   code: "3028",
   title: "Eng Class Q10",
   learner_question: "\r\n1. bad \r\n2. cake \r\n3. made",
  	question: "Say: What word rhymes with \'Bake\'? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. Bake, cake, rake, make.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. Bake, cake, rake, make.",
  	set: 10
  	},

 	3029:{
  	question_tag: "L2ENLP10Q1",
   code: "3029",
   title: "Eng Q19",
   learner_question: "Complete the sentence: Where ____ he work? \r\n1. do \r\n2. does \r\n3. done",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! With \'he\', \'she\' and \'it\' we use \'does\'. Does he see? What does it eat?",
  	incorrectAnswerResponse: "Incorrect. With \'he\', \'she\' and \'it\' we use \'does\'. Does he see? What does it eat?",
  	set: 10
  	},

 	3030:{
  	question_tag: "L2ENLP10Q2",
   code: "3030",
   title: "Eng Q20",
   learner_question: "Which sentence is correct? \r\n1. she is a good girl \r\n2. She is a Good girl. \r\n3. She us a good girl.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Sentences begin with a capital letter and end with a full stop.",
  	incorrectAnswerResponse: "Incorrect. Sentences begin with a capital letter and end with a full stop.",
  	set: 10
  	},

 	3031:{
  	question_tag: "L2ENLP11QG",
   code: "3031",
   title: "Eng Class Q11",
   learner_question: "\r\n1. Flomo\'s friend \r\n2. Flomo\'s mother \r\n3. Flomo\'s wife",
  	question: "Say: Open to page 86. Read Flomo Thinks About Work again. Who is Kabeh? Enter the number of the correct answer on your phone. ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story tells us that Flomo is talking to his wife, Kabeh.",
  	incorrectAnswerResponse: "Incorrect. The story tells us that Flomo is talking to his wife, Kabeh.",
  	set: 11
  	},

 	3032:{
  	question_tag: "L2ENLP11Q1",
   code: "3032",
   title: "Eng Q21",
   learner_question: "Complete the sentence: I ____ a farmer. \r\n1. is \r\n2. am \r\n3. are",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We use \'am\' with the pronoun \'I\'. I am happy.",
  	incorrectAnswerResponse: "Incorrect. We use \'am\' with the pronoun \'I\'. I am happy.",
  	set: 11
  	},

 	3033:{
  	question_tag: "L2ENLP11Q2",
   code: "3033",
   title: "Eng Q22",
   learner_question: "Complete the sentence: We ____ reading. \r\n1. is \r\n2. am \r\n3. are",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We use \'are\' with \'we\', \'they\' and \'you\'. We are eating.",
  	incorrectAnswerResponse: "Incorrect. We use \'are\' with \'we\', \'they\' and \'you\'. We are eating.",
  	set: 11
  	},

 	3034:{
  	question_tag: "L2ENLP12QG",
   code: "3034",
   title: "Eng Class Q12",
   learner_question: "\r\n1. She will cook it. \r\n2. She will make a chart. \r\n3. She will sell it.",
  	question: "Say: Open to page 9\r\n2. Read \'Temba\'s Fish Shop\' again. Why does Temba take a bit of paper? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \'She makes a chart- Temba\'s Cook shop.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'She makes a chart- Temba\'s Cook shop.\'",
  	set: 12
  	},

 	3035:{
  	question_tag: "L2ENLP12Q1",
   code: "3035",
   title: "Eng Q23",
   learner_question: "Which word rhymes with \'Smart\'? \r\n1. small \r\n2. farm \r\n3. part",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. Smart, part, cart, dart.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. Smart, part, cart, dart.",
  	set: 12
  	},

 	3036:{
  	question_tag: "L2ENLP12Q2",
   code: "3036",
   title: "Eng Q24",
   learner_question: "Complete the question: ____ he a farmer? \r\n1. Is \r\n2. Am \r\n3. Are",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We use \'is\' with \'he\', \'she\' and \'it\'. He is happy.",
  	incorrectAnswerResponse: "Incorrect. We use \'is\' with \'he\', \'she\' and \'it\'. He is happy.",
  	set: 12
  	},

 	3037:{
  	question_tag: "L2ENLP13QG",
   code: "3037",
   title: "Eng Class Q13",
   learner_question: "\r\n1. Builder \r\n2. Mechanic \r\n3. Farmer",
  	question: "Say: Open to page 100. Read \'Flomo Thinks About His Skills\' again. What is a good job for Flomo? Enter the number of the correct answer on your phone. ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Kabeh says Flomo is good at growing things. Farmers grow things.",
  	incorrectAnswerResponse: "Incorrect. Kabeh says Flomo is good at growing things. Farmers grow things.",
  	set: 13
  	},

 	3038:{
  	question_tag: "L2ENLP13Q1",
   code: "3038",
   title: "Eng Q25",
   learner_question: "Which word rhymes with \'Hide\'? \r\n1. Hid \r\n2. Home \r\n3. Ride",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. Hide, ride, side, wide.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. Hide, ride, side, wide.",
  	set: 13
  	},

 	3039:{
  	question_tag: "L2ENLP13Q2",
   code: "3039",
   title: "Eng Q26",
   learner_question: "What does an honest person do? \r\n1. Work hard \r\n2. Tell the truth \r\n3. Fix things",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! An honest person tells the truth. James is an honest boy.",
  	incorrectAnswerResponse: "Incorrect. An honest person tells the truth. James is an honest boy.",
  	set: 13
  	},

 	3040:{
  	question_tag: "L2ENLP14QG",
   code: "3040",
   title: "Eng Class Q14 ",
   learner_question: "\r\n1. They are hungry. \r\n2. They do not see their mother. \r\n3. They are frightened by a spirit.",
  	question: "Say: Turn to page 108. Read \'The Song of the Birds.\' Why are the baby birds sad? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The baby birds cry because they do not see their mother.",
  	incorrectAnswerResponse: "Incorrect. The baby birds cry because they do not see their mother.",
  	set: 14
  	},

 	3041:{
  	question_tag: "L2ENLP14Q1",
   code: "3041",
   title: "Eng Q27",
   learner_question: "Which word rhymes with \'He\'? \r\n1. Have \r\n2. See \r\n3. Help",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Words that Rhyme have the same end sound. He, see, bee, we.",
  	incorrectAnswerResponse: "Incorrect. Words that Rhyme have the same end sound. He, see, bee, we.",
  	set: 14
  	},

 	3042:{
  	question_tag: "L2ENLP14Q2",
   code: "3042",
   title: "Eng Q28",
   learner_question: "Complete the sentence: A fiction story is _____. \r\n1. True \r\n2. Not true",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Fiction stories are not true. Fiction stories are made up.",
  	incorrectAnswerResponse: "Incorrect. Fiction stories are not true. Fiction stories are made up.",
  	set: 14
  	},

 	3043:{
  	question_tag: "L2ENLP15QG",
   code: "3043",
   title: "Eng Class Q15",
   learner_question: "\r\n1. Biyamanyen \r\n2. Gorn, gorn, gorn \r\n3. Shii, shii, shii",
  	question: "Say: Turn to page 12\r\n1. Read \'The Song of the Birds.\' What sound does the eagle make? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'Ma Eagle sings, \"Shii, Shii, Shii.\"\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Ma Eagle sings, \"Shii, Shii, Shii.\"\'",
  	set: 15
  	},

 	3044:{
  	question_tag: "L2ENLP15Q1",
   code: "3044",
   title: "Eng Q29",
   learner_question: "Which word rhymes with \'lie\'? \r\n1. why \r\n2. lay \r\n3. see",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. My, by, sky, lie, tie.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. My, by, sky, lie, tie.",
  	set: 15
  	},

 	3045:{
  	question_tag: "L2ENLP15Q2",
   code: "3045",
   title: "Eng Q30",
   learner_question: "Complete the sentence: I want to _____ a song. \r\n1. take \r\n2. melody \r\n3. sing",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We sing songs. The girls sing a pretty song. ",
  	incorrectAnswerResponse: "Incorrect. We sing songs. The girls sing a pretty song. ",
  	set: 15
  	},

 	3046:{
  	question_tag: "L2ENLP16QG",
   code: "3046",
   title: "Eng Class Q16",
   learner_question: "\r\n1. She sings the correct song. \r\n2. She looks like them. \r\n3. She knows their names.",
  	question: "Say: Open to page 12\r\n1. Read \'The Song of the Birds\' again. How do the birds know the big bird is their mother? Answer the text message now.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! In the story, the little birds know their mother because of the song she sings.",
  	incorrectAnswerResponse: "Incorrect. In the story, the little birds know their mother because of the song she sings.",
  	set: 16
  	},

 	3047:{
  	question_tag: "L2ENLP16Q1",
   code: "3047",
   title: "Eng Q31",
   learner_question: "Which sentence is correct? \r\n1. We are hunters not. \r\n2. We are not hunters. \r\n3. We not are hunters.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We are not hunters. We use \'not\' after the verb \'to be\'. I am not happy.",
  	incorrectAnswerResponse: "Incorrect. We are not hunters. We use \'not\' after the verb \'to be\'. I am not happy.",
  	set: 16
  	},

 	3048:{
  	question_tag: "L2ENLP16Q2",
   code: "3048",
   title: "Eng Q32",
   learner_question: "Which sentence is correct? \r\n1. It was a good day not. \r\n2. It not was a good day. \r\n3. It was not a good day.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We use \'not\' after the verb \'to be\'. I was not happy today.",
  	incorrectAnswerResponse: "Incorrect. We use \'not\' after the verb \'to be\'. I was not happy today.",
  	set: 16
  	},

 	3049:{
  	question_tag: "L2ENLP17QG",
   code: "3049",
   title: "Eng Class Q17",
   learner_question: "\r\n1. A fish \r\n2. A fisherman \r\n3. His father",
  	question: "Say: Open to page 137. Read \'Charles\' again. What does Charles want to be? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Charles wants to be a fisherman. ",
  	incorrectAnswerResponse: "Incorrect. Charles wants to be a fisherman. ",
  	set: 17
  	},

 	3050:{
  	question_tag: "L2ENLP17Q1",
   code: "3050",
   title: "Eng Q33",
   learner_question: "Complete the sentence: They ____ to drink milk. \r\n1. like \r\n2. likes \r\n3. liking",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We do not add \'s\' or \'es\' to verbs with \'they\', \'you\', \'I\' or \'we\'. I like dogs. We like chicken.",
  	incorrectAnswerResponse: "Incorrect. We do not add \'s\' or \'es\' to verbs with \'they\', \'you\', \'I\' or \'we\'. I like dogs. We like chicken.",
  	set: 17
  	},

 	3051:{
  	question_tag: "L2ENLP17Q2",
   code: "3051",
   title: "Eng Q34",
   learner_question: "What skill would be useful for a farmer? \r\n1. Being able to make things from wood. \r\n2. Being able to cook good food. \r\n3. Being able to grow plants.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Farmers grow plants on farms.",
  	incorrectAnswerResponse: "Incorrect. Farmers grow plants on farms.",
  	set: 17
  	},

 	3052:{
  	question_tag: "L2ENLP18QG",
   code: "3052",
   title: "Eng Class Q18",
   learner_question: "\r\n1. Sell \r\n2. Ball \r\n3. Bet",
  	question: "Say: What word rhymes with \'bell\'? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Words that rhyme have the same end sound. Bell, sell, tell, fell.",
  	incorrectAnswerResponse: "Incorrect. Words that rhyme have the same end sound. Bell, sell, tell, fell.",
  	set: 18
  	},

 	3053:{
  	question_tag: "L2ENLP18Q1",
   code: "3053",
   title: "Eng Q35",
   learner_question: "Which letter is a vowel? \r\n1. T \r\n2. A \r\n3. W",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The vowels are A, E, I, O, U and sometimes Y. ",
  	incorrectAnswerResponse: "Incorrect. The vowels are A, E, I, O, U and sometimes Y. ",
  	set: 18
  	},

 	3054:{
  	question_tag: "L2ENLP18Q2",
   code: "3054",
   title: "Eng Q36",
   learner_question: "Complete the sentence: I ____ a teacher. \r\n1. am \r\n2. is \r\n3. are",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We use \'am\' with the pronoun \'I\'. I am a farmer. I am hungry.",
  	incorrectAnswerResponse: "Incorrect. We use \'am\' with the pronoun \'I\'. I am a farmer. I am hungry.",
  	set: 18
  	},

 	3055:{
  	question_tag: "L2ENLP19QG",
   code: "3055",
   title: "Eng Class Q19",
   learner_question: "\r\n1. To open a bakery. \r\n2. To be a farmer. \r\n3. To sell soap.",
  	question: "Say: Open to page 140. Read \'Making things: Kona\' again. What is Kona\'s goal? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'You know me- Kona Doe. My goal is to make soap.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'You know me- Kona Doe. My goal is to make soap.\'",
  	set: 19
  	},

 	3056:{
  	question_tag: "L2ENLP19Q1",
   code: "3056",
   title: "Eng Q37",
   learner_question: "What do we call a person who buys something at a shop? \r\n1. A customer \r\n2. A competitor \r\n3. A profit ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A customer is someone who buys a product or service.",
  	incorrectAnswerResponse: "Incorrect. A customer is someone who buys a product or service.",
  	set: 19
  	},

 	3057:{
  	question_tag: "L2ENLP19Q2",
   code: "3057",
   title: "Eng Q38",
   learner_question: "What word is missing? Monday,_____, Wednesday, Thursday \r\n1. Sunday \r\n2. Friday \r\n3. Tuesday",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Tuesday comes after Monday! Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.",
  	incorrectAnswerResponse: "Incorrect. Tuesday comes after Monday! Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.",
  	set: 19
  	},

 	3058:{
  	question_tag: "L2ENLP20QG",
   code: "3058",
   title: "Eng Class Q20",
   learner_question: "\r\n1. To make money. \r\n2. To make friends. \r\n3. To give up.",
  	question: "Say: Open to page 146. Read \'It Takes Hard Work\' again. What do small business want? ",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The story says, \'Small business people want to make money.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Small business people want to make money.\'",
  	set: 20
  	},

 	3059:{
  	question_tag: "L2ENLP20Q1",
   code: "3059",
   title: "Eng Q39",
   learner_question: "Which word means \'a possible problem\'? \r\n1. Customer \r\n2. Risk \r\n3. Profit",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Risks are possible problems or dangers.",
  	incorrectAnswerResponse: "Incorrect. Risks are possible problems or dangers.",
  	set: 20
  	},

 	3060:{
  	question_tag: "L2ENLP20Q2",
   code: "3060",
   title: "Eng Q40",
   learner_question: "Today is Wednesday. What day is tomorrow? \r\n1. Tuesday \r\n2. Wednesday \r\n3. Thursday",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Thursday comes after Wednesday. Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. ",
  	incorrectAnswerResponse: "Incorrect. Thursday comes after Wednesday. Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. ",
  	set: 20
  	},

 	3061:{
  	question_tag: "L2ENLP21QG",
   code: "3061",
   title: "Eng Class Q21",
   learner_question: "\r\n1. To ABE class \r\n2. To Aunty Doe\'s \r\n3. To buy rice and cassava",
  	question: "Say: Open to page 155. Look at the calendar. What will Kona do Sunday at 12:00? Enter the number of the correct answer on your phone. ",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! For Sunday, the Calendar says, \'To Aunty Doe\'s -12:00\'",
  	incorrectAnswerResponse: "Incorrect. For Sunday, the Calendar says, \'To Aunty Doe\'s -12:00\'",
  	set: 21
  	},

 	3062:{
  	question_tag: "L2ENLP21Q1",
   code: "3062",
   title: "Eng Q41",
   learner_question: "Complete the sentence: We must ____ soap when we wash our hands. \r\n1. use \r\n2. make \r\n3. buy",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Use means, \'to apply with, to make with\'. We must use soap when we wash our hands.",
  	incorrectAnswerResponse: "Incorrect. Use means, \'to apply with, to make with\'. We must use soap when we wash our hands.",
  	set: 21
  	},

 	3063:{
  	question_tag: "L2ENLP21Q2",
   code: "3063",
   title: "Eng Q42",
   learner_question: "Which word is spelled correctly? \r\n1. Monroveea \r\n2. Munrovia \r\n3. Monrovia",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Monrovia is the capital of Liberia.",
  	incorrectAnswerResponse: "Incorrect. Monrovia is the capital of Liberia.",
  	set: 21
  	},

 	3064:{
  	question_tag: "L2ENLP22QG",
   code: "3064",
   title: "Eng Class Q22",
   learner_question: "\r\n1. Monrovia \r\n2. Gbarnga \r\n3. Fissebu",
  	question: "Say: Open to page 159 Read \'Kona\'s Soap Making Idea\' again. Where does Kona live? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'Too many people sell soap in Fissebu.\' Kona must live in Fissebu.",
  	incorrectAnswerResponse: "Incorrect. The story says, \'Too many people sell soap in Fissebu.\' Kona must live in Fissebu.",
  	set: 22
  	},

 	3065:{
  	question_tag: "L2ENLP22Q1",
   code: "3065",
   title: "Eng Q43",
   learner_question: "What is the abbreviation of Wednesday? \r\n1. Wedn. \r\n2. Wed. \r\n3. We.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! An abbreviation is a short form. Sunday- Sun. Monday- Mon. Tuesday-Tues. Wednesday-Wed. Thursday- Thur. Friday- Fri. Saturday-Sat.",
  	incorrectAnswerResponse: "Incorrect. An abbreviation is a short form. Sunday- Sun. Monday- Mon. Tuesday-Tues. Wednesday-Wed. Thursday- Thur. Friday- Fri. Saturday-Sat.",
  	set: 22
  	},

 	3066:{
  	question_tag: "L2ENLP22Q2",
   code: "3066",
   title: "Eng Q44",
   learner_question: "Complete the sentence: It is _____ for a business person to ask if there is a need for her product or service. \r\n1. important \r\n2. profit \r\n3. business idea",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Important means \'key, central\'. It is important to wash your hands. It is important to work hard.",
  	incorrectAnswerResponse: "Incorrect. Important means \'key, central\'. It is important to wash your hands. It is important to work hard.",
  	set: 22
  	},

 	3067:{
  	question_tag: "L2ENLP23QG",
   code: "3067",
   title: "Eng Class Q23",
   learner_question: "\r\n1. They like Miata. \r\n2. They are hungry. \r\n3. Miata lives near a school.",
  	question: "Say: Open to page 165. Read \'Miata\'s Bread Making Business\' again. Why do boys and girls walk by Miata\'s house? ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'My house is next to a school. Boys and girls walk by my home.\'",
  	incorrectAnswerResponse: "Incorrect. The story says, \'My house is next to a school. Boys and girls walk by my home.\'",
  	set: 23
  	},

 	3068:{
  	question_tag: "L2ENLP23Q1",
   code: "3068",
   title: "Eng Q45",
   learner_question: "Complete the sentence: I am sad because I ____ my money. \r\n1. have \r\n2. lost \r\n3. next",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When something is \'lost\' we do not know where it is. I lost my house keys. He lost his book.",
  	incorrectAnswerResponse: "Incorrect. When something is \'lost\' we do not know where it is. I lost my house keys. He lost his book.",
  	set: 23
  	},

 	3069:{
  	question_tag: "L2ENLP23Q2",
   code: "3069",
   title: "Eng Q46",
   learner_question: "What time is Midnight? \r\n1. 12:00 am \r\n2. 12:00 pm \r\n3. 6:00 am",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 12:00 am is called midnight. It is the middle of the night.",
  	incorrectAnswerResponse: "Incorrect. 12:00 am is called midnight. It is the middle of the night.",
  	set: 23
  	},

 	3070:{
  	question_tag: "L2ENLP24QG",
   code: "3070",
   title: "Eng Class Q24",
   learner_question: "\r\n1. He does not like machines. \r\n2. He wants to hire his friends. \r\n3. Machines are expensive.",
  	question: "Say: Open to page 174. Read \'Simon\'s Palm Oil Business\' again. Why will Simon wait to buy machines?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'But, the machines are expensive.\' Simon does not have enough money now.",
  	incorrectAnswerResponse: "Incorrect. The story says, \'But, the machines are expensive.\' Simon does not have enough money now.",
  	set: 24
  	},

 	3071:{
  	question_tag: "L2ENLP24Q1",
   code: "3071",
   title: "Eng Q47",
   learner_question: "What is a different way to say 2:00? \r\n1. Midnight \r\n2. Two o\'clock \r\n3. Two-thirty",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 2:00 is Two o\'clock. O\'clock means the time is on the hour-00. 1:00= 1 o\'clock.",
  	incorrectAnswerResponse: "Incorrect. 2:00 is Two o\'clock. O\'clock means the time is on the hour-00. 1:00= 1 o\'clock.",
  	set: 24
  	},

 	3072:{
  	question_tag: "L2ENLP24Q2",
   code: "3072",
   title: "Eng Q48",
   learner_question: "What number comes BEFORE 10? \r\n1. 9 \r\n2. 10 \r\n3. 11",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 9 is before 10. 8 is before 9. 7 is before 8.",
  	incorrectAnswerResponse: "Incorrect. 9 is before 10. 8 is before 9. 7 is before 8.",
  	set: 24
  	},

 	3073:{
  	question_tag: "L2ENLP25QG",
   code: "3073",
   title: "Eng Class Q25",
   learner_question: "\r\n1. May 5 \r\n2. May 9 \r\n3. May 12",
  	question: "Say: Open your books to page 184. Look at the calendar. If today is May 8th, what will the date be this Friday? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! \"This Friday\" means the Friday of the current week. ",
  	incorrectAnswerResponse: "Incorrect. \"This Friday\" means the Friday of the current week. ",
  	set: 25
  	},

 	3074:{
  	question_tag: "L2ENLP25Q1",
   code: "3074",
   title: "Eng Q49",
   learner_question: "If today is September 15, what is the date tomorrow? \r\n1. September 16 \r\n2. October 15 \r\n3. September 14",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Tomorrow is the day after today. If today is September 15, tomorrow is September 16.",
  	incorrectAnswerResponse: "Incorrect. Tomorrow is the day after today. If today is September 15, tomorrow is September 16.",
  	set: 25
  	},

 	3075:{
  	question_tag: "L2ENLP25Q2",
   code: "3075",
   title: "Eng Q50",
   learner_question: "If today is December 5, what was the date the day before yesterday? \r\n1. December 4 \r\n2. December 6 \r\n3. December 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The day before yesterday means 2 days ago.",
  	incorrectAnswerResponse: "Incorrect. The day before yesterday means 2 days ago.",
  	set: 25
  	},

 	3076:{
  	question_tag: "L2ENLP26QG",
   code: "3076",
   title: "Eng Class Q26",
   learner_question: "\r\n1. (12/1/17) \r\n2. (1/12/17) \r\n3. (17/1/12)",
  	question: "Say: Which dates is the same as December 1, 2017? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 12/1/17 is December 1, 2017.",
  	incorrectAnswerResponse: "Incorrect. 12/1/17 is December 1, 2017.",
  	set: 26
  	},

 	3077:{
  	question_tag: "L2ENLP26Q1",
   code: "3077",
   title: "Eng Q51",
   learner_question: "Which date is the same as July 16, 2017? \r\n1. (16/7/17) \r\n2. (17/16/7) \r\n3. (7/16/17)",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 7/16/17 is July 16, 2017.",
  	incorrectAnswerResponse: "Incorrect. 7/16/17 is July 16, 2017.",
  	set: 26
  	},

 	3078:{
  	question_tag: "L2ENLP26Q2",
   code: "3078",
   title: "Eng Q52",
   learner_question: "Which is \'cheaper\' than $5? \r\n1. $7 \r\n2. $5 \r\n3. $2",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Cheaper means the price is lower. $2<$5",
  	incorrectAnswerResponse: "Incorrect. Cheaper means the price is lower. $2<$5",
  	set: 26
  	},

 	3079:{
  	question_tag: "L2ENLP27QG",
   code: "3079",
   title: "Eng Class Q27",
   learner_question: "\r\n1. December 9 \r\n2. December 3 \r\n3. December 11",
  	question: "Say: If today is Monday, December 10, what was the date last Monday? Enter the number of the correct answer. ",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Last Monday would be seven days ago. 10-7=3.",
  	incorrectAnswerResponse: "Incorrect. Last Monday would be seven days ago. 10-7=3.",
  	set: 27
  	},

 	3080:{
  	question_tag: "L2ENLP27Q1",
   code: "3080",
   title: "Eng Q53",
   learner_question: "If today is Wednesday, January 20, what was the date last Tuesday? \r\n1. December 19 \r\n2. December 27 \r\n3. December 13",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Last Tuesday would be seven days ago. 20-7=13.",
  	incorrectAnswerResponse: "Incorrect. Last Tuesday would be seven days ago. 20-7=13.",
  	set: 27
  	},

 	3081:{
  	question_tag: "L2ENLP27Q2",
   code: "3081",
   title: "Eng Q54",
   learner_question: "If today is Friday May 15, what will the date be next Friday? \r\n1. May 8 \r\n2. May 22 \r\n3. May 16",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Next Tuesday will be seven days later. 15+7=22",
  	incorrectAnswerResponse: "Incorrect. Next Tuesday will be seven days later. 15+7=22",
  	set: 27
  	},

 	3082:{
  	question_tag: "L2ENLP28QG",
   code: "3082",
   title: "Eng Class Q28",
   learner_question: "\r\n1. friendly \r\n2. friendlier \r\n3. friendliest",
  	question: "Write: Jane is the ______ girl in all of Monrovia. Say: Complete the sentence with the correct word. Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Jane is the friendliest girl in all of Monrovia. \"est\" endings often mean \'most\'.",
  	incorrectAnswerResponse: "Incorrect. Jane is the friendliest girl in all of Monrovia. \"est\" endings often mean \'most\'.",
  	set: 28
  	},

 	3083:{
  	question_tag: "L2ENLP28Q1",
   code: "3083",
   title: "Eng Q55",
   learner_question: "Complete the sentence: Cake is ____ than bread. \r\n1. sweet \r\n2. sweeter \r\n3. sweetest ",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Cake is sweeter than bread. We often use \'er\' endings to compare two things.",
  	incorrectAnswerResponse: "Incorrect. Cake is sweeter than bread. We often use \'er\' endings to compare two things.",
  	set: 28
  	},

 	3084:{
  	question_tag: "L2ENLP28Q2",
   code: "3084",
   title: "Eng Q56",
   learner_question: "Complete the sentence: The motorcycle is very ___. \r\n1. cheap \r\n2. cheaper \r\n3. cheapest",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The motorcycle is very cheap. The sentence is not comparing.",
  	incorrectAnswerResponse: "Incorrect. The motorcycle is very cheap. The sentence is not comparing.",
  	set: 28
  	},

 	3085:{
  	question_tag: "L2ENLP29QG",
   code: "3085",
   title: "Eng Class Q29",
   learner_question: "\r\n1. He sells hair oil. \r\n2. He makes soap at home. \r\n3. His customers buy from someone else.",
  	question: "Say: Open to page 206. Find the story \'Saye and his Sister\' What problem does Saye have?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \"They were buying hair oil from another seller.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"They were buying hair oil from another seller.\"",
  	set: 29
  	},

 	3086:{
  	question_tag: "L2ENLP29Q1",
   code: "3086",
   title: "Eng Q57",
   learner_question: "Who is a competitor? \r\n1. A person who sells the same thing as you. \r\n2. A person who buys what you are selling. \r\n3. A person who gives you money.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A competitor is a person with the same business as you.",
  	incorrectAnswerResponse: "Incorrect. A competitor is a person with the same business as you.",
  	set: 29
  	},

 	3087:{
  	question_tag: "L2ENLP29Q2",
   code: "3087",
   title: "Eng Q58",
   learner_question: "How can we advertise? \r\n1. Lower prices \r\n2. Make better products \r\n3. Put up posters",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! \'Advertise\' means to tell people about a business. We can advertise on posters, on the radio and on television.",
  	incorrectAnswerResponse: "Incorrect. \'Advertise\' means to tell people about a business. We can advertise on posters, on the radio and on television.",
  	set: 29
  	},

 	3088:{
  	question_tag: "L2ENLP30QG",
   code: "3088",
   title: "Eng Class Q30",
   learner_question: "\r\n1. Pauline is friendly \r\n2. Pauline is creative \r\n3. Pauline has a lot of money",
  	question: "Say: Open to page 21\r\n1. In the story, why does Kona want to be partners with Pauline? Answer the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \"\'You are full of creative ideas, says Kona.\'\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"\'You are full of creative ideas, says Kona.\'\"",
  	set: 30
  	},

 	3089:{
  	question_tag: "L2ENLP30Q1",
   code: "3089",
   title: "Eng Q59",
   learner_question: "What is the abbreviation of August? \r\n1. A. \r\n2. Au. \r\n3. Aug.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The abbreviation of August is Aug.",
  	incorrectAnswerResponse: "Incorrect. The abbreviation of August is Aug.",
  	set: 30
  	},

 	3090:{
  	question_tag: "L2ENLP30Q2",
   code: "3090",
   title: "Eng Q60",
   learner_question: "What is the abbreviation of March? \r\n1. Mar. \r\n2. March. \r\n3. M.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The Abbreviation of March is Mar.",
  	incorrectAnswerResponse: "Incorrect. The Abbreviation of March is Mar.",
  	set: 30
  	},

 	3091:{
  	question_tag: "L2ENLP31QG",
   code: "3091",
   title: "Eng Class Q31",
   learner_question: "\r\n1. $100 \r\n2. $50 \r\n3. $150",
  	question: "Say: Flomo makes $100 selling bread. She spends $50 on her business. What is her profit? Enter the number of the correct answer on your phones.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Profit is the money we make minus the money we spend. 100-50=50.",
  	incorrectAnswerResponse: "Incorrect. Profit is the money we make minus the money we spend. 100-50=50.",
  	set: 31
  	},

 	3092:{
  	question_tag: "L2ENLP31Q1",
   code: "3092",
   title: "Eng Q61",
   learner_question: "Sonie spends $40 on her business. She makes $150. How much are her expenses? \r\n1. $40 \r\n2. $150 \r\n3. $110",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Expenses are the money we spend on a business.",
  	incorrectAnswerResponse: "Incorrect. Expenses are the money we spend on a business.",
  	set: 31
  	},

 	3093:{
  	question_tag: "L2ENLP31Q2",
   code: "3093",
   title: "Eng Q62",
   learner_question: "What is income? \r\n1. The money we make before expenses \r\n2. The money we make after expenses. \r\n3. The money we give to others.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Income is the money we make before expenses.",
  	incorrectAnswerResponse: "Incorrect. Income is the money we make before expenses.",
  	set: 31
  	},

 	3094:{
  	question_tag: "L2ENLP32QG",
   code: "3094",
   title: "Eng Class Q32",
   learner_question: "\r\n1. 1 brother \r\n2. 3 brothers \r\n3. 5 brothers",
  	question: "Say: Open to page 226. How many brothers work in the kitchen of the business? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \"3 brothers cook and help customers.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"3 brothers cook and help customers.\"",
  	set: 32
  	},

 	3095:{
  	question_tag: "L2ENLP32Q1",
   code: "3095",
   title: "Eng Q63",
   learner_question: "Which word completes the sentence? She ___ him for breaking the radio. \r\n1. decides \r\n2. blames \r\n3. changes",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! She blames him for breaking the radio. When we \'blame\' someone, we say they did something wrong.",
  	incorrectAnswerResponse: "Incorrect. She blames him for breaking the radio. When we \'blame\' someone, we say they did something wrong.",
  	set: 32
  	},

 	3096:{
  	question_tag: "L2ENLP32Q2",
   code: "3096",
   title: "Eng Q64",
   learner_question: "Which word completes the sentence? If our ___ are more than our income, we will lose money. \r\n1. profit \r\n2. record \r\n3. expenses",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! If our expenses are more than our income, we will lose money. Expenses are the money we spend on a business.",
  	incorrectAnswerResponse: "Incorrect. If our expenses are more than our income, we will lose money. Expenses are the money we spend on a business.",
  	set: 32
  	},

 	3097:{
  	question_tag: "L2ENLP33QG",
   code: "3097",
   title: "Eng Class Q33",
   learner_question: "\r\n1. He wants help with his record book. \r\n2. He wants pepper soup. \r\n3. He wants a date with Miata.",
  	question: "Say: Open to page 234. What does the brother want from Miata? Enter the number of the correct answer in your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \"I mightififIf you go out with me this Saturday night.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"I mightififIf you go out with me this Saturday night.\"",
  	set: 33
  	},

 	3098:{
  	question_tag: "L2ENLP33Q1",
   code: "3098",
   title: "Eng Q65",
   learner_question: "Which is NOT way a record book helps us? \r\n1. Record books track our income and expenses. \r\n2. Record books help us attract new customers. \r\n3. Record books show us how much money we have.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Record books track money, they do not attract new customers.",
  	incorrectAnswerResponse: "Incorrect. Record books track money, they do not attract new customers.",
  	set: 33
  	},

 	3099:{
  	question_tag: "L2ENLP33Q2",
   code: "3099",
   title: "Eng Q66",
   learner_question: "Jane\'s balance is LD $1,500. She pays LD $500 to a shop. What is her new balance? \r\n1. $1000 \r\n2. $500 \r\n3. $2000",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1,500-500=1000. Jane pays $500, so she has $500 less than she did before.",
  	incorrectAnswerResponse: "Incorrect. 1,500-500=1000. Jane pays $500, so she has $500 less than she did before.",
  	set: 33
  	},

 	3100:{
  	question_tag: "L2ENLP34QG",
   code: "3100",
   title: "Eng Class Q34",
   learner_question: "\r\n1. 26 years old. \r\n2. 30 years old. \r\n3. 35 years old.",
  	question: "Say: Open to page 24\r\n3. If Simon is 25 years old now. How old will he be when he finishes his plan? Enter the number of the correct answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Simon has a 5 year plan. If he is 25 now, he will finish when he is 30.",
  	incorrectAnswerResponse: "Incorrect. Simon has a 5 year plan. If he is 25 now, he will finish when he is 30.",
  	set: 34
  	},

 	3101:{
  	question_tag: "L2ENLP34Q1",
   code: "3101",
   title: "Eng Q67",
   learner_question: "Which is 34? \r\n1. twenty-four \r\n2. forty-four \r\n3. thirty-four",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! 34= thirty-four",
  	incorrectAnswerResponse: "Incorrect. 34 = thirty-four",
  	set: 34
  	},

 	3102:{
  	question_tag: "L2ENLP34Q2",
   code: "3102",
   title: "Eng Q68",
   learner_question: "What does it mean to \'save\' money? \r\n1. To keep and not spend it. \r\n2. To buy things for our businesses. \r\n3. To make a five year plan.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We save money when we keep it.",
  	incorrectAnswerResponse: "Incorrect. We save money when we keep it.",
  	set: 34
  	},

 	3103:{
  	question_tag: "L2ENLP35QG",
   code: "3103",
   title: "Eng Class Q35",
   learner_question: "\r\n1. Record keeping \r\n2. Advertising \r\n3. Planning",
  	question: "Say: Jomo goes on the radio to tell people about her business. What is this called? Enter the correct number on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Advertising is letting people know about a business.",
  	incorrectAnswerResponse: "Incorrect. Advertising is letting people know about a business.",
  	set: 35
  	},

 	3104:{
  	question_tag: "L2ENLP35Q1",
   code: "3104",
   title: "Eng Q69",
   learner_question: "What day is 1/12/17? \r\n1. January 12, 2017 \r\n2. December 1, 2017 \r\n3. December 17, 2001",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! 1/12/2017 is January 12, 2017.",
  	incorrectAnswerResponse: "Incorrect. 1/12/2017 is January 12, 2017.",
  	set: 35
  	},

 	3105:{
  	question_tag: "L2ENLP35Q2",
   code: "3105",
   title: "Eng Q70",
   learner_question: "Complete the sentence: She is the ___ girl in the whole school. \r\n1. small \r\n2. smaller \r\n3. smallest",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! She is the smallest girl in the whole school. \'est\' endings often mean \'most\'.",
  	incorrectAnswerResponse: "Incorrect. She is the smallest girl in the whole school. \'est\' endings often mean \'most\'.",
  	set: 35
  	},

 	3106:{
  	question_tag: "L2ENLP36QG",
   code: "3106",
   title: "Eng Class Q36",
   learner_question: "\r\n1. February \r\n2. Febr. \r\n3. Feb.",
  	question: "Say: What is the abbreviation for the month of February? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The abbreviation of February is Feb.",
  	incorrectAnswerResponse: "Incorrect. The abbreviation of February is Feb.",
  	set: 36
  	},

 	3107:{
  	question_tag: "L2ENLP36Q1",
   code: "3107",
   title: "Eng Q71",
   learner_question: "Mary spends $1,000 on her business. She makes $2,500. How much are her expenses? \r\n1. $1,000 \r\n2. $1,500 \r\n3. $2,500",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Expenses are the money we spend on a business.",
  	incorrectAnswerResponse: "Incorrect. Expenses are the money we spend on a business.",
  	set: 36
  	},

 	3108:{
  	question_tag: "L2ENLP36Q2",
   code: "3108",
   title: "Eng Q72",
   learner_question: "Sally has a soap business. She cannot keep track of the money she spends and makes. What will help her? \r\n1. Advertising \r\n2. Creativity \r\n3. A record book",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Record books help businesses keep track of money.",
  	incorrectAnswerResponse: "Incorrect. Record books help businesses keep track of money.",
  	set: 36
  	},

 	3109:{
  	question_tag: "L2ENLP37QG",
   code: "3109",
   title: "Eng Class Q37",
   learner_question: "\r\n1. The greeting \r\n2. The signature \r\n3. The closing",
  	question: "Say: Which comes last in a letter? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We usually end letters by signing them.",
  	incorrectAnswerResponse: "Incorrect. We usually end letters by signing them.",
  	set: 37
  	},

 	3110:{
  	question_tag: "L2ENLP37Q1",
   code: "3110",
   title: "Eng Q73",
   learner_question: "In what part of a letter might we tell someone why we are writing? \r\n1. The greeting \r\n2. The heading \r\n3. The body",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The body of a letter is where we explain why we are writing.",
  	incorrectAnswerResponse: "Incorrect. The body of a letter is where we explain why we are writing.",
  	set: 37
  	},

 	3111:{
  	question_tag: "L2ENLP37Q2",
   code: "3111",
   title: "Eng Q74",
   learner_question: "What are the three parts of communication? \r\n1. A speaker, a message and a header. \r\n2. A letter, a listener and a signature. \r\n3. A speaker, a message and a listener.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A speaker sends a message and a listener hears it.",
  	incorrectAnswerResponse: "Incorrect. A speaker sends a message and a listener hears it.",
  	set: 37
  	},

 	3112:{
  	question_tag: "L2ENLP38QG",
   code: "3112",
   title: "Eng Class Q38",
   learner_question: "\r\n1. A small shop \r\n2. Bread \r\n3. Communication",
  	question: "Say: Open to page 264. What does Moses sell in the story? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The story says, \"One day, Anna gives Moses 2 kinds of bread to sell.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"One day, Anna gives Moses 2 kinds of bread to sell.\"",
  	set: 38
  	},

 	3113:{
  	question_tag: "L2ENLP38Q1",
   code: "3113",
   title: "Eng Q75",
   learner_question: "Who is a supervisor? \r\n1. A person who tells others what to do. \r\n2. A person who buys goods and services. \r\n3. A person who does what her or she is told.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A supervisor manages people.",
  	incorrectAnswerResponse: "Incorrect. A supervisor manages people.",
  	set: 38
  	},

 	3114:{
  	question_tag: "L2ENLP38Q2",
   code: "3114",
   title: "Eng Q76",
   learner_question: "Which is NOT an example of active listening? \r\n1. Asking questions to understand \r\n2. Giving advice \r\n3. Being patient",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Active listening means we carefully hear what is being said to us.",
  	incorrectAnswerResponse: "Incorrect. Active listening means we carefully hear what is being said to us.",
  	set: 38
  	},

 	3115:{
  	question_tag: "L2ENLP39QG",
   code: "3115",
   title: "Eng Class Q39",
   learner_question: "\r\n1. An employer \r\n2. The government \r\n3. A friend",
  	question: "To whom might you send an informal letter? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We send informal letters to people we know well.",
  	incorrectAnswerResponse: "Incorrect. We send informal letters to people we know well.",
  	set: 39
  	},

 	3116:{
  	question_tag: "L2ENLP39Q1",
   code: "3116",
   title: "Eng Q77",
   learner_question: "Which word has a prefix? \r\n1. unhappy \r\n2. careless \r\n3. fixing",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A prefix comes at the start of a word. Unhappy. Undo. ",
  	incorrectAnswerResponse: "Incorrect. A prefix comes at the start of a word. Unhappy. Undo. ",
  	set: 39
  	},

 	3117:{
  	question_tag: "L2ENLP39Q2",
   code: "3117",
   title: "Eng Q78",
   learner_question: "Which word has a suffix? \r\n1. replay \r\n2. careful \r\n3. Liberia",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A suffix comes a the end of a word. Careful. Careless. Helpful.",
  	incorrectAnswerResponse: "Incorrect. A suffix comes a the end of a word. Careful. Careless. Helpful.",
  	set: 39
  	},

 	3118:{
  	question_tag: "L2ENLP40QG",
   code: "3118",
   title: "Eng Class Q40",
   learner_question: "\r\n1. was \r\n2. were \r\n3. am",
  	question: "Write: We ___ sad. Say: Choose the number of the word that correctly completes the sentence.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In the past tense, we use \'were\' with \'we\', \'you\', and \'they\'. We were sad.",
  	incorrectAnswerResponse: "Incorrect. In the past tense, we use \'were\' with \'we\', \'you\', and \'they\'. We were sad.",
  	set: 40
  	},

 	3119:{
  	question_tag: "L2ENLP40Q1",
   code: "3119",
   title: "Eng Q79",
   learner_question: "She ___ sleeping. \r\n1. was \r\n2. am \r\n3. were ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "",
  	incorrectAnswerResponse: "",
  	set: 40
  	},

 	3120:{
  	question_tag: "L2ENLP40Q2",
   code: "3120",
   title: "Eng Q80",
   learner_question: "___ they sleeping? \r\n1. Was \r\n2. Is \r\n3. Were",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In the past tense, we use \'were\' with \'we\', \'you\', and \'they\'. Were they sleeping?",
  	incorrectAnswerResponse: "Incorrect. In the past tense, we use \'were\' with \'we\', \'you\', and \'they\'. Were they sleeping?",
  	set: 40
  	},

 	3121:{
  	question_tag: "L2ENLP41QG",
   code: "3121",
   title: "Eng Class Q41",
   learner_question: "\r\n1. looks \r\n2. looking \r\n3. looked",
  	question: "Write: We ___ at the bird. Choose the number of the word that correctly completes the sentence.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In the past tense, regular verbs end in \'ed\'. Looked, jumped, smelled.",
  	incorrectAnswerResponse: "Incorrect. In the past tense, regular verbs end in \'ed\'. Looked, jumped, smelled.",
  	set: 41
  	},

 	3122:{
  	question_tag: "L2ENLP41Q1",
   code: "3122",
   title: "Eng Q81",
   learner_question: "We ___to her yesterday. \r\n1. talked \r\n2. talking \r\n3. talks",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! In the past tense, regular verbs end in \'ed\'. Talked. Walked. Hoped.",
  	incorrectAnswerResponse: "Incorrect. In the past tense, regular verbs end in \'ed\'. Talked. Walked. Hoped.",
  	set: 41
  	},

 	3123:{
  	question_tag: "L2ENLP41Q2",
   code: "3123",
   title: "Eng Q82",
   learner_question: "She ___ a new list. \r\n1. maked \r\n2. made \r\n3. maded",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Some \'irregular\' verbs do not end with \'ed\' in the past tense. Made. Got. Ate.",
  	incorrectAnswerResponse: "Incorrect. Some \'irregular\' verbs do not end with \'ed\' in the past tense. Made. Got. Ate.",
  	set: 41
  	},

 	3124:{
  	question_tag: "L2ENLP42QG",
   code: "3124",
   title: "Eng Class Q42",
   learner_question: "\r\n1. One person \r\n2. Two people \r\n3. Three people",
  	question: "Say: Open to page 309. How many people is Gayflor introduced to in the story. Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In the story, Gayflor is introduced to Togar and Ms. Toe.",
  	incorrectAnswerResponse: "Incorrect. In the story, Gayflor is introduced to Togar and Ms. Toe.",
  	set: 42
  	},

 	3125:{
  	question_tag: "L2ENLP42Q1",
   code: "3125",
   title: "Eng Q83",
   learner_question: "Which is a polite way to ask someone to help? \r\n1. Could you help me? \r\n2. You must help me. \r\n3. Help me.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Could\' and \'would\' are polite ways to say \'can\'. ",
  	incorrectAnswerResponse: "Incorrect. \'Could\' and \'would\' are polite ways to say \'can\'. ",
  	set: 42
  	},

 	3126:{
  	question_tag: "L2ENLP42Q2",
   code: "3126",
   title: "Eng Q84",
   learner_question: "Which sentence is an invitation? \r\n1. Pay me $5. \r\n2. Please, come to my house tonight. \r\n3. I am sorry, can you say that again?",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Invitations ask someone to go to a place or event.",
  	incorrectAnswerResponse: "Incorrect. Invitations ask someone to go to a place or event.",
  	set: 42
  	},

 	3127:{
  	question_tag: "L2ENLP43QG",
   code: "3127",
   title: "Eng Class Q43",
   learner_question: "\r\n1. Bulldozer \r\n2. Esther \r\n3. Kenneh",
  	question: "Say: Open to page 316. What is the name of Esther\'s supervisor? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The story says, \'\"Now don\'t forget,\' Kenneh says.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \'\"Now don\'t forget,\' Kenneh says.\"",
  	set: 43
  	},

 	3128:{
  	question_tag: "L2ENLP43Q1",
   code: "3128",
   title: "Eng Q85",
   learner_question: "Which is a command? \r\n1. Thank you! \r\n2. Look out! \r\n3. Where is it?",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Commands tell someone to do something.",
  	incorrectAnswerResponse: "Incorrect. Commands tell someone to do something.",
  	set: 43
  	},

 	3129:{
  	question_tag: "L2ENLP43Q2",
   code: "3129",
   title: "Eng Q86",
   learner_question: "Which is a correct command? \r\n1. Write your name. \r\n2. You write your name. \r\n3. Did you write your name?",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Commands often do not have a subject. Run! Watch out! Write your name.",
  	incorrectAnswerResponse: "Incorrect. Commands often do not have a subject. Run! Watch out! Write your name.",
  	set: 43
  	},

 	3130:{
  	question_tag: "L2ENLP44QG",
   code: "3130",
   title: "Eng Class Q44",
   learner_question: "\r\n1. Your hands \r\n2. Your mouth \r\n3. Your mind",
  	question: "What do you use to \'imagine\'? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! When we imagine something, we picture it in our mind.",
  	incorrectAnswerResponse: "Incorrect. When we imagine something, we picture it in our mind.",
  	set: 44
  	},

 	3131:{
  	question_tag: "L2ENLP44Q1",
   code: "3131",
   title: "Eng Q87",
   learner_question: "Which comes first in a thank you letter? \r\n1. The body \r\n2. The date \r\n3. The greeting",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We usually write the date before the greeting in a formal letter.",
  	incorrectAnswerResponse: "Incorrect. We usually write the date before the greeting in a formal letter.",
  	set: 44
  	},

 	3132:{
  	question_tag: "L2ENLP44Q2",
   code: "3132",
   title: "Eng Q88",
   learner_question: "What is it called when you write your name at the bottom of a letter? \r\n1. The greeting \r\n2. The closing \r\n3. The signature",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A signature is a special way of writing our own names. We use signatures on letters and contracts.",
  	incorrectAnswerResponse: "Incorrect. A signature is a special way of writing our own names. We use signatures on letters and contracts.",
  	set: 44
  	},

 	3133:{
  	question_tag: "L2ENLP45QG",
   code: "3133",
   title: "Eng Class Q45",
   learner_question: "\r\n1. talks \r\n2. talked \r\n3. talking",
  	question: "Write: They ___ all night long. Which word completes the sentence. Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In the past tense, regular verbs end in \'ed\'. They talked all night.",
  	incorrectAnswerResponse: "Incorrect. In the past tense, regular verbs end in \'ed\'. They talked all night.",
  	set: 45
  	},

 	3134:{
  	question_tag: "L2ENLP45Q1",
   code: "3134",
   title: "Eng Q89",
   learner_question: "She ___ a good person. \r\n1. was \r\n2. were \r\n3. are",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! In the past tense, we use \'was\' with \'he\', \'she\', \'I\' and \'it\'. She was a good person.",
  	incorrectAnswerResponse: "Incorrect. In the past tense, we use \'was\' with \'he\', \'she\', \'I\' and \'it\'. She was a good person.",
  	set: 45
  	},

 	3135:{
  	question_tag: "L2ENLP45Q2",
   code: "3135",
   title: "Eng Q90",
   learner_question: "Which is a command? \r\n1. You sit. \r\n2. Sit. \r\n3. Did you sit?",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Commands tell someone to do something. We usually drop \'you\' from commands.",
  	incorrectAnswerResponse: "Incorrect. Commands tell someone to do something. We usually drop \'you\' from commands.",
  	set: 45
  	},

 	3136:{
  	question_tag: "L2ENLP46QG",
   code: "3136",
   title: "Eng Class Q46",
   learner_question: "\r\n1. Before we read \r\n2. While we read \r\n3. After we read",
  	question: "Say: When can we re-read a story? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Re-read means read again. We can re-read to help us understand.",
  	incorrectAnswerResponse: "Incorrect. Re-read means read again. We can re-read to help us understand.",
  	set: 46
  	},

 	3137:{
  	question_tag: "L2ENLP46Q1",
   code: "3137",
   title: "Eng Q91",
   learner_question: "Which sentence is correct? \r\n1. Will be you in Monrovia? \r\n2. Will you be in Liberia? \r\n3. You be in Liberia will?",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! With \'will\' questions, the subject usually comes directly after \'will\'.",
  	incorrectAnswerResponse: "Incorrect. With \'will\' questions, the subject usually comes directly after \'will\'.",
  	set: 46
  	},

 	3138:{
  	question_tag: "L2ENLP46Q2",
   code: "3138",
   title: "Eng Q92",
   learner_question: "When can we NOT make a prediction about reading? \r\n1. Before we read \r\n2. While we read \r\n3. After we read",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We can predict what will happen before we read or while we read.",
  	incorrectAnswerResponse: "Incorrect. We can predict what will happen before we read or while we read.",
  	set: 46
  	},

 	3139:{
  	question_tag: "L2ENLP47QG",
   code: "3139",
   title: "Eng Class Q47",
   learner_question: "\r\n1. Being polite \r\n2. Answering questions \r\n3. The price of goods",
  	question: "Say: Which is NOT a part of customer service? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Customer service is how we treat customers.",
  	incorrectAnswerResponse: "Incorrect. Customer service is how we treat customers.",
  	set: 47
  	},

 	3140:{
  	question_tag: "L2ENLP47Q1",
   code: "3140",
   title: "Eng Q93",
   learner_question: "Which word means the same as \"She would\"? \r\n1. She\'d \r\n2. She\'s \r\n3. she\'w",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The contraction for \'would\' is \'d. She\'d like to go.=She would like to go.",
  	incorrectAnswerResponse: "Incorrect. The contraction for \'would\' is \'d. She\'d like to go.=She would like to go.",
  	set: 47
  	},

 	3141:{
  	question_tag: "L2ENLP47Q2",
   code: "3141",
   title: "Eng Q94",
   learner_question: "What is the contraction for \"Could not\"? \r\n1. Could\'nt \r\n2. Couldn\'t \r\n3. Could\'t",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Couldn\'t = Could not. He couldn\'t sleep.",
  	incorrectAnswerResponse: "Incorrect. Couldn\'t = Could not. He couldn\'t sleep.",
  	set: 47
  	},

 	3142:{
  	question_tag: "L2ENLP48QG",
   code: "3142",
   title: "Eng Class Q48",
   learner_question: "\r\n1. Say the most important thing first. \r\n2. Make something as sharp as it can be. \r\n3. Show someone where something is.",
  	question: "Say: What does it mean to \'get to the point\'? Enter the number of the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We get to the point by saying the most important thing first. We do not waste time when we get to the point.",
  	incorrectAnswerResponse: "Incorrect. We get to the point by saying the most important thing first. We do not waste time when we get to the point.",
  	set: 48
  	},

 	3143:{
  	question_tag: "L2ENLP48Q1",
   code: "3143",
   title: "Eng Q95",
   learner_question: "They ___ starting to eat. \r\n1. am \r\n2. is \r\n3. are",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Before \'ing\' verbs, we use \'are\' with \'they\', \'we\', and \'you\'.",
  	incorrectAnswerResponse: "Incorrect. Before \'ing\' verbs, we use \'are\' with \'they\', \'we\', and \'you\'.",
  	set: 48
  	},

 	3144:{
  	question_tag: "L2ENLP48Q2",
   code: "3144",
   title: "Eng Q96",
   learner_question: "I ___ sitting at home. \r\n1. am \r\n2. is \r\n3. are",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Before \'ing\' verbs, we use \'am\' with \'I\'.",
  	incorrectAnswerResponse: "Incorrect. Before \'ing\' verbs, we use \'am\' with \'I\'.",
  	set: 48
  	},

 	3145:{
  	question_tag: "L2ENLP49QG",
   code: "3145",
   title: "Eng Class Q49",
   learner_question: "\r\n1. Kona cannot finish telling her friend about the DJ. \r\n2. Kona does not get the man\'s business. \r\n3. Kona does not get her lunch.",
  	question: "Say: Open to page 369. Why is this story called, \"Kona loses out\"? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In the story, the man is upset with Kona for being rude on the phone. She loses out on his business.",
  	incorrectAnswerResponse: "Incorrect. In the story, the man is upset with Kona for being rude on the phone. She loses out on his business.",
  	set: 49
  	},

 	3146:{
  	question_tag: "L2ENLP49Q1",
   code: "3146",
   title: "Eng Q97",
   learner_question: "Which two letters together make an \'f\' sound? \r\n1. s and h \r\n2. t and h \r\n3. p and h",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Together, p and h make the /f/ sound. Phone. Photograph. Elephant.",
  	incorrectAnswerResponse: "Incorrect. Together, p and h make the /f/ sound. Phone. Photograph. Elephant.",
  	set: 49
  	},

 	3147:{
  	question_tag: "L2ENLP49Q2",
   code: "3147",
   title: "Eng Q98",
   learner_question: "Which is NOT an important phone communication skill? \r\n1. Speaking clearly \r\n2. Doing other things while you listen \r\n3. Asking for the callers contact information",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When talking on the phone, we should not continue unrelated work.",
  	incorrectAnswerResponse: "Incorrect. When talking on the phone, we should not continue unrelated work.",
  	set: 49
  	},

 	3148:{
  	question_tag: "L2ENLP50QG",
   code: "3148",
   title: "Eng Class Q50",
   learner_question: "\r\n1. An explanation \r\n2. A way of saying something in a new way \r\n3. A short description in your own words.",
  	question: "Say: What is a summary? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A summary is a short description in your own words.",
  	incorrectAnswerResponse: "Incorrect. A summary is a short description in your own words.",
  	set: 50
  	},

 	3149:{
  	question_tag: "L2ENLP50Q1",
   code: "3149",
   title: "Eng Q99",
   learner_question: "Which word has a \'long /o/\' sound? \r\n1. on \r\n2. ton \r\n3. tone",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Long vowels sounds sound like the name of the letter. Tone has a \'long /o/\' sound because of the silent \'e\' at the end.",
  	incorrectAnswerResponse: "Incorrect. Long vowels sounds sound like the name of the letter. Tone has a \'long o\' sound because of the silent \'e\' at the end.",
  	set: 50
  	},

 	3150:{
  	question_tag: "L2ENLP50Q2",
   code: "3150",
   title: "Eng Q100",
   learner_question: "Which word has a \'long /u/\' sound. \r\n1. dune \r\n2. bun \r\n3. hunt ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Long vowels sounds sound like the name of the letter. Dune has a \'long /u/\' sound because of the silent \'e\' at the end.",
  	incorrectAnswerResponse: "Incorrect. Long vowels sounds sound like the name of the letter. Dune has a \'long u\' sound because of the silent \'e\' at the end.",
  	set: 50
  	},

 	3151:{
  	question_tag: "L2ENLP51QG",
   code: "3151",
   title: "Eng Class Q51",
   learner_question: "\r\n1. First \r\n2. Because \r\n3. Then",
  	question: "Say: Which is not a sequence word? Enter the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Sequence words show the order things happened in.",
  	incorrectAnswerResponse: "Incorrect. Sequence words show the order things happened in.",
  	set: 51
  	},

 	3152:{
  	question_tag: "L2ENLP51Q1",
   code: "3152",
   title: "Eng Q101",
   learner_question: "Which word has the \'long /i/\' sound? \r\n1. bright \r\n2. hit \r\n3. giving",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Long vowels sounds sound like the name of the letter. Bright has a \'long i\' sound because of the \"igh\" in it.",
  	incorrectAnswerResponse: "Incorrect. Long vowels sounds sound like the name of the letter. Bright has a \'long i\' sound because of the \"igh\" in it.",
  	set: 51
  	},

 	3153:{
  	question_tag: "L2ENLP51Q2",
   code: "3153",
   title: "Eng Q102",
   learner_question: "Which comes after second? \r\n1. First \r\n2. Third \r\n3. Fourth",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The first five ordinal numbers are first, second, third, fourth, fifth.",
  	incorrectAnswerResponse: "Incorrect. The first five ordinal numbers are first, second, third, fourth, fifth.",
  	set: 51
  	},

 	3154:{
  	question_tag: "L2ENLP52QG",
   code: "3154",
   title: "Eng Class Q52",
   learner_question: "\r\n1. James sometimes eats apples. \r\n2. James often eats apples. \r\n3. James never eats apples.",
  	question: "Say: James has eaten 5 apples in his life. Which sentence is true? Enter the number of the true sentence.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! James has eaten 5 apples. He does not eat them often, but he has eaten them at least once.",
  	incorrectAnswerResponse: "Incorrect. James has eaten 5 apples. He does not eat them often, but he has eaten them at least once.",
  	set: 52
  	},

 	3155:{
  	question_tag: "L2ENLP52Q1",
   code: "3155",
   title: "Eng Q103",
   learner_question: "Jane eats rice 5 days a week. Which sentence is true? \r\n1. Jane always eats rice. \r\n2. Jane often eats rice. \r\n3. Jane never eats rice.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Jane does not eat rice with every meal, but she eats it often.",
  	incorrectAnswerResponse: "Incorrect. Jane does not eat rice with every meal, but she eats it often.",
  	set: 52
  	},

 	3156:{
  	question_tag: "L2ENLP52Q2",
   code: "3156",
   title: "Eng Q104",
   learner_question: "Which word sounds the same as \'right\'? \r\n1. ring \r\n2. write \r\n3. rit",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Write and right have the same sound but different spelling.",
  	incorrectAnswerResponse: "Incorrect. Write and right have the same sound but different spelling.",
  	set: 52
  	},

 	3157:{
  	question_tag: "L2ENLP53QG",
   code: "3157",
   title: "Eng Class Q53",
   learner_question: "\r\n1. willn\'t \r\n2. will\'t \r\n3. won\'t",
  	question: "Say: Which is the contraction of \'will not\'?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Won\'t = will not.",
  	incorrectAnswerResponse: "Incorrect. Won\'t = will not.",
  	set: 53
  	},

 	3158:{
  	question_tag: "L2ENLP53Q1",
   code: "3158",
   title: "Eng Q105",
   learner_question: "Which word completes the sentence? Mother __ eats fish. She hates it. \r\n1. usually \r\n2. often \r\n3. never",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! If mother hates fish, she will never want to eat it.",
  	incorrectAnswerResponse: "Incorrect. If mother hates fish, she will never want to eat it.",
  	set: 53
  	},

 	3159:{
  	question_tag: "L2ENLP53Q2",
   code: "3159",
   title: "Eng Q106",
   learner_question: "He ___ walking to school. \r\n1. is \r\n2. are \r\n3. am",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! :) Correct! Before \'ing\' verbs, we use \'is\' with \'he\', \'she\' and \'it\'. He is walking to school.",
  	incorrectAnswerResponse: "Incorrect. Incorrect. Before \'ing\' verbs, we use \'is\' with \'he\', \'she\' and \'it\'. He is walking to school.",
  	set: 53
  	},

 	3160:{
  	question_tag: "L2ENLP54QG",
   code: "3160",
   title: "Eng Class Q54",
   learner_question: "\r\n1. She\'d go. \r\n2. Shed\'nt go. \r\n3. She wouldn\'t go.",
  	question: "Say: Which sentence means, \"She would not go.\"? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The contraction of \'would not\' is wouldn\'t. She wouldn\'t go.",
  	incorrectAnswerResponse: "Incorrect. The contraction of \'would not\' is wouldn\'t. She wouldn\'t go.",
  	set: 54
  	},

 	3161:{
  	question_tag: "L2ENLP54Q1",
   code: "3161",
   title: "Eng Q107",
   learner_question: "Which word best completes the sentence? I ___ take the bus, but today I walked. \r\n1. usually \r\n2. always \r\n3. never",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Usually\' means most of the time.",
  	incorrectAnswerResponse: "Incorrect. \'Usually\' means most of the time.",
  	set: 54
  	},

 	3162:{
  	question_tag: "L2ENLP54Q2",
   code: "3162",
   title: "Eng Q108",
   learner_question: "They ___ going home. \r\n1. am \r\n2. are \r\n3. is",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! :) Correct! Before \'ing\' verbs, we use \'are\' with \'they\', \'we\' and \'you\'. They are going home.",
  	incorrectAnswerResponse: "Incorrect. Incorrect. Before \'ing\' verbs, we use \'are\' with \'they\', \'we\' and \'you\'. They are going home.",
  	set: 54
  	},

 	5001:{
  	question_tag: "L3ENLP1QG",
   code: "5001",
   title: "Eng Class Q1",
   learner_question: "\r\n1. Everybody Loves Arts \r\n2. English Language Arts \r\n3. English Listening Activities",
  	question: "Say: What does ELA stand for? Enter the number of the correct answer in your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! ELA stands for English Language Arts.",
  	incorrectAnswerResponse: "Incorrect. ELA stands for English Language Arts.",
  	set: 1
  	},

 	5002:{
  	question_tag: "L3ENLP1Q1",
   code: "5002",
   title: "Eng Q1",
   learner_question: "What is a \'prediction\'? \r\n1. A best guess about what will happen. \r\n2. Researching information about a topic. \r\n3. Working with a Reading Circle.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	incorrectAnswerResponse: "Incorrect. A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	set: 1
  	},

 	5003:{
  	question_tag: "L3ENLP1Q2",
   code: "5003",
   title: "Eng Q2",
   learner_question: "What is \'journaling\'? \r\n1. Writing fiction stories. \r\n2. Writing what we think and feel. \r\n3. Writing for school.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Correct! Journaling is writing what we think and feel. Journaling helps us collect our thoughts.",
  	incorrectAnswerResponse: "Incorrect. Correct! Journaling is writing what we think and feel. Journaling helps us collect our thoughts.",
  	set: 1
  	},

 	5004:{
  	question_tag: "L3ENLP2QG",
   code: "5004",
   title: "Eng Class Q2",
   learner_question: "\r\n1. He ate the nuts and flew away. \r\n2. He helped the old woman. \r\n3. He flew to the woman\'s village.",
  	question: "Say: Open to page 12 in your books. In this story, what did the hawk do when the woman asked for help? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The story says, \"The hawk ate the nuts, but then he laughed and flew away.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"The hawk ate the nuts, but then he laughed and flew away.\"",
  	set: 2
  	},

 	5005:{
  	question_tag: "L3ENLP2Q1",
   code: "5005",
   title: "Eng Q3",
   learner_question: "What is folklore? \r\n1. New movies and music. \r\n2. Newspapers and reports. \r\n3. Legends passed down by a culture.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Folklore is traditional local stories or legends passed down from generation to generation.",
  	incorrectAnswerResponse: "Incorrect. Folklore is traditional local stories or legends passed down from generation to generation.",
  	set: 2
  	},

 	5006:{
  	question_tag: "L3ENLP2Q2",
   code: "5006",
   title: "Eng Q4",
   learner_question: "Which is not a tradition? \r\n1. The type of food eaten in a community. \r\n2. The stories told in a community. \r\n3. The wild animals that live near a community.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Traditions are things taught to us by elders. They can be ways we live, music, stories, dances. Wild animals are not traditions.",
  	incorrectAnswerResponse: "Incorrect. Traditions are things taught to us by elders. They can be ways we live, music, stories, dances. Wild animals are not traditions.",
  	set: 2
  	},

 	5007:{
  	question_tag: "L3ENLP3QG",
   code: "5007",
   title: "Eng Class Q3",
   learner_question: "\r\n1. like \r\n2. likes \r\n3. liking",
  	question: "Write the following on the board: I ____ rice. Say: Which word best completes the sentence. Choose from the options on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We do not add \'s\' or \'es\' to present tense verbs when the subject is \'I\', \'we\', \'you\' or \'they\'. [We usually add \'s\' or \'es\' to verbs after \'he\', \'she\' and \'it\'.]",
  	incorrectAnswerResponse: "Incorrect. We do not add \'s\' or \'es\' to verbs when the subject is \'I\', \'we\', \'you\' or \'they\'. We usually add \'s\' or \'es\' to verbs after \'he\', \'she\' and \'it\'.",
  	set: 3
  	},

 	5008:{
  	question_tag: "L3ENLP3Q1",
   code: "5008",
   title: "Eng Q5",
   learner_question: "Which word completes the sentence? They ____ their food. \r\n1. share \r\n2. shares \r\n2. sharing",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We do not add \'s\' or \'es\' to present tense verbs when the subject is \'I\', \'we\', \'you\' or \'they\'. [We usually add \'s\' or \'es\' to verbs after \'he\', \'she\' and \'it\'.]",
  	incorrectAnswerResponse: "Incorrect. We do not add \'s\' or \'es\' to verbs when the subject is \'I\', \'we\', \'you\' or \'they\'. We usually add \'s\' or \'es\' to verbs after \'he\', \'she\' and \'it\'.",
  	set: 3
  	},

 	5009:{
  	question_tag: "L3ENLP3Q2",
   code: "5009",
   title: "Eng Q6",
   learner_question: "Which word is correct? She ____ happy. \r\n1. am \r\n2. is \r\n3. are",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We use \'is\' with \'he, \'she\' and \'it\'. She is happy. He is sad.",
  	incorrectAnswerResponse: "Incorrect. We use \'is\' with \'he, \'she\' and \'it\'. She is happy. He is sad.",
  	set: 3
  	},

 	5010:{
  	question_tag: "L3ENLP4QG",
   code: "5010",
   title: "Eng Class Q4",
   learner_question: "\r\n1. Draft \r\n2. Revise \r\n3. Plan",
  	question: "What is the first step in the writing process? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The first step in writing a draft is to plan. We must think about what we will write and how we will arrange our writing.",
  	incorrectAnswerResponse: "Incorrect. The first step in writing a draft is to plan. We must think about what we will write and how we will arrange our writing.",
  	set: 4
  	},

 	5011:{
  	question_tag: "L3ENLP4Q1",
   code: "5011",
   title: "Eng Q7",
   learner_question: "Why might a tradition be \'left\'? \r\n1. It is an important tradition. \r\n2. It is an enjoyable tradition. \r\n3. It is a harmful tradition.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Some traditions, like child marriage, are harmful. These traditions should be left behind.",
  	incorrectAnswerResponse: "Incorrect. Some traditions, like child marriage, are harmful. These traditions should be left behind.",
  	set: 4
  	},

 	5012:{
  	question_tag: "L3ENLP4Q2",
   code: "5012",
   title: "Eng Q8",
   learner_question: "Who is an elder? \r\n1. A local leader \r\n2. An older person \r\n3. A worker",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'Elder\' means \'older\'. An elder is someone in a community who is usually considered old and wise.",
  	incorrectAnswerResponse: "Incorrect. Elder means older. An elder is someone in a community who is usually considered old and wise.",
  	set: 4
  	},

 	5013:{
  	question_tag: "L3ENLP5QG",
   code: "5013",
   title: "Eng Class Q5",
   learner_question: "\r\n1. A group of sentences that share a topic or idea. \r\n2. A topic sentence about a main idea. \r\n3. A story about a tradition.",
  	question: "Say: What is a paragraph? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A paragraph is a group of sentences about a single topic or idea. We divide our writing into paragraphs to make it clearer.",
  	incorrectAnswerResponse: "Incorrect. A paragraph is a group of sentences about a single topic or idea. We divide our writing into paragraphs to make it clearer.",
  	set: 5
  	},

 	5014:{
  	question_tag: "L3ENLP5Q1",
   code: "5014",
   title: "Eng Q9",
   learner_question: "What do we indent in a paragraph? \r\n1. The names of people and places. \r\n2. Each sentence. \r\n3. The first line.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We ident the first line of each paragraph to make it clear that a new paragraph is starting. Indents are small spaces.",
  	incorrectAnswerResponse: "Incorrect. We ident the first line of each paragraph to make it clear that a new paragraph is starting. Indents are small spaces.",
  	set: 5
  	},

 	5015:{
  	question_tag: "L3ENLP5Q2",
   code: "5015",
   title: "Eng Q10",
   learner_question: "What do \'Body sentences\' do? \r\n1. Introduce the topic of a paragraph. \r\n2. Support the topic sentence with details. \r\n3. Conclude the idea of the paragraph or story.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Body sentences provide details, they support the topic sentence.",
  	incorrectAnswerResponse: "Incorrect. Body sentences provide details, they support the topic sentence.",
  	set: 5
  	},

 	5016:{
  	question_tag: "L3ENLP6QG",
   code: "5016",
   title: "Eng Class Q6",
   learner_question: "\r\n1. Tell them stories. \r\n2. Ask them questions \r\n3. Help them read",
  	question: "Say: What do we do when we interview a person? Answer the number of the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When we interview someone, we ask them questions to get information.",
  	incorrectAnswerResponse: "Incorrect. When we interview someone, we ask them questions to get information.",
  	set: 6
  	},

 	5017:{
  	question_tag: "L3ENLP6Q1",
   code: "5017",
   title: "Eng Q11",
   learner_question: "Which word is a noun? \r\n1. sing \r\n2. fast \r\n3. baby",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Nouns are people, places and things. Baby, car, Liberia, and pencil are all nouns.",
  	incorrectAnswerResponse: "Incorrect. Nouns are people, places and things. Baby, car, Liberia, and pencil are all nouns.",
  	set: 6
  	},

 	5018:{
  	question_tag: "L3ENLP6Q2",
   code: "5018",
   title: "Eng Q12",
   learner_question: "Which word is a verb? \r\n1. Monrovia \r\n2. run \r\n3. blue",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Verbs are action words. They can be done. Run, swim, eat and think are all verbs.",
  	incorrectAnswerResponse: "Incorrect. Verbs are action words. They can be done. Run, swim, eat and think are all verbs.",
  	set: 6
  	},

 	5019:{
  	question_tag: "L3ENLP7QG",
   code: "5019",
   title: "Eng Class Q7",
   learner_question: "\r\n1. Think about a topic. \r\n2. Get a headache. \r\n3. Get a headache.",
  	question: "Say: What does it mean to \'brainstorm\'? Enter the number of the correct answer on your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! When we brainstorm, we think about possible ideas. Brainstorming is an important part of planning.",
  	incorrectAnswerResponse: "Incorrect. When we brainstorm, we think about possible ideas. Brainstorming is an important part of planning.",
  	set: 7
  	},

 	5020:{
  	question_tag: "L3ENLP7Q1",
   code: "5020",
   title: "Eng Q13",
   learner_question: "Which is NOT a characteristic of a topic sentence? \r\n1. It has the main idea. \r\n2. It is a complete sentence. \r\n3. It supports the topic with evidence and details.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Topic sentences tells the main idea of a paragraph. They do not usually give details to support the topic.",
  	incorrectAnswerResponse: "Incorrect. Topic sentences tells the main idea of a paragraph. They do not usually give details to support the topic.",
  	set: 7
  	},

 	5021:{
  	question_tag: "L3ENLP7Q2",
   code: "5021",
   title: "Eng Q14",
   learner_question: "When do we use the \"!\" mark? \r\n1. To ask a question. \r\n2. To show strong feelings. \r\n3. To show a pause.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We use the \"!\" exclamation mark to show strong feelings.",
  	incorrectAnswerResponse: "Incorrect. We use the \"!\" exclamation mark to show strong feelings.",
  	set: 7
  	},

 	5022:{
  	question_tag: "L3ENLP8QG",
   code: "5022",
   title: "Eng Class Q8",
   learner_question: "\r\n1. The time and place of the story. \r\n2. The main idea of the story. \r\n3. The main character of the story.",
  	question: "Say: What is the \'setting\' of a story? Enter the number of the correct answer in your phones.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We call the time and place a story takes place the \'setting\'.",
  	incorrectAnswerResponse: "Incorrect. We call the time and place a story takes place the \'setting\'.",
  	set: 8
  	},

 	5023:{
  	question_tag: "L3ENLP8Q1",
   code: "5023",
   title: "Eng Q15",
   learner_question: "Which word in the sentence is a noun? She runs home quickly. \r\n1. runs \r\n2. home \r\n3. quickly",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Nouns are people, places and things. Home, cat, China, and pen are all nouns.",
  	incorrectAnswerResponse: "Incorrect. Nouns are people, places and things. Home, cat, China, and pen are all nouns.",
  	set: 8
  	},

 	5024:{
  	question_tag: "L3ENLP8Q2",
   code: "5024",
   title: "Eng Q16",
   learner_question: "Which word in the sentence is a verb? He eats the food slowly. \r\n1. He \r\n2. eats \r\n3. food",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Verbs are action words. They can be done. Run, swim, eat and think are all verbs.",
  	incorrectAnswerResponse: "Incorrect. Verbs are action words. They can be done. Run, swim, eat and think are all verbs.",
  	set: 8
  	},

 	5025:{
  	question_tag: "L3ENLP9QG",
   code: "5025",
   title: "Eng Class Q9",
   learner_question: "\r\n1. Describe nouns \r\n2. Describe verbs \r\n3. Show action",
  	question: "Say: What do adjectives do? Enter the number of the correct answer in your phone.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Adjectives describe nouns. Slow, red, tall, beautiful and rude are all adjectives.",
  	incorrectAnswerResponse: "Incorrect. Adjectives describe nouns. Slow, red, tall, beautiful and rude are all adjectives.",
  	set: 9
  	},

 	5026:{
  	question_tag: "L3ENLP9Q1",
   code: "5026",
   title: "Eng Q17",
   learner_question: "Which word in the sentence is an adjective? The kind boy eats. \r\n1. kind \r\n2. boy \r\n3. eats",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'kind\' describes the boy. It tells us what type of boy he is. Kind, cold, polite, fast and clever are all adjectives.",
  	incorrectAnswerResponse: "Incorrect. \'kind\' describes the boy. It tells us what type of boy he is. Kind, cold, polite, fast and clever are all adjectives.",
  	set: 9
  	},

 	5027:{
  	question_tag: "L3ENLPQ2",
   code: "5027",
   title: "Eng Q18",
   learner_question: "Which word in the sentence is an adjective? The old woman listens. \r\n1. old \r\n2. woman \r\n3. listens",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Old\' describes the woman. It tells us about her age. Old, young, happy, short and blue are all adjectives.",
  	incorrectAnswerResponse: "Incorrect. \'Old\' describes the woman. It tells us about her age. Old, young, happy, short and blue are all adjectives.",
  	set: 9
  	},

 	5028:{
  	question_tag: "L3ENLP10QG",
   code: "5028",
   title: "Eng Class Q10",
   learner_question: "\r\n1. Before we read. \r\n2. As we read. \r\n3. After we read.",
  	question: "Say: When is NOT a time we can make a prediction.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We can make predictions before reading or as we read. Prediction means making a best guess about what will happen.",
  	incorrectAnswerResponse: "Incorrect. We can make predictions before reading or as we read. Prediction means making a best guess about what will happen.",
  	set: 10
  	},

 	5029:{
  	question_tag: "L3ENLP10Q1",
   code: "5029",
   title: "Eng Q19",
   learner_question: "Which sentence is NOT correct? \r\n1. Sally get a new phone. \r\n2. Sonie sees her mother. \r\n3. They have a big truck.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Sentence 1 should be \'Sally gets a new phone.\' We usually add \'s\' or \'es\' to present tense verbs after the name of a person.",
  	incorrectAnswerResponse: "Incorrect. Sentence 1 should be \'Sally gets a new phone.\' We usually add \'s\' or \'es\' to present tense verbs after the name of a person.",
  	set: 10
  	},

 	5030:{
  	question_tag: "L3ENLP10Q2",
   code: "5030",
   title: "Eng Q20",
   learner_question: "Which sentence has an adjective? \r\n1.Sally sees Ben and James. \r\n2. The birds eat food on the street. \r\n3. The big dog runs home.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Big is an adjective. \'Big\' tells us about the dog. Big, small, sad, yellow, slow and sleepy are all adjectives.",
  	incorrectAnswerResponse: "Incorrect. Big is an adjective. \'Big\' tells us about the dog. Big, small, sad, yellow, slow and sleepy are all adjectives.",
  	set: 10
  	},

 	5031:{
  	question_tag: "L3ENLP11QG",
   code: "5031",
   title: "Eng Class Q11",
   learner_question: "Enter the correct year.",
  	question: "Say: Open your books to page 58. What year did William Tubman become president. Enter the year in your phones now.",
  	answer: "1944",
  	correctAnswerResponse: ":) Correct! The story says, \"Tubman became president in 1944.\"",
  	incorrectAnswerResponse: "Incorrect. The story says, \"Tubman became president in 1944.\"",
  	set: 11
  	},

 	5032:{
  	question_tag: "L3ENLP11Q1",
   code: "5032",
   title: "Eng Q21",
   learner_question: "What is a biography? \r\n1. A report about an important event. \r\n2. The story of a person\'s life. \r\n3. An investigation into why something happened.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A biography is the story of a person\'s life.",
  	incorrectAnswerResponse: "Incorrect. A biography is the story of a person\'s life.",
  	set: 11
  	},

 	5033:{
  	question_tag: "L3ENLP11Q2",
   code: "5033",
   title: "Eng Q22",
   learner_question: "What type of questions is the word \'When\' used to ask? \r\n1. Questions about place. \r\n2. Questions about time. \r\n3. Questions about names.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'When\' questions ask about time. When will we eat? When were you born? Etc.",
  	incorrectAnswerResponse: "Incorrect. \'When\' questions ask about time. When will we eat? When were you born? Etc.",
  	set: 11
  	},

 	5034:{
  	question_tag: "L3ENLP12QG",
   code: "5034",
   title: "Eng Class Q12",
   learner_question: "\r\n1. Fixing errors. \r\n2. Making plans. \r\n3. Writing",
  	question: "Say: What do we do when we start \'drafting\'? Enter the number of the correct answer on your phones.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! When we draft, we are starting to write. ",
  	incorrectAnswerResponse: "Incorrect. When we draft, we are starting to write. ",
  	set: 12
  	},

 	5035:{
  	question_tag: "L3ENLP12Q1",
   code: "5035",
   title: "Eng Q23",
   learner_question: "Which sentence is NOT correct? \r\n1. We likes cakes. \r\n2. I like sweets. \r\n3. She likes chocolate.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! With the subject \'we\' we do not ad \'s\' or \'es\' to the end of verbs. We like cakes.",
  	incorrectAnswerResponse: "Incorrect. With the subject \'we\' we do not ad \'s\' or \'es\' to the end of verbs. We like cakes.",
  	set: 12
  	},

 	5036:{
  	question_tag: "L3ENLP12Q2",
   code: "5036",
   title: "Eng Q24",
   learner_question: "Which sentence is not correct? \r\n1. She eat rice and chicken. \r\n2. He eats rice and chicken. \r\n3. They eat rice and chicken.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! With the subject, \'she\', \'he\' and \'it\' we usually add \'s\' or \'es\' to the end of the verb. She eats rice and chicken.",
  	incorrectAnswerResponse: "Incorrect. With the subject, \'she\', \'he\' and \'it\' we usually add \'s\' or \'es\' to the end of the verb. She eats rice and chicken.",
  	set: 12
  	},

 	5037:{
  	question_tag: "L3ENLP13QG",
   code: "5037",
   title: "Eng Class Q13",
   learner_question: "\r\n1. Plan what we will write. \r\n2. Edit what we have written. \r\n3. Write a first draft.",
  	question: "Say: What does it mean to revise our writing? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Revising means editing something that is already written.",
  	incorrectAnswerResponse: "Incorrect. Revising means editing something that is already written.",
  	set: 13
  	},

 	5038:{
  	question_tag: "L3ENLP13Q1",
   code: "5038",
   title: "Eng Q25",
   learner_question: "What do topic sentences tell us? \r\n1. The main idea of a biography. \r\n2. Details of the 5Ws & H questions. \r\n3. The main idea of a paragraph.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Topic sentences tell us what a paragraph is about.",
  	incorrectAnswerResponse: "Incorrect. Topic sentences tell us what a paragraph is about.",
  	set: 13
  	},

 	5039:{
  	question_tag: "L3ENLP13Q2",
   code: "5039",
   title: "Eng Q26",
   learner_question: "Which word is an adjective in the sentence? The girls ran to the old school. \r\n1. girls \r\n2. ran \r\n3. old",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Old is an adjective. It describes the school.",
  	incorrectAnswerResponse: "Incorrect. Old is an adjective. It describes the school.",
  	set: 13
  	},

 	5040:{
  	question_tag: "L3ENLP14QG",
   code: "5040",
   title: "Eng Class Q14 ",
   learner_question: "\r\n1. They walked home and ate cake. \r\n2. They walk home and eat cake. \r\n3. They are walking home and eating cake.",
  	question: "Say: Which sentence is in the past tense? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Walked\' and \'ate\' are past tense verbs.",
  	incorrectAnswerResponse: "Incorrect. \'Walked\' and \'ate\' are past tense verbs.",
  	set: 14
  	},

 	5041:{
  	question_tag: "L3ENLP14Q1",
   code: "5041",
   title: "Eng Q27",
   learner_question: "Which sentenced is in the past tense? \r\n1. We had fun at the party. \r\n2. We have fun at the party. \r\n3. We are having fun at the party. ",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Had\' is the past tense form of \'have\'. Verbs determine the tense of a sentence.",
  	incorrectAnswerResponse: "Incorrect. \'Had\' is the past tense form of \'have\'. Verbs determine the tense of a sentence.",
  	set: 14
  	},

 	5042:{
  	question_tag: "L3ENLP14Q2",
   code: "5042",
   title: "Eng Q28",
   learner_question: "What is the past tense form of the verb \'is\'? \r\n1. are \r\n2. was \r\n3. were",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Was is the past tense form of \'is\'. She was happy.",
  	incorrectAnswerResponse: "Incorrect. Was is the past tense form of \'is\'. She was happy.",
  	set: 14
  	},

 	5043:{
  	question_tag: "L3ENLP15QG",
   code: "5043",
   title: "Eng Class Q15",
   learner_question: "\r\n1. jumped \r\n2. wrote \r\n3. asked",
  	question: "Say: Which verb is a special past tense verb? Enter the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Special past tense verbs do not end in \'ed\' like most verbs. Ate, spoke, wrote, slept.",
  	incorrectAnswerResponse: "Incorrect. Special past tense verbs do not end in \'ed\' like most verbs. Ate, spoke, wrote, slept.",
  	set: 15
  	},

 	5044:{
  	question_tag: "L3ENLP15Q1",
   code: "5044",
   title: "Eng Q29",
   learner_question: "What is the past tense form of the verb \'make\'? \r\n1. made \r\n2. maked \r\n3. making",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Make is a special verb. It does not end in \'ed\'. Made.",
  	incorrectAnswerResponse: "Incorrect. Make is a special verb. It does not end in \'ed\'. Made.",
  	set: 15
  	},

 	5045:{
  	question_tag: "L3ENLP15Q2",
   code: "5045",
   title: "Eng Q30",
   learner_question: "What is the past tense form of the verb \'bring\'? \r\n1. bringed \r\n3. brung \r\n3. brought",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Bring is a special verb. It does not end in \'ed\'. Brought.",
  	incorrectAnswerResponse: "Incorrect. Bring is a special verb. It does not end in \'ed\'. Brought.",
  	set: 15
  	},

 	5046:{
  	question_tag: "L3ENLP16QG",
   code: "5046",
   title: "Eng Class Q16",
   learner_question: "\r\n1. goed \r\n2. went \r\n3. gone",
  	question: "What is the past tense form of the verb \'go\'? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'Go\' is a special verb. It does not end in \'ed\'. Went.",
  	incorrectAnswerResponse: "Incorrect. \'Go\' is a special verb. It does not end in \'ed\'. Went.",
  	set: 16
  	},

 	5047:{
  	question_tag: "L3ENLP16Q1",
   code: "5047",
   title: "Eng Q31",
   learner_question: "What is the past tense form of the verb \'know\'? \r\n1. knew \r\n2. knowed \r\n3. knowing",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Know\' is a special verb. It does not end in \'ed\'. Knew.",
  	incorrectAnswerResponse: "Incorrect. \'Know\' is a special verb. It does not end in \'ed\'. Knew.",
  	set: 16
  	},

 	5048:{
  	question_tag: "L3ENLP16Q2",
   code: "5048",
   title: "Eng Q32",
   learner_question: "What is the past tense form of the verb \'jump\'? \r\n1. jomp \r\n2. jumping \r\n3. jumped",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! \'Jump\' is a regular verb. It ends with \'ed\' in the past tense. Jumped.",
  	incorrectAnswerResponse: "Incorrect. \'Jump\' is a regular verb. It ends with \'ed\' in the past tense. Jumped.",
  	set: 16
  	},

 	5049:{
  	question_tag: "L3ENLP17QG",
   code: "5049",
   title: "Eng Class Q17",
   learner_question: "The good girl ran home after school. \r\n1. good \r\n2. girl \r\n3. after",
  	question: "Say: Which word in the sentence is an adjective? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Good\' is an adjective. It describes the girl.",
  	incorrectAnswerResponse: "Incorrect. \'Good\' is an adjective. It describes the girl.",
  	set: 17
  	},

 	5050:{
  	question_tag: "L3ENLP17Q1",
   code: "5050",
   title: "Eng Q33",
   learner_question: "Which word in the sentence is a noun? The big dog ate. \r\n1. big \r\n2. dog \r\n3. ate",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'Dog\' is a noun. Nouns are people, places and things.",
  	incorrectAnswerResponse: "Incorrect. \'Dog\' is a noun. Nouns are people, places and things.",
  	set: 17
  	},

 	5051:{
  	question_tag: "L3ENLP17Q2",
   code: "5051",
   title: "Eng Q34",
   learner_question: "Which word is a verb? The birds sit in the tall tree. \r\n1. birds \r\n2. sit \r\n3. tall",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'Sit\' is a verb. Verbs are action words- they are things we can do.",
  	incorrectAnswerResponse: "Incorrect. \'Sit\' is a verb. Verbs are action words- they are things we can do.",
  	set: 17
  	},

 	5052:{
  	question_tag: "L3ENLP18QG",
   code: "5052",
   title: "Eng Class Q18",
   learner_question: "\r\n1. We eat old rice. \r\n2. They looked at the trees. \r\n3. The girl walks home slowly.",
  	question: "Say: Which sentence is in the past tense? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! \'Looked\' is a regular past tense verb. Verbs tell us the tense of a sentence. ",
  	incorrectAnswerResponse: "Incorrect. They looked at the trees. \'Looked\' is a regular past tense verb. Verbs tell us the tense of a sentence. ",
  	set: 18
  	},

 	5053:{
  	question_tag: "L3ENLP18Q1",
   code: "5053",
   title: "Eng Q35",
   learner_question: "What is the past tense form of the verb \'see\'? \r\n1. saw \r\n2. seed \r\n3. seeing",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'See\' is a special past tense verb. It does not end in \'ed\'. Saw.",
  	incorrectAnswerResponse: "Incorrect. \'See\' is a special past tense verb. It does not end in \'ed\'. Saw.",
  	set: 18
  	},

 	5054:{
  	question_tag: "L3ENLP18Q2",
   code: "5054",
   title: "Eng Q36",
   learner_question: "Which word is an adjective in the sentence The woman saw a small mouse. \r\n1. woman \r\n2. saw \r\n3. small",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Small is an adjective. It describes the mouse.",
  	incorrectAnswerResponse: "Incorrect. Small is an adjective. It describes the mouse.",
  	set: 18
  	},

 	5055:{
  	question_tag: "L3ENLP19QG",
   code: "5055",
   title: "Eng Class Q19",
   learner_question: "\r\n1. plan, draft, finalize, edit, rewrite \r\n2. write, draft, revise, finalize \r\n3. plan, draft, revise, edit, finalize",
  	question: "What are the steps in the writing process? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We plan what we will write, make a draft, revise what we\'ve written, make edits and then finalize.",
  	incorrectAnswerResponse: "Incorrect. We plan what we will write, make a draft, revise what we\'ve written, make edits and then finalize.",
  	set: 19
  	},

 	5056:{
  	question_tag: "L3ENLP19Q1",
   code: "5056",
   title: "Eng Q37",
   learner_question: "\r\n1. Sara sees a white cat. \r\n2. Dan wrote to his mother. \r\n3. The children walk to school.",
  	question: "Say: Which sentence is in the past tense? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Wrote is a special past tense verb. The verb wrote makes sentence 2 past tense. ",
  	incorrectAnswerResponse: "Incorrect. Dan wrote to his mother. Wrote is a special past tense verb. The verb wrote makes sentence 2 past tense. ",
  	set: 19
  	},

 	5057:{
  	question_tag: "L3ENLP19Q2",
   code: "5057",
   title: "Eng Q38",
   learner_question: "Which word is an adjective? \r\n1. red \r\n2. read \r\n3. Rachel",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Red is an adjective. Adjectives describe.",
  	incorrectAnswerResponse: "Incorrect. Red is an adjective. Adjectives describe.",
  	set: 19
  	},

 	5058:{
  	question_tag: "L3ENLP20QG",
   code: "5058",
   title: "Eng Class Q20",
   learner_question: "\r\n1. A \r\n2. B \r\n3. C",
  	question: "Say: Which module did we start today? Enter the correct answer on your phone.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct!",
  	incorrectAnswerResponse: "Incorrect. We started module B today. If you did not attend class, be sure to ask someone to help you catch up!",
  	set: 20
  	},

 	5059:{
  	question_tag: "L3ENLP20Q1",
   code: "5059",
   title: "Eng Q39",
   learner_question: "What is a biography? \r\n1. A report about an important event. \r\n2. The story of a person\'s life. \r\n3. An investigation into why something happened.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A biography is the story of a person\'s life.",
  	incorrectAnswerResponse: "Incorrect. A biography is the story of a person\'s life.",
  	set: 20
  	},

 	5060:{
  	question_tag: "L3ENLP20Q2",
   code: "5060",
   title: "Eng Q40",
   learner_question: "Which is a \'cause\' of missing class? \r\n1. You will not learn. \r\n2. You will fall behind. \r\n3. You have a busy schedule.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A cause is the reason something happens. Some people miss class because they are busy and do not plan ahead.",
  	incorrectAnswerResponse: "Incorrect. A cause is the reason something happens. Some people miss class because they are busy and do not plan ahead.",
  	set: 20
  	},

 	5061:{
  	question_tag: "L3ENLP21QG",
   code: "5061",
   title: "Eng Class Q21",
   learner_question: "\r\n1. A shop owner \r\n2. A politician \r\n3. A farmer",
  	question: "Which person is involved in agriculture? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Agriculture is word for the work related to growing things and raising animals for food.",
  	incorrectAnswerResponse: "Incorrect. Agriculture is word for the work related to growing things and raising animals for food.",
  	set: 21
  	},

 	5062:{
  	question_tag: "L3ENLP21Q1",
   code: "5062",
   title: "Eng Q41",
   learner_question: "Which word is an adverb? \r\n1. slowly \r\n2. big \r\n3. run",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Adverbs often end on \'ly\'. Adverbs often describe verbs. The dog ran slowly.",
  	incorrectAnswerResponse: "Incorrect. Adverbs often end on \'ly\'. Adverbs often describe verbs. The dog ran slowly.",
  	set: 21
  	},

 	5063:{
  	question_tag: "L3ENLP21Q2",
   code: "5063",
   title: "Eng Q42",
   learner_question: "Which word in the sentence is an adverb? The girls did poorly on the big exam. \r\n1. girls \r\n2. poorly \r\n3. big",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The adverb \'poorly\' describes how the girls did on the exam.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'poorly\' describes how the girls did on the exam.",
  	set: 21
  	},

 	5064:{
  	question_tag: "L3ENLP22QG",
   code: "5064",
   title: "Eng Class Q22",
   learner_question: "\r\n1. Uncle Kai is informed. \r\n2. Uncle Kai explains that Liberia does not produce enough food. \r\n3. Uncle Kai and the village elders talk to the young men.",
  	question: "Say: Open your books to page 12\r\n2. Which sentence paraphrases the story? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When we paraphrase, we tell the most important information in our own words. The most important information from the story is that Liberia does not produce enough food.",
  	incorrectAnswerResponse: "Incorrect. When we paraphrase, we tell the most important information in our own words. The most important information from the story is that Liberia does not produce enough food.",
  	set: 22
  	},

 	5065:{
  	question_tag: "L3ENLP22Q1",
   code: "5065",
   title: "Eng Q43",
   learner_question: "Which is a prediction? \r\n1. I think it will rain tomorrow. \r\n2. It rained yesterday. \r\n3. I like the rain.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	incorrectAnswerResponse: "Incorrect. A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	set: 22
  	},

 	5066:{
  	question_tag: "L3ENLP22Q2",
   code: "5066",
   title: "Eng Q44",
   learner_question: "Which word in the sentence is an adverb? Sonie ran home quickly. \r\n1. Sonie \r\n2. ran \r\n3. quickly",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The adverb \'quickly\' describes how Sonie ran.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'quickly\' describes how Sonie ran.",
  	set: 22
  	},

 	5067:{
  	question_tag: "L3ENLP23QG",
   code: "5067",
   title: "Eng Class Q23",
   learner_question: "\r\n1. agriculture \r\n2. empty \r\n3. employment",
  	question: "Say: I will sound out a word. Choose the number of the word I sound out. Listen: em-ploy-ment.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Sounding out words helps us read challenging new words.",
  	incorrectAnswerResponse: "Incorrect. Sounding out words helps us read challenging new words.",
  	set: 23
  	},

 	5068:{
  	question_tag: "L3ENLP23Q1",
   code: "5068",
   title: "Eng Q45",
   learner_question: "What is an example of a professional source? \r\n1. A friend talking at a home \r\n2. A politician giving a speech \r\n3. A report writing in a newspaper.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! When we hear a fact, we must consider the source. Professional sources report facts for a living.",
  	incorrectAnswerResponse: "Incorrect. When we hear a fact, we must consider the source. Professional sources report facts for a living.",
  	set: 23
  	},

 	5069:{
  	question_tag: "L3ENLP23Q2",
   code: "5069",
   title: "Eng Q46",
   learner_question: "Which word in the sentence is an adverb? We slowly ate the chicken. \r\n1. slowly \r\n2. ate \r\n3. chicken",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The adverb \'slowly\' describes how the chicken was eaten.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'slowly\' describes how the chicken was eaten.",
  	set: 23
  	},

 	5070:{
  	question_tag: "L3ENLP24QG",
   code: "5070",
   title: "Eng Class Q24",
   learner_question: "\r\n1. I ate chicken yesterday. \r\n2. I will eat chicken tomorrow. \r\n3. I am eating chicken now.",
  	question: "Which sentence is in the future tense? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The future tense us about things that have not happened but will happen. ",
  	incorrectAnswerResponse: "Incorrect. The future tense us about things that have not happened but will happen. ",
  	set: 24
  	},

 	5071:{
  	question_tag: "L3ENLP24Q1",
   code: "5071",
   title: "Eng Q47",
   learner_question: "Which is the future tense version of the sentence: I run home. \r\n1. I ran home. \r\n2. I will run home. \r\n3. I am running home.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The future tense us about things that have not happened but will happen. ",
  	incorrectAnswerResponse: "Incorrect. The future tense us about things that have not happened but will happen. ",
  	set: 24
  	},

 	5072:{
  	question_tag: "L3ENLP24Q2",
   code: "5072",
   title: "Eng Q48",
   learner_question: "Which is the future tense version of the sentence: I drink water. \r\n1. I am going to drink water. \r\n2. I drank water. \r\n3. I am drinking water.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We can also use \'going to\' to talk about the future.",
  	incorrectAnswerResponse: "Incorrect. We can also use \'going to\' to talk about the future.",
  	set: 24
  	},

 	5073:{
  	question_tag: "L3ENLP25QG",
   code: "5073",
   title: "Eng Class Q25",
   learner_question: "\r\n1. Guessing what will happen next. \r\n2. Copying the exact words of another. \r\n3. checking facts with multiple sources.",
  	question: "What is plagiarism? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Plagiarism means copying the work or exact words of another person. We must be careful to say things in our own words and give credit to other people for their ideas.",
  	incorrectAnswerResponse: "Incorrect. Plagiarism means copying the work or exact words of another person. We must be careful to say things in our own words and give credit to other people for their ideas.",
  	set: 25
  	},

 	5074:{
  	question_tag: "L3ENLP25Q1",
   code: "5074",
   title: "Eng Q49",
   learner_question: "Which is the future tense version of the sentence: I asked who the sources are. \r\n1. I am asking who the sources are. \r\n2. I ask who the sources are. \r\n3. I will ask who the sources are.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The future tense tells us about things that have not happened but will happen. ",
  	incorrectAnswerResponse: "Incorrect. I will ask who the sources are. The future tense tells us about things that have not happened but will happen. ",
  	set: 25
  	},

 	5075:{
  	question_tag: "L3ENLP25Q2",
   code: "5075",
   title: "Eng Q50",
   learner_question: "Which sentence is \'plagiarism\' of the example: Agriculture is the key to Liberia\'s future. \r\n1. Agriculture is very important for our nation\'s future. \r\n2.Agriculture is the key to Liberia\'s future. \r\n3. Agriculture is important.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Plagiarism means copying the work or exact words of another person. We must be careful to say things in our own words and give credit to other people for their ideas.",
  	incorrectAnswerResponse: "Incorrect. Plagiarism means copying the work or exact words of another person. We must be careful to say things in our own words and give credit to other people for their ideas.",
  	set: 25
  	},

 	5076:{
  	question_tag: "L3ENLP26QG",
   code: "5076",
   title: "Eng Class Q26",
   learner_question: "\r\n1. fantasy \r\n2. fatalities \r\n3. fertilizers",
  	question: "Say: I will sound out a word. Choose the number of the word I sound out. Listen: fe-rt-il-iz-er-s. ",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Sounding out words helps us read challenging new words.",
  	incorrectAnswerResponse: "Incorrect. Sounding out words helps us read challenging new words.",
  	set: 26
  	},

 	5077:{
  	question_tag: "L3ENLP26Q1",
   code: "5077",
   title: "Eng Q51",
   learner_question: "Which is the past tense form of \'meet\'? \r\n1. met \r\n2. metted \r\n3. meeting",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Met is special past tense verb. It does not end in \'ed\'.",
  	incorrectAnswerResponse: "Incorrect. Met is special past tense verb. It does not end in \'ed\'.",
  	set: 26
  	},

 	5078:{
  	question_tag: "L3ENLP26Q2",
   code: "5078",
   title: "Eng Q52",
   learner_question: "Which is a topic: \r\n1. Monrovia is the capital of Liberia. \r\n2. Monrovia \r\n3. Monrovia has more than one million people.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A topic is the subject we will write about. Options 1 and 3 are facts about Monrovia.",
  	incorrectAnswerResponse: "Incorrect. A topic is the subject we will write about. Facts are not usually topics. Options 1 and 3 are facts about Monrovia.",
  	set: 26
  	},

 	5079:{
  	question_tag: "L3ENLP27QG",
   code: "5079",
   title: "Eng Class Q27",
   learner_question: "\r\n1. James makes more money. \r\n2. James sells no bread. \r\n3. James wants to make more money selling bread.",
  	question: "Choose an effect of the cause I tell you. Listen: James sells bread for LD $100. He raises the price to LD $1000. Enter the number of the effect.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A cause is what makes an effect happen. If James charges LD$ 1000 for bread no one will buy it.",
  	incorrectAnswerResponse: "Incorrect. A cause is what makes an effect happen. If James charges LD$ 1000 for bread no one will buy it.",
  	set: 27
  	},

 	5080:{
  	question_tag: "L3ENLP27Q1",
   code: "5080",
   title: "Eng Q53",
   learner_question: "Which effect matches the cause: Liberia does not make enough food. \r\n1. The people are happy. \r\n2. The land is not fertile. \r\n3. Liberians import a lot of food.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A cause is what makes an effect happen. Because Liberia does not grow enough food, people must import their food.",
  	incorrectAnswerResponse: "Incorrect. A cause is what makes an effect happen. Because Liberia does not grow enough food, people must import their food.",
  	set: 27
  	},

 	5081:{
  	question_tag: "L3ENLP27Q2",
   code: "5081",
   title: "Eng Q54",
   learner_question: "Which sentence is correct? \r\n1. The crops failed because it did not rain. \r\n2. It did not rain because the crops failed. \r\n3. It did not rain since the crops failed.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The cause is \"It did not rain\". The effect is \"the crops failed.\" The crops failed because it did not rain.",
  	incorrectAnswerResponse: "Incorrect. The cause is \"It did not rain\". The effect is \"the crops failed.\" The crops failed because it did not rain.",
  	set: 27
  	},

 	5082:{
  	question_tag: "L3ENLP28QG",
   code: "5082",
   title: "Eng Class Q28",
   learner_question: "\r\n1. It does not rain. \r\n2. The farmers do not know how to farm. \r\n3. The people are hungry.",
  	question: "Choose an effect of the cause I tell you. Listen: The crops fail. Enter the number of the effect.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A cause is what makes an effect happen. If the crops fail, the people will be hungry.",
  	incorrectAnswerResponse: "Incorrect. A cause is what makes an effect happen. If the crops fail, the people will be hungry.",
  	set: 28
  	},

 	5083:{
  	question_tag: "L3ENLP28Q1",
   code: "5083",
   title: "Eng Q55",
   learner_question: "Which sentence has a different meaning than the other two? \r\n1. The boy is unhappy because he is hungry. \r\n2. Because the boy is unhappy, he is hungry. \r\n2. Since the boy is hungry, he is unhappy.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The cause of the boy\'s unhappiness is his hunger. Sentence 2 says that the boy is hungry because he is unhappy.",
  	incorrectAnswerResponse: "Incorrect. The cause of the boy\'s unhappiness is his hunger. Sentence 2 says that the boy is hungry because he is unhappy.",
  	set: 28
  	},

 	5084:{
  	question_tag: "L3ENLP28Q2",
   code: "5084",
   title: "Eng Q56",
   learner_question: "Which word completes the sentence? I want to eat ___ I am hungry. \r\n1. because \r\n2. so \r\n3. as a result",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The cause is hunger. The effect is that I want to eat. I want to eat because I am hungry.",
  	incorrectAnswerResponse: "Incorrect. The cause is hunger. The effect is that I want to eat. I want to eat because I am hungry.",
  	set: 28
  	},

 	5085:{
  	question_tag: "L3ENLP29QG",
   code: "5085",
   title: "Eng Class Q29",
   learner_question: "\r\n1. He did not need the instructions. \r\n2. He does not know how to read. \r\n3. He used too much fertilizer.",
  	question: "Say: Open to page 149. In the story, James did not read the instructions. What caused him to not read the instructions? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! James does not know how to read. This caused him to not read the instructions.",
  	incorrectAnswerResponse: "Incorrect. James does not know how to read. This caused him to not read the instructions.",
  	set: 29
  	},

 	5086:{
  	question_tag: "L3ENLP29Q1",
   code: "5086",
   title: "Eng Q57",
   learner_question: "Which is the future tense version of the sentence: I eat pasta. \r\n1. I ate pasta. \r\n2. I will eat pasta. \r\n3. I am eating pasta.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The future tense us about things that have not happened but will happen. ",
  	incorrectAnswerResponse: "Incorrect. The future tense us about things that have not happened but will happen. ",
  	set: 29
  	},

 	5087:{
  	question_tag: "L3ENLP29Q2",
   code: "5087",
   title: "Eng Q58",
   learner_question: "What would you use to kill weeds? \r\n1. Herbicide \r\n2. Rodenticide \r\n3. Pesticide",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Herbicides kill weeds. Rodenticides kill rodents (like rats). Pesticides kill insects.",
  	incorrectAnswerResponse: "Incorrect. Herbicides kill weeds. Rodenticides kill rodents (like rats). Pesticides kill insects.",
  	set: 29
  	},

 	5088:{
  	question_tag: "L3ENLP30QG",
   code: "5088",
   title: "Eng Class Q30",
   learner_question: "\r\n1. The topic. \r\n2. The title. \r\n3. The body.",
  	question: "Say: In which part of a paragraph do we include details? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The body of a paragraph is made of sentences supporting the topic sentence. We include details in the body.",
  	incorrectAnswerResponse: "Incorrect. The body of a paragraph is made of sentences supporting the topic sentence. We include details in the body.",
  	set: 30
  	},

 	5089:{
  	question_tag: "L3ENLP30Q1",
   code: "5089",
   title: "Eng Q59",
   learner_question: "Which is a warning you might see on pesticide? \r\n1. Use on plants to kill insects. \r\n2. Do not drive faster than 80mph. \r\n3. Wash skin after use.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Warnings tell us what we must be careful of when doing something. Pesticides can hurt skin.",
  	incorrectAnswerResponse: "Incorrect. Warnings tell us what we must be careful of when doing something. Pesticides can hurt skin.",
  	set: 30
  	},

 	5090:{
  	question_tag: "L3ENLP30Q2",
   code: "5090",
   title: "Eng Q60",
   learner_question: "What is an example of something we might do to \'revise\'? \r\n1. Think about what we will write. \r\n2. Write out a draft. \r\n2. Look for subject verb agreement.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! When we revise our writing, we look for errors. You might also check that the writing is smooth and logical.",
  	incorrectAnswerResponse: "Incorrect. When we revise our writing, we look for errors. You might also check that the writing is smooth and logical.",
  	set: 30
  	},

 	5091:{
  	question_tag: "L3ENLP31QG",
   code: "5091",
   title: "Eng Class Q31",
   learner_question: "I ate rice yesterday. \r\n1. ate \r\n2. rice \r\n3. yesterday",
  	question: "Which word in the sentence is an adverb? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The adverb \'yesterday\' describes when the food was eaten.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'yesterday\' describes when the food was eaten.",
  	set: 31
  	},

 	5092:{
  	question_tag: "L3ENLP31Q1",
   code: "5092",
   title: "Eng Q61",
   learner_question: "Which word in the sentence is an adverb: She sang the old song beautifully. \r\n1. She \r\n2. old \r\n3. beautifully",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Beautifully describes how she sang the song. Many adverbs end in \'ly\'.",
  	incorrectAnswerResponse: "Incorrect. Beautifully describes how she sang the song. Many adverbs end in \'ly\'.",
  	set: 31
  	},

 	5093:{
  	question_tag: "L3ENLP31Q2",
   code: "5093",
   title: "Eng Q62",
   learner_question: "Which word in the sentence is an adverb: I slowly walked to the big market. \r\n1. slowly \r\n2. walked \r\n3. big",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Slowly describes how \'I\' walked. Many adverbs end in \'ly\'.",
  	incorrectAnswerResponse: "Incorrect. Slowly describes how \'I\' walked. Many adverbs end in \'ly\'.",
  	set: 31
  	},

 	5094:{
  	question_tag: "L3ENLP32QG",
   code: "5094",
   title: "Eng Class Q32",
   learner_question: "\r\n1. She cannot read warnings. \r\n2. She becomes very ill. \r\n3. She laughs.",
  	question: "Choose the effect of the cause I tell you. Listen: Flomo drinks pesticide. Enter the number of the effect.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Causes are why effects happen. If Flomo drinks pesticide, she will be very ill.",
  	incorrectAnswerResponse: "Incorrect. Causes are why effects happen. If Flomo drinks pesticide, she will be very ill.",
  	set: 32
  	},

 	5095:{
  	question_tag: "L3ENLP32Q1",
   code: "5095",
   title: "Eng Q63",
   learner_question: "Which word in the sentence is a noun? The big brown dog runs quickly. \r\n1. big \r\n2. dog \r\n3. quickly",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Nouns are people places and things.",
  	incorrectAnswerResponse: "Incorrect. Nouns are people places and things.",
  	set: 32
  	},

 	5096:{
  	question_tag: "L3ENLP32Q2",
   code: "5096",
   title: "Eng Q64",
   learner_question: "Which word is an adverb? We often eat rice and chicken. \r\n1. We \r\n2. often \r\n3. eat",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The adverb \'often\' describes the frequency with which chicken and rice are eaten.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'often\' describes the frequency with which chicken and rice are eaten.",
  	set: 32
  	},

 	5097:{
  	question_tag: "L3ENLP33QG",
   code: "5097",
   title: "Eng Class Q33",
   learner_question: "\r\n1. Eat the soup. \r\n2. Do you want soup? \r\n3. The soup is hot.",
  	question: "Say: Which sentence is an example of a direction? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A direction tells someone what to do?",
  	incorrectAnswerResponse: "Incorrect. A direction tells someone what to do?",
  	set: 33
  	},

 	5098:{
  	question_tag: "L3ENLP33Q1",
   code: "5098",
   title: "Eng Q65",
   learner_question: "Which direction is polite? \r\n1. Please eat. \r\n2. Eat. \r\n3. Don\'t eat.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We can use \'please\' to make directions more polite.",
  	incorrectAnswerResponse: "Incorrect. We can use \'please\' to make directions more polite.",
  	set: 33
  	},

 	5099:{
  	question_tag: "L3ENLP33Q2",
   code: "5099",
   title: "Eng Q66",
   learner_question: "Which direction is polite? \r\n1. Give me the pencil. \r\n2. Give it. \r\n3. Give me the pencil, thanks.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! \'Thanks\' makes a direction more polite.",
  	incorrectAnswerResponse: "Incorrect. \'Thanks\' makes a direction more polite.",
  	set: 33
  	},

 	5100:{
  	question_tag: "L3ENLP34QG",
   code: "5100",
   title: "Eng Class Q34",
   learner_question: "\r\n1. A traditional healer. \r\n2. Something that prevents illness. \r\n3. Something that solves a problem or cures and illness.",
  	question: "Say: What is a \'remedy\'? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A remedy is a solution to a problem. Medicines are remedies to many illnesses.",
  	incorrectAnswerResponse: "Incorrect. A remedy is a solution to a problem. Medicines are remedies to many illnesses.",
  	set: 34
  	},

 	5101:{
  	question_tag: "L3ENLP34Q1",
   code: "5101",
   title: "Eng Q67",
   learner_question: "What word means saying or writing something in our own words? \r\n1. plagiarizing \r\n2. paraphrasing \r\n3. paragraphing",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When we paraphrase, we say something in our own words.",
  	incorrectAnswerResponse: "Incorrect. When we paraphrase, we say something in our own words.",
  	set: 34
  	},

 	5102:{
  	question_tag: "L3ENLP34Q2",
   code: "5102",
   title: "Eng Q68",
   learner_question: "Which sentence is a prediction? \r\n1. I think Flomo and John will marry. \r\n2. Dan and Sara are married. \r\n3. Being married is great.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	incorrectAnswerResponse: "Incorrect. A prediction is our best guess about what will happen. Making predictions helps us understand what we read.",
  	set: 34
  	},

 	5103:{
  	question_tag: "L3ENLP35QG",
   code: "5103",
   title: "Eng Class Q35",
   learner_question: "\r\n1. By working too hard. \r\n2. By eating too much. \r\n3. By taking too much medicine.",
  	question: "Say: How can a person overdose? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Too much medicine can kill a person. We \'overdose\' when we take too much medicine or too many drugs.",
  	incorrectAnswerResponse: "Incorrect. Too much medicine can kill a person. We \'overdose\' when we take too much medicine or too many drugs.",
  	set: 35
  	},

 	5104:{
  	question_tag: "L3ENLP35Q1",
   code: "5104",
   title: "Eng Q69",
   learner_question: "Which word means making a guess about what will happen? \r\n1. paraphrasing \r\n2. predicting \r\n3. plagiarizing",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We predict when we guess what will happen in the future. Making predictions helps us read.",
  	incorrectAnswerResponse: "Incorrect. We predict when we guess what will happen in the future. Making predictions helps us read.",
  	set: 35
  	},

 	5105:{
  	question_tag: "L3ENLP35Q2",
   code: "5105",
   title: "Eng Q70",
   learner_question: "What is the last step in the writing process? \r\n1. revise \r\n2. draft \r\n3. finalize",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The \'final\' step in the witting process is to finalize what we have written.",
  	incorrectAnswerResponse: "Incorrect. The \'final\' step in the witting process is to finalize what we have written.",
  	set: 35
  	},

 	5106:{
  	question_tag: "L3ENLP36QG",
   code: "5106",
   title: "Eng Class Q36",
   learner_question: "\r\n1. Mary walked home. \r\n2. She sees a dog. \r\n3. Jane is running to the river.",
  	question: "Say: Which sentence is in the past tense? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The regular past tense verb \'walked\' shows us that the sentence, \'Mary walked home.\" is in the past tense.",
  	incorrectAnswerResponse: "Incorrect. The regular past tense verb \'walked\' shows us that the sentence, \'Mary walked home.\" is in the past tense.",
  	set: 36
  	},

 	5107:{
  	question_tag: "L3ENLP36Q1",
   code: "5107",
   title: "Eng Q71",
   learner_question: "Rewrite the sentence in the future tense: I eat. \r\n1. I ate \r\n2. I am eating. \r\n3. I will eat.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The future tense us about things that have not happened but will happen. ",
  	incorrectAnswerResponse: "Incorrect. I will eat. The future tense us about things that have not happened but will happen. ",
  	set: 36
  	},

 	5108:{
  	question_tag: "L3ENLP36Q2",
   code: "5108",
   title: "Eng Q72",
   learner_question: "Which word in the sentence is an adverb: I saw him yesterday. \r\n1. I \r\n2. saw \r\n3. yesterday",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The adverb yesterday tells us when the verb \'saw\' happened.",
  	incorrectAnswerResponse: "Incorrect. The adverb yesterday tells us when the verb \'saw\' happened.",
  	set: 36
  	},

 	5109:{
  	question_tag: "L3ENLP37QG",
   code: "5109",
   title: "Eng Class Q37",
   learner_question: "The small cat ate quickly. \r\n1. small \r\n2. cat \r\n3. quickly",
  	question: "Which word in the sentence is an adjective? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Adjectives describe nouns. The adjective \'small\' describes the cat.",
  	incorrectAnswerResponse: "Incorrect. Adjectives describe nouns. The adjective \'small\' describes the cat.",
  	set: 37
  	},

 	5110:{
  	question_tag: "L3ENLP37Q1",
   code: "5110",
   title: "Eng Q73",
   learner_question: "What is the past tense form of take? \r\n1. taking \r\n2. taked \r\n3. took",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The verb \'took\' is a special past tense verb. It does not end in \'ed\'.",
  	incorrectAnswerResponse: "Incorrect. The verb \'took\' is a special past tense verb. It does not end in \'ed\'.",
  	set: 37
  	},

 	5111:{
  	question_tag: "L3ENLP37Q2",
   code: "5111",
   title: "Eng Q74",
   learner_question: "Which word in the sentence is an adverb: We did poorly on the exam. \r\n1. did \r\n2. poorly \r\n3. exam",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The adverb \'poorly\' describes how \'we\' did on the exam.",
  	incorrectAnswerResponse: "Incorrect. The adverb \'poorly\' describes how \'we\' did on the exam.",
  	set: 37
  	},

 	5112:{
  	question_tag: "L3ENLP38QG",
   code: "5112",
   title: "Eng Class Q38",
   learner_question: "\r\n1. A \r\n2. B \r\n3. C",
  	question: "Say: Which module did we start today? Enter the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! ",
  	incorrectAnswerResponse: "Incorrect. We started module C today. If you did not attend class, be sure to ask someone to help you catch up!",
  	set: 38
  	},

 	5113:{
  	question_tag: "L3ENLP38Q1",
   code: "5113",
   title: "Eng Q75",
   learner_question: "What is a cause of missing class? \r\n1. You will miss information. \r\n2. You will fall behind. \r\n3. You are busy and do not plan ahead.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Causes are why effects happen. Some people miss class because they are busy and do not make plan to be free during class time.",
  	incorrectAnswerResponse: "Incorrect. Causes are why effects happen. Some people miss class because they are busy and do not make plan to be free during class time.",
  	set: 38
  	},

 	5114:{
  	question_tag: "L3ENLP38Q2",
   code: "5114",
   title: "Eng Q76",
   learner_question: "What is an effect of missing class? \r\n1. You will miss information. \r\n2. The weather kept you inside the house. \r\n3. You are busy and do not plan ahead.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Effects are what happen because of causes. If we miss class, we will miss information and may fall behind in our learning.",
  	incorrectAnswerResponse: "Incorrect. Effects are what happen because of causes. If we miss class, we will miss information and may fall behind in our learning.",
  	set: 38
  	},

 	5115:{
  	question_tag: "L3ENLP39QG",
   code: "5115",
   title: "Eng Class Q39",
   learner_question: "\r\n1. A person who hurts another. \r\n2. A person who is hurt by another. \r\n3. A person who helps another. ",
  	question: "Say: What is a victim? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A victim is someone who was hurt by someone or something. ",
  	incorrectAnswerResponse: "Incorrect. A victim is someone who was hurt by someone or something. ",
  	set: 39
  	},

 	5116:{
  	question_tag: "L3ENLP39Q1",
   code: "5116",
   title: "Eng Q77",
   learner_question: "Which word in the sentence is a verb? He drives to work slowly. \r\n1. He \r\n2. drives \r\n3. slowly",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Verbs are action words. They can be done. Drives, swim, eat and think are all verbs.",
  	incorrectAnswerResponse: "Incorrect. Verbs are action words. They can be done. Drives, swim, eat and think are all verbs.",
  	set: 39
  	},

 	5117:{
  	question_tag: "L3ENLP39Q2",
   code: "5117",
   title: "Eng Q78",
   learner_question: "Which word in the sentence is an adjective: The big chicken eats grain quickly. \r\n1. big \r\n2. chicken \r\n3. quickly",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The adjective \'big\' describes the noun \'chicken\'.",
  	incorrectAnswerResponse: "Incorrect. The adjective \'big\' describes the noun \'chicken\'.",
  	set: 39
  	},

 	5118:{
  	question_tag: "L3ENLP40QG",
   code: "5118",
   title: "Eng Class Q40",
   learner_question: "\r\n1. Stealing something from someone \r\n2. Helping someone learn to read \r\n3. Proving something in court",
  	question: "Say: Which is a violation of rights? Enter the number of the correct answer.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! When are rights are violated, someone has done something to us that is against the law.",
  	incorrectAnswerResponse: "Incorrect. When are rights are violated, someone has done something to us that is against the law.",
  	set: 40
  	},

 	5119:{
  	question_tag: "L3ENLP40Q1",
   code: "5119",
   title: "Eng Q79",
   learner_question: "Which is an example of a policy? \r\n1. Cars drive on roads. \r\n2. Cars sometimes crash on roads. \r\n3. Cars must not drive more than 100kmph.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A policy is a rule created to help.",
  	incorrectAnswerResponse: "Incorrect. A policy is a rule created to help.",
  	set: 40
  	},

 	5120:{
  	question_tag: "L3ENLP40Q2",
   code: "5120",
   title: "Eng Q80",
   learner_question: "Which word is an adjective: The green book sits on the table. \r\n1. green \r\n2. sits \r\n3. table",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The adjective \'green\' describes the book.",
  	incorrectAnswerResponse: "Incorrect. The adjective \'green\' describes the book.",
  	set: 40
  	},

 	5121:{
  	question_tag: "L3ENLP41QG",
   code: "5121",
   title: "Eng Class Q41",
   learner_question: "\r\n1. Violators who touch girls will be punished. \r\n2. The third time a teacher abuses a girl, he will be put in prison. \r\n3. Boys who force girls to have sex will not be able to go to school in the morning.",
  	question: "Say: Open your books to page 215. Which is NOT a part of the National Policy on Girls\' Education? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The passage does not talk about the third time.",
  	incorrectAnswerResponse: "Incorrect. The passage does not talk about the third time.",
  	set: 41
  	},

 	5122:{
  	question_tag: "L3ENLP41Q1",
   code: "5122",
   title: "Eng Q81",
   learner_question: "What is the past tense of the verb \'feed\'? \r\n1. fed \r\n2. feeded \r\n3. fad",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The past tense of the irregular verb \'feed\' is fed. Irregular verbs do not end in \'ed\'.",
  	incorrectAnswerResponse: "Incorrect. The past tense of the irregular verb \'feed\' is fed. Irregular verbs do not end in \'ed\'.",
  	set: 41
  	},

 	5123:{
  	question_tag: "L3ENLP41Q2",
   code: "5123",
   title: "Eng Q82",
   learner_question: "Which sentence is in the past tense? \r\n1. I saw a cat. \r\n2. I seed a cat. \r\n3. I am seeing a cat.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Saw\' is the past tense of the verb \'see\'. I saw a cat.",
  	incorrectAnswerResponse: "Incorrect. \'Saw\' is the past tense of the verb \'see\'. I saw a cat.",
  	set: 41
  	},

 	5124:{
  	question_tag: "L3ENLP42QG",
   code: "5124",
   title: "Eng Class Q42",
   learner_question: "\r\n1. Put in a bag. \r\n2. Arrested. \r\n3. Fired- a person loses his or her job.",
  	question: "Say: What does the word \'sacked\' mean? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! A person who is \'sacked\' loses his or her job. ",
  	incorrectAnswerResponse: "Incorrect. A person who is \'sacked\' loses his or her job. ",
  	set: 42
  	},

 	5125:{
  	question_tag: "L3ENLP42Q1",
   code: "5125",
   title: "Eng Q83",
   learner_question: "Which is NOT a right? \r\n1. The right to freedom of speech. \r\n2. The right to education. \r\n3. The right to get a good job.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! People have the right to work, but they must find a good job on their own.",
  	incorrectAnswerResponse: "Incorrect. People have the right to work, but they must find a good job on their own.",
  	set: 42
  	},

 	5126:{
  	question_tag: "L3ENLP42Q2",
   code: "5126",
   title: "Eng Q84",
   learner_question: "Which sentence is correct? \r\n1. We is sleepy. \r\n2. We are sleepy. \r\n3. We am sleepy.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We use \'are\' with \'we\', \'they\', and \'you\'. We are sleepy.",
  	incorrectAnswerResponse: "Incorrect. We use \'are\' with \'we\', \'they\', and \'you\'. We are sleepy.",
  	set: 42
  	},

 	5127:{
  	question_tag: "L3ENLP43QG",
   code: "5127",
   title: "Eng Class Q43",
   learner_question: "\r\n1. Rape law \r\n2. Homicide law \r\n3. Consultation law",
  	question: "Say: Which law says that adults are not allowed to have sex with children? Enter the number of the correct answer on your phone.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Rape is the crime of forcing someone to have sex. All sex with children is rape.",
  	incorrectAnswerResponse: "Incorrect. Rape is the crime of forcing someone to have sex. All sex with children is rape.",
  	set: 43
  	},

 	5128:{
  	question_tag: "L3ENLP43Q1",
   code: "5128",
   title: "Eng Q85",
   learner_question: "Which is an effect of not having a job? \r\n1. There are no jobs available. \r\n2. Not being able to read. \r\n3. Not having money.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Causes make an effect happen. An effect of not having a job is not having money.",
  	incorrectAnswerResponse: "Incorrect. Causes make an effect happen. An effect of not having a job is not having money.",
  	set: 43
  	},

 	5129:{
  	question_tag: "L3ENLP43Q2",
   code: "5129",
   title: "Eng Q86",
   learner_question: "Which is the same sentence in the past tense: We sell chickens. \r\n1. We sold chickens. \r\n2. We selled chickens. \r\n3. We sells chickens.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The past tense of the special past tense verb \'sell\' is \'sold. We sold chickens.",
  	incorrectAnswerResponse: "Incorrect. The past tense of the special past tense verb \'sell\' is \'sold. We sold chickens.",
  	set: 43
  	},

 	5130:{
  	question_tag: "L3ENLP44QG",
   code: "5130",
   title: "Eng Class Q44",
   learner_question: "\r\n1. We must always speak. \r\n2. We must allow other people to speak. \r\n3. We must agree with people when they speak.",
  	question: "Which responsibility is an effect of the right to freedom of speech? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We have the right to free speech. We can say what we believe, but we must also allow other people to speak.",
  	incorrectAnswerResponse: "Incorrect. We have the right to free speech. We can say what we believe, but we must also allow other people to speak.",
  	set: 44
  	},

 	5131:{
  	question_tag: "L3ENLP44Q1",
   code: "5131",
   title: "Eng Q87",
   learner_question: "Sonie has the right to religion. What is her responsibility? \r\n1. She must allow others to have their own religion. \r\n2. She must believe in God. \r\n3. She must go to church every week.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Responsibilities are things we must do in order to have rights. Sonie has the freedom of religion and she must give others the same freedom.",
  	incorrectAnswerResponse: "Incorrect. Responsibilities are things we must do in order to have rights. Sonie has the freedom of religion and she must give others the same freedom.",
  	set: 44
  	},

 	5132:{
  	question_tag: "L3ENLP44Q2",
   code: "5132",
   title: "Eng Q88",
   learner_question: "Sonie never takes things that do not belong to her. Which right is she showing responsibility for? \r\n1. The right to have good things. \r\n2. The right to own property. \r\n3. The right to education.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Sonie does not take things from others because people have the right to own property.",
  	incorrectAnswerResponse: "Incorrect. Sonie does not take things from others because people have the right to own property.",
  	set: 44
  	},

 	5133:{
  	question_tag: "L3ENLP45QG",
   code: "5133",
   title: "Eng Class Q45",
   learner_question: "\r\n1. When two people fight. \r\n2. When two people argue their sides. \r\n3. When two people talk.",
  	question: "What is a debate? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! When two people argue their sides, it is a debate.",
  	incorrectAnswerResponse: "Incorrect. When two people argue their sides, it is a debate.",
  	set: 45
  	},

 	5134:{
  	question_tag: "L3ENLP45Q1",
   code: "5134",
   title: "Eng Q89",
   learner_question: "Which is a prediction. \r\n1. I like warm weather. \r\n2. Tomorrow will be warm. \r\n3. It is warm now.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Predictions are guesses about what will happen in the future.",
  	incorrectAnswerResponse: "Incorrect. Predictions are guesses about what will happen in the future.",
  	set: 45
  	},

 	5135:{
  	question_tag: "L3ENLP45Q2",
   code: "5135",
   title: "Eng Q90",
   learner_question: "Which direction is most polite? \r\n1. Call me. \r\n2. You must call me. \r\n3. Please call me.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Directions can sound rude. We can use words like please to make them more polite.",
  	incorrectAnswerResponse: ":) Correct! Directions can sound rude. We can use words like please to make them more polite.",
  	set: 45
  	},

 	5136:{
  	question_tag: "L3ENLP46QG",
   code: "5136",
   title: "Eng Class Q46",
   learner_question: "The old cow eats grass. \r\n1. old \r\n2. cow \r\n3. eats",
  	question: "Say: Which word in the sentence is an adjective? Enter the number of the adjective.",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! The adjective old describes the cow.",
  	incorrectAnswerResponse: ":) Correct! The adjective old describes the cow.",
  	set: 46
  	},

 	5137:{
  	question_tag: "L3ENLP46Q1",
   code: "5137",
   title: "Eng Q91",
   learner_question: "What is the past tense of the verb \'drive\'? \r\n1. drived \r\n2. driven \r\n3. drove",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The past tense of the special past tense verb \'drive\' is \'drove\'. We drove home.",
  	incorrectAnswerResponse: ":) Correct! The past tense of the special past tense verb \'drive\' is \'drove\'. We drove home.",
  	set: 46
  	},

 	5138:{
  	question_tag: "L3ENLP46Q2",
   code: "5138",
   title: "Eng Q92",
   learner_question: "Which is a cause of being sacked? \r\n1. The person will have less money. \r\n2. The person came to work drunk. \r\n3. The person will feel angry.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Causes are why effects happen. If a person comes to work drunk, he or she may be sacked.",
  	incorrectAnswerResponse: ":) Correct! Causes are why effects happen. If a person comes to work drunk, he or she may be sacked.",
  	set: 46
  	},

 	5139:{
  	question_tag: "L3ENLP47QG",
   code: "5139",
   title: "Eng Class Q47",
   learner_question: "\r\n1. It gives ideas for new topics. \r\n2. It reminds us what to look for when editing. \r\n3. It teaches us grammar rules.",
  	question: "Say: How does and editor\'s checklist help us write?",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! An editor\'s checklist is a list of things to look for when editing writing.",
  	incorrectAnswerResponse: ":) Correct! An editor\'s checklist is a list of things to look for when editing writing.",
  	set: 47
  	},

 	5140:{
  	question_tag: "L3ENLP47Q1",
   code: "5140",
   title: "Eng Q93",
   learner_question: "Which is a responsibility? \r\n1. Freedom of speech. \r\n2. Right to an attorney. \r\n3. Reporting crimes to the police.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Responsibilities are things we must do in order to have rights. We should report crimes to the police.",
  	incorrectAnswerResponse: ":) Correct! Responsibilities are things we must do in order to have rights. We should report crimes to the police.",
  	set: 47
  	},

 	5141:{
  	question_tag: "L3ENLP47Q2",
   code: "5141",
   title: "Eng Q94",
   learner_question: "Which is a right? \r\n1. Follow the law. \r\n2. Freedom of religion. \r\n3. Treat others with respect.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Rights are things the government guarantees we are allowed to do..",
  	incorrectAnswerResponse: ":) Correct! Rights are things the government guarantees we are allowed to do..",
  	set: 47
  	},

 	5142:{
  	question_tag: "L3ENLP48QG",
   code: "5142",
   title: "Eng Class Q48",
   learner_question: "\r\n1. Dogs are bigger than cats. \r\n2. They are used to guard houses. \r\n3. The have four legs.",
  	question: "Say: Which sentence shows a similarity between cats and dogs? Enter the number of the similarity.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Similarities are things that are the same or nearly the same. Both dogs and cats have four legs.",
  	incorrectAnswerResponse: ":) Correct! Similarities are things that are the same or nearly the same. Both dogs and cats have four legs.",
  	set: 48
  	},

 	5143:{
  	question_tag: "L3ENLP48Q1",
   code: "5143",
   title: "Eng Q95",
   learner_question: "What is a similarity between goats and birds? \r\n1. They are animals. \r\n2. goats run but birds fly. \r\n3. They have four legs.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Similarities are things that are the same or nearly the same. Goats and birds are animals.",
  	incorrectAnswerResponse: ":) Correct! Similarities are things that are the same or nearly the same. Goats and birds are animals.",
  	set: 48
  	},

 	5144:{
  	question_tag: "L3ENLP48Q2",
   code: "5144",
   title: "Eng Q96",
   learner_question: "What is a difference between trees and bushes? \r\n1. Trees are taller than bushes. \r\n2. Both have leaves. \r\n3. Trees are green.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! Differences are ways things are not the same. Most trees are tall and most bushes are short.",
  	incorrectAnswerResponse: ":) Correct! Differences are ways things are not the same. Most trees are tall and most bushes are short.",
  	set: 48
  	},

 	5145:{
  	question_tag: "L3ENLP49QG",
   code: "5145",
   title: "Eng Class Q49",
   learner_question: "\r\n1. A presenter \r\n2. A lawyer \r\n3. A politician",
  	question: "Say: What do we call a person who debates in court? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! Lawyers debate in courts. They represent different sides in a case.",
  	incorrectAnswerResponse: ":) Correct! Lawyers debate in courts. They represent different sides in a case.",
  	set: 49
  	},

 	5146:{
  	question_tag: "L3ENLP49Q1",
   code: "5146",
   title: "Eng Q97",
   learner_question: "What do we call it when one person forces another to have sex? \r\n1. murder \r\n2. theft \r\n3. rape",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Rape is the crime of forcing someone to have sex. All sex with children is rape.",
  	incorrectAnswerResponse: ":) Correct! Rape is the crime of forcing someone to have sex. All sex with children is rape.",
  	set: 49
  	},

 	5147:{
  	question_tag: "L3ENLP49Q2",
   code: "5147",
   title: "Eng Q98",
   learner_question: "A young girl takes money from a man for sex. Which sentence is true? \r\n1. This is not a crime because the girl took money. \r\n2. It is not a crime because the girl was not forced. \r\n3. All sex with children is a crime.",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! All sex with children is a crime. It does not matter if the child is forced.",
  	incorrectAnswerResponse: ":) Correct! All sex with children is a crime. It does not matter if the child is forced.",
  	set: 49
  	},

 	5148:{
  	question_tag: "L3ENLP50QG",
   code: "5148",
   title: "Eng Class Q50",
   learner_question: "\r\n1. I will eat. \r\n2. I ate. \r\n3. I am eating.",
  	question: "Which sentence shows action happening now? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! We often use \'ing\' verbs to show that action has started and not finished.",
  	incorrectAnswerResponse: ":) Correct! We often use \'ing\' verbs to show that action has started and not finished.",
  	set: 50
  	},

 	5149:{
  	question_tag: "L3ENLP50Q1",
   code: "5149",
   title: "Eng Q99",
   learner_question: "Which sentence is correct? \r\n1. We is eating chicken. \r\n2. He is going home. \r\n3. I is doing my homework.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! We use \'is\' with \'he, \'she\' and \'it\'.",
  	incorrectAnswerResponse: ":) Correct! We use \'is\' with \'he, \'she\' and \'it\'.",
  	set: 50
  	},

 	5150:{
  	question_tag: "L3ENLP50Q2",
   code: "5150",
   title: "Eng Q100",
   learner_question: "Which word is written correctly? \r\n1. making \r\n2. makeing \r\n3. mading",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! With words ending in \'e\', we usually remove the \'e\' before adding \'ing\'. Waking, making, taking.",
  	incorrectAnswerResponse: ":) Correct! With words ending in \'e\', we usually remove the \'e\' before adding \'ing\'. Waking, making, taking.",
  	set: 50
  	},

 	5151:{
  	question_tag: "L3ENLP51QG",
   code: "5151",
   title: "Eng Class Q51",
   learner_question: "\r\n1. A lawyer \r\n2. An opponent \r\n3. A debater",
  	question: "What do we call someone who is trying to defeat us? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! An opponent is someone who is trying to defeat us. We have opponents in debates and sports.",
  	incorrectAnswerResponse: ":) Correct! An opponent is someone who is trying to defeat us. We have opponents in debates and sports.",
  	set: 51
  	},

 	5152:{
  	question_tag: "L3ENLP51Q1",
   code: "5152",
   title: "Eng Q101",
   learner_question: "What is third party? \r\n1. A gathering of three people. \r\n2. A person without a side in a debate or argument. \r\n3. An opposition group.",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A third party is someone not involved in arguing a case. They do not support one side or the other.",
  	incorrectAnswerResponse: ":) Correct! A third party is someone not involved in arguing a case. They do not support one side or the other.",
  	set: 51
  	},

 	5153:{
  	question_tag: "L3ENLP51Q2",
   code: "5153",
   title: "Eng Q102",
   learner_question: "Which sentence shows the main idea of a paragraph. \r\n1. The topic sentence \r\n2. The body sentence \r\n3. The title sentence",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! We write the main idea of a paragraph in the topic sentence.",
  	incorrectAnswerResponse: ":) Correct! We write the main idea of a paragraph in the topic sentence.",
  	set: 51
  	},

 	5154:{
  	question_tag: "L3ENLP52QG",
   code: "5154",
   title: "Eng Class Q52",
   learner_question: "The ball is on the tall table. \r\n1. ball \r\n2. on \r\n3. tall",
  	question: "Say: Which word in the sentence is a preposition? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The preposition \'on\' shows the relationship between the ball and the table.",
  	incorrectAnswerResponse: ":) Correct! The preposition \'on\' shows the relationship between the ball and the table.",
  	set: 52
  	},

 	5155:{
  	question_tag: "L3ENLP52Q1",
   code: "5155",
   title: "Eng Q103",
   learner_question: "Which word in the sentence is preposition: I sat between the two small girls. \r\n1. sat \r\n2. between \r\n3. small",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! The preposition \'between\' shows the relationship between \'I\' and the girls.",
  	incorrectAnswerResponse: ":) Correct! The preposition \'between\' shows the relationship between \'I\' and the girls.",
  	set: 52
  	},

 	5156:{
  	question_tag: "L3ENLP52Q2",
   code: "5156",
   title: "Eng Q104",
   learner_question: "Which preposition is correct? Gbarnga is ___ Bong county. \r\n1. near \r\n2. around \r\n3. in",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Gbarnga is in Bongo county.",
  	incorrectAnswerResponse: ":) Correct! Gbarnga is in Bongo county.",
  	set: 52
  	},

 	5157:{
  	question_tag: "L3ENLP53QG",
   code: "5157",
   title: "Eng Class Q53",
   learner_question: "\r\n1. Describe verbs and adverbs. \r\n2. Show action. \r\n3. Show relationships between words in a sentence.",
  	question: "Say: What do prepositions do?",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Prepositions show the relationship between words in a sentence. The cat is ON the table. ",
  	incorrectAnswerResponse: ":) Correct! Prepositions show the relationship between words in a sentence. The cat is ON the table. ",
  	set: 53
  	},

 	5158:{
  	question_tag: "L3ENLP53Q1",
   code: "5158",
   title: "Eng Q105",
   learner_question: "Which preposition is correct? Monrovia is ___ the sea. \r\n1. near \r\n2. around \r\n3. between",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'Near\' shows the relationship between Monrovia and the sea. They are near each other.",
  	incorrectAnswerResponse: ":) Correct! \'Near\' shows the relationship between Monrovia and the sea. They are near each other.",
  	set: 53
  	},

 	5159:{
  	question_tag: "L3ENLP53Q2",
   code: "5159",
   title: "Eng Q106",
   learner_question: "What do we call a group of people who decide a court case? \r\n1. Judge \r\n2. Jury \r\n3. Debate",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! A jury is a group of people who decide a court case. People on a jury are called jurors.",
  	incorrectAnswerResponse: ":) Correct! A jury is a group of people who decide a court case. People on a jury are called jurors.",
  	set: 53
  	},

 	5160:{
  	question_tag: "L3ENLP54QG",
   code: "5160",
   title: "Eng Class Q54",
   learner_question: "The happy teacher spoke quickly. \r\n1. happy \r\n2. spoke \r\n3. quickly",
  	question: "Which word in the sentence is an adverb? Enter the number of the correct answer.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! The adverb \'quickly\' describes how the teacher spoke.",
  	incorrectAnswerResponse: ":) Correct! The adverb \'quickly\' describes how the teacher spoke.",
  	set: 54
  	},

 	5161:{
  	question_tag: "L3ENLP54Q1",
   code: "5161",
   title: "Eng Q107",
   learner_question: "Which sentence is happening \'now\'? \r\n1. I am eating rice. \r\n2. I ate rice. \r\n3. I will eat rice.",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! \'ing\' verbs often show action happening now in the present tense.",
  	incorrectAnswerResponse: ":) Correct! \'ing\' verbs often show action happening now in the present tense.",
  	set: 54
  	},

 	5162:{
  	question_tag: "L3ENLP54Q2",
   code: "5162",
   title: "Eng Q108",
   learner_question: "Which is not a right? \r\n1. Speech \r\n2. Religion \r\n3. Respect",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! Our rights are promised to us an cannot be taken away. We must earn respect on our own!",
  	incorrectAnswerResponse: ":) Correct! Our rights are promised to us an cannot be taken away. We must earn respect on our own!",
  	set: 54
  	},

    1001:{
    question_tag: "L1LITLP1QG",
   code: "1001",
   title: "Lit Class Q1",
   learner_question: "L#1 Code: 1001 \r\n1. A \r\n2. B \r\n3. C",
    question: "Which letter is letter \'A\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'A\'. A.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Letter A.",
    incorrectAnswerResponse: "Incorrect. Letter A.",
    set: 1
    },

  1002:{
    question_tag: "L1LITLP1Q1",
   code: "1002",
   title: "Lit Q1",
   learner_question: "L#1 Code: 1002 \r\n1. A \r\n2. T \r\n3. S",
    question: "Which is letter \'T\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'T\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Letter T.",
    incorrectAnswerResponse: "Incorrect. Letter T.",
    set: 1
    },

  1003:{
    question_tag: "L1LITLP1Q2",
   code: "1003",
   title: "Lit Q2",
   learner_question: "L#1 Code: 1003 \r\n1. S \r\n2. D \r\n3. L",
    question: "Which is letter \'D\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'D\'. D.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Letter D.",
    incorrectAnswerResponse: "Incorrect. Letter D.",
    set: 1
    },

  1004:{
    question_tag: "L1LITLP2QG",
   code: "1004",
   title: "Lit Class Q2",
   learner_question: "L#2 Code: 1004 \r\n1. A \r\n2. T \r\n3. S",
    question: "Which is letter \'S\'? 1, 2 or 3? Enter the number of the correct answer. Which is letter \'S\'. \'S\'.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Letter S.",
    incorrectAnswerResponse: "Incorrect. Letter S.",
    set: 2
    },

  1005:{
    question_tag: "L1LITLP2Q1",
   code: "1005",
   title: "Lit Q3",
   learner_question: "L#2 Code: 1005 \r\n1. L \r\n2. B \r\n3. M",
    question: "Which is letter \'B\'? 1, 2 or 3? Enter the number of the correct answer. Which is letter \'B\'. \'B\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Letter B.",
    incorrectAnswerResponse: "Incorrect. Letter B.",
    set: 2
    },

  1006:{
    question_tag: "L1LITLP2Q2",
   code: "1006",
   title: "Lit Q4",
   learner_question: "L#2 Code: 1006 \r\n1. K \r\n2. M \r\n3. Z",
    question: "Which is letter \'K\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'K\'. K.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Letter K.",
    incorrectAnswerResponse: "Incorrect. Letter K.",
    set: 2
    },

  1007:{
    question_tag: "L1LITLP3QG",
   code: "1007",
   title: "Lit Class Q3",
   learner_question: "L#3 Code: 1007 \r\n1. 65 \r\n2. 16 \r\n3. 18",
    question: "Say:Open to page 1\r\n1. How old is Sonie? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The story says, \"She was about 16,\".",
    incorrectAnswerResponse: "Incorrect. The story says, \"She was about 16,\".",
    set: 3
    },

  1008:{
    question_tag: "L1LITLP3Q1",
   code: "1008",
   title: "Lit Q5",
   learner_question: "L#3 Code: 1008 \r\n1. X \r\n2. L \r\n3. F",
    question: "Which is letter \'F\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'F\'. F.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Letter F.",
    incorrectAnswerResponse: "Incorrect. Letter F.",
    set: 3
    },

  1009:{
    question_tag: "L1LITLP3Q2",
   code: "1009",
   title: "Lit Q6",
   learner_question: "L#3 Code: 1009 \r\n1. R \r\n2. O \r\n3. W",
    question: "Which letter is \'W\'? 1, 2 or 3? Enter the number of the correct answer. Letter \'W\'. W.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Letter W.",
    incorrectAnswerResponse: "Incorrect. Letter W.",
    set: 3
    },

  1010:{
    question_tag: "L1LITLP4QG",
   code: "1010",
   title: "Lit Class Q4",
   learner_question: "L#4 Code: 1010 \r\n1. tall \r\n2. sat \r\n3. at",
    question: "Which word begins with the /t/ sound? 1, 2 or 3? Enter the number of the correct answer. /t/. Which word begins with the /t/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! Tall.",
    incorrectAnswerResponse: "Incorrect. Tall.",
    set: 4
    },

  1011:{
    question_tag: "L1LITLP4Q1",
   code: "1011",
   title: "Lit Q7",
   learner_question: "L#4 Code: 1011 \r\n1. tall \r\n2. sat \r\n3. at",
    question: "Which word begins with the /s/ sound? Enter the number of the correct answer. /ssss/. Which word begins with the /s/ sound?",
    answer: "2",
    correctAnswerResponse: ":) Correct! Sat",
    incorrectAnswerResponse: "Incorrect. Sat",
    set: 4
    },

  1012:{
    question_tag: "L1LITLP4Q2",
   code: "1012",
   title: "Lit Q8",
   learner_question: "L#4 Code: 1012 \r\n1. s \r\n2. t \r\n3. a",
    question: "Which letter makes the /a/ sound? /aaaa/. Enter the number of the correct answer. /aaaaa/. Which letters makes the /a/ sound?",
    answer: "3",
    correctAnswerResponse: ":) Correct! a.",
    incorrectAnswerResponse: "Incorrect. a.",
    set: 4
    },

  1013:{
    question_tag: "L1LITLP5QG",
   code: "1013",
   title: "Lit Class Q5",
   learner_question: "L#5 Code: 1013 \r\n1. mat \r\n2. sat \r\n3. tat",
    question: "Which word begins with the /m/ sound? Enter the number of the correct answer. /mmmmm/. Which word begins with the /m/ sound.",
    answer: "1",
    correctAnswerResponse: ":) Correct! mat.",
    incorrectAnswerResponse: "Incorrect. mat.",
    set: 5
    },

  1014:{
    question_tag: "L1LITLP5Q1",
   code: "1014",
   title: "Lit Q9",
   learner_question: "L#5 Code: 1014 \r\n1. tall \r\n2. fat \r\n3. mat",
    question: "Which word begins with the /f/ sound? Enter the number of the correct answer. /fff/. Which word begins with the /f/ sound.",
    answer: "2",
    correctAnswerResponse: ":) Correct! fat.",
    incorrectAnswerResponse: "Incorrect. fat.",
    set: 5
    },

  1015:{
    question_tag: "L1LITLP5Q2",
   code: "1015",
   title: "Lit Q10",
   learner_question: "L#5 Code: 1015 \r\n1. sat \r\n2. fat \r\n3. mat",
    question: "Which word is \'sat\'? Sat. Enter the number of the correct answer. Sat.",
    answer: "1",
    correctAnswerResponse: ":) Correct! sat.",
    incorrectAnswerResponse: "Incorrect. sat.",
    set: 5
    },

  1016:{
    question_tag: "L1LITLP6QG",
   code: "1016",
   title: "Lit Class Q6",
   learner_question: "L#6 Code: 1016 \r\n1. I am Matt. \r\n2. I am Teta \r\n3. I am Musu.",
    question: "Which sentence says, \'I am Musu.\"? Enter the number of the correct answer. I am Musu.",
    answer: "3",
    correctAnswerResponse: ":) Correct! I am Musu.",
    incorrectAnswerResponse: "Incorrect. I am Musu.",
    set: 6
    },

  1017:{
    question_tag: "L1LITLP6Q1",
   code: "1017",
   title: "Lit Q11",
   learner_question: "L#6 Code: 1017 \r\n1. w \r\n2. a \r\n3. m",
    question: "Which is letter \'m\'? Enter the number of the correct answer. Which is letter \'m\'?",
    answer: "3",
    correctAnswerResponse: ":) Correct! m.",
    incorrectAnswerResponse: "Incorrect. m.",
    set: 6
    },

  1018:{
    question_tag: "L1LITLP6Q2",
   code: "1018",
   title: "Lit Q12",
   learner_question: "L#6 Code: 1018 \r\n1. I am Sam. \r\n2. Ma sat. \r\n3. I am fat.",
    question: "Which sentence says, \'I am fat?\' Enter the number of the correct answer. I am fat.",
    answer: "3",
    correctAnswerResponse: ":) Correct! I am fat.",
    incorrectAnswerResponse: "Incorrect. I am fat.",
    set: 6
    },

  1019:{
    question_tag: "L1LITLP7QG",
   code: "1019",
   title: "Lit Class Q7",
   learner_question: "L#7 Code: 1019 \r\n1. telephones \r\n2. family \r\n3. Liberia",
    question: "Which word has letter \'s\'? Enter the number of the correct answer. Which word has letter \'s\'?",
    answer: "1",
    correctAnswerResponse: ":) Correct! \'telephones\' has an \'s\'.",
    incorrectAnswerResponse: "Incorrect. \'telephones\' has an \'s\'.",
    set: 7
    },

  1020:{
    question_tag: "L1LITLP7Q1",
   code: "1020",
   title: "Lit Q13",
   learner_question: "L#7 Code: 10120 \r\n1. telephones \r\n2. family \r\n3. Liberia",
    question: "Which word has letter \'f\'? Enter the number of the correct answer. Which word has letter \'f\'?",
    answer: "2",
    correctAnswerResponse: ":) Correct! \'family\' has an \'f\'.",
    incorrectAnswerResponse: "Incorrect. \'family\' has an \'f\'.",
    set: 7
    },

  1021:{
    question_tag: "L1LITLP7Q2",
   code: "1021",
   title: "Lit Q14",
   learner_question: "L#7 Code: 1021 \r\n1. Ma sat. \r\n2. Ma is fat. \r\n3. Matt sat.",
    question: "Which sentence says, \'Ma is fat?\' Enter the number of the correct answer. Ma is fat.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Ma is fat.",
    incorrectAnswerResponse: "Incorrect. Ma is fat.",
    set: 7
    },

  1022:{
    question_tag: "L1LITLP8QG",
   code: "1022",
   title: "Lit Class Q8",
   learner_question: "L#8 Code: 1022 \r\n1. e \r\n2. s \r\n3. f",
    question: "Which letter makes the /e/ sound? /eeeee/. Enter the number of the correct answer. /e/.",
    answer: "1",
    correctAnswerResponse: ":) Correct! e.",
    incorrectAnswerResponse: "Incorrect. e.",
    set: 8
    },

  1023:{
    question_tag: "L1LITLP8Q1",
   code: "1023",
   title: "Lit Q15",
   learner_question: "L#8 Code: 1023 \r\n1. n \r\n2. w \r\n3. e",
    question: "Which letter makes the /n/ sound? Enter the number of the correct answer. /nnnnn/. Which letter makes the /n/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! n.",
    incorrectAnswerResponse: "Incorrect. n.",
    set: 8
    },

  1024:{
    question_tag: "L1LITLP8Q2",
   code: "1024",
   title: "Lit Q16",
   learner_question: "L#8 Code: 1024 \r\n1. ham \r\n2. net \r\n3. hen",
    question: "Which word is hen? Hen. Enter the number of the correct answer. Hen.",
    answer: "3",
    correctAnswerResponse: ":) Correct! hen.",
    incorrectAnswerResponse: "Incorrect. hen.",
    set: 8
    },

  1025:{
    question_tag: "L1LITLP9QG",
   code: "1025",
   title: "Lit Class Q9",
   learner_question: "L#9 Code: 1025 \r\n1. He is Matt. \r\n2. The man is fat. \r\n3. He is the man.",
    question: "Which sentence says, \'He is the man.\"? Enter the number of the correct answer. He is the man.",
    answer: "3",
    correctAnswerResponse: ":) Correct! He is the man.",
    incorrectAnswerResponse: "Incorrect. He is the man.",
    set: 9
    },

  1026:{
    question_tag: "L1LITLP9Q1",
   code: "1026",
   title: "Lit Q17",
   learner_question: "L#9 Code: 1026 \r\n1. The man is fat. \r\n2. The man sat. \r\n3. The fat hat sat.",
    question: "Which sentence says, \"The man sat.\"? Enter the number of the correct answer. The man sat.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The man sat.",
    incorrectAnswerResponse: "Incorrect. The man sat.",
    set: 9
    },

  1027:{
    question_tag: "L1LITLP9Q2",
   code: "1027",
   title: "Lit Q18",
   learner_question: "L#9 Code: 1027 \r\n1. hen \r\n2. The \r\n3. men",
    question: "Which words starts with the /h/ sound. Enter the number of the correct answer. /hhhh/. Which word starts with the /h/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! hen.",
    incorrectAnswerResponse: "Incorrect. hen.",
    set: 9
    },

  1028:{
    question_tag: "L1LITLP10QG",
   code: "1028",
   title: "Lit Class Q10",
   learner_question: "L#10 Code: 1028 \r\n1. m \r\n2. d \r\n3. r",
    question: "Which letter makes the /d/ sound? /d/. Enter the number of the correct answer. /d/.",
    answer: "2",
    correctAnswerResponse: ":) Correct! d.",
    incorrectAnswerResponse: "Incorrect. d.",
    set: 10
    },

  1029:{
    question_tag: "L1LITLP10Q1",
   code: "1029",
   title: "Lit Q19",
   learner_question: "L#10 Code: 1029 \r\n1. m \r\n2. d \r\n3. r",
    question: "Which letter makes the /r/ sound? Enter the number of the correct answer. /rrrr/. Which letter makes the /r/ sound?",
    answer: "3",
    correctAnswerResponse: ":) Correct! r.",
    incorrectAnswerResponse: "Incorrect. r.",
    set: 10
    },

  1030:{
    question_tag: "L1LITLP10Q2",
   code: "1030",
   title: "Lit Q20",
   learner_question: "L#10 Code: 1030 \r\n1. rat \r\n2. fat \r\n3. hat",
    question: "Which word is rat? Rat. Enter the number of the correct answer. Rat.",
    answer: "1",
    correctAnswerResponse: ":) Correct! rat.",
    incorrectAnswerResponse: "Incorrect. rat.",
    set: 10
    },

  1031:{
    question_tag: "L1LITLP11QG",
   code: "1031",
   title: "Lit Class Q11",
   learner_question: "L#11 Code: 1031 \r\n1. m \r\n2. f \r\n3. H",
    question: "Which letter is upper case?",
    answer: "3",
    correctAnswerResponse: ":) Correct! H is upper case.",
    incorrectAnswerResponse: "Incorrect. H is upper case.",
    set: 11
    },

  1032:{
    question_tag: "L1LITLP11Q1",
   code: "1032",
   title: "Lit Q21",
   learner_question: "L#10 Code: 1032 \r\n1. den \r\n2. net \r\n3. set",
    question: "Which word is \'net\'? Net. Enter the number of the correct answer. Net.",
    answer: "2",
    correctAnswerResponse: ":) Correct! \'net\'",
    incorrectAnswerResponse: "Incorrect. \'net\'",
    set: 11
    },

  1033:{
    question_tag: "L1LITLP11Q2",
   code: "1033",
   title: "Lit Q22",
   learner_question: "L#11 Code: 1033 \r\n1. red \r\n2. fed \r\n3. Ted",
    question: "Which word begins with the /r/ sound? Enter the number of the correct answer. /rrrr/. Which word begins with the /r/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! red.",
    incorrectAnswerResponse: "Incorrect. red.",
    set: 11
    },

  1034:{
    question_tag: "L1LITLP12QG",
   code: "1034",
   title: "Lit Class Q12",
   learner_question: "L#12 Code: 1034 \r\n1. he \r\n2. she \r\n3. me",
    question: "Which word can replace \'The man\'? Enter the number of the correct answer. Which word can replace \'The man\'?",
    answer: "1",
    correctAnswerResponse: ":) Correct! he.",
    incorrectAnswerResponse: "Incorrect. he.",
    set: 12
    },

  1035:{
    question_tag: "L1LITLP12Q1",
   code: "1035",
   title: "Lit Q23",
   learner_question: "L#12 Code: 1035 \r\n1. he \r\n2. she \r\n3. me",
    question: "Which word can replace \'Ma\'? Enter the number of the correct answer. Which word can replace \'Ma\'?",
    answer: "2",
    correctAnswerResponse: ":) Correct! she. Ma is a woman.",
    incorrectAnswerResponse: "Incorrect. she. Ma is a woman.",
    set: 12
    },

  1036:{
    question_tag: "L1LITLP12Q2",
   code: "1036",
   title: "Lit Q24",
   learner_question: "L#12 Code: 1036 \r\n1. She has met the man. \r\n2. He is as fat as Ma. \r\n3. She met a fat man.",
    question: "Which sentence says, \'She has met the man.\'? Enter the number of the correct answer. She has met the man.",
    answer: "1",
    correctAnswerResponse: ":) Correct! She has met the man.",
    incorrectAnswerResponse: "Incorrect. She has met the man.",
    set: 12
    },

  1037:{
    question_tag: "L1LITLP13QG",
   code: "1037",
   title: "Lit Class Q13",
   learner_question: "L#13 Code: 1037 \r\n1. He is a fat man. \r\n2. She is as fat as me. \r\n3. She has a fat mat.",
    question: "Which sentence says, \"She is as fat as me.\'? Enter the number of the correct answer. She is as fat as me.",
    answer: "2",
    correctAnswerResponse: ":) Correct! She is as fat as me.",
    incorrectAnswerResponse: "Incorrect. She is as fat as me.",
    set: 13
    },

  1038:{
    question_tag: "L1LITLP13Q1",
   code: "1038",
   title: "Lit Q25",
   learner_question: "L#13 Code: 1038 \r\n1. THE HEN IS RED. \r\n2. THE MAN IS NED. \r\n3. THE RED HEN SAT.",
    question: "Which sentence says, \'The hen is red.\'? Enter the number of the correct answer. The hen is red.",
    answer: "1",
    correctAnswerResponse: "Correct! THE HEN IS RED.",
    incorrectAnswerResponse: "Incorrect. THE HEN IS RED.",
    set: 13
    },

  1039:{
    question_tag: "L1LITLP13Q2",
   code: "1039",
   title: "Lit Q26",
   learner_question: "L#13 Code: 1039 \r\n1. am \r\n2. red \r\n3. are",
    question: "Which word is \'are\'? Are. Enter the number of the correct answer. Are.",
    answer: "3",
    correctAnswerResponse: ":) Correct! are.",
    incorrectAnswerResponse: "Incorrect. are.",
    set: 13
    },

  1040:{
    question_tag: "L1LITLP14QG",
   code: "1040",
   title: "Lit Class Q14",
   learner_question: "L#14 Code: 1040 \r\n1. Finger \r\n2. Matter \r\n3. Kitten",
    question: "Which word starts with the /k/ sound? /k/. Enter the number of the correct answer. /k/.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Kitten. K.",
    incorrectAnswerResponse: "Incorrect. Kitten. K.",
    set: 14
    },

  1041:{
    question_tag: "L1LITLP14Q1",
   code: "1041",
   title: "Lit Q27",
   learner_question: "L#14 Code: 1041 \r\n1. Looking \r\n2. Kissing \r\n3. Indent",
    question: "Which word starts with the /L/ sound? Enter the number of the correct answer. /LLLL/. Which word starts with the /l/ sound.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Looking. L.",
    incorrectAnswerResponse: "Incorrect. Looking. L.",
    set: 14
    },

  1042:{
    question_tag: "L1LITLP14Q2",
   code: "1042",
   title: "Lit Q28",
   learner_question: "L#14 Code: 1042 \r\n1. mat \r\n2. mit \r\n3. men",
    question: "Which word is \'mit\'? Mit. Enter the number of the correct answer. \'mit\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! mit.",
    incorrectAnswerResponse: "Incorrect. mit.",
    set: 14
    },

  1043:{
    question_tag: "L1LITLP15QG",
   code: "1043",
   title: "Lit Class Q15",
   learner_question: "L#15 Code: 1043 \r\n1. The rat is at the mat. \r\n2. The mat is in it. \r\n3. The rat is in it.",
    question: "Which sentence says, \'The rat is in it.\'? Enter the number of the correct answer. The rat is in it.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The rat is in it.",
    incorrectAnswerResponse: "Incorrect. The rat is in it.",
    set: 15
    },

  1044:{
    question_tag: "L1LITLP15Q1",
   code: "1044",
   title: "Lit Q29",
   learner_question: "L#15 Code: 1044 \r\n1. The milk is in the red tin. \r\n2. The man is on the red mat. \r\n3. The rat is in the milk tin.",
    question: "Which sentence says, \'The milk is in the red tin.\'? Enter the number of the correct answer. The milk is in the red tin.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The milk is in the red tin.",
    incorrectAnswerResponse: "Incorrect. The milk is in the red tin.",
    set: 15
    },

  1045:{
    question_tag: "L1LITLP15Q2",
   code: "1045",
   title: "Lit Q30",
   learner_question: "L#15 Code: 1045 \r\n1. milk \r\n2. tin \r\n3. kin",
    question: "Which word is \'Kin\'? Kin. Enter the number of the correct answer. Kin.",
    answer: "3",
    correctAnswerResponse: ":) Correct! kin.",
    incorrectAnswerResponse: "Incorrect. kin.",
    set: 15
    },

  1046:{
    question_tag: "L1LITLP16QG",
   code: "1046",
   title: "Lit Class Q16",
   learner_question: "L#16 Code: 1046 \r\n1. wet \r\n2. vet \r\n3. met",
    question: "Which word is \'vet\'? Vet. Enter the number of the correct answer. \'Vet\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! vet.",
    incorrectAnswerResponse: "Incorrect. vet.",
    set: 16
    },

  1047:{
    question_tag: "L1LITLP16Q1",
   code: "1047",
   title: "Lit Q31",
   learner_question: "L#16 Code: 1047 \r\n1. vat \r\n2. wet \r\n3. will",
    question: "Which word is \'will\'? Will. Enter the number of the correct answer. Will.",
    answer: "3",
    correctAnswerResponse: ":) Correct! will.",
    incorrectAnswerResponse: "Incorrect. will.",
    set: 16
    },

  1048:{
    question_tag: "L1LITLP16Q2",
   code: "1048",
   title: "Lit Q32",
   learner_question: "L#16 Code: 1048 \r\n1. The wet rat is in it. \r\n2. The red rat is at the vet. \r\n3. The wet mat is in the vat.",
    question: "Which sentence says, \'The wet rat is in it.\' Enter the number of the correct answer. The wet rat is in it.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The wet rat is in it.",
    incorrectAnswerResponse: "Incorrect. The wet rat is in it.",
    set: 16
    },

  1049:{
    question_tag: "L1LITLP17QG",
   code: "1049",
   title: "Lit Class Q17",
   learner_question: "L#17 Code: 1049 \r\n1. m \r\n2. w \r\n3. v",
    question: "Which letter makes the /w/ sound? Enter the number of the correct answer. /wwww/. Which letter makes the /w/ sound?",
    answer: "2",
    correctAnswerResponse: ":) Correct! w.",
    incorrectAnswerResponse: "Incorrect. w.",
    set: 17
    },

  1050:{
    question_tag: "L1LITLP17Q1",
   code: "1050",
   title: "Lit Q33",
   learner_question: "L#17 Code: 1050 \r\n1. V \r\n2. S \r\n3. W",
    question: "Which letter makes the /v/ sound? Enter the number of the correct sound? /vvvv/. Which letter makes the /vvvv/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! V.",
    incorrectAnswerResponse: "Incorrect. V.",
    set: 17
    },

  1051:{
    question_tag: "L1LITLP17Q2",
   code: "1051",
   title: "Lit Q34",
   learner_question: "L#17 Code: 1051 \r\n1. KIM HAS A WET VAT. \r\n2. KEN IS A FAT VET. \r\n3. KAM HAS A RED RAT.",
    question: "Which sentence says, \'Kim has a wet vat.\' Enter the Number of the correct number. Kim has a wet vat.",
    answer: "1",
    correctAnswerResponse: ":) Correct! KIM HAS A WET VAT.",
    incorrectAnswerResponse: "Incorrect. KIM HAS A WET VAT.",
    set: 17
    },

  1052:{
    question_tag: "L1LITLP18QG",
   code: "1052",
   title: "Lit Class Q18",
   learner_question: "L#18 Code: 1052 \r\n1. Will \r\n2. Went \r\n3. Wets",
    question: "Which word is \'went\'? Went. Enter the number of the correct answer. Went.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Went.",
    incorrectAnswerResponse: "Incorrect. Went.",
    set: 18
    },

  1053:{
    question_tag: "L1LITLP18Q1",
   code: "1053",
   title: "Lit Q35",
   learner_question: "L#18 Code: 1053 \r\n1. We are wet. \r\n2. Will we win? \r\n3. We will win.",
    question: "Which sentence says, \'We will win.\' Enter the number of the correct answer. We will win.",
    answer: "3",
    correctAnswerResponse: ":) Correct! We will win.",
    incorrectAnswerResponse: "Incorrect. We will win.",
    set: 18
    },

  1054:{
    question_tag: "L1LITLP18Q2",
   code: "1054",
   title: "Lit Q36",
   learner_question: "L#18 Code: 1054 \r\n1. The wet hen has a van. \r\n2. The van has a red mat. \r\n3. The van hit the wet hen.",
    question: "Which sentence says, \'The van hit the wet hen.\'?",
    answer: "3",
    correctAnswerResponse: ":) Correct! The van hit the wet hen.",
    incorrectAnswerResponse: "Incorrect. The van hit the wet hen.",
    set: 18
    },

  1055:{
    question_tag: "L1LITLP19QG",
   code: "1055",
   title: "Lit Class Q19",
   learner_question: "L#19 Code: 1055 \r\n1. A \r\n2. K \r\n3. H",
    question: "Which letter is capital \'K\'? Enter the number of the correct answer. Capital \'K\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! K.",
    incorrectAnswerResponse: "Incorrect. K.",
    set: 19
    },

  1056:{
    question_tag: "L1LITLP19Q1",
   code: "1056",
   title: "Lit Q37",
   learner_question: "L#19 Code: 1056 \r\n1. N \r\n2. D \r\n3. W",
    question: "Which letter is capital \'N\'? Enter the number of the correct answer. Capital \'N\'.",
    answer: "1",
    correctAnswerResponse: ":) Correct! N.",
    incorrectAnswerResponse: "Incorrect. N.",
    set: 19
    },

  1057:{
    question_tag: "L1LITLP19Q2",
   code: "1057",
   title: "Lit Q38",
   learner_question: "L#19 Code: 1057 \r\n1. w \r\n2. f \r\n3. m",
    question: "Which letter makes the /f/ sound. Enter the number of the correct answer. /ffff/ Which letter makes the /f/ sound?",
    answer: "2",
    correctAnswerResponse: ":) Correct! f.",
    incorrectAnswerResponse: "Incorrect. f.",
    set: 19
    },

  1058:{
    question_tag: "L1LITLP20QG",
   code: "1058",
   title: "Lit Class Q20",
   learner_question: "L#20 Code: 1058 \r\n1. w \r\n2. f \r\n3. m",
    question: "I will say a word. Which letter makes the sound at the beginning of the word? Listen. Mother. Mother. What letter begins the word?",
    answer: "3",
    correctAnswerResponse: ":) Correct! m.",
    incorrectAnswerResponse: "Incorrect. m.",
    set: 20
    },

  1059:{
    question_tag: "L1LITLP20Q1",
   code: "1059",
   title: "Lit Q39",
   learner_question: "L#20 Code: 1059 \r\n1. D \r\n2. K \r\n3. R",
    question: "Which is letter \'R\'? \"R\'. Enter the number of the correct answer. \'R\'.",
    answer: "3",
    correctAnswerResponse: ":) Correct! R.",
    incorrectAnswerResponse: "Incorrect. R.",
    set: 20
    },

  1060:{
    question_tag: "L1LITLP20Q2",
   code: "1060",
   title: "Lit Q40",
   learner_question: "L#20 Code: 1060 \r\n1. T \r\n2. S \r\n3. F",
    question: "Which letter makes the /t/ sound. /t/. Which letter makes the /t/ sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! T.",
    incorrectAnswerResponse: "Incorrect. T.",
    set: 20
    },

  1061:{
    question_tag: "L1LITLP21QG",
   code: "1061",
   title: "Lit Class Q21",
   learner_question: "L#21 Code: 1061 \r\n1. hand \r\n2. hint \r\n3. hang",
    question: "Which word is \'hang\'? Hang. Enter the number of the correct answer. Hang.",
    answer: "3",
    correctAnswerResponse: ":) Correct! hang.",
    incorrectAnswerResponse: "Incorrect. hang.",
    set: 21
    },

  1062:{
    question_tag: "L1LITLP21Q1",
   code: "1062",
   title: "Lit Q41",
   learner_question: "L#21 Code: 1062 \r\n1. cat \r\n2. cog \r\n3. cot",
    question: "Which word is \'cog\'? Cog. Enter the number of the correct answer. Cog.",
    answer: "2",
    correctAnswerResponse: ":) Correct! cog.",
    incorrectAnswerResponse: "Incorrect. cog.",
    set: 21
    },

  1063:{
    question_tag: "L1LITLP21Q2",
   code: "1063",
   title: "Lit Q42",
   learner_question: "L#21 Code: 1063 \r\n1. The cog is on the vat. \r\n2. The cat gets a rat. \r\n3. The cot is on the rat.",
    question: "Which sentence says, \'The cat gets a rat.\' Enter the number of the correct answer. The cat gets a rat.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The cat gets a rat.",
    incorrectAnswerResponse: "Incorrect. The cat gets a rat.",
    set: 21
    },

  1064:{
    question_tag: "L1LITLP22QG",
   code: "1064",
   title: "Lit Class Q22",
   learner_question: "L#22 Code: 1064 She ___win. \r\n1. can \r\n2. get \r\n3. on",
    question: "Write the following on the board: She ___ win. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: ":) Correct! She can win.",
    incorrectAnswerResponse: "Incorrect. She can win.",
    set: 22
    },

  1065:{
    question_tag: "L1LITLP22Q1",
   code: "1065",
   title: "Lit Q43",
   learner_question: "L#22 Code: 1065 \r\n1. The dog got a cat. \r\n2. The dogs get a hen. \r\n3. The dog got hot.",
    question: "Which sentence says, \'The dog got hot.\'? Enter the number of the correct answer. The dog got hot.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The dog got hot.",
    incorrectAnswerResponse: "Incorrect. The dog got hot.",
    set: 22
    },

  1066:{
    question_tag: "L1LITLP22Q2",
   code: "1066",
   title: "Lit Q44",
   learner_question: "L#22 Code: 1066 \r\n1. Can the cat get on the mat? \r\n2. Can the hog get on the vat? \r\n3. Can the hen get on the rat?",
    question: "Which sentence says, \'Can the hog get on the vat?\'",
    answer: "2",
    correctAnswerResponse: ":) Correct! Can the hog get on the vat?",
    incorrectAnswerResponse: "Incorrect. Can the hog get on the vat?",
    set: 22
    },

  1067:{
    question_tag: "L1LITLP23QG",
   code: "1067",
   title: "Lit Class Q23",
   learner_question: "L#23 Code: 1067 \r\n1. cat \r\n2. cog \r\n3. cab",
    question: "Which word is \'cab\'? Cab. Enter the number of the correct answer. Cab.",
    answer: "3",
    correctAnswerResponse: ":) Correct! cab.",
    incorrectAnswerResponse: "Incorrect. cab.",
    set: 23
    },

  1068:{
    question_tag: "L1LITLP23Q1",
   code: "1068",
   title: "Lit Q45",
   learner_question: "L#23 Code: 1068 \r\n1. d \r\n2. b \r\n3. c",
    question: "Which letter makes the /b/ sound? Enter the number of the correct answer. /b/. Which letter makes the /b/ sound?",
    answer: "2",
    correctAnswerResponse: ":) Correct! b.",
    incorrectAnswerResponse: "Incorrect. b.",
    set: 23
    },

  1069:{
    question_tag: "L1LITLP23Q2",
   code: "1069",
   title: "Lit Q46",
   learner_question: "L#23 Code: 1069 \r\n1. yet \r\n2. yes \r\n3. bet",
    question: "Which word is \'yet\'? Yet. Enter the number of the correct answer. Yet.",
    answer: "1",
    correctAnswerResponse: ":) Correct! yet.",
    incorrectAnswerResponse: "Incorrect. yet.",
    set: 23
    },

  1070:{
    question_tag: "L1LITLP24QG",
   code: "1070",
   title: "Lit Class Q24",
   learner_question: "L#24 Code: 1070 We went to ___ at 10:00. \r\n1. hen \r\n2. yet \r\n3. bed",
    question: "Write the following on the board: We went to ____ at ten. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: ":) Correct! bed. We went to bed at 10:00.",
    incorrectAnswerResponse: "Incorrect. bed. We went to bed at 10:00.",
    set: 24
    },

  1071:{
    question_tag: "L1LITLP24Q1",
   code: "1071",
   title: "Lit Q47",
   learner_question: "L#24 Code: 1071 \r\n1. The big dog bit me. \r\n2. The bad dog hit me. \r\n3. The big man is me.",
    question: "Which sentence says, \'The big dog bit me\'? Enter the number of the correct answer. The big dog bit me.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The big man bit me.",
    incorrectAnswerResponse: "Incorrect. The big man bit me.",
    set: 24
    },

  1072:{
    question_tag: "L1LITLP24Q2",
   code: "1072",
   title: "Lit Q48",
   learner_question: "L#24 Code: 1072 \r\n1. Yet, we went in a van. \r\n2. Yes, we will get a fan. \r\n3. Yes, we will get a big van.",
    question: "Which sentence says, \'Yes, we will get a big van.\'",
    answer: "3",
    correctAnswerResponse: ":) Correct! Yes, we will get a big van.",
    incorrectAnswerResponse: "Incorrect. Yes, we will get a big van.",
    set: 24
    },

  1073:{
    question_tag: "L1LITLP25QG",
   code: "1073",
   title: "Lit Class Q25",
   learner_question: "L#25 Code: 1073 \r\n1. B \r\n2. G \r\n3. C",
    question: "Say: Which letter is capital G? Enter the number of the correct answer. Capital G.",
    answer: "2",
    correctAnswerResponse: ":) Correct! G.",
    incorrectAnswerResponse: "Incorrect. G.",
    set: 25
    },

  1074:{
    question_tag: "L1LITLP25Q1",
   code: "1074",
   title: "Lit Q49",
   learner_question: "L#25 Code: 1074 \r\n1. Y \r\n2. H \r\n3. B",
    question: "Which letter is capital \'Y\'? Enter the number of the correct answer. Which number is capital \'Y\'?",
    answer: "1",
    correctAnswerResponse: ":) Correct! Y.",
    incorrectAnswerResponse: "Incorrect. Y.",
    set: 25
    },

  1075:{
    question_tag: "L1LITLP25Q2",
   code: "1075",
   title: "Lit Q50",
   learner_question: "L#25 Code: 1075 \r\n1. HE CAN GET YAMS. \r\n2. THE MEN GOT BIG HAMS. \r\n3. THE BOY GOT A BAD YAM.",
    question: "Which sentence says, \'The boy got a bad yam.\'? Enter the number of the correct answer. The boy got a bad yam.",
    answer: "3",
    correctAnswerResponse: ":) Correct! THE BOY GOT A BAD YAM.",
    incorrectAnswerResponse: "Incorrect. THE BOY GOT A BAD YAM.",
    set: 25
    },

  1076:{
    question_tag: "L1LITLP26QG",
   code: "1076",
   title: "Lit Class Q26",
   learner_question: "L#26 Code: 1076 \r\n1. jam \r\n2. pump \r\n3. jump",
    question: "Which word is \'jump\'? Jump. Enter the number of the correct answer. Jump.",
    answer: "3",
    correctAnswerResponse: ":) Correct! jump.",
    incorrectAnswerResponse: "Incorrect. jump.",
    set: 26
    },

  1077:{
    question_tag: "L1LITLP26Q1",
   code: "1077",
   title: "Lit Q51",
   learner_question: "L#26 Code: 1077 \r\n1. j \r\n2. p \r\n3. d",
    question: "Which letter makes the /p/ sound? Enter the number of the correct answer. /p/. Which letter makes the /p/ sound?",
    answer: "2",
    correctAnswerResponse: ":) Correct! p.",
    incorrectAnswerResponse: "Incorrect. p.",
    set: 26
    },

  1078:{
    question_tag: "L1LITLP26Q2",
   code: "1078",
   title: "Lit Q52",
   learner_question: "L#26 Code: 1078 \r\n1. The boys jump up. \r\n2. The bad man jumps. \r\n3. The boy jumps on the hen.",
    question: "Which sentence says, \'The boys jump up.\'?",
    answer: "1",
    correctAnswerResponse: ":) Correct! The boys jump up.",
    incorrectAnswerResponse: "Incorrect. The boys jump up.",
    set: 26
    },

  1079:{
    question_tag: "L1LITLP27QG",
   code: "1079",
   title: "Lit Class Q27",
   learner_question: "L#27 Code: 1079 \r\n1. The boys stop the cat. \r\n2. The boy stops by the clinic. \r\n3. The pets stop but the hen jumps.",
    question: "Which sentence says, \'The boy stops by the clinic.\'?",
    answer: "2",
    correctAnswerResponse: ":) Correct! The boy stops by the clinic.",
    incorrectAnswerResponse: "Incorrect. The boy stops by the clinic.",
    set: 27
    },

  1080:{
    question_tag: "L1LITLP27Q1",
   code: "1080",
   title: "Lit Q53",
   learner_question: "L#27 Code: 1080 \r\n1. jump \r\n2. pens \r\n3. plump",
    question: "Which word is \'plump\'? Plump. Enter the number of the correct answer. Plump.",
    answer: "3",
    correctAnswerResponse: ":) Correct! plump.",
    incorrectAnswerResponse: "Incorrect. plump.",
    set: 27
    },

  1081:{
    question_tag: "L1LITLP27Q2",
   code: "1081",
   title: "Lit Q54",
   learner_question: "L#27 Code: 1081 \r\n1. damp \r\n2. dent \r\n3. pamp",
    question: "Which word is damp? Damp. Enter the number of the correct answer. Damp.",
    answer: "1",
    correctAnswerResponse: ":) Correct! damp.",
    incorrectAnswerResponse: "Incorrect. damp.",
    set: 27
    },

  1082:{
    question_tag: "L1LITLP28QG",
   code: "1082",
   title: "Lit Class Q28",
   learner_question: "L#28 Code: 1082 \r\n1. eggs \r\n2. exit \r\n3. x-rays",
    question: "Which word is \'exit\'? Exit. Enter the number of the correct answer. Exit.",
    answer: "2",
    correctAnswerResponse: ":) Correct! exit.",
    incorrectAnswerResponse: "Incorrect. exit.",
    set: 28
    },

  1083:{
    question_tag: "L1LITLP28Q1",
   code: "1083",
   title: "Lit Q55",
   learner_question: "L#28 Code: 1083 \r\n1. quick \r\n2. kits \r\n3. quit",
    question: "Which word is \'quit\'. Quit. Enter the number of the correct answer. Quit.",
    answer: "3",
    correctAnswerResponse: ":) Correct! quit.",
    incorrectAnswerResponse: "Incorrect. quit.",
    set: 28
    },

  1084:{
    question_tag: "L1LITLP28Q2",
   code: "1084",
   title: "Lit Q56",
   learner_question: "L#28 Code: 1084 \r\n1. Yes, but the are back. \r\n2. We put the exit in back. \r\n3. We will if you are back.",
    question: "Which sentence says, \'We put the exit in back.\'",
    answer: "2",
    correctAnswerResponse: ":) Correct! We put the exit in the back.",
    incorrectAnswerResponse: "Incorrect. We put the exit in the back.",
    set: 28
    },

  1085:{
    question_tag: "L1LITLP29QG",
   code: "1085",
   title: "Lit Class Q29",
   learner_question: "L#29 Code: 1085 \r\n1. He is sick. \r\n2. He is hot. \r\n3. He is wet.",
    question: "Say: Answer the question: \'Why is he at the clinic?\' Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Why is he at the clinic? He is sick.",
    incorrectAnswerResponse: "Incorrect. Why is he at the clinic? He is sick.",
    set: 29
    },

  1086:{
    question_tag: "L1LITLP29Q1",
   code: "1086",
   title: "Lit Q57",
   learner_question: "L#29 Code: 1086 \r\n1. five \r\n2. have \r\n3. hats",
    question: "Which word is \'have\'. Have. Enter the number of the correct answer. Have.",
    answer: "2",
    correctAnswerResponse: ":) Correct! have",
    incorrectAnswerResponse: "Incorrect. have",
    set: 29
    },

  1087:{
    question_tag: "L1LITLP29Q2",
   code: "1087",
   title: "Lit Q58",
   learner_question: "L#29 Code: 1087 \r\n1. Five \r\n2. Four \r\n3. Three",
    question: "Which word is \'5\'? 5 Enter the number of the correct answer. 5.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Five. 5",
    incorrectAnswerResponse: "Incorrect. Five. 5",
    set: 29
    },

  1088:{
    question_tag: "L1LITLP30QG",
   code: "1088",
   title: "Lit Class Q30",
   learner_question: "L#30 Code: 1088 \r\n1. O \r\n2. G \r\n3. Q",
    question: "Which is letter is Capital Q? Enter the number of the correct answer. Capital Q.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Qq.",
    incorrectAnswerResponse: "Incorrect. Qq.",
    set: 30
    },

  1089:{
    question_tag: "L1LITLP30Q1",
   code: "1089",
   title: "Lit Q59",
   learner_question: "L#30 Code: 1089 \r\n1. Zip \r\n2. Sip \r\n3. Quip",
    question: "Which word is \'zip\'? Zip. Enter the number of the correct answer. Zip.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Zip.",
    incorrectAnswerResponse: "Incorrect. Zip.",
    set: 30
    },

  1090:{
    question_tag: "L1LITLP30Q2",
   code: "1090",
   title: "Lit Q60",
   learner_question: "L#30 Code: 1090 \r\n1. E \r\n2. X \r\n3. Z",
    question: "Which letter is capital \'X\'? Enter the number fo the correct answer. Capital \'X\'.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Correct! Xx.",
    incorrectAnswerResponse: "Incorrect. Correct! Xx.",
    set: 30
    },

  1091:{
    question_tag: "L1LITLP31QG",
   code: "1091",
   title: "Lit Class Q31",
   learner_question: "L#31 Code: 1091 \r\n1. A bad bug is at the mat. \r\n2. A big dog exits it. \r\n3. A big bag is at the exit.",
    question: "Which sentence says, \'A big bag is at the exit.\'? Enter the number of the correct answer. A big bag is at the exit.",
    answer: "3",
    correctAnswerResponse: ":) Correct! A big bag is at the exit.",
    incorrectAnswerResponse: "Incorrect. A big bag is at the exit.",
    set: 31
    },

  1092:{
    question_tag: "L1LITLP31Q1",
   code: "1092",
   title: "Lit Q61",
   learner_question: "L#31 Code: 1092 \r\n1. But \r\n2. Cut \r\n3. Put",
    question: "Which word is \'put\'? Put. Enter the number of the correct answer. Put.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Put.",
    incorrectAnswerResponse: "Incorrect. Put.",
    set: 31
    },

  1093:{
    question_tag: "L1LITLP31Q2",
   code: "1093",
   title: "Lit Q62",
   learner_question: "L#31 Code: 1093 \r\n1. gum \r\n2. jam \r\n3. zam",
    question: "Which word is \'jam\'? Jam. Enter the number of the correct answer. Jam.",
    answer: "2",
    correctAnswerResponse: ":) Correct! jam.",
    incorrectAnswerResponse: "Incorrect. jam.",
    set: 31
    },

  1094:{
    question_tag: "L1LITLP32QG",
   code: "1094",
   title: "Lit Class Q32",
   learner_question: "L#32 Code: 1094 \r\n1. gold \r\n2. gum \r\n3. giant",
    question: "Which word has a \'soft g\' sound? Enter the number of the correct answer. Which word has a \'soft g\'?",
    answer: "3",
    correctAnswerResponse: ":) Correct! Giant has a soft \'g\'.",
    incorrectAnswerResponse: "Incorrect. Giant has a soft \'g\'.",
    set: 32
    },

  1095:{
    question_tag: "L1LITLP32Q1",
   code: "1095",
   title: "Lit Q63",
   learner_question: "L#32 Code: 1095 \r\n1. city \r\n2. cup \r\n3. camp",
    question: "Which word has a \'soft c\' sound? Enter the number of the correct answer. Which word has a \'soft c\' sound?",
    answer: "1",
    correctAnswerResponse: ":) Correct! City has a soft \'c\'.",
    incorrectAnswerResponse: "Incorrect. City has a soft \'c\'.",
    set: 32
    },

  1096:{
    question_tag: "L1LITLP32Q2",
   code: "1096",
   title: "Lit Q64",
   learner_question: "L#32 Code: 1096 \r\n1. Grant \r\n2. Giraffe \r\n3. Guitar",
    question: "Which word is \'giraffe\'? Giraffe. Enter the number of the correct answer. Which word is \'giraffe\'?",
    answer: "2",
    correctAnswerResponse: ":) Correct! Giraffe.",
    incorrectAnswerResponse: "Incorrect. Giraffe.",
    set: 32
    },

  1097:{
    question_tag: "L1LITLP33QG",
   code: "1097",
   title: "Lit Class Q33",
   learner_question: "L#33 Code: 1097 She ___ yes. \r\n1. did \r\n2. says \r\n3. go",
    question: "Write the following on the board: She _____ yes. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: ":) Correct! She says yes.",
    incorrectAnswerResponse: "Incorrect. She says yes.",
    set: 33
    },

  1098:{
    question_tag: "L1LITLP33Q1",
   code: "1098",
   title: "Lit Q65",
   learner_question: "L#33 Code: 1098 \r\n1. Seven \r\n2. Eight \r\n3. Nine",
    question: "Which word is 8? 8. Enter the number of the correct answer. 8.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Eight. 8.",
    incorrectAnswerResponse: "Incorrect. Eight. 8.",
    set: 33
    },

  1099:{
    question_tag: "L1LITLP33Q2",
   code: "1099",
   title: "Lit Q66",
   learner_question: "L#33 Code: 1099 \r\n1. six \r\n2. seven \r\n3. eight",
    question: "Which word is 6? 6. Enter the number of the correct answer. 6.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Six. 6.",
    incorrectAnswerResponse: "Incorrect. Six. 6.",
    set: 33
    },

  1100:{
    question_tag: "L1LITLP34QG",
   code: "1100",
   title: "Lit Class Q34",
   learner_question: "L#34 Code: 1100 We will ___ to the city. \r\n1. van \r\n2. says \r\n3. go",
    question: "Write the following on the board: We will ____ to the city. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: ":) Correct! We will go to the city.",
    incorrectAnswerResponse: "Incorrect. We will go to the city.",
    set: 34
    },

  1101:{
    question_tag: "L1LITLP34Q1",
   code: "1101",
   title: "Lit Q67",
   learner_question: "L#34 Code: 1101 \r\n1. call \r\n2. Cog \r\n3. cell",
    question: "Which word has a \'soft c\' sound? Enter the number of the correct answer. Which word has a \'soft c\' sound?",
    answer: "3",
    correctAnswerResponse: ":) Correct! Cell has a soft \'c\'.",
    incorrectAnswerResponse: "Incorrect. Cell has a soft \'c\'.",
    set: 34
    },

  1102:{
    question_tag: "L1LITLP34Q2",
   code: "1102",
   title: "Lit Q68",
   learner_question: "L#34 Code: 1102 \r\n1. goat \r\n2. giraffe \r\n3. get",
    question: "Which word has a \'soft g\' sound? Enter the number of the correct answer. Which word has a \'soft g\'?",
    answer: "2",
    correctAnswerResponse: ":) Correct! Giraffe has a soft \'g\'.",
    incorrectAnswerResponse: "Incorrect. Giraffe has a soft \'g\'.",
    set: 34
    },

  1103:{
    question_tag: "L1LITLP35QG",
   code: "1103",
   title: "Lit Class Q35",
   learner_question: "L#35 Code: 1103 She will ___ the egg in the bag. \r\n1. But \r\n2. Cut \r\n3. Put",
    question: "Write the following on the board: She will ____ the egg in the bag. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: ":) Correct! She will put the egg in the bag.",
    incorrectAnswerResponse: "Incorrect. She will put the egg in the bag.",
    set: 35
    },

  1104:{
    question_tag: "L1LITLP35Q1",
   code: "1104",
   title: "Lit Q69",
   learner_question: "L#35 Code: 1104 \r\n1. Seven \r\n2. Eight \r\n3. Nine",
    question: "Which word is 7? 7. Enter the number of the correct word. 7.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Seven. 7.",
    incorrectAnswerResponse: "Incorrect. Seven. 7.",
    set: 35
    },

  1105:{
    question_tag: "L1LITLP35Q2",
   code: "1105",
   title: "Lit Q70",
   learner_question: "L#35 Code: 1105 \r\n1. The boys jump on the dog. \r\n2. The bad man jumps on a log. \r\n3. The big boys are in the fog.",
    question: "Which sentence says, \'The boys jump on the dog.\'? Enter the number of the correct answer. The boys jump on the dog.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The boys jump on the dog.",
    incorrectAnswerResponse: "Incorrect. The boys jump on the dog.",
    set: 35
    },

  1106:{
    question_tag: "L1LITLP36QG",
   code: "1106",
   title: "Lit Class Q36",
   learner_question: "L#36 Code: 1106 Put the __ in the van. \r\n1. bags \r\n2. van \r\n3. says",
    question: "Write the following on the board: Put the ____ in the van. Say: Which word completes the sentence? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Put the bags in the car.",
    incorrectAnswerResponse: "Incorrect. Put the bags in the car.",
    set: 36
    },

  1107:{
    question_tag: "L1LITLP36Q1",
   code: "1107",
   title: "Lit Q71",
   learner_question: "L#36 Code: 1107 \r\n1. Go \r\n2. Gets \r\n3. Goes",
    question: "Which word is \'goes\'? Goes. Enter the number of the correct answer. Goes.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Goes",
    incorrectAnswerResponse: "Incorrect. Goes",
    set: 36
    },

  1108:{
    question_tag: "L1LITLP36Q2",
   code: "1108",
   title: "Lit Q72",
   learner_question: "L#36 Code: 1108 \r\n1. The gold dog sat. \r\n2. The giant dog sits. \r\n3. He put a bug in a sack.",
    question: "Which sentence says, \'The giant dog sits.\'? Enter the number of the correct answer. The giant dog sits.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The giant dog sits.",
    incorrectAnswerResponse: "Incorrect. The giant dog sits.",
    set: 36
    },

  1109:{
    question_tag: "L1LITLP37QG",
   code: "1109",
   title: "Lit Class Q37",
   learner_question: "L#37 Code: 1109 \r\n1. egg \r\n2. Enter \r\n3. Encyclopedia",
    question: "Say: Which word has two syllables. Enter the number of the word with 2 syllables.",
    answer: "2",
    correctAnswerResponse: ":) Correct! \'Enter\' has 2 syllables.",
    incorrectAnswerResponse: "Incorrect. \'Enter\' has 2 syllables.",
    set: 37
    },

  1110:{
    question_tag: "L1LITLP37Q1",
   code: "1110",
   title: "Lit Q73",
   learner_question: "L#37 Code: 1110 \r\n1. as \r\n2. at \r\n3. ask",
    question: "Which word is \'ask\'? Ask. Enter the number of the correct answer. Which word is ask?",
    answer: "3",
    correctAnswerResponse: ":) Correct! Ask.",
    incorrectAnswerResponse: "Incorrect. Ask.",
    set: 37
    },

  1111:{
    question_tag: "L1LITLP37Q2",
   code: "1111",
   title: "Lit Q74",
   learner_question: "L#37 Code: 1111 \r\n1. An apple is on an ant. \r\n2. Anne asks for a big apple. \r\n3. An ant asks for an apple.",
    question: "Which sentence says, \'An ant asks for an apple.\'? Enter the number of the correct answer. An ant asks for an apple.",
    answer: "3",
    correctAnswerResponse: ":) Correct! An ant asks for an apple.",
    incorrectAnswerResponse: "Incorrect. An ant asks for an apple.",
    set: 37
    },

  1112:{
    question_tag: "L1LITLP38QG",
   code: "1112",
   title: "Lit Class Q38",
   learner_question: "L#38 Code: 1112 \r\n1. He like cats. \r\n2. He likes cats! \r\n3. He likes cats?",
    question: "Say: Which sentence is a question? Enter the number of the question.",
    answer: "3",
    correctAnswerResponse: ":) Correct! He likes cats? Questions end with \'?\'.",
    incorrectAnswerResponse: "Incorrect. He likes cats? Questions end with \'?\'.",
    set: 38
    },

  1113:{
    question_tag: "L1LITLP38Q1",
   code: "1113",
   title: "Lit Q75",
   learner_question: "L#38 Code: 1113 \r\n1. She wants a tan apple. \r\n2. She was a about to put it up. \r\n3. She wants to talk about it.",
    question: "Which sentence says, \'She wants to talk about it.\'? Enter the number of the correct answer. She wants to talk about it.",
    answer: "3",
    correctAnswerResponse: ":) Correct! She wants to talk about it.",
    incorrectAnswerResponse: "Incorrect. She wants to talk about it.",
    set: 38
    },

  1114:{
    question_tag: "L1LITLP38Q2",
   code: "1114",
   title: "Lit Q76",
   learner_question: "L#38 Code: 1114 \r\n1. The kids are in. \r\n2. This is a kid. \r\n3. This is it.",
    question: "Which sentence says, \"This is it.\" Enter the number of the correct answer. This is it.",
    answer: "3",
    correctAnswerResponse: ":) Correct! This is it.",
    incorrectAnswerResponse: "Incorrect. This is it.",
    set: 38
    },

  1115:{
    question_tag: "L1LITLP39QG",
   code: "1115",
   title: "Lit Class Q39",
   learner_question: "L#39 Code: 1115 \r\n1. A cat \r\n2. A car \r\n3. A jar",
    question: "Say: Open to page 117. Look at the first sentence of the story. What do Hawa and Massa have? Enter the number of the correct answer. What do Hawa and Massa have?",
    answer: "2",
    correctAnswerResponse: ":) Correct! Hawa and Massa have a car.",
    incorrectAnswerResponse: "Incorrect. Hawa and Massa have a car.",
    set: 39
    },

  1116:{
    question_tag: "L1LITLP39Q1",
   code: "1116",
   title: "Lit Q77",
   learner_question: "L#39 Code: 1116 \r\n1. end \r\n2. and \r\n3. in",
    question: "Which word is \'And\'? And. Enter the letter of the correct answer. And.",
    answer: "2",
    correctAnswerResponse: ":) Correct! And.",
    incorrectAnswerResponse: "Incorrect. And.",
    set: 39
    },

  1117:{
    question_tag: "L1LITLP39Q2",
   code: "1117",
   title: "Lit Q78",
   learner_question: "L#39 Code: 1117 \r\n1. Pam and the man saw a cat. \r\n2. Dan and the men got a cot. \r\n3. Pim and the men saw a cut.",
    question: "Which sentence says, \"Pam and the man saw a cat.\"? Enter the number of the correct answer. Pam and the man saw a cat.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Pam and the man saw a cat.",
    incorrectAnswerResponse: "Incorrect. Pam and the man saw a cat.",
    set: 39
    },

  1118:{
    question_tag: "L1LITLP40QG",
   code: "1118",
   title: "Lit Class Q40",
   learner_question: "L#40 Code: 1118 \r\n1. Ebb \r\n2. Ibb \r\n3. Abb",
    question: "Which word is \'ebb\'? Enter the number of the correct answer. Ebb.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Ebb.",
    incorrectAnswerResponse: "Incorrect. Ebb.",
    set: 40
    },

  1119:{
    question_tag: "L1LITLP40Q1",
   code: "1119",
   title: "Lit Q79",
   learner_question: "L#40 Code: 1119 \r\n1. and \r\n2. eat \r\n3. end",
    question: "Which word has the short /e/ sound? Enter the number of the word with a short /e/ sound. Short /e/.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The short /e/ sound is the sound in end, egg, bed, net, head, and get.",
    incorrectAnswerResponse: "Incorrect. The short /e/ sound is the sound in end, egg, bed, net, head, and get.",
    set: 40
    },

  1120:{
    question_tag: "L1LITLP40Q2",
   code: "1120",
   title: "Lit Q80",
   learner_question: "L#40 Code: 1120 \r\n1. This is an ant on it. \r\n2. The ants are on the eggs. \r\n3. This is about the ants on the egg.",
    question: "Which sentences says, \"This is about the ants on the egg?\"",
    answer: "3",
    correctAnswerResponse: ":) Correct! This is about the ants on the egg.",
    incorrectAnswerResponse: "Incorrect. This is about the ants on the egg.",
    set: 40
    },

  1121:{
    question_tag: "L1LITLP41QG",
   code: "1121",
   title: "Lit Class Q41",
   learner_question: "L#41 Code: 1121 She is in the ____. \r\n1. ran \r\n2. bed \r\n3. egg",
    question: "Choose the word that completes the sentence. Enter the number of the word that finishes the sentence.",
    answer: "2",
    correctAnswerResponse: ":) Correct! She is in the bed.",
    incorrectAnswerResponse: "Incorrect. She is in the bed.",
    set: 41
    },

  1122:{
    question_tag: "L1LITLP41Q1",
   code: "1122",
   title: "Lit Q81",
   learner_question: "L#41 Code: 1122 \r\n1. cat \r\n2. bed \r\n3. he",
    question: "Which word has the short /e/ sound? Enter the number of the word with a short /e/ sound. Short /e/.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The short /e/ sound is the sound in bed, net, head, and get.",
    incorrectAnswerResponse: "Incorrect. The short /e/ sound is the sound in bed, net, head, and get.",
    set: 41
    },

  1123:{
    question_tag: "L1LITLP41Q2",
   code: "1123",
   title: "Lit Q82",
   learner_question: "L#41 Code: 1123 \r\n1. The net and the cat are bad. \r\n2. The nut is at the end of the mat. \r\n3. The net is on the end of the bed.",
    question: "Which sentence says, \"The net is on the end of the bed.\"? Enter the number of the correct answer. The net is on the end of the bed.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The net is on the end of the bed.",
    incorrectAnswerResponse: "Incorrect. The net is on the end of the bed.",
    set: 41
    },

  1124:{
    question_tag: "L1LITLP42QG",
   code: "1124",
   title: "Lit Class Q42",
   learner_question: "L#42 Code: 1124 \r\n1. Man \r\n2. Men \r\n3. Min",
    question: "I will say a word. Enter the number of the word I say. Listen. Men. Men.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Men",
    incorrectAnswerResponse: "Incorrect. Men",
    set: 42
    },

  1125:{
    question_tag: "L1LITLP42Q1",
   code: "1125",
   title: "Lit Q83",
   learner_question: "L#42 Code: 1125 \r\n1. Tan \r\n2. Ten \r\n3. Tin",
    question: "Which word is \'tan\'? Enter the number of the correct answer. Tan. Tan.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Tan",
    incorrectAnswerResponse: "Incorrect. Tan",
    set: 42
    },

  1126:{
    question_tag: "L1LITLP42Q2",
   code: "1126",
   title: "Lit Q84",
   learner_question: "L#42 Code: 1126 \r\n1. The cats get in the bed. \r\n2. The cars are in the wet net. \r\n3. They can get in the wet bed.",
    question: "Which sentence says, \'They can get in the wet bed.\'",
    answer: "3",
    correctAnswerResponse: ":) Correct! They can get in the wet bed.",
    incorrectAnswerResponse: "Incorrect. They can get in the wet bed.",
    set: 42
    },

  1127:{
    question_tag: "L1LITLP43QG",
   code: "1127",
   title: "Lit Class Q43",
   learner_question: "L#43 Code: 1127 \r\n1. Night \r\n2. It \r\n3. I",
    question: "Which word has the short /i/ sound? Enter the number of the word with a short /i/ sound. Short /i/.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The short /i/ sound is the sound in it, if, bin, lit, and hit.",
    incorrectAnswerResponse: "Incorrect. The short /i/ sound is the sound in it, if, bin, lit, and hit.",
    set: 43
    },

  1128:{
    question_tag: "L1LITLP43Q1",
   code: "1128",
   title: "Lit Q85",
   learner_question: "L#43 Code: 1128 \r\n1. If the insect is in the can. \r\n2. It is the insect in the tin. \r\n3. Is the insect on the can?",
    question: "Which sentence says, \"If the insect is in the can.\"? Enter the number of the correct answer. If the insect is in the can.",
    answer: "1",
    correctAnswerResponse: ":) Correct! If the insect is in the can.",
    incorrectAnswerResponse: "Incorrect. If the insect is in the can.",
    set: 43
    },

  1129:{
    question_tag: "L1LITLP43Q2",
   code: "1129",
   title: "Lit Q86",
   learner_question: "L#43 Code: 1129 I ___ the insect. \r\n1. hit \r\n2. ate \r\n3. in",
    question: "Which word completes the sentence? Enter the number of the word that completes the sentence.",
    answer: "1",
    correctAnswerResponse: ":) Correct! I hit the insect.",
    incorrectAnswerResponse: "Incorrect. I hit the insect.",
    set: 43
    },

  1130:{
    question_tag: "L1LITLP44QG",
   code: "1130",
   title: "Lit Class Q44",
   learner_question: "L#44 Code: 1130 \r\n1. He is a fat pig. \r\n2. His friend has a big pig. \r\n3. He and his friend get a pig.",
    question: "Which sentence says, \"His friend has a big pig.\"? Enter the number of the correct answer. His friend has a big pig.",
    answer: "2",
    correctAnswerResponse: ":) Correct! His friend has a big pig.",
    incorrectAnswerResponse: "Incorrect. His friend has a big pig.",
    set: 44
    },

  1131:{
    question_tag: "L1LITLP44Q1",
   code: "1131",
   title: "Lit Q87",
   learner_question: "L#44 Code: 1131 \r\n1. bet \r\n2. bat \r\n3. bit",
    question: "Which word is \'bit\'?",
    answer: "3",
    correctAnswerResponse: ":) Correct! Bit.",
    incorrectAnswerResponse: "Incorrect. Bit.",
    set: 44
    },

  1132:{
    question_tag: "L1LITLP44Q2",
   code: "1132",
   title: "Lit Q88",
   learner_question: "L#44 Code: 1132 \r\n1. give \r\n2. fight \r\n3. tie",
    question: "Which word has the short /i/ sound? Enter the number of the word with a short /i/ sound. Short /i/.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The short /i/ sound is the sound give, live, in it, if, bin, lit, and hit.",
    incorrectAnswerResponse: "Incorrect. The short /i/ sound is the sound give, live, in it, if, bin, lit, and hit.",
    set: 44
    },

  1133:{
    question_tag: "L1LITLP45QG",
   code: "1133",
   title: "Lit Class Q45",
   learner_question: "L#45 Code: 1133 \r\n1. Friend \r\n2. Tinizi \r\n3. Silly",
    question: "Say: Open to page 140. Read the first line of the story. What is the name of the pig? Enter the number of the correct answer. What is the name of the pig?",
    answer: "3",
    correctAnswerResponse: ":) Correct! The story says, \"The name of the pig is Silly.\"",
    incorrectAnswerResponse: "Incorrect. The story says, \"The name of the pig is Silly.\"",
    set: 45
    },

  1134:{
    question_tag: "L1LITLP45Q1",
   code: "1134",
   title: "Lit Q89",
   learner_question: "L#45 Code: 1134 \r\n1. Bid \r\n2. Bed \r\n3. Bad",
    question: "Which word is \'bed\'? Enter the number of the correct answer. Bed.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Bed.",
    incorrectAnswerResponse: "Incorrect. Bed.",
    set: 45
    },

  1135:{
    question_tag: "L1LITLP45Q2",
   code: "1135",
   title: "Lit Q90",
   learner_question: "L#45 Code: 1135 \r\n1. Bitter \r\n2. Better \r\n3. Batter",
    question: "Which word is \'Bitter\'? Enter the number of the correct word. Bitter. Bitter.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Bitter",
    incorrectAnswerResponse: "Incorrect. Bitter",
    set: 45
    },

  1136:{
    question_tag: "L1LITLP46QG",
   code: "1136",
   title: "Lit Class Q46",
   learner_question: "L#46 Code: 1136 \r\n1. o \r\n2. g \r\n3. u",
    question: "Which letter is NOT a vowel? Enter the number of the letter that is NOT a vowel.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The vowels are a, e, I, o , u, and sometimes y. \'g\' is a consonant.",
    incorrectAnswerResponse: "Incorrect. The vowels are a, e, I, o , u, and sometimes y. \'g\' is a consonant.",
    set: 46
    },

  1137:{
    question_tag: "L1LITLP46Q1",
   code: "1137",
   title: "Lit Q91",
   learner_question: "L#46 Code: 1137 \r\n1. e \r\n2. i \r\n3. a",
    question: "Which letter makes the /a/ sound? Enter the number of the correct answer. /aaaa/. /a/.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The /a/ sound is the sound in hat, mat, and cat.",
    incorrectAnswerResponse: "Incorrect. The /a/ sound is the sound in hat, mat, and cat.",
    set: 46
    },

  1138:{
    question_tag: "L1LITLP46Q2",
   code: "1138",
   title: "Lit Q92",
   learner_question: "L#46 Code: 1138 \r\n1. Matter \r\n2. Mitten \r\n3. Meter",
    question: "Which word is \'mitten\'? Mitten. Enter the number of the correct answer. Mitten.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Mitten",
    incorrectAnswerResponse: "Incorrect. Mitten",
    set: 46
    },

  1139:{
    question_tag: "L1LITLP47QG",
   code: "1139",
   title: "Lit Class Q47",
   learner_question: "L#47 Code: 1139 \r\n1. open \r\n2. hot \r\n3. O",
    question: "Which word has the short /o/ sound? Enter the number of the word with the short /o/ sound.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The short /o/ sound is the /o/ sound in words like hot, got, lot, and not.",
    incorrectAnswerResponse: "Incorrect. The short /o/ sound is the /o/ sound in words like hot, got, lot, and not.",
    set: 47
    },

  1140:{
    question_tag: "L1LITLP47Q1",
   code: "1140",
   title: "Lit Q93",
   learner_question: "L#47 Code: 1140 \r\n1. on \r\n2. in \r\n3. an",
    question: "Which word is \'on\'? Enter the number of the correct answer. On. On.",
    answer: "1",
    correctAnswerResponse: ":) Correct! On",
    incorrectAnswerResponse: "Incorrect. On",
    set: 47
    },

  1141:{
    question_tag: "L1LITLP47Q2",
   code: "1141",
   title: "Lit Q94",
   learner_question: "L#47 Code: 1141 \r\n1. His friend gives us a can. \r\n2. His friend got on the can. \r\n3. His friend got on and off the can.",
    question: "Which sentence says, \"His friend got on and off the can.\" His friend got on and off the can.",
    answer: "3",
    correctAnswerResponse: ":) Correct! His friend got on and off the can.",
    incorrectAnswerResponse: "Incorrect. His friend got on and off the can.",
    set: 47
    },

  1142:{
    question_tag: "L1LITLP48QG",
   code: "1142",
   title: "Lit Class Q48",
   learner_question: "L#48 Code: 1142 \r\n1. On the porch. \r\n2. In the kitchen. \r\n3. Tom and his son.",
    question: "Say: Open your books to page 150. Read the first line of the story. Where is the dog? Enter the number of the correct answer. Where is the dog?",
    answer: "2",
    correctAnswerResponse: ":) Correct! The story says, \"The dog is in the kitchen.\"",
    incorrectAnswerResponse: "Incorrect. The story says, \"The dog is in the kitchen.\"",
    set: 48
    },

  1143:{
    question_tag: "L1LITLP48Q1",
   code: "1143",
   title: "Lit Q95",
   learner_question: "L#48 Code: 1143 The dog drinks____. \r\n1. friends \r\n2. water \r\n3. good",
    question: "Which word completes the sentence? Enter the number of the word that completes the sentence.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The dog drinks water.",
    incorrectAnswerResponse: "Incorrect. The dog drinks water.",
    set: 48
    },

  1144:{
    question_tag: "L1LITLP48Q2",
   code: "1144",
   title: "Lit Q96",
   learner_question: "L#48 Code: 1144 The farmer has an ____. \r\n1. on \r\n2. ox \r\n3. odd",
    question: "Which word completes the sentence? Enter the number of the word that completes the sentence.",
    answer: "2",
    correctAnswerResponse: ":) Correct! The farmer has an ox.",
    incorrectAnswerResponse: "Incorrect. The farmer has an ox.",
    set: 48
    },

  1145:{
    question_tag: "L1LITLP49QG",
   code: "1145",
   title: "Lit Class Q49",
   learner_question: "L#49 Code: 1145 \r\n1. She is happy. \r\n2. She is happy? \r\n3. She is happy!",
    question: "Which sentence has an exclamation point? Enter the number of the sentence with an exclamation point.",
    answer: "3",
    correctAnswerResponse: ":) Correct! She is happy! Exclamation points show strong feelings.",
    incorrectAnswerResponse: "Incorrect. She is happy! Exclamation points show strong feelings.",
    set: 49
    },

  1146:{
    question_tag: "L1LITLP49Q1",
   code: "1146",
   title: "Lit Q97",
   learner_question: "L#49 Code: 1146 The food is very ___! \r\n1. farmer \r\n2. water \r\n3. good",
    question: "Which word best completes the sentence? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The food is very good!",
    incorrectAnswerResponse: "Incorrect. The food is very good!",
    set: 49
    },

  1147:{
    question_tag: "L1LITLP49Q2",
   code: "1147",
   title: "Lit Q98",
   learner_question: "L#49 Code: 1147 \r\n1. He is a good boy! \r\n2. He is a good boy? \r\n3. He is a good boy.",
    question: "Which sentence shows strong feelings? Enter the number of the sentence that shows strong feelings.",
    answer: "1",
    correctAnswerResponse: ":) Correct! He is a good boy! Exclamation points \'!\' show strong feelings.",
    incorrectAnswerResponse: "Incorrect. He is a good boy! Exclamation points \'!\' show strong feelings.",
    set: 49
    },

  1148:{
    question_tag: "L1LITLP50QG",
   code: "1148",
   title: "Lit Class Q50",
   learner_question: "L#50 Code: 1148 \r\n1. you \r\n2. U \r\n3. bun",
    question: "Which word has a short /u/ sound? Enter the number of the word with the short /u/ sound.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The short /u/ sound is the sound in bun, gun, fun, and run.",
    incorrectAnswerResponse: "Incorrect. The short /u/ sound is the sound in bun, gun, fun, and run.",
    set: 50
    },

  1149:{
    question_tag: "L1LITLP50Q1",
   code: "1149",
   title: "Lit Q99",
   learner_question: "L#50 Code: 1149 \r\n1. Jane is rude. \r\n2. Jane is rude? \r\n3. Jane is rude!",
    question: "Which sentence is a question?",
    answer: "2",
    correctAnswerResponse: ":) Correct! Jane is rude? We use \'?\' to ask questions.",
    incorrectAnswerResponse: "Incorrect. Jane is rude? We use \'?\' to ask questions.",
    set: 50
    },

  1150:{
    question_tag: "L1LITLP50Q2",
   code: "1150",
   title: "Lit Q100",
   learner_question: "L#50 Code: 1150 The cat is ___ the bed. \r\n1. under \r\n2. uncle \r\n3. up",
    question: "Which word completes the sentence? Enter the number of the word that best completes the sentence.",
    answer: "1",
    correctAnswerResponse: ":) Correct! The cat is under the bed.",
    incorrectAnswerResponse: "Incorrect. The cat is under the bed.",
    set: 50
    },

  1151:{
    question_tag: "L1LITLP51QG",
   code: "1151",
   title: "Lit Class Q51",
   learner_question: "L#51 Code: 1151 \r\n1. My wife will be here soon. \r\n2. My wife will have three sons. \r\n3. I wife and sons come here soon.",
    question: "Which sentence says, \"My wife will be here soon?\"",
    answer: "1",
    correctAnswerResponse: ":) Correct! My wife will be here soon.",
    incorrectAnswerResponse: "Incorrect. My wife will be here soon.",
    set: 51
    },

  1152:{
    question_tag: "L1LITLP51Q1",
   code: "1152",
   title: "Lit Q101",
   learner_question: "L#51 Code: 1152 \r\n1. bad \r\n2. bid \r\n3. bud",
    question: "Which word is \'bud? Bud. Enter the number of the correct answer. Bud.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Bud",
    incorrectAnswerResponse: "Incorrect. Bud",
    set: 51
    },

  1153:{
    question_tag: "L1LITLP51Q2",
   code: "1153",
   title: "Lit Q102",
   learner_question: "L#51 Code: 1153 \r\n1. Gat \r\n2. Get \r\n3. Gut",
    question: "Which word is \'gat\'? Gat. Enter the number of the correct answer. Gat.",
    answer: "1",
    correctAnswerResponse: ":) Correct! Gat",
    incorrectAnswerResponse: "Incorrect. Gat",
    set: 51
    },

  1154:{
    question_tag: "L1LITLP52QG",
   code: "1154",
   title: "Lit Class Q52",
   learner_question: "L#52 Code: 1154 \r\n1. Opening \r\n2. Astounding \r\n3. Upsetting",
    question: "Which word is \'upsetting\'? Upsetting. Choose the number of the correct answer. Upsetting.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Upsetting",
    incorrectAnswerResponse: "Incorrect. Upsetting",
    set: 52
    },

  1155:{
    question_tag: "L1LITLP52Q1",
   code: "1155",
   title: "Lit Q103",
   learner_question: "L#52 Code: 1155 \r\n1. The docks are Cam\'s home. \r\n2. The ducks come home. \r\n3. The dogs come here.",
    question: "Which sentence says, \"The ducks come home.\"",
    answer: "2",
    correctAnswerResponse: ":) Correct! The ducks come home.",
    incorrectAnswerResponse: "Incorrect. The ducks come home.",
    set: 52
    },

  1156:{
    question_tag: "L1LITLP52Q2",
   code: "1156",
   title: "Lit Q104",
   learner_question: "L#52 Code: 1156 \r\n1. bag \r\n2. beg \r\n3. bug",
    question: "Which word is \'bug\'? Bug. Enter the number of the correct answer. Bug.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Bug.",
    incorrectAnswerResponse: "Incorrect. Bug.",
    set: 52
    },

  1157:{
    question_tag: "L1LITLP53QG",
   code: "1157",
   title: "Lit Class Q53",
   learner_question: "L#53 Code: 1157 \r\n1. This home is under water. \r\n2. This farmer has good water. \r\n3. The wife is at the end of the farm.",
    question: "Which sentence says, \"This home is under water.\" Enter the number of the correct answer. This home is under water.",
    answer: "1",
    correctAnswerResponse: ":) Correct! This home is under water.",
    incorrectAnswerResponse: "Incorrect. This home is under water.",
    set: 53
    },

  1158:{
    question_tag: "L1LITLP53Q1",
   code: "1158",
   title: "Lit Q105",
   learner_question: "L#53 Code: 1158 \r\n1. a \r\n2. e \r\n3. u",
    question: "Which letter makes the /u/ sound? /uuuu/. Enter the number of the correct answer. /u/.",
    answer: "3",
    correctAnswerResponse: ":) Correct! The letter \'u\' makes the short /u/ sound heard in words like gun, fun, run, and hungry.",
    incorrectAnswerResponse: "Incorrect. The letter \'u\' makes the short /u/ sound heard in words like gun, fun, run, and hungry.",
    set: 53
    },

  1159:{
    question_tag: "L1LITLP53Q2",
   code: "1159",
   title: "Lit Q106",
   learner_question: "L#53 Code: 1159 \r\n1. Battermake \r\n2. Buttarmalk \r\n3. Buttermilk",
    question: "Which word is buttermilk? Buttermilk. Enter the number of the correct answer. Buttermilk.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Buttermilk.",
    incorrectAnswerResponse: "Incorrect. Buttermilk.",
    set: 53
    },

  1160:{
    question_tag: "L1LITLP54QG",
   code: "1160",
   title: "Lit Class Q54",
   learner_question: "L#54 Code: 1160 \r\n1. o \r\n2. e \r\n3. u",
    question: "I will say a word. Which letter makes the sound at the beginning of the word? Listen. Under. Under. What letter begins the word? Under.",
    answer: "3",
    correctAnswerResponse: ":) Correct! Under.",
    incorrectAnswerResponse: "Incorrect. Under.",
    set: 54
    },

  1161:{
    question_tag: "L1LITLP54Q1",
   code: "1161",
   title: "Lit Q107",
   learner_question: "L#54 Code: 1161 \r\n1. The dog is upset. \r\n2. The dog is upset! \r\n3. The dog is upset?",
    question: "Which sentence has an exclamation point? Enter the number of the sentence with an exclamation point.",
    answer: "2",
    correctAnswerResponse: ":) Correct! Exclamation points show strong feelings!",
    incorrectAnswerResponse: "Incorrect. Exclamation points show strong feelings!",
    set: 54
    },

  1162:{
    question_tag: "L1LITLP54Q2",
   code: "1162",
   title: "Lit Q108",
   learner_question: "L#54 Code: 1162 \r\n1. This cot is on the cat. \r\n2. The cat had a big cut. \r\n3. This cat is under the cot.",
    question: "Which sentence says, \"This cat is under the cot.\"",
    answer: "3",
    correctAnswerResponse: ":) Correct! This cat is under the cot.",
    incorrectAnswerResponse: "Incorrect. This cat is under the cot.",
    set: 54
    },

  2163:{
    question_tag: "L1MALP55QG",
   code: "2163",
   title: "Num Class Q1",
   learner_question: "\r\n1. 24 \r\n2. 60 \r\n3. 12",
    question: "How many minutes are in one hour? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) There are 60 minutes in 1 hour.",
    incorrectAnswerResponse: "Incorrect. There are 60 minutes in 1 hour.",
    set: 1
    },

  2164:{
    question_tag: "L1MALP55Q1",
   code: "2164",
   title: "Num Q1",
   learner_question: "24 hours = ? \r\n1. One hour \r\n2. One day \r\n3. One week",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) There are 24 hours in 1 day.",
    incorrectAnswerResponse: "Incorrect. There are 24 hours in 1 day.",
    set: 1
    },

  2165:{
    question_tag: "L1MALP55Q2",
   code: "2165",
   title: "Num Q2",
   learner_question: "60 minutes = ? \r\n1. One hour \r\n2. One day \r\n3. One week",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 60 minutes = 1 hour.",
    incorrectAnswerResponse: "Incorrect. 60 minutes = 1 hour.",
    set: 1
    },

  2166:{
    question_tag: "L1MALP56QG",
   code: "2166",
   title: "Num Class Q2",
   learner_question: "12:55 + 10 minutes= ? \r\n1. 12:65 \r\n2. 13:05 \r\n3. 1:05",
    question: "Jane goes to lunch at 12:55. She eats for 10 minutes. What time is it now?",
    answer: "3",
    correctAnswerResponse: "Correct! :) 10 minutes after 12:55 is 1:05. There are 60 minutes in 1 hour.",
    incorrectAnswerResponse: "Incorrect. 10 minutes after 12:55 is 1:05. There are 60 minutes in 1 hour.",
    set: 2
    },

  2167:{
    question_tag: "L1MALP56Q1",
   code: "2167",
   title: "Num Q3",
   learner_question: "1:50 + 20 minutes =? \r\n1. 1:70 \r\n2. 2:10 \r\n3. 2:20",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 20 minutes after 1:50 is 2:10.",
    incorrectAnswerResponse: "Incorrect. 20 minutes after 1:50 is 2:10.",
    set: 2
    },

  2168:{
    question_tag: "L1MALP56Q2",
   code: "2168",
   title: "Num Q4",
   learner_question: "3:10 + 24 minutes =? \r\n1. 3:34 \r\n2. 4:05 \r\n3. 5:50",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 24 minutes after 3:10 is 3:34.",
    incorrectAnswerResponse: "Incorrect. 24 minutes after 3:10 is 3:34.",
    set: 2
    },

  2169:{
    question_tag: "L1MALP57QG",
   code: "2169",
   title: "Num Class Q3",
   learner_question: "\r\n1. 7:00am \r\n2. 7:00pm \r\n3. 12:00am",
    question: "Which is a good time to eat breakfast? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 7:00am is a good time for breakfast.",
    incorrectAnswerResponse: "Incorrect. 7:00am is a good time for breakfast.",
    set: 3
    },

  2170:{
    question_tag: "L1MALP57Q1",
   code: "2170",
   title: "Num Q5",
   learner_question: "2:30 + 30 minutes =? \r\n1. 2:60 \r\n2. 3:30 \r\n3. 3:00",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 30 minutes after 2:30 is 3:00.",
    incorrectAnswerResponse: "Incorrect. 30 minutes after 2:30 is 3:00.",
    set: 3
    },

  2171:{
    question_tag: "L1MALP57Q2",
   code: "2171",
   title: "Num Q6",
   learner_question: "6:05 + 35 minutes =? \r\n1. 7:40 \r\n2. 41:05 \r\n3. 6:40",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 35 minutes after 6:05 is 6:40.",
    incorrectAnswerResponse: "Incorrect. 35 minutes after 6:05 is 6:40.",
    set: 3
    },

  2172:{
    question_tag: "L1MALP58QG",
   code: "2172",
   title: "Num Class Q4",
   learner_question: "\r\n1. 7:06 \r\n2. 7:50 \r\n3. 7:56",
    question: "Which time is 7:56? Enter the number that shows 7:56.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 7:56",
    incorrectAnswerResponse: "Incorrect. 7:56",
    set: 4
    },

  2173:{
    question_tag: "L1MALP58Q1",
   code: "2173",
   title: "Num Q7",
   learner_question: "2:30 + 2 hours =? \r\n1. 2:32 \r\n2. 4:30 \r\n3. 2:50",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2 hours after 2:30 is 4:30.",
    incorrectAnswerResponse: "Incorrect. 2 hours after 2:30 is 4:30.",
    set: 4
    },

  2174:{
    question_tag: "L1MALP58Q2",
   code: "2174",
   title: "Num Q8",
   learner_question: "6:05 + 60 minutes =? \r\n1. 7:05 \r\n2. 6:65 \r\n3. 12:05",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 60 minutes after 6:05 is 7:05.",
    incorrectAnswerResponse: "Incorrect. 60 minutes after 6:05 is 7:05.",
    set: 4
    },

  2175:{
    question_tag: "L1MALP59QG",
   code: "2175",
   title: "Num Class Q5",
   learner_question: "\r\n1. wake up \r\n2. eat breakfast \r\n3. go to sleep",
    question: "What do we do at 11:00pm? Enter the number of something good to do at 11:00pm.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 11:00 is late at night. It is a good time to sleep.",
    incorrectAnswerResponse: "Incorrect. 11:00 is late at night. It is a good time to sleep.",
    set: 5
    },

  2176:{
    question_tag: "L1MALP59Q1",
   code: "2176",
   title: "Num Q9",
   learner_question: "A good time to the market? \r\n1. 12:00am \r\n2. 8:00am \r\n3. 10:00pm",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 8am is a good time to go to the market.",
    incorrectAnswerResponse: "Incorrect. 8am is a good time to go to the market.",
    set: 5
    },

  2177:{
    question_tag: "L1MALP59Q2",
   code: "2177",
   title: "Num Q10",
   learner_question: "A good time to wake up? \r\n1. 7:00am \r\n2. 11:00am \r\n3. 9:00pm",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 7am is a good time to wake up.",
    incorrectAnswerResponse: "Incorrect. 7am is a good time to wake up.",
    set: 5
    },

  2178:{
    question_tag: "L1MALP60QG",
   code: "2178",
   title: "Num Class Q6",
   learner_question: "\r\n1. 1 month \r\n2. 1 year \r\n3. 1 hour",
    question: "What has 365 days? Enter the number of the correct answer. What has 365 days?",
    answer: "2",
    correctAnswerResponse: "Correct! :) 365 days = 1 year",
    incorrectAnswerResponse: "Incorrect. 365 days = 1 year",
    set: 6
    },

  2179:{
    question_tag: "L1MALP60Q1",
   code: "2179",
   title: "Num Q11",
   learner_question: "1 year = ? \r\n1. 12 months \r\n2. 60 months \r\n3. 365 months",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 year = 12 months",
    incorrectAnswerResponse: "Incorrect. 1 year = 12 months",
    set: 6
    },

  2180:{
    question_tag: "L1MALP60Q2",
   code: "2180",
   title: "Num Q12",
   learner_question: "November = ? Days \r\n1. 28 \r\n2. 30 \r\n3. 31",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) November has 30 days",
    incorrectAnswerResponse: "Incorrect. November has 30 days",
    set: 6
    },

  2181:{
    question_tag: "L1MALP61QG",
   code: "2181",
   title: "Num Class Q7",
   learner_question: "\r\n1. 364 \r\n2. 365 \r\n3. 366",
    question: "How many days are in a leap year? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) A leap year has one extra day. 366.",
    incorrectAnswerResponse: "Incorrect. A leap year has one extra day. 366.",
    set: 7
    },

  2182:{
    question_tag: "L1MALP61Q1",
   code: "2182",
   title: "Num Q13",
   learner_question: "1 week= ? Days \r\n1. 7 \r\n2. 12 \r\n3. 365",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 7 days = 1 week",
    incorrectAnswerResponse: "Incorrect. 7 days = 1 week",
    set: 7
    },

  2183:{
    question_tag: "L1MALP61Q2",
   code: "2183",
   title: "Num Q14",
   learner_question: "Which month has 28 days? \r\n1. December \r\n2. January \r\n3. February",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) February has 28 days in a normal year.",
    incorrectAnswerResponse: "Incorrect. February has 28 days in a normal year.",
    set: 7
    },

  2184:{
    question_tag: "L1MALP62QG",
   code: "2184",
   title: "Num Class Q8",
   learner_question: "\r\n1. 12 \r\n2. 100 \r\n3. 365",
    question: "How many years are in one century? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 100 years = 1 century",
    incorrectAnswerResponse: "Incorrect. 100 years = 1 century",
    set: 8
    },

  2185:{
    question_tag: "L1MALP62Q1",
   code: "2185",
   title: "Num Q15",
   learner_question: "1 minute= ? Seconds? \r\n1. 7 \r\n2. 12 \r\n3. 60",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 minute = 60 seconds",
    incorrectAnswerResponse: "Incorrect. 1 minute = 60 seconds",
    set: 8
    },

  2186:{
    question_tag: "L1MALP62Q2",
   code: "2186",
   title: "Num Q16",
   learner_question: "1 year= ? Weeks \r\n1. 12 \r\n2. 52 \r\n3. 365",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 year = 52 weeks.",
    incorrectAnswerResponse: "Incorrect. 1 year = 52 weeks.",
    set: 8
    },

  2187:{
    question_tag: "L1MALP63QG",
   code: "2187",
   title: "Num Class Q9",
   learner_question: "\r\n1. 12 months \r\n2. 24 months \r\n3. 36 months",
    question: "How many months are there in 3 years? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3 years X 12 months = 36 months.",
    incorrectAnswerResponse: "Incorrect. 3 years X 12 months = 36 months.",
    set: 9
    },

  2188:{
    question_tag: "L1MALP63Q1",
   code: "2188",
   title: "Num Q17",
   learner_question: "2 weeks = ? Days \r\n1. 7 days \r\n2. 10 days \r\n3. 14 days",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2 weeks x 7 days =14 days",
    incorrectAnswerResponse: "Incorrect. 2 weeks x 7 days =14 days",
    set: 9
    },

  2189:{
    question_tag: "L1MALP63Q2",
   code: "2189",
   title: "Num Q18",
   learner_question: "Monday, ____, Wednesday \r\n1. Tuesday \r\n2. Saturday \r\n3. Thursday",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Monday, Tuesday, Wednesday",
    incorrectAnswerResponse: "Incorrect. Monday, Tuesday, Wednesday",
    set: 9
    },

  2190:{
    question_tag: "L1MALP64QG",
   code: "2190",
   title: "Num Class Q10",
   learner_question: "\r\n1. feet \r\n2. inches \r\n3. miles",
    question: "Which is good for measuring a classroom? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Feet is a good unit for measuring a classroom.",
    incorrectAnswerResponse: "Incorrect. Feet is a good unit for measuring a classroom.",
    set: 10
    },

  2191:{
    question_tag: "L1MALP64Q1",
   code: "2191",
   title: "Num Q19",
   learner_question: "1 Foot ? 1 Inch \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 foot > 1 inch. Feet are bigger than inches.",
    incorrectAnswerResponse: "Incorrect. 1 foot > 1 inch. Feet are bigger than inches.",
    set: 10
    },

  2192:{
    question_tag: "L1MALP64Q2",
   code: "2192",
   title: "Num Q20",
   learner_question: "1 foot ? 1 yard \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 foot < 1 yard. Feet are smaller than yards.",
    incorrectAnswerResponse: "Incorrect. 1 foot < 1 yard. Feet are smaller than yards.",
    set: 10
    },

  2193:{
    question_tag: "L1MALP65QG",
   code: "2193",
   title: "Num Class Q11",
   learner_question: "\r\n1. feet \r\n2. inches \r\n3. miles",
    question: "Which is good for measuring a long road? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Long roads can be measured in miles.",
    incorrectAnswerResponse: "Incorrect. Long roads can be measured in miles.",
    set: 11
    },

  2194:{
    question_tag: "L1MALP65Q1",
   code: "2194",
   title: "Num Q21",
   learner_question: "1 foot = ? Inches? \r\n1. 1 \r\n2. 10 \r\n3. 12",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 foot = 12 inches",
    incorrectAnswerResponse: "Incorrect. 1 foot = 12 inches",
    set: 11
    },

  2195:{
    question_tag: "L1MALP65Q2",
   code: "2195",
   title: "Num Q22",
   learner_question: "24 inches = ? Feet \r\n1. 1 foot \r\n2. 2 feet \r\n3. 48 feet",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 24 inches = 2 feet",
    incorrectAnswerResponse: "Incorrect. 24 inches = 2 feet",
    set: 11
    },

  2196:{
    question_tag: "L1MALP66QG",
   code: "2196",
   title: "Num Class Q12",
   learner_question: "\r\n1. yd \r\n2. in \r\n3. ft",
    question: "What is the short way to write yard? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) yard = yd",
    incorrectAnswerResponse: "Incorrect. yard = yd",
    set: 12
    },

  2197:{
    question_tag: "L1MALP66Q1",
   code: "2197",
   title: "Num Q23",
   learner_question: "1 yard = ? feet \r\n1. 3 \r\n2. 10 \r\n3. 12",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 yard = 3 feet",
    incorrectAnswerResponse: "Incorrect. 1 yard = 3 feet",
    set: 12
    },

  2198:{
    question_tag: "L1MALP66Q2",
   code: "2198",
   title: "Num Q24",
   learner_question: "2 feet = ? Inches \r\n1. 12 \r\n2. 14 \r\n3. 24",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2 feet = 24 inches",
    incorrectAnswerResponse: "Incorrect. 2 feet = 24 inches",
    set: 12
    },

  2199:{
    question_tag: "L1MALP67QG",
   code: "2199",
   title: "Num Class Q13",
   learner_question: "\r\n1. 12/12 \r\n2. 1/7 \r\n3. 1/12",
    question: "What fraction of a foot is one inch? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 inch is 1/12 of a foot because there are 12 inches in 1 foot.",
    incorrectAnswerResponse: "Incorrect. 1 inch is 1/12 of a foot because there are 12 inches in 1 foot.",
    set: 13
    },

  2200:{
    question_tag: "L1MALP67Q1",
   code: "2200",
   title: "Num Q25",
   learner_question: "1 foot = ? Yards \r\n1. 1/2 \r\n2. 1/3 \r\n3. 1/12",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 foot =1/3 of a yard because there are 3 feet in 1 yard.",
    incorrectAnswerResponse: "Incorrect. 1 foot =1/3 of a yard because there are 3 feet in 1 yard.",
    set: 13
    },

  2201:{
    question_tag: "L1MALP67Q2",
   code: "2201",
   title: "Num Q26",
   learner_question: "6 inches = ? Feet \r\n1. 1/2 \r\n2. 1/6 \r\n3. 1/12",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 6 inches =6/12 =1/2 foot",
    incorrectAnswerResponse: "Incorrect. 6 inches =6/12 =1/2 foot",
    set: 13
    },

  2202:{
    question_tag: "L1MALP68QG",
   code: "2202",
   title: "Num Class Q14 ",
   learner_question: "\r\n1. 12 inches \r\n2. 12 and 1/2 inches \r\n3. 18 inches",
    question: "How many inches are in 1 and 1/2 feet? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 1/2 feet = 12 inches +6 inches= 18 inches.",
    incorrectAnswerResponse: "Incorrect. 1 1/2 feet = 12 inches +6 inches= 18 inches.",
    set: 14
    },

  2203:{
    question_tag: "L1MALP68Q1",
   code: "2203",
   title: "Num Q27",
   learner_question: "2\'10\"=? \r\n1. 210 inches \r\n2. 2 inches 10 feet \r\n3. 2 feet 10 inches",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2\'10\" = 2 feet 10 inches",
    incorrectAnswerResponse: "Incorrect. 2\'10\" = 2 feet 10 inches",
    set: 14
    },

  2204:{
    question_tag: "L1MALP68Q2",
   code: "2204",
   title: "Num Q28",
   learner_question: "3 (1/2) feet = ? Inches \r\n1. 12 \r\n2. 36 \r\n3. 42",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3 feet x 12 inches + 6 inches = 42 inches",
    incorrectAnswerResponse: "Incorrect. 3 feet x 12 inches + 6 inches = 42 inches",
    set: 14
    },

  2205:{
    question_tag: "L1MALP69QG",
   code: "2205",
   title: "Num Class Q15",
   learner_question: "(1/2) inch ? (1/3) inch \r\n1. < \r\n2. > \r\n3. =",
    question: "Which is bigger 1/2 inch or 1/3 inch? Enter the number of the correct symbol.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1/2 inch is bigger than 1/3 inch",
    incorrectAnswerResponse: "Incorrect. 1/2 inch is bigger than 1/3 inch",
    set: 15
    },

  2206:{
    question_tag: "L1MALP69Q1",
   code: "2206",
   title: "Num Q29",
   learner_question: "(1/4) inch ? (1/3) inch \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1/4 < 1/3",
    incorrectAnswerResponse: "Incorrect. 1/4 < 1/3",
    set: 15
    },

  2207:{
    question_tag: "L1MALP69Q2",
   code: "2207",
   title: "Num Q30",
   learner_question: "(1/2) inch ? (6/12) inch \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1/2 = 6/12",
    incorrectAnswerResponse: "Incorrect. 1/2 = 6/12",
    set: 15
    },

  2208:{
    question_tag: "L1MALP70QG",
   code: "2208",
   title: "Num Class Q16",
   learner_question: "\r\n1. 7 days \r\n2. 10 days \r\n3. 14 days",
    question: "How many days are there in two weeks? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 week = 7 days. 2 weeks = 14 days.",
    incorrectAnswerResponse: "Incorrect. 1 week = 7 days. 2 weeks = 14 days.",
    set: 16
    },

  2209:{
    question_tag: "L1MALP70Q1",
   code: "2209",
   title: "Num Q31",
   learner_question: "1 year = ? Days \r\n1. 365 \r\n2. 12 \r\n3. 52",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 year = 365 days",
    incorrectAnswerResponse: "Incorrect. 1 year = 365 days",
    set: 16
    },

  2210:{
    question_tag: "L1MALP70Q2",
   code: "2210",
   title: "Num Q32",
   learner_question: "3 yards = ? Feet \r\n1. 1 foot \r\n2. 3 feet \r\n3. 9 feet",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 yard = 3 feet. 3 yards = 9 feet.",
    incorrectAnswerResponse: "Incorrect. 1 yard = 3 feet. 3 yards = 9 feet.",
    set: 16
    },

  2211:{
    question_tag: "L1MALP71QG",
   code: "2211",
   title: "Num Class Q17",
   learner_question: "\r\n1. 12 inches \r\n2. 12 feet \r\n3. 12 miles",
    question: "About how long is a car? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 12 feet is a good estimate of a car\'s length.",
    incorrectAnswerResponse: "Incorrect. 12 feet is a good estimate of a car\'s length.",
    set: 17
    },

  2212:{
    question_tag: "L1MALP71Q1",
   code: "2212",
   title: "Num Q33",
   learner_question: "a door \r\n1. 8 inches \r\n2. 80 inches \r\n3. 800 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 80 inches is a good estimate for a door.",
    incorrectAnswerResponse: "Incorrect. 80 inches is a good estimate for a door.",
    set: 17
    },

  2213:{
    question_tag: "L1MALP71Q2",
   code: "2213",
   title: "Num Q34",
   learner_question: "a book \r\n1. 12 inches \r\n2. 120 inches \r\n3. 3 feet",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 12 inches is a good estimate for a book.",
    incorrectAnswerResponse: "Incorrect. 12 inches is a good estimate for a book.",
    set: 17
    },

  2214:{
    question_tag: "L1MALP72QG",
   code: "2214",
   title: "Num Class Q18",
   learner_question: "\r\n1. 98.6 \r\n2. 0 \r\n3. 3\r\n2.5",
    question: "What is the temperature of a healthy person in Fahrenheit? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Most healthy people have a temperature of 98.6 degrees Fahrenheit.",
    incorrectAnswerResponse: "Incorrect. Most healthy people have a temperature of 98.6 degrees Fahrenheit.",
    set: 18
    },

  2215:{
    question_tag: "L1MALP72Q1",
   code: "2215",
   title: "Num Q35",
   learner_question: "100 F = ? \r\n1. 100 Fahrenheit \r\n2. 100 Feet \r\n3. 100 Fractions",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 100F= 100 degree Fahrenheit.",
    incorrectAnswerResponse: "Incorrect. 100F= 100 degree Fahrenheit.",
    set: 18
    },

  2216:{
    question_tag: "L1MALP72Q2",
   code: "2216",
   title: "Num Q36",
   learner_question: "Is 35F hot or cold? \r\n1. hot \r\n2. cold",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 35F is cold. Water is ice at 32F.",
    incorrectAnswerResponse: "Incorrect. 35F is cold. Water is ice at 32F.",
    set: 18
    },

  2217:{
    question_tag: "L1MALP73QG",
   code: "2217",
   title: "Num Class Q19",
   learner_question: "\r\n1. feet \r\n2. months \r\n3. degrees",
    question: "What unit do we use to measure the temperature? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) We measure heat in degrees.",
    incorrectAnswerResponse: "Incorrect. We measure heat in degrees.",
    set: 19
    },

  2218:{
    question_tag: "L1MALP73Q1",
   code: "2218",
   title: "Num Q37",
   learner_question: "10, 20 __, 40, 50 \r\n1. 21 \r\n2. 30 \r\n3. 60",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 10, 20, 30, 40, 50",
    incorrectAnswerResponse: "Incorrect. 10, 20, 30, 40, 50",
    set: 19
    },

  2219:{
    question_tag: "L1MALP73Q2",
   code: "2219",
   title: "Num Q38",
   learner_question: "5, 10, __, 20, \r\n1. 5 \r\n2. 15 \r\n3. 25",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 5,10, 15, 20",
    incorrectAnswerResponse: "Incorrect. 5,10, 15, 20",
    set: 19
    },

  2220:{
    question_tag: "L1MALP74QG",
   code: "2220",
   title: "Num Class Q20",
   learner_question: "\r\n1. degrees \r\n2. miles \r\n3. pounds",
    question: "What unit do we use to measure weight? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Pounds is a measure of weight.",
    incorrectAnswerResponse: "Incorrect. Pounds is a measure of weight.",
    set: 20
    },

  2221:{
    question_tag: "L1MALP74Q1",
   code: "2221",
   title: "Num Q39",
   learner_question: "1 pound = ? \r\n1. 1lb \r\n2. 1 kg \r\n3. 1 F",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The short form of \'pound\' is \'lb\'.",
    incorrectAnswerResponse: "Incorrect. The short form of \'pound\' is \'lb\'.",
    set: 20
    },

  2222:{
    question_tag: "L1MALP74Q2",
   code: "2222",
   title: "Num Q40",
   learner_question: "1 pound ? 1 kg \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 pound < 1 kg. 1 pound = 2.2 kg.",
    incorrectAnswerResponse: "Incorrect. 1 pound < 1 kg. 1 pound = 2.2 kg.",
    set: 20
    },

  2223:{
    question_tag: "L1MALP75QG",
   code: "2223",
   title: "Num Class Q21",
   learner_question: "\r\n1. weight \r\n2. temperature \r\n3. volume",
    question: "What measure do we use for liquids? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) We measure liquids by volume.",
    incorrectAnswerResponse: "Incorrect. We measure liquids by volume.",
    set: 21
    },

  2224:{
    question_tag: "L1MALP75Q1",
   code: "2224",
   title: "Num Q41",
   learner_question: "1 Gallon ? 1 Quart \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 gallon is more than 1 quart. 1 gallon = 4 quarts.",
    incorrectAnswerResponse: "Incorrect. 1 gallon is more than 1 quart. 1 gallon = 4 quarts.",
    set: 21
    },

  2225:{
    question_tag: "L1MALP75Q2",
   code: "2225",
   title: "Num Q42",
   learner_question: "1 pint ? 1 quart \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1 pint is less than 1 quart. 1 quart = 2 pints",
    incorrectAnswerResponse: "Incorrect. 1 pint is less than 1 quart. 1 quart = 2 pints",
    set: 21
    },

  2226:{
    question_tag: "L1MALP76QG",
   code: "2226",
   title: "Num Class Q22",
   learner_question: "\r\n1. 1 gallon \r\n2. 1 cup \r\n3. 1 quart",
    question: "How much water should a person drink every hour? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) People should try to drink 1 cup of water every hour.",
    incorrectAnswerResponse: "Incorrect. People should try to drink 1 cup of water every hour.",
    set: 22
    },

  2227:{
    question_tag: "L1MALP76Q1",
   code: "2227",
   title: "Num Q43",
   learner_question: "1 Gallon ? 4 Quarts \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 gallon equals 4 quarts",
    incorrectAnswerResponse: "Incorrect. 1 gallon equals 4 quarts",
    set: 22
    },

  2228:{
    question_tag: "L1MALP76Q2",
   code: "2228",
   title: "Num Q44",
   learner_question: "1 pint ? 1 cup \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A pint is more than a cup. 2 cups = 1 pint.",
    incorrectAnswerResponse: "Incorrect. A pint is more than a cup. 2 cups = 1 pint.",
    set: 22
    },

  2229:{
    question_tag: "L1MALP77QG",
   code: "2229",
   title: "Num Class Q23",
   learner_question: "\r\n1. gallon \r\n2. pound \r\n3. hour",
    question: "Which is used to measure volume? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Volume is used to measure liquids. Gallon is a measure of volume.",
    incorrectAnswerResponse: "Incorrect. Volume is used to measure liquids. Gallon is a measure of volume.",
    set: 23
    },

  2230:{
    question_tag: "L1MALP77Q1",
   code: "2230",
   title: "Num Q45",
   learner_question: "6 months ? 1 year \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) There are 12 months in a year. 6 months is less than a year.",
    incorrectAnswerResponse: "Incorrect. There are 12 months in a year. 6 months is less than a year.",
    set: 23
    },

  2231:{
    question_tag: "L1MALP77Q2",
   code: "2231",
   title: "Num Q46",
   learner_question: "1 foot ? 13 inches \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) There are 12 inches in a foot. 13 inches is more than a foot.",
    incorrectAnswerResponse: "Incorrect. There are 12 inches in a foot. 13 inches is more than a foot.",
    set: 23
    },

  2232:{
    question_tag: "L1MALP78QG",
   code: "2232",
   title: "Num Class Q24",
   learner_question: "\r\n1. August \r\n2. October \r\n3. July",
    question: "Which month comes after June? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) June, July, August, September",
    incorrectAnswerResponse: "Incorrect. June, July, August, September",
    set: 24
    },

  2233:{
    question_tag: "L1MALP78Q1",
   code: "2233",
   title: "Num Q47",
   learner_question: "4 yards = ? Feet \r\n1. 3 \r\n2. 10 \r\n3. 12",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 yard is 3 feet. 4 yards is 12 feet.",
    incorrectAnswerResponse: "Incorrect. 1 yard is 3 feet. 4 yards is 12 feet.",
    set: 24
    },

  2234:{
    question_tag: "L1MALP78Q2",
   code: "2234",
   title: "Num Q48",
   learner_question: "21 days ? 3 weeks \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 week = 7 days. 3 weeks = 21 days.",
    incorrectAnswerResponse: "Incorrect. 1 week = 7 days. 3 weeks = 21 days.",
    set: 24
    },

  2235:{
    question_tag: "L1MALP79QG",
   code: "2235",
   title: "Num Class Q25",
   learner_question: "\r\n1. Point \r\n2. Triangle \r\n3. Rectangle",
    question: "Which shape has 3 sides? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A triangle has 3 sides.",
    incorrectAnswerResponse: "Incorrect. A triangle has 3 sides.",
    set: 25
    },

  2236:{
    question_tag: "L1MALP79Q1",
   code: "2236",
   title: "Num Q49",
   learner_question: "Letter \"L\" looks like an? \r\n1. angle \r\n2. triangle \r\n3. rectangle",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Letter \'L\' looks like an angle.",
    incorrectAnswerResponse: "Incorrect. Letter \'L\' looks like an angle.",
    set: 25
    },

  2237:{
    question_tag: "L1MALP79Q2",
   code: "2237",
   title: "Num Q50",
   learner_question: "How many sides does a triangle have? \r\n1. 2 \r\n2. 3 \r\n3. 4",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A triangle has 3 sides.",
    incorrectAnswerResponse: "Incorrect. A triangle has 3 sides.",
    set: 25
    },

  2238:{
    question_tag: "L1MALP80QG",
   code: "2238",
   title: "Num Class Q26",
   learner_question: "\r\n1. Circle \r\n2. Triangle \r\n3. Square",
    question: "What shape is a dinner plate? Enter the number fo the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Most dinner plates are circles.",
    incorrectAnswerResponse: "Incorrect. Most dinner plates are circles.",
    set: 26
    },

  2239:{
    question_tag: "L1MALP80Q1",
   code: "2239",
   title: "Num Q51",
   learner_question: "What shape is a book? \r\n1. circle \r\n2. triangle \r\n3. rectangle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Most books are rectangles.",
    incorrectAnswerResponse: "Incorrect. Most books are rectangles.",
    set: 26
    },

  2240:{
    question_tag: "L1MALP80Q2",
   code: "2240",
   title: "Num Q52",
   learner_question: "What shape is the Sun? \r\n1. Circle \r\n2. Triangle \r\n3. Rectangle",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The Sun is a circle in the sky.",
    incorrectAnswerResponse: "Incorrect. The Sun is a circle in the sky.",
    set: 26
    },

  2241:{
    question_tag: "L1MALP81QG",
   code: "2241",
   title: "Num Class Q27",
   learner_question: "\r\n1. 5 \r\n2. 4 \r\n3. 3",
    question: "How many sides does a rectangle have? Enter the correct number.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A rectangle has 4 sides",
    incorrectAnswerResponse: "Incorrect. A rectangle has 4 sides",
    set: 27
    },

  2242:{
    question_tag: "L1MALP81Q1",
   code: "2242",
   title: "Num Q53",
   learner_question: "What shape is letter \'O\'? \r\n1. triangle \r\n2. circle \r\n3. rectangle",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Letter \'o\' is a circle.",
    incorrectAnswerResponse: "Incorrect. Letter \'o\' is a circle.",
    set: 27
    },

  2243:{
    question_tag: "L1MALP81Q2",
   code: "2243",
   title: "Num Q54",
   learner_question: "What shape is a box? \r\n1. triangle \r\n2. circle \r\n3. rectangle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Most boxes are rectangles.",
    incorrectAnswerResponse: "Incorrect. Most boxes are rectangles.",
    set: 27
    },

  2244:{
    question_tag: "L1MALP82QG",
   code: "2244",
   title: "Num Class Q28",
   learner_question: "\r\n1. a house \r\n2. a circle \r\n3. a map",
    question: "What did we draw today? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Today we drew a map of the classroom.",
    incorrectAnswerResponse: "Incorrect. Today we drew a map of the classroom.",
    set: 28
    },

  2245:{
    question_tag: "L1MALP82Q1",
   code: "2245",
   title: "Num Q55",
   learner_question: "What shape is a door? \r\n1. triangle \r\n2. circle \r\n3. rectangle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A door is a rectangle.",
    incorrectAnswerResponse: "Incorrect. A door is a rectangle.",
    set: 28
    },

  2246:{
    question_tag: "L1MALP82Q2",
   code: "2246",
   title: "Num Q56",
   learner_question: "What shape is a ring? \r\n1. triangle \r\n2. circle \r\n3. rectangle",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A ring is a circle.",
    incorrectAnswerResponse: "Incorrect. A ring is a circle.",
    set: 28
    },

  2247:{
    question_tag: "L1MALP83QG",
   code: "2247",
   title: "Num Class Q29",
   learner_question: "\r\n1. a classroom \r\n2. a neighborhood \r\n3. a country",
    question: "What did we draw a map of today? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Today we drew a map of a neighborhood.",
    incorrectAnswerResponse: "Incorrect. Today we drew a map of a neighborhood.",
    set: 29
    },

  2248:{
    question_tag: "L1MALP83Q1",
   code: "2248",
   title: "Num Q57",
   learner_question: "2 yards = ? Feet \r\n1. 6 \r\n2. 9 \r\n3. 12",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 yards = 6 feet",
    incorrectAnswerResponse: "Incorrect. 2 yards = 6 feet",
    set: 29
    },

  2249:{
    question_tag: "L1MALP83Q2",
   code: "2249",
   title: "Num Q58",
   learner_question: "2 years = ? months \r\n1. 12 \r\n2. 16 \r\n3. 24",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2 years = 24 months",
    incorrectAnswerResponse: "Incorrect. 2 years = 24 months",
    set: 29
    },

  2250:{
    question_tag: "L1MALP84QG",
   code: "2250",
   title: "Num Class Q30",
   learner_question: "Left on a map? \r\n1. East \r\n2. West \r\n3. South",
    question: "On a map, which direction is left?",
    answer: "2",
    correctAnswerResponse: "Correct! :) On a map, left is West.",
    incorrectAnswerResponse: "Incorrect. On a map, left is West.",
    set: 30
    },

  2251:{
    question_tag: "L1MALP84Q1",
   code: "2251",
   title: "Num Q59",
   learner_question: "Right on a map? \r\n1. East \r\n2. West \r\n3. South",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) On a map, right is East.",
    incorrectAnswerResponse: "Incorrect. On a map, right is East.",
    set: 30
    },

  2252:{
    question_tag: "L1MALP84Q2",
   code: "2252",
   title: "Num Q60",
   learner_question: "Down on a map? \r\n1. East \r\n2. North \r\n3. South",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) On a map, down is South.",
    incorrectAnswerResponse: "Incorrect. On a map, down is South.",
    set: 30
    },

  2253:{
    question_tag: "L1MALP85QG",
   code: "2253",
   title: "Num Class Q31",
   learner_question: "North of Liberia? \r\n1. Sierra Leone \r\n2. Guinea \r\n3. Cote D\' Ivoire",
    question: "What country is North of Liberia? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Guinea is north of Liberia. On a map, north is up.",
    incorrectAnswerResponse: "Incorrect. Guinea is north of Liberia. On a map, north is up.",
    set: 31
    },

  2254:{
    question_tag: "L1MALP85Q1",
   code: "2254",
   title: "Num Q61",
   learner_question: "West of Liberia? \r\n1. Sierra Leone \r\n2. Guinea \r\n3. Cote D\' Ivoire",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Sierra Leone is West of Liberia. On a map, west is left.",
    incorrectAnswerResponse: "Incorrect. Sierra Leone is West of Liberia. On a map, west is left.",
    set: 31
    },

  2255:{
    question_tag: "L1MALP85Q2",
   code: "2255",
   title: "Num Q62",
   learner_question: "East of Liberia? \r\n1. Sierra Leone \r\n2. Guinea \r\n3. Cote D\' Ivoire",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Cote D\' Ivoire is east of Liberia. On a map, east is right.",
    incorrectAnswerResponse: "Incorrect. Cote D\' Ivoire is east of Liberia. On a map, east is right.",
    set: 31
    },

  2256:{
    question_tag: "L1MALP86QG",
   code: "2256",
   title: "Num Class Q32",
   learner_question: "\r\n1. Our country \r\n2. Our classroom \r\n3. Our community",
    question: "What did we make a map of today? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Today we made a map of our community.",
    incorrectAnswerResponse: "Incorrect. Today we made a map of our community.",
    set: 32
    },

  2257:{
    question_tag: "L1MALP86Q1",
   code: "2257",
   title: "Num Q63",
   learner_question: "Right on a map? \r\n1. East \r\n2. West \r\n3. South",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) On a map, right is East.",
    incorrectAnswerResponse: "Incorrect. On a map, right is East.",
    set: 32
    },

  2258:{
    question_tag: "L1MALP86Q2",
   code: "2258",
   title: "Num Q64",
   learner_question: "Up on a map? \r\n1. East \r\n2. North \r\n3. South",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) On a map, up is North.",
    incorrectAnswerResponse: "Incorrect. On a map, up is North.",
    set: 32
    },

  2259:{
    question_tag: "L1MALP87QG",
   code: "2259",
   title: "Num Class Q33",
   learner_question: "\r\n1. Roads \r\n2. Schools \r\n3. People",
    question: "Which is NOT shown on a map of the community? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) We do not include people in maps.",
    incorrectAnswerResponse: "Incorrect. We do not include people in maps.",
    set: 33
    },

  2260:{
    question_tag: "L1MALP87Q1",
   code: "2260",
   title: "Num Q65",
   learner_question: "1 inch ? 1 foot \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) An inch is smaller than a foot.",
    incorrectAnswerResponse: "Incorrect. An inch is smaller than a foot.",
    set: 33
    },

  2261:{
    question_tag: "L1MALP87Q2",
   code: "2261",
   title: "Num Q66",
   learner_question: "1 quart ? 1 pint \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A quart is bigger than a pint.",
    incorrectAnswerResponse: "Incorrect. A quart is bigger than a pint.",
    set: 33
    },

  2262:{
    question_tag: "L1MALP88QG",
   code: "2262",
   title: "Num Class Q34",
   learner_question: "\r\n1. Oceans \r\n2. Cities \r\n3. Houses",
    question: "Which is NOT shown on a map of a country? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Country maps are too big to show houses.",
    incorrectAnswerResponse: "Incorrect. Country maps are too big to show houses.",
    set: 34
    },

  2263:{
    question_tag: "L1MALP88Q1",
   code: "2263",
   title: "Num Q67",
   learner_question: "Left on a map? \r\n1. East \r\n2. West \r\n3. South",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) On a map, left is West.",
    incorrectAnswerResponse: "Incorrect. On a map, left is West.",
    set: 34
    },

  2264:{
    question_tag: "L1MALP88Q2",
   code: "2264",
   title: "Num Q68",
   learner_question: "What shape is a TV? \r\n1. Circle \r\n2. Triangle \r\n3. Rectangle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A TV is a rectangle.",
    incorrectAnswerResponse: "Incorrect. A TV is a rectangle.",
    set: 34
    },

  2265:{
    question_tag: "L1MALP89QG",
   code: "2265",
   title: "Num Class Q35",
   learner_question: "\r\n1. 0 \r\n2. 2 \r\n3. 3",
    question: "How many angles does a circle have? Enter the number of angles.",
    answer: "1",
    correctAnswerResponse: "Correct! :) A circle has 0 angles.",
    incorrectAnswerResponse: "Incorrect. A circle has 0 angles.",
    set: 35
    },

  2266:{
    question_tag: "L1MALP89Q1",
   code: "2266",
   title: "Num Q69",
   learner_question: "1 quart ? 2 pints \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) There are 2 pints in 1 quart.",
    incorrectAnswerResponse: "Incorrect. There are 2 pints in 1 quart.",
    set: 35
    },

  2267:{
    question_tag: "L1MALP89Q2",
   code: "2267",
   title: "Num Q70",
   learner_question: "15 months ? 1 year \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) There are 12 months in a year. 15 months is more than a year.",
    incorrectAnswerResponse: "Incorrect. There are 12 months in a year. 15 months is more than a year.",
    set: 35
    },

  2268:{
    question_tag: "L1MALP90QG",
   code: "2268",
   title: "Num Class Q36",
   learner_question: "\r\n1. 3/4 \r\n2. 6/12 \r\n3. 1/3",
    question: "Which fraction is equal to one half? Enter the number of the fraction equal to one half.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1/2 = 6/12",
    incorrectAnswerResponse: "Incorrect. 1/2 = 6/12",
    set: 36
    },

  2269:{
    question_tag: "L1MALP90Q1",
   code: "2269",
   title: "Num Q71",
   learner_question: "1/2 ? 5/8 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1/2 is less than 5/8",
    incorrectAnswerResponse: "Incorrect. 1/2 is less than 5/8",
    set: 36
    },

  2270:{
    question_tag: "L1MALP90Q2",
   code: "2270",
   title: "Num Q72",
   learner_question: "1/5 ? 1/4 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1/5 is less than 1/4",
    incorrectAnswerResponse: "Incorrect. 1/5 is less than 1/4",
    set: 36
    },

  2271:{
    question_tag: "L1MALP91QG",
   code: "2271",
   title: "Num Class Q37",
   learner_question: "\r\n1. 1/2 \r\n2. 3/4 \r\n3. 1/4",
    question: "If 3/4 of the class are men, what fraction are women? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) If 3/4 are men, the remaining 1/4 are women.",
    incorrectAnswerResponse: "Incorrect. If 3/4 are men, the remaining 1/4 are women.",
    set: 37
    },

  2272:{
    question_tag: "L1MALP91Q1",
   code: "2272",
   title: "Num Q73",
   learner_question: "2/4 ? 1/2 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2/4 = 1/2",
    incorrectAnswerResponse: "Incorrect. 2/4 = 1/2",
    set: 37
    },

  2273:{
    question_tag: "L1MALP91Q2",
   code: "2273",
   title: "Num Q74",
   learner_question: "2/3 ? 2/6 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2/3 is more than 2/6",
    incorrectAnswerResponse: "Incorrect. 2/3 is more than 2/6",
    set: 37
    },

  2274:{
    question_tag: "L1MALP92QG",
   code: "2274",
   title: "Num Class Q38",
   learner_question: "\r\n1. 1/7 \r\n2. 7/10 \r\n3. 7/100",
    question: "Which fraction is equal to 7%? Enter the number of the fraction equal to 7%.",
    answer: "3",
    correctAnswerResponse: "Correct! :) %= /100. 7/100 = 7%",
    incorrectAnswerResponse: "Incorrect. %= /100. 7/100 = 7%",
    set: 38
    },

  2275:{
    question_tag: "L1MALP92Q1",
   code: "2275",
   title: "Num Q75",
   learner_question: "18% = ? \r\n1. 1/18 \r\n2. 18/100 \r\n3. 1/8",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) %= /100. 18/100 = 18%",
    incorrectAnswerResponse: "Incorrect. %= /100. 18/100 = 18%",
    set: 38
    },

  2276:{
    question_tag: "L1MALP92Q2",
   code: "2276",
   title: "Num Q76",
   learner_question: "78% = ? \r\n1. 78/100 \r\n2. 7/8 \r\n3. 100/78",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) %= /100. 78/100 = 78%",
    incorrectAnswerResponse: "Incorrect. %= /100. 78/100 = 78%",
    set: 38
    },

  2277:{
    question_tag: "L1MALP93QG",
   code: "2277",
   title: "Num Class Q39",
   learner_question: "\r\n1. 25% \r\n2. 100% \r\n3. 50%",
    question: "Which is equal to half? Enter the number of the answer equal to half.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1/2 = 50% = half",
    incorrectAnswerResponse: "Incorrect. 1/2 = 50% = half",
    set: 39
    },

  2278:{
    question_tag: "L1MALP93Q1",
   code: "2278",
   title: "Num Q77",
   learner_question: "3/4 = ? \r\n1. 25% \r\n2. 75% \r\n3. 100%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3/4 = 75%",
    incorrectAnswerResponse: "Incorrect. 3/4 = 75%",
    set: 39
    },

  2279:{
    question_tag: "L1MALP93Q2",
   code: "2279",
   title: "Num Q78",
   learner_question: "1/4 = ? \r\n1. 4% \r\n2. 25% \r\n3. 40%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1/4 = 25%",
    incorrectAnswerResponse: "Incorrect. 1/4 = 25%",
    set: 39
    },

  2280:{
    question_tag: "L1MALP94QG",
   code: "2280",
   title: "Num Class Q40",
   learner_question: "\r\n1. 25% \r\n2. 50% \r\n3. 75%",
    question: "If 75% of people like rice, what % of people do not like rice? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 100%- 75% = 25%",
    incorrectAnswerResponse: "Incorrect. 100%- 75% = 25%",
    set: 40
    },

  2281:{
    question_tag: "L1MALP94Q1",
   code: "2281",
   title: "Num Q79",
   learner_question: "3/4 ? 50% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3/4 is more than half. 3/4=75%",
    incorrectAnswerResponse: "Incorrect. 3/4 is more than half. 3/4=75%",
    set: 40
    },

  2282:{
    question_tag: "L1MALP94Q2",
   code: "2282",
   title: "Num Q80",
   learner_question: "10% = ? \r\n1. 1/10 \r\n2. 1/100 \r\n3. 10/10",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 10% =1/10",
    incorrectAnswerResponse: "Incorrect. 10% =1/10",
    set: 40
    },

  2283:{
    question_tag: "L1MALP95QG",
   code: "2283",
   title: "Num Class Q41",
   learner_question: "\r\n1. 1/2 \r\n2. 5/100 \r\n3. 1/50",
    question: "If half the class is women, what fraction are men? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 100%-50%=50%=1/2",
    incorrectAnswerResponse: "Incorrect. 100%-50%=50%=1/2",
    set: 41
    },

  2284:{
    question_tag: "L1MALP95Q1",
   code: "2284",
   title: "Num Q81",
   learner_question: "99/100 ? 80% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 99/100= 99%. 99%>80%.",
    incorrectAnswerResponse: "Incorrect. 99/100= 99%. 99%>80%.",
    set: 41
    },

  2285:{
    question_tag: "L1MALP95Q2",
   code: "2285",
   title: "Num Q82",
   learner_question: "100% = ? \r\n1. 1/10 \r\n2. 1/100 \r\n3. 10/10",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 100% =10/10=100/100",
    incorrectAnswerResponse: "Incorrect. 100% =10/10=100/100",
    set: 41
    },

  2286:{
    question_tag: "L1MALP96QG",
   code: "2286",
   title: "Num Class Q42",
   learner_question: "\r\n1. Left \r\n2. Middle \r\n3. Right",
    question: "Where do people who fit both categories go in a Venn diagram? On the left, in the middle or on the right? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) The middle of a Venn Diagram is for people in BOTH categories.",
    incorrectAnswerResponse: "Incorrect. The middle of a Venn Diagram is for people in BOTH categories.",
    set: 42
    },

  2287:{
    question_tag: "L1MALP96Q1",
   code: "2287",
   title: "Num Q83",
   learner_question: "Right on a map? \r\n1. East \r\n2. West \r\n3. South",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) On a map, right is East.",
    incorrectAnswerResponse: "Incorrect. On a map, right is East.",
    set: 42
    },

  2288:{
    question_tag: "L1MALP96Q2",
   code: "2288",
   title: "Num Q84",
   learner_question: "Up on a map? \r\n1. East \r\n2. North \r\n3. South",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) On a map, up is North.",
    incorrectAnswerResponse: "Incorrect. On a map, up is North.",
    set: 42
    },

  2289:{
    question_tag: "L1MALP97QG",
   code: "2289",
   title: "Num Class Q43",
   learner_question: "\r\n1. Circle \r\n2. Percent \r\n3. Venn",
    question: "What diagram is made of two circles that cross each other?",
    answer: "3",
    correctAnswerResponse: "Correct! :) A Venn Diagram is made of 2 overlapping circles.",
    incorrectAnswerResponse: "Incorrect. A Venn Diagram is made of 2 overlapping circles.",
    set: 43
    },

  2290:{
    question_tag: "L1MALP97Q1",
   code: "2290",
   title: "Num Q85",
   learner_question: "1/4 ? 50% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1/4 = 25% <50%",
    incorrectAnswerResponse: "Incorrect. 1/4 = 25% <50%",
    set: 43
    },

  2291:{
    question_tag: "L1MALP97Q2",
   code: "2291",
   title: "Num Q86",
   learner_question: "27% = ? \r\n1. 2/7 \r\n2. 27/100 \r\n3. 1/27",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) % = /100. 27% = 27/100",
    incorrectAnswerResponse: "Incorrect. % = /100. 27% = 27/100",
    set: 43
    },

  2292:{
    question_tag: "L1MALP98QG",
   code: "2292",
   title: "Num Class Q44",
   learner_question: "\r\n1. Survey \r\n2. Bar graph \r\n3. Venn Diagram",
    question: "What is it called when we gather information by asking questions? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) A survey is gathering information by asking questions.",
    incorrectAnswerResponse: "Incorrect. A survey is gathering information by asking questions.",
    set: 44
    },

  2293:{
    question_tag: "L1MALP98Q1",
   code: "2293",
   title: "Num Q87",
   learner_question: "1 year = ? Days \r\n1. 365 \r\n2. 12 \r\n3. 52",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) There are 365 days in 1 year.",
    incorrectAnswerResponse: "Incorrect. There are 365 days in 1 year.",
    set: 44
    },

  2294:{
    question_tag: "L1MALP98Q2",
   code: "2294",
   title: "Num Q88",
   learner_question: "4 yards = ? Feet \r\n1. 1 foot \r\n2. 3 feet \r\n3. 12 feet",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) There are 3 feet in 1 yard. 4yd =12 ft.",
    incorrectAnswerResponse: "Incorrect. There are 3 feet in 1 yard. 4yd =12 ft.",
    set: 44
    },

  2295:{
    question_tag: "L1MALP99QG",
   code: "2295",
   title: "Num Class Q45",
   learner_question: "\r\n1. Survey \r\n2. Diagram \r\n3. Data",
    question: "What is a word for numbers and information used to make bar graphs?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Data is information and numbers used to make decisions.",
    incorrectAnswerResponse: "Incorrect. Data is information and numbers used to make decisions.",
    set: 45
    },

  2296:{
    question_tag: "L1MALP99Q1",
   code: "2296",
   title: "Num Q89",
   learner_question: "What is a good time to go to the market? \r\n1. 12:00am \r\n2. 8:00am \r\n3. 10:00pm",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 8am is a good time to go to the market.",
    incorrectAnswerResponse: "Incorrect. 8am is a good time to go to the market.",
    set: 45
    },

  2297:{
    question_tag: "L1MALP99Q2",
   code: "2297",
   title: "Num Q90",
   learner_question: "What is a good time to wake up? \r\n1. 7:00am \r\n2. 11:00am \r\n3. 9:00pm",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 7am is a good time to wake up.",
    incorrectAnswerResponse: "Incorrect. 7am is a good time to wake up.",
    set: 45
    },

  2298:{
    question_tag: "L1MALP100QG",
   code: "2298",
   title: "Num Class Q46",
   learner_question: "\r\n1. Show what people like \r\n2. Show who lives in a city \r\n3. Show the date",
    question: "Which is NOT a good use of a bar graph? Enter the number of the answer that is NOT a good use of a bar graph.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Bar graphs are not useful in showing the date.",
    incorrectAnswerResponse: "Incorrect. Bar graphs are not useful in showing the date.",
    set: 46
    },

  2299:{
    question_tag: "L1MALP100Q1",
   code: "2299",
   title: "Num Q91",
   learner_question: "35+23=? \r\n1. 3523 \r\n2. 58 \r\n3. 87",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 35+23=58",
    incorrectAnswerResponse: "Incorrect. 35+23=58",
    set: 46
    },

  2300:{
    question_tag: "L1MALP100Q2",
   code: "2300",
   title: "Num Q92",
   learner_question: "13+64=? \r\n1. 1364 \r\n2. 67 \r\n3. 77",
    question: "",
    answer: "3",
    correctAnswerResponse: ":) Correct! 13+64=77",
    incorrectAnswerResponse: "Incorrect. 13+64=77",
    set: 46
    },

  2301:{
    question_tag: "L1MALP101QG",
   code: "2301",
   title: "Num Class Q47",
   learner_question: "\r\n1. Draw a table. \r\n2. Make a survey \r\n3. Think of a question",
    question: "What is the first step in making a bar graph?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Before making a bar graph, you must decide what you want to know.",
    incorrectAnswerResponse: "Incorrect. Before making a bar graph, you must decide what you want to know.",
    set: 47
    },

  2302:{
    question_tag: "L1MALP101Q1",
   code: "2302",
   title: "Num Q93",
   learner_question: "57-32=? \r\n1. 25 \r\n2. 89 \r\n3. 15",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 57-32=25",
    incorrectAnswerResponse: "Incorrect. 57-32=25",
    set: 47
    },

  2303:{
    question_tag: "L1MALP101Q2",
   code: "2303",
   title: "Num Q94",
   learner_question: "47-21=? \r\n1. 68 \r\n2. 28 \r\n3. 26",
    question: "",
    answer: "3",
    correctAnswerResponse: ":) Correct! 47-21= 26",
    incorrectAnswerResponse: "Incorrect. 47-21= 26",
    set: 47
    },

  2304:{
    question_tag: "L1MALP102QG",
   code: "2304",
   title: "Num Class Q48",
   learner_question: "\r\n1. To show who likes what. \r\n2. To show different groups. \r\n3. To show how things change over time.",
    question: "What is a good use of a line graph? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Line graphs show how things change with time.",
    incorrectAnswerResponse: "Incorrect. Line graphs show how things change with time.",
    set: 48
    },

  2305:{
    question_tag: "L1MALP102Q1",
   code: "2305",
   title: "Num Q95",
   learner_question: "13 x 1=? \r\n1. 14 \r\n2. 131 \r\n3. 13",
    question: "",
    answer: "3",
    correctAnswerResponse: ":) Correct! 13 x 1= 13",
    incorrectAnswerResponse: "Incorrect. 13 x 1= 13",
    set: 48
    },

  2306:{
    question_tag: "L1MALP102Q2",
   code: "2306",
   title: "Num Q96",
   learner_question: "6 x 6= ? \r\n1. 36 \r\n2. 12 \r\n3. 1",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 6 x 6=36",
    incorrectAnswerResponse: "Incorrect. 6 x 6=36",
    set: 48
    },

  2307:{
    question_tag: "L1MALP103QG",
   code: "2307",
   title: "Num Class Q49",
   learner_question: "\r\n1. Sales by month \r\n2. Population by year \r\n3. Countries by size",
    question: "Which is NOT something you would use a line graph to show? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Line graphs show change over time, they are not used for different groups.",
    incorrectAnswerResponse: "Incorrect. Line graphs show change over time, they are not used for different groups.",
    set: 49
    },

  2308:{
    question_tag: "L1MALP103Q1",
   code: "2308",
   title: "Num Q97",
   learner_question: "12÷4=? \r\n1. 3 \r\n2. 8 \r\n3. 48",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 12÷4=3",
    incorrectAnswerResponse: "Incorrect. 12÷4=3",
    set: 49
    },

  2309:{
    question_tag: "L1MALP103Q2",
   code: "2309",
   title: "Num Q98",
   learner_question: "8÷2=? \r\n1. 6 \r\n2. 4 \r\n3. 10",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 8÷2=4",
    incorrectAnswerResponse: "Incorrect. 8÷2=4",
    set: 49
    },

  2310:{
    question_tag: "L1MALP104QG",
   code: "2310",
   title: "Num Class Q50",
   learner_question: "\r\n1. 25% \r\n2. 3% \r\n3. 75%",
    question: "What percentage is equal to 3/4? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3/4 = 75%",
    incorrectAnswerResponse: "Incorrect. 3/4 = 75%",
    set: 50
    },

  2311:{
    question_tag: "L1MALP104Q1",
   code: "2311",
   title: "Num Q99",
   learner_question: "56/100 ? 56% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 56/100 = 56%",
    incorrectAnswerResponse: "Incorrect. 56/100 = 56%",
    set: 50
    },

  2312:{
    question_tag: "L1MALP104Q2",
   code: "2312",
   title: "Num Q100",
   learner_question: "100% = ? \r\n1. 1/10 \r\n2. 1/100 \r\n3. 10/10",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 100% =10/10=100/100",
    incorrectAnswerResponse: "Incorrect. 100% =10/10=100/100",
    set: 50
    },

  2313:{
    question_tag: "L1MALP105QG",
   code: "2313",
   title: "Num Class Q51",
   learner_question: "\r\n1. 14 \r\n2. 33 \r\n3. 3",
    question: "Say: Miriam gives her children 11 books each. She has three children. How many books did she give in total? Enter the number of the correct answer, 1, 2 or \r\n3.",
    answer: "3",
    correctAnswerResponse: ":) Correct! 11 x 3= 33 books.",
    incorrectAnswerResponse: "Incorrect. 11 x 3= 33 books.",
    set: 51
    },

  2314:{
    question_tag: "L1MALP105Q1",
   code: "2314",
   title: "Num Q101",
   learner_question: "13 x 2=? \r\n1. 26 \r\n2. 15 \r\n3. 132",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 13 x 2 =26",
    incorrectAnswerResponse: "Incorrect. 13 x 2 =26",
    set: 51
    },

  2315:{
    question_tag: "L1MALP105Q2",
   code: "2315",
   title: "Num Q102",
   learner_question: "22 x 3=? \r\n1. 26 \r\n2. 66 \r\n3. 25",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 22 x 3= 66",
    incorrectAnswerResponse: "Incorrect. 22 x 3= 66",
    set: 51
    },

  2316:{
    question_tag: "L1MALP106QG",
   code: "2316",
   title: "Num Class Q52",
   learner_question: "\r\n1. 600 \r\n2. 60 \r\n3. 6",
    question: "Say: Mark has $60 dollars to buy rice. Each bag of rice costs 10 dollars. How many bags of rice can Mark buy? Enter the number of the correct answer 1, 2 or \r\n3.",
    answer: "3",
    correctAnswerResponse: ":) Correct! 60÷10= 6",
    incorrectAnswerResponse: "Incorrect. 60÷10= 6",
    set: 52
    },

  2317:{
    question_tag: "L1MALP106Q1",
   code: "2317",
   title: "Num Q103",
   learner_question: "25 ÷ 5=? \r\n1. 30 \r\n2. 125 \r\n3. 5",
    question: "",
    answer: "3",
    correctAnswerResponse: ":) Correct! 25 ÷ 5= 5",
    incorrectAnswerResponse: "Incorrect. 25 ÷ 5= 5",
    set: 52
    },

  2318:{
    question_tag: "L1MALP106Q2",
   code: "2318",
   title: "Num Q104",
   learner_question: "24 ÷ 6=? \r\n1. 8 \r\n2. 4 \r\n3. 18",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 24 ÷ 6= 4",
    incorrectAnswerResponse: "Incorrect. 24 ÷ 6= 4",
    set: 52
    },

  2319:{
    question_tag: "L1MALP107QG",
   code: "2319",
   title: "Num Class Q53",
   learner_question: "\r\n1. 31 \r\n2. 41 \r\n3. 50",
    question: "Write the following on the board: 23 +18 Say: Let\'s review. What is 23 plus 18? Enter the number of the correct answer 1, 2 or \r\n3.",
    answer: "2",
    correctAnswerResponse: ":) Correct! 23 + 18= 41",
    incorrectAnswerResponse: "Incorrect. 23 + 18= 41",
    set: 53
    },

  2320:{
    question_tag: "L1MALP107Q1",
   code: "2320",
   title: "Num Q105",
   learner_question: "23 x 1 =? \r\n1. 23 \r\n2. 24 \r\n3. 22",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 23 x 1= 23",
    incorrectAnswerResponse: "Incorrect. 23 x 1= 23",
    set: 53
    },

  2321:{
    question_tag: "L1MALP107Q2",
   code: "2321",
   title: "Num Q106",
   learner_question: "15÷5=? \r\n1. 5 \r\n2. 10 \r\n3. 3",
    question: "",
    answer: "3",
    correctAnswerResponse: ":) Correct! 15 ÷ 5= 3",
    incorrectAnswerResponse: "Incorrect. 15 ÷ 5= 3",
    set: 53
    },

  2322:{
    question_tag: "L1MALP108QG",
   code: "2322",
   title: "Num Class Q54",
   learner_question: "\r\n1. North \r\n2. East \r\n3. South",
    question: "Which direction is down on a map? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) On a map, South is down.",
    incorrectAnswerResponse: "Incorrect. On a map, South is down.",
    set: 54
    },

  2323:{
    question_tag: "L1MALP108Q1",
   code: "2323",
   title: "Num Q107",
   learner_question: "24+47=? \r\n1. 71 \r\n2. 61 \r\n3. 60",
    question: "",
    answer: "1",
    correctAnswerResponse: ":) Correct! 24+47= 71",
    incorrectAnswerResponse: "Incorrect. 24+47= 71",
    set: 54
    },

  2324:{
    question_tag: "L1MALP108Q2",
   code: "2324",
   title: "Num Q108",
   learner_question: "65-36=? \r\n1. 101 \r\n2. 29 \r\n3. 48",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 65-36= 29",
    incorrectAnswerResponse: "Incorrect. 65-36= 29",
    set: 54
    },

    1163:{
    question_tag: "L1LITLP55QG",
   code: "1163",
   title: "Lit Class Q1",
   learner_question: "Which letter is a vowel? \r\n1. b \r\n2. a \r\n3. F",
    question: "Which letter is a vowel? Enter the number of the correct answer. Which letter is a vowel?",
    answer: "2",
    correctAnswerResponse: "Correct! :) The letter \'a\' is a vowel. B and F are consonants.",
    incorrectAnswerResponse: "Incorrect. The letter \'a\' is a vowel. B and F are consonants.",
    set: 1
    },

  1164:{
    question_tag: "L1LITLP55Q1",
   code: "1164",
   title: "Lit Q1",
   learner_question: "Which letter is a vowel? \r\n1. e \r\n2. D \r\n3. r",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The letter \'e\' is a vowel. D and r are consonants.",
    incorrectAnswerResponse: "Incorrect. The letter \'e\' is a vowel. D and r are consonants.",
    set: 1
    },

  1165:{
    question_tag: "L1LITLP55Q2",
   code: "1165",
   title: "Lit Q2",
   learner_question: "Which letter is a vowel? \r\n1. P \r\n2. s \r\n3. U",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The letter \'U\' is a vowel. P and S are consonants.",
    incorrectAnswerResponse: "Incorrect. The letter \'U\' is a vowel. P and S are consonants.",
    set: 1
    },

  1166:{
    question_tag: "L1LITLP56QG",
   code: "1166",
   title: "Lit Class Q2",
   learner_question: "The dog ___ me. \r\n1. hope \r\n2. but \r\n3. bit",
    question: "Which word completes the sentence \'The dog ___ me.\"? Enter the number of the word that completes the sentence.",
    answer: "3",
    correctAnswerResponse: "Correct! :) The dog bit me.",
    incorrectAnswerResponse: "Incorrect. The dog bit me.",
    set: 2
    },

  1167:{
    question_tag: "L1LITLP56Q1",
   code: "1167",
   title: "Lit Q3",
   learner_question: "I am ___happy. \r\n1. not \r\n2. note \r\n3. hop",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I am not happy.",
    incorrectAnswerResponse: "Incorrect. I am not happy.",
    set: 2
    },

  1168:{
    question_tag: "L1LITLP56Q2",
   code: "1168",
   title: "Lit Q4",
   learner_question: "Which letter is a vowel? \r\n1. L \r\n2. G \r\n3. i",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The letter \'i\' is a vowel. L and G are consonants.",
    incorrectAnswerResponse: "Incorrect. The letter \'i\' is a vowel. L and G are consonants.",
    set: 2
    },

  1169:{
    question_tag: "L1LITLP57QG",
   code: "1169",
   title: "Lit Class Q3",
   learner_question: "Dave ___ to farm. \r\n1. hats \r\n2. hates \r\n3. heats",
    question: "Which word completes the sentence \'Dave ____ to farm.\"? Enter the number of the word that completes the sentence.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Dave hates to farm.",
    incorrectAnswerResponse: "Incorrect. Dave hates to farm.",
    set: 3
    },

  1170:{
    question_tag: "L1LITLP57Q1",
   code: "1170",
   title: "Lit Q5",
   learner_question: "I ___ to bake. \r\n1. like \r\n2. lick \r\n3. lake",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I like to bake.",
    incorrectAnswerResponse: "Incorrect. I like to bake.",
    set: 3
    },

  1171:{
    question_tag: "L1LITLP57Q2",
   code: "1171",
   title: "Lit Q6",
   learner_question: "I ___ a new bag. \r\n1. mad \r\n2. made \r\n3. mode",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I made a new bag.",
    incorrectAnswerResponse: "Incorrect. I made a new bag.",
    set: 3
    },

  1172:{
    question_tag: "L1LITLP58QG",
   code: "1172",
   title: "Lit Class Q4",
   learner_question: "Which word has a LONG vowel sound? \r\n1. pad \r\n2. paid \r\n3. pads",
    question: "Which word has a LONG vowel sound? Enter the number of the word with a LONG vowel sound.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Paid has LONG vowel sound. Letters \'ai\' make a LONG vowel sound.",
    incorrectAnswerResponse: "Incorrect. Paid has LONG vowel sound. Letters \'ai\' make a LONG vowel sound.",
    set: 4
    },

  1173:{
    question_tag: "L1LITLP58Q1",
   code: "1173",
   title: "Lit Q7",
   learner_question: "Which word has a LONG vowel sound? \r\n1. may \r\n2. mad \r\n3. mall",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) May has a LONG vowel sound. Letters \'ay\' make a LONG vowel sound.",
    incorrectAnswerResponse: "Incorrect. May has a LONG vowel sound. Letters \'ay\' make a LONG vowel sound.",
    set: 4
    },

  1174:{
    question_tag: "L1LITLP58Q2",
   code: "1174",
   title: "Lit Q8",
   learner_question: "Which word has a LONG vowel sound? \r\n1. Fat \r\n2. Father \r\n3. Fate",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Fate has a LONG vowel sound. Silent \'e\' makes the \'a\' a LONG vowel sound.",
    incorrectAnswerResponse: "Incorrect. Fate has a LONG vowel sound. Silent \'e\' makes the \'a\' a LONG vowel sound.",
    set: 4
    },

  1175:{
    question_tag: "L1LITLP59QG",
   code: "1175",
   title: "Lit Class Q5",
   learner_question: "Which words SOUND the same? \r\n1. pay pad \r\n2. sale sail \r\n3. made mad",
    question: "Which words sound the same? Enter the number of the words that sound the same.",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Sale\' and \'sail\' SOUND the same but are spelled differently.",
    incorrectAnswerResponse: "Incorrect. \'Sale\' and \'sail\' SOUND the same but are spelled differently.",
    set: 5
    },

  1176:{
    question_tag: "L1LITLP59Q1",
   code: "1176",
   title: "Lit Q9",
   learner_question: " Which words SOUND the same? \r\n1. wait weight \r\n2. mid maid \r\n3. not note",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Wait\' and \'weight\' SOUND the same but are spelled differently.",
    incorrectAnswerResponse: "Incorrect. \'Wait\' and \'weight\' SOUND the same but are spelled differently.",
    set: 5
    },

  1177:{
    question_tag: "L1LITLP59Q2",
   code: "1177",
   title: "Lit Q10",
   learner_question: " Which words SOUND the same? \r\n1. male mail \r\n2. mill mall \r\n3. pal pail",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Male\' and \'mail\' SOUND the same but are spelled differently.",
    incorrectAnswerResponse: "Incorrect. \'Male\' and \'mail\' SOUND the same but are spelled differently.",
    set: 5
    },

  1178:{
    question_tag: "L1LITLP60QG",
   code: "1178",
   title: "Lit Class Q6",
   learner_question: "Which word has a LONG vowel sound? \r\n1. pain \r\n2. pin \r\n3. pans",
    question: "Which word has a LONG vowel sound? Enter the number of the word with a LONG vowel sound.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Pain has LONG \'a\' vowel sound. Letters \'ai\' make a LONG \'a\' vowel sound.",
    incorrectAnswerResponse: "Incorrect. Pain has LONG \'a\' vowel sound. Letters \'ai\' make a LONG \'a\' vowel sound.",
    set: 6
    },

  1179:{
    question_tag: "L1LITLP60Q1",
   code: "1179",
   title: "Lit Q11",
   learner_question: "Which word has a LONG vowel sound? \r\n1. Sam \r\n2. same \r\n3. sample",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Same has a LONG \'a\' vowel sound. Silent \'e\' makes the \'a\' a LONG vowel sound.",
    incorrectAnswerResponse: "Incorrect. Same has a LONG \'a\' vowel sound. Silent \'e\' makes the \'a\' a LONG vowel sound.",
    set: 6
    },

  1180:{
    question_tag: "L1LITLP60Q2",
   code: "1180",
   title: "Lit Q12",
   learner_question: "\"Which word has a LONG vowel sound? \r\n1. say \r\n2. sad \r\n3. salt ",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Say has a LONG \'a\' vowel sound. Letters \'ay\' make a LONG vowel sound.",
    incorrectAnswerResponse: "Incorrect. Say has a LONG \'a\' vowel sound. Letters \'ay\' make a LONG vowel sound.",
    set: 6
    },

  1181:{
    question_tag: "L1LITLP61QG",
   code: "1181",
   title: "Lit Class Q7",
   learner_question: "Which word has a long \'e\' vowel sound? \r\n1. sell \r\n2. send \r\n3. see",
    question: "Which word has a LONG \'e\' vowel sound? Enter the number of the word with a LONG \'e\' vowel sound.",
    answer: "3",
    correctAnswerResponse: "Correct! :) See has a LONG \'e\' vowel sound. Letters \'ee\' make a LONG \'e\' vowel sound.",
    incorrectAnswerResponse: "Incorrect. See has a LONG \'e\' vowel sound. Letters \'ee\' make a LONG \'e\' vowel sound.",
    set: 7
    },

  1182:{
    question_tag: "L1LITLP61Q1",
   code: "1182",
   title: "Lit Q13",
   learner_question: "Which word has a long \'e\' vowel sound? \r\n1. mend \r\n2. meal \r\n3. male",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Meals has a long \'e\' sound. Letters \'ea\' make the long \'e\' sound.",
    incorrectAnswerResponse: "Incorrect. Meals has a long \'e\' sound. Letters \'ea\' make the long \'e\' sound.",
    set: 7
    },

  1183:{
    question_tag: "L1LITLP61Q2",
   code: "1183",
   title: "Lit Q14",
   learner_question: "Which word has a long \'e\' vowel sound? \r\n1. beer \r\n2. ben \r\n3. Bone",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Beer has a long \'e\' sound. Letters \'ee\' make the long \'e\' sound.",
    incorrectAnswerResponse: "Incorrect. Beer has a long \'e\' sound. Letters \'ee\' make the long \'e\' sound.",
    set: 7
    },

  1184:{
    question_tag: "L1LITLP62QG",
   code: "1184",
   title: "Lit Class Q8",
   learner_question: "I will ____ a shirt. \r\n1. buys \r\n2. buy \r\n3. does",
    question: "Which word completes the sentence \'I will ___ a shirt.\"? Enter the number of the word that completes the sentence.",
    answer: "2",
    correctAnswerResponse: "Correct! :) I will buy a shirt.",
    incorrectAnswerResponse: "Incorrect. I will buy a shirt.",
    set: 8
    },

  1185:{
    question_tag: "L1LITLP62Q1",
   code: "1185",
   title: "Lit Q15",
   learner_question: "___ she like cats? \r\n1. What \r\n2. Does \r\n3. hop",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Does she like cats?",
    incorrectAnswerResponse: "Incorrect. Does she like cats?",
    set: 8
    },

  1186:{
    question_tag: "L1LITLP62Q2",
   code: "1186",
   title: "Lit Q16",
   learner_question: "Which word has a LONG \'e\' sound? \r\n1. happy \r\n2. help \r\n3. hem",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Happy\' has a long \'e\' sound. The letter \'y\' often makes a long \'e\' sound at the end of words.",
    incorrectAnswerResponse: "Incorrect. \'Happy\' has a long \'e\' sound. The letter \'y\' often makes a long \'e\' sound at the end of words.",
    set: 8
    },

  1187:{
    question_tag: "L1LITLP63QG",
   code: "1187",
   title: "Lit Class Q9",
   learner_question: "\r\n1. Does \r\n2. Buys \r\n3. What",
    question: "Which word completes the question \'___is your name?\" Enter the number of the word that completes the sentence.",
    answer: "3",
    correctAnswerResponse: "Correct! :) What is your name?",
    incorrectAnswerResponse: "Incorrect. What is your name?",
    set: 9
    },

  1188:{
    question_tag: "L1LITLP63Q1",
   code: "1188",
   title: "Lit Q17",
   learner_question: "She ____ a pen. \r\n1. buy \r\n2. does \r\n3. buys",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She buys a pen.",
    incorrectAnswerResponse: "Incorrect. She buys a pen.",
    set: 9
    },

  1189:{
    question_tag: "L1LITLP63Q2",
   code: "1189",
   title: "Lit Q18",
   learner_question: "Which word has a LONG \'e\' sound? \r\n1. Seam \r\n2. Same \r\n3. Send",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Seam\' has a long \'e\' sound. The letters \'ea\' often make a long \'e\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Seam\' has a long \'e\' sound. The letters \'ea\' often make a long \'e\' sound.",
    set: 9
    },

  1190:{
    question_tag: "L1LITLP64QG",
   code: "1190",
   title: "Lit Class Q10",
   learner_question: "I see my ____, Peter. \r\n1. does \r\n2. brother \r\n3. hates",
    question: "Which word completes the sentence \'I see my___ Peter\"? Enter the number of the word that completes the sentence.",
    answer: "2",
    correctAnswerResponse: "Correct! :) I see my brother, Peter.",
    incorrectAnswerResponse: "Incorrect. I see my brother, Peter.",
    set: 10
    },

  1191:{
    question_tag: "L1LITLP64Q1",
   code: "1191",
   title: "Lit Q19",
   learner_question: "Which word has a LONG \'a\' sound? \r\n1. man \r\n2. maid \r\n3. mean",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Maid\' has a long \'a\' sound. Letters \'ai\' often make a long \'a\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Maid\' has a long \'a\' sound. Letters \'ai\' often make a long \'a\' sound.",
    set: 10
    },

  1192:{
    question_tag: "L1LITLP64Q2",
   code: "1192",
   title: "Lit Q20",
   learner_question: "Which word has a long \'e\' sound? \r\n1. melt \r\n2. male \r\n3. meal",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'Meal\' has a long \'e\' sound. Letters \'ea\' often make a long \'e\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Meal\' has a long \'e\' sound. Letters \'ea\' often make a long \'e\' sound.",
    set: 10
    },

  1193:{
    question_tag: "L1LITLP65QG",
   code: "1193",
   title: "Lit Class Q11",
   learner_question: "Which word has a long \'I\' sound? \r\n1. pill \r\n2. pie \r\n3. pin",
    question: "Which word has a long \'I\' sound. Enter the number of the word with a long \'I\' sound.",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Pie\' has a long \'I\' sound. Letters \'ie\' often make a long \'I\' sound at the end of a word.",
    incorrectAnswerResponse: "Incorrect. \'Pie\' has a long \'I\' sound. Letters \'ie\' often make a long \'I\' sound at the end of a word.",
    set: 11
    },

  1194:{
    question_tag: "L1LITLP65Q1",
   code: "1194",
   title: "Lit Q21",
   learner_question: "Which word has a long \'I\' sound? \r\n1. time \r\n2. paint \r\n3. pillow",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Time\' has a long \'I\' sound. Silent \'e\' at the end of the word makes the \'I\' long.",
    incorrectAnswerResponse: "Incorrect. \'Time\' has a long \'I\' sound. Silent \'e\' at the end of the word makes the \'I\' long.",
    set: 11
    },

  1195:{
    question_tag: "L1LITLP65Q2",
   code: "1195",
   title: "Lit Q22",
   learner_question: "Which word has a long \'I\' sound? \r\n1. hit \r\n2. hills \r\n3. high",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'High\' has a long \'I\' sound. Letters \'igh\' make the long \'I\' sound.",
    incorrectAnswerResponse: "Incorrect. \'High\' has a long \'I\' sound. Letters \'igh\' make the long \'I\' sound.",
    set: 11
    },

  1196:{
    question_tag: "L1LITLP66QG",
   code: "1196",
   title: "Lit Class Q12",
   learner_question: "\r\n1. crimp \r\n2. cry \r\n3. cain",
    question: "Which word has a long \'I\' sound. Enter the number of the word with a long \'I\' sound.",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Cry\' has a long \'I\' sound. Letter \'Y\' often make a long \'I\' sound at the end of a word.",
    incorrectAnswerResponse: "Incorrect. \'Cry\' has a long \'I\' sound. Letter \'Y\' often make a long \'I\' sound at the end of a word.",
    set: 12
    },

  1197:{
    question_tag: "L1LITLP66Q1",
   code: "1197",
   title: "Lit Q23",
   learner_question: "Which word has a long \'I\' sound? \r\n1. said \r\n2. simple \r\n3. sigh",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'Sigh\' has a long \'I\' sound. Letters \'igh\' make the \'I\' long sound.",
    incorrectAnswerResponse: "Incorrect. \'Sigh\' has a long \'I\' sound. Letters \'igh\' make the \'I\' long sound.",
    set: 12
    },

  1198:{
    question_tag: "L1LITLP66Q2",
   code: "1198",
   title: "Lit Q24",
   learner_question: "Which word has a long \'I\' sound? \r\n1. fry \r\n2. little \r\n3. big",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Fry\' has a long \'I\' sound. Letter \'Y\' often makes the long \'I\' sound at the end of a word.",
    incorrectAnswerResponse: "Incorrect. \'Fry\' has a long \'I\' sound. Letter \'Y\' often makes the long \'I\' sound at the end of a word.",
    set: 12
    },

  1199:{
    question_tag: "L1LITLP67QG",
   code: "1199",
   title: "Lit Class Q13",
   learner_question: "\r\n1. \" \" \r\n2. ! \r\n3. ?",
    question: "Which are quotation marks? Enter the number that shows quotation marks.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Quotation marks \"\" show that someone is speaking.",
    incorrectAnswerResponse: "Incorrect. Quotation marks \"\" show that someone is speaking.",
    set: 13
    },

  1200:{
    question_tag: "L1LITLP67Q1",
   code: "1200",
   title: "Lit Q25",
   learner_question: "Which word has a long \'I\' sound? \r\n1. rice \r\n2. wrinkle \r\n3. pain",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Rice\' has a long \'I\' sound. Silent \'e\' makes the letter \'I\' long.",
    incorrectAnswerResponse: "Incorrect. \'Rice\' has a long \'I\' sound. Silent \'e\' makes the letter \'I\' long.",
    set: 13
    },

  1201:{
    question_tag: "L1LITLP67Q2",
   code: "1201",
   title: "Lit Q26",
   learner_question: "Which word has a long \'I\' sound? \r\n1. singing \r\n2. why \r\n3. give",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Why\' has a long \'I\' sound. Letter \'Y\' often makes a long \'I\' sound at the end of a word.",
    incorrectAnswerResponse: "Incorrect. \'Why\' has a long \'I\' sound. Letter \'Y\' often makes a long \'I\' sound at the end of a word.",
    set: 13
    },

  1202:{
    question_tag: "L1LITLP68QG",
   code: "1202",
   title: "Lit Class Q14 ",
   learner_question: "\r\n1. got \r\n2. monster \r\n3. goat",
    question: "Which word has a long \'o\' sound. Enter the number of the word with a long \'o\' sound.",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'Goat\' has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Goat\' has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    set: 14
    },

  1203:{
    question_tag: "L1LITLP68Q1",
   code: "1203",
   title: "Lit Q27",
   learner_question: "Which word has the long \'o\' sound? \r\n1. rob \r\n2. robe \r\n3. round",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Robe\' has a long \'o\' sound. Silent \'e\' makes the letter \'o\' long.",
    incorrectAnswerResponse: "Incorrect. \'Robe\' has a long \'o\' sound. Silent \'e\' makes the letter \'o\' long.",
    set: 14
    },

  1204:{
    question_tag: "L1LITLP68Q2",
   code: "1204",
   title: "Lit Q28",
   learner_question: "Which word has the long \'o\' sound? \r\n1. cot \r\n2. coat \r\n3. corner",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Coat\' has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Coat\' has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    set: 14
    },

  1205:{
    question_tag: "L1LITLP69QG",
   code: "1205",
   title: "Lit Class Q15",
   learner_question: "I ____ about my job. \r\n1. think \r\n2. thinks \r\n3. too",
    question: "Which word completes the sentence \'I ___ about my job.\"? Enter the number of the word that completes the sentence.",
    answer: "1",
    correctAnswerResponse: "Correct! :) I think about my job.",
    incorrectAnswerResponse: "Incorrect. I think about my job.",
    set: 15
    },

  1206:{
    question_tag: "L1LITLP69Q1",
   code: "1206",
   title: "Lit Q29",
   learner_question: "I ___ buy a pencil. \r\n1. think \r\n2. too \r\n3. must",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I must buy a pencil.",
    incorrectAnswerResponse: "Incorrect. I must buy a pencil.",
    set: 15
    },

  1207:{
    question_tag: "L1LITLP69Q2",
   code: "1207",
   title: "Lit Q30",
   learner_question: "Which word has a LONG \'o\' sound? \r\n1. go \r\n2. too \r\n3. son",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Go\' has a long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Go\' has a long \'o\' sound.",
    set: 15
    },

  1208:{
    question_tag: "L1LITLP70QG",
   code: "1208",
   title: "Lit Class Q16",
   learner_question: "\r\n1. I am happy! \r\n2. Are you happy? \r\n3. \"I am happy.\"",
    question: "Which sentence uses quotation marks? Enter the number of the sentence with quotation marks.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Quotation marks \"\" show that someone is speaking. \"I am happy.\"",
    incorrectAnswerResponse: "Incorrect. Quotation marks \"\" show that someone is speaking. \"I am happy.\"",
    set: 16
    },

  1209:{
    question_tag: "L1LITLP70Q1",
   code: "1209",
   title: "Lit Q31",
   learner_question: "She ____ cats are good. \r\n1. think \r\n2. thinks \r\n3. must",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She thinks cats are good.",
    incorrectAnswerResponse: "Incorrect. She thinks cats are good.",
    set: 16
    },

  1210:{
    question_tag: "L1LITLP70Q2",
   code: "1210",
   title: "Lit Q32",
   learner_question: "Which word has a LONG \'o\' sound? \r\n1. lost \r\n2. Bong \r\n3. old",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'Old\' has a long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Old\' has a long \'o\' sound.",
    set: 16
    },

  1211:{
    question_tag: "L1LITLP71QG",
   code: "1211",
   title: "Lit Class Q17",
   learner_question: "\r\n1. new \r\n2. but \r\n3. running",
    question: "Which word has a LONG \'u\' sound?",
    answer: "1",
    correctAnswerResponse: "Correct! :) \"New\" has a LONG \'u\' sound. The letters \'ew\' make the long \'u\' sound.",
    incorrectAnswerResponse: "Incorrect. \"New\" has a LONG \'u\' sound. The letters \'ew\' make the long \'u\' sound.",
    set: 17
    },

  1212:{
    question_tag: "L1LITLP71Q1",
   code: "1212",
   title: "Lit Q33",
   learner_question: "Which word has a LONG \'u\' sound? \r\n1. cute \r\n2. rubber \r\n3. sun",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Cute has a long \'u\' sound. Silent \'e\' makes the letter \'u\' long.",
    incorrectAnswerResponse: "Incorrect. Cute has a long \'u\' sound. Silent \'e\' makes the letter \'u\' long.",
    set: 17
    },

  1213:{
    question_tag: "L1LITLP71Q2",
   code: "1213",
   title: "Lit Q34",
   learner_question: "Sara ____ home. \r\n1. walk \r\n2. walks \r\n3. walking",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Sara walks home.",
    incorrectAnswerResponse: "Incorrect. Sara walks home.",
    set: 17
    },

  1214:{
    question_tag: "L1LITLP72QG",
   code: "1214",
   title: "Lit Class Q18",
   learner_question: "I ____ my food. \r\n1. chute \r\n2. chew \r\n3. cheat",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I chew my food.",
    incorrectAnswerResponse: "Incorrect. I chew my food.",
    set: 18
    },

  1215:{
    question_tag: "L1LITLP72Q1",
   code: "1215",
   title: "Lit Q35",
   learner_question: "The sky is ___. \r\n1. beer \r\n2. brew \r\n3. blue",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The sky blue.",
    incorrectAnswerResponse: "Incorrect. The sky blue.",
    set: 18
    },

  1216:{
    question_tag: "L1LITLP72Q2",
   code: "1216",
   title: "Lit Q36",
   learner_question: "Which word has a LONG \'o\' sound? \r\n1. summer \r\n2. fruit \r\n3. under",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Fruit has the LONG \'u\' sound. The letters \'ui\' make the long \'u\' sound.",
    incorrectAnswerResponse: "Incorrect. Fruit has the LONG \'u\' sound. The letters \'ui\' make the long \'u\' sound.",
    set: 18
    },

  1217:{
    question_tag: "L1LITLP73QG",
   code: "1217",
   title: "Lit Class Q19",
   learner_question: "Children ____ go to school. \r\n1. stops \r\n2. help \r\n3. should",
    question: "Choose the answer that completes the sentence. Children ___ go to school.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Children should go to school.",
    incorrectAnswerResponse: "Incorrect. Children should go to school.",
    set: 19
    },

  1218:{
    question_tag: "L1LITLP73Q1",
   code: "1218",
   title: "Lit Q37",
   learner_question: "I will go ___. \r\n1. too \r\n2. need \r\n3. should",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I will go too.",
    incorrectAnswerResponse: "Incorrect. I will go too.",
    set: 19
    },

  1219:{
    question_tag: "L1LITLP73Q2",
   code: "1219",
   title: "Lit Q38",
   learner_question: "She ____ singing. \r\n1. stop \r\n2. stops \r\n3. should",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She stops singing.",
    incorrectAnswerResponse: "Incorrect. She stops singing.",
    set: 19
    },

  1220:{
    question_tag: "L1LITLP74QG",
   code: "1220",
   title: "Lit Class Q20",
   learner_question: "\r\n1. C \r\n2. U \r\n3. J",
    question: "Which letter is a vowel? Enter the number of the correct answer. Which letter is a vowel?",
    answer: "2",
    correctAnswerResponse: "Correct! :) U is a vowel. The vowels are A, E, I, O, U and sometimes Y.",
    incorrectAnswerResponse: "Incorrect. U is a vowel. The vowels are A, E, I, O, U and sometimes Y.",
    set: 20
    },

  1221:{
    question_tag: "L1LITLP74Q1",
   code: "1221",
   title: "Lit Q39",
   learner_question: "Which word has a LONG \'a\' sound? \r\n1. man \r\n2. maid \r\n3. mean",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Maid\' has a long \'a\' sound. Letters \'ai\' often make a long \'a\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Maid\' has a long \'a\' sound. Letters \'ai\' often make a long \'a\' sound.",
    set: 20
    },

  1222:{
    question_tag: "L1LITLP74Q2",
   code: "1222",
   title: "Lit Q40",
   learner_question: "Which word has a LONG \'o\' sound? \r\n1. Monday \r\n2. mob \r\n3. moan",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Moan has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. Moan has a long \'o\' sound. Letters \'oa\' make the long \'o\' sound.",
    set: 20
    },

  1223:{
    question_tag: "L1LITLP75QG",
   code: "1223",
   title: "Lit Class Q21",
   learner_question: "\r\n1. Who are you? \r\n2. I love you! \r\n3. \"I like blue.\"",
    question: "Which sentence uses quotation marks? Enter the number of the sentence with quotation marks.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Quotation marks \"\" show what people say. \"I like blue.\"",
    incorrectAnswerResponse: "Incorrect. Quotation marks \"\" show what people say. \"I like blue.\"",
    set: 21
    },

  1224:{
    question_tag: "L1LITLP75Q1",
   code: "1224",
   title: "Lit Q41",
   learner_question: "Which word has a LONG \'u\' sound? \r\n1. knew \r\n2. running \r\n3. rusted",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Knew\' has a long \'u\' sound. Letters \'ew\' make the long \'u\' sound.",
    incorrectAnswerResponse: "Incorrect. \'Knew\' has a long \'u\' sound. Letters \'ew\' make the long \'u\' sound.",
    set: 21
    },

  1225:{
    question_tag: "L1LITLP75Q2",
   code: "1225",
   title: "Lit Q42",
   learner_question: "Which word has a long \'I\' sound? \r\n1. why \r\n2. bigger \r\n3. pain",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Why\' has a long \'I\' sound. Letter \'Y\' often makes a long \'I\' sound at the end of a word.",
    incorrectAnswerResponse: "Incorrect. \'Why\' has a long \'I\' sound. Letter \'Y\' often makes a long \'I\' sound at the end of a word.",
    set: 21
    },

  1226:{
    question_tag: "L1LITLP76QG",
   code: "1226",
   title: "Lit Class Q22",
   learner_question: "\r\n1. cistern \r\n2. shouldn\'t \r\n3. children",
    question: "I will say a word. Choose the number of the word I say. Listen. Children. Children. Which word is children?",
    answer: "3",
    correctAnswerResponse: "Correct! :) children.",
    incorrectAnswerResponse: "Incorrect. children.",
    set: 22
    },

  1227:{
    question_tag: "L1LITLP76Q1",
   code: "1227",
   title: "Lit Q43",
   learner_question: "The ___ goes to school. \r\n1. chicken \r\n2. child \r\n3. coats",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The child goes to school.",
    incorrectAnswerResponse: "Incorrect. The child goes to school.",
    set: 22
    },

  1228:{
    question_tag: "L1LITLP76Q2",
   code: "1228",
   title: "Lit Q44",
   learner_question: "I live in a ____. \r\n1. along \r\n2. village \r\n3. church",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I live in a village.",
    incorrectAnswerResponse: "Incorrect. I live in a village.",
    set: 22
    },

  1229:{
    question_tag: "L1LITLP77QG",
   code: "1229",
   title: "Lit Class Q23",
   learner_question: "\r\n1. teacher \r\n2. teasing \r\n3. testing",
    question: "I will say a word. Choose the number of the word I say. Listen. Teacher. Teacher. Which word is teacher?",
    answer: "1",
    correctAnswerResponse: "Correct! :) teacher",
    incorrectAnswerResponse: "Incorrect. teacher",
    set: 23
    },

  1230:{
    question_tag: "L1LITLP77Q1",
   code: "1230",
   title: "Lit Q45",
   learner_question: "____ men have a lot of money. \r\n1. Books \r\n2. Rich \r\n3. Wrist",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Rich men have a lot of money.",
    incorrectAnswerResponse: "Incorrect. Rich men have a lot of money.",
    set: 23
    },

  1231:{
    question_tag: "L1LITLP77Q2",
   code: "1231",
   title: "Lit Q46",
   learner_question: "I want to eat____. \r\n1. lunch \r\n2. luck \r\n3. lumps",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I want to eat lunch.",
    incorrectAnswerResponse: "Incorrect. I want to eat lunch.",
    set: 23
    },

  1232:{
    question_tag: "L1LITLP78QG",
   code: "1232",
   title: "Lit Class Q24",
   learner_question: "\r\n1. found \r\n2. phone \r\n3. photo",
    question: "I will say a word. Choose the number of the word I say. Listen. Photo. Photo. Which word is photo?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Photo",
    incorrectAnswerResponse: "Incorrect. Photo",
    set: 24
    },

  1233:{
    question_tag: "L1LITLP78Q1",
   code: "1233",
   title: "Lit Q47",
   learner_question: "She calls his ___. \r\n1. lunch \r\n2. phone \r\n3. folder",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She calls his phone.",
    incorrectAnswerResponse: "Incorrect. She calls his phone.",
    set: 24
    },

  1234:{
    question_tag: "L1LITLP78Q2",
   code: "1234",
   title: "Lit Q48",
   learner_question: "The cat will ____ a bird. \r\n1. village \r\n2. needs \r\n3. catch",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The cat will catch a bird.",
    incorrectAnswerResponse: "Incorrect. The cat will catch a bird.",
    set: 24
    },

  1235:{
    question_tag: "L1LITLP79QG",
   code: "1235",
   title: "Lit Class Q25",
   learner_question: "\r\n1. orphan \r\n2. only \r\n3. offering",
    question: "I will say a word. Choose the number of the word I say. Listen. Orphan. Orphan. Which word is Orphan?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Orphan",
    incorrectAnswerResponse: "Incorrect. Orphan",
    set: 25
    },

  1236:{
    question_tag: "L1LITLP79Q1",
   code: "1236",
   title: "Lit Q49",
   learner_question: "The ____ has 26 letters. \r\n1. pharmacy \r\n2. alphabet \r\n3. elephant",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The alphabet has 26 letters.",
    incorrectAnswerResponse: "Incorrect. The alphabet has 26 letters.",
    set: 25
    },

  1237:{
    question_tag: "L1LITLP79Q2",
   code: "1237",
   title: "Lit Q50",
   learner_question: "We take a ___ of the class. \r\n1. photo \r\n2. phone \r\n3. film",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) We take a photo of the class.",
    incorrectAnswerResponse: "Incorrect. We take a photo of the class.",
    set: 25
    },

  1238:{
    question_tag: "L1LITLP80QG",
   code: "1238",
   title: "Lit Class Q26",
   learner_question: "\r\n1. orphan \r\n2. shadow \r\n3. solo",
    question: "I will say a word. Choose the number of the word I say. Listen. Shadow. Shadow. Which word is Shadow?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Shadow",
    incorrectAnswerResponse: "Incorrect. Shadow",
    set: 26
    },

  1239:{
    question_tag: "L1LITLP80Q1",
   code: "1239",
   title: "Lit Q51",
   learner_question: "The ____ sells food. \r\n1. shop \r\n2. chop \r\n3. ship",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The shop sells food.",
    incorrectAnswerResponse: "Incorrect. The shop sells food.",
    set: 26
    },

  1240:{
    question_tag: "L1LITLP80Q2",
   code: "1240",
   title: "Lit Q52",
   learner_question: "The ___ is by the water. \r\n1. shut \r\n2. should \r\n3. shore",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The shore is by the water.",
    incorrectAnswerResponse: "Incorrect. The shore is by the water.",
    set: 26
    },

  1241:{
    question_tag: "L1LITLP81QG",
   code: "1241",
   title: "Lit Class Q27",
   learner_question: "\r\n1. Punching \r\n2. Pushing \r\n3. Pasting",
    question: "I will say a word. Choose the number of the word I say. Listen. Pushing. Pushing. Which word is Pushing?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Pushing",
    incorrectAnswerResponse: "Incorrect. Pushing",
    set: 27
    },

  1242:{
    question_tag: "L1LITLP81Q1",
   code: "1242",
   title: "Lit Q53",
   learner_question: "She pays with ___. \r\n1. cats \r\n2. catch \r\n3. cash",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She pays with cash.",
    incorrectAnswerResponse: "Incorrect. She pays with cash.",
    set: 27
    },

  1243:{
    question_tag: "L1LITLP81Q2",
   code: "1243",
   title: "Lit Q54",
   learner_question: "She ____ her hair. \r\n1. fishes \r\n2. washes \r\n3. pushes",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She washes her hair.",
    incorrectAnswerResponse: "Incorrect. She washes her hair.",
    set: 27
    },

  1244:{
    question_tag: "L1LITLP82QG",
   code: "1244",
   title: "Lit Class Q28",
   learner_question: "\r\n1. eliminate \r\n2. elf \r\n3. elephant",
    question: "I will say a word. Choose the number of the word I say. Listen. Elephant. Elephant. Which word is Elephant?",
    answer: "3",
    correctAnswerResponse: "Correct! :) elephant",
    incorrectAnswerResponse: "Incorrect. elephant",
    set: 28
    },

  1245:{
    question_tag: "L1LITLP82Q1",
   code: "1245",
   title: "Lit Q55",
   learner_question: "I wake in the ___. \r\n1. photograph \r\n2. morning \r\n3. punches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I wake in the morning.",
    incorrectAnswerResponse: "Incorrect. I wake in the morning.",
    set: 28
    },

  1246:{
    question_tag: "L1LITLP82Q2",
   code: "1246",
   title: "Lit Q56",
   learner_question: "I call her on my ___. \r\n1. women \r\n2. phone \r\n3. cushion",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I call her on my phone.",
    incorrectAnswerResponse: "Incorrect. I call her on my phone.",
    set: 28
    },

  1247:{
    question_tag: "L1LITLP83QG",
   code: "1247",
   title: "Lit Class Q29",
   learner_question: "\r\n1. chair \r\n2. share \r\n3. fair",
    question: "I will say a word. Choose the number of the word I say. Listen. Chair. Chair. Which word is Chair?",
    answer: "1",
    correctAnswerResponse: "Correct! :) chair",
    incorrectAnswerResponse: "Incorrect. chair",
    set: 29
    },

  1248:{
    question_tag: "L1LITLP83Q1",
   code: "1248",
   title: "Lit Q57",
   learner_question: "___ you give me the pen? \r\n1. Could \r\n2. Along \r\n3. Photograph",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Could you give me the pen?",
    incorrectAnswerResponse: "Incorrect. Could you give me the pen?",
    set: 29
    },

  1249:{
    question_tag: "L1LITLP83Q2",
   code: "1249",
   title: "Lit Q58",
   learner_question: "We must ____ our food. \r\n1. shew \r\n2. chew \r\n3. sew",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) We must chew our food.",
    incorrectAnswerResponse: "Incorrect. We must chew our food.",
    set: 29
    },

  1250:{
    question_tag: "L1LITLP84QG",
   code: "1250",
   title: "Lit Class Q30",
   learner_question: "\r\n1. sinking \r\n2. shrinking \r\n3. thinking",
    question: "I will say a word. Choose the number of the word I say. Listen. Thinking. Thinking. Which word is Thinking?",
    answer: "3",
    correctAnswerResponse: "Correct! :) thinking",
    incorrectAnswerResponse: "Incorrect. thinking",
    set: 30
    },

  1251:{
    question_tag: "L1LITLP84Q1",
   code: "1251",
   title: "Lit Q59",
   learner_question: "It is ___ dog. \r\n1. thirty \r\n2. their \r\n3. thing",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) It is their dog.",
    incorrectAnswerResponse: "Incorrect. It is their dog.",
    set: 30
    },

  1252:{
    question_tag: "L1LITLP84Q2",
   code: "1252",
   title: "Lit Q60",
   learner_question: "I do not know ____. \r\n1. think \r\n2. them \r\n3. thin",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I do not know them.",
    incorrectAnswerResponse: "Incorrect. I do not know them.",
    set: 30
    },

  1253:{
    question_tag: "L1LITLP85QG",
   code: "1253",
   title: "Lit Class Q31",
   learner_question: "\r\n1. Nothing \r\n2. Notting \r\n3. Nodding",
    question: "I will say a word. Choose the number of the word I say. Listen. Nothing. Nothing. Which word is Nothing?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Nothing",
    incorrectAnswerResponse: "Incorrect. Nothing",
    set: 31
    },

  1254:{
    question_tag: "L1LITLP85Q1",
   code: "1254",
   title: "Lit Q61",
   learner_question: "The ___ is good today. \r\n1. without \r\n2. anything \r\n3. weather",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The weather is good today.",
    incorrectAnswerResponse: "Incorrect. The weather is good today.",
    set: 31
    },

  1255:{
    question_tag: "L1LITLP85Q2",
   code: "1255",
   title: "Lit Q62",
   learner_question: "He is my ____. \r\n1. mother \r\n2. brother \r\n3. author",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) He is my brother.",
    incorrectAnswerResponse: "Incorrect. He is my brother.",
    set: 31
    },

  1256:{
    question_tag: "L1LITLP86QG",
   code: "1256",
   title: "Lit Class Q32",
   learner_question: "\r\n1. Which \r\n2. Wish \r\n3. Witch",
    question: "I will say a word. Choose the number of the word I say. Listen. Wish. Wish. Which word is Wish?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Wish",
    incorrectAnswerResponse: "Incorrect. Wish",
    set: 32
    },

  1257:{
    question_tag: "L1LITLP86Q1",
   code: "1257",
   title: "Lit Q63",
   learner_question: "___ will you eat? \r\n1. When \r\n2. While \r\n3. Wheel",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) When will you eat?",
    incorrectAnswerResponse: "Incorrect. When will you eat?",
    set: 32
    },

  1258:{
    question_tag: "L1LITLP86Q2",
   code: "1258",
   title: "Lit Q64",
   learner_question: "The car needs a new ____. \r\n1. which \r\n2. wheel \r\n3. where",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The car needs a new wheel.",
    incorrectAnswerResponse: "Incorrect. The car needs a new wheel.",
    set: 32
    },

  1259:{
    question_tag: "L1LITLP87QG",
   code: "1259",
   title: "Lit Class Q33",
   learner_question: "\r\n1. Meanwhile \r\n2. Meaning \r\n3. Whenever",
    question: "I will say a word. Choose the number of the word I say. Listen. Meanwhile. Meanwhile. Which word is Meanwhile?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Meanwhile",
    incorrectAnswerResponse: "Incorrect. Meanwhile",
    set: 33
    },

  1260:{
    question_tag: "L1LITLP87Q1",
   code: "1260",
   title: "Lit Q65",
   learner_question: "I have a ____. \r\n1. whenever \r\n2. anywhere \r\n3. question",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I have a question.",
    incorrectAnswerResponse: "Incorrect. I have a question.",
    set: 33
    },

  1261:{
    question_tag: "L1LITLP87Q2",
   code: "1261",
   title: "Lit Q66",
   learner_question: "___ is she? \r\n1. Who \r\n2. When \r\n3. Meanwhile",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Who is she?",
    incorrectAnswerResponse: "Incorrect. Who is she?",
    set: 33
    },

  1262:{
    question_tag: "L1LITLP88QG",
   code: "1262",
   title: "Lit Class Q34",
   learner_question: "\r\n1. Meanwhile \r\n2. Weather \r\n3. Without",
    question: "I will say a word. Choose the number of the word I say. Listen. Without. Without. Which word is Without?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Without",
    incorrectAnswerResponse: "Incorrect. Without",
    set: 34
    },

  1263:{
    question_tag: "L1LITLP88Q1",
   code: "1263",
   title: "Lit Q67",
   learner_question: "Can we work ____? \r\n1. whenever \r\n2. together \r\n3. each",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Can we work together?",
    incorrectAnswerResponse: "Incorrect. Can we work together?",
    set: 34
    },

  1264:{
    question_tag: "L1LITLP88Q2",
   code: "1264",
   title: "Lit Q68",
   learner_question: "Could you help me ____? \r\n1. anywhere \r\n2. please \r\n3. graph",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Can you help me, please?",
    incorrectAnswerResponse: "Incorrect. Can you help me, please?",
    set: 34
    },

  1265:{
    question_tag: "L1LITLP89QG",
   code: "1265",
   title: "Lit Class Q35",
   learner_question: "\r\n1. Graph \r\n2. Crash \r\n3. Giraffe",
    question: "I will say a word. Choose the number of the word I say. Listen. Graph. Graph. Which word is Graph?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Graph",
    incorrectAnswerResponse: "Incorrect. Graph",
    set: 35
    },

  1266:{
    question_tag: "L1LITLP89Q1",
   code: "1266",
   title: "Lit Q69",
   learner_question: "I will go ___ for food. \r\n1. chopping \r\n2. shopping \r\n3. washing",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I will go shopping for food.",
    incorrectAnswerResponse: "Incorrect. I will go shopping for food.",
    set: 35
    },

  1267:{
    question_tag: "L1LITLP89Q2",
   code: "1267",
   title: "Lit Q70",
   learner_question: "We talked on the ____. \r\n1. bathtub \r\n2. photograph \r\n3. telephone",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) We talked on the telephone.",
    incorrectAnswerResponse: "Incorrect. We talked on the telephone.",
    set: 35
    },

  1268:{
    question_tag: "L1LITLP90QG",
   code: "1268",
   title: "Lit Class Q36",
   learner_question: "\r\n1. Thinking \r\n2. Trashing \r\n3. Thrashing",
    question: "I will say a word. Choose the number of the word I say. Thrashing. Thrashing. Thrashing. Which word is Thrashing?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Thrashing",
    incorrectAnswerResponse: "Incorrect. Thrashing",
    set: 36
    },

  1269:{
    question_tag: "L1LITLP90Q1",
   code: "1269",
   title: "Lit Q71",
   learner_question: "___ child is hungry? \r\n1. Which \r\n2. Where \r\n3. Why",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Which child is hungry?",
    incorrectAnswerResponse: "Incorrect. Which child is hungry?",
    set: 36
    },

  1270:{
    question_tag: "L1LITLP90Q2",
   code: "1270",
   title: "Lit Q72",
   learner_question: "I don\'t know ____. \r\n1. weather \r\n2. anything \r\n3. meanwhile",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I don\'t know anything.",
    incorrectAnswerResponse: "Incorrect. I don\'t know anything.",
    set: 36
    },

  1271:{
    question_tag: "L1LITLP91QG",
   code: "1271",
   title: "Lit Class Q37",
   learner_question: "It is ___ pencil. \r\n1. Saras \r\n2. Saras\' \r\n3. Sara\'s",
    question: "Which word completes the sentence correctly? Enter the number of the correct word.",
    answer: "3",
    correctAnswerResponse: "Correct! :) It is Sara\'s pen. Apostrophe + s (\'s) shows who owns something.",
    incorrectAnswerResponse: "Incorrect. It is Sara\'s pen. Apostrophe + s (\'s) shows who owns something.",
    set: 37
    },

  1272:{
    question_tag: "L1LITLP91Q1",
   code: "1272",
   title: "Lit Q73",
   learner_question: "It is ____ bag. \r\n1. Dan\'s \r\n2. Dans \r\n3. Dans\'",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) It is Dan\'s bag. Apostrophe + s (\'s) shows who owns something.",
    incorrectAnswerResponse: "Incorrect. It is Dan\'s bag. Apostrophe + s (\'s) shows who owns something.",
    set: 37
    },

  1273:{
    question_tag: "L1LITLP91Q2",
   code: "1273",
   title: "Lit Q74",
   learner_question: "I put ____ on the paper. \r\n1. glue \r\n2. game \r\n3. glad",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I put glue on the paper.",
    incorrectAnswerResponse: "Incorrect. I put glue on the paper.",
    set: 37
    },

  1274:{
    question_tag: "L1LITLP92QG",
   code: "1274",
   title: "Lit Class Q38",
   learner_question: "\r\n1. Bend \r\n2. Blend \r\n3. Bread",
    question: "I will say a word. Choose the number of the word I say. Bend. Bend. Bend. Which word is Bend?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Bend",
    incorrectAnswerResponse: "Incorrect. Bend",
    set: 38
    },

  1275:{
    question_tag: "L1LITLP92Q1",
   code: "1275",
   title: "Lit Q75",
   learner_question: "She is ___ mother. \r\n1. Sonies \r\n2. Sonie\'s \r\n3. Sonies\'",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She is Sonie\'s mother. Apostrophe + s (\'s) shows who owns something.",
    incorrectAnswerResponse: "Incorrect. She is Sonie\'s mother. Apostrophe + s (\'s) shows who owns something.",
    set: 38
    },

  1276:{
    question_tag: "L1LITLP92Q2",
   code: "1276",
   title: "Lit Q76",
   learner_question: "We ___ for the teacher. \r\n1. blue \r\n2. clap \r\n3. flap",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) We clap for the teacher.",
    incorrectAnswerResponse: "Incorrect. We clap for the teacher.",
    set: 38
    },

  1277:{
    question_tag: "L1LITLP93QG",
   code: "1277",
   title: "Lit Class Q39",
   learner_question: "\r\n1. Bend \r\n2. Blend \r\n3. Bread",
    question: "I will say a word. Choose the number of the word I say. Bread. Bread. Bread. Which word is Bread?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Bread",
    incorrectAnswerResponse: "Incorrect. Bread",
    set: 39
    },

  1278:{
    question_tag: "L1LITLP93Q1",
   code: "1278",
   title: "Lit Q77",
   learner_question: "She is ___ sister. \r\n1. Yatta\'s \r\n2. Yattas\' \r\n3. Yattas",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) She is Yatta\'s sister. Apostrophe + s (\'s) shows who owns something.",
    incorrectAnswerResponse: "Incorrect. She is Yatta\'s sister. Apostrophe + s (\'s) shows who owns something.",
    set: 39
    },

  1279:{
    question_tag: "L1LITLP93Q2",
   code: "1279",
   title: "Lit Q78",
   learner_question: "It is ____ hat. \r\n1. Flomo\'s \r\n2. Flomo \r\n3. Flomos\'",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) It is Flomo\'s hat.",
    incorrectAnswerResponse: "Incorrect. It is Flomo\'s hat.",
    set: 39
    },

  1280:{
    question_tag: "L1LITLP94QG",
   code: "1280",
   title: "Lit Class Q40",
   learner_question: "\r\n1. Mother \r\n2. Other \r\n3. Otter",
    question: "I will say a word. Choose the number of the word I say. Other. Other. Other. Which word is Other?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Other",
    incorrectAnswerResponse: "Incorrect. Other",
    set: 40
    },

  1281:{
    question_tag: "L1LITLP94Q1",
   code: "1281",
   title: "Lit Q79",
   learner_question: "The boy is in ___. \r\n1. press \r\n2. trouble \r\n3. their",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The boy is in trouble.",
    incorrectAnswerResponse: "Incorrect. The boy is in trouble.",
    set: 40
    },

  1282:{
    question_tag: "L1LITLP94Q2",
   code: "1282",
   title: "Lit Q80",
   learner_question: "Please ___ me a banana. \r\n1. bring \r\n2. drink \r\n3. bing",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Please bring me a banana.",
    incorrectAnswerResponse: "Incorrect. Please bring me a banana.",
    set: 40
    },

  1283:{
    question_tag: "L1LITLP95QG",
   code: "1283",
   title: "Lit Class Q41",
   learner_question: "\r\n1. Where you live. \r\n2. What you like. \r\n3. Who you know.",
    question: "Which might you include in your contact information? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Contact information shows how to reach you. Where you live, your address, is contact information.",
    incorrectAnswerResponse: "Incorrect. Contact information shows how to reach you. Where you live, your address, is contact information.",
    set: 41
    },

  1284:{
    question_tag: "L1LITLP95Q1",
   code: "1284",
   title: "Lit Q81",
   learner_question: "We learn to read and write at ___. \r\n1. trouble \r\n2. other \r\n3. school",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) We learn to read and write at school.",
    incorrectAnswerResponse: "Incorrect. We learn to read and write at school.",
    set: 41
    },

  1285:{
    question_tag: "L1LITLP95Q2",
   code: "1285",
   title: "Lit Q82",
   learner_question: "I do not work for ___. \r\n1. free \r\n2. friend \r\n3. fritters",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I do not work for free.",
    incorrectAnswerResponse: "Incorrect. I do not work for free.",
    set: 41
    },

  1286:{
    question_tag: "L1LITLP96QG",
   code: "1286",
   title: "Lit Class Q42",
   learner_question: "\r\n1. Streets \r\n2. Stars \r\n3. Starts",
    question: "I will say a word. Choose the number of the word I say. Starts. Starts. Starts. Which word is Starts?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Starts",
    incorrectAnswerResponse: "Incorrect. Starts",
    set: 42
    },

  1287:{
    question_tag: "L1LITLP96Q1",
   code: "1287",
   title: "Lit Q83",
   learner_question: "I ___ in the water. \r\n1. scare \r\n2. swim \r\n3. snap",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I swim in the water.",
    incorrectAnswerResponse: "Incorrect. I swim in the water.",
    set: 42
    },

  1288:{
    question_tag: "L1LITLP96Q2",
   code: "1288",
   title: "Lit Q84",
   learner_question: "She ___ to her mother. \r\n1. starts \r\n2. smarts \r\n3. speaks",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She speaks to her mother.",
    incorrectAnswerResponse: "Incorrect. She speaks to her mother.",
    set: 42
    },

  1289:{
    question_tag: "L1LITLP97QG",
   code: "1289",
   title: "Lit Class Q43",
   learner_question: "\r\n1. Sleeping \r\n2. Sweeping \r\n3. Streaking",
    question: "I will say a word. Choose the number of the word I say. Sweeping. Sweeping. Sweeping. Which word is Sweeping?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Sweeping",
    incorrectAnswerResponse: "Incorrect. Sweeping",
    set: 43
    },

  1290:{
    question_tag: "L1LITLP97Q1",
   code: "1290",
   title: "Lit Q85",
   learner_question: "I ___ too much when I shop. \r\n1. spend \r\n2. snow \r\n3. sweep",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I spend too much when I shop.",
    incorrectAnswerResponse: "Incorrect. I spend too much when I shop.",
    set: 43
    },

  1291:{
    question_tag: "L1LITLP97Q2",
   code: "1291",
   title: "Lit Q86",
   learner_question: "There is no ___ in the room. \r\n1. swim \r\n2. snare \r\n3. space",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) There is no space in the room.",
    incorrectAnswerResponse: "Incorrect. There is no space in the room.",
    set: 43
    },

  1292:{
    question_tag: "L1LITLP98QG",
   code: "1292",
   title: "Lit Class Q44",
   learner_question: "\r\n1. Finally \r\n2. Friday \r\n3. Friendly",
    question: "I will say a word. Choose the number of the word I say. Friday. Friday. Which word is Friday?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Friday",
    incorrectAnswerResponse: "Incorrect. Friday",
    set: 44
    },

  1293:{
    question_tag: "L1LITLP98Q1",
   code: "1293",
   title: "Lit Q87",
   learner_question: "It is ___ book. \r\n1. Janes \r\n2. Janes\' \r\n3. Jane\'s",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) It is Jane\'s book.",
    incorrectAnswerResponse: "Incorrect. It is Jane\'s book.",
    set: 44
    },

  1294:{
    question_tag: "L1LITLP98Q2",
   code: "1294",
   title: "Lit Q88",
   learner_question: "I have no ___ for rent. \r\n1. village \r\n2. money \r\n3. brother",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I have no money for rent.",
    incorrectAnswerResponse: "Incorrect. I have no money for rent.",
    set: 44
    },

  1295:{
    question_tag: "L1LITLP99QG",
   code: "1295",
   title: "Lit Class Q45",
   learner_question: "\r\n1. Quickly \r\n2. Quitting \r\n3. Strictly",
    question: "I will say a word. Choose the number of the word I say. Quickly. Quickly. Which word is Quickly?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Quickly",
    incorrectAnswerResponse: "Incorrect. Quickly",
    set: 45
    },

  1296:{
    question_tag: "L1LITLP99Q1",
   code: "1296",
   title: "Lit Q89",
   learner_question: "I will fix the tv\'s ___ . \r\n1. splint \r\n2. spring \r\n3. screen",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I will fix the tv\'s screen.",
    incorrectAnswerResponse: "Incorrect. I will fix the tv\'s screen.",
    set: 45
    },

  1297:{
    question_tag: "L1LITLP99Q2",
   code: "1297",
   title: "Lit Q90",
   learner_question: "The children ___ in the water. \r\n1. stride \r\n2. splash \r\n3. street",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The children splash in the water.",
    incorrectAnswerResponse: "Incorrect. The children splash in the water.",
    set: 45
    },

  1298:{
    question_tag: "L1LITLP100QG",
   code: "1298",
   title: "Lit Class Q46",
   learner_question: "\r\n1. a \r\n2. q \r\n3. u",
    question: "What letter comes after \'q\' in most words? Enter the number of the letter that usually comes after \'q\'.",
    answer: "",
    correctAnswerResponse: "Correct! :) The letter \'u\' usually comes after letter \'q\'.",
    incorrectAnswerResponse: "Incorrect. The letter \'u\' usually comes after letter \'q\'.",
    set: 46
    },

  1299:{
    question_tag: "L1LITLP100Q1",
   code: "1299",
   title: "Lit Q91",
   learner_question: "The bad shop has no ___. \r\n1. customers \r\n2. earn \r\n3. screen",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The bad shop has no customers.",
    incorrectAnswerResponse: "Incorrect. The bad shop has no customers.",
    set: 46
    },

  1300:{
    question_tag: "L1LITLP100Q2",
   code: "1300",
   title: "Lit Q92",
   learner_question: "We had a __ day at the park. \r\n1. splendid \r\n2. splash \r\n3. scream",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) We had a splendid day at the park.",
    incorrectAnswerResponse: "Incorrect. We had a splendid day at the park.",
    set: 46
    },

  1301:{
    question_tag: "L1LITLP101QG",
   code: "1301",
   title: "Lit Class Q47",
   learner_question: "\r\n1. customers \r\n2. busy \r\n3. receipt",
    question: "What might the shop keeper give us after we buy something? Enter the number of something a shop keeper might give us.",
    answer: "3",
    correctAnswerResponse: "Correct! :) A receipt shows what was purchased.",
    incorrectAnswerResponse: "Incorrect. A receipt shows what was purchased.",
    set: 47
    },

  1302:{
    question_tag: "L1LITLP101Q1",
   code: "1302",
   title: "Lit Q93",
   learner_question: "I am too ___ to talk. \r\n1. two \r\n2. earn \r\n3. busy",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I am too busy to talk.",
    incorrectAnswerResponse: "Incorrect. I am too busy to talk.",
    set: 47
    },

  1303:{
    question_tag: "L1LITLP101Q2",
   code: "1303",
   title: "Lit Q94",
   learner_question: "The shopkeeper gave me a ____. \r\n1. receipt \r\n2. scream \r\n3. splashing",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The shopkeeper gave me a receipt.",
    incorrectAnswerResponse: "Incorrect. The shopkeeper gave me a receipt.",
    set: 47
    },

  1304:{
    question_tag: "L1LITLP102QG",
   code: "1304",
   title: "Lit Class Q48",
   learner_question: "\r\n1. Dwelling \r\n2. Swelling \r\n3. Welling",
    question: "I will say a word. Choose the number of the word I say. Dwelling. Dwelling. Which word is Dwelling?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Dwelling",
    incorrectAnswerResponse: "Incorrect. Dwelling",
    set: 48
    },

  1305:{
    question_tag: "L1LITLP102Q1",
   code: "1305",
   title: "Lit Q95",
   learner_question: "I am not ___ . \r\n1. wait \r\n2. married \r\n3. until",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I am not married.",
    incorrectAnswerResponse: "Incorrect. I am not married.",
    set: 48
    },

  1306:{
    question_tag: "L1LITLP102Q2",
   code: "1306",
   title: "Lit Q96",
   learner_question: "The pen is ___ the two books. \r\n1. married \r\n2. between \r\n3. twenty",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The pen is between the books.",
    incorrectAnswerResponse: "Incorrect. The pen is between the books.",
    set: 48
    },

  1307:{
    question_tag: "L1LITLP103QG",
   code: "1307",
   title: "Lit Class Q49",
   learner_question: "\r\n1. Sift \r\n2. Swift \r\n3. Stiff",
    question: "I will say a word. Choose the number of the word I say. Sift. Sift. Which word is Sift?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Sift",
    incorrectAnswerResponse: "Incorrect. Sift",
    set: 49
    },

  1308:{
    question_tag: "L1LITLP103Q1",
   code: "1308",
   title: "Lit Q97",
   learner_question: "I will eat ___ I am full. \r\n1. wait \r\n2. married \r\n3. until",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I will eat until I am full.",
    incorrectAnswerResponse: "Incorrect. I will eat until I am full.",
    set: 49
    },

  1309:{
    question_tag: "L1LITLP103Q2",
   code: "1309",
   title: "Lit Q98",
   learner_question: "Which word is \'20\'? \r\n1. two \r\n2. twenty \r\n3. twelve",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) twenty = 20",
    incorrectAnswerResponse: "Incorrect. twenty = 20",
    set: 49
    },

  1310:{
    question_tag: "L1LITLP104QG",
   code: "1310",
   title: "Lit Class Q50",
   learner_question: "\r\n1. Writing \r\n2. Paraffin \r\n3. Paragraph",
    question: "Which word is paragraph? Paragraph. Enter the number of the word \'paragraph\'.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Paragraph.",
    incorrectAnswerResponse: "Incorrect. Paragraph.",
    set: 50
    },

  1311:{
    question_tag: "L1LITLP104Q1",
   code: "1311",
   title: "Lit Q99",
   learner_question: "Which word is 12? \r\n1. twelve \r\n2. twice \r\n3. twenty",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 12 = twelve",
    incorrectAnswerResponse: "Incorrect. 12 = twelve",
    set: 50
    },

  1312:{
    question_tag: "L1LITLP104Q2",
   code: "1312",
   title: "Lit Q100",
   learner_question: "I must ___ for a bus. \r\n1. between \r\n2. dwarf \r\n3. wait",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I must wait for a bus.",
    incorrectAnswerResponse: "Incorrect. I must wait for a bus.",
    set: 50
    },

  1313:{
    question_tag: "L1LITLP105QG",
   code: "1313",
   title: "Lit Class Q51",
   learner_question: "\r\n1. slept \r\n2. Swept \r\n3. subject",
    question: "I will say a word. Choose the number of the word I say. Subject. Subject. Which word is Subject?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Subject",
    incorrectAnswerResponse: "Incorrect. Subject",
    set: 51
    },

  1314:{
    question_tag: "L1LITLP105Q1",
   code: "1314",
   title: "Lit Q101",
   learner_question: "A child is not an ___ . \r\n1. elect \r\n2. mask \r\n3. adult",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A child is not an adult.",
    incorrectAnswerResponse: "Incorrect. A child is not an adult.",
    set: 51
    },

  1315:{
    question_tag: "L1LITLP105Q2",
   code: "1315",
   title: "Lit Q102",
   learner_question: "A farmer grows ___. \r\n1. plants \r\n2. results \r\n3. subtract",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) A farmer grows plants.",
    incorrectAnswerResponse: "Incorrect. A farmer grows plants.",
    set: 51
    },

  1316:{
    question_tag: "L1LITLP106QG",
   code: "1316",
   title: "Lit Class Q52",
   learner_question: "\r\n1. submarine \r\n2. subject \r\n3. subtract",
    question: "I will say a word. Choose the number of the word I say. Subtract. Subtract. Which word is Subtract?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Subtract",
    incorrectAnswerResponse: "Incorrect. Subtract",
    set: 52
    },

  1317:{
    question_tag: "L1LITLP106Q1",
   code: "1317",
   title: "Lit Q103",
   learner_question: "Put the book on my __. \r\n1. west \r\n2. desk \r\n3. facts",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Put the book on my desk.",
    incorrectAnswerResponse: "Incorrect. Put the book on my desk.",
    set: 52
    },

  1318:{
    question_tag: "L1LITLP106Q2",
   code: "1318",
   title: "Lit Q104",
   learner_question: "I have lived here ___ 200\r\n1. \r\n1. since \r\n2. much \r\n3. sand",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I have lived here since 2001.",
    incorrectAnswerResponse: "Incorrect. I have lived here since 2001.",
    set: 52
    },

  1319:{
    question_tag: "L1LITLP107QG",
   code: "1319",
   title: "Lit Class Q53",
   learner_question: "\r\n1. It is Tam\'s. \r\n2. Is it Tam? \r\n3. \"It is Tam.\"",
    question: "Which sentence has an apostrophe? Enter the number of the sentence with an apostrophe.",
    answer: "1",
    correctAnswerResponse: "Correct! :) It is Tam\'s. \'s shows who owns something.",
    incorrectAnswerResponse: "Incorrect. It is Tam\'s. \'s shows who owns something.",
    set: 53
    },

  1320:{
    question_tag: "L1LITLP107Q1",
   code: "1320",
   title: "Lit Q105",
   learner_question: "Dan is ___ to Jane. \r\n1. married \r\n2. village \r\n3. customers",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Dan is married to Jane.",
    incorrectAnswerResponse: "Incorrect. Dan is married to Jane.",
    set: 53
    },

  1321:{
    question_tag: "L1LITLP107Q2",
   code: "1321",
   title: "Lit Q106",
   learner_question: "She ___ art at school. \r\n1. left \r\n2. splendid \r\n3. studied",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She studied art at school.",
    incorrectAnswerResponse: "Incorrect. She studied art at school.",
    set: 53
    },

  1322:{
    question_tag: "L1LITLP108QG",
   code: "1322",
   title: "Lit Class Q54",
   learner_question: "\r\n1. Quilt \r\n2. Quit \r\n3. Quick",
    question: "I will say a word. Choose the number of the word I say. Quilt. Quilt. Which word is Quilt?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Quilt",
    incorrectAnswerResponse: "Incorrect. Quilt",
    set: 54
    },

  1323:{
    question_tag: "L1LITLP108Q1",
   code: "1323",
   title: "Lit Q107",
   learner_question: "It is __ house. \r\n1. Saras \r\n2. Sara\'s \r\n3. Saras\'",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) It is Sara\'s house.",
    incorrectAnswerResponse: "Incorrect. It is Sara\'s house.",
    set: 54
    },

  1324:{
    question_tag: "L1LITLP108Q2",
   code: "1324",
   title: "Lit Q108",
   learner_question: "I saw the film __. \r\n1. twenty \r\n2. twelve \r\n3. twice",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I saw the film twice.",
    incorrectAnswerResponse: "Incorrect. I saw the film twice.",
    set: 54
    },

  3163:{
    question_tag: "L2LITLP55QG",
   code: "3163",
   title: "Eng Class Q1",
   learner_question: "\r\n1. Pain \r\n2. Pan \r\n3. Part",
    question: "Which word has a long \'a\' sound? Enter the number of the word with a long \'a\' sound.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The letters \'ai\' make the long \'a\' sound in \'pain\'.",
    incorrectAnswerResponse: "Incorrect. The letters \'ai\' make the long \'a\' sound in \'pain\'.",
    set: 1
    },

  3164:{
    question_tag: "L2LITLP55Q1",
   code: "3164",
   title: "Eng Q1",
   learner_question: "Which word has a long \'a\' sound? \r\n1. pad \r\n2. panned \r\n3. pay",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The letters \'ay\' make the long \'a\' sound in \'pay\'.",
    incorrectAnswerResponse: "Incorrect. The letters \'ay\' make the long \'a\' sound in \'pay\'.",
    set: 1
    },

  3165:{
    question_tag: "L2LITLP55Q2",
   code: "3165",
   title: "Eng Q2",
   learner_question: "Tomorrow is the ___ \r\n1. vegetables \r\n2. past \r\n3. future",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Tomorrow is the future. The future has not happened yet.",
    incorrectAnswerResponse: "Incorrect. Tomorrow is the future. The future has not happened yet.",
    set: 1
    },

  3166:{
    question_tag: "L2LITLP56QG",
   code: "3166",
   title: "Eng Class Q2",
   learner_question: "\r\n1. Feeling \r\n2. Felt \r\n3. Fence",
    question: "Which word has a long \'e\' sound? Enter the number of the word with a long \'e\' sound.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The letters \'ee\' make the long \'e\' sound in \'feeling\'.",
    incorrectAnswerResponse: "Incorrect. The letters \'ee\' make the long \'e\' sound in \'feeling\'.",
    set: 2
    },

  3167:{
    question_tag: "L2LITLP56Q1",
   code: "3167",
   title: "Eng Q3",
   learner_question: "A job is a ___. \r\n1. picture \r\n2. livelihood \r\n3. vision",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A livelihood is how a person makes money.",
    incorrectAnswerResponse: "Incorrect. A livelihood is how a person makes money.",
    set: 2
    },

  3168:{
    question_tag: "L2LITLP56Q2",
   code: "3168",
   title: "Eng Q4",
   learner_question: "Which word has a long \'e\' sound? \r\n1. sleep \r\n2. fame \r\n3. elephant",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The letters \'ee\' make the long \'e\' sound in \'sleep\'.",
    incorrectAnswerResponse: "Incorrect. The letters \'ee\' make the long \'e\' sound in \'sleep\'.",
    set: 2
    },

  3169:{
    question_tag: "L2LITLP57QG",
   code: "3169",
   title: "Eng Class Q3",
   learner_question: "\r\n1. Sleeping a lot \r\n2. Speaking French \r\n3. Watching TV",
    question: "Which is a skill? Enter the number of the answer that is a skill.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A skill is something you are good at that can help you.",
    incorrectAnswerResponse: "Incorrect. A skill is something you are good at that can help you.",
    set: 3
    },

  3170:{
    question_tag: "L2LITLP57Q1",
   code: "3170",
   title: "Eng Q5",
   learner_question: "Which is a good life goal? \r\n1. Leaving school \r\n2. Meeting with friends \r\n3. Getting a job",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A goal is something good we want to make happen.",
    incorrectAnswerResponse: "Incorrect. A goal is something good we want to make happen.",
    set: 3
    },

  3171:{
    question_tag: "L2LITLP57Q2",
   code: "3171",
   title: "Eng Q6",
   learner_question: "Which word has a long \'e\' sound? \r\n1. bare \r\n2. hear \r\n3. better",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The letters \'ea\' in make the long \'e\' sound in \'hear\'.",
    incorrectAnswerResponse: "Incorrect. The letters \'ea\' in make the long \'e\' sound in \'hear\'.",
    set: 3
    },

  3172:{
    question_tag: "L2LITLP58QG",
   code: "3172",
   title: "Eng Class Q4",
   learner_question: "\r\n1. Rise \r\n2. Race \r\n3. Rice",
    question: "I will say a word. Enter the number of the word I say. Listen: Rice. Rice. Which word is Rice?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Rice",
    incorrectAnswerResponse: "Incorrect. Rice",
    set: 4
    },

  3173:{
    question_tag: "L2LITLP58Q1",
   code: "3173",
   title: "Eng Q7",
   learner_question: "The ___ man has a lot of money. \r\n1. rich \r\n2. reach \r\n3. rock",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The man has a lot of money.",
    incorrectAnswerResponse: "Incorrect. The man has a lot of money.",
    set: 4
    },

  3174:{
    question_tag: "L2LITLP58Q2",
   code: "3174",
   title: "Eng Q8",
   learner_question: "I will marry in the ___. \r\n1. greet \r\n2. vision \r\n3. future",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I will marry in the future.",
    incorrectAnswerResponse: "Incorrect. I will marry in the future.",
    set: 4
    },

  3175:{
    question_tag: "L2LITLP59QG",
   code: "3175",
   title: "Eng Class Q5",
   learner_question: "Which rhymes? \r\n1. boat \r\n2. not \r\n3. vans",
    question: "Which word rhymes with vote? Words that rhyme have the same end sound. Which word rhymes with vote? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Vote and boat have the same end sound.",
    incorrectAnswerResponse: "Incorrect. Vote and boat have the same end sound.",
    set: 5
    },

  3176:{
    question_tag: "L2LITLP59Q1",
   code: "3176",
   title: "Eng Q9",
   learner_question: "Which rhymes with \'no\'? \r\n1. to \r\n2. go \r\n3. two",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) No and go have the same end sound- Long \'o\'.",
    incorrectAnswerResponse: "Incorrect. No and go have the same end sound- Long \'o\'.",
    set: 5
    },

  3177:{
    question_tag: "L2LITLP59Q2",
   code: "3177",
   title: "Eng Q10",
   learner_question: "Which rhymes with \'pie\'? \r\n1. my \r\n2. pig \r\n3. free",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Pie and my have the same end sound- Long \'I\'.",
    incorrectAnswerResponse: "Incorrect. Pie and my have the same end sound- Long \'I\'.",
    set: 5
    },

  3178:{
    question_tag: "L2LITLP60QG",
   code: "3178",
   title: "Eng Class Q6",
   learner_question: "\r\n1. Want, will, were, was, what \r\n2. were, well, wrong, wait, when \r\n3. who, what, where, when, why",
    question: "Which are the 5 \'W\' words? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) The 5 W questions are question words- who, what, when, where, why.",
    incorrectAnswerResponse: "Incorrect. The 5 W questions are question words- who, what, when, where, why.",
    set: 6
    },

  3179:{
    question_tag: "L2LITLP60Q1",
   code: "3179",
   title: "Eng Q11",
   learner_question: "Which word rhymes with \'cute\'? \r\n1. cut \r\n2. note \r\n3. fruit",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Fruit and Cute have the same end sound- Long \'u\'.",
    incorrectAnswerResponse: "Incorrect. Fruit and Cute have the same end sound- Long \'u\'.",
    set: 6
    },

  3180:{
    question_tag: "L2LITLP60Q2",
   code: "3180",
   title: "Eng Q12",
   learner_question: "She must pay her ___. \r\n1. record \r\n2. fuel \r\n3. expenses",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Expenses are costs. She must pay her expenses.",
    incorrectAnswerResponse: "Incorrect. Expenses are costs. She must pay her expenses.",
    set: 6
    },

  3181:{
    question_tag: "L2LITLP61QG",
   code: "3181",
   title: "Eng Class Q7",
   learner_question: "\r\n1. I will go to school. \r\n2. I went to school. \r\n3. I am at school.",
    question: "Which sentence talks about the future? Enter the number of the sentence about the future.",
    answer: "1",
    correctAnswerResponse: "Correct! :) \"Will\" shows that something will happen in the future. I will go to school in the future.",
    incorrectAnswerResponse: "Incorrect. \"Will\" shows that something will happen in the future. I will go to school in the future.",
    set: 7
    },

  3182:{
    question_tag: "L2LITLP61Q1",
   code: "3182",
   title: "Eng Q13",
   learner_question: "My __ lives near me. \r\n1. neighbor \r\n2. expand \r\n3. hire",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) My neighbor lives near me.",
    incorrectAnswerResponse: "Incorrect. My neighbor lives near me.",
    set: 7
    },

  3183:{
    question_tag: "L2LITLP61Q2",
   code: "3183",
   title: "Eng Q14",
   learner_question: "Which is a good life goal? \r\n1. Eat food \r\n2. sleep for 3 hours \r\n3. Finish school",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Finishing school is a good life goal.",
    incorrectAnswerResponse: "Incorrect. Finishing school is a good life goal.",
    set: 7
    },

  3184:{
    question_tag: "L2LITLP62QG",
   code: "3184",
   title: "Eng Class Q8",
   learner_question: "\r\n1. I eat. \r\n2. Jane and the cat. \r\n3. We walk home.",
    question: "Which is NOT a complete sentence? Enter the number of the sentence that is NOT complete.",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Jane and the cat.\' is not a complete sentence. There is no verb.",
    incorrectAnswerResponse: "Incorrect. \'Jane and the cat.\' is not a complete sentence. There is no verb.",
    set: 8
    },

  3185:{
    question_tag: "L2LITLP62Q1",
   code: "3185",
   title: "Eng Q15",
   learner_question: "Which is NOT a complete sentence? \r\n1. The three dogs. \r\n2. We sleep. \r\n3. Dan walks.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'The three dogs.\' is not a complete sentence. There is no verb.",
    incorrectAnswerResponse: "Incorrect. \'The three dogs.\' is not a complete sentence. There is no verb.",
    set: 8
    },

  3186:{
    question_tag: "L2LITLP62Q2",
   code: "3186",
   title: "Eng Q16",
   learner_question: "Which word rhymes with \'pay\'? \r\n1. pad \r\n2. weigh \r\n3. happy",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Pay and Weigh have the same end sound- Long \'a\'.",
    incorrectAnswerResponse: "Incorrect. Pay and Weigh have the same end sound- Long \'a\'.",
    set: 8
    },

  3187:{
    question_tag: "L2LITLP63QG",
   code: "3187",
   title: "Eng Class Q9",
   learner_question: "\r\n1. Ran home. \r\n2. Jane dances. \r\n3. She eats.",
    question: "Which is NOT a complete sentence? Enter the number of the sentence that is NOT complete.",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Ran home.\' is not a complete sentence. There is no subject- who runs home?",
    incorrectAnswerResponse: "Incorrect. \'Ran home.\' is not a complete sentence. There is no subject- who runs home?",
    set: 9
    },

  3188:{
    question_tag: "L2LITLP63Q1",
   code: "3188",
   title: "Eng Q17",
   learner_question: "Which word rhymes with \'gate\'? \r\n1. game \r\n2. weight \r\n3. gal",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Gate and weight have the same end sound- Long \'a\' + \'t\'.",
    incorrectAnswerResponse: "Incorrect. Gate and weight have the same end sound- Long \'a\' + \'t\'.",
    set: 9
    },

  3189:{
    question_tag: "L2LITLP63Q2",
   code: "3189",
   title: "Eng Q18",
   learner_question: "Which sentence is correct? \r\n1. She is the worse student. \r\n2. This is a best meal. \r\n3. He is the worst dancer.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) He is the worst dancer is correct.",
    incorrectAnswerResponse: "Incorrect. He is the worst dancer is correct.",
    set: 9
    },

  3190:{
    question_tag: "L2LITLP64QG",
   code: "3190",
   title: "Eng Class Q10",
   learner_question: "\r\n1. To learn the alphabet. \r\n2. To prepare for a job \r\n3. To return to JSS.",
    question: "Which is NOT a reason to go to Level 3? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Level 3 will not cover simple skills like addition or letter sounds.",
    incorrectAnswerResponse: "Incorrect. Level 3 will not cover simple skills like addition or letter sounds.",
    set: 10
    },

  3191:{
    question_tag: "L2LITLP64Q1",
   code: "3191",
   title: "Eng Q19",
   learner_question: "In ___ class we learn about the Earth. \r\n1. English \r\n2. Secondary \r\n3. Science",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Science includes the study of life and the Earth.",
    incorrectAnswerResponse: "Incorrect. Science includes the study of life and the Earth.",
    set: 10
    },

  3192:{
    question_tag: "L2LITLP64Q2",
   code: "3192",
   title: "Eng Q20",
   learner_question: "A ___ reason is a good reason. \r\n1. negative \r\n2. possible \r\n3. positive",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Positive reasons are good reasons.",
    incorrectAnswerResponse: "Incorrect. Positive reasons are good reasons.",
    set: 10
    },

  3193:{
    question_tag: "L2LITLP65QG",
   code: "3193",
   title: "Eng Class Q11",
   learner_question: "\r\n1. Feeling sleepy \r\n2. walking in the rain \r\n3. Not having a job",
    question: "Which is a large challenge? Enter the number of the challenge.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Large challenges can keep us from having the life we want.",
    incorrectAnswerResponse: "Incorrect. Large challenges can keep us from having the life we want.",
    set: 11
    },

  3194:{
    question_tag: "L2LITLP65Q1",
   code: "3194",
   title: "Eng Q21",
   learner_question: "Which is an argument AGAINST school. \r\n1. School helps you get a job. \r\n2. School takes a lot of time. \r\n3. School is fun.",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) School takes a lot of time. This can be a challenge.",
    incorrectAnswerResponse: "Incorrect. School takes a lot of time. This can be a challenge.",
    set: 11
    },

  3195:{
    question_tag: "L2LITLP65Q2",
   code: "3195",
   title: "Eng Q22",
   learner_question: "A new car is __. \r\n1. between \r\n2. customers \r\n3. expensive",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A new car is expensive. Expensive things cost a lot of money.",
    incorrectAnswerResponse: "Incorrect. A new car is expensive. Expensive things cost a lot of money.",
    set: 11
    },

  3196:{
    question_tag: "L2LITLP66QG",
   code: "3196",
   title: "Eng Class Q12",
   learner_question: "\r\n1. Calm \r\n2. Emotional \r\n3. Positive",
    question: "What kind of a reaction is shouting at someone?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Shouting is an emotional reaction.",
    incorrectAnswerResponse: "Incorrect. Shouting is an emotional reaction.",
    set: 12
    },

  3197:{
    question_tag: "L2LITLP66Q1",
   code: "3197",
   title: "Eng Q23",
   learner_question: "Mary likes to eat __. \r\n1. maize \r\n2. planks \r\n3. panic",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Mary likes to eat maize. Maize is a kind of corn.",
    incorrectAnswerResponse: "Incorrect. Mary likes to eat maize. Maize is a kind of corn.",
    set: 12
    },

  3198:{
    question_tag: "L2LITLP66Q2",
   code: "3198",
   title: "Eng Q24",
   learner_question: "Which word rhymes with \'go\'? \r\n1. dough \r\n2. to \r\n3. got",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Go and dough end with the long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. Go and dough end with the long \'o\' sound.",
    set: 12
    },

  3199:{
    question_tag: "L2LITLP67QG",
   code: "3199",
   title: "Eng Class Q13",
   learner_question: "\r\n1. helper \r\n2. daughter \r\n3. hot",
    question: "Which word rhymes with hotter? Words that rhyme have the same end sound. Which word rhymes with hotter? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Daughter and Hotter have the same end sounds.",
    incorrectAnswerResponse: "Incorrect. Daughter and Hotter have the same end sounds.",
    set: 13
    },

  3200:{
    question_tag: "L2LITLP67Q1",
   code: "3200",
   title: "Eng Q25",
   learner_question: "Which word rhymes with \'got\'? \r\n2. gone \r\n2. rote \r\n3. fought",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Fought and got have the same end sound.",
    incorrectAnswerResponse: "Incorrect. Fought and got have the same end sound.",
    set: 13
    },

  3201:{
    question_tag: "L2LITLP67Q2",
   code: "3201",
   title: "Eng Q26",
   learner_question: "I get water from the ___. \r\n1. faucet \r\n2. author \r\n3. awe",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I get water from the faucet.",
    incorrectAnswerResponse: "Incorrect. I get water from the faucet.",
    set: 13
    },

  3202:{
    question_tag: "L2LITLP68QG",
   code: "3202",
   title: "Eng Class Q14 ",
   learner_question: "\r\n1. Musically \r\n2. Musician \r\n3. Muscles",
    question: "I will say a word. Enter the number of the word I say. Listen: Musician. Musician. Which word is Musician?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Musician. Musicians play music.",
    incorrectAnswerResponse: "Incorrect. Musician. Musicians play music.",
    set: 14
    },

  3203:{
    question_tag: "L2LITLP68Q1",
   code: "3203",
   title: "Eng Q27",
   learner_question: "Which is correct? \r\n1. Posative \r\n2. Posetive \r\n3. Positive",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Positive",
    incorrectAnswerResponse: "Incorrect. Positive",
    set: 14
    },

  3204:{
    question_tag: "L2LITLP68Q2",
   code: "3204",
   title: "Eng Q28",
   learner_question: "We wait at the bus ___. \r\n1. transportation \r\n2. station \r\n3. supervision",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) We wait at the bus station.",
    incorrectAnswerResponse: "Incorrect. We wait at the bus station.",
    set: 14
    },

  3205:{
    question_tag: "L2LITLP69QG",
   code: "3205",
   title: "Eng Class Q15",
   learner_question: "\r\n1. There are a cat on the table. \r\n2. There is three dogs on the table. \r\n3. There is a dog on the table.",
    question: "Which sentence is correct? Enter the number of the correct sentence.",
    answer: "3",
    correctAnswerResponse: "Correct! :) There is a dog on the table.",
    incorrectAnswerResponse: "Incorrect. There is a dog on the table.",
    set: 15
    },

  3206:{
    question_tag: "L2LITLP69Q1",
   code: "3206",
   title: "Eng Q29",
   learner_question: "Which is an illness? \r\n1. Bronchitis \r\n2. Agriculture \r\n3. Pamphlets",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Bronchitis is an illness.",
    incorrectAnswerResponse: "Incorrect. Bronchitis is an illness.",
    set: 15
    },

  3207:{
    question_tag: "L2LITLP69Q2",
   code: "3207",
   title: "Eng Q30",
   learner_question: "Which is a word for birds we eat? \r\n1. wonder \r\n2. advisory \r\n3. fowl",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Fowl are birds we eat, like chicken and ducks.",
    incorrectAnswerResponse: "Incorrect. Fowl are birds we eat, like chicken and ducks.",
    set: 15
    },

  3208:{
    question_tag: "L2LITLP70QG",
   code: "3208",
   title: "Eng Class Q16",
   learner_question: "A new job is a good___. \r\n1. threat \r\n2. opportunity \r\n3. weakness",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A new job is a good opportunity. An opportunity is a chance to do something.",
    incorrectAnswerResponse: "Incorrect. A new job is a good opportunity. An opportunity is a chance to do something.",
    set: 16
    },

  3209:{
    question_tag: "L2LITLP70Q1",
   code: "3209",
   title: "Eng Q31",
   learner_question: "Which word rhymes with \'seem\'? \r\n1. team \r\n2. them \r\n3. ram",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Seem and team have the same long \'e\' sound.",
    incorrectAnswerResponse: "Incorrect. Seem and team have the same long \'e\' sound.",
    set: 16
    },

  3210:{
    question_tag: "L2LITLP70Q2",
   code: "3210",
   title: "Eng Q32",
   learner_question: "Which word rhymes with \'fed\'? \r\n1. thread \r\n2. seed \r\n3. net",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Fed and thread have the same end sound.",
    incorrectAnswerResponse: "Incorrect. Fed and thread have the same end sound.",
    set: 16
    },

  3211:{
    question_tag: "L2LITLP71QG",
   code: "3211",
   title: "Eng Class Q17",
   learner_question: "\r\n1. Dan and Mary. \r\n2. The cats run. \r\n3. Ben walks.",
    question: "Which is NOT a complete sentence? Enter the number of the sentence that is NOT complete.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Dan and Mary is not a sentence. There is no verb.",
    incorrectAnswerResponse: "Incorrect. Dan and Mary is not a sentence. There is no verb.",
    set: 17
    },

  3212:{
    question_tag: "L2LITLP71Q1",
   code: "3212",
   title: "Eng Q33",
   learner_question: "Which is correct? \r\n1. There are two men here. \r\n2. There is three men here. \r\n3. There are a man here.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) There are two men here.",
    incorrectAnswerResponse: "Incorrect. There are two men here.",
    set: 17
    },

  3213:{
    question_tag: "L2LITLP71Q2",
   code: "3213",
   title: "Eng Q34",
   learner_question: "Which word rhymes with \'so\'? \r\n1. soon \r\n2. dough \r\n3. two",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) So and dough both end with the long \'o\' sound.",
    incorrectAnswerResponse: "Incorrect. So and dough both end with the long \'o\' sound.",
    set: 17
    },

  3214:{
    question_tag: "L2LITLP72QG",
   code: "3214",
   title: "Eng Class Q18",
   learner_question: "\r\n1. The three big cats. \r\n2. Sonie sees it. \r\n3. Dan goes.",
    question: "Which is NOT a complete sentence? Enter the number of the sentence that is NOT complete.",
    answer: "1",
    correctAnswerResponse: "Correct! :) \"The three big cats.\" is not a sentence. There is no verb. What did the cats do?",
    incorrectAnswerResponse: "Incorrect. \"The three big cats.\" is not a sentence. There is no verb. What did the cats do?",
    set: 18
    },

  3215:{
    question_tag: "L2LITLP72Q1",
   code: "3215",
   title: "Eng Q35",
   learner_question: "Sara __ a pencil. \r\n1. rough \r\n2. mention \r\n3. brought",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Sara brought a pencil.",
    incorrectAnswerResponse: "Incorrect. Sara brought a pencil.",
    set: 18
    },

  3216:{
    question_tag: "L2LITLP72Q2",
   code: "3216",
   title: "Eng Q36",
   learner_question: "Happy and sad are ___. \r\n1. negative \r\n2. election \r\n3. emotions",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Happy, sad, and angry are emotions.",
    incorrectAnswerResponse: "Incorrect. Happy, sad, and angry are emotions.",
    set: 18
    },

  3217:{
    question_tag: "L2LITLP73QG",
   code: "3217",
   title: "Eng Class Q19",
   learner_question: "\r\n1. Quicking \r\n2. Skimming \r\n3. Running",
    question: "What is it called when we read something quickly to get the idea? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Skimming is reading something quickly to get the idea.",
    incorrectAnswerResponse: "Incorrect. Skimming is reading something quickly to get the idea.",
    set: 19
    },

  3218:{
    question_tag: "L2LITLP73Q1",
   code: "3218",
   title: "Eng Q37",
   learner_question: "Sara had to ___ her house after the storm. \r\n1. economy \r\n2. excited \r\n3. rebuild",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Sara had to rebuild her house after the storm.",
    incorrectAnswerResponse: "Incorrect. Sara had to rebuild her house after the storm.",
    set: 19
    },

  3219:{
    question_tag: "L2LITLP73Q2",
   code: "3219",
   title: "Eng Q38",
   learner_question: "The __ of the book is \"Hope\". \r\n1. title \r\n2. crops \r\n3. skim",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The title of the book is \"Hope\".",
    incorrectAnswerResponse: "Incorrect. The title of the book is \"Hope\".",
    set: 19
    },

  3220:{
    question_tag: "L2LITLP74QG",
   code: "3220",
   title: "Eng Class Q20",
   learner_question: "\r\n1. again \r\n2. before \r\n3. not",
    question: "What does the prefix \'re\' usually mean? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The prefix \"re\" usually means \'again\'. Replay, replant, rebuild.",
    incorrectAnswerResponse: "Incorrect. The prefix \"re\" usually means \'again\'. Replay, replant, rebuild.",
    set: 20
    },

  3221:{
    question_tag: "L2LITLP74Q1",
   code: "3221",
   title: "Eng Q39",
   learner_question: "What does \"remake\" mean? \r\n1. Make before \r\n2. Make again \r\n3. Destroy",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Remake means make again. The prefix \"re\" often means \'again\'.",
    incorrectAnswerResponse: "Incorrect. Remake means make again. The prefix \"re\" often means \'again\'.",
    set: 20
    },

  3222:{
    question_tag: "L2LITLP74Q2",
   code: "3222",
   title: "Eng Q40",
   learner_question: "I will ___ the book quickly. \r\n1. replant \r\n2. economy \r\n3. skim",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I will skim the book quickly.",
    incorrectAnswerResponse: "Incorrect. I will skim the book quickly.",
    set: 20
    },

  3223:{
    question_tag: "L2LITLP75QG",
   code: "3223",
   title: "Eng Class Q21",
   learner_question: "\r\n1. Environment \r\n2. Economize \r\n3. Elections",
    question: "Which word is \'environment\'? Enter the number of the word \'environment\'. Environment.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Environment",
    incorrectAnswerResponse: "Incorrect. Environment",
    set: 21
    },

  3224:{
    question_tag: "L2LITLP75Q1",
   code: "3224",
   title: "Eng Q41",
   learner_question: "She is the __ girl in class. \r\n1. tall \r\n2. taller \r\n3. tallest",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She is the tallest girl in class.",
    incorrectAnswerResponse: "Incorrect. She is the tallest girl in class.",
    set: 21
    },

  3225:{
    question_tag: "L2LITLP75Q2",
   code: "3225",
   title: "Eng Q42",
   learner_question: "He is a ___ boy. \r\n1. kind \r\n2. kinder \r\n3. kindest",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) He is a kind boy.",
    incorrectAnswerResponse: "Incorrect. He is a kind boy.",
    set: 21
    },

  3226:{
    question_tag: "L2LITLP76QG",
   code: "3226",
   title: "Eng Class Q22",
   learner_question: "\r\n1. soil \r\n2. factories \r\n3. workers",
    question: "Which is a \'capital resource\'? Enter the number of the capital resource.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Capital resources are things we buy or make.",
    incorrectAnswerResponse: "Incorrect. Capital resources are things we buy or make.",
    set: 22
    },

  3227:{
    question_tag: "L2LITLP76Q1",
   code: "3227",
   title: "Eng Q43",
   learner_question: "Which is a labor resource? \r\n1. farmers \r\n2. shovels \r\n3. forests",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Labor resources are the people who do work.",
    incorrectAnswerResponse: "Incorrect. Labor resources are the people who do work.",
    set: 22
    },

  3228:{
    question_tag: "L2LITLP76Q2",
   code: "3228",
   title: "Eng Q44",
   learner_question: "Which is a natural resources? \r\n1. trees \r\n2. factories \r\n3. teachers",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Natural resources are resources that are not made by people.",
    incorrectAnswerResponse: "Incorrect. Natural resources are resources that are not made by people.",
    set: 22
    },

  3229:{
    question_tag: "L2LITLP77QG",
   code: "3229",
   title: "Eng Class Q23",
   learner_question: "\r\n1. children \r\n2. water \r\n3. pencils",
    question: "Which is an uncountable word? Enter the number of the uncountable word.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Water is uncountable. We ask for \'some\' water or \'a cup\' of water etc.",
    incorrectAnswerResponse: "Incorrect. Water is uncountable. We ask for \'some\' water or \'a cup\' of water etc.",
    set: 23
    },

  3230:{
    question_tag: "L2LITLP77Q1",
   code: "3230",
   title: "Eng Q45",
   learner_question: "___ ____ trees are there? \r\n1. How much \r\n2. How many \r\n3. Which ones",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) How many trees are there? Trees are countable.",
    incorrectAnswerResponse: "Incorrect. How many trees are there? Trees are countable.",
    set: 23
    },

  3231:{
    question_tag: "L2LITLP77Q2",
   code: "3231",
   title: "Eng Q46",
   learner_question: "___ ____ milk is left? \r\n1. How much \r\n2. How many \r\n3. Which ones",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) How much milk is left? Milk is uncountable.",
    incorrectAnswerResponse: "Incorrect. How much milk is left? Milk is uncountable.",
    set: 23
    },

  3232:{
    question_tag: "L2LITLP78QG",
   code: "3232",
   title: "Eng Class Q24",
   learner_question: "\r\n1. teachers \r\n2. shopkeepers \r\n3. farmers",
    question: "Who works in agriculture? Enter the number of the correct answer. Who works in agriculture.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Farmers work in agriculture.",
    incorrectAnswerResponse: "Incorrect. Farmers work in agriculture.",
    set: 24
    },

  3233:{
    question_tag: "L2LITLP78Q1",
   code: "3233",
   title: "Eng Q47",
   learner_question: "__ are sent to other countries. \r\n1. imports \r\n2. capital \r\n3. exports",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Exports are sent to other countries.",
    incorrectAnswerResponse: "Incorrect. Exports are sent to other countries.",
    set: 24
    },

  3234:{
    question_tag: "L2LITLP78Q2",
   code: "3234",
   title: "Eng Q48",
   learner_question: "Which is a \'basic need\'? \r\n1. food \r\n2. work \r\n3. love",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Basic needs are things people need to live.",
    incorrectAnswerResponse: "Incorrect. Basic needs are things people need to live.",
    set: 24
    },

  3235:{
    question_tag: "L2LITLP79QG",
   code: "3235",
   title: "Eng Class Q25",
   learner_question: "\r\n1. Eksport \r\n2. Export \r\n3. Ecsport",
    question: "Which word is \'export\'? Enter the number of the word \'export\'.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Export",
    incorrectAnswerResponse: "Incorrect. Export",
    set: 25
    },

  3236:{
    question_tag: "L2LITLP79Q1",
   code: "3236",
   title: "Eng Q49",
   learner_question: "___ grows under the ground. \r\n1. rice \r\n2. cassava \r\n3. palm",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Cassava grows under the ground.",
    incorrectAnswerResponse: "Incorrect. Cassava grows under the ground.",
    set: 25
    },

  3237:{
    question_tag: "L2LITLP79Q2",
   code: "3237",
   title: "Eng Q50",
   learner_question: "___ ____ water do you want? \r\n1. How much \r\n2. How many \r\n3. Which ones",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) How much water do you want? Water is uncountable.",
    incorrectAnswerResponse: "Incorrect. How much water do you want? Water is uncountable.",
    set: 25
    },

  3238:{
    question_tag: "L2LITLP80QG",
   code: "3238",
   title: "Eng Class Q26",
   learner_question: "\r\n1. Weather \r\n2. Without \r\n3. Wealthy",
    question: "I will say a word. Enter the number of the word I say. Wealthy. Wealthy. Which word is Wealthy?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Wealthy",
    incorrectAnswerResponse: "Incorrect. Wealthy",
    set: 26
    },

  3239:{
    question_tag: "L2LITLP80Q1",
   code: "3239",
   title: "Eng Q51",
   learner_question: "A cat is ___ than a dog. \r\n1. small \r\n2. smaller \r\n3. smallest",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A cat is smaller than a dog.",
    incorrectAnswerResponse: "Incorrect. A cat is smaller than a dog.",
    set: 26
    },

  3240:{
    question_tag: "L2LITLP80Q2",
   code: "3240",
   title: "Eng Q52",
   learner_question: "Today is the __ of the year. \r\n1. hot \r\n2. hotter \r\n3. hottest",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Today is the hottest day of the year.",
    incorrectAnswerResponse: "Incorrect. Today is the hottest day of the year.",
    set: 26
    },

  3241:{
    question_tag: "L2LITLP81QG",
   code: "3241",
   title: "Eng Class Q27",
   learner_question: "\r\n1. The country makes too much of something. \r\n2. The county needs more of something. \r\n3. The country has no money.",
    question: "Why might a country \'import\' something? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) When we \'import\' we bring things into a country.",
    incorrectAnswerResponse: "Incorrect. When we \'import\' we bring things into a country.",
    set: 27
    },

  3242:{
    question_tag: "L2LITLP81Q1",
   code: "3242",
   title: "Eng Q53",
   learner_question: "What does \"replant\" mean? \r\n1. plant before \r\n2. plant again \r\n3. harvest",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Replant means to plant again.",
    incorrectAnswerResponse: "Incorrect. Replant means to plant again.",
    set: 27
    },

  3243:{
    question_tag: "L2LITLP81Q2",
   code: "3243",
   title: "Eng Q54",
   learner_question: "What kind of resource is a tree? \r\n1. natural \r\n2. labor \r\n3. capital",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Trees are natural resources.",
    incorrectAnswerResponse: "Incorrect. Trees are natural resources.",
    set: 27
    },

  3244:{
    question_tag: "L2LITLP82QG",
   code: "3244",
   title: "Eng Class Q28",
   learner_question: "\r\n1. Seeds \r\n2. Seedlings \r\n3. Babies",
    question: "Which is another word for very young plants that have just started to grow? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Seedlings are very young plants.",
    incorrectAnswerResponse: "Incorrect. Seedlings are very young plants.",
    set: 28
    },

  3245:{
    question_tag: "L2LITLP82Q1",
   code: "3245",
   title: "Eng Q55",
   learner_question: "Flomo put __ on the crops. \r\n1. compost \r\n2. hoe \r\n3. harvest",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Flomo put compost on the crops.",
    incorrectAnswerResponse: "Incorrect. Flomo put compost on the crops.",
    set: 28
    },

  3246:{
    question_tag: "L2LITLP82Q2",
   code: "3246",
   title: "Eng Q56",
   learner_question: "I use a __ to harvest the plants. \r\n1. burn \r\n2. brush \r\n3. cutlass",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I use a cutlass to harvest the plants.",
    incorrectAnswerResponse: "Incorrect. I use a cutlass to harvest the plants.",
    set: 28
    },

  3247:{
    question_tag: "L2LITLP83QG",
   code: "3247",
   title: "Eng Class Q29",
   learner_question: "\r\n1. plant seeds \r\n2. harvest crops \r\n3. prepare the ground",
    question: "Which comes first in the crop cycle? Enter the number of the first step.",
    answer: "3",
    correctAnswerResponse: "Correct! :) The firsts step in the crop cycle is to prepare the land.",
    incorrectAnswerResponse: "Incorrect. The firsts step in the crop cycle is to prepare the land.",
    set: 29
    },

  3248:{
    question_tag: "L2LITLP83Q1",
   code: "3248",
   title: "Eng Q57",
   learner_question: "___ can eat plants. \r\n1. storage \r\n2. inputs \r\n3. pests",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) pests can eat crops.",
    incorrectAnswerResponse: "Incorrect. pests can eat crops.",
    set: 29
    },

  3249:{
    question_tag: "L2LITLP83Q2",
   code: "3249",
   title: "Eng Q58",
   learner_question: "Which is an \'input\'? \r\n1. a farmer \r\n2. seeds \r\n2. crops",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Seeds are inputs",
    incorrectAnswerResponse: "Incorrect. Seeds are inputs",
    set: 29
    },

  3250:{
    question_tag: "L2LITLP84QG",
   code: "3250",
   title: "Eng Class Q30",
   learner_question: "\r\n1. leaves \r\n2. branches \r\n3. roots",
    question: "Which part of a plant is under the ground? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Roots are under the ground.",
    incorrectAnswerResponse: "Incorrect. Roots are under the ground.",
    set: 30
    },

  3251:{
    question_tag: "L2LITLP84Q1",
   code: "3251",
   title: "Eng Q59",
   learner_question: "___ and pests kill crops. \r\n1. sticky \r\n2. weeds \r\n3. rocky",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Weeds and pests kill crops.",
    incorrectAnswerResponse: "Incorrect. Weeds and pests kill crops.",
    set: 30
    },

  3252:{
    question_tag: "L2LITLP84Q2",
   code: "3252",
   title: "Eng Q60",
   learner_question: "The soil is ___. \r\n1. sandy \r\n2. sandier \r\n3. sandiest",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The soil is sandy.",
    incorrectAnswerResponse: "Incorrect. The soil is sandy.",
    set: 30
    },

  3253:{
    question_tag: "L2LITLP85QG",
   code: "3253",
   title: "Eng Class Q31",
   learner_question: "\r\n1. Transporting \r\n2. Transports \r\n3. Transported",
    question: "Which is the past tense of the regular verb \'transport\'? Enter the number of the past tense of \'transport\'.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Transported. Regular verbs end in \'ed\' in the past tense.",
    incorrectAnswerResponse: "Incorrect. Transported. Regular verbs end in \'ed\' in the past tense.",
    set: 31
    },

  3254:{
    question_tag: "L2LITLP85Q1",
   code: "3254",
   title: "Eng Q61",
   learner_question: "Yesterday, I ___ in the shop. \r\n1. worked \r\n2. works \r\n3. work",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Yesterday, I worked in the shop.",
    incorrectAnswerResponse: "Incorrect. Yesterday, I worked in the shop.",
    set: 31
    },

  3255:{
    question_tag: "L2LITLP85Q2",
   code: "3255",
   title: "Eng Q62",
   learner_question: "Tomorrow, I will ____ seeds. \r\n1. planted \r\n2. plants \r\n3. plant",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Tomorrow, I will plant seeds.",
    incorrectAnswerResponse: "Incorrect. Tomorrow, I will plant seeds.",
    set: 31
    },

  3256:{
    question_tag: "L2LITLP86QG",
   code: "3256",
   title: "Eng Class Q32",
   learner_question: "\r\n1. planted \r\n2. grew \r\n3. harvested",
    question: "Which verb is an \'irregular\' past tense verb? Enter the number of the irregular past tense verb.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Grew is an irregular past tense verb because it does not end in \'ed\'.",
    incorrectAnswerResponse: "Incorrect. Grew is an irregular past tense verb because it does not end in \'ed\'.",
    set: 32
    },

  3257:{
    question_tag: "L2LITLP86Q1",
   code: "3257",
   title: "Eng Q63",
   learner_question: "I don\'t like cats __ I like dogs. \r\n1. and \r\n2. or \r\n3. but",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I don\'t like cats, but I like dogs.",
    incorrectAnswerResponse: "Incorrect. I don\'t like cats, but I like dogs.",
    set: 32
    },

  3258:{
    question_tag: "L2LITLP86Q2",
   code: "3258",
   title: "Eng Q64",
   learner_question: "I have a cat __ a dog. \r\n1. and \r\n2. or \r\n3. so",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I have a cat and a dog.",
    incorrectAnswerResponse: "Incorrect. I have a cat and a dog.",
    set: 32
    },

  3259:{
    question_tag: "L2LITLP87QG",
   code: "3259",
   title: "Eng Class Q33",
   learner_question: "\r\n1. Chart \r\n2. Heart \r\n3. Chatter",
    question: "I will say a word. Choose the number of the word I say. Listen. Chart. Chart. Which word is Chart.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Chart",
    incorrectAnswerResponse: "Incorrect. Chart",
    set: 33
    },

  3260:{
    question_tag: "L2LITLP87Q1",
   code: "3260",
   title: "Eng Q65",
   learner_question: "The __ is too hot for me. \r\n1. bitterball \r\n2. pepper \r\n3. cassava",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The pepper is too hot for me.",
    incorrectAnswerResponse: "Incorrect. The pepper is too hot for me.",
    set: 33
    },

  3261:{
    question_tag: "L2LITLP87Q2",
   code: "3261",
   title: "Eng Q66",
   learner_question: "Yesterday, I ___ the seeds. \r\n1. planted \r\n2. planting \r\n3. plant",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Yesterday, I planted the seeds.",
    incorrectAnswerResponse: "Incorrect. Yesterday, I planted the seeds.",
    set: 33
    },

  3262:{
    question_tag: "L2LITLP88QG",
   code: "3262",
   title: "Eng Class Q34",
   learner_question: "\r\n1. Harvesting \r\n2. Processing \r\n3. Eating",
    question: "Which does NOT add value to a crop? Enter the number of the answer that does NOT add value.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Eating a crop takes all of it\'s value away.",
    incorrectAnswerResponse: "Incorrect. Eating a crop takes all of it\'s value away.",
    set: 34
    },

  3263:{
    question_tag: "L2LITLP88Q1",
   code: "3263",
   title: "Eng Q67",
   learner_question: "Put the butter back in the ___. \r\n1. grater \r\n2. middleman \r\n3. package",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Put the butter back in the package.",
    incorrectAnswerResponse: "Incorrect. Put the butter back in the package.",
    set: 34
    },

  3264:{
    question_tag: "L2LITLP88Q2",
   code: "3264",
   title: "Eng Q68",
   learner_question: "Who does NOT add value? \r\n1. farmer \r\n2. consumer \r\n3. seller",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Consumers do not add value to a product.",
    incorrectAnswerResponse: "Incorrect. Consumers do not add value to a product.",
    set: 34
    },

  3265:{
    question_tag: "L2LITLP89QG",
   code: "3265",
   title: "Eng Class Q35",
   learner_question: "\r\n1. parked \r\n2. parks \r\n3. parken",
    question: "What is the past tense of the regular verb \'park\'. Enter the number of the past tense of the regular verb \'park\'.",
    answer: "1",
    correctAnswerResponse: "Correct! :) parked",
    incorrectAnswerResponse: "Incorrect. parked",
    set: 35
    },

  3266:{
    question_tag: "L2LITLP89Q1",
   code: "3266",
   title: "Eng Q69",
   learner_question: "Yesterday, I __ a red bird. \r\n1. see \r\n2. seeing \r\n3. saw",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Yesterday, I saw a red bird.",
    incorrectAnswerResponse: "Incorrect. Yesterday, I saw a red bird.",
    set: 35
    },

  3267:{
    question_tag: "L2LITLP89Q2",
   code: "3267",
   title: "Eng Q70",
   learner_question: "What does \'redo\' mean? \r\n1. do again \r\n2. do better \r\n3. undo",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Redo means \'do again\'. The prefix \'re\' often means \'again\'.",
    incorrectAnswerResponse: "Incorrect. Redo means \'do again\'. The prefix \'re\' often means \'again\'.",
    set: 35
    },

  3268:{
    question_tag: "L2LITLP90QG",
   code: "3268",
   title: "Eng Class Q36",
   learner_question: "\r\n1. Prepare the ground. \r\n2. Plant the seeds. \r\n3. Sell the crops",
    question: "Which is the LAST step in the crop cycle? Enter the number of the last step in the crop cycle.",
    answer: "3",
    correctAnswerResponse: "Correct! :) The last step in the crop cycle is selling them.",
    incorrectAnswerResponse: "Incorrect. The last step in the crop cycle is selling them.",
    set: 36
    },

  3269:{
    question_tag: "L2LITLP90Q1",
   code: "3269",
   title: "Eng Q71",
   learner_question: "Yesterday, I ___ the garden. \r\n1. weeding \r\n2. weeded \r\n3. weeds",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Yesterday, I weeded the garden.",
    incorrectAnswerResponse: "Incorrect. Yesterday, I weeded the garden.",
    set: 36
    },

  3270:{
    question_tag: "L2LITLP90Q2",
   code: "3270",
   title: "Eng Q72",
   learner_question: "___ are sent to other countries. \r\n1. imports \r\n2. exports \r\n3. economy",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Exports are sent to other countries.",
    incorrectAnswerResponse: "Incorrect. Exports are sent to other countries.",
    set: 36
    },

  3271:{
    question_tag: "L2LITLP91QG",
   code: "3271",
   title: "Eng Class Q37",
   learner_question: "\r\n1. Carryied \r\n2. Carried \r\n3. Carries",
    question: "Which is the past tense of the regular verb carry? Enter the number of the correct answer. Carry.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Carried is the past tense of carry. We often replace \'y\' with \'ied\' in the past tense.",
    incorrectAnswerResponse: "Incorrect. Carried is the past tense of carry. We often replace \'y\' with \'ied\' in the past tense.",
    set: 37
    },

  3272:{
    question_tag: "L2LITLP91Q1",
   code: "3272",
   title: "Eng Q73",
   learner_question: "She ___ English last year. \r\n1. studyied \r\n2. studyed \r\n3. studied",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She studied English last year.",
    incorrectAnswerResponse: "Incorrect. She studied English last year.",
    set: 37
    },

  3273:{
    question_tag: "L2LITLP91Q2",
   code: "3273",
   title: "Eng Q74",
   learner_question: "Flomo was __ for sleeping at work. \r\n2. fired \r\n2. hired \r\n3. applied",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Flomo was fired for sleeping at work.",
    incorrectAnswerResponse: "Incorrect. Flomo was fired for sleeping at work.",
    set: 37
    },

  3274:{
    question_tag: "L2LITLP92QG",
   code: "3274",
   title: "Eng Class Q38",
   learner_question: "\r\n1. A friend \r\n2. A parent \r\n3. A teacher",
    question: "Who could write a \'reference\' for you? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) A teacher can write a letter of reference.",
    incorrectAnswerResponse: "Incorrect. A teacher can write a letter of reference.",
    set: 38
    },

  3275:{
    question_tag: "L2LITLP92Q1",
   code: "3275",
   title: "Eng Q75",
   learner_question: "The manager wants to hire a new ___. \r\n1. network \r\n2. employee \r\n3. suddenly.",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The manager wants to hire a new employee.",
    incorrectAnswerResponse: "Incorrect. The manager wants to hire a new employee.",
    set: 38
    },

  3276:{
    question_tag: "L2LITLP92Q2",
   code: "3276",
   title: "Eng Q76",
   learner_question: "Yesterday, I ___ about getting a job. \r\n1. thinked \r\n2. thinking \r\n3. thought",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Yesterday, I thought about getting a job.",
    incorrectAnswerResponse: "Incorrect. Yesterday, I thought about getting a job.",
    set: 38
    },

  3277:{
    question_tag: "L2LITLP93QG",
   code: "3277",
   title: "Eng Class Q39",
   learner_question: "\r\n1. An application \r\n2. An applying \r\n3. A reference",
    question: "What do we call the papers we complete to apply for a job? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) An application is what we write to apply for a job.",
    incorrectAnswerResponse: "Incorrect. An application is what we write to apply for a job.",
    set: 39
    },

  3278:{
    question_tag: "L2LITLP93Q1",
   code: "3278",
   title: "Eng Q77",
   learner_question: "She got a ___ 30/30 on her exam. \r\n1. mistake \r\n2. perfect \r\n3. application",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She got a perfect 30/30 on her exam.",
    incorrectAnswerResponse: "Incorrect. She got a perfect 30/30 on her exam.",
    set: 39
    },

  3279:{
    question_tag: "L2LITLP93Q2",
   code: "3279",
   title: "Eng Q78",
   learner_question: "Flomo\'s __ fired him. \r\n1. employee \r\n2. employ \r\n3. employer",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Flomo\'s employer fired him.",
    incorrectAnswerResponse: "Incorrect. Flomo\'s employer fired him.",
    set: 39
    },

  3280:{
    question_tag: "L2LITLP94QG",
   code: "3280",
   title: "Eng Class Q40",
   learner_question: "\r\n1. I were happy. \r\n2. They were happy. \r\n3. She were happy.",
    question: "Which sentence is correct? Enter the number of the correct sentence.",
    answer: "2",
    correctAnswerResponse: "Correct! :) They were happy. We use \'were\' with they, we, and you.",
    incorrectAnswerResponse: "Incorrect. They were happy. We use \'were\' with they, we, and you.",
    set: 40
    },

  3281:{
    question_tag: "L2LITLP94Q1",
   code: "3281",
   title: "Eng Q79",
   learner_question: "She __ been waiting. \r\n1. has \r\n2. have \r\n3. were",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) She has been waiting. We use \'has\' with he, she, and it.",
    incorrectAnswerResponse: "Incorrect. She has been waiting. We use \'has\' with he, she, and it.",
    set: 40
    },

  3282:{
    question_tag: "L2LITLP94Q2",
   code: "3282",
   title: "Eng Q80",
   learner_question: "You __ been warned. \r\n1. has \r\n2. have \r\n3. were",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) You have been warned. We use have with I, they, we, and you.",
    incorrectAnswerResponse: "Incorrect. You have been warned. We use have with I, they, we, and you.",
    set: 40
    },

  3283:{
    question_tag: "L2LITLP95QG",
   code: "3283",
   title: "Eng Class Q41",
   learner_question: "\r\n1. reasonable \r\n2. responsible \r\n3. responsibility",
    question: "I will say a word. Choose the number of the word I say. Listen. Responsibility. Responsibility. Which word is Responsibility.",
    answer: "3",
    correctAnswerResponse: "Correct! :) responsibility",
    incorrectAnswerResponse: "Incorrect. responsibility",
    set: 41
    },

  3284:{
    question_tag: "L2LITLP95Q1",
   code: "3284",
   title: "Eng Q81",
   learner_question: "Yesterday, Sonie ___ a letter. \r\n1. copied \r\n2. thought \r\n3. personal",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Yesterday, Sonie copied a letter.",
    incorrectAnswerResponse: "Incorrect. Yesterday, Sonie copied a letter.",
    set: 41
    },

  3285:{
    question_tag: "L2LITLP95Q2",
   code: "3285",
   title: "Eng Q82",
   learner_question: "Jane __ money in the street yesterday. \r\n1. find \r\n2. information \r\n3. found",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Jane found money in the street yesterday.",
    incorrectAnswerResponse: "Incorrect. Jane found money in the street yesterday.",
    set: 41
    },

  3286:{
    question_tag: "L2LITLP96QG",
   code: "3286",
   title: "Eng Class Q42",
   learner_question: "\r\n1. Str. \r\n2. S. \r\n3. St.",
    question: "What is the short form of \'Street\"? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) St. = street",
    incorrectAnswerResponse: "Incorrect. St. = street",
    set: 42
    },

  3287:{
    question_tag: "L2LITLP96Q1",
   code: "3287",
   title: "Eng Q83",
   learner_question: "Short form of Doctor? \r\n1. Dr. \r\n2. Doc. \r\n3. Dc.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Dr. = Doctor",
    incorrectAnswerResponse: "Incorrect. Dr. = Doctor",
    set: 42
    },

  3288:{
    question_tag: "L2LITLP96Q2",
   code: "3288",
   title: "Eng Q84",
   learner_question: "Which is an age? \r\n1. Mister \r\n2. 48 \r\n3. January 12th",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Age is how old a person is.",
    incorrectAnswerResponse: "Incorrect. Age is how old a person is.",
    set: 42
    },

  3289:{
    question_tag: "L2LITLP97QG",
   code: "3289",
   title: "Eng Class Q43",
   learner_question: "\r\n1. An application \r\n2. An experience \r\n3. A interview",
    question: "What is it called when one person asks another questions to learn about them? ",
    answer: "3",
    correctAnswerResponse: "Correct! :) In an interview, you are asked many questions about yourself.",
    incorrectAnswerResponse: "Incorrect. In an interview, you are asked many questions about yourself.",
    set: 43
    },

  3290:{
    question_tag: "L2LITLP97Q1",
   code: "3290",
   title: "Eng Q85",
   learner_question: "Many __ wait to see the doctor. \r\n1. leaders \r\n2. patients \r\n3. decisions",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Many patients wait to see the doctor.",
    incorrectAnswerResponse: "Incorrect. Many patients wait to see the doctor.",
    set: 43
    },

  3291:{
    question_tag: "L2LITLP97Q2",
   code: "3291",
   title: "Eng Q86",
   learner_question: "We must wash with soap to kill ___. \r\n1. germs \r\n2. experiences \r\n3. avenues",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) We must wash with soap to kill germs.",
    incorrectAnswerResponse: "Incorrect. We must wash with soap to kill germs.",
    set: 43
    },

  3292:{
    question_tag: "L2LITLP98QG",
   code: "3292",
   title: "Eng Class Q44",
   learner_question: "\r\n1. Wear sunglasses \r\n2. Wear a lappa dress or suit \r\n3. Wear good shoes",
    question: "Which should you NOT do in an interview? Enter the number of the answer you should NOT do.",
    answer: "1",
    correctAnswerResponse: "Correct! :) You should not wear sunglasses to an interview.",
    incorrectAnswerResponse: "Incorrect. You should not wear sunglasses to an interview.",
    set: 44
    },

  3293:{
    question_tag: "L2LITLP98Q1",
   code: "3293",
   title: "Eng Q87",
   learner_question: "Which is a strength? \r\n1. working hard \r\n2. sleeping a lot \r\n3. fighting",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Hard work is a strength.",
    incorrectAnswerResponse: "Incorrect. Hard work is a strength.",
    set: 44
    },

  3294:{
    question_tag: "L2LITLP98Q2",
   code: "3294",
   title: "Eng Q88",
   learner_question: "Which is a weakness? \r\n1. working hard \r\n2. not reading \r\n3. dressing well",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Not reading is a weakness. A weakness is something that may harm you.",
    incorrectAnswerResponse: "Incorrect. Not reading is a weakness. A weakness is something that may harm you.",
    set: 44
    },

  3295:{
    question_tag: "L2LITLP99QG",
   code: "3295",
   title: "Eng Class Q45",
   learner_question: "\r\n1. Responsible \r\n2. Initiative \r\n3. Conflict",
    question: "Which word is not positive? Choose the word that is NOT positive.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Conflict is like a fight. Conflict is negative not positive.",
    incorrectAnswerResponse: "Incorrect. Conflict is like a fight. Conflict is negative not positive.",
    set: 45
    },

  3296:{
    question_tag: "L2LITLP99Q1",
   code: "3296",
   title: "Eng Q89",
   learner_question: "The dependable worker is not ___. \r\n1. late \r\n2. early \r\n3. helpful",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The dependable worker is not late.",
    incorrectAnswerResponse: "Incorrect. The dependable worker is not late.",
    set: 45
    },

  3297:{
    question_tag: "L2LITLP99Q2",
   code: "3297",
   title: "Eng Q90",
   learner_question: "___ skills are important for talking to people. \r\n1. Community \r\n2. Communication \r\n3. Customer",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Communication skills are important for talking to people.",
    incorrectAnswerResponse: "Incorrect. Communication skills are important for talking to people.",
    set: 45
    },

  3298:{
    question_tag: "L2LITLP100QG",
   code: "3298",
   title: "Eng Class Q46",
   learner_question: "\r\n1. Smiling \r\n2. Saying hello \r\n3. Running",
    question: "Which is an example of \'body language\'? Enter the example that shows body language.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Smiling is body language.",
    incorrectAnswerResponse: "Incorrect. Smiling is body language.",
    set: 46
    },

  3299:{
    question_tag: "L2LITLP100Q1",
   code: "3299",
   title: "Eng Q91",
   learner_question: "She has a lot of __ as a cook. \r\n1. dependable \r\n2. responsible \r\n3. experience ",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) She has a lot of experience as a cook.",
    incorrectAnswerResponse: "Incorrect. She has a lot of experience as a cook.",
    set: 46
    },

  3300:{
    question_tag: "L2LITLP100Q2",
   code: "3300",
   title: "Eng Q92",
   learner_question: "A cat is an ___ of a pet. \r\n1. experience \r\n2. example \r\n3. extra",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A cat is an example of a pet.",
    incorrectAnswerResponse: "Incorrect. A cat is an example of a pet.",
    set: 46
    },

  3301:{
    question_tag: "L2LITLP101QG",
   code: "3301",
   title: "Eng Class Q47",
   learner_question: "\r\n1. A teacher \r\n2. An employer \r\n3. A friend",
    question: "Who should NOT write a reference letter for you? Enter the number of the person who should NOT write a reference for you.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Reference letters should not be written by friends. Former employers are the best choice.",
    incorrectAnswerResponse: "Incorrect. Reference letters should not be written by friends. Former employers are the best choice.",
    set: 47
    },

  3302:{
    question_tag: "L2LITLP101Q1",
   code: "3302",
   title: "Eng Q93",
   learner_question: "The ___ for the job was 5 pages long. \r\n1. application \r\n2. interview \r\n3. employee",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The application for the job was 5 pages long.",
    incorrectAnswerResponse: "Incorrect. The application for the job was 5 pages long.",
    set: 47
    },

  3303:{
    question_tag: "L2LITLP101Q2",
   code: "3303",
   title: "Eng Q94",
   learner_question: "You write an application when you want ___. \r\n1. employee \r\n2. employment \r\n3. employ",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) You write an application when you want employment.",
    incorrectAnswerResponse: "Incorrect. You write an application when you want employment.",
    set: 47
    },

  3304:{
    question_tag: "L2LITLP102QG",
   code: "3304",
   title: "Eng Class Q48",
   learner_question: "\r\n1. Your clothes \r\n2. Your birthday \r\n3. Your address",
    question: "Which is a part of your appearance? Enter the number of the word that relates to your appearance.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Your appearance is how you look.",
    incorrectAnswerResponse: "Incorrect. Your appearance is how you look.",
    set: 48
    },

  3305:{
    question_tag: "L2LITLP102Q1",
   code: "3305",
   title: "Eng Q95",
   learner_question: "The shop sells good ___ clothes. \r\n1. quality \r\n2. communicate \r\n3. trust",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The shop sells good quality clothes.",
    incorrectAnswerResponse: "Incorrect. The shop sells good quality clothes.",
    set: 48
    },

  3306:{
    question_tag: "L2LITLP102Q2",
   code: "3306",
   title: "Eng Q96",
   learner_question: "Who is a \'co-worker\'? \r\n1. The person you work for. \r\n2. The person you work with. \r\n3. The person who works for you.",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A co-worker is someone who works with you at the same job.",
    incorrectAnswerResponse: "Incorrect. A co-worker is someone who works with you at the same job.",
    set: 48
    },

  3307:{
    question_tag: "L2LITLP103QG",
   code: "3307",
   title: "Eng Class Q49",
   learner_question: "\r\n1. Liberia is a Country. \r\n2. Jane lives in liberia. \r\n3. I went to Liberia on Friday.",
    question: "Which sentence is correctly capitalized? Enter the number of the correct sentence.",
    answer: "3",
    correctAnswerResponse: "Correct! :) I went to Liberia on Friday.",
    incorrectAnswerResponse: "Incorrect. I went to Liberia on Friday.",
    set: 49
    },

  3308:{
    question_tag: "L2LITLP103Q1",
   code: "3308",
   title: "Eng Q97",
   learner_question: "Which is correct? \r\n1. Flomo has a Cat. \r\n2. Monday is christmas day. \r\n3. The cats are hungry.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The cats are hungry.",
    incorrectAnswerResponse: "Incorrect. The cats are hungry.",
    set: 49
    },

  3309:{
    question_tag: "L2LITLP103Q2",
   code: "3309",
   title: "Eng Q98",
   learner_question: "Which is correct? \r\n1. December is Sara\'s birth month. \r\n2. Bong County is very Hot. \r\n3. we like Liberia!",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) December is Sara\'s birth month.",
    incorrectAnswerResponse: "Incorrect. December is Sara\'s birth month.",
    set: 49
    },

  3310:{
    question_tag: "L2LITLP104QG",
   code: "3310",
   title: "Eng Class Q50",
   learner_question: "\r\n1. ? \r\n2. ! \r\n3. \'",
    question: "Which is an apostrophe? Enter the number of the apostrophe.",
    answer: "3",
    correctAnswerResponse: "Correct! :) \' is an apostrophe.",
    incorrectAnswerResponse: "Incorrect. \' is an apostrophe.",
    set: 50
    },

  3311:{
    question_tag: "L2LITLP104Q1",
   code: "3311",
   title: "Eng Q99",
   learner_question: "This book is ___. \r\n1. Her \r\n2. She \r\n3. Hers",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) This book is hers.",
    incorrectAnswerResponse: "Incorrect. This book is hers.",
    set: 50
    },

  3312:{
    question_tag: "L2LITLP104Q2",
   code: "3312",
   title: "Eng Q100",
   learner_question: "It is __ book. \r\n1. Flomos \r\n2. Flomos\' \r\n3. Flomo\'s",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) It is Flomo\'s book.",
    incorrectAnswerResponse: "Incorrect. It is Flomo\'s book.",
    set: 50
    },

  3313:{
    question_tag: "L2LITLP105QG",
   code: "3313",
   title: "Eng Class Q51",
   learner_question: "\r\n1. water \r\n2. pencils \r\n3. people",
    question: "Which word cannot be counted? Enter the number of the word that cannot be counted.",
    answer: "1",
    correctAnswerResponse: "Correct! :) We do not count water.",
    incorrectAnswerResponse: "Incorrect. We do not count water.",
    set: 51
    },

  3314:{
    question_tag: "L2LITLP105Q1",
   code: "3314",
   title: "Eng Q101",
   learner_question: "How ___ children are here? \r\n1. many \r\n2. much \r\n3. little",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) How many children are here.",
    incorrectAnswerResponse: "Incorrect. How many children are here.",
    set: 51
    },

  3315:{
    question_tag: "L2LITLP105Q2",
   code: "3315",
   title: "Eng Q102",
   learner_question: "How ___ rice do you want? \r\n1. many \r\n2. much \r\n3. some",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) How much rice do you want?",
    incorrectAnswerResponse: "Incorrect. How much rice do you want?",
    set: 51
    },

  3316:{
    question_tag: "L2LITLP106QG",
   code: "3316",
   title: "Eng Class Q52",
   learner_question: "\r\n1. I like cats and dogs. \r\n2. I like cats but I like dogs. \r\n3. I like cats so I like dogs.",
    question: "Which sentence is correct? Enter the number of the correct sentence.",
    answer: "1",
    correctAnswerResponse: "Correct! :) I like cats and dogs.",
    incorrectAnswerResponse: "Incorrect. I like cats and dogs.",
    set: 52
    },

  3317:{
    question_tag: "L2LITLP106Q1",
   code: "3317",
   title: "Eng Q103",
   learner_question: "I am hungry ___ I will eat. \r\n1. or \r\n2. but \r\n3. so",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I am hungry, so I will eat.",
    incorrectAnswerResponse: "Incorrect. I am hungry, so I will eat.",
    set: 52
    },

  3318:{
    question_tag: "L2LITLP106Q2",
   code: "3318",
   title: "Eng Q104",
   learner_question: "I am wet ___ it is raining. \r\n1. because \r\n2. so \r\n3. although",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I am wet because it is raining.",
    incorrectAnswerResponse: "Incorrect. I am wet because it is raining.",
    set: 52
    },

  3319:{
    question_tag: "L2LITLP107QG",
   code: "3319",
   title: "Eng Class Q53",
   learner_question: "\r\n1. Being rude \r\n2. Dressing well \r\n3. Working hard",
    question: "Which is a weakness? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Weaknesses are things that can hurt you. Being rude is a weakness.",
    incorrectAnswerResponse: "Incorrect. Weaknesses are things that can hurt you. Being rude is a weakness.",
    set: 53
    },

  3320:{
    question_tag: "L2LITLP107Q1",
   code: "3320",
   title: "Eng Q105",
   learner_question: "The pen is ___. \r\n1. my \r\n2. mine \r\n3. my\'s",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The pen is mine.",
    incorrectAnswerResponse: "Incorrect. The pen is mine.",
    set: 53
    },

  3321:{
    question_tag: "L2LITLP107Q2",
   code: "3321",
   title: "Eng Q106",
   learner_question: "I like dogs __ I don\'t like cats. \r\n1. and \r\n2. because \r\n3. but",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) I like dogs but I don\'t like cats.",
    incorrectAnswerResponse: "Incorrect. I like dogs but I don\'t like cats.",
    set: 53
    },

  3322:{
    question_tag: "L2LITLP108QG",
   code: "3322",
   title: "Eng Class Q54",
   learner_question: "\r\n1. I like. \r\n2. Dan eats. \r\n3. Flomo has a dog.",
    question: "Which is NOT a complete sentence? Enter the number of the sentence that is NOT complete.",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'I like\' is not a complete sentence. It does not show a complete though- What do I like?",
    incorrectAnswerResponse: "Incorrect. \'I like\' is not a complete sentence. It does not show a complete though- What do I like?",
    set: 54
    },

  3323:{
    question_tag: "L2LITLP108Q1",
   code: "3323",
   title: "Eng Q107",
   learner_question: "That is __ cat. \r\n1. Jane \r\n2. Jane\'s \r\n3. Jane\'s",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) That is Jane\'s cat.",
    incorrectAnswerResponse: "Incorrect. That is Jane\'s cat.",
    set: 54
    },

  3324:{
    question_tag: "L2LITLP108Q2",
   code: "3324",
   title: "Eng Q108",
   learner_question: "I am sleepy __ I will go to bed. \r\n1. because \r\n2. so \r\n3. but",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I am sleepy, so I will go to bed.",
    incorrectAnswerResponse: "Incorrect. I am sleepy, so I will go to bed.",
    set: 54
    },

  4163:{
    question_tag: "L2MALP55QG",
   code: "4163",
   title: "Num Class Q1",
   learner_question: "\r\n1. 0.3 \r\n2. 3/10 \r\n3. 310",
    question: "Which is a decimal? Enter the number of the decimal.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Decimals come after a decimal point- 0.3 is a decimal.",
    incorrectAnswerResponse: "Incorrect. Decimals come after a decimal point- 0.3 is a decimal.",
    set: 1
    },

  4164:{
    question_tag: "L2MALP55Q1",
   code: "4164",
   title: "Num Q1",
   learner_question: ".4 ? .8 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) .4 is less than .8",
    incorrectAnswerResponse: "Incorrect. .4 is less than .8",
    set: 1
    },

  4165:{
    question_tag: "L2MALP55Q2",
   code: "4165",
   title: "Num Q2",
   learner_question: ".5 ? 5/10 \r\n1. < 2 > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) .5 = 5/10",
    incorrectAnswerResponse: "Incorrect. .5 = 5/10",
    set: 1
    },

  4166:{
    question_tag: "L2MALP56QG",
   code: "4166",
   title: "Num Class Q2",
   learner_question: "100.678 \r\n1. 1 \r\n2. 7 \r\n3. 8",
    question: "Which number is in the hundredths place? Enter the number that is in the hundredths place.",
    answer: "2",
    correctAnswerResponse: "Correct! :) The hundredths place is the second number after the decimal point- .01",
    incorrectAnswerResponse: "Incorrect. The hundredths place is the second number after the decimal point- .01",
    set: 2
    },

  4167:{
    question_tag: "L2MALP56Q1",
   code: "4167",
   title: "Num Q3",
   learner_question: ".01 = ? \r\n1. 1/10 \r\n2. 1/100 \r\n3. 1",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) .01 = 1/100",
    incorrectAnswerResponse: "Incorrect. .01 = 1/100",
    set: 2
    },

  4168:{
    question_tag: "L2MALP56Q2",
   code: "4168",
   title: "Num Q4",
   learner_question: ".79 = ? \r\n1. 79/100 \r\n2. 7.9/100 \r\n3. 79",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) .79 = 79/100",
    incorrectAnswerResponse: "Incorrect. .79 = 79/100",
    set: 2
    },

  4169:{
    question_tag: "L2MALP57QG",
   code: "4169",
   title: "Num Class Q3",
   learner_question: "\r\n1. 0.38 \r\n2. 0.19 \r\n3. 0.42",
    question: "Which is the largest number? Enter the number of the largest decimal.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 0.42 > 0.38 > 0.19",
    incorrectAnswerResponse: "Incorrect. 0.42 > 0.38 > 0.19",
    set: 3
    },

  4170:{
    question_tag: "L2MALP57Q1",
   code: "4170",
   title: "Num Q5",
   learner_question: ".2 ? .08 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) .2 is more than .08",
    incorrectAnswerResponse: "Incorrect. .2 is more than .08",
    set: 3
    },

  4171:{
    question_tag: "L2MALP57Q2",
   code: "4171",
   title: "Num Q6",
   learner_question: ".18 ? .3 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) .18 is less than .3",
    incorrectAnswerResponse: "Incorrect. .18 is less than .3",
    set: 3
    },

  4172:{
    question_tag: "L2MALP58QG",
   code: "4172",
   title: "Num Class Q4",
   learner_question: "\r\n1. \r\n3.45 \r\n2. \r\n3.29 \r\n3. 4.01",
    question: "Which is the SMALLEST number? Enter the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 4.01 > 3.45 > 3.29",
    incorrectAnswerResponse: "Incorrect. 4.01 > 3.45 > 3.29",
    set: 4
    },

  4173:{
    question_tag: "L2MALP58Q1",
   code: "4173",
   title: "Num Q7",
   learner_question: "\r\n1.89 ? 0.99 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1.89 > 0.99",
    incorrectAnswerResponse: "Incorrect. 1.89 > 0.99",
    set: 4
    },

  4174:{
    question_tag: "L2MALP58Q2",
   code: "4174",
   title: "Num Q8",
   learner_question: "\r\n1.78 ? \r\n3.01 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1.78 is less than 3.01",
    incorrectAnswerResponse: "Incorrect. 1.78 is less than 3.01",
    set: 4
    },

  4175:{
    question_tag: "L2MALP59QG",
   code: "4175",
   title: "Num Class Q5",
   learner_question: "\r\n1. 2/3 \r\n2. \r\n1.07 \r\n3. 3 (3/10)",
    question: "Which number is a mixed fraction? Enter the number of the mixed fraction.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3 (3/10) is a mixed fraction.",
    incorrectAnswerResponse: "Incorrect. 3 (3/10) is a mixed fraction.",
    set: 5
    },

  4176:{
    question_tag: "L2MALP59Q1",
   code: "4176",
   title: "Num Q9",
   learner_question: "8.05 ? 8 (5/100) \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 8.05 = 8 (5/100)",
    incorrectAnswerResponse: "Incorrect. 8.05 = 8 (5/100)",
    set: 5
    },

  4177:{
    question_tag: "L2MALP59Q2",
   code: "4177",
   title: "Num Q10",
   learner_question: "\r\n2.21 ? 2 (2/100) \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2.21 > 2 (2/100). 2(2/100) = 2.02",
    incorrectAnswerResponse: "Incorrect. 2.21 > 2 (2/100). 2(2/100) = 2.02",
    set: 5
    },

  4178:{
    question_tag: "L2MALP60QG",
   code: "4178",
   title: "Num Class Q6",
   learner_question: "\r\n1. 5.07 \r\n2. 5.26 \r\n3. 5.25",
    question: "Write on the board: \r\n2.04 + \r\n3.21 Say: Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2.04 + 3.21 = 5.25",
    incorrectAnswerResponse: "Incorrect. 2.04 + 3.21 = 5.25",
    set: 6
    },

  4179:{
    question_tag: "L2MALP60Q1",
   code: "4179",
   title: "Num Q11",
   learner_question: "\r\n3.45 + \r\n1.30 = ? \r\n1. 4.75 \r\n2. 4.48 \r\n3. 5.06",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3.45 + 1.30 = 4.75",
    incorrectAnswerResponse: "Incorrect. 3.45 + 1.30 = 4.75",
    set: 6
    },

  4180:{
    question_tag: "L2MALP60Q2",
   code: "4180",
   title: "Num Q12",
   learner_question: "4.2 + 4.03 = ? \r\n1. 8.23 \r\n2. 8.05 \r\n3. 8.5",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 4.2 + 4.03 = 8.23",
    incorrectAnswerResponse: "Incorrect. 4.2 + 4.03 = 8.23",
    set: 6
    },

  4181:{
    question_tag: "L2MALP61QG",
   code: "4181",
   title: "Num Class Q7",
   learner_question: "\r\n1. \r\n3.4 \r\n2. \r\n3.14 \r\n3. \r\n3.04",
    question: "Write on the board: 6.15 - \r\n3.11 Say: Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 6.15- 3.11 = 3.04",
    incorrectAnswerResponse: "Incorrect. 6.15- 3.11 = 3.04",
    set: 7
    },

  4182:{
    question_tag: "L2MALP61Q1",
   code: "4182",
   title: "Num Q13",
   learner_question: "10.10 - 8.08 = ? \r\n1. \r\n2.2 \r\n2. \r\n2.02 \r\n3. 0.22",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 10.10 - 8.08 = 2.02",
    incorrectAnswerResponse: "Incorrect. 10.10 - 8.08 = 2.02",
    set: 7
    },

  4183:{
    question_tag: "L2MALP61Q2",
   code: "4183",
   title: "Num Q14",
   learner_question: "\r\n2.1 - \r\n1.07 = ? \r\n1. \r\n1.3 \r\n2. \r\n2.3 \r\n3. \r\n1.03",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2.1 - 1.07 = 1.03",
    incorrectAnswerResponse: "Incorrect. 2.1 - 1.07 = 1.03",
    set: 7
    },

  4184:{
    question_tag: "L2MALP62QG",
   code: "4184",
   title: "Num Class Q8",
   learner_question: "\r\n1. 8.3 lbs \r\n2. \r\n3.7 lbs \r\n3. \r\n3.25 lbs ",
    question: "Jane has \r\n3.2 pounds of rice. She buys .5 more pounds of rice. How much rice does she have now.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3.2 + 0.5 = 3.7 lbs",
    incorrectAnswerResponse: "Incorrect. 3.2 + 0.5 = 3.7 lbs",
    set: 8
    },

  4185:{
    question_tag: "L2MALP62Q1",
   code: "4185",
   title: "Num Q15",
   learner_question: "Sara has \r\n3.3 pounds of flour. She gives \r\n1.1 pounds to Jane. How much does Sara have now? \r\n1. \r\n2.2 lbs \r\n2. 4.4 lbs \r\n3. \r\n1.2 lbs",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3.3 - 1.1 = 2.2",
    incorrectAnswerResponse: "Incorrect. 3.3 - 1.1 = 2.2",
    set: 8
    },

  4186:{
    question_tag: "L2MALP62Q2",
   code: "4186",
   title: "Num Q16",
   learner_question: "Flomo has $\r\n2.30 on his phone. He gets $\r\n1.05 more credit. How much does he have on his phone? \r\n1. $\r\n3.35 \r\n2. $\r\n3.25 \r\n3. $\r\n3.80",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2.30 + 1.05 = 3.35",
    incorrectAnswerResponse: "Incorrect. 2.30 + 1.05 = 3.35",
    set: 8
    },

  4187:{
    question_tag: "L2MALP63QG",
   code: "4187",
   title: "Num Class Q9",
   learner_question: "\r\n1. 3/10 \r\n2. \r\n2.3 \r\n3. 35%",
    question: "Which number is a percent? Enter the number of the percent.",
    answer: "3",
    correctAnswerResponse: "Correct! :) percent = %",
    incorrectAnswerResponse: "Incorrect. percent = %",
    set: 9
    },

  4188:{
    question_tag: "L2MALP63Q1",
   code: "4188",
   title: "Num Q17",
   learner_question: "23% ? 48% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 23% is less than 48%",
    incorrectAnswerResponse: "Incorrect. 23% is less than 48%",
    set: 9
    },

  4189:{
    question_tag: "L2MALP63Q2",
   code: "4189",
   title: "Num Q18",
   learner_question: "Which = half? \r\n1. 25% \r\n2. 50% \r\n3. 100%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 50% = half",
    incorrectAnswerResponse: "Incorrect. 50% = half",
    set: 9
    },

  4190:{
    question_tag: "L2MALP64QG",
   code: "4190",
   title: "Num Class Q10",
   learner_question: "\r\n1. 5/100 \r\n2. 5/10 \r\n3. 5/1",
    question: "Which fraction is equal to 5% Enter the number of the answer equal to 5%.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 5% = 5/100. % = /100",
    incorrectAnswerResponse: "Incorrect. 5% = 5/100. % = /100",
    set: 10
    },

  4191:{
    question_tag: "L2MALP64Q1",
   code: "4191",
   title: "Num Q19",
   learner_question: ".51 ? 50% \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) .51 is more than 50%",
    incorrectAnswerResponse: "Incorrect. .51 is more than 50%",
    set: 10
    },

  4192:{
    question_tag: "L2MALP64Q2",
   code: "4192",
   title: "Num Q20",
   learner_question: "3% ? .3 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3% is less than .3. 3%= .03",
    incorrectAnswerResponse: "Incorrect. 3% is less than .3. 3%= .03",
    set: 10
    },

  4193:{
    question_tag: "L2MALP65QG",
   code: "4193",
   title: "Num Class Q11",
   learner_question: "\r\n1. 1/2 \r\n2. 20% \r\n3. \r\n2.0",
    question: "Which is the SMALLEST number? Enter the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 20% < 1/2 < 2.0",
    incorrectAnswerResponse: "Incorrect. 20% < 1/2 < 2.0",
    set: 11
    },

  4194:{
    question_tag: "L2MALP65Q1",
   code: "4194",
   title: "Num Q21",
   learner_question: "8% = ? \r\n1. .8 \r\n2. .08 \r\n3. 8.0",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 8% = .08",
    incorrectAnswerResponse: "Incorrect. 8% = .08",
    set: 11
    },

  4195:{
    question_tag: "L2MALP65Q2",
   code: "4195",
   title: "Num Q22",
   learner_question: "5/10 = ? \r\n1. 5% \r\n2. 50% \r\n3. 0.5%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 12/24 = 5/10 = 50%",
    incorrectAnswerResponse: "Incorrect. 12/24 = 5/10 = 50%",
    set: 11
    },

  4196:{
    question_tag: "L2MALP66QG",
   code: "4196",
   title: "Num Class Q12",
   learner_question: "\r\n1. 1/4 \r\n2. 2/3 \r\n3. 5/10",
    question: "Which fraction is the same has 1/2? Enter the number of the fraction equal to 1/\r\n2.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1/2 = 5/10",
    incorrectAnswerResponse: "Incorrect. 1/2 = 5/10",
    set: 12
    },

  4197:{
    question_tag: "L2MALP66Q1",
   code: "4197",
   title: "Num Q23",
   learner_question: "3/5 = ? \r\n1. 5/3 \r\n2. 5/10 \r\n3. 9/15",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 9/15 = 3/5",
    incorrectAnswerResponse: "Incorrect. 9/15 = 3/5",
    set: 12
    },

  4198:{
    question_tag: "L2MALP66Q2",
   code: "4198",
   title: "Num Q24",
   learner_question: "12/24 = ? \r\n1. 1/2 \r\n2. 2/12 \r\n3. 1/3",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 12/24 = 1/2",
    incorrectAnswerResponse: "Incorrect. 12/24 = 1/2",
    set: 12
    },

  4199:{
    question_tag: "L2MALP67QG",
   code: "4199",
   title: "Num Class Q13",
   learner_question: "\r\n1. 6/8 \r\n2. 12/24 \r\n3. 1/3",
    question: "Which answer is equal to 3/4? Enter the number of the answer equal to 3/4.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 6/8 = 3/4",
    incorrectAnswerResponse: "Incorrect. 6/8 = 3/4",
    set: 13
    },

  4200:{
    question_tag: "L2MALP67Q1",
   code: "4200",
   title: "Num Q25",
   learner_question: "9/10 = ? \r\n1. 9% \r\n2. 90% \r\n3. 0.9%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 9/10 =90%",
    incorrectAnswerResponse: "Incorrect. 9/10 =90%",
    set: 13
    },

  4201:{
    question_tag: "L2MALP67Q2",
   code: "4201",
   title: "Num Q26",
   learner_question: "4% =? \r\n1. 4/10 \r\n2. 4.0 \r\n3. 4/100",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 4% = 4/100",
    incorrectAnswerResponse: "Incorrect. 4% = 4/100",
    set: 13
    },

  4202:{
    question_tag: "L2MALP68QG",
   code: "4202",
   title: "Num Class Q14 ",
   learner_question: "\r\n1. $\r\n3.75 \r\n2. $5.70 \r\n3. $\r\n3.525",
    question: "Jane has $\r\n1.50. Her brother gives her $\r\n2.25. How much does she have now? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) $1.50 + $2.25 = 3.75",
    incorrectAnswerResponse: "Incorrect. $1.50 + $2.25 = 3.75",
    set: 14
    },

  4203:{
    question_tag: "L2MALP68Q1",
   code: "4203",
   title: "Num Q27",
   learner_question: "\r\n3.45 - \r\n2.01 = ? \r\n1. \r\n1.35 \r\n2. \r\n1.44 \r\n3. \r\n1.45",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3.45 - 2.01 = 1.44",
    incorrectAnswerResponse: "Incorrect. 3.45 - 2.01 = 1.44",
    set: 14
    },

  4204:{
    question_tag: "L2MALP68Q2",
   code: "4204",
   title: "Num Q28",
   learner_question: "2/3 = ? \r\n1. 4/9 \r\n2. 12/24 \r\n3. 6/9",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2/3 = 6/9",
    incorrectAnswerResponse: "Incorrect. 2/3 = 6/9",
    set: 14
    },

  4205:{
    question_tag: "L2MALP69QG",
   code: "4205",
   title: "Num Class Q15",
   learner_question: "\r\n1. triangle \r\n2. square \r\n3. circle",
    question: "Which shape has NO angles? Enter the number of the shape with NO angles.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Circles have no angles.",
    incorrectAnswerResponse: "Incorrect. Circles have no angles.",
    set: 15
    },

  4206:{
    question_tag: "L2MALP69Q1",
   code: "4206",
   title: "Num Q29",
   learner_question: "Which lines touch each other? \r\n1. parallel lines \r\n2. intersecting lines \r\n3. interesting lines",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Intersecting lines cross.",
    incorrectAnswerResponse: "Incorrect. Intersecting lines cross.",
    set: 15
    },

  4207:{
    question_tag: "L2MALP69Q2",
   code: "4207",
   title: "Num Q30",
   learner_question: "Which shape has 4 right angles? \r\n1. triangle \r\n2. circle \r\n3. square",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A square has 4 right angles and 4 equal sides.",
    incorrectAnswerResponse: "Incorrect. A square has 4 right angles and 4 equal sides.",
    set: 15
    },

  4208:{
    question_tag: "L2MALP70QG",
   code: "4208",
   title: "Num Class Q16",
   learner_question: "\r\n1. Isosceles \r\n2. Scalene \r\n3. Equilateral",
    question: "Which triangle has 3 equal sides? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Equilateral triangles have three equal sides.",
    incorrectAnswerResponse: "Incorrect. Equilateral triangles have three equal sides.",
    set: 16
    },

  4209:{
    question_tag: "L2MALP70Q1",
   code: "4209",
   title: "Num Q31",
   learner_question: "What is the bottom of a triangle called? \r\n1. base \r\n2. leg \r\n3. down",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) the bottom of a triangle is the base.",
    incorrectAnswerResponse: "Incorrect. the bottom of a triangle is the base.",
    set: 16
    },

  4210:{
    question_tag: "L2MALP70Q2",
   code: "4210",
   title: "Num Q32",
   learner_question: "Which triangle has NO equal sides? \r\n1. Isosceles \r\n2. Scalene \r\n3. Equilateral",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Scalene triangles have no equal sides.",
    incorrectAnswerResponse: "Incorrect. Scalene triangles have no equal sides.",
    set: 16
    },

  4211:{
    question_tag: "L2MALP71QG",
   code: "4211",
   title: "Num Class Q17",
   learner_question: "\r\n1. They must have 4 equal angles. \r\n2. They must have 4 equal sides. \r\n3. They must have 4 sides",
    question: "How are squares the SAME as parallelograms? Enter the number of the way they are the same.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Squares and parallelograms must have 4 sides.",
    incorrectAnswerResponse: "Incorrect. Squares and parallelograms must have 4 sides.",
    set: 17
    },

  4212:{
    question_tag: "L2MALP71Q1",
   code: "4212",
   title: "Num Q33",
   learner_question: "Which shape are most books? \r\n1. rectangles \r\n2. squares \r\n3. parallelograms",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Most books are rectangles",
    incorrectAnswerResponse: "Incorrect. Most books are rectangles",
    set: 17
    },

  4213:{
    question_tag: "L2MALP71Q2",
   code: "4213",
   title: "Num Q34",
   learner_question: "All rectangles are ALSO: \r\n1. squares \r\n2. triangles \r\n3. quadrilaterals",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) All rectangles are also quadrilaterals.",
    incorrectAnswerResponse: "Incorrect. All rectangles are also quadrilaterals.",
    set: 17
    },

  4214:{
    question_tag: "L2MALP72QG",
   code: "4214",
   title: "Num Class Q18",
   learner_question: "\r\n1. 5 \r\n2. 4 \r\n3. 3",
    question: "How many sides does a pentagon have? Enter the number of the correct answer on your phone.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Pentagons have 5 sides.",
    incorrectAnswerResponse: "Incorrect. Pentagons have 5 sides.",
    set: 18
    },

  4215:{
    question_tag: "L2MALP72Q1",
   code: "4215",
   title: "Num Q35",
   learner_question: "Which shape has 8 sides? \r\n1. rectangle \r\n2. Nonagon \r\n3. Octagon",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Octagons have 8 sides. Oct means 8.",
    incorrectAnswerResponse: "Incorrect. Octagons have 8 sides. Oct means 8.",
    set: 18
    },

  4216:{
    question_tag: "L2MALP72Q2",
   code: "4216",
   title: "Num Q36",
   learner_question: "Triangles and Squares are both: \r\n1. Rectangles \r\n2. Quadrilaterals \r\n3. Polygons",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Polygons are shapes with many sides.",
    incorrectAnswerResponse: "Incorrect. Polygons are shapes with many sides.",
    set: 18
    },

  4217:{
    question_tag: "L2MALP73QG",
   code: "4217",
   title: "Num Class Q19",
   learner_question: "\r\n1. Circumference \r\n2. Radius \r\n3. Diameter",
    question: "What do we call the distance around the outside of a circle? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The circumference is the distance around the outside of a circle.",
    incorrectAnswerResponse: "Incorrect. The circumference is the distance around the outside of a circle.",
    set: 19
    },

  4218:{
    question_tag: "L2MALP73Q1",
   code: "4218",
   title: "Num Q37",
   learner_question: "The __ of a circle is 1/2 the diameter. \r\n1. radius \r\n2. circumference \r\n3. center",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The radius of a circle is 1/2 the diameter.",
    incorrectAnswerResponse: "Incorrect. The radius of a circle is 1/2 the diameter.",
    set: 19
    },

  4219:{
    question_tag: "L2MALP73Q2",
   code: "4219",
   title: "Num Q38",
   learner_question: "The radius of a circle is 2 inches. What is the diameter? \r\n1. 2 inches \r\n2. 4 inches \r\n3. 2 feet",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) If the radius is 2 inches, the diameter is 2X bigger- 4 inches.",
    incorrectAnswerResponse: "Incorrect. If the radius is 2 inches, the diameter is 2X bigger- 4 inches.",
    set: 19
    },

  4220:{
    question_tag: "L2MALP74QG",
   code: "4220",
   title: "Num Class Q20",
   learner_question: "\r\n1. A cone \r\n2. A sphere \r\n3. A pyramid",
    question: "What shape is a ball? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Balls are spheres.",
    incorrectAnswerResponse: "Incorrect. Balls are spheres.",
    set: 20
    },

  4221:{
    question_tag: "L2MALP74Q1",
   code: "4221",
   title: "Num Q39",
   learner_question: "What geometric shape is a book? \r\n1. A cube \r\n2. A prism \r\n3. A sphere",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Books have the shape of prisms.",
    incorrectAnswerResponse: "Incorrect. Books have the shape of prisms.",
    set: 20
    },

  4222:{
    question_tag: "L2MALP74Q2",
   code: "4222",
   title: "Num Q40",
   learner_question: "What shape is a tin can? \r\n1. A cube \r\n2. A pyramid \r\n3. A cylinder",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Tin cans are cylinders, as are rolls of toilet paper or paper towels.",
    incorrectAnswerResponse: "Incorrect. Tin cans are cylinders, as are rolls of toilet paper or paper towels.",
    set: 20
    },

  4223:{
    question_tag: "L2MALP75QG",
   code: "4223",
   title: "Num Class Q21",
   learner_question: "\r\n1. A cone \r\n2. A sphere \r\n3. A pyramid",
    question: "What shape is the earth we live on? Enter the number of the correct shape.",
    answer: "2",
    correctAnswerResponse: "Correct! :) The Earth is a sphere.",
    incorrectAnswerResponse: "Incorrect. The Earth is a sphere.",
    set: 21
    },

  4224:{
    question_tag: "L2MALP75Q1",
   code: "4224",
   title: "Num Q41",
   learner_question: "What shape is a flag? \r\n1. rectangle \r\n2. cube \r\n3. triangle",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) A flag is a rectangle.",
    incorrectAnswerResponse: "Incorrect. A flag is a rectangle.",
    set: 21
    },

  4225:{
    question_tag: "L2MALP75Q2",
   code: "4225",
   title: "Num Q42",
   learner_question: "Which shape has a circumference? \r\n1. A triangle \r\n2. A parallelogram \r\n3. a circle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A circumference is the length around a circle.",
    incorrectAnswerResponse: "Incorrect. A circumference is the length around a circle.",
    set: 21
    },

  4226:{
    question_tag: "L2MALP76QG",
   code: "4226",
   title: "Num Class Q22",
   learner_question: "\r\n1. meter \r\n2. millimeter \r\n3. centimeter",
    question: "Which is the smallest unit? Enter the number of the smallest unit.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Meter > Centimeter > Millimeter",
    incorrectAnswerResponse: "Incorrect. Meter > Centimeter > Millimeter",
    set: 22
    },

  4227:{
    question_tag: "L2MALP76Q1",
   code: "4227",
   title: "Num Q43",
   learner_question: "There are __ centimeters in a meter. \r\n1. 10 \r\n2. 100 \r\n3. 1000",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) There are 100 centimeters in 1 meter. Cent= 100",
    incorrectAnswerResponse: "Incorrect. There are 100 centimeters in 1 meter. Cent= 100",
    set: 22
    },

  4228:{
    question_tag: "L2MALP76Q2",
   code: "4228",
   title: "Num Q44",
   learner_question: "There are __ millimeters in a meter. \r\n1. 10 \r\n2. 100 \r\n3. 1000",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) There are 1000 millimeters in 1 meter.",
    incorrectAnswerResponse: "Incorrect. There are 1000 millimeters in 1 meter.",
    set: 22
    },

  4229:{
    question_tag: "L2MALP77QG",
   code: "4229",
   title: "Num Class Q23",
   learner_question: "\r\n1. 5 meters \r\n2. 600 centimeters \r\n3. 5000 millimeters",
    question: "Which is the longest line? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 600cm > 5m > 5000mm",
    incorrectAnswerResponse: "Incorrect. 600cm > 5m > 5000mm",
    set: 23
    },

  4230:{
    question_tag: "L2MALP77Q1",
   code: "4230",
   title: "Num Q45",
   learner_question: "A door is about 220___ high. \r\n1. meters \r\n2. centimeters \r\n3. millimeters",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A door is about 220 centimeters high.",
    incorrectAnswerResponse: "Incorrect. A door is about 220 centimeters high.",
    set: 23
    },

  4231:{
    question_tag: "L2MALP77Q2",
   code: "4231",
   title: "Num Q46",
   learner_question: "There are 25.4 ___ in an inch. \r\n1. meters \r\n2. centimeters \r\n3. millimeters",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) There are 25.4 mm in an inch.",
    incorrectAnswerResponse: "Incorrect. There are 25.4 mm in an inch.",
    set: 23
    },

  4232:{
    question_tag: "L2MALP78QG",
   code: "4232",
   title: "Num Class Q24",
   learner_question: "\r\n1. Grams \r\n2. Ounces \r\n3. Pounds",
    question: "Which measure is used for weight in the metric system? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Grams are a measure of weight in the metric system.",
    incorrectAnswerResponse: "Incorrect. Grams are a measure of weight in the metric system.",
    set: 24
    },

  4233:{
    question_tag: "L2MALP78Q1",
   code: "4233",
   title: "Num Q47",
   learner_question: "3lbs ? 2 kg? \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3lbs < 2kg. 2kg= ~4 lbs",
    incorrectAnswerResponse: "Incorrect. 3lbs < 2kg. 2kg= ~4 lbs",
    set: 24
    },

  4234:{
    question_tag: "L2MALP78Q2",
   code: "4234",
   title: "Num Q48",
   learner_question: "3 ounces ? 2 pounds \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Ounces are a smaller unit than pounds. There are 16 oz in 1 lb.",
    incorrectAnswerResponse: "Incorrect. Ounces are a smaller unit than pounds. There are 16 oz in 1 lb.",
    set: 24
    },

  4235:{
    question_tag: "L2MALP79QG",
   code: "4235",
   title: "Num Class Q25",
   learner_question: "\r\n1. Gallons \r\n2. Pints \r\n3. Liters",
    question: "How is volume measured in the metric system? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) In the metric system, volume is measured in liters.",
    incorrectAnswerResponse: "Incorrect. In the metric system, volume is measured in liters.",
    set: 25
    },

  4236:{
    question_tag: "L2MALP79Q1",
   code: "4236",
   title: "Num Q49",
   learner_question: "1 liter = ?ml \r\n1. 10 \r\n2. 100 \r\n3. 1000",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 liter = 1000 milliliters",
    incorrectAnswerResponse: "Incorrect. 1 liter = 1000 milliliters",
    set: 25
    },

  4237:{
    question_tag: "L2MALP79Q2",
   code: "4237",
   title: "Num Q50",
   learner_question: "1 Liter = ~___ \r\n1. 1 Gallon \r\n2. 1 Pint \r\n3. 1 Cup",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 Liter is about the same as one pint.",
    incorrectAnswerResponse: "Incorrect. 1 Liter is about the same as one pint.",
    set: 25
    },

  4238:{
    question_tag: "L2MALP80QG",
   code: "4238",
   title: "Num Class Q26",
   learner_question: "\r\n1. 5 pencils \r\n2. 9 pencils \r\n3. 20 pencils",
    question: "You have 4 bags. In each bag you have 5 pencils. How many pencils do you have?",
    answer: "3",
    correctAnswerResponse: "Correct! :) 4 x 5 = 20 pencils",
    incorrectAnswerResponse: "Incorrect. 4 x 5 = 20 pencils",
    set: 26
    },

  4239:{
    question_tag: "L2MALP80Q1",
   code: "4239",
   title: "Num Q51",
   learner_question: "A school has 4 classes. There are 10 students in each class. How many students are there? \r\n1. 40 \r\n2. 14 \r\n3. 10",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 4 x 10 = 40 students",
    incorrectAnswerResponse: "Incorrect. 4 x 10 = 40 students",
    set: 26
    },

  4240:{
    question_tag: "L2MALP80Q2",
   code: "4240",
   title: "Num Q52",
   learner_question: "How many fingers do 3 children have all together? \r\n1. 10 \r\n2. 3 \r\n3. 30",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 child has 10 fingers. 3 children have 30 fingers.",
    incorrectAnswerResponse: "Incorrect. 1 child has 10 fingers. 3 children have 30 fingers.",
    set: 26
    },

  4241:{
    question_tag: "L2MALP81QG",
   code: "4241",
   title: "Num Class Q27",
   learner_question: "\r\n1. diameter \r\n2. perimeter \r\n3. polygon",
    question: "What do we call the distance around a shape? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) The perimeter is the distance around a shape.",
    incorrectAnswerResponse: "Incorrect. The perimeter is the distance around a shape.",
    set: 27
    },

  4242:{
    question_tag: "L2MALP81Q1",
   code: "4242",
   title: "Num Q53",
   learner_question: "A triangle has 3 equal sides. Each side is 4 inches. What is the perimeter? \r\n1. 4 inches \r\n2. 12 inches \r\n3. 7 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3 x 4 = 12 inches",
    incorrectAnswerResponse: "Incorrect. 3 x 4 = 12 inches",
    set: 27
    },

  4243:{
    question_tag: "L2MALP81Q2",
   code: "4243",
   title: "Num Q54",
   learner_question: "A square has a side that is 2 inches long. What is the perimeter of the square? \r\n1. 8 inches \r\n2. 4 inches \r\n3. 2 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 +2 +2 +2= 8 inches",
    incorrectAnswerResponse: "Incorrect. 2 +2 +2 +2= 8 inches",
    set: 27
    },

  4244:{
    question_tag: "L2MALP82QG",
   code: "4244",
   title: "Num Class Q28",
   learner_question: "\r\n1. 5 inches \r\n2. 6 inches \r\n3. 10 inches",
    question: "A rectangle has sides of 2 inches and 3 inches. What is the perimeter of the rectangle? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) (2 x 2) + (2 x 3) = 10",
    incorrectAnswerResponse: "Incorrect. (2 x 2) + (2 x 3) = 10",
    set: 28
    },

  4245:{
    question_tag: "L2MALP82Q1",
   code: "4245",
   title: "Num Q55",
   learner_question: "A square has sides that are 5 inches long. What is the perimeter? \r\n1. 5 inches \r\n2. 10 inches \r\n3. 20 inches",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5 x 4 = 20 inches",
    incorrectAnswerResponse: "Incorrect. 5 x 4 = 20 inches",
    set: 28
    },

  4246:{
    question_tag: "L2MALP82Q2",
   code: "4246",
   title: "Num Q56",
   learner_question: "A rectangle has sides of 2 inches and 10 inches. What is the perimeter? \r\n1. 24 inches \r\n2. 20 inches \r\n2. 12 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (2x2) + (2x10)=24",
    incorrectAnswerResponse: "Incorrect. (2x2) + (2x10)=24",
    set: 28
    },

  4247:{
    question_tag: "L2MALP83QG",
   code: "4247",
   title: "Num Class Q29",
   learner_question: "\r\n1. 6 feet \r\n2. 10 feet \r\n3. 12 feet",
    question: "A desk is 2 feet wide and 3 feet long. What is the perimeter of the desk?",
    answer: "2",
    correctAnswerResponse: "Correct! :) (2 x 2) + (2 x 3) = 10 feet",
    incorrectAnswerResponse: "Incorrect. (2 x 2) + (2 x 3) = 10 feet",
    set: 29
    },

  4248:{
    question_tag: "L2MALP83Q1",
   code: "4248",
   title: "Num Q57",
   learner_question: "A book is 6 inches long and 4 inches wide. What is the perimeter of the book? \r\n1. 20 inches \r\n2. 10 inches \r\n3. 24 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (6x2) + (2x4)= 20 inches",
    incorrectAnswerResponse: "Incorrect. (6x2) + (2x4)= 20 inches",
    set: 29
    },

  4249:{
    question_tag: "L2MALP83Q2",
   code: "4249",
   title: "Num Q58",
   learner_question: "Ben has a square paper. One side is 10 inches. What Is the perimeter of the paper? \r\n1. 10 inches \r\n2. 40 inches \r\n3. 100 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 10 x 4 = 40 inches",
    incorrectAnswerResponse: "Incorrect. 10 x 4 = 40 inches",
    set: 29
    },

  4250:{
    question_tag: "L2MALP84QG",
   code: "4250",
   title: "Num Class Q30",
   learner_question: "\r\n1. perimeter \r\n2. circumference \r\n3. area",
    question: "What do we call in the size of a surface inside a flat shape? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Area is the size of the surface of a flat surface.",
    incorrectAnswerResponse: "Incorrect. Area is the size of the surface of a flat surface.",
    set: 30
    },

  4251:{
    question_tag: "L2MALP84Q1",
   code: "4251",
   title: "Num Q59",
   learner_question: "How can knowing \'area\' help you? \r\n1. If you want to build a floor for a room. \r\n2. If you want to bake \r\n3. You want to make a fence around a yard.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Area is the size of the surface of a flat surface. If you want to make a floor, you need to know the area of a room.",
    incorrectAnswerResponse: "Incorrect. Area is the size of the surface of a flat surface. If you want to make a floor, you need to know the area of a room.",
    set: 30
    },

  4252:{
    question_tag: "L2MALP84Q2",
   code: "4252",
   title: "Num Q60",
   learner_question: "A window is square. The window is 3 feet tall. What is the perimeter of the window. \r\n1. 6 feet \r\n2. 9 feet \r\n3. 12 feet",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3 x 4= 12 feet",
    incorrectAnswerResponse: "Incorrect. 3 x 4= 12 feet",
    set: 30
    },

  4253:{
    question_tag: "L2MALP85QG",
   code: "4253",
   title: "Num Class Q31",
   learner_question: "\r\n1. w + w + l + l \r\n2. l x w \r\n3. 2w + 2l",
    question: "How do we calculate the area of rectangles? Enter the number of the correct formula.",
    answer: "2",
    correctAnswerResponse: "Correct! :) We multiply length times width to find the area of a rectangle.",
    incorrectAnswerResponse: "Incorrect. We multiply length times width to find the area of a rectangle.",
    set: 31
    },

  4254:{
    question_tag: "L2MALP85Q1",
   code: "4254",
   title: "Num Q61",
   learner_question: "A flag is 2 feet wide and 3 feet long. What is the area of the flag? \r\n1. 6 feet \r\n2. 10 feet \r\n3. 12 feet",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 x 3 = 6 feet",
    incorrectAnswerResponse: "Incorrect. 2 x 3 = 6 feet",
    set: 31
    },

  4255:{
    question_tag: "L2MALP85Q2",
   code: "4255",
   title: "Num Q62",
   learner_question: "A paper is 8 inches long and 4 inches wide. What is the area of the paper? \r\n1. 12 inches \r\n2. 24 inches \r\n3. 32 inches",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 4 x 8= 32 inches",
    incorrectAnswerResponse: "Incorrect. 4 x 8= 32 inches",
    set: 31
    },

  4256:{
    question_tag: "L2MALP86QG",
   code: "4256",
   title: "Num Class Q32",
   learner_question: "\r\n1. perimeter \r\n2. circumference \r\n3. area",
    question: "You want to build a fence around a yard. What measure do you want to know? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) A fence goes around a yard. Perimeter tells the distance around a shape.",
    incorrectAnswerResponse: "Incorrect. A fence goes around a yard. Perimeter tells the distance around a shape.",
    set: 32
    },

  4257:{
    question_tag: "L2MALP86Q1",
   code: "4257",
   title: "Num Q63",
   learner_question: "What is the area of a square that is 6 inches long. \r\n1. 12 inches \r\n2. 24 inches \r\n3. 36 inches",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 6x6 = 36 inches",
    incorrectAnswerResponse: "Incorrect. 6x6 = 36 inches",
    set: 32
    },

  4258:{
    question_tag: "L2MALP86Q2",
   code: "4258",
   title: "Num Q64",
   learner_question: "A room is 7 feet by 10 feet. What is the area of the room? \r\n1. 70 feet \r\n2. 34 feet \r\n3. 17 feet",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 7 x 10 = 70 feet",
    incorrectAnswerResponse: "Incorrect. 7 x 10 = 70 feet",
    set: 32
    },

  4259:{
    question_tag: "L2MALP87QG",
   code: "4259",
   title: "Num Class Q33",
   learner_question: "\r\n1. perimeter \r\n2. circumference \r\n3. area",
    question: "You want to buy cloth to cover a table. What measure do you want to know? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) You want to cover the surface area of the table.",
    incorrectAnswerResponse: "Incorrect. You want to cover the surface area of the table.",
    set: 33
    },

  4260:{
    question_tag: "L2MALP87Q1",
   code: "4260",
   title: "Num Q65",
   learner_question: "What is the perimeter of a square 3 inches wide? \r\n1. 12 inches \r\n2. 9 inches \r\n3. 6 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3 +3 +3 +3= 12 inches",
    incorrectAnswerResponse: "Incorrect. 3 +3 +3 +3= 12 inches",
    set: 33
    },

  4261:{
    question_tag: "L2MALP87Q2",
   code: "4261",
   title: "Num Q66",
   learner_question: "What is the area of a floor 10 feet by 11 feet? \r\n1. 21 feet \r\n2. 42 feet \r\n3. 110 feet",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 10 x 11= 110 feet",
    incorrectAnswerResponse: "Incorrect. 10 x 11= 110 feet",
    set: 33
    },

  4262:{
    question_tag: "L2MALP88QG",
   code: "4262",
   title: "Num Class Q34",
   learner_question: "\r\n1. perimeter \r\n2. circumference \r\n3. area",
    question: "You want to buy a rug for a room. What measure do you want to know? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) You want to cover the surface area of the room.",
    incorrectAnswerResponse: "Incorrect. You want to cover the surface area of the room.",
    set: 34
    },

  4263:{
    question_tag: "L2MALP88Q1",
   code: "4263",
   title: "Num Q67",
   learner_question: "A cell phone is 4 inches by 3 inches. What is the perimeter of the phone? \r\n1. 24 inches \r\n2. 14 inches \r\n1. 12 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) (2x3) + (2x4)=14",
    incorrectAnswerResponse: "Incorrect. (2x3) + (2x4)=14",
    set: 34
    },

  4264:{
    question_tag: "L2MALP88Q2",
   code: "4264",
   title: "Num Q68",
   learner_question: "What is the area of a garden that is 3 feet by 12 feet? \r\n1. 48 feet \r\n2. 36 feet \r\n3. 30 feet",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3 x 12 = 36 feet",
    incorrectAnswerResponse: "Incorrect. 3 x 12 = 36 feet",
    set: 34
    },

  4265:{
    question_tag: "L2MALP89QG",
   code: "4265",
   title: "Num Class Q35",
   learner_question: "\r\n1. Circumference \r\n2. Radius \r\n3. Diameter",
    question: "What do we call the width of a circle?",
    answer: "3",
    correctAnswerResponse: "Correct! :) The widest width of a circle is the diameter",
    incorrectAnswerResponse: "Incorrect. The widest width of a circle is the diameter",
    set: 35
    },

  4266:{
    question_tag: "L2MALP89Q1",
   code: "4266",
   title: "Num Q69",
   learner_question: "1 cm ? 1 mm \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 cm is larger than 1 centimeter",
    incorrectAnswerResponse: "Incorrect. 1 cm is larger than 1 centimeter",
    set: 35
    },

  4267:{
    question_tag: "L2MALP89Q2",
   code: "4267",
   title: "Num Q70",
   learner_question: "The __ of a circle is 1/2 the diameter. \r\n1. radius \r\n2. circumference \r\n3. center",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The radius of a circle is 1/2 the diameter.",
    incorrectAnswerResponse: "Incorrect. The radius of a circle is 1/2 the diameter.",
    set: 35
    },

  4268:{
    question_tag: "L2MALP90QG",
   code: "4268",
   title: "Num Class Q36",
   learner_question: "\r\n1. A book \r\n2. A ball \r\n3. A pencil",
    question: "Which object is a sphere? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A ball is a sphere",
    incorrectAnswerResponse: "Incorrect. A ball is a sphere",
    set: 36
    },

  4269:{
    question_tag: "L2MALP90Q1",
   code: "4269",
   title: "Num Q71",
   learner_question: "1 liter ? 1 gallon \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) A liter is less than a gallon.",
    incorrectAnswerResponse: "Incorrect. A liter is less than a gallon.",
    set: 36
    },

  4270:{
    question_tag: "L2MALP90Q2",
   code: "4270",
   title: "Num Q72",
   learner_question: "1 m = ? Cm \r\n1. 10 \r\n2. 100 \r\n3. 1000",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 100 centimeters = 1 meter",
    incorrectAnswerResponse: "Incorrect. 100 centimeters = 1 meter",
    set: 36
    },

  4271:{
    question_tag: "L2MALP91QG",
   code: "4271",
   title: "Num Class Q37",
   learner_question: "\r\n1. The class always has 12 pupils. \r\n2. The class can have as many as 12 pupils. \r\n3. 12 is the best guess of how many students will be in class.",
    question: "If a class has an average of 12 students, what does that mean? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) An average is often the \'usual\' measure of something.",
    incorrectAnswerResponse: "Incorrect. An average is often the \'usual\' measure of something.",
    set: 37
    },

  4272:{
    question_tag: "L2MALP91Q1",
   code: "4272",
   title: "Num Q73",
   learner_question: "Five students scored 80% on a test. Five students scored 100% on a test. What is the average score? \r\n1. 80% \r\n2. 90% \r\n3. 100%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 180/2= 90%",
    incorrectAnswerResponse: "Incorrect. 180/2= 90%",
    set: 37
    },

  4273:{
    question_tag: "L2MALP91Q2",
   code: "4273",
   title: "Num Q74",
   learner_question: "What is the average of 3,4 and 5? \r\n1. 12 \r\n2. 345 \r\n3. 4",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) (3+4+5)/3 = 4",
    incorrectAnswerResponse: "Incorrect. (3+4+5)/3 = 4",
    set: 37
    },

  4274:{
    question_tag: "L2MALP92QG",
   code: "4274",
   title: "Num Class Q38",
   learner_question: "\r\n1. To see the number of men and women in a class. \r\n2. To find the distance to Monrovia \r\n3. To see how a class scored on a test",
    question: "Which is a use for an \'average\'? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) The class score is an average of the pupil scores.",
    incorrectAnswerResponse: "Incorrect. The class score is an average of the pupil scores.",
    set: 38
    },

  4275:{
    question_tag: "L2MALP92Q1",
   code: "4275",
   title: "Num Q75",
   learner_question: "What is the average of 4, 6 and 8? \r\n1. 6 \r\n2. 18 \r\n3. 24",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (4+6+8)/3=6",
    incorrectAnswerResponse: "Incorrect. (4+6+8)/3=6",
    set: 38
    },

  4276:{
    question_tag: "L2MALP92Q2",
   code: "4276",
   title: "Num Q76",
   learner_question: "What is the average of 12, 15 and 21? \r\n1. 15 \r\n2. 16 \r\n3. 48",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) (12+15+21)/3 =16",
    incorrectAnswerResponse: "Incorrect. (12+15+21)/3 =16",
    set: 38
    },

  4277:{
    question_tag: "L2MALP93QG",
   code: "4277",
   title: "Num Class Q39",
   learner_question: "\r\n1. A bar graph \r\n2. A circle graph \r\n3. A line graph",
    question: "Which graph would be useful to test scores by school? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) A bar graph is useful for showing different groups.",
    incorrectAnswerResponse: "Incorrect. A bar graph is useful for showing different groups.",
    set: 39
    },

  4278:{
    question_tag: "L2MALP93Q1",
   code: "4278",
   title: "Num Q77",
   learner_question: "Which graph shows changes over time? \r\n1. A bar graph \r\n2. A circle graph \r\n3. A line graph",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A line graph shows changes over time.",
    incorrectAnswerResponse: "Incorrect. A line graph shows changes over time.",
    set: 39
    },

  4279:{
    question_tag: "L2MALP93Q2",
   code: "4279",
   title: "Num Q78",
   learner_question: "Which graph is useful for showing parts of a whole? \r\n1. A bar graph \r\n2. A circle graph \r\n3. A line graph",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Circle graphs show percent or parts in a whole.",
    incorrectAnswerResponse: "Incorrect. Circle graphs show percent or parts in a whole.",
    set: 39
    },

  4280:{
    question_tag: "L2MALP94QG",
   code: "4280",
   title: "Num Class Q40",
   learner_question: "\r\n1. A bar graph \r\n2. A circle graph \r\n3. A line graph",
    question: "Jane wants to see if her marks are going up or down over the year. What graph is most useful for her?",
    answer: "3",
    correctAnswerResponse: "Correct! :) A line graph shows changes over time.",
    incorrectAnswerResponse: "Incorrect. A line graph shows changes over time.",
    set: 40
    },

  4281:{
    question_tag: "L2MALP94Q1",
   code: "4281",
   title: "Num Q79",
   learner_question: "A cell phone is 2 inches by 3 inches. What is the perimeter of the phone? \r\n1. 10 inches \r\n2. 8 inches \r\n1. 6 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (2x2) + (2x3)=10",
    incorrectAnswerResponse: "Incorrect. (2x2) + (2x3)=10",
    set: 40
    },

  4282:{
    question_tag: "L2MALP94Q2",
   code: "4282",
   title: "Num Q80",
   learner_question: "What is the area of a garden that is 4 feet by 12 feet? \r\n1. 48 feet \r\n2. 36 feet \r\n3. 30 feet",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 4 x 12 = 48 feet",
    incorrectAnswerResponse: "Incorrect. 4 x 12 = 48 feet",
    set: 40
    },

  4283:{
    question_tag: "L2MALP95QG",
   code: "4283",
   title: "Num Class Q41",
   learner_question: "\r\n1. A bar graph \r\n2. A circle graph \r\n3. A line graph",
    question: "50% of the class likes red. 25% likes yellow. 25% likes blue. What graph would show this well? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Circle graphs show percent or parts in a whole.",
    incorrectAnswerResponse: "Incorrect. Circle graphs show percent or parts in a whole.",
    set: 41
    },

  4284:{
    question_tag: "L2MALP95Q1",
   code: "4284",
   title: "Num Q81",
   learner_question: "A bar graph shows rain by month. Where are the units of rain shown on the graph? \r\n1. on the left \r\n2. on the bottom \r\n3. on the right",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Units of measure are shown on the left of a bar graph.",
    incorrectAnswerResponse: "Incorrect. Units of measure are shown on the left of a bar graph.",
    set: 41
    },

  4285:{
    question_tag: "L2MALP95Q2",
   code: "4285",
   title: "Num Q82",
   learner_question: "A bar graph shows rain by month. Where are the months shown on the graph? \r\n1. on the left \r\n2. on the bottom \r\n3. on the right",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Groups are usually shown on the bottom of a bar graph.",
    incorrectAnswerResponse: "Incorrect. Groups are usually shown on the bottom of a bar graph.",
    set: 41
    },

  4286:{
    question_tag: "L2MALP96QG",
   code: "4286",
   title: "Num Class Q42",
   learner_question: "\r\n1. Meat \r\n2. Fruit \r\n3. Rice",
    question: "Which is an \'energy food? Enter the number of the energy food?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Rice is an energy food.",
    incorrectAnswerResponse: "Incorrect. Rice is an energy food.",
    set: 42
    },

  4287:{
    question_tag: "L2MALP96Q1",
   code: "4287",
   title: "Num Q83",
   learner_question: "Which is a body building food? \r\n1. Beans \r\n2. Potatoes \r\n3. cabbage",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Beans are body building foods.",
    incorrectAnswerResponse: "Incorrect. Beans are body building foods.",
    set: 42
    },

  4288:{
    question_tag: "L2MALP96Q2",
   code: "4288",
   title: "Num Q84",
   learner_question: "What kind of food are carrots? \r\n1. Body building \r\n2. Energy \r\n3. Protective",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Carrots are protective foods.",
    incorrectAnswerResponse: "Incorrect. Carrots are protective foods.",
    set: 42
    },

  4289:{
    question_tag: "L2MALP97QG",
   code: "4289",
   title: "Num Class Q43",
   learner_question: "\r\n1. tomatoes \r\n2. beans \r\n3. potatoes",
    question: "What body building food can you grow in a garden? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Beans are body building foods.",
    incorrectAnswerResponse: "Incorrect. Beans are body building foods.",
    set: 43
    },

  4290:{
    question_tag: "L2MALP97Q1",
   code: "4290",
   title: "Num Q85",
   learner_question: "Jane\'s garden is 5 meters by 6 meters. What is the area of the garden? \r\n1. 11 meters \r\n2. 22 meters \r\n3. 30 meters",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5 x 6= 30 meters",
    incorrectAnswerResponse: "Incorrect. 5 x 6= 30 meters",
    set: 43
    },

  4291:{
    question_tag: "L2MALP97Q2",
   code: "4291",
   title: "Num Q86",
   learner_question: "Jane\'s garden is 5 meters by 6 meters. How long of a fence does she need to close it off? \r\n1. 11 meters \r\n2. 22 meters \r\n3. 30 meters",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) (2x5) +(2x6)=22 meters",
    incorrectAnswerResponse: "Incorrect. (2x5) +(2x6)=22 meters",
    set: 43
    },

  4292:{
    question_tag: "L2MALP98QG",
   code: "4292",
   title: "Num Class Q44",
   learner_question: "\r\n1. Energy giving \r\n2. Body building \r\n3. Protective",
    question: "What kind of food are potatoes? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Potatoes are energy giving foods",
    incorrectAnswerResponse: "Incorrect. Potatoes are energy giving foods",
    set: 44
    },

  4293:{
    question_tag: "L2MALP98Q1",
   code: "4293",
   title: "Num Q87",
   learner_question: "Flomo has a fence around her garden. The garden is a square. One side is 3 m. How long is the fence? \r\n1. 6 meters \r\n2. 9 meters \r\n3. 12 meters",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3+3+3+3= 12m",
    incorrectAnswerResponse: "Incorrect. 3+3+3+3= 12m",
    set: 44
    },

  4294:{
    question_tag: "L2MALP98Q2",
   code: "4294",
   title: "Num Q88",
   learner_question: "Dan has a garden 8 ft by 10 ft. What is the area of his garden? \r\n1. 80 ft \r\n2. 36 ft \r\n3. 18ft",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 8x10= 80 ft",
    incorrectAnswerResponse: "Incorrect. 8x10= 80 ft",
    set: 44
    },

  4295:{
    question_tag: "L2MALP99QG",
   code: "4295",
   title: "Num Class Q45",
   learner_question: "\r\n1. An expense \r\n2. Expensive \r\n3. An income",
    question: "What do we call something we spend money on? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) An expense is something we spend money on.",
    incorrectAnswerResponse: "Incorrect. An expense is something we spend money on.",
    set: 45
    },

  4296:{
    question_tag: "L2MALP99Q1",
   code: "4296",
   title: "Num Q89",
   learner_question: "___ means managing money. \r\n1. Economy \r\n2. Finance \r\n3. Expenditures",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Finance means managing money.",
    incorrectAnswerResponse: "Incorrect. Finance means managing money.",
    set: 45
    },

  4297:{
    question_tag: "L2MALP99Q2",
   code: "4297",
   title: "Num Q90",
   learner_question: "___ finance is the money we make and spend ourselves. \r\n1. Weekly \r\n2. Personal \r\n3. National",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Personal finances are the money we make and spend.",
    incorrectAnswerResponse: "Incorrect. Personal finances are the money we make and spend.",
    set: 45
    },

  4298:{
    question_tag: "L2MALP100QG",
   code: "4298",
   title: "Num Class Q46",
   learner_question: "\r\n1. Pounds \r\n2. Meters \r\n3. Dollars",
    question: "What unit will a bar graph showing personal finances use? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Finance means managing money.",
    incorrectAnswerResponse: "Incorrect. Finance means managing money.",
    set: 46
    },

  4299:{
    question_tag: "L2MALP100Q1",
   code: "4299",
   title: "Num Q91",
   learner_question: "Jane spends 3, 4 and 5 dollars. What is the average expense? \r\n1. 4 dollars \r\n2. 12 dollars \r\n3. 28 dollars",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (3+4+5)/3 = 4",
    incorrectAnswerResponse: "Incorrect. (3+4+5)/3 = 4",
    set: 46
    },

  4300:{
    question_tag: "L2MALP100Q2",
   code: "4300",
   title: "Num Q92",
   learner_question: "Jane spends 3, 4 and 5 dollars. What is the TOTAL expense? \r\n1. 4 dollars \r\n2. 12 dollars \r\n3. 28 dollars",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3 +4+5= 12",
    incorrectAnswerResponse: "Incorrect. 3 +4+5= 12",
    set: 46
    },

  4301:{
    question_tag: "L2MALP101QG",
   code: "4301",
   title: "Num Class Q47",
   learner_question: "\r\n1. expenses \r\n2. graphs \r\n3. data",
    question: "What do we call the information we get from a survey? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Information from a survey is called data.",
    incorrectAnswerResponse: "Incorrect. Information from a survey is called data.",
    set: 47
    },

  4302:{
    question_tag: "L2MALP101Q1",
   code: "4302",
   title: "Num Q93",
   learner_question: "Which is NOT a good survey question? \r\n1. What color do you like? \r\n2. What job do you have? \r\n3. How far is Gbarnga from Monrovia?",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) It is not useful to survey people about known facts.",
    incorrectAnswerResponse: "Incorrect. It is not useful to survey people about known facts.",
    set: 47
    },

  4303:{
    question_tag: "L2MALP101Q2",
   code: "4303",
   title: "Num Q94",
   learner_question: "When would you make a bar graph about a survey? \r\n1. After you record the data. \r\n2. Before you write the questions \r\n3. When you ask the questions.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) We graph our results after we record the data.",
    incorrectAnswerResponse: "Incorrect. We graph our results after we record the data.",
    set: 47
    },

  4304:{
    question_tag: "L2MALP102QG",
   code: "4304",
   title: "Num Class Q48",
   learner_question: "\r\n1. To measure answers by groups \r\n2. To show change over time. \r\n3. To show % answers of a single group.",
    question: "When is a circle graph better than a bar graph? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Circle graphs show percent or parts in a whole.",
    incorrectAnswerResponse: "Incorrect. Circle graphs show percent or parts in a whole.",
    set: 48
    },

  4305:{
    question_tag: "L2MALP102Q1",
   code: "4305",
   title: "Num Q95",
   learner_question: "\r\n3.45 - \r\n2.03 = ? \r\n1. \r\n1.35 \r\n2. \r\n1.42 \r\n3. \r\n1.45",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3.45 - 2.03 = 1.42",
    incorrectAnswerResponse: "Incorrect. 3.45 - 2.03 = 1.42",
    set: 48
    },

  4306:{
    question_tag: "L2MALP102Q2",
   code: "4306",
   title: "Num Q96",
   learner_question: "2/3 = ? \r\n1. 4/9 \r\n2. 12/24 \r\n3. 6/9",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2/3 = 6/9",
    incorrectAnswerResponse: "Incorrect. 2/3 = 6/9",
    set: 48
    },

  4307:{
    question_tag: "L2MALP103QG",
   code: "4307",
   title: "Num Class Q49",
   learner_question: "\r\n1. On the left \r\n2. At the top \r\n3. On the bottom",
    question: "Where do we usually put units of measure on a bar graph?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Units of measure are shown on the left of a bar graph.",
    incorrectAnswerResponse: "Incorrect. Units of measure are shown on the left of a bar graph.",
    set: 49
    },

  4308:{
    question_tag: "L2MALP103Q1",
   code: "4308",
   title: "Num Q97",
   learner_question: "A triangle has 3 equal sides. Each side is 4 inches. What is the perimeter? \r\n1. 4 inches \r\n2. 12 inches \r\n3. 7 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3 x 4 = 12 inches",
    incorrectAnswerResponse: "Incorrect. 3 x 4 = 12 inches",
    set: 49
    },

  4309:{
    question_tag: "L2MALP103Q2",
   code: "4309",
   title: "Num Q98",
   learner_question: "A square has a side that is 2 inches long. What is the perimeter of the square? \r\n1. 8 inches \r\n2. 4 inches \r\n3. 2 inches",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 +2 +2 +2= 8 inches",
    incorrectAnswerResponse: "Incorrect. 2 +2 +2 +2= 8 inches",
    set: 49
    },

  4310:{
    question_tag: "L2MALP104QG",
   code: "4310",
   title: "Num Class Q50",
   learner_question: "\r\n1. An apple \r\n2. Chicken \r\n3. Rice",
    question: "Which is a Protective food? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Most fruits and vegetables are protective foods.",
    incorrectAnswerResponse: "Incorrect. Most fruits and vegetables are protective foods.",
    set: 50
    },

  4311:{
    question_tag: "L2MALP104Q1",
   code: "4311",
   title: "Num Q99",
   learner_question: "What do \'finances\' involve? \r\n1. area \r\n2. money \r\n3. opinions",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Finance means managing money.",
    incorrectAnswerResponse: "Incorrect. Finance means managing money.",
    set: 50
    },

  4312:{
    question_tag: "L2MALP104Q2",
   code: "4312",
   title: "Num Q100",
   learner_question: "What is the average of 1, 3 and 5? \r\n1. 3 \r\n2. 9 \r\n3. 15",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (1+3+5)/3= 3",
    incorrectAnswerResponse: "Incorrect. (1+3+5)/3= 3",
    set: 50
    },

  4313:{
    question_tag: "L2MALP105QG",
   code: "4313",
   title: "Num Class Q51",
   learner_question: "\r\n1. Oranges \r\n2. Cassava \r\n3. Fish",
    question: "Which is a body building food? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Fish is a body building food.",
    incorrectAnswerResponse: "Incorrect. Fish is a body building food.",
    set: 51
    },

  4314:{
    question_tag: "L2MALP105Q1",
   code: "4314",
   title: "Num Q101",
   learner_question: "What is the average of 4, 7 and 10? \r\n1. 7 \r\n2. 21 \r\n3. 42",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (4+7+10)/3= 7",
    incorrectAnswerResponse: "Incorrect. (4+7+10)/3= 7",
    set: 51
    },

  4315:{
    question_tag: "L2MALP105Q2",
   code: "4315",
   title: "Num Q102",
   learner_question: "What does a line graph measure? \r\n1. percent or parts of a whole \r\n2. Different groups \r\n3. Changes over time",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Line graphs usually show change over time.",
    incorrectAnswerResponse: "Incorrect. Line graphs usually show change over time.",
    set: 51
    },

  4316:{
    question_tag: "L2MALP106QG",
   code: "4316",
   title: "Num Class Q52",
   learner_question: "\r\n1. 1 \r\n2. 2 \r\n3. 3",
    question: "Write: 1,2,2,1,2,2__ Say: Complete the pattern. What number goes in the missing space? Enter the correct number on your phone.",
    answer: "1",
    correctAnswerResponse: ":) Correct! 1,22,1,22,1",
    incorrectAnswerResponse: "Incorrect. 1,22,1,22,1",
    set: 52
    },

  4317:{
    question_tag: "L2MALP106Q1",
   code: "4317",
   title: "Num Q103",
   learner_question: "Enter the correct symbol: 135,782___69,102 \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 135,782>19,102",
    incorrectAnswerResponse: "Incorrect. 135,782>19,102",
    set: 52
    },

  4318:{
    question_tag: "L2MALP106Q2",
   code: "4318",
   title: "Num Q104",
   learner_question: "Which number is missing? 32, 31, 30, ___, 28 Enter the correct number. \r\n1. 30 \r\n2. 29 \r\n3. 27",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 32,31,30,29,28",
    incorrectAnswerResponse: "Incorrect. 32,31,30,29,28",
    set: 52
    },

  4319:{
    question_tag: "L2MALP107QG",
   code: "4319",
   title: "Num Class Q53",
   learner_question: "\r\n1. (3) \r\n2. (2/6) \r\n3. (2/3)",
    question: "Write: 1/3 + 1/3=? Say: What is one third plus one third? Enter the number of the correct answer on your phones",
    answer: "3",
    correctAnswerResponse: ":) Correct! 1/3+1/3=2/3.",
    incorrectAnswerResponse: "Incorrect. 1/3+1/3=2/3.",
    set: 53
    },

  4320:{
    question_tag: "L2MALP107Q1",
   code: "4320",
   title: "Num Q105",
   learner_question: "1/2 + 1/2=? \r\n1. (1/2) \r\n2. (1) \r\n3. (2/4)",
    question: "",
    answer: "2",
    correctAnswerResponse: ":) Correct! 1/2 + 1/2 = 1",
    incorrectAnswerResponse: "Incorrect. 1/2 + 1/2 = 1",
    set: 53
    },

  4321:{
    question_tag: "L2MALP107Q2",
   code: "4321",
   title: "Num Q106",
   learner_question: "9/10 = ? \r\n1. 9% \r\n2. 90% \r\n3. 0.9%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 9/10 =90%",
    incorrectAnswerResponse: "Incorrect. 9/10 =90%",
    set: 53
    },

  4322:{
    question_tag: "L2MALP108QG",
   code: "4322",
   title: "Num Class Q54",
   learner_question: "\r\n1. A cone \r\n2. A sphere \r\n3. A pyramid",
    question: "What shape is the Moon? Enter the number of the correct shape.",
    answer: "2",
    correctAnswerResponse: "Correct! :) The Moon is a sphere.",
    incorrectAnswerResponse: "Incorrect. The Moon is a sphere.",
    set: 54
    },

  4323:{
    question_tag: "L2MALP108Q1",
   code: "4323",
   title: "Num Q107",
   learner_question: "Which triangle has NO equal sides? \r\n1. Isosceles \r\n2. Equilateral \r\n3. Scalene",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Scalene triangles have no equal sides.",
    incorrectAnswerResponse: "Incorrect. Scalene triangles have no equal sides.",
    set: 54
    },

  4324:{
    question_tag: "L2MALP108Q2",
   code: "4324",
   title: "Num Q108",
   learner_question: "10cm ? 1 m \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 10cm is less than 1m. There are 100 centimeters in 1 meter.",
    incorrectAnswerResponse: "Incorrect. 10cm is less than 1m. There are 100 centimeters in 1 meter.",
    set: 54
    },

  5163:{
    question_tag: "L3LITLP56QG",
   code: "5163",
   title: "Eng Class Q1",
   learner_question: "\r\n1. Missing important content. \r\n2. Falling behind \r\n3. Being busy with family",
    question: "What is a CAUSE of missing class? Enter the number of the Cause of missing class.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Being busy with family is a cause of missing class.",
    incorrectAnswerResponse: "Incorrect. Being busy with family is a cause of missing class.",
    set: 1
    },

  5164:{
    question_tag: "L3LITLP56Q1",
   code: "5164",
   title: "Eng Q1",
   learner_question: "Which is a CAUSE of missing class? \r\n1. Needing to work \r\n2. Failing exams \r\n3. Not understanding content",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Needing to work is a cause of missing class.",
    incorrectAnswerResponse: "Incorrect. Needing to work is a cause of missing class.",
    set: 1
    },

  5165:{
    question_tag: "L3LITLP56Q2",
   code: "5165",
   title: "Eng Q2",
   learner_question: "Which is an EFFECT of missing class? \r\n1. Missing important content \r\n2. Not having time \r\n3. Sleeping late",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Missing important content is an EFFECT of missing class.",
    incorrectAnswerResponse: "Incorrect. Missing important content is an EFFECT of missing class.",
    set: 1
    },

  5166:{
    question_tag: "L3LITLP57QG",
   code: "5166",
   title: "Eng Class Q2",
   learner_question: "\r\n1. Natural \r\n2. unclean \r\n3. Cause",
    question: "Which word has a prefix? Enter the number of the word with a prefix.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Unclean begins with a prefix- un. Un usually means \'not\'.",
    incorrectAnswerResponse: "Incorrect. Unclean begins with a prefix- un. Un usually means \'not\'.",
    set: 2
    },

  5167:{
    question_tag: "L3LITLP57Q1",
   code: "5167",
   title: "Eng Q3",
   learner_question: "__ means the cutting down of many trees. \r\n1. Forest \r\n2. Pollution \r\n3. Deforestation",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Deforestation means cutting down many trees.",
    incorrectAnswerResponse: "Incorrect. Deforestation means cutting down many trees.",
    set: 2
    },

  5168:{
    question_tag: "L3LITLP57Q2",
   code: "5168",
   title: "Eng Q4",
   learner_question: "Which is NOT a natural resource? \r\n1. Air \r\n2. Plastic \r\n3. Soil",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Plastic is made by people. It is not a natural resource.",
    incorrectAnswerResponse: "Incorrect. Plastic is made by people. It is not a natural resource.",
    set: 2
    },

  5169:{
    question_tag: "L3LITLP58QG",
   code: "5169",
   title: "Eng Class Q3",
   learner_question: "\r\n1. Conjunctions \r\n2. Adjectives \r\n3. Prepositions",
    question: "What kind of words show the relationship between a word and the rest of the sentence? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Prepositions show relationships. The ball is on the table. On shows the relationship between the ball and table.",
    incorrectAnswerResponse: "Incorrect. Prepositions show relationships. The ball is on the table. On shows the relationship between the ball and table.",
    set: 3
    },

  5170:{
    question_tag: "L3LITLP58Q1",
   code: "5170",
   title: "Eng Q5",
   learner_question: "Which word is a preposition? \r\n1. Healthy \r\n2. Under \r\n3. Environment",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Under is a preposition. It shows a relationship. The cat is under the table.",
    incorrectAnswerResponse: "Incorrect. Under is a preposition. It shows a relationship. The cat is under the table.",
    set: 3
    },

  5171:{
    question_tag: "L3LITLP58Q2",
   code: "5171",
   title: "Eng Q6",
   learner_question: "___ resources can be replaced and used again. \r\n1. Essential \r\n2. Renewable \r\n3. Mineral",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Renewable resources can be replaced and used again. \"Renew\" means make new again.",
    incorrectAnswerResponse: "Incorrect. Renewable resources can be replaced and used again. \"Renew\" means make new again.",
    set: 3
    },

  5172:{
    question_tag: "L3LITLP59QG",
   code: "5172",
   title: "Eng Class Q4",
   learner_question: "\r\n1. The conclusion \r\n2. The body \r\n3. The introduction",
    question: "Which part of an essay comes first? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Essays begin with an introduction.",
    incorrectAnswerResponse: "Incorrect. Essays begin with an introduction.",
    set: 4
    },

  5173:{
    question_tag: "L3LITLP59Q1",
   code: "5173",
   title: "Eng Q7",
   learner_question: "Which word is a preposition? \r\n1. Between \r\n2. Transition \r\n3. Support",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Between is a preposition. The pen is between the two books.",
    incorrectAnswerResponse: "Incorrect. Between is a preposition. The pen is between the two books.",
    set: 4
    },

  5174:{
    question_tag: "L3LITLP59Q2",
   code: "5174",
   title: "Eng Q8",
   learner_question: "What do we call the END of an essay? \r\n1. Introduction \r\n2. Conclusion \r\n3. Support",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The end of an essay is called the conclusion.",
    incorrectAnswerResponse: "Incorrect. The end of an essay is called the conclusion.",
    set: 4
    },

  5175:{
    question_tag: "L3LITLP60QG",
   code: "5175",
   title: "Eng Class Q5",
   learner_question: "\r\n1. Animals die \r\n2. Air and water are polluted \r\n3. People want wood",
    question: "Which is a CAUSE of deforestation? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) A cause of deforestation is that people want wood.",
    incorrectAnswerResponse: "Incorrect. A cause of deforestation is that people want wood.",
    set: 5
    },

  5176:{
    question_tag: "L3LITLP60Q1",
   code: "5176",
   title: "Eng Q9",
   learner_question: "Which word is a pronoun? \r\n1. He \r\n2. Under \r\n3. Quickly",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Pronouns take the place of nouns. He is a pronoun.",
    incorrectAnswerResponse: "Incorrect. Pronouns take the place of nouns. He is a pronoun.",
    set: 5
    },

  5177:{
    question_tag: "L3LITLP60Q2",
   code: "5177",
   title: "Eng Q10",
   learner_question: "Which pronoun can we use for \'John and Dan\'? \r\n1. He \r\n2. We \r\n3. They",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) We use the pronoun \'they\' for more than one person or thing.",
    incorrectAnswerResponse: "Incorrect. We use the pronoun \'they\' for more than one person or thing.",
    set: 5
    },

  5178:{
    question_tag: "L3LITLP61QG",
   code: "5178",
   title: "Eng Class Q6",
   learner_question: "\r\n1. Animals die \r\n2. People clear land for homes \r\n3. People want wood",
    question: "Which is an effect of deforestation?",
    answer: "1",
    correctAnswerResponse: "Correct! :) An effect of deforestation is the death of animals.",
    incorrectAnswerResponse: "Incorrect. An effect of deforestation is the death of animals.",
    set: 6
    },

  5179:{
    question_tag: "L3LITLP61Q1",
   code: "5179",
   title: "Eng Q11",
   learner_question: "Which word is an adjective in the sentence: \'He sees a tall girl.\' \r\n1. He \r\n2. tall \r\n3. girl",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Adjectives tell us more about nouns. The adjective \'tall\' tells us about the girl.",
    incorrectAnswerResponse: "Incorrect. Adjectives tell us more about nouns. The adjective \'tall\' tells us about the girl.",
    set: 6
    },

  5180:{
    question_tag: "L3LITLP61Q2",
   code: "5180",
   title: "Eng Q12",
   learner_question: "Which word is a pronoun? \"Dan puts it under the table.\" \r\n1. Dan \r\n2. it \r\n3. under",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) It is a pronoun used to take the place of things and animals.",
    incorrectAnswerResponse: "Incorrect. It is a pronoun used to take the place of things and animals.",
    set: 6
    },

  5181:{
    question_tag: "L3LITLP62QG",
   code: "5181",
   title: "Eng Class Q7",
   learner_question: "\r\n1. Writing something again in your own words. \r\n2. Copying something you read. \r\n3. Making up a new answer to a question.",
    question: "What is paraphrasing? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) We paraphrase when we rewrite something in our own words.",
    incorrectAnswerResponse: "Incorrect. We paraphrase when we rewrite something in our own words.",
    set: 7
    },

  5182:{
    question_tag: "L3LITLP62Q1",
   code: "5182",
   title: "Eng Q13",
   learner_question: "Which is Non-living? \r\n1. A monkey \r\n2. A rock \r\n3. A tree",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Rocks are non-living things.",
    incorrectAnswerResponse: "Incorrect. Rocks are non-living things.",
    set: 7
    },

  5183:{
    question_tag: "L3LITLP62Q2",
   code: "5183",
   title: "Eng Q14",
   learner_question: "Which word in the sentence is a pronoun: Flomo walks towards her. \r\n1. Flomo \r\n2. towards \r\n3. her",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Her is a pronoun. It takes the place of a woman or girl\'s name.",
    incorrectAnswerResponse: "Incorrect. Her is a pronoun. It takes the place of a woman or girl\'s name.",
    set: 7
    },

  5184:{
    question_tag: "L3LITLP63QG",
   code: "5184",
   title: "Eng Class Q8",
   learner_question: "\r\n1. Drop \r\n2. Drank \r\n3. Think",
    question: "Which word rhymes with Drink? Enter the number of the word that rhymes with Drink.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Rhyming words have the same end sound. Drink and Think rhyme.",
    incorrectAnswerResponse: "Incorrect. Rhyming words have the same end sound. Drink and Think rhyme.",
    set: 8
    },

  5185:{
    question_tag: "L3LITLP63Q1",
   code: "5185",
   title: "Eng Q15",
   learner_question: "Which word rhymes with \'trees\'? \r\n1. Bees \r\n2. Traps \r\n3. Free",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Rhyming words have the same end sound. Trees and Bees rhyme.",
    incorrectAnswerResponse: "Incorrect. Rhyming words have the same end sound. Trees and Bees rhyme.",
    set: 8
    },

  5186:{
    question_tag: "L3LITLP63Q2",
   code: "5186",
   title: "Eng Q16",
   learner_question: "What is an EFFECT of burning trash? \r\n1. The air is polluted \r\n2. There is no place to put the trash \r\n3. It is easy",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Air pollution is an effect of burning trash.",
    incorrectAnswerResponse: "Incorrect. Air pollution is an effect of burning trash.",
    set: 8
    },

  5187:{
    question_tag: "L3LITLP64QG",
   code: "5187",
   title: "Eng Class Q9",
   learner_question: "\r\n1. under \r\n2. during \r\n3. they",
    question: "Which word is used to show the \'order\' of events. Enter the number of the word that is used to show order.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Words like during, first, second, after show the order of events in writing.",
    incorrectAnswerResponse: "Incorrect. Words like during, first, second, after show the order of events in writing.",
    set: 9
    },

  5188:{
    question_tag: "L3LITLP64Q1",
   code: "5188",
   title: "Eng Q17",
   learner_question: "Which word is a pronoun in the sentence: We saw Sally at the big house. \r\n1. We \r\n2. Sally \r\n3. big",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) We is a pronoun that takes the place of the speaker and another person.",
    incorrectAnswerResponse: "Incorrect. We is a pronoun that takes the place of the speaker and another person.",
    set: 9
    },

  5189:{
    question_tag: "L3LITLP64Q2",
   code: "5189",
   title: "Eng Q18",
   learner_question: "Which pronoun can we use for \'the book\'? \r\n1. He \r\n2. It \r\n3. They",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) We use the pronoun \'it\' for things and animals.",
    incorrectAnswerResponse: "Incorrect. We use the pronoun \'it\' for things and animals.",
    set: 9
    },

  5190:{
    question_tag: "L3LITLP65QG",
   code: "5190",
   title: "Eng Class Q10",
   learner_question: "\r\n1. Soldiers \r\n2. Politicians \r\n3. All people",
    question: "Who can be a nation builder? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) All people can be nation builders. Nation builders make their country a better place to live.",
    incorrectAnswerResponse: "Incorrect. All people can be nation builders. Nation builders make their country a better place to live.",
    set: 10
    },

  5191:{
    question_tag: "L3LITLP65Q1",
   code: "5191",
   title: "Eng Q19",
   learner_question: "Clean air and water are ___ to life. \r\n1. essential \r\n2. environment \r\n3. pollution",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Clean air and water are essential to life.",
    incorrectAnswerResponse: "Incorrect. Clean air and water are essential to life.",
    set: 10
    },

  5192:{
    question_tag: "L3LITLP65Q2",
   code: "5192",
   title: "Eng Q20",
   learner_question: "___ can harm our health. \r\n1. Renewable \r\n2. Pollution \r\n3. Natural",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Pollution can harm our health.",
    incorrectAnswerResponse: "Incorrect. Pollution can harm our health.",
    set: 10
    },

  5193:{
    question_tag: "L3LITLP66QG",
   code: "5193",
   title: "Eng Class Q11",
   learner_question: "\r\n1. Big \r\n2. Short \r\n3. High",
    question: "Which word is the opposite of \'tall\'? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Tall is the opposite of short.",
    incorrectAnswerResponse: "Incorrect. Tall is the opposite of short.",
    set: 11
    },

  5194:{
    question_tag: "L3LITLP66Q1",
   code: "5194",
   title: "Eng Q21",
   learner_question: "What is the opposite of \'quiet\'? \r\n1. silent \r\n2. quilt \r\n3. loud",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Loud is the opposite of quiet.",
    incorrectAnswerResponse: "Incorrect. Loud is the opposite of quiet.",
    set: 11
    },

  5195:{
    question_tag: "L3LITLP66Q2",
   code: "5195",
   title: "Eng Q22",
   learner_question: "Which words are in alphabetical order? \r\n1. small, medium, large \r\n2. one, two, three \r\n3. animal, cat, dog",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Alphabetical order means words are arranged by the order of their first letter in the alphabet. Animal, cat, dog are in alphabetical order- a-c-d.",
    incorrectAnswerResponse: "Incorrect. Alphabetical order means words are arranged by the order of their first letter in the alphabet. Animal, cat, dog are in alphabetical order- a-c-d.",
    set: 11
    },

  5196:{
    question_tag: "L3LITLP67QG",
   code: "5196",
   title: "Eng Class Q12",
   learner_question: "\r\n1. Facts about the Earth. \r\n2. Lessons on Math. \r\n3. The meaning of words.",
    question: "What can you learn from a dictionary? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Dictionaries tell us what words mean and how to pronounce them.",
    incorrectAnswerResponse: "Dictionaries tell us what words mean and how to pronounce them.",
    set: 12
    },

  5197:{
    question_tag: "L3LITLP67Q1",
   code: "5197",
   title: "Eng Q23",
   learner_question: "Which words are in alphabetical order? \r\n1. five, six, three \r\n2. one, three, five \r\n3. two, three, four",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Correct! :) Alphabetical order means words are arranged by the order of their first letter in the alphabet. Five, six, three are in alphabetical order-f-s-t.",
    incorrectAnswerResponse: "Incorrect. Incorrect. Alphabetical order means words are arranged by the order of their first letter in the alphabet. Five, six, three are in alphabetical order-f-s-t.",
    set: 12
    },

  5198:{
    question_tag: "L3LITLP67Q2",
   code: "5198",
   title: "Eng Q24",
   learner_question: "Which words are in alphabetical order? \r\n1. one, two, three \r\n2. one, three, two \r\n3. three, two, one",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) one, three, two are in alphabetical order. If the first letters of a word are the same, we use the second letters- o - th -tw.",
    incorrectAnswerResponse: "Incorrect. one, three, two are in alphabetical order. If the first letters of a word are the same, we use the second letters- o - th -tw.",
    set: 12
    },

  5199:{
    question_tag: "L3LITLP68QG",
   code: "5199",
   title: "Eng Class Q13",
   learner_question: "\r\n1. Cars \r\n2. Crude Oil \r\n3. Electricity",
    question: "Which is a natural resource? Enter the number of the natural resource.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Oil is a natural resource- it comes from under the ground.",
    incorrectAnswerResponse: "Incorrect. Oil is a natural resource- it comes from under the ground.",
    set: 13
    },

  5200:{
    question_tag: "L3LITLP68Q1",
   code: "5200",
   title: "Eng Q25",
   learner_question: "Which pronoun can take the place of \'John and I\'? \r\n1. He \r\n2. They \r\n3. We",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The pronoun \'we\' takes the place of the speaker and another person.",
    incorrectAnswerResponse: "Incorrect. The pronoun \'we\' takes the place of the speaker and another person.",
    set: 13
    },

  5201:{
    question_tag: "L3LITLP68Q2",
   code: "5201",
   title: "Eng Q26",
   learner_question: "Which word is an adjective in the sentence: The big dogs runs quickly. \r\n1. big \r\n2. dog \r\n3. quickly",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The adjective \'big\' describes the dog.",
    incorrectAnswerResponse: "Incorrect. The adjective \'big\' describes the dog.",
    set: 13
    },

  5202:{
    question_tag: "L3LITLP69QG",
   code: "5202",
   title: "Eng Class Q14 ",
   learner_question: "\r\n1. An insect \r\n2. A competition \r\n3. A describing word",
    question: "What is a spelling bee? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A spelling bee is a competition where people spell words.",
    incorrectAnswerResponse: "Incorrect. A spelling bee is a competition where people spell words.",
    set: 14
    },

  5203:{
    question_tag: "L3LITLP69Q1",
   code: "5203",
   title: "Eng Q27",
   learner_question: "___ can harm our health. \r\n1. Polusion \r\n2. Pollution \r\n3. Polution",
    question: "",
    answer: "2",
    correctAnswerResponse: "Pollution can harm our health.",
    incorrectAnswerResponse: "Pollution can harm our health.",
    set: 14
    },

  5204:{
    question_tag: "L3LITLP69Q2",
   code: "5204",
   title: "Eng Q28",
   learner_question: "Which word rhymes with great? \r\n1. hate \r\n2. bread \r\n3. grad",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Hate and great have the same long a end sound.",
    incorrectAnswerResponse: "Incorrect. Hate and great have the same long a end sound.",
    set: 14
    },

  5205:{
    question_tag: "L3LITLP70QG",
   code: "5205",
   title: "Eng Class Q15",
   learner_question: "\r\n1. Grammar errors \r\n2. The topic \r\n3. Subject verb agreement",
    question: "What is NOT something you check for when editing your friend\'s work. Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) When you edit the work of others, look for errors, not whether you agree or disagree with the topic.",
    incorrectAnswerResponse: "Incorrect. When you edit the work of others, look for errors, not whether you agree or disagree with the topic.",
    set: 15
    },

  5206:{
    question_tag: "L3LITLP70Q1",
   code: "5206",
   title: "Eng Q29",
   learner_question: "Which sentence has a subject verb agreement error? \r\n1. She is hapy. \r\n2. they go to school \r\n3. She are happy.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) In the sentence, \"She are happy.\" the verb \'are\' does not agree with the subject \'she\'. She is happy.",
    incorrectAnswerResponse: "Incorrect. In the sentence, \"She are happy.\" the verb \'are\' does not agree with the subject \'she\'. She is happy.",
    set: 15
    },

  5207:{
    question_tag: "L3LITLP70Q2",
   code: "5207",
   title: "Eng Q30",
   learner_question: "Which sentence has a capitalization error? \r\n1. She is hapy. \r\n2. they go to school \r\n3. She are happy.",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The sentence, \'they go to school.\' should begin with a capital letter. They go to school.",
    incorrectAnswerResponse: "Incorrect. The sentence, \'they go to school.\' should begin with a capital letter. They go to school.",
    set: 15
    },

  5208:{
    question_tag: "L3LITLP71QG",
   code: "5208",
   title: "Eng Class Q16",
   learner_question: "\r\n1. renewible \r\n2. renewable \r\n3. reneweble",
    question: "What is the correct spelling of \'renewable\'? Enter the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Renewable",
    incorrectAnswerResponse: "Incorrect. Renewable",
    set: 16
    },

  5209:{
    question_tag: "L3LITLP71Q1",
   code: "5209",
   title: "Eng Q31",
   learner_question: "What kind of word is \'Natural\'? \r\n1. Adjective \r\n2. Noun \r\n3. Preposition",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Natural is an adjective, it describes a noun.",
    incorrectAnswerResponse: "Incorrect. Natural is an adjective, it describes a noun.",
    set: 16
    },

  5210:{
    question_tag: "L3LITLP71Q2",
   code: "5210",
   title: "Eng Q32",
   learner_question: "Which is correct? \r\n1. deforestation \r\n2. deforrestation \r\n3. defforrestation",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) deforestation",
    incorrectAnswerResponse: "Incorrect. deforestation",
    set: 16
    },

  5211:{
    question_tag: "L3LITLP72QG",
   code: "5211",
   title: "Eng Class Q17",
   learner_question: "\r\n1. It \r\n2. She \r\n3. We",
    question: "What pronoun can take the place of the name \'Jane\'? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) She takes the place of a woman or girl\'s name.",
    incorrectAnswerResponse: "Incorrect. She takes the place of a woman or girl\'s name.",
    set: 17
    },

  5212:{
    question_tag: "L3LITLP72Q1",
   code: "5212",
   title: "Eng Q33",
   learner_question: "Which words are in alphabetical order? \r\n1. January, February, March \r\n2. ten, eleven, twelve \r\n3. Monday, Tuesday, Wednesday",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Monday, Tuesday, Wednesday are in alphabetical order- m, t, w.",
    incorrectAnswerResponse: "Incorrect. Monday, Tuesday, Wednesday are in alphabetical order- m, t, w.",
    set: 17
    },

  5213:{
    question_tag: "L3LITLP72Q2",
   code: "5213",
   title: "Eng Q34",
   learner_question: "What is the opposite of \'fat\'? \r\n1. big \r\n2. round \r\n3. thin",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The opposite of fat is thin.",
    incorrectAnswerResponse: "Incorrect. The opposite of fat is thin.",
    set: 17
    },

  5214:{
    question_tag: "L3LITLP73QG",
   code: "5214",
   title: "Eng Class Q18",
   learner_question: "\r\n1. She \r\n3. Fat \r\n3. In",
    question: "Which word is a preposition? Enter the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'In\' is a preposition. Prepositions show relationships. The books is in the bag.",
    incorrectAnswerResponse: "Incorrect. \'In\' is a preposition. Prepositions show relationships. The books is in the bag.",
    set: 18
    },

  5215:{
    question_tag: "L3LITLP73Q1",
   code: "5215",
   title: "Eng Q35",
   learner_question: "Jane and Sara are happy. ___ are eating ice cream. \r\n1. They \r\n2. We \r\n3. she",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Jane and Sara are happy. They are eating ice cream.",
    incorrectAnswerResponse: "Incorrect. Jane and Sara are happy. They are eating ice cream.",
    set: 18
    },

  5216:{
    question_tag: "L3LITLP73Q2",
   code: "5216",
   title: "Eng Q36",
   learner_question: "Which word is an adjective in the sentence: The big elephants see run. \r\n1. big \r\n2. elephants \r\n3. run ",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Nouns are people, places and things. \'Elephants\' is a noun.",
    incorrectAnswerResponse: "Incorrect. Nouns are people, places and things. \'Elephants\' is a noun.",
    set: 18
    },

  5217:{
    question_tag: "L3LITLP74QG",
   code: "5217",
   title: "Eng Class Q19",
   learner_question: "\r\n1. D \r\n2. E \r\n3. F",
    question: "Which module did we begin today? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) We began Module E",
    incorrectAnswerResponse: "Incorrect. We began Module E",
    set: 19
    },

  5218:{
    question_tag: "L3LITLP74Q1",
   code: "5218",
   title: "Eng Q37",
   learner_question: "Which is a part of reproductive health? \r\n1. Nutrition \r\n2. The environment \r\n3. Having children",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Reproductive health involves sex and having children.",
    incorrectAnswerResponse: "Incorrect. Reproductive health involves sex and having children.",
    set: 19
    },

  5219:{
    question_tag: "L3LITLP74Q2",
   code: "5219",
   title: "Eng Q38",
   learner_question: "In alphabetical order, which word comes first? \r\n1. world \r\n2. pollution \r\n3. problem",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) po- pr- w",
    incorrectAnswerResponse: "Incorrect. po- pr- w",
    set: 19
    },

  5220:{
    question_tag: "L3LITLP75QG",
   code: "5220",
   title: "Eng Class Q20",
   learner_question: "\r\n1. Injections \r\n2. Condoms \r\n3. Abstinence",
    question: "Which cannot prevent HIV? Enter the number of the answer that cannot stop HIV.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Injections and pills cannot stop HIV.",
    incorrectAnswerResponse: "Incorrect. Injections and pills cannot stop HIV.",
    set: 20
    },

  5221:{
    question_tag: "L3LITLP75Q1",
   code: "5221",
   title: "Eng Q39",
   learner_question: "Which word is a noun? \r\n1. Aware \r\n2. Awareness \r\n3. Worry",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Awareness is a noun. Aware is an adjective. Worry is a verb.",
    incorrectAnswerResponse: "Incorrect. Awareness is a noun. Aware is an adjective. Worry is a verb.",
    set: 20
    },

  5222:{
    question_tag: "L3LITLP75Q2",
   code: "5222",
   title: "Eng Q40",
   learner_question: "___ can prevent pregnancy. \r\n1. Family health \r\n2. Contraceptives \r\n3. Menstruation",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Contraceptives can prevent pregnancy.",
    incorrectAnswerResponse: "Incorrect. Contraceptives can prevent pregnancy.",
    set: 20
    },

  5223:{
    question_tag: "L3LITLP76QG",
   code: "5223",
   title: "Eng Class Q21",
   learner_question: "\r\n1. IUDs \r\n2. UTIs \r\n3. STDs",
    question: "Sexual diseases are also called what? Enter the correct answer.",
    answer: "3",
    correctAnswerResponse: "STDs are sexually transmitted diseases like HIV, herpes and gonorrhea.",
    incorrectAnswerResponse: "STDs are sexually transmitted diseases like HIV, herpes and gonorrhea.",
    set: 21
    },

  5224:{
    question_tag: "L3LITLP76Q1",
   code: "5224",
   title: "Eng Q41",
   learner_question: "Babies grow in the___. \r\n1. womb \r\n2. fluid \r\n3. vagina",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Babies grow in the womb of a woman. They pass through the vagina when they are born.",
    incorrectAnswerResponse: "Incorrect. Babies grow in the womb of a woman. They pass through the vagina when they are born.",
    set: 21
    },

  5225:{
    question_tag: "L3LITLP76Q2",
   code: "5225",
   title: "Eng Q42",
   learner_question: "What is a compromise? \r\n1. When all people get what they want. \r\n2. When one person gets what they want. \r\n3. When all people get SOME of what they want.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) When people compromise, they give up something and get something.",
    incorrectAnswerResponse: "Incorrect. When people compromise, they give up something and get something.",
    set: 21
    },

  5226:{
    question_tag: "L3LITLP77QG",
   code: "5226",
   title: "Eng Class Q22",
   learner_question: "\r\n1. Contraceptive \r\n2. Negotiation \r\n3. Compromise",
    question: "Which is not a way to settle a palaver? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Contraceptive stops pregnancy, not palavers.",
    incorrectAnswerResponse: "Incorrect. Contraceptive stops pregnancy, not palavers.",
    set: 22
    },

  5227:{
    question_tag: "L3LITLP77Q1",
   code: "5227",
   title: "Eng Q43",
   learner_question: "Which word is an adverb in the sentence: The tall girl walked quickly. \r\n1. tall \r\n2. walked \r\n3. quickly",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Quickly is an adverb. Quickly tells us how the girl walked.",
    incorrectAnswerResponse: "Incorrect. Quickly is an adverb. Quickly tells us how the girl walked.",
    set: 22
    },

  5228:{
    question_tag: "L3LITLP77Q2",
   code: "5228",
   title: "Eng Q44",
   learner_question: "Which word is a verb in the sentence: They negotiate calmly. \r\n1. they \r\n2. negotiate \r\n3. calmly",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Negotiate is a verb.",
    incorrectAnswerResponse: "Incorrect. Negotiate is a verb.",
    set: 22
    },

  5229:{
    question_tag: "L3LITLP78QG",
   code: "5229",
   title: "Eng Class Q23",
   learner_question: "\r\n1. Condoms \r\n2. Birth control pills \r\n3. IUDs",
    question: "Which can stop STDs? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Condoms are the only contraceptives that prevent STDs.",
    incorrectAnswerResponse: "Incorrect. Condoms are the only contraceptives that prevent STDs.",
    set: 23
    },

  5230:{
    question_tag: "L3LITLP78Q1",
   code: "5230",
   title: "Eng Q45",
   learner_question: "\r\n1. Chlamydia \r\n2. Syphilis \r\n3. Menstruation",
    question: "Which is NOT an STD? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Chlamydia and Syphilis are STDs.",
    incorrectAnswerResponse: "Chlamydia and Syphilis are STDs.",
    set: 23
    },

  5231:{
    question_tag: "L3LITLP78Q2",
   code: "5231",
   title: "Eng Q46",
   learner_question: "Which STD can you see easily? \r\n1. HIV \r\n2. Genital warts \r\n3. Hepatitis",
    question: "",
    answer: "2",
    correctAnswerResponse: "Genital warts are bumps on the skin around the vagina.",
    incorrectAnswerResponse: "Genital warts are bumps on the skin around the vagina.",
    set: 23
    },

  5232:{
    question_tag: "L3LITLP79QG",
   code: "5232",
   title: "Eng Class Q24",
   learner_question: "\r\n1. People disagree \r\n2. People want something \r\n3. People try to hurt one another",
    question: "How is a negotiation different from a fight? Enter the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) In a negotiation, no one is trying to hurt the other person.",
    incorrectAnswerResponse: "Incorrect. In a negotiation, no one is trying to hurt the other person.",
    set: 24
    },

  5233:{
    question_tag: "L3LITLP79Q1",
   code: "5233",
   title: "Eng Q47",
   learner_question: "Which is an STD? \r\n1. Contraceptive \r\n2. Gonorrhea \r\n3. Menstruation",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Gonorrhea is an STD.",
    incorrectAnswerResponse: "Incorrect. Gonorrhea is an STD.",
    set: 24
    },

  5234:{
    question_tag: "L3LITLP79Q2",
   code: "5234",
   title: "Eng Q48",
   learner_question: "What is another word for \'having children\'? \r\n1. Family Health \r\n2. Contraceptive \r\n3. Reproduction",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Reproduction means having children.",
    incorrectAnswerResponse: "Incorrect. Reproduction means having children.",
    set: 24
    },

  5235:{
    question_tag: "L3LITLP80QG",
   code: "5235",
   title: "Eng Class Q25",
   learner_question: "\r\n1. Condoms \r\n2. Birth control pills \r\n3. IUDs",
    question: "Which contraceptive is used by men? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Condoms are used on the penis. There are also female condoms for the vagina.",
    incorrectAnswerResponse: "Incorrect. Condoms are used on the penis. There are also female condoms for the vagina.",
    set: 25
    },

  5236:{
    question_tag: "L3LITLP80Q1",
   code: "5236",
   title: "Eng Q49",
   learner_question: "Who is NOT a healthcare professional? \r\n1. A doctor \r\n3. A lawyer \r\n3. A nurse",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Nurses and doctor\'s are healthcare professionals.",
    incorrectAnswerResponse: "Incorrect. Nurses and doctor\'s are healthcare professionals.",
    set: 25
    },

  5237:{
    question_tag: "L3LITLP80Q2",
   code: "5237",
   title: "Eng Q50",
   learner_question: "Which contraceptive goes under the skin? \r\n1. Implant \r\n2. Birth control pills \r\n3. IUDs",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Implants go under the skin.",
    incorrectAnswerResponse: "Incorrect. Implants go under the skin.",
    set: 25
    },

  5238:{
    question_tag: "L3LITLP81QG",
   code: "5238",
   title: "Eng Class Q26",
   learner_question: "\r\n1. Sexual partner \r\n2. Negotiation \r\n3. Family planning",
    question: "What do we call talking about how many children we want and when? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Family planning means making plans for how many children you will have and when.",
    incorrectAnswerResponse: "Incorrect. Family planning means making plans for how many children you will have and when.",
    set: 26
    },

  5239:{
    question_tag: "L3LITLP81Q1",
   code: "5239",
   title: "Eng Q51",
   learner_question: "Which is NOT a part of a woman? \r\n1. Penis \r\n2. Womb \r\n3. Vagina",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) A penis is the male reproductive organ.",
    incorrectAnswerResponse: "Incorrect. A penis is the male reproductive organ.",
    set: 26
    },

  5240:{
    question_tag: "L3LITLP81Q2",
   code: "5240",
   title: "Eng Q52",
   learner_question: "Which word is an adjective? \r\n1. Aware \r\n2. Vagina \r\n3. AIDS",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Aware is an adjective. She is aware of the risks.",
    incorrectAnswerResponse: "Incorrect. Aware is an adjective. She is aware of the risks.",
    set: 26
    },

  5241:{
    question_tag: "L3LITLP82QG",
   code: "5241",
   title: "Eng Class Q27",
   learner_question: "\r\n1. Contraceptive is a noun \r\n2. Contraceptives prevent pregnancy \r\n3. All contraceptives prevent STDs",
    question: "Which is NOT true about the word contraceptive? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Only condoms prevent STDs",
    incorrectAnswerResponse: "Incorrect. Only condoms prevent STDs",
    set: 27
    },

  5242:{
    question_tag: "L3LITLP82Q1",
   code: "5242",
   title: "Eng Q53",
   learner_question: "Which pronoun would replace the word \'condom\'. \r\n1. He \r\n2. They \r\n3. It",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The pronoun \'it\' takes the place of things and animals.",
    incorrectAnswerResponse: "Incorrect. The pronoun \'it\' takes the place of things and animals.",
    set: 27
    },

  5243:{
    question_tag: "L3LITLP82Q2",
   code: "5243",
   title: "Eng Q54",
   learner_question: "Which is a reason to use an IUD? \r\n1. To stop STDs \r\n2. To stop pregnancy \r\n3. To negotiate",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) IUDs protect from pregnancy, not STDs.",
    incorrectAnswerResponse: "Incorrect. IUDs protect from pregnancy, not STDs.",
    set: 27
    },

  5244:{
    question_tag: "L3LITLP83QG",
   code: "5244",
   title: "Eng Class Q28",
   learner_question: "\r\n1. Supporting \r\n2. Transition \r\n3. Topic",
    question: "What kind of sentence moves an essay from one topic to another? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Transition sentences move essays from one topic to another.",
    incorrectAnswerResponse: "Incorrect. Transition sentences move essays from one topic to another.",
    set: 28
    },

  5245:{
    question_tag: "L3LITLP83Q1",
   code: "5245",
   title: "Eng Q55",
   learner_question: "What is another word for \'Supporting parts\'? \r\n1. Body \r\n2. Introduction \r\n3. Conclusion",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Supporting parts are also called \'body\' parts.",
    incorrectAnswerResponse: "Incorrect. Supporting parts are also called \'body\' parts.",
    set: 28
    },

  5246:{
    question_tag: "L3LITLP83Q2",
   code: "5246",
   title: "Eng Q56",
   learner_question: "What is the second step in the writing process? \r\n1. Drafting \r\n2. Planning \r\n3. Editing",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Drafting is the second step in the writing process.",
    incorrectAnswerResponse: "Incorrect. Drafting is the second step in the writing process.",
    set: 28
    },

  5247:{
    question_tag: "L3LITLP84QG",
   code: "5247",
   title: "Eng Class Q29",
   learner_question: "Which is NOT a good source for an essay? \r\n1. A doctor \r\n2. A newspaper \r\n3. A friend",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Sources should be experts.",
    incorrectAnswerResponse: "Incorrect. Sources should be experts.",
    set: 29
    },

  5248:{
    question_tag: "L3LITLP84Q1",
   code: "5248",
   title: "Eng Q57",
   learner_question: "The writer ___ that STDs are increasing. \r\n1. according to \r\n2. states \r\n3. source",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The writer states that STDs are increasing.",
    incorrectAnswerResponse: "Incorrect. The writer states that STDs are increasing.",
    set: 29
    },

  5249:{
    question_tag: "L3LITLP84Q2",
   code: "5249",
   title: "Eng Q58",
   learner_question: "___ the author, large families are expensive. \r\n1. States \r\n2. Writes \r\n3. According to",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) According to the author, large families are expensive.",
    incorrectAnswerResponse: "Incorrect. According to the author, large families are expensive.",
    set: 29
    },

  5250:{
    question_tag: "L3LITLP85QG",
   code: "5250",
   title: "Eng Class Q30",
   learner_question: "\r\n1. The happy girl runs. \r\n2. The girls happy runs. \r\n3. Happy the girl runs.",
    question: "Which sentence correctly uses the adjective \'happy\'? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The happy girl runs.",
    incorrectAnswerResponse: "Incorrect. The happy girl runs.",
    set: 30
    },

  5251:{
    question_tag: "L3LITLP85Q1",
   code: "5251",
   title: "Eng Q59",
   learner_question: "Which word is an adjective? \r\n1. health \r\n2. healthy \r\n3. healthily",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Healthy is an adjective. The healthy boy eats good food.",
    incorrectAnswerResponse: "Incorrect. Healthy is an adjective. The healthy boy eats good food.",
    set: 30
    },

  5252:{
    question_tag: "L3LITLP85Q2",
   code: "5252",
   title: "Eng Q60",
   learner_question: "Which is the adjective in the sentence: The tall girl runs quickly. \r\n1. tall \r\n2. girl \r\n3. quickly",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The adjective \'tall\' describes the girl.",
    incorrectAnswerResponse: "Incorrect. The adjective \'tall\' describes the girl.",
    set: 30
    },

  5253:{
    question_tag: "L3LITLP86QG",
   code: "5253",
   title: "Eng Class Q31",
   learner_question: "\r\n1. Change questions after starting \r\n2. Take notes \r\n3. Edit the words of the speaker",
    question: "Which is NOT something a good interviewer does? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) An interviewer should not change the words of the person they speak with.",
    incorrectAnswerResponse: "Incorrect. An interviewer should not change the words of the person they speak with.",
    set: 31
    },

  5254:{
    question_tag: "L3LITLP86Q1",
   code: "5254",
   title: "Eng Q61",
   learner_question: "Good interviews are like___. \r\n1. negotiations \r\n2. compromises \r\n3. conversations",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Good interviews are like conversations.",
    incorrectAnswerResponse: "Incorrect. Good interviews are like conversations.",
    set: 31
    },

  5255:{
    question_tag: "L3LITLP86Q2",
   code: "5255",
   title: "Eng Q62",
   learner_question: "What is an indent? \r\n1. A spelling competition \r\n2. A space \r\n3. A describing word",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) An indent is a small space at the start of a new paragraph.",
    incorrectAnswerResponse: "Incorrect. An indent is a small space at the start of a new paragraph.",
    set: 31
    },

  5256:{
    question_tag: "L3LITLP87QG",
   code: "5256",
   title: "Eng Class Q32",
   learner_question: "\r\n1. A bridge \r\n2. A street \r\n3. A conversation",
    question: "What is a good transition sentence like? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) A good transition is like a bridge from one topic to another.",
    incorrectAnswerResponse: "Incorrect. A good transition is like a bridge from one topic to another.",
    set: 32
    },

  5257:{
    question_tag: "L3LITLP87Q1",
   code: "5257",
   title: "Eng Q63",
   learner_question: "Which word in the sentence is a pronoun: She and Jane talk quietly. \r\n1. She \r\n2. Jane \r\n3. quietly",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'She\' is a pronoun. Pronouns take the place of nouns.",
    incorrectAnswerResponse: "Incorrect. \'She\' is a pronoun. Pronouns take the place of nouns.",
    set: 32
    },

  5258:{
    question_tag: "L3LITLP87Q2",
   code: "5258",
   title: "Eng Q64",
   learner_question: "Which word in the sentence is an adjective: The fat dog runs slowly. \r\n1. fat \r\n2. runs \r\n3. slowly",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Fat is an adjective. It describes the dog.",
    incorrectAnswerResponse: "Incorrect. Fat is an adjective. It describes the dog.",
    set: 32
    },

  5259:{
    question_tag: "L3LITLP88QG",
   code: "5259",
   title: "Eng Class Q33",
   learner_question: "\r\n1. contraseptive \r\n2. contraceptive \r\n3. contrasceptive",
    question: "Which word is spelled correctly? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Contraceptive",
    incorrectAnswerResponse: "Incorrect. Contraceptive",
    set: 33
    },

  5260:{
    question_tag: "L3LITLP88Q1",
   code: "5260",
   title: "Eng Q65",
   learner_question: "___ is writing down our thoughts and feelings. \r\n1. Editing \r\n2. Drafting \r\n3. Journaling",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Journaling is writing down our thoughts and feelings.",
    incorrectAnswerResponse: "Incorrect. Journaling is writing down our thoughts and feelings.",
    set: 33
    },

  5261:{
    question_tag: "L3LITLP88Q2",
   code: "5261",
   title: "Eng Q66",
   learner_question: "Which is spelled correctly? \r\n1. pregnancy \r\n2. pregnansy \r\n3. pregnensy",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Pregnancy",
    incorrectAnswerResponse: "Incorrect. Pregnancy",
    set: 33
    },

  5262:{
    question_tag: "L3LITLP89QG",
   code: "5262",
   title: "Eng Class Q34",
   learner_question: "\r\n1. Condoms \r\n2. Birth control pills \r\n3. IUDs",
    question: "What can protect against STDs? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Only condoms prevent STDs",
    incorrectAnswerResponse: "Incorrect. Only condoms prevent STDs",
    set: 34
    },

  5263:{
    question_tag: "L3LITLP89Q1",
   code: "5263",
   title: "Eng Q67",
   learner_question: "Which word is an adjective? \r\n1. run \r\n2. sad \r\n3. quickly",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Sad is an adjective. The sad girl runs.",
    incorrectAnswerResponse: "Incorrect. Sad is an adjective. The sad girl runs.",
    set: 34
    },

  5264:{
    question_tag: "L3LITLP89Q2",
   code: "5264",
   title: "Eng Q68",
   learner_question: "__ prevent pregnancy. \r\n1. Contraceptives \r\n2. Family planning \r\n3. Reproduction",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Contraceptives can prevent pregnancy.",
    incorrectAnswerResponse: "Incorrect. Contraceptives can prevent pregnancy.",
    set: 34
    },

  5265:{
    question_tag: "L3LITLP90QG",
   code: "5265",
   title: "Eng Class Q35",
   learner_question: "\r\n1. IUD \r\n2. Awareness \r\n3. HIV",
    question: "Which is an STD? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) HIV is an STD.",
    incorrectAnswerResponse: "Incorrect. HIV is an STD.",
    set: 35
    },

  5266:{
    question_tag: "L3LITLP90Q1",
   code: "5266",
   title: "Eng Q69",
   learner_question: "When we ___ we should remain calm. \r\n1. Family planning \r\n2. negotiate \r\n3. contraceptive",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) When we negotiate, we should remain calm.",
    incorrectAnswerResponse: "Incorrect. When we negotiate, we should remain calm.",
    set: 35
    },

  5267:{
    question_tag: "L3LITLP90Q2",
   code: "5267",
   title: "Eng Q70",
   learner_question: "Which word in the sentence is an adverb: The short boy runs slowly. \r\n1. short \r\n2. runs \r\n3. slowly",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Slowly is an adverb showing how the boy ran.",
    incorrectAnswerResponse: "Incorrect. Slowly is an adverb showing how the boy ran.",
    set: 35
    },

  5268:{
    question_tag: "L3LITLP91QG",
   code: "5268",
   title: "Eng Class Q36",
   learner_question: "\r\n1. Reproductive health \r\n2. Literature \r\n3. Science",
    question: "What topic will Module F cover? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Module F will focus on creative writing and literature.",
    incorrectAnswerResponse: "Incorrect. Module F will focus on creative writing and literature.",
    set: 36
    },

  5269:{
    question_tag: "L3LITLP91Q1",
   code: "5269",
   title: "Eng Q71",
   learner_question: "What kind of word is \'Poetry\'? \r\n1. Adjective \r\n2. Noun \r\n3. Preposition",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Poetry is a thing. It is a noun.",
    incorrectAnswerResponse: "Incorrect. Poetry is a thing. It is a noun.",
    set: 36
    },

  5270:{
    question_tag: "L3LITLP91Q2",
   code: "5270",
   title: "Eng Q72",
   learner_question: "What is a masterpiece? \r\n1. Jewelry made of gold \r\n2. A very good work of art \r\n3. A type of music",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) A masterpiece is a great work of art.",
    incorrectAnswerResponse: "Incorrect. A masterpiece is a great work of art.",
    set: 36
    },

  5271:{
    question_tag: "L3LITLP92QG",
   code: "5271",
   title: "Eng Class Q37",
   learner_question: "\r\n1. Poems \r\n2. Novels \r\n3. Lyrics",
    question: "Why do we call the words to songs? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Lyrics are the words to a song.",
    incorrectAnswerResponse: "Incorrect. Lyrics are the words to a song.",
    set: 37
    },

  5272:{
    question_tag: "L3LITLP92Q1",
   code: "5272",
   title: "Eng Q73",
   learner_question: "Poems, novels and speeches are all___. \r\n1. Fiction \r\n2. Masterpieces \r\n3. Literature",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Poems, novels and speeches are all literature.",
    incorrectAnswerResponse: "Incorrect. Poems, novels and speeches are all literature.",
    set: 37
    },

  5273:{
    question_tag: "L3LITLP92Q2",
   code: "5273",
   title: "Eng Q74",
   learner_question: "A ___ writes poems. \r\n1. Poet \r\n2. Speaker \r\n3. Poetry",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The author of a poem is a poet.",
    incorrectAnswerResponse: "Incorrect. The author of a poem is a poet.",
    set: 37
    },

  5274:{
    question_tag: "L3LITLP93QG",
   code: "5274",
   title: "Eng Class Q38",
   learner_question: "\r\n1. Rewriting a sentence in our own words. \r\n2. Expressing something in a shorter way. \r\n3. Creating a type of literature.",
    question: "What are we doing when we summarize? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Summarizing is saying something in a shorter way.",
    incorrectAnswerResponse: "Incorrect. Summarizing is saying something in a shorter way.",
    set: 38
    },

  5275:{
    question_tag: "L3LITLP93Q1",
   code: "5275",
   title: "Eng Q75",
   learner_question: "What is the difference between lyrics and a poem? \r\n1. Lyrics are longer \r\n2. Poems do not need good grammar \r\n3. Lyrics are set to music",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Lyrics are set to music, poems are not.",
    incorrectAnswerResponse: "Incorrect. Lyrics are set to music, poems are not.",
    set: 38
    },

  5276:{
    question_tag: "L3LITLP93Q2",
   code: "5276",
   title: "Eng Q76",
   learner_question: "The ___ is the name of a story, poem or song. \r\n1. Masterpiece \r\n2. Fiction \r\n3. Title",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The title is the name of a piece of writing.",
    incorrectAnswerResponse: "Incorrect. The title is the name of a piece of writing.",
    set: 38
    },

  5277:{
    question_tag: "L3LITLP94QG",
   code: "5277",
   title: "Eng Class Q39",
   learner_question: "\r\n1. The boy is a monster. \r\n2. The boy likes ice cream and cake. \r\n3. The runs quickly.",
    question: "Which sentence is a metaphor? Enter the number of the metaphor.",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'The boy is a monster.\' is a metaphor. The boy is like a monster, he is not really a monster.",
    incorrectAnswerResponse: "Incorrect. \'The boy is a monster.\' is a metaphor. The boy is like a monster, he is not really a monster.",
    set: 39
    },

  5278:{
    question_tag: "L3LITLP94Q1",
   code: "5278",
   title: "Eng Q77",
   learner_question: "Which sentence is a metaphor? \r\n1. Jane is a cheetah when she runs. \r\n2. Jane is a talented poet. \r\n3. Jane is faster than anyone in her school.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Saying Jane is a cheetah means Jane is very fast. This is a metaphor.",
    incorrectAnswerResponse: "Incorrect. Saying Jane is a cheetah means Jane is very fast. This is a metaphor.",
    set: 39
    },

  5279:{
    question_tag: "L3LITLP94Q2",
   code: "5279",
   title: "Eng Q78",
   learner_question: "___ means saying something in a shorter way. \r\n1. Paraphrasing \r\n2. Summarizing \r\n3. Editing",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Summarizing means saying something in a shorter way.",
    incorrectAnswerResponse: "Incorrect. Summarizing means saying something in a shorter way.",
    set: 39
    },

  5280:{
    question_tag: "L3LITLP95QG",
   code: "5280",
   title: "Eng Class Q40",
   learner_question: "\r\n1. The shape of Liberia is like a woman\'s shape. \r\n2. A woman named Liberia is the mother of everyone here. \r\n3. Liberia makes us who we are.",
    question: "If I say, \'Liberia is our mother,\' what does my metaphor likely mean? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Metaphors do not mean exactly what is said.",
    incorrectAnswerResponse: "Incorrect. Metaphors do not mean exactly what is said.",
    set: 40
    },

  5281:{
    question_tag: "L3LITLP95Q1",
   code: "5281",
   title: "Eng Q79",
   learner_question: "Which is a good metaphor to say a boy who is small? \r\n1. The boy is a lion. \r\n2. The boy is very small. \r\n3. The boy is a mouse.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) \'The boy is a mouse,\' is a metaphor that suggests a boy is very small.",
    incorrectAnswerResponse: "Incorrect. \'The boy is a mouse,\' is a metaphor that suggests a boy is very small.",
    set: 40
    },

  5282:{
    question_tag: "L3LITLP95Q2",
   code: "5282",
   title: "Eng Q80",
   learner_question: "Which word is a verb in the metaphor: She is a lion. \r\n1. She \r\n2. is \r\n3. lion",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Is\' is a special verb called a linking verb. It is one form of the verb \'be\'. Is, are, be, been, being, was and were are all forms of \'be\'.",
    incorrectAnswerResponse: "Incorrect. \'Is\' is a special verb called a linking verb. It is one form of the verb \'be\'. Is, are, be, been, being, was and were are all forms of \'be\'.",
    set: 40
    },

  5283:{
    question_tag: "L3LITLP96QG",
   code: "5283",
   title: "Eng Class Q41",
   learner_question: "\r\n1. It helps the reader imagine the story. \r\n2. It helps the rhyme of the story \r\n3. It fixes errors in the story",
    question: "How does strong imagery help a piece of writing? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Strong imagery helps readers imagine exactly what the writer means.",
    incorrectAnswerResponse: "Incorrect. Strong imagery helps readers imagine exactly what the writer means.",
    set: 41
    },

  5284:{
    question_tag: "L3LITLP96Q1",
   code: "5284",
   title: "Eng Q81",
   learner_question: "The __ of the poem is the importance of family. \r\n1. title \r\n2. theme \r\n3. rhythm",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The theme of the poem is the importance of family.",
    incorrectAnswerResponse: "Incorrect. The theme of the poem is the importance of family.",
    set: 41
    },

  5285:{
    question_tag: "L3LITLP96Q2",
   code: "5285",
   title: "Eng Q82",
   learner_question: "The words bet and pet ___. \r\n1. rhythm \r\n2. rhyme \r\n3. imagery",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The word bet and pet rhyme.",
    incorrectAnswerResponse: "Incorrect. The word bet and pet rhyme.",
    set: 41
    },

  5286:{
    question_tag: "L3LITLP97QG",
   code: "5286",
   title: "Eng Class Q42",
   learner_question: "\r\n1. A poem \r\n2. Poetry \r\n3. A poet",
    question: "Who was Bai T. Moore? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Bai T. Moore was a famous Liberian poet.",
    incorrectAnswerResponse: "Incorrect. Bai T. Moore was a famous Liberian poet.",
    set: 42
    },

  5287:{
    question_tag: "L3LITLP97Q1",
   code: "5287",
   title: "Eng Q83",
   learner_question: "Which sentence is a metaphor? \r\n1. Flomo\'s eyes are fires. \r\n2. Flomo\'s eyes are opened wide. \r\n3. Flomo is angry and his eyes show it.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) \'Flomo\'s eyes are fires,\' is a metaphor.",
    incorrectAnswerResponse: "Incorrect. \'Flomo\'s eyes are fires,\' is a metaphor.",
    set: 42
    },

  5288:{
    question_tag: "L3LITLP97Q2",
   code: "5288",
   title: "Eng Q84",
   learner_question: "Which word is an adjective in the sentence? I saw a happy girl running. \r\n1. I \r\n2. happy \r\n3. running",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) \'Happy\' is an adjective describing the girl.",
    incorrectAnswerResponse: "Incorrect. \'Happy\' is an adjective describing the girl.",
    set: 42
    },

  5289:{
    question_tag: "L3LITLP98QG",
   code: "5289",
   title: "Eng Class Q43",
   learner_question: "\r\n1. Telling a friend what happened in a movie. \r\n2. Writing an essay about Elephants. \r\n3. A newspaper reporting what the president said.",
    question: "Which is NOT summarizing? Enter the number of the example that is NOT summarizing.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Summarizing means saying something again in a shorter way. An essay is a new piece of writing.",
    incorrectAnswerResponse: "Incorrect. Summarizing means saying something again in a shorter way. An essay is a new piece of writing.",
    set: 43
    },

  5290:{
    question_tag: "L3LITLP98Q1",
   code: "5290",
   title: "Eng Q85",
   learner_question: "All poets are __ as well. \r\n1. poems \r\n2. Great works \r\n3. authors",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) All poets are authors as well.",
    incorrectAnswerResponse: "Incorrect. All poets are authors as well.",
    set: 43
    },

  5291:{
    question_tag: "L3LITLP98Q2",
   code: "5291",
   title: "Eng Q86",
   learner_question: "Which is NOT literature? \r\n1. A newspaper article \r\n2. A poem \r\n3. A short story",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Newspaper articles are not usually considered literature.",
    incorrectAnswerResponse: "Incorrect. Newspaper articles are not usually considered literature.",
    set: 43
    },

  5292:{
    question_tag: "L3LITLP99QG",
   code: "5292",
   title: "Eng Class Q44",
   learner_question: "\r\n1. The boy looked like a mouse. \r\n2. I could smell smoke in the air. \r\n3. Monrovia is the capital of Liberia.",
    question: "Which is NOT an example of imagery?",
    answer: "3",
    correctAnswerResponse: "Correct! :) The capital of Liberia is a fact. It does not help us see or feel anything.",
    incorrectAnswerResponse: "Incorrect. The capital of Liberia is a fact. It does not help us see or feel anything.",
    set: 44
    },

  5293:{
    question_tag: "L3LITLP99Q1",
   code: "5293",
   title: "Eng Q87",
   learner_question: "We __ eating when we saw him. \r\n1. was \r\n2. is \r\n3. were",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) We were eating when we saw him.",
    incorrectAnswerResponse: "Incorrect. We were eating when we saw him.",
    set: 44
    },

  5294:{
    question_tag: "L3LITLP99Q2",
   code: "5294",
   title: "Eng Q88",
   learner_question: "She was ___ when I came home. \r\n1. sleep \r\n2. sleeping \r\n3. slept",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) She was sleeping when I came home.",
    incorrectAnswerResponse: "Incorrect. She was sleeping when I came home.",
    set: 44
    },

  5295:{
    question_tag: "L3LITLP100QG",
   code: "5295",
   title: "Eng Class Q45",
   learner_question: "\r\n1. Ellen Johnson Sirleaf \r\n2. Lemah Gbowee \r\n3. Bai T. Moore",
    question: "Who wrote the speech we read today? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) We read Lemah Gbowee\'s Nobel Prize acceptance speech today.",
    incorrectAnswerResponse: "Incorrect. We read Lemah Gbowee\'s Nobel Prize acceptance speech today.",
    set: 45
    },

  5296:{
    question_tag: "L3LITLP100Q1",
   code: "5296",
   title: "Eng Q89",
   learner_question: "I ___ looking at the painting when she saw me. \r\n1. was \r\n2. were \r\n3. am",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I was looking at the painting in a book.",
    incorrectAnswerResponse: "Incorrect. I was looking at the painting in a book.",
    set: 45
    },

  5297:{
    question_tag: "L3LITLP100Q2",
   code: "5297",
   title: "Eng Q90",
   learner_question: "It ___ sitting on the table when I came home. \r\n1. was \r\n2. were \r\n3. is",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) It was sitting on the table when I came home.",
    incorrectAnswerResponse: "Incorrect. It was sitting on the table when I came home.",
    set: 45
    },

  5298:{
    question_tag: "L3LITLP101QG",
   code: "5298",
   title: "Eng Class Q46",
   learner_question: "\r\n1. All works of literature are masterpieces. \r\n2. Lyrics are set to music. \r\n3. A speech is a form of literature.",
    question: "Which sentence is NOT true? Enter the number of the incorrect sentence.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Not all works of literature are masterpieces. Only great works are masterpieces.",
    incorrectAnswerResponse: "Incorrect. Not all works of literature are masterpieces. Only great works are masterpieces.",
    set: 46
    },

  5299:{
    question_tag: "L3LITLP101Q1",
   code: "5299",
   title: "Eng Q91",
   learner_question: "What kind of sentence is \"The man smiled as he danced.\" \r\n1. metaphor \r\n2. imagery \r\n3. summary",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Good imagery allows us to imagine what the author is talking about.",
    incorrectAnswerResponse: "Incorrect. Good imagery allows us to imagine what the author is talking about.",
    set: 46
    },

  5300:{
    question_tag: "L3LITLP101Q2",
   code: "5300",
   title: "Eng Q92",
   learner_question: "Dan and Sara ___ walking when I saw them. \r\n1. was \r\n2. were \r\n3. are",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Dan and Sara were walking when I saw them.",
    incorrectAnswerResponse: "Incorrect. Dan and Sara were walking when I saw them.",
    set: 46
    },

  5301:{
    question_tag: "L3LITLP102QG",
   code: "5301",
   title: "Eng Class Q47",
   learner_question: "\r\n1. Ellen Johnson Sirleaf \r\n2. Lemah Gbowee \r\n3. Martin Luther King Jr.",
    question: "Who wrote the speech we read today? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) We read Martin Luther King Jr\'s \'I Have Dream\' speech.",
    incorrectAnswerResponse: "Incorrect. We read Martin Luther King Jr\'s \'I Have Dream\' speech.",
    set: 47
    },

  5302:{
    question_tag: "L3LITLP102Q1",
   code: "5302",
   title: "Eng Q93",
   learner_question: "Which sentence is a metaphor? \r\n1. Liberia is our mother. \r\n2. Liberia is a beautiful country. \r\n3. The people of Liberia are proud.",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Calling Liberia \'mother\' is a metaphor.",
    incorrectAnswerResponse: "Incorrect. Calling Liberia \'mother\' is a metaphor.",
    set: 47
    },

  5303:{
    question_tag: "L3LITLP102Q2",
   code: "5303",
   title: "Eng Q94",
   learner_question: "Which is NOT considered literature? \r\n1. Poems \r\n2. Speeches \r\n3. News articles",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Newspaper articles are not usually considered literature.",
    incorrectAnswerResponse: "Incorrect. Newspaper articles are not usually considered literature.",
    set: 47
    },

  5304:{
    question_tag: "L3LITLP103QG",
   code: "5304",
   title: "Eng Class Q48",
   learner_question: "\r\n1. Edit \r\n2. Write \r\n3. Plan",
    question: "What does it mean to \'draft\' a piece of writing? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Drafting is the second step in the writing process. When we draft, we write a first copy of something.",
    incorrectAnswerResponse: "Incorrect. Drafting is the second step in the writing process. When we draft, we write a first copy of something.",
    set: 48
    },

  5305:{
    question_tag: "L3LITLP103Q1",
   code: "5305",
   title: "Eng Q95",
   learner_question: "Which sentence is emotional? \r\n1. Liberia is a country in West Africa. \r\n2. Liberia needs our love. \r\n3. Liberia is a democracy.",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Emotional sentences play to our feelings.",
    incorrectAnswerResponse: "Incorrect. Emotional sentences play to our feelings.",
    set: 48
    },

  5306:{
    question_tag: "L3LITLP103Q2",
   code: "5306",
   title: "Eng Q96",
   learner_question: "The two cats __ eating when I saw them. \r\n1. are \r\n2. were \r\n3. was",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The two cats were eating when I saw them.",
    incorrectAnswerResponse: "Incorrect. The two cats were eating when I saw them.",
    set: 48
    },

  5307:{
    question_tag: "L3LITLP104QG",
   code: "5307",
   title: "Eng Class Q49",
   learner_question: "\r\n1. Make changes \r\n2. Write \r\n3. Plan",
    question: "What does it mean to \'revise\' a piece of writing? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) When we revise our writing, we make changes to improve it.",
    incorrectAnswerResponse: "Incorrect. When we revise our writing, we make changes to improve it.",
    set: 49
    },

  5308:{
    question_tag: "L3LITLP104Q1",
   code: "5308",
   title: "Eng Q97",
   learner_question: "Which is NOT a part of your \'voice\'. \r\n1. Your opinions \r\n2. Your creativity \r\n3. Your wealth",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Your voice is your thoughts and creativity.",
    incorrectAnswerResponse: "Incorrect. Your voice is your thoughts and creativity.",
    set: 49
    },

  5309:{
    question_tag: "L3LITLP104Q2",
   code: "5309",
   title: "Eng Q98",
   learner_question: "Which word is an adjective? \r\n1. slow \r\n2. slowly \r\n3. Slowing",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Slow is an adjective. The turtle is slow.",
    incorrectAnswerResponse: "Incorrect. Slow is an adjective. The turtle is slow.",
    set: 49
    },

  5310:{
    question_tag: "L3LITLP105QG",
   code: "5310",
   title: "Eng Class Q50",
   learner_question: "\r\n1. Thabo Mbeki \r\n2. Lemah Gbowee \r\n3. Martin Luther King Jr.",
    question: "Who wrote the speech we read today? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) We read Thabo Mbeki\'s \'I am African\' speech.",
    incorrectAnswerResponse: "Incorrect. We read Thabo Mbeki\'s \'I am African\' speech.",
    set: 50
    },

  5311:{
    question_tag: "L3LITLP105Q1",
   code: "5311",
   title: "Eng Q99",
   learner_question: "Which sentence has a subject verb agreement error? \r\n1. She is hapy. \r\n2. they go to school \r\n3. Flomo are happy.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) In the sentence, \"Flomo are happy.\" the verb \'are\' does not agree with the subject \'Flomo\'. Flomo is happy.",
    incorrectAnswerResponse: "Incorrect. In the sentence, \"Flomo are happy.\" the verb \'are\' does not agree with the subject \'Flomo\'. Flomo is happy.",
    set: 50
    },

  5312:{
    question_tag: "L3LITLP105Q2",
   code: "5312",
   title: "Eng Q100",
   learner_question: "What is the 4th step in the writing process? \r\n1. Planning \r\n2. Drafting \r\n3. Editing",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Editing is the 4th step in the writing process. Editing means looking for errors in our work.",
    incorrectAnswerResponse: "Incorrect. Editing is the 4th step in the writing process. Editing means looking for errors in our work.",
    set: 50
    },

  5313:{
    question_tag: "L3LITLP106QG",
   code: "5313",
   title: "Eng Class Q51",
   learner_question: "\r\n1. Poetry \r\n2. Speeches \r\n3. Short stories",
    question: "What type of literature did we read today? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) We read poetry in class.",
    incorrectAnswerResponse: "Incorrect. We read poetry in class.",
    set: 51
    },

  5314:{
    question_tag: "L3LITLP106Q1",
   code: "5314",
   title: "Eng Q101",
   learner_question: "You can have cake ___ pie. \r\n1. but \r\n2. so \r\n3. or",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) You can have cake or pie.",
    incorrectAnswerResponse: "Incorrect. You can have cake or pie.",
    set: 51
    },

  5315:{
    question_tag: "L3LITLP106Q2",
   code: "5315",
   title: "Eng Q102",
   learner_question: "I like Jane ___ I do not like Mike. \r\n1. or \r\n2. but \r\n3. so",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) I like jane but I do not like Mike.",
    incorrectAnswerResponse: "Incorrect. I like jane but I do not like Mike.",
    set: 51
    },

  5316:{
    question_tag: "L3LITLP107QG",
   code: "5316",
   title: "Eng Class Q52",
   learner_question: "\r\n1. Imagery \r\n2. Theme \r\n3. Metaphor",
    question: "Which word is most similar to the word \'topic\'? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A theme is like a topic- it is the main idea of the author.",
    incorrectAnswerResponse: "Incorrect. A theme is like a topic- it is the main idea of the author.",
    set: 52
    },

  5317:{
    question_tag: "L3LITLP107Q1",
   code: "5317",
   title: "Eng Q103",
   learner_question: "Jake ___ writing when he fell asleep. \r\n1. was \r\n2. were \r\n3. is",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Jake was writing when he fell asleep.",
    incorrectAnswerResponse: "Incorrect. Jake was writing when he fell asleep.",
    set: 52
    },

  5318:{
    question_tag: "L3LITLP107Q2",
   code: "5318",
   title: "Eng Q104",
   learner_question: "Which ending makes the sentence a metaphor: Jane is \r\n1. very upset. \r\n2. holding red flowers. \r\n3. a flower.",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Jane is a flower. Metaphors compare unlike things.",
    incorrectAnswerResponse: "Incorrect. Jane is a flower. Metaphors compare unlike things.",
    set: 52
    },

  5319:{
    question_tag: "L3LITLP108QG",
   code: "5319",
   title: "Eng Class Q53",
   learner_question: "\r\n1. Poetry \r\n2. Novels \r\n3. Speeches",
    question: "Which is a literary form we did NOT study in this module? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Novels are long fiction stories. We did not read novels in this module.",
    incorrectAnswerResponse: "Incorrect. Novels are long fiction stories. We did not read novels in this module.",
    set: 53
    },

  5320:{
    question_tag: "L3LITLP108Q1",
   code: "5320",
   title: "Eng Q105",
   learner_question: "What is the difference between lyrics and a poem? \r\n1. Lyrics use imagery, poems do not. \r\n2. Poems need good grammar. \r\n3. Lyrics are set to music",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Lyrics are set to music, poems are not.",
    incorrectAnswerResponse: "Incorrect. Lyrics are set to music, poems are not.",
    set: 53
    },

  5321:{
    question_tag: "L3LITLP108Q2",
   code: "5321",
   title: "Eng Q106",
   learner_question: "I __ sleeping when they came home. \r\n1. was \r\n2. were \r\n3. am",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) I was sleeping when they came home.",
    incorrectAnswerResponse: "Incorrect. I was sleeping when they came home.",
    set: 53
    },

    6169:{
    question_tag: "L3MALP57QG",
   code: "6169",
   title: "Math Class Q1",
   learner_question: "\r\n1. inches \r\n2. feet \r\n3. miles",
    question: "You want to measure the size of a book. Which is a good unit of measure?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Inches is a good unit for measuring a book. Feet and miles are too big.",
    incorrectAnswerResponse: "Incorrect. Inches is a good unit for measuring a book. Feet and miles are too big.",
    set: 1
    },

  6170:{
    question_tag: "L3MALP57Q1",
   code: "6170",
   title: "Math Q1",
   learner_question: "12 inches ? 1 foot \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 12 inches = 1 foot",
    incorrectAnswerResponse: "Incorrect. 12 inches = 1 foot",
    set: 1
    },

  6171:{
    question_tag: "L3MALP57Q2",
   code: "6171",
   title: "Math Q2",
   learner_question: "30 inches ? 3 feet \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3 feet = 36 inches. 30 in < 3 ft",
    incorrectAnswerResponse: "Incorrect. 3 feet = 36 inches. 30 in < 3 ft",
    set: 1
    },

  6172:{
    question_tag: "L3MALP58QG",
   code: "6172",
   title: "Math Class Q2",
   learner_question: "\r\n1. Meters \r\n2. Centimeters \r\n3. Kilometers",
    question: "You want to measure the distance to Monrovia. Which is a good unit of measure?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Kilometers is a good unit to measure distances between cities.",
    incorrectAnswerResponse: "Incorrect. Kilometers is a good unit to measure distances between cities.",
    set: 2
    },

  6173:{
    question_tag: "L3MALP58Q1",
   code: "6173",
   title: "Math Q3",
   learner_question: "150cm ? 1m \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 100cm = 1m. 150cm > 1m",
    incorrectAnswerResponse: "Incorrect. 100cm = 1m. 150cm > 1m",
    set: 2
    },

  6174:{
    question_tag: "L3MALP58Q2",
   code: "6174",
   title: "Math Q4",
   learner_question: "5 yards ? 12 feet \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 5 yards = 15 feet. 5 yards > 12 feet",
    incorrectAnswerResponse: "Incorrect. 5 yards = 15 feet. 5 yards > 12 feet",
    set: 2
    },

  6175:{
    question_tag: "L3MALP59QG",
   code: "6175",
   title: "Math Class Q3",
   learner_question: "\r\n1. meters \r\n2. Centimeters \r\n3. millimeters",
    question: "You want to measure the length of a small ant. Which is a good unit of measure?",
    answer: "3",
    correctAnswerResponse: "Correct! :) Millimeters is a good unit to measure very small things.",
    incorrectAnswerResponse: "Incorrect. Millimeters is a good unit to measure very small things.",
    set: 3
    },

  6176:{
    question_tag: "L3MALP59Q1",
   code: "6176",
   title: "Math Q5",
   learner_question: "25 feet = ? \r\n1. 8 yards 1 foot \r\n2. 3 yards 4 feet \r\n3. 5 yards",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 25/3 = 8 r 1 = 8 yards 1 foot.",
    incorrectAnswerResponse: "Incorrect. 25/3 = 8 r 1 = 8 yards 1 foot.",
    set: 3
    },

  6177:{
    question_tag: "L3MALP59Q2",
   code: "6177",
   title: "Math Q6",
   learner_question: "400 meters ? 4km \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1000m = 1 km. 400m < 4km",
    incorrectAnswerResponse: "Incorrect. 1000m = 1 km. 400m < 4km",
    set: 3
    },

  6178:{
    question_tag: "L3MALP60QG",
   code: "6178",
   title: "Math Class Q4",
   learner_question: "\r\n1. 10 inches \r\n2. 1 foot \r\n3. 1 foot 6 inches ",
    question: "Sonie has 4 feet of fabric. She cuts 30 inches from the fabric. How much does she have now? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 4 feet = 48 inches. 48- 30= 18 inches= 1 foot 6 inches",
    incorrectAnswerResponse: "Incorrect. 4 feet = 48 inches. 48- 30= 18 inches= 1 foot 6 inches",
    set: 4
    },

  6179:{
    question_tag: "L3MALP60Q1",
   code: "6179",
   title: "Math Q7",
   learner_question: "2 ft - 13 inches = ? \r\n1. 1 foot 1 inch \r\n2. 11 inches \r\n3. 13 inches",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2ft=24 inches. 24-13=11 inches",
    incorrectAnswerResponse: "Incorrect. 2ft=24 inches. 24-13=11 inches",
    set: 4
    },

  6180:{
    question_tag: "L3MALP60Q2",
   code: "6180",
   title: "Math Q8",
   learner_question: "3yd 2ft 3 in =? \r\n1. 18 in \r\n2. 63 in \r\n3. 135 in",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 3yd = 108in. 2ft= 24 in. 108+24+3= 135",
    incorrectAnswerResponse: "Incorrect. 3yd = 108in. 2ft= 24 in. 108+24+3= 135",
    set: 4
    },

  6181:{
    question_tag: "L3MALP61QG",
   code: "6181",
   title: "Math Class Q5",
   learner_question: "\r\n1. gallon, quart, cup, pint \r\n2. cup, pint, quart, gallon \r\n3. pint, cup, gallon, quart",
    question: "Which list is arranged from smallest to biggest? Enter the number of the list ordered smallest to biggest.",
    answer: "2",
    correctAnswerResponse: "Correct! :) cup < pint < quart < gallon",
    incorrectAnswerResponse: "Incorrect. cup < pint < quart < gallon",
    set: 5
    },

  6182:{
    question_tag: "L3MALP61Q1",
   code: "6182",
   title: "Math Q9",
   learner_question: "7 Quarts ? 2 gallons \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 gallons = 8 quarts. 7 quarts < 2 gallons",
    incorrectAnswerResponse: "Incorrect. 2 gallons = 8 quarts. 7 quarts < 2 gallons",
    set: 5
    },

  6183:{
    question_tag: "L3MALP61Q2",
   code: "6183",
   title: "Math Q10",
   learner_question: "32 cups ? 2 gallons \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1 gallon = 16 cups. 2 gallons = 32 cups",
    incorrectAnswerResponse: "Incorrect. 1 gallon = 16 cups. 2 gallons = 32 cups",
    set: 5
    },

  6184:{
    question_tag: "L3MALP62QG",
   code: "6184",
   title: "Math Class Q6",
   learner_question: "\r\n1. gallons \r\n2. liters \r\n3. meters",
    question: "What is the metric unit for measuring volume? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Volume is measured in liters in the metric system.",
    incorrectAnswerResponse: "Incorrect. Volume is measured in liters in the metric system.",
    set: 6
    },

  6185:{
    question_tag: "L3MALP62Q1",
   code: "6185",
   title: "Math Q11",
   learner_question: "50cl ? 500ml \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2cl = 10ml. 50cl = 500ml",
    incorrectAnswerResponse: "Incorrect. 2cl = 10ml. 50cl = 500ml",
    set: 6
    },

  6186:{
    question_tag: "L3MALP62Q2",
   code: "6186",
   title: "Math Q12",
   learner_question: "How many 25cl glasses can be filled by 2 liters of juice? \r\n1. 12 \r\n2. 8 \r\n3. 80 ",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2l=200cl. 200/25=8",
    incorrectAnswerResponse: "Incorrect. 2l=200cl. 200/25=8",
    set: 6
    },

  6187:{
    question_tag: "L3MALP63QG",
   code: "6187",
   title: "Math Class Q7",
   learner_question: "\r\n1. liters \r\n2. meters \r\n3. grams",
    question: "What is the metric unit for measuring weight? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Weight is measured in grams in the metric system.",
    incorrectAnswerResponse: "Incorrect. Weight is measured in grams in the metric system.",
    set: 7
    },

  6188:{
    question_tag: "L3MALP63Q1",
   code: "6188",
   title: "Math Q13",
   learner_question: "1kg ? I pound \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1kg = 2.2lbs. 1kg > 1lbs",
    incorrectAnswerResponse: "Incorrect. 1kg = 2.2lbs. 1kg > 1lbs",
    set: 7
    },

  6189:{
    question_tag: "L3MALP63Q2",
   code: "6189",
   title: "Math Q14",
   learner_question: "5000mg ? 50kg \r\n1. < \r\n2. > \r\n3.=",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 5000mg= 5kg. 5000mg < 50kg",
    incorrectAnswerResponse: "Incorrect. 5000mg= 5kg. 5000mg < 50kg",
    set: 7
    },

  6190:{
    question_tag: "L3MALP64QG",
   code: "6190",
   title: "Math Class Q8",
   learner_question: "\r\n1. 11lbs \r\n2. 10 lbs \r\n3. 9lbs",
    question: "Jane has 5 kg of rice. About how much is that in pounds? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1kg = 2.2lbs. 5kg > 11lbs",
    incorrectAnswerResponse: "Incorrect. 1kg = 2.2lbs. 5kg > 11lbs",
    set: 8
    },

  6191:{
    question_tag: "L3MALP64Q1",
   code: "6191",
   title: "Math Q15",
   learner_question: "3000 lbs ? 2 tons \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2 tons = 4000 lbs. 3000 lbs < 2 tons",
    incorrectAnswerResponse: "Incorrect. 2 tons = 4000 lbs. 3000 lbs < 2 tons",
    set: 8
    },

  6192:{
    question_tag: "L3MALP64Q2",
   code: "6192",
   title: "Math Q16",
   learner_question: "2000mg ? 4 lbs \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2000mg=2kg. 2kg=4.4lbs. 2000mg > 4lbs.",
    incorrectAnswerResponse: "Incorrect. 2000mg=2kg. 2kg=4.4lbs. 2000mg > 4lbs.",
    set: 8
    },

  6193:{
    question_tag: "L3MALP65QG",
   code: "6193",
   title: "Math Class Q9",
   learner_question: "\r\n1. 175cm \r\n2. 175 in \r\n3. 175 feet",
    question: "Which is a normal height for a man? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 175cm is a normal height for man.",
    incorrectAnswerResponse: "Incorrect. 175cm is a normal height for man.",
    set: 9
    },

  6194:{
    question_tag: "L3MALP65Q1",
   code: "6194",
   title: "Math Q17",
   learner_question: "1cm ? 1 in \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1in = 2.54 cm. 1cm<1in",
    incorrectAnswerResponse: "Incorrect. 1in = 2.54 cm. 1cm<1in",
    set: 9
    },

  6195:{
    question_tag: "L3MALP65Q2",
   code: "6195",
   title: "Math Q18",
   learner_question: "4 miles ? 5km \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 4 miles = 6.44 km. 4mi > 5km",
    incorrectAnswerResponse: "Incorrect. 4 miles = 6.44 km. 4mi > 5km",
    set: 9
    },

  6196:{
    question_tag: "L3MALP66QG",
   code: "6196",
   title: "Math Class Q10",
   learner_question: "\r\n1. 65mg \r\n2. 65lbs \r\n3. 65kg",
    question: "Which is a normal weight for a man? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 65 kg is a normal weight for a man.",
    incorrectAnswerResponse: "Incorrect. 65 kg is a normal weight for a man.",
    set: 10
    },

  6197:{
    question_tag: "L3MALP66Q1",
   code: "6197",
   title: "Math Q19",
   learner_question: "450mg ? 1lb \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1lb=.45kg=450mg",
    incorrectAnswerResponse: "Incorrect. 1lb=.45kg=450mg",
    set: 10
    },

  6198:{
    question_tag: "L3MALP66Q2",
   code: "6198",
   title: "Math Q20",
   learner_question: "1000kg ? 1 ton \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 ton = 2000lbs. 1000kg =2,200lbs. 1000kg>1 ton",
    incorrectAnswerResponse: "Incorrect. 1 ton = 2000lbs. 1000kg =2,200lbs. 1000kg>1 ton",
    set: 10
    },

  6199:{
    question_tag: "L3MALP67QG",
   code: "6199",
   title: "Math Class Q11",
   learner_question: "\r\n1. 100lbs \r\n2. 110lbs \r\n3. 120lbs",
    question: "About how much is 50kg in pounds? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 50 x 2.2 =110",
    incorrectAnswerResponse: "Incorrect. 50 x 2.2 =110",
    set: 11
    },

  6200:{
    question_tag: "L3MALP67Q1",
   code: "6200",
   title: "Math Q21",
   learner_question: "Your car takes 19 gallons of petrol. About how many liters is that? \r\n1. 5 liters \r\n2. 72 liters \r\n3. 122 liters",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1 gallon = 3.79 liters. 19 x 3.79= 72.01",
    incorrectAnswerResponse: "Incorrect. 1 gallon = 3.79 liters. 19 x 3.79= 72.01",
    set: 11
    },

  6201:{
    question_tag: "L3MALP67Q2",
   code: "6201",
   title: "Math Q22",
   learner_question: "100 feet = ? meters \r\n1. 30m \r\n2. 15m \r\n2. 10m ",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1ft=.30m. 100 x .3= 30m",
    incorrectAnswerResponse: "Incorrect. 1ft=.30m. 100 x .3= 30m",
    set: 11
    },

  6202:{
    question_tag: "L3MALP68QG",
   code: "6202",
   title: "Math Class Q12",
   learner_question: "\r\n1. 12 seconds \r\n2. 60 seconds \r\n3. 360 seconds.",
    question: "How many seconds are there in 1 hour. Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) There are 60 seconds in 1 minute and 60 minutes in 1 hour. 60 x 60= 360",
    incorrectAnswerResponse: "Incorrect. There are 60 seconds in 1 minute and 60 minutes in 1 hour. 60 x 60= 360",
    set: 12
    },

  6203:{
    question_tag: "L3MALP68Q1",
   code: "6203",
   title: "Math Q23",
   learner_question: "Which time is \"half past seven\"? \r\n1. 6:30 \r\n2. 7:30 \r\n3. 7:50",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Half past = 30. Half past 7 = 7:30.",
    incorrectAnswerResponse: "Incorrect. Half past = 30. Half past 7 = 7:30.",
    set: 12
    },

  6204:{
    question_tag: "L3MALP68Q2",
   code: "6204",
   title: "Math Q24",
   learner_question: "Which is midnight? \r\n1. 12:00am \r\n2. 12:00pm \r\n3. 9:30pm",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Midnight = 12:00am",
    incorrectAnswerResponse: "Incorrect. Midnight = 12:00am",
    set: 12
    },

  6205:{
    question_tag: "L3MALP69QG",
   code: "6205",
   title: "Math Class Q13",
   learner_question: "\r\n1. 15 minutes \r\n2. 35 minutes \r\n3. 1 hour 25 minutes",
    question: "If you start writing at 4:45 and finish at 5:20, how long did you write? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 5:20 - 4:45 = 35 minutes",
    incorrectAnswerResponse: "Incorrect. 5:20 - 4:45 = 35 minutes",
    set: 13
    },

  6206:{
    question_tag: "L3MALP69Q1",
   code: "6206",
   title: "Math Q25",
   learner_question: "Jane gets on a bus at 5:30. She rides for 2 hours and 10 minutes. What time does she get off the bus? \r\n1. 3:20 \r\n2. 5:42 \r\n3. 7:40",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5:30 + 2hrs 10m = 7:40",
    incorrectAnswerResponse: "Incorrect. 5:30 + 2hrs 10m = 7:40",
    set: 13
    },

  6207:{
    question_tag: "L3MALP69Q2",
   code: "6207",
   title: "Math Q26",
   learner_question: "How many minutes are there in 5 hours? \r\n1. 500 \r\n3. 300 \r\n3. 60",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 5hrs x 60minutes = 300 minutes",
    incorrectAnswerResponse: "Incorrect. 5hrs x 60minutes = 300 minutes",
    set: 13
    },

  6208:{
    question_tag: "L3MALP70QG",
   code: "6208",
   title: "Math Class Q14 ",
   learner_question: "\r\n1. Monthly calendar \r\n2. Daily planner \r\n3. Time sheet",
    question: "Which would a worker use to show what time she started and finished work? Enter the number of the correct answer. ",
    answer: "3",
    correctAnswerResponse: "Correct! :) Time sheets show when people start and stop working.",
    incorrectAnswerResponse: "Incorrect. Time sheets show when people start and stop working.",
    set: 14
    },

  6209:{
    question_tag: "L3MALP70Q1",
   code: "6209",
   title: "Math Q27",
   learner_question: "20 days ? 3 weeks \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3 weeks = 21 days. 20 days < 3 weeks",
    incorrectAnswerResponse: "Incorrect. 3 weeks = 21 days. 20 days < 3 weeks",
    set: 14
    },

  6210:{
    question_tag: "L3MALP70Q2",
   code: "6210",
   title: "Math Q28",
   learner_question: "Today is Tuesday, January 10. What will the date be next Tuesday? \r\n1. January 11 \r\n2. January 17 \r\n3. February 10",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) January 10 + 7 days (1 week)= January 17.",
    incorrectAnswerResponse: "Incorrect. January 10 + 7 days (1 week)= January 17.",
    set: 14
    },

  6211:{
    question_tag: "L3MALP71QG",
   code: "6211",
   title: "Math Class Q15",
   learner_question: "\r\n1. 3 hours \r\n2. 11 hours \r\n3. 9 hours",
    question: "James starts work at 7am. He finishes at 4 pm. How many hours did James work? Enter the number of the correct answer.",
    answer: "9",
    correctAnswerResponse: "Correct! :) 5 hours before noon + 4 hours after noon= 9 hours",
    incorrectAnswerResponse: "Incorrect. 5 hours before noon + 4 hours after noon= 9 hours",
    set: 15
    },

  6212:{
    question_tag: "L3MALP71Q1",
   code: "6212",
   title: "Math Q29",
   learner_question: "Sara worked from 8 in the morning until 2 in the afternoon. How many hours did she work? \r\n1. 6 hours \r\n2. 10 hours \r\n3. 16 hours",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 4 hours before noon + 2 hours after noon= 6 hours",
    incorrectAnswerResponse: "Incorrect. 4 hours before noon + 2 hours after noon= 6 hours",
    set: 15
    },

  6213:{
    question_tag: "L3MALP71Q2",
   code: "6213",
   title: "Math Q30",
   learner_question: "Today is June \r\n2. What will the date be in 2 weeks? \r\n1. June 4 \r\n2. August 2 \r\n3. June 16",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 2 weeks = 14 days. June 2 + 14= June 16",
    incorrectAnswerResponse: "Incorrect. 2 weeks = 14 days. June 2 + 14= June 16",
    set: 15
    },

  6214:{
    question_tag: "L3MALP72QG",
   code: "6214",
   title: "Math Class Q16",
   learner_question: "\r\n1. 5 lbs \r\n2. 3kg \r\n3. 350mg",
    question: "Which is the largest number? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3kg = 6.6 lbs. 3kg = 3000mg. 3kg >5lbs>350mg",
    incorrectAnswerResponse: "Incorrect. 3kg = 6.6 lbs. 3kg = 3000mg. 3kg >5lbs>350mg",
    set: 16
    },

  6215:{
    question_tag: "L3MALP72Q1",
   code: "6215",
   title: "Math Q31",
   learner_question: "35 in ? 1yd \r\n1. < \r\n2. > \r\n3. =",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3ft = 36 inches. 35in < 1yd",
    incorrectAnswerResponse: "Incorrect. 3ft = 36 inches. 35in < 1yd",
    set: 16
    },

  6216:{
    question_tag: "L3MALP72Q2",
   code: "6216",
   title: "Math Q32",
   learner_question: "Sonie worked from 12:00am to 12:00pm. How many hours did she work? \r\n1. 0 hours \r\n2. 24 hours \r\n3. 12 hours",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 12 hours",
    incorrectAnswerResponse: "Incorrect. 12 hours",
    set: 16
    },

  6217:{
    question_tag: "L3MALP73QG",
   code: "6217",
   title: "Math Class Q17",
   learner_question: "\r\n1. train tracks \r\n2. the letter X \r\n3. streets at an intersection",
    question: "Which is an example of parallel lines? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Like train tracks, parallel lines go in the same direction and do not cross.",
    incorrectAnswerResponse: "Incorrect. Like train tracks, parallel lines go in the same direction and do not cross.",
    set: 17
    },

  6218:{
    question_tag: "L3MALP73Q1",
   code: "6218",
   title: "Math Q33",
   learner_question: "A ___ has a beginning point but no end point. \r\n1. line \r\n2. Line segment \r\n3. ray",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A ray has a beginning point but no end point.",
    incorrectAnswerResponse: "Incorrect. A ray has a beginning point but no end point.",
    set: 17
    },

  6219:{
    question_tag: "L3MALP73Q2",
   code: "6219",
   title: "Math Q34",
   learner_question: "Which is an example of perpendicular lines? \r\n1. train tracks \r\n2. the letter A \r\n3. streets at an intersection",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Perpendicular lines cross each other at right angles like streets at an intersection.",
    incorrectAnswerResponse: "Incorrect. Perpendicular lines cross each other at right angles like streets at an intersection.",
    set: 17
    },

  6220:{
    question_tag: "L3MALP74QG",
   code: "6220",
   title: "Math Class Q18",
   learner_question: "\r\n1. An obtuse angle \r\n2. A right angle \r\n3. An acute angle",
    question: "What angle does a capital letter L show? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Capital L shows a right angle at 90 degrees.",
    incorrectAnswerResponse: "Incorrect. Capital L shows a right angle at 90 degrees.",
    set: 18
    },

  6221:{
    question_tag: "L3MALP74Q1",
   code: "6221",
   title: "Math Q35",
   learner_question: "Which angle is obtuse? \r\n1. 90 degrees \r\n2. 140 degrees \r\n3. 15 degrees",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Obtuse angles are larger than 90 degrees.",
    incorrectAnswerResponse: "Incorrect. Obtuse angles are larger than 90 degrees.",
    set: 18
    },

  6222:{
    question_tag: "L3MALP74Q2",
   code: "6222",
   title: "Math Q36",
   learner_question: "How many degrees is a straight angle? \r\n1. 0 degrees \r\n2. 90 degrees \r\n3. 180 degrees",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A straight angle is 180 degrees.",
    incorrectAnswerResponse: "Incorrect. A straight angle is 180 degrees.",
    set: 18
    },

  6223:{
    question_tag: "L3MALP75QG",
   code: "6223",
   title: "Math Class Q19",
   learner_question: "\r\n1. Acute \r\n3. Obtuse \r\n3. Right",
    question: "What angle does a capital letter V show? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Letter V is an acute angle of less than 90 degrees.",
    incorrectAnswerResponse: "Incorrect. Letter V is an acute angle of less than 90 degrees.",
    set: 19
    },

  6224:{
    question_tag: "L3MALP75Q1",
   code: "6224",
   title: "Math Q37",
   learner_question: "Capital letter T has 2 ___ angles. \r\n1. acute \r\n2. obtuse \r\n3. right",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Capital letter T has 2 right angles.",
    incorrectAnswerResponse: "Incorrect. Capital letter T has 2 right angles.",
    set: 19
    },

  6225:{
    question_tag: "L3MALP75Q2",
   code: "6225",
   title: "Math Q38",
   learner_question: "Which is an acute angle? \r\n1. 40 degrees \r\n2. 90 degrees \r\n3. 140 degrees",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 40 degrees is an acute angle.",
    incorrectAnswerResponse: "Incorrect. 40 degrees is an acute angle.",
    set: 19
    },

  6226:{
    question_tag: "L3MALP76QG",
   code: "6226",
   title: "Math Class Q20",
   learner_question: "\r\n1. 180 degrees \r\n2. 90 degrees \r\n3. 45 degrees",
    question: "At what angle do most walls and floors meet? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Most doors and walls meet at right angles of 90 degrees.",
    incorrectAnswerResponse: "Incorrect. Most doors and walls meet at right angles of 90 degrees.",
    set: 20
    },

  6227:{
    question_tag: "L3MALP76Q1",
   code: "6227",
   title: "Math Q39",
   learner_question: "Which angle looks like a straight line? \r\n1. 45 degrees \r\n2. 90 degrees \r\n3. 180 degrees",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A 180 degree angle is flat like a straight line.",
    incorrectAnswerResponse: "Incorrect. A 180 degree angle is flat like a straight line.",
    set: 20
    },

  6228:{
    question_tag: "L3MALP76Q2",
   code: "6228",
   title: "Math Q40",
   learner_question: "Which is an obtuse angle? \r\n1. 40 degrees \r\n2. 90 degrees \r\n3. 140 degrees",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 140 degrees is an obtuse angle.",
    incorrectAnswerResponse: "Incorrect. 140 degrees is an obtuse angle.",
    set: 20
    },

  6229:{
    question_tag: "L3MALP77QG",
   code: "6229",
   title: "Math Class Q21",
   learner_question: "\r\n1. Equilateral \r\n2. Isosceles \r\n3. Scalene",
    question: "What kind of triangle has 2 equal sides? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Isosceles triangles have 2 equal sides.",
    incorrectAnswerResponse: "Incorrect. Isosceles triangles have 2 equal sides.",
    set: 21
    },

  6230:{
    question_tag: "L3MALP77Q1",
   code: "6230",
   title: "Math Q41",
   learner_question: "An ___ triangle has 3 equal sides. \r\n1. Equilateral \r\n2. Isosceles \r\n3. Scalene",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) An equilateral triangle has 3 equal sides.",
    incorrectAnswerResponse: "Incorrect. An equilateral triangle has 3 equal sides.",
    set: 21
    },

  6231:{
    question_tag: "L3MALP77Q2",
   code: "6231",
   title: "Math Q42",
   learner_question: "An ___ triangle has one angle of more than 90 degrees. \r\n1. right \r\n2. obtuse \r\n3. acute",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Obtuse triangles have one angle of more than 90 degrees.",
    incorrectAnswerResponse: "Incorrect. Obtuse triangles have one angle of more than 90 degrees.",
    set: 21
    },

  6232:{
    question_tag: "L3MALP78QG",
   code: "6232",
   title: "Math Class Q22",
   learner_question: "\r\n1. Equilateral \r\n2. Isosceles \r\n3. Scalene",
    question: "Which CANNOT be a right triangle? Enter the number of the triangle that CANNOT be a right triangle.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Equilateral triangles cannot be right triangles. Right triangles cannot have more than 2 equal sides.",
    incorrectAnswerResponse: "Incorrect. Equilateral triangles cannot be right triangles. Right triangles cannot have more than 2 equal sides.",
    set: 22
    },

  6233:{
    question_tag: "L3MALP78Q1",
   code: "6233",
   title: "Math Q43",
   learner_question: "A triangle has angles of 90 and 30 degrees. What is the missing angle? \r\n1. 80 \r\n2. 60 \r\n3. 120",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 180-90-30= 60 degrees",
    incorrectAnswerResponse: "Incorrect. 180-90-30= 60 degrees",
    set: 22
    },

  6234:{
    question_tag: "L3MALP78Q2",
   code: "6234",
   title: "Math Q44",
   learner_question: "A triangle has angles of 45 and 100 degrees. What is the missing angle? \r\n1. 95 degrees. \r\n2. 45 degrees \r\n3. 35 degrees",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 180-100-45=35",
    incorrectAnswerResponse: "Incorrect. 180-100-45=35",
    set: 22
    },

  6235:{
    question_tag: "L3MALP79QG",
   code: "6235",
   title: "Math Class Q23",
   learner_question: "\r\n1. Equilateral \r\n2. Isosceles \r\n3. Scalene",
    question: "Which CANNOT be an obtuse triangle? Enter the number of the triangle that CANNOT be an obtuse triangle.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Equilateral triangles have 3 angles of 6 degrees. They cannot be obtuse.",
    incorrectAnswerResponse: "Incorrect. Equilateral triangles have 3 angles of 6 degrees. They cannot be obtuse.",
    set: 23
    },

  6236:{
    question_tag: "L3MALP79Q1",
   code: "6236",
   title: "Math Q45",
   learner_question: "Which angle can a triangle NOT include? \r\n1. Obtuse angle \r\n3. Acute angle \r\n3. Straight angle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A triangle cannot include a straight angle because a straight angle has only one side of 180 degrees.",
    incorrectAnswerResponse: "Incorrect. A triangle cannot include a straight angle because a straight angle has only one side of 180 degrees.",
    set: 23
    },

  6237:{
    question_tag: "L3MALP79Q2",
   code: "6237",
   title: "Math Q46",
   learner_question: "A triangle has 2 equal angles of 50 degrees. What is the missing angle? \r\n1. 130 degrees \r\n2. 80 degrees \r\n3. 30 degrees",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 180 - 50 - 50= 80",
    incorrectAnswerResponse: "Incorrect. 180 - 50 - 50= 80",
    set: 23
    },

  6238:{
    question_tag: "L3MALP80QG",
   code: "6238",
   title: "Math Class Q24",
   learner_question: "\r\n1. Triangle \r\n2. Square \r\n3. Circle",
    question: "Which is NOT a polygon? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Polygons have straight lines. Circles are not polygons.",
    incorrectAnswerResponse: "Incorrect. Polygons have straight lines. Circles are not polygons.",
    set: 24
    },

  6239:{
    question_tag: "L3MALP80Q1",
   code: "6239",
   title: "Math Q47",
   learner_question: "Which is a Regular Polygon? \r\n1. Equilateral triangle \r\n2. Isosceles triangle \r\n3. Scalene triangle",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Regular polygons have equal sides and angles like equilateral triangles.",
    incorrectAnswerResponse: "Incorrect. Regular polygons have equal sides and angles like equilateral triangles.",
    set: 24
    },

  6240:{
    question_tag: "L3MALP80Q2",
   code: "6240",
   title: "Math Q48",
   learner_question: "Which shape is an irregular polygon? \r\n1. Square \r\n2. Equilateral triangle \r\n3. Rectangle",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Irregular polygons have sides of different lengths. Rectangles are irregular polygons.",
    incorrectAnswerResponse: "Incorrect. Irregular polygons have sides of different lengths. Rectangles are irregular polygons.",
    set: 24
    },

  6241:{
    question_tag: "L3MALP81QG",
   code: "6241",
   title: "Math Class Q25",
   learner_question: "\r\n1. 5 \r\n2. 4 \r\n3. 3",
    question: "How many sides does a pentagon have?",
    answer: "1",
    correctAnswerResponse: "Correct! :) A pentagon has 5 sides.",
    incorrectAnswerResponse: "Incorrect. A pentagon has 5 sides.",
    set: 25
    },

  6242:{
    question_tag: "L3MALP81Q1",
   code: "6242",
   title: "Math Q49",
   learner_question: "Which shape is a quadrilateral? \r\n1. rhombus \r\n2. hexagon \r\n3. triangle",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Quadrilaterals have 4 sides. A rhombus is a quadrilateral.",
    incorrectAnswerResponse: "Incorrect. Quadrilaterals have 4 sides. A rhombus is a quadrilateral.",
    set: 25
    },

  6243:{
    question_tag: "L3MALP81Q2",
   code: "6243",
   title: "Math Q50",
   learner_question: "Which is NOT a parallelogram? \r\n1. Square \r\n2. Rhombus \r\n3. Trapezoid",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Trapezoids are quadrilaterals, but they are not parallelograms.",
    incorrectAnswerResponse: "Incorrect. Trapezoids are quadrilaterals, but they are not parallelograms.",
    set: 25
    },

  6244:{
    question_tag: "L3MALP82QG",
   code: "6244",
   title: "Math Class Q26",
   learner_question: "\r\n1. When all sides are equal. \r\n2. When 2 angles are different. \r\n3. When it has 4 sides.",
    question: "When is a polygon a rhombus but not a square? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) A square must have 4 equal angles. A rhombus only needs opposite angles to be equal.",
    incorrectAnswerResponse: "Incorrect. A square must have 4 equal angles. A rhombus only needs opposite angles to be equal.",
    set: 26
    },

  6245:{
    question_tag: "L3MALP82Q1",
   code: "6245",
   title: "Math Q51",
   learner_question: "What is the name for a shape with 10 sides? \r\n1. Octagon \r\n2. Pentagon \r\n3. Decagon",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A decagon has 10 sides. \"dec\' often means 10. A decade is 10 years.",
    incorrectAnswerResponse: "Incorrect. A decagon has 10 sides. \"dec\' often means 10. A decade is 10 years.",
    set: 26
    },

  6246:{
    question_tag: "L3MALP82Q2",
   code: "6246",
   title: "Math Q52",
   learner_question: "How many degrees is each angle of a regular pentagon? \r\n1. 60 \r\n2. 72 \r\n3. 108",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 540/5= 108",
    incorrectAnswerResponse: "Incorrect. 540/5= 108",
    set: 26
    },

  6247:{
    question_tag: "L3MALP83QG",
   code: "6247",
   title: "Math Class Q27",
   learner_question: "\r\n1. A football \r\n2. A shoe \r\n3. A flag",
    question: "Which onject has the shape of a polygon? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Polygons have straight lines. A flag is a polygon.",
    incorrectAnswerResponse: "Incorrect. Polygons have straight lines. A flag is a polygon.",
    set: 27
    },

  6248:{
    question_tag: "L3MALP83Q1",
   code: "6248",
   title: "Math Q53",
   learner_question: "All ___ are also rectangles. \r\n1. Quadrilaterals \r\n2. Squares \r\n3. Parallelograms",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) All squares are also rectangles. Not all rectangles are squares.",
    incorrectAnswerResponse: "Incorrect. All squares are also rectangles. Not all rectangles are squares.",
    set: 27
    },

  6249:{
    question_tag: "L3MALP83Q2",
   code: "6249",
   title: "Math Q54",
   learner_question: "Which is NOT true of all quadrilaterals? \r\n1. They have equal angles \r\n2. The have 4 sides \r\n3. Their angles equal 360 degrees",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Not all quadrilaterals have equal angles.",
    incorrectAnswerResponse: "Incorrect. Not all quadrilaterals have equal angles.",
    set: 27
    },

  6250:{
    question_tag: "L3MALP84QG",
   code: "6250",
   title: "Math Class Q28",
   learner_question: "\r\n1. 15 cm \r\n2. 20cm \r\n3. 25 cm",
    question: "An equilateral triangle has a side 5cm in length. What is its perimeter? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 5+5+5=15cm",
    incorrectAnswerResponse: "Incorrect. 5+5+5=15cm",
    set: 28
    },

  6251:{
    question_tag: "L3MALP84Q1",
   code: "6251",
   title: "Math Q55",
   learner_question: "A square has a side of 3 inches. What is the perimeter of the square? \r\n1. 9 in \r\n2. 6 in \r\n3. 3 in",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3x4= 12 inches",
    incorrectAnswerResponse: "Incorrect. 3x4= 12 inches",
    set: 28
    },

  6252:{
    question_tag: "L3MALP84Q2",
   code: "6252",
   title: "Math Q56",
   learner_question: "A rhombus has a perimeter of 16 inches. How long is each side? \r\n1. 32 in \r\n2. 4 in \r\n3. 8 in",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 16/4= 4 inches",
    incorrectAnswerResponse: "Incorrect. 16/4= 4 inches",
    set: 28
    },

  6253:{
    question_tag: "L3MALP85QG",
   code: "6253",
   title: "Math Class Q29",
   learner_question: "\r\n1. 12m \r\n2. 14m \r\n3. 7m",
    question: "Jane has a garden 3 meters wide and 4 meters long. She wants to make a fence around the garden. How many meters of fence will she need? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3+3+4+4= 14 meters",
    incorrectAnswerResponse: "Incorrect. 3+3+4+4= 14 meters",
    set: 29
    },

  6254:{
    question_tag: "L3MALP85Q1",
   code: "6254",
   title: "Math Q57",
   learner_question: "A square has a perimeter of 20 meters. How long is each side? Enter the answer as a number. \r\n1. 4m \r\n2. 5m \r\n3. 10m",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 20/4= 5 meters",
    incorrectAnswerResponse: "Incorrect. 20/4= 5 meters",
    set: 29
    },

  6255:{
    question_tag: "L3MALP85Q2",
   code: "6255",
   title: "Math Q58",
   learner_question: "An equilateral triangle has a perimeter of 36 cm. How long is each side? \r\n1. 12cm \r\n2. 6cm \r\n3. 4cm",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 36/3=12 cm",
    incorrectAnswerResponse: "Incorrect. 36/3=12 cm",
    set: 29
    },

  6256:{
    question_tag: "L3MALP86QG",
   code: "6256",
   title: "Math Class Q30",
   learner_question: "\r\n1. 12m \r\n2. 14m \r\n3. 7m",
    question: "A rectangle is 3 meters by 4 meters. What is the area of the rectangle? Enter the number of the best answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) 3 x 4=12m",
    incorrectAnswerResponse: "Incorrect. 3 x 4=12m",
    set: 30
    },

  6257:{
    question_tag: "L3MALP86Q1",
   code: "6257",
   title: "Math Q59",
   learner_question: "A triangle has a base of 3m and a height of 4m. What is the area of the triangle? \r\n1. 12m \r\n2. 7m \r\n3. 6m",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1/2(3x4)= 1/2(12)=6",
    incorrectAnswerResponse: "Incorrect. 1/2(3x4)= 1/2(12)=6",
    set: 30
    },

  6258:{
    question_tag: "L3MALP86Q2",
   code: "6258",
   title: "Math Q60",
   learner_question: "A square is 5 inches tall. What is the area? \r\n1. 10 in \r\n2. 15 in \r\n3. 25 in",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5x5=25",
    incorrectAnswerResponse: "Incorrect. 5x5=25",
    set: 30
    },

  6259:{
    question_tag: "L3MALP87QG",
   code: "6259",
   title: "Math Class Q31",
   learner_question: "\r\n1. 15m \r\n2. 30m \r\n3. 50m",
    question: "Jane\'s kitchen is 5 meters by 10 meters. If she wants to cover the floor in tile, how many square meters of tile does she need? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5x10=50 meters",
    incorrectAnswerResponse: "Incorrect. 5x10=50 meters",
    set: 31
    },

  6260:{
    question_tag: "L3MALP87Q1",
   code: "6260",
   title: "Math Q61",
   learner_question: "A triangle has a base of 4in and a height of 6in. What is the area of the triangle? \r\n1. 12m \r\n2. 24m \r\n3. 10m",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 1/2(6x4)= 1/2(24)=12",
    incorrectAnswerResponse: "Incorrect. 1/2(6x4)= 1/2(24)=12",
    set: 31
    },

  6261:{
    question_tag: "L3MALP87Q2",
   code: "6261",
   title: "Math Q62",
   learner_question: "A square is 10 inches wide. What is the area? \r\n1. 20 in \r\n2. 100 in \r\n3. 50 in",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 10x10=100",
    incorrectAnswerResponse: "Incorrect. 10x10=100",
    set: 31
    },

  6262:{
    question_tag: "L3MALP88QG",
   code: "6262",
   title: "Math Class Q32",
   learner_question: "\r\n1. Radius \r\n2. Circumference \r\n3. Diameter",
    question: "Which is always longer in a circle? Enter the number of the longest part of a circle.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Circumference > diameter > radius",
    incorrectAnswerResponse: "Incorrect. Circumference > diameter > radius",
    set: 32
    },

  6263:{
    question_tag: "L3MALP88Q1",
   code: "6263",
   title: "Math Q63",
   learner_question: "The ___ of a circle is 1/2 the diameter. \r\n1. area \r\n2. circumference \r\n3. radius",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The radius of a circle is 1/2 the circumference.",
    incorrectAnswerResponse: "Incorrect. The radius of a circle is 1/2 the circumference.",
    set: 32
    },

  6264:{
    question_tag: "L3MALP88Q2",
   code: "6264",
   title: "Math Q64",
   learner_question: "What is the diameter of a circle with a radius of 4 inches? \r\n1. 8 in \r\n2. 2 in \r\n3. 4 in",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The diameter of a circle is double the radius. 2x4=8.",
    incorrectAnswerResponse: "Incorrect. The diameter of a circle is double the radius. 2x4=8.",
    set: 32
    },

  6265:{
    question_tag: "L3MALP89QG",
   code: "6265",
   title: "Math Class Q33",
   learner_question: "\r\n1. \r\n3.14 feet \r\n2. 10 feet \r\n2. 20 feet",
    question: "What is a good estimate of the circumference of a circle with a diameter of 3 feet? Enter the number of the best guess.",
    answer: "2",
    correctAnswerResponse: "Correct! :) C= D x 3.14. 3x3.14 = 9.42 = ~10",
    incorrectAnswerResponse: "Incorrect. C= D x 3.14. 3x3.14 = 9.42 = ~10",
    set: 33
    },

  6266:{
    question_tag: "L3MALP89Q1",
   code: "6266",
   title: "Math Q65",
   learner_question: "The diameter of a circle is 10m. What is the radius? \r\n1. 10m \r\n2. 20m \r\n3. 5m",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 10/2 = 5",
    incorrectAnswerResponse: "Incorrect. 10/2 = 5",
    set: 33
    },

  6267:{
    question_tag: "L3MALP89Q2",
   code: "6267",
   title: "Math Q66",
   learner_question: "Which is a good estimate of the AREA of a circle with radius 4m? \r\n1. 12m \r\n2. 24m \r\n3. 50m",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 4x4x3.14= 50.24",
    incorrectAnswerResponse: "Incorrect. 4x4x3.14= 50.24",
    set: 33
    },

  6268:{
    question_tag: "L3MALP90QG",
   code: "6268",
   title: "Math Class Q34",
   learner_question: "\r\n1. All rectangles are polygons. \r\n2. All rectangles have 4 equal angles. \r\n3. All rectangles have 4 equal sides",
    question: "Which is NOT true of all rectangles? Enter the number of the correct answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Not all rectangles have 4 equal sides.",
    incorrectAnswerResponse: "Incorrect. Not all rectangles have 4 equal sides.",
    set: 34
    },

  6269:{
    question_tag: "L3MALP90Q1",
   code: "6269",
   title: "Math Q67",
   learner_question: "What is the AREA of a square with a height of 2m? \r\n1. 4m \r\n2. 8m \r\n3. 2m",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 2x2=4",
    incorrectAnswerResponse: "Incorrect. 2x2=4",
    set: 34
    },

  6270:{
    question_tag: "L3MALP90Q2",
   code: "6270",
   title: "Math Q68",
   learner_question: "A triangle has angles of 90 degrees and 50 degrees. What is the final angle? \r\n1. 140 degrees \r\n2. 40 degrees \r\n3. 30 degrees",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) All triangles have angles that total 180 degrees. 180-90-50= 40 degrees",
    incorrectAnswerResponse: "Incorrect. All triangles have angles that total 180 degrees. 180-90-50= 40 degrees",
    set: 34
    },

  6271:{
    question_tag: "L3MALP91QG",
   code: "6271",
   title: "Math Class Q35",
   learner_question: "\r\n1. Data \r\n2. Statistics \r\n3. Mean",
    question: "If we gather the name and age of everyone in the community, what can we call that information? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) Information we gather is also called data.",
    incorrectAnswerResponse: "Incorrect. Information we gather is also called data.",
    set: 35
    },

  6272:{
    question_tag: "L3MALP91Q1",
   code: "6272",
   title: "Math Q69",
   learner_question: "What is the mean average of 3, 4 and 5? \r\n1. \r\n3.5 \r\n2. 4 \r\n3. 4.5",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) (3+4+5)/3= 4",
    incorrectAnswerResponse: "Incorrect. (3+4+5)/3= 4",
    set: 35
    },

  6273:{
    question_tag: "L3MALP91Q2",
   code: "6273",
   title: "Math Q70",
   learner_question: "What is the mean average of 10, 12, 13 and 17? Enter the answer as a number. \r\n1. 13 \r\n2. 14 \r\n3. 14",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (10+12+13+17)/4= 13",
    incorrectAnswerResponse: "Incorrect. (10+12+13+17)/4= 13",
    set: 35
    },

  6274:{
    question_tag: "L3MALP92QG",
   code: "6274",
   title: "Math Class Q36",
   learner_question: "\r\n1. Math \r\n2. Statistics \r\n3. Mean Average",
    question: "What do we call the study of collecting, summarizing and presenting data? Enter the number of the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Statistics is the study of data.",
    incorrectAnswerResponse: "Incorrect. Statistics is the study of data.",
    set: 36
    },

  6275:{
    question_tag: "L3MALP92Q1",
   code: "6275",
   title: "Math Q71",
   learner_question: "What is the mean average of 2 and 3? \r\n1. \r\n2.5 \r\n2. 5 \r\n3. 6",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) (2+3)/2= 2.5",
    incorrectAnswerResponse: "Incorrect. (2+3)/2= 2.5",
    set: 36
    },

  6276:{
    question_tag: "L3MALP92Q2",
   code: "6276",
   title: "Math Q72",
   learner_question: "What is the mean average of 3, 3, 4 and 10? \r\n1. 3 \r\n2. 4 \r\n3. 5",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) (3+3+4+10)/4= 20/4 = 5",
    incorrectAnswerResponse: "Incorrect. (3+3+4+10)/4= 20/4 = 5",
    set: 36
    },

  6277:{
    question_tag: "L3MALP93QG",
   code: "6277",
   title: "Math Class Q37",
   learner_question: "\r\n1. To see how a class did on an exam. \r\n2. To divide the class into top and bottom half. \r\n3. To calculate the final grade of a student.",
    question: "Which is a reason to use Median instead of Mean? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Knowing the median would allow a teacher to divide a class into top and bottom half.",
    incorrectAnswerResponse: "Incorrect. Knowing the median would allow a teacher to divide a class into top and bottom half.",
    set: 37
    },

  6278:{
    question_tag: "L3MALP93Q1",
   code: "6278",
   title: "Math Q73",
   learner_question: "What is the median of 1, 3, 5, 12, 23? \r\n1. 8 \r\n2. 12 \r\n3. 5",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) The median is the middle number in a set.",
    incorrectAnswerResponse: "Incorrect. The median is the middle number in a set.",
    set: 37
    },

  6279:{
    question_tag: "L3MALP93Q2",
   code: "6279",
   title: "Math Q74",
   learner_question: "What is the median of 3, 3, 3, 4, 5, 6 \r\n1. 3 \r\n2. \r\n3.5 \r\n3. 5",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) In even number sets, the median is the mean of the middle two numbers.",
    incorrectAnswerResponse: "Incorrect. In even number sets, the median is the mean of the middle two numbers.",
    set: 37
    },

  6280:{
    question_tag: "L3MALP94QG",
   code: "6280",
   title: "Math Class Q38",
   learner_question: "\r\n1. (3, 5, 7) \r\n2. (1, 2, 4, 6) \r\n2. (1,1,8,13,13)",
    question: "In which set are the median and mean the same? Enter the number of the correct answer.",
    answer: "1",
    correctAnswerResponse: "Correct! :) The median and mean of 3,5,7 is 5.",
    incorrectAnswerResponse: "Incorrect. The median and mean of 3,5,7 is 5.",
    set: 38
    },

  6281:{
    question_tag: "L3MALP94Q1",
   code: "6281",
   title: "Math Q75",
   learner_question: "What is the median of 5,2,4, 7 and 11? \r\n1. 4 \r\n2. 5 \r\n3. 7",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) The median of 2,4,5,7,11 is 5",
    incorrectAnswerResponse: "Incorrect. The median of 2,4,5,7,11 is 5",
    set: 38
    },

  6282:{
    question_tag: "L3MALP94Q2",
   code: "6282",
   title: "Math Q76",
   learner_question: "What is the median of 100, 25, 300, 1 and 33? \r\n1. 33 \r\n2. 100 \r\n3. 150",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The median of 1, 25, 33, 100, 300 is 33.",
    incorrectAnswerResponse: "Incorrect. The median of 1, 25, 33, 100, 300 is 33.",
    set: 38
    },

  6283:{
    question_tag: "L3MALP95QG",
   code: "6283",
   title: "Math Class Q39",
   learner_question: "\r\n1. To see how a class did on an exam. \r\n2. To divide the class into top and bottom half. \r\n3. To see the most common answers on an exam.",
    question: "Which is a good use of Mode? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Mode shows the most common piece of data.",
    incorrectAnswerResponse: "Incorrect. Mode shows the most common piece of data.",
    set: 39
    },

  6284:{
    question_tag: "L3MALP95Q1",
   code: "6284",
   title: "Math Q77",
   learner_question: "What is the mode of 1, 1, 4, 5, 6? \r\n1. 1 \r\n2. 4 \r\n3. 4.5",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The mode of 1, 1, 4, 5, 6 is 1- the most frequent number.",
    incorrectAnswerResponse: "Incorrect. The mode of 1, 1, 4, 5, 6 is 1- the most frequent number.",
    set: 39
    },

  6285:{
    question_tag: "L3MALP95Q2",
   code: "6285",
   title: "Math Q78",
   learner_question: "What is the mode of 1, 2, 4, 5, 5, 6? \r\n1. 5 \r\n2. 4.5 \r\n3. \r\n3.4",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The mode of 1, 4, 5, 5, 6 is 5- the most frequent number.",
    incorrectAnswerResponse: "Incorrect. The mode of 1, 4, 5, 5, 6 is 5- the most frequent number.",
    set: 39
    },

  6286:{
    question_tag: "L3MALP96QG",
   code: "6286",
   title: "Math Class Q40",
   learner_question: "\r\n1. median \r\n2. mode \r\n3. mean",
    question: "Every Friday, the teacher thinks of a number. The students guess week. What statistic would help the students guess the teacher\'s number? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Mode would show which number the teacher chooses most often.",
    incorrectAnswerResponse: "Incorrect. Mode would show which number the teacher chooses most often.",
    set: 40
    },

  6287:{
    question_tag: "L3MALP96Q1",
   code: "6287",
   title: "Math Q79",
   learner_question: "Which set is bimodal? \r\n1. (1,1,2,3,4) \r\n2. (1,1,) \r\n3. (1,1,2,3,3)",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) A bimodal set has more than one mode.",
    incorrectAnswerResponse: "Incorrect. A bimodal set has more than one mode.",
    set: 40
    },

  6288:{
    question_tag: "L3MALP96Q2",
   code: "6288",
   title: "Math Q80",
   learner_question: "What is the mode of the set: (4, 5, 8, 5, 8, 9, 100, 8, 4)? \r\n1. 3 \r\n2. 8 \r\n3. 22",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) (4,5,5,8,8,8,9,100) 8 is the mode. It occurs 3 times.",
    incorrectAnswerResponse: "Incorrect. (4,5,5,8,8,8,9,100) 8 is the mode. It occurs 3 times.",
    set: 40
    },

  6289:{
    question_tag: "L3MALP97QG",
   code: "6289",
   title: "Math Class Q41",
   learner_question: "\r\n1. (150, 151, 153) \r\n2. ( 2, 4, 5, 9) \r\n3. (3, 4, 5, 5, 6)",
    question: "Which set of numbers has the biggest range? Enter the number of the set with the biggest range.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Range is the difference between the highest and lowest numbers. 2,4,5,9 has a range of 7.",
    incorrectAnswerResponse: "Incorrect. Range is the difference between the highest and lowest numbers. 2,4,5,9 has a range of 7.",
    set: 41
    },

  6290:{
    question_tag: "L3MALP97Q1",
   code: "6290",
   title: "Math Q81",
   learner_question: "What is the range of 1, 2, 3, 3, 5? \r\n1. 5 \r\n2. 4 \r\n3. 3",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 5-1=4",
    incorrectAnswerResponse: "Incorrect. 5-1=4",
    set: 41
    },

  6291:{
    question_tag: "L3MALP97Q2",
   code: "6291",
   title: "Math Q82",
   learner_question: "What is the range of 17,18,19? \r\n1. 18 \r\n2. 2 \r\n3. 19",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 19-17=2",
    incorrectAnswerResponse: "Incorrect. 19-17=2",
    set: 41
    },

  6292:{
    question_tag: "L3MALP98QG",
   code: "6292",
   title: "Math Class Q42",
   learner_question: "\r\n1. (1,2,2,3) \r\n2. (1,3,5) \r\n3. (1,1,1,1)",
    question: "Which set of numbers has the same median, mode, mean and range?",
    answer: "1",
    correctAnswerResponse: "Correct! :) The median, mode, range and mean of (1,2,2,3) is 2.",
    incorrectAnswerResponse: "Incorrect. The median, mode, range and mean of (1,2,2,3) is 2.",
    set: 42
    },

  6293:{
    question_tag: "L3MALP98Q1",
   code: "6293",
   title: "Math Q83",
   learner_question: "What is the mean of 1,1,4,6? \r\n1. 1 \r\n2. 5 \r\n3. 3",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 1+1+4+6= 12. 12/4=3",
    incorrectAnswerResponse: "Incorrect. 1+1+4+6= 12. 12/4=3",
    set: 42
    },

  6294:{
    question_tag: "L3MALP98Q2",
   code: "6294",
   title: "Math Q84",
   learner_question: "What is the median of 1,1,2,5,100? \r\n1. 1 \r\n2. 2 \r\n3. 99",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2 is the middle, or median, number in the set.",
    incorrectAnswerResponse: "Incorrect. 2 is the middle, or median, number in the set.",
    set: 42
    },

  6295:{
    question_tag: "L3MALP99QG",
   code: "6295",
   title: "Math Class Q43",
   learner_question: "\r\n1. A histogram \r\n2. A bar graph \r\n3. A pie chart",
    question: "You want to see how the populations of different countries compare. Which graph will be most useful?",
    answer: "2",
    correctAnswerResponse: "Correct! :) Bar graphs are useful for showing how different groups compare.",
    incorrectAnswerResponse: "Incorrect. Bar graphs are useful for showing how different groups compare.",
    set: 43
    },

  6296:{
    question_tag: "L3MALP99Q1",
   code: "6296",
   title: "Math Q85",
   learner_question: "What graph is good to show percentages of a whole? \r\n1. A histogram \r\n2. A bar graph \r\n3. a pie chart",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Pie charts show percentages or parts of a whole.",
    incorrectAnswerResponse: "Incorrect. Pie charts show percentages or parts of a whole.",
    set: 43
    },

  6297:{
    question_tag: "L3MALP99Q2",
   code: "6297",
   title: "Math Q86",
   learner_question: "What is the mode of (1,1,3,4,5)? \r\n1. 1 \r\n2. 4 \r\n3. 3",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) The most frequent number in 1,1,3,4,5 is 1.",
    incorrectAnswerResponse: "Incorrect. The most frequent number in 1,1,3,4,5 is 1.",
    set: 43
    },

  6298:{
    question_tag: "L3MALP100QG",
   code: "6298",
   title: "Math Class Q44",
   learner_question: "\r\n1. A histogram \r\n2. A bar graph \r\n3. A pie chart",
    question: "A doctor wants to show how average height changes by age. Which type of graph would be most useful?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Histograms are useful to show continuous data- like ages.",
    incorrectAnswerResponse: "Incorrect. Histograms are useful to show continuous data- like ages.",
    set: 44
    },

  6299:{
    question_tag: "L3MALP100Q1",
   code: "6299",
   title: "Math Q87",
   learner_question: "A pie chart shows that 38% of a class is male. What percent is female? \r\n1. 22% \r\n3. 38% \r\n3. 62%",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 100-38=62%",
    incorrectAnswerResponse: "Incorrect. 100-38=62%",
    set: 44
    },

  6300:{
    question_tag: "L3MALP100Q2",
   code: "6300",
   title: "Math Q88",
   learner_question: "What is the mean of 1,1,4? Enter the answer as a number. \r\n1. 1 \r\n2. 2 \r\n3. 3",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 1+1+4= 6. 6/3=2",
    incorrectAnswerResponse: "Incorrect. 1+1+4= 6. 6/3=2",
    set: 44
    },

  6301:{
    question_tag: "L3MALP101QG",
   code: "6301",
   title: "Math Class Q45",
   learner_question: "\r\n1. A histogram \r\n2. A bar graph \r\n3. A pie chart",
    question: "A teacher wants to see student exam averages by subject. What type of graph would be useful.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Bar graphs are useful for showing how different groups compare.",
    incorrectAnswerResponse: "Incorrect. Bar graphs are useful for showing how different groups compare.",
    set: 45
    },

  6302:{
    question_tag: "L3MALP101Q1",
   code: "6302",
   title: "Math Q89",
   learner_question: "Which graph is shaped like a circle? \"\r\n1. A histogram \r\n2. A bar graph \r\n3. A pie chart\"",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Pie charts show percentages or parts of a whole. They are circles.",
    incorrectAnswerResponse: "Incorrect. Pie charts show percentages or parts of a whole. They are circles.",
    set: 45
    },

  6303:{
    question_tag: "L3MALP101Q2",
   code: "6303",
   title: "Math Q90",
   learner_question: "What is the mode of (5,8,2,4,6,8)? \r\n1. 5 \r\n2. 6 \r\n3. 8",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 8 is the most frequent number, the mode.",
    incorrectAnswerResponse: "Incorrect. 8 is the most frequent number, the mode.",
    set: 45
    },

  6304:{
    question_tag: "L3MALP102QG",
   code: "6304",
   title: "Math Class Q46",
   learner_question: "\r\n1. At the bottom of the graph. \r\n2. On the right of the graph. \r\n3. On the left of the graph.",
    question: "A class draws a bar graph to show rainfall by month. Where do the numbers in cm appear on the graph? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Units of measure are usually on the left side of a graph.",
    incorrectAnswerResponse: "Incorrect. Units of measure are usually on the left side of a graph.",
    set: 46
    },

  6305:{
    question_tag: "L3MALP102Q1",
   code: "6305",
   title: "Math Q91",
   learner_question: "In a class, 5 students like fish, 2 like chicken and 3 like beef. In this tally, fish is most similar to a ___. \r\n1. mode \r\n2. mean \r\n3. median",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) Fish was the most frequent answer, so it is like the mode",
    incorrectAnswerResponse: "Incorrect. Fish was the most frequent answer, so it is like the mode",
    set: 46
    },

  6306:{
    question_tag: "L3MALP102Q2",
   code: "6306",
   title: "Math Q92",
   learner_question: "Jane is in a line at the shop. There are 3 people in front of her and 3 behind her. Jane\'s place is most similar to a ___. \r\n1. mode \r\n2. mean \r\n3. median",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Jane is in the middle, like a median.",
    incorrectAnswerResponse: "Incorrect. Jane is in the middle, like a median.",
    set: 46
    },

  6307:{
    question_tag: "L3MALP103QG",
   code: "6307",
   title: "Math Class Q47",
   learner_question: "\r\n1. 35% \r\n2. 65% \r\n3. 100%",
    question: "A pie chart has 2 sections. One section is labeled 35%. What is the other section labeled? Enter the number of the best answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Pie charts usually show parts of a whole. If one part of 100% shows 35%, the other part should be 65%",
    incorrectAnswerResponse: "Incorrect. Pie charts usually show parts of a whole. If one part of 100% shows 35%, the other part should be 65%",
    set: 47
    },

  6308:{
    question_tag: "L3MALP103Q1",
   code: "6308",
   title: "Math Q93",
   learner_question: "A histogram shows the number of students by age. What do we know about the highest bar in the histogram? \r\n1. It is the median \r\n2. It is the mode \r\n3. It is the mean",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) We know the highest bar was the most frequent number, the mode.",
    incorrectAnswerResponse: "Incorrect. We know the highest bar was the most frequent number, the mode.",
    set: 47
    },

  6309:{
    question_tag: "L3MALP103Q2",
   code: "6309",
   title: "Math Q94",
   learner_question: "What is the median of (5,8,3,4,6)? Enter the answer as a number. \r\n1. 5 \r\n2. 5.5 \r\n3. 6",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 5 is the middle number in the set (5,8,3,4,6)",
    incorrectAnswerResponse: "Incorrect. 5 is the middle number in the set (5,8,3,4,6)",
    set: 47
    },

  6310:{
    question_tag: "L3MALP104QG",
   code: "6310",
   title: "Math Class Q48",
   learner_question: "\r\n1. Pie charts are shaped like circles. \r\n2. Pie charts show percent and parts of a whole. \r\n3. Pie charts should only be used for business.",
    question: "Which is NOT true about pie charts? Enter the number of the incorrect answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) We can use pie charts for any purpose we\'d like.",
    incorrectAnswerResponse: "Incorrect. We can use pie charts for any purpose we\'d like.",
    set: 48
    },

  6311:{
    question_tag: "L3MALP104Q1",
   code: "6311",
   title: "Math Q95",
   learner_question: "In a class, 3 students like red, 5 like blue and 2 like red. What percent of students like red? \r\n1. 2% \r\n2. 20% \r\n3. 80%",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 2/10 = .2 =20%",
    incorrectAnswerResponse: "Incorrect. 2/10 = .2 =20%",
    set: 48
    },

  6312:{
    question_tag: "L3MALP104Q2",
   code: "6312",
   title: "Math Q96",
   learner_question: "What is the mode of (4,7,100,140,7,2,1). \r\n1. 7 \r\n2. 78 \r\n2. 139",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :)",
    incorrectAnswerResponse: "Incorrect.",
    set: 48
    },

  6313:{
    question_tag: "L3MALP105QG",
   code: "6313",
   title: "Math Class Q49",
   learner_question: "\r\n1. 50 degrees \r\n2. 180 degrees \r\n3. 90 degrees",
    question: "If half the class likes popcorn, how many degrees should the popcorn part of a pie chart be? Enter the correct answer.",
    answer: "2",
    correctAnswerResponse: "Correct! :) Half the pie chart is 180 degrees.",
    incorrectAnswerResponse: "Incorrect. Half the pie chart is 180 degrees.",
    set: 49
    },

  6314:{
    question_tag: "L3MALP105Q1",
   code: "6314",
   title: "Math Q97",
   learner_question: "If 25% of a class likes hip hop, how many degrees should the \'hip hop\' part of the pie chart be? \r\n1. 90 degrees \r\n2. 25 degrees \r\n3. 40 degrees",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 360/4= 90 degrees",
    incorrectAnswerResponse: "Incorrect. 360/4= 90 degrees",
    set: 49
    },

  6315:{
    question_tag: "L3MALP105Q2",
   code: "6315",
   title: "Math Q98",
   learner_question: "What is the mean of (3,5,7,9)? \r\n1. 5 \r\n2. 6 \r\n3. 9",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 3+5+7+9= 24. 24/4= 6",
    incorrectAnswerResponse: "Incorrect. 3+5+7+9= 24. 24/4= 6",
    set: 49
    },

  6316:{
    question_tag: "L3MALP106QG",
   code: "6316",
   title: "Math Class Q50",
   learner_question: "\r\n1. On the bottom of the graph \r\n2. On the left of the graph \r\n3. On the right of the graph",
    question: "In a bar graph, where are the names of the groups being measured usually found?",
    answer: "1",
    correctAnswerResponse: "Correct! :) Most bar graphs have the groups or categories named at the bottom.",
    incorrectAnswerResponse: "Incorrect. Most bar graphs have the groups or categories named at the bottom.",
    set: 50
    },

  6317:{
    question_tag: "L3MALP106Q1",
   code: "6317",
   title: "Math Q99",
   learner_question: "If 30% of Liberia\'s economy is driven by services, how many degrees in a pie chart will \'economy\' need? \r\n1. 30 degrees \r\n2. 180 degrees \r\n3. 108 degrees",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) 360 x .30= 180",
    incorrectAnswerResponse: "Incorrect. 360 x .30= 180",
    set: 50
    },

  6318:{
    question_tag: "L3MALP106Q2",
   code: "6318",
   title: "Math Q100",
   learner_question: "What is the median of (12, 1, 5, 8, 9). \r\n1. 11 \r\n2. 8 \r\n3. 6",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) 8 is the middle (median) number in (1,5,8,9,12).",
    incorrectAnswerResponse: "Incorrect. 8 is the middle (median) number in (1,5,8,9,12).",
    set: 50
    },

  6319:{
    question_tag: "L3MALP107QG",
   code: "6319",
   title: "Math Class Q51",
   learner_question: "\r\n1. Showing parts of a whole. \r\n2. Showing how groups compare. \r\n3. Showing change over time.",
    question: "Which is a line graph good for? Enter the number of the best answer.",
    answer: "3",
    correctAnswerResponse: "Correct! :) Line graphs are usually used to show change over time.",
    incorrectAnswerResponse: "Incorrect. Line graphs are usually used to show change over time.",
    set: 51
    },

  6320:{
    question_tag: "L3MALP107Q1",
   code: "6320",
   title: "Math Q101",
   learner_question: "What is the range of the set (4,5,6,7,12)? \r\n1. 8 \r\n2. 6 \r\n3. 4.5",
    question: "",
    answer: "1",
    correctAnswerResponse: "Correct! :) 10-4=6.",
    incorrectAnswerResponse: "Incorrect. 10-4=6.",
    set: 51
    },

  6321:{
    question_tag: "L3MALP107Q2",
   code: "6321",
   title: "Math Q102",
   learner_question: "Which shape always has 5 sides? \r\n1. a polygon \r\n2. a parallelogram \r\n3. a pentagon",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) Pentagons always have 5 sides.",
    incorrectAnswerResponse: "Incorrect. Pentagons always have 5 sides.",
    set: 51
    },

  6322:{
    question_tag: "L3MALP108QG",
   code: "6322",
   title: "Math Class Q52",
   learner_question: "\r\n1. median \r\n2. mode \r\n3. mean",
    question: "A teacher wants to know how well her students did on an exam. Which number will be most useful?",
    answer: "3",
    correctAnswerResponse: "Correct! :) The mean will show the average score of the class as a whole.",
    incorrectAnswerResponse: "Incorrect. The mean will show the average score of the class as a whole.",
    set: 52
    },

  6323:{
    question_tag: "L3MALP108Q1",
   code: "6323",
   title: "Math Q103",
   learner_question: "A teacher wants to divide the class into 2 groups. Which will be most helpful? \r\n1. mean \r\n2. median \r\n3. mode",
    question: "",
    answer: "2",
    correctAnswerResponse: "Correct! :) Medians show the middle of a group.",
    incorrectAnswerResponse: "Incorrect. Medians show the middle of a group.",
    set: 52
    },

  6324:{
    question_tag: "L3MALP108Q2",
   code: "6324",
   title: "Math Q104",
   learner_question: "What is the mode of the set: (1,1,4,10,8,9,8,4,9,4)? \r\n1. 9 \r\n2. 5 \r\n3. 4",
    question: "",
    answer: "3",
    correctAnswerResponse: "Correct! :) In (1,1,4,10,8,9,8,4,9,4) 4 is the mode.",
    incorrectAnswerResponse: "Incorrect. In (1,1,4,10,8,9,8,4,9,4) 4 is the mode.",
    set: 52
    }
};
	
	//return false if user submits a non existent question...
	var jsonObject = level1Numeracy[questionCode];
	if (typeof jsonObject === "undefined") 
    	return false
	
	return jsonObject;

};



