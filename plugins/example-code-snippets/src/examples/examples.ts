export enum ExampleLanguage {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  CSHARP = 'csharp',
  PYTHON = 'python',
  GO = 'go',
  JAVA = 'java',
  PHP = 'php',
  RUST = 'rust',
  RUBY = 'ruby',
  CLI = 'cli',
}

export function exampleLanguage(language: string): ExampleLanguage {
  return enumFromValue(ExampleLanguage, language) as unknown as ExampleLanguage;
}

export function languageDisplayName(language: ExampleLanguage): string {
  switch (language) {
    case ExampleLanguage.TYPESCRIPT:
      return 'TypeScript';
    case ExampleLanguage.JAVASCRIPT:
      return 'JavaScript';
    case ExampleLanguage.CSHARP:
      return 'C#';
    case ExampleLanguage.PYTHON:
      return 'Python';
    case ExampleLanguage.GO:
      return 'Go';
    case ExampleLanguage.JAVA:
      return 'Java';
    case ExampleLanguage.PHP:
      return 'PHP';
    case ExampleLanguage.RUST:
      return 'Rust';
    case ExampleLanguage.RUBY:
      return 'Ruby';
    case ExampleLanguage.CLI:
      return 'CLI';
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized language: ${language}`);
  }
}

export enum ExampleSnippetType {
  CODE = 'code',
  DESCRIPTION = 'description',
}

export function exampleSnippetType(snippetType: string): ExampleSnippetType {
  return enumFromValue(
    ExampleSnippetType,
    snippetType
  ) as unknown as ExampleSnippetType;
}

export interface ExampleSnippetCoordinates {
  language: ExampleLanguage;
  snippetType: ExampleSnippetType;
  snippetId: string;
}

function enumFromValue<T extends Record<string, string>>(
  enumType: T,
  value: string
): T {
  const enumName = (Object.keys(enumType) as Array<keyof T>).find(
    k => enumType[k] === value
  );
  if (!enumName) {
    throw new Error(
      `No enum value '${value}' found in enum; values: ${JSON.stringify(
        Object.keys(enumType)
      )}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return enumType[enumName];
}
