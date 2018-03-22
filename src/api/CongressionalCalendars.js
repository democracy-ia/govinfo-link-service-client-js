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
    root.govinfoLinkService.CongressionalCalendars = factory(root.govinfoLinkService.ApiClient)
  }
}(this, (ApiClient) => {
  /**
   * CongressionalCalendarsCCAL service.
   * @module api/CongressionalCalendars
   * @version 0.5.0
   */

  /**
   * Constructs a new CongressionalCalendars. 
   * 
   * @alias module:api/CongressionalCalendars
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the ccalFetchUsingGET operation.
     * @callback module:api/CongressionalCalendars~ccalFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: chamber, section, publish date OR most recent
     * 
     * @param {module:model/String} chamber This is the chamber of Congress. Values are house, senate.
     * @param {string} section This is the name of the calendar section. Recommend encoding special characters and spaces (%20). Common sample values include Unanimous Consent Agreements, Cover and Special Orders, Subjects on the Table, Union Calendar, Bills in Conference, Special Legislative Days.
     * @param {Object} opts Optional parameters
     * @param {string} opts.publishdate If date is not provided, the most recent version of the calendar is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
     * @param {module:api/CongressionalCalendars~ccalFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.ccalFetchUsingGET = function (chamber, section, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'chamber' is set

      if (chamber === undefined || chamber === null) {
        throw new Error("Missing the required parameter 'chamber' when calling ccalFetchUsingGET")
      }

      // Verify the required parameter 'section' is set

      if (section === undefined || section === null) {
        throw new Error("Missing the required parameter 'section' when calling ccalFetchUsingGET")
      }

      const pathParams = {
        chamber,
        section
      }
      const queryParams = {
        'publishdate': opts.publishdate,
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
        '/ccal/{chamber}/{section}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }
  }

  return exports
}))
