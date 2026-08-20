const members = [
  {
    name: 'Aditya Raj',
    seed: 'aditya-raj',
    style: 'avataaars',
    opts: 'top=shortFlat&facialHair=beardLight&mouth=smile'
  },
  {
    name: 'Tanish',
    seed: 'tanish',
    style: 'micah',
    opts: 'facialHair=beard&hair=dougFunny'
  },
  {
    name: 'Aayan',
    seed: 'aayan',
    style: 'lorelei',
    opts: 'beard=variant02&hair=variant02'
  },
  {
    name: 'Aditya Kashyap',
    seed: 'aditya-kashyap',
    style: 'open-peeps',
    opts: 'facialHair=moustache2'
  }
];

const grid = document.getElementById('team-grid');

members.forEach((member) => {
  const card = document.createElement('div');
  card.className = 'member';

  const img = document.createElement('img');
  img.src = `https://api.dicebear.com/9.x/${member.style}/png?seed=${member.seed}&size=128&${member.opts}&backgroundColor=33d6a6,ec3750,f1c40f,338eda,a633d6&backgroundType=gradientLinear`;
  img.alt = `${member.name} avatar`;
  img.loading = 'lazy';

  const name = document.createElement('h3');
  name.textContent = member.name;

  const role = document.createElement('p');
  role.className = 'role';
  role.textContent = 'Founding Member';

  card.append(img, name, role);
  grid.appendChild(card);
});