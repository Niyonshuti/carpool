const express = require('express');
const { SampleController } = require('../controllers');

const router = new express.Router();

/**
 * Create and return a new {resource} collection.
 * @returns { Object(id, body)                                      }  Status: [201] Created
 * @returns { Array(Object(field, message))                         }  Status: [400] Invalid Request Data
 * @returns { Array(Object(field, message))                         }  Status: [409] Conflicting data
 * @returns { Object(message)                                       }  Status: [507] Storage Error
 */
router.post('/', SampleController.createResource);

/**
 * Return the {resource} collection. If the id is supplied, return for that particular id.
 * @returns { Object(id, body)                                      }  Status: [200] OK
 * @returns { Object(message)                                       }  Status: [404] Data Not Found
 * @returns { Object(message)                                       }  Status: [507] Storage Error
 */
router.get('/:id?', SampleController.readResource);

/**
 * Update a {resource} collection and return it.
 * @returns { Object(id, body)                                      }  Status: [200] OK
 * @returns { Array(Object(field, message))                         }  Status: [400] Invalid Request Data
 * @returns { Object(message)                                       }  Status: [404] Data Not Found
 * @returns { Array(Object(field, message))                         }  Status: [409] Conflicting data
 * @returns { Object(message)                                       }  Status: [507] Storage Error
 */
router.put('/:id', SampleController.updateResource);

/**
 * Delete a {resource} collection identified by id.
 * @returns { NULL                                                  }  Status: [204] No Content
 * @returns { Object(message)                                       }  Status: [404] Data Not Found
 * @returns { Object(message)                                       }  Status: [507] Storage Error
 */
router.delete('/:id', SampleController.deleteResource);

module.exports = router;
