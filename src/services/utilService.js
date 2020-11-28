

export const utilService ={
    getEmpty,
    makeId
}

function getEmpty() {
    return {
       
        visits:50,
        likes: 10,
        name: '', 
        description:'',
        imgUrl:'https://res.cloudinary.com/bluebeat/image/upload/v1606408214/bluebeat/qvnmmdyspo3ceez5vjoj.png',
        tags:[
            'love',
            'happy'
        ],
        genre:'',
        createdBy: {
            userName: 'Dennis',
            imgUrl: '',
            id: '123'
        },
        songs:[
         
        ]
    }
}



function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}