import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  template: `
    <div class="flex flex-wrap justify-center items-center gap-2">
      @for (label of labels(); track label.id) {
      <div
        class="border p2 rounded-md hover:bg-slate-950 p-1 cursor-pointer"
        [ngStyle]="{ 'border-color': '#' + label.color }"
        (click)="onToggleLabel(label.name)"
        [class.selected-label]="isSelected(label.name)"
      >
        {{ label.name }}
      </div>
      }
    </div>
  `,
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();

  issuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    console.log(labelName);
  }
}
