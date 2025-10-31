<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<form id="form">
    <label for="id">id :</label>
    <input type="text" id="id">

    <label for="name">nom :</label>
    <input type="text" id="name">

    <label for="type">type :</label>
    <select id="type">
      <option value="">-- tous --</option>
      <option value="Grass">Grass</option>
      <option value="Fire">Fire</option>
      <option value="Water">Water</option>
      <option value="Electric">Electric</option>
      <option value="Ice">Ice</option>
      <option value="Psychic">Psychic</option>
      <option value="Normal">Normal</option>
      <option value="Bug">Bug</option>
      <option value="Poison">Poison</option>
      <option value="Rock">Rock</option>
      <option value="Ground">Ground</option>
    </select>
    <input type="submit" id="filter" value="Filtrer">
  </form>

  <ul id="result"></ul>
  <script src="script.js"></script>
</body>
</html>