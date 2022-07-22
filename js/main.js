var imgsList = Array.from(document.getElementsByClassName(`img-item`))
var lightBoxContainer = document.querySelector(`.lightBox-container`)
var lightBoxItem = document.querySelector(`.lightBox-item`)
var nextButton = document.getElementById(`next`)
var prevButton = document.getElementById(`prev`)
var closeButton = document.getElementById(`close`)
var currentIndex = 0;

for (var i = 0; i < imgsList.length; i++) {
    imgsList[i].addEventListener(`click`, function (e) {
        currentIndex = imgsList.indexOf(e.target)

        lightBoxContainer.classList.replace(`d-none`, `d-flex`)
        var imgSrc = e.target.getAttribute(`src`)
        lightBoxItem.style.cssText = `background-image:url(${imgSrc});`
    })

}



function nextSlide() {
    currentIndex++;
    if (currentIndex == imgsList.length) {
        currentIndex = 0
    }
    var imgSrc = imgsList[currentIndex].getAttribute(`src`)
    lightBoxItem.style.cssText = `background-image:url(${imgSrc});`
}


nextButton.addEventListener(`click`, nextSlide)




function prevSlide() {
    currentIndex--;
    if (currentIndex == -1) {
        currentIndex = imgsList.length - 1
    }
    var imgSrc = imgsList[currentIndex].getAttribute(`src`)
    lightBoxItem.style.cssText = `background-image:url(${imgSrc});background-position: center center;`
}



prevButton.addEventListener(`click`, prevSlide)









function closeSlide() {
    lightBoxContainer.classList.replace(`d-flex`, `d-none`)
}
closeButton.addEventListener(`click`, closeSlide)




// function slide(i) {
//     currentIndex = currentIndex + i
//     if (currentIndex == imgsList.length) {
//                  currentIndex = 0;
//           }
//           if (currentIndex==-1) {
//                      currentIndex = imgsList.length-1
//                  }
//     var imgSrc = imgsList[currentIndex].getAttribute('src')
//     lightBoxItem.style.cssText = `background-image:url(${imgSrc});`
// }
// nextButton.addEventListener(`click`,function () {
//     slide(1)
// })


// prevButton.addEventListener(`click`,function () {
//     slide(-1)
// })






// **********************keys


document.addEventListener(`keydown`, function (e) {
    if (e.key == `ArrowLeft`) {
        prevSlide()
    } else if (e.key == `ArrowRight`) {
        nextSlide()
    }
    else if (e.key == `Escape`)
    {
        closeSlide()
    }
})



lightBoxContainer.addEventListener(`click`,function (e) {
    if (e.target !=lightBoxItem && e.target!=prevButton && e.target!=nextButton) {
        closeSlide()
    }
})