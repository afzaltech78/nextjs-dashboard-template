module.exports = {
  create: function (context) {
    return {
      FunctionExpression(node) {
        // Check if the function is a React component
        if (node.parent && node.parent.type === 'JSXElement') {
          const componentName = node.parent.name.name;
          if (componentName.startsWith('use')) {
            return; // Allow async functions for custom hooks (useXXX)
          }

          if (node.async) {
            context.report({
              node,
              message: `Avoid using async functions in "${componentName}" component.`,
            });
          }
        }
      },
    };
  },
};
