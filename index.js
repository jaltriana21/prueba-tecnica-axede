const init = () => {
    createLayout();
};


const createLayout = () => {
    const wrapper = document.getElementById('container');
    wrapper.appendChild(createForm());
};


const createForm = () => {
    const form = document.createElement('form');
    form.method  = 'post';
    form.classList = 'formulary';
    form.id = 'formulary';
    form.name = 'formulary';
    form.appendChild(contentInputs());
    form.appendChild(sendForm());
    return form;
};


const contentInputs = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(createInput('hotel','hoteles disponibles', 'text'));
    wrapper.appendChild(createInput('tarifa','tarifas (estandar, premium, vip)', 'text'));
    wrapper.appendChild(createInput('numeroHabitacion','numero de habitaciones', 'text'));
    wrapper.appendChild(createInput('fecha','fecha disponible', 'text'));
    wrapper.appendChild(createInput('cupo','cupo maximo', 'text'));
    return wrapper;
};



const createInput = (text,placeholder,type) => {
    const el = document.createElement('input');
    el.id = `input-form-${placeholder}`;
    el.classList = `input__form`;
    el.type = type;
    el.name = text;
    el.placeholder = placeholder;
    return el;
};


const sendForm = () => {
    const el = document.createElement('button');
    el.id = 'submit-form';
    el.classList = 'submit__form';
    el.name = 'submit';
    el.addEventListener('click', sendData);
    el.innerText = 'buscar';
    
    return el;
};




const sendData = (e) => {
    e.preventDefault();
    const petition = [];
    setBase(petition);
    sendFormulary(petition);
    validations();
};


const setBase = (petition) => {
    const inputs = document.getElementsByClassName('input__form');
    const content = [].slice.call(inputs);
    content.map((element)=>{petition.push(element.value)});
};


const sendFormulary = (petition) => {
        http(petition);
};


const http = (petition) => {
    return fetch('http://localhost/search/data.php',{
        method: 'POST',
        body: JSON.stringify(petition)
    });
};


const urlRequest = 'http://localhost/search/json.php';

const information = () => {
    const header = new Headers();
    return fetch(urlRequest, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: header
        })
        .then((response) => {
            return response.json();
        });
};


const validations = () => {
    const getData = information();
    const inputs = document.getElementsByClassName('input__form');
    const contents = [].slice.call(inputs);
    getData.then(res=>res[0][1] == contents[0].value?console.log([`numero de habitaciones stadar ${res[0][2]}`, `numero de habitaciones premium ${res[0][3]}`]):console.log('no se encontro el hotel'));
};





init();


