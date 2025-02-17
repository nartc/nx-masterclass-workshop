import { formatFiles, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { UtilLibGeneratorSchema } from './schema';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  let libName = options.name;

  if (!libName.startsWith('util-')) {
    libName = `util-${libName}`;
  }

  const projectRoot = `libs/${options.name}`;

  await libraryGenerator(tree, { directory: projectRoot });

  await formatFiles(tree);
}

export default utilLibGenerator;
