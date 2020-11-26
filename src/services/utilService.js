

export const utilService ={
    getEmpty
}

function getEmpty() {
    return {
       
        visits:50,
        likes: 10,
        name: '', 
        description:'',
        imgUrl:'',
        tags:[
            'love',
            'happy'
        ],
        genre:'',
        createdBy: {
            userName: 'Dennis',
            imgUrl: 'https://res.cloudinary.com/daqs7x8my/image/upload/w_100,h_100,c_thumb,g_face/v1601183977/clr5fhfweew2fyaixprr.jpg',
            id: '123'
        },
        songs:[
            {
                id: 'GC_mV1IpjWA',
                youtubeId: 'GC_mV1IpjWA',
                title: 'The Little Mermaid - Under the Sea (from The Little Mermaid) ',
                imgUrl: 'https://i.ytimg.com/vi/GC_mV1IpjWA/hqdefault.jpg',
                duration: '3:27'
            },
        ]
    }
}
function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}