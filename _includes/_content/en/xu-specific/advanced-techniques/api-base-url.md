
### Base URL Format

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.

#### Examples

| Protocol	  | Syntax	      | Example       |
|:----------- | :------------ | :------------ | 
| HTTP	| `http://[host].[domain]:[port]` | `http://sherri.theobald.local:8065` | 
| HTTP	| `http://[host]:[port]` | 	`http://localhost:8065` | 
| HTTPS | `https://[host].[domain]:[port]` | `https://sherri.theobald.local:8165` <br>Requires a dedicated host name and X.509 certificate, see [web server settings](../server/server-settings#web-server). | 
