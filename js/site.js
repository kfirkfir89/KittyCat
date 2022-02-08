//get the values from the page
//start/controller function 
function getValues(){

    //get the user values from the page
    let kittyValue = document.getElementById("kittyValue").value;
    let catValue = document.getElementById("catValue").value;

     //we need validate our input
    //parse into Integers 
    kittyValue = parseInt(kittyValue);
    catValue = parseInt(catValue);

    //check that the numbers are integers and if the values between 1 to 9
    if( (Number.isInteger(kittyValue) && Number.isInteger(catValue)) && 
    ((kittyValue > 0 && kittyValue <= 9) && (catValue > 0 && catValue <= 9))){
        //call check
        let results = checkMulti(kittyValue, catValue);
        //call display and write the values to the screen
        displayResults(results);

    }else{
        alert("must enter integers between 1 to 9");
    }

}



//check for multiple
//logic function
function checkMulti(kittyValue, catValue){
    let results =[];

    //loop from 1 to 100
    for ( let i = 1 ; i <= 100 ; i++){
        //check to see if divisible by both (3 and 5)
        //check to see if divisible by Kitty value (3)
        //check to see if divisible by Cat value (5)
        if (i % kittyValue == 0 && i % catValue == 0){
            results.push('KittyCat');
        }else if(i % kittyValue == 0){
            results.push('Kitty');
        }else if(i % catValue == 0){
            results.push('Cat');
        }else{
            results.push(i);
        }
    }

    return results;
}

//bollen with switch version
function checkMultiB(kittyValue, catValue){
    let results = [];
    let Kitty = false;
    let Cat = false;
    for(let i = 1 ; i <= 100 ; i++){

        Kitty = i % kittyValue == 0;
        Cat = i % catValue == 0;

        switch(true){
            case Kitty && Cat:{
                results.push('KittyCat');
                break;
            }
            case Kitty:{
                results.push('Kitty');
                break;
            }
            case Cat:{
                results.push('Cat');
                break;
            }
            default:{
                results.push(i);
                break;
            }
        }
    }
    return results;
}

//"one line" version
function checkMultiC(kittyValue, catValue){
    let results = [];

    for(let i = 1; i <=100; i++){
        let value = ((i%kittyValue == 0 ? 'Kitty' : '') + (i%catValue == 0 ? 'Cat' : '') || i );
        results.push(value);
    }
    return results;
}


//display the results
//view function
//loop over the array and create a tablerow for each item
function displayResults(results){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("resultsTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0 ; index < results.length ; index += 5){

        let tableRow = document.importNode(templateRow.content, true);

        //grab use the tds put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(results[index]);
        rowCols[0].textContent = results[index];

        rowCols[1].classList.add(results[index+1]);
        rowCols[1].textContent = results[index+1];

        rowCols[2].classList.add(results[index+2]);
        rowCols[2].textContent = results[index+2];

        rowCols[3].classList.add(results[index+3]);
        rowCols[3].textContent = results[index+3];

        rowCols[4].classList.add(results[index+4]);
        rowCols[4].textContent = results[index+4];


        tableBody.appendChild(tableRow);
    }

}