module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define("Response", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_clap: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    article_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Response.associate = (models) => {
    Response.belongsTo(models.Article);
  };

  return Response;
};
