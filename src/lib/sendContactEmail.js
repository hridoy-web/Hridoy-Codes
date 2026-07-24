export async function sendContactEmail(formData) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "f4af5842-789f-4c36-ae81-46f888b02928";

  if (!accessKey) {
    throw new Error('Access Key is missing');
  }

  const object = Object.fromEntries(formData);
  object.access_key = accessKey;

  const json = JSON.stringify(object);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  });

  const data = await response.json();
  return data;
}