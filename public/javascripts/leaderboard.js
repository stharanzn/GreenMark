console.clear();

const team = [
{
  rank: 1,
  name: 'Reliance Industries Limited',
  handle: 'Relaince',
  img: '/images/bbc.png',
  kudos: 36,
  sent: 31 },
{
  rank: 2,
  name: 'Infosys',
  handle: 'kimimatiasraikkonen',
  img: '/images/bbc.png',
  kudos: 35,
  sent: 21 },
{
  rank: 3,
  name: 'Tata Consultancy Services',
  handle: 'vettelofficial',
  img: '/images/bbc.png',
  kudos: 34,
  sent: 56 },
{
  rank: 4,
  name: 'Tata Motors',
  handle: 'Tata Motors',
  img: '/images/bbc.png',
  kudos: 33,
  sent: 4 },
{
  rank: 5,
  name: 'Tech Mahindra Ltd',
  handle: 'landonorris',
  img: '/images/bbc.png',
  kudos: 33,
  sent: 16 },
{
  rank: 6,
  name: 'ITC Limited',
  handle: 'charles_leclerc',
  img: '/images/bbc.png',
  kudos: 32,
  sent: 6 },
{
  rank: 7,
  name: 'Mahindra & Mahindra Ltd',
  handle: 'georgerussell63',
  img: '/images/bbc.png',
  kudos: 30,
  sent: 21 },
{
  rank: 8,
  name: 'Adani Ports and Special Economic Zone Ltd',
  handle: 'danielricciardo',
  img: '/images/bbc.png',
  kudos:25,
  sent: 4 },
{
  rank: 9,
  name: 'Larsen & Toubro Limited',
  handle: 'alex_albon',
  img: '/images/bbc.png',
  kudos: 25,
  sent: 2 },
{
  rank: 10,
  name: 'Hindustan Unilever Limited',
  handle: 'carlossainz55',
  img: '/images/bbc.png',
  kudos: 25,
  sent: 24 },
{
  rank: 11,
  name: 'Wipro Limited',
  handle: 'Wipro Limited',
  img: '/images/bbc.png',
  kudos: 23,
  sent: 21,
},
{
  rank: 12,
  name: 'Wipro lLimited',
  handle: 'Wipro Limited',
  img: '/images/bbc.png',
  kudos: 23,
  sent: 21,
},
{
  rank: 12,
  name: 'HDFC Bank Limited',
  handle: 'HDFC',
  img: '/images/bbc.png',
  kudos: 22,
  sent: 21,
},
{
  rank: 13,
  name: 'Bharat Petroleum Corporation Limited',
  handle: 'Bharat',
  img: '/images/bbc.png',
  kudos: 21,
  sent: 23,
},
{
  rank: 14,
  name: 'Oil and Natural Gas Corporation Limited' ,
  handle: 'ONGC',
  img: '/images/bbc.png',
  kudos: 20,
  sent: 14,
},
{
  rank: 15,
  name: 'Bajaj Auto Limited'  ,
  handle: 'Bajaj',
  img: '/images/bbc.png',
  kudos: 20,
  sent: 10,
},
{
  rank: 16,
  name: 'Coal India Limited',
  handle: 'Coal India',
  img: '/images/bbc.png',
  kudos: 19,
  sent: 10,
},
{
  rank: 17,
  name: 'Ultratech Cement Limited',
  handle: 'Ultratech',
  img: '/images/bbc.png',
  kudos: '19',
  sent: '11',
},
{
  rank: 18,
  name: 'Bharat Heavy Electricals Limited',
  handle: 'Bharat',
  img: '/images/bbc.png',
  kudos: 18 ,
  sent: 4,
},
{
  rank: 19,
  name: 'Ludwig',
  handle: 'Ludwig',
  img: '/images/bbc.png',
  kudos: 18,
  sent:12
},
{
  rank: 20,
  name: 'Walmart',
  handle: 'Walmart',
  img: '/images/bbc.png',
  kudos: 17,
  sent:12
},

];



const imageurl = "/images/credit.png";


team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://instagram.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> 
                    <img src="${imageurl}" style = " width: 20% ;height:15% ;margin-left: 10px; vertical-align: -25%">
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];

// Render winner card
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">The Green Titan</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;