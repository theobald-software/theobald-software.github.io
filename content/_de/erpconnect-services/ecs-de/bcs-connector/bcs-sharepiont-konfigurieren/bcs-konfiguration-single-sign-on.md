---
ref: ecs-sharepoint-configuration-02
layout: page
title: Konfiguration Single Sign-On
description: Konfiguration Single Sign-On
product: erpconnect-services
parent: bcs-sharepiont-konfigurieren
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-konfiguration-single-sign-on
---

Wenn ein Anwender sich auf einer SharePoint Seite anmeldet, so wird er mit einer von SharePoint unterstützten Methode authentifiziert. Diese können z.B. NTLM, Kerberos, Basic oder eine formularbasierte Authentifizierung sein.

Es ist üblich, dass das Account und die Anmeldedaten eines Anwenders in SharePoint sich von denen im SAP System unterscheiden. So  kann sich der Anwender 'Bob Smith' nach seiner erfolgreichen Anmeldung am Windows System mit seinem Benutzername 'Contoso\BobS' und seinem Kennwort anmelden und ohne weitere Anmeldung das SharePoint System nutzen. Um das SAP System zu nutzen, muss Bob sich mit seinem SAP User Account 'BSMITH' und einem anderen Kennwort am SAP System anmelden. 

In solchen Fällen können Sie den BCS Configurator so einstellen, dass Sie mit dem SharePoint Secure Store Service die benötigten SAP Berechtigungen für den Zugriff verwaltet.

Im BCS Connector Designer definieren Sie eine *Secure Store ID* als Teil Ihrer *SAP Connection* Settings. Diese ID ist zur Laufzeit verfügbar. Die Secure Store ID ist der Name einer *Secure Store Target Application* welche die Verweise für die Berechtigungen für das SAP System verwaltet. Wenn das BCS Model in SharePoint gespeichert wird, beinhaltet das Modell die benötigten Authentifizierungseinstellungen für die Verwendung mit dem Secure Store zur Laufzeit.

Zur Laufzeit wird das *SharePoint BCS* die Berechtigungsinformationen für das SAP System aus der *Secure Store Target Application* für den angemeldeten Benutzer erhalten. Mit diesen Anmeldedaten wird der BCS sich mit dem externen SAP System verbinden.

Folgen Sie die Schritte [Secure Store Application](../..//ecs-runtime/ecs-konfiguration/ecs-secure-store-application-anlegen) anlegen, um eine Secure Store Target Application mit dem Name ERPConnectServices anzulegen und sie mit dem BCS Connector zu benutzen.