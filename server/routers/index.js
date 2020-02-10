// Import main modules
const express = require('express');
const passport = require('passport');
const router = new express.Router();

/**
 * CHEAT SHEET 
 * -------------------------------------------------------------------------------------------------- *
 * HTTP   |  CRUD     |  Entire Collection (e.g. /customers) |  Specific Item (e.g. /customers/{id})  * 
 * -------|-----------|--------------------------------------|--------------------------------------- *
 * POST   |  Create   |  201 (Created)                       |  404 (Not Found)                       *
 *        |           |  'Location' header with link to      |  409 (Conflict) if resource already    *
 *        |           |  /customers/{id} containing new ID.  |                 exists.                *
 * -------|-----------|--------------------------------------|--------------------------------------- *
 * GET    |  Read     |  200 (OK), list of customers.        |  200 (OK), single customer.            *
 *        |           |  Use pagination, sorting and         |  404 (Not Found), if ID not found      *
 *        |           |  filtering to navigate big lists.    |                   or invalid.          *
 * -------|-----------|--------------------------------------|--------------------------------------- *
 * PUT    |  Replace  |  405 (Method Not Allowed), unless    |  200 (OK) or 204 (No Content).         *
 *        |           |  you want to update/replace every    |  404 (Not Found), if ID not found      *
 *        |           |  resource in the entire collection.  |                   or invalid.          *
 * -------|-----------|--------------------------------------|--------------------------------------- *
 * DELETE |  Delete   |  405 (Method Not Allowed), unless    |  200 (OK).                             *
 *        |           |  you want to delete the whole        |  404 (Not Found), if ID not found      *
 *        |           |  collection—not often desirable.     |                   or invalid.          *
 * -------------------------------------------------------------------------------------------------- *
 */

// Import API routes
const SampleApi = require('./SampleApi');

// Filter request input
// const { SanitizeRequest } = require('../helpers/Functions');
// SanitizeRequest(router);

// Mount API routes
router.use('/sessions', SampleApi);

/**
 * Dummy API. There is no content ro send for this request.
 * @returns NULL          Status: [204] No Content
 */
router.get('/', (request, response) => {
    response.status(204).end();
});

/**
 * Default router for all non implemented APIs.
 * @returns NULL          Status: [501] Not implemented
 */
router.all('*', (request, response) => {
    response.status(501).end();
});

module.exports = router;
