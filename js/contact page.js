// contact form ka data local storage ma save krwany k lia

function main_arr(){
    let collection = new Array();
    if(localStorage.getItem("user-data") != "" && localStorage.getItem("user-data")!= null){
        collection = JSON.parse(localStorage.getItem("user-data"));
    }

    var data={
        "full_name":document.getElementById("name").value,
        "Email":document.getElementById("email").value,
        "Number":document.getElementById("number").value  
    }

    collection.push(data);

    localStorage.setItem("user-data",JSON.stringify(collection));


}

// feedback input field ka data local storage ma save krwany ka lia

function feedback(){
    let feedback_data=new Array;
    if(localStorage.getItem("feedback-info") != "" && localStorage.getItem("feedback-info")!= null)
    feedback_data= JSON.parse(localStorage.getItem("user-data"));

    var feedback={
        "visitors feedback":document.getElementById("feedback").textContent
    }

    feedback_data.push(feedback);
    
    localStorage.setItem("feedback_info",JSON.stringify(feedback_data));

    alert("thank you for feedback")
}

