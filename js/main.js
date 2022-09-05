








// home images secion
var carddata = [
    {
        "heading": "Members Of Zoo",
        "a":"animals.html#galary",
        "img": "assets/images/zoomember.jpg"
    },
    {
        "heading": "Special Events",
        "a":"about.html#special-event",
        "img": "assets/images/circus2.jpg"
    },
    {
        "heading": "Book Tickets",
        "a": "booking.html#booking",
        "img": "assets/images/ticket.jpg"
    }

]


for (var i = 0; i < carddata.length; i++) {
    document.getElementById("card").innerHTML += `
    <div class="col-12 col-lg-4 col-md-4 col-sm-12" data-aos="zoom-out-up">
    <div class="card-heading">
        <h2>${carddata[i].heading}</h2>
    </div>
    <div class="images-div mt-4">
    <a href="${carddata[i].a}"><img src="${carddata[i].img}" alt="zoo members" class="home-images"></a>
    </div>
</div>
    
    `
}

// for animation counter

const counters = document.querySelectorAll('.experiance')
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})

