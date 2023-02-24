import { Router } from 'express';
const router = Router();

import { getPosts, createPosts, getPost, deletePost, updatePost } from '../controllers/post.controller';

router.route('/')
    .get(getPosts)
    .post(createPosts)

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost)




export default router