
    var sponsor = [
        {
            "logo": "assets/images/singh gov.png"
        },
        {
            "logo": "assets/images/government-of-pakistan-logo.png"
        },
        {
            "logo": "assets/images/kmc-karachi-sindh-logo.png"
        },
        {
            "logo": "assets/images/governer-sindh-logo.png"
        }

    ]

    for (var i = 0; i < sponsor.length; i++) {

        document.getElementById("sponsor_row").innerHTML += `
    <div class="col-lg-3 col-md-3 col-sm-12 mt-5 mb-5" style="align-items="center"">
    <div class="sponsor"><img src="${sponsor[i].logo}" alt=""></div>
</div>
    
    `
    }


// about page pahony wali cards special e--ents


    var events = [
        {
            "heading":"Arabian Circus",
            "img": "assets/images/about circus.jpg",
            "p":"We have organised your all time favourite The Arabian Circus every month"
        },
        {
            "heading":"Pet Shows",
            "img": "assets/images/aboutPet-ShowTV.png",
            "p":"For pets lovers we have started a pet show on every sunday."
        },
        {
            "heading":"Fun-Fair",
            "img": "assets/images/about funfair.jpg",
           "p":"For our little visitors we organize monthly Fun-Fair "
        }, {
            "heading":"Food Feastival",
            "img": "assets/images/about foodfetival.jpg",
            "p":"Food lovers be ready for our food festival held on every weekend"
        }
    ]

    for (var i = 0; i < events.length; i++) {
        document.getElementById("events-img").innerHTML += `
    <div class="col-lg-3 col-md-3 col-sm-12 mt-3">
                        <div class="card-heading">
                            <h2>${events[i].heading}</h2>
                        </div>
                    <div class="images-div mt-4">
                    <img src="${events[i].img}" alt="" class="home-images ">
                    </div>
                    <p class="paragraph mt-3">${events[i].p}</p>
                </div>
    `
    }

