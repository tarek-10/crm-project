const RBAC = require('easy-rbac');
const opts = require('./Policy');
const rbac = new RBAC(opts);

module.exports = rbac;