
### Basis-URL-Format

Die Basis-URL für Webaufrufe verwendet das folgende Format: `[protocol]://[host or IP address]:[port]/`.

#### Beispiele

| Protokoll	  | Syntax	      | Beispiel       |
|:----------- | :------------ | :------------ | 
| HTTP	| `http://[host].[domain]:[port]` | `http://sherri.theobald.local:8065` | 
| HTTP	| `http://[host]:[port]` | 	`http://localhost:8065` | 
| HTTPS | `https://[host].[domain]:[port]` | `https://sherri.theobald.local:8165` <br>Erfordert einen dedizierten Hostnamen und ein X.509-Zertifikat, siehe {% if page.parent == "xtract-universal" or page.parent == "board-connector"%}[Web Server Einstellungen](./server/server-einstellungen#web-server).{% else %}[Web Server Einstellungen](../server/server-einstellungen#web-server).{% endif %} | 
