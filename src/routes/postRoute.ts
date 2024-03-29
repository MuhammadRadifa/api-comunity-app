import { Router } from 'express';
import {
  createPost,
  deletePost,
  getAllPost,
  getPostByCategories,
  getPostById,
  getPostByTitle,
  getPostByUsers,
  updatePost
} from '../controller/post/postController';
import {
  createPostValidator,
  updatePostValidator
} from '../validator/postValidator';
import { jwtMiddleware } from '../middleware/jwtMiddleware';
import { multerMiddleware } from '../middleware/multerMiddleware';

const router = Router();

router.get('/index/:id', getPostById);
router.get('/index/:start/:limit', getAllPost);
router.get('/index/category/:category/:start/:limit', getPostByCategories);
router.get('/index/users/:username', getPostByUsers);
router.get('/index/title/:title', getPostByTitle);
router.post(
  '/create',
  jwtMiddleware,
  multerMiddleware,
  createPostValidator(),
  createPost
);
router.put('/update/:post_id', updatePostValidator(), updatePost);
router.delete('/delete/:post_id', deletePost);

export default router;
