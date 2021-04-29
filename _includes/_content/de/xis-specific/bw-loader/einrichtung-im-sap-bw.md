Zunächst einmal ist es nötig, in der BW Administrator Workbench ein neues Quellsystem anzulegen (z.B. mit dem Namen XTRACTSYS). Dieses Quellsystem muss vom Typ *Drittanbieter / Staging BAPIs* sein. Bitte merken Sie sich die im Quellsystem vergebene *Programm ID*. Wir werden sie später wieder brauchen.

![BWLoader-Configuration-02](/img/content/BWLoader-Configuration-02.png){:class="img-responsive"}

Nun können Sie eine InfoSource mit dem Quellsystem verknüpfen und ein entsprechendes InfoPackage anlegen. Diese Konstellation ist im folgenden Bild gezeigt. Hier taucht im Übrigen auch wieder das oben angelegte Quellsystem auf. Der Anker für die Xtract IS BW Loader Komponente ist immer ein InfoPackage.

![BWLoader-Configuration-03](/img/content/BWLoader-Configuration-03.png){:class="img-responsive"}
