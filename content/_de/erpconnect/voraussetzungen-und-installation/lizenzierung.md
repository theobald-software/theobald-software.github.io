---
ref: ec-prerequisites-and-installation-04
layout: page
title: Lizenzierung
description: Lizenzierung
product: erpconnect
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=lizenzierung
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Eine Demo-Lizenz wird automatisch mit der Installation von ERPConnect installiert. <br>
Eine reguläre Lizenz wird nach dem Kauf des Produkts im [Kundenportal - My Theobald Software](https://my.theobald-software.com/) zur Verfügung gestellt. 

{: .box-note }
**Hinweis:** Die Standard Demo-Lizenz unterstützt keine Anwendungen in Web-Umgebungen.
Um ERPConnect unter ASP.NET zu testen, stellen wir Ihnen gerne eine zeitlich beschränkte Testlizenz zur Verfügung.
Sie können die Testlizenz formlos per Mail an [sales@theobald-software.com](mailto:sales@theobald-software.com) anfordern. 


### Installation der ERPConnect-Lizenz 

Nach Ablauf der Testphase, funktioniert ERPConnect nur noch mit gültiger Lizenznummer.

Da ERPConnect die Lizenznummer bei jedem Aufruf prüft (ob als Server oder als Client), müssen Sie die Lizenz vor dem ersten Verbindungsaufbau mit dem SAP-System setzen.<br>
Setzen Sie die Lizenznummer während der Laufzeit über die statische Klasse `ERPConnect.LIC.`.

{% highlight csharp %}
ERPConnect.LIC.SetLic("XXXXXXXXXX");
{% endhighlight %}


Falls Sie mehr als eine Entwicklerlizenz besitzen, sind die Lizenznummern am Ende durchnummeriert: -01, -02 usw. 
Welche Endung Sie bei *SetLic* einsetzen, spielt keine Rolle. Die Endung kann auch komplett weggelassen werden.

### Wartung
Kontaktieren Sie das [Sales-Team](mailto:sales@theobald-software.com) für Informationen über verfügbare Wartungsoptionen.<br>
Bei technischen Problemen wenden Sie sich per E-Mail an das Support-Team: [https://support.theobald-software.com](https://support.theobald-software.com).

<!---
### Support
-->
{% include _content/de/einfuehrung/support.md %}
{% include _content/de/einfuehrung/support-disclaimer.md %}


****
#### Weiterführende Links
- [Theobald Software Kundenportal](https://my.theobald-software.com/)
- [Theobald Software Support-Portal](https://support.theobald-software.com/helpdesk)
