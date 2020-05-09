export const makeContentUrl = ({ owner, repo, path }) =>
  `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

const trace = label => data => {
  console.log(`${label}: `, data)
  return data
}

export const getUser = () =>
  fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${localStorage.token}`
    }
  })
    .then(resp => resp.json())
    .then(trace('user'))

export const getFile = ({ owner, repo, path }) =>
  fetch(makeContentUrl({ owner, repo, path }), {
    headers: {
      ...(localStorage.token && {
        Authorization: `token ${localStorage.token}`
      })
    }
  })
    .then(resp => resp.json())
    .then(data => ({
      sha: data.sha,
      content: JSON.parse(atob(data.content))
    }))

export const updateFile = ({ url, message, content, sha }) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${localStorage.token}`
    },
    body: JSON.stringify({
      message,
      content: btoa(JSON.stringify(content, null, 2)),
      sha
    })
  }).then(resp => resp.json())

export const authenticate = () => {
  window.location.href =
    'https://github.com/login/oauth/authorize?client_id=6572d70cb198d755ee7b&scope=repo'
}

export const getToken = code =>
  fetch('https://kd2jpwr965.execute-api.eu-west-2.amazonaws.com/default', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  })
    .then(resp => resp.json())
    .then(data => data.token)

window.getFile = getFile

export default { getUser, updateFile, authenticate }
