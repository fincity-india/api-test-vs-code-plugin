import {
  VSCodeButton,
  VSCodeDropdown,
  VSCodeOption,
  VSCodeTextField,
} from "@vscode/webview-ui-toolkit/react";
import React from "react";

export function AddressBar({
  document,
  readOnly,
  onMethodChange,
  onUrlChange,
  onSend,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <VSCodeDropdown
        id="methods"
        value={document.method}
        onChange={(e) => onMethodChange(e.target.value)}
        disabled={readOnly}
      >
        <VSCodeOption label="GET" value="get">
          Get
        </VSCodeOption>
        <VSCodeOption label="POST" value="post">
          Post
        </VSCodeOption>
        <VSCodeOption label="PUT" value="put">
          Put
        </VSCodeOption>
        <VSCodeOption label="PATCH" value="patch">
          Patch
        </VSCodeOption>
        <VSCodeOption label="DELETE" value="delete">
          Delete
        </VSCodeOption>
        <VSCodeOption label="OPTIONS" value="options">
          Options
        </VSCodeOption>
        <VSCodeOption label="HEAD" value="head">
          Head
        </VSCodeOption>
      </VSCodeDropdown>
      <VSCodeButton onClick={onSend} disabled={readOnly}>
        Send
      </VSCodeButton>
      <VSCodeTextField
        id="address"
        value={document.url ?? ""}
        onChange={(e) => onUrlChange(e.target.value)}
        style={{ flex: "1" }}
        disabled={readOnly}
      ></VSCodeTextField>
    </div>
  );
}
