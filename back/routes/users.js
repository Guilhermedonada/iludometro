const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Users')
const Users = mongoose.model('Users')


router.get('/get_friends', (req, res) => {

  Users.find().lean().sort({date: 'desc'}).then((user) => {
    res.status(200)
    res.send({user: user})
   
  }).catch((erro) => {
    res.status(500)
    res.send("Erro ao encontrar")
   
  })

})

router.get('/post_user', (req, res) => {
  const newUser = {
    name: 'Shrek',
    email: 'shrek@gmail.com',
    hate: 'Corn',
    votes: {
      heart: 1,
      heartbroken: 2,
      fire: 2,
      horse: 12,
      eye: 123,
      poo: 4,
      frown: 1,
      bomb: 2
    },
    friends: [
      {
        name: 'Donada',
        hate: 'skol',
        voted: false,
        votes: {
          heart: 10,
          heartbroken: 2,
          fire: 130,
          horse: 12,
          eye: 12412,
          poo: 2,
          frown: 1,
          bomb: 2
        }
      },
      {
        name: 'Otto',
        hate: 'it',
        voted: false,
        votes: {
          heart: 1,
          heartbroken: 2,
          fire: 2,
          horse: 12,
          eye: 123,
          poo: 4,
          frown: 1,
          bomb: 2
        }
      }
    ]
  }

  new Users(newUser).save().then(() => {
    res.send('Criado com sucesso')
    res.status(200)

  }).catch((erro) => {
    
    res.send("Houve um erro ao crriar")
    res.status(500)    
  })
})

// router.get('/post_user', (req, res) => {
//   const newUser = {
//     name: 'Shrek',
//     email: 'shrek@gmail.com',
//     hate: 'Corn'
//   }

//   new Users(newUser).save().then(() => {
//     res.send('Criado com sucesso')
//     res.status(200)

//   }).catch((erro) => {
    
//     res.send("Houve um erro ao crriar")
//     res.status(500)    
//   })
// })

// router.get('/categorias/add', (req, res) => {
// 	res.render('admin/addcategorias')
// })

// router.post('/categorias/nova', (req,res) => {

// 	var erros = []

// 	if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
// 		erros.push({
// 			texto: "Nome invalido"
// 		})
// 	}

// 	if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
// 		erros.push({
// 			texto: "Slug invalido"
// 		})
// 	}

// 	if(req.body.nome.length < 2){
// 		erros.push({
// 			texto: "Nome muito pequeno"
// 		})
// 	}

// 	if(erros.length > 0){
// 		res.render("admin/addcategorias", {erros: erros})
// 	} else {

// 		const novaCategoria = {
// 			nome: req.body.nome,
// 			slug: req.body.slug
// 		}

// 		new Categoria(novaCategoria).save().then(() => {
// 			req.flash('success_msg', "Categoria criada com sucesso")
// 			res.redirect('/admin/categorias')
// 		}).catch((erro) => {
// 			req.flash('error_msg', "Houve um erro ao adicionar")
// 			res.redirect('/admin')
// 		})
// 	}

// })

// router.get('/categorias/edit/:id', (req, res) => {
// 	Categoria.findOne({_id:req.params.id}).lean().then((categoria) => {
// 		res.render('admin/editcategorias', {categoria: categoria})
// 	}).catch((erro) => {
// 		req.flash("error_msg", "Essa categoria nao existe")
// 		res.redirect('/admin/categorias')
// 	})	
// })

// //nao esta funcionando
// router.post('/categorias/edit', (req, res) => {
// 	Categoria.findOne({_id : req.body.id}).lean().then((categoria) => {

// 		categoria.nome = req.body.nome
// 		categoria.slug = req.body.slug

// 		console.log(categoria)

// 		categoria.save().then(() => {
// 			req.flash("success_msg", "Categoria editada com sucesso")
// 			res.redirect('/admin/categorias')
// 			next()
// 		}).catch((erro) => {
// 			req.flash("error_msg", "Houve um erro ao salvar edicao")
// 			res.redirect('/admin/categorias')
// 		})

// 	}).catch((erro) => {
// 		req.flash("error_msg", "Houve um erro ao editar")
// 	})

// })


// router.post('/categorias/deletar', (req, res) => {
// 	Categoria.remove({_id: req.body.id}).then(() => {
// 		req.flash("success_msg", "Categoria deletada com sucesso")
// 		res.redirect('/admin/categorias')
// 	}).catch((erro) => {
// 		req.flash("error_msg", "Houve um erro ao deletar")
// 		res.redirect('/admin/categorias')
// 	})
// })


// router.get('/categorias', (req, res) => {
// 	Categoria.find().lean().sort({date: 'desc'}).then((categorias) => {
// 		res.render('admin/categorias', {categorias: categorias})
// 	}).catch((erro) => {
// 		req.flash("error_msg", "Houve um erro ao listar as categorias")
// 		res.redirect('/admin')
// 	})
	
// })


// router.get('/postagens', (req, res) => {

// 	//populate é tipo um leftjoin
// 	Postagem.find().lean().populate('categoria').sort({data: 'desc'}).then((postagens) => {
		
// 		console.log(postagens)
// 		res.render('admin/postagens', {postagens: postagens})
// 	}).catch((erro) => {
// 		req.flash("error_msg", "Houve um erro ao listar ppostagens")
// 		res.redirect('/admin')
// 	})
// })

// router.get('/postagens/add', (req, res) => {
// 	Categoria.find().lean().then((categorias) => {
// 		res.render('admin/addpostagem', {categorias: categorias}) // passando as categorias pra view
// 	}).catch((erro) => {
// 		req.flash("error_msg", "Houve um erro ao carregar o formulario")
// 		res.redirect('/admin')
// 	})
	
// })

// router.post('/postagens/nova', (req, res) => {


// 	var erros = []

// 	if(req.body.categoria == "0"){
// 		erros.push({texto: "Categoria inválida"})
// 	}

// 	if(erros.length > 0){
// 		res.render("admin/addpostagem", {erros: erros})
// 	} else {

// 		const novaPostagem = {
// 			titulo: req.body.titulo,
// 			slug: req.body.slug,
// 			descricao: req.body.descricao,
// 			conteudo: req.body.conteudo,
// 			categoria: req.body.categoria
// 		}


// 		console.log(novaPostagem)


// 		new Postagem(novaPostagem).save().then(() => {
// 			req.flash('success_msg', "Categoria criada com sucesso")
// 			res.redirect('/admin/postagens')
// 		}).catch((erro) => {
// 			req.flash('error_msg', "Houve um erro ao adicionar")
// 			res.redirect('/admin')
// 		})

// 	}

	
// })


// router.get('/postagens/deletar/:id', (req, res) => {
// 	Postagem.remove({_id: req.params.id}).then(() => {
// 		req.flash('success_msg', "Deletado  com sucesso")
// 		res.redirect('/admin/postagens')
// 	}).catch((erro) => {
// 		req.flash('error_msg', "Nao foi possivel deletar")
// 		res.redirect('/admin')
// 	})
// })



module.exports = router