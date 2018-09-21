---
layout: page
title: IDoc-Empfang einrichten
description: IDoc-Empfang einrichten
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=idoc-empfang-einrichten
---

In dem Beispielprogramm, das Sie in Kapitel [Ein ORDER-IDoc versenden]() finden, wird aus einem externen System ein IDoc an das SAP-System gesendet. Um das dort gesendete IDoc auch wirklich zu einem Kundenauftrag weiter zu verarbeiten, sind nur die zwei folgenden Schritte nötig.

**Schritt 1: Partnervereinbarung**

Im Fall des gesendeten ORDER-IDocs fungiert das externe System als Kunde. Aus diesem Grund muss in der Transaktion WE20 eine Partnervereinbarung hinterlegt werden. Die zugehörige Partnernummer ist die Kundennummer.

Außerdem muss unter der Partnervereinbarung ein Eingangsparameter zum Nachrichtentyp ORDERS angelegt werden, der auf den Vorgangscode ORDE verweist. Nur so kann SAP bei einem eingehenden IDoc auch die richtige Verarbeitungsroutine finden, um den Kundenauftrag anzulegen.

Die beiden Abbildungen zeigen die Partnervereinbarung und die Definition des Eingangsparameters.

![IDoc-Receive-001](/img/content/IDoc-Receive-001.png){:class="img-responsive"}

![IDoc-Receive-002](/img/content/IDoc-Receive-002.png){:class="img-responsive"}

**Schritt 2: Vertriebsbereichszuordnung**

Jeder Verkaufsvorgang muss einem Vertriebsbereich zugeordnet sein, der aus Verkaufsorganisation, Vertriebsweg und Sparte besteht. Da im Falle eines automatisch angelegten Auftrags kein Sachbearbeiter diese Daten erfassen soll, lassen wir sie das System automatisch ermitteln. Hierfür ist die Transaktion VOE2 zuständig. Dort sind die Kundennummer und die entsprechenden Parameter in einer Tabellenpflege zu erfassen.

![IDoc-Receive-003](/img/content/IDoc-Receive-003.png){:class="img-responsive"}