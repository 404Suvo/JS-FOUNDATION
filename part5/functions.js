// Problem-1 ;

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea")
// console.log(teaOrder);

// Problem-2 :

function orderTea(teaType) {
    function confirmOrder(teaType) {
        return "Order confirmed for chai"
    }
    let result = confirmOrder()
    console.log(result);

    confirmOrder();
}

// orderTea()

// Problem-3 :

const calculateTea = (price, quantity) => price * quantity;

let result = calculateTea(900, 3)
// console.log(result);

// Problem-4 :

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`
}

function processTeaOreder(teaFunction) {
    return teaFunction("earl grey")
}
let Order = processTeaOreder(makeTea)
// console.log(Order);

// Problem-5 :

function createTeaMaker(name) {
    return function (teaType) {
      return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker("Subhajit");
let sol = teaMaker("green tea")
// console.log(sol);

