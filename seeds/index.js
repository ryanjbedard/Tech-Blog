const sequelize = require('../config/connection');
const seedGallery = require('./blogData');
const seedPaintings = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedPosts();

  process.exit(0);
};

seedAll();
