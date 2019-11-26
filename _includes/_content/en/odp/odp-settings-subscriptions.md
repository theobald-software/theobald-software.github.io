### Subscriptions
To display more details about the subscriber process, click on **Show Subscriptions / Show active subscriptions** at the top of the  “Define data source for SAP ODP” window:
<br/>

![ODP Subscriber](/img/content/odp/odp-settings-subscriptions.png){:class="img-responsive"}

<br/>
**Tip:** The information displayed in the "Delta Subscriptions for product" window can also be viewed in SAP transaction *ODQMON*.  
<br/>

![ODP Subscriber](/img/content/odp/odp-settings-02.png){:class="img-responsive"}

<br/>
- **Queue**: Technical name of all subscriptions of a specific Theobald Software Xtract product (e.g. Xtract Universal).<br>
A subscription is bound to a specific product and the ODP component the init was originally triggered from. An ODP data provider, such as 2LIS_02_ITM, can have multiple subscriptions. The subscription that refers to the ODP component at hand is marked with a red asterisks.
- **Process**: Technical name of a subscription
- **R. (number of requests)**: Number of executed delta requests
- **Last request**: Timestamp of the last delta request
- **Created**: Timestamp of the init request

To delete a subscription click on the *dustbin* icon on the right side of the window.

