---
layout: page
title: Importieren von User Defined Actions
description: Importieren von User Defined Actions
product: erpconnect-services
parent: voraussetzungen_installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=importieren_von_user_defined_actions
---

Für einige Funktionen innerhalb der Workflows werden sogenannte *User Defined Actions* benötigt, die vor der Implementierung der Workflows importiert werden müssen. 

Öffnen Sie auf Ihrer Site Collection *Settings>Nintex Workflow 2013> Manage User Defined Actions*

![ECS-Nintex-TravelScenarios14](/img/content/ECS-Nintex-TravelScenarios14.png){:class="img-responsive"}

Klicken Sie auf Import und importieren Sie zunächst die User Defined Actions ***Get Form Detail Rows***  (Datei: Get_Form_Detail_Rows.uda) und Get ***User Info*** (Datei: 
Get_User_Info.uda):

Mit der User Defined Action *Get Form Detail Rows* werden im **Reiseantrag** die Informationen aus der Nintex Form zu Flügen, Hotels und anderen Kosten zusammengetragen und in Collection Variablen gesichert. Bei der **Reisekostenabrechnung** werden mit dieser User Defined Action die Angaben zu den einzelnen Reisekosten ermittelt.

![ECS-Nintex-TravelScenarios15](/img/content/ECS-Nintex-TravelScenarios15.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios16](/img/content/ECS-Nintex-TravelScenarios16.png){:class="img-responsive"}

Mit der User Defined Action Get User Info  werden im Reisekosten-Workflow Informationen zum beantragenden User über eine LDAP-Query aus dem Active Directory ermittelt. Ohne angebundenes Active Directory funktioniert diese User Defined Action nicht. Damit die LDAP-Query funktioniert, müssen in den Nintex Workflow Management Einstellungen zwei neue Workflow-Konstanten angelegt werden.

Öffnen Sie zunächst in der SharePoint Zentraladministration den Menüpunkt *Nintex Workflow Management* und dort *Manage Workflow Constants*

![ECS-Nintex-TravelScenarios31](/img/content/ECS-Nintex-TravelScenarios31.png){:class="img-responsive"}

Legen Sie mit *New* zunächst die Variable *AdQueryCreds* an. Diese ist in der User Defined Action hinterlegt und enthält Username und Passwort des Users, der Zugriffsrechte auf das LDAP hat und Auswertungen ausführen darf. 

![ECS-Nintex-TravelScenarios32](/img/content/ECS-Nintex-TravelScenarios32.png){:class="img-responsive"}

Legen Sie anschließend die Konstante ADQueryPath an. Diese ist ebenfalls in der User Defined Action hinterlegt und enthält den LDAP-Pfad, wo Ihre Benutzer im Active Directory abgelegt sind. 

![ECS-Nintex-TravelScenarios33](/img/content/ECS-Nintex-TravelScenarios33.png){:class="img-responsive"}

Die User Defined Actions stehen anschließend zur Verfügung. 

![ECS-Nintex-TravelScenarios17](/img/content/ECS-Nintex-TravelScenarios17.png){:class="img-responsive"}

Für den erfolgreichen Import der User Defined Action ***Convert to USD*** ist die Aktivierung des Drittanbieter-Addons Strikeiron *Currency Converter* über den Nintex-Live Katalog erforderlich. Mit der User Defined Action *Convert to USD* werden die geschätzten Kosten des Reiseantrags von unterschiedlichen Währungen nach US-Dollar umgerechnet. Die User Defined Action lässt sich auch so konfigurieren, dass die Kosten in Euro umgerechnet werden. 

Klicken Sie unter *Settings>Nintex Workflow 2013> Manage User Defined Actions* auf Create und öffnen Sie den *Nintex Live Catalog*.

![ECS-Nintex-TravelScenarios18](/img/contentECS-Nintex-TravelScenarios18/.png){:class="img-responsive"}

Dort können Sie nach dem Addon *Strikeiron exchange rate and currency converter* suchen und dieses hinzufügen. 

![ECS-Nintex-TravelScenarios19](/img/content/ECS-Nintex-TravelScenarios19.png){:class="img-responsive"}

Für die Nutzung des Addons ist eine Registrierung für einen kostenlosen Testzeitraum erforderlich. Die Registrierung können Sie hier vornehmen.  <br>
Hinterlegen Sie gleich, nachdem Sie sich registriert haben, den Benutzernamen und das Kennwort als Workflow-Konstanten in den Nintex Workflow Management Einstellungen in der Zentraladministration. Diese Workflow-Konstanten werden dann in der User Defined Action zur Authentifizierung für das Addon herangezogen. 

![ECS-Nintex-TravelScenarios29](/img/content/ECS-Nintex-TravelScenarios29.png){:class="img-responsive"}


![ECS-Nintex-TravelScenarios30](/img/content/ECS-Nintex-TravelScenarios30.png){:class="img-responsive"}

Anschließend lässt sich die User Defined Action *Convert to USD* ebenfalls importieren:

![ECS-Nintex-TravelScenarios20](/img/content/ECS-Nintex-TravelScenarios20.png){:class="img-responsive"}

Mit einem Klick auf die entsprechende User Defined Action öffnet sich der jeweils zugrunde liegende Workflow, der im Hintergrund prozessiert wird. Hier können sie theoretisch auch kundenindividuelle Anpassungen vornehmen, z.B. den Währungskonverter so konfigurieren, dass er in Euro umrechnet.  

![ECS-Nintex-TravelScenarios21](/img/content/ECS-Nintex-TravelScenarios21.png){:class="img-responsive"}
