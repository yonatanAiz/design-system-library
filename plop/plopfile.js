module.exports = function plopGenerator(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        name: 'forwardRef',
        message: 'Should the component forward ref?',
        type: 'confirm',
      },
      {
        name: 'context',
        message: 'Should the component use context?',
        type: 'confirm',
      }
    ],
    actions: function(data) {
      const actions =  [
        {
          type: 'addMany',
          destination: '../src/components/{{ pascalCase name }}',
          base: 'plop-templates/component',
          templateFiles: 'plop-templates/component/*.hbs',
        },
        {
          type: 'modify',
          path: '../src/components/index.ts',
          transform(template, data) {
            const capitalize = (str) =>
              str.charAt(0).toUpperCase() + str.slice(1);
            return template + `export * from './${capitalize(data.name)}';\n`;
          },
        },
      ];

      if(data.context){
        actions.push({
          type: 'add',
          path: '../src/components/{{ pascalCase name }}/{{ pascalCase name }}.context.tsx',
          templateFile: 'plop-templates/context/component.context.tsx.hbs',
        })
      }

      return actions;
    },
  });
}
