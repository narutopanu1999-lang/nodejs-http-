const submit = document.querySelector('#productForm');

console.log("Form JS is loaded");

const url = 'http://localhost:3000/api/products';

submit.addEventListener('submit', async (e) => {

    e.preventDefault();

    const obj = {
        productName: e.target.productName.value
    };
     
    axios.post(url, obj)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })

});