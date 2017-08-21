'use strict';

var path = require('path');

var unitTestCoverageDirectory = path.resolve('./coverage/unit/');
var unitTestCoverageReportHtmlFile = path.resolve('./coverage/unit/index.html');

// These values determine the aggregate coverage thresholds that are applied across the entire project.
var unitTestGlobalStatementCoverageThreshold = 85;
var unitTestGlobalBranchCoverageThreshold = 100;
var unitTestGlobalLineCoverageThreshold = 85;
var unitTestGlobalFunctionCoverageThreshold = 80;

// These values determine the coverage thresholds that are applied to each file individually.
var unitTestLocalStatementCoverageThreshold = 85;
var unitTestLocalBranchCoverageThreshold = 100;
var unitTestLocalLineCoverageThreshold = 85;
var unitTestLocalFunctionCoverageThreshold = 80;

var includeUntested = true;
var reporters = ['html', 'lcov', 'cobertura', 'text', 'text-summary'];

module.exports = {
    unitTestGlobalThresholds: {
        statementCoverageThreshold: unitTestGlobalStatementCoverageThreshold,
        branchCoverageThreshold: unitTestGlobalBranchCoverageThreshold,
        lineCoverageThreshold: unitTestGlobalLineCoverageThreshold,
        functionCoverageThreshold: unitTestGlobalFunctionCoverageThreshold
    }, 
    unitTestLocalThresholds: {
        statementCoverageThreshold: unitTestLocalStatementCoverageThreshold,
        branchCoverageThreshold: unitTestLocalBranchCoverageThreshold,
        lineCoverageThreshold: unitTestLocalLineCoverageThreshold,
        functionCoverageThreshold: unitTestLocalFunctionCoverageThreshold
    },
    reporters: reporters,
    includeUntested: includeUntested,
    unitTestCoverageDirectory: unitTestCoverageDirectory,
    unitTestCoverageReportHtmlFile: unitTestCoverageReportHtmlFile
};