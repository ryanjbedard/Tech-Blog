const User = require('./User');
const Gallery = require('./Blog');
const Painting = require('./Post');

Blog.hasMany(post, {
  foreignKey: 'blog_id',
});

Post.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Gallery, Painting };
