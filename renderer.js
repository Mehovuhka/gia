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


// -- CREATE TABLE roles
// -- (
// --     id_role SERIAL PRIMARY KEY,
// -- 	name_role CHARACTER VARYING(30) unique not null
	
// -- );

// -- CREATE TABLE users
// -- (
// --     id_user SERIAL PRIMARY KEY,
// --     name_user CHARACTER VARYING(50) unique not null,
// --     login_user CHARACTER VARYING(20) unique not null,
// -- 	password_user CHARACTER VARYING(20) unique not null,
// -- 	phone_user bigint unique not null,
// -- 	user_role integer references roles (id_role) not null
// -- );

// -- CREATE TABLE statuses
// -- (
// --     id_status SERIAL PRIMARY KEY,
// -- 	name_status CHARACTER VARYING(30) unique not null
	
// -- );

// -- CREATE TABLE machines
// -- (
// --     id_machine SERIAL PRIMARY KEY,
// -- 	name_machine CHARACTER VARYING(30) unique not null
	
// -- );

// -- CREATE TABLE problems
// -- (
// --     id_problem SERIAL PRIMARY KEY,
// -- 	name_problem CHARACTER VARYING(30) unique not null
	
// -- );

// -- CREATE TABLE zayavka
// -- (
// --     id_zayavka SERIAL PRIMARY KEY,
// -- 	customer integer references users (id_user) not null,
// -- 	rabotnik integer references users (id_user) not null,
// --     type_machine integer references machines (id_machine) not null,
// -- 	type_problem integer references problems (id_problem) not null,
// -- 	text_problem CHARACTER VARYING(200),
// -- 	repair_status integer references statuses (id_status) not null
// -- );

// -- insert into roles (name_role) values ('Заказчик'), ('Чинила'), ('Манагер')
// -- insert into users (name_user, login_user, password_user, phone_user, user_role) values 
// -- ('Алексей Гавкин', 'alexgov1n', 'gavk1n', 1992223344, 1),
// -- ('Михаил Шкафка', 'miha2002', 'khav1ka', 1997223354, 1),
// -- ('Игорь Скрутов', 'scru11', 'igor123', 1792293344, 2),
// -- ('Антонио Лепс', 'ant0n10', '2leps2', 1994223345, 2),
// -- ('Роберт Малахов', 'malakhov1ni', 'r0pert1n1', 1978923344, 3)
// -- insert into statuses (name_status) values ('В обработке'), ('Обследование'), ('В работе'), ('Ремонт завершен')
// -- insert into machines (name_machine) values ('Компьтер'), ('Холодильник'), ('Электрическая плита'), ('Сервер'), ('Моноблок')
// -- insert into problems (name_problem) values ('Не работает'), ('Не стартует'), ('Высокие температуры'), ('Оголился провод'), 
// -- ('Короткое замыкание'), ('Нет изображения'), ('Не холодит'), ('Сломана ножка крепления'), ('Вмятина на корпусе'), ('Не работают юсб порты')
// -- insert into zayavka (customer, rabotnik, type_machine, type_problem, text_problem, repair_status) values
// -- (1, 3, 1, 2, 'Плоха все вообьще писец', 2)

