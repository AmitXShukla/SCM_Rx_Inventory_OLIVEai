# SCM_Rx_Inventory_OLIVEai_loop
Olive Loop to manage Supply Chain Rx Inventory system using Predictive Analytics AI

#### Author: Amit Shukla
#### Contact: info@elishconsulting.com
---
### Objective: 
Managing supply chain (Procure 2 Pay operations) is always a challenging tasks for any organization whether small, medium and large. And managing these operations effectively become even more critical for Healthcare providers.

Business user must have complete visibility and require operation intelligence information readily available to make quick, effective and informed decisions.

SCM Rx Inventory AI Olive LOOP solves this problem. It acts as an AI assistant to help user make quick informed decision. As user input, search for Items, Purchase orders, DocCART or other SCM related information, Olive Loop connects to a REST API, which render live data & predictive analytics based on pre-trained AI models, historical transactions stored in system.

---
### how does it work

    user login to Healthcare OLTP / ERP Application
    user input
    for example, PO12345 | VNDR12345 | ITEM12345 (use these string for **demo)

    -> Olive Helps Aptitudes / Sensor
        -> Elastic search
            -> ITEM
                | About ITEM
                - ALERTs
                    - Anomaly
                        | Price variation
                        | Qty variation
                        | Preferred ITEM
                    - Recommendation Engine
                        | bought together
                        | preferred vendor
                        | on/off contract
                    - DocRxCART
                        | low inventory
                        | Auto Replenishment
            -> IN (PO | REQ | RECV | VNDR | RECV | AT_PAR | DocRxCART)
                | About transaction
                - ALERTs
                    - Anomaly
                        | MXP (Match Exception)
                            | Price variation
                            | Qty variation
                            | Preferred ITEM
                    - Recommendation Engine
                        | preferred vendor
                        | on/off contract
    
    ** in demo environment, use input such as - PO12345 | VNDR12345 | ITEM12345
    ** in production, backend AI build a unique index tables for elastic search and acknowledge and classify user input search accordingly.
---

### Technology stack
    Front end: Olive Helps
    Middleware: Olive Loop
    REST API: JuliaLang | NodeJS
    Cloud: any (** Oracle OCI | Microsoft Azure | AWS)
    Database: any (**Oracle | MYSQL | Firebase | MongoDB)
    AI: JuliaLang & FluxML.ai | Python & Pytorch

---
### Application Process
<font color=red>TODO</font>
---
### System Process
<font color=red>TODO</font>
---
### Dictionary
    SCM - Supply chain Management
    AUTO_REPL - Auto replenishment - automated Critical Item order when below threshold
    Rx - Pharmacy
    IN | INV - Inventory
    OLTP - Online Transaction Processing system
    ITEM - Product
    ITEM_CAT - Item Catalogue | Item Category
    UNSPSC - United Nations Standard Products and Services Code
    PO - Purchase Order
    MSR - Material Service Request | internal item transfers among Entities
    REQ - Requisition (request to create purchase order)
    RECV - Receiving
    MXP - Match Exception - Transactions which failed to match
    ON_Contract - Items which are on-contract with a given vendor
    PREF_ITEM - Items/Products identified as preferred
    Vendor - Vendor | Supplier | Manufacturer | Service Provider
    ENTITY - Operating business unit | Region | Business group
    AT_PAR - Items/Products which are critical to business operations
    DocRxCART - Items/Products which are critical to doctor's office
    CART_ITEMS - Items/Products which are critical to business operations

---
### SCM ERD
### Application Process & System Process

---
### Loop approval check list

https://docs.oliveai.dev/ldk/loop-publication/loop-approval-checklist

Ensure that all Loop information and metadata is complete and accurate. Please provide a Loop Description that includes the following:

License Agreement (can be a link to an external resource)

    https://github.com/AmitXShukla/SCM_Rx_Inventory_OLIVEai/blob/main/LICENSE

Privacy Policy (can be a link to an external resource)

    https://github.com/AmitXShukla/SCM_Rx_Inventory_OLIVEai/blob/main/LICENSE

Declare what Aptitudes your loop uses from the LDK

    This Release -> Clipboard, Search, Index, User, Whisper
    Future release - Filesystem, Screen, Process

Declare how your Loop uses the user’s information and how your organization uses that information

    SCM_Rx_IN loop reads clipboard/ user input text and access/search database / AI Prediction analytics through REST API and renders results.
    This loop does NOT store any user input information anywhere in application and it does NOT alter/update any back-end information based on Olive Helps loop user input.

Declare where your loop is sending users’ information, including the subdomain level

    gitlab.com/AmitShukla_AI/SCM_Rx_IN

Test your Loop for crashes and bugs

    Loop is tested for crashed and bugs on-premise data.

Enable backend services so that they’re live and accessible during review

    gitlab.com/AmitShukla_AI/SCM_Rx_IN

Provide documentation and/or source code of how data transmitted from Olive Helps is being consumed and/or persisted

    SCM_Rx_IN loop reads clipboard/ user input text and access/search database / AI Prediction analytics through REST API and renders results.
    This loop does NOT store any user input information anywhere in application and it does NOT alter/update any back-end information based on Olive Helps loop user input.
    Please refer to Application process above for more details.

Confirm all servers associated with your loops, transmitted, and/or persisted data are hosted in the US

    All servers associated with loops, transmitted and/or persisted data are hosted in US.

Confirm no data will be transmitted outside of the US

    No data will be transmitted outside of the US

### Product Requirements for Loop Authors
<font color=red>TODO</font>
Provide an explanation of how to trigger each type of Whisper or workflow within the Loop


Submit detailed explanations of any non-obvious features, including supporting documentation where appropriate


Provide screenshots of the core functions of the Loop


Ensure your loop is utilizing the loopOpenHandler to initiate loop's start whisper upon selection from search dropdown