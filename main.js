const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1122, color: 'green'},
                {id: 1212, color: 'blue'}
            ],
            shipping: [
                {Ethiopia: '$50'}, 
                {America: '$35'},
                {North_Korea: 'No shipping there!'}
            ]
        }
    }
})
