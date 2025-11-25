let tIncome = 0;
let tExpence = 0;
let allData = [];

function addbtn() {
    let disc = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);
    if(amount>=0){
        tIncome = tIncome + amount;
    } else {
        tExpence = tExpence + Math.abs(amount);
    }
    let balance = tIncome - tExpence;
    document.getElementById("balance").innerText = `PKR = ${balance.toFixed(2)}`;
    document.getElementById("tIncome").innerText = tIncome.toFixed(2);
    document.getElementById("tExpence").innerText = tExpence.toFixed(2);
    allData.push({
        description : disc,
        amount: amount
    });
    showdiv();
}

function showdiv(){
    let list = document.getElementById("tlist");
    list.innerHTML = "";
    allData.forEach(
        (item,index)=>{
            let sign = item.amount >= 0 ? "+" : "-";
            let amountInt = Math.abs(item.amount);
            let classes;
            let btnCls = "bg-black text-white absolute transform -translate-x-8 w-6 hidden group-hover:block";
            if(item.amount >= 0){
                classes = "tamplate group relative flex bg-white p-2.5 justify-between text-[16px] border-r-4 border-green-700 hover:bg-green-700 hover:text-white shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)]";
            }else{
                classes = "tamplate group relative flex bg-white p-2.5 justify-between text-[16px] border-r-4 border-red-600 hover:bg-red-600 hover:text-white shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)]";
            }
            list.innerHTML += `
                <div class="${classes}">
                    <p id="display-d">${item.description}</p>
                    <p id="display-a">${sign} PKR ${amountInt}</p>
                    <button onclick="delBtn()" class="${btnCls}">X</button>
                </div>
            `
            // if(sign=="+"){
            //     list.innerHTML += `
            //         <div class="tamplate flex bg-white p-2.5 justify-between text-[16px] border-r-4 border-green-700 hover:bg-green-700 hover:text-white">
            //             <p id="display-d">${item.description}</p>
            //             <p id="display-a">${sign} PKR ${amountInt}</p>
            //         </div>
            //     `
            // }else{
            //     list.innerHTML += `
            //         <div class="tamplate flex bg-white p-2.5 justify-between text-[16px] border-r-4 border-red-600 hover:bg-red-600 hover:text-white">
            //             <p id="display-d">${item.description}</p>
            //             <p id="display-a">${sign} PKR ${amountInt}</p>
            //         </div>
            //     `
            // }
        }
    )
}

function delBtn(){
    console.log("Delete Button Clicked");
}