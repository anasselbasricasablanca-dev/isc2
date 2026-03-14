let questions = [
    {
        numb: 1,
        question: "An attacker outside the organization attempts to gain access to the organization’s internal files. Which of the following does this scenario exemplify?",
        answer: "C. Intrusion",
        options: [
            "A. Disclosure",
            "B. Exploit",
            "C. Intrusion",
            "D. Pupblication"
        ]
    },

    {
        numb: 2,
        question: "Which of the following are NOT typically involved in incident detection?",
        answer: "B. Regulators",
        options: [
            "A. Automated Tools",
            "B. Regulators",
            "C. Security Analysis",
            "D. Users"
        ]
    },
    {
        numb: 3,
        question: "Who approves the incident response policy?",
        answer: "B. senior management",
        options: [
            "A. ISC2",
            "B. senior management",
            "C. The investors",
            "D. Team management"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is likely to be included in the business continuity plan?",
        answer: "C. Keep critical business functions operational",
        options: [
            "A. Ensure all IT systems continue to operate",
            "B. Impress customers",
            "C. Keep critical business functions operational",
            "D. Save money"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is likely to be included in the business continuity plan?",
        answer: "A. Alternate work areas for personnel affected by a natural disaster",
        options: [
            "A. Alternate work areas for personnel affected by a natural disaster",
            "B. The organization's strategic security approach",
            "C. Log data from all systems",
            "D. Last year's budget information"
        ]
    },
    {
        numb: 6,
        question: "What is the MOST important goal of a business continuity effort?",
        answer: "D. Preserve health and human safety.",
        options: [
            "A. Ensure all business activities are preserved during a potential disaster.",
            "B. Ensure all IT systems function during a potential interruption.",
            "C. Ensure the organization survives a disaster.",
            "D. Preserve health and human safety."
        ]
    },
    {
        numb: 7,
        question: "What is the risk associated with delaying resumption of full normal operations after a disaster?",
        answer: "D. The impact of running alternate operations for extended periods",
        options: [
            "A. People might be put in danger",
            "B. Competition",
            "C. A new disaster might emerge",
            "D. The impact of running alternate operations for extended periods"
        ]
    },
    {
        numb: 28,
        question: "A type of device typically accessed by multiple users and often intended for a single purpose, such as managing email or web pages, is referred to as what?",
        answer: "C. Server",
        options: [
            "A. Laptop",
            "B. Router",
            "C. Server",
            "D. Switch"
        ]
    },
    {
        numb: 9,
        question: "What is the risk associated with resuming full normal operations too soon after a DR effort?",
        answer: "C. The danger posed by the disaster might still be present",
        options: [
            "A. The organization could save money",
            "B. Regulators might disapprove",
            "C. The danger posed by the disaster might still be present",
            "D. Investors might be upset"
        ]
    },
    {
        numb: 10,
        question: "Gelbi is a Technical Support analyst for Triffid, Inc. Gelbi sometimes is required to install or remove software. Which of the following could be used to describe Gelbi's account?",
        answer: "C. Privileged",
        options: [
            "A. External",
            "B. Internal",
            "C. Privileged",
            "D. User"
        ]
    },
    {
        numb: 11,
        question: "Guillermo logs on to a system and opens a document file. Guillermo is an example of what?",
        answer: "D. The subject",
        options: [
            "A. The object",
            "B. The process",
            "C. The software",
            "D. The subject"
        ]
    },
    {
        numb: 12,
        question: "Which of the following is NOT an appropriate control to add to privileged accounts?",
        answer: "D. Security deposit",
        options: [
            "A. Increased auditing",
            "B. Increased logging",
            "C. Multi-factor authentication",
            "D. Security deposit"
        ]
    },
    {
        numb: 13,
        question: "A human guard monitoring a hidden camera could be considered which type of control?",
        answer: "A. Detective",
        options: [
            "A. Detective",
            "B. Deterrent",
            "C. Logical",
            "D. Preventive"
        ]
    },
    {
        numb: 14,
        question: "Which of the following is the BEST recommendation for all individuals visiting a secure facility?",
        answer: "A. Escort visitors",
        options: [
            "A. Escort visitors",
            "B. Fingerprint visitors",
            "C. Photograph visitors",
            "D. Require visitors to wear protective gear"
        ]
    },
    {
        numb: 15,
        question: "Which of the following is a record of something that has occurred?",
        answer: "D. Log",
        options: [
            "A. Firewall",
            "B. Biometric",
            "C. Law",
            "D. Log"
        ]
    },
    {
        numb: 16,
        question: "Mila works for a government agency. All data in the agency is assigned a particular sensitivity level, called a classification. Every person in the agency is assigned a clearance level, which determines the classification of data each person can access and is controlled at the system level. What is the access control model being implemented in Mila's agency?",
        answer: "C. MAC (mandatory access control)",
        options: [
            "A. RBAC (role-based access control)",
            "B. FAC (formal access control)",
            "C. MAC (mandatory access control)",
            "D. DAC (discretionary access control)"
        ]
    },
    {
        numb: 17,
        question: "Which of the following would be considered a logical access control?",
        answer: "B. A fingerprint reader that allows an employee to access a laptop computer",
        options: [
            "A. A chain attached to a laptop computer that connects it to furniture so it cannot be taken",
            "B. A fingerprint reader that allows an employee to access a laptop computer",
            "C. A fingerprint reader that allows an employee to enter a controlled area",
            "D. An iris reader that allows an employee to enter a controlled area"
        ]
    },
    {
        numb: 18,
        question: "Trina and Doug both work at Triffid, Inc. Doug is having trouble logging in to the network. Trina offers to log in for Doug, using her credentials, so that Doug can get some work done. What is the problem with this?",
        answer: "A. Anything either of them do will be attributed to tina",
        options: [
            "A. Anything either of them do will be attributed to tina",
            "B. Doug is a bad person",
            "C. If Trina logs in for Doug, then Doug will never be encouraged to remember credentials without assistance",
            "D. It is against the law"
        ]
    },
    {
        numb: 19,
        question: "Gary is unable to log in to the production environment. Gary tries three times and is then locked out of trying again for one hour. Why could this be?",
        answer: "B. Gary’s actions look like an attack",
        options: [
            "A. Gary is being punished",
            "B. Gary’s actions look like an attack",
            "C. The network is tired",
            "D. Users remember their credentials if they are given time to think about it"
        ]
    },
    {
        numb: 20,
        question: "Suvid works at Triffid, Inc. When Suvid attempts to log in to the production environment, a message appears stating that he has to reset his password. What may have occurred to cause this?",
        answer: "D. Suvid's password has expired",
        options: [
            "A. Someone hacked Suvid's machine",
            "B. Suvid broke the law",
            "C. Suvid made the manager angry",
            "D. Suvid's password has expired"
        ]
    },
    {
        numb: 21,
        question: "Prina is a database manager. Prina is allowed to add new users to the database, remove current users, and create new usage functions for the users. Prina is not allowed to read the data in the fields of the database itself. This is an example of what?",
        answer: "D. Role-based access controls (RBAC)",
        options: [
            "A. Mandatory access controls (MAC)",
            "B. Discretionary access controls (DAC)",
            "C. Alleviating threat access controls (ATAC)",
            "D. Role-based access controls (RBAC)"
        ]
    },
    {
        numb: 22,
        question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that operational managers have the utmost personal choice in determining which employees get access to which systems/data. Which method should Handel select?",
        answer: "A. Discretionary access controls (DAC)",
        options: [
            "A. Discretionary access controls (DAC)",
            "B. Role-based access controls (RBAC)",
            "C. Alleviating threat access controls (ATAC)",
            "D. Mandatory access controls (MAC)"
        ]
    },
    {
        numb: 23,
        question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that employees transferring from one department to another, getting promoted, or cross-training to new positions can get access to the different assets they'll need for their new positions, in the most efficient manner. Which method should Handel select?",
        answer: "D. Role-based access controls (RBAC)",
        options: [
            "A. Discretionary access controls (DAC)",
            "B. Barbed wire",
            "C. Mandatory access controls (MAC)",
            "D. Role-based access controls (RBAC)"
        ]
    },
    {
        numb: 24,
        question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that employees who are assigned to new positions in the company do not retain whatever access they had in their old positions. Which method should Handel select?",
        answer: "D. Role-based access controls (RBAC)",
        options: [
            "A. Discretionary access controls (DAC)",
            "B. Logging",
            "C. Mandatory access controls (MAC)",
            "D. Role-based access controls (RBAC)"
        ]
    },
    {
        numb: 25,
        question: "Which term refers to the logical address of a device connected to the network or internet?",
        answer: "B. Internet Protocol (IP) address",
        options: [
            "A. Geophysical address",
            "B. Internet Protocol (IP) address",
            "C. Media access control (MAC) address",
            "D. Terminal address"
        ]
    },
    {
        numb: 26,
        question: "What type of device filters network traffic in order to enhance overall security/performance?",
        answer: "B. Firewall",
        options: [
            "A. Endpoint",
            "B. Firewall",
            "C. Laptop",
            "D. MAC (Media Access Control)"
        ]
    },
    {
        numb: 27,
        question: "What protocol should Barry use when he wants to upload a series of files to a web-based storage service?",
        answer: "B. SFTP (Secure File Transfer Protocol)",
        options: [
            "A. FTP (File Transfer Protocol)",
            "B. SFTP (Secure File Transfer Protocol)",
            "C. SMTP (Simple Mail Transfer Protocol)",
            "D. SNMP (Simple Network Management Protocol)"
        ]
    },
    {
        numb: 28,
        question: "A type of device typically accessed by multiple users and often intended for a single purpose, such as managing email or web pages, is referred to as what?",
        answer: "C. Server",
        options: [
            "A. Laptop",
            "B. Router",
            "C. Server",
            "D. Switch"
        ]
    },
    {
        numb: 29,
        question: "Carol is browsing the Web. Which of the following ports is she probably using?",
        answer: "C. 80",
        options: [
            "A. 12",
            "B. 247",
            "C. 80",
            "D. 999"
        ]
    },
    {
        numb: 30,
        question: "Cyril wants to ensure all the devices on his company's internal IT environment are properly synchronized. Which of the following protocols would aid in this effort?",
        answer: "C. NTP (Network Time Protocol)",
        options: [
            "A. FTP",
            "B. HTTP (Hypertext Transfer Protocol)",
            "C. NTP (Network Time Protocol)",
            "D. SMTP (Simple Mail Transfer Protocol)"
        ]
    },
    {
        numb: 31,
        question: "Which of the following would be considered a logical access control?",
        answer: "B. A fingerprint reader that allows an employee to access a laptop computer",
        options: [
            "A. A chain attached to a laptop computer that connects it to furniture so it cannot be taken",
            "B. A fingerprint reader that allows an employee to access a laptop computer",
            "C. NTP (Network Time Protocol)",
            "D. SMTP (Simple Mail Transfer Protocol)"
        ]
    },
    {
        numb: 32,
        question: "Steve is a security practitioner assigned to come up with a protective measure for ensuring that cars don't collide with pedestrians. What is probably the most effective type of control for this task?",
        answer: "C. Physical",
        options: [
            "A. Technical",
            "B. Administrative",
            "C. Physical",
            "D. Nuanced"
        ]
    },
    {
        numb: 33,
        question: "Chad is a security practitioner tasked with ensuring that the information on the organization's public website is not changed by anyone outside the organization. Which concept does this task demonstrate?",
        answer: "A. Integrity",
        options: [
            "A. Integrity",
            "B. Confidentiality",
            "C. Confirmation",
            "D. Availability"
        ]
    },
    {
        numb: 34,
        question: "Which of the following is an example of a 'Something you know' authentication factor?",
        answer: "A. Password",
        options: [
            "A. Password",
            "B. User ID",
            "C. Fingerprint",
            "D. Iris scan"
        ]
    },
    {
        numb: 35,
        question: "Which of the following is an example of a 'Something you are' authentication factor?",
        answer: "C. A photograph of your face",
        options: [
            "A. A user ID",
            "B. Your password and PIN",
            "C. A photograph of your face",
            "D. A credit card presented to a cash machine"
        ]
    },
    {
    numb: 36,
    question: "A system collects transactional information and stores it in a record in order to show which users performed which actions. Which concept does this demonstrate?",
    answer: "A. Non-repudiation",
    options: [
        "A. Non-repudiation",
        "B. Biometrics",
        "C. Multifactor authentication",
        "D. Privacy"
    ]
    },
    {    
    numb: 37,
    question: "What is the European Union (EU) law that grants legal protections to individual human privacy?",
    answer: "A. The General Data Protection Regulation",
    options: [
        "A. The General Data Protection Regulation",
        "B. The Privacy Human Rights Act",
        "C. The Maastricht Treaty (the Treaty on European Union)",
        "D. The Schengen Agreement"
    ]
    },
    {    
    numb: 38,
    question: "For which of the following systems would the security concept of availability be considered MOST important?",
    answer: "C. Medical systems that monitor patient conditions in an intensive-care unit",
    options: [
        "A. Retail records of past transactions",
        "B. Online streaming of camera feeds that display historical works of art in museums around the world",
        "C. Medical systems that monitor patient conditions in an intensive-care unit",
        "D. Medical systems that store patient data"
    ]
    },
    {
        numb: 39,
        question: "For which of the following assets is integrity probably the MOST important security aspect?",
        answer: "D. The file that contains passwords used to authenticate users",
        options: [
            "A. The color scheme of a marketing website",
            "B. One frame of a streaming video",
            "C. Software that checks the spelling of product descriptions for a retail website",
            "D. The file that contains passwords used to authenticate users"
        ]
    },
    {
    numb: 40,
    question: "In risk management, which concept reflects something a security practitioner might need to protect?",
    answer: "A. Asset",
    options: [
        "A. Asset",
        "B. Likelihood",
        "C. Threat",
        "D. Vulnerability"
        ]
    },
    {
    numb: 41,
    question: "In risk management concepts, what is something or someone that poses risk to an organization or asset?",
    answer: "C. Threat",
    options: [
        "A. Asset",
        "B. Fear",
        "C. Threat",
        "D. Control"
    ]
},
{
    numb: 42,
    question: "Of the following, which would probably NOT be considered a threat?",
    answer: "A. A laptop with sensitive data on it",
    options: [
        "A. A laptop with sensitive data on it",
        "B. An external attacker trying to gain unauthorized access to the environment",
        "C. Natural disaster",
        "D. Unintentional damage to the system caused by a user"
    ]
},
{
    numb: 43,
    question: "Which of the following probably poses the MOST risk?",
    answer: "A. A high-likelihood, high-impact event",
    options: [
        "A. A high-likelihood, high-impact event",
        "B. A low-likelihood, high-impact event",
        "C. A low-likelihood, low-impact event",
        "D. A high-likelihood, low-impact event"
    ]
},
{
    numb: 44,
    question: "Within the organization, who can identify risk?",
    answer: "A. Anyone",
    options: [
        "A. Anyone",
        "B. The security manager",
        "C. Senior management",
        "D. Any security team member"
    ]
},
{
    numb: 45,
    question: "Kerpak works in the security office of a medium-sized entertainment company. Kerpak is asked to assess a particular threat, and he suggests that the best way to counter this threat would be to purchase and implement a particular security solution. What concept does Kerpak's solution demonstrate?",
    answer: "A. Mitigation",
    options: [
        "A. Mitigation",
        "B. Acceptance",
        "C. Avoidance",
        "D. Transference"
    ]
},
{
    numb: 46,
    question: "Trina and Doug both work at Triffid, Inc. Doug is having trouble logging in to the network. Trina offers to log in for Doug, using her credentials, so that Doug can get some work done. What is the problem with this?",
    answer: "A. Anything either of them do will be attributed to Trina",
    options: [
        "A. Anything either of them do will be attributed to Trina",
        "B. Doug is a bad person",
        "C. If Trina logs in for Doug, then Doug will never be encouraged to remember credentials without assistance",
        "D. It is against the law"
    ]
},
{
    numb: 47,
    question: "Gary is unable to log in to the production environment. Gary tries three times and is then locked out of trying again for one hour. Why could this be?",
    answer: "B. Gary's actions look like an attack",
    options: [
        "A. Gary is being punished",
        "B. Gary's actions look like an attack",
        "C. The network is tired",
        "D. Users remember their credentials if they are given time to think about it"
    ]
},
{
    numb: 48,
    question: "Suvid works at Triffid, Inc. When Suvid attempts to log in to the production environment, a message appears stating that he has to reset his password. What may have occurred to cause this?",
    answer: "D. Suvid's password has expired",
    options: [
        "A. Someone hacked Suvid's machine",
        "B. Suvid broke the law",
        "C. Suvid made the manager angry",
        "D. Suvid's password has expired"
    ]
},
{
    numb: 49,
    question: "Prina is a database manager. Prina is allowed to add new users to the database, remove current users, and create new usage functions for the users. Prina is not allowed to read the data in the fields of the database itself. This is an example of what?",
    answer: "D. Role-based access controls (RBAC)",
    options: [
        "A. Alleviating threat access controls (ATAC)",
        "B. Discretionary access controls (DAC)",
        "C. Mandatory access controls (MAC)",
        "D. Role-based access controls (RBAC)"
    ]
},
{
    numb: 50,
    question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that operational managers have the utmost personal choice in determining which employees get access to which systems/data. Which method should Handel select?",
    answer: "A. Discretionary access controls (DAC)",
    options: [
        "A. Discretionary access controls (DAC)",
        "B. Mandatory access controls (MAC)",
        "C. Role-based access controls (RBAC)",
        "D. Security policy"
    ]
},
{
    numb: 51,
    question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that employees transferring from one department to another, getting promoted, or cross-training to new positions can get access to the different assets they'll need for their new positions, in the most efficient manner. Which method should Handel select?",
    answer: "D. Role-based access controls (RBAC)",
    options: [
        "A. Barbed wire",
        "B. Discretionary access controls (DAC)",
        "C. Mandatory access controls (MAC)",
        "D. Role-based access controls (RBAC)"
    ]
},
{
    numb: 52,
    question: "Handel is a senior manager at Triffid, Inc., and is in charge of implementing a new access control scheme for the company. Handel wants to ensure that employees who are assigned to new positions in the company do not retain whatever access they had in their old positions. Which method should Handel select?",
    answer: "D. Role-based access controls (RBAC)",
    options: [
        "A. Discretionary access controls (DAC)",
        "B. Logging",
        "C. Mandatory access controls (MAC)",
        "D. Role-based access controls (RBAC)"
    ]
},
{
    numb: 53,
    question: "What type of device filters network traffic in order to enhance overall security/performance?",
    answer: "B. Firewall",
    options: [
        "A. Endpoint",
        "B. Firewall",
        "C. Laptop",
        "D. MAC (Media Access Control)"
    ]
},
{
    numb: 54,
    question: "What protocol should Barry use when he wants to upload a series of files to a web-based storage service?",
    answer: "B. SFTP (Secure File Transfer Protocol)",
    options: [
        "A. FTP (File Transfer Protocol)",
        "B. SFTP (Secure File Transfer Protocol)",
        "C. SMTP (Simple Mail Transfer Protocol)",
        "D. SNMP (Simple Network Management Protocol)"
    ]
},
{
    numb: 55,
    question: "A type of device typically accessed by multiple users and often intended for a single purpose, such as managing email or web pages, is referred to as what?",
    answer: "C. Server",
    options: [
        "A. Laptop",
        "B. Router",
        "C. Server",
        "D. Switch"
    ]
},
{
    numb: 56,
    question: "Carol is browsing the Web. Which of the following ports is she probably using?",
    answer: "C. 80",
    options: [
        "A. 12",
        "B. 247",
        "C. 80",
        "D. 999"
    ]
},
{
    numb: 57,
    question: "Cyril wants to ensure all the devices on his company's internal IT environment are properly synchronized. Which of the following protocols would aid in this effort?",
    answer: "C. NTP (Network Time Protocol)",
    options: [
        "A. FTP",
        "B. HTTP (Hypertext Transfer Protocol)",
        "C. NTP (Network Time Protocol)",
        "D. SMTP (Simple Mail Transfer Protocol)"
    ]
},
{
    numb: 58,
    question: "Which of the following describes data that is left behind on systems/media after normal deletion procedures have been attempted?",
    answer: "C. Remanence",
    options: [
        "A. Fragments",
        "B. Packets",
        "C. Remanence",
        "D. Residue"
    ]
},
{
    numb: 59,
    question: "Where should log data be kept?",
    answer: "C. On a device other than where it was captured",
    options: [
        "A. In airtight containers",
        "B. In an underground bunker",
        "C. On a device other than where it was captured",
        "D. On the device that the log data was captured from"
    ]
},
{
    numb: 60,
    question: "What should security controls on log data reflect?",
    answer: "D. The sensitivity of the source device",
    options: [
        "A. The local culture where the log data is stored",
        "B. The organization's commitment to customer service",
        "C. The price of the storage device",
        "D. The sensitivity of the source device"
    ]
},
{
    numb: 61,
    question: "How often should logs be reviewed?",
    answer: "A. Continually",
    options: [
        "A. Continually",
        "B. Every Thursday",
        "C. Once per calendar year",
        "D. Once per fiscal year"
    ]
},
{
    numb: 62,
    question: "Dieter wants to send a message to Lupa and wants to be sure that Lupa knows the message has not been modified in transit. Which technique/tool could Dieter use to assist in this effort?",
    answer: "C. Hashing",
    options: [
        "A. Antivirus software",
        "B. Asymmetric encryption",
        "C. Hashing",
        "D. Symmetric encryption"
    ]
},
{
    numb: 63,
    question: "Phrenal is selling a used laptop in an online auction. Phrenal has estimated the value of the laptop to be $100, but has seen other laptops of similar type and quality sell for both more and less than that amount. Phrenal hopes that the laptop will sell for $100 or more, but is prepared to take less for it if nobody bids that amount. What concept does this demonstrate?",
    answer: "B. Risk tolerance",
    options: [
        "A. Risk inversion",
        "B. Risk tolerance",
        "C. Threat",
        "D. Vulnerability"
    ]
},
{
    numb: 64,
    question: "A software firewall is an application that runs on a device and prevents specific types of traffic from entering that device. Which type of control is this?",
    answer: "D. Technical",
    options: [
        "A. Administrative",
        "B. Passive",
        "C. Physical",
        "D. Technical"
    ]
},
{
    numb: 65,
    question: "At the airport, there are red lines painted on the ground next to the runway, which prohibits traffic from crossing it. Which type of control does this exemplify?",
    answer: "C. Physical",
    options: [
        "A. Administrative",
        "B. Critical",
        "C. Physical",
        "D. Technical"
    ]
},
{
    numb: 66,
    question: "A bollard is a post set securely in the ground in order to prevent a vehicle from entering an area or driving past a certain point. Bollards are an example of which type of control?",
    answer: "C. Physical",
    options: [
        "A. Administrative",
        "B. Critical",
        "C. Physical",
        "D. Technical"
    ]
},
{
    numb: 67,
    question: "Druna is a security practitioner tasked with ensuring that laptops are not stolen from the organization's offices. Which kind of security control would probably be BEST for this purpose?",
    answer: "C. Physical",
    options: [
        "A. Administrative",
        "B. Obverse",
        "C. Physical",
        "D. Technical"
    ]
},
{
    numb: 68,
    question: "The company wants to make employees aware of potential phishing attempts that the employees might receive via email. What kind of control is this instruction?",
    answer: "A. Administrative",
    options: [
        "A. Administrative",
        "B. Finite",
        "C. Physical",
        "D. Technical"
    ]
},
{
    numb: 69,
    question: "ISC2 publishes a Common Body of Knowledge (CBK) that IT security practitioners should be familiar with; this is recognized throughout the industry as a valuable resource for practitioners. Certifications can be issued for demonstrating expertise in this Common Body of Knowledge. What kind of document is the Common Body of Knowledge?",
    answer: "D. Standard",
    options: [
        "A. Law",
        "B. Policy",
        "C. Procedure",
        "D. Standard"
    ]
},
{
    numb: 70,
    question: "The city of San Jose wants to ensure that all of its citizens are protected from malware, so the city council creates a rule that anyone caught creating and launching malware within the city limits will receive a fine and go to jail. What kind of rule is this?",
    answer: "A. Law",
    options: [
        "A. Law",
        "B. Policy",
        "C. Procedure",
        "D. Standard"
    ]
},
{
    numb: 71,
    question: "The Triffid Corporation publishes a strategic overview of the company's intent to secure all the data the company possesses. This document is signed by Triffid's senior management. What kind of document is this?",
    answer: "B. Policy",
    options: [
        "A. Law",
        "B. Policy",
        "C. Procedure",
        "D. Standard"
    ]
},
{
    numb: 72,
    question: "San Jose municipal code requires that all companies operating within city limits have a set of processes to ensure that employees are safe while working with hazardous materials. Triffid Corporation creates a checklist of activities that employees must follow while working with hazardous materials inside San Jose city limits. The municipal code is a ______, and the Triffid checklist is a ______.",
    answer: "A. Law, procedure",
    options: [
        "A. Law, procedure",
        "B. Law, standard",
        "C. Policy, law",
        "D. Standard, law"
    ]
},
{
    numb: 73,
    question: "The Payment Card Industry (PCI) Council is a committee made up of representatives from major credit card providers (Visa, Mastercard, American Express) in the United States. The PCI Council issues rules that merchants must follow if the merchants choose to accept payment via credit card. These rules describe best practices for securing credit card processing technology, activities for securing credit card information, and how to protect personal data of customers. Which of the following describes this set of rules?",
    answer: "D. Standard",
    options: [
        "A. Law",
        "B. Policy",
        "C. Procedure",
        "D. Standard"
    ]
},
{
    numb: 74,
    question: "Hoshi is an ISC2 member who works for the Triffid Corporation as a data manager. Triffid needs a new firewall solution, and Hoshi is asked to recommend a product for Triffid to acquire and implement. Hoshi's cousin works for a firewall vendor; that vendor happens to make the best firewall available. What should Hoshi do?",
    answer: "A. Disclose the relationship, but recommend the vendor/product",
    options: [
        "A. Disclose the relationship, but recommend the vendor/product",
        "B. Hoshi should ask to be recused from the task",
        "C. Recommend a different vendor/product",
        "D. Recommend the cousin's product"
    ]
},
{
    numb: 75,
    question: "Olaf is a member of ISC2 and a security analyst for Triffid Corporation. During an audit, Olaf is asked whether Triffid is currently following a particular security practice. Olaf knows that Triffid is not adhering to that standard in that particular situation, but that saying this to the auditors will reflect poorly on Triffid. What should Olaf do?",
    answer: "D. Tell the auditors the truth",
    options: [
        "A. Ask ISC2 for guidance",
        "B. Ask supervisors for guidance",
        "C. Lie to the auditors",
        "D. Tell the auditors the truth"
    ]
},
{
    numb: 76,
    question: "Aphrodite is a member of ISC2 and a data analyst for Triffid Corporation. While Aphrodite is reviewing user log data, Aphrodite discovers that another Triffid employee is violating the acceptable use policy and watching streaming videos during work hours. What should Aphrodite do?",
    answer: "C. Inform Triffid management",
    options: [
        "A. Inform ISC2",
        "B. Inform law enforcement",
        "C. Inform Triffid management",
        "D. Nothing"
    ]
},
{
    numb: 77,
    question: "Glena is an ISC2 member. Glena receives an email from a company offering a set of answers for an ISC2 certification exam. What should Glena do?",
    answer: "B. Inform ISC2",
    options: [
        "A. Inform Glena's employer",
        "B. Inform ISC2",
        "C. Inform law enforcement",
        "D. Nothing"
    ]
},
{
    numb: 78,
    question: "You are reviewing log data from a router; there is an entry showing that a user sent traffic through the router at 11:45 a.m., local time, yesterday. Which of the following does this exemplify?",
    answer: "B. Event",
    options: [
        "A. Attack",
        "B. Event",
        "C. Incident",
        "D. Threat"
    ]
},
{
    numb: 79,
    question: "An attacker outside the organization attempts to gain access to the organization's internal files. Which of the following does this scenario exemplify?",
    answer: "C. Intrusion",
    options: [
        "A. Disclosure",
        "B. Exploit",
        "C. Intrusion",
        "D. Publication"
    ]
},
{
    numb: 80,
    question: "Who approves the incident response policy?",
    answer: "B. Senior management",
    options: [
        "A. ISC2",
        "B. Senior management",
        "C. The investors",
        "D. The security manager"
    ]
},
{
    numb: 81,
    question: "Which of the following are NOT typically involved in incident detection?",
    answer: "B. Regulators",
    options: [
        "A. Automated Tools",
        "B. Regulators",
        "C. Security Analysis",
        "D. Users"
    ]
},
{
    numb: 82,
    question: "What is the goal of Business Continuity efforts?",
    answer: "C. Keep critical business functions operational",
    options: [
        "A. Ensure all IT systems continue to operate",
        "B. Impress customers",
        "C. Keep critical business functions operational",
        "D. Save money"
    ]
},
{
    numb: 83,
    question: "Which of the following is likely to be included in the business continuity plan?",
    answer: "A. Alternate work areas for personnel affected by a natural disaster",
    options: [
        "A. Alternate work areas for personnel affected by a natural disaster",
        "B. Last year's budget information",
        "C. Log data from all systems",
        "D. The organization's strategic security approach"
    ]
},
{
    numb: 84,
    question: "What is the MOST important goal of a business continuity effort?",
    answer: "D. Preserve health and human safety",
    options: [
        "A. Ensure all business activities are preserved during a potential disaster",
        "B. Ensure all IT systems function during a potential interruption",
        "C. Ensure the organization survives a disaster",
        "D. Preserve health and human safety"
    ]
},
{
    numb: 85,
    question: "What is the overall objective of a disaster recovery (DR) effort?",
    answer: "C. Return to normal, full operations",
    options: [
        "A. Enhance public perception of the organization",
        "B. Preserve critical business functions during a disaster",
        "C. Return to normal, full operations",
        "D. Save money"
    ]
},
{
    numb: 86,
    question: "What is the risk associated with resuming full normal operations too soon after a DR effort?",
    answer: "C. The danger posed by the disaster might still be present",
    options: [
        "A. Investors might be upset",
        "B. Regulators might disapprove",
        "C. The danger posed by the disaster might still be present",
        "D. The organization could save money"
    ]
},
{
    numb: 87,
    question: "What is the risk associated with delaying resumption of full normal operations after a disaster?",
    answer: "D. The impact of running alternate operations for extended periods",
    options: [
        "A. A new disaster might emerge",
        "B. Competition",
        "C. People might be put in danger",
        "D. The impact of running alternate operations for extended periods"
    ]
},
{
    numb: 88,
    question: "Gelbi is a Technical Support analyst for Triffid, Inc. Gelbi sometimes is required to install or remove software. Which of the following could be used to describe Gelbi's account?",
    answer: "C. Privileged",
    options: [
        "A. External",
        "B. Internal",
        "C. Privileged",
        "D. User"
    ]
},
{
    numb: 89,
    question: "Guillermo logs on to a system and opens a document file. Guillermo is an example of what?",
    answer: "D. The subject",
    options: [
        "A. The object",
        "B. The process",
        "C. The software",
        "D. The subject"
    ]
},
{
    numb: 90,
    question: "If two people want to use asymmetric communication to conduct a confidential conversation, how many keys do they need?",
    answer: "C. 4",
    options: [
        "A. 1",
        "B. 2",
        "C. 4",
        "D. 8"
    ]
},
{
    numb: 91,
    question: "Hashing is often used to provide what?",
    answer: "C. Integrity",
    options: [
        "A. Availability",
        "B. Confidentiality",
        "C. Integrity",
        "D. Value"
    ]
},
{
    numb: 92,
    question: "Which of the following describes the output of a hashing algorithm?",
    answer: "D. It's the same length",
    options: [
        "A. It's different when the same input is used",
        "B. It's the same characters",
        "C. It's the same language",
        "D. It's the same length"
    ]
},
{
    numb: 93,
    question: "Which one of the following is a benefit of computer-based training (CBT)?",
    answer: "D. Scalable",
    options: [
        "A. Expensive",
        "B. Interacting with other participants",
        "C. Personal interaction with instructor",
        "D. Scalable"
    ]
},
{
    numb: 94,
    question: "What is the MOST crucial element of any security instruction program?",
    answer: "B. Preserve health and human safety",
    options: [
        "A. Ensure availability of IT systems",
        "B. Preserve health and human safety",
        "C. Preserve shareholder value",
        "D. Protect assets"
    ]
},
{
    numb: 95,
    question: "Which of the following is used to ensure that configuration management activities are effective and enforced?",
    answer: "D. Verification and audit",
    options: [
        "A. Baseline",
        "B. Identification",
        "C. Inventory",
        "D. Verification and audit"
    ]
},
{
    numb: 96,
    question: "What must an organization always be prepared to do when applying a patch?",
    answer: "C. Rollback",
    options: [
        "A. Buy a new system",
        "B. Pay for the updated content",
        "C. Rollback",
        "D. Settle lawsuits"
    ]
},
{
    numb: 97,
    question: "Why is the proper alignment of security policy and business goals within the organization important?",
    answer: "C. Security policy that conflicts with business goals can inhibit productivity",
    options: [
        "A. Bad security policy can be illegal",
        "B. Security is more important than business",
        "C. Security policy that conflicts with business goals can inhibit productivity",
        "D. Security should always be as strict as possible"
    ]
},
{
    numb: 98,
    question: "An organization should keep on file a copy of every signed Acceptable Use Policy (AUP). To whom should a copy be issued?",
    answer: "D. The user who signed it",
    options: [
        "A. Lawmakers",
        "B. The Public Relations office",
        "C. The regulators overseeing that industry",
        "D. The user who signed it"
    ]
},
{
    numb: 99,
    question: "Triffid, Inc., wants to host streaming video files for the company's remote users, but wants to ensure that the data is protected while it's streaming. Which method is probably BEST for this purpose?",
    answer: "C. Symmetric encryption",
    options: [
        "A. Asymmetric encryption",
        "B. Hashing",
        "C. Symmetric encryption",
        "D. VLANs"
    ]
},
{
    numb: 100,
    question: "Data retention periods apply to which kind of data?",
    answer: "A. All of the answers",
    options: [
        "A. All of the answers",
        "B. Medical",
        "C. Secret",
        "D. Sensitive"
    ]
},
{
    numb: 101,
    question: "What should be done when data has reached the end of the retention period?",
    answer: "B. It should be destroyed",
    options: [
        "A. It should be archived",
        "B. It should be destroyed",
        "C. It should be enhanced",
        "D. It should be sold"
    ]
},
{
    numb: 102,
    question: "Ludwig is a security analyst at Triffid, Inc. Ludwig notices network traffic that might indicate an attack designed to affect the availability of the environment. Which of the following might be the attack Ludwig sees?",
    answer: "B. DDOS (distributed denial of service)",
    options: [
        "A. An insider sabotaging the power supply",
        "B. DDOS (distributed denial of service)",
        "C. Exfiltrating stolen data",
        "D. Spoofing"
    ]
},
{
    numb: 103,
    question: "Gary is an attacker. Gary is able to get access to the communication wire between Dauphine's machine and Linda's machine and can then surveil the traffic between the two when they're communicating. What kind of attack is this?",
    answer: "B. On-path",
    options: [
        "A. DDOS",
        "B. On-path",
        "C. Physical",
        "D. Side channel"
    ]
},
{
    numb: 104,
    question: "Bert wants to add a flashlight capability to a smartphone. Bert searches the internet for a free flashlight app, and downloads it to the phone. The app allows Bert to use the phone as a flashlight, but also steals Bert's contacts list. What kind of app is this?",
    answer: "D. Trojan",
    options: [
        "A. DDOS",
        "B. On-path",
        "C. Side channel",
        "D. Trojan"
    ]
},
{
    numb: 105,
    question: "Triffid, Inc., has many remote workers who use their own IT devices to process Triffid's information. The Triffid security team wants to deploy some sort of sensor on user devices in order to recognize and identify potential security issues. Which of the following is probably most appropriate for this specific purpose?",
    answer: "B. HIDS (host-based intrusion-detection systems)",
    options: [
        "A. Firewalls",
        "B. HIDS (host-based intrusion-detection systems)",
        "C. LIDS (logistical intrusion-detection systems)",
        "D. NIDS (network-based intrusion-detection systems)"
    ]
},
{
    numb: 106,
    question: "Inbound traffic from an external source seems to indicate much higher rates of communication than normal, to the point where the internal systems might be overwhelmed. Which security solution can often identify and potentially counter this risk?",
    answer: "C. Firewall",
    options: [
        "A. Anti-malware",
        "B. Badge system",
        "C. Firewall",
        "D. Turnstile"
    ]
},
{
    numb: 107,
    question: "What tool aggregates log data from multiple sources, typically analyzes it, and reports potential threats?",
    answer: "D. SIEM",
    options: [
        "A. Anti-malware",
        "B. HIDS",
        "C. Router",
        "D. SIEM"
    ]
},
{
    numb: 108,
    question: "What type of solution typically inspects outbound communications traffic to check for unauthorized exfiltration of sensitive/valuable information?",
    answer: "B. DLP (data loss prevention)",
    options: [
        "A. Anti-malware",
        "B. DLP (data loss prevention)",
        "C. Firewall",
        "D. NIDS (network-based intrusion-detection systems)"
    ]
},
{
    numb: 109,
    question: "What type of tool is used to monitor local devices with the aim of reducing potential threats from hostile software?",
    answer: "A. Anti-malware",
    options: [
        "A. Anti-malware",
        "B. DLP (data loss prevention)",
        "C. Firewall",
        "D. NIDS (network-based intrusion-detection systems)"
    ]
},
{
    numb: 110,
    question: "Which activity is usually part of the configuration management process, but is also extremely helpful in countering potential attacks?",
    answer: "D. Updating and patching systems",
    options: [
        "A. Annual budgeting",
        "B. Conferences with senior leadership",
        "C. The annual shareholders' meeting",
        "D. Updating and patching systems"
    ]
},
{
    numb: 111,
    question: "Which type of fire-suppression system is typically the SAFEST for humans?",
    answer: "D. Water",
    options: [
        "A. Dirt",
        "B. Gaseous",
        "C. Oxygen-depletion",
        "D. Water"
    ]
},
{
    numb: 112,
    question: "Which common cloud service model offers the customer the MOST control of the cloud environment?",
    answer: "B. Infrastructure as a service (IaaS)",
    options: [
        "A. Function as a Service (FaaS)",
        "B. Infrastructure as a service (IaaS)",
        "C. Platform as a service (PaaS)",
        "D. Software as a service (SaaS)"
    ]
},
{
    numb: 113,
    question: "What is the section of the IT environment that is closest to the external world; where we locate IT systems that communicate with the Internet?",
    answer: "A. DMZ",
    options: [
        "A. DMZ",
        "B. MAC",
        "C. RBAC",
        "D. VLAN"
    ]
},
{
    numb: 114,
    question: "An IoT (Internet of Things) device is typically characterized by its effect on or use of which environment?",
    answer: "C. Physical",
    options: [
        "A. Development",
        "B. Internal",
        "C. Physical",
        "D. Remote"
    ]
},
{
    numb: 115,
    question: "What type of device is commonly advisable to have on the perimeter between two networks?",
    answer: "B. Firewall",
    options: [
        "A. Camera",
        "B. Firewall",
        "C. IoT",
        "D. User laptop"
    ]
},
{
    numb: 116,
    question: "Which of the following describes when archiving is typically done?",
    answer: "C. When data is not needed for regular work purposes",
    options: [
        "A. When data has become illegal",
        "B. When data has lost all value",
        "C. When data is not needed for regular work purposes",
        "D. When data is ready to be destroyed"
    ]
},
{
    numb: 117,
    question: "Every document owned by Triffid, Inc., whether hardcopy or electronic, has a clear, 24-point word at the top and bottom. Only three words can be used: 'Sensitive', 'Proprietary', and 'Public'. Which concept does this demonstrate?",
    answer: "B. Labeling",
    options: [
        "A. Inverting",
        "B. Labeling",
        "C. Privacy",
        "D. Secrecy"
    ]
},
{
    numb: 118,
    question: "To what data does security need to be provided?",
    answer: "A. All of the answers",
    options: [
        "A. All of the answers",
        "B. Illegal",
        "C. Private",
        "D. Restricted"
    ]
},
{
    numb: 119,
    question: "Which of the following is NOT an appropriate control to add to privileged accounts?",
    answer: "D. Security deposit",
    options: [
        "A. Increased auditing",
        "B. Increased logging",
        "C. Multi-factor authentication",
        "D. Security deposit"
    ]
},
{
    numb: 120,
    question: "Prachi works as a database administrator for Triffid, Inc. Prachi is allowed to add or delete users, but is not allowed to read or modify the data in the database itself. When Prachi logs on to the system, an access control list (ACL) checks to determine which permissions he has. In this situation, what is the ACL?",
    answer: "C. The rule",
    options: [
        "A. The firmware",
        "B. The object",
        "C. The rule",
        "D. The subject"
    ]
},
{
    numb: 121,
    question: "Prachi works as a database administrator for Triffid, Inc. Prachi is allowed to add or delete users, but is not allowed to read or modify the data in the database itself. When Prachi logs on to the system, an access control list (ACL) checks to determine which permissions he has. In this situation, Prachi represents what?",
    answer: "D. The subject",
    options: [
        "A. The file",
        "B. The object",
        "C. The rule",
        "D. The subject"
    ]
},
{
    numb: 122,
    question: "Larry and Fern both work in the data center. In order to enter the data center to begin their workday, they must both present their own keys (which are different) to the key reader, before the door to the data center opens. Which security concept is being applied in this situation?",
    answer: "B. Dual control",
    options: [
        "A. Defense in depth",
        "B. Dual control",
        "C. Least privilege",
        "D. Segregation of duties"
    ]
},
{
    numb: 123,
    question: "Which of the following is a biometric access control mechanism?",
    answer: "C. A door locked by a voiceprint identifier",
    options: [
        "A. A badge reader",
        "B. A copper key",
        "C. A door locked by a voiceprint identifier",
        "D. A fence with razor tape on it"
    ]
},
{
    numb: 124,
    question: "Which of the following is the BEST recommendation for all individuals visiting a secure facility?",
    answer: "A. Escort visitors",
    options: [
        "A. Escort visitors",
        "B. Fingerprint visitors",
        "C. Photograph visitors",
        "D. Require visitors to wear protective gear"
    ]
},
{
    numb: 125,
    question: "All of the following are typically perceived as drawbacks to biometric systems, except:",
    answer: "B. Accuracy",
    options: [
        "A. Lack of accuracy",
        "B. Accuracy",
        "C. Potential privacy concerns",
        "D. Retention of physiological data past the point of employment"
    ]
},
{
    numb: 126,
    question: "A human guard monitoring a hidden camera could be considered which type of control?",
    answer: "A. Detective",
    options: [
        "A. Detective",
        "B. Deterrent",
        "C. Logical",
        "D. Preventive"
    ]
},
{
    numb: 127,
    question: "Chad is a security practitioner tasked with ensuring that the information on the organization's public website is not changed by anyone outside the organization. Which concept does this task demonstrate?",
    answer: "D. Integrity",
    options: [
        "A. Availability",
        "B. Confidentiality",
        "C. Confirmation",
        "D. Integrity"
    ]
},
{
    numb: 128,
    question: "Which of the following is an example of a 'Something you know' authentication factor?",
    answer: "C. Password",
    options: [
        "A. Fingerprint",
        "B. Iris scan",
        "C. Password",
        "D. User ID"
    ]
},
{
    numb: 129,
    question: "Which of the following is an example of a 'Something you are' authentication factor?",
    answer: "B. A photograph of your face",
    options: [
        "A. A credit card presented to a cash machine",
        "B. A photograph of your face",
        "C. A user ID",
        "D. Your password and PIN"
    ]
},
{
    numb: 130,
    question: "A system collects transactional information and stores it in a record in order to show which users performed which actions. Which concept does this demonstrate?",
    answer: "C. Non-repudiation",
    options: [
        "A. Biometrics",
        "B. Multifactor authentication",
        "C. Non-repudiation",
        "D. Privacy"
    ]
},
{
    numb: 131,
    question: "What is the European Union (EU) law that grants legal protections to individual human privacy?",
    answer: "A. The General Data Protection Regulation",
    options: [
        "A. The General Data Protection Regulation",
        "B. The Maastricht Treaty (the Treaty on European Union)",
        "C. The Privacy Human Rights Act",
        "D. The Schengen Agreement"
    ]
},
{
    numb: 132,
    question: "For which of the following systems would the security concept of availability be considered MOST important?",
    answer: "A. Medical systems that monitor patient conditions in an intensive-care unit",
    options: [
        "A. Medical systems that monitor patient conditions in an intensive-care unit",
        "B. Medical systems that store patient data",
        "C. Online streaming of camera feeds that display historical works of art in museums around the world",
        "D. Retail records of past transactions"
    ]
},
{
    numb: 133,
    question: "For which of the following assets is integrity probably the MOST important security aspect?",
    answer: "D. The file that contains passwords used to authenticate users",
    options: [
        "A. One frame of a streaming video",
        "B. Software that checks the spelling of product descriptions for a retail website",
        "C. The color scheme of a marketing website",
        "D. The file that contains passwords used to authenticate users"
    ]
},
{
    numb: 134,
    question: "In risk management, which concept reflects something a security practitioner might need to protect?",
    answer: "A. Asset",
    options: [
        "A. Asset",
        "B. Likelihood",
        "C. Threat",
        "D. Vulnerability"
    ]
},
{
    numb: 135,
    question: "In risk management concepts, what is something or someone that poses risk to an organization or asset?",
    answer: "D. Threat",
    options: [
        "A. Asset",
        "B. Control",
        "C. Fear",
        "D. Threat"
    ]
},
{
    numb: 136,
    question: "Of the following, which would probably NOT be considered a threat?",
    answer: "A. A laptop with sensitive data on it",
    options: [
        "A. A laptop with sensitive data on it",
        "B. An external attacker trying to gain unauthorized access to the environment",
        "C. Natural disaster",
        "D. Unintentional damage to the system caused by a user"
    ]
},
{
    numb: 137,
    question: "Which of the following probably poses the MOST risk?",
    answer: "A. A high-likelihood, high-impact event",
    options: [
        "A. A high-likelihood, high-impact event",
        "B. A high-likelihood, low-impact event",
        "C. A low-likelihood, high-impact event",
        "D. A low-likelihood, low-impact event"
    ]
},
{
    numb: 138,
    question: "Within the organization, who can identify risk?",
    answer: "A. Anyone",
    options: [
        "A. Anyone",
        "B. Any security team member",
        "C. Senior management",
        "D. The security manager"
    ]
},
{
    numb: 139,
    question: "Kerpak works in the security office of a medium-sized entertainment company. Kerpak is asked to assess a particular threat, and he suggests that the best way to counter this threat would be to purchase and implement a particular security solution. What concept does Kerpak's solution demonstrate?",
    answer: "C. Mitigation",
    options: [
        "A. Acceptance",
        "B. Avoidance",
        "C. Mitigation",
        "D. Transference"
    ]
},
{
    numb: 140,
    question: "Sophia is visiting Las Vegas and decides to put a bet on a particular number on a roulette wheel. This is an example of ______.",
    answer: "A. Acceptance",
    options: [
        "A. Acceptance",
        "B. Avoidance",
        "C. Mitigation",
        "D. Transference"
    ]
}

];