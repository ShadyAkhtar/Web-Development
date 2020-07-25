console.log('This Is module');

function average(arr){
    sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.export is a object 
// to try execute the down export uncomment it  

// module.exports ={
    
//     avg : average,
//     name : "Shadab",
//     repo : "ShadyAkhtar"
    
// } 

// another way 

module.exports.name = "Shadab";
module.exports.avg = average;
module.exports.repo = "ShadyAkhtar";