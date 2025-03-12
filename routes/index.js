const express=require('express');

const router=express.Router();

const indexController=require('../controllers/controller');
const editController=require('../controllers/edit');

router.get('/', indexController.getIndex);
router.post('/submit',indexController.postIndex );
router.delete('/supprimer/:id', indexController.deleteIndex );

router.get('/editer/:id', editController.getEdit);


router.put('/editer/:id', editController.putEdit);
module.exports=router;   