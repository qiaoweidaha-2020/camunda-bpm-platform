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

module.exports = `<div class="modal-header">
  <h3>{{ 'PLGN_BATCH_JOB_LOG_HEADER' | translate }}</h3>
</div>

<div class="batch-job-log-modal modal-body">
  <div cam-widget-loader
       loading-state="{{ loadingState }}"
       text-empty="{{ 'PLGN_BATCH_NO_JOB_LOGS' | translate }}"
       text-error="{{ 'PLGN_BATCH_NO_JOB_ERROR' | translate }}">
    <table class="cam-table cam-fixed-layout">
    <thead sortable-table-head
            head-columns="headColumns"
            on-sort-change="onSortChange(sortObj)"
            default-sort="sortObj">
    </thead>
    <tbody>
      <tr ng-repeat="log in logs">
        <td class="state">
          {{ getState(log) }}
        </td>

        <td class="message">
          <span ng-show="log.failureLog">
            <a href="{{ getHistoricJobLogStacktraceUrl(log) }}"
                target="_blank"
                ng-show="log.jobExceptionMessage"
                uib-tooltip="{{ 'PLGN_HIST_OPEN_STACKTRACE' | translate }}"
                tooltip-placement="top-left">
              {{ log.jobExceptionMessage }}
            </a>
            <a href="{{ getHistoricJobLogStacktraceUrl(log) }}"
                target="_blank"
                ng-hide="log.jobExceptionMessage"
                uib-tooltip="{{ 'PLGN_HIST_OPEN_STACKTRACE' | translate }}"
                tooltip-placement="top-left">
              <i>{{ 'PLGN_HIST_MESSAGE_NULL' | translate }}</i>
            </a>
          </span>
        </td>

        <td class="timestamp"
            cam-widget-clipboard="log.timestamp | camDate">
          {{ log.timestamp | camDate }}
        </td>

        <td class="job"
            cam-widget-clipboard="log.jobId">
          {{ log.jobId }}
        </td>

        <td class="type"
            cam-widget-clipboard="log.jobDefinitionType">
          {{ log.jobDefinitionType }}
        </td>

        <td class="configuration"
            cam-widget-clipboard="log.jobDefinitionConfiguration">
          {{ log.jobDefinitionConfiguration }}
        </td>

        <td class="retries">
          {{ log.jobRetries }}
        </td>

        <td class="hostname"
            cam-widget-clipboard="log.hostname">
          {{ log.hostname }}
        </td>

        <td class="priority">
          {{ log.jobPriority }}
        </td>

      </tr>
    </tbody>
    </table>


  <ul uib-pagination ng-if="pages.total > pages.size"
            class="pagination-sm"

            page="pages.current"
            ng-model="pages.current"
            ng-change="updateView()"

            total-items="pages.total"
            items-per-page="pages.size"

            max-size="7"
            boundary-links="true"></ul>
  </div>


</div>
<div class="modal-footer">
  <button class="btn btn-default"
          ng-click="$close()">{{ 'PLGN_HIST_CLOSE' | translate }}</button>
</div>
`;
