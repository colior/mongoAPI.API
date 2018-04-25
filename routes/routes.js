'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');
  var historyController = require('../controllers/historyController');
  var reportController = require('../controllers/reportController');

  app.route('/users')
    .get(userController.getAllUsers)
    .post(userController.newUser);


  app.route('/users/:Username')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

  app.route('/users/validate/:Username')
  .get(userController.validateUsername);

  app.route('/history')
  .get(historyController.getAllHistory)
  .post(historyController.newHistory);


  app.route('/history/:Id')
    .get(historyController.getHistory)
    .put(historyController.updateHistory)
    .delete(historyController.deleteHistory);

   app.route('/history/user/:Username')
   .get(historyController.getHistoryByUsername)
    .delete(historyController.deleteHistoryByUsername);

    app.route('/reports')
    .get(reportController.getAllReports)
    .post(reportController.newReport);


  app.route('/reports/:Id')
    .get(reportController.getReport)
    .put(reportController.updateReport)
    .delete(reportController.deleteReport);

   app.route('/reports/user/:Username')
   .get(reportController.getReportsByUsername)
    .delete(reportController.deleteReportsByUsername);
};