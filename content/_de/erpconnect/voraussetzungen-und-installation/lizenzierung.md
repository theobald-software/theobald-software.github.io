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

Nach dem Ablauf der Testperiode wird sich ERPConnect weigern, ohne gültige Lizenznummer weiterzuarbeiten.

Die Lizenznummer, die Sie beim Kauf von ERPConnect bekommen haben, muss während der Laufzeit in Ihrem Code gesetzt werden, und zwar über die statische Klasse ERPConnect.LIC.

Dieses Setzen mittels SetLic sollte vor dem ersten Verbinden mit dem SAP-System stattfinden (unabhängig, ob als Server oder als Client). 

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
ERPConnect.LIC.SetLic("XXXXXXXXXX");
{% endhighlight %}
</details>


<details>
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
ERPConnect.LIC.SetLic("XXXXXXXXXX")
{% endhighlight %}
</details>

Falls Sie mehr als eine Entwicklerlizenz besitzen, sind die Lizenznummern ggfs. am Ende durchnummeriert: -01, -02 usw. Welche Endung Sie bei SetLic einsetzen, spielt keine Rolle. Sie können die Endung auch komplett weglassen.

Die Demoversion funktioniert unter ASP.NET nicht und weigert sich mit einer Exception aufgrund der fehlenden Lizenz zu SAP zu verbinden. Gerne stellen wir Ihnen unbürokratisch eine zeitlich beschränkte Testlizenz zur Verfügung. Bitte fordern Sie diese einfach formlos per Mail an (https://support.theobald-software.com). 
