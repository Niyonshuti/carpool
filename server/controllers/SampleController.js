//import all necessary libraries and modules
const Sequelize = require('sequelize');


const { Sample } = require('../models');
const {
    SampleRequest,
    SampleResponse
} = require('../helpers/Formatter');

class SampleController {
    /**
     * This method is part of {resource} CRUD pattern. It creates a new {tender} 
     * and returns the newly created object.
     * 
     * @param   { Object } request
     * @param   { Object } response
     * @returns { Object }
     */
    static async createResource(request, response) {
        const promise = await new Promise(async (resolve, reject) => {
            try {
                return resolve({ status: 201, response: SampleResponse(result) });
            } catch (error) {
                return resolve(FormatApiError(error));
            }
        });

        return response.status(promise.status).send(promise.response);
    }

    /**
     * This method is part of {resource} CRUD pattern. It queries the model and returns data
     * basing on the search criteria if provided.
     * 
     * @param   { Object } request
     * @param   { Object } response
     * @returns { Object }
     */
    static async readResource(request, response) {
        const promise = await new Promise(async (resolve, reject) => {
            try {
                return resolve({ status: 200, response: SampleResponse(result) });
            } catch (error) {
                return resolve(FormatApiError(error));
            }
        });

        return response.status(promise.status).send(promise.response);
    }

    /**
     * This method is part of {resource} CRUD pattern. It updates an existing {resource} 
     * and returns it.
     * 
     * @param   { Object } request
     * @param   { Object } response
     * @returns { Object }
     */
    static async updateResource(request, response) {
        const promise = await new Promise(async (resolve, reject) => {
            try {
                return resolve({ status: 200, response: SampleResponse(result) });
            } catch (error) {
                return resolve(FormatApiError(error));
            }
        });

        return response.status(promise.status).send(promise.response);
    }

    /**
     * This method is part of {tender} CRUD pattern. It deletes an existing {tender}
     * and returns no data.
     * 
     * @param   { Object } request
     * @param   { Object } response
     * @returns { Object }
     */
    static async deleteResource(request, response) {
        const promise = await new Promise(async (resolve, reject) => {
            try {
                return resolve({ status: 204, response: null });
            } catch (error) {
                return resolve(FormatApiError(error));
            }
        });

        return response.status(promise.status).send(promise.response);
    }

}

exports.SampleController = SampleController;
