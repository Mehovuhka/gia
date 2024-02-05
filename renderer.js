const mainDiv = document.getElementById('main_div')
createStartPage()

function createStartPage() {
  const divButs = document.createElement('div')
  mainDiv.append(divButs)
  const btnReg = document.createElement("button")
  btnReg.textContent = "Зарегистрироваться"
  const btnAutho = document.createElement("button")
  btnAutho.textContent = "Войти"
  divButs.append(btnReg, btnAutho)

  btnReg.addEventListener('click', async ()=>{
    mainDiv.removeChild(divButs)
    createRegPage()
  })
  btnAutho.addEventListener('click', async ()=>{
    mainDiv.removeChild(divButs)
    createAuthoPage()
  })
}

function createRegPage() {
  const divReg = document.createElement('div')
  mainDiv.append(divReg)
  const dinInputsReg = document.createElement('div')
  const inputName = document.createElement('input')
  inputName.placeholder = "Введите свое имя"
  const inputLogin = document.createElement('input')
  inputLogin.placeholder = "Придумайте и введите логин"
  const inputPass = document.createElement('input')
  inputPass.placeholder = "Придумайте и введите пароль"
  const inputPassNow = document.createElement('input')
  inputPassNow.placeholder = "Повторно введите пароль"
  const inputPhone = document.createElement('input')
  inputPhone.placeholder = "Введите свой телефон"
  const buttonLeft = document.createElement("button")
  buttonLeft.textContent = "Вернуться на главную"
  const buttonGo = document.createElement("button")
  buttonGo.textContent = "Зарегестрироваться"
  dinInputsReg.append(inputName, inputLogin, inputPass, inputPassNow, inputPhone)
  divReg.append(dinInputsReg, buttonLeft, buttonGo)
  localStorage.setItem("name", JSON.stringify(inputName.value))
  
  buttonLeft.addEventListener('click', async ()=>{
    mainDiv.removeChild(divReg)
    createStartPage()
  })
  buttonGo.addEventListener('click', async () =>{
    mainDiv.removeChild(divReg)
    createHomePage()
  })
}

function login(name, login){
  localStorage.setItem("name", JSON.stringify(name))
  localStorage.setItem("login", JSON.stringify(login))
}

function createAuthoPage() {
  const divAutho = document.createElement('div')
  mainDiv.append(divAutho)
  const inputName = document.createElement('input')
  inputName.placeholder = "Введите свое имя"
  const inputLogin = document.createElement('input')
  inputLogin.placeholder = "Введите свой логин"
  const buttonLeft = document.createElement("button")
  buttonLeft.textContent = "Вернуться на главную"
  const buttonGo = document.createElement("button")
  buttonGo.textContent = "Войти"
  divAutho.append(inputName, inputLogin, buttonLeft, buttonGo)

  buttonLeft.addEventListener('click', async ()=>{
    mainDiv.removeChild(divAutho)
    createStartPage()
  })
  buttonGo.addEventListener('click', async () =>{
    mainDiv.removeChild(divAutho)
    login(inputName.value, inputLogin.value )
    createHomePage()
  })
}






function createHomePage() {
  const namee = JSON.parse(localStorage.getItem("name"))
  const divHome =  document.createElement('div')
  mainDiv.append(divHome)
  const texte = document.createElement("h1")
  texte.textContent = "Здравствуйте, " + namee
  const buttonLeft = document.createElement("button")
  buttonLeft.textContent = "Выйти из аккаунута"
  divHome.append(texte, buttonLeft)

  buttonLeft.addEventListener('click', async ()=>{
    createModalExit(divHome)
  })

}

function createModalExit(divHome) {
  const divModal = document.createElement('div')
  mainDiv.append(divModal)
  const hModal = document.createElement('h2')
  hModal.textContent = "Выйти из аккаунта?"
  const butModal = document.createElement('button')
  butModal.textContent = "Да, выйти"
  divModal.append(hModal, butModal)

  butModal.addEventListener('click', async () =>{
    mainDiv.removeChild(divHome)
    mainDiv.removeChild(divModal)
    createStartPage()
  })
}


