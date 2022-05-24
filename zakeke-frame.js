$.getScript("./index.js", function () {

    const frame = document.querySelector('iframe')

    const frameUrl = (qty, packaging, color) => `
    https://portal.zakeke.com/Customizer/index.html?name=Filo+Promotional&qty=${qty}&currency=EUR&taxPricesPolicy=excluding&culture=en-US&modelCode=7657&ecommerce=woocommerce&attribute%5Bpa_business-packaging%5D=${packaging}&attribute%5Bpa_color%5D=${color}&mv=1&isClientPreviewsEnabled=1&shareUrlPrefix=https%3A%2F%2Ffilotrack.com%2F%2F%3Fwc-ajax%3Dzakeke_share%26elementor_page_id%3D7657%26path%3D&tokenOwin=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU2VsbGVyIiwiUGVybUJpdHMiOiIwMTAwMTExMDAxMTAwMTExMTExMTAxIiwidW5pcXVlX25hbWUiOiJpbmZvQGZpbG90cmFjay5jb20iLCJVc2VySUQiOiI3Njk4NiIsIlVzZXJOYW1lIjoiaW5mb0BmaWxvdHJhY2suY29tIiwiZW1haWwiOiJpbmZvQGZpbG90cmFjay5jb20iLCJVc2VyVHlwZUlEIjoiMyIsIlVzZXJWZXJzaW9uIjoiMjAyMjA1MjQyMDExMjgiLCJjdXN0b21lcmNvZGUiOiIxIiwiY2xpZW50SUQiOiI3NTYyOCIsIm5iZiI6MTY1MzQyMzIzMCwiZXhwIjoxNjUzNTA5NjMwLCJpYXQiOjE2NTM0MjMyMzAsImlzcyI6Ind3dy56YWtla2UuY29tIiwiYXVkIjoiaHR0cHM6Ly93d3cuemFrZWtlLmNvbSJ9.j24wnKJX86StFFROmILt125uf_UINU7IcluB3NV9vMc
    `
    //*FRAME STATE
    let frame_config = {
        qty: 50,
        packaging: 'standard',
        color: 'red',
    }

    // let new_frame_config = {
    //     qty: 50,
    //     packaging: 'standard',
    //     color: 'red',
    //     name: 'Filo+Tag+Business',
    //     modelCode: "1319"
    // }

    //*HANDLE FRAME
    const handleFrameUrl = (property, value) => {
        frame_config[property] = value
        // console.log(frame_config)
        frameUrl(frame_config.qty, frame_config.packaging, frame_config.color)
        frame.src = frameUrl(frame_config.qty, frame_config.packaging, frame_config.color)
    }

    //*HANDLE COMBO
    const handleFiloTag = (el) => handleFrameUrl('color', el.getAttribute('name'))
    const handlePack = (el) => handleFrameUrl('packaging', el.getAttribute('name'))

    filo_tags_imgs.forEach(el => {
        el.onclick = () => {
            handleSelect(el, filo_tags_imgs)
            handleFiloTag(el)
        }
    })

    packs_btns.forEach((btn) => {
        btn.onclick = () => {
            handlePack(btn)
            packs_btns.forEach(btn => {
                const btn_img = btn.querySelector('.btn-img')
                btn_img.classList.remove('selected')
            })
            const btn_img = btn.querySelector('.btn-img')
            btn_img.classList.add('selected')


        }
    })
});