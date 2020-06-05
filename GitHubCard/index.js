/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/bneil7
*/

  axios.get(`https://api.github.com/users/bneil7`)

  .then(response => {
    console.log(response.data)
    const dataObj = response.data

    return dataObj;
  })

  .catch(error => {
    console.log('something went wrong', error)
  }, [])

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(object) {
  const card = document.createElement('div')
  card.classList.add('card')

  const userImg = document.createElement('img')
  userImg.src = object.avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const realName = document.createElement('h3')
  realName.classList.add('name')
  realName.textContent = object.realName

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = object.login

  const userLocation = document.createElement('p')
  userLocation.textContent = (`Location: ${object.location}`)

  const userProfile = document.createElement('p')
  userProfile.textContent = 'Profile: '

  const gitLink = document.createElement('a')
  gitLink.href = object.html_url
  gitLink.textContent = object.html_url

  const followers = document.createElement('p')
  followers.textContent = (`Followers: ${object.followers}`)

  const following = document.createElement('p')
  following.textContent = (`Following: ${object.following}`)
  
  const userBio = document.createElement('p')
    if(userBio.textContent!==null){
      userBio.textContent = (`Bio: ${object.bio}`)
    }


card.appendChild(userImg)
card.appendChild(cardInfo)
cardInfo.appendChild(realName)
cardInfo.appendChild(userName)
cardInfo.appendChild(userLocation)
cardInfo.appendChild(userProfile)
userProfile.appendChild(gitLink)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(userBio)

return card;

}

const entryPoint = document.querySelector('.cards');
const gitCards = document.querySelector('.cards');

axios.get(`https://api.github.com/users/bneil7`).then(response => {
  console.log('response from API', response)
  gitCards.appendChild(cardMaker(response.data))

}), [];

const followersArray = [
  'tetondan', 
  'dustinmyers', 
  'justsml', 
  'luishrd', 
  'bigknell'
];

followersArray.forEach(follower => {
  const thePromise = axios.get(`https://api.github.com/users/${follower}`)

  thePromise.then(response => {
    console.log('response from API', response)
    gitCards.append(cardMaker(response.object))
  })
  .catch(error => {
    console.log('something went wrong', error)
  }), [];
});
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
// axios.get('https://github.com/bneil7')
// .then(response => {
//   console.log
// })
// .catch(error => {
//   console.log
// },[]) //<--- dependency array, stops the API from hammering