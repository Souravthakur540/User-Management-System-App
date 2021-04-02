var Userdb = require('../model/model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content cannot be empty"})
    }

    const user = Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            })
        })
}

exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id

        Userdb.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: "Not found with user id" + id})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id" + id})
            })
    } else {
        Userdb.find()
        .then(user => {
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 5
            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            const results = {}
            if (endIndex < user.length) {
                results.next = page + 1
            }
            else {
                results.next = page
            }
            

            if (startIndex > 0) {
                results.previous = page - 1
            }
            else {
                results.previous = page
            }
            

            // nextpage = page + 1
            // prevpage = page - 1

            results.results = user.slice(startIndex, endIndex)
            res.send(results)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error occured while retriving user information"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot update user with ${id}`})
            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updating user information"})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot delete with ${id}`})
            } else {
                res.send({message: `User deleted successfully!`})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id " + id
            })
        })
}

exports.matrix = (req, res) => {
    A = [[12, 7, 3],
        [4, 5, 6],
        [7, 8, 9]]
  
       
    B = [[5, 8, 1, 2],
        [6, 7, 3, 0],
        [4, 5, 9, 1]]
      
    result = [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]

    for (i = 0; i < A.length; i++) {
        for (j = 0; j < B[0].length; j++) {
            for (k = 0; k < B.length; k++) {
                result[i][j] = result[i][j] + A[i][k] * B[k][j]
            }
        }
    }
    
    // for (r = 0; r < result.length; r++) {
    //     console.log(result[r])
    // }
    const results = {
        result: result,
        A: A,
        B: B
    }
    res.send(results)
}