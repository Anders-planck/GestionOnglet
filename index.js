// (function() {
//     /**
//      * lorque l on clic sur un onglet :
//      * ---on retire la classe active de l onglet actuel
//      * --- j ajoute la class active sur l onglet actuel
//      * 
//      * 
//      * on retire la class  actif sur le contenue actif
//      * j ajoute la class active sur le contenu sur la correspondant
//      * 
//      */

//     var afficherOnglet = function(a, animation) {
//         if (animation === undefined) {
//             animation = true
//         }
//         var li = a.parentNode
//         var div = a.parentNode.parentNode.parentNode
//         var activetab = div.querySelector('.tab-content.active')
//         var aaficher = div.querySelector(a.getAttribute('href'))
//         if (li.classList.contains('active')) {
//             return false
//         }
//         //on retire la classe active sur l onglet actif
//         div.querySelector('.tabs .active').classList.remove('active')
//             // on rajoute la class sur l onglet cliquer
//         li.classList.add('active')
/**
 * //         //     on retire la class actif sur le contenue actif
//         //  div.querySelector('.tab-content.active').classList.remove('active')
//         // div.querySelector(a.getAttribute('href')).classList.add('active')

//         //on ajout la class fade sur l element actif
//         // a la fiin de l annimation
//         // on retire òa classe fade
//         // on ajout la classe actif e fade 
//         //on ajout la classe in-
 */


//         if (animation === true) {
//             activetab.classList.add('fade')
//             activetab.classList.remove('in')
//             var transitionend = function() {
//                 this.classList.remove('fade')
//                 this.classList.remove('active')
//                 aaficher.classList.add('active')
//                 aaficher.classList.add('fade')
//                 aaficher.offsetWidth
//                 aaficher.classList.add('in')
//                 activetab.removeEventListener('transitionend', transitionend)
//             }
//             activetab.addEventListener('transitionend', transitionend)
//         } else {
//             aaficher.classList.add('active')
//             activetab.classList.remove('active')
//         }


//     }

//     var tabs = document.querySelectorAll('.tabs a')

//     for (var i = 0; i < tabs.length; i++) {
//         tabs[i].addEventListener('click', function(e) {
//             afficherOnglet(this)
//         })
//     }

//     /**
//      * je recupere le hash 
//      * ajouter la class active qui aura comme href le hash
//      * retirer la class active sur les autres onglet
//      * afficher /masquer le contenu
//      */




//     var hashchange = function(e) {
//         var hash = window.location.hash
//         var a = document.querySelector('a[href="' + hash + '"]')
//         if (a !== null && !a.classList.contains('active')) {
//             afficherOnglet(a, e !== undefined)
//         }
//     }
//     window.addEventListener('hashchange', hashchange)
//     hashchange()
// })()



// //jquery

// jQuery('.tabs a').css('color', '#9Faf50')

// console.log($('.tabs a:first').attr('href'))


// //ajouter un element
// // var ul = $('ul:first')
// // var li = $('<li class="active"></li>')
// // var a = $('<a href="#">salut</a>')
// // li.append(a)
// // ul.append(li);
// // $('ul li:first').after(li);


// $('.tabs a').click(function(e) {
//     console.log($(this).attr('href'))
//     console.log(this)
//     console.log($(this))
// })



//remix con jquery





$('.tabs a').click(function(e) {


    if ($(this).parent().hasClass('active')) {
        return false
    }
    $(this).parent().siblings('.active').removeClass('active')
    $(this).parent().addClass('active')

    console.log($(this).attr('href'))

    $($(this).attr('href')).show("slow") //slideup e slidein ,fadeup e fadein
    $($(this).attr('href')).siblings().hide("slow")

})

/*
var ul = $('#users')
$.get('https://jsonplaceholder.typicode.com/users', {}, function(data, textstatus, jqXHR) {
    data.forEach(function(user) {
        console.log(user)
        var li = $('<li>').text(user.name)
        ul.append(li)
    })
})*/