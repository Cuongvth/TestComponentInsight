import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import csharpKeywords from './customCsharp';
import cppKeywords from './customCpp';
import pythonKeywords from './customPython';

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

monaco.languages.registerCompletionItemProvider('csharp', {
  provideCompletionItems: function (): any {
    const suggestions = csharpKeywords.map(function (keyword) {
      return {
        label: keyword,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: keyword,
      };
    });

    suggestions.push({
      label: 'cw',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'Console.WriteLine("");',
    });

    suggestions.push({
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'if () {',
        '// code to be executed if the condition is true',
        '} else {',
        '// code to be executed if the condition is false',
        '}',
      ].join('\n'),
    });

    suggestions.push({
      label: 'for',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['for (int i = 0; i < arr.length; i++) {', '// code to be executed in each iteration', '}'].join(
        '\n',
      ),
    });

    suggestions.push({
      label: 'while',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['while (true) {', '// code to be executed in each iteration', '}'].join('\n'),
    });

    suggestions.push({
      label: 'method',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['private void MethodName() {', '// method body', '}'].join('\n'),
    });

    suggestions.push({
      label: 'trycatch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'try {',
        '// code that may throw an exception',
        '} catch (Exception ex) {',
        '// code to handle the exception',
        '}',
      ].join('\n'),
    });

    return { suggestions };
  },
});

monaco.languages.registerCompletionItemProvider('cpp', {
  provideCompletionItems: function (): any {
    const suggestions = cppKeywords.map(function (keyword) {
      return {
        label: keyword,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: keyword,
      };
    });

    suggestions.push({
      label: 'cout',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'std::cout << "Hello, World" << std::endl;',
    });

    suggestions.push({
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'if () {',
        '// code to be executed if the condition is true',
        '} else {',
        '// code to be executed if the condition is false',
        '}',
      ].join('\n'),
    });

    suggestions.push({
      label: 'for',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['for (int i = 0; i < arr.length; i++) {', '// code to be executed in each iteration', '}'].join(
        '\n',
      ),
    });

    suggestions.push({
      label: 'while',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['while (true) {', '// code to be executed in each iteration', '}'].join('\n'),
    });

    suggestions.push({
      label: 'method',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['private void MethodName() {', '// method body', '}'].join('\n'),
    });

    suggestions.push({
      label: 'trycatch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'try {',
        '// code that may throw an exception',
        '} catch (Exception ex) {',
        '// code to handle the exception',
        '}',
      ].join('\n'),
    });

    return { suggestions };
  },
});

monaco.languages.registerCompletionItemProvider('python', {
  provideCompletionItems: function (): any {
    const suggestions = pythonKeywords.map(function (keyword) {
      return {
        label: keyword,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: keyword,
      };
    });

    suggestions.push({
      label: 'print',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'print("Hello, World")',
    });

    suggestions.push({
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'if true:',
        '\t# code to be executed if the condition is true',
        'else:',
        '\t# code to be executed if the condition is false',
      ].join('\n'),
    });

    suggestions.push({
      label: 'for',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['for item in arr:', '\t# code to be executed in each iteration'].join('\n'),
    });

    suggestions.push({
      label: 'while',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['while true:', '\t# code to be executed in each iteration'].join('\n'),
    });

    suggestions.push({
      label: 'function',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['def function_name():', '\t# function body'].join('\n'),
    });

    suggestions.push({
      label: 'tryexcept',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'try:',
        '\t# code that may raise an exception',
        'except Exception as ex:',
        '\t# code to handle the exception',
      ].join('\n'),
    });

    return { suggestions };
  },
});
