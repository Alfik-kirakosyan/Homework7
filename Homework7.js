//Homework 7

const employees = [
    {
    "firstName": "Arabela",
    "lastName": "Fockes",
    "email": "afockes0@wired.com",
    "salary": "$6.18",
    "isEngineer": true,
    "gender": "Female"
    },
    {
    "firstName": "Bryant",
    "lastName": "Marchi",
    "email": "bmarchi1@theatlantic.com",
    "salary": "$8.05",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Batholomew",
    "lastName": "Eim",
    "email": "beim2@goodreads.com",
    "salary": "$7.26",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Ritchie",
    "lastName": "Ferreira",
    "email": "rferreira3@booking.com",
    "salary": "$4.07",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Kaylyn",
    "lastName": "Ivain",
    "email": "kivain4@gmpg.org",
    "salary": "$5.89",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Wilhelmina",
    "lastName": "Portigall",
    "email": "wportigall5@plala.or.jp",
    "salary": "$2.06",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Rouvin",
    "lastName": "Gillcrist",
    "email": "rgillcrist6@aol.com",
    "salary": "$7.29",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Flemming",
    "lastName": "Scroggins",
    "email": "fscroggins7@msu.edu",
    "salary": "$7.54",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Sallee",
    "lastName": "Schlagh",
    "email": "sschlagh8@reuters.com",
    "salary": "$2.24",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Roxine",
    "lastName": "Bedo",
    "email": "rbedo9@whitehouse.gov",
    "salary": "$6.47",
    "isEngineer": false,
    "gender": "Female"
    }
]


//Task 1

function fullNames(arr) {
	return arr.map(val => {
  	return (val.firstName + " " + val.lastName)
  }).toString()
}

//Task 2

function Salary(arr) {
	return arr.map(val => {
  	return `${ val.email}:  ${val.salary} `
  }).toString()
}

//Task 3

Array.prototype.myToString = function() {
  return this.reduce((acc, val, ind) => {
     return ind === 0 ? val : acc + ", " + val
  }, '') 
}

//Task 4

function emails(arr) {
	return arr.map(el => {
  	return el.email
  }).join("//")
}

//Task 5

function getEmailSalary(arr) {
	return arr.map(el => {
  	return `${ el.email}: ${el.salary }`
  }).join()
}

//Task 6

Array.prototype.myJoin = function(symb) {
	return this.reduce((acc, val, ind) => {
     return ind === 0 || symb === undefined ? acc + ", " + val : acc + symb + val
  }, '')
}

//Task 7

function reverseWithPop(arr) {
  let reversedArr = []
  while (arr.length > 0) {
    reversedArr.push(arr.pop())
  }
  return reversedArr
}

//Task 8

function checkPalindrome(str) {
  let poli = str.split("")
  while (poli.length > 0) {
    if (poli.pop() !== poli.shift()) {
      if (poli.pop() === undefined) {
        return "String is polindrome"
      }
      return "String isn't polindrome"
    }
  }
  return "String is polindrome"
}

//Task 9
Array.prototype.myPop = function(){
  var result = this[this.length-1];
  this.length = this.length-1
  return result;
 }

//Task 10

function evenDightsOfNum(num) {
	let result = []
	let numArr = String(num).split("").map((num)=>{
  return Number(num)
})
	numArr.map(val => {
  	return val % 2 === 0 ? result.push(val) : false
  })  
  return result
}

//Task 11

function arrCollections(arr1, arr2) {
	arr2.map(val => {
  	return arr1.push(val)
  })
  return arr1
}

//Task 12

Array.prototype.myPush = function(element) {
	this[this.length] = element
  return this.length
}

//Task 13

Array.prototype.myShift = function() {
	let result = this[0]
  
  for(let i = 0; i < this.length - 1; i++) {
  	this[i] = this[i + 1]
  }
  this.splice(-1)
  
	return result
}

//Task 14

Array.prototype.myUnshift = function(...args) {
	let m = [...args]
  
	this = [...args, this]
  
	return m[length - 1]
}

//Task 15

function concArr(arr1, arr2) {
	let result = arr1.concat(arr2)
  	
  return result.filter((el, ind) => {
  	return result.indexOf(el) === ind
  })
}

//Task 16

Array.prototype.myConcat = function(arr) {
  arr.map(val => {
  	return this.push(val)
  })
  
  return this
}

//Task 17

function fillMissingNumbers(arr) {
	let limit = arr[arr.length - 1]
	for(let i = 1; i < limit ; i++) {
  	if(arr.indexOf(i) === -1){
    	arr.splice(i - 1 , 0, i)
    }
  }
  return arr
}

