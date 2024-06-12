const users = [
  { id: 1, name: "Alice", age: 25, transactions: [100, 200, 150] },
  { id: 2, name: "Bob", age: 30, transactions: [300, 400] },
  { id: 3, name: "Charlie", age: 35, transactions: [50, 150, 200, 75] },
];

function displayData(data) {
  const table = document.getElementById("data-table");
  // table.innerHTML = `
  //   <tr>
  //     <th>ID</th>
  //     <th>Name</th>
  //     <th>Age</th>
  //     <th>Transactions</th>
    </tr>
  `;
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.transactions.join(", ")}</td>
    `;
    table.appendChild(row);
  });
}

function filterData() {
  const filtered = users.filter((user) => user.age > 28);
  displayData(filtered);
}

function displayNames() {
  const names = users.map((user) => user.name);
  alert(`Names: ${names.join(", ")}`);
}

function calculateTotalTransactions() {
  const total = users.reduce((sum, user) => {
    return (
      sum + user.transactions.reduce((userSum, amount) => userSum + amount, 0)
    );
  }, 0);
  alert(`Total Transactions: $${total}`);
}

document.addEventListener("DOMContentLoaded", () => {
  displayData(users);
});
