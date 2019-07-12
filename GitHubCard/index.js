const cards = document.querySelector('.cards');
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/skyler2440')
  .then(data => {
    console.log(data.data)
    const card = createCard(data.data)
    cards.append(card)
    // const avatar = data.data.avatar_url;
    // const name = data.data.name;
    // const username = data.data.login;
    // const location = data.data.location;
    // const userurl = data.data.html_url;
    // const followers = data.data.followers;
    // const following = data.data.following;
    // const bio = data.data.bio;
    // console.log(avatar, name, username, location,
    //   userurl, followers, following, bio)
      // cards.appendChild(createCard(avatar, name, username, location,
      //   userurl, followers, following, bio))
  })
  .catch(error => {
    // Handles failure:
    console.log('The API is currently down, try again later', error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(followersArray => {
    axios.get(`https://api.github.com/users/${followersArray}`)
    .then(res => {
      console.log(res.data);
      const card = createCard(res.data);
      cards.append(card)
    })


})
// 
// const x = followersArray.forEach(function (item) {
//   .then(data => {
//     console.log('response', data)
//     const avatar = data.data.avatar_url;
//     const name = data.data.name;
//     const username = data.data.login;
//     const location = data.data.location;
//     const userurl = data.data.html_url;
//     const followers = data.data.followers;
//     const following = data.data.following;
//     const bio = data.data.bio;
//     console.log(avatar, name, username, location,
//       userurl, followers, following, bio)
//       cards.appendChild(createCard(avatar, name, username, location,
//         userurl, followers, following, bio))
//   })
//   .catch(error => {
//     // Handles failure:
//     console.log('The API is currently down, try again later', error)
//   })
// });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(user)
  {
const card = document.createElement('div');
const image = document.createElement('img');
const cardInfo = document.createElement('div');
const header = document.createElement('h3');
const uNameP = document.createElement('p');
const locP = document.createElement('p');
const profileP = document.createElement('p');
const address = document.createElement('a');
const followerP = document.createElement('p');
const followingP = document.createElement('p');
const bioP = document.createElement('p');

card.appendChild(image);
card.appendChild(cardInfo);
cardInfo.appendChild(header);
cardInfo.appendChild(uNameP);
cardInfo.appendChild(locP);
profileP.appendChild(address);
cardInfo.appendChild(followerP);
cardInfo.appendChild(followingP);
cardInfo.appendChild(bioP);
card.classList.add('card');
cardInfo.classList.add('card-info');
header.classList.add('name');
uNameP.classList.add('username');

image.src = user.avatar_url
header.textContent = user.name
uNameP.textContent = `Username: ${user.login}`
locP.textContent = `Location ${user.location}`
// profileP.textContent = 
address.href = user.html_url
address.textContent = user.html_url
followerP.textContent = `Followers: ${user.followers}`
followingP.textContent = `Following: ${user.following}`
bioP.textContent = `Bio: ${user.bio}`
return card;

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
