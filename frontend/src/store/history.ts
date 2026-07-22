export interface HashHistoryItem {

  id:string;

  fileName:string;

  fileSize:number;

  algorithm:string;

  hash:string;

  createdAt:string;

}



const STORAGE_KEY =
"hashguard-history";



export function getHistory():

HashHistoryItem[] {

const data =
localStorage.getItem(
STORAGE_KEY
);


return data
?
JSON.parse(data)
:
[];

}




export function saveHistory(
item:HashHistoryItem
){

const history =
getHistory();


history.unshift(item);



localStorage.setItem(

STORAGE_KEY,

JSON.stringify(history)

);


}




export function clearHistory(){

localStorage.removeItem(
STORAGE_KEY
);

}