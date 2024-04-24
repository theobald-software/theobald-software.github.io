Mit dem Operational Data Provisioning (ODP)-Framework können Sie Tabellen und einfache Views aus SAP HANA-Systemen über einen SAP Landscape Transformation Replication Server (SLT) extrahieren.
Der SLT-Server ist eine triggerbasierte CDC-Lösung, die SAP-Tabellen und -Views replizieren und als Delta-Extraktionen zur Verfügung stellen kann.

### Verfügbare Tabellen

- Reguläre SAP-Tabellen
- Clustertabellen
- Pool-Tabellen

### Anforderungen

Der SLT-Serverkontext erfordert einen SAP Landscape Transformation Replication Server (SLT), der für ODP eingerichtet ist, siehe [SAP Dokumentation: Transferring Data from SLT Using Operational Data Provisioning](https://help.sap.com/docs/SAP_NETWEAVER_750/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/6ca2eb9870c049159de25831d3269f3f.html?locale=en-US).

Für den SLT-Server gelten folgende Anforderungen:

- Mindest-Release-Version des SLT-Servers:
	- Add-On DMIS 2011 SP05 
	- SAP NetWeaver 7.3 SPS10, 7.31 SPS09 or 7.4 SPS04 (ODP infrastructure)
- Add-On DMIS_2011 SP03/SP04 oder höher bzw. 2010 SP08/SP09ist installiert im SAP Quellsystem.
- Die folgenden SAP-Hinweise werden im SAP-Quellsystem veröffentlicht:
	- SAP Note 1863476 
	- SAP Note 1817467 bei Verwendung des Add-Ons DMIS 2011 SP05

### Verwendung des SLT-Servers

Beachten Sie Folgendes, wenn Sie einen SLT-Server verwenden:
1. Bei der [Suche](./odp-define) nach Daten über den SLT-Server, Stellen Sie sicher, dass Sie den richtigen Kontext auswählen.
![ODP SLT-Server](/img/content/odp/odp-component-slt-server.png){:class="img-responsive"}
2. Eine Live-Vorschau der Daten ist im SLT-Server-Kontext nicht verfügbar. 

***
### Weiterführende Links
- [SAP Dokumentation: Transferring Data from SLT Using Operational Data Provisioning](https://help.sap.com/docs/SAP_NETWEAVER_750/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/6ca2eb9870c049159de25831d3269f3f.html?locale=en-US)
- [SLT-Performance-Guide (Nov 2022)](/docs/SLT-Performance-Guide_Nov_2022.pdf){:download="SLT-Performance-Guide_Nov_2022.pdf"}



<!---
2. The **Delta Update** option is selected by default. The full data load is not available when using an SLT server.
-->