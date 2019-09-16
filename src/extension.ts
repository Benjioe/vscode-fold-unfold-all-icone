// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	const foldStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	foldStatusBarItem.command = "editor.foldAll";
	foldStatusBarItem.tooltip = "fold all";
	foldStatusBarItem.text = `{$(chevron-right)$(chevron-left)}`;
	subscriptions.push(foldStatusBarItem);
	foldStatusBarItem.show();


	const unfoldStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	unfoldStatusBarItem.command = "editor.unfoldAll";
	unfoldStatusBarItem.tooltip = "unfold all";
	unfoldStatusBarItem.text = `{$(chevron-left)$(chevron-right)}`;
	subscriptions.push(unfoldStatusBarItem);
	unfoldStatusBarItem.show();
}

// this method is called when your extension is deactivated
export function deactivate() {}
