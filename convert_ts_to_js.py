import os
import re

ui_dir = 'components/ui'
for filename in os.listdir(ui_dir):
    if filename.endswith(('.jsx', '.js')):
        filepath = os.path.join(ui_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove 'type' from imports
        content = re.sub(r', type VariantProps', '', content)
        
        # Remove React generic types from function params
        content = re.sub(r'React\.ComponentProps<typeof \w+>', 'props', content)
        content = re.sub(r"React\.ComponentProps<'(\w+)'>", 'props', content)
        
        # Remove type annotations with intersection (&)
        content = re.sub(r'\) {\n  const Comp = asChild \? Slot : .+\n\n  return \(', 
                        r') => {  const Comp = asChild ? Slot : "span"\n\n  return (', content)
        
        # Remove 'type' keyword from exports
        content = re.sub(r'export.*type ', 'export ', content)
        
        # Remove as const
        content = re.sub(r' as const', '', content)
        
        # Convert 'import * as React' to 'import React'  
        content = content.replace('import * as React from', 'import React from')
        
        # Remove React. prefix for simple component types (but be careful)
        content = re.sub(r'React\.ComponentProps', 'ComponentProps', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Converted: {filename}')

print('All files converted!')
