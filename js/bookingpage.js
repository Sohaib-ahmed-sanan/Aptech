function booking(){
 

    // let collection = JSON.parse(localStorage.getItem("user-data"));

    // var bookings={
    //     "name":document.getElementById("name").value,
    //     "email":document.getElementById("email").value,
    //     "contact":document.getElementById("contact-num").value,
    //     "child_tickets":document.getElementById("child_tickets").value,
    //     "adult_tickets":document.getElementById("adult_tickets").value,
    //     "date":document.getElementById("date").value
        
    // }
    // collection.push(bookings);
    // localStorage.setItem("user-data",JSON.stringify(collection));

    // var bookingmodal=document.getElementById("exampleModal");
    // document.write(bookingmodal)

    
    

}

function demo(){
    var name = document.getElementById("name").value;
    var child=document.getElementById("child_tickets").value;
    var adult_ticket = document.getElementById("adult_tickets").value;
 
    //   modal

    if(name != ""){
    document.getElementById("modal").innerHTML = `
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">Booking Succeeded</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <p class="paragraph">
                            Thank you <span id="mname" style="color:green ; font-size: 20px;">??</span> for booking tickets of our zoo !</p>
                        <span id="ticketnumber">
                              
                        </span>
                        <p class="paragraph">
                            This is your ticket number take a screen shoot of this and bring it at the time of visiting
                        </p>
                        
                    </div>
                    <ul>
                            <li style="list-style-type:none;">Number of Childs <span id="number-child" style="color:green ; font-size: 20px;">00</span></li>
                            <li style="list-style-type:none;">Number of Adults <span id="number-adult" style="color:green ; font-size: 20px;">00</span></li>
                        </ul>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-danger" data-bs-dismiss="modal" >Close</button>

                </div>
            </div>
        </div>
    </div>`
 } else {
    document.getElementById("modal").innerHTML = ``
  
 }
       
        
        localStorage.setItem("name", name);
        localStorage.setItem("child", child);
        localStorage.setItem("adult_ticket", adult_ticket);
        
        
        var mname = document.getElementById("mname").innerHTML = localStorage.getItem("name")
        var children = document.getElementById("number-child").innerHTML = localStorage.getItem("child")
        var adult =  document.getElementById("number-adult").innerHTML = localStorage.getItem("adult_ticket")
    
}

function close(){
 window.location.href("../booking.html")
}


   