/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.UtilsApi = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.ErrorResponse);
  }
}(this, function(ApiClient, ErrorResponse) {
  'use strict';

  /**
   * Utils service.
   * @module api/UtilsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UtilsApi. 
   * @alias module:api/UtilsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sql operation.
     * @callback module:api/UtilsApi~sqlCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform SQL requests
     * Run a query in SQL format. Expects is a query parameters string that can be in two modes: * Select only query as `query=SELECT * FROM myindex`. The query string MUST be URL encoded * any type of query in format `mode=raw&query=SHOW TABLES`. The string must be as is (no URL encoding) and `mode` must be first. The response object depends on the query executed. In select mode the response has same format as `/search` operation. 
     * @param {String} body Expects is a query parameters string that can be in two modes:    * Select only query as `query=SELECT * FROM myindex`. The query string MUST be URL encoded    * any type of query in format `mode=raw&query=SHOW TABLES`. The string must be as is (no URL encoding) and `mode` must be first. 
     * @param {module:api/UtilsApi~sqlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    this.sql = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sql");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = {'String': Object};
      return this.apiClient.callApi(
        '/sql', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
