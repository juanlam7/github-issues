import { Component, inject } from '@angular/core';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { State } from '../../interfaces/github-issue.interface';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issues-list-page',
  templateUrl: './issues-list-page.component.html',
  imports: [IssueItemComponent, LabelsSelectorComponent],
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }
}
