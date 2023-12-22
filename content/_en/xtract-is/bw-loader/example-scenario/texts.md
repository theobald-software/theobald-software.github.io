---
ref: xi-example-scenario-02
layout: page
title: Texts
description: Texts
product: xtract-is
parent: example-scenario
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=texts
---
In the previous section, we created a master data InfoObject while specifying that there are language-dependent texts. These are located in the ProductText table.

Create a new data flow (or a new package), prepare the connection manager and define an OleDB source for the ProductText table. Now define a BW Loader target and draw the pipeline to the target.

![BWLoader-Text-01](/img/content/BWLoader-Text-01.png){:class="img-responsive"}


As all necessary BW objects have been already created in the last section. Now create a new InfoPackage by clicking *Create New InfoPackage* button. The dialog should be filled in as follows:

![BWLoader-Text-02](/img/content/BWLoader-Text-02.png){:class="img-responsive"}


Because we already specified in the ZPROD setup that there are language dependent short and long texts, the transfer structure is already built accordingly. Now only the pipeline elements have to be mapped to the transfer structure elements, as shown in the following screenshot:

![BWLoader-Text-03](/img/content/BWLoader-Text-03.png){:class="img-responsive"}


A test run uploads the texts to the BW. The following screenshot now shows the RSA1 transaction. We can see very nice here how both InfoPackages for the attributes and texts are displayed under the ZPROD InfoSource. The XTRACTSYS source system forms the transfer layer. Depending on the release you are using, this screenshot might look different.

![BWLoader-Text-04](/img/content/BWLoader-Text-04.png){:class="img-responsive"}


The following screenshot shows the contents of the PSA table after posting. In an Unicode system, any fonts can be posted (e.g. Japanese).

![BWLoader-Text-05](/img/content/BWLoader-Text-05.png){:class="img-responsive"}

