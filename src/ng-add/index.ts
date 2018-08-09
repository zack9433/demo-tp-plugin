import { chain, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from './utils';
import { angularVersion, ngxFormlyVersion, ngxTranslateVersion, ngrxStoreVersion, tpUiVersion } from './lib-versions';

/**
 * Scaffolds the basics of a Angular Material application, this includes:
 *  - Add Packages to package.json
 *  - Adds pre-built themes to styles.ext
 *  - Adds Browser Animation to app.module
 */
export default function(): Rule {
  return chain([addTpPluginDependenciesToPackageJson()]);
}

/** Add @angular/forms, @ngx-formly/core to package.json if not already present. */
function addTpPluginDependenciesToPackageJson() {
  return (host: Tree, context: SchematicContext) => {
    addPackageToPackageJson(host, 'dependencies', '@angular/forms', angularVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngx-formly/core', ngxFormlyVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngx-formly/material', ngxFormlyVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngx-translate/core', ngxTranslateVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngrx/store', ngrxStoreVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngrx/effects', ngrxStoreVersion);
    addPackageToPackageJson(host, 'dependencies', '@ngrx/entity', ngrxStoreVersion);
    addPackageToPackageJson(host, 'dependencies', '@tp-ui/tp-common', tpUiVersion);
    addPackageToPackageJson(host, 'dependencies', '@tp-ui/tp-core', tpUiVersion);
    addPackageToPackageJson(host, 'dependencies', '@tp-ui/tp-window', tpUiVersion);

    context.addTask(new NodePackageInstallTask());

    return host;
  };
}
