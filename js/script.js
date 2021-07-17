const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let data = {
    nome,
    email,
    telefone
  }

let converterData = JSON.stringify(data);

localStorage.setItem('lead', converterData)

let content = document.getElementById('content')

let carregando = '<p>Carregando ....</p>'

let pronto = '<p>Email Cadastrado com Sucesso ....</p>'

content.innerHTML = carregando


setTimeout(() => {
  content.innerHTML = pronto

}, 1000)

})

