async function request({ url, method = 'POST', body = {} }) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
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
    console.log(result);
}

