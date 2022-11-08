// A mock function to mimic making an async request for data
export async function fetchProperties(query = "") {
  const response = fetch(
    `https://uh9mp9f92g.execute-api.us-east-1.amazonaws.com/production/test-get-listings?query=${query}`
  );

  return await (await response).json();
}
