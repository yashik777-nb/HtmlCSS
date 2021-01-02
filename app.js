document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form-group")
    .addEventListener("submit", submitButton);
});

function submitButton(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  console.log(fd);
  for (let key of fd.keys()) console.log(key, fd.get(key));

  fd.forEach((value) => console.log(value));
}
