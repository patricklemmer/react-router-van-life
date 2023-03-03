export async function getVans() {
  const response = await fetch('/api/vans');
  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
}
