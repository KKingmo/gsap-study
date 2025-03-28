import { Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
	language: string;
	codeString: string;
	title?: string;
};

const CodeBlock = ({ language, codeString, title }: CodeBlockProps) => {
	return (
		<Box sx={{ position: 'relative', width: '100%' }} maxWidth={'xl'}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					padding: '0.25rem 0.5rem',
					backgroundColor: 'rgba(0,0,0,0.6)',
					borderRadius: '0.5rem',
					color: 'white',
					fontSize: '0.75rem',
				}}>
				{title && `${title} - `}
				{language.toUpperCase()}
			</Box>
			<SyntaxHighlighter language={language} style={vscDarkPlus}>
				{codeString}
			</SyntaxHighlighter>
		</Box>
	);
};

export default CodeBlock;
