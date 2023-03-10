async function request({ url, method = 'POST', body = {} }) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  });
  return response.json(); 
};

async function generateHero() {
  const jsonHero = {
    name: true,
    powerstats: true,
    appearance: true,
    biography: true,
    work: true,
    connections: true,
    images: true
  };
    const result = await request({
      url: 'http://localhost:3000/hero',
      method: 'POST',
      body: jsonHero,
    });
    
    heroOnHTML(result);
    console.log(result);
}

async function heroOnHTML(result){
    let heroName = document.getElementById('heroGenerated');
    let paragraphHero = document.createElement('p');
    paragraphHero.classList.add('text-center', 'list-unstyled');

    let ulHero = document.createElement('ul');
    ulHero.classList.add('list-unstyled');
    
    let additionalInfos = document.createElement('p');
    additionalInfos.classList.add('font-weight-bold');
    
    let basicInfo = document.createElement('li');
    let additionalInformation = document.createElement('p');
    let liPublisher = document.createElement('li');
    let liWork = document.createElement('li');
    let liConnections = document.createElement('li');

    basicInfo.innerHTML = 'Congrats, you are ' + result.name + ' its a ' + result.appearance.gender + 'and your first appearance was in ' + result.biography.firstAppearance + '!' + ' Oh, i almost forgot, your real name is '+ result.biography.fullName;
    additionalInformation.innerHTML = `Additional information about ${result.name}`;
    liPublisher.innerHTML = result.biography.publisher;
    liWork.innerHTML = result.work.occupation;
    liConnections.innerHTML = result.connections.groupAffiliation;

    paragraphHero.appendChild(basicInfo);
    additionalInfos.appendChild(additionalInformation);
    ulHero.appendChild(liPublisher);
    ulHero.appendChild(liWork);
    ulHero.appendChild(liConnections);

    heroName.appendChild(paragraphHero);
    heroName.appendChild(additionalInformation);
    heroName.appendChild(ulHero);
};
