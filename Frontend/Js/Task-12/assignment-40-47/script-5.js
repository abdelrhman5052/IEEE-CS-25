
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.includes(needle)) {
    console.log("Found") ;
} else {
    console.log("Not Found");
}

if(haystack.slice(1, 2) == needle) {
    console.log("Found") ;
} else {
    console.log("Not Found");
}

if (haystack[1] == needle) {
    console.log("Found");
} else {
    console.log("Not Found");
}

