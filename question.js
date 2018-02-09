/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getQuestion = function(questionCode) { 
    
	var level1Numeracy = 
{  
   2001:{  
      question_tag:"L1MALP1QG",
      code:"2001",
      title:"Maths Class Q1",
      learner_question:"How many? ($ $ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
      question:"How many do you see? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! $ $ $ $ -4",
      incorrectAnswerResponse:"Incorrect. $ $ $ $ -4",
      set:1
   },
   2002:{  
      question_tag:"L1MALP1Q1",
      code:"2002",
      title:"Maths Q1",
      learner_question:"How many? ($ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! $ $ $ -3",
      incorrectAnswerResponse:"Incorrect. $ $ $ -3",
      set:1
   },
   2003:{  
      question_tag:"L1MALP1Q2",
      code:"2003",
      title:"Maths Q2",
      learner_question:"How many? ($ $ $ $ $) \r\n1. 5 \r\n2. 4 \r\n3. 3",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! $ $ $ $ $-5",
      incorrectAnswerResponse:"Incorrect. $ $ $ $ $-5",
      set:1
   },
   2004:{  
      question_tag:"L1MALP2QG",
      code:"2004",
      title:"Maths Class Q2",
      learner_question:"How many? (@ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
      question:"How many do you see? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! (@ @ @ @ @ @) 6",
      incorrectAnswerResponse:"Incorrect. (@ @ @ @ @ @) 6",
      set:2
   },
   2005:{  
      question_tag:"L1MALP2Q1",
      code:"2005",
      title:"Maths Q3",
      learner_question:"How many? (@ @ @ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! (@ @ @ @ @ @ @ @) 8",
      incorrectAnswerResponse:"Incorrect. (@ @ @ @ @ @ @ @) 8",
      set:2
   },
   2006:{  
      question_tag:"L1MALP2Q2",
      code:"2006",
      title:"Maths Q4",
      learner_question:"How many? (@ @ @ @ @ @ @) \r\n1. 6 \r\n2. 7 \r\n3. 8",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! (@ @ @ @ @ @ @) 7",
      incorrectAnswerResponse:"Incorrect. (@ @ @ @ @ @ @) 7",
      set:2
   },
   2007:{  
      question_tag:"L1MALP3QG",
      code:"2007",
      title:"Maths Class Q3",
      learner_question:"6___7 \r\n1. < \r\n2. > \r\n3. =",
      question:"Which symbol is missing? Greater than, less than or equals? ",
      answer:"1",
      correctAnswerResponse:":) Correct! 6<7",
      incorrectAnswerResponse:"Incorrect. 6<7",
      set:3
   },
   2008:{  
      question_tag:"L1MALP3Q1",
      code:"2008",
      title:"Maths Q5",
      learner_question:"6___4 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 6>4",
      incorrectAnswerResponse:"Incorrect. 6>4",
      set:3
   },
   2009:{  
      question_tag:"L1MALP3Q2",
      code:"2009",
      title:"Maths Q6",
      learner_question:"6___6 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 6=6",
      incorrectAnswerResponse:"Incorrect. 6=6",
      set:3
   },
   2010:{  
      question_tag:"L1MALP4QG",
      code:"2010",
      title:"Maths Class Q4",
      learner_question:"How many? (I I I I I I I I I I I I I I) \r\n1. 10 \r\n2. 14 \r\n3. 20",
      question:"How many lines? (I I I I I I I I I I I I I I) Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! (I I I I I I I I I I I I I I) 14",
      incorrectAnswerResponse:"Incorrect. (I I I I I I I I I I I I I I) 14",
      set:4
   },
   2011:{  
      question_tag:"L1MALP4Q1",
      code:"2011",
      title:"Maths Q7",
      learner_question:"How many? (I I I I I I I I I I ) \r\n1. 10 \r\n2. 14 \r\n3. 20",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! (I I I I I I I I I I ) 10",
      incorrectAnswerResponse:"Incorrect. (I I I I I I I I I I ) 10",
      set:4
   },
   2012:{  
      question_tag:"L1MALP4Q2",
      code:"2012",
      title:"Maths Q8",
      learner_question:"13___20 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 13 < 20",
      incorrectAnswerResponse:"Incorrect. 13 < 20",
      set:4
   },
   2013:{  
      question_tag:"L1MALP5QG",
      code:"2013",
      title:"Maths Class Q5",
      learner_question:"11, 12, ____, 14, 15 \r\n1. 10 \r\n2. 13 \r\n3. 20",
      question:"Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 11, 12, 13, 14, 15.",
      incorrectAnswerResponse:"Incorrect. 11, 12, 13, 14, 15.",
      set:5
   },
   2014:{  
      question_tag:"L1MALP5Q1",
      code:"2014",
      title:"Maths Q9",
      learner_question:"17,18,____,20 \r\n1. 16 \r\n2. 19 \r\n3. 22",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 17,18, 19, 20.",
      incorrectAnswerResponse:"Incorrect. 17,18, 19, 20.",
      set:5
   },
   2015:{  
      question_tag:"L1MALP5Q2",
      code:"2015",
      title:"Maths Q10",
      learner_question:"18, 17, 16, ___, 14 \r\n1. 20 \r\n2. 15 \r\n3. 13",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 18, 17, 16, 15, 14",
      incorrectAnswerResponse:"Incorrect. 18, 17, 16, 15, 14",
      set:5
   },
   2016:{  
      question_tag:"L1MALP6QG",
      code:"2016",
      title:"Maths Class Q6",
      learner_question:"2, 4, ___, 8, 10 \r\n1. 5 \r\n2. 6 \r\n3. 7",
      question:"Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 2,4,6,8,10.",
      incorrectAnswerResponse:"Incorrect. 2,4,6,8,10.",
      set:6
   },
   2017:{  
      question_tag:"L1MALP6Q1",
      code:"2017",
      title:"Maths Q11",
      learner_question:"10, 12, ___, 16, 18 \r\n1. 13 \r\n2. 14 \r\n3. 15",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 10,12, 14, 16.",
      incorrectAnswerResponse:"Incorrect. 10,12, 14, 16.",
      set:6
   },
   2018:{  
      question_tag:"L1MALP6Q2",
      code:"2018",
      title:"Maths Q12",
      learner_question:"8,___, 12, 14 \r\n1. 9 \r\n2. 10 \r\n3. 11",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 8, 10, 12, 14.",
      incorrectAnswerResponse:"Incorrect. 8, 10, 12, 14.",
      set:6
   },
   2019:{  
      question_tag:"L1MALP7QG",
      code:"2019",
      title:"Maths Class Q7",
      learner_question:"$5, $1, $1=? \r\n1. $7 \r\n2. $8 \r\n3. $9",
      question:"How much money? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! $7",
      incorrectAnswerResponse:"Incorrect. $7",
      set:7
   },
   2020:{  
      question_tag:"L1MALP7Q1",
      code:"2020",
      title:"Maths Q13",
      learner_question:"$1, $10=? \r\n1. $9 \r\n2. $110 \r\n3. $11",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! $11",
      incorrectAnswerResponse:"Incorrect. $11",
      set:7
   },
   2021:{  
      question_tag:"L1MALP7Q2",
      code:"2021",
      title:"Maths Q14",
      learner_question:"$1, $5, $5=? \r\n1. $155 \r\n2. $6 \r\n3. 11",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! $11",
      incorrectAnswerResponse:"Incorrect. $11",
      set:7
   },
   2022:{  
      question_tag:"L1MALP8QG",
      code:"2022",
      title:"Maths Class Q8",
      learner_question:"88, 89, ___, 91, 92 \r\n1. 80 \r\n2. 87 \r\n3. 90",
      question:"Which number is missing? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 88,89,90,91,92",
      incorrectAnswerResponse:"Incorrect. 88,89,90,91,92",
      set:8
   },
   2023:{  
      question_tag:"L1MALP8Q1",
      code:"2023",
      title:"Maths Q15",
      learner_question:"77, 78, 79 ___ \r\n1. 80 \r\n2. 70 \r\n3. 81",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 77,78,79,80",
      incorrectAnswerResponse:"Incorrect. 77,78,79,80",
      set:8
   },
   2024:{  
      question_tag:"L1MALP8Q2",
      code:"2024",
      title:"Maths Q16",
      learner_question:"95, 94, ___, 92, 91 \r\n1. 93 \r\n2. 95 \r\n3. 90",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 95, 94, 93, 92, 91",
      incorrectAnswerResponse:"Incorrect. 95, 94, 93, 92, 91",
      set:8
   },
   2025:{  
      question_tag:"L1MALP9QG",
      code:"2025",
      title:"Maths Class Q9",
      learner_question:"38 ___ 63 \r\n1. < \r\n2. > \r\n3. =",
      question:"Which symbol is missing? Greater than, less than or equals? ",
      answer:"1",
      correctAnswerResponse:":) Correct! 38 <63",
      incorrectAnswerResponse:"Incorrect. 38 <63",
      set:9
   },
   2026:{  
      question_tag:"L1MALP9Q1",
      code:"2026",
      title:"Maths Q17",
      learner_question:"91___88 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 91 > 88",
      incorrectAnswerResponse:"Incorrect. 91 > 88",
      set:9
   },
   2027:{  
      question_tag:"L1MALPQ2",
      code:"2027",
      title:"Maths Q18",
      learner_question:"19___31 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 19 < 31",
      incorrectAnswerResponse:"Incorrect. 19 < 31",
      set:9
   },
   2028:{  
      question_tag:"L1MALP10QG",
      code:"2028",
      title:"Maths Class Q10",
      learner_question:"9 ___ 61 \r\n1. < \r\n2. > \r\n3. =",
      question:"Which symbol is missing? Greater than, less than or equals? ",
      answer:"1",
      correctAnswerResponse:":) Correct! 9 < 61",
      incorrectAnswerResponse:"Incorrect. 9 < 61",
      set:10
   },
   2029:{  
      question_tag:"L1MALP10Q1",
      code:"2029",
      title:"Maths Q19",
      learner_question:"83___80 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 83 > 80",
      incorrectAnswerResponse:"Incorrect. 83 > 80",
      set:10
   },
   2030:{  
      question_tag:"L1MALP10Q2",
      code:"2030",
      title:"Maths Q20",
      learner_question:"19___91 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 19 < 91",
      incorrectAnswerResponse:"Incorrect. 19 < 91",
      set:10
   },
   2031:{  
      question_tag:"L1MALP11QG",
      code:"2031",
      title:"Maths Class Q11",
      learner_question:"5, 10, ___, 20, 25 \r\n1. 11 \r\n2. 15 \r\n3. 19",
      question:"Say: Skip count by 5. Which number is missing?",
      answer:"2",
      correctAnswerResponse:":) Correct! 5, 10, 15, 20, 25",
      incorrectAnswerResponse:"Incorrect. 5, 10, 15, 20, 25",
      set:11
   },
   2032:{  
      question_tag:"L1MALP11Q1",
      code:"2032",
      title:"Maths Q21",
      learner_question:"25,30, ___, 40, 45 \r\n1. 31 \r\n2. 35 \r\n3. 39",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 25, 30, 35, 40, 45",
      incorrectAnswerResponse:"Incorrect. 25, 30, 35, 40, 45",
      set:11
   },
   2033:{  
      question_tag:"L1MALP11Q2",
      code:"2033",
      title:"Maths Q22",
      learner_question:"10, 20, ___, 40, 50, 60 \r\n1. 30 \r\n2. 25 \r\n3. 21",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 10, 20, 30, 40, 50, 60",
      incorrectAnswerResponse:"Incorrect. 10, 20, 30, 40, 50, 60",
      set:11
   },
   2034:{  
      question_tag:"L1MALP12QG",
      code:"2034",
      title:"Maths Class Q12",
      learner_question:"\r\n1. $25 \r\n2. $30 \r\n3. $15",
      question:"Write on the board: $5, $5, $10, $10= ___How much money? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 5,5,10,10=30",
      incorrectAnswerResponse:"Incorrect. 5,5,10,10=30",
      set:12
   },
   2035:{  
      question_tag:"L1MALP12Q1",
      code:"2035",
      title:"Maths Q23",
      learner_question:"$5, $10, $10, $10=? \r\n1. $35 \r\n2. $40 \r\n3. $80",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 5,10,10,10=35",
      incorrectAnswerResponse:"Incorrect. 5,10,10,10=35",
      set:12
   },
   2036:{  
      question_tag:"L1MALP12Q2",
      code:"2036",
      title:"Maths Q24",
      learner_question:"$5, $5, $5, $10=? \r\n1. $15 \r\n2. $60 \r\n3. $25",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 5, 5, 5, 10=25",
      incorrectAnswerResponse:"Incorrect. 5, 5, 5, 10=25",
      set:12
   },
   2037:{  
      question_tag:"L1MALP13QG",
      code:"2037",
      title:"Maths Class Q13",
      learner_question:"\r\n1. 13 \r\n2. 58 \r\n3. 85",
      question:"Write the following on the board: 8 Tens, 5 Ones =? Say: Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 8 Tens, 5 Ones =85",
      incorrectAnswerResponse:"Incorrect. 8 Tens, 5 Ones =85",
      set:13
   },
   2038:{  
      question_tag:"L1MALP13Q1",
      code:"2038",
      title:"Maths Q25",
      learner_question:"3 Tens, 2 Ones =? \r\n1. 32 \r\n2. 23 \r\n3. 5",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 3 Tens, 2 Ones=32",
      incorrectAnswerResponse:"Incorrect. 3 Tens, 2 Ones=32",
      set:13
   },
   2039:{  
      question_tag:"L1MALP13Q2",
      code:"2039",
      title:"Maths Q26",
      learner_question:"9 Tens, 3 Ones =? \r\n1. 39 \r\n2. 93 \r\n3. 12",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 9 Tens, 3 Ones =93",
      incorrectAnswerResponse:"Incorrect. 9 Tens, 3 Ones =93",
      set:13
   },
   2040:{  
      question_tag:"L1MALP14QG",
      code:"2040",
      title:"Maths Class Q14 ",
      learner_question:"\r\n1. < \r\n2. > \r\n3. =",
      question:"Write the following on the board: 8___12 Say: Which symbol is missing? Greater than, less than or equals? ",
      answer:"1",
      correctAnswerResponse:":) Correct! 8<12",
      incorrectAnswerResponse:"Incorrect. 8<12",
      set:14
   },
   2041:{  
      question_tag:"L1MALP14Q1",
      code:"2041",
      title:"Maths Q27",
      learner_question:"61 ___ 38 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 61>38",
      incorrectAnswerResponse:"Incorrect. 61>38",
      set:14
   },
   2042:{  
      question_tag:"L1MALP14Q2",
      code:"2042",
      title:"Maths Q28",
      learner_question:"5, 10, 15, 20, ___, 30,35 \r\n1. 21 \r\n2. 25 \r\n3. 29",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 5,10,15, 20, 25, 30, 35",
      incorrectAnswerResponse:"Incorrect. 5,10,15, 20, 25, 30, 35",
      set:14
   },
   2043:{  
      question_tag:"L1MALP15QG",
      code:"2043",
      title:"Maths Class Q15",
      learner_question:"\r\n1. < \r\n2. > \r\n3. =",
      question:"Write on the board: 13___13 Say: Which symbol is missing? Greater than, less than or equals? ",
      answer:"3",
      correctAnswerResponse:":) Correct! 13=13",
      incorrectAnswerResponse:"Incorrect. 13=13",
      set:15
   },
   2044:{  
      question_tag:"L1MALP15Q1",
      code:"2044",
      title:"Maths Q29",
      learner_question:"10, 20, 30, ___, 50, 60 \r\n1. 31 \r\n2. 35 \r\n3. 40",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 10, 20, 30, 40, 50, 60",
      incorrectAnswerResponse:"Incorrect. 10, 20, 30, 40, 50, 60",
      set:15
   },
   2045:{  
      question_tag:"L1MALP15Q2",
      code:"2045",
      title:"Maths Q30",
      learner_question:"15, 20, 25,___, 35, 40, 45 \r\n1. 26 \r\n2. 30 \r\n3. 34",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 15, 20, 25, 30, 35, 40, 45",
      incorrectAnswerResponse:"Incorrect. 15, 20, 25, 30, 35, 40, 45",
      set:15
   },
   2046:{  
      question_tag:"L1MALP16QG",
      code:"2046",
      title:"Maths Class Q16",
      learner_question:"3+5=? \r\n1. 25 \r\n2. 2 \r\n3. 8",
      question:"Write on the board: 3+5=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 3+5=8",
      incorrectAnswerResponse:"Incorrect. 3+5=8",
      set:16
   },
   2047:{  
      question_tag:"L1MALP16Q1",
      code:"2047",
      title:"Maths Q31",
      learner_question:"2+4=? \r\n1. 24 \r\n2. 2 \r\n3. 6",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 2+4=6",
      incorrectAnswerResponse:"Incorrect. 2+4=6",
      set:16
   },
   2048:{  
      question_tag:"L1MALP16Q2",
      code:"2048",
      title:"Maths Q32",
      learner_question:"1+7=? \r\n1. 8 \r\n2. 6 \r\n3. 17",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 1+7=8",
      incorrectAnswerResponse:"Incorrect. 1+7=8",
      set:16
   },
   2049:{  
      question_tag:"L1MALP17QG",
      code:"2049",
      title:"Maths Class Q17",
      learner_question:"\r\n1. 36 \r\n2. 9 \r\n3. 3",
      question:"Write on the board: 3+6=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 3+6=9",
      incorrectAnswerResponse:"Incorrect. 3+6=9",
      set:17
   },
   2050:{  
      question_tag:"L1MALP17Q1",
      code:"2050",
      title:"Maths Q33",
      learner_question:"4+4=? \r\n1. 4 \r\n2. 8 \r\n3. 0",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 4+4=8",
      incorrectAnswerResponse:"Incorrect. 4+4=8",
      set:17
   },
   2051:{  
      question_tag:"L1MALP17Q2",
      code:"2051",
      title:"Maths Q34",
      learner_question:"2+7=? \r\n1. 9 \r\n2. 5 \r\n3. 10",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 2+7=9",
      incorrectAnswerResponse:"Incorrect. 2+7=9",
      set:17
   },
   2052:{  
      question_tag:"L1MALP18QG",
      code:"2052",
      title:"Maths Class Q18",
      learner_question:"\r\n1. 90 \r\n2. 9 \r\n3. 10",
      question:"Write on the board: 9+0=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 9+0=9",
      incorrectAnswerResponse:"Incorrect. 9+0=9",
      set:18
   },
   2053:{  
      question_tag:"L1MALP18Q1",
      code:"2053",
      title:"Maths Q35",
      learner_question:"5+0=? \r\n1. 50 \r\n2. 6 \r\n3. 5",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 5+0=5",
      incorrectAnswerResponse:"Incorrect. 5+0=5",
      set:18
   },
   2054:{  
      question_tag:"L1MALP18Q2",
      code:"2054",
      title:"Maths Q36",
      learner_question:"5+7=? \r\n1. 57 \r\n2. 2 \r\n3. 12",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 5+7=12",
      incorrectAnswerResponse:"Incorrect. 5+7=12",
      set:18
   },
   2055:{  
      question_tag:"L1MALP19QG",
      code:"2055",
      title:"Maths Class Q19",
      learner_question:"\r\n1. 12 \r\n2. 93 \r\n3. 6",
      question:"Write on the board: 9-3=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 9-3=6",
      incorrectAnswerResponse:"Incorrect. 9-3=6",
      set:19
   },
   2056:{  
      question_tag:"L1MALP19Q1",
      code:"2056",
      title:"Maths Q37",
      learner_question:"6 - 4=? \r\n1. 64 \r\n2. 2 \r\n3. 10",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 6-4=2",
      incorrectAnswerResponse:"Incorrect. 6-4=2",
      set:19
   },
   2057:{  
      question_tag:"L1MALP19Q2",
      code:"2057",
      title:"Maths Q38",
      learner_question:"4 - 1=? \r\n1. 41 \r\n2. 5 \r\n3. 3",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 4-1=3",
      incorrectAnswerResponse:"Incorrect. 4-1=3",
      set:19
   },
   2058:{  
      question_tag:"L1MALP20QG",
      code:"2058",
      title:"Maths Class Q20",
      learner_question:"\r\n1. 22 \r\n2. 12 \r\n3. 8",
      question:"Write on the board: 15-7=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 15-7=8",
      incorrectAnswerResponse:"Incorrect. 15-7=8",
      set:20
   },
   2059:{  
      question_tag:"L1MALP20Q1",
      code:"2059",
      title:"Maths Q39",
      learner_question:"12 - 6=? \r\n1. 126 \r\n2. 6 \r\n3. 18",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 12-6=6",
      incorrectAnswerResponse:"Incorrect. 12-6=6",
      set:20
   },
   2060:{  
      question_tag:"L1MALP20Q2",
      code:"2060",
      title:"Maths Q40",
      learner_question:"13 - 3=? \r\n1. 10 \r\n2. 16 \r\n3. 11",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 13-3=10",
      incorrectAnswerResponse:"Incorrect. 13-3=10",
      set:20
   },
   2061:{  
      question_tag:"L1MALP21QG",
      code:"2061",
      title:"Maths Class Q21",
      learner_question:"\r\n1. 26 \r\n2. 12 \r\n3. 9",
      question:"Write on the board: 19-7=? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 19-7=12",
      incorrectAnswerResponse:"Incorrect. 19-7=12",
      set:21
   },
   2062:{  
      question_tag:"L1MALP21Q1",
      code:"2062",
      title:"Maths Q41",
      learner_question:"20 - 5= ? \r\n1. 10 \r\n2. 15 \r\n3. 25",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 20-5=15",
      incorrectAnswerResponse:"Incorrect. 20-5=15",
      set:21
   },
   2063:{  
      question_tag:"L1MALP21Q2",
      code:"2063",
      title:"Maths Q42",
      learner_question:"20-10=? \r\n1. 10 \r\n2. 20 \r\n3. 30",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 20-10=10",
      incorrectAnswerResponse:"Incorrect. 20-10=10",
      set:21
   },
   2064:{  
      question_tag:"L1MALP22QG",
      code:"2064",
      title:"Maths Class Q22",
      learner_question:"\r\n1. 0 chickens \r\n2. 5 chickens \r\n2. 15 chickens",
      question:"Say: You have 10 chickens. You sell 5 chickens. How many chickens do you have now? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 10 - 5=5",
      incorrectAnswerResponse:"Incorrect. 10 - 5=5",
      set:22
   },
   2065:{  
      question_tag:"L1MALP22Q1",
      code:"2065",
      title:"Maths Q43",
      learner_question:"20-3=? \r\n1. 17 \r\n2. 13 \r\n3. 23",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 20-3=17",
      incorrectAnswerResponse:"Incorrect. 20-3=17",
      set:22
   },
   2066:{  
      question_tag:"L1MALP22Q2",
      code:"2066",
      title:"Maths Q44",
      learner_question:"12-5=? \r\n1. 17 \r\n2. 15 \r\n3. 7",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 12-5=7",
      incorrectAnswerResponse:"Incorrect. 12-5=7",
      set:22
   },
   2067:{  
      question_tag:"L1MALP23QG",
      code:"2067",
      title:"Maths Class Q23",
      learner_question:"\r\n1. 6 chickens \r\n2. 10 chickens \r\n3. 4 chickens",
      question:"Say: You have 8 chickens. You buy 2 chickens. How many chickens do you have now? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 8+2=10.",
      incorrectAnswerResponse:"Incorrect. 8+2=10.",
      set:23
   },
   2068:{  
      question_tag:"L1MALP23Q1",
      code:"2068",
      title:"Maths Q45",
      learner_question:"3+8=? \r\n1. 12 \r\n2. 5 \r\n3. 11",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 3=8=11",
      incorrectAnswerResponse:"Incorrect. 3=8=11",
      set:23
   },
   2069:{  
      question_tag:"L1MALP23Q2",
      code:"2069",
      title:"Maths Q46",
      learner_question:"13-4=? \r\n1. 9 \r\n2. 17 \r\n3. 134",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 13-4= 9",
      incorrectAnswerResponse:"Incorrect. 13-4= 9",
      set:23
   },
   2070:{  
      question_tag:"L1MALP24QG",
      code:"2070",
      title:"Maths Class Q24",
      learner_question:"\r\n1. 15 \r\n2. 25 \r\n3. 1",
      question:"Write the following on the board: 12 +13 Say: 12 plus 1\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 12+13=25",
      incorrectAnswerResponse:"Incorrect. 12+13=25",
      set:24
   },
   2071:{  
      question_tag:"L1MALP24Q1",
      code:"2071",
      title:"Maths Q47",
      learner_question:"35+23=? \r\n1. 3523 \r\n2. 56 \r\n3. 58",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 35+23=58",
      incorrectAnswerResponse:"Incorrect. 35+23=58",
      set:24
   },
   2072:{  
      question_tag:"L1MALP24Q2",
      code:"2072",
      title:"Maths Q48",
      learner_question:"13+64=? \r\n1. 95 \r\n2. 77 \r\n3. 56",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 13+64=77",
      incorrectAnswerResponse:"Incorrect. 13+64=77",
      set:24
   },
   2073:{  
      question_tag:"L1MALP25QG",
      code:"2073",
      title:"Maths Class Q25",
      learner_question:"\r\n1. 95 \r\n2. 96 \r\n3. 97",
      question:"Write the following on the board: 62 +33 Say: 62 plus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 62+33=95",
      incorrectAnswerResponse:"Incorrect. 62+33=95",
      set:25
   },
   2074:{  
      question_tag:"L1MALP25Q1",
      code:"2074",
      title:"Maths Q49",
      learner_question:"15+42=? \r\n1. 66 \r\n2. 67 \r\n3. 78",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 15+42=67",
      incorrectAnswerResponse:"Incorrect. 15+42=67",
      set:25
   },
   2075:{  
      question_tag:"L1MALP25Q2",
      code:"2075",
      title:"Maths Q50",
      learner_question:"23+34=? \r\n1. 57 \r\n2. 58 \r\n3. 59",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 23+34= 57",
      incorrectAnswerResponse:"Incorrect. 23+34= 57",
      set:25
   },
   2076:{  
      question_tag:"L1MALP26QG",
      code:"2076",
      title:"Maths Class Q26",
      learner_question:"\r\n1. $49 \r\n2. $51 \r\n3. $61",
      question:"Say: Ellen has 50 dollars. Ellen's mother gives her 11 dollars. How much money does Ellen have now? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 50+11=61",
      incorrectAnswerResponse:"Incorrect. 50+11=61",
      set:26
   },
   2077:{  
      question_tag:"L1MALP26Q1",
      code:"2077",
      title:"Maths Q51",
      learner_question:"45+51=? \r\n1. 91 \r\n2. 96 \r\n3. 85",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 45+51=96",
      incorrectAnswerResponse:"Incorrect. 45+51=96",
      set:26
   },
   2078:{  
      question_tag:"L1MALP26Q2",
      code:"2078",
      title:"Maths Q52",
      learner_question:"21+43=? \r\n1. 64 \r\n2. 55 \r\n3. 19",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 21+43=64",
      incorrectAnswerResponse:"Incorrect. 21+43=64",
      set:26
   },
   2079:{  
      question_tag:"L1MALP27QG",
      code:"2079",
      title:"Maths Class Q27",
      learner_question:"\r\n1. 100 \r\n2. 34 \r\n3. 11",
      question:"Write the following on the board: 67 - 33 Say: 67 minus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 67-33=34",
      incorrectAnswerResponse:"Incorrect. 67-33=34",
      set:27
   },
   2080:{  
      question_tag:"L1MALP27Q1",
      code:"2080",
      title:"Maths Q53",
      learner_question:"57-32=? \r\n1. 25 \r\n2. 34 \r\n3. 89",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 57-32=25",
      incorrectAnswerResponse:"Incorrect. 57-32=25",
      set:27
   },
   2081:{  
      question_tag:"L1MALP27Q2",
      code:"2081",
      title:"Maths Q54",
      learner_question:"47-21=? \r\n1. 24 \r\n2. 25 \r\n3. 26",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 47-21= 26",
      incorrectAnswerResponse:"Incorrect. 47-21= 26",
      set:27
   },
   2082:{  
      question_tag:"L1MALP28QG",
      code:"2082",
      title:"Maths Class Q28",
      learner_question:"\r\n1. 52 \r\n2. 54 \r\n3. 56",
      question:"Write the following on the board: 93 - 41 Say: 93 minus 4\r\n1. Enter the answer on your phone.",
      answer:"1",
      correctAnswerResponse:":) Correct! 93-41=52",
      incorrectAnswerResponse:"Incorrect. 93-41=52",
      set:28
   },
   2083:{  
      question_tag:"L1MALP28Q1",
      code:"2083",
      title:"Maths Q55",
      learner_question:"18-12=? \r\n1. 30 \r\n2. 6 \r\n3. 10",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 18-12=6",
      incorrectAnswerResponse:"Incorrect. 18-12=6",
      set:28
   },
   2084:{  
      question_tag:"L1MALP28Q2",
      code:"2084",
      title:"Maths Q56",
      learner_question:"65-13=? \r\n1. 52 \r\n2. 58 \r\n3. 87",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 65-13= 52",
      incorrectAnswerResponse:"Incorrect. 65-13= 52",
      set:28
   },
   2085:{  
      question_tag:"L1MALP29QG",
      code:"2085",
      title:"Maths Class Q29",
      learner_question:"\r\n1. $105 \r\n2. $65 \r\n3. $55",
      question:"Say: Sonie had 80 dollars. She spent 25 dollars on food. How much money does Sonie have now? Enter the number of the correct answer 1, 2 or \r\n3. ",
      answer:"3",
      correctAnswerResponse:":) Correct! 80-25=55",
      incorrectAnswerResponse:"Incorrect. 80-25=55",
      set:29
   },
   2086:{  
      question_tag:"L1MALP29Q1",
      code:"2086",
      title:"Maths Q57",
      learner_question:"56-22= ? \r\n1. 24 \r\n2. 34 \r\n3. 22",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 56-22= 34",
      incorrectAnswerResponse:"Incorrect. 56-22= 34",
      set:29
   },
   2087:{  
      question_tag:"L1MALP29Q2",
      code:"2087",
      title:"Maths Q58",
      learner_question:"34-14= ? \r\n1. 24 \r\n2. 20 \r\n3. 10",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 34-14=20",
      incorrectAnswerResponse:"Incorrect. 34-14=20",
      set:29
   },
   2088:{  
      question_tag:"L1MALP30QG",
      code:"2088",
      title:"Maths Class Q30",
      learner_question:"\r\n1. 8 eggs \r\n2. 32 eggs \r\n3. No eggs",
      question:"Say: Janet has 20 eggs. She eats 12 eggs. How many eggs does Janet have now? Enter the number of the correct answer 1, 2 or \r\n3. ",
      answer:"1",
      correctAnswerResponse:":) Correct! 20-12=8",
      incorrectAnswerResponse:"Incorrect. 20-12=8",
      set:30
   },
   2089:{  
      question_tag:"L1MALP30Q1",
      code:"2089",
      title:"Maths Q59",
      learner_question:"77-22=? \r\n1. 33 \r\n2. 44 \r\n3. 55",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 77-22=55",
      incorrectAnswerResponse:"Incorrect. 77-22=55",
      set:30
   },
   2090:{  
      question_tag:"L1MALP30Q2",
      code:"2090",
      title:"Maths Q60",
      learner_question:"64+23=? \r\n1. 41 \r\n2. 77 \r\n3. 87",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 64+23=87",
      incorrectAnswerResponse:"Incorrect. 64+23=87",
      set:30
   },
   2091:{  
      question_tag:"L1MALP31QG",
      code:"2091",
      title:"Maths Class Q31",
      learner_question:"\r\n1. 80 \r\n2. 90 \r\n3. 84",
      question:"Write the following on the board: 57 + 33 Say: 57 Plus 3\r\n3. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 57+33=90",
      incorrectAnswerResponse:"Incorrect. 57+33=90",
      set:31
   },
   2092:{  
      question_tag:"L1MALP31Q1",
      code:"2092",
      title:"Maths Q61",
      learner_question:"25+45=? \r\n1. 80 \r\n2. 85 \r\n3. 70",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 25+45=70",
      incorrectAnswerResponse:"Incorrect. 25+45=70",
      set:31
   },
   2093:{  
      question_tag:"L1MALP31Q2",
      code:"2093",
      title:"Maths Q62",
      learner_question:"48+13=? \r\n1. 71 \r\n2. 62 \r\n3. 61",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 48+13=61",
      incorrectAnswerResponse:"Incorrect. 48+13=61",
      set:31
   },
   2094:{  
      question_tag:"L1MALP32QG",
      code:"2094",
      title:"Maths Class Q32",
      learner_question:"\r\n1. 92 \r\n2. 4 \r\n3. 82",
      question:"Write the following on the board: 48 +44 Say: 48 plus 44. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 48+44=92",
      incorrectAnswerResponse:"Incorrect. 48+44=92",
      set:32
   },
   2095:{  
      question_tag:"L1MALP32Q1",
      code:"2095",
      title:"Maths Q63",
      learner_question:"18+38=? \r\n1. 48 \r\n2. 56 \r\n3. 58",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 18+38= 56",
      incorrectAnswerResponse:"Incorrect. 18+38= 56",
      set:32
   },
   2096:{  
      question_tag:"L1MALP32Q2",
      code:"2096",
      title:"Maths Q64",
      learner_question:"26+56=? \r\n1. 82 \r\n2. 30 \r\n3. 72",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 26+56=82",
      incorrectAnswerResponse:"Incorrect. 26+56=82",
      set:32
   },
   2097:{  
      question_tag:"L1MALP33QG",
      code:"2097",
      title:"Maths Class Q33",
      learner_question:"\r\n1. 34 \r\n2. 36 \r\n3. 44",
      question:"Write the following on the board: 18 12 +14 Say: 18 plus 12 plus 14. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 18+12+14=44",
      incorrectAnswerResponse:"Incorrect. 18+12+14=44",
      set:33
   },
   2098:{  
      question_tag:"L1MALP33Q1",
      code:"2098",
      title:"Maths Q65",
      learner_question:"8+12+15=? \r\n1. 35 \r\n2. 25 \r\n3. 33",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 8+12+15=35",
      incorrectAnswerResponse:"Incorrect. 8+12+15=35",
      set:33
   },
   2099:{  
      question_tag:"L1MALP33Q2",
      code:"2099",
      title:"Maths Q66",
      learner_question:"23+11+7=? \r\n1. 31 \r\n2. 41 \r\n3. 51",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 23+11+7=41",
      incorrectAnswerResponse:"Incorrect. 23+11+7=41",
      set:33
   },
   2100:{  
      question_tag:"L1MALP34QG",
      code:"2100",
      title:"Maths Class Q34",
      learner_question:"\r\n1. 6 \r\n2. 18 \r\n3. 8",
      question:"Write the following on the board: 24 - 18 Say: 24 minus 18. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 24-18= 6",
      incorrectAnswerResponse:"Incorrect. 24-18= 6",
      set:34
   },
   2101:{  
      question_tag:"L1MALP34Q1",
      code:"2101",
      title:"Maths Q67",
      learner_question:"32-13=? \r\n1. 11 \r\n2. 21 \r\n3. 19",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 32-13=19",
      incorrectAnswerResponse:"Incorrect. 32-13=19",
      set:34
   },
   2102:{  
      question_tag:"L1MALP34Q2",
      code:"2102",
      title:"Maths Q68",
      learner_question:"41-23=? \r\n1. 12 \r\n2. 18 \r\n3. 22",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 41-23=18",
      incorrectAnswerResponse:"Incorrect. 41-23=18",
      set:34
   },
   2103:{  
      question_tag:"L1MALP35QG",
      code:"2103",
      title:"Maths Class Q35",
      learner_question:"\r\n1. 27 \r\n2. 37 \r\n3. 33",
      question:"Write the following on the board: 54 - 27 Say: 54 minus 27. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 54-27=27",
      incorrectAnswerResponse:"Incorrect. 54-27=27",
      set:35
   },
   2104:{  
      question_tag:"L1MALP35Q1",
      code:"2104",
      title:"Maths Q69",
      learner_question:"83-47=? \r\n1. 36 \r\n2. 46 \r\n3. 26",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 83-47=36",
      incorrectAnswerResponse:"Incorrect. 83-47=36",
      set:35
   },
   2105:{  
      question_tag:"L1MALP35Q2",
      code:"2105",
      title:"Maths Q70",
      learner_question:"67-28=? \r\n1. 49 \r\n2. 25 \r\n3. 39",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 67-28=39",
      incorrectAnswerResponse:"Incorrect. 67-28=39",
      set:35
   },
   2106:{  
      question_tag:"L1MALP36QG",
      code:"2106",
      title:"Maths Class Q36",
      learner_question:"\r\n1. 36 \r\n2. 37 \r\n3. 38",
      question:"Write the following on the board: 67 - 29 Say: 67 minus 29. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 67+29=38",
      incorrectAnswerResponse:"Incorrect. 67+29=38",
      set:36
   },
   2107:{  
      question_tag:"L1MALP36Q1",
      code:"2107",
      title:"Maths Q71",
      learner_question:"45-38=? \r\n1. 15 \r\n2. 17 \r\n3. 7",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 45-38=7",
      incorrectAnswerResponse:"Incorrect. 45-38=7",
      set:36
   },
   2108:{  
      question_tag:"L1MALP36Q2",
      code:"2108",
      title:"Maths Q72",
      learner_question:"65-37=? \r\n1. 18 \r\n2. 28 \r\n3. 38",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 65-37=28",
      incorrectAnswerResponse:"Incorrect. 65-37=28",
      set:36
   },
   2109:{  
      question_tag:"L1MALP37QG",
      code:"2109",
      title:"Maths Class Q37",
      learner_question:"\r\n1. $15 \r\n2. $55 \r\n3. $25",
      question:"Say: Pinky has 35 dollars. She spends 20 dollars at a shop. How much money does Pinky have now. Enter the number of the correct answer 1, 2 or \r\n3. ",
      answer:"1",
      correctAnswerResponse:":) Correct! 35-20= 15",
      incorrectAnswerResponse:"Incorrect. 35-20= 15",
      set:37
   },
   2110:{  
      question_tag:"L1MALP37Q1",
      code:"2110",
      title:"Maths Q73",
      learner_question:"24+47=? \r\n1. 71 \r\n2. 81 \r\n3. 72",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 24+47= 71",
      incorrectAnswerResponse:"Incorrect. 24+47= 71",
      set:37
   },
   2111:{  
      question_tag:"L1MALP37Q2",
      code:"2111",
      title:"Maths Q74",
      learner_question:"65-36=? \r\n1. 39 \r\n2. 29 \r\n3. 19",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 65-36= 29",
      incorrectAnswerResponse:"Incorrect. 65-36= 29",
      set:37
   },
   2112:{  
      question_tag:"L1MALP38QG",
      code:"2112",
      title:"Maths Class Q38",
      learner_question:"\r\n1. 70 \r\n2. 10 \r\n3. 43",
      question:"Say: Ruth has 40 pencils. She gets 30 pencils from a friend. How many pencils does Ruth have now. Enter the number of the correct answer 1, 2 or \r\n3. ",
      answer:"1",
      correctAnswerResponse:":) Correct! 40+30=70",
      incorrectAnswerResponse:"Incorrect. 40+30=70",
      set:38
   },
   2113:{  
      question_tag:"L1MALP38Q1",
      code:"2113",
      title:"Maths Q75",
      learner_question:"8-8=? \r\n1. 8 \r\n2. 16 \r\n3. 0",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 8-8= 0",
      incorrectAnswerResponse:"Incorrect. 8-8= 0",
      set:38
   },
   2114:{  
      question_tag:"L1MALP38Q2",
      code:"2114",
      title:"Maths Q76",
      learner_question:"81-62=? \r\n1. 9 \r\n2. 19 \r\n3. 12",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 81-62=19",
      incorrectAnswerResponse:"Incorrect. 81-62=19",
      set:38
   },
   2115:{  
      question_tag:"L1MALP39QG",
      code:"2115",
      title:"Maths Class Q39",
      learner_question:"\r\n1. 8 \r\n2. 2 \r\n3. 15",
      question:"Write the following on the board: 5 x 3=? Say: What is 5 times 3? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 5 x 3= 15",
      incorrectAnswerResponse:"Incorrect. 5 x 3= 15",
      set:39
   },
   2116:{  
      question_tag:"L1MALP39Q1",
      code:"2116",
      title:"Maths Q77",
      learner_question:"4 x 3=? \r\n1. 7 \r\n2. 12 \r\n3. 14",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 4 x 3= 12",
      incorrectAnswerResponse:"Incorrect. 4 x 3= 12",
      set:39
   },
   2117:{  
      question_tag:"L1MALP39Q2",
      code:"2117",
      title:"Maths Q78",
      learner_question:"2 x 6=? \r\n1. 12 \r\n2. 8 \r\n3. 4",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 2 x 6= 12",
      incorrectAnswerResponse:"Incorrect. 2 x 6= 12",
      set:39
   },
   2118:{  
      question_tag:"L1MALP40QG",
      code:"2118",
      title:"Maths Class Q40",
      learner_question:"\r\n1. 9 \r\n2. 90 \r\n3. 0",
      question:"Say: What is 9 times 0? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 9 x 0= 0. All numbers x 0= 0",
      incorrectAnswerResponse:"Incorrect. 9 x 0= 0. All numbers x 0= 0",
      set:40
   },
   2119:{  
      question_tag:"L1MALP40Q1",
      code:"2119",
      title:"Maths Q79",
      learner_question:"25 x 0=? \r\n1. 25 \r\n2. 250 \r\n3. 0",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 25 x 0= 0. All numbers x 0= 0",
      incorrectAnswerResponse:"Incorrect. 25 x 0= 0. All numbers x 0= 0",
      set:40
   },
   2120:{  
      question_tag:"L1MALP40Q2",
      code:"2120",
      title:"Maths Q80",
      learner_question:"9 x 9=? \r\n1. 81 \r\n2. 99 \r\n3. 18",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 9 x 9= 81",
      incorrectAnswerResponse:"Incorrect. 9 x 9= 81",
      set:40
   },
   2121:{  
      question_tag:"L1MALP41QG",
      code:"2121",
      title:"Maths Class Q41",
      learner_question:"\r\n1. 10 \r\n2. 9 \r\n3. 8",
      question:"Say: What is 9 times 1? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 9 x 1= 9",
      incorrectAnswerResponse:"Incorrect. 9 x 1= 9",
      set:41
   },
   2122:{  
      question_tag:"L1MALP41Q1",
      code:"2122",
      title:"Maths Q81",
      learner_question:"13 x 1=? \r\n1. 13 \r\n2. 14 \r\n3. 15",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 13 x 1= 13",
      incorrectAnswerResponse:"Incorrect. 13 x 1= 13",
      set:41
   },
   2123:{  
      question_tag:"L1MALP41Q2",
      code:"2123",
      title:"Maths Q82",
      learner_question:"6 x 6=? \r\n1. 12 \r\n2. 1 \r\n3. 36",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 6 x 6=36",
      incorrectAnswerResponse:"Incorrect. 6 x 6=36",
      set:41
   },
   2124:{  
      question_tag:"L1MALP42QG",
      code:"2124",
      title:"Maths Class Q42",
      learner_question:"\r\n1. 7 \r\n2. 21 \r\n3. 28",
      question:"How many days are in 4 weeks? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 7x4= 28",
      incorrectAnswerResponse:"Incorrect. 7x4= 28",
      set:42
   },
   2125:{  
      question_tag:"L1MALP42Q1",
      code:"2125",
      title:"Maths Q83",
      learner_question:"6 x 5=? \r\n1. 11 \r\n2. 30 \r\n3. 25",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 6 x 5= 30",
      incorrectAnswerResponse:"Incorrect. 6 x 5= 30",
      set:42
   },
   2126:{  
      question_tag:"L1MALP42Q2",
      code:"2126",
      title:"Maths Q84",
      learner_question:"3 x 7=? \r\n1. 21 \r\n2. 22 \r\n3. 10",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 3 x 7=21",
      incorrectAnswerResponse:"Incorrect. 3 x 7=21",
      set:42
   },
   2127:{  
      question_tag:"L1MALP43QG",
      code:"2127",
      title:"Maths Class Q43",
      learner_question:"\r\n1. 45 \r\n2. 50 \r\n3. 75",
      question:"Write the following on the board: 25 x 2 Say: What is 25 times \r\n2. Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 25 x 2= 50",
      incorrectAnswerResponse:"Incorrect. 25 x 2= 50",
      set:43
   },
   2128:{  
      question_tag:"L1MALP43Q1",
      code:"2128",
      title:"Maths Q85",
      learner_question:"32 x 3 =? \r\n1. 66 \r\n2. 86 \r\n3. 96",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 32 x 3= 96",
      incorrectAnswerResponse:"Incorrect. 32 x 3= 96",
      set:43
   },
   2129:{  
      question_tag:"L1MALP43Q2",
      code:"2129",
      title:"Maths Q86",
      learner_question:"21 x 4=? \r\n1. 88 \r\n2. 25 \r\n3. 84",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 21 x 4= 84",
      incorrectAnswerResponse:"Incorrect. 21 x 4= 84",
      set:43
   },
   2130:{  
      question_tag:"L1MALP44QG",
      code:"2130",
      title:"Maths Class Q44",
      learner_question:"\r\n1. 14 \r\n2. 30 \r\n3. 33",
      question:"Say: Miriam gives her children 11 books each. She has three children. How many books did she give in total? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 11 x 3= 33 books.",
      incorrectAnswerResponse:"Incorrect. 11 x 3= 33 books.",
      set:44
   },
   2131:{  
      question_tag:"L1MALP44Q1",
      code:"2131",
      title:"Maths Q87",
      learner_question:"13 x 2=? \r\n1. 26 \r\n2. 15 \r\n3. 30",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 13 x 2 =26",
      incorrectAnswerResponse:"Incorrect. 13 x 2 =26",
      set:44
   },
   2132:{  
      question_tag:"L1MALP44Q2",
      code:"2132",
      title:"Maths Q88",
      learner_question:"22 x 3=? \r\n1. 66 \r\n2. 76 \r\n3. 56",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 22 x 3= 66",
      incorrectAnswerResponse:"Incorrect. 22 x 3= 66",
      set:44
   },
   2133:{  
      question_tag:"L1MALP45QG",
      code:"2133",
      title:"Maths Class Q45",
      learner_question:"\r\n1. 27 \r\n2. 6 \r\n3. 3",
      question:"Write the following on the board: 9÷3=? Say: Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 9÷3=3",
      incorrectAnswerResponse:"Incorrect. 9÷3=3",
      set:45
   },
   2134:{  
      question_tag:"L1MALP45Q1",
      code:"2134",
      title:"Maths Q89",
      learner_question:"12÷4=? \r\n1. 8 \r\n2. 16 \r\n3. 3",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 12÷4=3",
      incorrectAnswerResponse:"Incorrect. 12÷4=3",
      set:45
   },
   2135:{  
      question_tag:"L1MALP45Q2",
      code:"2135",
      title:"Maths Q90",
      learner_question:"8÷2=? \r\n1. 4 \r\n2. 2 \r\n3. 3",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 8÷2=4",
      incorrectAnswerResponse:"Incorrect. 8÷2=4",
      set:45
   },
   2136:{  
      question_tag:"L1MALP46QG",
      code:"2136",
      title:"Maths Class Q46",
      learner_question:"\r\n1. 60 bags \r\n2. 6 bags \r\n3. 10 bags",
      question:"Say: Mark has $60 dollars to buy rice. Each bag of rice costs 10 dollars. How many bags of rice can Mark buy? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 60÷10= 6",
      incorrectAnswerResponse:"Incorrect. 60÷10= 6",
      set:46
   },
   2137:{  
      question_tag:"L1MALP46Q1",
      code:"2137",
      title:"Maths Q91",
      learner_question:"25 ÷ 5=? \r\n1. 20 \r\n2. 15 \r\n3. 5",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 25 ÷ 5= 5",
      incorrectAnswerResponse:"Incorrect. 25 ÷ 5= 5",
      set:46
   },
   2138:{  
      question_tag:"L1MALP46Q2",
      code:"2138",
      title:"Maths Q92",
      learner_question:"24 ÷ 6=? \r\n1. 18 \r\n2. 6 \r\n3. 4",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 24 ÷ 6= 4",
      incorrectAnswerResponse:"Incorrect. 24 ÷ 6= 4",
      set:46
   },
   2139:{  
      question_tag:"L1MALP47QG",
      code:"2139",
      title:"Maths Class Q47",
      learner_question:"\r\n1. 12 oranges \r\n2. 7 oranges \r\n3. 1 orange",
      question:"Say: Naomi has 3 bags. Each bag has 4 oranges. How many oranges does Naomi have? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 3 x 4= 12",
      incorrectAnswerResponse:"Incorrect. 3 x 4= 12",
      set:47
   },
   2140:{  
      question_tag:"L1MALP47Q1",
      code:"2140",
      title:"Maths Q93",
      learner_question:"23 x 0=? \r\n1. 23 \r\n2. 0 \r\n3. 230",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 23 x 0= 0",
      incorrectAnswerResponse:"Incorrect. 23 x 0= 0",
      set:47
   },
   2141:{  
      question_tag:"L1MALP47Q2",
      code:"2141",
      title:"Maths Q94",
      learner_question:"12 ÷ 2=? \r\n1. 6 \r\n2. 10 \r\n2. 24",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 12 ÷ 2= 6",
      incorrectAnswerResponse:"Incorrect. 12 ÷ 2= 6",
      set:47
   },
   2142:{  
      question_tag:"L1MALP48QG",
      code:"2142",
      title:"Maths Class Q48",
      learner_question:"\r\n1. < \r\n2. > \r\n3. =",
      question:"Write the following on the board: 1/3 ___ 2/3 Say: Is one third Greater than, less than or equal to two thirds? Enter the correct symbol.",
      answer:"1",
      correctAnswerResponse:":) Correct! 1/3 < 2/3",
      incorrectAnswerResponse:"Incorrect. 1/3 < 2/3",
      set:48
   },
   2143:{  
      question_tag:"L1MALP48Q1",
      code:"2143",
      title:"Maths Q95",
      learner_question:"2/3 ____ 1/3 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 2/3 > 1/3",
      incorrectAnswerResponse:"Incorrect. 2/3 > 1/3",
      set:48
   },
   2144:{  
      question_tag:"L1MALP48Q2",
      code:"2144",
      title:"Maths Q96",
      learner_question:"1/4 ____ 3/4 \r\n1. < \r\n2. > \r\n3. =",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 1/4 < 3/4",
      incorrectAnswerResponse:"Incorrect. 1/4 < 3/4",
      set:48
   },
   2145:{  
      question_tag:"L1MALP49QG",
      code:"2145",
      title:"Maths Class Q49",
      learner_question:"What fraction are 'A'? \r\n1. 1/4 \r\n2. 1/3 \r\n3. 1/2",
      question:"Write the following on the board: (ABBB) Say: I wrote four letters on the board. What fraction of the letters are letter A?",
      answer:"1",
      correctAnswerResponse:":) Correct! (ABBB) 1/4 of the letters are A.",
      incorrectAnswerResponse:"Incorrect. (ABBB) 1/4 of the letters are A.",
      set:49
   },
   2146:{  
      question_tag:"L1MALP49Q1",
      code:"2146",
      title:"Maths Q97",
      learner_question:"What fraction are A? (AABBB) \r\n1. 2/3 \r\n2. 1/5 \r\n3. 2/5",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! (AABBB) 2/5 of the letters are A.",
      incorrectAnswerResponse:"Incorrect. (AABBB) 2/5 of the letters are A.",
      set:49
   },
   2147:{  
      question_tag:"L1MALP49Q2",
      code:"2147",
      title:"Maths Q98",
      learner_question:"What fraction are A? (ABB) \r\n1. 1/2 \r\n2. 1/3 \r\n3. 1/4",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! (ABB) 1/3 of the letters are A.",
      incorrectAnswerResponse:"Incorrect. (ABB) 1/3 of the letters are A.",
      set:49
   },
   2148:{  
      question_tag:"L1MALP50QG",
      code:"2148",
      title:"Maths Class Q50",
      learner_question:"What fraction are O? \r\n1. 1/5 \r\n2. 2/5 \r\n3. 1/2",
      question:"Write the following on the board: (OOLLL) Say: I wrote four letters on the board. What fraction of the letters are letter O?",
      answer:"2",
      correctAnswerResponse:":) Correct! (OOLLL) 2/5 of the letters are O.",
      incorrectAnswerResponse:"Incorrect. (OOLLL) 2/5 of the letters are O.",
      set:50
   },
   2149:{  
      question_tag:"L1MALP50Q1",
      code:"2149",
      title:"Maths Q99",
      learner_question:"What fraction are O? (OOOL) \r\n1. 1/4 \r\n2. 3/5 \r\n3. 3/4",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! (OOOL) 3/4 of the letters are O.",
      incorrectAnswerResponse:"Incorrect. (OOOL) 3/4 of the letters are O.",
      set:50
   },
   2150:{  
      question_tag:"L1MALP50Q2",
      code:"2150",
      title:"Maths Q100",
      learner_question:"What fraction are O? (OLL) \r\n1. 1/4 \r\n2. 1/3 \r\n3. 3/4",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! (OLL) 1/3 of the letters are O.",
      incorrectAnswerResponse:"Incorrect. (OLL) 1/3 of the letters are O.",
      set:50
   },
   2151:{  
      question_tag:"L1MALP51QG",
      code:"2151",
      title:"Maths Class Q51",
      learner_question:"\r\n1. 41 \r\n2. 43 \r\n2. 42",
      question:"Write the following on the board: 23 +18 Say: Let's review. What is 23 plus 18? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"1",
      correctAnswerResponse:":) Correct! 23 + 18= 41",
      incorrectAnswerResponse:"Incorrect. 23 + 18= 41",
      set:51
   },
   2152:{  
      question_tag:"L1MALP51Q1",
      code:"2152",
      title:"Maths Q101",
      learner_question:"23 x 1 =? \r\n1. 231 \r\n2. 23 \r\n3. 24",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 23 x 1= 23",
      incorrectAnswerResponse:"Incorrect. 23 x 1= 23",
      set:51
   },
   2153:{  
      question_tag:"L1MALP51Q2",
      code:"2153",
      title:"Maths Q102",
      learner_question:"15÷5=? \r\n1. 10 \r\n2. 5 \r\n3. 3",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 15 ÷ 5= 3",
      incorrectAnswerResponse:"Incorrect. 15 ÷ 5= 3",
      set:51
   },
   2154:{  
      question_tag:"L1MALP52QG",
      code:"2154",
      title:"Maths Class Q52",
      learner_question:"\r\n1. $10 \r\n2. $3 \r\n3. $15",
      question:"Say: Ellen buys shirts for 10 dollars. He sells them for 15 dollars. He sells 3 shirts. How much does he make? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! (15-10) x 3= 5x3=15",
      incorrectAnswerResponse:"Incorrect. (15-10) x 3= 5x3=15",
      set:52
   },
   2155:{  
      question_tag:"L1MALP52Q1",
      code:"2155",
      title:"Maths Q103",
      learner_question:"Pam buys pens for LD $50. She sells pens for LD $80. She sells 2 pens. How much does she make? \r\n1. LD $60 \r\n2. LD $80 \r\n3. LD $100",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! LD $30 x 2 =LD $60",
      incorrectAnswerResponse:"Incorrect. LD $30 x 2 =LD $60",
      set:52
   },
   2156:{  
      question_tag:"L1MALP52Q2",
      code:"2156",
      title:"Maths Q104",
      learner_question:"Ben buys mats for $5. He sells mats for $7. He sells 10 mats. How much does he make? \r\n1. $10 \r\n2. $20 \r\n3. $30",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! ($7-$5)x10=2 x $10= $20",
      incorrectAnswerResponse:"Incorrect. ($7-$5)x10=2 x $10= $20",
      set:52
   },
   2157:{  
      question_tag:"L1MALP53QG",
      code:"2157",
      title:"Maths Class Q53",
      learner_question:"\r\n1. 24 \r\n2. 48 \r\n3. 12",
      question:"Say: Charles has 4 bags of pens. There are 12 pens in each bag. How many pens does Charles have? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"2",
      correctAnswerResponse:":) Correct! 4 x 12= 48",
      incorrectAnswerResponse:"Incorrect. 4 x 12= 48",
      set:53
   },
   2158:{  
      question_tag:"L1MALP53Q1",
      code:"2158",
      title:"Maths Q105",
      learner_question:"34 x 2=? \r\n1. 68 \r\n2. 17 \r\n3. 36",
      question:"",
      answer:"1",
      correctAnswerResponse:":) Correct! 34 x 2= 68",
      incorrectAnswerResponse:"Incorrect. 34 x 2= 68",
      set:53
   },
   2159:{  
      question_tag:"L1MALP53Q2",
      code:"2159",
      title:"Maths Q106",
      learner_question:"18÷9=? \r\n1. 9 \r\n2. 2 \r\n3. 27",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 18÷9=2",
      incorrectAnswerResponse:"Incorrect. 18÷9=2",
      set:53
   },
   2160:{  
      question_tag:"L1MALP54QG",
      code:"2160",
      title:"Maths Class Q54",
      learner_question:"\r\n1. $15 \r\n2. $3 \r\n3. $6",
      question:"Say: Sarah has 18 dollars. She gives the money to her 3 children. How much does each child get? Enter the number of the correct answer 1, 2 or \r\n3.",
      answer:"3",
      correctAnswerResponse:":) Correct! 18÷3=6",
      incorrectAnswerResponse:"Incorrect. 18÷3=6",
      set:54
   },
   2161:{  
      question_tag:"L1MALP54Q1",
      code:"2161",
      title:"Maths Q107",
      learner_question:"6 x 7= ? \r\n1. 13 \r\n2. 35 \r\n3. 42",
      question:"",
      answer:"3",
      correctAnswerResponse:":) Correct! 6 x 7= 42",
      incorrectAnswerResponse:"Incorrect. 6 x 7= 42",
      set:54
   },
   2162:{  
      question_tag:"L1MALP54Q2",
      code:"2162",
      title:"Maths Q108",
      learner_question:"14 ÷ 7=? \r\n1. 21 \r\n2. 2 \r\n3. 7",
      question:"",
      answer:"2",
      correctAnswerResponse:":) Correct! 14 ÷ 7=2",
      incorrectAnswerResponse:"Incorrect. 14 ÷ 7=2",
      set:54
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
  	question: "Write: 328 Say: Which number is in the 'tens' place? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In 328, the number '2' is in the tens place.",
  	incorrectAnswerResponse: "Incorrect. In 328, the number '2' is in the tens place.",
  	set: 2
  	},

 	4005:{
  	question_tag: "L2MALP2Q1",
   code: "4005",
   title: "Num Q3",
   learner_question: "Which digit is in the 'hundreds' place of 587? \r\n1. 5 \r\n2. 8 \r\n3. 7",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: ":) Correct! In 587, the number '5' is in the hundreds place.",
  	incorrectAnswerResponse: "Incorrect. In 587, the number '5' is in the hundreds place.",
  	set: 2
  	},

 	4006:{
  	question_tag: "L2MALP2Q2",
   code: "4006",
   title: "Num Q4",
   learner_question: "Which digit is in the 'ones' place of 943? Enter the single digit number. \r\n1. 9 \r\n2. 4 \r\n3. 3",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 943, the number '3' is in the ones place.",
  	incorrectAnswerResponse: "Incorrect. In 943, the number '3' is in the ones place.",
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
  	question: "Write: 3,728 Say: Which number is in the 'thousands' place? Enter the number of the correct answer 1, 2 or \r\n3.",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 3,728, the number '3' is in the thousands place.",
  	incorrectAnswerResponse: "Incorrect. In 3,728, the number '3' is in the thousands place.",
  	set: 4
  	},

 	4011:{
  	question_tag: "L2MALP4Q1",
   code: "4011",
   title: "Num Q7",
   learner_question: "Which digit is in the 'hundreds' place of 1,587? \r\n1. 1 \r\n2. 5 \r\n3. 7",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! In 1,587, the number '5' is in the hundreds place.",
  	incorrectAnswerResponse: "Incorrect. In 1,587, the number '5' is in the hundreds place.",
  	set: 4
  	},

 	4012:{
  	question_tag: "L2MALP4Q2",
   code: "4012",
   title: "Num Q8",
   learner_question: "Which digit is in the 'ones' place of 9,543? Enter the single digit number. \r\n1. 9 \r\n2. 5 \r\n3. 3 ",
  	question: "",
  	answer: "3",
  	correctAnswerResponse: ":) Correct! In 9,543, the number '3' is in the ones place.",
  	incorrectAnswerResponse: "Incorrect. In 9,543, the number '3' is in the ones place.",
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
  	correctAnswerResponse: "Correct! The pattern skip counted by 3's. 9,12,15,18,21,24",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 3's. 9,12,15,18,21,24",
  	set: 11
  	},

 	4032:{
  	question_tag: "L2MALP11Q1",
   code: "4032",
   title: "Num Q21",
   learner_question: "What number is missing? 10,15,20,____,30 \r\n1. 25 \r\n2. 21 \r\n3. 29",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! The pattern skip counted by 5's. 10,15,20,25,30.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 5's. 10,15,20,25,30.",
  	set: 11
  	},

 	4033:{
  	question_tag: "L2MALP11Q2",
   code: "4033",
   title: "Num Q22",
   learner_question: "What numbers are missing? 10, 12, 14, ___, ___ \r\n1. 16, 18 \r\n2. 15, 18 \r\n3. 15, 16",
  	question: "",
  	answer: "1",
  	correctAnswerResponse: "Correct! The pattern skip counted by 2's. 10,12,14,16,18.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 2's. 10,12,14,16,18.",
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
  	correctAnswerResponse: "Correct! The pattern skip counted by 4's. 8,12,16,20,24",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 4's. 8,12,16,20,24",
  	set: 12
  	},

 	4036:{
  	question_tag: "L2MALP12Q2",
   code: "4036",
   title: "Num Q24",
   learner_question: "What numbers are missing? ____, 7,9,11,____ \r\n1. 6, 12 \r\n2. 5, 13 \r\n3. 4, 14",
  	question: "",
  	answer: "2",
  	correctAnswerResponse: "Correct! The pattern skip counted by 3's. 5,7,9,11,13",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 3's. 5,7,9,11,13",
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
  	correctAnswerResponse: "Correct! The pattern skip counted by 2's. 8,10,12,14,16.",
  	incorrectAnswerResponse: "Correct! The pattern skip counted by 2's. 8,10,12,14,16.",
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
  	question: "Say: Flomo has 35 dollars. She spends 20 dollars at a shop. How much money does Flomo have now. Enter the answer on your phone. Do NOT add the '$' symbol. ",
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
   learner_question: "What fraction are 'A'? \r\n1. 1/4 \r\n2. 1/3 \r\n3. 1/2",
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
  	question: "Write: 3/5 Say: Which is a 'like' fraction to three fifths? Enter the number of the correct answer.",
  	answer: "2",
  	correctAnswerResponse: ":) Correct! 3/5 and 2/5 are 'like' fractions. They have the same denominator.",
  	incorrectAnswerResponse: "Incorrect. 3/5 and 2/5 are 'like' fractions. They have the same denominator.",
  	set: 46
  	},

 	4137:{
  	question_tag: "L2MALP46Q1",
   code: "4137",
   title: "Num Q91",
   learner_question: "Which is a 'like' fraction with 5/6? \r\n1. (3/5) \r\n2. (1/6) \r\n3. (6/5)",
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
   learner_question: "Which is a 'like' fraction with 3/7? \r\n1. (7/3) \r\n2. (1/3) \r\n3. (6/7)",
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
  	question: "Say: What does it mean to 'deposit' money at the bank. Enter the number of the correct answer on your phone.",
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
  	correctAnswerResponse: ":) Correct! Taking money from the bank is called a 'withdrawal'.",
  	incorrectAnswerResponse: "Incorrect. Taking money from the bank is called a 'withdrawal'.",
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
   learner_question: "Ruth's shop needs more material to make dresses. Which form will help her? \r\n1. order form \r\n2. stock list \r\n3. cash book",
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
   learner_question: "Jane's income for May was $1000. Her profit was only $100. What were her expenses? \r\n1. $900 \r\n2. $1,100 \r\n2. $100",
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
  	}

};
	
	//return false if user submits a non existent question...
	var jsonObject = level1Numeracy[questionCode];
	if (typeof jsonObject === "undefined") 
    	return false
	
	return jsonObject;

};



