/*
nome repo: **js-our-team**

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/
console.log('Test');

const team = [
  {
    img: '../our-team-base/img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    role: 'Founder & CEO'
  },
  {
    img: '../our-team-base/img/angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    role: 'Chief Editor'
  },
  {
    img: '../our-team-base/img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager'
  },
  {
    img: '../our-team-base/img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager'
  },
  {
    img: '../our-team-base/img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    role: 'Developer'
  },
  {
    img: '../our-team-base/img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    role: 'Graphic Designer'
  }
];

console.log('----------');

const teamContainer = document.querySelector('.team-container');


console.log(cicle());

cicle();

function cicle() {
  teamContainer.innerHTML = '';

  for (let membro of team){
    console.log(team[membro]);
    print(membro);

  };
};


function print(membro) {
  let contenuto = teamContainer.innerHTML;

  const {name, role, img} = membro;

  contenuto += `
  <div class="team-card">
    <div class="card-image">
    <img
      src="img/${img}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>${name}</h3>
    <p>${role}</p>
  </div>
</div>
`;
teamContainer.innerHTML = contenuto;
}

