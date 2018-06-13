const express = require('express')
const Case = require('./Case')
const router = express.Router()

// all our cases
router.get('/', (req, res) => {  
    Case.find()
    .then(cases =>  {
        res.status(200).json(cases)
    }) 
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const phoneCase = await Case.find(id)
        res.status(200).json(phoneCase)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', (req, res) => {
    const phoneCase = new Case(req.body)
    phoneCase.save()
    .then(() =>  {
        res.status(201).json(phoneCase)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id 
    Case.delete(id)
    .then(() => {
        res.status(204).json({
            deleted: true
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    })
})

module.exports = router