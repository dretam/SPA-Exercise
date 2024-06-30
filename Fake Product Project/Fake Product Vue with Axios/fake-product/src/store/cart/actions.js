export default{
    async fetchCart(context, selectedId){
        if(context.getters.anyUser(selectedId)){
            return;
        }
        let user = { carts: [] };
        const userPromise = await fetch(`https://fakestoreapi.com/users/${selectedId}`);
        const userResponse = await userPromise.json();
        user.userId = userResponse.id;
        user.userFullName = `${userResponse.name.firstname} ${userResponse.name.lastname}`;
        user.username = userResponse.username;
        user.email = userResponse.email;
        const cartPromise = await fetch(`https://fakestoreapi.com/carts/user/${selectedId}`);
        const responseCarts = await cartPromise.json();
        for(let responseCart of responseCarts){
            let cart = {
                id: responseCart.id,
                date: responseCart.date,
                products: responseCart.products
            }
            for(let product of cart.products){
                const productPromise = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
                const {image, title, price} = await productPromise.json();
                product.image = image;
                product.title = title;
                product.price = price;
            }
            user.carts.push(cart);
        }
        context.commit('addUser', user);
    }
}