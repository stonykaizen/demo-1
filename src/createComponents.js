import fs from 'fs';
import path from 'path';

const components = [
    {
        name: 'atoms',
        children: [
            'Button',
            'InputField',
            'Icon'
        ]
    },
    {
        name: 'molecules',
        children: [
            'FormField',
            'SearchBar'
        ]
    },
    {
        name: 'organisms',
        children: [
            'Navbar',
            'Footer'
        ]
    },
    {
        name: 'templates',
        children: [
            'HomePageTemplate',
            'ProductPageTemplate'
        ]
    },
    {
        name: 'pages',
        children: [
            'HomePage',
            'ProductPage'
        ]
    }
];

const createComponentFiles = (componentPath, componentName) => {
    const componentFileName = `${componentName}.tsx`;
    const componentDir = path.join(componentPath, componentName);

    fs.mkdirSync(componentDir, { recursive: true });

    // Create the .tsx file
    fs.writeFileSync(path.join(componentDir, componentFileName), `import React from 'react';

const ${componentName} = () => {
    return <div>${componentName} Component</div>;
};

export default ${componentName};
`);

    // Uncomment the line below if you ever decide to create CSS files in the future
    // fs.writeFileSync(path.join(componentDir, `${componentName}.css`), '');
};

const createComponentsStructure = () => {
    const baseDir = path.join(process.cwd(), 'components');

    fs.mkdirSync(baseDir, { recursive: true });

    components.forEach(({ name, children }) => {
        const dirPath = path.join(baseDir, name);
        fs.mkdirSync(dirPath, { recursive: true });

        children.forEach(child => createComponentFiles(dirPath, child));
    });
};

// Run the function to create the component structure
createComponentsStructure();
console.log('Component structure created successfully!');
