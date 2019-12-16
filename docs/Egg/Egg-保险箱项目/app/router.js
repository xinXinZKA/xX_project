'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.one.index);
  router.get('/two', controller.two.index);
  router.get('/three', controller.three.add);
  router.get('/ruten1', controller.two.index);
  router.get('/four', controller.four.index);
  router.get('/ruten2', controller.two.index);
  router.get('/five', controller.five.index);
  router.get('/seventh', controller.seventh.seventh);
  router.get('/ruten3', controller.seventh.index);
  router.get('/eight', controller.eight.index);
  router.get('/fourteen', controller.fourteen.index);
  router.get('/ruten4', controller.fourteen.add);
  router.get('/quit', controller.two.index);
  router.get('/nine', controller.template.nine);
  router.get('/ruten5', controller.nine.add);
  router.get('/ten', controller.template.ten);
  router.get('/ruten6', controller.ten.ten);
  router.get('/eleven', controller.template.eleven);
  router.get('/ruten7', controller.eleven.eleven);
  router.get('/twelve', controller.template.twelve);
  router.get('/ruten8', controller.twelve.twelve);
  router.get('/thirteen', controller.nine.thirteen);
  router.get('/ruten9', controller.thirteen.thirteen);
}; 