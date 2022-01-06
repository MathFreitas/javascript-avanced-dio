//versão verbosa e antiga
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('Primeira data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Segunda data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try{
                    setTimeout(function() {
                        console.log(processedData, processedData2);
                    }, 1000);
                    } catch (err) {
                        //handler error 
                    }
                });
            } catch (err){
                //handler error
            }
        });
    } catch (err){
        //handler error
    }
}
doAll();