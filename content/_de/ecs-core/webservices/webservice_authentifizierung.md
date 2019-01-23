---
ref: ecs-core-webservice-designer-02
layout: page
title: Webservice Authentifizierung
description: Webservice Authentifizierung
product: ecs-core
parent: webservices
childidentifier: webservice_authentifizierung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=webservice_authentifizierung
---

Webservice Authentifizierung in ECS Core betrifft zwei Bereiche:

1. **Authentifzierung zwischen dem WebService Designer und ECS Core**: Dies bezieht sich auf das Deployment eines Webservice auf den ECS Core Server. Deployed wird zur Management Site mit Standard-Port 8085 ("Management Endpoint").
 
2. **Authentifizierung zwischen einem Webservice Konsumenten und ECS Core**: Dies bezieht sich auf einen Webservice Aufruf von einer Konsumentenanwendung (z.B. Cloud App, Workflow etc.). Konsumiert wird von der Services Site mit Standard-Port 8080 ("Consumer Endpoint").


Die folgenden Authentifizierungsmethoden werden für das Deployment von Webservices mit dem WebService Designer unterstützt: 

- **Deployment mit API Key**: Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Deployment auf einen Benutzer der ECS Core Management Site erstellt worden sein (anlegbar unter *Administrators*).

- **Deployment mit Basic Credentials**: Hier wird zur Authentifizierung ein Benutzer verwendet, der auf der ECS Core Management Site unter *Administrators* angelegt wurde. Windows Credentials werden für das Deployment nicht untertstützt!    


Die folgenden Authentifizierungsmethoden werden für das Konsumieren von Webservices unterstützt: 

- **Authentifzierung mit API Key** (nur unterstützt in Kombination mit Azure Relay): Ein dedizierter API Key erstellt auf der ECS Core Management Site wird für die Authentifizierung verwendet. Der API Key muss für das Konsumieren auf einen Windows Benutzer oder Windows-Benutzergruppe erstellt worden sein.  

- **Basic Authentifizierung** (empfohlen mit HTTPS): Windows Basic Authentication wird zur Authentifizierung verwendet.

- **Windows Authentifizierung (NTLM)**: Der lokale Windows Benutzer mit seinen Credentials wird zur Authentifizierung verwendet. Das ermöglicht, dass sich der Webservice-Ersteller von jeder Maschine im Active Directory verbinden kann, vorausgesetzt der Account wird auf dem ECS Core Server erkannt. <br>
NTLM kann nur verwendet werden zur Authentifizierung, wenn dies die Client-Anwendung unterstützt.