async function request({ url, method = 'GET', body = {} }) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok == false) {
    throw new Error(`Requisicao falhou com o status ${response.status}`);
  }
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
    images: {
      md: true
    }
  };
    const result = await request({
      url: 'http://localhost:3000/hero',
      method: 'POST',
      body: jsonHero,
    });
    console.log(result);
}

