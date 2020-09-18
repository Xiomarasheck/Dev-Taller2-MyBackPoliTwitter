var express = require('express');
var router = express.Router();

const postController = require ('../controllers/post.controller'); 

/**
 * GET Route to list all users
 */
router.get('/', postController.findAllPosts);
/**
 * GET Route to find user by id
 */
router.get('/:idPost', postController.findOnePost);
/**
 * POST Route to create Post
 */
router.post ('/',postController.createPost);
/**
 * PUT Route to update an Post by id
 */
router.put ('/:idPost',postController.updatePost);
/**
 * DELETE Route to delete an Post by PostId
 */
router.delete ('/:idPost',postController.deletePostByPostId);
/**
 * DELETE Route to delete all Posts
 */
router.delete ('/post',postController.deleteAllPosts);

module.exports = router;
  