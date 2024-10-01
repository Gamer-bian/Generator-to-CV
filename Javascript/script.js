const buttonSubmit = document.querySelector('#button-submit');
const inputName = document.querySelector('#name');
const inputTitulo = document.querySelector('#titulo');
const inputEmail = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');
const inputFechaNacimiento = document.querySelector('#fecha-nacimiento');
const inputLinkLinkedin = document.querySelector('#link-linkedin');
const inputImagen = document.querySelector('#imagen');
const sectionCurriculum = document.querySelector('#curriculum');

// const inputHabilidades = document.querySelector('#input-habilidades');
// const selectHabilidades = document.querySelector('#select-habilidades');
// const valueInputHabilidades = inputHabilidades.value;
// const valueSelectHabilidades = selectHabilidades.value;

const sectionHabilidades = document.querySelector('.section__habilidades');
const habilidadButton = document.querySelector('.habilidad__button');

sectionHabilidades.addEventListener('submit', function(event){
    event.preventDefault();
})

habilidadButton.addEventListener('click', function(){
    const habilidadesInputsContainer = document.querySelector('#habilidades-inpus-container');

    const habilidadesInpus = document.createElement('div');
    habilidadesInpus.setAttribute('class', 'habilidades__inputs skills-divs');

    const inputHabilidad = document.createElement('input');
    const valueInputHabilidad = inputHabilidad.value;
    inputHabilidad.setAttribute('type', 'text');
    inputHabilidad.setAttribute('placeholder', 'Habilidad');
    inputHabilidad.setAttribute('class', 'input-all');
    inputHabilidad.setAttribute('id', 'input-habilidades');

    const selectHabilidad = document.createElement('select');
    selectHabilidad.setAttribute('class', 'input-all');
    selectHabilidad.setAttribute('id', 'select-habilidades');

    const selectOptionHabilidad1 = document.createElement('option');
    selectOptionHabilidad1.setAttribute('value', '1');
    selectOptionHabilidad1.textContent = '1'
    const selectOptionHabilidad2 = document.createElement('option');
    selectOptionHabilidad2.setAttribute('value', '2');
    selectOptionHabilidad2.textContent = '2'
    const selectOptionHabilidad3 = document.createElement('option');
    selectOptionHabilidad3.setAttribute('value', '3');
    selectOptionHabilidad3.textContent = '3'
    const selectOptionHabilidad4 = document.createElement('option');
    selectOptionHabilidad4.setAttribute('value', '4');
    selectOptionHabilidad4.textContent = '4'
    const selectOptionHabilidad5 = document.createElement('option');
    selectOptionHabilidad5.setAttribute('value', '5');
    selectOptionHabilidad5.textContent = '5';

    habilidadesInpus.appendChild(inputHabilidad);
    habilidadesInpus.appendChild(selectHabilidad);

    selectHabilidad.appendChild(selectOptionHabilidad1);
    selectHabilidad.appendChild(selectOptionHabilidad2);
    selectHabilidad.appendChild(selectOptionHabilidad3);
    selectHabilidad.appendChild(selectOptionHabilidad4);
    selectHabilidad.appendChild(selectOptionHabilidad5);

    habilidadButton.before(habilidadesInpus);
})













