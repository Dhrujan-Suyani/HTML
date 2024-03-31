window.onload = async function(){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const parent = document.getElementById("products");
        data.forEach(item => {
            const div = `
                <div class="item">
                    <img src="${item.image}" />
                    <h1>${item.title}</h1>
                    <h1>${item.price}</h1>
                </div>
            `;
            parent.innerHTML += div;
        });
    } catch (error) {
        console.log(error);
    }
} 