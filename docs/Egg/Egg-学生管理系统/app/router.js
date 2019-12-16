'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.middleware.checklogin() ,controller.user.index);
  router.get('/login', controller.user.index);
  router.post('/login', controller.user.login);
  router.post('/logout', app.middleware.checklogin(), controller.user.logout);
  router.get('/students',controller.students.index);
  router.get('/insertstudent',controller.students.insertStudent);
  router.post('/students',controller.students.create);
  router.post('/deletestudent',controller.students.destroy);
  router.get('/clazz',controller.clazz.index);
  router.get('/insertclazz',controller.clazz.insertClazz);
  router.post('/clazz', controller.clazz.create);
  router.post('/deleteclazz', controller.clazz.destroy);

  router.get('/re',controller.zhuC.index);
  router.post('/zhuc',controller.zhuC.create);
  router.get('/succeed',controller.succeed.index);
};