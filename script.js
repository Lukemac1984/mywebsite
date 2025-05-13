// Handle sample form submission
document.getElementById("sampleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  document.getElementById("formOutput").innerHTML = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}</p>`;
  this.reset();
});

// Handle embed code
document.getElementById("embedBtn").addEventListener("click", () => {
  const embedCode = document.getElementById("embedInput").value;
  document.getElementById("embedOutput").innerHTML = embedCode;
});
