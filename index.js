// Your code here
function createEmployeeRecord (employeeInformationArray){
  var employeeInformationObj = {
  firstName : employeeInformationArray [0],
  familyName : employeeInformationArray [1],
  title : employeeInformationArray[2],
  payPerHour : employeeInformationArray [3],
  timeInEvents: [],
  timeOutEvents :[],
} 
return employeeInformationObj 
}


function createEmployeeRecords(ArrayOfArraysOfEmployees) {
   
    let nestedObjOfEmployees =[]
    
    for ( const employeeArray of ArrayOfArraysOfEmployees){

    let employeeObj = createEmployeeRecord(employeeArray);
    nestedObjOfEmployees.push(employeeObj)
   }

   return nestedObjOfEmployees
}

function createTimeInEvent(employeeRecordObj, dateStamp) {
    const dateArray = dateStamp.split(" ")
    const timeInEvent = {
       type: "TimeIn",
       hour: parseInt(dateArray[1]),
       date: dateArray[0]
    }
 
    employeeRecordObj.timeInEvents.push(timeInEvent);
 
    return employeeRecordObj;
 }


 function createTimeOutEvent(employeeRecordObj, dateStamp) {
    const dateArray = dateStamp.split(" ")
    const timeOutEvent = {
       type: "TimeOut",
       hour: parseInt(dateArray[1]),
       date: dateArray[0]
    }
 
    employeeRecordObj.timeOutEvents.push(timeOutEvent);
 
    return employeeRecordObj;
 }

 function hoursWorkedOnDate(employeeObj,date ) {
    let timeIn, timeOut;
    
    for (const event of employeeObj.timeInEvents ) {

        if(event.date === date) { 
            timeIn = event.hour;
        }
    }

    for (const element of employeeObj.timeOutEvents) {
        if(element.date === date ){
            timeOut = element.hour ;
        }
    }

    const hoursWorked = (timeOut - timeIn)/100;
    
    return hoursWorked 
 }

 function wagesEarnedOnDate(employeeObj, date){

    const payOwed = hoursWorkedOnDate(employeeObj,date) * employeeObj.payPerHour
    return payOwed


 }



 function allWagesFor (employeeObj){
  
    let payOwedForAllDates = 0

    for ( const event of employeeObj.timeInEvents){

        if (employeeObj.timeOutEvents.date == employeeObj.timeOutEvents.date){

           let totalPerDay =  hoursWorkedOnDate(employeeObj, event.date ) * employeeObj.payPerHour
           payOwedForAllDates += totalPerDay;

        }
    }

    return payOwedForAllDates 
 }

 function calculatePayroll (ArrayOfEmployeeRecords){

    let payrollTotal = 0

    for ( const employee of ArrayOfEmployeeRecords){

        payrollTotal += allWagesFor(employee) 


    }

    return payrollTotal 

 }