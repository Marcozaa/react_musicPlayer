import { v4 as uuidv4 } from 'uuid';

function chillHop(){
    return [
        {

            name: "Cruising",
            artist: "Evil Needle",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#E96E50', "#E99B59"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17087"
        },
        {

            name: "Reason",
            artist: "Ruck P",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#896E84', "#E99B59"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21661"
        },
        {

            name: "Got it",
            artist: "Misha, Jussi Alme",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#F18475', "#2A3654"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15041"
        },
        {

            name: "Toofpick",
            artist: "Blue wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#7181C2', "#1F2A48"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11227"
        },
        {
            name: "Aftersome",
            artist: "Toonorth",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#364B66', "#3D5070"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17944"
        }
    ]
}

export default chillHop