let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const orders =(items) =>{
 const order = items.map(item =>{
    const {quantity, itemName, unitPrice} = item;
    const total = quantity * unitPrice;
    return `<tr>
    <td>${quantity}</td>
    <td>${itemName}</td>
    <td>${total}</td>
  </tr>`
  })
 return `
 <table>
    <thead>
      <tr>
        <th>QTY</th>
        <th>ITEM</th>
        <th>TOTAL</th>
      </tr>
    </thead>
    <tbody>
     ${order}
    </tbody>
  </table>
 `
}