module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define ("Post", {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        message: Sequelize.STRING,
        published_date: Sequelize.DATE,
    }, {
        tableName: "posts"
    });
    return Post;
}
