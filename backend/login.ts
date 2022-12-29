export const fetchNonce = async (address: string) => {
  const nonceRes = await fetch(
     `http://localhost:3001/authService/getNonce?address=${address}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  )
  return await nonceRes.json()
}

export const sendSignedNonce = async (signedNonce: string, address: string) => {
  const loginRes = await fetch(
    `http://localhost:3001/authService/loginWallet?address=${address}&signature=${signedNonce}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }
  )
  return await loginRes.json()
}
