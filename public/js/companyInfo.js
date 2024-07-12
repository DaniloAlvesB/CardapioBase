const companyInfo = {
    name: 'Cardápio Online',
    location: 'Rua do Lago, 123',
    phone: '(99) 9999-9999',
}

var title = document.getElementsByTagName('title')[0]
if(title){
    title.innerText = companyInfo.name    
}