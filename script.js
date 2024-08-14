let tableData = [];

document.getElementById('form-data').addEventListener('submit', (e) => {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
  const info = document.getElementById('info').value;
  const date = document.getElementById('date').value;

  const rowData = {
    category,
    amount,
    info,
    date,
  };

  tableData.push(rowData);

  const tableBody = document.getElementById('table-data');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${category}</td>
    <td>${amount}</td>
    <td>${info}</td>
    <td>${date}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(newRow);

  document.getElementById('form-data').reset();
});

document.getElementById('table-data').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.parentNode.parentNode;
    row.remove();
    tableData = tableData.filter((data) => data !== row);
  }
});