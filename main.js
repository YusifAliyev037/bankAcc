const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const ShowBalance = document.querySelector("#ShowBalance");
const balanceTab = document.querySelector("#balance");
const incLimit = document.querySelector("#incLimit");
const moneyInput = document.querySelector("#moneyInput");
const balanceEl = document.querySelector("#balanceEl");
const List = document.querySelector("#list")

const bankAcc = {
    balance: 0,
    limit: 2000,
    hesabat:[],
    date: new Date,
    incLimit: function incLimit(m){
        this.limit +=m

    },
    increment: function increment(m){
        if( this.balance >= this.limit || m <= 0 || !m){
            console.log("invalid");
            return;
        }
    this.balance +=m;

    const history = {
        type:"Chash",
        amount:m,
        created:this.date
    }
    console.log(history);
    this.hesabat.push(history);
    return this.balance;
},
decrement: function decrement(m){
       
      const chekvalid = () =>{
        if (this.balance <= 0) {
            console.log("invalid balance");
            return;
        }

        this.balance -=m;
        const history = {
            type:"Withdraw",
            amount:m,
            created:this.date
        }
        console.log(history);
        this.hesabat.push(history);
   }

            

       chekvalid();
    return this.balance;

    },
    show:function show(m){
        const thisObj = this

       function handleMonitor (){
        console.log(thisObj.balance);
        console.log(thisObj.hesabat);
       }
        handleMonitor()
        console.log(this.balance);
    return this.balance;

    }}
    incrementBtn.addEventListener("click", function(){
        const value = moneyInput.value;
        bankAcc.increment(+value);
    moneyInput.value = "";
    
    }),
    
    decrementBtn.addEventListener("click", function(){
        const value = moneyInput.value;
    bankAcc.decrement(+value);
    moneyInput.value = "";
    
    }),
    
    ShowBalance.addEventListener("click", function(){
        const result =  bankAcc.show()
        balanceEl.innerHTML = result;
    
    }),
    
    incLimit.addEventListener("click", function(){
        bankAcc.incLimit(20)
    });

    function history (type, amount){
        const last ={
            type: type,
            amount: amount,
            created: new Date().toLocaleString(),

        }

        bankAcc.hesabat.push(history);
        const newlist = bankAcc.hesabat.slice().reverse().map(
          (item, index) =>
         `<tr>
                     <th scope="row">${index + 1}</th>
                        <td>${item.type === "Cash" ? "Deposit" : item.type}</td>
                        <td class="text-${
                         item.type === "Withdraw" ? "danger" : "success"
                       }">${item.amount > 0 ? `+${item.amount.toFixed(2)}` : `-$${Math.abs(item.amount).toFixed(2)}`}</td>
                       <td>${item.created}</td>
                   </tr>`  
        ).join("");
        List.innerHTML = newlist
    }
    
    












