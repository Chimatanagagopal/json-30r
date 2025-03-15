let addData=function(){
      var username=document.getElementById("username")
    //   console.log(username.value)
      var message=document.getElementById("message")
    //   console.log(message.value)
    var city=document.getElementById("city")
    
    var phone=document.getElementById("phone")
    
    var state=document.getElementById("state")


    postData(username.value,message.value,city.value,phone.value,state.value)
}
function postData(username,message,city,phone,state){

    var url="https://storm-rigorous-stone.glitch.me/student" 
    var options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({ 
            message,
            username,
            city,
            phone,
            state
            
        })
    }
    fetch(url,options)
        .then(response=>{
            if(response.ok){
               console.log("data submit")
               alert("data submit")
                
            }
        })
        .catch(err=>{
            alert("something")
            console.error(err)
        })
    
}

function displayData(){
    var container=document.getElementById("container")
    fetch("https://storm-rigorous-stone.glitch.me/student")
    .then(response=>response.json())
    .then(data=>{
        for (var obj of data){
            var item=document.createElement("div")
            item.className="item  border border-warning "

            let messagepara=document.createElement("p")
            let usernamepara=document.createElement("p")
            let citypara=document.createElement("p")
            let phonepara=document.createElement("p")
            let statepara=document.createElement("p")

            let username=obj.username
            let message=obj.message
            let city=obj.city
            let phone=obj.phone
            let state=obj.state

            usernamepara.innerText=username;
            messagepara.innerText=message
            citypara.innerText=city
            phonepara.innerText=phone
            statepara.innerText=state

            item.appendChild(messagepara)
            item.appendChild(usernamepara)
            item.appendChild(citypara)
            item.appendChild(phonepara)
            item.appendChild(statepara)
            container.appendChild(item)

        }
    })
}
displayData()                    