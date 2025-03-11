console.group("group 1");
    console.log("Message One");
    console.log("message Two");
    console.group("child group");
        console.log("message One");
        console.log("message Two");
        console.group("grand child group");
            console.log("message one");
            console.log("message Two ");
        console.groupEnd("grand child group");
    console.groupEnd("child group")
console.groupEnd("group 1")
console.group("group 2 ")
    console.log("Message One");
    console.log("Message Two ")
console.groupEnd("group 2")