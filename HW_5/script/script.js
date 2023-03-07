const form = document.querySelector('.addInfo');
const button = document.querySelector('.addInfo button');
const users = document.querySelector('.users'); 
const usersList = [];

function members(vorname, nachname){
    const pElem = document.createElement('p');
    const pElem2 = document.createElement('p');
    const divElem = document.createElement('div');

    divElem.classList.add('item');

    pElem.innerText = vorname;
    pElem2.innerText =nachname;
    divElem.append(pElem, pElem2);
    users.append(divElem);
}
function rerender(){
    users.innerText = '';
    for (let i = 0; i < usersList.length; i++){
        members(usersList[i].vorname, usersList[i].nachname)
    }
}
form.addEventListener('submit', function (event){
    event.preventDefault();
    let vorname = form.vorname;
    let nachname = form.nachname;

    const newMember = {
        vorname: vorname.value,
        nachname: nachname.value,
    };
    usersList.push(newMember);

    vorname.value = '';
    nachname.value = '';
    rerender();
})
