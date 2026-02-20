'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('article',[{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Cat ipsum dolor sit amet, howl on top of tall thing but tuxedo cats always looking dapper meow for food, then when human fills food dish, take a few bites of food and continue meowing lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back.</p>',
        published: '2020-01-08 15-02-30',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      } ] ),
        queryInterface.bulkInsert('article',[{
        name: 'Morning Vinyasa Flow Routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Cat ipsum dolor sit amet, howl on top of tall thing but tuxedo cats always looking dapper meow for food, then when human fills food dish, take a few bites of food and continue meowing lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back.</p>',
        published: '2020-04-14 15-02-41',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      } ] ),
        queryInterface.bulkInsert('article',[{
        name: 'Secrets of A Yoga Teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Cat ipsum dolor sit amet, howl on top of tall thing but tuxedo cats always looking dapper meow for food, then when human fills food dish, take a few bites of food and continue meowing lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back.</p>',
        published: '2026-02-20 12-58-50',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      } ] ),
      ] )
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('article', null, {});
} 
  };

