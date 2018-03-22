/**
 * Govinfo-link-service-client-js
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
    // AMD.

    define([
      'expect.js',
      '../../src/index'
    ], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.

    factory(require('expect.js'), require('../../src'))
  } else {
    // Browser globals (root is window)

    factory(root.expect, root.govinfoLinkService)
  }
}(this, (expect, govinfoLinkService) => {
  let instance

  beforeEach(() => {
    instance = new govinfoLinkService.CongressionalReports()
  })

  const getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.

    if (typeof object[getter] === 'function') return object[getter]()
    return object[property]
  }

  const setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.

    if (typeof object[setter] === 'function') object[setter](value)
    else { object[property] = value }
  }

  describe('CongressionalReports', () => {
    describe('crptBillFetchUsingGET', () => {
      it('should call crptBillFetchUsingGET successfully', (done) => {
        /*
         *Uncomment below and update the code to test crptBillFetchUsingGET
         *instance.crptBillFetchUsingGET(function(error) {
         *  if (error) throw error;
         *expect().to.be();
         *});
         */

        done()
      })
    })
    describe('crptReportFetchUsingGET', () => {
      it('should call crptReportFetchUsingGET successfully', (done) => {
        /*
         *Uncomment below and update the code to test crptReportFetchUsingGET
         *instance.crptReportFetchUsingGET(function(error) {
         *  if (error) throw error;
         *expect().to.be();
         *});
         */

        done()
      })
    })
  })
}))
