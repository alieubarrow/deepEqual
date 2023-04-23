'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {

    if (typeof val1 === "object" && typeof val2 === "object" && val1 !== val2) {
        const flag = checkEqual(val1, val2);
        return flag;
    }

    if (val1 === val2) { 
        return true;
    } else if (typeof val1 !== "object" && typeof val2 === "object") { 
        return false;
    } else {
        return false;
    }
}

function checkEqual(val1, val2) {

    if (!Array.isArray(val1) && !Array.isArray(val2) && typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {

        const key1 = Object.keys(val1).sort();
        const key2 = Object.keys(val2).sort();
    
        if (!deepEqual(key1, key2)) {
            return false;
        }
    
        for (const key of key1) {
            if (!deepEqual(val1[key], val2[key])) {
                return false;
            }
        }
        return true;
    }
    
    if (Array.isArray(val1) && Array.isArray(val2)) {
        if (val1.length !== val2.length) {
            return false;
        }
    
        for (let i = 0; i < val1.length; i++) {
            if (!deepEqual(val1[i], val2[i])) {
                return false;
            }
        }
        return true;
    }
    return false;   
}

// Don't add or change anything below this comment.
module.exports = deepEqual;