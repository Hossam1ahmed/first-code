let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let count = document.getElementById('count')
let category = document.getElementById('category')
let total = document.getElementById('total')
let btn = document.getElementById('btn')

function gettotal(){
    if (price.value != '') {
       let result = +price.value + +taxes.value + +ads.value - +discount.value;
       total.innerHTML = result;
       total.style.background = 'green'
     total.style.color = 'white'
     } else {
        total.innerHTML = ''
        total.style.background = 'red'
        total.style.color = 'black'
       }
  }
 // dont refresh the items
 let newdata;
 if (localStorage.product != '') {
  // array dont catch json 
   newdata = JSON.parse(localStorage.product)
 } else {
   newdata = [];
 }
// to (creat) bulid object and add to him an array
 btn.onclick = function(){
    let newobj = {
    title:title.value,
     price:price.value,
     taxes:taxes.value,
     ads:ads.value,
     discount:discount.value,
     category:category.value,
     total:total.innerHTML
    }
    newdata.push(newobj)
    console.log(newdata);
    // localstorage catch json
    localStorage.setItem('product', JSON.stringify(newdata))
  }
  readdata()
  cleardata()

 function readdata(){
    let tble = '';
  
    for (let i = 0; i < newdata.length; i++) {
      tble =+  
`<tr>
      <td>${i}</td>
      <td>${newdata[i].title}</td>
      <td>${newdata[i].price}</td>
      <td>${newdata[i].taxes}</td>
      <td>${newdata[i].ads}</td>
      <td>${newdata[i].discount}</td>
      <td>${newdata[i].total}</td>
      <td> <button id="update">update</button></td>
      <td> <button id="delete">delete</button></td>
</tr>`
    }
document.getElementById('tbody').innerHTML = tble
  }
  function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    ads.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
  }
