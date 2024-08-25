'use strict';
const {User} = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let users = await User.findOne({where:{
      email:"samina.tuladhar.2023@gmail.com"
    }})
    if (!users) {
      await User.create({
        full_name:"Samina Tuladhar",
        email:"samina.tuladhar.2023@gmail.com",
        age:30,
        occupation:"Senior Developer",
        education:"Bacheolor",
        dob:"1993-02-04"
      })
    }
  },

  async down (queryInterface, Sequelize) {
   await User.destroy();
  }
};
