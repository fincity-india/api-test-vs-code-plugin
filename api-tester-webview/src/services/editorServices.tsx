const MSG_TYP_ERROR = "error";
const MSG_TYP_DOCCHANGE = "docchange";
const MSG_TYP_SEND = "send";

export function onHttpMethodChange(newMethod: string, json: any, vscode: any) {
  json = duplicate(json);
  json.method = newMethod;
  vscode.postMessage({
    type: MSG_TYP_DOCCHANGE,
    document: json,
  });
}

export function onUrlChange(newUrl: string, json: any, vscode: any) {
  json = duplicate(json);
  json.url = newUrl;
  vscode.postMessage({
    type: MSG_TYP_DOCCHANGE,
    document: json,
  });
}

export function onError(err: any, vscode: any) {
  vscode.postMessage({
    type: MSG_TYP_ERROR,
    error: { name: err.name, message: err.message, fullString: "" + err },
  });
}

export function onSend(json: any, vscode: any) {
  vscode.postMessage({
    type: MSG_TYP_SEND,
    json,
  });
}

export function onDocumentChange(
  sectionValues: [[key: string, value: any | undefined]],
  json: any,
  vscode: any
) {
  json = duplicate(json);
  for (const [section, value] of sectionValues) {
    if (value === null || value === undefined) {
      delete json[section];
    }
    json[section] = value;
  }
  vscode.postMessage({
    type: MSG_TYP_DOCCHANGE,
    document: json,
  });
}

function duplicate(json: any): any {
  return JSON.parse(JSON.stringify(json));
}