//Task 18

function removeDuplicates(arr) {
  return arr.forEach((el, ind) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      arr.splice(ind, 1);
    }
  });
}

//Task 19

Array.prototype.mySplice = function( start, remove = this.length , insert ) {
  let removed = this.slice( start, start + remove );
  let temp = this.slice(0,start).concat( insert, this.slice( start + remove ) );
  this.length = 0;
  this.push.apply( this, temp );
  return removed;
};

//Task 20

function cloneArray(arr) {
	let clonedArray = arr.slice(0)
  return clonedArray
}

//Taask 21

function lastParameter(arr, n) {
  return arr.slice(arr.length - n, arr.length - n + 1)
}

//Task 22

function lastParameter(arr, n) {
  return arr.slice(n - 1, n )
}

//Task 23

Array.prototype.mySlice = function(arr, start, end) {
  var output = [];
  
  if (start === undefined) {
    start = 0
  }
  
  if (end === undefined) {
    end = arr.length
  }
  
  if (end < 0) {
    end = arr.length + end;
  }
  
  for (var i = start; i < end; i++) {
    output.push(arr[i])
  }
  
  return output;
}

//Task 24

function maxNumOfArr(arr) {
	let result = arr.sort((a,b) => b - a)
  return arr[0]
}

//Task 25

function maxNumOfArr(arr) {
	let result = arr.sort((a,b) => a - b)
  return arr[0]
}

//Task 26

function sortByName(arr) {
	return arr.map(val => {
  	return val.firstName
  }).sort((a, b) => a - b)
}

//Task 27

function sortArray(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

//Task 28

function isPolindrome(str) {
  return str == str.split('').reverse().join('');
}

//Task 29

function cloneArray(arr) {
	return arr.map(val => val)
}

//Task 30

function namesOfEmployees(arr) {
	return arr.map(val => val.firstName)
}

//Task 31

function cloneArray(arr) {
	return arr.filter(val => val)
}

//Task 32

function salaryFilter(n) {
	return employees.filter(val => (val.salary + "") > n )
}

//Task 33

Array.prototype.myFilter = function(callback){
 
  var arr = [];                        
  for(let i=0; i<this.length; i++)
  {
   if(callback(this[i]) == true)        
   {
    arr.push(this[i]);                  
   }
   
  } 
  return arr;                          
}

//Task 34

function totalSalary(arr) {
	return arr.reduce((acc, curr) => {
  	return acc + +curr.salary.slice(1)
  }, 0)
}

//Task 35

function emaildOfEmpl(arr) {
	return arr.reduce((acc, curr) => {
  	return acc + "//" + curr.email
  }, "")
}

//Task 36

function checkSalary(arr, n) {
	return arr.every(val => {
  	return val.salary.slice(1) > n
  })
}

//Task 37

function isEnginner(arr, n) {
	return arr.every(val => {
  	return val.isEngineer
  })
}

//Task 38

function checkGender(arr, n) {
	return arr.every(val => {
  	return val.gender === "Male"
  })
}

//Task 39

function areThereFemales(arr) {
	return arr.some(el => {
  	return el.gender === "Female"
  })
}

//Task 40

function areThereFemales(arr) {
	return arr.some(el => {
  	return el.isEngineer
  })
}

//Task 41

function checkElement(arr, el) {
	return arr.indexOf(el) === -1 ? false : true
}

//Task 42

function findByName(arr, name) {
	return arr.find(el => el.firstName === name)
}

//Task 43

function findEmployee(arr, name) {
  return arr.find(el => {
    if (el.firstName === name) {
      return `firstName: ${el.firstName}, lastName: ${el.lastName}`
    }
  })
}

//Task 44

function cloneArray(arr) {
	return Array.from(arr)
}

//Task 45

function removeDuplicates(arr) {
	return [...new Set(arr)]
}

//Task 46

function strToArr(str) {
	return Array.from(str)
}

//Task 47

Array.prototype.myIncludes = function(arr, val) {
	for(let el of arr) {
  	if(val === el){
    	return true
    }
    return false
  }	
}

//Task 48

function isArray(arr) {
	return Array.isArray(arr)
}



function isArray(arr) {
	if (toString.call(arr) === "[object Array]"){
  	return true
  }
  return false
}

//Task 49

function differenceOfArr(arr1, arr2) {
  let firstPart = arr1.filter(el => {
    return !arr2.includes(el)
  })

  let secondPart = arr2.filter(el => {
    return !arr1.includes(el)
  })

  return firstPart.concat(secondPart)
}

//Task 50

function preFilledArr(num, val) {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(val)
  }
  return result
}













