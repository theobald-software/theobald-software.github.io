---
ref: ec-administration-02
layout: page
title: Einrichten einer IDoc-Testumgebung
description: Einrichten einer IDoc-Testumgebung
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=einrichten-einer-idoc-testumgebung
---

Unter Umständen kann es sein, dass Sie selbst eine Umgebung im SAP-System einrichten möchten, um Test-IDocs an Ihr Programm zu versenden.

In den nachfolgenden Schritten wird gezeigt, wie Sie alle Voraussetzungen schaffen, um innerhalb der ALE-Umgebung von SAP ein Test-IDoc zu generieren und zu versenden.

**Schritt 1: Ein logisches Zielsystem einrichten**

Um IDocs versenden zu können, benötigen Sie ein logisches System. Dieses richten Sie im Customizing (Transaktion SPRO) ein. Folgen Sie dort dem Pfad *SAP Web Application Server -> ALE -> Sender- und Empfängersysteme vorbereiten -> Logische Systeme einrichten -> Logische Systeme benennen*(dieser Pfad gilt für Release 4.7). Tragen Sie dort in der Tabellenpflege den Namen und die Bezeichnung eines neuen logischen Systems ein (z.B. ERPTEST).

**Schritt 2: RFC-Destination einrichten**

Richten Sie jetzt eine RFC-Destination in der Transaktion SM59 ein. Eine genaue Beschreibung finden Sie im Teilkapitel [RFC-Destinationen pflegen](./rfc-destinationen-pflegen).

**Schritt 3: IDoc-Port anlegen**

Legen Sie nun in der Transaktion WE21 einen IDoc-Port vom Typ Transaktionaler *RFC* an. Tragen Sie als RFC-Destination die in Schritt 2 angelegte Destination ein (siehe Bild).

![IDoc-Test-Environment_001](/img/content/IDoc-Test-Environment_001.png){:class="img-responsive"}

**Schritt 4: Partnervereinbarung**

Legen Sie in der Transaktion WE20 eine Partnervereinbarung unter dem in Schritt 1 definierten logischen System an. Darüber hinaus benötigen wir einen Ausgangsparameter (anzulegen über den Button mit dem grünen Plus-Zeichen). Der Nachrichtentyp (MATMAS für Materialstammdaten), der Empfängerport (aus Schritt 3) und der IDoc-Basistyp (MATMAS05) müssen so hinterlegt werden, wie auf dem Bild gezeigt.

![IDoc-Test-Environment_002](/img/content/IDoc-Test-Environment_002.png){:class="img-responsive"}

**Schritt 5: IDoc-Versand anstoßen**

Wenn alle Schritte korrekt eingerichtet sind, können Sie nun mit Hilfe der Transaktion BD10 Materialstammdaten-IDocs versenden. Tragen Sie das logische System (z.B. ERPTEST) und die zu versendende Materialnummer ein und bestätigen Sie mit F8. Die entsprechenden IDocs werden erzeugt und an den hinterlegten Port verschickt.

![IDoc-Test-Environment_003](/img/content/IDoc-Test-Environment_003.png){:class="img-responsive"}
