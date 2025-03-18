let num = Math.floor(Math.random() *3);
rsp = {
    0:"가위",
    1:"바위",
    2:"보",
}
let computer_input = rsp[num]

let usr_input = prompt("가위,바위,보 중 하나를 입력하세요!","가위");

console.log(`컴퓨터 : ${computer_input}`);
console.log(`유저 : ${usr_input}`);
if(computer_input == usr_input){
    console.log("비겼습니다.");
}else if(computer_input=="가위"){
    if(usr_input=="바위"){
        console.log("승자:유저");
    }else{
        console.log("승자:컴퓨터");
    }
}else if(computer_input=="바위"){
    if(usr_input=="보"){
        console.log("승자:유저");
    }else{
        console.log("승자:컴퓨터");
    }
}else if(computer_input=="보"){
    if(usr_input=="가위"){
        console.log("승자:유저");
    }else{
        console.log("승자:컴퓨터");
    }
}
