import { Rule, chain, apply, url, template, mergeWith, SchematicsException } from '@angular-devkit/schematics';
import { TpPluginOptions } from './schema';
import { classify, dasherize, camelize, capitalize, underscore } from '@angular-devkit/core/src/utils/strings';
import { normalize } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
const stringUtils = {
  dasherize,
  classify,
  camelize,
  capitalize,
  underscore
};

export default function(options: TpPluginOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;

  if (!options.name) {
    throw new SchematicsException(`Invalid options, "name" is required.`);
  }

  if (!options.url) {
    throw new SchematicsException(`Invalid options, "url" is required.`);
  }

  const templateSource = apply(url('./files'), [
    template({
      ...stringUtils,
      tmpl: '',
      ...options
    })
  ]);

  return chain([
    // externalSchematic('@schematics/angular', 'ng-new', { name: options.name, version: '6.1.2', skipInstall: true }),
    // branchAndMerge(
    //   externalSchematic('@schematics/angular', 'library', {
    //     name: 'lib-' + options.name,
    //     entryFile: 'index'
    //   }),
    //   MergeStrategy.Overwrite
    // )
    mergeWith(templateSource)
  ]);
}
