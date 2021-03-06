/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- # CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/decisionList/app/views/decisionInstance/input-variable-table.html -->
<!-- <div ng-repeat="variable in variables"
     cam-widget-variable
     cam-variable="variable"
     display="true">
</div> -->

<div cam-widget-loader loading-state="{{loadingState}}" text-empty="{{ 'PLUGIN_DECISION_LIS_NO_INPUT_TEXT' | translate }}">
  <div cam-widget-variables-table
       cam-editable="[]"
       cam-variables="variables"
       default-sort = "sortObj"
       on-sort-change="onSortChange(sortObj)"
       cam-headers="headColumns"></div>
</div>

<!-- / CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/decisionList/app/views/decisionInstance/input-variable-table.html -->
`;
