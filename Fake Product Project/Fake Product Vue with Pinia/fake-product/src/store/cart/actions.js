import axios from "axios";

export default{
    async fetchCart(selectedId){
        if(this.anyUser(selectedId)){
            return;
        }
        let user = { carts: [] };

        const userResponse = await axios.get(`/users/${selectedId}`);
        const userData = userResponse.data;
        user.userId = userData.id;
        user.userFullName = `${userData.name.firstname} ${userData.name.lastname}`;
        user.username = userData.username;
        user.email = userData.email;

        const cartResponse = await axios.get(`/carts/user/${selectedId}`);
        const dataCarts = await cartResponse.data;
        for(let dataCart of dataCarts){
            let cart = {
                id: dataCart.id,
                date: dataCart.date,
                products: dataCart.products
            }
            await this.joinProducts(cart.products);
            user.carts.push(cart);
        }
        this.users.push(user);
    },
    async joinProducts(products){
        for(let product of products){
            const productResponse = await axios.get(`/products/${product.productId}`);
            const {image, title, price} = productResponse.data;
            product.image = image;
            product.title = title;
            product.price = price;
        }
    }
}