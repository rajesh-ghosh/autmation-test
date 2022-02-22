import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

/**
 * This is on feature branch feat-1234
 */


router.get('/posts', controller.getPosts);

export = router;