const inbtn = document.getElementById("input-btn");
const inbox = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const dltbtn = document.getElementById("dltbtn");
const tbtn =document.getElementById("tbtn");
// const dltbtn2 = document.getElementById("dltbtn2");

link=[];
// localStorage.setItem("key1", "www.google.com")
// let info = localStorage.getItem("key1")
// console.log(info);
// localStorage.clear();
// data =JSON.parse(data);
// console.log(typeof(data))
// console.log(data)
// data.push("www.pqr.com");
// data = JSON.stringify(data);
// console.log(typeof(data))
// console.log(data)

// console.log(inbtn,ulEl,inbox, box);

// const tabs = [{url: "www.xyzabc.com"}] 

let dataFromLocalStorage = localStorage.getItem("data");

dataFromLocalStorage = JSON.parse(dataFromLocalStorage);

if(dataFromLocalStorage){
    link = dataFromLocalStorage
    renderData(link);
}



tbtn.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabs.forEach(item=>{
            link.push(item.url)
        })
        localStorage.setItem("data",JSON.stringify(link));
        renderData(link);
     });
    
})

inbtn.addEventListener("click",()=>{
    
    if(inbox.value){
        link.push(inbox.value);

        clearInputField();

        localStorage.setItem("data",JSON.stringify(link));

        renderData(link);
    }

    console.log(localStorage.getItem("data"))
    
    // let newLead = document.createElement("li");
    
    // newLead.innerHTML = inbox.value;
    
    // ulEl.appendChild(newLead);
} )

dltbtn.addEventListener("dblclick",()=>{
    localStorage.clear();
    link=[];
    renderData(link);
    
})

// dltbtn2.addEventListener("click",()=>{

// })

function clearInputField(){
    inbox.value="";
}

function renderData(data){
    let inputData="";
    data.forEach(item => {
        inputData+= 
        // "<li><a target ='_blank' href=' "+ item +" '>"+item+"</a></li>"
        `<li>
            <a target ="_blank" href=${item}>
                ${item}
            </a>
            
        </li>`
    });
    ulEl.innerHTML=inputData;

}







// leads.forEach(lead=>{
//     console.log(lead);
//     ulEl.innerHTML = "<li>"+lead+"</li>";
// })

// for(let i=0;i<leads.length;i++){
//     ulEl.innerHTML+= leads[i];
// }

    





