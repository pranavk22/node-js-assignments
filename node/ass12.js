let date_ob = new Date();
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hour = date_ob.getHours();
let min = date_ob.getMinutes();
let sec = date_ob.getSeconds();

console.log(
  year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
);
