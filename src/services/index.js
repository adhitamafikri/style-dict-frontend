import {fetch} from 'whatwg-fetch'
const apiUrl = process.env.REACT_APP_API_HOST

export const fetchTest = () => {
  console.log('testing fetch')
  fetch(`${apiUrl}/style`).then(res => {
    return res.json()
  }).then(resJson => {
    console.log(resJson)
  })
}

export const postCreateStyleDictForm = (params) => {
  console.log('posting create style dict Form!')
  console.log(params)
  fetch(`${apiUrl}/style`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(response => response.json())
    .then(resp => console.log(resp))
}
