const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: {page: req.query.page}})
        .then(function(response){
            res.render('index', {results: response.data})
        })
        .catch(err => {
            res.send(err)
        })
    
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: {id: req.query.id}})
        .then(function(userdata){
            res.render('update_user', { user: userdata.data})
        })
        .catch(err => {
            res.send(err)
        })
}

exports.matrix_multiplication = (req, res) => {
    axios.get('http://localhost:3000/api/users/matrix')
        .then(function(response){
            res.render('matrix', {results: response.data})
        })
}
