//!const domain = window.location.hostname
const domain = 'filotrack.com'

//* HTML ELEMENTS
//? FILO TAG SELECTION - SECTION
const filo_tags_imgs_container = document.querySelector('.filo-tag-selection .filo-tags')
const filo_tags_imgs = filo_tags_imgs_container.querySelectorAll('img.filo-tag-img')
//? PACK SELECTION - SECTION
const packs_container = document.querySelector('.pack-selection .packs')
const packs_btns = packs_container.querySelectorAll('button.pack')


//* MEDIAS
const getImage = (img_name) => `https://${domain}/wp-content/uploads/${img_name}`

//* DATA
const filo_tags = [{
        name: 'Filo Tag Red',
        img: 'FT_Red_Front.png',
        color: 'red'
    },
    {
        name: 'Filo Tag Black',
        img: 'FT_Black_Front.png',
        color: 'black'
    },
    {
        name: 'Filo Tag Blue',
        img: 'FT_Blue_Front.png',
        color: 'blue'
    },
    {
        name: 'Filo Tag White',
        img: 'FT_White_Front.png',
        color: 'white'
    },
]

//* RENDER IMAGES ELEMENTS 
filo_tags_imgs.forEach((el, i) => {
    el.classList.add(filo_tags[i].name.replaceAll(' ', '_'))
    el.setAttribute('name', filo_tags[i].color)
    el.src = getImage(filo_tags[i].img)
})

//* FUNCTIONS
const handleSelect = (el, el_array) => {
    el_array.forEach((el) => {
        el.classList.remove('selected')
    })
    el.classList.add('selected')
}

//* APPEND FUNCTIONS
// filo_tags_imgs.forEach(el => {
//     el.onclick = () => handleSelect(el, filo_tags_imgs)
// })