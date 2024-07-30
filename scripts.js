function setById(id, value) {
    document.getElementById(id).value = value;
}

function getById(id) {
    return document.getElementById(id).value;
}



// TASK 01
function changeName() {
    document.getElementById("title").innerHTML = "Welcome to Task 01";
}

// TASK 02

function fullName() {
    var first_name = getById('first_name');
    var last_name = getById('last_name');
    setById('full_name', first_name + ' ' + last_name);
}

// TASK 03

function addNumbers() {
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var total = num1 + num2;
    setById('total', total);
}

// TASK 04
function subNumbers() {
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var total = num1 - num2;
    setById('total', total);
}


function multNumbers() {
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var total = num1 * num2;
    setById('total', total);
}

function divideNumbers() {
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var total = num1 / num2;
    setById('total', total);
}

// TASK 05

function sumNumbers() {
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var num3 = parseInt(getById('num3'));
    var total = num1 + num2 + num3;
    var avg = (num1 + num2 + num3)/3;
    setById('total', total);
    setById('avg', avg);
}


function clearAll() {
       
    setById('num1', '');
    setById('num2', '');
    setById('total', '');
    setById('num3', '');
    setById('avg', '');

}


// TASK 06

function checkAge() {
    var age = getById('age');
    if(age>18){
        setById('result','You are Eligible to Vote');
    } else{
        setById('result','You are not Eligible to Vote');
    }
}

// TASK 07

function examResult(){
    var mark1 = getById('mark1');
    var mark2 = getById('mark2');
    var mark3 = getById('mark3');

    var total = parseInt(mark1) + parseInt(mark2) + parseInt(mark3);
    var avg = total / 3

    setById('total', total);
    setById('avg', avg);

    if(avg >= 50){
        setById('result','Pass')
    }else{
        setById('result','Fail')
    }
}

// TASK 08

function maxNumber(){

    var num1 = parseFloat(getById('num1'));
    var num2 = parseFloat(getById('num2'));

    if(num1 > num2){
        setById('max', num1)
    }else if(num1 < num2){
        setById('max', num2)
    }else{
        setById('max', 'Both Are Equal')
    }

} 

// TASK 09

function max3Number(){

    var num1 = parseFloat(getById('num1'));
    var num2 = parseFloat(getById('num2'));
    var num3 = parseFloat(getById('num3'));
    



    if(num1 > num2){
        if(num1 > num3){
            setById('max', num1);
        }else if (num3 > num1){
            setById('max', num3);
        }
    }else if(num1 < num2){
        if(num2 > num3){
            setById('max', num2);
        }else if (num3 > num2){
            setById('max', num3);
        }
    }else if(num1 == num2){
        if(num2 > num3){
            setById('max', num2);
        }else if (num3 > num2){
            setById('max', num3);
        }else if(num2 == num3){
            setById('max', 'Both Are Equal');
        }
    }

} 


// TASK 10

function checkGrade() {
    var marks = parseInt(getById('marks'));
    if(0 > marks || marks > 100){
        grade = 'Marks Is Must Be 0-100';
    }else if(marks>=80){
        grade = 'A+';
    } else if(marks>=75){
        grade = 'A';
    } else if(marks>=60){
        grade = 'B';
    } else if(marks>=50){
        grade = 'C';
    } else if(marks<50){
        grade = 'F';
    } 

    setById('grade',grade);

}

// TASK 11

function checkGradeStatement() {
    var marks = parseInt(getById('marks'));
    if(0 > marks || marks > 100){
        alert('Marks Is Must Be 0-100');
    }else if(marks>=75){
        grade = 'A';
        color = 'red';
        statement = 'Excellent';
    } else if(marks>=65){
        grade = 'B';
        color = 'green';
        statement = 'Very Good';
    } else if(marks>=55){
        grade = 'C';
        color = 'blue';
        statement = 'Good';
    } else if(marks>=35){
        grade = 'S';
        color = 'brown';
        statement = 'Simple';
    }else if(marks<35){
        grade = 'F';
        color = 'black';
        statement = 'Weak';
    } 

    setById('grade', grade)
    document.getElementById('statement').innerHTML=statement;
    document.getElementById('statement').style.color=color;
}


// TASK 12
function multiTasks(){
    var num1 = parseInt(getById('num1'));
    var num2 = parseInt(getById('num2'));
    var add = document.getElementById('add').checked;
    var substract = document.getElementById('substract').checked;
    var multiply = document.getElementById('multiply').checked;
    var divide = document.getElementById('divide').checked;

    if(add){
        var ans = num1 + num2;
    } else if(substract){
        var ans = num1 - num2;
    } else if(multiply){
        var ans = num1 * num2;
    } else if(divide){
        var ans = num1 / num2;
    }

    setById('total', ans)
}
