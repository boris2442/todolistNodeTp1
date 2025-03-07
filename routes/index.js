const express=require('express');

const router=express.Router();

const indexController=require('../controllers/controller')

router.get('/', indexController.getIndex);
router.post('/submit',indexController.postIndex );
router.delete('/supprimer', indexController.deleteIndex )
module.exports=router;