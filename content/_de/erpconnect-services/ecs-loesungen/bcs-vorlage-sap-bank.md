---
layout: page
title: Vorlage SAP Bank
description: Vorlage SAP Bank
product: erpconnect-services
parent: ecs-loesungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-vorlage-sap-bank
---

Diese Vorlage bietet eine Visual Studio 2012 Solution, welche ein BDC/BCS-Modell (externen Inhaltstyp) in SharePoint anlegt. Das BCS-Modell ist über die ERPConnect Services Runtime mit dem SAP-System verbunden.

Basierend auf dem BCS-Modell legen wir eine externe Liste in SharePoint an, welche einen lesenden und schreibenden Zugriff auf das SAP-Objekt Bank bietet und das Anzeigen und Ändern der Bank-Daten direkt in der externen Liste ermöglicht.

![ECS-Bank-VS-BCS-Sample](/img/content/ECS-Bank-VS-BCS-Sample.jpg){:class="img-responsive"}

Stellen Sie vorher sicher, dass Sie eine ECS-Anwendung in SharePoint angelegt haben. Das BCS-Modell greift auf die default ECS-Anwendung zu.

![ECS-Bank-Application-Service](/img/content/ECS-Bank-Application-Service.jpg){:class="img-responsive"}

Deployen Sie das BCS-Modell nach SharePoint. Nun finden Sie den externen Inhaltstyp SAPBank in SharePoint.

![ECS-Bank-External-Bank-Entity](/img/content/ECS-Bank-External-Bank-Entity.jpg){:class="img-responsive"}

Legen Sie eine externe Liste basierend auf dem externen Inhaltstyp SAPBank an.

![ECS-Bank-SP-External-List-List](/img/content/ECS-Bank-SP-External-List-List.jpg){:class="img-responsive"}

Nun können Sie Bank-Datensätze aus SAP direkt in SharePoint anzeigen ...

![ECS-Bank-SP-External-List-View](/img/content/ECS-Bank-SP-External-List-View.jpg){:class="img-responsive"}

.. bzw. ändern.

![ECS-Bank-SP-External-List-Edit](/img/content/ECS-Bank-SP-External-List-Edit.jpg){:class="img-responsive"}

Die Vorlage (Visual Studio 2012) können Sie [hier]() runterladen.