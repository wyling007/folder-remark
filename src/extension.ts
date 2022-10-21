import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "folder-remark.copyFileName",
    async (uri: vscode.Uri) => {
      const fileName = uri.path.split("/").pop();
      fileName && vscode.env.clipboard.writeText(fileName);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
