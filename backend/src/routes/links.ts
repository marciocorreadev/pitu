import { Router } from 'express';
import  linksController from '../controllers/links'

const router = Router();


router.get('/links', (req, res) => {
    res.json({Message: 'hello people'})
});

router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.hitLink);

router.get('/links/:code/stats', linksController.getLink);

export default router;