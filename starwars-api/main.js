var dados = {};

const buscaDados = async () => {
  const response = await fetch("https://swapi.dev/api/people/4");
  dados = await response.json();

  const parent = document.getElementById("parent");
  Object.keys(dados).forEach((item) => {
    const el = document.createElement("span");
    const br = document.createElement("br");
    el.innerHTML = dados[item];
    parent.appendChild(el);
    parent.appendChild(br);
  });
  // console.log(dados);
  // const elemento = document.getElementById("dados");
  // elemento.innerHTML = dados.name;

  // const nave = document.getElementById("dados");
  // elemento.innerHTML = dados.name;
};

buscaDados();
