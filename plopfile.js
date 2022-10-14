module.exports = plop => {
    plop.setGenerator('simple-component', {
        description: 'Basic component with style file',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name? (Please, use PascalCase)'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/basic-component/index.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.css',
                templateFile: 'plop-templates/basic-component/style.css.hbs'
            }
        ]
    });
    plop.setGenerator('button-component', {
        description: 'Generic button component with style file',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name? (Please, use PascalCase)'
            },
            {
                type: 'input',
                name: 'functionName',
                message: 'What is the function in onClick? (Please, use camelCase)'
            }

        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/button-component/index.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.css',
                templateFile: 'plop-templates/button-component/style.css.hbs'
            }
        ]
    });
};