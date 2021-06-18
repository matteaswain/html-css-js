const getUrlParms = URL =>  {
    let parms = document.URL.split("?")[1]; // splits URL at ? and returns the remaining string into var parms
    parms = parms.split("&"); // splits key values up and returns array of the remaining  
    let json = {}; // setting var to store json data 
    for(let p of parms) { // iterating thru array data and spliting at the equal sign 
        let kv = p.split("="); 
        json[kv[0]] = isNaN(kv[1]) ? kv[1] : +kv[1]; 
            // can index 1 be a number? if so then convert if not then dont 
    }
    return json;
}