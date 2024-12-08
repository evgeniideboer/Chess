const container = document.getElementById("container");
let arr_chessboard = [];
console.log(arr_chessboard);

const blackKing = {
  string: 0,
  row: 3,
};
const blackKnight = {
  string: 0,
  row: 1,
};

const pawn_black = document.getElementById("pawn_black");
const bishop_white = document.getElementById("bishop_white");
const knight_white = document.getElementById("knight_white");
const knight_black = document.getElementById("knight_black");
const king_white = document.getElementById("king_white");
const king_black = document.getElementById("king_black");

const theme = document.querySelector('.checkbox-green input[type="checkbox"]');

theme.addEventListener("change", function () {
  const field_black = document.querySelectorAll("#field_black");
  const field_white = document.querySelectorAll("#field_white");

  if (theme.checked) {
    field_black.forEach((field) => {
      field.style.background = "darkgreen";
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

document.querySelector(".btn_King").onclick = MoveKing;
document.querySelector(".btn_Knight").onclick = MoveKnight;

function MoveKing() {
  arr_chessboard = [];
  container.replaceChildren();
  blackKing.string++;
  FieldDrawing();
}
function MoveKnight() {
  arr_chessboard = [];
  container.replaceChildren();
  blackKnight.string = blackKnight.string + 2;
  blackKnight.row++;

  FieldDrawing();
}

function FieldDrawing() {
  arr_chessboard = [];
  for (let i = 0; i < 8; i++) {
    arr_chessboard.push([]);
    let row = document.createElement("div");
    row.className = "row";
    // container.removeChild(row);

    for (let j = 0; j < 8; j++) {
      const field = document.createElement("div");
      field.className = "field";
      field.id = (i + j) % 2 === 0 ? "field_white" : "field_black";

      if (i === blackKing.string && j === blackKing.row) {
        field.appendChild(king_black);
      }
      if (i === blackKnight.string && j === blackKnight.row) {
        field.appendChild(knight_black);
      }
      // if (i === 1 && j === 3) {
      //   field.appendChild(pawn_black);
      // }

      // if (i === 7 && j === 4) {
      //   field.appendChild(king_white);
      // }
      // if (i === 7 && j === 2) {
      //   field.appendChild(bishop_white);
      // }
      // if (i === 7 && j === 6) {
      //   field.appendChild(knight_white);
      // }
      // if (i === 0 && j === 1) {
      //   field.appendChild(knight_black);
      // }

      arr_chessboard[i].push(j);
      row.appendChild(field);
    }
    container.appendChild(row);
  }
}

FieldDrawing();
