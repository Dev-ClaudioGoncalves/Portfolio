const html = document.querySelector('.fa-html5');
const css = document.querySelector('.fa-css3-alt');
const js = document.querySelector('.fa-js');
const react = document.querySelector('.fa-react');
const bootstrap = document.querySelector('.fa-bootstrap');
const git = document.querySelector('.fa-git');
const elements = document.querySelector('.tecnologias > i');
const tecno = document.querySelector('.tecno');
const descrip = document.querySelector('.descrip');

html.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    html.classList.add('border')
    tecno.innerText = 'HTML 5';
    descrip.innerText = 'Conhecimentos em HTML 5 de nível intermediário adquiridos com os cursos: Onebitcode, B7Web e Origamid.'
})

html.addEventListener('mouseout', () =>{
    descrip.classList.remove('fontSize');
    html.classList.remove('border')
    tecno.innerText = '';
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})

css.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    css.classList.add('border')
    tecno.innerText = 'CSS 3';
    descrip.innerText = 'Conhecimentos em CSS 3 de nível intermediário adquiridos com os cursos: Onebitcode, B7Web e Origamid.'
})

css.addEventListener('mouseout', () =>{
    tecno.innerText = '';
    descrip.classList.remove('fontSize');
    css.classList.remove('border')
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})

js.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    js.classList.add('border')
    tecno.innerText = 'JAVASCRIPT';
    descrip.innerText = 'Conhecimentos em JAVASCRIPT de nível intermediário adquiridos com os cursos: Onebitcode, B7Web, Origamid e Jovem Programador.'
})

js.addEventListener('mouseout', () =>{
    tecno.innerText = '';
    descrip.classList.remove('fontSize');
    js.classList.remove('border')
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})

react.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    react.classList.add('border')
    tecno.innerText = 'REACT-JS';
    descrip.innerText = 'Conhecimentos em REACT-JS de nível básicos adquiridos com os cursos: Onebitcode, B7Web, Origamid e Jovem Programador.'
})

react.addEventListener('mouseout', () =>{
    tecno.innerText = '';
    descrip.classList.remove('fontSize');
    react.classList.remove('border')
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})

bootstrap.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    bootstrap.classList.add('border')
    tecno.innerText = 'Bootstrap';
    descrip.innerText = 'Conhecimentos em Bootstrap de nível básicos adquiridos com os cursos: Onebitcode e B7Web.'
})

bootstrap.addEventListener('mouseout', () =>{
    tecno.innerText = '';
    descrip.classList.remove('fontSize');
    bootstrap.classList.remove('border')
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})


git.addEventListener('mouseover', () =>{
    tecno.classList.add('color')
    descrip.classList.add('fontSize')
    git.classList.add('border')
    tecno.innerText = 'GIT/GITHUB';
    descrip.innerText = 'Conhecimentos em GIT/GITHUB de nível básicos adquiridos com os cursos: Onebitcode, B7Web, Origamid e Jovem Programador. .'
})

git.addEventListener('mouseout', () =>{
    tecno.innerText = '';
    descrip.classList.remove('fontSize');
    git.classList.remove('border')
    descrip.innerText = 'passe o cursor do mouse no card para ler*'
})
