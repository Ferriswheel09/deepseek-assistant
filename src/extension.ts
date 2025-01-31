// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "deepseek-assistant" is now active!');

	const myTreeView = vscode.window.createTreeView('deepseek_assistant.customView', {
		treeDataProvider: new MyTreeDataProvider()
	});

	const refreshCommand = vscode.commands.registerCommand('deepseek-assistant.refreshView', () => {
		myTreeView.message = 'Refreshing...';
	});

	context.subscriptions.push(myTreeView, refreshCommand);
}

class MyTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
		// Return an array of TreeItems to display in the view
		return Promise.resolve([
			new vscode.TreeItem('Item 1'),
			new vscode.TreeItem('Item 2')
		]);
	}
}

// This method is called when your extension is deactivated
export function deactivate() { }
