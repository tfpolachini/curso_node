function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '997685622',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            rua: 'rua dos bobos',
            numero: '0'
        })
    }, 2000)
}

const usuarioPromise = obterUsuario()

usuarioPromise
    .then((resultado) => {
        console.log('resultado', resultado)
    })
    .catch((error) => {
        console.error('error', error)
    })

// function resolverUsuario(erro, usuario) {
//     console.log('usuario', usuario)
// }

// const usuario = obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if (error) {
//         console.log("DEU RUIM em USUÁRIO", error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.log("DEU RUIM em TELEFONE", error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.log("DEU RUIM em ENDERECO", error)
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero},
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })