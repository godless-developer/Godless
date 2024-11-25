function functionner() {
    console.log("working")
    console.log("Action")
}
functionner();
functionner();
functionner();
functionner();
functionner();
functionner();

function addnumbers(n1,n2,n3,n4) {
    console.log(n1 + n2 + n3 + n4)
}
addnumbers(2 ,3 ,4 ,5);
addnumbers(26 ,3 ,42 ,5);
addnumbers(25 ,25 ,25 ,25);


function savage(a, b, c) {
    if (a >= b && a >= c) return a;
    if (a <= b && c <= b) return b;
    return c;
}
const savage3=(a, b, c) => {
    const maniac = savage(a, b, c)

    console.log(maniac * 3)
}
savage3(12, 14, 4);


