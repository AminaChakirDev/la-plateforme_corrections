const jsonValueKey = (text, key) => {
  const json = JSON.parse(text);
  return json[key];
};

console.log(
  jsonValueKey(
    '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019" }'
  )
);
