
const dbManager = require ('../database.config/database.manager');

/**
 * Creation of an Post
 * @param {*} userObject JSON Object with User information
 */
async function createPost (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newPostObject = {
        idUser: req.body.idUser,
        message: req.body.message,
        published_date: req.body.published_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Post.create(newPostObject).then (
        data => {
            res.send(data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GEt all Posts
 */
async function findAllPosts (req, res){
    try {
        //Execute query
        const Posts = await dbManager.Post.findAll();
        
        //Send response
        res.json({
            data: Posts
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get Post by id
 */
async function findOnePost (req, res){
    try {
        const { idPost } = req.params;

        //Execute query
        const Post = await dbManager.Post.findOne({
            where: {
                idPost: idPost
            }
        });
        //Send response
        res.json(Post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update Post
 */
async function updatePost (req, res){
    try {

        // CHECK IF THE REQUEST BODY IS EMPTY
        if (!req.body) {
                res.status(400).send({
                message: "Request body is empty!!!!"
            });
            return;
        }

        const {idPost} = req.params;

        //Execute query
        const post = await dbManager.Post.update(req.body ,{
            where: {
                idPost: idPost
            }
        });

        //Send response
        res.json(post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Delete an existen Post by Postname
 * @param {*} req 
 * @param {*} res 
 */
async function deletePostByPostId (req, res){ 
    try {
        const { idPost } = req.params;

        //Execute query
        const post = await dbManager.post.destroy({
            where: {
                idPost: idPost
            }
        });

        //Send response
        res.json(post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function deleteAllPosts (req, res){
    try {
        //Execute query
        const posts = await dbManager.Post.destroy({
            where: {}}
        ).then(function () {});
        
        //Send response
        res.json({
            data: posts
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function findAllPostsByCreatedDate (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
}


exports.createPost = createPost; 
exports.findAllPosts = findAllPosts; 
exports.findOnePost = findOnePost; 
exports.updatePost = updatePost;
exports.deletePostByPostId = deletePostByPostId;
exports.deleteAllPosts = deleteAllPosts;
exports.findAllPostsByCreatedDate = findAllPostsByCreatedDate;