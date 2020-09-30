---
ref: xu-google-cloud-storage-01
layout: page
title: Anforderungen
description: Voraussetzungen
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---

### Voraussetzungen
- Google account
- Google Cloud Platform (GCP) Abonnement (Demoversion wird angeboten)
- Projekt ("My First Project" ist  vordefiniert)
- Google Cloud Storage (GCS) Bucket für Datenextraktionen.

### GCP-Konsole
Die GCP-Konsole ermöglicht die Konfiguration aller Ressourcen und Dienste. 
Um zur Dashboard-Übersicht zu gelangen, navigieren Sie zur [Google Cloud Storage](https://cloud.google.com/storage) Seite und klicken Sie auf **[Console]** oder **[Go to console]**. 

Um auf alle Einstellungen und Dienste zuzugreifen, verwenden Sie das Navigationsmenü auf der linken oberen Seite.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
### OAuth 2.0 Setup
Xtract Universal verwendet OAuth 2.0 zur Authentifizierung gegenüber den Google-Servern.
Um das OAuth 2.0-Protokoll zu aktivieren, konfigurieren Sie einen OAuth-Flow mit den erforderlichen Zugriffsberechtigungen auf Xtract Universal.

{: .box-note }
Hinweis: Google stuft Anwendungen von Drittanbietern zunächst allgemein als unsicher ein und gibt eine Warnung aus. 
Eine offizielle App-Verifizierung ist mit laufenden Kosten verbunden. 

1. Wählen Sie **APIs & Services > Credentials** im Navigationsmenü aus.
![xu-google-cloud-req-02](/img/content/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. Im Abschnitt "Credentials" wählen Sie **Create Credentials > OAuth client ID** aus.
![xu-google-cloud-req-03](/img/content/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Klicken Sie auf **[Configure consent screen]**. Der "Configure consent screen" wird mit dem OAuth-Flow verarbeitet, der beim Verbindungsaufbau im Designer gestartet wird (siehe [Verbindung](./connection#gcs-settings)).
![xu-google-cloud-req-04](/img/content/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. Wenn Ihr Konto zu einer Organisation gehört, können Sie die Nutzung von Xtract Universal in Kombination mit GCS auf Ihre Organisation beschränken. Wählen Sie dazu "intern" in der Option " User Type".  Diese Option ist nur verfügbar, wenn Sie ein [GSuite-Benutzer](https://gsuite.google.com/) sind. <br>
Alternativ können Sie jedem Benutzer mit Zugriff auf die OAuth-Anmeldeinformationen erlauben, Xtract Universal die Erlaubnis zu erteilen, Daten in Ihre GCS-Buckets zu schreiben. Wählen Sie dazu "extern" in der Option " User Type". <br> 
Klicken Sie auf **[Create]**, zum Fortfahren.
![xu-google-cloud-req-05](/img/content/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. Geben Sie im Abschnitt "App information" einen App-Namen Ihrer Wahl an. <br>
"Support email" und "Developer contact information" sind auch Pflichtfelder. Klicken Sie auf **[Save and continue]**, um zur nächsten Sektion weiterzugehen. <br>
![xu-google-cloud-req-06](/img/content/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/content/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. Klicken Sie im folgenden Abschnitt auf **[Add or remove scopes]**.
Xtract Universal benötigt Lese- und Schreibrechte für seine Operationen, die im Abschnitt "Scopes" konfiguriert werden.
![xu-google-cloud-req-08](/img/content/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Geben Sie [https://www.googleapis.com/auth/devstorage.read_write](https://www.googleapis.com/auth/devstorage.read_write) unter **Manually add scopes** ein und klicken Sie auf **[Add to table]**.
![xu-google-cloud-req-09](/img/content/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
Der neu hinzugefügte Bereich (Scope) ist der erste Eintrag in der Tabelle. Klicken Sie auf **[Update]**, um den Eintrag zu erstellen. 
![xu-google-cloud-req-10](/img/content/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
8. Klicken Sie auf **[Continue]**, wenn der Dialog mit der Meldung "Verfification required" erscheint. <br>
![xu-google-cloud-req-11](/img/content/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
9. Bestätigen Sie zweimal mit **[Save and continue]**. Klicken Sie auf **[Back to dashboard]**, um zu Dashboard zurückzukehren.      
![xu-google-cloud-req-12](/img/content/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/content/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/content/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
10. Kehren Sie zum Menü "Credentials" zurück, klicken Sie auf **[Create credentials]** und wählen Sie eine "OAuth client ID". <br>
Wählen Sie "Desktop app" als Applikationstyp aus, vergeben Sie einen beliebigen Namen und klicken Sie auf **[Create]**.
![xu-google-cloud-req-15](/img/content/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
11. Ihr OAuth-Client ist erstellt. <br>
Die "Client ID" und der "Client secret" sind für die Konfiguration der Destination in Xtract Universal notwendig (siehe [Verbindung](./connection)).
![xu-google-cloud-req-16](/img/content/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

