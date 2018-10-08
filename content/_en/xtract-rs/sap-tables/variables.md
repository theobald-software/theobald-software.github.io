---
layout: page
title: Variables
description: Variables
product: xtract-rs
parent: sap-tables
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=variables
---

To make the WHERE statement dynamic you can use variables. Just add an @ before the variable. Please note that DATE values must be provided in form of YYYYMMDD.

To fill the variable please go to the parameter tab in the dataset properties dialog. The screenshot shows how to connect variables and parameters. Of course SSRS expressions can be used as well to fill the variables.

If the whole WHERE clause starts with an @ the component treats the variable as if it contains the complete WHERE clause not only a single value. This might be useful in some use cases when WHERE clauses are needed that are created during runtime.

![Variables](/img/content/Variables.png){:class="img-responsive" }