export function loginUsuario(usuario, clave, router) {
  if (usuario === 'admin' && clave === '1234') {
    localStorage.setItem('usuarioLogueado', usuario)
    router.push('/materia') // Redirige
  } else {
    alert('Credenciales incorrectas')
  }
}

