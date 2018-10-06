---
layout: page
title: Such-Attribute im BCS Modell
description: Such-Attribute im BCS Modell
product: erpconnect-services
parent: bcs-sharepoint-suche
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-such-attribute-im-bcs-modell
---

| Attribut                                               | Beschreibung                                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **IsCrawlable**  (Entity)                              | Kann im BCS Connector vom Benutzer aktiviert werden. Ermöglicht die Durchforstung der Entität im externen System.                                                                                                                                                                                           |
| **ShowInSearchUI**  (LobSystemInstance)                | Wird vom BCS Connector im Modell definiert, falls  IsCrawlable aktiviert ist. Ermöglicht die Auswahl und damit das Durchforsten einer spezifischen LOB System Instance.                                                                                                                                     |
| **Title**   (Entity)                                   | Kann im BCS Connector vom Benutzer selektiert werden. Ermöglicht die Auswahl eines Entitäts-Feldes, das als Link in den Suchergebnissen angezeigt werden soll.                                                                                                                                              |
| **RootFinder**  (Finder MethodInstance)                | Wird vom BCS Connector im Modell definiert, falls  IsCrawlable aktiviert ist. Ermöglicht den Aufruf der  Finder Methode zur Durchforstung (anstatt einer speziellen  IdEnumerator Methode).                                                                                                                 |
| **UseClientCachingForSearch**  (Finder MethodInstance) | Wird vom BCS Connector im Modell definiert, falls  IsCrawlable aktiviert ist. Vermeidet den Aufruf der  SpecificFinder Methoden während der Durchforstung, falls die  Finder Methode alle Felder der Entität zurückgibt. Bei größeren Datenmengen reduziert sich die Durchforstungsdauer dadurch erheblich. |