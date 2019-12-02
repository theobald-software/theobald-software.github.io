### Subscriptions
To display more details about the subscriber process, depending on the product, either click **Show Subscriptions / Show active subscriptions** at the *top*  or at the *bottom* of the  “Define data source for SAP ODP” window:
<br/>

![Subscriptions](/img/content/odp/odp-settings-subscriptions.png){:class="img-responsive"}
<br/>

<br/>
**Tip:** The information displayed in the "Delta Subscriptions for product" window can also be viewed in SAP transaction *ODQMON*.  
<br/>

![ODP Subscriber](/img/content/odp/odp-settings-02.png){:class="img-responsive"}

<br/>
- **Queue**: Technical name of all subscriptions of a specific Theobald Software Xtract product (e.g. Xtract Universal).<br>
A subscription is bound to a specific product and the ODP component the init was originally triggered from. An ODP data provider, such as 2LIS_02_ITM, can have multiple subscriptions. The subscription that refers to the ODP component at hand is marked with a red asterisks. <br/>
- **Process**: Technical name of a subscription <br/>
- **R. (number of requests)**: Number of executed delta requests <br/>
- **Last request**: Timestamp of the last delta request <br/>
- **Created**: Timestamp of the init request <br/>

To delete a subscription click on the *dustbin* icon on the right side of the window.

