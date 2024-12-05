const container = document.getElementById("container");

const theme = document.querySelector('.checkbox-green input[type="checkbox"]');

theme.addEventListener("change", function () {
  const field_black = document.querySelectorAll("#field_black");
  const field_white = document.querySelectorAll("#field_white");

  if (theme.checked) {
    field_black.forEach((field) => {
      field.style.background = "black";
    });
    field_white.forEach((field) => {
      field.style.background = "grey";
    });
  } else {
    field_black.forEach((field) => {
      field.style.background = "darkcyan";
    });
    field_white.forEach((field) => {
      field.style.background = "wheat";
    });
  }
});

for (let i = 0; i < 8; i++) {
  let row = document.createElement("div");
  row.className = "row";

  for (let j = 0; j < 8; j++) {
    const field = document.createElement("div");
    field.className = "field";
    field.id = (i + j) % 2 === 0 ? "field_white" : "field_black";
    row.appendChild(field);
  }
  container.appendChild(row);
}