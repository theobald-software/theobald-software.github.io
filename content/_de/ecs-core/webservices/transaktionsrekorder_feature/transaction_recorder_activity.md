---
ref: ecs-core-webservice-designer-05
layout: page
title: Transaction Recorder Activity
description: Transaction Recorder Activity
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 3
lang: de_DE
---

After a successful recording, the SAP GUI will close and the *Transaction Recorder Activity* window appears in the WebService Designer. The following tabs can be found there:

**Standard**

In the *Standard* tab you find the fields you somehow used or filled with values in the recording and can map them to input parameters. It’s the technical field names from SAP. 
To understand the field meanings, the recording overview in the *References* tab helps. Besides that, all field descriptions can be looked up directly in the SAP transaction.  

![ta_rec_feature_10](/img/content/ecscore/ecscore-wsd_ta_rec_10.png){:class="img-responsive"}

**References**

In the *References* tab, you get an overview of the transaction recording. You can see a sequence of actions, starting with entering the transaction code.
In principle, only the sequence numbers where an entry was made, are significant. All other fields (beginning with „BDC“ in the example) are technical processes, 
such as jumping with the cursor to the next field or the next input screen and can therefore be ignored.

![ta_rec_feature_11](/img/content/ecscore/ecscore-wsd_ta_rec_11.png){:class="img-responsive"}

  
**Labels**

In the *Labels* tab you can rename the activity title and subtext for the recorded transaction (i.e. give a descriptive name for the transaction code).

![ta_rec_feature_24](/img/content/ecscore/ecscore-wsd_ta_rec_24.png){:class="img-responsive"}
