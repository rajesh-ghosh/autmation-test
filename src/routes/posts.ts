import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

/**
 * This is on main branch
 */


router.get('/posts', controller.getPosts);

export = router;