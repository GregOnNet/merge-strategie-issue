import {
  apply,
  MergeStrategy,
  mergeWith,
  Rule,
  url
} from '@angular-devkit/schematics';

export function mergeStrategieIssue(_options: any): Rule {
  return mergeWith(apply(url('./templates'), []), MergeStrategy.Overwrite);
}