buttonSubmit.addEventListener('click', function(){
    const sectionCurriculumAside = document.createElement('aside');
    sectionCurriculumAside.setAttribute('id', 'aside');

    const sectionCurriculumContainer = document.createElement('section');
    sectionCurriculumContainer.setAttribute('id', 'sectionCurriculum');

    const asideHeader = document.createElement('div');
    asideHeader.setAttribute('class', 'header');

    const valueInputName = inputName.value;
    const asideHeaderName = document.createElement('h1');
    asideHeaderName.innerText = valueInputName;

    const valueInputTitulo = inputTitulo.value;
    const asideHeaderTitulo = document.createElement('h2');
    asideHeaderTitulo.innerText = valueInputTitulo;

    const valueInputImagen = inputTitulo.value;
    const asideHeaderImagen = document.createElement('img');
    asideHeaderImagen.setAttribute('src', "../images/82f0ec980bf247ae29e81bb697d378ea.jpg"); // (cambiar esto )

    const personalInfo = document.createElement('div');
    personalInfo.setAttribute('class', 'personal-info');

    const personalInfoTitulo = document.createElement('h3');
    personalInfoTitulo.setAttribute('class', 'titulo-h3');
    personalInfoTitulo.innerText = 'Informacion Personal';

    const personalInfoEmail = document.createElement('div');
    personalInfoEmail.setAttribute('class', 'personal-info__email');

    const personalInfoEmailTitulo = document.createElement('h4');
    personalInfoEmailTitulo.innerText = 'Correo Electronico:';
    
    const valueInputEmail = inputEmail.value;
    const personalInfoEmailContent = document.createElement('li');
    personalInfoEmailContent.innerText = valueInputEmail;

    const personalInfoTelefono = document.createElement('div');
    personalInfoTelefono.setAttribute('class', 'personal-info__telefono');

    const personalInfoTelefonoTitulo = document.createElement('h4');
    personalInfoTelefonoTitulo.innerText = 'Telefono:';
    
    const valueInputTelefono = inputTelefono.value;
    const personalInfoTelefonoContent = document.createElement('li');
    personalInfoTelefonoContent.innerText = valueInputTelefono;

    const personalInfoFechaNacimiento = document.createElement('div');
    personalInfoFechaNacimiento.setAttribute('class', 'personal-info__fecha-nacimiento');

    const personalInfoFechaNacimientoTitulo = document.createElement('h4');
    personalInfoFechaNacimientoTitulo.innerText = 'Fecha de nacimiento:';
    
    const valueInputFechaNacimiento = inputFechaNacimiento.value;
    const personalInfoFechaNacimientoContent = document.createElement('li');
    personalInfoFechaNacimientoContent.innerText = valueInputFechaNacimiento;

    const personalInfoLinkLinkedin = document.createElement('div');
    personalInfoLinkLinkedin.setAttribute('class', 'personal-info__linkedin');

    const personalInfoLinkLinkedinTitulo = document.createElement('h4');
    personalInfoLinkLinkedinTitulo.innerText = 'Enlace de Linkedin:';
    
    const valueInputLinkLinkedin = inputLinkLinkedin.value;
    const personalInfoLinkLinkedinContent = document.createElement('li');
    personalInfoLinkLinkedinContent.innerText = valueInputLinkLinkedin;



    const skillsContainer = document.createElement('div');
    skillsContainer.setAttribute('class', 'skills');

    const skillsContainerTitulo = document.createElement('h3');
    skillsContainerTitulo.setAttribute('class', 'titulo-h3');
    skillsContainerTitulo.innerText = 'Skills';

    const habilidadAsideDivSecond = document.createElement('div');
    habilidadAsideDivSecond.setAttribute('class', 'habilidad aside__div-second');

    const habilidadAsideDivSecondTitulo = document.createElement('h4');
    habilidadAsideDivSecondTitulo.innerText = 'Software';

    const habilidadAsideDivSecondContent = document.createElement('li');
    habilidadAsideDivSecondContent.innerText = '(5/5)';
    
    sectionCurriculum.appendChild(sectionCurriculumAside);
    sectionCurriculum.appendChild(sectionCurriculumContainer);
    sectionCurriculumAside.appendChild(asideHeader);
    asideHeader.appendChild(asideHeaderName);
    asideHeader.appendChild(asideHeaderTitulo);
    asideHeader.appendChild(asideHeaderImagen);
    sectionCurriculumAside.appendChild(personalInfo);
    personalInfo.appendChild(personalInfoTitulo);
    personalInfo.appendChild(personalInfoEmail);
    personalInfoEmail.appendChild(personalInfoEmailTitulo);
    personalInfoEmail.appendChild(personalInfoEmailContent);
    personalInfo.appendChild(personalInfoTelefono);
    personalInfoTelefono.appendChild(personalInfoTelefonoTitulo);
    personalInfoTelefono.appendChild(personalInfoTelefonoContent);
    personalInfo.appendChild(personalInfoFechaNacimiento);
    personalInfoFechaNacimiento.appendChild(personalInfoFechaNacimientoTitulo);
    personalInfoFechaNacimiento.appendChild(personalInfoFechaNacimientoContent);
    personalInfo.appendChild(personalInfoLinkLinkedin);
    personalInfoLinkLinkedin.appendChild(personalInfoLinkLinkedinTitulo);
    personalInfoLinkLinkedin.appendChild(personalInfoLinkLinkedinContent);

    sectionCurriculumAside.appendChild(skillsContainer);
    skillsContainer.appendChild(skillsContainerTitulo);
    skillsContainer.appendChild(habilidadAsideDivSecond);
    habilidadAsideDivSecond.appendChild(habilidadAsideDivSecondTitulo);
    habilidadAsideDivSecond.appendChild(habilidadAsideDivSecondContent);

})