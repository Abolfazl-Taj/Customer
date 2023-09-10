let btn = document.querySelector(".btn");
let customers = document.querySelector(".output");
let input = document.querySelector(".input");
btn.addEventListener("click", () => {
  let data = new XMLHttpRequest();
  data.open("GET", "./data.json", true);
  data.onload = function (e) {
    if (this.status == 200) {
      let customer = JSON.parse(this.responseText);
      let output = ``;
      if( !input.value == ''){
        let Meghdar = input.value
        ///////Error Catch
          if(Meghdar<0 ){
            alert("مقدار داده نامعتبر است ")
            input.value = null;
            e.preventDefault()
          }
          if(customer[Meghdar] == undefined){
            alert("مقدار داده شده در سیستم ثبت نشده است ")
            input.value = null;
            e.preventDefault()
          }
          ///////Error Catch

        output += `
        <ul>
        <li> ID : ${customer[Meghdar].Num} </li>
        <li> Name : ${customer[Meghdar].Name} </li>
        <li> Lname : ${customer[Meghdar].Lname} </li>
        <li> Sex : ${customer[Meghdar].Gender} </li>
        <li> Age : ${customer[Meghdar].Age} </li>
        <li> Phone : ${customer[Meghdar].number} </li>
        </ul>
        `;
            customers.innerHTML = output;
          input.value = null
      }
      else{
        customer.forEach(function (customer) {
          output += `
      <ul>
      <li> ID : ${customer.Num} </li>
      <li> Name : ${customer.Name} </li>
      <li> Lname : ${customer.Lname} </li>
      <li> Sex : ${customer.Gender} </li>
      <li> Age : ${customer.Age} </li>
      <li> Phone : ${customer.number} </li>
      </ul>
      `;
          customers.innerHTML = output;
        });
      }

    
    
    
    }
  };
  data.send();
});
