function askMyName() {
    const name = prompt("Please enter your name", "Enter your name here.");
 
    if (name != null) {
       document.getElementById("myName").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("myName").innerHTML
    alert(h1message + ' "รถยังมีอะไหล่ แต่หัวใจไม่มีสำรอง"')
 }

 function calAge() {
     var inputAge = prompt("ใส่ปีเกิด", "ใส่ปีเกิด.");
        alert("ยินดีด้วย หร่อนอยู่ในประเทศนี้มา" + (2022 - inputAge) + "ปีแล้ว")
        
     }
 }

 function loadProfile() {
     var name = "Your name"
    var province = "Your province"
     document.getElementById("my-name").innerHTML = name;
     document.getElementById("my-province").innerHTML = province;
    }
}


 