const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let items = 
    {
        "author": {
            "name": "diego",
            "lastname": "palacios",
        },
        "categorie": "Tecnología",
        "items": [
            {
                "id": "1",
                "title": "xiaomi 11 LITE 5G NE",
                "price": {
                    "currency": "COP",
                    "amount": 1999900,
                    "decimals": 0,
                },
                "picture": "https://webplanetbogota.com/wp-content/uploads/2021/03/K2-blue.png",
                "condition": "nuevo",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "Xiaomi redmi 11 lite 5g Con su compatibilidad con las tecnologías Dolby Vision y TrueColor, verás los contenidos como los creadores querian que los vieras; Si eres de los que le encanta la fotografía y hacer videos , el Xiaomi 11 Lite 5G NE te ofrece en la cámara principal 64 Mega píxeles para que puedas tener gran nível de detalle y puedas imprimir en tamaños grandes sin perder calidad. En la parte de video, los filtros son variados y fáciles de manejar, para que puedas compartir momentos únicos de una forma original; el procesador Snapdragon 778G ofrece un alto rendimiento para que juegues, navegues y hagas todo lo que te gusta sin tener que esperar en ningún momento; la batería de 4250 mAh permite usarlo todo el día con la tranquilidad de que no tendrás que llevar el cargador contigo a todas partes. La carga de 0 a 100% se hace en aproximadamente 52 minutos."

            },
            {
                "id": "2",
                "title": "iPhone 12 64GB",
                "price": {
                    "currency": "COP",
                    "amount": 3799901,
                    "decimals": 0,
                },
                "picture": "https://catalogo.claro.com.ec/uploads/imgs/productos/iphone-12-pro-128gb/azul/zoom/03-iphone-12-pro-128gb-azul-back.png",
                "condition": "nuevo",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6,1 pulgadas. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan 3 fácilmente a tu iPhone y permiten una carga inalámbrica más rápida."
            },
            {
                "id": "3",
                "title": "xiaomi Redmi 10S",
                "price": {
                    "currency": "COP",
                    "amount": 999900,
                    "decimals": 0,
                },
                "picture": "https://i01.appmifile.com/webfile/globalimg/spainOria/K7B-Blue1.png",
                "condition": "nuevo",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "El Xiaomi Redmi smartphone 10S tiene una cámara cuadruple para que puedas capturar todo lo que quieras con los mejores resultados. La cámara principal de 64 MP permite tener detalles de alta calidad, incluso en poca luz, el modo nocturno hace que se tengan imágenes claras y brillantes. La pantalla AMOLED de 6.43 muestra colores vívidos y reales para disfrutar de tus contenidos favoritos, que sumado al doble altavoz, logran que vivas una excelente experiencia audivisual. En la parte del desempeño, el procesador Mediatek Helio G95 logran que el manejo de apps sea rápido y fluido gracias a sus ocho núcleos de hasta 2.05 GHz. La batería es otra ventaja de este dispositivo, 5000 mAh permiten estar conectado todo el día, y más, mientrás que la carga rápida de 33W logran cargarlo muy rapidamente, de 0 a 100% en aproximadamente 78 minutos."
            },
            {
                "id": "4",
                "title": "Xiaomi 11T PRO",
                "price": {
                    "currency": "COP",
                    "amount": 2699900,
                    "decimals": 0,
                },
                "picture": "https://itechcolombia.co/wp-content/uploads/xiaomi-11t-pro.webp",
                "condition": "nuevo",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "Para complementarla, cuenta con una cámara Telemacro para poder acercarse a solo 3 cm y hacer zoom, verás cosas increibles que nunca antes habías visto; con Cine Magia, podrás hacer efectos de video avanzados desde el celular sin necesidad de equipo adicional o programas avanzados; la pantalla AMOLED de 6.67 Full HD+, 120 Hercios y compatible con Dolby Atmos, es ideal para ver películas, series, jugar y ver todo como si estuvieras abriendo una ventana, verás todo con lujo de color y detalle; Su cerebro, elSnapdragon 888 es el procesador más poderoso de la marca hasta el momento, haciendo que el desempeño sea muy ágil, solo tendrás fluidez mientrás lo usas; con una enorme batería de 5000 mAh, podrás usarlo en cualquier momento sin temor a que la batería se agote y si eres de los que no tiene mucho tiempo para cargarla, en tan solo 17 minutos aproximadamente llega de 0 a 100%, con nuestra tecnolgia Hypercharge"
            },
            {
                "id": "5",
                "title": "TV SAMSUNG 60 Pulgadas",
                "price": {
                    "currency": "COP",
                    "amount": 2599900,
                    "decimals": 0,
                },
                "picture": "https://images.samsung.com/is/image/samsung/p6pim/latin/un50au9000pxpa/gallery/latin-crystal-uhd-au9000-un50au9000pxpa-417824913?$720_576_PNG$",
                "condition": "nuevo",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "Para complementarla, cuenta con una cámara Telemacro para poder acercarse a solo 3 cm y hacer zoom, verás cosas increibles que nunca antes habías visto; con Cine Magia, podrás hacer efectos de video avanzados desde el celular sin necesidad de equipo adicional o programas avanzados; la pantalla AMOLED de 6.67 Full HD+, 120 Hercios y compatible con Dolby Atmos, es ideal para ver películas, series, jugar y ver todo como si estuvieras abriendo una ventana, verás todo con lujo de color y detalle; Su cerebro, elSnapdragon 888 es el procesador más poderoso de la marca hasta el momento, haciendo que el desempeño sea muy ágil, solo tendrás fluidez mientrás lo usas; con una enorme batería de 5000 mAh, podrás usarlo en cualquier momento sin temor a que la batería se agote y si eres de los que no tiene mucho tiempo para cargarla, en tan solo 17 minutos aproximadamente llega de 0 a 100%, con nuestra tecnolgia Hypercharge"
            },
            {
                "id": "6",
                "title": "TV LG 43 Pulgadas",
                "price": {
                    "currency": "COP",
                    "amount": 1749900,
                    "decimals": 0,
                },
                "picture": "https://tauretcomputadores.com/images/products/Product_202201251831481790013372.png",
                "condition": "usado",
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "Imágenes sin igual en tu hogar con este LG UHD Smart TV. Los programas que quieres ver se reproducen en calidad 4K Real con mayor detalle, los colores, sonidos y lugares toman una mejor perspectiva con el procesador Alpha 5 que potencializa cada contenido para vivir una experiencia inmersiva, el cine en calidad cinematográfica se disfruta en casa con Fillmaker Mode y HDR pues logran suavizar la imagen y mostrarla como la imaginó su creador, además cuenta con una varita mágica: el Control Remoto que es fácil e intuitivo, escucha tu voz para responder en segundos con tu búsqueda deseada. La vida es buena cuando tienes un televisor LG, superior en todos los aspectos ¡lleva el tuyo ahora!"
            }
        ]
    }



let base = 
    {
        "author": {
            "name": "diego",
            "lastname": "palacios",
        },
        "categorie": "smartphones",
    }




app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/items/', (request, response) => {
    response.json(items)
})

app.get('/api/items/:id', (request, response) => {
    const id = request.params.id
    const smartphone = items.items.find(smartphone => smartphone.id === id)
    base["items"] = smartphone ;
    if (base) {
        return response.json(base)
    } else {
        response.status(404).end()
    }
    base["items"] = "" ;
})

app.get('/api/items/search/:title', (request, response) => {
    const title = request.params.title.toLowerCase()
    const smartphone = items.items.filter(smartphone => smartphone.title.toLowerCase().includes(title))
    base["items"] = smartphone ;
    if (smartphone) {
        return response.json(base)
    } else {
        response.status(404).end()
    }
    base["items"] = "" ;
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})