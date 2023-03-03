const { Model, DataTypes, Sequelize } = require('sequelize')

const COMMENTS_TABLE = 'comments';

const CommentSchema = {
  comment_id: {
    allowNull: false, 
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  comment: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  comment_owner: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  character_id: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Comment extends Model {
  static associate() {

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: COMMENTS_TABLE,
      modelName: 'Comment',
      timestamps: false
    }
  }
}

module.exports = { COMMENTS_TABLE, CommentSchema, Comment}