/**
 * govinfo-link-service-client-js
 * <p>The <strong>govinfo</strong> Link Service provides services for developers and webmasters to access content and metadata on <strong>govinfo</strong>. Current and planned services include a link service, list service, and search service. Please contact <a href=\"https://www.gpo.gov/askgpo/\">askGPO</a> for additional information about current or planned services.</p> <p>The link service is used to create embedded links to content and metadata on <strong>govinfo</strong> and is currently enabled for the collections below. The collection code is listed in parenthesis after each collection name, and the available queries are listed below each collection. More information about each query is provided on the individual collection page.</p>
 *
 * OpenAPI spec version: 0.5.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.

    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.

    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)

    if (!root.govinfoLinkService) {
      root.govinfoLinkService = {
      }
    }
    root.govinfoLinkService.CompilationOfPresidentialDocuments = factory(root.govinfoLinkService.ApiClient)
  }
}(this, (ApiClient) => {
  /**
   * CompilationOfPresidentialDocumentsCPD service.
   * @module api/CompilationOfPresidentialDocuments
   * @version 0.5.0
   */

  /**
   * Constructs a new CompilationOfPresidentialDocuments. 
   * @alias module:api/CompilationOfPresidentialDocuments
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the cpdDcpdFetchUsingGET operation.
     * @callback module:api/CompilationOfPresidentialDocuments~cpdDcpdFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Dcpd type OR dcpd number.
     * Query: Dcpd type OR dcpd number.
     * 
     * @param {number} year This is the four digit numerical year. The first Daily Compilation of Presidential Documents (dcpd) document was published on 1/20/2009. Sample value is 2010.
     * @param {Object} opts Optional parameters
     * @param {number} opts.dcpdnumber This is the five digit numerical identifier on a dcpd document. It does not include the four digit year. Document are numbered sequentially within each year. Leading zeros can be supplied but are not required. Sample value is 00123. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
     * @param {module:model/String} opts.dcpdtype This is the type of dcpd document. Values are digest, nominations, checklist, actsapproved. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
     * @param {module:api/CompilationOfPresidentialDocuments~cpdDcpdFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.cpdDcpdFetchUsingGET = function (year, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'year' is set

      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling cpdDcpdFetchUsingGET")
      }

      const pathParams = {
        year
      }
      const queryParams = {
        'dcpdnumber': opts.dcpdnumber,
        'dcpdtype': opts.dcpdtype,
        'link-type': opts.linkType
      }
      const collectionQueryParams = {
      }
      const headerParams = {
      }
      const formParams = {
      }

      const authNames = []
      const contentTypes = ['application/json']
      const accepts = ['*/*']
      const returnType = Object

      return this.apiClient.callApi(
        '/cpd/{year}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the cpdFetchUsingGET operation.
     * @callback module:api/CompilationOfPresidentialDocuments~cpdFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Document type, document number.
     * 
     * @param {module:model/String} doctype - Values are executiveorder, proclamation, determination.
     * @param {number} docnum - This is the numerical document number. Sample value is 13514.
     * @param {Object} opts Optional parameters.
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
     * @param {module:api/CompilationOfPresidentialDocuments~cpdFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.cpdFetchUsingGET = function (doctype, docnum, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'doctype' is set

      if (doctype === undefined || doctype === null) {
        throw new Error("Missing the required parameter 'doctype' when calling cpdFetchUsingGET")
      }

      // Verify the required parameter 'docnum' is set

      if (docnum === undefined || docnum === null) {
        throw new Error("Missing the required parameter 'docnum' when calling cpdFetchUsingGET")
      }

      const pathParams = {
        doctype,
        docnum
      }
      const queryParams = {
        'link-type': opts.linkType
      }
      const collectionQueryParams = {
      }
      const headerParams = {
      }
      const formParams = {
      }

      const authNames = []
      const contentTypes = ['application/json']
      const accepts = ['*/*']
      const returnType = Object

      return this.apiClient.callApi(
        '/cpd/{doctype}/{docnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }
  }

  return exports
}))
