document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;

  const age = calculateAge(dob);

  if (age >= 18 && age <= 55 && terms) {
    const data = { name, email, password, dob };

    // Saving data to local storage
    localStorage.setItem('userData', JSON.stringify(data));

    // Display submitted data in a table
    displayData(data);
  } else {
    alert('Please fill all details correctly, accept the terms and conditions, and ensure age is between 18 and 55.');
  }
});

function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function displayData(data) {
  const table = document.getElementById('dataTable');
  table.innerHTML = '';

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);

      cell1.innerHTML = `<strong>${key}</strong>`;
      cell2.innerHTML = data[key];
    }
  }

  document.getElementById('outputTable').style.display = 'block';
}
