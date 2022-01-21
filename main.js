let about = document.querySelector('.about')
    contact = document.querySelector('.contact')
    info = document.getElementById('info')
    form = document.getElementById('form')
    info_color = document.getElementById('info_color')
    form_color = document.getElementById('form_color')
    reg = document.querySelector('.reg')
    but1 = document.querySelector('.but1')
    but2 = document.querySelector('.but2')
    body = document.querySelector('body')
info.addEventListener('click',function(){
    about.style.display='flex'
})
form.addEventListener('click',function(){
    contact.style.display='block'
})
info_color.addEventListener('click',function(){
    about.style.background='gray'
})
form_color.addEventListener('click',function(){
    contact.style.border='3px solid gray'
    reg.style.background='gray'
    but1.style.background='gray'
    but2.style.background='gray'
})