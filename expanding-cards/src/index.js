const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active")


    })
})
const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
 }









































/*let name = 'balaJi';
for (i = 0; i < name.length; i++){
    if (i === 0) {
        document.write(name[i].toUpperCase());
    }
    else {
        document.write(name[i].toLowerCase());    
    }
}

//slicing the string using slice()
document.write(" ")
document.write(name.charAt(0).toUpperCase() + " ")
document.write(name.slice(-3)+" ")
document.write(name.slice(2, 5) + " ")

//slicing string using substring method
document.write("\n"+name.charAt(4) + " ")
document.write("\n" + name.substring(2, 6) + " ")

//Arrays 
let arr = [10, 20, [1, 2, 3, "baluZ"]]
document.write(arr[2][3].charAt(4) + " ")
for (let i = 0; i < arr.length; i++){
    document.write(arr[i] + " ");
}

//push,pop
let a = ["balu", "naveen", "balaji", "hi", "bye"]
let ans = []
for (let i = 0; i < a.length; i++){
    ans.push(a[i])
}
document.write("[" + ans + "]"+" ")
document.write(ans.pop()+" ")
document.write(ans.pop(1) + " ")
document.write(ans.push(8)+" ")
document.write("[" + ans + "]")*/

//FUNCTIONS
/*
function add(a, b){
    return a + b;
}
const calci = function (a,b,c) {
    return c(a, b);
}
let ans = calci(2, 3, add);
document.write(ans);

let ans = calci(3, 6, function (a, b) {
    return a * b;
})
//Arraow functions

const ans = a => { return a }
const add = (a, b) => {
    return a + b;
};
//or 
const add = (a, b) => a + b;
*/
//For each

/*let arr1 = ['10', '20', '30', '40'];
arr1.forEach(element => {
    document.write(element+" ");
});

//mapping
let x = ['10', '20', '30', '40']
let b = []
x.map(str => {
    b.push(Number(str))
});
document.write("[" + b + "]")  

//objects or dictionary
let test = {
    'name': 'balu',
    test2: 'samle',
    obl:{'x':3,'r':5},
    arr: [1, 2, 3, 4, 5],
    fun: (x, y) => {
        return "inside fun!!"
    }
}
document.write(test.fun(1, 2))

const date = new Date();
document.write(date)
let ax = [1, 2, 3]
document.write(ax.concat())
document.write(" end ")
let ay = [1, 2, 3, 3, 3, 1, 3, 34, 5, 6, 7]
ay = [...new Set(ay)]
document.write(ay.sort())
document.write(ay.sort((a,b)=>a-b))*/