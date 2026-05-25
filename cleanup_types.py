import os
import re

ui_dir = 'components/ui'
files_to_clean = [
    'components/ui/alert.jsx',
    'components/ui/alert-dialog.jsx',
    'components/ui/about-section.jsx',
    # Add other problem files as needed
]

# Get all jsx files in ui folder
jsx_files = []
for f in os.listdir(ui_dir):
    if f.endswith('.jsx') or f.endswith('.js'):
        jsx_files.append(os.path.join(ui_dir, f))

for filepath in jsx_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Remove type annotations from function parameters
    # Pattern: ({ param }: TypeAnnotation) => should become ({ param }) =>
    # This handles: (props): Type => (props) =>
    # And: ({ a, b }: SomeType & OtherType) => ({ a, b }) =>
    
    # Remove type annotations after closing parenthesis before =>
    content = re.sub(r'\): [^=]+=>(.*)$', r') => \1', content, flags=re.MULTILINE)
    
    # Remove generic type parameters like <typeof SomeComponent>
    content = re.sub(r'<typeof [^>]+>', '', content)
    
    # Remove VariantProps imports and usage
    content = re.sub(r', VariantProps', '', content)
    content = re.sub(r' & VariantProps<[^>]+>', '', content)
    
    # Remove inline type unions like: param & SomeType
    # This is tricky - we need to match closing braces followed by &
    content = re.sub(r'\} & [^=\n]+', '}', content)
    
    # Clean up cases where type is just after params
    # ({ className }: React.ComponentProps<'div'>) becomes ({ className })
    content = re.sub(r'([^:]*): React\.ComponentProps<[^>]+>\)', r'\1)', content)
    content = re.sub(r'([^:]*): React\.ComponentProps\)', r'\1)', content)
    
    # Remove ": props" type annotation (incorrect TypeScript that made it into JS)
    content = re.sub(r':\s*props\s*\)', r')', content)
    
    # Remove trailing type annotations like: ...props }: SomeType) 
    content = re.sub(r'\s*\}\s*:\s*[^)]*\)', r'})', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Cleaned: {filepath}')
    else:
        print(f'No changes: {filepath}')

print('Cleanup complete!')
