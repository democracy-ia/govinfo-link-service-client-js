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
    root.govinfoLinkService.CongressionalReports = factory(root.govinfoLinkService.ApiClient)
  }
}(this, (ApiClient) => {
  /**
   * CongressionalReportsCRPT service.
   * @module api/CongressionalReports
   * @version 0.5.0
   */

  /**
   * Constructs a new CongressionalReports. 
   * @alias module:api/CongressionalReports
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the crptBillFetchUsingGET operation.
     * @callback module:api/CongressionalReports~crptBillFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: associated bill, congress
     * @param {number} congress - This is the numerical Congress number. Sample value is 112.
     * @param {string} associatedbillnum - Congressional reports often accompany a specific bill. Note: some associated bill numbers may produce multiple results. This will occur when two different reports are issues to accompany a single bill within a single Congress. In this case, the desired report may not be returned. When enabled, the API List Service will return a reference to both reports. Sample value is h.r.2297.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
     * @param {module:api/CongressionalReports~crptBillFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crptBillFetchUsingGET = function (congress, associatedbillnum, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error("Missing the required parameter 'congress' when calling crptBillFetchUsingGET")
      }

      // Verify the required parameter 'associatedbillnum' is set

      if (associatedbillnum === undefined || associatedbillnum === null) {
        throw new Error("Missing the required parameter 'associatedbillnum' when calling crptBillFetchUsingGET")
      }

      const pathParams = {
        congress,
        associatedbillnum
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
        '/crpt/{congress}/{associatedbillnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the crptReportFetchUsingGET operation.
     * @callback module:api/CongressionalReports~crptReportFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Congress, report type, report number.
     * 
     * @param {number} congress This is the numerical Congress number. Sample value is 112.
     * @param {module:model/String} doctype This is the congressional report type. Congressional reports can either be house reports, senate reports, or senate executive reports. Values are hrpt, srpt, erpt.
     * @param {number} reportnum This is the numerical report number. Congressional reports are numbered consecutively within a Congress for each report type. Sample value is 154.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.linkType This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
     * @param {module:api/CongressionalReports~crptReportFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.crptReportFetchUsingGET = function (congress, doctype, reportnum, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error("Missing the required parameter 'congress' when calling crptReportFetchUsingGET")
      }

      // Verify the required parameter 'doctype' is set

      if (doctype === undefined || doctype === null) {
        throw new Error("Missing the required parameter 'doctype' when calling crptReportFetchUsingGET")
      }

      // Verify the required parameter 'reportnum' is set

      if (reportnum === undefined || reportnum === null) {
        throw new Error("Missing the required parameter 'reportnum' when calling crptReportFetchUsingGET")
      }

      const pathParams = {
        congress,
        doctype,
        reportnum
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
        '/crpt/{congress}/{doctype}/{reportnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }
  }

  return exports
}))
