const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');


  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
}

// AUTOCOMPLETE SEARCHBAR

const tickers = [
  {
    "Symbol": "A",
    "Name": "Agilent Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AA",
    "Name": "Alcoa Corporation Common Stock"
  },
  {
    "Symbol": "AAC",
    "Name": "Ares Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "AACG",
    "Name": "ATA Creativity Global American Depositary Shares"
  },
  {
    "Symbol": "AACI",
    "Name": "Armada Acquisition Corp. I Common Stock"
  },
  {
    "Symbol": "AACIW",
    "Name": "Armada Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "AADI",
    "Name": "Aadi Bioscience Inc. Common Stock"
  },
  {
    "Symbol": "AAIC",
    "Name": "Arlington Asset Investment Corp Class A (new)"
  },
  {
    "Symbol": "AAIC^B",
    "Name": "Arlington Asset Investment Corp 7.00%"
  },
  {
    "Symbol": "AAIC^C",
    "Name": "Arlington Asset Investment Corp 8.250% Seies C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AAIN",
    "Name": "Arlington Asset Investment Corp 6.000% Senior Notes Due 2026"
  },
  {
    "Symbol": "AAL",
    "Name": "American Airlines Group Inc. Common Stock"
  },
  {
    "Symbol": "AAM^A",
    "Name": "Apollo Asset Management Inc. 6.375% Series A Preferred Stock"
  },
  {
    "Symbol": "AAM^B",
    "Name": "Apollo Asset Management Inc. 6.375% Series B Preferred Stock"
  },
  {
    "Symbol": "AAMC",
    "Name": "Altisource Asset Management Corp Com"
  },
  {
    "Symbol": "AAME",
    "Name": "Atlantic American Corporation Common Stock"
  },
  {
    "Symbol": "AAN",
    "Name": "Aarons Holdings Company Inc. Common Stock"
  },
  {
    "Symbol": "AAOI",
    "Name": "Applied Optoelectronics Inc. Common Stock"
  },
  {
    "Symbol": "AAON",
    "Name": "AAON Inc. Common Stock"
  },
  {
    "Symbol": "AAP",
    "Name": "Advance Auto Parts Inc."
  },
  {
    "Symbol": "AAPL",
    "Name": "Apple Inc. Common Stock"
  },
  {
    "Symbol": "AAT",
    "Name": "American Assets Trust Inc. Common Stock"
  },
  {
    "Symbol": "AAU",
    "Name": "Almaden Minerals Ltd. Common Shares"
  },
  {
    "Symbol": "AB",
    "Name": "AllianceBernstein Holding L.P.  Units"
  },
  {
    "Symbol": "ABB",
    "Name": "ABB Ltd Common Stock"
  },
  {
    "Symbol": "ABBV",
    "Name": "AbbVie Inc. Common Stock"
  },
  {
    "Symbol": "ABC",
    "Name": "AmerisourceBergen Corporation Common Stock"
  },
  {
    "Symbol": "ABCB",
    "Name": "Ameris Bancorp Common Stock"
  },
  {
    "Symbol": "ABCL",
    "Name": "AbCellera Biologics Inc. Common Shares"
  },
  {
    "Symbol": "ABCM",
    "Name": "Abcam plc American Depositary Shares"
  },
  {
    "Symbol": "ABEO",
    "Name": "Abeona Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ABEV",
    "Name": "Ambev S.A. American Depositary Shares (Each representing 1 Common Share)"
  },
  {
    "Symbol": "ABG",
    "Name": "Asbury Automotive Group Inc Common Stock"
  },
  {
    "Symbol": "ABIO",
    "Name": "ARCA biopharma Inc. Common Stock"
  },
  {
    "Symbol": "ABM",
    "Name": "ABM Industries Incorporated Common Stock"
  },
  {
    "Symbol": "ABNB",
    "Name": "Airbnb Inc. Class A Common Stock"
  },
  {
    "Symbol": "ABOS",
    "Name": "Acumen Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ABR",
    "Name": "Arbor Realty Trust Common Stock"
  },
  {
    "Symbol": "ABR^D",
    "Name": "Arbor Realty Trust 6.375% Series D Cumulative Redeemable Preferred Stock Liquidation Preference $25.00 per Share"
  },
  {
    "Symbol": "ABR^E",
    "Name": "Arbor Realty Trust 6.25% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "ABR^F",
    "Name": "Arbor Realty Trust 6.25% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock Liquidation Preference $25.00 per share"
  },
  {
    "Symbol": "ABSI",
    "Name": "Absci Corporation Common Stock"
  },
  {
    "Symbol": "ABST",
    "Name": "Absolute Software Corporation Common Stock"
  },
  {
    "Symbol": "ABT",
    "Name": "Abbott Laboratories Common Stock"
  },
  {
    "Symbol": "ABUS",
    "Name": "Arbutus Biopharma Corporation Common Stock"
  },
  {
    "Symbol": "ABVC",
    "Name": "ABVC BioPharma Inc. Common Stock"
  },
  {
    "Symbol": "AC",
    "Name": "Associated Capital Group Inc. Common Stock"
  },
  {
    "Symbol": "ACA",
    "Name": "Arcosa Inc. Common Stock"
  },
  {
    "Symbol": "ACAB",
    "Name": "Atlantic Coastal Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "ACAC",
    "Name": "Acri Capital Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "ACACW",
    "Name": "Acri Capital Acquisition Corporation Warrant"
  },
  {
    "Symbol": "ACAD",
    "Name": "ACADIA Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ACAH",
    "Name": "Atlantic Coastal Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ACAQ",
    "Name": "Athena Consumer Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ACAX",
    "Name": "Alset Capital Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ACAXR",
    "Name": "Alset Capital Acquisition Corp. Right"
  },
  {
    "Symbol": "ACB",
    "Name": "Aurora Cannabis Inc. Common Shares"
  },
  {
    "Symbol": "ACBA",
    "Name": "Ace Global Business Acquisition Limited Ordinary Shares"
  },
  {
    "Symbol": "ACBAU",
    "Name": "Ace Global Business Acquisition Limited Unit"
  },
  {
    "Symbol": "ACBAW",
    "Name": "Ace Global Business Acquisition Limited Warrant"
  },
  {
    "Symbol": "ACCD",
    "Name": "Accolade Inc. Common Stock"
  },
  {
    "Symbol": "ACCO",
    "Name": "Acco Brands Corporation Common Stock"
  },
  {
    "Symbol": "ACDC",
    "Name": "ProFrac Holding Corp. Class A Common Stock"
  },
  {
    "Symbol": "ACDCW",
    "Name": "ProFrac Holding Corp. Warrant"
  },
  {
    "Symbol": "ACEL",
    "Name": "Accel Entertainment Inc."
  },
  {
    "Symbol": "ACER",
    "Name": "Acer Therapeutics Inc. Common Stock (DE)"
  },
  {
    "Symbol": "ACET",
    "Name": "Adicet Bio Inc. Common Stock"
  },
  {
    "Symbol": "ACGL",
    "Name": "Arch Capital Group Ltd. Common Stock"
  },
  {
    "Symbol": "ACGLN",
    "Name": "Arch Capital Group Ltd. Depositary Shares each Representing a 1/1000th Interest in a 4.550% Non-Cumulative Preferred Share Series G"
  },
  {
    "Symbol": "ACGLO",
    "Name": "Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of 5.45% Non-Cumulative Preferred Shares Series F"
  },
  {
    "Symbol": "ACGN",
    "Name": "Aceragen Inc. Common Stock"
  },
  {
    "Symbol": "ACHC",
    "Name": "Acadia Healthcare Company Inc. Common Stock"
  },
  {
    "Symbol": "ACHL",
    "Name": "Achilles Therapeutics plc American Depositary Shares"
  },
  {
    "Symbol": "ACHR",
    "Name": "Archer Aviation Inc. Class A Common Stock"
  },
  {
    "Symbol": "ACHV",
    "Name": "Achieve Life Sciences Inc. Common Shares"
  },
  {
    "Symbol": "ACI",
    "Name": "Albertsons Companies Inc. Class A Common Stock"
  },
  {
    "Symbol": "ACIU",
    "Name": "AC Immune SA Common Stock"
  },
  {
    "Symbol": "ACIW",
    "Name": "ACI Worldwide Inc. Common Stock"
  },
  {
    "Symbol": "ACLS",
    "Name": "Axcelis Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ACLX",
    "Name": "Arcellx Inc. Common Stock"
  },
  {
    "Symbol": "ACM",
    "Name": "AECOM Common Stock"
  },
  {
    "Symbol": "ACMR",
    "Name": "ACM Research Inc. Class A Common Stock"
  },
  {
    "Symbol": "ACN",
    "Name": "Accenture plc Class A Ordinary Shares (Ireland)"
  },
  {
    "Symbol": "ACNB",
    "Name": "ACNB Corporation Common Stock"
  },
  {
    "Symbol": "ACNT",
    "Name": "Ascent Industries Co. Common Stock"
  },
  {
    "Symbol": "ACON",
    "Name": "Aclarion Inc. Common Stock"
  },
  {
    "Symbol": "ACONW",
    "Name": "Aclarion Inc. Warrant"
  },
  {
    "Symbol": "ACOR",
    "Name": "Acorda Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ACP",
    "Name": "abrdn Income Credit Strategies Fund Common Shares"
  },
  {
    "Symbol": "ACP^A",
    "Name": "abrdn Income Credit Strategies Fund 5.250% Series A Perpetual Preferred Stock"
  },
  {
    "Symbol": "ACR",
    "Name": "ACRES Commercial Realty Corp. Common Stock"
  },
  {
    "Symbol": "ACR^C",
    "Name": "ACRES Commercial Realty Corp. 8.625% Fixed-to-Floating Series C Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "ACR^D",
    "Name": "ACRES Commercial Realty Corp. 7.875% Series D Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "ACRE",
    "Name": "Ares Commercial Real Estate Corporation Common Stock"
  },
  {
    "Symbol": "ACRO",
    "Name": "Acropolis Infrastructure Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ACRS",
    "Name": "Aclaris Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ACRV",
    "Name": "Acrivon Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ACRX",
    "Name": "AcelRx Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ACST",
    "Name": "Acasti Pharma Inc. Class A Common Stock"
  },
  {
    "Symbol": "ACT",
    "Name": "Enact Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ACTG",
    "Name": "Acacia Research Corporation (Acacia Tech) Common Stock"
  },
  {
    "Symbol": "ACU",
    "Name": "Acme United Corporation. Common Stock"
  },
  {
    "Symbol": "ACV",
    "Name": "Virtus Diversified Income & Convertible Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ACVA",
    "Name": "ACV Auctions Inc. Class A Common Stock"
  },
  {
    "Symbol": "ACXP",
    "Name": "Acurx Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ADAG",
    "Name": "Adagene Inc. American Depositary Shares"
  },
  {
    "Symbol": "ADAL",
    "Name": "Anthemis Digital Acquisitions I Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "ADALU",
    "Name": "Anthemis Digital Acquisitions I Corp Unit"
  },
  {
    "Symbol": "ADALW",
    "Name": "Anthemis Digital Acquisitions I Corp Warrant"
  },
  {
    "Symbol": "ADAP",
    "Name": "Adaptimmune Therapeutics plc American Depositary Shares"
  },
  {
    "Symbol": "ADBE",
    "Name": "Adobe Inc. Common Stock"
  },
  {
    "Symbol": "ADC",
    "Name": "Agree Realty Corporation Common Stock"
  },
  {
    "Symbol": "ADC^A",
    "Name": "Agree Realty Corporation Depositary Shares each representing 1/1000th of a 4.250% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "ADCT",
    "Name": "ADC Therapeutics SA Common Shares"
  },
  {
    "Symbol": "ADD",
    "Name": "Color Star Technology Co. Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "ADEA",
    "Name": "Adeia Inc. Common Stock"
  },
  {
    "Symbol": "ADER",
    "Name": "26 Capital Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ADERW",
    "Name": "26 Capital Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ADES",
    "Name": "Advanced Emissions Solutions Inc. Common Stock"
  },
  {
    "Symbol": "ADEX",
    "Name": "Adit EdTech Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "ADI",
    "Name": "Analog Devices Inc. Common Stock"
  },
  {
    "Symbol": "ADIL",
    "Name": "Adial Pharmaceuticals Inc Common Stock"
  },
  {
    "Symbol": "ADILW",
    "Name": "Adial Pharmaceuticals Inc Warrant"
  },
  {
    "Symbol": "ADM",
    "Name": "Archer-Daniels-Midland Company Common Stock"
  },
  {
    "Symbol": "ADMA",
    "Name": "ADMA Biologics Inc Common Stock"
  },
  {
    "Symbol": "ADMP",
    "Name": "Adamis Pharmaceuticals Corporation Common Stock"
  },
  {
    "Symbol": "ADN",
    "Name": "Advent Technologies Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "ADNT",
    "Name": "Adient plc Ordinary Shares"
  },
  {
    "Symbol": "ADNWW",
    "Name": "Advent Technologies Holdings Inc. Warrant"
  },
  {
    "Symbol": "ADOC",
    "Name": "Edoc Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "ADOCR",
    "Name": "Edoc Acquisition Corp. Right"
  },
  {
    "Symbol": "ADOCW",
    "Name": "Edoc Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ADP",
    "Name": "Automatic Data Processing Inc. Common Stock"
  },
  {
    "Symbol": "ADPT",
    "Name": "Adaptive Biotechnologies Corporation Common Stock"
  },
  {
    "Symbol": "ADRT",
    "Name": "Ault Disruptive Technologies Corporation Common Stock"
  },
  {
    "Symbol": "ADSE",
    "Name": "ADS-TEC ENERGY PLC Ordinary Shares"
  },
  {
    "Symbol": "ADSK",
    "Name": "Autodesk Inc. Common Stock"
  },
  {
    "Symbol": "ADT",
    "Name": "ADT Inc. Common Stock"
  },
  {
    "Symbol": "ADTH",
    "Name": "AdTheorent Holding Company Inc. Common Stock"
  },
  {
    "Symbol": "ADTN",
    "Name": "ADTRAN Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ADTX",
    "Name": "Aditxt Inc. Common Stock"
  },
  {
    "Symbol": "ADUS",
    "Name": "Addus HomeCare Corporation Common Stock"
  },
  {
    "Symbol": "ADV",
    "Name": "Advantage Solutions Inc. Class A Common Stock"
  },
  {
    "Symbol": "ADVM",
    "Name": "Adverum Biotechnologies Inc. Common Stock"
  },
  {
    "Symbol": "ADVWW",
    "Name": "Advantage Solutions Inc. Warrant"
  },
  {
    "Symbol": "ADX",
    "Name": "Adams Diversified Equity Fund Inc."
  },
  {
    "Symbol": "ADXN",
    "Name": "Addex Therapeutics Ltd American Depositary Shares"
  },
  {
    "Symbol": "AE",
    "Name": "Adams Resources & Energy Inc. Common Stock"
  },
  {
    "Symbol": "AEAE",
    "Name": "AltEnergy Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "AEAEU",
    "Name": "AltEnergy Acquisition Corp. Unit"
  },
  {
    "Symbol": "AEAEW",
    "Name": "AltEnergy Acquisition Corp. Warrant"
  },
  {
    "Symbol": "AEE",
    "Name": "Ameren Corporation Common Stock"
  },
  {
    "Symbol": "AEF",
    "Name": "abrdn Emerging Markets Equity Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "AEFC",
    "Name": "Aegon Funding Company LLC 5.10% Subordinated Notes due 2049"
  },
  {
    "Symbol": "AEG",
    "Name": "AEGON N.V. Common Stock"
  },
  {
    "Symbol": "AEHL",
    "Name": "Antelope Enterprise Holdings Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "AEHR",
    "Name": "Aehr Test Systems Common Stock"
  },
  {
    "Symbol": "AEI",
    "Name": "Alset Inc. Common Stock (TX)"
  },
  {
    "Symbol": "AEIS",
    "Name": "Advanced Energy Industries Inc. Common Stock"
  },
  {
    "Symbol": "AEL",
    "Name": "American Equity Investment Life Holding Company Common Stock"
  },
  {
    "Symbol": "AEL^A",
    "Name": "American Equity Investment Life Holding Company Depositary Shares each representing a 1/1000th interest in a share of 5.95% Fixed-Rate Reset Non-Cumulative Preferred Stock Series A"
  },
  {
    "Symbol": "AEL^B",
    "Name": "American Equity Investment Life Holding Company Depositary Shares each representing a 1/1000th interest in a share of 6.625% Fixed-Rate Reset Non-Cumulative Preferred Stock Series B"
  },
  {
    "Symbol": "AEM",
    "Name": "Agnico Eagle Mines Limited Common Stock"
  },
  {
    "Symbol": "AEMD",
    "Name": "Aethlon Medical Inc. Common Stock"
  },
  {
    "Symbol": "AENZ",
    "Name": "Aenza S.A.A. American Depositary Shares"
  },
  {
    "Symbol": "AEO",
    "Name": "American Eagle Outfitters Inc. Common Stock"
  },
  {
    "Symbol": "AEP",
    "Name": "American Electric Power Company Inc. Common Stock"
  },
  {
    "Symbol": "AEPPZ",
    "Name": "American Electric Power Company Inc. Corporate Units"
  },
  {
    "Symbol": "AER",
    "Name": "AerCap Holdings N.V. Ordinary Shares"
  },
  {
    "Symbol": "AES",
    "Name": "The AES Corporation Common Stock"
  },
  {
    "Symbol": "AESC",
    "Name": "The AES Corporation Corporate Units"
  },
  {
    "Symbol": "AESI",
    "Name": "Atlas Energy Solutions Inc. Class A Common Stock"
  },
  {
    "Symbol": "AEVA",
    "Name": "Aeva Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AEY",
    "Name": "ADDvantage Technologies Group Inc. Common Stock"
  },
  {
    "Symbol": "AEYE",
    "Name": "AudioEye Inc. Common Stock"
  },
  {
    "Symbol": "AEZS",
    "Name": "Aeterna Zentaris Inc. Common Stock"
  },
  {
    "Symbol": "AFAR",
    "Name": "Aura FAT Projects Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "AFARU",
    "Name": "Aura FAT Projects Acquisition Corp Unit"
  },
  {
    "Symbol": "AFB",
    "Name": "AllianceBernstein National Municipal Income Fund Inc"
  },
  {
    "Symbol": "AFBI",
    "Name": "Affinity Bancshares Inc. Common Stock (MD)"
  },
  {
    "Symbol": "AFCG",
    "Name": "AFC Gamma Inc. Common Stock"
  },
  {
    "Symbol": "AFG",
    "Name": "American Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "AFGB",
    "Name": "American Financial Group Inc. 5.875% Subordinated Debentures due 2059"
  },
  {
    "Symbol": "AFGC",
    "Name": "American Financial Group Inc. 5.125% Subordinated Debentures due 2059"
  },
  {
    "Symbol": "AFGD",
    "Name": "American Financial Group Inc. 5.625% Subordinated Debentures due 2060"
  },
  {
    "Symbol": "AFGE",
    "Name": "American Financial Group Inc. 4.500% Subordinated Debentures due 2060"
  },
  {
    "Symbol": "AFIB",
    "Name": "Acutus Medical Inc. Common Stock"
  },
  {
    "Symbol": "AFL",
    "Name": "AFLAC Incorporated Common Stock"
  },
  {
    "Symbol": "AFMD",
    "Name": "Affimed N.V."
  },
  {
    "Symbol": "AFRI",
    "Name": "Forafric Global PLC Ordinary Shares"
  },
  {
    "Symbol": "AFRIW",
    "Name": "Forafric Global PLC Warrants"
  },
  {
    "Symbol": "AFRM",
    "Name": "Affirm Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "AFT",
    "Name": "Apollo Senior Floating Rate Fund Inc. Common Stock"
  },
  {
    "Symbol": "AFTR",
    "Name": "AfterNext HealthTech Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "AFYA",
    "Name": "Afya Limited Class A Common Shares"
  },
  {
    "Symbol": "AG",
    "Name": "First Majestic Silver Corp. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "AGAC",
    "Name": "African Gold Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "AGAE",
    "Name": "Allied Gaming & Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "AGBA",
    "Name": "AGBA Group Holding Limited Ordinary Share"
  },
  {
    "Symbol": "AGBAW",
    "Name": "AGBA Group Holding Limited Warrant"
  },
  {
    "Symbol": "AGCO",
    "Name": "AGCO Corporation Common Stock"
  },
  {
    "Symbol": "AGD",
    "Name": "abrdn Global Dynamic Dividend Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "AGE",
    "Name": "AgeX Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AGEN",
    "Name": "Agenus Inc. Common Stock"
  },
  {
    "Symbol": "AGFY",
    "Name": "Agrify Corporation Common Stock"
  },
  {
    "Symbol": "AGI",
    "Name": "Alamos Gold Inc. Class A Common Shares"
  },
  {
    "Symbol": "AGIL",
    "Name": "AgileThought Inc. Class A Common Stock"
  },
  {
    "Symbol": "AGILW",
    "Name": "AgileThought Inc. Warrant"
  },
  {
    "Symbol": "AGIO",
    "Name": "Agios Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "AGL",
    "Name": "agilon health inc. Common Stock"
  },
  {
    "Symbol": "AGLE",
    "Name": "Aeglea BioTherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AGM",
    "Name": "Federal Agricultural Mortgage Corporation Common Stock"
  },
  {
    "Symbol": "AGM^C",
    "Name": "Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg"
  },
  {
    "Symbol": "AGM^D",
    "Name": "Federal Agricultural Mortgage Corporation 5.700% Non-Cumulative Preferred Stock Series D"
  },
  {
    "Symbol": "AGM^E",
    "Name": "Federal Agricultural Mortgage Corporation 5.750% Non-Cumulative Preferred Stock Series E"
  },
  {
    "Symbol": "AGM^F",
    "Name": "Federal Agricultural Mortgage Corporation 5.250% Non-Cumulative Preferred Stock Series F"
  },
  {
    "Symbol": "AGM^G",
    "Name": "Federal Agricultural Mortgage Corporation 4.875% Non-Cumulative Preferred Stock Series G"
  },
  {
    "Symbol": "AGMH",
    "Name": "AGM Group Holdings Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "AGNC",
    "Name": "AGNC Investment Corp. Common Stock"
  },
  {
    "Symbol": "AGNCL",
    "Name": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.75% Series G Fixed-Rate Reset Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AGNCM",
    "Name": "AGNC Investment Corp. Depositary Shares rep 6.875% Series D Fixed-to-Floating Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AGNCN",
    "Name": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AGNCO",
    "Name": "AGNC Investment Corp. Depositary Shares each representing a 1/1000th interest in a share of 6.50% Series E Fixed-to-Floating Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AGNCP",
    "Name": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.125% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "AGO",
    "Name": "Assured Guaranty Ltd. Common Stock"
  },
  {
    "Symbol": "AGR",
    "Name": "Avangrid Inc. Common Stock"
  },
  {
    "Symbol": "AGRI",
    "Name": "AgriFORCE  Growing Systems Ltd. Common Shares"
  },
  {
    "Symbol": "AGRIW",
    "Name": "AgriFORCE  Growing Systems Ltd. Warrant"
  },
  {
    "Symbol": "AGRO",
    "Name": "Adecoagro S.A. Common Shares"
  },
  {
    "Symbol": "AGRX",
    "Name": "Agile Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AGS",
    "Name": "PlayAGS Inc. Common Stock"
  },
  {
    "Symbol": "AGTI",
    "Name": "Agiliti Inc. Common Stock"
  },
  {
    "Symbol": "AGX",
    "Name": "Argan Inc. Common Stock"
  },
  {
    "Symbol": "AGYS",
    "Name": "Agilysys Inc. Common Stock (DE)"
  },
  {
    "Symbol": "AHCO",
    "Name": "AdaptHealth Corp. Common Stock"
  },
  {
    "Symbol": "AHG",
    "Name": "Akso Health Group ADS"
  },
  {
    "Symbol": "AHH",
    "Name": "Armada Hoffler Properties Inc. Common Stock"
  },
  {
    "Symbol": "AHH^A",
    "Name": "Armada Hoffler Properties Inc. 6.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "AHI",
    "Name": "Advanced Health Intelligence Ltd. American Depositary Shares"
  },
  {
    "Symbol": "AHL^C",
    "Name": "Aspen Insurance Holdings Limited 5.95% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Shares"
  },
  {
    "Symbol": "AHL^D",
    "Name": "Aspen Insurance Holdings Limited 5.625% Perpetual Non-Cumulative Preference Shares"
  },
  {
    "Symbol": "AHL^E",
    "Name": "Aspen Insurance Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 5.625% Perpetual Non-Cumulative Preference Shares"
  },
  {
    "Symbol": "AHRN",
    "Name": "Ahren Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "AHRNU",
    "Name": "Ahren Acquisition Corp. Unit"
  },
  {
    "Symbol": "AHRNW",
    "Name": "Ahren Acquisition Corp. Warrants"
  },
  {
    "Symbol": "AHT",
    "Name": "Ashford Hospitality Trust Inc Common Stock"
  },
  {
    "Symbol": "AHT^D",
    "Name": "Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock"
  },
  {
    "Symbol": "AHT^F",
    "Name": "Ashford Hospitality Trust Inc 7.375% Series F Cumulative Preferred Stock"
  },
  {
    "Symbol": "AHT^G",
    "Name": "Ashford Hospitality Trust Inc 7.375% Series G Cumulative Preferred Stock"
  },
  {
    "Symbol": "AHT^H",
    "Name": "Ashford Hospitality Trust Inc 7.50% Series H Cumulative Preferred Stock"
  },
  {
    "Symbol": "AHT^I",
    "Name": "Ashford Hospitality Trust Inc 7.50% Series I Cumulative Preferred Stock"
  },
  {
    "Symbol": "AI",
    "Name": "C3.ai Inc. Class A Common Stock"
  },
  {
    "Symbol": "AIB",
    "Name": "AIB Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "AIC",
    "Name": "Arlington Asset Investment Corp 6.750% Notes due 2025"
  },
  {
    "Symbol": "AIF",
    "Name": "Apollo Tactical Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "AIG",
    "Name": "American International Group Inc. New Common Stock"
  },
  {
    "Symbol": "AIG^A",
    "Name": "American International Group Inc. Depositary Shares Each Representing a 1/1000th Interest in a Share of Series A 5.85% Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "AIH",
    "Name": "Aesthetic Medical International Holdings Group Ltd. American Depositary Shares"
  },
  {
    "Symbol": "AIHS",
    "Name": "Senmiao Technology Limited Common Stock"
  },
  {
    "Symbol": "AIM",
    "Name": "AIM ImmunoTech Inc. Common Stock"
  },
  {
    "Symbol": "AIMAU",
    "Name": "Aimfinity Investment Corp. I Unit"
  },
  {
    "Symbol": "AIMBU",
    "Name": "Aimfinity Investment Corp. I Subunit"
  },
  {
    "Symbol": "AIMD",
    "Name": "Ainos Inc. Common Stock"
  },
  {
    "Symbol": "AIN",
    "Name": "Albany International Corporation Common Stock"
  },
  {
    "Symbol": "AINC",
    "Name": "Ashford Inc. (Holding Company) Common Stock"
  },
  {
    "Symbol": "AIO",
    "Name": "Virtus Artificial Intelligence & Technology Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "AIP",
    "Name": "Arteris Inc. Common Stock"
  },
  {
    "Symbol": "AIR",
    "Name": "AAR Corp. Common Stock"
  },
  {
    "Symbol": "AIRC",
    "Name": "Apartment Income REIT Corp. Common Stock"
  },
  {
    "Symbol": "AIRG",
    "Name": "Airgain Inc. Common Stock"
  },
  {
    "Symbol": "AIRI",
    "Name": "Air Industries Group Common Stock"
  },
  {
    "Symbol": "AIRS",
    "Name": "AirSculpt Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AIRT",
    "Name": "Air T Inc. Common Stock"
  },
  {
    "Symbol": "AIRTP",
    "Name": "Air T Inc. Air T Funding Alpha Income Trust Preferred Securities"
  },
  {
    "Symbol": "AIT",
    "Name": "Applied Industrial Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AIU",
    "Name": "Meta Data Limited ADS"
  },
  {
    "Symbol": "AIV",
    "Name": "Apartment Investment and Management Company Common Stock"
  },
  {
    "Symbol": "AIXI",
    "Name": "XIAO-I Corporation American Depositary Shares"
  },
  {
    "Symbol": "AIZ",
    "Name": "Assurant Inc. Common Stock"
  },
  {
    "Symbol": "AIZN",
    "Name": "Assurant Inc. 5.25% Subordinated Notes due 2061"
  },
  {
    "Symbol": "AJG",
    "Name": "Arthur J. Gallagher & Co. Common Stock"
  },
  {
    "Symbol": "AJRD",
    "Name": "Aerojet Rocketdyne Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AJX",
    "Name": "Great Ajax Corp. Common Stock"
  },
  {
    "Symbol": "AJXA",
    "Name": "Great Ajax Corp. 7.25% Convertible Senior Notes due 2024"
  },
  {
    "Symbol": "AKA",
    "Name": "a.k.a. Brands Holding Corp. Common Stock"
  },
  {
    "Symbol": "AKAM",
    "Name": "Akamai Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AKAN",
    "Name": "Akanda Corp. Common Shares"
  },
  {
    "Symbol": "AKBA",
    "Name": "Akebia Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AKLI",
    "Name": "Akili Inc. Common Stock"
  },
  {
    "Symbol": "AKO/A",
    "Name": "Embotelladora Andina S.A."
  },
  {
    "Symbol": "AKO/B",
    "Name": "Embotelladora Andina S.A."
  },
  {
    "Symbol": "AKR",
    "Name": "Acadia Realty Trust Common Stock"
  },
  {
    "Symbol": "AKRO",
    "Name": "Akero Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AKTS",
    "Name": "Akoustis Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AKTX",
    "Name": "Akari Therapeutics plc ADS"
  },
  {
    "Symbol": "AKU",
    "Name": "Akumin Inc. Common Stock (DE)"
  },
  {
    "Symbol": "AKYA",
    "Name": "Akoya BioSciences Inc. Common Stock"
  },
  {
    "Symbol": "AL",
    "Name": "Air Lease Corporation Class A Common Stock"
  },
  {
    "Symbol": "AL^A",
    "Name": "Air Lease Corporation 6.150% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "ALAR",
    "Name": "Alarum Technologies Ltd. American Depositary Share"
  },
  {
    "Symbol": "ALB",
    "Name": "Albemarle Corporation Common Stock"
  },
  {
    "Symbol": "ALBT",
    "Name": "Avalon GloboCare Corp. Common Stock"
  },
  {
    "Symbol": "ALC",
    "Name": "Alcon Inc. Ordinary Shares"
  },
  {
    "Symbol": "ALCC",
    "Name": "AltC Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ALCO",
    "Name": "Alico Inc. Common Stock"
  },
  {
    "Symbol": "ALDX",
    "Name": "Aldeyra Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ALE",
    "Name": "Allete Inc."
  },
  {
    "Symbol": "ALEC",
    "Name": "Alector Inc. Common Stock"
  },
  {
    "Symbol": "ALEX",
    "Name": "Alexander & Baldwin Inc. Common Stock REIT Holding Company"
  },
  {
    "Symbol": "ALG",
    "Name": "Alamo Group Inc. Common Stock"
  },
  {
    "Symbol": "ALGM",
    "Name": "Allegro MicroSystems Inc. Common Stock"
  },
  {
    "Symbol": "ALGN",
    "Name": "Align Technology Inc. Common Stock"
  },
  {
    "Symbol": "ALGS",
    "Name": "Aligos Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ALGT",
    "Name": "Allegiant Travel Company Common Stock"
  },
  {
    "Symbol": "ALHC",
    "Name": "Alignment Healthcare Inc. Common Stock"
  },
  {
    "Symbol": "ALIM",
    "Name": "Alimera Sciences Inc. Common Stock"
  },
  {
    "Symbol": "ALIT",
    "Name": "Alight Inc. Class A Common Stock"
  },
  {
    "Symbol": "ALK",
    "Name": "Alaska Air Group Inc. Common Stock"
  },
  {
    "Symbol": "ALKS",
    "Name": "Alkermes plc Ordinary Shares"
  },
  {
    "Symbol": "ALKT",
    "Name": "Alkami Technology Inc. Common Stock"
  },
  {
    "Symbol": "ALL",
    "Name": "Allstate Corporation (The) Common Stock"
  },
  {
    "Symbol": "ALL^B",
    "Name": "Allstate Corporation (The) 5.100% Fixed-to-Floating Rate Subordinated Debentures due 2053"
  },
  {
    "Symbol": "ALL^H",
    "Name": "Allstate Corporation (The) Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series H"
  },
  {
    "Symbol": "ALL^I",
    "Name": "Allstate Corporation (The) Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series I"
  },
  {
    "Symbol": "ALLE",
    "Name": "Allegion plc Ordinary Shares"
  },
  {
    "Symbol": "ALLG",
    "Name": "Allego N.V. Ordinary Share"
  },
  {
    "Symbol": "ALLK",
    "Name": "Allakos Inc. Common Stock"
  },
  {
    "Symbol": "ALLO",
    "Name": "Allogene Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ALLR",
    "Name": "Allarity Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ALLT",
    "Name": "Allot Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ALLY",
    "Name": "Ally Financial Inc. Common Stock"
  },
  {
    "Symbol": "ALNY",
    "Name": "Alnylam Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ALOR",
    "Name": "ALSP Orchid Acquisition Corporation I Class A Ordinary Share"
  },
  {
    "Symbol": "ALOT",
    "Name": "AstroNova Inc. Common Stock"
  },
  {
    "Symbol": "ALPA",
    "Name": "Alpha Healthcare Acquisition Corp. III Class A Common Stock"
  },
  {
    "Symbol": "ALPAU",
    "Name": "Alpha Healthcare Acquisition Corp. III Units"
  },
  {
    "Symbol": "ALPN",
    "Name": "Alpine Immune Sciences Inc. Common Stock"
  },
  {
    "Symbol": "ALPP",
    "Name": "Alpine 4 Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "ALPS",
    "Name": "Alpine Summit Energy Partners Inc. Class A Subordinate Voting Shares"
  },
  {
    "Symbol": "ALRM",
    "Name": "Alarm.com Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ALRN",
    "Name": "Aileron Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ALRS",
    "Name": "Alerus Financial Corporation Common Stock"
  },
  {
    "Symbol": "ALSA",
    "Name": "Alpha Star Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "ALSAW",
    "Name": "Alpha Star Acquisition Corporation Warrants"
  },
  {
    "Symbol": "ALSN",
    "Name": "Allison Transmission Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ALT",
    "Name": "Altimmune Inc. Common Stock"
  },
  {
    "Symbol": "ALTG",
    "Name": "Alta Equipment Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "ALTG^A",
    "Name": "Alta Equipment Group Inc. Depositary Shares (each representing 1/1000th in a share of 10% Series A Cumulative Perpetual Preferred Stock)"
  },
  {
    "Symbol": "ALTI",
    "Name": "AlTi Global Inc. Class A Common Stock"
  },
  {
    "Symbol": "ALTIW",
    "Name": "AlTi Global Inc. Warrant"
  },
  {
    "Symbol": "ALTO",
    "Name": "Alto Ingredients Inc. Common Stock"
  },
  {
    "Symbol": "ALTR",
    "Name": "Altair Engineering Inc. Class A Common Stock"
  },
  {
    "Symbol": "ALTU",
    "Name": "Altitude Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ALTUW",
    "Name": "Altitude Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ALV",
    "Name": "Autoliv Inc. Common Stock"
  },
  {
    "Symbol": "ALVO",
    "Name": "Alvotech Ordinary Shares"
  },
  {
    "Symbol": "ALVOW",
    "Name": "Alvotech Warrant"
  },
  {
    "Symbol": "ALVR",
    "Name": "AlloVir Inc. Common Stock"
  },
  {
    "Symbol": "ALX",
    "Name": "Alexander's Inc. Common Stock"
  },
  {
    "Symbol": "ALXO",
    "Name": "ALX Oncology Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ALYA",
    "Name": "Alithya Group inc. Class A Subordinate Voting Shares"
  },
  {
    "Symbol": "ALZN",
    "Name": "Alzamend Neuro Inc. Common Stock"
  },
  {
    "Symbol": "AM",
    "Name": "Antero Midstream Corporation Common Stock"
  },
  {
    "Symbol": "AMAL",
    "Name": "Amalgamated Financial Corp. Common Stock (DE)"
  },
  {
    "Symbol": "AMAM",
    "Name": "Ambrx Biopharma Inc. American Depositary Shares"
  },
  {
    "Symbol": "AMAO",
    "Name": "American Acquisition Opportunity Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMAOW",
    "Name": "American Acquisition Opportunity Inc. Warrant"
  },
  {
    "Symbol": "AMAT",
    "Name": "Applied Materials Inc. Common Stock"
  },
  {
    "Symbol": "AMBA",
    "Name": "Ambarella Inc. Ordinary Shares"
  },
  {
    "Symbol": "AMBC",
    "Name": "Ambac Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "AMBI",
    "Name": "Ambipar Emergency Response Class A Ordinary Shares"
  },
  {
    "Symbol": "AMBO",
    "Name": "Ambow Education Holding Ltd. American Depository Shares each representing two Class A ordinary shares"
  },
  {
    "Symbol": "AMBP",
    "Name": "Ardagh Metal Packaging S.A. Ordinary Shares"
  },
  {
    "Symbol": "AMC",
    "Name": "AMC Entertainment Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMCR",
    "Name": "Amcor plc Ordinary Shares"
  },
  {
    "Symbol": "AMCX",
    "Name": "AMC Networks Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMD",
    "Name": "Advanced Micro Devices Inc. Common Stock"
  },
  {
    "Symbol": "AME",
    "Name": "AMETEK Inc."
  },
  {
    "Symbol": "AMED",
    "Name": "Amedisys Inc Common Stock"
  },
  {
    "Symbol": "AMEH",
    "Name": "Apollo Medical Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AMG",
    "Name": "Affiliated Managers Group Inc. Common Stock"
  },
  {
    "Symbol": "AMGN",
    "Name": "Amgen Inc. Common Stock"
  },
  {
    "Symbol": "AMH",
    "Name": "American Homes 4 Rent Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "AMH^G",
    "Name": "American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest"
  },
  {
    "Symbol": "AMH^H",
    "Name": "American Homes 4 Rent Series H cumulative redeemable perpetual Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "AMK",
    "Name": "AssetMark Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AMKR",
    "Name": "Amkor Technology Inc. Common Stock"
  },
  {
    "Symbol": "AMLI",
    "Name": "American Lithium Corp. Common Stock"
  },
  {
    "Symbol": "AMLX",
    "Name": "Amylyx Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "AMN",
    "Name": "AMN Healthcare Services Inc AMN Healthcare Services Inc"
  },
  {
    "Symbol": "AMNB",
    "Name": "American National Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "AMOT",
    "Name": "Allied Motion Technologies Inc."
  },
  {
    "Symbol": "AMP",
    "Name": "Ameriprise Financial Inc. Common Stock"
  },
  {
    "Symbol": "AMPE",
    "Name": "Ampio Pharmaceuticals Inc."
  },
  {
    "Symbol": "AMPG",
    "Name": "Amplitech Group Inc. Common Stock"
  },
  {
    "Symbol": "AMPGW",
    "Name": "Amplitech Group Inc. Warrants"
  },
  {
    "Symbol": "AMPH",
    "Name": "Amphastar Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "AMPL",
    "Name": "Amplitude Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMPS",
    "Name": "Altus Power Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMPX",
    "Name": "Amprius Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AMPY",
    "Name": "Amplify Energy Corp. Common Stock"
  },
  {
    "Symbol": "AMR",
    "Name": "Alpha Metallurgical Resources Inc. Common Stock"
  },
  {
    "Symbol": "AMRC",
    "Name": "Ameresco Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMRK",
    "Name": "A-Mark Precious Metals Inc. Common Stock"
  },
  {
    "Symbol": "AMRN",
    "Name": "Amarin Corporation plc"
  },
  {
    "Symbol": "AMRS",
    "Name": "Amyris Inc. Common Stock"
  },
  {
    "Symbol": "AMRX",
    "Name": "Amneal Pharmaceuticals Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMS",
    "Name": "American Shared Hospital Services Common Stock"
  },
  {
    "Symbol": "AMSC",
    "Name": "American Superconductor Corporation Common Stock"
  },
  {
    "Symbol": "AMSF",
    "Name": "AMERISAFE Inc. Common Stock"
  },
  {
    "Symbol": "AMST",
    "Name": "Amesite Inc. Common Stock"
  },
  {
    "Symbol": "AMSWA",
    "Name": "American Software Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMT",
    "Name": "American Tower Corporation (REIT) Common Stock"
  },
  {
    "Symbol": "AMTB",
    "Name": "Amerant Bancorp Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMTD",
    "Name": "AMTD IDEA Group American Depositary Shares each representing two Class A Ordinary Shares"
  },
  {
    "Symbol": "AMTI",
    "Name": "Applied Molecular Transport Inc. Common Stock"
  },
  {
    "Symbol": "AMTX",
    "Name": "Aemetis Inc. (DE) Common Stock"
  },
  {
    "Symbol": "AMV",
    "Name": "Atlis Motor Vehicles Inc. Class A Common Stock"
  },
  {
    "Symbol": "AMWD",
    "Name": "American Woodmark Corporation Common Stock"
  },
  {
    "Symbol": "AMWL",
    "Name": "American Well Corporation Class A Common Stock"
  },
  {
    "Symbol": "AMX",
    "Name": "America Movil S.A.B. de C.V. American Depositary Shares (each representing the right to receive twenty (20) Series B Shares"
  },
  {
    "Symbol": "AMZN",
    "Name": "Amazon.com Inc. Common Stock"
  },
  {
    "Symbol": "AN",
    "Name": "AutoNation Inc. Common Stock"
  },
  {
    "Symbol": "ANAB",
    "Name": "AnaptysBio Inc. Common Stock"
  },
  {
    "Symbol": "ANDE",
    "Name": "Andersons Inc. (The) Common Stock"
  },
  {
    "Symbol": "ANEB",
    "Name": "Anebulo Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ANET",
    "Name": "Arista Networks Inc. Common Stock"
  },
  {
    "Symbol": "ANF",
    "Name": "Abercrombie & Fitch Company Common Stock"
  },
  {
    "Symbol": "ANGH",
    "Name": "Anghami Inc. Ordinary Shares"
  },
  {
    "Symbol": "ANGHW",
    "Name": "Anghami Inc. Warrants"
  },
  {
    "Symbol": "ANGI",
    "Name": "Angi Inc. Class A Common Stock"
  },
  {
    "Symbol": "ANGN",
    "Name": "Angion Biomedica Corp. Common Stock"
  },
  {
    "Symbol": "ANGO",
    "Name": "AngioDynamics Inc. Common Stock"
  },
  {
    "Symbol": "ANIK",
    "Name": "Anika Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ANIP",
    "Name": "ANI Pharmaceuticals Inc."
  },
  {
    "Symbol": "ANIX",
    "Name": "Anixa Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ANNX",
    "Name": "Annexon Inc. Common Stock"
  },
  {
    "Symbol": "ANPC",
    "Name": "AnPac Bio-Medical Science Co. Ltd. American Depositary Shares"
  },
  {
    "Symbol": "ANSS",
    "Name": "ANSYS Inc. Common Stock"
  },
  {
    "Symbol": "ANTE",
    "Name": "AirNet Technology Inc. American Depositary Shares"
  },
  {
    "Symbol": "ANTX",
    "Name": "AN2 Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ANVS",
    "Name": "Annovis Bio Inc. Common Stock"
  },
  {
    "Symbol": "ANY",
    "Name": "Sphere 3D Corp. Common Shares"
  },
  {
    "Symbol": "ANZU",
    "Name": "Anzu Special Acquisition Corp I Class A Common Stock"
  },
  {
    "Symbol": "ANZUW",
    "Name": "Anzu Special Acquisition Corp I Warrant"
  },
  {
    "Symbol": "AOD",
    "Name": "abrdn Total Dynamic Dividend Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "AOGO",
    "Name": "Arogo Capital Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "AOGOW",
    "Name": "Arogo Capital Acquisition Corp. Warrant"
  },
  {
    "Symbol": "AOMR",
    "Name": "Angel Oak Mortgage REIT Inc. Common Stock"
  },
  {
    "Symbol": "AON",
    "Name": "Aon plc Class A Ordinary Shares (Ireland)"
  },
  {
    "Symbol": "AORT",
    "Name": "Artivion Inc. Common Stock"
  },
  {
    "Symbol": "AOS",
    "Name": "A.O. Smith Corporation Common Stock"
  },
  {
    "Symbol": "AOSL",
    "Name": "Alpha and Omega Semiconductor Limited Common Shares"
  },
  {
    "Symbol": "AOUT",
    "Name": "American Outdoor Brands Inc. Common Stock"
  },
  {
    "Symbol": "AP",
    "Name": "Ampco-Pittsburgh Corporation Common Stock"
  },
  {
    "Symbol": "APA",
    "Name": "APA Corporation Common Stock"
  },
  {
    "Symbol": "APAC",
    "Name": "StoneBridge Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "APAM",
    "Name": "Artisan Partners Asset Management Inc. Class A Common Stock"
  },
  {
    "Symbol": "APCA",
    "Name": "AP Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "APCX",
    "Name": "AppTech Payments Corp. Common Stock"
  },
  {
    "Symbol": "APCXW",
    "Name": "AppTech Payments Corp. Warrant"
  },
  {
    "Symbol": "APD",
    "Name": "Air Products and Chemicals Inc. Common Stock"
  },
  {
    "Symbol": "APDN",
    "Name": "Applied DNA Sciences Inc. Common Stock"
  },
  {
    "Symbol": "APE",
    "Name": "AMC Entertainment Holdings Inc. AMC Preferred Equity Units each constituting a depositary share representing a 1/100th interest in a share of Series A Convertible Participating Preferred Stock"
  },
  {
    "Symbol": "APEI",
    "Name": "American Public Education Inc. Common Stock"
  },
  {
    "Symbol": "APG",
    "Name": "APi Group Corporation Common Stock"
  },
  {
    "Symbol": "APGB",
    "Name": "Apollo Strategic Growth Capital II Class A Ordinary Shares"
  },
  {
    "Symbol": "APGN",
    "Name": "Apexigen Inc. Common Stock"
  },
  {
    "Symbol": "APGNW",
    "Name": "Apexigen Inc. Warrant"
  },
  {
    "Symbol": "APH",
    "Name": "Amphenol Corporation Common Stock"
  },
  {
    "Symbol": "API",
    "Name": "Agora Inc. American Depositary Shares"
  },
  {
    "Symbol": "APLD",
    "Name": "Applied Digital Corporation Common Stock"
  },
  {
    "Symbol": "APLE",
    "Name": "Apple Hospitality REIT Inc. Common Shares"
  },
  {
    "Symbol": "APLM",
    "Name": "Apollomics Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "APLMW",
    "Name": "Apollomics Inc. Warrant"
  },
  {
    "Symbol": "APLS",
    "Name": "Apellis Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "APLT",
    "Name": "Applied Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "APM",
    "Name": "Aptorum Group Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "APMI",
    "Name": "AxonPrime Infrastructure Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "APMIU",
    "Name": "AxonPrime Infrastructure Acquisition Corporation Unit"
  },
  {
    "Symbol": "APMIW",
    "Name": "AxonPrime Infrastructure Acquisition Corporation Warrants"
  },
  {
    "Symbol": "APO",
    "Name": "Apollo Global Management Inc. (New) Common Stock"
  },
  {
    "Symbol": "APOG",
    "Name": "Apogee Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "APP",
    "Name": "Applovin Corporation Class A Common Stock"
  },
  {
    "Symbol": "APPF",
    "Name": "AppFolio Inc. Class A Common Stock"
  },
  {
    "Symbol": "APPH",
    "Name": "AppHarvest Inc. Common Stock"
  },
  {
    "Symbol": "APPHW",
    "Name": "AppHarvest Inc. Warrants"
  },
  {
    "Symbol": "APPN",
    "Name": "Appian Corporation Class A Common Stock"
  },
  {
    "Symbol": "APPS",
    "Name": "Digital Turbine Inc. Common Stock"
  },
  {
    "Symbol": "APRE",
    "Name": "Aprea Therapeutics Inc. Common stock"
  },
  {
    "Symbol": "APRN",
    "Name": "Blue Apron Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "APT",
    "Name": "Alpha Pro Tech Ltd. Common Stock"
  },
  {
    "Symbol": "APTM",
    "Name": "Alpha Partners Technology Merger Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "APTO",
    "Name": "Aptose Biosciences Inc. Common Shares"
  },
  {
    "Symbol": "APTV",
    "Name": "Aptiv PLC Ordinary Shares"
  },
  {
    "Symbol": "APTV^A",
    "Name": "Aptiv PLC 5.50% Series A Mandatory Convertible Preferred Shares"
  },
  {
    "Symbol": "APTX",
    "Name": "Aptinyx Inc. Common Stock"
  },
  {
    "Symbol": "APVO",
    "Name": "Aptevo Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "APWC",
    "Name": "Asia Pacific Wire & Cable Corporation Ltd. Ordinary Shares (Bermuda)"
  },
  {
    "Symbol": "APXI",
    "Name": "APx Acquisition Corp. I Class A Ordinary Share"
  },
  {
    "Symbol": "APYX",
    "Name": "Apyx Medical Corporation Common Stock"
  },
  {
    "Symbol": "AQB",
    "Name": "AquaBounty Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AQMS",
    "Name": "Aqua Metals Inc. Common Stock"
  },
  {
    "Symbol": "AQN",
    "Name": "Algonquin Power & Utilities Corp. Common Shares"
  },
  {
    "Symbol": "AQNA",
    "Name": "Algonquin Power & Utilities Corp. 6.875% Fixed-to-Floating Rate Subordinated Notes Series 2018-A due October 17 2078"
  },
  {
    "Symbol": "AQNB",
    "Name": "Algonquin Power & Utilities Corp. 6.20% Fixed-to-Floating Subordinated Notes Series 2019-A due July 1 2079"
  },
  {
    "Symbol": "AQNU",
    "Name": "Algonquin Power & Utilities Corp. Corporate Units"
  },
  {
    "Symbol": "AQST",
    "Name": "Aquestive Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AQU",
    "Name": "Aquaron Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "AQUA",
    "Name": "Evoqua Water Technologies Corp. Common Stock"
  },
  {
    "Symbol": "AQUNR",
    "Name": "Aquaron Acquisition Corp. Rights"
  },
  {
    "Symbol": "AQUNU",
    "Name": "Aquaron Acquisition Corp. Units"
  },
  {
    "Symbol": "AR",
    "Name": "Antero Resources Corporation Common Stock"
  },
  {
    "Symbol": "ARAV",
    "Name": "Aravive Inc. Common Stock"
  },
  {
    "Symbol": "ARAY",
    "Name": "Accuray Incorporated Common Stock"
  },
  {
    "Symbol": "ARBB",
    "Name": "ARB IOT Group Limited Ordinary Shares"
  },
  {
    "Symbol": "ARBE",
    "Name": "Arbe Robotics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ARBEW",
    "Name": "Arbe Robotics Ltd. Warrant"
  },
  {
    "Symbol": "ARBG",
    "Name": "Aequi Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ARBGW",
    "Name": "Aequi Acquisition Corp. warrants"
  },
  {
    "Symbol": "ARBK",
    "Name": "Argo Blockchain plc American Depositary Shares"
  },
  {
    "Symbol": "ARBKL",
    "Name": "Argo Blockchain plc 8.75% Senior Notes due 2026"
  },
  {
    "Symbol": "ARC",
    "Name": "ARC Document Solutions Inc. Common Stock"
  },
  {
    "Symbol": "ARCB",
    "Name": "ArcBest Corporation Common Stock"
  },
  {
    "Symbol": "ARCC",
    "Name": "Ares Capital Corporation Common Stock"
  },
  {
    "Symbol": "ARCE",
    "Name": "Arco Platform Limited Class A Common Shares"
  },
  {
    "Symbol": "ARCH",
    "Name": "Arch Resources Inc. Class A Common Stock"
  },
  {
    "Symbol": "ARCO",
    "Name": "Arcos Dorados Holdings Inc. Class A Shares"
  },
  {
    "Symbol": "ARCT",
    "Name": "Arcturus Therapeutics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ARDC",
    "Name": "Ares Dynamic Credit Allocation Fund Inc. Common Shares"
  },
  {
    "Symbol": "ARDS",
    "Name": "Aridis Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ARDX",
    "Name": "Ardelyx Inc. Common Stock"
  },
  {
    "Symbol": "ARE",
    "Name": "Alexandria Real Estate Equities Inc. Common Stock"
  },
  {
    "Symbol": "AREB",
    "Name": "American Rebel Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AREBW",
    "Name": "American Rebel Holdings Inc. Warrants"
  },
  {
    "Symbol": "AREC",
    "Name": "American Resources Corporation Class A Common Stock"
  },
  {
    "Symbol": "AREN",
    "Name": "The Arena Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ARES",
    "Name": "Ares Management Corporation Class A Common Stock"
  },
  {
    "Symbol": "ARGD",
    "Name": "Argo Group International Holdings Ltd. 6.5% Senior Notes Due 2042"
  },
  {
    "Symbol": "ARGO",
    "Name": "Argo Group International Holdings Ltd."
  },
  {
    "Symbol": "ARGO^A",
    "Name": "Argo Group International Holdings Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 7.00% Resettable Fixed Rate Preference Share Series A"
  },
  {
    "Symbol": "ARGX",
    "Name": "argenx SE American Depositary Shares"
  },
  {
    "Symbol": "ARHS",
    "Name": "Arhaus Inc. Class A Common Stock"
  },
  {
    "Symbol": "ARI",
    "Name": "Apollo Commercial Real Estate Finance Inc"
  },
  {
    "Symbol": "ARIS",
    "Name": "Aris Water Solutions Inc. Class A Common Stock"
  },
  {
    "Symbol": "ARIZ",
    "Name": "Arisz Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "ARIZR",
    "Name": "Arisz Acquisition Corp. Right"
  },
  {
    "Symbol": "ARIZW",
    "Name": "Arisz Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ARKO",
    "Name": "ARKO Corp. Common Stock"
  },
  {
    "Symbol": "ARKOW",
    "Name": "ARKO Corp. Warrant"
  },
  {
    "Symbol": "ARKR",
    "Name": "Ark Restaurants Corp. Common Stock"
  },
  {
    "Symbol": "ARL",
    "Name": "American Realty Investors Inc. Common Stock"
  },
  {
    "Symbol": "ARLO",
    "Name": "Arlo Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ARLP",
    "Name": "Alliance Resource Partners L.P. Common Units representing Limited Partners Interests"
  },
  {
    "Symbol": "ARMK",
    "Name": "Aramark Common Stock"
  },
  {
    "Symbol": "ARMP",
    "Name": "Armata Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ARNC",
    "Name": "Arconic Corporation Common Stock"
  },
  {
    "Symbol": "AROC",
    "Name": "Archrock Inc. Common Stock"
  },
  {
    "Symbol": "AROW",
    "Name": "Arrow Financial Corporation Common Stock"
  },
  {
    "Symbol": "ARQQ",
    "Name": "Arqit Quantum Inc. Ordinary Shares"
  },
  {
    "Symbol": "ARQQW",
    "Name": "Arqit Quantum Inc. Warrants"
  },
  {
    "Symbol": "ARQT",
    "Name": "Arcutis Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ARR",
    "Name": "ARMOUR Residential REIT Inc."
  },
  {
    "Symbol": "ARR^C",
    "Name": "ARMOUR Residential REIT Inc. 7% Series C Cumulative Redeemable Preferred Stock (liquidation preference $25.00 per share)"
  },
  {
    "Symbol": "ARRW",
    "Name": "Arrowroot Acquisition Corp. Class A common stock"
  },
  {
    "Symbol": "ARRWU",
    "Name": "Arrowroot Acquisition Corp. Unit"
  },
  {
    "Symbol": "ARRWW",
    "Name": "Arrowroot Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ARRY",
    "Name": "Array Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ARTE",
    "Name": "Artemis Strategic Investment Corporation Class A Common Stock"
  },
  {
    "Symbol": "ARTEU",
    "Name": "Artemis Strategic Investment Corporation Unit"
  },
  {
    "Symbol": "ARTEW",
    "Name": "Artemis Strategic Investment Corporation Warrant"
  },
  {
    "Symbol": "ARTL",
    "Name": "Artelo Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ARTLW",
    "Name": "Artelo Biosciences Inc. Warrant"
  },
  {
    "Symbol": "ARTNA",
    "Name": "Artesian Resources Corporation Class A Common Stock"
  },
  {
    "Symbol": "ARTW",
    "Name": "Art's-Way Manufacturing Co. Inc. Common Stock"
  },
  {
    "Symbol": "ARVL",
    "Name": "Arrival Ordinary Shares"
  },
  {
    "Symbol": "ARVN",
    "Name": "Arvinas Inc. Common Stock"
  },
  {
    "Symbol": "ARW",
    "Name": "Arrow Electronics Inc. Common Stock"
  },
  {
    "Symbol": "ARWR",
    "Name": "Arrowhead Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ARYD",
    "Name": "ARYA Sciences Acquisition Corp IV Class A Odinary Shares"
  },
  {
    "Symbol": "ARYE",
    "Name": "ARYA Sciences Acquisition Corp V Class A Ordinary Shares"
  },
  {
    "Symbol": "ASA",
    "Name": "ASA  Gold and Precious Metals Limited"
  },
  {
    "Symbol": "ASAI",
    "Name": "Sendas Distribuidora S A ADS"
  },
  {
    "Symbol": "ASAN",
    "Name": "Asana Inc. Class A Common Stock"
  },
  {
    "Symbol": "ASB",
    "Name": "Associated Banc-Corp Common Stock"
  },
  {
    "Symbol": "ASB^E",
    "Name": "Associated Banc-Corp Depositary Shares each representing a 1/40th interest in a share of 5.875% Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "ASB^F",
    "Name": "Associated Banc-Corp Depositary Shares each representing a 1/40th interest in a share of Associated Banc-Corp 5.625% Non-Cumulative Perpetual Preferred Stock Series F"
  },
  {
    "Symbol": "ASBA",
    "Name": "Associated Banc-Corp 6.625% Fixed-Rate Reset Subordinated Notes due 2033"
  },
  {
    "Symbol": "ASC",
    "Name": "Ardmore Shipping Corporation Common Stock"
  },
  {
    "Symbol": "ASCA",
    "Name": "A SPAC I Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "ASCAU",
    "Name": "A SPAC I Acquisition Corp. Unit"
  },
  {
    "Symbol": "ASCB",
    "Name": "A SPAC II Acquisition Corp. Ordinary Shares"
  },
  {
    "Symbol": "ASG",
    "Name": "Liberty All-Star Growth Fund Inc."
  },
  {
    "Symbol": "ASGI",
    "Name": "abrdn Global Infrastructure Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ASGN",
    "Name": "ASGN Incorporated Common Stock"
  },
  {
    "Symbol": "ASH",
    "Name": "Ashland Inc. Common Stock"
  },
  {
    "Symbol": "ASIX",
    "Name": "AdvanSix Inc. Common Stock"
  },
  {
    "Symbol": "ASLE",
    "Name": "AerSale Corporation Common Stock"
  },
  {
    "Symbol": "ASLN",
    "Name": "ASLAN Pharmaceuticals Limited American Depositary Shares"
  },
  {
    "Symbol": "ASM",
    "Name": "Avino Silver & Gold Mines Ltd. Common Shares (Canada)"
  },
  {
    "Symbol": "ASMB",
    "Name": "Assembly Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ASML",
    "Name": "ASML Holding N.V. New York Registry Shares"
  },
  {
    "Symbol": "ASND",
    "Name": "Ascendis Pharma A/S American Depositary Shares"
  },
  {
    "Symbol": "ASNS",
    "Name": "Actelis Networks Inc. Common Stock"
  },
  {
    "Symbol": "ASO",
    "Name": "Academy Sports and Outdoors Inc. Common Stock"
  },
  {
    "Symbol": "ASPI",
    "Name": "ASP Isotopes Inc. Common Stock"
  },
  {
    "Symbol": "ASPN",
    "Name": "Aspen Aerogels Inc. Common Stock"
  },
  {
    "Symbol": "ASPS",
    "Name": "Altisource Portfolio Solutions S.A. Common Stock"
  },
  {
    "Symbol": "ASR",
    "Name": "Grupo Aeroportuario del Sureste S.A. de C.V. Common Stock"
  },
  {
    "Symbol": "ASRT",
    "Name": "Assertio Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ASRV",
    "Name": "AmeriServ Financial Inc. Common Stock"
  },
  {
    "Symbol": "ASST",
    "Name": "Asset Entities Inc. Class B Common Stock"
  },
  {
    "Symbol": "ASTC",
    "Name": "Astrotech Corporation (DE) Common Stock"
  },
  {
    "Symbol": "ASTE",
    "Name": "Astec Industries Inc. Common Stock"
  },
  {
    "Symbol": "ASTI",
    "Name": "Ascent Solar Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ASTL",
    "Name": "Algoma Steel Group Inc. Common Shares"
  },
  {
    "Symbol": "ASTLW",
    "Name": "Algoma Steel Group Inc. Warrant"
  },
  {
    "Symbol": "ASTR",
    "Name": "Astra Space Inc. Class A Common Stock"
  },
  {
    "Symbol": "ASTS",
    "Name": "AST SpaceMobile Inc. Class A Common Stock"
  },
  {
    "Symbol": "ASTSW",
    "Name": "AST SpaceMobile Inc. Warrant"
  },
  {
    "Symbol": "ASUR",
    "Name": "Asure Software Inc Common Stock"
  },
  {
    "Symbol": "ASX",
    "Name": "ASE Technology Holding Co. Ltd. American Depositary Shares (each representing Two Common Shares)"
  },
  {
    "Symbol": "ASXC",
    "Name": "Asensus Surgical Inc. Common Stock"
  },
  {
    "Symbol": "ASYS",
    "Name": "Amtech Systems Inc. Common Stock"
  },
  {
    "Symbol": "ATAI",
    "Name": "ATAI Life Sciences N.V. Common Shares"
  },
  {
    "Symbol": "ATAK",
    "Name": "Aurora Technology Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "ATAKR",
    "Name": "Aurora Technology Acquisition Corp. Rights"
  },
  {
    "Symbol": "ATAKW",
    "Name": "Aurora Technology Acquisition Corp. Warrants"
  },
  {
    "Symbol": "ATAQ",
    "Name": "Altimar Acquisition Corp. III Class A Ordinary Shares"
  },
  {
    "Symbol": "ATAT",
    "Name": "Atour Lifestyle Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "ATCO^D",
    "Name": "Atlas Corp. 7.95% Series D"
  },
  {
    "Symbol": "ATCO^H",
    "Name": "Atlas Corp. 7.875% Series H"
  },
  {
    "Symbol": "ATCO^I",
    "Name": "Atlas Corp. Series I Fixed-to-Floating"
  },
  {
    "Symbol": "ATCOL",
    "Name": "Atlas Corp. 7.125% Notes due 2027"
  },
  {
    "Symbol": "ATEC",
    "Name": "Alphatec Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ATEK",
    "Name": "Athena Technology Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "ATEN",
    "Name": "A10 Networks Inc. Common Stock"
  },
  {
    "Symbol": "ATER",
    "Name": "Aterian Inc. Common Stock"
  },
  {
    "Symbol": "ATEX",
    "Name": "Anterix Inc. Common Stock"
  },
  {
    "Symbol": "ATGE",
    "Name": "Adtalem Global Education Inc. Common Stock"
  },
  {
    "Symbol": "ATH^A",
    "Name": "Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 6.35% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Share Series A"
  },
  {
    "Symbol": "ATH^B",
    "Name": "Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 5.625% Fixed Rate Perpetual Non- Cumulative Preference Share Series B par value $1.00 per share"
  },
  {
    "Symbol": "ATH^C",
    "Name": "Athene Holding Ltd. Depositary Shares each representing a 1/1000th Interest in a Share of 6.375% Fixed-Rate Reset Perpetual Non-Cumulative Preference Shares Series C"
  },
  {
    "Symbol": "ATH^D",
    "Name": "Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 4.875% Fixed-Rate Perpetual Non-Cumulative Preference Share Series D"
  },
  {
    "Symbol": "ATH^E",
    "Name": "Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 7.750% Fixed-Rate Reset Perpetual Non-Cumulative Preference Share Series E"
  },
  {
    "Symbol": "ATHA",
    "Name": "Athira Pharma Inc. Common Stock"
  },
  {
    "Symbol": "ATHE",
    "Name": "Alterity Therapeutics Limited American Depositary Shares"
  },
  {
    "Symbol": "ATHM",
    "Name": "Autohome Inc. American Depositary Shares each representing four class A ordinary shares."
  },
  {
    "Symbol": "ATHX",
    "Name": "Athersys Inc. Common Stock"
  },
  {
    "Symbol": "ATI",
    "Name": "ATI Inc. Common Stock"
  },
  {
    "Symbol": "ATIF",
    "Name": "ATIF Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "ATIP",
    "Name": "ATI Physical Therapy Inc. Class A Common Stock"
  },
  {
    "Symbol": "ATKR",
    "Name": "Atkore Inc. Common Stock"
  },
  {
    "Symbol": "ATLC",
    "Name": "Atlanticus Holdings Corporation Common Stock"
  },
  {
    "Symbol": "ATLCL",
    "Name": "Atlanticus Holdings Corporation 6.125% Senior Notes due 2026"
  },
  {
    "Symbol": "ATLCP",
    "Name": "Atlanticus Holdings Corporation 7.625% Series B Cumulative Perpetual Preferred Stock no par value per share"
  },
  {
    "Symbol": "ATLO",
    "Name": "Ames National Corporation Common Stock"
  },
  {
    "Symbol": "ATLX",
    "Name": "Atlas Lithium Corporation Common Stock"
  },
  {
    "Symbol": "ATMC",
    "Name": "AlphaTime Acquisition Corp Ordinary Shares"
  },
  {
    "Symbol": "ATMCU",
    "Name": "AlphaTime Acquisition Corp Unit"
  },
  {
    "Symbol": "ATMCW",
    "Name": "AlphaTime Acquisition Corp Warrant"
  },
  {
    "Symbol": "ATMVU",
    "Name": "AlphaVest Acquisition Corp Unit"
  },
  {
    "Symbol": "ATNF",
    "Name": "180 Life Sciences Corp. Common Stock"
  },
  {
    "Symbol": "ATNFW",
    "Name": "180 Life Sciences Corp. Warrant"
  },
  {
    "Symbol": "ATNI",
    "Name": "ATN International Inc. Common Stock"
  },
  {
    "Symbol": "ATNM",
    "Name": "Actinium Pharmaceuticals Inc. (Delaware) Common Stock"
  },
  {
    "Symbol": "ATNX",
    "Name": "Athenex Inc. Common Stock"
  },
  {
    "Symbol": "ATO",
    "Name": "Atmos Energy Corporation Common Stock"
  },
  {
    "Symbol": "ATOM",
    "Name": "Atomera Incorporated Common Stock"
  },
  {
    "Symbol": "ATOS",
    "Name": "Atossa Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ATR",
    "Name": "AptarGroup Inc. Common Stock"
  },
  {
    "Symbol": "ATRA",
    "Name": "Atara Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ATRC",
    "Name": "AtriCure Inc. Common Stock"
  },
  {
    "Symbol": "ATRI",
    "Name": "Atrion Corporation Common Stock"
  },
  {
    "Symbol": "ATRO",
    "Name": "Astronics Corporation Common Stock"
  },
  {
    "Symbol": "ATSG",
    "Name": "Air Transport Services Group Inc"
  },
  {
    "Symbol": "ATTO",
    "Name": "Atento S.A. Ordinary Shares"
  },
  {
    "Symbol": "ATUS",
    "Name": "Altice USA Inc. Class A Common Stock"
  },
  {
    "Symbol": "ATVI",
    "Name": "Activision Blizzard Inc. Common Stock"
  },
  {
    "Symbol": "ATXG",
    "Name": "Addentax Group Corp. Common Stock"
  },
  {
    "Symbol": "ATXI",
    "Name": "Avenue Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ATXS",
    "Name": "Astria Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AU",
    "Name": "AngloGold Ashanti Limited Common Stock"
  },
  {
    "Symbol": "AUB",
    "Name": "Atlantic Union Bankshares Corporation Common Stock"
  },
  {
    "Symbol": "AUB^A",
    "Name": "Atlantic Union Bankshares Corporation Depositary Shares each representing a 1/400th ownership interest in a share of 6.875% Perpetual Non-Cumulative Preferred Stock Series A"
  },
  {
    "Symbol": "AUBN",
    "Name": "Auburn National Bancorporation Inc. Common Stock"
  },
  {
    "Symbol": "AUD",
    "Name": "Audacy Common Stock"
  },
  {
    "Symbol": "AUDC",
    "Name": "AudioCodes Ltd. Common Stock"
  },
  {
    "Symbol": "AUGX",
    "Name": "Augmedix Inc. Common Stock"
  },
  {
    "Symbol": "AUID",
    "Name": "authID Inc. Common Stock"
  },
  {
    "Symbol": "AULT",
    "Name": "Ault Alliance Inc. Common Stock"
  },
  {
    "Symbol": "AULT^D",
    "Name": "Ault Alliance Inc. 13.00% Series D Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "AUMN",
    "Name": "Golden Minerals Company Common Stock"
  },
  {
    "Symbol": "AUPH",
    "Name": "Aurinia Pharmaceuticals Inc Ordinary Shares"
  },
  {
    "Symbol": "AUR",
    "Name": "Aurora Innovation Inc. Class A Common Stock"
  },
  {
    "Symbol": "AURA",
    "Name": "Aura Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "AURC",
    "Name": "Aurora Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "AURCW",
    "Name": "Aurora Acquisition Corp. Warrant"
  },
  {
    "Symbol": "AUROW",
    "Name": "Aurora Innovation Inc. Warrant"
  },
  {
    "Symbol": "AUST",
    "Name": "Austin Gold Corp. Common Shares"
  },
  {
    "Symbol": "AUTL",
    "Name": "Autolus Therapeutics plc American Depositary Share"
  },
  {
    "Symbol": "AUUD",
    "Name": "Auddia Inc. Common Stock"
  },
  {
    "Symbol": "AUUDW",
    "Name": "Auddia Inc. Warrants"
  },
  {
    "Symbol": "AUVI",
    "Name": "Applied UV Inc. Common Stock"
  },
  {
    "Symbol": "AUVIP",
    "Name": "Applied UV Inc. 10.5% Series A Cumulative Perpetual Preferred Stock $0.0001 par value per share"
  },
  {
    "Symbol": "AVA",
    "Name": "Avista Corporation Common Stock"
  },
  {
    "Symbol": "AVAC",
    "Name": "Avalon Acquisition Inc. Class A Common Stock"
  },
  {
    "Symbol": "AVAH",
    "Name": "Aveanna Healthcare Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AVAL",
    "Name": "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)"
  },
  {
    "Symbol": "AVAV",
    "Name": "AeroVironment Inc. Common Stock"
  },
  {
    "Symbol": "AVB",
    "Name": "AvalonBay Communities Inc. Common Stock"
  },
  {
    "Symbol": "AVD",
    "Name": "American Vanguard Corporation Common Stock ($0.10 Par Value)"
  },
  {
    "Symbol": "AVDL",
    "Name": "Avadel Pharmaceuticals plc American Depositary Shares"
  },
  {
    "Symbol": "AVDX",
    "Name": "AvidXchange Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AVGO",
    "Name": "Broadcom Inc. Common Stock"
  },
  {
    "Symbol": "AVGR",
    "Name": "Avinger Inc. Common Stock"
  },
  {
    "Symbol": "AVHI",
    "Name": "Achari Ventures Holdings Corp. I Common Stock"
  },
  {
    "Symbol": "AVHIW",
    "Name": "Achari Ventures Holdings Corp. I Warrant"
  },
  {
    "Symbol": "AVID",
    "Name": "Avid Technology Inc. Common Stock"
  },
  {
    "Symbol": "AVIR",
    "Name": "Atea Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "AVK",
    "Name": "Advent Convertible and Income Fund"
  },
  {
    "Symbol": "AVNS",
    "Name": "Avanos Medical Inc. Common Stock"
  },
  {
    "Symbol": "AVNT",
    "Name": "Avient Corporation Common Stock"
  },
  {
    "Symbol": "AVNW",
    "Name": "Aviat Networks Inc. Common Stock"
  },
  {
    "Symbol": "AVO",
    "Name": "Mission Produce Inc. Common Stock"
  },
  {
    "Symbol": "AVPT",
    "Name": "AvePoint Inc. Class A Common Stock"
  },
  {
    "Symbol": "AVPTW",
    "Name": "AvePoint Inc. Warrant"
  },
  {
    "Symbol": "AVRO",
    "Name": "AVROBIO Inc. Common Stock"
  },
  {
    "Symbol": "AVT",
    "Name": "Avnet Inc. Common Stock"
  },
  {
    "Symbol": "AVTA",
    "Name": "Avantax Inc. Common Stock"
  },
  {
    "Symbol": "AVTE",
    "Name": "Aerovate Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AVTR",
    "Name": "Avantor Inc. Common Stock"
  },
  {
    "Symbol": "AVTX",
    "Name": "Avalo Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AVXL",
    "Name": "Anavex Life Sciences Corp. Common Stock"
  },
  {
    "Symbol": "AVY",
    "Name": "Avery Dennison Corporation Common Stock"
  },
  {
    "Symbol": "AWF",
    "Name": "Alliancebernstein Global High Income Fund"
  },
  {
    "Symbol": "AWH",
    "Name": "Aspira Women's Health Inc. Common Stock"
  },
  {
    "Symbol": "AWI",
    "Name": "Armstrong World Industries Inc Common Stock"
  },
  {
    "Symbol": "AWIN",
    "Name": "AERWINS Technologies Inc. Common Stock"
  },
  {
    "Symbol": "AWINW",
    "Name": "AERWINS Technologies Inc. Warrant"
  },
  {
    "Symbol": "AWK",
    "Name": "American Water Works Company Inc. Common Stock"
  },
  {
    "Symbol": "AWP",
    "Name": "abrdn Global Premier Properties Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "AWR",
    "Name": "American States Water Company Common Stock"
  },
  {
    "Symbol": "AWRE",
    "Name": "Aware Inc. Common Stock"
  },
  {
    "Symbol": "AWX",
    "Name": "Avalon Holdings Corporation Common Stock"
  },
  {
    "Symbol": "AX",
    "Name": "Axos Financial Inc. Common Stock"
  },
  {
    "Symbol": "AXAC",
    "Name": "AXIOS Sustainable Growth Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "AXDX",
    "Name": "Accelerate Diagnostics Inc. Common Stock"
  },
  {
    "Symbol": "AXGN",
    "Name": "Axogen Inc. Common Stock"
  },
  {
    "Symbol": "AXL",
    "Name": "American Axle & Manufacturing Holdings Inc. Common Stock"
  },
  {
    "Symbol": "AXLA",
    "Name": "Axcella Health Inc. Common Stock"
  },
  {
    "Symbol": "AXNX",
    "Name": "Axonics Inc. Common Stock"
  },
  {
    "Symbol": "AXON",
    "Name": "Axon Enterprise Inc. Common Stock"
  },
  {
    "Symbol": "AXP",
    "Name": "American Express Company Common Stock"
  },
  {
    "Symbol": "AXR",
    "Name": "AMREP Corporation Common Stock"
  },
  {
    "Symbol": "AXS",
    "Name": "Axis Capital Holdings Limited Common Stock"
  },
  {
    "Symbol": "AXS^E",
    "Name": "Axis Capital Holdings Limited Depositary Shares each representing 1/100th interest in a share of a 5.50% Series E Preferred Shares"
  },
  {
    "Symbol": "AXSM",
    "Name": "Axsome Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "AXTA",
    "Name": "Axalta Coating Systems Ltd. Common Shares"
  },
  {
    "Symbol": "AXTI",
    "Name": "AXT Inc Common Stock"
  },
  {
    "Symbol": "AY",
    "Name": "Atlantica Sustainable Infrastructure plc Ordinary Shares"
  },
  {
    "Symbol": "AYI",
    "Name": "Acuity Brands Inc."
  },
  {
    "Symbol": "AYRO",
    "Name": "AYRO Inc. Common Stock"
  },
  {
    "Symbol": "AYTU",
    "Name": "Aytu BioPharma Inc.  Common Stock"
  },
  {
    "Symbol": "AYX",
    "Name": "Alteryx Inc. Class A Common Stock"
  },
  {
    "Symbol": "AZ",
    "Name": "A2Z Smart Technologies Corp. Common Shares"
  },
  {
    "Symbol": "AZEK",
    "Name": "The AZEK Company Inc. Class A Common Stock"
  },
  {
    "Symbol": "AZN",
    "Name": "AstraZeneca PLC American Depositary Shares"
  },
  {
    "Symbol": "AZO",
    "Name": "AutoZone Inc. Common Stock"
  },
  {
    "Symbol": "AZPN",
    "Name": "Aspen Technology Inc. Common Stock"
  },
  {
    "Symbol": "AZRE",
    "Name": "Azure Power Global Limited Equity Shares"
  },
  {
    "Symbol": "AZTA",
    "Name": "Azenta Inc."
  },
  {
    "Symbol": "AZUL",
    "Name": "Azul S.A. American Depositary Shares (each representing three preferred shares)"
  },
  {
    "Symbol": "AZYO",
    "Name": "Aziyo Biologics Inc. Class A Common Stock"
  },
  {
    "Symbol": "AZZ",
    "Name": "AZZ Inc."
  },
  {
    "Symbol": "B",
    "Name": "Barnes Group Inc. Common Stock"
  },
  {
    "Symbol": "BA",
    "Name": "Boeing Company (The) Common Stock"
  },
  {
    "Symbol": "BABA",
    "Name": "Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share"
  },
  {
    "Symbol": "BAC",
    "Name": "Bank of America Corporation Common Stock"
  },
  {
    "Symbol": "BAC^B",
    "Name": "Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 6.000% Non-Cumulative Preferred Stock Series GG"
  },
  {
    "Symbol": "BAC^E",
    "Name": "Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E"
  },
  {
    "Symbol": "BAC^K",
    "Name": "Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.875% Non- Cumulative Preferred Stock Series HH"
  },
  {
    "Symbol": "BAC^L",
    "Name": "Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L"
  },
  {
    "Symbol": "BAC^M",
    "Name": "Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.375% Non-Cumulative Preferred Stock Series KK"
  },
  {
    "Symbol": "BAC^N",
    "Name": "Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 5.000% Non-Cumulative Preferred Stock Series LL"
  },
  {
    "Symbol": "BAC^O",
    "Name": "Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 4.375% Non-Cumulative Preferred Stock Series NN"
  },
  {
    "Symbol": "BAC^P",
    "Name": "Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 4.125% Non-Cumulative Preferred Stock Series PP"
  },
  {
    "Symbol": "BAC^Q",
    "Name": "Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 4.250% Non-Cumulative Preferred Stock Series QQ"
  },
  {
    "Symbol": "BAC^S",
    "Name": "Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 4.750% Non-Cumulative Preferred Stock Series SS"
  },
  {
    "Symbol": "BACA",
    "Name": "Berenson Acquisition Corp. I Class A Common Stock"
  },
  {
    "Symbol": "BACK",
    "Name": "IMAC Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BAER",
    "Name": "Bridger Aerospace Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BAERW",
    "Name": "Bridger Aerospace Group Holdings Inc. Warrant"
  },
  {
    "Symbol": "BAFN",
    "Name": "BayFirst Financial Corp. Common Stock"
  },
  {
    "Symbol": "BAH",
    "Name": "Booz Allen Hamilton Holding Corporation Common Stock"
  },
  {
    "Symbol": "BAK",
    "Name": "Braskem SA ADR"
  },
  {
    "Symbol": "BALL",
    "Name": "Ball Corporation Common Stock"
  },
  {
    "Symbol": "BALY",
    "Name": "Bally's Corporation Common Stock"
  },
  {
    "Symbol": "BAM",
    "Name": "Brookfield Asset Management Inc Class A Limited Voting Shares"
  },
  {
    "Symbol": "BANC",
    "Name": "Banc of California Inc. Common Stock"
  },
  {
    "Symbol": "BAND",
    "Name": "Bandwidth Inc. Class A Common Stock"
  },
  {
    "Symbol": "BANF",
    "Name": "BancFirst Corporation Common Stock"
  },
  {
    "Symbol": "BANFP",
    "Name": "BancFirst Corporation - BFC Capital Trust II Cumulative Trust Preferred Securities"
  },
  {
    "Symbol": "BANL",
    "Name": "CBL International Limited Ordinary Shares"
  },
  {
    "Symbol": "BANR",
    "Name": "Banner Corporation Common Stock"
  },
  {
    "Symbol": "BANX",
    "Name": "ArrowMark Financial Corp. Common Stock"
  },
  {
    "Symbol": "BAOS",
    "Name": "Baosheng Media Group Holdings Limited Ordinary shares"
  },
  {
    "Symbol": "BAP",
    "Name": "Credicorp Ltd. Common Stock"
  },
  {
    "Symbol": "BARK",
    "Name": "BARK Inc. Class A Common Stock"
  },
  {
    "Symbol": "BASE",
    "Name": "Couchbase Inc. Common Stock"
  },
  {
    "Symbol": "BATL",
    "Name": "Battalion Oil Corporation Common Stock"
  },
  {
    "Symbol": "BATRA",
    "Name": "Liberty Media Corporation Series A Liberty Braves Common Stock"
  },
  {
    "Symbol": "BATRK",
    "Name": "Liberty Media Corporation Series C Liberty Braves Common Stock"
  },
  {
    "Symbol": "BAX",
    "Name": "Baxter International Inc. Common Stock"
  },
  {
    "Symbol": "BB",
    "Name": "BlackBerry Limited Common Stock"
  },
  {
    "Symbol": "BBAI",
    "Name": "BigBear.ai Inc. Common Stock"
  },
  {
    "Symbol": "BBAR",
    "Name": "Banco BBVA Argentina S.A. ADS"
  },
  {
    "Symbol": "BBBY",
    "Name": "Bed Bath & Beyond Inc. Common Stock"
  },
  {
    "Symbol": "BBCP",
    "Name": "Concrete Pumping Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BBD",
    "Name": "Banco Bradesco Sa American Depositary Shares"
  },
  {
    "Symbol": "BBDC",
    "Name": "Barings BDC Inc. Common Stock"
  },
  {
    "Symbol": "BBDO",
    "Name": "Banco Bradesco Sa American Depositary Shares (each representing one Common Share)"
  },
  {
    "Symbol": "BBGI",
    "Name": "Beasley Broadcast Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "BBIG",
    "Name": "Vinco Ventures Inc. Common Stock"
  },
  {
    "Symbol": "BBIO",
    "Name": "BridgeBio Pharma Inc. Common Stock"
  },
  {
    "Symbol": "BBLG",
    "Name": "Bone Biologics Corp Common Stock"
  },
  {
    "Symbol": "BBLGW",
    "Name": "Bone Biologics Corp Warrants"
  },
  {
    "Symbol": "BBLN",
    "Name": "Babylon Holdings Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "BBN",
    "Name": "BlackRock Taxable Municipal Bond Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BBSI",
    "Name": "Barrett Business Services Inc. Common Stock"
  },
  {
    "Symbol": "BBU",
    "Name": "Brookfield Business Partners L.P. Limited Partnership Units"
  },
  {
    "Symbol": "BBUC",
    "Name": "Brookfield Business Corporation Class A Exchangeable Subordinate Voting Shares"
  },
  {
    "Symbol": "BBVA",
    "Name": "Banco Bilbao Vizcaya Argentaria S.A. Common Stock"
  },
  {
    "Symbol": "BBW",
    "Name": "Build-A-Bear Workshop Inc. Common Stock"
  },
  {
    "Symbol": "BBWI",
    "Name": "Bath & Body Works Inc."
  },
  {
    "Symbol": "BBY",
    "Name": "Best Buy Co. Inc. Common Stock"
  },
  {
    "Symbol": "BC",
    "Name": "Brunswick Corporation Common Stock"
  },
  {
    "Symbol": "BC^A",
    "Name": "Brunswick Corporation 6.500% Senior Notes due 2048"
  },
  {
    "Symbol": "BC^B",
    "Name": "Brunswick Corporation 6.625% Senior Notes due 2049"
  },
  {
    "Symbol": "BC^C",
    "Name": "Brunswick Corporation 6.375% Notes due 2049"
  },
  {
    "Symbol": "BCAB",
    "Name": "BioAtla Inc. Common Stock"
  },
  {
    "Symbol": "BCAN",
    "Name": "BYND Cannasoft Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "BCAT",
    "Name": "BlackRock Capital Allocation Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BCBP",
    "Name": "BCB Bancorp Inc. (NJ) Common Stock"
  },
  {
    "Symbol": "BCC",
    "Name": "Boise Cascade L.L.C. Common Stock"
  },
  {
    "Symbol": "BCDA",
    "Name": "BioCardia Inc. Common Stock"
  },
  {
    "Symbol": "BCDAW",
    "Name": "BioCardia Inc. Warrant"
  },
  {
    "Symbol": "BCE",
    "Name": "BCE Inc. Common Stock"
  },
  {
    "Symbol": "BCEL",
    "Name": "Atreca Inc. Class A Common Stock"
  },
  {
    "Symbol": "BCH",
    "Name": "Banco De Chile Banco De Chile ADS"
  },
  {
    "Symbol": "BCLI",
    "Name": "Brainstorm Cell Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BCML",
    "Name": "BayCom Corp Common Stock"
  },
  {
    "Symbol": "BCO",
    "Name": "Brinks Company (The) Common Stock"
  },
  {
    "Symbol": "BCOV",
    "Name": "Brightcove Inc. Common Stock"
  },
  {
    "Symbol": "BCOW",
    "Name": "1895 Bancorp of Wisconsin Inc. (MD) Common Stock"
  },
  {
    "Symbol": "BCPC",
    "Name": "Balchem Corporation Common Stock"
  },
  {
    "Symbol": "BCRX",
    "Name": "BioCryst Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "BCS",
    "Name": "Barclays PLC Common Stock"
  },
  {
    "Symbol": "BCSA",
    "Name": "Blockchain Coinvestors Acquisition Corp. I Class A Ordinary Shares"
  },
  {
    "Symbol": "BCSAU",
    "Name": "Blockchain Coinvestors Acquisition Corp. I Unit"
  },
  {
    "Symbol": "BCSAW",
    "Name": "Blockchain Coinvestors Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "BCSF",
    "Name": "Bain Capital Specialty Finance Inc. Common Stock"
  },
  {
    "Symbol": "BCTX",
    "Name": "BriaCell Therapeutics Corp. Common Shares"
  },
  {
    "Symbol": "BCTXW",
    "Name": "BriaCell Therapeutics Corp. Warrant"
  },
  {
    "Symbol": "BCV",
    "Name": "Bancroft Fund Ltd."
  },
  {
    "Symbol": "BCV^A",
    "Name": "Bancroft Fund Limited 5.375% Series A Cumulative Preferred Shares"
  },
  {
    "Symbol": "BCX",
    "Name": "BlackRock Resources Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BCYC",
    "Name": "Bicycle Therapeutics plc American Depositary Shares"
  },
  {
    "Symbol": "BDC",
    "Name": "Belden Inc Common Stock"
  },
  {
    "Symbol": "BDJ",
    "Name": "Blackrock Enhanced Equity Dividend Trust"
  },
  {
    "Symbol": "BDL",
    "Name": "Flanigan's Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "BDN",
    "Name": "Brandywine Realty Trust Common Stock"
  },
  {
    "Symbol": "BDRX",
    "Name": "Biodexa Pharmaceuticals plc American Depositary Shs"
  },
  {
    "Symbol": "BDSX",
    "Name": "Biodesix Inc. Common Stock"
  },
  {
    "Symbol": "BDTX",
    "Name": "Black Diamond Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BDX",
    "Name": "Becton Dickinson and Company Common Stock"
  },
  {
    "Symbol": "BDXB",
    "Name": "Becton Dickinson and Company Depositary Shares each Representing a 1/20th Interest in a Share of 6.00% Mandatory Convertible Preferred Stock Series B"
  },
  {
    "Symbol": "BE",
    "Name": "Bloom Energy Corporation Class A Common Stock"
  },
  {
    "Symbol": "BEAM",
    "Name": "Beam Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BEAT",
    "Name": "Heartbeam Inc. Common Stock"
  },
  {
    "Symbol": "BECN",
    "Name": "Beacon Roofing Supply Inc. Common Stock"
  },
  {
    "Symbol": "BEDU",
    "Name": "Bright Scholar Education Holdings Limited American Depositary Shares each  representing four Class A Ordinary Share"
  },
  {
    "Symbol": "BEEM",
    "Name": "Beam Global Common Stock"
  },
  {
    "Symbol": "BEEMW",
    "Name": "Beam Global Warrant"
  },
  {
    "Symbol": "BEKE",
    "Name": "KE Holdings Inc American Depositary Shares (each representing three Class A Ordinary Shares)"
  },
  {
    "Symbol": "BELFA",
    "Name": "Bel Fuse Inc. Class A Common Stock"
  },
  {
    "Symbol": "BELFB",
    "Name": "Bel Fuse Inc. Class B Common Stock"
  },
  {
    "Symbol": "BEN",
    "Name": "Franklin Resources Inc. Common Stock"
  },
  {
    "Symbol": "BEP",
    "Name": "Brookfield Renewable Partners L.P."
  },
  {
    "Symbol": "BEP^A",
    "Name": "Brookfield Renewable Partners L.P. 5.25% Class A Preferred Limited Partnership Units Series 17"
  },
  {
    "Symbol": "BEPC",
    "Name": "Brookfield Renewable Corporation Class A Subordinate Voting Shares"
  },
  {
    "Symbol": "BEPH",
    "Name": "Brookfield BRP Holdings (Canada) Inc. 4.625% Perpetual Subordinated Notes"
  },
  {
    "Symbol": "BEPI",
    "Name": "Brookfield BRP Holdings (Canada) Inc. 4.875% Perpetual Subordinated Notes"
  },
  {
    "Symbol": "BERY",
    "Name": "Berry Global Group Inc. Common Stock"
  },
  {
    "Symbol": "BEST",
    "Name": "BEST Inc. American Depositary Shares each representing twenty (20) Class A Ordinary Shares"
  },
  {
    "Symbol": "BF/A",
    "Name": "Brown Forman Corporation"
  },
  {
    "Symbol": "BF/B",
    "Name": "Brown Forman Corporation"
  },
  {
    "Symbol": "BFAC",
    "Name": "Battery Future Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "BFAM",
    "Name": "Bright Horizons Family Solutions Inc. Common Stock"
  },
  {
    "Symbol": "BFC",
    "Name": "Bank First Corporation Common Stock"
  },
  {
    "Symbol": "BFH",
    "Name": "Bread Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BFI",
    "Name": "BurgerFi International Inc. Common Stock"
  },
  {
    "Symbol": "BFIIW",
    "Name": "BurgerFi International Inc. Warrant"
  },
  {
    "Symbol": "BFIN",
    "Name": "BankFinancial Corporation Common Stock"
  },
  {
    "Symbol": "BFK",
    "Name": "BlackRock Municipal Income Trust"
  },
  {
    "Symbol": "BFLY",
    "Name": "Butterfly Network Inc. Class A Common Stock"
  },
  {
    "Symbol": "BFRG",
    "Name": "Bullfrog AI Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BFRGW",
    "Name": "Bullfrog AI Holdings Inc. Warrants"
  },
  {
    "Symbol": "BFRI",
    "Name": "Biofrontera Inc. Common Stock"
  },
  {
    "Symbol": "BFS",
    "Name": "Saul Centers Inc. Common Stock"
  },
  {
    "Symbol": "BFS^D",
    "Name": "Saul Centers Inc. Depositary Shares each representing 1/100th of a share of 6.125% Series D Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "BFS^E",
    "Name": "Saul Centers Inc. Depositary shares each representing a 1/100th fractional interest in a share of 6.000% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "BFST",
    "Name": "Business First Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "BFZ",
    "Name": "BlackRock California Municipal Income Trust"
  },
  {
    "Symbol": "BG",
    "Name": "Bunge Limited Bunge Limited"
  },
  {
    "Symbol": "BGB",
    "Name": "Blackstone Strategic Credit 2027 Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BGCP",
    "Name": "BGC Partners Inc Class A Common Stock"
  },
  {
    "Symbol": "BGFV",
    "Name": "Big 5 Sporting Goods Corporation Common Stock"
  },
  {
    "Symbol": "BGH",
    "Name": "Barings Global Short Duration High Yield Fund Common Shares of Beneficial Interests"
  },
  {
    "Symbol": "BGI",
    "Name": "Birks Group Inc. Common Stock"
  },
  {
    "Symbol": "BGNE",
    "Name": "BeiGene Ltd. American Depositary Shares"
  },
  {
    "Symbol": "BGR",
    "Name": "BlackRock Energy and Resources Trust"
  },
  {
    "Symbol": "BGRY",
    "Name": "Berkshire Grey Inc. Class A Common Stock"
  },
  {
    "Symbol": "BGRYW",
    "Name": "Berkshire Grey Inc. Warrant"
  },
  {
    "Symbol": "BGS",
    "Name": "B&G Foods Inc. B&G Foods Inc. Common Stock"
  },
  {
    "Symbol": "BGSF",
    "Name": "BGSF Inc. Common Stock"
  },
  {
    "Symbol": "BGT",
    "Name": "BlackRock Floating Rate Income Trust"
  },
  {
    "Symbol": "BGX",
    "Name": "Blackstone Long Short Credit Income Fund Common Shares"
  },
  {
    "Symbol": "BGXX",
    "Name": "Bright Green Corporation Common Stock"
  },
  {
    "Symbol": "BGY",
    "Name": "Blackrock Enhanced International Dividend Trust"
  },
  {
    "Symbol": "BH",
    "Name": "Biglari Holdings Inc. Class B Common Stock"
  },
  {
    "Symbol": "BHAC",
    "Name": "Crixus BH3 Acquisition Company Class A Common Stock"
  },
  {
    "Symbol": "BHACW",
    "Name": "Crixus BH3 Acquisition Company Warrants"
  },
  {
    "Symbol": "BHAT",
    "Name": "Blue Hat Interactive Entertainment Technology Ordinary Shares"
  },
  {
    "Symbol": "BHB",
    "Name": "Bar Harbor Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "BHC",
    "Name": "Bausch Health Companies Inc. Common Stock"
  },
  {
    "Symbol": "BHE",
    "Name": "Benchmark Electronics Inc. Common Stock"
  },
  {
    "Symbol": "BHF",
    "Name": "Brighthouse Financial Inc. Common Stock"
  },
  {
    "Symbol": "BHFAL",
    "Name": "Brighthouse Financial Inc. 6.25% Junior Subordinated Debentures due 2058"
  },
  {
    "Symbol": "BHFAM",
    "Name": "Brighthouse Financial Inc. Depositary shares each representing a 1/1000th Interest in a Share of 4.625% Non-Cumulative Preferred Stock Series D"
  },
  {
    "Symbol": "BHFAN",
    "Name": "Brighthouse Financial Inc. Depositary shares each representing a 1/1000th interest in a share of 5.375% Non-Cumulative Preferred Stock Series C"
  },
  {
    "Symbol": "BHFAO",
    "Name": "Brighthouse Financial Inc. Depositary Shares 6.75% Non-Cumulative Preferred Stock Series B"
  },
  {
    "Symbol": "BHFAP",
    "Name": "Brighthouse Financial Inc. Depositary Shares 6.6% Non-Cumulative Preferred Stock Series A"
  },
  {
    "Symbol": "BHG",
    "Name": "Bright Health Group Inc. Common Stock"
  },
  {
    "Symbol": "BHIL",
    "Name": "Benson Hill Inc. Common Stock"
  },
  {
    "Symbol": "BHK",
    "Name": "Blackrock Core Bond Trust Blackrock Core Bond Trust"
  },
  {
    "Symbol": "BHLB",
    "Name": "Berkshire Hills Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "BHM",
    "Name": "Bluerock Homes Trust Inc. Class A Common Stock"
  },
  {
    "Symbol": "BHP",
    "Name": "BHP Group Limited American Depositary Shares (Each representing two Ordinary Shares)"
  },
  {
    "Symbol": "BHR",
    "Name": "Braemar Hotels & Resorts Inc. Common Stock"
  },
  {
    "Symbol": "BHR^B",
    "Name": "Braemar Hotels & Resorts Inc. 5.50% Series B Cumulative Convertible Preferred Stock par value $0.01 per share"
  },
  {
    "Symbol": "BHR^D",
    "Name": "Braemar Hotels & Resorts Inc. 8.25% Series D Cumulative Preferred Stock  par value $0.01 per share"
  },
  {
    "Symbol": "BHRB",
    "Name": "Burke & Herbert Financial Services Corp. Common Stock"
  },
  {
    "Symbol": "BHV",
    "Name": "BlackRock Virginia Municipal Bond Trust"
  },
  {
    "Symbol": "BHVN",
    "Name": "Biohaven Ltd. Common Shares"
  },
  {
    "Symbol": "BIAF",
    "Name": "bioAffinity Technologies Inc. Common Stock"
  },
  {
    "Symbol": "BIAFW",
    "Name": "bioAffinity Technologies Inc. Warrant"
  },
  {
    "Symbol": "BIDU",
    "Name": "Baidu Inc. ADS"
  },
  {
    "Symbol": "BIG",
    "Name": "Big Lots Inc. Common Stock"
  },
  {
    "Symbol": "BIGC",
    "Name": "BigCommerce Holdings Inc. Series 1 Common Stock"
  },
  {
    "Symbol": "BIGZ",
    "Name": "BlackRock Innovation and Growth Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BIIB",
    "Name": "Biogen Inc. Common Stock"
  },
  {
    "Symbol": "BILI",
    "Name": "Bilibili Inc. American Depositary Shares"
  },
  {
    "Symbol": "BILL",
    "Name": "BILL Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BIMI",
    "Name": "BIMI International Medical Inc. Common Stock"
  },
  {
    "Symbol": "BIO",
    "Name": "Bio-Rad Laboratories Inc. Class A Common Stock"
  },
  {
    "Symbol": "BIO/B",
    "Name": "Bio-Rad Laboratories Inc."
  },
  {
    "Symbol": "BIOC",
    "Name": "Biocept Inc. Common Stock"
  },
  {
    "Symbol": "BIOL",
    "Name": "Biolase Inc. Common Stock"
  },
  {
    "Symbol": "BIOR",
    "Name": "Biora Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BIOS",
    "Name": "BioPlus Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "BIOSW",
    "Name": "BioPlus Acquisition Corp. Warrants"
  },
  {
    "Symbol": "BIOX",
    "Name": "Bioceres Crop Solutions Corp. Ordinary Shares"
  },
  {
    "Symbol": "BIP",
    "Name": "Brookfield Infrastructure Partners LP Limited Partnership Units"
  },
  {
    "Symbol": "BIP^A",
    "Name": "Brookfield Infrastructure Partners LP 5.125% Class A Preferred Limited Partnership Units Series 13"
  },
  {
    "Symbol": "BIP^B",
    "Name": "Brookfield Infrastructure Partners LP 5.000% Class A Preferred Limited Partnership Units Series 14"
  },
  {
    "Symbol": "BIPC",
    "Name": "Brookfield Infrastructure Corporation"
  },
  {
    "Symbol": "BIPH",
    "Name": "Brookfield Infrastructure Corporation 5.000% Subordinated Notes due 2081"
  },
  {
    "Symbol": "BIPI",
    "Name": "BIP Bermuda Holdings I Limited 5.125% Perpetual Subordinated Notes"
  },
  {
    "Symbol": "BIRD",
    "Name": "Allbirds Inc. Class A Common Stock"
  },
  {
    "Symbol": "BIT",
    "Name": "BlackRock Multi-Sector Income Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BITE",
    "Name": "Bite Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "BITF",
    "Name": "Bitfarms Ltd. Common Stock"
  },
  {
    "Symbol": "BIVI",
    "Name": "BioVie Inc. Class A Common Stock"
  },
  {
    "Symbol": "BJ",
    "Name": "BJ's Wholesale Club Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BJDX",
    "Name": "Bluejay Diagnostics Inc. Common Stock"
  },
  {
    "Symbol": "BJRI",
    "Name": "BJ's Restaurants Inc. Common Stock"
  },
  {
    "Symbol": "BK",
    "Name": "The Bank of New York Mellon Corporation Common Stock"
  },
  {
    "Symbol": "BKCC",
    "Name": "BlackRock Capital Investment Corporation Common Stock"
  },
  {
    "Symbol": "BKD",
    "Name": "Brookdale Senior Living Inc. Common Stock"
  },
  {
    "Symbol": "BKDT",
    "Name": "Brookdale Senior Living Inc. 7.00% Tangible Equity Units"
  },
  {
    "Symbol": "BKE",
    "Name": "Buckle Inc. (The) Common Stock"
  },
  {
    "Symbol": "BKH",
    "Name": "Black Hills Corporation Common Stock"
  },
  {
    "Symbol": "BKI",
    "Name": "Black Knight Inc. Common Stock"
  },
  {
    "Symbol": "BKKT",
    "Name": "Bakkt Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "BKN",
    "Name": "BlackRock Investment Quality Municipal Trust Inc. (The)"
  },
  {
    "Symbol": "BKNG",
    "Name": "Booking Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BKR",
    "Name": "Baker Hughes Company Class A Common Stock"
  },
  {
    "Symbol": "BKSC",
    "Name": "Bank of South Carolina Corp. Common Stock"
  },
  {
    "Symbol": "BKSY",
    "Name": "BlackSky Technology Inc. Class A Common Stock"
  },
  {
    "Symbol": "BKT",
    "Name": "BlackRock Income Trust Inc. (The)"
  },
  {
    "Symbol": "BKTI",
    "Name": "BK Technologies Corporation Common Stock"
  },
  {
    "Symbol": "BKU",
    "Name": "BankUnited Inc. Common Stock"
  },
  {
    "Symbol": "BKYI",
    "Name": "BIO-key International Inc. Common Stock"
  },
  {
    "Symbol": "BL",
    "Name": "BlackLine Inc. Common Stock"
  },
  {
    "Symbol": "BLAC",
    "Name": "Bellevue Life Sciences Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "BLACU",
    "Name": "Bellevue Life Sciences Acquisition Corp. Unit"
  },
  {
    "Symbol": "BLBD",
    "Name": "Blue Bird Corporation Common Stock"
  },
  {
    "Symbol": "BLBX",
    "Name": "Blackboxstocks Inc. Common Stock"
  },
  {
    "Symbol": "BLCM",
    "Name": "Bellicum Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "BLCO",
    "Name": "Bausch + Lomb Corporation Common Shares"
  },
  {
    "Symbol": "BLD",
    "Name": "TopBuild Corp. Common Stock"
  },
  {
    "Symbol": "BLDE",
    "Name": "Blade Air Mobility Inc. Class A Common Stock"
  },
  {
    "Symbol": "BLDEW",
    "Name": "Blade Air Mobility Inc. Warrants"
  },
  {
    "Symbol": "BLDP",
    "Name": "Ballard Power Systems Inc. Common Shares"
  },
  {
    "Symbol": "BLDR",
    "Name": "Builders FirstSource Inc. Common Stock"
  },
  {
    "Symbol": "BLE",
    "Name": "BlackRock Municipal Income Trust II"
  },
  {
    "Symbol": "BLEU",
    "Name": "bleuacacia ltd Class A Ordinary Shares"
  },
  {
    "Symbol": "BLFS",
    "Name": "BioLife Solutions Inc. Common Stock"
  },
  {
    "Symbol": "BLFY",
    "Name": "Blue Foundry Bancorp Common Stock"
  },
  {
    "Symbol": "BLIN",
    "Name": "Bridgeline Digital Inc. Common Stock"
  },
  {
    "Symbol": "BLK",
    "Name": "BlackRock Inc. Common Stock"
  },
  {
    "Symbol": "BLKB",
    "Name": "Blackbaud Inc. Common Stock"
  },
  {
    "Symbol": "BLMN",
    "Name": "Bloomin' Brands Inc. Common Stock"
  },
  {
    "Symbol": "BLND",
    "Name": "Blend Labs Inc. Class A Common Stock"
  },
  {
    "Symbol": "BLNG",
    "Name": "Belong Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "BLNK",
    "Name": "Blink Charging Co. Common Stock"
  },
  {
    "Symbol": "BLPH",
    "Name": "Bellerophon Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BLRX",
    "Name": "BioLineRx Ltd. American Depositary Shares"
  },
  {
    "Symbol": "BLTE",
    "Name": "Belite Bio Inc American Depositary Shares"
  },
  {
    "Symbol": "BLU",
    "Name": "BELLUS Health Inc. Common Shares"
  },
  {
    "Symbol": "BLUA",
    "Name": "BlueRiver Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "BLUE",
    "Name": "bluebird bio Inc. Common Stock"
  },
  {
    "Symbol": "BLW",
    "Name": "Blackrock Limited Duration Income Trust"
  },
  {
    "Symbol": "BLX",
    "Name": "Banco Latinoamericano de Comercio Exterior S.A."
  },
  {
    "Symbol": "BLZE",
    "Name": "Backblaze Inc. Class A Common Stock"
  },
  {
    "Symbol": "BMA",
    "Name": "Banco Macro S.A.  ADR (representing Ten Class B Common Shares)"
  },
  {
    "Symbol": "BMAC",
    "Name": "Black Mountain Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "BMBL",
    "Name": "Bumble Inc. Class A Common Stock"
  },
  {
    "Symbol": "BME",
    "Name": "Blackrock Health Sciences Trust"
  },
  {
    "Symbol": "BMEA",
    "Name": "Biomea Fusion Inc. Common Stock"
  },
  {
    "Symbol": "BMEZ",
    "Name": "BlackRock Health Sciences Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BMI",
    "Name": "Badger Meter Inc. Common Stock"
  },
  {
    "Symbol": "BML^G",
    "Name": "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a share of Floating Rate Non-Cumulative Preferred Stock  Series 1)"
  },
  {
    "Symbol": "BML^H",
    "Name": "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 2)"
  },
  {
    "Symbol": "BML^J",
    "Name": "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 4)"
  },
  {
    "Symbol": "BML^L",
    "Name": "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th Interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 5)"
  },
  {
    "Symbol": "BMN",
    "Name": "BlackRock 2037 Municipal Target Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BMO",
    "Name": "Bank Of Montreal Common Stock"
  },
  {
    "Symbol": "BMR",
    "Name": "Beamr Imaging Ltd. Ordinary Share"
  },
  {
    "Symbol": "BMRA",
    "Name": "Biomerica Inc. Common Stock"
  },
  {
    "Symbol": "BMRC",
    "Name": "Bank of Marin Bancorp Common Stock"
  },
  {
    "Symbol": "BMRN",
    "Name": "BioMarin Pharmaceutical Inc. Common Stock"
  },
  {
    "Symbol": "BMTX",
    "Name": "BM Technologies Inc. Common Stock"
  },
  {
    "Symbol": "BMY",
    "Name": "Bristol-Myers Squibb Company Common Stock"
  },
  {
    "Symbol": "BN",
    "Name": "Brookfield Corporation Class A Limited Voting Shares"
  },
  {
    "Symbol": "BNED",
    "Name": "Barnes & Noble Education Inc Common Stock"
  },
  {
    "Symbol": "BNGO",
    "Name": "Bionano Genomics Inc. Common Stock"
  },
  {
    "Symbol": "BNGOW",
    "Name": "Bionano Genomics Inc. Warrant"
  },
  {
    "Symbol": "BNH",
    "Name": "Brookfield Finance Inc. 4.625% Subordinated Notes due October 16 2080"
  },
  {
    "Symbol": "BNIX",
    "Name": "Bannix Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "BNIXW",
    "Name": "Bannix Acquisition Corp. Warrant"
  },
  {
    "Symbol": "BNJ",
    "Name": "Brookfield Finance Inc. 4.50% Perpetual Subordinated Notes"
  },
  {
    "Symbol": "BNL",
    "Name": "Broadstone Net Lease Inc. Common Stock"
  },
  {
    "Symbol": "BNMV",
    "Name": "BitNile Metaverse Inc. Common Stock"
  },
  {
    "Symbol": "BNNR",
    "Name": "Banner Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "BNNRU",
    "Name": "Banner Acquisition Corp. Units"
  },
  {
    "Symbol": "BNOX",
    "Name": "Bionomics Limited American Depository Shares"
  },
  {
    "Symbol": "BNR",
    "Name": "Burning Rock Biotech Limited American Depositary Shares"
  },
  {
    "Symbol": "BNRE",
    "Name": "Brookfield Reinsurance Ltd. Class A Exchangeable Limited Voting Shares"
  },
  {
    "Symbol": "BNRG",
    "Name": "Brenmiller Energy Ltd Ordinary Shares"
  },
  {
    "Symbol": "BNS",
    "Name": "Bank Nova Scotia Halifax Pfd 3 Ordinary Shares"
  },
  {
    "Symbol": "BNSO",
    "Name": "Bonso Electronics International Inc. Common Stock"
  },
  {
    "Symbol": "BNTC",
    "Name": "Benitec Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "BNTX",
    "Name": "BioNTech SE American Depositary Share"
  },
  {
    "Symbol": "BNY",
    "Name": "BlackRock New York Municipal Income Trust"
  },
  {
    "Symbol": "BOAC",
    "Name": "Bluescape Opportunities Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "BOC",
    "Name": "Boston Omaha Corporation Class A Common Stock"
  },
  {
    "Symbol": "BOCN",
    "Name": "Blue Ocean Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "BODY",
    "Name": "The Beachbody Company Inc. Class A Common Stock"
  },
  {
    "Symbol": "BOE",
    "Name": "Blackrock Enhanced Global Dividend Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BOH",
    "Name": "Bank of Hawaii Corporation Common Stock"
  },
  {
    "Symbol": "BOH^A",
    "Name": "Bank of Hawaii Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.375% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "BOKF",
    "Name": "BOK Financial Corporation Common Stock"
  },
  {
    "Symbol": "BOLT",
    "Name": "Bolt Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BON",
    "Name": "Bon Natural Life Limited Ordinary Shares"
  },
  {
    "Symbol": "BOOM",
    "Name": "DMC Global Inc. Common Stock"
  },
  {
    "Symbol": "BOOT",
    "Name": "Boot Barn Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BORR",
    "Name": "Borr Drilling Limited Common Shares"
  },
  {
    "Symbol": "BOSC",
    "Name": "B.O.S. Better Online Solutions Common Stock"
  },
  {
    "Symbol": "BOTJ",
    "Name": "Bank of the James Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "BOWL",
    "Name": "Bowlero Corp. Class A Common Stock"
  },
  {
    "Symbol": "BOX",
    "Name": "Box Inc. Class A Common Stock"
  },
  {
    "Symbol": "BOXL",
    "Name": "Boxlight Corporation Class A Common Stock"
  },
  {
    "Symbol": "BP",
    "Name": "BP p.l.c. Common Stock"
  },
  {
    "Symbol": "BPAC",
    "Name": "Bullpen Parlay Acquisition Company Class A Ordinary Share"
  },
  {
    "Symbol": "BPACU",
    "Name": "Bullpen Parlay Acquisition Company Unit"
  },
  {
    "Symbol": "BPACW",
    "Name": "Bullpen Parlay Acquisition Company Warrant"
  },
  {
    "Symbol": "BPMC",
    "Name": "Blueprint Medicines Corporation Common Stock"
  },
  {
    "Symbol": "BPOP",
    "Name": "Popular Inc. Common Stock"
  },
  {
    "Symbol": "BPOPM",
    "Name": "Popular Inc. Popular Capital Trust II - 6.125% Cumulative Monthly Income Trust Preferred Securities"
  },
  {
    "Symbol": "BPRN",
    "Name": "Princeton Bancorp Inc. Common Stock (PA)"
  },
  {
    "Symbol": "BPT",
    "Name": "BP Prudhoe Bay Royalty Trust Common Stock"
  },
  {
    "Symbol": "BPTH",
    "Name": "Bio-Path Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BPTS",
    "Name": "Biophytis SA American Depositary Share"
  },
  {
    "Symbol": "BPYPM",
    "Name": "Brookfield Property Partners L.P. 6.25% Class A Cumulative Redeemable Preferred Units Series 1"
  },
  {
    "Symbol": "BPYPN",
    "Name": "Brookfield Property Partners L.P. 5.750% Class A Cumulative Redeemable Perpetual Preferred Units Series 3"
  },
  {
    "Symbol": "BPYPO",
    "Name": "Brookfield Property Partners L.P. 6.375% Class A Cumulative Redeemable Perpetual Preferred Units Series 2"
  },
  {
    "Symbol": "BPYPP",
    "Name": "Brookfield Property Partners L.P. 6.50% Class A Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "BQ",
    "Name": "Boqii Holding Limited American Depositary Shares representing Class A Ordinary Shares"
  },
  {
    "Symbol": "BR",
    "Name": "Broadridge Financial Solutions Inc. Common Stock"
  },
  {
    "Symbol": "BRAC",
    "Name": "Broad Capital Acquisition Corp Common Stock"
  },
  {
    "Symbol": "BRACU",
    "Name": "Broad Capital Acquisition Corp Unit"
  },
  {
    "Symbol": "BRAG",
    "Name": "Bragg Gaming Group Inc. Common Shares"
  },
  {
    "Symbol": "BRBR",
    "Name": "BellRing Brands Inc. Common Stock"
  },
  {
    "Symbol": "BRBS",
    "Name": "Blue Ridge Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "BRC",
    "Name": "Brady Corporation Common Stock"
  },
  {
    "Symbol": "BRCC",
    "Name": "BRC Inc. Class A Common Stock"
  },
  {
    "Symbol": "BRD",
    "Name": "Beard Energy Transition Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "BRDG",
    "Name": "Bridge Investment Group Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "BRDS",
    "Name": "Bird Global Inc. Class A Common Stock"
  },
  {
    "Symbol": "BREA",
    "Name": "Brera Holdings PLC Class B Ordinary Shares"
  },
  {
    "Symbol": "BREZ",
    "Name": "Breeze Holdings Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "BREZR",
    "Name": "Breeze Holdings Acquisition Corp. Right"
  },
  {
    "Symbol": "BREZW",
    "Name": "Breeze Holdings Acquisition Corp. Warrant"
  },
  {
    "Symbol": "BRFH",
    "Name": "Barfresh Food Group Inc. Common Stock"
  },
  {
    "Symbol": "BRFS",
    "Name": "BRF S.A."
  },
  {
    "Symbol": "BRID",
    "Name": "Bridgford Foods Corporation Common Stock"
  },
  {
    "Symbol": "BRIV",
    "Name": "B. Riley Principal 250 Merger Corp. Class A common stock"
  },
  {
    "Symbol": "BRIVW",
    "Name": "B. Riley Principal 250 Merger Corp. Warrant"
  },
  {
    "Symbol": "BRK/A",
    "Name": "Berkshire Hathaway Inc."
  },
  {
    "Symbol": "BRK/B",
    "Name": "Berkshire Hathaway Inc."
  },
  {
    "Symbol": "BRKH",
    "Name": "BurTech Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "BRKHU",
    "Name": "BurTech Acquisition Corp. Unit"
  },
  {
    "Symbol": "BRKHW",
    "Name": "BurTech Acquisition Corp. Warrants"
  },
  {
    "Symbol": "BRKL",
    "Name": "Brookline Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "BRKR",
    "Name": "Bruker Corporation Common Stock"
  },
  {
    "Symbol": "BRLI",
    "Name": "Brilliant Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "BRLIR",
    "Name": "Brilliant Acquisition Corporation Rights"
  },
  {
    "Symbol": "BRLIU",
    "Name": "Brilliant Acquisition Corporation Unit"
  },
  {
    "Symbol": "BRLIW",
    "Name": "Brilliant Acquisition Corporation Warrants"
  },
  {
    "Symbol": "BRLT",
    "Name": "Brilliant Earth Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "BRMK",
    "Name": "Broadmark Realty Capital Inc. Common Stock"
  },
  {
    "Symbol": "BRN",
    "Name": "Barnwell Industries Inc. Common Stock"
  },
  {
    "Symbol": "BRO",
    "Name": "Brown & Brown Inc. Common Stock"
  },
  {
    "Symbol": "BROG",
    "Name": "Brooge Energy Limited Ordinary Shares"
  },
  {
    "Symbol": "BROGW",
    "Name": "Brooge Holdings Limited Warrant expiring 12/20/2024"
  },
  {
    "Symbol": "BROS",
    "Name": "Dutch Bros Inc. Class A Common Stock"
  },
  {
    "Symbol": "BRP",
    "Name": "BRP Group Inc. (Insurance Company) Class A Common Stock"
  },
  {
    "Symbol": "BRQS",
    "Name": "Borqs Technologies Inc. Ordinary Shares"
  },
  {
    "Symbol": "BRSH",
    "Name": "Bruush Oral Care Inc. Common Stock"
  },
  {
    "Symbol": "BRSHW",
    "Name": "Bruush Oral Care Inc. Warrant"
  },
  {
    "Symbol": "BRSP",
    "Name": "BrightSpire Capital Inc. Class A Common Stock"
  },
  {
    "Symbol": "BRT",
    "Name": "BRT Apartments Corp. (MD) Common Stock"
  },
  {
    "Symbol": "BRTX",
    "Name": "BioRestorative Therapies Inc. Common Stock (NV)"
  },
  {
    "Symbol": "BRW",
    "Name": "Saba Capital Income & Opportunities Fund SBI"
  },
  {
    "Symbol": "BRX",
    "Name": "Brixmor Property Group Inc. Common Stock"
  },
  {
    "Symbol": "BRY",
    "Name": "Berry Corporation (bry) Common Stock"
  },
  {
    "Symbol": "BRZE",
    "Name": "Braze Inc. Class A Common Stock"
  },
  {
    "Symbol": "BSAC",
    "Name": "Banco Santander - Chile ADS"
  },
  {
    "Symbol": "BSAQ",
    "Name": "Black Spade Acquisition Co Class A Ordinary Shares"
  },
  {
    "Symbol": "BSBK",
    "Name": "Bogota Financial Corp. Common Stock"
  },
  {
    "Symbol": "BSBR",
    "Name": "Banco Santander Brasil SA American Depositary Shares each representing one unit"
  },
  {
    "Symbol": "BSET",
    "Name": "Bassett Furniture Industries Incorporated Common Stock"
  },
  {
    "Symbol": "BSFC",
    "Name": "Blue Star Foods Corp. Common Stock"
  },
  {
    "Symbol": "BSGM",
    "Name": "BioSig Technologies Inc. Common Stock"
  },
  {
    "Symbol": "BSIG",
    "Name": "BrightSphere Investment Group Inc. Common Stock"
  },
  {
    "Symbol": "BSL",
    "Name": "Blackstone Senior Floating Rate 2027 Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BSM",
    "Name": "Black Stone Minerals L.P. Common units representing limited partner interests"
  },
  {
    "Symbol": "BSMX",
    "Name": "Banco Santander Mexico S.A. Institucion de Banca Multiple Grupo Financiero Santander Mexico"
  },
  {
    "Symbol": "BSQR",
    "Name": "BSQUARE Corporation Common Stock"
  },
  {
    "Symbol": "BSRR",
    "Name": "Sierra Bancorp Common Stock"
  },
  {
    "Symbol": "BST",
    "Name": "BlackRock Science and Technology Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BSTZ",
    "Name": "BlackRock Science and Technology Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BSVN",
    "Name": "Bank7 Corp. Common stock"
  },
  {
    "Symbol": "BSX",
    "Name": "Boston Scientific Corporation Common Stock"
  },
  {
    "Symbol": "BSX^A",
    "Name": "Boston Scientific Corporation 5.50% Mandatory Convertible Preferred Stock Series A"
  },
  {
    "Symbol": "BSY",
    "Name": "Bentley Systems Incorporated Class B Common Stock"
  },
  {
    "Symbol": "BTA",
    "Name": "BlackRock Long-Term Municipal Advantage Trust BlackRock Long-Term Municipal Advantage Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BTAI",
    "Name": "BioXcel Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BTB",
    "Name": "Bit Brother Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "BTBD",
    "Name": "BT Brands Inc. Common Stock"
  },
  {
    "Symbol": "BTBT",
    "Name": "Bit Digital Inc. Ordinary Shares"
  },
  {
    "Symbol": "BTCM",
    "Name": "BIT Mining Limited ADS"
  },
  {
    "Symbol": "BTCS",
    "Name": "BTCS Inc. Common Stock"
  },
  {
    "Symbol": "BTCY",
    "Name": "Biotricity Inc. Common Stock"
  },
  {
    "Symbol": "BTDR",
    "Name": "Bitdeer Technologies Group Class A Ordinary Shares"
  },
  {
    "Symbol": "BTE",
    "Name": "Baytex Energy Corp Common Shares"
  },
  {
    "Symbol": "BTG",
    "Name": "B2Gold Corp Common shares (Canada)"
  },
  {
    "Symbol": "BTI",
    "Name": "British American Tobacco  Industries p.l.c. Common Stock ADR"
  },
  {
    "Symbol": "BTMD",
    "Name": "Biote Corp. Class A Common Stock"
  },
  {
    "Symbol": "BTMDW",
    "Name": "Biote Corp. Warrant"
  },
  {
    "Symbol": "BTO",
    "Name": "John Hancock Financial Opportunities Fund Common Stock"
  },
  {
    "Symbol": "BTOG",
    "Name": "Bit Origin Limited Ordinary Shares"
  },
  {
    "Symbol": "BTT",
    "Name": "BlackRock Municipal 2030 Target Term Trust"
  },
  {
    "Symbol": "BTTR",
    "Name": "Better Choice Company Inc. Common Stock"
  },
  {
    "Symbol": "BTTX",
    "Name": "Better Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "BTU",
    "Name": "Peabody Energy Corporation Common Stock"
  },
  {
    "Symbol": "BTWN",
    "Name": "Bridgetown Holdings Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "BTWNU",
    "Name": "Bridgetown Holdings Limited Units"
  },
  {
    "Symbol": "BTWNW",
    "Name": "Bridgetown Holdings Limited Warrants"
  },
  {
    "Symbol": "BTZ",
    "Name": "BlackRock Credit Allocation Income Trust"
  },
  {
    "Symbol": "BUD",
    "Name": "Anheuser-Busch Inbev SA Sponsored ADR (Belgium)"
  },
  {
    "Symbol": "BUI",
    "Name": "BlackRock Utility Infrastructure & Power Opportunities Trust"
  },
  {
    "Symbol": "BUR",
    "Name": "Burford Capital Limited Ordinary Shares"
  },
  {
    "Symbol": "BURL",
    "Name": "Burlington Stores Inc. Common Stock"
  },
  {
    "Symbol": "BURU",
    "Name": "Nuburu Inc. Common Stock"
  },
  {
    "Symbol": "BUSE",
    "Name": "First Busey Corporation Class A Common Stock"
  },
  {
    "Symbol": "BV",
    "Name": "BrightView Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BVH",
    "Name": "Bluegreen Vacations Holding Corporation Class A Common Stock"
  },
  {
    "Symbol": "BVN",
    "Name": "Buenaventura Mining Company Inc."
  },
  {
    "Symbol": "BVS",
    "Name": "Bioventus Inc. Class A Common Stock"
  },
  {
    "Symbol": "BVXV",
    "Name": "BiondVax Pharmaceuticals Ltd. American Depositary Shares"
  },
  {
    "Symbol": "BW",
    "Name": "Babcock & Wilcox Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "BW^A",
    "Name": "Babcock & Wilcox Enterprises Inc. 7.75% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "BWA",
    "Name": "BorgWarner Inc. Common Stock"
  },
  {
    "Symbol": "BWAC",
    "Name": "Better World Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "BWACW",
    "Name": "Better World Acquisition Corp. Warrants"
  },
  {
    "Symbol": "BWAQ",
    "Name": "Blue World Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "BWAY",
    "Name": "BrainsWay Ltd. American Depositary Shares"
  },
  {
    "Symbol": "BWB",
    "Name": "Bridgewater Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "BWBBP",
    "Name": "Bridgewater Bancshares Inc. Depositary Shares Each Representing a 1/100th Interest in a Share of 5.875% Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "BWC",
    "Name": "Blue Whale Acquisition Corp I Class A Ordinary Shares"
  },
  {
    "Symbol": "BWCAW",
    "Name": "Blue Whale Acquisition Corp I Warrant"
  },
  {
    "Symbol": "BWEN",
    "Name": "Broadwind Inc. Common Stock"
  },
  {
    "Symbol": "BWFG",
    "Name": "Bankwell Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "BWG",
    "Name": "BrandywineGLOBAL Global Income Opportunities Fund Inc."
  },
  {
    "Symbol": "BWMN",
    "Name": "Bowman Consulting Group Ltd. Common Stock"
  },
  {
    "Symbol": "BWMX",
    "Name": "Betterware de Mexico S.A.P.I. de C.V. Ordinary Shares"
  },
  {
    "Symbol": "BWNB",
    "Name": "Babcock & Wilcox Enterprises Inc. 6.50% Senior Notes due 2026"
  },
  {
    "Symbol": "BWSN",
    "Name": "Babcock & Wilcox Enterprises Inc. 8.125% Senior Notes due 2026"
  },
  {
    "Symbol": "BWV",
    "Name": "Blue Water Biotech Inc. Common Stock"
  },
  {
    "Symbol": "BWXT",
    "Name": "BWX Technologies Inc. Common Stock"
  },
  {
    "Symbol": "BX",
    "Name": "Blackstone Inc. Common Stock"
  },
  {
    "Symbol": "BXC",
    "Name": "Bluelinx Holdings Inc. Common Stock"
  },
  {
    "Symbol": "BXMT",
    "Name": "Blackstone Mortgage Trust Inc. Common Stock"
  },
  {
    "Symbol": "BXMX",
    "Name": "Nuveen S&P 500 Buy-Write Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BXP",
    "Name": "Boston Properties Inc. Common Stock"
  },
  {
    "Symbol": "BXRX",
    "Name": "Baudax Bio Inc. Common Stock"
  },
  {
    "Symbol": "BXSL",
    "Name": "Blackstone Secured Lending Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BY",
    "Name": "Byline Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "BYD",
    "Name": "Boyd Gaming Corporation Common Stock"
  },
  {
    "Symbol": "BYFC",
    "Name": "Broadway Financial Corporation Common Stock"
  },
  {
    "Symbol": "BYM",
    "Name": "Blackrock Municipal Income Quality Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "BYN",
    "Name": "Banyan Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "BYND",
    "Name": "Beyond Meat Inc. Common Stock"
  },
  {
    "Symbol": "BYNO",
    "Name": "byNordic Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "BYNOU",
    "Name": "byNordic Acquisition Corporation Units"
  },
  {
    "Symbol": "BYNOW",
    "Name": "byNordic Acquisition Corporation Warrant"
  },
  {
    "Symbol": "BYRN",
    "Name": "Byrna Technologies Inc. Common Stock"
  },
  {
    "Symbol": "BYSI",
    "Name": "BeyondSpring Inc. Ordinary Shares"
  },
  {
    "Symbol": "BYTS",
    "Name": "BYTE Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "BYTSU",
    "Name": "BYTE Acquisition Corp. Units"
  },
  {
    "Symbol": "BYTSW",
    "Name": "BYTE Acquisition Corp. Warrants"
  },
  {
    "Symbol": "BZ",
    "Name": "KANZHUN LIMITED American Depository Shares"
  },
  {
    "Symbol": "BZFD",
    "Name": "BuzzFeed Inc. Class A Common Stock"
  },
  {
    "Symbol": "BZFDW",
    "Name": "BuzzFeed Inc. Warrant"
  },
  {
    "Symbol": "BZH",
    "Name": "Beazer Homes USA Inc. Common Stock"
  },
  {
    "Symbol": "BZUN",
    "Name": "Baozun Inc. American Depositary Shares"
  },
  {
    "Symbol": "C",
    "Name": "Citigroup Inc. Common Stock"
  },
  {
    "Symbol": "C^J",
    "Name": "Citigroup Inc. Dep Shs Repstg 1/1000 Pfd Ser J Fixed/Fltg"
  },
  {
    "Symbol": "C^K",
    "Name": "Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser K"
  },
  {
    "Symbol": "C^N",
    "Name": "Citigroup Capital XIII 7.875% Fixed rate Floating Rate trust Preferred Securities (TruPS)"
  },
  {
    "Symbol": "CAAP",
    "Name": "Corporacion America Airports SA Common Shares"
  },
  {
    "Symbol": "CAAS",
    "Name": "China Automotive Systems Inc. Common Stock"
  },
  {
    "Symbol": "CABA",
    "Name": "Cabaletta Bio Inc. Common Stock"
  },
  {
    "Symbol": "CABO",
    "Name": "Cable One Inc. Common Stock"
  },
  {
    "Symbol": "CAC",
    "Name": "Camden National Corporation Common Stock"
  },
  {
    "Symbol": "CACC",
    "Name": "Credit Acceptance Corporation Common Stock"
  },
  {
    "Symbol": "CACI",
    "Name": "CACI International Inc. Class A Common Stock"
  },
  {
    "Symbol": "CACO",
    "Name": "Caravelle International Group Ordinary Shares"
  },
  {
    "Symbol": "CADE",
    "Name": "Cadence Bank Common Stock"
  },
  {
    "Symbol": "CADE^A",
    "Name": "Cadence Bank 5.50% Series A"
  },
  {
    "Symbol": "CADL",
    "Name": "Candel Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CAE",
    "Name": "CAE Inc. Ordinary Shares"
  },
  {
    "Symbol": "CAF",
    "Name": "Morgan Stanley China A Share Fund Inc. Common Stock"
  },
  {
    "Symbol": "CAG",
    "Name": "ConAgra Brands Inc. Common Stock"
  },
  {
    "Symbol": "CAH",
    "Name": "Cardinal Health Inc. Common Stock"
  },
  {
    "Symbol": "CAKE",
    "Name": "Cheesecake Factory Incorporated (The) Common Stock"
  },
  {
    "Symbol": "CAL",
    "Name": "Caleres Inc. Common Stock"
  },
  {
    "Symbol": "CALB",
    "Name": "California BanCorp Common Stock"
  },
  {
    "Symbol": "CALM",
    "Name": "Cal-Maine Foods Inc. Common Stock"
  },
  {
    "Symbol": "CALT",
    "Name": "Calliditas Therapeutics AB American Depositary Shares"
  },
  {
    "Symbol": "CALX",
    "Name": "Calix Inc Common Stock"
  },
  {
    "Symbol": "CAMP",
    "Name": "CalAmp Corp. Common Stock"
  },
  {
    "Symbol": "CAMT",
    "Name": "Camtek Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CAN",
    "Name": "Canaan Inc. American Depositary Shares"
  },
  {
    "Symbol": "CANB",
    "Name": "Can B Corp."
  },
  {
    "Symbol": "CANF",
    "Name": "Can-Fite Biopharma Ltd Sponsored ADR (Israel)"
  },
  {
    "Symbol": "CANG",
    "Name": "Cango Inc. American Depositary Shares  each representing two (2) Class A Ordinary Shares"
  },
  {
    "Symbol": "CANO",
    "Name": "Cano Health Inc. Class A Common Stock"
  },
  {
    "Symbol": "CAPL",
    "Name": "CrossAmerica Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "CAPR",
    "Name": "Capricor Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CAR",
    "Name": "Avis Budget Group Inc. Common Stock"
  },
  {
    "Symbol": "CARA",
    "Name": "Cara Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CARE",
    "Name": "Carter Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "CARG",
    "Name": "CarGurus Inc. Class A Common Stock"
  },
  {
    "Symbol": "CARM",
    "Name": "Carisma Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CARR",
    "Name": "Carrier Global Corporation Common Stock"
  },
  {
    "Symbol": "CARS",
    "Name": "Cars.com Inc. Common Stock"
  },
  {
    "Symbol": "CARV",
    "Name": "Carver Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CASA",
    "Name": "Casa Systems Inc. Common Stock"
  },
  {
    "Symbol": "CASH",
    "Name": "Pathward Financial Inc. Common Stock"
  },
  {
    "Symbol": "CASI",
    "Name": "CASI Pharmaceuticals Inc. Ordinary Shares"
  },
  {
    "Symbol": "CASS",
    "Name": "Cass Information Systems Inc Common Stock"
  },
  {
    "Symbol": "CASY",
    "Name": "Casey's General Stores Inc. Common Stock"
  },
  {
    "Symbol": "CAT",
    "Name": "Caterpillar Inc. Common Stock"
  },
  {
    "Symbol": "CATC",
    "Name": "Cambridge Bancorp Common Stock"
  },
  {
    "Symbol": "CATO",
    "Name": "Cato Corporation (The) Class A Common Stock"
  },
  {
    "Symbol": "CATX",
    "Name": "Perspective Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CATY",
    "Name": "Cathay General Bancorp Common Stock"
  },
  {
    "Symbol": "CB",
    "Name": "Chubb Limited  Common Stock"
  },
  {
    "Symbol": "CBAN",
    "Name": "Colony Bankcorp Inc. Common Stock"
  },
  {
    "Symbol": "CBAT",
    "Name": "CBAK Energy Technology Inc. Common Stock"
  },
  {
    "Symbol": "CBAY",
    "Name": "CymaBay Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CBD",
    "Name": "Companhia Brasileira de Distribuicao American Depsitary Shares; each representing one Common Share"
  },
  {
    "Symbol": "CBFV",
    "Name": "CB Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "CBH",
    "Name": "Virtus Convertible & Income 2024 Target Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "CBIO",
    "Name": "Catalyst Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "CBL",
    "Name": "CBL & Associates Properties Inc. Common Stock"
  },
  {
    "Symbol": "CBNK",
    "Name": "Capital Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CBOE",
    "Name": "Cboe Global Markets Inc. Common Stock"
  },
  {
    "Symbol": "CBRE",
    "Name": "CBRE Group Inc Common Stock Class A"
  },
  {
    "Symbol": "CBRG",
    "Name": "Chain Bridge I Class A Ordinary Shares"
  },
  {
    "Symbol": "CBRGU",
    "Name": "Chain Bridge I Units"
  },
  {
    "Symbol": "CBRGW",
    "Name": "Chain Bridge I Warrants"
  },
  {
    "Symbol": "CBRL",
    "Name": "Cracker Barrel Old Country Store Inc Common Stock"
  },
  {
    "Symbol": "CBSH",
    "Name": "Commerce Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "CBT",
    "Name": "Cabot Corporation Common Stock"
  },
  {
    "Symbol": "CBU",
    "Name": "Community Bank System Inc. Common Stock"
  },
  {
    "Symbol": "CBZ",
    "Name": "CBIZ Inc. Common Stock"
  },
  {
    "Symbol": "CC",
    "Name": "Chemours Company (The) Common Stock"
  },
  {
    "Symbol": "CCAI",
    "Name": "Cascadia Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CCAIW",
    "Name": "Cascadia Acquisition Corp. Warrant"
  },
  {
    "Symbol": "CCAP",
    "Name": "Crescent Capital BDC Inc. Common stock"
  },
  {
    "Symbol": "CCB",
    "Name": "Coastal Financial Corporation Common Stock"
  },
  {
    "Symbol": "CCBG",
    "Name": "Capital City Bank Group Common Stock"
  },
  {
    "Symbol": "CCCC",
    "Name": "C4 Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CCCS",
    "Name": "CCC Intelligent Solutions Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CCD",
    "Name": "Calamos Dynamic Convertible & Income Fund Common Stock"
  },
  {
    "Symbol": "CCEL",
    "Name": "Cryo-Cell International Inc. Common Stock"
  },
  {
    "Symbol": "CCEP",
    "Name": "Coca-Cola Europacific Partners plc Ordinary Shares"
  },
  {
    "Symbol": "CCF",
    "Name": "Chase Corporation Common Stock"
  },
  {
    "Symbol": "CCI",
    "Name": "Crown Castle Inc. Common Stock"
  },
  {
    "Symbol": "CCJ",
    "Name": "Cameco Corporation Common Stock"
  },
  {
    "Symbol": "CCK",
    "Name": "Crown Holdings Inc."
  },
  {
    "Symbol": "CCL",
    "Name": "Carnival Corporation Common Stock"
  },
  {
    "Symbol": "CCLD",
    "Name": "CareCloud Inc. Common Stock"
  },
  {
    "Symbol": "CCLDO",
    "Name": "CareCloud Inc. 8.75% Series B Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "CCLDP",
    "Name": "CareCloud Inc. 11% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "CCLP",
    "Name": "CSI Compressco LP Common Units"
  },
  {
    "Symbol": "CCM",
    "Name": "Concord Medical Services Holdings Limited ADS (Each represents three ordinary shares)"
  },
  {
    "Symbol": "CCNE",
    "Name": "CNB Financial Corporation Common Stock"
  },
  {
    "Symbol": "CCNEP",
    "Name": "CNB Financial Corporation Depositary Shares each representing a 1/40th ownership interest in a share of 7.125% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "CCO",
    "Name": "Clear Channel Outdoor Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CCOI",
    "Name": "Cogent Communications Holdings Inc."
  },
  {
    "Symbol": "CCRD",
    "Name": "CoreCard Corporation Common Stock"
  },
  {
    "Symbol": "CCRN",
    "Name": "Cross Country Healthcare Inc. Common Stock $0.0001 Par Value"
  },
  {
    "Symbol": "CCS",
    "Name": "Century Communities Inc. Common Stock"
  },
  {
    "Symbol": "CCSI",
    "Name": "Consensus Cloud Solutions Inc. Common Stock"
  },
  {
    "Symbol": "CCTS",
    "Name": "Cactus Acquisition Corp. 1 Limited Class A Ordinary Share"
  },
  {
    "Symbol": "CCTSW",
    "Name": "Cactus Acquisition Corp. 1 Limited Warrant"
  },
  {
    "Symbol": "CCU",
    "Name": "Compania Cervecerias Unidas S.A. Common Stock"
  },
  {
    "Symbol": "CCV",
    "Name": "Churchill Capital Corp V Class A Common Stock"
  },
  {
    "Symbol": "CCVI",
    "Name": "Churchill Capital Corp VI Class A Common Stock"
  },
  {
    "Symbol": "CCZ",
    "Name": "Comcast Holdings ZONES"
  },
  {
    "Symbol": "CD",
    "Name": "Chindata Group Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "CDAQ",
    "Name": "Compass Digital Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "CDAQU",
    "Name": "Compass Digital Acquisition Corp. Unit"
  },
  {
    "Symbol": "CDAY",
    "Name": "Ceridian HCM Holding Inc. Common Stock"
  },
  {
    "Symbol": "CDE",
    "Name": "Coeur Mining Inc. Common Stock"
  },
  {
    "Symbol": "CDIO",
    "Name": "Cardio Diagnostics Holdings Inc. Common stock"
  },
  {
    "Symbol": "CDIOW",
    "Name": "Cardio Diagnostics Holdings Inc. Warrant"
  },
  {
    "Symbol": "CDLX",
    "Name": "Cardlytics Inc. Common Stock"
  },
  {
    "Symbol": "CDMO",
    "Name": "Avid Bioservices Inc. Common Stock"
  },
  {
    "Symbol": "CDNA",
    "Name": "CareDx Inc. Common Stock"
  },
  {
    "Symbol": "CDNS",
    "Name": "Cadence Design Systems Inc. Common Stock"
  },
  {
    "Symbol": "CDR^B",
    "Name": "Cedar Realty Trust Inc. 7.25% Series B Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CDR^C",
    "Name": "Cedar Realty Trust Inc. 6.50% Series C Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CDRE",
    "Name": "Cadre Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CDRO",
    "Name": "Codere Online Luxembourg S.A. Ordinary Shares"
  },
  {
    "Symbol": "CDROW",
    "Name": "Codere Online Luxembourg S.A. Warrants"
  },
  {
    "Symbol": "CDTX",
    "Name": "Cidara Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CDW",
    "Name": "CDW Corporation Common Stock"
  },
  {
    "Symbol": "CDXC",
    "Name": "ChromaDex Corporation Common Stock"
  },
  {
    "Symbol": "CDXS",
    "Name": "Codexis Inc. Common Stock"
  },
  {
    "Symbol": "CDZI",
    "Name": "CADIZ Inc. Common Stock"
  },
  {
    "Symbol": "CDZIP",
    "Name": "Cadiz Inc. Depositary Shares"
  },
  {
    "Symbol": "CE",
    "Name": "Celanese Corporation Celanese Corporation Common Stock"
  },
  {
    "Symbol": "CEAD",
    "Name": "CEA Industries Inc. Common Stock"
  },
  {
    "Symbol": "CEADW",
    "Name": "CEA Industries Inc. Warrant"
  },
  {
    "Symbol": "CECO",
    "Name": "CECO Environmental Corp. Common Stock"
  },
  {
    "Symbol": "CEE",
    "Name": "The Central and Eastern Europe Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "CEG",
    "Name": "Constellation Energy Corporation Common Stock"
  },
  {
    "Symbol": "CEI",
    "Name": "Camber Energy Inc. Common Stock"
  },
  {
    "Symbol": "CEIX",
    "Name": "CONSOL Energy Inc. Common Stock"
  },
  {
    "Symbol": "CELC",
    "Name": "Celcuity Inc. Common Stock"
  },
  {
    "Symbol": "CELH",
    "Name": "Celsius Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CELL",
    "Name": "PhenomeX Inc. Common Stock"
  },
  {
    "Symbol": "CELU",
    "Name": "Celularity Inc. Class A Common Stock"
  },
  {
    "Symbol": "CELUW",
    "Name": "Celularity Inc. Warrant"
  },
  {
    "Symbol": "CELZ",
    "Name": "Creative Medical Technology Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CEM",
    "Name": "ClearBridge MLP and Midstream Fund Inc. Common Stock"
  },
  {
    "Symbol": "CEN",
    "Name": "Center Coast Brookfield MLP & Energy Infrastructure Fund"
  },
  {
    "Symbol": "CENN",
    "Name": "Cenntro Electric Group Limited Ordinary Shares"
  },
  {
    "Symbol": "CENT",
    "Name": "Central Garden & Pet Company Common Stock"
  },
  {
    "Symbol": "CENTA",
    "Name": "Central Garden & Pet Company Class A Common Stock Nonvoting"
  },
  {
    "Symbol": "CENX",
    "Name": "Century Aluminum Company Common Stock"
  },
  {
    "Symbol": "CEPU",
    "Name": "Central Puerto S.A. American Depositary Shares (each represents ten Common Shares)"
  },
  {
    "Symbol": "CEQP",
    "Name": "Crestwood Equity Partners LP"
  },
  {
    "Symbol": "CEQP^",
    "Name": "Crestwood Equity Partners LP Preferred Units representing limited partner interests"
  },
  {
    "Symbol": "CERE",
    "Name": "Cerevel Therapeutics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CERS",
    "Name": "Cerus Corporation Common Stock"
  },
  {
    "Symbol": "CERT",
    "Name": "Certara Inc. Common Stock"
  },
  {
    "Symbol": "CET",
    "Name": "Central Securities Corporation Common Stock"
  },
  {
    "Symbol": "CETU",
    "Name": "Cetus Capital Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CETUU",
    "Name": "Cetus Capital Acquisition Corp. Unit"
  },
  {
    "Symbol": "CETUW",
    "Name": "Cetus Capital Acquisition Corp. Warrant"
  },
  {
    "Symbol": "CETX",
    "Name": "Cemtrex Inc. Common Stock"
  },
  {
    "Symbol": "CETXP",
    "Name": "Cemtrex Inc. Series 1 Preferred Stock"
  },
  {
    "Symbol": "CETY",
    "Name": "Clean Energy Technologies Inc. Common Stock"
  },
  {
    "Symbol": "CEV",
    "Name": "Eaton Vance California Municipal Income Trust Shares of Beneficial Interest"
  },
  {
    "Symbol": "CEVA",
    "Name": "CEVA Inc. Common Stock"
  },
  {
    "Symbol": "CF",
    "Name": "CF Industries Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CFB",
    "Name": "CrossFirst Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "CFBK",
    "Name": "CF Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "CFFE",
    "Name": "CF Acquisition Corp. VIII Class A Common Stock"
  },
  {
    "Symbol": "CFFEW",
    "Name": "CF Acquisition Corp. VIII Warrant"
  },
  {
    "Symbol": "CFFI",
    "Name": "C&F Financial Corporation Common Stock"
  },
  {
    "Symbol": "CFFN",
    "Name": "Capitol Federal Financial Inc. Common Stock"
  },
  {
    "Symbol": "CFFS",
    "Name": "CF Acquisition Corp. VII Class A Common Stock"
  },
  {
    "Symbol": "CFFSW",
    "Name": "CF Acquisition Corp. VII Warrant"
  },
  {
    "Symbol": "CFG",
    "Name": "Citizens Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "CFG^D",
    "Name": "Citizens Financial Group Inc. Depositary Shares each representing a 1/40th Interest in a Share of 6.350% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D"
  },
  {
    "Symbol": "CFG^E",
    "Name": "Citizens Financial Group Inc. Depositary Shares Each Representing 1/40th Interest in a Share of 5.000% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "CFIV",
    "Name": "CF Acquisition Corp. IV Class A common stock"
  },
  {
    "Symbol": "CFIVW",
    "Name": "CF Acquisition Corp. IV Warrant"
  },
  {
    "Symbol": "CFLT",
    "Name": "Confluent Inc. Class A Common Stock"
  },
  {
    "Symbol": "CFMS",
    "Name": "Conformis Inc. Common Stock"
  },
  {
    "Symbol": "CFR",
    "Name": "Cullen/Frost Bankers Inc. Common Stock"
  },
  {
    "Symbol": "CFR^B",
    "Name": "Cullen/Frost Bankers Inc. Depositary Shares each representing a 1/40th ownership interest in a share of 4.450% non-cumulative perpetual preferred stock Series B"
  },
  {
    "Symbol": "CFRX",
    "Name": "ContraFect Corporation Common Stock"
  },
  {
    "Symbol": "CFSB",
    "Name": "CFSB Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CG",
    "Name": "The Carlyle Group Inc. Common Stock"
  },
  {
    "Symbol": "CGA",
    "Name": "China Green Agriculture Inc. Common Stock"
  },
  {
    "Symbol": "CGABL",
    "Name": "The Carlyle Group Inc. 4.625% Subordinated Notes due 2061"
  },
  {
    "Symbol": "CGAU",
    "Name": "Centerra Gold Inc. Common Shares"
  },
  {
    "Symbol": "CGBD",
    "Name": "Carlyle Secured Lending Inc. Common Stock"
  },
  {
    "Symbol": "CGC",
    "Name": "Canopy Growth Corporation Common Shares"
  },
  {
    "Symbol": "CGEM",
    "Name": "Cullinan Oncology Inc. Common Stock"
  },
  {
    "Symbol": "CGEN",
    "Name": "Compugen Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CGNT",
    "Name": "Cognyte Software Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CGNX",
    "Name": "Cognex Corporation Common Stock"
  },
  {
    "Symbol": "CGO",
    "Name": "Calamos Global Total Return Fund Common Stock"
  },
  {
    "Symbol": "CGRN",
    "Name": "Capstone Green Energy Corporation Common Stock"
  },
  {
    "Symbol": "CGTX",
    "Name": "Cognition Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CHAA",
    "Name": "Catcha Investment Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "CHCI",
    "Name": "Comstock Holding Companies Inc. Class A Common Stock"
  },
  {
    "Symbol": "CHCO",
    "Name": "City Holding Company Common Stock"
  },
  {
    "Symbol": "CHCT",
    "Name": "Community Healthcare Trust Incorporated Common Stock"
  },
  {
    "Symbol": "CHD",
    "Name": "Church & Dwight Company Inc. Common Stock"
  },
  {
    "Symbol": "CHDN",
    "Name": "Churchill Downs Incorporated Common Stock"
  },
  {
    "Symbol": "CHE",
    "Name": "Chemed Corp"
  },
  {
    "Symbol": "CHEAW",
    "Name": "Chenghe Acquisition Co. Warrant"
  },
  {
    "Symbol": "CHEF",
    "Name": "The Chefs' Warehouse Inc. Common Stock"
  },
  {
    "Symbol": "CHEK",
    "Name": "Check-Cap Ltd. Ordinary Share"
  },
  {
    "Symbol": "CHGG",
    "Name": "Chegg Inc. Common Stock"
  },
  {
    "Symbol": "CHH",
    "Name": "Choice Hotels International Inc. Common Stock"
  },
  {
    "Symbol": "CHI",
    "Name": "Calamos Convertible Opportunities and Income Fund Common Stock"
  },
  {
    "Symbol": "CHK",
    "Name": "Chesapeake Energy Corporation Common Stock"
  },
  {
    "Symbol": "CHKEL",
    "Name": "Chesapeake Energy Corporation Class C Warrants"
  },
  {
    "Symbol": "CHKEW",
    "Name": "Chesapeake Energy Corporation Class A Warrants"
  },
  {
    "Symbol": "CHKEZ",
    "Name": "Chesapeake Energy Corporation Class B Warrants"
  },
  {
    "Symbol": "CHKP",
    "Name": "Check Point Software Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CHMG",
    "Name": "Chemung Financial Corp Common Stock"
  },
  {
    "Symbol": "CHMI",
    "Name": "Cherry Hill Mortgage Investment Corporation Common Stock"
  },
  {
    "Symbol": "CHMI^A",
    "Name": "Cherry Hill Mortgage Investment Corporation 8.20% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CHMI^B",
    "Name": "Cherry Hill Mortgage Investment Corporation 8.250% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CHN",
    "Name": "China Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "CHNR",
    "Name": "China Natural Resources Inc. Common Stock"
  },
  {
    "Symbol": "CHPT",
    "Name": "ChargePoint Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CHRD",
    "Name": "Chord Energy Corporation Common Stock"
  },
  {
    "Symbol": "CHRS",
    "Name": "Coherus BioSciences Inc. Common Stock"
  },
  {
    "Symbol": "CHRW",
    "Name": "C.H. Robinson Worldwide Inc. Common Stock"
  },
  {
    "Symbol": "CHS",
    "Name": "Chico's FAS Inc. Common Stock"
  },
  {
    "Symbol": "CHSCL",
    "Name": "CHS Inc Class B Cumulative Redeemable Preferred Stock Series 4"
  },
  {
    "Symbol": "CHSCM",
    "Name": "CHS Inc Class B Reset Rate Cumulative Redeemable Preferred Stock Series 3"
  },
  {
    "Symbol": "CHSCN",
    "Name": "CHS Inc Preferred Class B Series 2 Reset Rate"
  },
  {
    "Symbol": "CHSCO",
    "Name": "CHS Inc. Class B Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CHSCP",
    "Name": "CHS Inc. 8%  Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CHSN",
    "Name": "Chanson International Holding Class A Ordinary Shares"
  },
  {
    "Symbol": "CHT",
    "Name": "Chunghwa Telecom Co. Ltd."
  },
  {
    "Symbol": "CHTR",
    "Name": "Charter Communications Inc. Class A Common Stock New"
  },
  {
    "Symbol": "CHUY",
    "Name": "Chuy's Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CHW",
    "Name": "Calamos Global Dynamic Income Fund Common Stock"
  },
  {
    "Symbol": "CHWY",
    "Name": "Chewy Inc. Class A Common Stock"
  },
  {
    "Symbol": "CHX",
    "Name": "ChampionX Corporation Common Stock"
  },
  {
    "Symbol": "CHY",
    "Name": "Calamos Convertible and High Income Fund Common Stock"
  },
  {
    "Symbol": "CI",
    "Name": "The Cigna Group Common Stock"
  },
  {
    "Symbol": "CIA",
    "Name": "Citizens Inc. Class A Common Stock ($1.00 Par)"
  },
  {
    "Symbol": "CIB",
    "Name": "BanColombia S.A. Common Stock"
  },
  {
    "Symbol": "CIDM",
    "Name": "Cinedigm Corp. Class A Common Stock"
  },
  {
    "Symbol": "CIEN",
    "Name": "Ciena Corporation Common Stock"
  },
  {
    "Symbol": "CIF",
    "Name": "MFS Intermediate High Income Fund Common Stock"
  },
  {
    "Symbol": "CIFR",
    "Name": "Cipher Mining Inc. Common Stock"
  },
  {
    "Symbol": "CIFRW",
    "Name": "Cipher Mining Inc. Warrant"
  },
  {
    "Symbol": "CIG",
    "Name": "Comp En De Mn Cemig ADS American Depositary Shares"
  },
  {
    "Symbol": "CIGI",
    "Name": "Colliers International Group Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "CII",
    "Name": "Blackrock Capital and Income Fund Inc."
  },
  {
    "Symbol": "CIK",
    "Name": "Credit Suisse Asset Management Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "CIM",
    "Name": "Chimera Investment Corporation Common Stock"
  },
  {
    "Symbol": "CIM^A",
    "Name": "Chimera Investment Corporation 8.00% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CIM^B",
    "Name": "Chimera Investment Corporation 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CIM^C",
    "Name": "Chimera Investment Corporation 7.75% Series C Fixed-to-Floating Rate  Cumulative Redeemable  Preferred Stock"
  },
  {
    "Symbol": "CIM^D",
    "Name": "Chimera Investment Corporation 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CINF",
    "Name": "Cincinnati Financial Corporation Common Stock"
  },
  {
    "Symbol": "CING",
    "Name": "Cingulate Inc. Common Stock"
  },
  {
    "Symbol": "CINGW",
    "Name": "Cingulate Inc. Warrants"
  },
  {
    "Symbol": "CINT",
    "Name": "CI&T Inc Class A Common Shares"
  },
  {
    "Symbol": "CIO",
    "Name": "City Office REIT Inc. Common Stock"
  },
  {
    "Symbol": "CIO^A",
    "Name": "City Office REIT Inc. 6.625% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CION",
    "Name": "CION Investment Corporation Common Stock"
  },
  {
    "Symbol": "CIR",
    "Name": "CIRCOR International Inc. Common Stock"
  },
  {
    "Symbol": "CISO",
    "Name": "Cerberus Cyber Sentinel Corporation Common Stock"
  },
  {
    "Symbol": "CITE",
    "Name": "Cartica Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "CIVB",
    "Name": "Civista Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "CIVI",
    "Name": "Civitas Resources Inc. Common Stock"
  },
  {
    "Symbol": "CIX",
    "Name": "CompX International Inc. Common Stock"
  },
  {
    "Symbol": "CIZN",
    "Name": "Citizens Holding Company Common Stock"
  },
  {
    "Symbol": "CJJD",
    "Name": "China Jo-Jo Drugstores Inc. (Cayman Islands) Ordinary Shares"
  },
  {
    "Symbol": "CKPT",
    "Name": "Checkpoint Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CKX",
    "Name": "CKX Lands Inc. Common Stock"
  },
  {
    "Symbol": "CL",
    "Name": "Colgate-Palmolive Company Common Stock"
  },
  {
    "Symbol": "CLAR",
    "Name": "Clarus Corporation Common Stock"
  },
  {
    "Symbol": "CLAY",
    "Name": "Chavant Capital Acquisition Corp. Ordinary Shares"
  },
  {
    "Symbol": "CLAYU",
    "Name": "Chavant Capital Acquisition Corp. Unit"
  },
  {
    "Symbol": "CLAYW",
    "Name": "Chavant Capital Acquisition Corp. Warrants"
  },
  {
    "Symbol": "CLB",
    "Name": "Core Laboratories Inc. Common Stock"
  },
  {
    "Symbol": "CLBK",
    "Name": "Columbia Financial Inc. Common Stock"
  },
  {
    "Symbol": "CLBR",
    "Name": "Colombier Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CLBT",
    "Name": "Cellebrite DI Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CLBTW",
    "Name": "Cellebrite DI Ltd. Warrants"
  },
  {
    "Symbol": "CLCO",
    "Name": "Cool Company Ltd. Common Shares"
  },
  {
    "Symbol": "CLDT",
    "Name": "Chatham Lodging Trust (REIT) Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "CLDT^A",
    "Name": "Chatham Lodging Trust (REIT) 6.625% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "CLDX",
    "Name": "Celldex Therapeutics Inc."
  },
  {
    "Symbol": "CLEU",
    "Name": "China Liberal Education Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "CLF",
    "Name": "Cleveland-Cliffs Inc. Common Stock"
  },
  {
    "Symbol": "CLFD",
    "Name": "Clearfield Inc. Common Stock"
  },
  {
    "Symbol": "CLGN",
    "Name": "CollPlant Biotechnologies Ltd Ordinary Shares"
  },
  {
    "Symbol": "CLH",
    "Name": "Clean Harbors Inc. Common Stock"
  },
  {
    "Symbol": "CLIN",
    "Name": "Clean Earth Acquisitions Corp. Class A Common Stock"
  },
  {
    "Symbol": "CLINR",
    "Name": "Clean Earth Acquisitions Corp. Right"
  },
  {
    "Symbol": "CLINU",
    "Name": "Clean Earth Acquisitions Corp. Unit"
  },
  {
    "Symbol": "CLINW",
    "Name": "Clean Earth Acquisitions Corp. Warrant"
  },
  {
    "Symbol": "CLIR",
    "Name": "ClearSign Technologies Corporation Common Stock"
  },
  {
    "Symbol": "CLLS",
    "Name": "Cellectis S.A. American Depositary Shares"
  },
  {
    "Symbol": "CLM",
    "Name": "Cornerstone Strategic Value Fund Inc. New Common Stock"
  },
  {
    "Symbol": "CLMB",
    "Name": "Climb Global Solutions Inc. Common Stock"
  },
  {
    "Symbol": "CLMT",
    "Name": "Calumet Specialty Products Partners L.P. Common Units"
  },
  {
    "Symbol": "CLNE",
    "Name": "Clean Energy Fuels Corp. Common Stock"
  },
  {
    "Symbol": "CLNN",
    "Name": "Clene Inc. Common Stock"
  },
  {
    "Symbol": "CLNNW",
    "Name": "Clene Inc. Warrant"
  },
  {
    "Symbol": "CLOE",
    "Name": "Clover Leaf Capital Corp. Class A Common Stock"
  },
  {
    "Symbol": "CLOEU",
    "Name": "Clover Leaf Capital Corp. Unit"
  },
  {
    "Symbol": "CLOV",
    "Name": "Clover Health Investments Corp. Class A Common Stock"
  },
  {
    "Symbol": "CLPR",
    "Name": "Clipper Realty Inc. Common Stock"
  },
  {
    "Symbol": "CLPS",
    "Name": "CLPS Incorporation Common Stock"
  },
  {
    "Symbol": "CLPT",
    "Name": "ClearPoint Neuro Inc. Common Stock"
  },
  {
    "Symbol": "CLRB",
    "Name": "Cellectar Biosciences Inc.  Common Stock"
  },
  {
    "Symbol": "CLRC",
    "Name": "ClimateRock Class A Ordinary Shares"
  },
  {
    "Symbol": "CLRCR",
    "Name": "ClimateRock Right"
  },
  {
    "Symbol": "CLRCU",
    "Name": "ClimateRock Unit"
  },
  {
    "Symbol": "CLRO",
    "Name": "ClearOne Inc. (DE) Common Stock"
  },
  {
    "Symbol": "CLS",
    "Name": "Celestica Inc. Common Stock"
  },
  {
    "Symbol": "CLSD",
    "Name": "Clearside Biomedical Inc. Common Stock"
  },
  {
    "Symbol": "CLSK",
    "Name": "CleanSpark Inc. Common Stock"
  },
  {
    "Symbol": "CLST",
    "Name": "Catalyst Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CLVR",
    "Name": "Clever Leaves Holdings Inc. Common Shares"
  },
  {
    "Symbol": "CLVRW",
    "Name": "Clever Leaves Holdings Inc. Warrant"
  },
  {
    "Symbol": "CLVT",
    "Name": "Clarivate Plc Ordinary Shares"
  },
  {
    "Symbol": "CLVT^A",
    "Name": "Clarivate Plc 5.25% Series A Mandatory Convertible Preferred Shares"
  },
  {
    "Symbol": "CLW",
    "Name": "Clearwater Paper Corporation Common Stock"
  },
  {
    "Symbol": "CLWT",
    "Name": "Euro Tech Holdings Company Limited Common Stock"
  },
  {
    "Symbol": "CLX",
    "Name": "Clorox Company (The) Common Stock"
  },
  {
    "Symbol": "CLXT",
    "Name": "Calyxt Inc. Common Stock"
  },
  {
    "Symbol": "CM",
    "Name": "Canadian Imperial Bank of Commerce Common Stock"
  },
  {
    "Symbol": "CMA",
    "Name": "Comerica Incorporated Common Stock"
  },
  {
    "Symbol": "CMAX",
    "Name": "CareMax Inc. Class A Common Stock"
  },
  {
    "Symbol": "CMAXW",
    "Name": "CareMax Inc. Warrant"
  },
  {
    "Symbol": "CMBM",
    "Name": "Cambium Networks Corporation Ordinary Shares"
  },
  {
    "Symbol": "CMC",
    "Name": "Commercial Metals Company Common Stock"
  },
  {
    "Symbol": "CMCA",
    "Name": "Capitalworks Emerging Markets Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "CMCAW",
    "Name": "Capitalworks Emerging Markets Acquisition Corp Warrant"
  },
  {
    "Symbol": "CMCL",
    "Name": "Caledonia Mining Corporation Plc Common Shares"
  },
  {
    "Symbol": "CMCM",
    "Name": "Cheetah Mobile Inc. American Depositary Shares each representing fifty (50) Class A Ordinary Shares"
  },
  {
    "Symbol": "CMCO",
    "Name": "Columbus McKinnon Corporation Common Stock"
  },
  {
    "Symbol": "CMCSA",
    "Name": "Comcast Corporation Class A Common Stock"
  },
  {
    "Symbol": "CMCT",
    "Name": "Creative Media & Community Trust Corporation Common stock"
  },
  {
    "Symbol": "CME",
    "Name": "CME Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "CMG",
    "Name": "Chipotle Mexican Grill Inc. Common Stock"
  },
  {
    "Symbol": "CMI",
    "Name": "Cummins Inc. Common Stock"
  },
  {
    "Symbol": "CMLS",
    "Name": "Cumulus Media Inc. Class A Common Stock"
  },
  {
    "Symbol": "CMMB",
    "Name": "Chemomab Therapeutics Ltd. American Depositary Share"
  },
  {
    "Symbol": "CMND",
    "Name": "Clearmind Medicine Inc. Common Shares"
  },
  {
    "Symbol": "CMP",
    "Name": "Compass Minerals Intl Inc Common Stock"
  },
  {
    "Symbol": "CMPO",
    "Name": "CompoSecure Inc. Class A Common Stock"
  },
  {
    "Symbol": "CMPOW",
    "Name": "CompoSecure Inc. Warrant"
  },
  {
    "Symbol": "CMPR",
    "Name": "Cimpress plc Ordinary Shares (Ireland)"
  },
  {
    "Symbol": "CMPS",
    "Name": "COMPASS Pathways Plc American Depository Shares"
  },
  {
    "Symbol": "CMPX",
    "Name": "Compass Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CMRA",
    "Name": "Comera Life Sciences Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CMRAW",
    "Name": "Comera Life Sciences Holdings Inc. Warrant"
  },
  {
    "Symbol": "CMRE",
    "Name": "Costamare Inc. Common Stock $0.0001 par value"
  },
  {
    "Symbol": "CMRE^B",
    "Name": "Costamare Inc. Perpetual Preferred Stock Series B (Marshall Islands)"
  },
  {
    "Symbol": "CMRE^C",
    "Name": "Costamare Inc. Perpetual Preferred Series C (Marshall Islands)"
  },
  {
    "Symbol": "CMRE^D",
    "Name": "Costamare Inc. 8.75% Series D Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "CMRE^E",
    "Name": "Costamare Inc. 8.875% Series E Cumulative Redeemable Perpetual Preferred Stock par value $0.0001"
  },
  {
    "Symbol": "CMRX",
    "Name": "Chimerix Inc. Common Stock"
  },
  {
    "Symbol": "CMS",
    "Name": "CMS Energy Corporation Common Stock"
  },
  {
    "Symbol": "CMS^B",
    "Name": "CMS Energy Corporation Preferred Stock"
  },
  {
    "Symbol": "CMS^C",
    "Name": "CMS Energy Corporation Depositary Shares each representing a 1/1000th interest in a share of 4.200% Cumulative Redeemable Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "CMSA",
    "Name": "CMS Energy Corporation 5.625% Junior Subordinated Notes due 2078"
  },
  {
    "Symbol": "CMSC",
    "Name": "CMS Energy Corporation 5.875% Junior Subordinated Notes due 2078"
  },
  {
    "Symbol": "CMSD",
    "Name": "CMS Energy Corporation 5.875% Junior Subordinated Notes due 2079"
  },
  {
    "Symbol": "CMT",
    "Name": "Core Molding Technologies Inc Common Stock"
  },
  {
    "Symbol": "CMTG",
    "Name": "Claros Mortgage Trust Inc. Common Stock"
  },
  {
    "Symbol": "CMTL",
    "Name": "Comtech Telecommunications Corp. Common Stock"
  },
  {
    "Symbol": "CMU",
    "Name": "MFS Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "CNA",
    "Name": "CNA Financial Corporation Common Stock"
  },
  {
    "Symbol": "CNC",
    "Name": "Centene Corporation Common Stock"
  },
  {
    "Symbol": "CNDA",
    "Name": "Concord Acquisition Corp II Class A Common Stock"
  },
  {
    "Symbol": "CNDB",
    "Name": "Concord Acquisition Corp III Class A Common Stock"
  },
  {
    "Symbol": "CNDT",
    "Name": "Conduent Incorporated Common Stock"
  },
  {
    "Symbol": "CNET",
    "Name": "ZW Data Action Technologies Inc. Common Stock"
  },
  {
    "Symbol": "CNEY",
    "Name": "CN Energy Group Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "CNF",
    "Name": "CNFinance Holdings Limited American Depositary Shares each representing  twenty (20) Ordinary Shares"
  },
  {
    "Symbol": "CNFR",
    "Name": "Conifer Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CNFRL",
    "Name": "Conifer Holdings Inc. 6.75% Senior Unsecured Notes due 2023"
  },
  {
    "Symbol": "CNGL",
    "Name": "Canna-Global Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CNGLW",
    "Name": "Canna-Global Acquisition Corp Warrant"
  },
  {
    "Symbol": "CNHI",
    "Name": "CNH Industrial N.V. Common Shares"
  },
  {
    "Symbol": "CNI",
    "Name": "Canadian National Railway Company Common Stock"
  },
  {
    "Symbol": "CNK",
    "Name": "Cinemark Holdings Inc Cinemark Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CNM",
    "Name": "Core & Main Inc. Class A Common Stock"
  },
  {
    "Symbol": "CNMD",
    "Name": "CONMED Corporation Common Stock"
  },
  {
    "Symbol": "CNNE",
    "Name": "Cannae Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CNO",
    "Name": "CNO Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "CNO^A",
    "Name": "CNO Financial Group Inc. 5.125% Subordinated Debentures due 2060"
  },
  {
    "Symbol": "CNOB",
    "Name": "ConnectOne Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CNOBP",
    "Name": "ConnectOne Bancorp Inc. Depositary Shares each representing a 1/40th interest in a share of 5.25% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "CNP",
    "Name": "CenterPoint Energy Inc (Holding Co) Common Stock"
  },
  {
    "Symbol": "CNQ",
    "Name": "Canadian Natural Resources Limited Common Stock"
  },
  {
    "Symbol": "CNS",
    "Name": "Cohen & Steers Inc Common Stock"
  },
  {
    "Symbol": "CNSL",
    "Name": "Consolidated Communications Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CNSP",
    "Name": "CNS Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CNTA",
    "Name": "Centessa Pharmaceuticals plc American Depositary Shares"
  },
  {
    "Symbol": "CNTB",
    "Name": "Connect Biopharma Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "CNTG",
    "Name": "Centogene N.V. Common Shares"
  },
  {
    "Symbol": "CNTX",
    "Name": "Context Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CNTY",
    "Name": "Century Casinos Inc. Common Stock"
  },
  {
    "Symbol": "CNX",
    "Name": "CNX Resources Corporation Common Stock"
  },
  {
    "Symbol": "CNXA",
    "Name": "Connexa Sports Technologies Inc. Common Stock"
  },
  {
    "Symbol": "CNXC",
    "Name": "Concentrix Corporation Common Stock"
  },
  {
    "Symbol": "CNXN",
    "Name": "PC Connection Inc. Common Stock"
  },
  {
    "Symbol": "COCO",
    "Name": "The Vita Coco Company Inc. Common Stock"
  },
  {
    "Symbol": "COCP",
    "Name": "Cocrystal Pharma Inc. Common Stock"
  },
  {
    "Symbol": "CODA",
    "Name": "Coda Octopus Group Inc. Common stock"
  },
  {
    "Symbol": "CODI",
    "Name": "D/B/A Compass Diversified Holdings Shares of Beneficial Interest"
  },
  {
    "Symbol": "CODI^A",
    "Name": "Compass Diversified Holdings 7.250% Series A Preferred Shares representing beneficial interest in Compass Diversified Holdings"
  },
  {
    "Symbol": "CODI^B",
    "Name": "Compass Diversified Holdings 7.875% Series B Fixed-to-Floating Rate Cumulative Preferred Shares representing beneficial interests in Compass Diversified Holdings"
  },
  {
    "Symbol": "CODI^C",
    "Name": "Compass Diversified Holdings 7.875% Series C Cumulative Preferred Shares"
  },
  {
    "Symbol": "CODX",
    "Name": "Co-Diagnostics Inc. Common Stock"
  },
  {
    "Symbol": "COE",
    "Name": "51Talk Online Education Group American depositary shares each representing 60 Class A ordinary shares"
  },
  {
    "Symbol": "COEP",
    "Name": "Coeptis Therapeutics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "COEPW",
    "Name": "Coeptis Therapeutics Holdings Inc. Warrants"
  },
  {
    "Symbol": "COF",
    "Name": "Capital One Financial Corporation Common Stock"
  },
  {
    "Symbol": "COF^I",
    "Name": "Capital One Financial Corporation Depositary shares each representing a 1/40th interest in a share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series I of the Issuer"
  },
  {
    "Symbol": "COF^J",
    "Name": "Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non- Cumulative Perpetual Preferred Stock Series J"
  },
  {
    "Symbol": "COF^K",
    "Name": "Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series K"
  },
  {
    "Symbol": "COF^L",
    "Name": "Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series L"
  },
  {
    "Symbol": "COF^N",
    "Name": "Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series N"
  },
  {
    "Symbol": "COFS",
    "Name": "ChoiceOne Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "COGT",
    "Name": "Cogent Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "COHN",
    "Name": "Cohen & Company Inc."
  },
  {
    "Symbol": "COHR",
    "Name": "Coherent Corp. Common Stock"
  },
  {
    "Symbol": "COHU",
    "Name": "Cohu Inc. Common Stock"
  },
  {
    "Symbol": "COIN",
    "Name": "Coinbase Global Inc. Class A Common Stock"
  },
  {
    "Symbol": "COKE",
    "Name": "Coca-Cola Consolidated Inc. Common Stock"
  },
  {
    "Symbol": "COLB",
    "Name": "Columbia Banking System Inc. Common Stock"
  },
  {
    "Symbol": "COLD",
    "Name": "Americold Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "COLL",
    "Name": "Collegium Pharmaceutical Inc. Common Stock"
  },
  {
    "Symbol": "COLM",
    "Name": "Columbia Sportswear Company Common Stock"
  },
  {
    "Symbol": "COMM",
    "Name": "CommScope Holding Company Inc. Common Stock"
  },
  {
    "Symbol": "COMP",
    "Name": "Compass Inc. Class A Common Stock"
  },
  {
    "Symbol": "COMS",
    "Name": "COMSovereign Holding Corp. Common Stock"
  },
  {
    "Symbol": "COMSP",
    "Name": "COMSovereign Holding Corp. 9.25% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "COMSW",
    "Name": "COMSovereign Holding Corp. Warrants"
  },
  {
    "Symbol": "CONN",
    "Name": "Conn's Inc. Common Stock"
  },
  {
    "Symbol": "CONX",
    "Name": "CONX Corp. Class A Common Stock"
  },
  {
    "Symbol": "CONXU",
    "Name": "CONX Corp. Unit"
  },
  {
    "Symbol": "CONXW",
    "Name": "CONX Corp. Warrant"
  },
  {
    "Symbol": "COO",
    "Name": "The Cooper Companies Inc. Common Stock"
  },
  {
    "Symbol": "COOK",
    "Name": "Traeger Inc. Common Stock"
  },
  {
    "Symbol": "COOL",
    "Name": "Corner Growth Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "COOLW",
    "Name": "Corner Growth Acquisition Corp. Warrant"
  },
  {
    "Symbol": "COOP",
    "Name": "Mr. Cooper Group Inc. Common Stock"
  },
  {
    "Symbol": "COP",
    "Name": "ConocoPhillips Common Stock"
  },
  {
    "Symbol": "CORR",
    "Name": "CorEnergy Infrastructure Trust Inc. Common Stock"
  },
  {
    "Symbol": "CORR^A",
    "Name": "CorEnergy Infrastructure Trust Inc. Depositary Shares each representing a 1/100th fractional interest of a share of 7.375% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CORS",
    "Name": "Corsair Partnering Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "CORT",
    "Name": "Corcept Therapeutics Incorporated Common Stock"
  },
  {
    "Symbol": "COSM",
    "Name": "Cosmos Health Inc. Common Stock"
  },
  {
    "Symbol": "COST",
    "Name": "Costco Wholesale Corporation Common Stock"
  },
  {
    "Symbol": "COTY",
    "Name": "Coty Inc. Class A Common Stock"
  },
  {
    "Symbol": "COUR",
    "Name": "Coursera Inc. Common Stock"
  },
  {
    "Symbol": "COYA",
    "Name": "Coya Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CP",
    "Name": "Canadian Pacific Kansas City Limited Common Shares"
  },
  {
    "Symbol": "CPA",
    "Name": "Copa Holdings S.A. Copa Holdings S.A. Class A Common Stock"
  },
  {
    "Symbol": "CPAA",
    "Name": "Conyers Park III Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CPAAU",
    "Name": "Conyers Park III Acquisition Corp. Unit"
  },
  {
    "Symbol": "CPAAW",
    "Name": "Conyers Park III Acquisition Corp. Warrants"
  },
  {
    "Symbol": "CPAC",
    "Name": "Cementos Pacasmayo S.A.A. American Depositary Shares (Each representing five Common Shares)"
  },
  {
    "Symbol": "CPB",
    "Name": "Campbell Soup Company Common Stock"
  },
  {
    "Symbol": "CPE",
    "Name": "Callon Petroleum Company Common Stock"
  },
  {
    "Symbol": "CPF",
    "Name": "Central Pacific Financial Corp New"
  },
  {
    "Symbol": "CPG",
    "Name": "Crescent Point Energy Corporation Ordinary Shares (Canada)"
  },
  {
    "Symbol": "CPHC",
    "Name": "Canterbury Park Holding Corporation 'New' Common Stock"
  },
  {
    "Symbol": "CPHI",
    "Name": "China Pharma Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CPIX",
    "Name": "Cumberland Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CPK",
    "Name": "Chesapeake Utilities Corporation Common Stock"
  },
  {
    "Symbol": "CPLP",
    "Name": "Capital Product Partners L.P. Common Units"
  },
  {
    "Symbol": "CPNG",
    "Name": "Coupang Inc. Class A Common Stock"
  },
  {
    "Symbol": "CPOP",
    "Name": "Pop Culture Group Co. Ltd Class A Ordinary Shares"
  },
  {
    "Symbol": "CPRI",
    "Name": "Capri Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "CPRT",
    "Name": "Copart Inc. (DE) Common Stock"
  },
  {
    "Symbol": "CPRX",
    "Name": "Catalyst Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CPS",
    "Name": "Cooper-Standard Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CPSH",
    "Name": "CPS Technologies Corp. Common Stock"
  },
  {
    "Symbol": "CPSI",
    "Name": "Computer Programs and Systems Inc. Common Stock"
  },
  {
    "Symbol": "CPSS",
    "Name": "Consumer Portfolio Services Inc. Common Stock"
  },
  {
    "Symbol": "CPT",
    "Name": "Camden Property Trust Common Stock"
  },
  {
    "Symbol": "CPTN",
    "Name": "Cepton Inc. Common Stock"
  },
  {
    "Symbol": "CPTNW",
    "Name": "Cepton Inc. Warrant"
  },
  {
    "Symbol": "CPUH",
    "Name": "Compute Health Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "CPZ",
    "Name": "Calamos Long/Short Equity & Dynamic Income Trust Common Stock"
  },
  {
    "Symbol": "CQP",
    "Name": "Cheniere Energy Partners LP Cheniere Energy Partners LP Common Units"
  },
  {
    "Symbol": "CR",
    "Name": "Crane Company Common Stock"
  },
  {
    "Symbol": "CRAI",
    "Name": "CRA International Inc. Common Stock"
  },
  {
    "Symbol": "CRBG",
    "Name": "Corebridge Financial Inc. Common Stock"
  },
  {
    "Symbol": "CRBP",
    "Name": "Corbus Pharmaceuticals Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CRBU",
    "Name": "Caribou Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "CRC",
    "Name": "California Resources Corporation Common Stock"
  },
  {
    "Symbol": "CRCT",
    "Name": "Cricut Inc. Class A Common Stock"
  },
  {
    "Symbol": "CRD/A",
    "Name": "Crawford & Company"
  },
  {
    "Symbol": "CRD/B",
    "Name": "Crawford & Company"
  },
  {
    "Symbol": "CRDF",
    "Name": "Cardiff Oncology Inc. Common Stock"
  },
  {
    "Symbol": "CRDL",
    "Name": "Cardiol Therapeutics Inc. Class A Common Shares"
  },
  {
    "Symbol": "CRDO",
    "Name": "Credo Technology Group Holding Ltd Ordinary Shares"
  },
  {
    "Symbol": "CREC",
    "Name": "Crescera Capital Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "CRECU",
    "Name": "Crescera Capital Acquisition Corp Unit"
  },
  {
    "Symbol": "CRECW",
    "Name": "Crescera Capital Acquisition Corp Warrant"
  },
  {
    "Symbol": "CREG",
    "Name": "Smart Powerr Corp. Common Stock"
  },
  {
    "Symbol": "CRESW",
    "Name": "Cresud S.A.C.I.F. y A. Warrant"
  },
  {
    "Symbol": "CRESY",
    "Name": "Cresud S.A.C.I.F. y A. American Depositary Shares"
  },
  {
    "Symbol": "CREX",
    "Name": "Creative Realities Inc. Common Stock"
  },
  {
    "Symbol": "CRF",
    "Name": "Cornerstone Total Return Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "CRGE",
    "Name": "Charge Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "CRGO",
    "Name": "Freightos Limited Ordinary shares"
  },
  {
    "Symbol": "CRGOW",
    "Name": "Freightos Limited Warrants"
  },
  {
    "Symbol": "CRGY",
    "Name": "Crescent Energy Company Class A Common Stock"
  },
  {
    "Symbol": "CRH",
    "Name": "CRH PLC American Depositary Shares"
  },
  {
    "Symbol": "CRI",
    "Name": "Carter's Inc. Common Stock"
  },
  {
    "Symbol": "CRIS",
    "Name": "Curis Inc. Common Stock"
  },
  {
    "Symbol": "CRK",
    "Name": "Comstock Resources Inc. Common Stock"
  },
  {
    "Symbol": "CRKN",
    "Name": "Crown Electrokinetics Corp. Common Stock"
  },
  {
    "Symbol": "CRL",
    "Name": "Charles River Laboratories International Inc. Common Stock"
  },
  {
    "Symbol": "CRM",
    "Name": "Salesforce Inc. Common Stock"
  },
  {
    "Symbol": "CRMD",
    "Name": "CorMedix Inc. Common Stock"
  },
  {
    "Symbol": "CRMT",
    "Name": "America's Car-Mart Inc Common Stock"
  },
  {
    "Symbol": "CRNC",
    "Name": "Cerence Inc. Common Stock"
  },
  {
    "Symbol": "CRNT",
    "Name": "Ceragon Networks Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CRNX",
    "Name": "Crinetics Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CRON",
    "Name": "Cronos Group Inc. Common Share"
  },
  {
    "Symbol": "CROX",
    "Name": "Crocs Inc. Common Stock"
  },
  {
    "Symbol": "CRS",
    "Name": "Carpenter Technology Corporation Common Stock"
  },
  {
    "Symbol": "CRSP",
    "Name": "CRISPR Therapeutics AG Common Shares"
  },
  {
    "Symbol": "CRSR",
    "Name": "Corsair Gaming Inc. Common Stock"
  },
  {
    "Symbol": "CRT",
    "Name": "Cross Timbers Royalty Trust Common Stock"
  },
  {
    "Symbol": "CRTO",
    "Name": "Criteo S.A. American Depositary Shares"
  },
  {
    "Symbol": "CRUS",
    "Name": "Cirrus Logic Inc. Common Stock"
  },
  {
    "Symbol": "CRVL",
    "Name": "CorVel Corp. Common Stock"
  },
  {
    "Symbol": "CRVS",
    "Name": "Corvus Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CRWD",
    "Name": "CrowdStrike Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "CRWS",
    "Name": "Crown Crafts Inc Common Stock"
  },
  {
    "Symbol": "CS",
    "Name": "Credit Suisse Group American Depositary Shares"
  },
  {
    "Symbol": "CSAN",
    "Name": "Cosan S.A. ADS"
  },
  {
    "Symbol": "CSBR",
    "Name": "Champions Oncology Inc. Common Stock"
  },
  {
    "Symbol": "CSCO",
    "Name": "Cisco Systems Inc. Common Stock (DE)"
  },
  {
    "Symbol": "CSGP",
    "Name": "CoStar Group Inc. Common Stock"
  },
  {
    "Symbol": "CSGS",
    "Name": "CSG Systems International Inc. Common Stock"
  },
  {
    "Symbol": "CSIQ",
    "Name": "Canadian Solar Inc. Common Shares (ON)"
  },
  {
    "Symbol": "CSL",
    "Name": "Carlisle Companies Incorporated Common Stock"
  },
  {
    "Symbol": "CSLM",
    "Name": "Consilium Acquisition Corp I Ltd. Class A Ordinary Share"
  },
  {
    "Symbol": "CSLMR",
    "Name": "Consilium Acquisition Corp I Ltd. Right"
  },
  {
    "Symbol": "CSPI",
    "Name": "CSP Inc. Common Stock"
  },
  {
    "Symbol": "CSQ",
    "Name": "Calamos Strategic Total Return Common Stock"
  },
  {
    "Symbol": "CSR",
    "Name": "D/B/A Centerspace Common Stock"
  },
  {
    "Symbol": "CSR^C",
    "Name": "D/B/A Centerspace 6.625% Series C"
  },
  {
    "Symbol": "CSSE",
    "Name": "Chicken Soup for the Soul Entertainment Inc. Class A Common Stock"
  },
  {
    "Symbol": "CSSEL",
    "Name": "Chicken Soup for the Soul Entertainment Inc. Warrant"
  },
  {
    "Symbol": "CSSEN",
    "Name": "Chicken Soup for the Soul Entertainment Inc. 9.50% Notes due 2025"
  },
  {
    "Symbol": "CSSEP",
    "Name": "Chicken Soup for the Soul Entertainment Inc. 9.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "CSTA",
    "Name": "Constellation Acquisition Corp I Class A Ordinary Shares"
  },
  {
    "Symbol": "CSTE",
    "Name": "Caesarstone Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CSTL",
    "Name": "Castle Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "CSTM",
    "Name": "Constellium SE Ordinary Shares (France)"
  },
  {
    "Symbol": "CSTR",
    "Name": "CapStar Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CSV",
    "Name": "Carriage Services Inc. Common Stock"
  },
  {
    "Symbol": "CSWC",
    "Name": "Capital Southwest Corporation Common Stock"
  },
  {
    "Symbol": "CSWI",
    "Name": "CSW Industrials Inc. Common Stock"
  },
  {
    "Symbol": "CSX",
    "Name": "CSX Corporation Common Stock"
  },
  {
    "Symbol": "CTA^A",
    "Name": "EIDP Inc. Preferred Stock $3.50 Series"
  },
  {
    "Symbol": "CTA^B",
    "Name": "EIDP Inc. Preferred Stock $4.50 Series"
  },
  {
    "Symbol": "CTAS",
    "Name": "Cintas Corporation Common Stock"
  },
  {
    "Symbol": "CTBB",
    "Name": "Qwest Corporation 6.5% Notes due 2056"
  },
  {
    "Symbol": "CTBI",
    "Name": "Community Trust Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CTDD",
    "Name": "Qwest Corporation 6.75% Notes due 2057"
  },
  {
    "Symbol": "CTG",
    "Name": "Computer Task Group Inc. Common Stock"
  },
  {
    "Symbol": "CTGO",
    "Name": "Contango ORE Inc. Common Stock"
  },
  {
    "Symbol": "CTHR",
    "Name": "Charles & Colvard Ltd Common Stock"
  },
  {
    "Symbol": "CTIB",
    "Name": "Yunhong CTI Ltd. Common Stock"
  },
  {
    "Symbol": "CTIC",
    "Name": "CTI BioPharma Corp. (DE) Common Stock"
  },
  {
    "Symbol": "CTKB",
    "Name": "Cytek Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "CTLP",
    "Name": "Cantaloupe Inc. Common Stock"
  },
  {
    "Symbol": "CTLT",
    "Name": "Catalent Inc. Common Stock"
  },
  {
    "Symbol": "CTM",
    "Name": "Castellum Inc. Common Stock"
  },
  {
    "Symbol": "CTMX",
    "Name": "CytomX Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CTO",
    "Name": "CTO Realty Growth Inc. Common Stock"
  },
  {
    "Symbol": "CTO^A",
    "Name": "CTO Realty Growth Inc. 6.375% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CTOS",
    "Name": "Custom Truck One Source Inc. Common Stock"
  },
  {
    "Symbol": "CTR",
    "Name": "ClearBridge MLP and Midstream Total Return Fund Inc. Common Stock"
  },
  {
    "Symbol": "CTRA",
    "Name": "Coterra Energy Inc. Common Stock"
  },
  {
    "Symbol": "CTRE",
    "Name": "CareTrust REIT Inc. Common Stock"
  },
  {
    "Symbol": "CTRM",
    "Name": "Castor Maritime Inc. Common Shares"
  },
  {
    "Symbol": "CTRN",
    "Name": "Citi Trends Inc. Common Stock"
  },
  {
    "Symbol": "CTS",
    "Name": "CTS Corporation Common Stock"
  },
  {
    "Symbol": "CTSH",
    "Name": "Cognizant Technology Solutions Corporation Class A Common Stock"
  },
  {
    "Symbol": "CTSO",
    "Name": "Cytosorbents Corporation Common Stock"
  },
  {
    "Symbol": "CTV",
    "Name": "Innovid Corp. Common Stock"
  },
  {
    "Symbol": "CTVA",
    "Name": "Corteva Inc. Common Stock"
  },
  {
    "Symbol": "CTXR",
    "Name": "Citius Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CUBA",
    "Name": "Herzfeld Caribbean Basin Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "CUBB",
    "Name": "Customers Bancorp Inc 5.375% Subordinated Notes Due 2034"
  },
  {
    "Symbol": "CUBE",
    "Name": "CubeSmart Common Shares"
  },
  {
    "Symbol": "CUBI",
    "Name": "Customers Bancorp Inc Common Stock"
  },
  {
    "Symbol": "CUBI^E",
    "Name": "Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "CUBI^F",
    "Name": "Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F"
  },
  {
    "Symbol": "CUE",
    "Name": "Cue Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "CUEN",
    "Name": "Cuentas Inc. Common Stock"
  },
  {
    "Symbol": "CUENW",
    "Name": "Cuentas Inc. Warrant"
  },
  {
    "Symbol": "CUK",
    "Name": "Carnival Plc ADS ADS"
  },
  {
    "Symbol": "CULL",
    "Name": "Cullman Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "CULP",
    "Name": "Culp Inc. Common Stock"
  },
  {
    "Symbol": "CURI",
    "Name": "CuriosityStream Inc. Class A Common Stock"
  },
  {
    "Symbol": "CURIW",
    "Name": "CuriosityStream Inc. Warrant"
  },
  {
    "Symbol": "CURO",
    "Name": "CURO Group Holdings Corp. Common Stock"
  },
  {
    "Symbol": "CURV",
    "Name": "Torrid Holdings Inc. Common Stock"
  },
  {
    "Symbol": "CUTR",
    "Name": "Cutera Inc. Common Stock"
  },
  {
    "Symbol": "CUZ",
    "Name": "Cousins Properties Incorporated Common Stock"
  },
  {
    "Symbol": "CVAC",
    "Name": "CureVac N.V. Ordinary Shares"
  },
  {
    "Symbol": "CVBF",
    "Name": "CVB Financial Corporation Common Stock"
  },
  {
    "Symbol": "CVCO",
    "Name": "Cavco Industries Inc. Common Stock When Issued"
  },
  {
    "Symbol": "CVCY",
    "Name": "Central Valley Community Bancorp Common Stock"
  },
  {
    "Symbol": "CVE",
    "Name": "Cenovus Energy Inc Common Stock"
  },
  {
    "Symbol": "CVEO",
    "Name": "Civeo Corporation (Canada) Common Shares"
  },
  {
    "Symbol": "CVGI",
    "Name": "Commercial Vehicle Group Inc. Common Stock"
  },
  {
    "Symbol": "CVGW",
    "Name": "Calavo Growers Inc. Common Stock"
  },
  {
    "Symbol": "CVI",
    "Name": "CVR Energy Inc. Common Stock"
  },
  {
    "Symbol": "CVII",
    "Name": "Churchill Capital Corp VII Class A Common Stock"
  },
  {
    "Symbol": "CVKD",
    "Name": "Cadrenal Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CVLG",
    "Name": "Covenant Logistics Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "CVLT",
    "Name": "Commvault Systems Inc. Common Stock"
  },
  {
    "Symbol": "CVLY",
    "Name": "Codorus Valley Bancorp Inc Common Stock"
  },
  {
    "Symbol": "CVM",
    "Name": "Cel-Sci Corporation Common Stock"
  },
  {
    "Symbol": "CVNA",
    "Name": "Carvana Co. Class A Common Stock"
  },
  {
    "Symbol": "CVR",
    "Name": "Chicago Rivet & Machine Co. Common Stock"
  },
  {
    "Symbol": "CVRX",
    "Name": "CVRx Inc. Common Stock"
  },
  {
    "Symbol": "CVS",
    "Name": "CVS Health Corporation Common Stock"
  },
  {
    "Symbol": "CVT",
    "Name": "Cvent Holding Corp. Common Stock"
  },
  {
    "Symbol": "CVU",
    "Name": "CPI Aerostructures Inc. Common Stock"
  },
  {
    "Symbol": "CVV",
    "Name": "CVD Equipment Corporation Common Stock"
  },
  {
    "Symbol": "CVX",
    "Name": "Chevron Corporation Common Stock"
  },
  {
    "Symbol": "CW",
    "Name": "Curtiss-Wright Corporation Common Stock"
  },
  {
    "Symbol": "CWAN",
    "Name": "Clearwater Analytics Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "CWBC",
    "Name": "Community West Bancshares Common Stock"
  },
  {
    "Symbol": "CWBR",
    "Name": "CohBar Inc. Common Stock"
  },
  {
    "Symbol": "CWCO",
    "Name": "Consolidated Water Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CWEN",
    "Name": "Clearway Energy Inc. Class C Common Stock"
  },
  {
    "Symbol": "CWH",
    "Name": "Camping World Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "CWK",
    "Name": "Cushman & Wakefield plc Ordinary Shares"
  },
  {
    "Symbol": "CWST",
    "Name": "Casella Waste Systems Inc. Class A Common Stock"
  },
  {
    "Symbol": "CWT",
    "Name": "California Water Service Group Common Stock"
  },
  {
    "Symbol": "CX",
    "Name": "Cemex S.A.B. de C.V. Sponsored ADR"
  },
  {
    "Symbol": "CXAC",
    "Name": "C5 Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "CXAI",
    "Name": "CXApp Inc. Class A Common Stock"
  },
  {
    "Symbol": "CXAIW",
    "Name": "CXApp Inc. Warrant"
  },
  {
    "Symbol": "CXDO",
    "Name": "Crexendo Inc. Common Stock"
  },
  {
    "Symbol": "CXE",
    "Name": "MFS High Income Municipal Trust Common Stock"
  },
  {
    "Symbol": "CXH",
    "Name": "MFS Investment Grade Municipal Trust Common Stock"
  },
  {
    "Symbol": "CXM",
    "Name": "Sprinklr Inc. Class A Common Stock"
  },
  {
    "Symbol": "CXT",
    "Name": "Crane NXT Co. Common Stock"
  },
  {
    "Symbol": "CXW",
    "Name": "CoreCivic Inc. Common Stock"
  },
  {
    "Symbol": "CYAD",
    "Name": "Celyad Oncology SA American Depositary Shares"
  },
  {
    "Symbol": "CYAN",
    "Name": "Cyanotech Corporation Common Stock"
  },
  {
    "Symbol": "CYBN",
    "Name": "Cybin Inc. Common Shares"
  },
  {
    "Symbol": "CYBR",
    "Name": "CyberArk Software Ltd. Ordinary Shares"
  },
  {
    "Symbol": "CYCC",
    "Name": "Cyclacel Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "CYCCP",
    "Name": "Cyclacel Pharmaceuticals Inc. 6% Convertible Preferred Stock"
  },
  {
    "Symbol": "CYCN",
    "Name": "Cyclerion Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CYD",
    "Name": "China Yuchai International Limited Common Stock"
  },
  {
    "Symbol": "CYH",
    "Name": "Community Health Systems Inc. Common Stock"
  },
  {
    "Symbol": "CYN",
    "Name": "Cyngn Inc. Common Stock"
  },
  {
    "Symbol": "CYRX",
    "Name": "CryoPort Inc. Common Stock"
  },
  {
    "Symbol": "CYT",
    "Name": "Cyteir Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CYTH",
    "Name": "Cyclo Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "CYTHW",
    "Name": "Cyclo Therapeutics Inc. Warrant"
  },
  {
    "Symbol": "CYTK",
    "Name": "Cytokinetics Incorporated Common Stock"
  },
  {
    "Symbol": "CYTO",
    "Name": "Altamira Therapeutics Ltd. 0.2 Common Shares (Bermuda)"
  },
  {
    "Symbol": "CYXT",
    "Name": "Cyxtera Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "CZFS",
    "Name": "Citizens Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "CZNC",
    "Name": "Citizens & Northern Corp Common Stock"
  },
  {
    "Symbol": "CZOO",
    "Name": "Cazoo Group Ltd Class A Ordinary Shares"
  },
  {
    "Symbol": "CZR",
    "Name": "Caesars Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "CZWI",
    "Name": "Citizens Community Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "D",
    "Name": "Dominion Energy Inc. Common Stock"
  },
  {
    "Symbol": "DAC",
    "Name": "Danaos Corporation Common Stock"
  },
  {
    "Symbol": "DADA",
    "Name": "Dada Nexus Limited American Depositary Shares"
  },
  {
    "Symbol": "DAIO",
    "Name": "Data I/O Corporation Common Stock"
  },
  {
    "Symbol": "DAKT",
    "Name": "Daktronics Inc. Common Stock"
  },
  {
    "Symbol": "DAL",
    "Name": "Delta Air Lines Inc. Common Stock"
  },
  {
    "Symbol": "DALN",
    "Name": "DallasNews Corporation Series A Common Stock"
  },
  {
    "Symbol": "DALS",
    "Name": "DA32 Life Science Tech Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DAN",
    "Name": "Dana Incorporated Common Stock"
  },
  {
    "Symbol": "DAO",
    "Name": "Youdao Inc. American Depositary Shares each representing one Class A Ordinary Share"
  },
  {
    "Symbol": "DAR",
    "Name": "Darling Ingredients Inc. Common Stock"
  },
  {
    "Symbol": "DARE",
    "Name": "Dare Bioscience Inc. Common Stock"
  },
  {
    "Symbol": "DASH",
    "Name": "DoorDash Inc. Class A Common Stock"
  },
  {
    "Symbol": "DATS",
    "Name": "DatChat Inc. Common Stock"
  },
  {
    "Symbol": "DATSW",
    "Name": "DatChat Inc. Series A Warrant"
  },
  {
    "Symbol": "DAVA",
    "Name": "Endava plc American Depositary Shares (each representing one Class A Ordinary Share)"
  },
  {
    "Symbol": "DAVE",
    "Name": "Dave Inc. Class A Common Stock"
  },
  {
    "Symbol": "DAVEW",
    "Name": "Dave Inc. Warrants"
  },
  {
    "Symbol": "DAWN",
    "Name": "Day One Biopharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "DB",
    "Name": "Deutsche Bank AG Common Stock"
  },
  {
    "Symbol": "DBD",
    "Name": "Diebold Nixdorf Incorporated Common Stock"
  },
  {
    "Symbol": "DBGI",
    "Name": "Digital Brands Group Inc. Common Stock"
  },
  {
    "Symbol": "DBGIW",
    "Name": "Digital Brands Group Inc. Warrant"
  },
  {
    "Symbol": "DBI",
    "Name": "Designer Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "DBL",
    "Name": "DoubleLine Opportunistic Credit Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "DBRG",
    "Name": "DigitalBridge Group Inc."
  },
  {
    "Symbol": "DBRG^H",
    "Name": "DigitalBridge Group Inc. 7.125% Series H"
  },
  {
    "Symbol": "DBRG^I",
    "Name": "DigitalBridge Group Inc. 7.15% Series I"
  },
  {
    "Symbol": "DBRG^J",
    "Name": "DigitalBridge Group Inc. 7.125% Series J"
  },
  {
    "Symbol": "DBTX",
    "Name": "Decibel Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DBVT",
    "Name": "DBV Technologies S.A. American Depositary Shares"
  },
  {
    "Symbol": "DBX",
    "Name": "Dropbox Inc. Class A Common Stock"
  },
  {
    "Symbol": "DC",
    "Name": "Dakota Gold Corp. Common Stock"
  },
  {
    "Symbol": "DCBO",
    "Name": "Docebo Inc. Common Shares"
  },
  {
    "Symbol": "DCF",
    "Name": "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc. Common Stock"
  },
  {
    "Symbol": "DCFC",
    "Name": "Tritium DCFC Limited Ordinary Shares"
  },
  {
    "Symbol": "DCFCW",
    "Name": "Tritium DCFC Limited Warrant"
  },
  {
    "Symbol": "DCGO",
    "Name": "DocGo Inc. Common Stock"
  },
  {
    "Symbol": "DCI",
    "Name": "Donaldson Company Inc. Common Stock"
  },
  {
    "Symbol": "DCO",
    "Name": "Ducommun Incorporated Common Stock"
  },
  {
    "Symbol": "DCOM",
    "Name": "Dime Community Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "DCOMP",
    "Name": "Dime Community Bancshares Inc. Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "DCP",
    "Name": "DCP Midstream  LP Common Units"
  },
  {
    "Symbol": "DCP^B",
    "Name": "DCP Midstream LP 7.875% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "DCP^C",
    "Name": "DCP Midstream LP 7.95% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "DCPH",
    "Name": "Deciphera Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "DCTH",
    "Name": "Delcath Systems Inc. Common Stock"
  },
  {
    "Symbol": "DD",
    "Name": "DuPont de Nemours Inc. Common Stock"
  },
  {
    "Symbol": "DDD",
    "Name": "3D Systems Corporation Common Stock"
  },
  {
    "Symbol": "DDI",
    "Name": "DoubleDown Interactive Co. Ltd. American Depository Shares"
  },
  {
    "Symbol": "DDL",
    "Name": "Dingdong (Cayman) Limited American Depositary Shares (each two representing three Ordinary Shares)"
  },
  {
    "Symbol": "DDOG",
    "Name": "Datadog Inc. Class A Common Stock"
  },
  {
    "Symbol": "DDS",
    "Name": "Dillard's Inc. Common Stock"
  },
  {
    "Symbol": "DDT",
    "Name": "Dillard's Capital Trust I"
  },
  {
    "Symbol": "DE",
    "Name": "Deere & Company Common Stock"
  },
  {
    "Symbol": "DEA",
    "Name": "Easterly Government Properties Inc. Common Stock"
  },
  {
    "Symbol": "DECA",
    "Name": "Denali Capital Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "DECAU",
    "Name": "Denali Capital Acquisition Corp. Unit"
  },
  {
    "Symbol": "DECK",
    "Name": "Deckers Outdoor Corporation Common Stock"
  },
  {
    "Symbol": "DEI",
    "Name": "Douglas Emmett Inc. Common Stock"
  },
  {
    "Symbol": "DELL",
    "Name": "Dell Technologies Inc. Class C Common Stock"
  },
  {
    "Symbol": "DEN",
    "Name": "Denbury Inc. Common Stock"
  },
  {
    "Symbol": "DENN",
    "Name": "Denny's Corporation Common Stock"
  },
  {
    "Symbol": "DEO",
    "Name": "Diageo plc Common Stock"
  },
  {
    "Symbol": "DERM",
    "Name": "Journey Medical Corporation Common Stock"
  },
  {
    "Symbol": "DESP",
    "Name": "Despegar.com Corp. Ordinary Shares"
  },
  {
    "Symbol": "DFFN",
    "Name": "Diffusion Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "DFH",
    "Name": "Dream Finders Homes Inc. Class A Common Stock"
  },
  {
    "Symbol": "DFIN",
    "Name": "Donnelley Financial Solutions Inc. Common Stock"
  },
  {
    "Symbol": "DFLI",
    "Name": "Dragonfly Energy Holdings Corp. Common Stock (NV)"
  },
  {
    "Symbol": "DFLIW",
    "Name": "Dragonfly Energy Holdings Corp. Warrant"
  },
  {
    "Symbol": "DFP",
    "Name": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "DFS",
    "Name": "Discover Financial Services Common Stock"
  },
  {
    "Symbol": "DG",
    "Name": "Dollar General Corporation Common Stock"
  },
  {
    "Symbol": "DGHI",
    "Name": "Digihost Technology Inc. Common Subordinate Voting Shares"
  },
  {
    "Symbol": "DGICA",
    "Name": "Donegal Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "DGICB",
    "Name": "Donegal Group Inc. Class B Common Stock"
  },
  {
    "Symbol": "DGII",
    "Name": "Digi International Inc. Common Stock"
  },
  {
    "Symbol": "DGLY",
    "Name": "Digital Ally Inc. Common Stock"
  },
  {
    "Symbol": "DGX",
    "Name": "Quest Diagnostics Incorporated Common Stock"
  },
  {
    "Symbol": "DH",
    "Name": "Definitive Healthcare Corp. Class A Common Stock"
  },
  {
    "Symbol": "DHAC",
    "Name": "Digital Health Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "DHC",
    "Name": "Diversified Healthcare Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "DHCA",
    "Name": "DHC Acquisition Corp. Class A ordinary share"
  },
  {
    "Symbol": "DHCAU",
    "Name": "DHC Acquisition Corp. Unit"
  },
  {
    "Symbol": "DHCAW",
    "Name": "DHC Acquisition Corp. Warrant"
  },
  {
    "Symbol": "DHCNI",
    "Name": "Diversified Healthcare Trust 5.625% Senior Notes due 2042"
  },
  {
    "Symbol": "DHCNL",
    "Name": "Diversified Healthcare Trust 6.25% Senior Notes Due 2046"
  },
  {
    "Symbol": "DHF",
    "Name": "BNY Mellon High Yield Strategies Fund Common Stock"
  },
  {
    "Symbol": "DHI",
    "Name": "D.R. Horton Inc. Common Stock"
  },
  {
    "Symbol": "DHIL",
    "Name": "Diamond Hill Investment Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "DHR",
    "Name": "Danaher Corporation Common Stock"
  },
  {
    "Symbol": "DHT",
    "Name": "DHT Holdings Inc."
  },
  {
    "Symbol": "DHX",
    "Name": "DHI Group Inc. Common Stock"
  },
  {
    "Symbol": "DHY",
    "Name": "Credit Suisse High Yield Bond Fund Common Stock"
  },
  {
    "Symbol": "DIAX",
    "Name": "Nuveen Dow 30SM Dynamic Overwrite Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "DIBS",
    "Name": "1stdibs.com Inc. Common Stock"
  },
  {
    "Symbol": "DICE",
    "Name": "DICE Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DIN",
    "Name": "Dine Brands Global Inc. Common Stock"
  },
  {
    "Symbol": "DINO",
    "Name": "HF Sinclair Corporation Common Stock"
  },
  {
    "Symbol": "DIOD",
    "Name": "Diodes Incorporated Common Stock"
  },
  {
    "Symbol": "DIS",
    "Name": "Walt Disney Company (The) Common Stock"
  },
  {
    "Symbol": "DISA",
    "Name": "Disruptive Acquisition Corporation I Class A Ordinary Shares"
  },
  {
    "Symbol": "DISAW",
    "Name": "Disruptive Acquisition Corporation I Warrant"
  },
  {
    "Symbol": "DISH",
    "Name": "DISH Network Corporation Class A Common Stock"
  },
  {
    "Symbol": "DIST",
    "Name": "Distoken Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "DISTR",
    "Name": "Distoken Acquisition Corporation Right"
  },
  {
    "Symbol": "DISTW",
    "Name": "Distoken Acquisition Corporation Warrant"
  },
  {
    "Symbol": "DIT",
    "Name": "AMCON Distributing Company Common Stock"
  },
  {
    "Symbol": "DJCO",
    "Name": "Daily Journal Corp. (S.C.) Common Stock"
  },
  {
    "Symbol": "DK",
    "Name": "Delek US Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DKDCA",
    "Name": "Data Knights Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DKDCW",
    "Name": "Data Knights Acquisition Corp. Warrant"
  },
  {
    "Symbol": "DKL",
    "Name": "Delek Logistics Partners L.P. Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "DKNG",
    "Name": "DraftKings Inc. Class A Common Stock"
  },
  {
    "Symbol": "DKS",
    "Name": "Dick's Sporting Goods Inc Common Stock"
  },
  {
    "Symbol": "DLA",
    "Name": "Delta Apparel Inc. Common Stock"
  },
  {
    "Symbol": "DLB",
    "Name": "Dolby Laboratories Common Stock"
  },
  {
    "Symbol": "DLHC",
    "Name": "DLH Holdings Corp."
  },
  {
    "Symbol": "DLNG",
    "Name": "Dynagas LNG Partners LP Common Units"
  },
  {
    "Symbol": "DLNG^A",
    "Name": "Dynagas LNG Partners LP 9.00% Series A Cumulative Redeemable Preferred Units"
  },
  {
    "Symbol": "DLNG^B",
    "Name": "Dynagas LNG Partners LP 8.75% Series B Fixed to Floating Rate Cumulative Redeemable Perpetual Preferred Units liquidation preference $25.00 per Uni"
  },
  {
    "Symbol": "DLO",
    "Name": "DLocal Limited Class A Common Shares"
  },
  {
    "Symbol": "DLPN",
    "Name": "Dolphin Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "DLR",
    "Name": "Digital Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "DLR^J",
    "Name": "Digital Realty Trust Inc. 5.250% Series J Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "DLR^K",
    "Name": "Digital Realty Trust Inc. 5.850% Series K Cumulative Redeemable Preferred Stock par value $0.01 per share"
  },
  {
    "Symbol": "DLR^L",
    "Name": "Digital Realty Trust Inc. 5.200% Series L Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "DLTH",
    "Name": "Duluth Holdings Inc. Class B Common Stock"
  },
  {
    "Symbol": "DLTR",
    "Name": "Dollar Tree Inc. Common Stock"
  },
  {
    "Symbol": "DLX",
    "Name": "Deluxe Corporation Common Stock"
  },
  {
    "Symbol": "DLY",
    "Name": "DoubleLine Yield Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "DM",
    "Name": "Desktop Metal Inc. Class A Common Stock"
  },
  {
    "Symbol": "DMA",
    "Name": "Destra Multi-Alternative Fund Common Stock"
  },
  {
    "Symbol": "DMAC",
    "Name": "DiaMedica Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DMAQ",
    "Name": "Deep Medicine Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DMAQR",
    "Name": "Deep Medicine Acquisition Corp. Rights"
  },
  {
    "Symbol": "DMB",
    "Name": "BNY Mellon Municipal Bond Infrastructure Fund Inc. Common Stock"
  },
  {
    "Symbol": "DMF",
    "Name": "BNY Mellon Municipal Income Inc. Common Stock"
  },
  {
    "Symbol": "DMLP",
    "Name": "Dorchester Minerals L.P. Common Units Representing Limited Partnership Interests"
  },
  {
    "Symbol": "DMO",
    "Name": "Western Asset Mortgage Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "DMRC",
    "Name": "Digimarc Corporation Common Stock"
  },
  {
    "Symbol": "DMS",
    "Name": "Digital Media Solutions Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "DMTK",
    "Name": "DermTech Inc. Common Stock"
  },
  {
    "Symbol": "DNA",
    "Name": "Ginkgo Bioworks Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "DNAB",
    "Name": "Social Capital Suvretta Holdings Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "DNAD",
    "Name": "Social Capital Suvretta Holdings Corp. IV Class A Ordinary Shares"
  },
  {
    "Symbol": "DNB",
    "Name": "Dun & Bradstreet Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DNLI",
    "Name": "Denali Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DNMR",
    "Name": "Danimer Scientific Inc. Common Stock"
  },
  {
    "Symbol": "DNN",
    "Name": "Denison Mines Corp Ordinary Shares (Canada)"
  },
  {
    "Symbol": "DNOW",
    "Name": "NOW Inc. Common Stock"
  },
  {
    "Symbol": "DNP",
    "Name": "DNP Select Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "DNUT",
    "Name": "Krispy Kreme Inc. Common Stock"
  },
  {
    "Symbol": "DO",
    "Name": "Diamond Offshore Drilling Inc. Common Stock"
  },
  {
    "Symbol": "DOC",
    "Name": "Physicians Realty Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "DOCN",
    "Name": "DigitalOcean Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DOCS",
    "Name": "Doximity Inc. Class A Common Stock"
  },
  {
    "Symbol": "DOCU",
    "Name": "DocuSign Inc. Common Stock"
  },
  {
    "Symbol": "DOGZ",
    "Name": "Dogness (International) Corporation Class A Common Stock"
  },
  {
    "Symbol": "DOLE",
    "Name": "Dole plc Ordinary Shares"
  },
  {
    "Symbol": "DOMA",
    "Name": "Doma Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DOMH",
    "Name": "Dominari Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DOMO",
    "Name": "Domo Inc. Class B Common Stock"
  },
  {
    "Symbol": "DOOO",
    "Name": "BRP Inc. (Recreational Products) Common Subordinate Voting Shares"
  },
  {
    "Symbol": "DOOR",
    "Name": "Masonite International Corporation Ordinary Shares (Canada)"
  },
  {
    "Symbol": "DORM",
    "Name": "Dorman Products Inc. Common Stock"
  },
  {
    "Symbol": "DOUG",
    "Name": "Douglas Elliman Inc. Common Stock"
  },
  {
    "Symbol": "DOV",
    "Name": "Dover Corporation Common Stock"
  },
  {
    "Symbol": "DOW",
    "Name": "Dow Inc. Common Stock"
  },
  {
    "Symbol": "DOX",
    "Name": "Amdocs Limited Ordinary Shares"
  },
  {
    "Symbol": "DOYU",
    "Name": "DouYu International Holdings Limited ADS"
  },
  {
    "Symbol": "DPCS",
    "Name": "DP Cap Acquisition Corp I Class A Ordinary Shares"
  },
  {
    "Symbol": "DPG",
    "Name": "Duff & Phelps Utility and Infrastructure Fund Inc."
  },
  {
    "Symbol": "DPRO",
    "Name": "Draganfly Inc. Common Shares"
  },
  {
    "Symbol": "DPSI",
    "Name": "DecisionPoint Systems Inc. Common Stock"
  },
  {
    "Symbol": "DPZ",
    "Name": "Domino's Pizza Inc Common Stock"
  },
  {
    "Symbol": "DQ",
    "Name": "DAQO New Energy Corp. American Depositary Shares each representing five ordinary shares"
  },
  {
    "Symbol": "DRCT",
    "Name": "Direct Digital Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "DRCTW",
    "Name": "Direct Digital Holdings Inc. Warrant"
  },
  {
    "Symbol": "DRD",
    "Name": "DRDGOLD Limited American Depositary Shares"
  },
  {
    "Symbol": "DRH",
    "Name": "Diamondrock Hospitality Company Common Stock"
  },
  {
    "Symbol": "DRH^A",
    "Name": "Diamondrock Hospitality Company 8.250% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "DRI",
    "Name": "Darden Restaurants Inc. Common Stock"
  },
  {
    "Symbol": "DRIO",
    "Name": "DarioHealth Corp. Common Stock"
  },
  {
    "Symbol": "DRMA",
    "Name": "Dermata Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DRMAW",
    "Name": "Dermata Therapeutics Inc. Warrant"
  },
  {
    "Symbol": "DRQ",
    "Name": "Dril-Quip Inc. Common Stock"
  },
  {
    "Symbol": "DRRX",
    "Name": "DURECT Corporation Common Stock"
  },
  {
    "Symbol": "DRS",
    "Name": "Leonardo DRS Inc. Common Stock"
  },
  {
    "Symbol": "DRTS",
    "Name": "Alpha Tau Medical Ltd. Ordinary Shares"
  },
  {
    "Symbol": "DRTSW",
    "Name": "Alpha Tau Medical Ltd. Warrant"
  },
  {
    "Symbol": "DRTT",
    "Name": "DIRTT Environmental Solutions Ltd. Common Shares"
  },
  {
    "Symbol": "DRUG",
    "Name": "Bright Minds Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "DRVN",
    "Name": "Driven Brands Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DSAQ",
    "Name": "Direct Selling Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DSEY",
    "Name": "Diversey Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "DSGN",
    "Name": "Design Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DSGR",
    "Name": "Distribution Solutions Group Inc. Common Stock"
  },
  {
    "Symbol": "DSGX",
    "Name": "Descartes Systems Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "DSKE",
    "Name": "Daseke Inc. Common Stock"
  },
  {
    "Symbol": "DSL",
    "Name": "DoubleLine Income Solutions Fund Common Shares of Beneficial Interests"
  },
  {
    "Symbol": "DSM",
    "Name": "BNY Mellon Strategic Municipal Bond Fund Inc. Common Stock"
  },
  {
    "Symbol": "DSP",
    "Name": "Viant Technology Inc. Class A Common Stock"
  },
  {
    "Symbol": "DSS",
    "Name": "DSS Inc. Common Stock"
  },
  {
    "Symbol": "DSU",
    "Name": "Blackrock Debt Strategies Fund Inc. Common Stock"
  },
  {
    "Symbol": "DSWL",
    "Name": "Deswell Industries Inc. Common Shares"
  },
  {
    "Symbol": "DSX",
    "Name": "Diana Shipping inc. common stock"
  },
  {
    "Symbol": "DSX^B",
    "Name": "Diana Shipping Inc. Perpetual Preferred Shares Series B (Marshall Islands)"
  },
  {
    "Symbol": "DT",
    "Name": "Dynatrace Inc. Common Stock"
  },
  {
    "Symbol": "DTB",
    "Name": "DTE Energy Company 2020 Series G 4.375% Junior Subordinated Debentures due 2080"
  },
  {
    "Symbol": "DTC",
    "Name": "Solo Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "DTE",
    "Name": "DTE Energy Company Common Stock"
  },
  {
    "Symbol": "DTF",
    "Name": "DTF Tax-Free Income 2028 Term Fund Inc. Common Stock"
  },
  {
    "Symbol": "DTG",
    "Name": "DTE Energy Company 2021 Series E 4.375% Junior Subordinated Debentures"
  },
  {
    "Symbol": "DTIL",
    "Name": "Precision BioSciences Inc. Common Stock"
  },
  {
    "Symbol": "DTM",
    "Name": "DT Midstream Inc. Common Stock"
  },
  {
    "Symbol": "DTOC",
    "Name": "Digital Transformation Opportunities Corp. Class A Common Stock"
  },
  {
    "Symbol": "DTOCW",
    "Name": "Digital Transformation Opportunities Corp. Warrant"
  },
  {
    "Symbol": "DTSS",
    "Name": "Datasea Inc. Common Stock"
  },
  {
    "Symbol": "DTST",
    "Name": "Data Storage Corporation Common Stock"
  },
  {
    "Symbol": "DTSTW",
    "Name": "Data Storage Corporation Warrant"
  },
  {
    "Symbol": "DTW",
    "Name": "DTE Energy Company 2017 Series E 5.25% Junior Subordinated Debentures due 2077"
  },
  {
    "Symbol": "DUET",
    "Name": "DUET Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DUK",
    "Name": "Duke Energy Corporation (Holding Company) Common Stock"
  },
  {
    "Symbol": "DUK^A",
    "Name": "Duke Energy Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "DUKB",
    "Name": "Duke Energy Corporation 5.625% Junior Subordinated Debentures due 2078"
  },
  {
    "Symbol": "DUNE",
    "Name": "Dune Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "DUO",
    "Name": "Fangdd Network Group Ltd. American Depositary Shares"
  },
  {
    "Symbol": "DUOL",
    "Name": "Duolingo Inc. Class A Common Stock"
  },
  {
    "Symbol": "DUOT",
    "Name": "Duos Technologies Group Inc. Common Stock"
  },
  {
    "Symbol": "DV",
    "Name": "DoubleVerify Holdings Inc. Common Stock"
  },
  {
    "Symbol": "DVA",
    "Name": "DaVita Inc. Common Stock"
  },
  {
    "Symbol": "DVAX",
    "Name": "Dynavax Technologies Corporation Common Stock"
  },
  {
    "Symbol": "DVN",
    "Name": "Devon Energy Corporation Common Stock"
  },
  {
    "Symbol": "DWAC",
    "Name": "Digital World Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "DWACU",
    "Name": "Digital World Acquisition Corp. Units"
  },
  {
    "Symbol": "DWACW",
    "Name": "Digital World Acquisition Corp. Warrants"
  },
  {
    "Symbol": "DWSN",
    "Name": "Dawson Geophysical Company Common Stock"
  },
  {
    "Symbol": "DX",
    "Name": "Dynex Capital Inc. Common Stock"
  },
  {
    "Symbol": "DX^C",
    "Name": "Dynex Capital Inc. 6.900% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "DXC",
    "Name": "DXC Technology Company Common Stock"
  },
  {
    "Symbol": "DXCM",
    "Name": "DexCom Inc. Common Stock"
  },
  {
    "Symbol": "DXF",
    "Name": "Dunxin Financial Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "DXLG",
    "Name": "Destination XL Group Inc. Common Stock"
  },
  {
    "Symbol": "DXPE",
    "Name": "DXP Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "DXR",
    "Name": "Daxor Corporation Common Stock"
  },
  {
    "Symbol": "DXYN",
    "Name": "Dixie Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "DY",
    "Name": "Dycom Industries Inc. Common Stock"
  },
  {
    "Symbol": "DYAI",
    "Name": "Dyadic International Inc. Common Stock"
  },
  {
    "Symbol": "DYN",
    "Name": "Dyne Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "DYNT",
    "Name": "Dynatronics Corporation Common Stock"
  },
  {
    "Symbol": "DZSI",
    "Name": "DZS Inc. Common Stock"
  },
  {
    "Symbol": "E",
    "Name": "ENI S.p.A. Common Stock"
  },
  {
    "Symbol": "EA",
    "Name": "Electronic Arts Inc. Common Stock"
  },
  {
    "Symbol": "EAC",
    "Name": "Edify Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "EACPW",
    "Name": "Edify Acquisition Corp. Warrant"
  },
  {
    "Symbol": "EAD",
    "Name": "Allspring Income Opportunities Fund Common Shares"
  },
  {
    "Symbol": "EAF",
    "Name": "GrafTech International Ltd. Common Stock"
  },
  {
    "Symbol": "EAI",
    "Name": "Entergy Arkansas LLC First Mortgage Bonds 4.875% Series Due September 1 2066"
  },
  {
    "Symbol": "EAR",
    "Name": "Eargo Inc. Common Stock"
  },
  {
    "Symbol": "EARN",
    "Name": "Ellington Residential Mortgage REIT Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EAST",
    "Name": "Eastside Distilling Inc. Common Stock"
  },
  {
    "Symbol": "EAT",
    "Name": "Brinker International Inc. Common Stock"
  },
  {
    "Symbol": "EB",
    "Name": "Eventbrite Inc. Class A Common Stock"
  },
  {
    "Symbol": "EBAY",
    "Name": "eBay Inc. Common Stock"
  },
  {
    "Symbol": "EBC",
    "Name": "Eastern Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "EBET",
    "Name": "EBET INC. Common Stock"
  },
  {
    "Symbol": "EBF",
    "Name": "Ennis Inc. Common Stock"
  },
  {
    "Symbol": "EBIX",
    "Name": "Ebix Inc. Common Stock"
  },
  {
    "Symbol": "EBMT",
    "Name": "Eagle Bancorp Montana Inc. Common Stock"
  },
  {
    "Symbol": "EBON",
    "Name": "Ebang International Holdings Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "EBR",
    "Name": "Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one Common Share)"
  },
  {
    "Symbol": "EBS",
    "Name": "Emergent Biosolutions Inc. Common Stock"
  },
  {
    "Symbol": "EBTC",
    "Name": "Enterprise Bancorp Inc Common Stock"
  },
  {
    "Symbol": "EC",
    "Name": "Ecopetrol S.A. American Depositary Shares"
  },
  {
    "Symbol": "ECAT",
    "Name": "BlackRock ESG Capital Allocation Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ECBK",
    "Name": "ECB Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "ECC",
    "Name": "Eagle Point Credit Company Inc. Common Stock"
  },
  {
    "Symbol": "ECC^D",
    "Name": "Eagle Point Credit Company Inc. 6.75% Series D Preferred Stock"
  },
  {
    "Symbol": "ECCC",
    "Name": "Eagle Point Credit Company Inc. 6.50% Series C Term Preferred Stock due 2031"
  },
  {
    "Symbol": "ECCV",
    "Name": "Eagle Point Credit Company Inc. 5.375% Notes due 2029"
  },
  {
    "Symbol": "ECCW",
    "Name": "Eagle Point Credit Company Inc. 6.75% Notes due 2031"
  },
  {
    "Symbol": "ECCX",
    "Name": "Eagle Point Credit Company Inc. 6.6875% Notes due 2028"
  },
  {
    "Symbol": "ECF",
    "Name": "Ellsworth Growth and Income Fund Ltd."
  },
  {
    "Symbol": "ECF^A",
    "Name": "Ellsworth Growth and Income Fund Ltd. 5.25% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)"
  },
  {
    "Symbol": "ECL",
    "Name": "Ecolab Inc. Common Stock"
  },
  {
    "Symbol": "ECOR",
    "Name": "electroCore Inc. Common Stock"
  },
  {
    "Symbol": "ECPG",
    "Name": "Encore Capital Group Inc Common Stock"
  },
  {
    "Symbol": "ECVT",
    "Name": "Ecovyst Inc. Common Stock"
  },
  {
    "Symbol": "ECX",
    "Name": "ECARX Holdings Inc. Class A Ordinary shares"
  },
  {
    "Symbol": "ECXWW",
    "Name": "ECARX Holdings Inc. Warrants"
  },
  {
    "Symbol": "ED",
    "Name": "Consolidated Edison Inc. Common Stock"
  },
  {
    "Symbol": "EDAP",
    "Name": "EDAP TMS S.A. American Depositary Shares"
  },
  {
    "Symbol": "EDBL",
    "Name": "Edible Garden AG Incorporated Common Stock"
  },
  {
    "Symbol": "EDBLW",
    "Name": "Edible Garden AG Incorporated Warrant"
  },
  {
    "Symbol": "EDD",
    "Name": "Morgan Stanley Emerging Markets Domestic Debt Fund Inc. Morgan Stanley Emerging Markets Domestic Debt Fund Inc. Common Stock"
  },
  {
    "Symbol": "EDF",
    "Name": "Virtus Stone Harbor Emerging Markets Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EDI",
    "Name": "Virtus Stone Harbor Emerging Markets Total Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EDIT",
    "Name": "Editas Medicine Inc. Common Stock"
  },
  {
    "Symbol": "EDN",
    "Name": "Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares"
  },
  {
    "Symbol": "EDR",
    "Name": "Endeavor Group Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "EDRY",
    "Name": "EuroDry Ltd. Common Shares"
  },
  {
    "Symbol": "EDSA",
    "Name": "Edesa Biotech Inc. Common Shares"
  },
  {
    "Symbol": "EDTK",
    "Name": "Skillful Craftsman Education Technology Limited Ordinary Share"
  },
  {
    "Symbol": "EDU",
    "Name": "New Oriental Education & Technology Group Inc. Sponsored ADR representing 10 Ordinary Share (Cayman Islands)"
  },
  {
    "Symbol": "EDUC",
    "Name": "Educational Development Corporation Common Stock"
  },
  {
    "Symbol": "EE",
    "Name": "Excelerate Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "EEA",
    "Name": "The European Equity Fund Inc. Common Stock"
  },
  {
    "Symbol": "EEFT",
    "Name": "Euronet Worldwide Inc. Common Stock"
  },
  {
    "Symbol": "EEIQ",
    "Name": "EpicQuest Education Group International Limited Common Stock"
  },
  {
    "Symbol": "EEX",
    "Name": "Emerald Holding Inc. Common Stock"
  },
  {
    "Symbol": "EFC",
    "Name": "Ellington Financial Inc. Common Stock"
  },
  {
    "Symbol": "EFC^A",
    "Name": "Ellington Financial Inc. 6.750% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "EFC^B",
    "Name": "Ellington Financial Inc. 6.250% Series B Fixed-Rate Reset Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "EFC^C",
    "Name": "Ellington Financial Inc. 8.625% Series C Fixed-Rate Reset Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "EFHT",
    "Name": "EF Hutton Acquisition Corporation I Common Stock"
  },
  {
    "Symbol": "EFHTR",
    "Name": "EF Hutton Acquisition Corporation I Rights"
  },
  {
    "Symbol": "EFHTW",
    "Name": "EF Hutton Acquisition Corporation I Warrant"
  },
  {
    "Symbol": "EFOI",
    "Name": "Energy Focus Inc. Common Stock"
  },
  {
    "Symbol": "EFR",
    "Name": "Eaton Vance Senior Floating-Rate Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EFSC",
    "Name": "Enterprise Financial Services Corporation Common Stock"
  },
  {
    "Symbol": "EFSCP",
    "Name": "Enterprise Financial Services Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 5% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "EFSH",
    "Name": "1847 Holdings LLC Common Shares"
  },
  {
    "Symbol": "EFT",
    "Name": "Eaton Vance Floating Rate Income Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EFTR",
    "Name": "eFFECTOR Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "EFTRW",
    "Name": "eFFECTOR Therapeutics Inc. Warrant"
  },
  {
    "Symbol": "EFX",
    "Name": "Equifax Inc. Common Stock"
  },
  {
    "Symbol": "EFXT",
    "Name": "Enerflex Ltd Common Shares"
  },
  {
    "Symbol": "EGAN",
    "Name": "eGain Corporation Common Stock"
  },
  {
    "Symbol": "EGBN",
    "Name": "Eagle Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "EGF",
    "Name": "Blackrock Enhanced Government Fund Inc. Common Stock"
  },
  {
    "Symbol": "EGGF",
    "Name": "EG Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "EGHT",
    "Name": "8x8 Inc Common Stock"
  },
  {
    "Symbol": "EGIO",
    "Name": "Edgio Inc. Common Stock"
  },
  {
    "Symbol": "EGLE",
    "Name": "Eagle Bulk Shipping Inc. Common Stock"
  },
  {
    "Symbol": "EGLX",
    "Name": "Enthusiast Gaming Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EGO",
    "Name": "Eldorado Gold Corporation Ordinary Shares"
  },
  {
    "Symbol": "EGP",
    "Name": "EastGroup Properties Inc. Common Stock"
  },
  {
    "Symbol": "EGRX",
    "Name": "Eagle Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "EGY",
    "Name": "VAALCO Energy Inc.  Common Stock"
  },
  {
    "Symbol": "EH",
    "Name": "EHang Holdings Limited ADS"
  },
  {
    "Symbol": "EHAB",
    "Name": "Enhabit Inc. Common Stock"
  },
  {
    "Symbol": "EHC",
    "Name": "Encompass Health Corporation Common Stock"
  },
  {
    "Symbol": "EHI",
    "Name": "Western Asset Global High Income Fund Inc Common Stock"
  },
  {
    "Symbol": "EHTH",
    "Name": "eHealth Inc. Common Stock"
  },
  {
    "Symbol": "EIC",
    "Name": "Eagle Point Income Company Inc. Common Stock"
  },
  {
    "Symbol": "EICA",
    "Name": "Eagle Point Income Company Inc. 5.00% Series A Term Preferred Stock due 2026"
  },
  {
    "Symbol": "EIG",
    "Name": "Employers Holdings Inc Common Stock"
  },
  {
    "Symbol": "EIGR",
    "Name": "Eiger BioPharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "EIM",
    "Name": "Eaton Vance Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
  },
  {
    "Symbol": "EIX",
    "Name": "Edison International Common Stock"
  },
  {
    "Symbol": "EJH",
    "Name": "E-Home Household Service Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "EKSO",
    "Name": "Ekso Bionics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EL",
    "Name": "Estee Lauder Companies Inc. (The) Common Stock"
  },
  {
    "Symbol": "ELA",
    "Name": "Envela Corporation Common Stock"
  },
  {
    "Symbol": "ELAN",
    "Name": "Elanco Animal Health Incorporated Common Stock"
  },
  {
    "Symbol": "ELBM",
    "Name": "Electra Battery Materials Corporation Common Stock"
  },
  {
    "Symbol": "ELC",
    "Name": "Entergy Louisiana Inc. Collateral Trust Mortgage Bonds 4.875 % Series due September 1 2066"
  },
  {
    "Symbol": "ELDN",
    "Name": "Eledon Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ELEV",
    "Name": "Elevation Oncology Inc. Common stock"
  },
  {
    "Symbol": "ELF",
    "Name": "e.l.f. Beauty Inc. Common Stock"
  },
  {
    "Symbol": "ELLO",
    "Name": "Ellomay Capital Ltd Ordinary Shares (Israel)"
  },
  {
    "Symbol": "ELMD",
    "Name": "Electromed Inc. Common Stock"
  },
  {
    "Symbol": "ELME",
    "Name": "Elme Communities Common Stock"
  },
  {
    "Symbol": "ELOX",
    "Name": "Eloxx Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ELP",
    "Name": "Companhia Paranaense de Energia (COPEL) American Depositary Shares (each representing one Unit consisting one Common Share and four non-voting Class B Preferred Shares)"
  },
  {
    "Symbol": "ELS",
    "Name": "Equity Lifestyle Properties Inc. Common Stock"
  },
  {
    "Symbol": "ELSE",
    "Name": "Electro-Sensors Inc. Common Stock"
  },
  {
    "Symbol": "ELTK",
    "Name": "Eltek Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ELV",
    "Name": "Elevance Health Inc. Common Stock"
  },
  {
    "Symbol": "ELVN",
    "Name": "Enliven Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ELYM",
    "Name": "Eliem Therapeutics Inc Common Stock"
  },
  {
    "Symbol": "ELYS",
    "Name": "Elys Game Technology Corp. Common Stock"
  },
  {
    "Symbol": "EM",
    "Name": "Smart Share Global Limited American Depositary Shares"
  },
  {
    "Symbol": "EMAN",
    "Name": "eMagin Corporation Common Stock"
  },
  {
    "Symbol": "EMBC",
    "Name": "Embecta Corp. Common Stock"
  },
  {
    "Symbol": "EMBK",
    "Name": "Embark Technology Inc. Common Stock"
  },
  {
    "Symbol": "EMBKW",
    "Name": "Embark Technology Inc. Warrants"
  },
  {
    "Symbol": "EMCG",
    "Name": "Embrace Change Acquisition Corp Ordinary Shares"
  },
  {
    "Symbol": "EMCGR",
    "Name": "Embrace Change Acquisition Corp Rights"
  },
  {
    "Symbol": "EMCGU",
    "Name": "Embrace Change Acquisition Corp Unit"
  },
  {
    "Symbol": "EMD",
    "Name": "Western Asset Emerging Markets Debt Fund Inc Common Stock"
  },
  {
    "Symbol": "EME",
    "Name": "EMCOR Group Inc. Common Stock"
  },
  {
    "Symbol": "EMF",
    "Name": "Templeton Emerging Markets Fund Common Stock"
  },
  {
    "Symbol": "EMKR",
    "Name": "EMCORE Corporation Common Stock"
  },
  {
    "Symbol": "EML",
    "Name": "Eastern Company (The) Common Stock"
  },
  {
    "Symbol": "EMLD",
    "Name": "FTAC Emerald Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "EMLDW",
    "Name": "FTAC Emerald Acquisition Corp. Warrant"
  },
  {
    "Symbol": "EMN",
    "Name": "Eastman Chemical Company Common Stock"
  },
  {
    "Symbol": "EMO",
    "Name": "ClearBridge Energy Midstream Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "EMP",
    "Name": "Entergy Mississippi LLC First Mortgage Bonds 4.90% Series Due October 1 2066"
  },
  {
    "Symbol": "EMR",
    "Name": "Emerson Electric Company Common Stock"
  },
  {
    "Symbol": "EMX",
    "Name": "EMX Royalty Corporation Common Shares (Canada)"
  },
  {
    "Symbol": "ENB",
    "Name": "Enbridge Inc Common Stock"
  },
  {
    "Symbol": "ENCP",
    "Name": "Energem Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "ENER",
    "Name": "Accretion Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "ENERR",
    "Name": "Accretion Acquisition Corp. Right"
  },
  {
    "Symbol": "ENERW",
    "Name": "Accretion Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ENFN",
    "Name": "Enfusion Inc. Class A Common Stock"
  },
  {
    "Symbol": "ENG",
    "Name": "ENGlobal Corporation Common Stock"
  },
  {
    "Symbol": "ENIC",
    "Name": "Enel Chile S.A. American Depositary Shares (Each representing 50 shares of Common Stock)"
  },
  {
    "Symbol": "ENJ",
    "Name": "Entergy New Orleans LLC First Mortgage Bonds 5.0% Series due December 1 2052"
  },
  {
    "Symbol": "ENLC",
    "Name": "EnLink Midstream LLC Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "ENLT",
    "Name": "Enlight Renewable Energy Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ENLV",
    "Name": "Enlivex Therapeutics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ENO",
    "Name": "Entergy New Orleans LLC First Mortgage Bonds 5.50% Series due April 1 2066"
  },
  {
    "Symbol": "ENOB",
    "Name": "Enochian Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ENOV",
    "Name": "Enovis Corporation Common Stock"
  },
  {
    "Symbol": "ENPH",
    "Name": "Enphase Energy Inc. Common Stock"
  },
  {
    "Symbol": "ENR",
    "Name": "Energizer Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ENS",
    "Name": "EnerSys Common Stock"
  },
  {
    "Symbol": "ENSC",
    "Name": "Ensysce Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ENSG",
    "Name": "The Ensign Group Inc. Common Stock"
  },
  {
    "Symbol": "ENSV",
    "Name": "Enservco Corporation Common Stock"
  },
  {
    "Symbol": "ENTA",
    "Name": "Enanta Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ENTF",
    "Name": "Enterprise 4.0 Technology Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "ENTG",
    "Name": "Entegris Inc. Common Stock"
  },
  {
    "Symbol": "ENTX",
    "Name": "Entera Bio Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ENTXW",
    "Name": "Entera Bio Ltd. Warrant"
  },
  {
    "Symbol": "ENV",
    "Name": "Envestnet Inc Common Stock"
  },
  {
    "Symbol": "ENVA",
    "Name": "Enova International Inc. Common Stock"
  },
  {
    "Symbol": "ENVB",
    "Name": "Enveric Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "ENVX",
    "Name": "Enovix Corporation Common Stock"
  },
  {
    "Symbol": "ENX",
    "Name": "Eaton Vance New York Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
  },
  {
    "Symbol": "ENZ",
    "Name": "Enzo Biochem Inc. Common Stock ($0.01 Par Value)"
  },
  {
    "Symbol": "EOCW",
    "Name": "Elliott Opportunity II Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "EOD",
    "Name": "Allspring Global Dividend Opportunity Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EOG",
    "Name": "EOG Resources Inc. Common Stock"
  },
  {
    "Symbol": "EOI",
    "Name": "Eaton Vance Enhance Equity Income Fund Eaton Vance Enhanced Equity Income Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "EOLS",
    "Name": "Evolus Inc. Common Stock"
  },
  {
    "Symbol": "EOS",
    "Name": "Eaton Vance Enhance Equity Income Fund II Common Stock"
  },
  {
    "Symbol": "EOSE",
    "Name": "Eos Energy Enterprises Inc. Class A Common Stock"
  },
  {
    "Symbol": "EOSEW",
    "Name": "Eos Energy Enterprises Inc. Warrant"
  },
  {
    "Symbol": "EOT",
    "Name": "Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST"
  },
  {
    "Symbol": "EP",
    "Name": "Empire Petroleum Corporation Common Stock"
  },
  {
    "Symbol": "EP^C",
    "Name": "El Paso Corporation Preferred Stock"
  },
  {
    "Symbol": "EPAC",
    "Name": "Enerpac Tool Group Corp. Common Stock"
  },
  {
    "Symbol": "EPAM",
    "Name": "EPAM Systems Inc. Common Stock"
  },
  {
    "Symbol": "EPC",
    "Name": "Edgewell Personal Care Company Common Stock"
  },
  {
    "Symbol": "EPD",
    "Name": "Enterprise Products Partners L.P. Common Stock"
  },
  {
    "Symbol": "EPIX",
    "Name": "ESSA Pharma Inc. Common Stock"
  },
  {
    "Symbol": "EPM",
    "Name": "Evolution Petroleum Corporation Inc. Common Stock"
  },
  {
    "Symbol": "EPOW",
    "Name": "Sunrise New Energy Co. Ltd Ordinary Shares"
  },
  {
    "Symbol": "EPR",
    "Name": "EPR Properties Common Stock"
  },
  {
    "Symbol": "EPR^C",
    "Name": "EPR Properties 5.75% Series C Cumulative Convertible Preferred Shares"
  },
  {
    "Symbol": "EPR^E",
    "Name": "EPR Properties Series E Cumulative Conv Pfd Shs Ser E"
  },
  {
    "Symbol": "EPR^G",
    "Name": "EPR Properties 5.750% Series G Cumulative Redeemable Preferred Shares"
  },
  {
    "Symbol": "EPRT",
    "Name": "Essential Properties Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "EPSN",
    "Name": "Epsilon Energy Ltd. Common Share"
  },
  {
    "Symbol": "EQ",
    "Name": "Equillium Inc. Common Stock"
  },
  {
    "Symbol": "EQBK",
    "Name": "Equity Bancshares Inc. Class A Common Stock"
  },
  {
    "Symbol": "EQC",
    "Name": "Equity Commonwealth Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EQC^D",
    "Name": "Equity Commonwealth 6.50% Pfd Conv Shs Ser D"
  },
  {
    "Symbol": "EQH",
    "Name": "Equitable Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EQH^A",
    "Name": "Equitable Holdings Inc. Depositary Shares"
  },
  {
    "Symbol": "EQH^C",
    "Name": "Equitable Holdings Inc. Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "EQIX",
    "Name": "Equinix Inc. Common Stock REIT"
  },
  {
    "Symbol": "EQNR",
    "Name": "Equinor ASA"
  },
  {
    "Symbol": "EQR",
    "Name": "Equity Residential Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EQRX",
    "Name": "EQRx Inc.  Common Stock"
  },
  {
    "Symbol": "EQRXW",
    "Name": "EQRx Inc. Warrant"
  },
  {
    "Symbol": "EQS",
    "Name": "Equus Total Return Inc. Common Stock"
  },
  {
    "Symbol": "EQT",
    "Name": "EQT Corporation Common Stock"
  },
  {
    "Symbol": "EQX",
    "Name": "Equinox Gold Corp. Common Shares"
  },
  {
    "Symbol": "ERAS",
    "Name": "Erasca Inc. Common Stock"
  },
  {
    "Symbol": "ERC",
    "Name": "Allspring Multi-Sector Income Fund Common Stock"
  },
  {
    "Symbol": "ERES",
    "Name": "East Resources Acquisition Company Class A Common Stock"
  },
  {
    "Symbol": "ERESU",
    "Name": "East Resources Acquisition Company Unit"
  },
  {
    "Symbol": "ERESW",
    "Name": "East Resources Acquisition Company Warrant"
  },
  {
    "Symbol": "ERF",
    "Name": "Enerplus Corporation Common Stock"
  },
  {
    "Symbol": "ERH",
    "Name": "Allspring Utilities and High Income Fund Common Shares"
  },
  {
    "Symbol": "ERIC",
    "Name": "Ericsson American Depositary Shares"
  },
  {
    "Symbol": "ERIE",
    "Name": "Erie Indemnity Company Class A Common Stock"
  },
  {
    "Symbol": "ERII",
    "Name": "Energy Recovery Inc. Common Stock"
  },
  {
    "Symbol": "ERJ",
    "Name": "Embraer S.A. Common Stock"
  },
  {
    "Symbol": "ERNA",
    "Name": "Eterna Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ERO",
    "Name": "Ero Copper Corp. Common Shares"
  },
  {
    "Symbol": "ERYP",
    "Name": "Erytech Pharma S.A. American Depositary Shares"
  },
  {
    "Symbol": "ES",
    "Name": "Eversource Energy (D/B/A) Common Stock"
  },
  {
    "Symbol": "ESAB",
    "Name": "ESAB Corporation Common Stock"
  },
  {
    "Symbol": "ESAC",
    "Name": "ESGEN Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "ESACW",
    "Name": "ESGEN Acquisition Corporation Warrants"
  },
  {
    "Symbol": "ESCA",
    "Name": "Escalade Incorporated Common Stock"
  },
  {
    "Symbol": "ESE",
    "Name": "ESCO Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ESEA",
    "Name": "Euroseas Ltd. Common Stock (Marshall Islands)"
  },
  {
    "Symbol": "ESGR",
    "Name": "Enstar Group Limited Ordinary Shares"
  },
  {
    "Symbol": "ESGRO",
    "Name": "Enstar Group Limited Depository Shares 7.00% Perpetual Non-Cumulative Preference Shares Series E"
  },
  {
    "Symbol": "ESGRP",
    "Name": "Enstar Group Limited Depositary Shares Each Representing 1/1000th of an interest in Preference Shares"
  },
  {
    "Symbol": "ESI",
    "Name": "Element Solutions Inc. Common Stock"
  },
  {
    "Symbol": "ESLT",
    "Name": "Elbit Systems Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ESMT",
    "Name": "EngageSmart Inc. Common Stock"
  },
  {
    "Symbol": "ESNT",
    "Name": "Essent Group Ltd. Common Shares"
  },
  {
    "Symbol": "ESOA",
    "Name": "Energy Services of America Corporation Common Stock"
  },
  {
    "Symbol": "ESP",
    "Name": "Espey Mfg. & Electronics Corp. Common Stock"
  },
  {
    "Symbol": "ESPR",
    "Name": "Esperion Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ESQ",
    "Name": "Esquire Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ESRT",
    "Name": "Empire State Realty Trust Inc. Class A Common Stock"
  },
  {
    "Symbol": "ESS",
    "Name": "Essex Property Trust Inc. Common Stock"
  },
  {
    "Symbol": "ESSA",
    "Name": "ESSA Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "ESTA",
    "Name": "Establishment Labs Holdings Inc. Common Shares"
  },
  {
    "Symbol": "ESTC",
    "Name": "Elastic N.V. Ordinary Shares"
  },
  {
    "Symbol": "ESTE",
    "Name": "Earthstone Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "ET",
    "Name": "Energy Transfer LP Common Units"
  },
  {
    "Symbol": "ET^C",
    "Name": "Energy Transfer L.P. 7.375% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
  },
  {
    "Symbol": "ET^D",
    "Name": "Energy Transfer L.P. 7.625% Series D Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
  },
  {
    "Symbol": "ET^E",
    "Name": "Energy Transfer L.P. 7.600% Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
  },
  {
    "Symbol": "ETAO",
    "Name": "Etao International Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ETB",
    "Name": "Eaton Vance Tax-Managed Buy-Write Income Fund Eaton Vance Tax-Managed Buy-Write Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETD",
    "Name": "Ethan Allen Interiors Inc. Common Stock"
  },
  {
    "Symbol": "ETG",
    "Name": "Eaton Vance Tax-Advantaged Global Dividend Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETI^",
    "Name": "Entergy Texas Inc 5.375% Series A Preferred Stock Cumulative No Par Value"
  },
  {
    "Symbol": "ETJ",
    "Name": "Eaton Vance Risk-Managed Diversified Equity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETN",
    "Name": "Eaton Corporation PLC Ordinary Shares"
  },
  {
    "Symbol": "ETNB",
    "Name": "89bio Inc. Common Stock"
  },
  {
    "Symbol": "ETO",
    "Name": "Eaton Vance Tax-Advantage Global Dividend Opp Common Stock"
  },
  {
    "Symbol": "ETON",
    "Name": "Eton Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ETR",
    "Name": "Entergy Corporation Common Stock"
  },
  {
    "Symbol": "ETRN",
    "Name": "Equitrans Midstream Corporation Common Stock"
  },
  {
    "Symbol": "ETSY",
    "Name": "Etsy Inc. Common Stock"
  },
  {
    "Symbol": "ETV",
    "Name": "Eaton Vance Corporation Eaton Vance Tax-Managed Buy-Write Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETW",
    "Name": "Eaton Vance Corporation Eaton Vance Tax-Managed Global Buy-Write Opportunites Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETWO",
    "Name": "E2open Parent Holdings Inc.Class A Common Stock"
  },
  {
    "Symbol": "ETX",
    "Name": "Eaton Vance Municipal Income 2028 Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "ETY",
    "Name": "Eaton Vance Tax-Managed Diversified Equity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EU",
    "Name": "enCore Energy Corp. Common Shares"
  },
  {
    "Symbol": "EUDA",
    "Name": "EUDA Health Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "EUDAW",
    "Name": "EUDA Health Holdings Limited Warrant"
  },
  {
    "Symbol": "EURN",
    "Name": "Euronav NV Ordinary Shares"
  },
  {
    "Symbol": "EVA",
    "Name": "Enviva Inc. Common Stock"
  },
  {
    "Symbol": "EVAX",
    "Name": "Evaxion Biotech A/S American Depositary Share"
  },
  {
    "Symbol": "EVBG",
    "Name": "Everbridge Inc. Common Stock"
  },
  {
    "Symbol": "EVBN",
    "Name": "Evans Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "EVC",
    "Name": "Entravision Communications Corporation Common Stock"
  },
  {
    "Symbol": "EVCM",
    "Name": "EverCommerce Inc. Common Stock"
  },
  {
    "Symbol": "EVE",
    "Name": "EVe Mobility Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "EVER",
    "Name": "EverQuote Inc. Class A Common Stock"
  },
  {
    "Symbol": "EVEX",
    "Name": "Eve Holding Inc. Common Stock"
  },
  {
    "Symbol": "EVF",
    "Name": "Eaton Vance Senior Income Trust Common Stock"
  },
  {
    "Symbol": "EVG",
    "Name": "Eaton Vance Short Diversified Income Fund Eaton Vance Short Duration Diversified Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EVGN",
    "Name": "Evogene Ltd Ordinary Shares"
  },
  {
    "Symbol": "EVGO",
    "Name": "EVgo Inc. Class A Common Stock"
  },
  {
    "Symbol": "EVGOW",
    "Name": "EVgo Inc. Warrants"
  },
  {
    "Symbol": "EVGR",
    "Name": "Evergreen Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "EVGRW",
    "Name": "Evergreen Corporation Warrant"
  },
  {
    "Symbol": "EVH",
    "Name": "Evolent Health Inc Class A Common Stock"
  },
  {
    "Symbol": "EVI",
    "Name": "EVI Industries Inc.  Common Stock"
  },
  {
    "Symbol": "EVLO",
    "Name": "Evelo Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "EVLV",
    "Name": "Evolv Technologies Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "EVLVW",
    "Name": "Evolv Technologies Holdings Inc. Warrant"
  },
  {
    "Symbol": "EVM",
    "Name": "Eaton Vance California Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
  },
  {
    "Symbol": "EVN",
    "Name": "Eaton Vance Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "EVO",
    "Name": "Evotec SE American Depositary Shares"
  },
  {
    "Symbol": "EVOJ",
    "Name": "Evo Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "EVOJU",
    "Name": "Evo Acquisition Corp. Unit"
  },
  {
    "Symbol": "EVOJW",
    "Name": "Evo Acquisition Corp. Warrant"
  },
  {
    "Symbol": "EVOK",
    "Name": "Evoke Pharma Inc. Common Stock"
  },
  {
    "Symbol": "EVR",
    "Name": "Evercore Inc. Class A Common Stock"
  },
  {
    "Symbol": "EVRG",
    "Name": "Evergy Inc. Common Stock"
  },
  {
    "Symbol": "EVRI",
    "Name": "Everi Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EVT",
    "Name": "Eaton Vance Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EVTC",
    "Name": "Evertec Inc. Common Stock"
  },
  {
    "Symbol": "EVTL",
    "Name": "Vertical Aerospace Ltd. Ordinary Shares"
  },
  {
    "Symbol": "EVTV",
    "Name": "Envirotech Vehicles Inc. Common Stock"
  },
  {
    "Symbol": "EVV",
    "Name": "Eaton Vance Limited Duration Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EW",
    "Name": "Edwards Lifesciences Corporation Common Stock"
  },
  {
    "Symbol": "EWBC",
    "Name": "East West Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "EWCZ",
    "Name": "European Wax Center Inc. Class A Common Stock"
  },
  {
    "Symbol": "EWTX",
    "Name": "Edgewise Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "EXAI",
    "Name": "Exscientia Plc American Depositary Shares"
  },
  {
    "Symbol": "EXAS",
    "Name": "Exact Sciences Corporation Common Stock"
  },
  {
    "Symbol": "EXC",
    "Name": "Exelon Corporation Common Stock"
  },
  {
    "Symbol": "EXEL",
    "Name": "Exelixis Inc. Common Stock"
  },
  {
    "Symbol": "EXFY",
    "Name": "Expensify Inc. Class A Common Stock"
  },
  {
    "Symbol": "EXG",
    "Name": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund Eaton Vance Tax-Managed Global Diversified Equity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "EXK",
    "Name": "Endeavour Silver Corporation Ordinary Shares (Canada)"
  },
  {
    "Symbol": "EXLS",
    "Name": "ExlService Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EXP",
    "Name": "Eagle Materials Inc Common Stock"
  },
  {
    "Symbol": "EXPD",
    "Name": "Expeditors International of Washington Inc. Common Stock"
  },
  {
    "Symbol": "EXPE",
    "Name": "Expedia Group Inc. Common Stock"
  },
  {
    "Symbol": "EXPI",
    "Name": "eXp World Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EXPO",
    "Name": "Exponent Inc. Common Stock"
  },
  {
    "Symbol": "EXPR",
    "Name": "Express Inc. Common Stock"
  },
  {
    "Symbol": "EXR",
    "Name": "Extra Space Storage Inc Common Stock"
  },
  {
    "Symbol": "EXTR",
    "Name": "Extreme Networks Inc. Common Stock"
  },
  {
    "Symbol": "EYE",
    "Name": "National Vision Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EYEN",
    "Name": "Eyenovia Inc. Common Stock"
  },
  {
    "Symbol": "EYPT",
    "Name": "EyePoint Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "EZFL",
    "Name": "EzFill Holdings Inc. Common Stock"
  },
  {
    "Symbol": "EZGO",
    "Name": "EZGO Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "EZPW",
    "Name": "EZCORP Inc. Class A Non Voting Common Stock"
  },
  {
    "Symbol": "F",
    "Name": "Ford Motor Company Common Stock"
  },
  {
    "Symbol": "F^B",
    "Name": "Ford Motor Company 6.20% Notes due June 1 2059"
  },
  {
    "Symbol": "F^C",
    "Name": "Ford Motor Company 6% Notes due December 1 2059"
  },
  {
    "Symbol": "F^D",
    "Name": "Ford Motor Company 6.500% Notes due August 15 2062"
  },
  {
    "Symbol": "FA",
    "Name": "First Advantage Corporation Common Stock"
  },
  {
    "Symbol": "FACT",
    "Name": "Freedom Acquisition I Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "FAF",
    "Name": "First American Corporation (New) Common Stock"
  },
  {
    "Symbol": "FAM",
    "Name": "First Trust/abrdn Global Opportunity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FAMI",
    "Name": "Farmmi Inc. Ordinary Shares"
  },
  {
    "Symbol": "FANG",
    "Name": "Diamondback Energy Inc. Common Stock"
  },
  {
    "Symbol": "FANH",
    "Name": "Fanhua Inc. American Depositary Shares"
  },
  {
    "Symbol": "FARM",
    "Name": "Farmer Brothers Company Common Stock"
  },
  {
    "Symbol": "FARO",
    "Name": "FARO Technologies Inc. Common Stock"
  },
  {
    "Symbol": "FAST",
    "Name": "Fastenal Company Common Stock"
  },
  {
    "Symbol": "FAT",
    "Name": "FAT Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "FATBB",
    "Name": "FAT Brands Inc. Class B Common Stock"
  },
  {
    "Symbol": "FATBP",
    "Name": "FAT Brands Inc. 8.25% Series B Cumulative Preferred Stock"
  },
  {
    "Symbol": "FATBW",
    "Name": "FAT Brands Inc. Warrant"
  },
  {
    "Symbol": "FATE",
    "Name": "Fate Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FATH",
    "Name": "Fathom Digital Manufacturing Corporation Class A Common Stock"
  },
  {
    "Symbol": "FATP",
    "Name": "Fat Projects Acquisition Corp Class A Ordinary Share"
  },
  {
    "Symbol": "FATPW",
    "Name": "Fat Projects Acquisition Corp Warrant"
  },
  {
    "Symbol": "FAX",
    "Name": "abrdn Asia-Pacific Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "FAZE",
    "Name": "FaZe Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FAZEW",
    "Name": "FaZe Holdings Inc. Warrant"
  },
  {
    "Symbol": "FBIN",
    "Name": "Fortune Brands Innovations Inc. Common Stock"
  },
  {
    "Symbol": "FBIO",
    "Name": "Fortress Biotech Inc. Common Stock"
  },
  {
    "Symbol": "FBIOP",
    "Name": "Fortress Biotech Inc. 9.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "FBIZ",
    "Name": "First Business Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "FBK",
    "Name": "FB Financial Corporation Common Stock"
  },
  {
    "Symbol": "FBMS",
    "Name": "First Bancshares Inc."
  },
  {
    "Symbol": "FBNC",
    "Name": "First Bancorp Common Stock"
  },
  {
    "Symbol": "FBP",
    "Name": "First BanCorp. New Common Stock"
  },
  {
    "Symbol": "FBRT",
    "Name": "Franklin BSP Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "FBRT^E",
    "Name": "Franklin BSP Realty Trust Inc. 7.50% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "FBRX",
    "Name": "Forte Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "FC",
    "Name": "Franklin Covey Company Common Stock"
  },
  {
    "Symbol": "FCAP",
    "Name": "First Capital Inc. Common Stock"
  },
  {
    "Symbol": "FCBC",
    "Name": "First Community Bankshares Inc. (VA) Common Stock"
  },
  {
    "Symbol": "FCCO",
    "Name": "First Community Corporation Common Stock"
  },
  {
    "Symbol": "FCEL",
    "Name": "FuelCell Energy Inc. Common Stock"
  },
  {
    "Symbol": "FCF",
    "Name": "First Commonwealth Financial Corporation Common Stock"
  },
  {
    "Symbol": "FCFS",
    "Name": "FirstCash Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FCN",
    "Name": "FTI Consulting Inc. Common Stock"
  },
  {
    "Symbol": "FCNCA",
    "Name": "First Citizens BancShares Inc. Class A Common Stock"
  },
  {
    "Symbol": "FCNCO",
    "Name": "First Citizens BancShares Inc. 5.625% Non-Cumulative Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "FCNCP",
    "Name": "First Citizens BancShares Inc. Depositary Shares"
  },
  {
    "Symbol": "FCO",
    "Name": "abrdn Global Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "FCPT",
    "Name": "Four Corners Property Trust Inc. Common Stock"
  },
  {
    "Symbol": "FCRX",
    "Name": "Crescent Capital BDC Inc. 5.00% Notes due 2026"
  },
  {
    "Symbol": "FCT",
    "Name": "First Trust Senior Floating Rate Income Fund II Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FCUV",
    "Name": "Focus Universal Inc. Common Stock"
  },
  {
    "Symbol": "FCX",
    "Name": "Freeport-McMoRan Inc. Common Stock"
  },
  {
    "Symbol": "FDBC",
    "Name": "Fidelity D & D Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FDEU",
    "Name": "First Trust Dynamic Europe Equity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FDMT",
    "Name": "4D Molecular Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FDP",
    "Name": "Fresh Del Monte Produce Inc. Common Stock"
  },
  {
    "Symbol": "FDS",
    "Name": "FactSet Research Systems Inc. Common Stock"
  },
  {
    "Symbol": "FDUS",
    "Name": "Fidus Investment Corporation Common Stock"
  },
  {
    "Symbol": "FDX",
    "Name": "FedEx Corporation Common Stock"
  },
  {
    "Symbol": "FE",
    "Name": "FirstEnergy Corp. Common Stock"
  },
  {
    "Symbol": "FEAM",
    "Name": "5E Advanced Materials Inc. Common Stock"
  },
  {
    "Symbol": "FEDU",
    "Name": "Four Seasons Education (Cayman) Inc. American Depositary Shares each ADS representing 10 ordinary shares"
  },
  {
    "Symbol": "FEI",
    "Name": "First Trust MLP and Energy Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FEIM",
    "Name": "Frequency Electronics Inc. Common Stock"
  },
  {
    "Symbol": "FELE",
    "Name": "Franklin Electric Co. Inc. Common Stock"
  },
  {
    "Symbol": "FEMY",
    "Name": "Femasys Inc. Common Stock"
  },
  {
    "Symbol": "FEN",
    "Name": "First Trust Energy Income and Growth Fund"
  },
  {
    "Symbol": "FENC",
    "Name": "Fennec Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "FENG",
    "Name": "Phoenix New Media Limited American Depositary Shares each representing 48 Class A ordinary shares."
  },
  {
    "Symbol": "FERG",
    "Name": "Ferguson plc Ordinary Shares"
  },
  {
    "Symbol": "FET",
    "Name": "Forum Energy Technologies Inc. Common Stock"
  },
  {
    "Symbol": "FEXD",
    "Name": "Fintech Ecosystem Development Corp. Class A Common Stock"
  },
  {
    "Symbol": "FEXDR",
    "Name": "Fintech Ecosystem Development Corp. Right"
  },
  {
    "Symbol": "FEXDU",
    "Name": "Fintech Ecosystem Development Corp. Units"
  },
  {
    "Symbol": "FF",
    "Name": "FutureFuel Corp.  Common shares"
  },
  {
    "Symbol": "FFA",
    "Name": "First Trust Enhanced Equity Income Fund"
  },
  {
    "Symbol": "FFBC",
    "Name": "First Financial Bancorp. Common Stock"
  },
  {
    "Symbol": "FFC",
    "Name": "Flaherty & Crumrine Preferred and Income Securities Fund Incorporated"
  },
  {
    "Symbol": "FFIC",
    "Name": "Flushing Financial Corporation Common Stock"
  },
  {
    "Symbol": "FFIE",
    "Name": "Faraday Future Intelligent Electric Inc. Common Stock"
  },
  {
    "Symbol": "FFIEW",
    "Name": "Faraday Future Intelligent Electric Inc. Warrant"
  },
  {
    "Symbol": "FFIN",
    "Name": "First Financial Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "FFIV",
    "Name": "F5 Inc. Common Stock"
  },
  {
    "Symbol": "FFNW",
    "Name": "First Financial Northwest Inc. Common Stock"
  },
  {
    "Symbol": "FFWM",
    "Name": "First Foundation Inc. Common Stock"
  },
  {
    "Symbol": "FG",
    "Name": "F&G Annuities & Life Inc. Common Stock"
  },
  {
    "Symbol": "FGB",
    "Name": "First Trust Specialty Finance and Financial Opportunities Fund"
  },
  {
    "Symbol": "FGBI",
    "Name": "First Guaranty Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "FGBIP",
    "Name": "First Guaranty Bancshares Inc. 6.75% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "FGEN",
    "Name": "FibroGen Inc Common Stock"
  },
  {
    "Symbol": "FGF",
    "Name": "FG Financial Group Inc. Common Stock (NV)"
  },
  {
    "Symbol": "FGFPP",
    "Name": "FG Financial Group Inc. 8.00% Cumulative Preferred Stock"
  },
  {
    "Symbol": "FGH",
    "Name": "FG Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FGI",
    "Name": "FGI Industries Ltd. Ordinary Shares"
  },
  {
    "Symbol": "FGMC",
    "Name": "FG Merger Corp. Common Stock"
  },
  {
    "Symbol": "FHB",
    "Name": "First Hawaiian Inc. Common Stock"
  },
  {
    "Symbol": "FHI",
    "Name": "Federated Hermes Inc. Common Stock"
  },
  {
    "Symbol": "FHN",
    "Name": "First Horizon Corporation Common Stock"
  },
  {
    "Symbol": "FHN^B",
    "Name": "First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series B"
  },
  {
    "Symbol": "FHN^C",
    "Name": "First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "FHN^D",
    "Name": "First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series D"
  },
  {
    "Symbol": "FHN^E",
    "Name": "First Horizon Corporation Depositary Shares each representing a 1/4000th interest in a share of Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "FHN^F",
    "Name": "First Horizon Corporation Depositary Shares each representing 1/4000th Interest in a Share of Non-Cumulative Perpetual Preferred Stock Series F"
  },
  {
    "Symbol": "FHTX",
    "Name": "Foghorn Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FIAC",
    "Name": "Focus Impact Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "FIACW",
    "Name": "Focus Impact Acquisition Corp. Warrant"
  },
  {
    "Symbol": "FIBK",
    "Name": "First Interstate BancSystem Inc. Class A Common Stock"
  },
  {
    "Symbol": "FICO",
    "Name": "Fair Isaac Corproation Common Stock"
  },
  {
    "Symbol": "FICV",
    "Name": "Frontier Investment Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "FICVU",
    "Name": "Frontier Investment Corp Units"
  },
  {
    "Symbol": "FIF",
    "Name": "First Trust Energy Infrastructure Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FIGS",
    "Name": "FIGS Inc. Class A Common Stock"
  },
  {
    "Symbol": "FINS",
    "Name": "Angel Oak Financial Strategies Income Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FINV",
    "Name": "FinVolution Group American Depositary Shares"
  },
  {
    "Symbol": "FINW",
    "Name": "FinWise Bancorp Common Stock"
  },
  {
    "Symbol": "FIP",
    "Name": "FTAI Infrastructure Inc. Common Stock"
  },
  {
    "Symbol": "FIS",
    "Name": "Fidelity National Information Services Inc. Common Stock"
  },
  {
    "Symbol": "FISI",
    "Name": "Financial Institutions Inc. Common Stock"
  },
  {
    "Symbol": "FISV",
    "Name": "Fiserv Inc. Common Stock"
  },
  {
    "Symbol": "FITB",
    "Name": "Fifth Third Bancorp Common Stock"
  },
  {
    "Symbol": "FITBI",
    "Name": "Fifth Third Bancorp Depositary Shares"
  },
  {
    "Symbol": "FITBO",
    "Name": "Fifth Third Bancorp Depositary Shares each representing a 1/1000th ownership interest in a share of Non-Cumulative Perpetual Preferred Stock Series K"
  },
  {
    "Symbol": "FITBP",
    "Name": "Fifth Third Bancorp Depositary Shares each representing 1/40th share of Fifth Third 6.00% Non-Cumulative Perpetual Class B Preferred Stock Series A"
  },
  {
    "Symbol": "FIVE",
    "Name": "Five Below Inc. Common Stock"
  },
  {
    "Symbol": "FIVN",
    "Name": "Five9 Inc. Common Stock"
  },
  {
    "Symbol": "FIX",
    "Name": "Comfort Systems USA Inc. Common Stock"
  },
  {
    "Symbol": "FIXX",
    "Name": "Homology Medicines Inc. Common Stock"
  },
  {
    "Symbol": "FIZZ",
    "Name": "National Beverage Corp. Common Stock"
  },
  {
    "Symbol": "FKWL",
    "Name": "Franklin Wireless Corp. Common Stock"
  },
  {
    "Symbol": "FL",
    "Name": "Foot Locker Inc."
  },
  {
    "Symbol": "FLAG",
    "Name": "First Light Acquisition Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "FLC",
    "Name": "Flaherty & Crumrine Total Return Fund Inc Common Stock"
  },
  {
    "Symbol": "FLEX",
    "Name": "Flex Ltd. Ordinary Shares"
  },
  {
    "Symbol": "FLFV",
    "Name": "Feutune Light Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "FLFVU",
    "Name": "Feutune Light Acquisition Corporation Unit"
  },
  {
    "Symbol": "FLFVW",
    "Name": "Feutune Light Acquisition Corporation Warrant"
  },
  {
    "Symbol": "FLGC",
    "Name": "Flora Growth Corp. Common Stock"
  },
  {
    "Symbol": "FLGT",
    "Name": "Fulgent Genetics Inc. Common Stock"
  },
  {
    "Symbol": "FLIC",
    "Name": "First of Long Island Corporation (The) Common Stock"
  },
  {
    "Symbol": "FLJ",
    "Name": "FLJ Group Limited American Depositary Shares"
  },
  {
    "Symbol": "FLL",
    "Name": "Full House Resorts Inc. Common Stock"
  },
  {
    "Symbol": "FLME",
    "Name": "Flame Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "FLNC",
    "Name": "Fluence Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "FLNG",
    "Name": "FLEX LNG Ltd. Ordinary Shares"
  },
  {
    "Symbol": "FLNT",
    "Name": "Fluent Inc. Common Stock"
  },
  {
    "Symbol": "FLO",
    "Name": "Flowers Foods Inc. Common Stock"
  },
  {
    "Symbol": "FLR",
    "Name": "Fluor Corporation Common Stock"
  },
  {
    "Symbol": "FLS",
    "Name": "Flowserve Corporation Common Stock"
  },
  {
    "Symbol": "FLT",
    "Name": "FleetCor Technologies Inc. Common Stock"
  },
  {
    "Symbol": "FLUX",
    "Name": "Flux Power Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FLWS",
    "Name": "1-800-FLOWERS.COM Inc. Common Stock"
  },
  {
    "Symbol": "FLXS",
    "Name": "Flexsteel Industries Inc. Common Stock"
  },
  {
    "Symbol": "FLYW",
    "Name": "Flywire Corporation Voting Common Stock"
  },
  {
    "Symbol": "FMAO",
    "Name": "Farmers & Merchants Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FMBH",
    "Name": "First Mid Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "FMC",
    "Name": "FMC Corporation Common Stock"
  },
  {
    "Symbol": "FMIV",
    "Name": "Forum Merger IV Corporation Class A Common stock"
  },
  {
    "Symbol": "FMN",
    "Name": "Federated Hermes Premier Municipal Income Fund"
  },
  {
    "Symbol": "FMNB",
    "Name": "Farmers National Banc Corp. Common Stock"
  },
  {
    "Symbol": "FMS",
    "Name": "Fresenius Medical Care AG Common Stock"
  },
  {
    "Symbol": "FMX",
    "Name": "Fomento Economico Mexicano S.A.B. de C.V. Common Stock"
  },
  {
    "Symbol": "FMY",
    "Name": "First Trust Motgage Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FN",
    "Name": "Fabrinet Ordinary Shares"
  },
  {
    "Symbol": "FNA",
    "Name": "Paragon 28 Inc. Common Stock"
  },
  {
    "Symbol": "FNB",
    "Name": "F.N.B. Corporation Common Stock"
  },
  {
    "Symbol": "FNB^E",
    "Name": "F.N.B. Corporation Depositary Shares each representing a 1/40th interest in a share of Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred  Stock Series E"
  },
  {
    "Symbol": "FNCB",
    "Name": "FNCB Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FNCH",
    "Name": "Finch Therapeutics Group Inc. Common Stock"
  },
  {
    "Symbol": "FND",
    "Name": "Floor & Decor Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FNF",
    "Name": "FNF Group of Fidelity National Financial Inc. Common Stock"
  },
  {
    "Symbol": "FNGR",
    "Name": "FingerMotion Inc. Common Stock"
  },
  {
    "Symbol": "FNKO",
    "Name": "Funko Inc. Class A Common Stock"
  },
  {
    "Symbol": "FNLC",
    "Name": "First Bancorp Inc  (ME) Common Stock"
  },
  {
    "Symbol": "FNV",
    "Name": "Franco-Nevada Corporation"
  },
  {
    "Symbol": "FNVT",
    "Name": "Finnovate Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "FNVTU",
    "Name": "Finnovate Acquisition Corp. Units"
  },
  {
    "Symbol": "FNVTW",
    "Name": "Finnovate Acquisition Corp. Warrants"
  },
  {
    "Symbol": "FNWB",
    "Name": "First Northwest Bancorp Common Stock"
  },
  {
    "Symbol": "FNWD",
    "Name": "Finward Bancorp Common Stock"
  },
  {
    "Symbol": "FOA",
    "Name": "Finance of America Companies Inc. Class A Common Stock"
  },
  {
    "Symbol": "FOCS",
    "Name": "Focus Financial Partners Inc. Class A Common Stock"
  },
  {
    "Symbol": "FOF",
    "Name": "Cohen & Steers Closed-End Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "FOLD",
    "Name": "Amicus Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FONR",
    "Name": "Fonar Corporation Common Stock"
  },
  {
    "Symbol": "FOR",
    "Name": "Forestar Group Inc Common Stock"
  },
  {
    "Symbol": "FORA",
    "Name": "Forian Inc. Common Stock"
  },
  {
    "Symbol": "FORD",
    "Name": "Forward Industries Inc. Common Stock"
  },
  {
    "Symbol": "FORG",
    "Name": "ForgeRock Inc. Class A Common Stock"
  },
  {
    "Symbol": "FORLU",
    "Name": "Four Leaf Acquisition Corporation Unit"
  },
  {
    "Symbol": "FORM",
    "Name": "FormFactor Inc. FormFactor Inc. Common Stock"
  },
  {
    "Symbol": "FORR",
    "Name": "Forrester Research Inc. Common Stock"
  },
  {
    "Symbol": "FORTY",
    "Name": "Formula Systems (1985) Ltd. American Depositary Shares"
  },
  {
    "Symbol": "FOSL",
    "Name": "Fossil Group Inc. Common Stock"
  },
  {
    "Symbol": "FOSLL",
    "Name": "Fossil Group Inc. 7% Senior Notes due 2026"
  },
  {
    "Symbol": "FOUR",
    "Name": "Shift4 Payments Inc. Class A Common Stock"
  },
  {
    "Symbol": "FOX",
    "Name": "Fox Corporation Class B Common Stock"
  },
  {
    "Symbol": "FOXA",
    "Name": "Fox Corporation Class A Common Stock"
  },
  {
    "Symbol": "FOXF",
    "Name": "Fox Factory Holding Corp. Common Stock"
  },
  {
    "Symbol": "FOXO",
    "Name": "FOXO Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "FPAY",
    "Name": "FlexShopper Inc. Common Stock"
  },
  {
    "Symbol": "FPF",
    "Name": "First Trust Intermediate Duration Preferred & Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FPH",
    "Name": "Five Point Holdings LLC Class A Common Shares"
  },
  {
    "Symbol": "FPI",
    "Name": "Farmland Partners Inc. Common Stock"
  },
  {
    "Symbol": "FPL",
    "Name": "First Trust New Opportunities MLP & Energy Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FR",
    "Name": "First Industrial Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "FRA",
    "Name": "Blackrock Floating Rate Income Strategies Fund Inc  Common Stock"
  },
  {
    "Symbol": "FRAF",
    "Name": "Franklin Financial Services Corporation Common Stock"
  },
  {
    "Symbol": "FRBA",
    "Name": "First Bank Common Stock"
  },
  {
    "Symbol": "FRBK",
    "Name": "Republic First Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FRBN",
    "Name": "Forbion European Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "FRBNU",
    "Name": "Forbion European Acquisition Corp. Unit"
  },
  {
    "Symbol": "FRC",
    "Name": "FIRST REPUBLIC BANK Common Stock"
  },
  {
    "Symbol": "FRC^H",
    "Name": "FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 5.125% Noncumulative Perpetual Series H Preferred Stock par value $0.01 per share"
  },
  {
    "Symbol": "FRC^I",
    "Name": "FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 5.50% Noncumulative Perpetual Series I Preferred Stock par value $0.01 per share"
  },
  {
    "Symbol": "FRC^J",
    "Name": "FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.70% Noncumulative Perpetual Series J Preferred Stock"
  },
  {
    "Symbol": "FRC^K",
    "Name": "FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.125% Noncumulative Perpetual Series K Preferred Stock"
  },
  {
    "Symbol": "FRC^L",
    "Name": "FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.250% Noncumulative Perpetual Series L Preferred Stock"
  },
  {
    "Symbol": "FRC^M",
    "Name": "FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 4.000% Noncumulative Perpetual Series M Preferred Stock"
  },
  {
    "Symbol": "FRC^N",
    "Name": "First Republic Bank Depositary Shares Each Representing a 1/40th Interest in a Share of 4.500% Noncumulative Perpetual Series N Preferred Stock"
  },
  {
    "Symbol": "FRD",
    "Name": "Friedman Industries Inc. Common Stock"
  },
  {
    "Symbol": "FREE",
    "Name": "Whole Earth Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "FREEW",
    "Name": "Whole Earth Brands Inc. Warrant"
  },
  {
    "Symbol": "FREQ",
    "Name": "Frequency Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FREY",
    "Name": "FREYR Battery Ordinary Shares"
  },
  {
    "Symbol": "FRG",
    "Name": "Franchise Group Inc. Common Stock"
  },
  {
    "Symbol": "FRGAP",
    "Name": "Franchise Group Inc. 7.50% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "FRGE",
    "Name": "Forge Global Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FRGI",
    "Name": "Fiesta Restaurant Group Inc. Common Stock"
  },
  {
    "Symbol": "FRGT",
    "Name": "Freight Technologies Inc. Ordinary Shares"
  },
  {
    "Symbol": "FRHC",
    "Name": "Freedom Holding Corp. Common Stock"
  },
  {
    "Symbol": "FRLA",
    "Name": "Fortune Rise Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "FRLAU",
    "Name": "Fortune Rise Acquisition Corporation Units"
  },
  {
    "Symbol": "FRLN",
    "Name": "Freeline Therapeutics Holdings plc American Depositary Shares"
  },
  {
    "Symbol": "FRME",
    "Name": "First Merchants Corporation Common Stock"
  },
  {
    "Symbol": "FRMEP",
    "Name": "First Merchants Corporation Depository Shares"
  },
  {
    "Symbol": "FRO",
    "Name": "Frontline Plc Ordinary Shares"
  },
  {
    "Symbol": "FROG",
    "Name": "JFrog Ltd. Ordinary Shares"
  },
  {
    "Symbol": "FRPH",
    "Name": "FRP Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FRPT",
    "Name": "Freshpet Inc. Common Stock"
  },
  {
    "Symbol": "FRSH",
    "Name": "Freshworks Inc. Class A Common Stock"
  },
  {
    "Symbol": "FRST",
    "Name": "Primis Financial Corp. Common Stock"
  },
  {
    "Symbol": "FRSX",
    "Name": "Foresight Autonomous Holdings Ltd. American Depositary Shares"
  },
  {
    "Symbol": "FRT",
    "Name": "Federal Realty Investment Trust Common Stock"
  },
  {
    "Symbol": "FRT^C",
    "Name": "Federal Realty Investment Trust Depositary Shares each representing a 1/1000th interest in a 5.000% Series C Cumulative Redeemable Preferred Share"
  },
  {
    "Symbol": "FRTX",
    "Name": "Fresh Tracks Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FRXB",
    "Name": "Forest Road Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "FRZA",
    "Name": "Forza X1 Inc. Common Stock"
  },
  {
    "Symbol": "FSBC",
    "Name": "Five Star Bancorp Common Stock"
  },
  {
    "Symbol": "FSBW",
    "Name": "FS Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FSCO",
    "Name": "FS Credit Opportunities Corp. Common Stock"
  },
  {
    "Symbol": "FSD",
    "Name": "First Trust High Income Long Short Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FSEA",
    "Name": "First Seacoast Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "FSFG",
    "Name": "First Savings Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "FSI",
    "Name": "Flexible Solutions International Inc. Common Stock (CDA)"
  },
  {
    "Symbol": "FSK",
    "Name": "FS KKR Capital Corp. Common Stock"
  },
  {
    "Symbol": "FSLR",
    "Name": "First Solar Inc. Common Stock"
  },
  {
    "Symbol": "FSLY",
    "Name": "Fastly Inc. Class A Common Stock"
  },
  {
    "Symbol": "FSM",
    "Name": "Fortuna Silver Mines Inc Ordinary Shares (Canada)"
  },
  {
    "Symbol": "FSNB",
    "Name": "Fusion Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "FSP",
    "Name": "Franklin Street Properties Corp. Common Stock"
  },
  {
    "Symbol": "FSR",
    "Name": "Fisker Inc. Class A Common Stock"
  },
  {
    "Symbol": "FSRX",
    "Name": "FinServ Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "FSRXW",
    "Name": "FinServ Acquisition Corp. II Warrant"
  },
  {
    "Symbol": "FSS",
    "Name": "Federal Signal Corporation Common Stock"
  },
  {
    "Symbol": "FSTR",
    "Name": "L.B. Foster Company Common Stock"
  },
  {
    "Symbol": "FSV",
    "Name": "FirstService Corporation Common Shares"
  },
  {
    "Symbol": "FT",
    "Name": "Franklin Universal Trust Common Stock"
  },
  {
    "Symbol": "FTAI",
    "Name": "FTAI Aviation Ltd. Common Stock"
  },
  {
    "Symbol": "FTAIM",
    "Name": "FTAI Aviation Ltd. 9.500% Fixed-Rate Reset Series D Cumulative Perpetual Redeemable Preferred Shares"
  },
  {
    "Symbol": "FTAIN",
    "Name": "FTAI Aviation Ltd. 8.25% Fixed - Rate Reset Series C Cumulative Perpetual Redeemable Preferred Shares"
  },
  {
    "Symbol": "FTAIO",
    "Name": "FTAI Aviation Ltd. 8.00% Fixed-to-Floating Rate Series B Cumulative Perpetual Redeemable Preferred Shares"
  },
  {
    "Symbol": "FTAIP",
    "Name": "FTAI Aviation Ltd. 8.25% Fixed to Floating Rate Series A Cumulative Perpetual Redeemable Preferred Shares"
  },
  {
    "Symbol": "FTCH",
    "Name": "Farfetch Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "FTCI",
    "Name": "FTC Solar Inc. Common Stock"
  },
  {
    "Symbol": "FTDR",
    "Name": "Frontdoor Inc. Common Stock"
  },
  {
    "Symbol": "FTEK",
    "Name": "Fuel Tech Inc. Common Stock"
  },
  {
    "Symbol": "FTF",
    "Name": "Franklin Limited Duration Income Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "FTFT",
    "Name": "Future FinTech Group Inc. Common Stock"
  },
  {
    "Symbol": "FTHM",
    "Name": "Fathom Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FTHY",
    "Name": "First Trust High Yield Opportunities 2027 Term Fund Common Stock"
  },
  {
    "Symbol": "FTI",
    "Name": "TechnipFMC plc Ordinary Share"
  },
  {
    "Symbol": "FTII",
    "Name": "FutureTech II Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "FTIIW",
    "Name": "FutureTech II Acquisition Corp. Warrant"
  },
  {
    "Symbol": "FTK",
    "Name": "Flotek Industries Inc. Common Stock"
  },
  {
    "Symbol": "FTNT",
    "Name": "Fortinet Inc. Common Stock"
  },
  {
    "Symbol": "FTS",
    "Name": "Fortis Inc. Common Shares"
  },
  {
    "Symbol": "FTV",
    "Name": "Fortive Corporation Common Stock"
  },
  {
    "Symbol": "FUBO",
    "Name": "fuboTV Inc. Common Stock"
  },
  {
    "Symbol": "FUL",
    "Name": "H. B. Fuller Company Common Stock"
  },
  {
    "Symbol": "FULC",
    "Name": "Fulcrum Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "FULT",
    "Name": "Fulton Financial Corporation Common Stock"
  },
  {
    "Symbol": "FULTP",
    "Name": "Fulton Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "FUN",
    "Name": "Cedar Fair L.P. Common Stock"
  },
  {
    "Symbol": "FUNC",
    "Name": "First United Corporation Common Stock"
  },
  {
    "Symbol": "FUND",
    "Name": "Sprott Focus Trust Inc. Common Stock"
  },
  {
    "Symbol": "FURY",
    "Name": "Fury Gold Mines Limited Common Shares"
  },
  {
    "Symbol": "FUSB",
    "Name": "First US Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "FUSN",
    "Name": "Fusion Pharmaceuticals Inc. Common Shares"
  },
  {
    "Symbol": "FUTU",
    "Name": "Futu Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "FUV",
    "Name": "Arcimoto Inc. Common Stock"
  },
  {
    "Symbol": "FVCB",
    "Name": "FVCBankcorp Inc. Common Stock"
  },
  {
    "Symbol": "FVRR",
    "Name": "Fiverr International Ltd. Ordinary Shares no par value"
  },
  {
    "Symbol": "FWAC",
    "Name": "Fifth Wall Acquisition Corp. III Class A Ordinary Shares"
  },
  {
    "Symbol": "FWBI",
    "Name": "First Wave BioPharma Inc. Common Stock"
  },
  {
    "Symbol": "FWONA",
    "Name": "Liberty Media Corporation Series A Liberty Formula One Common Stock"
  },
  {
    "Symbol": "FWONK",
    "Name": "Liberty Media Corporation Series C Liberty Formula One Common Stock"
  },
  {
    "Symbol": "FWRD",
    "Name": "Forward Air Corporation Common Stock"
  },
  {
    "Symbol": "FWRG",
    "Name": "First Watch Restaurant Group Inc. Common Stock"
  },
  {
    "Symbol": "FXCOR",
    "Name": "Financial Strategies Acquisition Corp. Rights"
  },
  {
    "Symbol": "FXCOW",
    "Name": "Financial Strategies Acquisition Corp. Warrants"
  },
  {
    "Symbol": "FXLV",
    "Name": "F45 Training Holdings Inc. Common Stock"
  },
  {
    "Symbol": "FXNC",
    "Name": "First National Corporation Common Stock"
  },
  {
    "Symbol": "FYBR",
    "Name": "Frontier Communications Parent Inc. Common Stock"
  },
  {
    "Symbol": "FZT",
    "Name": "FAST Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "G",
    "Name": "Genpact Limited Common Stock"
  },
  {
    "Symbol": "GAB",
    "Name": "Gabelli Equity Trust Inc. (The) Common Stock"
  },
  {
    "Symbol": "GAB^G",
    "Name": "Gabelli Equity Trust Inc. (The) Series G Cumulative Preferred Stock"
  },
  {
    "Symbol": "GAB^H",
    "Name": "Gabelli Equity Trust Inc. (The) Pfd Ser H"
  },
  {
    "Symbol": "GAB^K",
    "Name": "Gabelli Equity Trust Inc. (The) 5.00% Series K Cumulative Preferred Stock"
  },
  {
    "Symbol": "GABC",
    "Name": "German American Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "GAIA",
    "Name": "Gaia Inc. Class A Common Stock"
  },
  {
    "Symbol": "GAIN",
    "Name": "Gladstone Investment Corporation Business Development Company"
  },
  {
    "Symbol": "GAINN",
    "Name": "Gladstone Investment Corporation 5.00% Notes Due 2026"
  },
  {
    "Symbol": "GAINZ",
    "Name": "Gladstone Investment Corporation 4.875% Notes due 2028"
  },
  {
    "Symbol": "GALT",
    "Name": "Galectin Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "GAM",
    "Name": "General American Investors Inc. Common Stock"
  },
  {
    "Symbol": "GAM^B",
    "Name": "General American Investors Company Inc. Cumulative Preferred Stock"
  },
  {
    "Symbol": "GAMB",
    "Name": "Gambling.com Group Limited Ordinary Shares"
  },
  {
    "Symbol": "GAMC",
    "Name": "Golden Arrow Merger Corp. Class A Common Stock"
  },
  {
    "Symbol": "GAMCU",
    "Name": "Golden Arrow Merger Corp. Unit"
  },
  {
    "Symbol": "GAMCW",
    "Name": "Golden Arrow Merger Corp. Warrant"
  },
  {
    "Symbol": "GAME",
    "Name": "GameSquare Holdings Inc. Common Stock"
  },
  {
    "Symbol": "GAN",
    "Name": "GAN Limited Ordinary Shares"
  },
  {
    "Symbol": "GANX",
    "Name": "Gain Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "GASS",
    "Name": "StealthGas Inc. Common Stock"
  },
  {
    "Symbol": "GATE",
    "Name": "Marblegate Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "GATO",
    "Name": "Gatos Silver Inc. Common Stock"
  },
  {
    "Symbol": "GATX",
    "Name": "GATX Corporation Common Stock"
  },
  {
    "Symbol": "GAU",
    "Name": "Galiano Gold Inc."
  },
  {
    "Symbol": "GB",
    "Name": "Global Blue Group Holding AG Ordinary Shares"
  },
  {
    "Symbol": "GBAB",
    "Name": "Guggenheim Taxable Municipal Bond & Investment Grade Debt Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GBBK",
    "Name": "Global Blockchain Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "GBBKR",
    "Name": "Global Blockchain Acquisition Corp. Right"
  },
  {
    "Symbol": "GBCI",
    "Name": "Glacier Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "GBDC",
    "Name": "Golub Capital BDC Inc. Common Stock"
  },
  {
    "Symbol": "GBIO",
    "Name": "Generation Bio Co. Common Stock"
  },
  {
    "Symbol": "GBLI",
    "Name": "Global Indemnity Group LLC Class A Common Stock (DE)"
  },
  {
    "Symbol": "GBNH",
    "Name": "Greenbrook TMS Inc. Common Shares"
  },
  {
    "Symbol": "GBNY",
    "Name": "Generations Bancorp NY Inc. Common Stock"
  },
  {
    "Symbol": "GBR",
    "Name": "New Concept Energy Inc Common Stock"
  },
  {
    "Symbol": "GBRG",
    "Name": "Goldenbridge Acquisition Limited Ordinary Shares"
  },
  {
    "Symbol": "GBRGR",
    "Name": "Goldenbridge Acquisition Limited Right"
  },
  {
    "Symbol": "GBRGU",
    "Name": "Goldenbridge Acquisition Limited Unit"
  },
  {
    "Symbol": "GBRGW",
    "Name": "Goldenbridge Acquisition Limited Warrant"
  },
  {
    "Symbol": "GBTG",
    "Name": "Global Business Travel Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "GBX",
    "Name": "Greenbrier Companies Inc. (The) Common Stock"
  },
  {
    "Symbol": "GCBC",
    "Name": "Greene County Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "GCI",
    "Name": "Gannett Co. Inc. Common Stock"
  },
  {
    "Symbol": "GCMG",
    "Name": "GCM Grosvenor Inc. Class A Common Stock"
  },
  {
    "Symbol": "GCMGW",
    "Name": "GCM Grosvenor Inc. Warrant"
  },
  {
    "Symbol": "GCO",
    "Name": "Genesco Inc. Common Stock"
  },
  {
    "Symbol": "GCT",
    "Name": "GigaCloud Technology Inc Class A Ordinary Shares"
  },
  {
    "Symbol": "GCTK",
    "Name": "GlucoTrack Inc. Common Stock"
  },
  {
    "Symbol": "GCV",
    "Name": "Gabelli Convertible and Income Securities Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "GD",
    "Name": "General Dynamics Corporation Common Stock"
  },
  {
    "Symbol": "GDC",
    "Name": "GD Culture Group Limited Common Stock"
  },
  {
    "Symbol": "GDDY",
    "Name": "GoDaddy Inc. Class A Common Stock"
  },
  {
    "Symbol": "GDEN",
    "Name": "Golden Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "GDEV",
    "Name": "Nexters Inc. Ordinary Shares"
  },
  {
    "Symbol": "GDEVW",
    "Name": "Nexters Inc. Warrant"
  },
  {
    "Symbol": "GDHG",
    "Name": "Golden Heaven Group Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GDL",
    "Name": "GDL Fund The Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GDL^C",
    "Name": "The GDL Fund Series C Cumulative Puttable and Callable Preferred Shares"
  },
  {
    "Symbol": "GDNR",
    "Name": "Gardiner Healthcare Acquisitions Corp. Common Stock"
  },
  {
    "Symbol": "GDNRW",
    "Name": "Gardiner Healthcare Acquisitions Corp. Warrant"
  },
  {
    "Symbol": "GDO",
    "Name": "Western Asset Global Corporate Defined Opportunity Fund Inc. Western Asset Global Corporate Defined Opportunity Fund Inc."
  },
  {
    "Symbol": "GDOT",
    "Name": "Green Dot Corporation Class A Common Stock $0.001 par value"
  },
  {
    "Symbol": "GDRX",
    "Name": "GoodRx Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GDS",
    "Name": "GDS Holdings Limited ADS"
  },
  {
    "Symbol": "GDST",
    "Name": "Goldenstone Acquisition Limited Common Stock"
  },
  {
    "Symbol": "GDSTR",
    "Name": "Goldenstone Acquisition Limited Rights"
  },
  {
    "Symbol": "GDTC",
    "Name": "CytoMed Therapeutics Limited Ordinary Shares"
  },
  {
    "Symbol": "GDV",
    "Name": "Gabelli Dividend & Income Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GDV^H",
    "Name": "The Gabelli Dividend & Income Trust 5.375% Series H Cumulative Preferred Shares"
  },
  {
    "Symbol": "GDV^K",
    "Name": "The Gabelli Dividend & Income Trust 4.250% Series K Cumulative Preferred Shares"
  },
  {
    "Symbol": "GDYN",
    "Name": "Grid Dynamics Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GE",
    "Name": "General Electric Company Common Stock"
  },
  {
    "Symbol": "GECC",
    "Name": "Great Elm Capital Corp. Common Stock"
  },
  {
    "Symbol": "GECCM",
    "Name": "Great Elm Capital Corp. 6.75% Notes Due 2025"
  },
  {
    "Symbol": "GECCN",
    "Name": "Great Elm Capital Corp. 6.5% Notes due 2024"
  },
  {
    "Symbol": "GECCO",
    "Name": "Great Elm Capital Corp. 5.875% Notes due 2026"
  },
  {
    "Symbol": "GEF",
    "Name": "Greif Inc. Class A Common Stock"
  },
  {
    "Symbol": "GEG",
    "Name": "Great Elm Group Inc. Common Stock"
  },
  {
    "Symbol": "GEHC",
    "Name": "GE HealthCare Technologies Inc. Common Stock"
  },
  {
    "Symbol": "GEHI",
    "Name": "Gravitas Education Holdings Inc. American depositary shares each representing twenty Class A ordinary shares"
  },
  {
    "Symbol": "GEL",
    "Name": "Genesis Energy L.P. Common Units"
  },
  {
    "Symbol": "GEN",
    "Name": "Gen Digital Inc. Common Stock"
  },
  {
    "Symbol": "GENC",
    "Name": "Gencor Industries Inc. Common Stock"
  },
  {
    "Symbol": "GENE",
    "Name": "Genetic Technologies Ltd ADS"
  },
  {
    "Symbol": "GENI",
    "Name": "Genius Sports Limited Ordinary Shares"
  },
  {
    "Symbol": "GENQ",
    "Name": "Genesis Unicorn Capital Corp. Class A Common Stock"
  },
  {
    "Symbol": "GENQW",
    "Name": "Genesis Unicorn Capital Corp. Warrants"
  },
  {
    "Symbol": "GEO",
    "Name": "Geo Group Inc (The) REIT"
  },
  {
    "Symbol": "GEOS",
    "Name": "Geospace Technologies Corporation Common Stock (Texas)"
  },
  {
    "Symbol": "GER",
    "Name": "Goldman Sachs MLP Energy Renaissance Fund"
  },
  {
    "Symbol": "GERN",
    "Name": "Geron Corporation Common Stock"
  },
  {
    "Symbol": "GES",
    "Name": "Guess? Inc. Common Stock"
  },
  {
    "Symbol": "GETR",
    "Name": "Getaround Inc. Common Stock"
  },
  {
    "Symbol": "GETY",
    "Name": "Getty Images Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GEVO",
    "Name": "Gevo Inc. Common Stock"
  },
  {
    "Symbol": "GF",
    "Name": "New Germany Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "GFAI",
    "Name": "Guardforce AI Co. Limited Ordinary Shares"
  },
  {
    "Symbol": "GFAIW",
    "Name": "Guardforce AI Co. Limited Warrant"
  },
  {
    "Symbol": "GFF",
    "Name": "Griffon Corporation Common Stock"
  },
  {
    "Symbol": "GFGD",
    "Name": "The Growth for Good Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "GFGDU",
    "Name": "The Growth for Good Acquisition Corporation Unit"
  },
  {
    "Symbol": "GFGDW",
    "Name": "The Growth for Good Acquisition Corporation Warrant"
  },
  {
    "Symbol": "GFI",
    "Name": "Gold Fields Limited American Depositary Shares"
  },
  {
    "Symbol": "GFL",
    "Name": "GFL Environmental Inc. Subordinate voting shares no par value"
  },
  {
    "Symbol": "GFOR",
    "Name": "Graf Acquisition Corp. IV Common Stock"
  },
  {
    "Symbol": "GFS",
    "Name": "GlobalFoundries Inc. Ordinary Shares"
  },
  {
    "Symbol": "GFX",
    "Name": "Golden Falcon Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "GGAA",
    "Name": "Genesis Growth Tech Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "GGAAW",
    "Name": "Genesis Growth Tech Acquisition Corp. Warrant"
  },
  {
    "Symbol": "GGAL",
    "Name": "Grupo Financiero Galicia S.A. American Depositary Shares"
  },
  {
    "Symbol": "GGB",
    "Name": "Gerdau S.A. Common Stock"
  },
  {
    "Symbol": "GGE",
    "Name": "Green Giant Inc. Common Stock"
  },
  {
    "Symbol": "GGG",
    "Name": "Graco Inc. Common Stock"
  },
  {
    "Symbol": "GGN",
    "Name": "GAMCO Global Gold Natural Resources & Income Trust"
  },
  {
    "Symbol": "GGN^B",
    "Name": "GAMCO Global Gold Natural Reources & Income Trust 5.00% Series B Cumulative 25.00 Liquidation Preference"
  },
  {
    "Symbol": "GGR",
    "Name": "Gogoro Inc. Ordinary Shares"
  },
  {
    "Symbol": "GGROW",
    "Name": "Gogoro Inc. Warrant"
  },
  {
    "Symbol": "GGT",
    "Name": "Gabelli Multi-Media Trust Inc. (The) Common Stock"
  },
  {
    "Symbol": "GGT^E",
    "Name": "Gabelli Multi-Media Trust Inc. (The) 5.125% Series E Cumulative Preferred Stock"
  },
  {
    "Symbol": "GGT^G",
    "Name": "Gabelli Multi-Media Trust Inc. (The) 5.125% Series G Cumulative Preferred Shares"
  },
  {
    "Symbol": "GGZ",
    "Name": "Gabelli Global Small and Mid Cap Value Trust (The) Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GH",
    "Name": "Guardant Health Inc. Common Stock"
  },
  {
    "Symbol": "GHC",
    "Name": "Graham Holdings Company Common Stock"
  },
  {
    "Symbol": "GHG",
    "Name": "GreenTree Hospitality Group Ltd. American depositary shares each representing one Class A ordinary share"
  },
  {
    "Symbol": "GHI",
    "Name": "Greystone Housing Impact Investors LP Beneficial Unit Certificates representing assignments of limited partnership interests"
  },
  {
    "Symbol": "GHIX",
    "Name": "Gores Holdings IX Inc. Class A Common Stock"
  },
  {
    "Symbol": "GHIXW",
    "Name": "Gores Holdings IX Inc. Warrant"
  },
  {
    "Symbol": "GHL",
    "Name": "Greenhill & Co. Inc. Common Stock"
  },
  {
    "Symbol": "GHLD",
    "Name": "Guild Holdings Company Class A Common Stock"
  },
  {
    "Symbol": "GHM",
    "Name": "Graham Corporation Common Stock"
  },
  {
    "Symbol": "GHRS",
    "Name": "GH Research PLC Ordinary Shares"
  },
  {
    "Symbol": "GHSI",
    "Name": "Guardion Health Sciences Inc. Common Stock"
  },
  {
    "Symbol": "GHY",
    "Name": "PGIM Global High Yield Fund Inc."
  },
  {
    "Symbol": "GIA",
    "Name": "GigCapital 5 Inc. Common Stock"
  },
  {
    "Symbol": "GIB",
    "Name": "CGI Inc. Common Stock"
  },
  {
    "Symbol": "GIC",
    "Name": "Global Industrial Company Common Stock"
  },
  {
    "Symbol": "GIFI",
    "Name": "Gulf Island Fabrication Inc. Common Stock"
  },
  {
    "Symbol": "GIGM",
    "Name": "GigaMedia Limited Ordinary Shares"
  },
  {
    "Symbol": "GIII",
    "Name": "G-III Apparel Group LTD. Common Stock"
  },
  {
    "Symbol": "GIL",
    "Name": "Gildan Activewear Inc. Class A Sub. Vot. Common Stock"
  },
  {
    "Symbol": "GILD",
    "Name": "Gilead Sciences Inc. Common Stock"
  },
  {
    "Symbol": "GILT",
    "Name": "Gilat Satellite Networks Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GIM",
    "Name": "Templeton Global Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "GIPR",
    "Name": "Generation Income Properties Inc. Common Stock"
  },
  {
    "Symbol": "GIPRW",
    "Name": "Generation Income Properties Inc Warrant"
  },
  {
    "Symbol": "GIS",
    "Name": "General Mills Inc. Common Stock"
  },
  {
    "Symbol": "GJH",
    "Name": "Synthetic Fixed-Income Securities Inc 6.375% (STRATS) Cl A-1"
  },
  {
    "Symbol": "GJO",
    "Name": "Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. on behalf of STRATS(SM) Trust for Wal-Mart Stores Inc. Securities Series 2004-5"
  },
  {
    "Symbol": "GJR",
    "Name": "Synthetic Fixed-Income Securities Inc. STRATS Trust for Procter&Gamble Securities Series 2006-1"
  },
  {
    "Symbol": "GJS",
    "Name": "Goldman Sachs Group Securities STRATS Trust for Goldman Sachs Group Securities Series 2006-2"
  },
  {
    "Symbol": "GJT",
    "Name": "Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. Floating Rate Structured Repackaged Asset-Backed Trust Securities Certificates Series 2006-3"
  },
  {
    "Symbol": "GKOS",
    "Name": "Glaukos Corporation Common Stock"
  },
  {
    "Symbol": "GL",
    "Name": "Globe Life Inc. Common Stock"
  },
  {
    "Symbol": "GL^D",
    "Name": "Globe Life Inc. 4.25% Junior Subordinated Debentures due 2061"
  },
  {
    "Symbol": "GLAD",
    "Name": "Gladstone Capital Corporation Common Stock"
  },
  {
    "Symbol": "GLBE",
    "Name": "Global-E Online Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GLBS",
    "Name": "Globus Maritime Limited Common Stock"
  },
  {
    "Symbol": "GLBZ",
    "Name": "Glen Burnie Bancorp Common Stock"
  },
  {
    "Symbol": "GLDD",
    "Name": "Great Lakes Dredge & Dock Corporation Common Stock"
  },
  {
    "Symbol": "GLDG",
    "Name": "GoldMining Inc. Common Shares"
  },
  {
    "Symbol": "GLG",
    "Name": "TD Holdings Inc. Common Stock"
  },
  {
    "Symbol": "GLLI",
    "Name": "Globalink Investment Inc. Common Stock"
  },
  {
    "Symbol": "GLLIR",
    "Name": "Globalink Investment Inc. Rights"
  },
  {
    "Symbol": "GLMD",
    "Name": "Galmed Pharmaceuticals Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GLNG",
    "Name": "Golar Lng Ltd"
  },
  {
    "Symbol": "GLO",
    "Name": "Clough Global Opportunities Fund Common Stock"
  },
  {
    "Symbol": "GLOB",
    "Name": "Globant S.A. Common Shares"
  },
  {
    "Symbol": "GLOG^A",
    "Name": "GasLog LP. 8.75% Series A Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "GLOP",
    "Name": "GasLog Partners LP Common Units representing limited partnership interests"
  },
  {
    "Symbol": "GLOP^A",
    "Name": "GasLog Partners LP 8.625% Series A Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
  },
  {
    "Symbol": "GLOP^B",
    "Name": "GasLog Partners LP 8.200% Series B Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
  },
  {
    "Symbol": "GLOP^C",
    "Name": "GasLog Partners LP 8.500% Series C Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
  },
  {
    "Symbol": "GLP",
    "Name": "Global Partners LP Global Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "GLP^A",
    "Name": "Global Partners LP 9.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
  },
  {
    "Symbol": "GLP^B",
    "Name": "Global Partners LP 9.50% Series B Fixed Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
  },
  {
    "Symbol": "GLPG",
    "Name": "Galapagos NV American Depositary Shares"
  },
  {
    "Symbol": "GLPI",
    "Name": "Gaming and Leisure Properties Inc. Common Stock"
  },
  {
    "Symbol": "GLQ",
    "Name": "Clough Global Equity Fund Clough Global Equity Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GLRE",
    "Name": "Greenlight Capital Re Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "GLSI",
    "Name": "Greenwich LifeSciences Inc. Common Stock"
  },
  {
    "Symbol": "GLST",
    "Name": "Global Star Acquisition Inc. Class A Common Stock"
  },
  {
    "Symbol": "GLSTW",
    "Name": "Global Star Acquisition Inc. Warrants"
  },
  {
    "Symbol": "GLT",
    "Name": "Glatfelter Corporation Common Stock"
  },
  {
    "Symbol": "GLTA",
    "Name": "Galata Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "GLTO",
    "Name": "Galecto Inc. Common Stock"
  },
  {
    "Symbol": "GLU",
    "Name": "Gabelli Global Utility Common Shares of Beneficial Ownership"
  },
  {
    "Symbol": "GLUE",
    "Name": "Monte Rosa Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "GLV",
    "Name": "Clough Global Dividend and Income Fund Common Shares of beneficial interest"
  },
  {
    "Symbol": "GLW",
    "Name": "Corning Incorporated Common Stock"
  },
  {
    "Symbol": "GLYC",
    "Name": "GlycoMimetics Inc. Common Stock"
  },
  {
    "Symbol": "GM",
    "Name": "General Motors Company Common Stock"
  },
  {
    "Symbol": "GMAB",
    "Name": "Genmab A/S ADS"
  },
  {
    "Symbol": "GMBL",
    "Name": "Esports Entertainment Group Inc. Common Stock"
  },
  {
    "Symbol": "GMBLP",
    "Name": "Esports Entertainment Group Inc. 10.0% Series A Cumulative Redeemable Convertible Preferred Stock"
  },
  {
    "Symbol": "GMBLW",
    "Name": "Esports Entertainment Group Inc. Warrant"
  },
  {
    "Symbol": "GMBLZ",
    "Name": "Esports Entertainment Group Inc. Warrant"
  },
  {
    "Symbol": "GMDA",
    "Name": "Gamida Cell Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GME",
    "Name": "GameStop Corporation Common Stock"
  },
  {
    "Symbol": "GMED",
    "Name": "Globus Medical Inc. Class A Common Stock"
  },
  {
    "Symbol": "GMFI",
    "Name": "Aetherium Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "GMFIW",
    "Name": "Aetherium Acquisition Corp. Warrant"
  },
  {
    "Symbol": "GMGI",
    "Name": "Golden Matrix Group Inc. Common Stock"
  },
  {
    "Symbol": "GMRE",
    "Name": "Global Medical REIT Inc. Common Stock"
  },
  {
    "Symbol": "GMRE^A",
    "Name": "Global Medical REIT Inc. Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "GMS",
    "Name": "GMS Inc. Common Stock"
  },
  {
    "Symbol": "GMVD",
    "Name": "G Medical Innovations Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GMVDW",
    "Name": "G Medical Innovations Holdings Ltd. Warrants"
  },
  {
    "Symbol": "GNE",
    "Name": "Genie Energy Ltd. Class B Common Stock Stock"
  },
  {
    "Symbol": "GNE^A",
    "Name": "Genie Energy Ltd. Series 2012 - A Preferred Stock $0.01 par value"
  },
  {
    "Symbol": "GNFT",
    "Name": "GENFIT S.A. American Depositary Shares"
  },
  {
    "Symbol": "GNK",
    "Name": "Genco Shipping & Trading Limited Ordinary Shares New (Marshall Islands)"
  },
  {
    "Symbol": "GNL",
    "Name": "Global Net Lease Inc. Common Stock"
  },
  {
    "Symbol": "GNL^A",
    "Name": "Global Net Lease Inc. 7.25% Series A Cumulative Redeemable Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "GNL^B",
    "Name": "Global Net Lease Inc. 6.875% Series B Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "GNLN",
    "Name": "Greenlane Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GNLX",
    "Name": "Genelux Corporation Common Stock"
  },
  {
    "Symbol": "GNPX",
    "Name": "Genprex Inc. Common Stock"
  },
  {
    "Symbol": "GNRC",
    "Name": "Generac Holdlings Inc. Common Stock"
  },
  {
    "Symbol": "GNS",
    "Name": "Genius Group Limited Ordinary Shares"
  },
  {
    "Symbol": "GNSS",
    "Name": "Genasys Inc. Common Stock"
  },
  {
    "Symbol": "GNT",
    "Name": "GAMCO Natural Resources Gold & Income Trust"
  },
  {
    "Symbol": "GNT^A",
    "Name": "GAMCO Natural Resources Gold & Income Tust  5.20% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)"
  },
  {
    "Symbol": "GNTA",
    "Name": "Genenta Science S.p.A. American Depositary Shares"
  },
  {
    "Symbol": "GNTX",
    "Name": "Gentex Corporation Common Stock"
  },
  {
    "Symbol": "GNTY",
    "Name": "Guaranty Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "GNUS",
    "Name": "Genius Brands International Inc. Common Stock"
  },
  {
    "Symbol": "GNW",
    "Name": "Genworth Financial Inc Common Stock"
  },
  {
    "Symbol": "GO",
    "Name": "Grocery Outlet Holding Corp. Common Stock"
  },
  {
    "Symbol": "GOCO",
    "Name": "GoHealth Inc. Class A Common Stock"
  },
  {
    "Symbol": "GODNU",
    "Name": "Golden Star Acquisition Corporation Unit"
  },
  {
    "Symbol": "GOEV",
    "Name": "Canoo Inc. Class A Common Stock"
  },
  {
    "Symbol": "GOEVW",
    "Name": "Canoo Inc. Warrant"
  },
  {
    "Symbol": "GOF",
    "Name": "Guggenheim Strategic Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GOGL",
    "Name": "Golden Ocean Group Limited Common Stock"
  },
  {
    "Symbol": "GOGN",
    "Name": "GoGreen Investments Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "GOGO",
    "Name": "Gogo Inc. Common Stock"
  },
  {
    "Symbol": "GOL",
    "Name": "Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing 2 Pfd Shares"
  },
  {
    "Symbol": "GOLD",
    "Name": "Barrick Gold Corporation Common Stock (BC)"
  },
  {
    "Symbol": "GOLF",
    "Name": "Acushnet Holdings Corp. Common Stock"
  },
  {
    "Symbol": "GOOD",
    "Name": "Gladstone Commercial Corporation Real Estate Investment Trust"
  },
  {
    "Symbol": "GOODN",
    "Name": "Gladstone Commercial Corporation 6.625% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "GOODO",
    "Name": "Gladstone Commercial Corporation 6.00% Series G Cumulative Redeemable Preferred Stock par value $0.001 per share"
  },
  {
    "Symbol": "GOOG",
    "Name": "Alphabet Inc. Class C Capital Stock"
  },
  {
    "Symbol": "GOOGL",
    "Name": "Alphabet Inc. Class A Common Stock"
  },
  {
    "Symbol": "GOOS",
    "Name": "Canada Goose Holdings Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "GORO",
    "Name": "Gold Resource Corporation Common Stock"
  },
  {
    "Symbol": "GOSS",
    "Name": "Gossamer Bio Inc. Common Stock"
  },
  {
    "Symbol": "GOTU",
    "Name": "Gaotu Techedu Inc. American Depositary Shares"
  },
  {
    "Symbol": "GOVX",
    "Name": "GeoVax Labs Inc. Common Stock"
  },
  {
    "Symbol": "GOVXW",
    "Name": "GeoVax Labs Inc. Warrants"
  },
  {
    "Symbol": "GP",
    "Name": "GreenPower Motor Company Inc. Common Shares"
  },
  {
    "Symbol": "GPAC",
    "Name": "Global Partner Acquisition Corp II Class A Ordinary Share"
  },
  {
    "Symbol": "GPACW",
    "Name": "Global Partner Acquisition Corp II Warrant"
  },
  {
    "Symbol": "GPC",
    "Name": "Genuine Parts Company Common Stock"
  },
  {
    "Symbol": "GPCR",
    "Name": "Structure Therapeutics Inc. American Depositary Shares"
  },
  {
    "Symbol": "GPI",
    "Name": "Group 1 Automotive Inc. Common Stock"
  },
  {
    "Symbol": "GPJA",
    "Name": "Georgia Power Company Series 2017A 5.00% Junior Subordinated Notes due October 1 2077"
  },
  {
    "Symbol": "GPK",
    "Name": "Graphic Packaging Holding Company"
  },
  {
    "Symbol": "GPMT",
    "Name": "Granite Point Mortgage Trust Inc. Common Stock"
  },
  {
    "Symbol": "GPMT^A",
    "Name": "Granite Point Mortgage Trust Inc. 7.00% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "GPN",
    "Name": "Global Payments Inc. Common Stock"
  },
  {
    "Symbol": "GPOR",
    "Name": "Gulfport Energy Corporation Common Shares"
  },
  {
    "Symbol": "GPP",
    "Name": "Green Plains Partners LP Common Units"
  },
  {
    "Symbol": "GPRE",
    "Name": "Green Plains Inc. Common Stock"
  },
  {
    "Symbol": "GPRK",
    "Name": "Geopark Ltd Common Shares"
  },
  {
    "Symbol": "GPRO",
    "Name": "GoPro Inc. Class A Common Stock"
  },
  {
    "Symbol": "GPS",
    "Name": "Gap Inc. (The) Common Stock"
  },
  {
    "Symbol": "GRAB",
    "Name": "Grab Holdings Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "GRABW",
    "Name": "Grab Holdings Limited Warrant"
  },
  {
    "Symbol": "GRBK",
    "Name": "Green Brick Partners Inc. Common Stock"
  },
  {
    "Symbol": "GRBK^A",
    "Name": "Green Brick Partners Inc. Depositary Shares (each representing a 1/1000th fractional interest in a share of 5.75% Series A Cumulative Perpetual Preferred Stock)"
  },
  {
    "Symbol": "GRC",
    "Name": "Gorman-Rupp Company (The) Common Stock"
  },
  {
    "Symbol": "GRCL",
    "Name": "Gracell Biotechnologies Inc. American Depositary Shares"
  },
  {
    "Symbol": "GRCY",
    "Name": "Greencity Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "GRCYW",
    "Name": "Greencity Acquisition Corporation Warrants"
  },
  {
    "Symbol": "GREE",
    "Name": "Greenidge Generation Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GREEL",
    "Name": "Greenidge Generation Holdings Inc. 8.50% Senior Notes due 2026"
  },
  {
    "Symbol": "GRF",
    "Name": "Eagle Capital Growth Fund Inc. Common Stock"
  },
  {
    "Symbol": "GRFS",
    "Name": "Grifols S.A. American Depositary Shares"
  },
  {
    "Symbol": "GRFX",
    "Name": "Graphex Group Limited American Depositary Shares each American Depositary Share representing 20 Ordinary Shares"
  },
  {
    "Symbol": "GRI",
    "Name": "GRI Bio Inc. Common Stock"
  },
  {
    "Symbol": "GRIL",
    "Name": "Muscle Maker Inc Common Stock"
  },
  {
    "Symbol": "GRIN",
    "Name": "Grindrod Shipping Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "GRMN",
    "Name": "Garmin Ltd. Common Stock (Switzerland)"
  },
  {
    "Symbol": "GRNA",
    "Name": "GreenLight Biosciences Holdings PBC Common Stock"
  },
  {
    "Symbol": "GRNAW",
    "Name": "GreenLight Biosciences Holdings PBC Warrant"
  },
  {
    "Symbol": "GRND",
    "Name": "Grindr Inc. Common Stock"
  },
  {
    "Symbol": "GRNQ",
    "Name": "Greenpro Capital Corp. Common Stock"
  },
  {
    "Symbol": "GRNT",
    "Name": "Granite Ridge Resources Inc. Common Stock"
  },
  {
    "Symbol": "GROM",
    "Name": "Grom Social Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "GROMW",
    "Name": "Grom Social Enterprises Inc. Warrants"
  },
  {
    "Symbol": "GROV",
    "Name": "Grove Collaborative Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "GROW",
    "Name": "U.S. Global Investors Inc. Class A Common Stock"
  },
  {
    "Symbol": "GROY",
    "Name": "Gold Royalty Corp. Common Shares"
  },
  {
    "Symbol": "GRPH",
    "Name": "Graphite Bio Inc. Common Stock"
  },
  {
    "Symbol": "GRPN",
    "Name": "Groupon Inc. Common Stock"
  },
  {
    "Symbol": "GRRR",
    "Name": "Gorilla Technology Group Inc. Ordinary shares"
  },
  {
    "Symbol": "GRRRW",
    "Name": "Gorilla Technology Group Inc. Warrant"
  },
  {
    "Symbol": "GRTS",
    "Name": "Gritstone bio Inc. Common Stock"
  },
  {
    "Symbol": "GRTX",
    "Name": "Galera Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "GRVY",
    "Name": "GRAVITY Co. Ltd. American Depository Shares"
  },
  {
    "Symbol": "GRWG",
    "Name": "GrowGeneration Corp. Common Stock"
  },
  {
    "Symbol": "GRX",
    "Name": "The Gabelli Healthcare & Wellness Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GS",
    "Name": "Goldman Sachs Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "GS^A",
    "Name": "Goldman Sachs Group Inc. (The) Depositary Shares each representing 1/1000th Interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series A"
  },
  {
    "Symbol": "GS^C",
    "Name": "Goldman Sachs Group Inc. (The) Depositary Share repstg 1/1000th Preferred Series C"
  },
  {
    "Symbol": "GS^D",
    "Name": "Goldman Sachs Group Inc. (The) Dep Shs repstg 1/1000 Pfd Ser D Fltg"
  },
  {
    "Symbol": "GS^J",
    "Name": "Goldman Sachs Group Inc Depositary Shs Repstg 1/1000th Pfd Ser J Fixed to Fltg Rate"
  },
  {
    "Symbol": "GS^K",
    "Name": "Goldman Sachs Group Inc. (The) Dep Shs Repstg 1/1000 Int Sh Fxd/Fltg Non Cum Pfd Stk Ser K"
  },
  {
    "Symbol": "GSAT",
    "Name": "Globalstar Inc. Common Stock"
  },
  {
    "Symbol": "GSBC",
    "Name": "Great Southern Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "GSBD",
    "Name": "Goldman Sachs BDC Inc. Common Stock"
  },
  {
    "Symbol": "GSD",
    "Name": "Global Systems Dynamics Inc. Class A Common Stock"
  },
  {
    "Symbol": "GSDWW",
    "Name": "Global Systems Dynamics Inc. Warrant"
  },
  {
    "Symbol": "GSHD",
    "Name": "Goosehead Insurance Inc. Class A Common Stock"
  },
  {
    "Symbol": "GSIT",
    "Name": "GSI Technology Common Stock"
  },
  {
    "Symbol": "GSK",
    "Name": "GSK plc American Depositary Shares (Each representing two Ordinary Shares)"
  },
  {
    "Symbol": "GSL",
    "Name": "Global Ship Lease Inc New Class A Common Shares"
  },
  {
    "Symbol": "GSL^B",
    "Name": "Global Ship Lease Inc. Depository Shares Representing 1/100th Perpetual Preferred Series B% (Marshall Island)"
  },
  {
    "Symbol": "GSM",
    "Name": "Ferroglobe PLC Ordinary Shares"
  },
  {
    "Symbol": "GSMG",
    "Name": "Glory Star New Media Group Holdings Limited Ordinary Share"
  },
  {
    "Symbol": "GSMGW",
    "Name": "Glory Star New Media Group Holdings Limited Warrant expiring 2/13/2025"
  },
  {
    "Symbol": "GSQB",
    "Name": "G Squared Ascend II Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "GSRM",
    "Name": "GSR II Meteora Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "GSRMW",
    "Name": "GSR II Meteora Acquisition Corp. Warrant"
  },
  {
    "Symbol": "GSUN",
    "Name": "Golden Sun Education Group Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "GT",
    "Name": "The Goodyear Tire & Rubber Company Common Stock"
  },
  {
    "Symbol": "GTAC",
    "Name": "Global Technology Acquisition Corp. I Class A Ordinary Shares"
  },
  {
    "Symbol": "GTACU",
    "Name": "Global Technology Acquisition Corp. I Unit"
  },
  {
    "Symbol": "GTACW",
    "Name": "Global Technology Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "GTBP",
    "Name": "GT Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "GTE",
    "Name": "Gran Tierra Energy Inc. Common Stock"
  },
  {
    "Symbol": "GTEC",
    "Name": "Greenland Technologies Holding Corporation Ordinary Shares"
  },
  {
    "Symbol": "GTES",
    "Name": "Gates Industrial Corporation plc Ordinary Shares"
  },
  {
    "Symbol": "GTH",
    "Name": "Genetron Holdings Limited ADS"
  },
  {
    "Symbol": "GTHX",
    "Name": "G1 Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "GTIM",
    "Name": "Good Times Restaurants Inc. Common Stock"
  },
  {
    "Symbol": "GTLB",
    "Name": "GitLab Inc. Class A Common Stock"
  },
  {
    "Symbol": "GTLS",
    "Name": "Chart Industries Inc. Common Stock"
  },
  {
    "Symbol": "GTLS^B",
    "Name": "Chart Industries Inc. Depositary Shares each Representing a 1/20th Interest in a Share of 6.75% Series B Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "GTN",
    "Name": "Gray Television Inc. Common Stock"
  },
  {
    "Symbol": "GTX",
    "Name": "Garrett Motion Inc. Common Stock"
  },
  {
    "Symbol": "GTXAP",
    "Name": "Garrett Motion Inc. Series A Cumulative Convertible Preferred Stock"
  },
  {
    "Symbol": "GTY",
    "Name": "Getty Realty Corporation Common Stock"
  },
  {
    "Symbol": "GUG",
    "Name": "Guggenheim Active Allocation Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "GURE",
    "Name": "Gulf Resources Inc. (NV) Common Stock"
  },
  {
    "Symbol": "GUT",
    "Name": "Gabelli Utility Trust (The) Common Stock"
  },
  {
    "Symbol": "GUT^C",
    "Name": "Gabelli Utility Trust (The) 5.375% Series C Cumulative Preferred Shares"
  },
  {
    "Symbol": "GVA",
    "Name": "Granite Construction Incorporated Common Stock"
  },
  {
    "Symbol": "GVCI",
    "Name": "Green Visor Financial Technology Acquisition Corp. I Class A Ordinary Shares"
  },
  {
    "Symbol": "GVCIW",
    "Name": "Green Visor Financial Technology Acquisition Corp. I Warrants"
  },
  {
    "Symbol": "GVP",
    "Name": "GSE Systems Inc. Common Stock"
  },
  {
    "Symbol": "GWAV",
    "Name": "Greenwave Technology Solutions Inc. Common Stock"
  },
  {
    "Symbol": "GWH",
    "Name": "ESS Tech Inc. Common Stock"
  },
  {
    "Symbol": "GWRE",
    "Name": "Guidewire Software Inc. Common Stock"
  },
  {
    "Symbol": "GWRS",
    "Name": "Global Water Resources Inc. Common Stock"
  },
  {
    "Symbol": "GWW",
    "Name": "W.W. Grainger Inc. Common Stock"
  },
  {
    "Symbol": "GXO",
    "Name": "GXO Logistics Inc. Common Stock"
  },
  {
    "Symbol": "GYRO",
    "Name": "Gyrodyne LLC Common Stock"
  },
  {
    "Symbol": "H",
    "Name": "Hyatt Hotels Corporation Class A Common Stock"
  },
  {
    "Symbol": "HA",
    "Name": "Hawaiian Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HAE",
    "Name": "Haemonetics Corporation Common Stock"
  },
  {
    "Symbol": "HAFC",
    "Name": "Hanmi Financial Corporation Common Stock"
  },
  {
    "Symbol": "HAIA",
    "Name": "Healthcare AI Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "HAIAU",
    "Name": "Healthcare AI Acquisition Corp. Unit"
  },
  {
    "Symbol": "HAIAW",
    "Name": "Healthcare AI Acquisition Corp. Warrants"
  },
  {
    "Symbol": "HAIN",
    "Name": "Hain Celestial Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "HAL",
    "Name": "Halliburton Company Common Stock"
  },
  {
    "Symbol": "HALL",
    "Name": "Hallmark Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "HALO",
    "Name": "Halozyme Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "HARP",
    "Name": "Harpoon Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "HAS",
    "Name": "Hasbro Inc. Common Stock"
  },
  {
    "Symbol": "HASI",
    "Name": "Hannon Armstrong Sustainable Infrastructure Capital Inc. Common Stock"
  },
  {
    "Symbol": "HAYN",
    "Name": "Haynes International Inc. Common Stock"
  },
  {
    "Symbol": "HAYW",
    "Name": "Hayward Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HBAN",
    "Name": "Huntington Bancshares Incorporated Common Stock"
  },
  {
    "Symbol": "HBANL",
    "Name": "Huntington Bancshares Incorporated Depositary Shares Each Representing a 1/40th Interest in a Share of 6.875% Series J Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "HBANM",
    "Name": "Huntington Bancshares Incorporated Depositary Shares each representing a 1/1000th interest in a share of Huntington Series I Preferred Stock"
  },
  {
    "Symbol": "HBANP",
    "Name": "Huntington Bancshares Incorporated Depositary Shares 4.500% Series H Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "HBB",
    "Name": "Hamilton Beach Brands Holding Company Class A Common Stock"
  },
  {
    "Symbol": "HBCP",
    "Name": "Home Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HBI",
    "Name": "Hanesbrands Inc. Common Stock"
  },
  {
    "Symbol": "HBIO",
    "Name": "Harvard Bioscience Inc. Common Stock"
  },
  {
    "Symbol": "HBM",
    "Name": "Hudbay Minerals Inc. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "HBNC",
    "Name": "Horizon Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HBT",
    "Name": "HBT Financial Inc. Common Stock"
  },
  {
    "Symbol": "HCA",
    "Name": "HCA Healthcare Inc. Common Stock"
  },
  {
    "Symbol": "HCAT",
    "Name": "Health Catalyst Inc Common Stock"
  },
  {
    "Symbol": "HCC",
    "Name": "Warrior Met Coal Inc. Common Stock"
  },
  {
    "Symbol": "HCCI",
    "Name": "Heritage-Crystal Clean Inc. Common Stock"
  },
  {
    "Symbol": "HCDI",
    "Name": "Harbor Custom Development Inc. Common Stock"
  },
  {
    "Symbol": "HCDIP",
    "Name": "Harbor Custom Development Inc. 8.0% Series A Cumulative Convertible Preferred Stock no par value"
  },
  {
    "Symbol": "HCDIZ",
    "Name": "Harbor Custom Development Inc. Warrant"
  },
  {
    "Symbol": "HCI",
    "Name": "HCI Group Inc. Common Stock"
  },
  {
    "Symbol": "HCKT",
    "Name": "Hackett Group Inc (The). Common Stock"
  },
  {
    "Symbol": "HCM",
    "Name": "HUTCHMED (China) Limited American Depositary Shares"
  },
  {
    "Symbol": "HCMAW",
    "Name": "HCM Acquisition Corp Warrant"
  },
  {
    "Symbol": "HCNE",
    "Name": "Jaws Hurricane Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "HCNEW",
    "Name": "Jaws Hurricane Acquisition Corp. Warrant"
  },
  {
    "Symbol": "HCP",
    "Name": "HashiCorp Inc. Class A Common Stock"
  },
  {
    "Symbol": "HCSG",
    "Name": "Healthcare Services Group Inc. Common Stock"
  },
  {
    "Symbol": "HCTI",
    "Name": "Healthcare Triangle Inc. Common Stock"
  },
  {
    "Symbol": "HCVI",
    "Name": "Hennessy Capital Investment Corp. VI Class A Common Stock"
  },
  {
    "Symbol": "HCVIU",
    "Name": "Hennessy Capital Investment Corp. VI Unit"
  },
  {
    "Symbol": "HCVIW",
    "Name": "Hennessy Capital Investment Corp. VI Warrant"
  },
  {
    "Symbol": "HCWB",
    "Name": "HCW Biologics Inc. Common Stock"
  },
  {
    "Symbol": "HCXY",
    "Name": "Hercules Capital Inc. 6.25% Notes due 2033"
  },
  {
    "Symbol": "HD",
    "Name": "Home Depot Inc. (The) Common Stock"
  },
  {
    "Symbol": "HDB",
    "Name": "HDFC Bank Limited Common Stock"
  },
  {
    "Symbol": "HDSN",
    "Name": "Hudson Technologies Inc. Common Stock"
  },
  {
    "Symbol": "HE",
    "Name": "Hawaiian Electric Industries Inc. Common Stock"
  },
  {
    "Symbol": "HEAR",
    "Name": "Turtle Beach Corporation Common Stock"
  },
  {
    "Symbol": "HEES",
    "Name": "H&E Equipment Services Inc. Common Stock"
  },
  {
    "Symbol": "HEI",
    "Name": "Heico Corporation Common Stock"
  },
  {
    "Symbol": "HEI/A",
    "Name": "Heico Corporation"
  },
  {
    "Symbol": "HELE",
    "Name": "Helen of Troy Limited Common Stock"
  },
  {
    "Symbol": "HEP",
    "Name": "Holly Energy Partners L.P. Common Stock"
  },
  {
    "Symbol": "HEPA",
    "Name": "Hepion Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "HEPS",
    "Name": "D-Market Electronic Services & Trading American Depositary Shares"
  },
  {
    "Symbol": "HEQ",
    "Name": "John Hancock Hedged Equity & Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HES",
    "Name": "Hess Corporation Common Stock"
  },
  {
    "Symbol": "HESM",
    "Name": "Hess Midstream LP Class A Share"
  },
  {
    "Symbol": "HEXO",
    "Name": "HEXO Corp. Common Shares"
  },
  {
    "Symbol": "HFBL",
    "Name": "Home Federal Bancorp Inc. of Louisiana Common Stock"
  },
  {
    "Symbol": "HFFG",
    "Name": "HF Foods Group Inc. Common Stock"
  },
  {
    "Symbol": "HFRO",
    "Name": "Highland Income Fund"
  },
  {
    "Symbol": "HFRO^A",
    "Name": "Highland Income Fund 5.375% Series A Cumulative Preferred Shares"
  },
  {
    "Symbol": "HFWA",
    "Name": "Heritage Financial Corporation Common Stock"
  },
  {
    "Symbol": "HGBL",
    "Name": "Heritage Global Inc. Common Stock"
  },
  {
    "Symbol": "HGEN",
    "Name": "Humanigen Inc. Common Stock"
  },
  {
    "Symbol": "HGLB",
    "Name": "Highland Global Allocation Fund Common Stock"
  },
  {
    "Symbol": "HGTY",
    "Name": "Hagerty Inc. Class A Common Stock"
  },
  {
    "Symbol": "HGV",
    "Name": "Hilton Grand Vacations Inc. Common Stock"
  },
  {
    "Symbol": "HHC",
    "Name": "Howard Hughes Corporation (The) Common Stock"
  },
  {
    "Symbol": "HHGCR",
    "Name": "HHG Capital Corporation Rights"
  },
  {
    "Symbol": "HHGCU",
    "Name": "HHG Capital Corporation Units"
  },
  {
    "Symbol": "HHGCW",
    "Name": "HHG Capital Corporation Warrant"
  },
  {
    "Symbol": "HHLA",
    "Name": "HH&L Acquisition Co. Class A Ordinary Shares"
  },
  {
    "Symbol": "HHRS",
    "Name": "Hammerhead Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "HHRSW",
    "Name": "Hammerhead Energy Inc. Warrant"
  },
  {
    "Symbol": "HHS",
    "Name": "Harte-Hanks Inc. Common Stock"
  },
  {
    "Symbol": "HI",
    "Name": "Hillenbrand Inc Common Stock"
  },
  {
    "Symbol": "HIBB",
    "Name": "Hibbett Inc. Common Stock"
  },
  {
    "Symbol": "HIE",
    "Name": "Miller/Howard High Income Equity Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HIFS",
    "Name": "Hingham Institution for Savings Common Stock"
  },
  {
    "Symbol": "HIG",
    "Name": "Hartford Financial Services Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "HIG^G",
    "Name": "Hartford Financial Services Group Inc. (The) Depositary Shares each representing a 1/1000th interest in a share of 6.000% Non-Cumulative Preferred Stock Series G $0.01 par value"
  },
  {
    "Symbol": "HIHO",
    "Name": "Highway Holdings Limited Common Stock"
  },
  {
    "Symbol": "HII",
    "Name": "Huntington Ingalls Industries Inc. Common Stock"
  },
  {
    "Symbol": "HILS",
    "Name": "Hillstream BioPharma Inc. Common Stock"
  },
  {
    "Symbol": "HIMS",
    "Name": "Hims & Hers Health Inc. Class A Common Stock"
  },
  {
    "Symbol": "HIMX",
    "Name": "Himax Technologies Inc. American Depositary Shares"
  },
  {
    "Symbol": "HIO",
    "Name": "Western Asset High Income Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "HIPO",
    "Name": "Hippo Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HITI",
    "Name": "High Tide Inc. Common Shares"
  },
  {
    "Symbol": "HIVE",
    "Name": "Hive Blockchain Technologies Ltd. Common Shares"
  },
  {
    "Symbol": "HIW",
    "Name": "Highwoods Properties Inc. Common Stock"
  },
  {
    "Symbol": "HIX",
    "Name": "Western Asset High Income Fund II Inc. Common Stock"
  },
  {
    "Symbol": "HKD",
    "Name": "AMTD Digital Inc. American Depositary Shares (every five of which represent two Class A Ordinary Shares)"
  },
  {
    "Symbol": "HKIT",
    "Name": "Hitek Global Inc. Ordinary Share"
  },
  {
    "Symbol": "HL",
    "Name": "Hecla Mining Company Common Stock"
  },
  {
    "Symbol": "HL^B",
    "Name": "Hecla Mining Company Preferred Stock"
  },
  {
    "Symbol": "HLF",
    "Name": "Herbalife Ltd. Common Shares"
  },
  {
    "Symbol": "HLGN",
    "Name": "Heliogen Inc. Common Stock"
  },
  {
    "Symbol": "HLI",
    "Name": "Houlihan Lokey Inc. Class A Common Stock"
  },
  {
    "Symbol": "HLIO",
    "Name": "Helios Technologies Inc. Common Stock"
  },
  {
    "Symbol": "HLIT",
    "Name": "Harmonic Inc. Common Stock"
  },
  {
    "Symbol": "HLLY",
    "Name": "Holley Inc. Common Stock"
  },
  {
    "Symbol": "HLMN",
    "Name": "Hillman Solutions Corp. Common Stock"
  },
  {
    "Symbol": "HLN",
    "Name": "Haleon plc American Depositary Shares (Each representing two Ordinary Shares)"
  },
  {
    "Symbol": "HLNE",
    "Name": "Hamilton Lane Incorporated Class A Common Stock"
  },
  {
    "Symbol": "HLP",
    "Name": "Hongli Group Inc. Ordinary Shares"
  },
  {
    "Symbol": "HLT",
    "Name": "Hilton Worldwide Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HLTH",
    "Name": "Cue Health Inc. Common Stock"
  },
  {
    "Symbol": "HLVX",
    "Name": "HilleVax Inc. Common Stock"
  },
  {
    "Symbol": "HLX",
    "Name": "Helix Energy Solutions Group Inc. Common Stock"
  },
  {
    "Symbol": "HMA",
    "Name": "Heartland Media Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "HMACW",
    "Name": "Hainan Manaslu Acquisition Corp. Warrant"
  },
  {
    "Symbol": "HMC",
    "Name": "Honda Motor Company Ltd. Common Stock"
  },
  {
    "Symbol": "HMN",
    "Name": "Horace Mann Educators Corporation Common Stock"
  },
  {
    "Symbol": "HMNF",
    "Name": "HMN Financial Inc. Common Stock"
  },
  {
    "Symbol": "HMPT",
    "Name": "Home Point Capital Inc Common Stock"
  },
  {
    "Symbol": "HMST",
    "Name": "HomeStreet Inc. Common Stock"
  },
  {
    "Symbol": "HMY",
    "Name": "Harmony Gold Mining Company Limited"
  },
  {
    "Symbol": "HNI",
    "Name": "HNI Corporation Common Stock"
  },
  {
    "Symbol": "HNNA",
    "Name": "Hennessy Advisors Inc. Common Stock"
  },
  {
    "Symbol": "HNNAZ",
    "Name": "Hennessy Advisors Inc. 4.875% Notes due 2026"
  },
  {
    "Symbol": "HNRA",
    "Name": "HNR Acquisition Corp Common Stock"
  },
  {
    "Symbol": "HNRG",
    "Name": "Hallador Energy Company Common Stock"
  },
  {
    "Symbol": "HNST",
    "Name": "The Honest Company Inc. Common Stock"
  },
  {
    "Symbol": "HNVR",
    "Name": "Hanover Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HNW",
    "Name": "Pioneer Diversified High Income Fund Inc."
  },
  {
    "Symbol": "HOFT",
    "Name": "Hooker Furnishings Corporation Common Stock"
  },
  {
    "Symbol": "HOFV",
    "Name": "Hall of Fame Resort & Entertainment Company Common Stock"
  },
  {
    "Symbol": "HOFVW",
    "Name": "Hall of Fame Resort &amp; Entertainment Company Warrant"
  },
  {
    "Symbol": "HOG",
    "Name": "Harley-Davidson Inc. Common Stock"
  },
  {
    "Symbol": "HOLI",
    "Name": "Hollysys Automation Technologies Ltd. Common Shares (British Virgin Islands)"
  },
  {
    "Symbol": "HOLO",
    "Name": "MicroCloud Hologram Inc. Ordinary Shares"
  },
  {
    "Symbol": "HOLOW",
    "Name": "MicroCloud Hologram Inc. Warrant"
  },
  {
    "Symbol": "HOLX",
    "Name": "Hologic Inc. Common Stock"
  },
  {
    "Symbol": "HOMB",
    "Name": "Home BancShares Inc. Common Stock"
  },
  {
    "Symbol": "HON",
    "Name": "Honeywell International Inc. Common Stock"
  },
  {
    "Symbol": "HONE",
    "Name": "HarborOne Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HOOD",
    "Name": "Robinhood Markets Inc. Class A Common Stock"
  },
  {
    "Symbol": "HOOK",
    "Name": "HOOKIPA Pharma Inc. Common Stock"
  },
  {
    "Symbol": "HOPE",
    "Name": "Hope Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HOTH",
    "Name": "Hoth Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "HOUR",
    "Name": "Hour Loop Inc. Common Stock"
  },
  {
    "Symbol": "HOUS",
    "Name": "Anywhere Real Estate Inc. Common Stock"
  },
  {
    "Symbol": "HOV",
    "Name": "Hovnanian Enterprises Inc. Class A Common Stock"
  },
  {
    "Symbol": "HOVNP",
    "Name": "Hovnanian Enterprises Inc Dep Shr Srs A Pfd"
  },
  {
    "Symbol": "HOWL",
    "Name": "Werewolf Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "HP",
    "Name": "Helmerich & Payne Inc. Common Stock"
  },
  {
    "Symbol": "HPCO",
    "Name": "Hempacco Co. Inc. Common Stock"
  },
  {
    "Symbol": "HPE",
    "Name": "Hewlett Packard Enterprise Company Common Stock"
  },
  {
    "Symbol": "HPF",
    "Name": "John Hancock Pfd Income Fund II Pfd Income Fund II"
  },
  {
    "Symbol": "HPI",
    "Name": "John Hancock Preferred Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HPK",
    "Name": "HighPeak Energy Inc. Common Stock"
  },
  {
    "Symbol": "HPKEW",
    "Name": "HighPeak Energy Inc. Warrant"
  },
  {
    "Symbol": "HPLT",
    "Name": "Home Plate Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "HPLTW",
    "Name": "Home Plate Acquisition Corporation Warrant"
  },
  {
    "Symbol": "HPP",
    "Name": "Hudson Pacific Properties Inc. Common Stock"
  },
  {
    "Symbol": "HPP^C",
    "Name": "Hudson Pacific Properties Inc. 4.750% Series C Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "HPQ",
    "Name": "HP Inc. Common Stock"
  },
  {
    "Symbol": "HPS",
    "Name": "John Hancock Preferred Income Fund III Preferred Income Fund III"
  },
  {
    "Symbol": "HQH",
    "Name": "Tekla Healthcare Investors Common Stock"
  },
  {
    "Symbol": "HQI",
    "Name": "HireQuest Inc. Common Stock (DE)"
  },
  {
    "Symbol": "HQL",
    "Name": "TeklaLife Sciences Investors Common Stock"
  },
  {
    "Symbol": "HQY",
    "Name": "HealthEquity Inc. Common Stock"
  },
  {
    "Symbol": "HR",
    "Name": "Healthcare Realty Trust Incorporated Common Stock"
  },
  {
    "Symbol": "HRB",
    "Name": "H&R Block Inc. Common Stock"
  },
  {
    "Symbol": "HRI",
    "Name": "Herc Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HRL",
    "Name": "Hormel Foods Corporation Common Stock"
  },
  {
    "Symbol": "HRMY",
    "Name": "Harmony Biosciences Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HROW",
    "Name": "Harrow Health Inc. Common Stock"
  },
  {
    "Symbol": "HROWL",
    "Name": "Harrow Health Inc. 8.625% Senior Notes due 2026"
  },
  {
    "Symbol": "HROWM",
    "Name": "Harrow Health Inc. 11.875% Senior Notes due 2027"
  },
  {
    "Symbol": "HRT",
    "Name": "HireRight Holdings Corporation Common Stock"
  },
  {
    "Symbol": "HRTG",
    "Name": "Heritage Insurance Holdings Inc. Common Stock"
  },
  {
    "Symbol": "HRTX",
    "Name": "Heron Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "HRZN",
    "Name": "Horizon Technology Finance Corporation Common Stock"
  },
  {
    "Symbol": "HSAI",
    "Name": "Hesai Group American Depositary Share each ADS represents one Class B ordinary share"
  },
  {
    "Symbol": "HSBC",
    "Name": "HSBC Holdings plc. Common Stock"
  },
  {
    "Symbol": "HSC",
    "Name": "Harsco Corporation Common Stock"
  },
  {
    "Symbol": "HSCS",
    "Name": "Heart Test Laboratories Inc. Common Stock"
  },
  {
    "Symbol": "HSCSW",
    "Name": "Heart Test Laboratories Inc. Warrant"
  },
  {
    "Symbol": "HSDT",
    "Name": "Helius Medical Technologies Inc. Class A Common Stock (DE)"
  },
  {
    "Symbol": "HSHP",
    "Name": "Himalaya Shipping Ltd. Common Shares"
  },
  {
    "Symbol": "HSIC",
    "Name": "Henry Schein Inc. Common Stock"
  },
  {
    "Symbol": "HSII",
    "Name": "Heidrick & Struggles International Inc. Common Stock"
  },
  {
    "Symbol": "HSKA",
    "Name": "Heska Corporation Common Stock"
  },
  {
    "Symbol": "HSON",
    "Name": "Hudson Global Inc. Common Stock"
  },
  {
    "Symbol": "HSPO",
    "Name": "Horizon Space Acquisition I Corp. Ordinary Shares"
  },
  {
    "Symbol": "HSPOR",
    "Name": "Horizon Space Acquisition I Corp. Right"
  },
  {
    "Symbol": "HSPOU",
    "Name": "Horizon Space Acquisition I Corp. Unit"
  },
  {
    "Symbol": "HSPOW",
    "Name": "Horizon Space Acquisition I Corp. Warrant"
  },
  {
    "Symbol": "HST",
    "Name": "Host Hotels & Resorts Inc. Common Stock"
  },
  {
    "Symbol": "HSTM",
    "Name": "HealthStream Inc. Common Stock"
  },
  {
    "Symbol": "HSTO",
    "Name": "Histogen Inc. Common Stock"
  },
  {
    "Symbol": "HSY",
    "Name": "The Hershey Company Common Stock"
  },
  {
    "Symbol": "HT",
    "Name": "Hersha Hospitality Trust Class A Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HT^C",
    "Name": "Hersha Hospitality Trust 6.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "HT^D",
    "Name": "Hersha Hospitality Trust 6.50% Series D Cumulative Redeemable Preferred Shares of Beneficial Interest $0.01 par value per share"
  },
  {
    "Symbol": "HT^E",
    "Name": "Hersha Hospitality Trust 6.50% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "HTBI",
    "Name": "HomeTrust Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "HTBK",
    "Name": "Heritage Commerce Corp Common Stock"
  },
  {
    "Symbol": "HTCR",
    "Name": "Heartcore Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "HTD",
    "Name": "John Hancock Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HTFB",
    "Name": "Horizon Technology Finance Corporation 4.875% Notes due 2026"
  },
  {
    "Symbol": "HTFC",
    "Name": "Horizon Technology Finance Corporation 6.25% Notes due 2027"
  },
  {
    "Symbol": "HTGC",
    "Name": "Hercules Capital Inc. Common Stock"
  },
  {
    "Symbol": "HTGM",
    "Name": "HTG Molecular Diagnostics Inc. Common Stock"
  },
  {
    "Symbol": "HTH",
    "Name": "Hilltop Holdings Inc."
  },
  {
    "Symbol": "HTHT",
    "Name": "H World Group Limited American Depositary Shares"
  },
  {
    "Symbol": "HTIA",
    "Name": "Healthcare Trust Inc. 7.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "HTIBP",
    "Name": "Healthcare Trust Inc. 7.125% Series B Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "HTLD",
    "Name": "Heartland Express Inc. Common Stock"
  },
  {
    "Symbol": "HTLF",
    "Name": "Heartland Financial USA Inc. Common Stock"
  },
  {
    "Symbol": "HTLFP",
    "Name": "Heartland Financial USA Inc. Depositary Shares each representing a 1/400th ownership interest in a share of 7.00% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "HTOO",
    "Name": "Fusion Fuel Green PLC Class A Ordinary Shares"
  },
  {
    "Symbol": "HTOOW",
    "Name": "Fusion Fuel Green PLC Warrant"
  },
  {
    "Symbol": "HTY",
    "Name": "John Hancock Tax-Advantaged Global Shareholder Yield Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "HTZ",
    "Name": "Hertz Global Holdings Inc Common Stock"
  },
  {
    "Symbol": "HTZWW",
    "Name": "Hertz Global Holdings Inc Warrant"
  },
  {
    "Symbol": "HUBB",
    "Name": "Hubbell Inc Common Stock"
  },
  {
    "Symbol": "HUBC",
    "Name": "Hub Cyber Security Ltd. Ordinary Shares"
  },
  {
    "Symbol": "HUBCW",
    "Name": "Hub Cyber Security Ltd. Warrant 2/27/28"
  },
  {
    "Symbol": "HUBCZ",
    "Name": "Hub Cyber Security Ltd. Warrant 8/22/23"
  },
  {
    "Symbol": "HUBG",
    "Name": "Hub Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "HUBS",
    "Name": "HubSpot Inc. Common Stock"
  },
  {
    "Symbol": "HUDA",
    "Name": "Hudson Acquisition I Corp. Common Stock"
  },
  {
    "Symbol": "HUDAR",
    "Name": "Hudson Acquisition I Corp. Right"
  },
  {
    "Symbol": "HUDAU",
    "Name": "Hudson Acquisition  I Corp. Unit"
  },
  {
    "Symbol": "HUDI",
    "Name": "Huadi International Group Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "HUGE",
    "Name": "FSD Pharma Inc. Class B Subordinate Voting Shares"
  },
  {
    "Symbol": "HUIZ",
    "Name": "Huize Holding Limited American Depositary Shares"
  },
  {
    "Symbol": "HUM",
    "Name": "Humana Inc. Common Stock"
  },
  {
    "Symbol": "HUMA",
    "Name": "Humacyte Inc. Common Stock"
  },
  {
    "Symbol": "HUMAW",
    "Name": "Humacyte Inc. Warrant"
  },
  {
    "Symbol": "HUN",
    "Name": "Huntsman Corporation Common Stock"
  },
  {
    "Symbol": "HURC",
    "Name": "Hurco Companies Inc. Common Stock"
  },
  {
    "Symbol": "HURN",
    "Name": "Huron Consulting Group Inc. Common Stock"
  },
  {
    "Symbol": "HUSA",
    "Name": "Houston American Energy Corporation Common Stock"
  },
  {
    "Symbol": "HUT",
    "Name": "Hut 8 Mining Corp. Common Shares"
  },
  {
    "Symbol": "HUYA",
    "Name": "HUYA Inc. American depositary shares each  representing one Class A ordinary share"
  },
  {
    "Symbol": "HVBC",
    "Name": "HV Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "HVT",
    "Name": "Haverty Furniture Companies Inc. Common Stock"
  },
  {
    "Symbol": "HVT/A",
    "Name": "Haverty Furniture Companies Inc."
  },
  {
    "Symbol": "HWBK",
    "Name": "Hawthorn Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "HWC",
    "Name": "Hancock Whitney Corporation Common Stock"
  },
  {
    "Symbol": "HWCPZ",
    "Name": "Hancock Whitney Corporation 6.25% Subordinated Notes due 2060"
  },
  {
    "Symbol": "HWEL",
    "Name": "Healthwell Acquisition Corp. I Class A Common Stock"
  },
  {
    "Symbol": "HWELU",
    "Name": "Healthwell Acquisition Corp. I Unit"
  },
  {
    "Symbol": "HWELW",
    "Name": "Healthwell Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "HWKN",
    "Name": "Hawkins Inc. Common Stock"
  },
  {
    "Symbol": "HWKZ",
    "Name": "Hawks Acquisition Corp Class A Common Stock"
  },
  {
    "Symbol": "HWM",
    "Name": "Howmet Aerospace Inc. Common Stock"
  },
  {
    "Symbol": "HWM^",
    "Name": "Howmet Aerospace Inc. $3.75 Preferred Stock"
  },
  {
    "Symbol": "HXL",
    "Name": "Hexcel Corporation Common Stock"
  },
  {
    "Symbol": "HY",
    "Name": "Hyster-Yale Materials Handling Inc. Class A Common Stock"
  },
  {
    "Symbol": "HYB",
    "Name": "New America High Income Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "HYFM",
    "Name": "Hydrofarm Holdings Group Inc. Common Stock"
  },
  {
    "Symbol": "HYI",
    "Name": "Western Asset High Yield Defined Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "HYLN",
    "Name": "Hyliion Holdings Corp. Class A Common Stock"
  },
  {
    "Symbol": "HYMC",
    "Name": "Hycroft Mining Holding Corporation Class A Common Stock"
  },
  {
    "Symbol": "HYMCL",
    "Name": "Hycroft Mining Holding Corporation Warrants"
  },
  {
    "Symbol": "HYMCW",
    "Name": "Hycroft Mining Holding Corporation  Warrant"
  },
  {
    "Symbol": "HYPR",
    "Name": "Hyperfine Inc. Class A Common Stock"
  },
  {
    "Symbol": "HYT",
    "Name": "Blackrock Corporate High Yield Fund Inc. Common Stock"
  },
  {
    "Symbol": "HYW",
    "Name": "Hywin Holdings Ltd. American Depositary Shares"
  },
  {
    "Symbol": "HYZN",
    "Name": "Hyzon Motors Inc. Class A Common Stock"
  },
  {
    "Symbol": "HYZNW",
    "Name": "Hyzon Motors Inc. Warrants"
  },
  {
    "Symbol": "HZNP",
    "Name": "Horizon Therapeutics Public Limited Company Ordinary Shares"
  },
  {
    "Symbol": "HZO",
    "Name": "MarineMax Inc.  (FL) Common Stock"
  },
  {
    "Symbol": "IAC",
    "Name": "IAC Inc. Common Stock"
  },
  {
    "Symbol": "IAE",
    "Name": "Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IAF",
    "Name": "abrdn Australia Equity Fund Inc. Common Stock"
  },
  {
    "Symbol": "IAG",
    "Name": "Iamgold Corporation Ordinary Shares"
  },
  {
    "Symbol": "IART",
    "Name": "Integra LifeSciences Holdings Corporation Common Stock"
  },
  {
    "Symbol": "IAS",
    "Name": "Integral Ad Science Holding Corp. Common Stock"
  },
  {
    "Symbol": "IAUX",
    "Name": "i-80 Gold Corp. Common Shares"
  },
  {
    "Symbol": "IBCP",
    "Name": "Independent Bank Corporation Common Stock"
  },
  {
    "Symbol": "IBEX",
    "Name": "IBEX Limited Common Shares"
  },
  {
    "Symbol": "IBIO",
    "Name": "iBio Inc. Common Stock"
  },
  {
    "Symbol": "IBKR",
    "Name": "Interactive Brokers Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "IBM",
    "Name": "International Business Machines Corporation Common Stock"
  },
  {
    "Symbol": "IBN",
    "Name": "ICICI Bank Limited Common Stock"
  },
  {
    "Symbol": "IBOC",
    "Name": "International Bancshares Corporation Common Stock"
  },
  {
    "Symbol": "IBP",
    "Name": "Installed Building Products Inc. Common Stock"
  },
  {
    "Symbol": "IBRX",
    "Name": "ImmunityBio Inc. Common Stock"
  },
  {
    "Symbol": "IBTX",
    "Name": "Independent Bank Group Inc Common Stock"
  },
  {
    "Symbol": "ICAD",
    "Name": "iCAD Inc. Common Stock"
  },
  {
    "Symbol": "ICCC",
    "Name": "ImmuCell Corporation Common Stock"
  },
  {
    "Symbol": "ICCH",
    "Name": "ICC Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ICCM",
    "Name": "IceCure Medical Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ICD",
    "Name": "Independence Contract Drilling Inc. Common Stock"
  },
  {
    "Symbol": "ICE",
    "Name": "Intercontinental Exchange Inc. Common Stock"
  },
  {
    "Symbol": "ICFI",
    "Name": "ICF International Inc. Common Stock"
  },
  {
    "Symbol": "ICG",
    "Name": "Intchains Group Limited American Depositary Shares"
  },
  {
    "Symbol": "ICHR",
    "Name": "Ichor Holdings Ordinary Shares"
  },
  {
    "Symbol": "ICL",
    "Name": "ICL Group Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ICLK",
    "Name": "iClick Interactive Asia Group Limited American Depositary Shares"
  },
  {
    "Symbol": "ICLR",
    "Name": "ICON plc Ordinary Shares"
  },
  {
    "Symbol": "ICMB",
    "Name": "Investcorp Credit Management BDC Inc. Common Stock"
  },
  {
    "Symbol": "ICNC",
    "Name": "Iconic Sports Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "ICPT",
    "Name": "Intercept Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ICR^A",
    "Name": "InPoint Commercial Real Estate Income Inc. 6.75% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "ICU",
    "Name": "SeaStar Medical Holding Corporation Common Stock"
  },
  {
    "Symbol": "ICUCW",
    "Name": "SeaStar Medical Holding Corporation Warrant"
  },
  {
    "Symbol": "ICUI",
    "Name": "ICU Medical Inc. Common Stock"
  },
  {
    "Symbol": "ICVX",
    "Name": "Icosavax Inc. Common Stock"
  },
  {
    "Symbol": "ID",
    "Name": "PARTS iD Inc. Class A Common Stock"
  },
  {
    "Symbol": "IDA",
    "Name": "IDACORP Inc. Common Stock"
  },
  {
    "Symbol": "IDAI",
    "Name": "T Stamp Inc. Class A Common Stock"
  },
  {
    "Symbol": "IDBA",
    "Name": "IDEX Biometrics ASA American Depositary Shares"
  },
  {
    "Symbol": "IDCC",
    "Name": "InterDigital Inc. Common Stock"
  },
  {
    "Symbol": "IDE",
    "Name": "Voya Infrastructure Industrials and Materials Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IDEX",
    "Name": "Ideanomics Inc. Common Stock"
  },
  {
    "Symbol": "IDN",
    "Name": "Intellicheck Inc. Common Stock"
  },
  {
    "Symbol": "IDR",
    "Name": "Idaho Strategic Resources Inc. Common Stock"
  },
  {
    "Symbol": "IDT",
    "Name": "IDT Corporation Class B Common Stock"
  },
  {
    "Symbol": "IDW",
    "Name": "IDW Media Holdings Class B Common Stock"
  },
  {
    "Symbol": "IDXX",
    "Name": "IDEXX Laboratories Inc. Common Stock"
  },
  {
    "Symbol": "IDYA",
    "Name": "IDEAYA Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "IE",
    "Name": "Ivanhoe Electric Inc. Common Stock"
  },
  {
    "Symbol": "IEP",
    "Name": "Icahn Enterprises L.P. Common Stock"
  },
  {
    "Symbol": "IESC",
    "Name": "IES Holdings Inc. Common Stock"
  },
  {
    "Symbol": "IEX",
    "Name": "IDEX Corporation Common Stock"
  },
  {
    "Symbol": "IFBD",
    "Name": "Infobird Co. Ltd Ordinary Shares"
  },
  {
    "Symbol": "IFF",
    "Name": "International Flavors & Fragrances Inc. Common Stock"
  },
  {
    "Symbol": "IFIN",
    "Name": "InFinT Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "IFN",
    "Name": "India Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "IFRX",
    "Name": "InflaRx N.V. Common Stock"
  },
  {
    "Symbol": "IFS",
    "Name": "Intercorp Financial Services Inc. Common Shares"
  },
  {
    "Symbol": "IGA",
    "Name": "Voya Global Advantage and Premium Opportunity Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IGC",
    "Name": "IGC Pharma Inc. Common Stock"
  },
  {
    "Symbol": "IGD",
    "Name": "Voya Global Equity Dividend and Premium Opportunity Fund"
  },
  {
    "Symbol": "IGI",
    "Name": "Western Asset Investment Grade Defined Opportunity Trust Inc. Common Stock"
  },
  {
    "Symbol": "IGIC",
    "Name": "International General Insurance Holdings Ltd. Ordinary Share"
  },
  {
    "Symbol": "IGICW",
    "Name": "International General Insurance Holdings Ltd. Warrants expiring 03/17/2025"
  },
  {
    "Symbol": "IGMS",
    "Name": "IGM Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "IGR",
    "Name": "CBRE Global Real Estate Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IGT",
    "Name": "International Game Technology Ordinary Shares"
  },
  {
    "Symbol": "IGTA",
    "Name": "Inception Growth Acquisition Limited Common Stock"
  },
  {
    "Symbol": "IGTAR",
    "Name": "Inception Growth Acquisition Limited Rights"
  },
  {
    "Symbol": "IGTAU",
    "Name": "Inception Growth Acquisition Limited Unit"
  },
  {
    "Symbol": "IH",
    "Name": "iHuman Inc. American depositary shares each representing five Class A ordinary shares"
  },
  {
    "Symbol": "IHD",
    "Name": "Voya Emerging Markets High Income Dividend Equity Fund Common Shares"
  },
  {
    "Symbol": "IHG",
    "Name": "Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)"
  },
  {
    "Symbol": "IHIT",
    "Name": "Invesco High Income 2023 Target Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IHRT",
    "Name": "iHeartMedia Inc. Class A Common Stock"
  },
  {
    "Symbol": "IHS",
    "Name": "IHS Holding Limited Ordinary Shares"
  },
  {
    "Symbol": "IHT",
    "Name": "InnSuites Hospitality Trust Shares of Beneficial Interest"
  },
  {
    "Symbol": "IHTA",
    "Name": "Invesco High Income 2024 Target Term Fund Common Shares of Beneficial Interest No par value per share"
  },
  {
    "Symbol": "IIF",
    "Name": "Morgan Stanley India Investment Fund Inc. Common Stock"
  },
  {
    "Symbol": "III",
    "Name": "Information Services Group Inc. Common Stock"
  },
  {
    "Symbol": "IIIN",
    "Name": "Insteel Industries Inc. Common Stock"
  },
  {
    "Symbol": "IIIV",
    "Name": "i3 Verticals Inc. Class A Common Stock"
  },
  {
    "Symbol": "IIM",
    "Name": "Invesco Value Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "IINN",
    "Name": "Inspira Technologies Oxy B.H.N. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "IINNW",
    "Name": "Inspira Technologies Oxy B.H.N. Ltd. Warrant"
  },
  {
    "Symbol": "IIPR",
    "Name": "Innovative Industrial Properties Inc. Common Stock"
  },
  {
    "Symbol": "IIPR^A",
    "Name": "Innovative Industrial Properties Inc. 9.00% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "IIVI",
    "Name": "Coherent Corp. 6.00% Series A Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "IKNA",
    "Name": "Ikena Oncology Inc. Common Stock"
  },
  {
    "Symbol": "IKT",
    "Name": "Inhibikase Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ILAG",
    "Name": "Intelligent Living Application Group Inc. Ordinary Shares"
  },
  {
    "Symbol": "ILLM",
    "Name": "AcuityAds Holdings Inc. Common Shares"
  },
  {
    "Symbol": "ILMN",
    "Name": "Illumina Inc. Common Stock"
  },
  {
    "Symbol": "ILPT",
    "Name": "Industrial Logistics Properties Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "IMAB",
    "Name": "I-MAB American Depositary Shares"
  },
  {
    "Symbol": "IMACW",
    "Name": "IMAC Holdings Inc. Warrant"
  },
  {
    "Symbol": "IMAQ",
    "Name": "International Media Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "IMAQR",
    "Name": "International Media Acquisition Corp. Rights"
  },
  {
    "Symbol": "IMAQW",
    "Name": "International Media Acquisition Corp. Warrants"
  },
  {
    "Symbol": "IMAX",
    "Name": "Imax Corporation Common Stock"
  },
  {
    "Symbol": "IMBI",
    "Name": "iMedia Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "IMBIL",
    "Name": "iMedia Brands Inc. 8.5% Senior Notes Due 2026"
  },
  {
    "Symbol": "IMCC",
    "Name": "IM Cannabis Corp. Common Shares"
  },
  {
    "Symbol": "IMCI",
    "Name": "Infinite Group Inc."
  },
  {
    "Symbol": "IMCR",
    "Name": "Immunocore Holdings plc American Depositary Shares"
  },
  {
    "Symbol": "IMGN",
    "Name": "ImmunoGen Inc. Common Stock"
  },
  {
    "Symbol": "IMKTA",
    "Name": "Ingles Markets Incorporated Class A Common Stock"
  },
  {
    "Symbol": "IMMP",
    "Name": "Immutep Limited American Depositary Shares"
  },
  {
    "Symbol": "IMMR",
    "Name": "Immersion Corporation Common Stock"
  },
  {
    "Symbol": "IMMX",
    "Name": "Immix Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "IMNM",
    "Name": "Immunome Inc. Common Stock"
  },
  {
    "Symbol": "IMNN",
    "Name": "Imunon Inc. Common Stock"
  },
  {
    "Symbol": "IMO",
    "Name": "Imperial Oil Limited Common Stock"
  },
  {
    "Symbol": "IMOS",
    "Name": "ChipMOS TECHNOLOGIES INC. American Depositary Shares"
  },
  {
    "Symbol": "IMPL",
    "Name": "Impel Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "IMPP",
    "Name": "Imperial Petroleum Inc. Common Shares"
  },
  {
    "Symbol": "IMPPP",
    "Name": "Imperial Petroleum Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Shares"
  },
  {
    "Symbol": "IMRN",
    "Name": "Immuron Limited American Depositary Shares"
  },
  {
    "Symbol": "IMRX",
    "Name": "Immuneering Corporation Class A Common Stock"
  },
  {
    "Symbol": "IMTE",
    "Name": "Integrated Media Technology Limited Ordinary Shares"
  },
  {
    "Symbol": "IMTX",
    "Name": "Immatics N.V. Ordinary Shares"
  },
  {
    "Symbol": "IMTXW",
    "Name": "Immatics N.V. Warrants"
  },
  {
    "Symbol": "IMUX",
    "Name": "Immunic Inc. Common Stock"
  },
  {
    "Symbol": "IMVT",
    "Name": "Immunovant Inc. Common Stock"
  },
  {
    "Symbol": "IMXI",
    "Name": "International Money Express Inc. Common Stock"
  },
  {
    "Symbol": "INAB",
    "Name": "IN8bio Inc. Common Stock"
  },
  {
    "Symbol": "INAQ",
    "Name": "Insight Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "INBK",
    "Name": "First Internet Bancorp Common Stock"
  },
  {
    "Symbol": "INBKZ",
    "Name": "First Internet Bancorp 6.0% Fixed-to-Floating Rate Subordinated Notes Due 2029"
  },
  {
    "Symbol": "INBS",
    "Name": "Intelligent Bio Solutions Inc. Common Stock"
  },
  {
    "Symbol": "INBX",
    "Name": "Inhibrx Inc. Common Stock"
  },
  {
    "Symbol": "INCR",
    "Name": "Intercure Ltd. Ordinary Shares"
  },
  {
    "Symbol": "INCY",
    "Name": "Incyte Corp. Common Stock"
  },
  {
    "Symbol": "INDB",
    "Name": "Independent Bank Corp. Common Stock"
  },
  {
    "Symbol": "INDI",
    "Name": "indie Semiconductor Inc. Class A Common Stock"
  },
  {
    "Symbol": "INDIW",
    "Name": "indie Semiconductor Inc. Warrant"
  },
  {
    "Symbol": "INDO",
    "Name": "Indonesia Energy Corporation Limited Ordinary Shares"
  },
  {
    "Symbol": "INDP",
    "Name": "Indaptus Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "INDT",
    "Name": "INDUS Realty Trust Inc. (MD) Common Stock"
  },
  {
    "Symbol": "INFA",
    "Name": "Informatica Inc. Class A Common Stock"
  },
  {
    "Symbol": "INFI",
    "Name": "Infinity Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "INFN",
    "Name": "Infinera Corporation Common Stock"
  },
  {
    "Symbol": "INFU",
    "Name": "InfuSystems Holdings Inc. Common Stock"
  },
  {
    "Symbol": "INFY",
    "Name": "Infosys Limited American Depositary Shares"
  },
  {
    "Symbol": "ING",
    "Name": "ING Group N.V. Common Stock"
  },
  {
    "Symbol": "INGN",
    "Name": "Inogen Inc Common Stock"
  },
  {
    "Symbol": "INGR",
    "Name": "Ingredion Incorporated Common Stock"
  },
  {
    "Symbol": "INKT",
    "Name": "MiNK Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "INLX",
    "Name": "Intellinetics Inc. Common Stock"
  },
  {
    "Symbol": "INM",
    "Name": "InMed Pharmaceuticals Inc. Common Shares"
  },
  {
    "Symbol": "INMB",
    "Name": "INmune Bio Inc. Common stock"
  },
  {
    "Symbol": "INMD",
    "Name": "InMode Ltd. Ordinary Shares"
  },
  {
    "Symbol": "INN",
    "Name": "Summit Hotel Properties Inc. Common Stock"
  },
  {
    "Symbol": "INN^E",
    "Name": "Summit Hotel Properties Inc. 6.250% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "INN^F",
    "Name": "Summit Hotel Properties Inc. 5.875% Series F Cumulative Redeemable Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "INNV",
    "Name": "InnovAge Holding Corp. Common Stock"
  },
  {
    "Symbol": "INO",
    "Name": "Inovio Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "INOD",
    "Name": "Innodata Inc. Common Stock"
  },
  {
    "Symbol": "INPX",
    "Name": "Inpixon Common Stock"
  },
  {
    "Symbol": "INSE",
    "Name": "Inspired Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "INSG",
    "Name": "Inseego Corp. Common Stock"
  },
  {
    "Symbol": "INSI",
    "Name": "Insight Select Income Fund"
  },
  {
    "Symbol": "INSM",
    "Name": "Insmed Incorporated Common Stock"
  },
  {
    "Symbol": "INSP",
    "Name": "Inspire Medical Systems Inc. Common Stock"
  },
  {
    "Symbol": "INST",
    "Name": "Instructure Holdings Inc. Common Stock"
  },
  {
    "Symbol": "INSW",
    "Name": "International Seaways Inc. Common Stock"
  },
  {
    "Symbol": "INT",
    "Name": "World Fuel Services Corporation Common Stock"
  },
  {
    "Symbol": "INTA",
    "Name": "Intapp Inc. Common Stock"
  },
  {
    "Symbol": "INTC",
    "Name": "Intel Corporation Common Stock"
  },
  {
    "Symbol": "INTE",
    "Name": "Integral Acquisition Corporation 1 Class A Common Stock"
  },
  {
    "Symbol": "INTEW",
    "Name": "Integral Acquisition Corporation 1 Warrants"
  },
  {
    "Symbol": "INTG",
    "Name": "Intergroup Corporation (The) Common Stock"
  },
  {
    "Symbol": "INTR",
    "Name": "Inter & Co. Inc. Class A Common Shares"
  },
  {
    "Symbol": "INTT",
    "Name": "inTest Corporation Common Stock"
  },
  {
    "Symbol": "INTU",
    "Name": "Intuit Inc. Common Stock"
  },
  {
    "Symbol": "INTZ",
    "Name": "Intrusion Inc. Common Stock"
  },
  {
    "Symbol": "INUV",
    "Name": "Inuvo Inc."
  },
  {
    "Symbol": "INVA",
    "Name": "Innoviva Inc. Common Stock"
  },
  {
    "Symbol": "INVE",
    "Name": "Identiv Inc. Common Stock"
  },
  {
    "Symbol": "INVH",
    "Name": "Invitation Homes Inc. Common Stock"
  },
  {
    "Symbol": "INVO",
    "Name": "INVO BioScience Inc. Common Stock"
  },
  {
    "Symbol": "INVZ",
    "Name": "Innoviz Technologies Ltd. Ordinary shares"
  },
  {
    "Symbol": "INVZW",
    "Name": "Innoviz Technologies Ltd. Warrant"
  },
  {
    "Symbol": "INZY",
    "Name": "Inozyme Pharma Inc. Common Stock"
  },
  {
    "Symbol": "IOAC",
    "Name": "Innovative International Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "IOACW",
    "Name": "Innovative International Acquisition Corp. Warrants"
  },
  {
    "Symbol": "IOBT",
    "Name": "IO Biotech Inc. Common Stock"
  },
  {
    "Symbol": "IONM",
    "Name": "Assure Holdings Corp. Common Stock"
  },
  {
    "Symbol": "IONQ",
    "Name": "IonQ Inc. Common Stock"
  },
  {
    "Symbol": "IONR",
    "Name": "ioneer Ltd American Depositary Shares"
  },
  {
    "Symbol": "IONS",
    "Name": "Ionis Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "IOR",
    "Name": "Income Opportunity Realty Investors Inc. Common Stock"
  },
  {
    "Symbol": "IOSP",
    "Name": "Innospec Inc. Common Stock"
  },
  {
    "Symbol": "IOT",
    "Name": "Samsara Inc. Class A Common Stock"
  },
  {
    "Symbol": "IOVA",
    "Name": "Iovance Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "IP",
    "Name": "International Paper Company Common Stock"
  },
  {
    "Symbol": "IPA",
    "Name": "ImmunoPrecise Antibodies Ltd. Common Stock"
  },
  {
    "Symbol": "IPAR",
    "Name": "Inter Parfums Inc. Common Stock"
  },
  {
    "Symbol": "IPDN",
    "Name": "Professional Diversity Network Inc. Common Stock"
  },
  {
    "Symbol": "IPG",
    "Name": "Interpublic Group of Companies Inc. (The) Common Stock"
  },
  {
    "Symbol": "IPGP",
    "Name": "IPG Photonics Corporation Common Stock"
  },
  {
    "Symbol": "IPHA",
    "Name": "Innate Pharma S.A. ADS"
  },
  {
    "Symbol": "IPI",
    "Name": "Intrepid Potash Inc Common Stock"
  },
  {
    "Symbol": "IPSC",
    "Name": "Century Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "IPVF",
    "Name": "InterPrivate III Financial Partners Inc. Class A Common Stock"
  },
  {
    "Symbol": "IPW",
    "Name": "iPower Inc. Common Stock"
  },
  {
    "Symbol": "IPWR",
    "Name": "Ideal Power Inc. Common Stock"
  },
  {
    "Symbol": "IQ",
    "Name": "iQIYI Inc. American Depositary Shares"
  },
  {
    "Symbol": "IQI",
    "Name": "Invesco Quality Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "IQV",
    "Name": "IQVIA Holdings Inc. Common Stock"
  },
  {
    "Symbol": "IR",
    "Name": "Ingersoll Rand Inc. Common Stock"
  },
  {
    "Symbol": "IRAA",
    "Name": "Iris Acquisition Corp Class A Common Stock"
  },
  {
    "Symbol": "IRAAW",
    "Name": "Iris Acquisition Corp Warrant"
  },
  {
    "Symbol": "IRBT",
    "Name": "iRobot Corporation Common Stock"
  },
  {
    "Symbol": "IRDM",
    "Name": "Iridium Communications Inc Common Stock"
  },
  {
    "Symbol": "IREN",
    "Name": "Iris Energy Limited Ordinary Shares"
  },
  {
    "Symbol": "IRIX",
    "Name": "IRIDEX Corporation Common Stock"
  },
  {
    "Symbol": "IRM",
    "Name": "Iron Mountain Incorporated (Delaware)Common Stock REIT"
  },
  {
    "Symbol": "IRMD",
    "Name": "iRadimed Corporation Common Stock"
  },
  {
    "Symbol": "IRNT",
    "Name": "IronNet Inc. Common Stock"
  },
  {
    "Symbol": "IRON",
    "Name": "Disc Medicine Inc. Common Stock"
  },
  {
    "Symbol": "IROQ",
    "Name": "IF Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "IRRX",
    "Name": "Integrated Rail and Resources Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "IRS",
    "Name": "IRSA Inversiones Y Representaciones S.A. Common Stock"
  },
  {
    "Symbol": "IRT",
    "Name": "Independence Realty Trust Inc. Common Stock"
  },
  {
    "Symbol": "IRTC",
    "Name": "iRhythm Technologies Inc. Common Stock"
  },
  {
    "Symbol": "IRWD",
    "Name": "Ironwood Pharmaceuticals Inc. Class A Common Stock"
  },
  {
    "Symbol": "ISD",
    "Name": "PGIM High Yield Bond Fund Inc."
  },
  {
    "Symbol": "ISDR",
    "Name": "Issuer Direct Corporation Common Stock"
  },
  {
    "Symbol": "ISEE",
    "Name": "IVERIC bio Inc. Common Stock"
  },
  {
    "Symbol": "ISIG",
    "Name": "Insignia Systems Inc. Common Stock"
  },
  {
    "Symbol": "ISPC",
    "Name": "iSpecimen Inc. Common Stock"
  },
  {
    "Symbol": "ISPO",
    "Name": "Inspirato Incorporated Class A Common Stock"
  },
  {
    "Symbol": "ISPOW",
    "Name": "Inspirato Incorporated Warrant"
  },
  {
    "Symbol": "ISPR",
    "Name": "Ispire Technology Inc. Common Stock"
  },
  {
    "Symbol": "ISRG",
    "Name": "Intuitive Surgical Inc. Common Stock"
  },
  {
    "Symbol": "ISRL",
    "Name": "Israel Acquisitions Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "ISRLU",
    "Name": "Israel Acquisitions Corp Unit"
  },
  {
    "Symbol": "ISRLW",
    "Name": "Israel Acquisitions Corp Warrant"
  },
  {
    "Symbol": "ISSC",
    "Name": "Innovative Solutions and Support Inc. Common Stock"
  },
  {
    "Symbol": "ISTR",
    "Name": "Investar Holding Corporation Common Stock"
  },
  {
    "Symbol": "ISUN",
    "Name": "iSun Inc. Common Stock"
  },
  {
    "Symbol": "IT",
    "Name": "Gartner Inc. Common Stock"
  },
  {
    "Symbol": "ITAQ",
    "Name": "Industrial Tech Acquisitions II Inc. Class A Common Stock"
  },
  {
    "Symbol": "ITAQU",
    "Name": "Industrial Tech Acquisitions II Inc. Unit"
  },
  {
    "Symbol": "ITAQW",
    "Name": "Industrial Tech Acquisitions II Inc. Warrants"
  },
  {
    "Symbol": "ITCI",
    "Name": "Intra-Cellular Therapies Inc. Common Stock"
  },
  {
    "Symbol": "ITCL",
    "Name": "Banco Itau Chile American Depositary Shares (each representing 1500 shares of Common Stock)"
  },
  {
    "Symbol": "ITGR",
    "Name": "Integer Holdings Corporation Common Stock"
  },
  {
    "Symbol": "ITI",
    "Name": "Iteris Inc. Common Stock"
  },
  {
    "Symbol": "ITIC",
    "Name": "Investors Title Company Common Stock"
  },
  {
    "Symbol": "ITOS",
    "Name": "iTeos Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ITP",
    "Name": "IT Tech Packaging Inc. Common Stock"
  },
  {
    "Symbol": "ITRG",
    "Name": "Integra Resources Corp. Common Shares"
  },
  {
    "Symbol": "ITRI",
    "Name": "Itron Inc. Common Stock"
  },
  {
    "Symbol": "ITRM",
    "Name": "Iterum Therapeutics plc Ordinary Share"
  },
  {
    "Symbol": "ITRN",
    "Name": "Ituran Location and Control Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ITT",
    "Name": "ITT Inc. Common Stock"
  },
  {
    "Symbol": "ITUB",
    "Name": "Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)"
  },
  {
    "Symbol": "ITW",
    "Name": "Illinois Tool Works Inc. Common Stock"
  },
  {
    "Symbol": "IVA",
    "Name": "Inventiva S.A. American Depository Shares"
  },
  {
    "Symbol": "IVAC",
    "Name": "Intevac Inc. Common Stock"
  },
  {
    "Symbol": "IVCA",
    "Name": "Investcorp India Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "IVCAU",
    "Name": "Investcorp India Acquisition Corp. Unit"
  },
  {
    "Symbol": "IVCAW",
    "Name": "Investcorp India Acquisition Corp. Warrant"
  },
  {
    "Symbol": "IVCB",
    "Name": "Investcorp Europe Acquisition Corp I Class A Ordinary Shares"
  },
  {
    "Symbol": "IVCBW",
    "Name": "Investcorp Europe Acquisition Corp I Warrant"
  },
  {
    "Symbol": "IVCP",
    "Name": "Swiftmerge Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "IVCPU",
    "Name": "Swiftmerge Acquisition Corp. Unit"
  },
  {
    "Symbol": "IVCPW",
    "Name": "Swiftmerge Acquisition Corp. Warrants"
  },
  {
    "Symbol": "IVDA",
    "Name": "Iveda Solutions Inc. Common Stock"
  },
  {
    "Symbol": "IVR",
    "Name": "INVESCO MORTGAGE CAPITAL INC Common Stock"
  },
  {
    "Symbol": "IVR^B",
    "Name": "Invesco Mortgage Capital Inc. Preferred Series B Cum Fxd to Fltg"
  },
  {
    "Symbol": "IVR^C",
    "Name": "INVESCO MORTGAGE CAPITAL INC 7.5% Fixed-to-Floating Series C Cumulative Redeemable Preferred Stock Liquation Preference $25.00 per Share"
  },
  {
    "Symbol": "IVT",
    "Name": "InvenTrust Properties Corp. Common Stock"
  },
  {
    "Symbol": "IVVD",
    "Name": "Invivyd Inc. Common Stock"
  },
  {
    "Symbol": "IVZ",
    "Name": "Invesco Ltd Common Stock"
  },
  {
    "Symbol": "IX",
    "Name": "Orix Corp Ads Common Stock"
  },
  {
    "Symbol": "IXAQ",
    "Name": "IX Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "IXHL",
    "Name": "Incannex Healthcare Limited American Depositary Shares"
  },
  {
    "Symbol": "IZEA",
    "Name": "IZEA Worldwide Inc. Common Stock"
  },
  {
    "Symbol": "IZM",
    "Name": "ICZOOM Group Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "J",
    "Name": "Jacobs Solutions Inc. Common Stock"
  },
  {
    "Symbol": "JACK",
    "Name": "Jack In The Box Inc. Common Stock"
  },
  {
    "Symbol": "JAGX",
    "Name": "Jaguar Health Inc. Common Stock"
  },
  {
    "Symbol": "JAKK",
    "Name": "JAKKS Pacific Inc. Common Stock"
  },
  {
    "Symbol": "JAMF",
    "Name": "Jamf Holding Corp. Common Stock"
  },
  {
    "Symbol": "JAN",
    "Name": "JanOne Inc. Common Stock (NV)"
  },
  {
    "Symbol": "JANX",
    "Name": "Janux Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "JAQC",
    "Name": "Jupiter Acquisition Corporation Common stock"
  },
  {
    "Symbol": "JAQCU",
    "Name": "Jupiter Acquisition Corporation Units"
  },
  {
    "Symbol": "JAZZ",
    "Name": "Jazz Pharmaceuticals plc Common Stock (Ireland)"
  },
  {
    "Symbol": "JBGS",
    "Name": "JBG SMITH Properties Common Shares"
  },
  {
    "Symbol": "JBHT",
    "Name": "J.B. Hunt Transport Services Inc. Common Stock"
  },
  {
    "Symbol": "JBI",
    "Name": "Janus International Group Inc. Common Stock"
  },
  {
    "Symbol": "JBL",
    "Name": "Jabil Inc. Common Stock"
  },
  {
    "Symbol": "JBLU",
    "Name": "JetBlue Airways Corporation Common Stock"
  },
  {
    "Symbol": "JBSS",
    "Name": "John B. Sanfilippo & Son Inc. Common Stock"
  },
  {
    "Symbol": "JBT",
    "Name": "John Bean Technologies Corporation Common Stock"
  },
  {
    "Symbol": "JCE",
    "Name": "Nuveen Core Equity Alpha Fund Nuveen Core Equity Alpha Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JCI",
    "Name": "Johnson Controls International plc Ordinary Share"
  },
  {
    "Symbol": "JCSE",
    "Name": "JE Cleantech Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "JCTCF",
    "Name": "Jewett-Cameron Trading Company Common Shares"
  },
  {
    "Symbol": "JD",
    "Name": "JD.com Inc. American Depositary Shares"
  },
  {
    "Symbol": "JEF",
    "Name": "Jefferies Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "JELD",
    "Name": "JELD-WEN Holding Inc. Common Stock"
  },
  {
    "Symbol": "JEQ",
    "Name": "abrdn Japan Equity Fund Inc. Common Stock"
  },
  {
    "Symbol": "JEWL",
    "Name": "Adamas One Corp. Common Stock"
  },
  {
    "Symbol": "JFBR",
    "Name": "Jeffs' Brands Ltd Ordinary Shares"
  },
  {
    "Symbol": "JFBRW",
    "Name": "Jeffs' Brands Ltd Warrant"
  },
  {
    "Symbol": "JFIN",
    "Name": "Jiayin Group Inc. American Depositary Shares"
  },
  {
    "Symbol": "JFR",
    "Name": "Nuveen Floating Rate Income Fund Common Stock"
  },
  {
    "Symbol": "JFU",
    "Name": "9F Inc. American Depositary Shares"
  },
  {
    "Symbol": "JG",
    "Name": "Aurora Mobile Limited American Depositary Shares"
  },
  {
    "Symbol": "JGGC",
    "Name": "Jaguar Global Growth Corporation I Class A Ordinary Shares"
  },
  {
    "Symbol": "JGGCU",
    "Name": "Jaguar Global Growth Corporation I Unit"
  },
  {
    "Symbol": "JGGCW",
    "Name": "Jaguar Global Growth Corporation I Warrant"
  },
  {
    "Symbol": "JGH",
    "Name": "Nuveen Global High Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JHAA",
    "Name": "Nuveen Corporate Income 2023 Target Term Fund"
  },
  {
    "Symbol": "JHG",
    "Name": "Janus Henderson Group plc Ordinary Shares"
  },
  {
    "Symbol": "JHI",
    "Name": "John Hancock Investors Trust Common Stock"
  },
  {
    "Symbol": "JHS",
    "Name": "John Hancock Income Securities Trust Common Stock"
  },
  {
    "Symbol": "JHX",
    "Name": "James Hardie Industries plc American Depositary Shares (Ireland)"
  },
  {
    "Symbol": "JILL",
    "Name": "J. Jill Inc. Common Stock"
  },
  {
    "Symbol": "JJSF",
    "Name": "J & J Snack Foods Corp. Common Stock"
  },
  {
    "Symbol": "JKHY",
    "Name": "Jack Henry & Associates Inc. Common Stock"
  },
  {
    "Symbol": "JKS",
    "Name": "JinkoSolar Holding Company Limited American Depositary Shares (each representing 4 Common Shares)"
  },
  {
    "Symbol": "JLL",
    "Name": "Jones Lang LaSalle Incorporated Common Stock"
  },
  {
    "Symbol": "JLS",
    "Name": "Nuveen Mortgage and Income Fund"
  },
  {
    "Symbol": "JMIA",
    "Name": "Jumia Technologies AG American Depositary Shares each representing two Ordinary Shares"
  },
  {
    "Symbol": "JMM",
    "Name": "Nuveen Multi-Market Income Fund (MA)"
  },
  {
    "Symbol": "JMSB",
    "Name": "John Marshall Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "JNCE",
    "Name": "Jounce Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "JNJ",
    "Name": "Johnson & Johnson Common Stock"
  },
  {
    "Symbol": "JNPR",
    "Name": "Juniper Networks Inc. Common Stock"
  },
  {
    "Symbol": "JOAN",
    "Name": "JOANN Inc. Common Stock"
  },
  {
    "Symbol": "JOB",
    "Name": "GEE Group Inc. Common Stock"
  },
  {
    "Symbol": "JOBY",
    "Name": "Joby Aviation Inc. Common Stock"
  },
  {
    "Symbol": "JOE",
    "Name": "St. Joe Company (The) Common Stock"
  },
  {
    "Symbol": "JOF",
    "Name": "Japan Smaller Capitalization Fund Inc Common Stock"
  },
  {
    "Symbol": "JOUT",
    "Name": "Johnson Outdoors Inc. Class A Common Stock"
  },
  {
    "Symbol": "JPC",
    "Name": "Nuveen Preferred & Income Opportunities Fund"
  },
  {
    "Symbol": "JPI",
    "Name": "Nuveen Preferred and Income Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JPM",
    "Name": "JP Morgan Chase & Co. Common Stock"
  },
  {
    "Symbol": "JPM^C",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 6.00% Non-Cumulative  Preferred Stock Series EE"
  },
  {
    "Symbol": "JPM^D",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th  interest in a share of 5.75% Non-Cumulative  Preferred Stock Series DD"
  },
  {
    "Symbol": "JPM^J",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of JPMorgan Chase & Co. 4.75% Non-Cumulative Preferred Stock Series GG"
  },
  {
    "Symbol": "JPM^K",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.55% Non-Cumulative Preferred Stock Series JJ"
  },
  {
    "Symbol": "JPM^L",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.625% Non-Cumulative Preferred Stock Series LL"
  },
  {
    "Symbol": "JPM^M",
    "Name": "J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.20% Non-Cumulative Preferred Stock Series MM"
  },
  {
    "Symbol": "JPS",
    "Name": "Nuveen Preferred & Income Securities Fund"
  },
  {
    "Symbol": "JPT",
    "Name": "Nuveen Preferred and Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JQC",
    "Name": "Nuveen Credit Strategies Income Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "JRI",
    "Name": "Nuveen Real Asset Income and Growth Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JRO",
    "Name": "Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "JRS",
    "Name": "Nuveen Real Estate Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JRSH",
    "Name": "Jerash Holdings (US) Inc. Common Stock"
  },
  {
    "Symbol": "JRVR",
    "Name": "James River Group Holdings Ltd. Common Shares"
  },
  {
    "Symbol": "JSD",
    "Name": "Nuveen Short Duration Credit Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "JSM",
    "Name": "Navient Corporation 6% Senior Notes due December 15 2043"
  },
  {
    "Symbol": "JSPR",
    "Name": "Jasper Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "JSPRW",
    "Name": "Japer Therapeutics Inc. Warrants"
  },
  {
    "Symbol": "JT",
    "Name": "Jianpu Technology Inc. American depositary shares"
  },
  {
    "Symbol": "JUGG",
    "Name": "Jaws Juggernaut Acquisition Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "JUGGU",
    "Name": "Jaws Juggernaut Acquisition Corporation Unit"
  },
  {
    "Symbol": "JUGGW",
    "Name": "Jaws Juggernaut Acquisition Corporation Warrant"
  },
  {
    "Symbol": "JUN",
    "Name": "Juniper II Corp. Class A Common Stock"
  },
  {
    "Symbol": "JUPW",
    "Name": "Jupiter Wellness Inc. Common Stock"
  },
  {
    "Symbol": "JUPWW",
    "Name": "Jupiter Wellness Inc. Warrant"
  },
  {
    "Symbol": "JVA",
    "Name": "Coffee Holding Co. Inc. Common Stock"
  },
  {
    "Symbol": "JWAC",
    "Name": "Jupiter Wellness Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "JWACR",
    "Name": "Jupiter Wellness Acquisition Corp. Right"
  },
  {
    "Symbol": "JWEL",
    "Name": "Jowell Global Ltd. Ordinary Shares"
  },
  {
    "Symbol": "JWN",
    "Name": "Nordstrom Inc. Common Stock"
  },
  {
    "Symbol": "JWSM",
    "Name": "Jaws Mustang Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "JXJT",
    "Name": "JX Luxventure Limited Common Stock"
  },
  {
    "Symbol": "JXN",
    "Name": "Jackson Financial Inc. Class A Common Stock"
  },
  {
    "Symbol": "JXN^A",
    "Name": "Jackson Financial Inc. Depositary Shares each representing a 1/1000th interest in a share of Fixed-Rate Reset Noncumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "JYD",
    "Name": "Jayud Global Logistics Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "JYNT",
    "Name": "The Joint Corp. Common Stock"
  },
  {
    "Symbol": "JZ",
    "Name": "Jianzhi Education Technology Group Company Limited American Depositary Shares"
  },
  {
    "Symbol": "JZXN",
    "Name": "Jiuzi Holdings Inc. Ordinary Shares"
  },
  {
    "Symbol": "K",
    "Name": "Kellogg Company Common Stock"
  },
  {
    "Symbol": "KA",
    "Name": "Kineta Inc. Common Stock"
  },
  {
    "Symbol": "KACL",
    "Name": "Kairous Acquisition Corp. Limited Ordinary Shares"
  },
  {
    "Symbol": "KACLR",
    "Name": "Kairous Acquisition Corp. Limited Rights"
  },
  {
    "Symbol": "KACLW",
    "Name": "Kairous Acquisition Corp. Limited Warrants"
  },
  {
    "Symbol": "KAI",
    "Name": "Kadant Inc Common Stock"
  },
  {
    "Symbol": "KALA",
    "Name": "Kala Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "KALU",
    "Name": "Kaiser Aluminum Corporation Common Stock"
  },
  {
    "Symbol": "KALV",
    "Name": "KalVista Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "KAMN",
    "Name": "Kaman Corporation Common Stock"
  },
  {
    "Symbol": "KAR",
    "Name": "KAR Auction Services Inc Common Stock"
  },
  {
    "Symbol": "KARO",
    "Name": "Karooooo Ltd. Ordinary Shares"
  },
  {
    "Symbol": "KAVL",
    "Name": "Kaival Brands Innovations Group Inc. Common Stock"
  },
  {
    "Symbol": "KB",
    "Name": "KB Financial Group Inc"
  },
  {
    "Symbol": "KBAL",
    "Name": "Kimball International Inc. Class B Common Stock"
  },
  {
    "Symbol": "KBH",
    "Name": "KB Home Common Stock"
  },
  {
    "Symbol": "KBNT",
    "Name": "Kubient Inc. Common Stock"
  },
  {
    "Symbol": "KBNTW",
    "Name": "Kubient Inc. Warrant"
  },
  {
    "Symbol": "KBR",
    "Name": "KBR Inc. Common Stock"
  },
  {
    "Symbol": "KC",
    "Name": "Kingsoft Cloud Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "KCGI",
    "Name": "Kensington Capital Acquisition Corp. V Class A Ordinary Shares"
  },
  {
    "Symbol": "KD",
    "Name": "Kyndryl Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KDNY",
    "Name": "Chinook Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KDP",
    "Name": "Keurig Dr Pepper Inc. Common Stock"
  },
  {
    "Symbol": "KE",
    "Name": "Kimball Electronics Inc. Common Stock"
  },
  {
    "Symbol": "KELYA",
    "Name": "Kelly Services Inc. Class A Common Stock"
  },
  {
    "Symbol": "KELYB",
    "Name": "Kelly Services Inc. Class B Common Stock"
  },
  {
    "Symbol": "KEN",
    "Name": "Kenon Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "KEP",
    "Name": "Korea Electric Power Corporation Common Stock"
  },
  {
    "Symbol": "KEQU",
    "Name": "Kewaunee Scientific Corporation Common Stock"
  },
  {
    "Symbol": "KERN",
    "Name": "Akerna Corp. Common Stock"
  },
  {
    "Symbol": "KERNW",
    "Name": "Akerna Corp Warrant"
  },
  {
    "Symbol": "KEX",
    "Name": "Kirby Corporation Common Stock"
  },
  {
    "Symbol": "KEY",
    "Name": "KeyCorp Common Stock"
  },
  {
    "Symbol": "KEY^I",
    "Name": "KeyCorp Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed-to-Floating Rate Perpetual Non-Cumulative Preferred Stock Series E"
  },
  {
    "Symbol": "KEY^J",
    "Name": "KeyCorp Depositary Shares each representing a 1/40th ownership interest in a share of Fixed Rate Perpetual Non-Cumulative Preferred Stock Series F"
  },
  {
    "Symbol": "KEY^K",
    "Name": "KeyCorp Depositary Shares each representing a 1/40th ownership interest in a share of Fixed Rate Perpetual Non-Cumulative Preferred Stock Series G"
  },
  {
    "Symbol": "KEY^L",
    "Name": "KeyCorp Depositary Shares each representing a 1/40th ownership interest in a share of Fixed Rate Perpetual Non-Cumulative Preferred Stock Series H"
  },
  {
    "Symbol": "KEYS",
    "Name": "Keysight Technologies Inc. Common Stock"
  },
  {
    "Symbol": "KF",
    "Name": "Korea Fund Inc. (The) New Common Stock"
  },
  {
    "Symbol": "KFFB",
    "Name": "Kentucky First Federal Bancorp Common Stock"
  },
  {
    "Symbol": "KFRC",
    "Name": "Kforce Inc. Common Stock"
  },
  {
    "Symbol": "KFS",
    "Name": "Kingsway Financial Services Inc. Common Stock (DE)"
  },
  {
    "Symbol": "KFY",
    "Name": "Korn Ferry Common Stock"
  },
  {
    "Symbol": "KGC",
    "Name": "Kinross Gold Corporation Common Stock"
  },
  {
    "Symbol": "KHC",
    "Name": "The Kraft Heinz Company Common Stock"
  },
  {
    "Symbol": "KIDS",
    "Name": "OrthoPediatrics Corp. Common Stock"
  },
  {
    "Symbol": "KIM",
    "Name": "Kimco Realty Corporation (HC) Common Stock"
  },
  {
    "Symbol": "KIM^L",
    "Name": "Kimco Realty Corporation Class L Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.125% Class L Cumulative Redeemable Preferred Stock liquidation preference $25000.00 per share"
  },
  {
    "Symbol": "KIM^M",
    "Name": "Kimco Realty Corporation Class M Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.25% Class M Cumulative Redeemable Preferred Stock liquidation preference $25000.00 per share"
  },
  {
    "Symbol": "KIND",
    "Name": "Nextdoor Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "KINS",
    "Name": "Kingstone Companies Inc. Common Stock"
  },
  {
    "Symbol": "KIO",
    "Name": "KKR Income Opportunities Fund Common Shares"
  },
  {
    "Symbol": "KIQ",
    "Name": "Kelso Technologies Inc Ordinary Shares"
  },
  {
    "Symbol": "KIRK",
    "Name": "Kirkland's Inc. COMMONSTOCK"
  },
  {
    "Symbol": "KITT",
    "Name": "Nauticus Robotics Inc. Common stock"
  },
  {
    "Symbol": "KKR",
    "Name": "KKR & Co. Inc. Common Stock"
  },
  {
    "Symbol": "KKR^C",
    "Name": "KKR & Co. Inc. 6.00% Series C Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "KKRS",
    "Name": "KKR Group Finance Co. IX LLC 4.625% Subordinated Notes due 2061"
  },
  {
    "Symbol": "KLAC",
    "Name": "KLA Corporation Common Stock"
  },
  {
    "Symbol": "KLIC",
    "Name": "Kulicke and Soffa Industries Inc. Common Stock"
  },
  {
    "Symbol": "KLR",
    "Name": "Kaleyra Inc. Common Stock"
  },
  {
    "Symbol": "KLTR",
    "Name": "Kaltura Inc. Common Stock"
  },
  {
    "Symbol": "KLXE",
    "Name": "KLX Energy Services Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KMB",
    "Name": "Kimberly-Clark Corporation Common Stock"
  },
  {
    "Symbol": "KMDA",
    "Name": "Kamada Ltd. Ordinary Shares"
  },
  {
    "Symbol": "KMF",
    "Name": "Kayne Anderson NextGen Energy & Infrastructure Inc."
  },
  {
    "Symbol": "KMI",
    "Name": "Kinder Morgan Inc. Common Stock"
  },
  {
    "Symbol": "KMPB",
    "Name": "Kemper Corporation 5.875% Fixed-Rate Reset Junior Subordinated Debentures due 2062"
  },
  {
    "Symbol": "KMPR",
    "Name": "Kemper Corporation"
  },
  {
    "Symbol": "KMT",
    "Name": "Kennametal Inc. Common Stock"
  },
  {
    "Symbol": "KMX",
    "Name": "CarMax Inc"
  },
  {
    "Symbol": "KN",
    "Name": "Knowles Corporation Common Stock"
  },
  {
    "Symbol": "KNDI",
    "Name": "Kandi Technologies Group Inc Common Stock"
  },
  {
    "Symbol": "KNOP",
    "Name": "KNOT Offshore Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "KNSA",
    "Name": "Kiniksa Pharmaceuticals Ltd. Class A Common Stock"
  },
  {
    "Symbol": "KNSL",
    "Name": "Kinsale Capital Group Inc. Common Stock"
  },
  {
    "Symbol": "KNSW",
    "Name": "KnightSwan Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "KNTE",
    "Name": "Kinnate Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "KNTK",
    "Name": "Kinetik Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "KNW",
    "Name": "Know Labs Inc. Common Stock"
  },
  {
    "Symbol": "KNX",
    "Name": "Knight-Swift Transportation Holdings Inc."
  },
  {
    "Symbol": "KO",
    "Name": "Coca-Cola Company (The) Common Stock"
  },
  {
    "Symbol": "KOD",
    "Name": "Kodiak Sciences Inc Common Stock"
  },
  {
    "Symbol": "KODK",
    "Name": "Eastman Kodak Company Common New"
  },
  {
    "Symbol": "KOF",
    "Name": "Coca Cola Femsa S.A.B. de C.V.  American Depositary Shares each representing 10 Units (each Unit consists of 3 Series B Shares and 5 Series L Shares)"
  },
  {
    "Symbol": "KOP",
    "Name": "Koppers Holdings Inc. Koppers Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KOPN",
    "Name": "Kopin Corporation Common Stock"
  },
  {
    "Symbol": "KORE",
    "Name": "KORE Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KOS",
    "Name": "Kosmos Energy Ltd. Common Shares (DE)"
  },
  {
    "Symbol": "KOSS",
    "Name": "Koss Corporation Common Stock"
  },
  {
    "Symbol": "KPLT",
    "Name": "Katapult Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KPLTW",
    "Name": "Katapult Holdings Inc. Warrant"
  },
  {
    "Symbol": "KPRX",
    "Name": "Kiora Pharmaceuticals Inc.  Common Stock"
  },
  {
    "Symbol": "KPTI",
    "Name": "Karyopharm Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KR",
    "Name": "Kroger Company (The) Common Stock"
  },
  {
    "Symbol": "KRBP",
    "Name": "Kiromic BioPharma Inc. Common Stock"
  },
  {
    "Symbol": "KRC",
    "Name": "Kilroy Realty Corporation Common Stock"
  },
  {
    "Symbol": "KREF",
    "Name": "KKR Real Estate Finance Trust Inc. Common Stock"
  },
  {
    "Symbol": "KREF^A",
    "Name": "KKR Real Estate Finance Trust Inc. 6.50% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "KRG",
    "Name": "Kite Realty Group Trust Common Stock"
  },
  {
    "Symbol": "KRKR",
    "Name": "36Kr Holdings Inc. American Depositary Shares"
  },
  {
    "Symbol": "KRMD",
    "Name": "KORU Medical Systems Inc. Common Stock"
  },
  {
    "Symbol": "KRNL",
    "Name": "Kernel Group Holdings Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "KRNLW",
    "Name": "Kernel Group Holdings Inc. Warrants"
  },
  {
    "Symbol": "KRNT",
    "Name": "Kornit Digital Ltd. Ordinary Shares"
  },
  {
    "Symbol": "KRNY",
    "Name": "Kearny Financial Corp Common Stock"
  },
  {
    "Symbol": "KRO",
    "Name": "Kronos Worldwide Inc Common Stock"
  },
  {
    "Symbol": "KRON",
    "Name": "Kronos Bio Inc. Common Stock"
  },
  {
    "Symbol": "KROS",
    "Name": "Keros Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KRP",
    "Name": "Kimbell Royalty Partners Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "KRT",
    "Name": "Karat Packaging Inc. Common Stock"
  },
  {
    "Symbol": "KRTX",
    "Name": "Karuna Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KRUS",
    "Name": "Kura Sushi USA Inc. Class A Common Stock"
  },
  {
    "Symbol": "KRYS",
    "Name": "Krystal Biotech Inc. Common Stock"
  },
  {
    "Symbol": "KSCP",
    "Name": "Knightscope Inc. Class A Common Stock"
  },
  {
    "Symbol": "KSM",
    "Name": "DWS Strategic Municipal Income Trust"
  },
  {
    "Symbol": "KSPN",
    "Name": "Kaspien Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KSS",
    "Name": "Kohl's Corporation Common Stock"
  },
  {
    "Symbol": "KT",
    "Name": "KT Corporation Common Stock"
  },
  {
    "Symbol": "KTB",
    "Name": "Kontoor Brands Inc. Common Stock"
  },
  {
    "Symbol": "KTCC",
    "Name": "Key Tronic Corporation Common Stock"
  },
  {
    "Symbol": "KTF",
    "Name": "DWS Municipal Income Trust"
  },
  {
    "Symbol": "KTH",
    "Name": "Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock"
  },
  {
    "Symbol": "KTN",
    "Name": "Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)"
  },
  {
    "Symbol": "KTOS",
    "Name": "Kratos Defense & Security Solutions Inc. Common Stock"
  },
  {
    "Symbol": "KTRA",
    "Name": "Kintara Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KTTA",
    "Name": "Pasithea Therapeutics Corp. Common Stock"
  },
  {
    "Symbol": "KTTAW",
    "Name": "Pasithea Therapeutics Corp. Warrant"
  },
  {
    "Symbol": "KUKE",
    "Name": "Kuke Music Holding Limited American Depositary Shares each representing one Ordinary Share"
  },
  {
    "Symbol": "KULR",
    "Name": "KULR Technology Group Inc. Common Stock"
  },
  {
    "Symbol": "KURA",
    "Name": "Kura Oncology Inc. Common Stock"
  },
  {
    "Symbol": "KVHI",
    "Name": "KVH Industries Inc. Common Stock"
  },
  {
    "Symbol": "KVSA",
    "Name": "Khosla Ventures Acquisition Co. Class A Common Stock"
  },
  {
    "Symbol": "KW",
    "Name": "Kennedy-Wilson Holdings Inc. Common Stock"
  },
  {
    "Symbol": "KWE",
    "Name": "KWESST Micro Systems Inc. Common Stock"
  },
  {
    "Symbol": "KWESW",
    "Name": "KWESST Micro Systems Inc. Warrant"
  },
  {
    "Symbol": "KWR",
    "Name": "Quaker Houghton Common Stock"
  },
  {
    "Symbol": "KXIN",
    "Name": "Kaixin Auto Holdings Ordinary Shares"
  },
  {
    "Symbol": "KYCH",
    "Name": "Keyarch Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "KYCHW",
    "Name": "Keyarch Acquisition Corporation Warrant"
  },
  {
    "Symbol": "KYMR",
    "Name": "Kymera Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "KYN",
    "Name": "Kayne Anderson Energy Infrastructure Fund Inc."
  },
  {
    "Symbol": "KZIA",
    "Name": "Kazia Therapeutics Limited American Depositary Shares"
  },
  {
    "Symbol": "KZR",
    "Name": "Kezar Life Sciences Inc. Common Stock"
  },
  {
    "Symbol": "L",
    "Name": "Loews Corporation Common Stock"
  },
  {
    "Symbol": "LAB",
    "Name": "Standard BioTools Inc. Common Stock"
  },
  {
    "Symbol": "LABP",
    "Name": "Landos Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "LAC",
    "Name": "Lithium Americas Corp. Common Shares"
  },
  {
    "Symbol": "LAD",
    "Name": "Lithia Motors Inc. Common Stock"
  },
  {
    "Symbol": "LADR",
    "Name": "Ladder Capital Corp Class A Common Stock"
  },
  {
    "Symbol": "LAKE",
    "Name": "Lakeland Industries Inc. Common Stock"
  },
  {
    "Symbol": "LAMR",
    "Name": "Lamar Advertising Company Class A Common Stock"
  },
  {
    "Symbol": "LANC",
    "Name": "Lancaster Colony Corporation Common Stock"
  },
  {
    "Symbol": "LAND",
    "Name": "Gladstone Land Corporation Common Stock"
  },
  {
    "Symbol": "LANDM",
    "Name": "Gladstone Land Corporation 5.00% Series D Cumulative Term Preferred Stock"
  },
  {
    "Symbol": "LANDO",
    "Name": "Gladstone Land Corporation 6.00% Series B Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "LANV",
    "Name": "Lanvin Group Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "LARK",
    "Name": "Landmark Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "LASE",
    "Name": "Laser Photonics Corporation Common Stock"
  },
  {
    "Symbol": "LASR",
    "Name": "nLIGHT Inc. Common Stock"
  },
  {
    "Symbol": "LATG",
    "Name": "LatAmGrowth SPAC Class A Ordinary Shares"
  },
  {
    "Symbol": "LAUR",
    "Name": "Laureate Education Inc. Common Stock"
  },
  {
    "Symbol": "LAW",
    "Name": "CS Disco Inc. Common Stock"
  },
  {
    "Symbol": "LAZ",
    "Name": "Lazard LTD. Lazard LTD. Class A Common Stock"
  },
  {
    "Symbol": "LAZR",
    "Name": "Luminar Technologies Inc.  Class A Common Stock"
  },
  {
    "Symbol": "LAZY",
    "Name": "Lazydays Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LBAI",
    "Name": "Lakeland Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "LBBB",
    "Name": "Lakeshore Acquisition II Corp. Ordinary Shares"
  },
  {
    "Symbol": "LBBBU",
    "Name": "Lakeshore Acquisition II Corp. Unit"
  },
  {
    "Symbol": "LBBBW",
    "Name": "Lakeshore Acquisition II Corp. Warrants"
  },
  {
    "Symbol": "LBC",
    "Name": "Luther Burbank Corporation Common Stock"
  },
  {
    "Symbol": "LBPH",
    "Name": "Longboard Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "LBRDA",
    "Name": "Liberty Broadband Corporation Class A Common Stock"
  },
  {
    "Symbol": "LBRDK",
    "Name": "Liberty Broadband Corporation Class C Common Stock"
  },
  {
    "Symbol": "LBRDP",
    "Name": "Liberty Broadband Corporation Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "LBRT",
    "Name": "Liberty Energy Inc. Class A common stock"
  },
  {
    "Symbol": "LBTYA",
    "Name": "Liberty Global plc Class A Ordinary Shares"
  },
  {
    "Symbol": "LBTYB",
    "Name": "Liberty Global plc Class B Ordinary Shares"
  },
  {
    "Symbol": "LBTYK",
    "Name": "Liberty Global plc Class C Ordinary Shares"
  },
  {
    "Symbol": "LC",
    "Name": "LendingClub Corporation Common Stock"
  },
  {
    "Symbol": "LCA",
    "Name": "Landcadia Holdings IV Inc. Class A Common Stock"
  },
  {
    "Symbol": "LCAA",
    "Name": "L Catterton Asia Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "LCAAW",
    "Name": "L Catterton Asia Acquisition Corp Warrant"
  },
  {
    "Symbol": "LCAHW",
    "Name": "Landcadia Holdings IV Inc. Warrant"
  },
  {
    "Symbol": "LCFY",
    "Name": "Locafy Limited Ordinary Share"
  },
  {
    "Symbol": "LCFYW",
    "Name": "Locafy Limited Warrant"
  },
  {
    "Symbol": "LCID",
    "Name": "Lucid Group Inc. Common Stock"
  },
  {
    "Symbol": "LCII",
    "Name": "LCI Industries"
  },
  {
    "Symbol": "LCNB",
    "Name": "LCNB Corporation Common Stock"
  },
  {
    "Symbol": "LCTX",
    "Name": "Lineage Cell Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "LCUT",
    "Name": "Lifetime Brands Inc. Common Stock"
  },
  {
    "Symbol": "LCW",
    "Name": "Learn CW Investment Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "LDI",
    "Name": "loanDepot Inc. Class A Common Stock"
  },
  {
    "Symbol": "LDOS",
    "Name": "Leidos Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LDP",
    "Name": "Cohen & Steers Limited Duration Preferred and Income Fund Inc."
  },
  {
    "Symbol": "LE",
    "Name": "Lands' End Inc. Common Stock"
  },
  {
    "Symbol": "LEA",
    "Name": "Lear Corporation Common Stock"
  },
  {
    "Symbol": "LECO",
    "Name": "Lincoln Electric Holdings Inc. Common Shares"
  },
  {
    "Symbol": "LEDS",
    "Name": "SemiLEDS Corporation Common Stock"
  },
  {
    "Symbol": "LEE",
    "Name": "Lee Enterprises Incorporated Common Stock"
  },
  {
    "Symbol": "LEG",
    "Name": "Leggett & Platt Incorporated Common Stock"
  },
  {
    "Symbol": "LEGH",
    "Name": "Legacy Housing Corporation Common Stock (TX)"
  },
  {
    "Symbol": "LEGN",
    "Name": "Legend Biotech Corporation American Depositary Shares"
  },
  {
    "Symbol": "LEJU",
    "Name": "Leju Holdings Limited American Depositary Shares each representing one Ordinary share"
  },
  {
    "Symbol": "LEN",
    "Name": "Lennar Corporation Class A Common Stock"
  },
  {
    "Symbol": "LEO",
    "Name": "BNY Mellon Strategic Municipals Inc. Common Stock"
  },
  {
    "Symbol": "LESL",
    "Name": "Leslie's Inc. Common Stock"
  },
  {
    "Symbol": "LEU",
    "Name": "Centrus Energy Corp. Class A Common Stock"
  },
  {
    "Symbol": "LEV",
    "Name": "The Lion Electric Company Common Shares"
  },
  {
    "Symbol": "LEVI",
    "Name": "Levi Strauss & Co Class A Common Stock"
  },
  {
    "Symbol": "LEXX",
    "Name": "Lexaria Bioscience Corp. Common Stock"
  },
  {
    "Symbol": "LEXXW",
    "Name": "Lexaria Bioscience Corp. Warrant"
  },
  {
    "Symbol": "LFAC",
    "Name": "LF Capital Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "LFACW",
    "Name": "LF Capital Acquisition Corp. II Warrants"
  },
  {
    "Symbol": "LFCR",
    "Name": "Lifecore Biomedical Inc. Common Stock"
  },
  {
    "Symbol": "LFLY",
    "Name": "Leafly Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LFLYW",
    "Name": "Leafly Holdings Inc. Warrant"
  },
  {
    "Symbol": "LFMD",
    "Name": "LifeMD Inc. Common Stock"
  },
  {
    "Symbol": "LFMDP",
    "Name": "LifeMD Inc. 8.875% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "LFST",
    "Name": "LifeStance Health Group Inc. Common Stock"
  },
  {
    "Symbol": "LFT",
    "Name": "Lument Finance Trust Inc. Common Stock"
  },
  {
    "Symbol": "LFT^A",
    "Name": "Lument Finance Trust Inc. 7.875% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "LFUS",
    "Name": "Littelfuse Inc. Common Stock"
  },
  {
    "Symbol": "LFVN",
    "Name": "Lifevantage Corporation Common Stock (Delaware)"
  },
  {
    "Symbol": "LGHL",
    "Name": "Lion Group Holding Ltd. American Depositary Share"
  },
  {
    "Symbol": "LGHLW",
    "Name": "Lion Group Holding Ltd. Warrant"
  },
  {
    "Symbol": "LGI",
    "Name": "Lazard Global Total Return and Income Fund Common Stock"
  },
  {
    "Symbol": "LGIH",
    "Name": "LGI Homes Inc. Common Stock"
  },
  {
    "Symbol": "LGL",
    "Name": "LGL Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "LGMK",
    "Name": "LogicMark Inc. Common Stock"
  },
  {
    "Symbol": "LGND",
    "Name": "Ligand Pharmaceuticals Incorporated Common Stock"
  },
  {
    "Symbol": "LGO",
    "Name": "Largo Inc. Common Shares"
  },
  {
    "Symbol": "LGST",
    "Name": "Semper Paratus Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "LGVC",
    "Name": "LAMF Global Ventures Corp. I Class A Ordinary Shares"
  },
  {
    "Symbol": "LGVCU",
    "Name": "LAMF Global Ventures Corp. I Unit"
  },
  {
    "Symbol": "LGVCW",
    "Name": "LAMF Global Ventures Corp. I Warrant"
  },
  {
    "Symbol": "LGVN",
    "Name": "Longeveron Inc. Class A Common Stock"
  },
  {
    "Symbol": "LH",
    "Name": "Laboratory Corporation of America Holdings Common Stock"
  },
  {
    "Symbol": "LHC",
    "Name": "Leo Holdings Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "LHX",
    "Name": "L3Harris Technologies Inc. Common Stock"
  },
  {
    "Symbol": "LI",
    "Name": "Li Auto Inc. American Depositary Shares"
  },
  {
    "Symbol": "LIAN",
    "Name": "LianBio American Depositary Shares"
  },
  {
    "Symbol": "LIBY",
    "Name": "Liberty Resources Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "LIBYU",
    "Name": "Liberty Resources Acquisition Corp. Unit"
  },
  {
    "Symbol": "LIBYW",
    "Name": "Liberty Resources Acquisition Corp. Warrant"
  },
  {
    "Symbol": "LICN",
    "Name": "Lichen China Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "LICY",
    "Name": "Li-Cycle Holdings Corp. Common Shares"
  },
  {
    "Symbol": "LIDR",
    "Name": "AEye Inc. Class A Common Stock"
  },
  {
    "Symbol": "LIDRW",
    "Name": "AEye Inc. Warrant"
  },
  {
    "Symbol": "LIFE",
    "Name": "aTyr Pharma Inc. Common Stock"
  },
  {
    "Symbol": "LIFW",
    "Name": "MSP Recovery Inc. Class A Common Stock"
  },
  {
    "Symbol": "LIFWW",
    "Name": "MSP Recovery Inc. Warrant"
  },
  {
    "Symbol": "LIFWZ",
    "Name": "MSP Recovery Inc. Warrant"
  },
  {
    "Symbol": "LII",
    "Name": "Lennox International Inc. Common Stock"
  },
  {
    "Symbol": "LILA",
    "Name": "Liberty Latin America Ltd. Class A Common Stock"
  },
  {
    "Symbol": "LILAK",
    "Name": "Liberty Latin America Ltd. Class C Common Stock"
  },
  {
    "Symbol": "LILM",
    "Name": "Lilium N.V. Class A Ordinary Shares"
  },
  {
    "Symbol": "LILMW",
    "Name": "Lilium N.V. Warrants"
  },
  {
    "Symbol": "LIN",
    "Name": "Linde plc Ordinary Shares"
  },
  {
    "Symbol": "LINC",
    "Name": "Lincoln Educational Services Corporation Common Stock"
  },
  {
    "Symbol": "LIND",
    "Name": "Lindblad Expeditions Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LINK",
    "Name": "Interlink Electronics Inc. Common Stock"
  },
  {
    "Symbol": "LIPO",
    "Name": "Lipella Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "LIQT",
    "Name": "LiqTech International Inc. Common Stock"
  },
  {
    "Symbol": "LITB",
    "Name": "LightInTheBox Holding Co. Ltd. American Depositary Shares each representing 2 ordinary shares"
  },
  {
    "Symbol": "LITE",
    "Name": "Lumentum Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LITM",
    "Name": "Snow Lake Resources Ltd. Common Shares"
  },
  {
    "Symbol": "LITT",
    "Name": "Logistics Innovation Technologies Corp. Class A Common Stock"
  },
  {
    "Symbol": "LITTU",
    "Name": "Logistics Innovation Technologies Corp. Units"
  },
  {
    "Symbol": "LITTW",
    "Name": "Logistics Innovation Technologies Corp. Warrant"
  },
  {
    "Symbol": "LIVB",
    "Name": "LIV Capital Acquisition Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "LIVBW",
    "Name": "LIV Capital Acquisition Corp. II Warrants"
  },
  {
    "Symbol": "LIVE",
    "Name": "Live Ventures Incorporated Common Stock"
  },
  {
    "Symbol": "LIVN",
    "Name": "LivaNova PLC Ordinary Shares"
  },
  {
    "Symbol": "LIXT",
    "Name": "Lixte Biotechnology Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LIXTW",
    "Name": "Lixte Biotechnology Holdings Inc. Warrants"
  },
  {
    "Symbol": "LIZI",
    "Name": "LIZHI INC. American Depositary Shares"
  },
  {
    "Symbol": "LKCO",
    "Name": "Luokung Technology Corp Ordinary Shares"
  },
  {
    "Symbol": "LKFN",
    "Name": "Lakeland Financial Corporation Common Stock"
  },
  {
    "Symbol": "LKQ",
    "Name": "LKQ Corporation Common Stock"
  },
  {
    "Symbol": "LL",
    "Name": "LL Flooring Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LLAP",
    "Name": "Terran Orbital Corporation Common Stock"
  },
  {
    "Symbol": "LLY",
    "Name": "Eli Lilly and Company Common Stock"
  },
  {
    "Symbol": "LMAT",
    "Name": "LeMaitre Vascular Inc. Common Stock"
  },
  {
    "Symbol": "LMB",
    "Name": "Limbach Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LMDX",
    "Name": "LumiraDx Limited Common Shares"
  },
  {
    "Symbol": "LMDXW",
    "Name": "LumiraDx Limited Warrant"
  },
  {
    "Symbol": "LMFA",
    "Name": "LM Funding America Inc. Common Stock"
  },
  {
    "Symbol": "LMND",
    "Name": "Lemonade Inc. Common Stock"
  },
  {
    "Symbol": "LMNL",
    "Name": "Liminal BioSciences Inc. Common Shares"
  },
  {
    "Symbol": "LMNR",
    "Name": "Limoneira Co Common Stock"
  },
  {
    "Symbol": "LMT",
    "Name": "Lockheed Martin Corporation Common Stock"
  },
  {
    "Symbol": "LNC",
    "Name": "Lincoln National Corporation Common Stock"
  },
  {
    "Symbol": "LNC^D",
    "Name": "Lincoln National Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of 9.000% Non-Cumulative Preferred Stock Series D"
  },
  {
    "Symbol": "LND",
    "Name": "Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)"
  },
  {
    "Symbol": "LNG",
    "Name": "Cheniere Energy Inc. Common Stock"
  },
  {
    "Symbol": "LNKB",
    "Name": "LINKBANCORP Inc. Common Stock"
  },
  {
    "Symbol": "LNN",
    "Name": "Lindsay Corporation Common Stock"
  },
  {
    "Symbol": "LNSR",
    "Name": "LENSAR Inc. Common Stock"
  },
  {
    "Symbol": "LNT",
    "Name": "Alliant Energy Corporation Common Stock"
  },
  {
    "Symbol": "LNTH",
    "Name": "Lantheus Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LNW",
    "Name": "Light & Wonder Inc. Common Stock"
  },
  {
    "Symbol": "LNZA",
    "Name": "LanzaTech Global Inc. Common Stock"
  },
  {
    "Symbol": "LNZAW",
    "Name": "LanzaTech Global Inc. Warrant"
  },
  {
    "Symbol": "LOAN",
    "Name": "Manhattan Bridge Capital Inc"
  },
  {
    "Symbol": "LOB",
    "Name": "Live Oak Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "LOCC",
    "Name": "Live Oak Crestview Climate Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "LOCL",
    "Name": "Local Bounti Corporation Common Stock"
  },
  {
    "Symbol": "LOCO",
    "Name": "El Pollo Loco Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LODE",
    "Name": "Comstock Inc. Common Stock"
  },
  {
    "Symbol": "LOGI",
    "Name": "Logitech International S.A. Ordinary Shares"
  },
  {
    "Symbol": "LOMA",
    "Name": "Loma Negra Compania Industrial Argentina Sociedad Anonima ADS"
  },
  {
    "Symbol": "LOOP",
    "Name": "Loop Industries Inc. Common Stock"
  },
  {
    "Symbol": "LOPE",
    "Name": "Grand Canyon Education Inc. Common Stock"
  },
  {
    "Symbol": "LOV",
    "Name": "Spark Networks SE American Depositary Shares"
  },
  {
    "Symbol": "LOVE",
    "Name": "The Lovesac Company Common Stock"
  },
  {
    "Symbol": "LOW",
    "Name": "Lowe's Companies Inc. Common Stock"
  },
  {
    "Symbol": "LPCN",
    "Name": "Lipocine Inc. Common Stock"
  },
  {
    "Symbol": "LPG",
    "Name": "Dorian LPG Ltd. Common Stock"
  },
  {
    "Symbol": "LPL",
    "Name": "LG Display Co Ltd AMERICAN DEPOSITORY SHARES"
  },
  {
    "Symbol": "LPLA",
    "Name": "LPL Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LPRO",
    "Name": "Open Lending Corporation Class A Common Stock"
  },
  {
    "Symbol": "LPSN",
    "Name": "LivePerson Inc. Common Stock"
  },
  {
    "Symbol": "LPTH",
    "Name": "LightPath Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "LPTV",
    "Name": "Loop Media Inc. Common Stock"
  },
  {
    "Symbol": "LPTX",
    "Name": "Leap Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "LPX",
    "Name": "Louisiana-Pacific Corporation Common Stock"
  },
  {
    "Symbol": "LQDA",
    "Name": "Liquidia Corporation Common Stock"
  },
  {
    "Symbol": "LQDT",
    "Name": "Liquidity Services Inc. Common Stock"
  },
  {
    "Symbol": "LRCX",
    "Name": "Lam Research Corporation Common Stock"
  },
  {
    "Symbol": "LRFC",
    "Name": "Logan Ridge Finance Corporation Common Stock"
  },
  {
    "Symbol": "LRMR",
    "Name": "Larimar Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "LRN",
    "Name": "Stride Inc. Common Stock"
  },
  {
    "Symbol": "LSAK",
    "Name": "Lesaka Technologies Inc. Common Stock"
  },
  {
    "Symbol": "LSBK",
    "Name": "Lake Shore Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "LSCC",
    "Name": "Lattice Semiconductor Corporation Common Stock"
  },
  {
    "Symbol": "LSDI",
    "Name": "Lucy Scientific Discovery Inc. Common Stock"
  },
  {
    "Symbol": "LSEA",
    "Name": "Landsea Homes Corporation Common Stock"
  },
  {
    "Symbol": "LSEAW",
    "Name": "Landsea Homes Corporation Warrant"
  },
  {
    "Symbol": "LSF",
    "Name": "Laird Superfood Inc. Common Stock"
  },
  {
    "Symbol": "LSI",
    "Name": "Life Storage Inc. Common Stock"
  },
  {
    "Symbol": "LSPD",
    "Name": "Lightspeed Commerce Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "LSTA",
    "Name": "Lisata Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "LSTR",
    "Name": "Landstar System Inc. Common Stock"
  },
  {
    "Symbol": "LSXMA",
    "Name": "Liberty Media Corporation Series A Liberty SiriusXM Common Stock"
  },
  {
    "Symbol": "LSXMB",
    "Name": "Liberty Media Corporation Series B Liberty SiriusXM Common Stock"
  },
  {
    "Symbol": "LSXMK",
    "Name": "Liberty Media Corporation Series C Liberty SiriusXM Common Stock"
  },
  {
    "Symbol": "LTBR",
    "Name": "Lightbridge Corporation Common Stock"
  },
  {
    "Symbol": "LTC",
    "Name": "LTC Properties Inc. Common Stock"
  },
  {
    "Symbol": "LTCH",
    "Name": "Latch Inc. Common Stock"
  },
  {
    "Symbol": "LTCHW",
    "Name": "Latch Inc. Warrant expiring 6/4/2026"
  },
  {
    "Symbol": "LTH",
    "Name": "Life Time Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LTHM",
    "Name": "Livent Corporation Common Stock"
  },
  {
    "Symbol": "LTRN",
    "Name": "Lantern Pharma Inc. Common Stock"
  },
  {
    "Symbol": "LTRPA",
    "Name": "Liberty TripAdvisor Holdings Inc. Series A Common Stock"
  },
  {
    "Symbol": "LTRPB",
    "Name": "Liberty TripAdvisor Holdings Inc. Series B Common Stock"
  },
  {
    "Symbol": "LTRX",
    "Name": "Lantronix Inc. Common Stock"
  },
  {
    "Symbol": "LTRY",
    "Name": "Lottery.com Inc. Common Stock"
  },
  {
    "Symbol": "LTRYW",
    "Name": "Lottery.com Inc. Warrants"
  },
  {
    "Symbol": "LU",
    "Name": "Lufax Holding Ltd American Depositary Shares two of which representing one Ordinary Share"
  },
  {
    "Symbol": "LUCD",
    "Name": "Lucid Diagnostics Inc. Common Stock"
  },
  {
    "Symbol": "LUCY",
    "Name": "Innovative Eyewear Inc. Common Stock"
  },
  {
    "Symbol": "LUCYW",
    "Name": "Innovative Eyewear Inc. Series A Warrants"
  },
  {
    "Symbol": "LULU",
    "Name": "lululemon athletica inc. Common Stock"
  },
  {
    "Symbol": "LUMN",
    "Name": "Lumen Technologies Inc. Common Stock"
  },
  {
    "Symbol": "LUMO",
    "Name": "Lumos Pharma Inc. Common Stock"
  },
  {
    "Symbol": "LUNA",
    "Name": "Luna Innovations Incorporated Common Stock"
  },
  {
    "Symbol": "LUNG",
    "Name": "Pulmonx Corporation Common Stock"
  },
  {
    "Symbol": "LUNR",
    "Name": "Intuitive Machines Inc. Class A Common Stock"
  },
  {
    "Symbol": "LUNRW",
    "Name": "Intuitive Machines Inc. Warrants"
  },
  {
    "Symbol": "LUV",
    "Name": "Southwest Airlines Company Common Stock"
  },
  {
    "Symbol": "LUXH",
    "Name": "LuxUrban Hotels Inc. Common Stock"
  },
  {
    "Symbol": "LVAC",
    "Name": "LAVA Medtech Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "LVACW",
    "Name": "LAVA Medtech Acquisition Corp. Warrants"
  },
  {
    "Symbol": "LVLU",
    "Name": "Lulu's Fashion Lounge Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LVO",
    "Name": "LiveOne Inc. Common Stock"
  },
  {
    "Symbol": "LVOX",
    "Name": "LiveVox Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "LVOXU",
    "Name": "LiveVox Holdings Inc. Unit"
  },
  {
    "Symbol": "LVOXW",
    "Name": "LiveVox Holdings Inc. Warrant"
  },
  {
    "Symbol": "LVRO",
    "Name": "Lavoro Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "LVROW",
    "Name": "Lavoro Limited Warrant"
  },
  {
    "Symbol": "LVS",
    "Name": "Las Vegas Sands Corp. Common Stock"
  },
  {
    "Symbol": "LVTX",
    "Name": "LAVA Therapeutics N.V. Ordinary Shares"
  },
  {
    "Symbol": "LVWR",
    "Name": "LiveWire Group Inc. Common Stock"
  },
  {
    "Symbol": "LW",
    "Name": "Lamb Weston Holdings Inc. Common Stock"
  },
  {
    "Symbol": "LWAY",
    "Name": "Lifeway Foods Inc. Common Stock"
  },
  {
    "Symbol": "LWLG",
    "Name": "Lightwave Logic Inc. Common Stock"
  },
  {
    "Symbol": "LX",
    "Name": "LexinFintech Holdings Ltd. American Depositary Shares"
  },
  {
    "Symbol": "LXEH",
    "Name": "Lixiang Education Holding Co. Ltd. American Depositary Shares"
  },
  {
    "Symbol": "LXFR",
    "Name": "Luxfer Holdings PLC Ordinary Shares"
  },
  {
    "Symbol": "LXP",
    "Name": "LXP Industrial Trust Common Stock (Maryland REIT)"
  },
  {
    "Symbol": "LXP^C",
    "Name": "LXP Industrial Trust 6.5% Series C Cumulative Convertible Preferred Stock"
  },
  {
    "Symbol": "LXRX",
    "Name": "Lexicon Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "LXU",
    "Name": "LSB Industries Inc. Common Stock"
  },
  {
    "Symbol": "LYB",
    "Name": "LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)"
  },
  {
    "Symbol": "LYEL",
    "Name": "Lyell Immunopharma Inc. Common Stock"
  },
  {
    "Symbol": "LYFT",
    "Name": "Lyft Inc. Class A Common Stock"
  },
  {
    "Symbol": "LYG",
    "Name": "Lloyds Banking Group Plc American Depositary Shares"
  },
  {
    "Symbol": "LYRA",
    "Name": "Lyra Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "LYT",
    "Name": "Lytus Technologies Holdings PTV. Ltd. Common Shares"
  },
  {
    "Symbol": "LYTS",
    "Name": "LSI Industries Inc. Common Stock"
  },
  {
    "Symbol": "LYV",
    "Name": "Live Nation Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "LZ",
    "Name": "LegalZoom.com Inc. Common Stock"
  },
  {
    "Symbol": "LZB",
    "Name": "La-Z-Boy Incorporated Common Stock"
  },
  {
    "Symbol": "M",
    "Name": "Macy's Inc Common Stock"
  },
  {
    "Symbol": "MA",
    "Name": "Mastercard Incorporated Common Stock"
  },
  {
    "Symbol": "MAA",
    "Name": "Mid-America Apartment Communities Inc. Common Stock"
  },
  {
    "Symbol": "MAA^I",
    "Name": "Mid-America Apartment Communities Inc. 8.50% Series I Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "MAC",
    "Name": "Macerich Company (The) Common Stock"
  },
  {
    "Symbol": "MACA",
    "Name": "Moringa Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "MACK",
    "Name": "Merrimack Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MAG",
    "Name": "MAG Silver Corporation Ordinary Shares"
  },
  {
    "Symbol": "MAIA",
    "Name": "MAIA Biotechnology Inc. Common Stock"
  },
  {
    "Symbol": "MAIN",
    "Name": "Main Street Capital Corporation Common Stock"
  },
  {
    "Symbol": "MAN",
    "Name": "ManpowerGroup Common Stock"
  },
  {
    "Symbol": "MANH",
    "Name": "Manhattan Associates Inc. Common Stock"
  },
  {
    "Symbol": "MANU",
    "Name": "Manchester United Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "MAPS",
    "Name": "WM Technology Inc. Class A Common Stock"
  },
  {
    "Symbol": "MAPSW",
    "Name": "WM Technology Inc. Warrants"
  },
  {
    "Symbol": "MAQC",
    "Name": "Maquia Capital Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "MAQCU",
    "Name": "Maquia Capital Acquisition Corporation Unit"
  },
  {
    "Symbol": "MAQCW",
    "Name": "Maquia Capital Acquisition Corporation Warrant"
  },
  {
    "Symbol": "MAR",
    "Name": "Marriott International Class A Common Stock"
  },
  {
    "Symbol": "MARA",
    "Name": "Marathon Digital Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MARK",
    "Name": "Remark Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MARPS",
    "Name": "Marine Petroleum Trust Units of Beneficial Interest"
  },
  {
    "Symbol": "MARX",
    "Name": "Mars Acquisition Corp. Ordinary Shares"
  },
  {
    "Symbol": "MAS",
    "Name": "Masco Corporation Common Stock"
  },
  {
    "Symbol": "MASI",
    "Name": "Masimo Corporation Common Stock"
  },
  {
    "Symbol": "MASS",
    "Name": "908 Devices Inc. Common Stock"
  },
  {
    "Symbol": "MAT",
    "Name": "Mattel Inc. Common Stock"
  },
  {
    "Symbol": "MATH",
    "Name": "Metalpha Technology Holding Limited Ordinary Shares"
  },
  {
    "Symbol": "MATV",
    "Name": "Mativ Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MATW",
    "Name": "Matthews International Corporation Class A Common Stock"
  },
  {
    "Symbol": "MATX",
    "Name": "Matson Inc. Common Stock"
  },
  {
    "Symbol": "MAV",
    "Name": "Pioneer Municipal High Income Advantage Fund Inc."
  },
  {
    "Symbol": "MAX",
    "Name": "MediaAlpha Inc. Class A Common Stock"
  },
  {
    "Symbol": "MAXN",
    "Name": "Maxeon Solar Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MAXR",
    "Name": "Maxar Technologies Inc."
  },
  {
    "Symbol": "MAYS",
    "Name": "J. W. Mays Inc. Common Stock"
  },
  {
    "Symbol": "MBAC",
    "Name": "M3-Brigade Acquisition II Corp. Class A Common Stock"
  },
  {
    "Symbol": "MBC",
    "Name": "MasterBrand Inc. Common Stock"
  },
  {
    "Symbol": "MBCN",
    "Name": "Middlefield Banc Corp. Common Stock"
  },
  {
    "Symbol": "MBI",
    "Name": "MBIA Inc. Common Stock"
  },
  {
    "Symbol": "MBIN",
    "Name": "Merchants Bancorp Common Stock"
  },
  {
    "Symbol": "MBINM",
    "Name": "Merchants Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of 8.25% Fixed-Rate Reset Series D Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "MBINN",
    "Name": "Merchants Bancorp Depositary Shares Preferred Series C"
  },
  {
    "Symbol": "MBINO",
    "Name": "Merchants Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of Series B  Fixed-to-Floating Rate"
  },
  {
    "Symbol": "MBINP",
    "Name": "Merchants Bancorp 7.00% Fixed-to-Floating Rate Series A Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "MBIO",
    "Name": "Mustang Bio Inc. Common Stock"
  },
  {
    "Symbol": "MBLY",
    "Name": "Mobileye Global Inc. Class A Common Stock"
  },
  {
    "Symbol": "MBNKP",
    "Name": "Medallion Bank Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F"
  },
  {
    "Symbol": "MBOT",
    "Name": "Microbot Medical Inc. Common Stock"
  },
  {
    "Symbol": "MBRX",
    "Name": "Moleculin Biotech Inc. Common Stock"
  },
  {
    "Symbol": "MBSC",
    "Name": "M3-Brigade Acquisition III Corp. Class A Common Stock"
  },
  {
    "Symbol": "MBTC",
    "Name": "Nocturne Acquisition Corporation Ordinary Shares"
  },
  {
    "Symbol": "MBUU",
    "Name": "Malibu Boats Inc. Class A Common Stock"
  },
  {
    "Symbol": "MBWM",
    "Name": "Mercantile Bank Corporation Common Stock"
  },
  {
    "Symbol": "MC",
    "Name": "Moelis & Company Class A Common Stock"
  },
  {
    "Symbol": "MCAA",
    "Name": "Mountain & Co. I Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "MCAAW",
    "Name": "Mountain & Co. I Acquisition Corp. Warrant"
  },
  {
    "Symbol": "MCAC",
    "Name": "Monterey Capital Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "MCACR",
    "Name": "Monterey Capital Acquisition Corporation Rights"
  },
  {
    "Symbol": "MCAF",
    "Name": "Mountain Crest Acquisition Corp. IV Common Stock"
  },
  {
    "Symbol": "MCAFR",
    "Name": "Mountain Crest Acquisition Corp. IV Rights"
  },
  {
    "Symbol": "MCAG",
    "Name": "Mountain Crest Acquisition Corp. V Common Stock"
  },
  {
    "Symbol": "MCAGR",
    "Name": "Mountain Crest Acquisition Corp. V Right"
  },
  {
    "Symbol": "MCB",
    "Name": "Metropolitan Bank Holding Corp. Common Stock"
  },
  {
    "Symbol": "MCBC",
    "Name": "Macatawa Bank Corporation Common Stock"
  },
  {
    "Symbol": "MCBS",
    "Name": "MetroCity Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "MCD",
    "Name": "McDonald's Corporation Common Stock"
  },
  {
    "Symbol": "MCFT",
    "Name": "MasterCraft Boat Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MCHP",
    "Name": "Microchip Technology Incorporated Common Stock"
  },
  {
    "Symbol": "MCHX",
    "Name": "Marchex Inc. Class B Common Stock"
  },
  {
    "Symbol": "MCI",
    "Name": "Barings Corporate Investors Common Stock"
  },
  {
    "Symbol": "MCK",
    "Name": "McKesson Corporation Common Stock"
  },
  {
    "Symbol": "MCLD",
    "Name": "mCloud Technologies Corp. Common Shares"
  },
  {
    "Symbol": "MCLDW",
    "Name": "mCloud Technologies Corp. Warrants"
  },
  {
    "Symbol": "MCN",
    "Name": "Madison Covered Call & Equity Strategy Fund Common Stock"
  },
  {
    "Symbol": "MCO",
    "Name": "Moody's Corporation Common Stock"
  },
  {
    "Symbol": "MCOM",
    "Name": "micromobility.com Inc. Class A Common stock"
  },
  {
    "Symbol": "MCOMW",
    "Name": "micromobility.com Inc. Warrant"
  },
  {
    "Symbol": "MCR",
    "Name": "MFS Charter Income Trust Common Stock"
  },
  {
    "Symbol": "MCRB",
    "Name": "Seres Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MCRI",
    "Name": "Monarch Casino & Resort Inc. Common Stock"
  },
  {
    "Symbol": "MCS",
    "Name": "Marcus Corporation (The) Common Stock"
  },
  {
    "Symbol": "MCVT",
    "Name": "Mill City Ventures III Ltd. Common Stock"
  },
  {
    "Symbol": "MCW",
    "Name": "Mister Car Wash Inc. Common Stock"
  },
  {
    "Symbol": "MCY",
    "Name": "Mercury General Corporation Common Stock"
  },
  {
    "Symbol": "MD",
    "Name": "Pediatrix Medical Group Inc. Common Stock"
  },
  {
    "Symbol": "MDB",
    "Name": "MongoDB Inc. Class A Common Stock"
  },
  {
    "Symbol": "MDC",
    "Name": "M.D.C. Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MDGL",
    "Name": "Madrigal Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MDGS",
    "Name": "Medigus Ltd. American Depositary Shares"
  },
  {
    "Symbol": "MDGSW",
    "Name": "Medigus Ltd. Series C Warrant"
  },
  {
    "Symbol": "MDIA",
    "Name": "Mediaco Holding Inc. Class A Common Stock"
  },
  {
    "Symbol": "MDJH",
    "Name": "MDJM LTD Ordinary Share"
  },
  {
    "Symbol": "MDLZ",
    "Name": "Mondelez International Inc. Class A Common Stock"
  },
  {
    "Symbol": "MDNA",
    "Name": "Medicenna Therapeutics Corp. Common Shares"
  },
  {
    "Symbol": "MDRR",
    "Name": "Medalist Diversified REIT Inc. Common Stock"
  },
  {
    "Symbol": "MDRRP",
    "Name": "Medalist Diversified REIT Inc. Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "MDRX",
    "Name": "Veradigm Inc. Common Stock"
  },
  {
    "Symbol": "MDT",
    "Name": "Medtronic plc. Ordinary Shares"
  },
  {
    "Symbol": "MDU",
    "Name": "MDU Resources Group Inc. Common Stock (Holding Company)"
  },
  {
    "Symbol": "MDV",
    "Name": "Modiv Inc. Class C Common Stock"
  },
  {
    "Symbol": "MDV^A",
    "Name": "Modiv Inc. 7.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "MDVL",
    "Name": "MedAvail Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MDWD",
    "Name": "MediWound Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MDWT",
    "Name": "Midwest Holding Inc. Common Stock"
  },
  {
    "Symbol": "MDXG",
    "Name": "MiMedx Group Inc Common Stock"
  },
  {
    "Symbol": "MDXH",
    "Name": "MDxHealth SA American Depositary Shares"
  },
  {
    "Symbol": "ME",
    "Name": "23andMe Holding Co. Class A Common Stock"
  },
  {
    "Symbol": "MEC",
    "Name": "Mayville Engineering Company Inc. Common Stock"
  },
  {
    "Symbol": "MED",
    "Name": "MEDIFAST INC Common Stock"
  },
  {
    "Symbol": "MEDP",
    "Name": "Medpace Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MEDS",
    "Name": "TRxADE HEALTH Inc. Common Stock"
  },
  {
    "Symbol": "MEG",
    "Name": "Montrose Environmental Group Inc. Common Stock"
  },
  {
    "Symbol": "MEGI",
    "Name": "MainStay CBRE Global Infrastructure Megatrends Fund Common Shares"
  },
  {
    "Symbol": "MEGL",
    "Name": "Magic Empire Global Limited Ordinary Shares"
  },
  {
    "Symbol": "MEI",
    "Name": "Methode Electronics Inc. Common Stock"
  },
  {
    "Symbol": "MEIP",
    "Name": "MEI Pharma Inc. Common Stock"
  },
  {
    "Symbol": "MEKA",
    "Name": "MELI Kaszek Pioneer Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "MELI",
    "Name": "MercadoLibre Inc. Common Stock"
  },
  {
    "Symbol": "MEOA",
    "Name": "Minority Equality Opportunities Acquisition Inc. Class A Common Stock"
  },
  {
    "Symbol": "MEOAW",
    "Name": "Minority Equality Opportunities Acquisition Inc. Warrants"
  },
  {
    "Symbol": "MEOH",
    "Name": "Methanex Corporation Common Stock"
  },
  {
    "Symbol": "MER^K",
    "Name": "Bank of America Corporation Income Capital Obligation Notes initially due December 15 2066"
  },
  {
    "Symbol": "MERC",
    "Name": "Mercer International Inc. Common Stock"
  },
  {
    "Symbol": "MESA",
    "Name": "Mesa Air Group Inc. Common Stock"
  },
  {
    "Symbol": "MESO",
    "Name": "Mesoblast Limited American Depositary Shares"
  },
  {
    "Symbol": "MET",
    "Name": "MetLife Inc. Common Stock"
  },
  {
    "Symbol": "MET^A",
    "Name": "MetLife Inc. Preferred Series A Floating Rate"
  },
  {
    "Symbol": "MET^E",
    "Name": "MetLife Inc. Depositary shares each representing a 1/1000th interest in a share of the Issuera??s 5.625% Non-Cumulative Preferred Stock Series E."
  },
  {
    "Symbol": "MET^F",
    "Name": "MetLife Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.75% Non-Cumulative Preferred Stock Series F"
  },
  {
    "Symbol": "META",
    "Name": "Meta Platforms Inc. Class A Common Stock"
  },
  {
    "Symbol": "METC",
    "Name": "Ramaco Resources Inc. Common Stock"
  },
  {
    "Symbol": "METCL",
    "Name": "Ramaco Resources Inc. 9.00% Senior Notes due 2026"
  },
  {
    "Symbol": "METX",
    "Name": "Meten Holding Group Ltd. Ordinary Shares"
  },
  {
    "Symbol": "METXW",
    "Name": "Meten Holding Group Ltd. Warrant"
  },
  {
    "Symbol": "MF",
    "Name": "Missfresh Limited American Depositary Shares"
  },
  {
    "Symbol": "MFA",
    "Name": "MFA Financial Inc."
  },
  {
    "Symbol": "MFA^B",
    "Name": "MFA Financial Inc. Preferred Series B"
  },
  {
    "Symbol": "MFA^C",
    "Name": "MFA Financial Inc. 6.50% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "MFC",
    "Name": "Manulife Financial Corporation Common Stock"
  },
  {
    "Symbol": "MFD",
    "Name": "Macquarie First Trust Global Common Stock"
  },
  {
    "Symbol": "MFG",
    "Name": "Mizuho Financial Group Inc. Sponosred ADR (Japan)"
  },
  {
    "Symbol": "MFH",
    "Name": "Mercurity Fintech Holding Inc. Ordinary Shares"
  },
  {
    "Symbol": "MFIC",
    "Name": "MidCap Financial Investment Corporation Common Stock"
  },
  {
    "Symbol": "MFIN",
    "Name": "Medallion Financial Corp. Common Stock"
  },
  {
    "Symbol": "MFM",
    "Name": "MFS Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "MFV",
    "Name": "MFS Special Value Trust Common Stock"
  },
  {
    "Symbol": "MG",
    "Name": "Mistras Group Inc Common Stock"
  },
  {
    "Symbol": "MGA",
    "Name": "Magna International Inc. Common Stock"
  },
  {
    "Symbol": "MGAM",
    "Name": "Mobile Global Esports Inc. Common Stock"
  },
  {
    "Symbol": "MGEE",
    "Name": "MGE Energy Inc"
  },
  {
    "Symbol": "MGF",
    "Name": "MFS Government Markets Income Trust Common Stock"
  },
  {
    "Symbol": "MGI",
    "Name": "Moneygram International Inc. Common Stock"
  },
  {
    "Symbol": "MGIC",
    "Name": "Magic Software Enterprises Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MGIH",
    "Name": "Millennium Group International Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "MGLD",
    "Name": "The Marygold Companies Inc. Common Stock"
  },
  {
    "Symbol": "MGM",
    "Name": "MGM Resorts International Common Stock"
  },
  {
    "Symbol": "MGNI",
    "Name": "Magnite Inc. Common Stock"
  },
  {
    "Symbol": "MGNX",
    "Name": "MacroGenics Inc. Common Stock"
  },
  {
    "Symbol": "MGOL",
    "Name": "MGO Global Inc. Common Stock"
  },
  {
    "Symbol": "MGPI",
    "Name": "MGP Ingredients Inc."
  },
  {
    "Symbol": "MGR",
    "Name": "Affiliated Managers Group Inc. 5.875% Junior Subordinated Notes due 2059"
  },
  {
    "Symbol": "MGRB",
    "Name": "Affiliated Managers Group Inc. 4.750% Junior Subordinated Notes due 2060"
  },
  {
    "Symbol": "MGRC",
    "Name": "McGrath RentCorp Common Stock"
  },
  {
    "Symbol": "MGRD",
    "Name": "Affiliated Managers Group Inc. 4.200% Junior Subordinated Notes due 2061"
  },
  {
    "Symbol": "MGRX",
    "Name": "Mangoceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MGTA",
    "Name": "Magenta Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MGTX",
    "Name": "MeiraGTx Holdings plc Ordinary Shares"
  },
  {
    "Symbol": "MGY",
    "Name": "Magnolia Oil & Gas Corporation Class A Common Stock"
  },
  {
    "Symbol": "MGYR",
    "Name": "Magyar Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "MHD",
    "Name": "Blackrock MuniHoldings Fund Inc. Common Stock"
  },
  {
    "Symbol": "MHF",
    "Name": "Western Asset Municipal High Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "MHH",
    "Name": "Mastech Digital Inc Common Stock"
  },
  {
    "Symbol": "MHI",
    "Name": "Pioneer Municipal High Income Fund Inc."
  },
  {
    "Symbol": "MHK",
    "Name": "Mohawk Industries Inc. Common Stock"
  },
  {
    "Symbol": "MHLA",
    "Name": "Maiden Holdings Ltd. 6.625% Notes due 2046"
  },
  {
    "Symbol": "MHLD",
    "Name": "Maiden Holdings Ltd."
  },
  {
    "Symbol": "MHN",
    "Name": "Blackrock MuniHoldings New York Quality Fund Inc. Common Stock"
  },
  {
    "Symbol": "MHNC",
    "Name": "Maiden Holdings North America Ltd. 7.75% Notes due 2043"
  },
  {
    "Symbol": "MHO",
    "Name": "M/I Homes Inc. Common Stock"
  },
  {
    "Symbol": "MHUA",
    "Name": "Meihua International Medical Technologies Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MICS",
    "Name": "The Singing Machine Company Inc. Common Stock"
  },
  {
    "Symbol": "MIDD",
    "Name": "Middleby Corporation (The) Common Stock"
  },
  {
    "Symbol": "MIGI",
    "Name": "Mawson Infrastructure Group Inc. Common Stock"
  },
  {
    "Symbol": "MIMO",
    "Name": "Airspan Networks Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MIN",
    "Name": "MFS Intermediate Income Trust Common Stock"
  },
  {
    "Symbol": "MIND",
    "Name": "MIND Technology Inc. Common Stock (DE)"
  },
  {
    "Symbol": "MINDP",
    "Name": "MIND Technology Inc. Series A 9.00% Series A Cumulative Preferred Stock (DE)"
  },
  {
    "Symbol": "MINM",
    "Name": "Minim Inc. Common Stock"
  },
  {
    "Symbol": "MIO",
    "Name": "Pioneer Municipal High Income Opportunities Fund Inc. Common Stock"
  },
  {
    "Symbol": "MIR",
    "Name": "Mirion Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "MIRM",
    "Name": "Mirum Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MIRO",
    "Name": "Miromatrix Medical Inc. Common Stock"
  },
  {
    "Symbol": "MIST",
    "Name": "Milestone Pharmaceuticals Inc. Common Shares"
  },
  {
    "Symbol": "MITA",
    "Name": "Coliseum Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "MITAU",
    "Name": "Coliseum Acquisition Corp. Unit"
  },
  {
    "Symbol": "MITK",
    "Name": "Mitek Systems Inc. Common Stock"
  },
  {
    "Symbol": "MITQ",
    "Name": "Moving iMage Technologies Inc. Common Stock"
  },
  {
    "Symbol": "MITT",
    "Name": "AG Mortgage Investment Trust Inc. Common Stock"
  },
  {
    "Symbol": "MITT^A",
    "Name": "AG Mortgage Investment Trust Inc. 8.25% Preferred Series A"
  },
  {
    "Symbol": "MITT^B",
    "Name": "AG Mortgage Investment Trust Inc. Preferred Series B"
  },
  {
    "Symbol": "MITT^C",
    "Name": "AG Mortgage Investment Trust Inc. 8.00% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "MIXT",
    "Name": "MiX Telematics Limited American Depositary Shares each representing 25 Ordinary Shares"
  },
  {
    "Symbol": "MIY",
    "Name": "Blackrock MuniYield Michigan Quality Fund Inc. Common Stock"
  },
  {
    "Symbol": "MKC",
    "Name": "McCormick & Company Incorporated Common Stock"
  },
  {
    "Symbol": "MKFG",
    "Name": "Markforged Holding Corporation Common Stock"
  },
  {
    "Symbol": "MKL",
    "Name": "Markel Corporation Common Stock"
  },
  {
    "Symbol": "MKSI",
    "Name": "MKS Instruments Inc. Common Stock"
  },
  {
    "Symbol": "MKTW",
    "Name": "MarketWise Inc. Class A Common Stock"
  },
  {
    "Symbol": "MKTX",
    "Name": "MarketAxess Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MKUL",
    "Name": "Molekule Group Inc. Common Stock"
  },
  {
    "Symbol": "ML",
    "Name": "MoneyLion Inc. Class A Common Stock"
  },
  {
    "Symbol": "MLAB",
    "Name": "Mesa Laboratories Inc. Common Stock"
  },
  {
    "Symbol": "MLAC",
    "Name": "Malacca Straits Acquisition Company Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "MLACU",
    "Name": "Malacca Straits Acquisition Company Limited Units"
  },
  {
    "Symbol": "MLCO",
    "Name": "Melco Resorts & Entertainment Limited American Depositary Shares"
  },
  {
    "Symbol": "MLEC",
    "Name": "Moolec Science SA Ordinary Shares"
  },
  {
    "Symbol": "MLECW",
    "Name": "Moolec Science SA Warrant"
  },
  {
    "Symbol": "MLGO",
    "Name": "MicroAlgo Inc. Ordinary Shares"
  },
  {
    "Symbol": "MLI",
    "Name": "Mueller Industries Inc. Common Stock"
  },
  {
    "Symbol": "MLKN",
    "Name": "MillerKnoll Inc. Common Stock"
  },
  {
    "Symbol": "MLM",
    "Name": "Martin Marietta Materials Inc. Common Stock"
  },
  {
    "Symbol": "MLNK",
    "Name": "MeridianLink Inc. Common Stock"
  },
  {
    "Symbol": "MLP",
    "Name": "Maui Land & Pineapple Company Inc. Common Stock"
  },
  {
    "Symbol": "MLR",
    "Name": "Miller Industries Inc. Common Stock"
  },
  {
    "Symbol": "MLSS",
    "Name": "Milestone Scientific Inc. Common Stock"
  },
  {
    "Symbol": "MLTX",
    "Name": "MoonLake Immunotherapeutics Class A Ordinary Shares"
  },
  {
    "Symbol": "MLVF",
    "Name": "Malvern Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "MLYS",
    "Name": "Mineralys Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MMAT",
    "Name": "Meta Materials Inc. Common Stock"
  },
  {
    "Symbol": "MMC",
    "Name": "Marsh & McLennan Companies Inc. Common Stock"
  },
  {
    "Symbol": "MMD",
    "Name": "MainStay MacKay DefinedTerm Municipal Opportunities Fund"
  },
  {
    "Symbol": "MMI",
    "Name": "Marcus & Millichap Inc. Common Stock"
  },
  {
    "Symbol": "MMLP",
    "Name": "Martin Midstream Partners L.P. Limited Partnership"
  },
  {
    "Symbol": "MMM",
    "Name": "3M Company Common Stock"
  },
  {
    "Symbol": "MMMB",
    "Name": "MamaMancini's Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MMP",
    "Name": "Magellan Midstream Partners L.P. Limited Partnership"
  },
  {
    "Symbol": "MMS",
    "Name": "Maximus Inc. Common Stock"
  },
  {
    "Symbol": "MMSI",
    "Name": "Merit Medical Systems Inc. Common Stock"
  },
  {
    "Symbol": "MMT",
    "Name": "MFS Multimarket Income Trust Common Stock"
  },
  {
    "Symbol": "MMU",
    "Name": "Western Asset Managed Municipals Fund Inc. Common Stock"
  },
  {
    "Symbol": "MMV",
    "Name": "MultiMetaVerse Holdings Limited Class A Ordinary Share"
  },
  {
    "Symbol": "MMVWW",
    "Name": "MultiMetaVerse Holdings Limited Warrant"
  },
  {
    "Symbol": "MMYT",
    "Name": "MakeMyTrip Limited Ordinary Shares"
  },
  {
    "Symbol": "MNDO",
    "Name": "MIND C.T.I. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MNDY",
    "Name": "monday.com Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MNK",
    "Name": "Mallinckrodt plc Ordinary Shares"
  },
  {
    "Symbol": "MNKD",
    "Name": "MannKind Corporation Common Stock"
  },
  {
    "Symbol": "MNMD",
    "Name": "Mind Medicine (MindMed) Inc. Common Shares"
  },
  {
    "Symbol": "MNOV",
    "Name": "Medicinova Inc Common Stock"
  },
  {
    "Symbol": "MNP",
    "Name": "Western Asset Municipal Partners Fund Inc. Common Stock"
  },
  {
    "Symbol": "MNPR",
    "Name": "Monopar Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MNRO",
    "Name": "Monro Inc. Common Stock"
  },
  {
    "Symbol": "MNSB",
    "Name": "MainStreet Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "MNSBP",
    "Name": "MainStreet Bancshares Inc. Depositary Shares"
  },
  {
    "Symbol": "MNSO",
    "Name": "MINISO Group Holding Limited American Depositary Shares each representing four Ordinary Shares"
  },
  {
    "Symbol": "MNST",
    "Name": "Monster Beverage Corporation"
  },
  {
    "Symbol": "MNTK",
    "Name": "Montauk Renewables Inc. Common Stock"
  },
  {
    "Symbol": "MNTN",
    "Name": "Everest Consolidator Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "MNTS",
    "Name": "Momentus Inc. Class A Common Stock"
  },
  {
    "Symbol": "MNTSW",
    "Name": "Momentus Inc. Warrant"
  },
  {
    "Symbol": "MNTV",
    "Name": "Momentive Global Inc. Common Stock"
  },
  {
    "Symbol": "MNTX",
    "Name": "Manitex International Inc. Common Stock"
  },
  {
    "Symbol": "MO",
    "Name": "Altria Group Inc."
  },
  {
    "Symbol": "MOB",
    "Name": "Mobilicom Limited American Depositary Shares"
  },
  {
    "Symbol": "MOBBW",
    "Name": "Mobilicom Limited Warrants"
  },
  {
    "Symbol": "MOBQ",
    "Name": "Mobiquity Technologies Inc. Common Stock"
  },
  {
    "Symbol": "MOBQW",
    "Name": "Mobiquity Technologies Inc. Warrant"
  },
  {
    "Symbol": "MOBV",
    "Name": "Mobiv Acquisition Corp Class A Common Stock"
  },
  {
    "Symbol": "MOBVW",
    "Name": "Mobiv Acquisition Corp Warrant"
  },
  {
    "Symbol": "MOD",
    "Name": "Modine Manufacturing Company Common Stock"
  },
  {
    "Symbol": "MODD",
    "Name": "Modular Medical Inc. Common Stock"
  },
  {
    "Symbol": "MODG",
    "Name": "Topgolf Callaway Brands Corp. Common Stock"
  },
  {
    "Symbol": "MODN",
    "Name": "Model N Inc. Common Stock"
  },
  {
    "Symbol": "MODV",
    "Name": "ModivCare Inc. Common Stock"
  },
  {
    "Symbol": "MOFG",
    "Name": "MidWestOne Financial Gp Common Stock"
  },
  {
    "Symbol": "MOGO",
    "Name": "Mogo Inc. Common Shares"
  },
  {
    "Symbol": "MOGU",
    "Name": "MOGU Inc. American Depositary Shares (each  representing 25 Class A Ordinary Shares)"
  },
  {
    "Symbol": "MOH",
    "Name": "Molina Healthcare Inc Common Stock"
  },
  {
    "Symbol": "MOLN",
    "Name": "Molecular Partners AG American Depositary Shares"
  },
  {
    "Symbol": "MOMO",
    "Name": "Hello Group Inc. American Depositary Shares"
  },
  {
    "Symbol": "MOND",
    "Name": "Mondee Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "MOR",
    "Name": "MorphoSys AG American Depositary Shares"
  },
  {
    "Symbol": "MORF",
    "Name": "Morphic Holding Inc. Common Stock"
  },
  {
    "Symbol": "MORN",
    "Name": "Morningstar Inc. Common Stock"
  },
  {
    "Symbol": "MOS",
    "Name": "Mosaic Company (The) Common Stock"
  },
  {
    "Symbol": "MOTS",
    "Name": "Motus GI Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MOV",
    "Name": "Movado Group Inc. Common Stock"
  },
  {
    "Symbol": "MOVE",
    "Name": "Movano Inc. Common Stock"
  },
  {
    "Symbol": "MOXC",
    "Name": "Moxian (BVI) Inc Ordinary Shares"
  },
  {
    "Symbol": "MP",
    "Name": "MP Materials Corp. Common Stock"
  },
  {
    "Symbol": "MPA",
    "Name": "Blackrock MuniYield Pennsylvania Quality Fund Common Stock"
  },
  {
    "Symbol": "MPAA",
    "Name": "Motorcar Parts  of America Inc. Common Stock"
  },
  {
    "Symbol": "MPB",
    "Name": "Mid Penn Bancorp Common Stock"
  },
  {
    "Symbol": "MPC",
    "Name": "Marathon Petroleum Corporation Common Stock"
  },
  {
    "Symbol": "MPLN",
    "Name": "MultiPlan Corporation Class A Common Stock"
  },
  {
    "Symbol": "MPLX",
    "Name": "MPLX LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "MPRA",
    "Name": "Mercato Partners Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "MPTI",
    "Name": "M-tron Industries Inc. Common Stock"
  },
  {
    "Symbol": "MPU",
    "Name": "Mega Matrix Corp. Common Stock"
  },
  {
    "Symbol": "MPV",
    "Name": "Barings Participation Investors Common Stock"
  },
  {
    "Symbol": "MPW",
    "Name": "Medical Properties Trust Inc. common stock"
  },
  {
    "Symbol": "MPWR",
    "Name": "Monolithic Power Systems Inc. Common Stock"
  },
  {
    "Symbol": "MPX",
    "Name": "Marine Products Corporation Common Stock"
  },
  {
    "Symbol": "MQ",
    "Name": "Marqeta Inc. Class A Common Stock"
  },
  {
    "Symbol": "MQT",
    "Name": "Blackrock MuniYield Quality Fund II Inc. Common Stock"
  },
  {
    "Symbol": "MQY",
    "Name": "Blackrock MuniYield Quality Fund Inc. Common Stock"
  },
  {
    "Symbol": "MRAI",
    "Name": "Marpai Inc. Class A Common Stock"
  },
  {
    "Symbol": "MRAM",
    "Name": "Everspin Technologies Inc. Common Stock"
  },
  {
    "Symbol": "MRBK",
    "Name": "Meridian Corporation Common Stock"
  },
  {
    "Symbol": "MRC",
    "Name": "MRC Global Inc. Common Stock"
  },
  {
    "Symbol": "MRCC",
    "Name": "Monroe Capital Corporation Common Stock"
  },
  {
    "Symbol": "MRCY",
    "Name": "Mercury Systems Inc Common Stock"
  },
  {
    "Symbol": "MRDB",
    "Name": "MariaDB plc Ordinary Shares"
  },
  {
    "Symbol": "MREO",
    "Name": "Mereo BioPharma Group plc American Depositary Shares"
  },
  {
    "Symbol": "MRIN",
    "Name": "Marin Software Incorporated Common Stock"
  },
  {
    "Symbol": "MRK",
    "Name": "Merck & Company Inc. Common Stock (new)"
  },
  {
    "Symbol": "MRKR",
    "Name": "Marker Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MRM",
    "Name": "MEDIROM Healthcare Technologies Inc. American Depositary Share"
  },
  {
    "Symbol": "MRNA",
    "Name": "Moderna Inc. Common Stock"
  },
  {
    "Symbol": "MRNS",
    "Name": "Marinus Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MRO",
    "Name": "Marathon Oil Corporation Common Stock"
  },
  {
    "Symbol": "MRSN",
    "Name": "Mersana Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MRTN",
    "Name": "Marten Transport Ltd. Common Stock"
  },
  {
    "Symbol": "MRTX",
    "Name": "Mirati Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "MRUS",
    "Name": "Merus N.V. Common Shares"
  },
  {
    "Symbol": "MRVI",
    "Name": "Maravai LifeSciences Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "MRVL",
    "Name": "Marvell Technology Inc. Common Stock"
  },
  {
    "Symbol": "MS",
    "Name": "Morgan Stanley Common Stock"
  },
  {
    "Symbol": "MS^A",
    "Name": "Morgan Stanley Dep Shs repstg 1/1000 Pfd Ser A"
  },
  {
    "Symbol": "MS^E",
    "Name": "Morgan Stanley DEPOSITARY SHARES REP 1/1000TH SHARES FIXED/FLTG PREFERRED STOCK SERIES E"
  },
  {
    "Symbol": "MS^F",
    "Name": "Morgan Stanley Dep Shs Rpstg 1/1000th Int Prd Ser F Fxd to Flag"
  },
  {
    "Symbol": "MS^I",
    "Name": "Morgan Stanley Depository Shares Representing 1/1000th Preferred Series 1 Fixed to Floating Non (Cum)"
  },
  {
    "Symbol": "MS^K",
    "Name": "Morgan Stanley Depositary Shares each representing 1/1000th of a share of Fixed-to-Floating Rate Non-Cumulative Preferred Stock  Series K"
  },
  {
    "Symbol": "MS^L",
    "Name": "Morgan Stanley Depositary Shares each representing 1/1000th of a share of 4.875% Non-Cumulative Preferred Stock Series L"
  },
  {
    "Symbol": "MS^O",
    "Name": "Morgan Stanley Depositary Shares each representing 1/1000th of a share of 4.250% Non-Cumulative Preferred Stock Series O"
  },
  {
    "Symbol": "MS^P",
    "Name": "Morgan Stanley Depositary Shares each representing 1/1000th of a share of 6.500% Non-Cumulative Preferred Stock Series P"
  },
  {
    "Symbol": "MSA",
    "Name": "MSA Safety Incorporated Common Stock"
  },
  {
    "Symbol": "MSB",
    "Name": "Mesabi Trust Common Stock"
  },
  {
    "Symbol": "MSBI",
    "Name": "Midland States Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "MSBIP",
    "Name": "Midland States Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 7.750% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "MSC",
    "Name": "Studio City International Holdings Limited American depositary shares each representing four  Class A ordinary shares"
  },
  {
    "Symbol": "MSCI",
    "Name": "MSCI Inc Common Stock"
  },
  {
    "Symbol": "MSD",
    "Name": "Morgan Stanley Emerging Markets Debt Fund Inc. Common Stock"
  },
  {
    "Symbol": "MSEX",
    "Name": "Middlesex Water Company Common Stock"
  },
  {
    "Symbol": "MSFT",
    "Name": "Microsoft Corporation Common Stock"
  },
  {
    "Symbol": "MSGE",
    "Name": "Madison Square Garden Entertainment Corp. Class A Common Stock"
  },
  {
    "Symbol": "MSGM",
    "Name": "Motorsport Games Inc. Class A Common Stock"
  },
  {
    "Symbol": "MSGS",
    "Name": "Madison Square Garden Sports Corp. Class A Common Stock (New)"
  },
  {
    "Symbol": "MSI",
    "Name": "Motorola Solutions Inc. Common Stock"
  },
  {
    "Symbol": "MSM",
    "Name": "MSC Industrial Direct Company Inc. Common Stock"
  },
  {
    "Symbol": "MSN",
    "Name": "Emerson Radio Corporation Common Stock"
  },
  {
    "Symbol": "MSSA",
    "Name": "Metal Sky Star Acquisition Corporation Ordinary shares"
  },
  {
    "Symbol": "MSSAU",
    "Name": "Metal Sky Star Acquisition Corporation Unit"
  },
  {
    "Symbol": "MSSAW",
    "Name": "Metal Sky Star Acquisition Corporation Warrant"
  },
  {
    "Symbol": "MSTR",
    "Name": "MicroStrategy Incorporated Common Stock Class A"
  },
  {
    "Symbol": "MSVB",
    "Name": "Mid-Southern Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "MT",
    "Name": "Arcelor Mittal NY Registry Shares NEW"
  },
  {
    "Symbol": "MTA",
    "Name": "Metalla Royalty & Streaming Ltd. Common Shares"
  },
  {
    "Symbol": "MTAC",
    "Name": "MedTech Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "MTAL",
    "Name": "Metals Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "MTB",
    "Name": "M&T Bank Corporation Common Stock"
  },
  {
    "Symbol": "MTB^H",
    "Name": "M&T Bank Corporation Perpetual Fixed-to-Floating Rate Non-Cumulative Preferred Stock Series H"
  },
  {
    "Symbol": "MTC",
    "Name": "MMTec Inc. Common Shares"
  },
  {
    "Symbol": "MTCH",
    "Name": "Match Group Inc. Common Stock"
  },
  {
    "Symbol": "MTCN",
    "Name": "ArcelorMittal 5.50% Mandatorily Convertible Subordinated Notes due 2023"
  },
  {
    "Symbol": "MTD",
    "Name": "Mettler-Toledo International Inc. Common Stock"
  },
  {
    "Symbol": "MTDR",
    "Name": "Matador Resources Company Common Stock"
  },
  {
    "Symbol": "MTEK",
    "Name": "Maris-Tech Ltd. Ordinary Shares"
  },
  {
    "Symbol": "MTEKW",
    "Name": "Maris-Tech Ltd. Warrants"
  },
  {
    "Symbol": "MTEM",
    "Name": "Molecular Templates Inc. Common Stock"
  },
  {
    "Symbol": "MTEX",
    "Name": "Mannatech Incorporated Common Stock"
  },
  {
    "Symbol": "MTG",
    "Name": "MGIC Investment Corporation Common Stock"
  },
  {
    "Symbol": "MTH",
    "Name": "Meritage Homes Corporation Common Stock"
  },
  {
    "Symbol": "MTLS",
    "Name": "Materialise NV American Depositary Shares"
  },
  {
    "Symbol": "MTN",
    "Name": "Vail Resorts Inc. Common Stock"
  },
  {
    "Symbol": "MTNB",
    "Name": "Matinas Biopharma Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MTR",
    "Name": "Mesa Royalty Trust Common Stock"
  },
  {
    "Symbol": "MTRN",
    "Name": "Materion Corporation"
  },
  {
    "Symbol": "MTRX",
    "Name": "Matrix Service Company Common Stock"
  },
  {
    "Symbol": "MTRY",
    "Name": "Monterey Bio Acquisition Corporation Common Stock"
  },
  {
    "Symbol": "MTRYW",
    "Name": "Monterey Bio Acquisition Corporation Warrant"
  },
  {
    "Symbol": "MTSI",
    "Name": "MACOM Technology Solutions Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MTTR",
    "Name": "Matterport Inc. Class A Common Stock"
  },
  {
    "Symbol": "MTVC",
    "Name": "Motive Capital Corp II Class A Ordinary Shares"
  },
  {
    "Symbol": "MTW",
    "Name": "Manitowoc Company Inc. (The) Common Stock"
  },
  {
    "Symbol": "MTX",
    "Name": "Minerals Technologies Inc. Common Stock"
  },
  {
    "Symbol": "MTZ",
    "Name": "MasTec Inc. Common Stock"
  },
  {
    "Symbol": "MU",
    "Name": "Micron Technology Inc. Common Stock"
  },
  {
    "Symbol": "MUA",
    "Name": "Blackrock MuniAssets Fund Inc Common Stock"
  },
  {
    "Symbol": "MUC",
    "Name": "Blackrock MuniHoldings California Quality Fund Inc.  Common Stock"
  },
  {
    "Symbol": "MUE",
    "Name": "Blackrock MuniHoldings Quality Fund II Inc. Common Stock"
  },
  {
    "Symbol": "MUFG",
    "Name": "Mitsubishi UFJ Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "MUI",
    "Name": "BlackRock Municipal Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "MUJ",
    "Name": "Blackrock MuniHoldings New Jersey Quality Fund Inc. Common Stock"
  },
  {
    "Symbol": "MULN",
    "Name": "Mullen Automotive Inc. Common Stock"
  },
  {
    "Symbol": "MUR",
    "Name": "Murphy Oil Corporation Common Stock"
  },
  {
    "Symbol": "MURF",
    "Name": "Murphy Canyon Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "MURFU",
    "Name": "Murphy Canyon Acquisition Corp. Unit"
  },
  {
    "Symbol": "MURFW",
    "Name": "Murphy Canyon Acquisition Corp. Warrant"
  },
  {
    "Symbol": "MUSA",
    "Name": "Murphy USA Inc. Common Stock"
  },
  {
    "Symbol": "MUX",
    "Name": "McEwen Mining Inc. Common Stock"
  },
  {
    "Symbol": "MVBF",
    "Name": "MVB Financial Corp. Common Stock"
  },
  {
    "Symbol": "MVF",
    "Name": "Blackrock MuniVest Fund Inc. Common Stock"
  },
  {
    "Symbol": "MVIS",
    "Name": "MicroVision Inc. Common Stock"
  },
  {
    "Symbol": "MVLA",
    "Name": "Movella Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MVLAW",
    "Name": "Movella Holdings Inc. Warrant"
  },
  {
    "Symbol": "MVO",
    "Name": "MV Oil Trust Units of Beneficial Interests"
  },
  {
    "Symbol": "MVST",
    "Name": "Microvast Holdings Inc. Common Stock"
  },
  {
    "Symbol": "MVSTW",
    "Name": "Microvast Holdings Inc. Warrants"
  },
  {
    "Symbol": "MVT",
    "Name": "Blackrock MuniVest Fund II Inc.  Common Stock"
  },
  {
    "Symbol": "MWA",
    "Name": "MUELLER WATER PRODUCTS Common Stock"
  },
  {
    "Symbol": "MWG",
    "Name": "Multi Ways Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "MX",
    "Name": "Magnachip Semiconductor Corporation Common Stock"
  },
  {
    "Symbol": "MXC",
    "Name": "Mexco Energy Corporation Common Stock"
  },
  {
    "Symbol": "MXCT",
    "Name": "MaxCyte Inc. Common Stock"
  },
  {
    "Symbol": "MXE",
    "Name": "Mexico Equity and Income Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "MXF",
    "Name": "Mexico Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "MXL",
    "Name": "MaxLinear Inc. Common Stock"
  },
  {
    "Symbol": "MYD",
    "Name": "Blackrock MuniYield Fund Inc.  Common Stock"
  },
  {
    "Symbol": "MYE",
    "Name": "Myers Industries Inc. Common Stock"
  },
  {
    "Symbol": "MYFW",
    "Name": "First Western Financial Inc. Common Stock"
  },
  {
    "Symbol": "MYGN",
    "Name": "Myriad Genetics Inc. Common Stock"
  },
  {
    "Symbol": "MYI",
    "Name": "Blackrock MuniYield Quality Fund III Inc Common Stock"
  },
  {
    "Symbol": "MYMD",
    "Name": "MyMD Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "MYN",
    "Name": "Blackrock MuniYield New York Quality Fund Inc.Common Stock"
  },
  {
    "Symbol": "MYNA",
    "Name": "Mynaric AG American Depository Shares"
  },
  {
    "Symbol": "MYNZ",
    "Name": "Mainz Biomed N.V. Ordinary Shares"
  },
  {
    "Symbol": "MYO",
    "Name": "Myomo Inc. Common Stock"
  },
  {
    "Symbol": "MYPS",
    "Name": "PLAYSTUDIOS Inc.  Class A Common Stock"
  },
  {
    "Symbol": "MYPSW",
    "Name": "PLAYSTUDIOS Inc. Warrant"
  },
  {
    "Symbol": "MYRG",
    "Name": "MYR Group Inc. Common Stock"
  },
  {
    "Symbol": "MYSZ",
    "Name": "My Size Inc. Common Stock"
  },
  {
    "Symbol": "MYTE",
    "Name": "MYT Netherlands Parent B.V. American Depositary Shares each representing one Ordinary Share"
  },
  {
    "Symbol": "NA",
    "Name": "Nano Labs Ltd American Depositary Shares"
  },
  {
    "Symbol": "NAAS",
    "Name": "NaaS Technology Inc. American Depositary Shares"
  },
  {
    "Symbol": "NABL",
    "Name": "N-able Inc. Common Stock"
  },
  {
    "Symbol": "NAC",
    "Name": "Nuveen California Quality Municipal Income Fund"
  },
  {
    "Symbol": "NAD",
    "Name": "Nuveen Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NAII",
    "Name": "Natural Alternatives International Inc. Common Stock"
  },
  {
    "Symbol": "NAK",
    "Name": "Northern Dynasty Minerals Ltd. Common Stock"
  },
  {
    "Symbol": "NAMS",
    "Name": "NewAmsterdam Pharma Company N.V. Ordinary Shares"
  },
  {
    "Symbol": "NAMSW",
    "Name": "NewAmsterdam Pharma Company N.V. Warrant"
  },
  {
    "Symbol": "NAN",
    "Name": "Nuveen New York Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NAOV",
    "Name": "NanoVibronix Inc. Common Stock"
  },
  {
    "Symbol": "NAPA",
    "Name": "The Duckhorn Portfolio Inc. Common Stock"
  },
  {
    "Symbol": "NARI",
    "Name": "Inari Medical Inc. Common Stock"
  },
  {
    "Symbol": "NAT",
    "Name": "Nordic American Tankers Limited Common Stock"
  },
  {
    "Symbol": "NATH",
    "Name": "Nathan's Famous Inc. Common Stock"
  },
  {
    "Symbol": "NATI",
    "Name": "National Instruments Corporation Common Stock"
  },
  {
    "Symbol": "NATR",
    "Name": "Nature's Sunshine Products Inc. Common Stock"
  },
  {
    "Symbol": "NAUT",
    "Name": "Nautilus Biotechnolgy Inc. Common Stock"
  },
  {
    "Symbol": "NAVB",
    "Name": "Navidea Biopharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "NAVI",
    "Name": "Navient Corporation Common Stock"
  },
  {
    "Symbol": "NAZ",
    "Name": "Nuveen Arizona Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NB",
    "Name": "NioCorp Developments Ltd. Common Stock"
  },
  {
    "Symbol": "NBB",
    "Name": "Nuveen Taxable Municipal Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NBH",
    "Name": "Neuberger Berman Municipal Fund Inc. Common Stock"
  },
  {
    "Symbol": "NBHC",
    "Name": "National Bank Holdings Corporation Common Stock"
  },
  {
    "Symbol": "NBIX",
    "Name": "Neurocrine Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "NBN",
    "Name": "Northeast Bank Common Stock"
  },
  {
    "Symbol": "NBO",
    "Name": "Neuberger Berman New York Municipal Fund Inc. Common Stock"
  },
  {
    "Symbol": "NBR",
    "Name": "Nabors Industries Ltd."
  },
  {
    "Symbol": "NBRV",
    "Name": "Nabriva Therapeutics plc Ordinary Shares Ireland"
  },
  {
    "Symbol": "NBSE",
    "Name": "NeuBase Therapeutics Inc.  Common Stock"
  },
  {
    "Symbol": "NBST",
    "Name": "Newbury Street Acquisition Corporation Common Stock"
  },
  {
    "Symbol": "NBSTW",
    "Name": "Newbury Street Acquisition Corporation Warrants"
  },
  {
    "Symbol": "NBTB",
    "Name": "NBT Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "NBTX",
    "Name": "Nanobiotix S.A. American Depositary Shares"
  },
  {
    "Symbol": "NBW",
    "Name": "Neuberger Berman California Municipal Fund Inc Common Stock"
  },
  {
    "Symbol": "NBXG",
    "Name": "Neuberger Berman Next Generation Connectivity Fund Inc. Common Stock"
  },
  {
    "Symbol": "NBY",
    "Name": "NovaBay Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "NC",
    "Name": "NACCO Industries Inc. Common Stock"
  },
  {
    "Symbol": "NCA",
    "Name": "Nuveen California Municipal Value Fund"
  },
  {
    "Symbol": "NCAC",
    "Name": "Newcourt Acquisition Corp Class A Ordinary Share"
  },
  {
    "Symbol": "NCLH",
    "Name": "Norwegian Cruise Line Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "NCMI",
    "Name": "National CineMedia Inc. Common Stock"
  },
  {
    "Symbol": "NCNA",
    "Name": "NuCana plc American Depositary Share"
  },
  {
    "Symbol": "NCNO",
    "Name": "nCino Inc. Common Stock"
  },
  {
    "Symbol": "NCPL",
    "Name": "Netcapital Inc. Common Stock"
  },
  {
    "Symbol": "NCPLW",
    "Name": "Netcapital Inc. Warrants"
  },
  {
    "Symbol": "NCR",
    "Name": "NCR Corporation Common Stock"
  },
  {
    "Symbol": "NCRA",
    "Name": "Nocera Inc. Common Stock"
  },
  {
    "Symbol": "NCSM",
    "Name": "NCS Multistage Holdings Inc. Common Stock"
  },
  {
    "Symbol": "NCTY",
    "Name": "The9 Limited American Depository Shares"
  },
  {
    "Symbol": "NCV",
    "Name": "Virtus Convertible & Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NCV^A",
    "Name": "Virtus Convertible & Income Fund 5.625% Series A Cumulative Preferred Shares"
  },
  {
    "Symbol": "NCZ",
    "Name": "Virtus Convertible & Income Fund II Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NCZ^A",
    "Name": "Virtus Convertible & Income Fund II 5.50% Series A Cumulative Preferred Shares"
  },
  {
    "Symbol": "NDAQ",
    "Name": "Nasdaq Inc. Common Stock"
  },
  {
    "Symbol": "NDLS",
    "Name": "Noodles & Company Class A Common Stock"
  },
  {
    "Symbol": "NDMO",
    "Name": "Nuveen Dynamic Municipal Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NDP",
    "Name": "Tortoise Energy Independence Fund Inc. Common Stock"
  },
  {
    "Symbol": "NDRA",
    "Name": "ENDRA Life Sciences Inc. Common Stock"
  },
  {
    "Symbol": "NDSN",
    "Name": "Nordson Corporation Common Stock"
  },
  {
    "Symbol": "NE",
    "Name": "Noble Corporation plc A Ordinary Shares"
  },
  {
    "Symbol": "NEA",
    "Name": "Nuveen AMT-Free Quality Municipal Income Fund Common Shares of Beneficial Interest Par Value $.01"
  },
  {
    "Symbol": "NECB",
    "Name": "NorthEast Community Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "NEE",
    "Name": "NextEra Energy Inc. Common Stock"
  },
  {
    "Symbol": "NEE^N",
    "Name": "NextEra Energy Inc. Series N Junior Subordinated Debentures due March 1 2079"
  },
  {
    "Symbol": "NEE^Q",
    "Name": "NextEra Energy Inc. 6.219% Corporate Units"
  },
  {
    "Symbol": "NEE^R",
    "Name": "NextEra Energy Inc. 6.926% Corporate Units"
  },
  {
    "Symbol": "NEGG",
    "Name": "Newegg Commerce Inc. Common Shares"
  },
  {
    "Symbol": "NEM",
    "Name": "Newmont Corporation"
  },
  {
    "Symbol": "NEN",
    "Name": "New England Realty Associates Limited Partnership Class A Depositary Receipts Evidencing Units of Limited Partnership"
  },
  {
    "Symbol": "NEO",
    "Name": "NeoGenomics Inc. Common Stock"
  },
  {
    "Symbol": "NEOG",
    "Name": "Neogen Corporation Common Stock"
  },
  {
    "Symbol": "NEON",
    "Name": "Neonode Inc. Common Stock"
  },
  {
    "Symbol": "NEOV",
    "Name": "NeoVolta Inc. Common Stock"
  },
  {
    "Symbol": "NEOVW",
    "Name": "NeoVolta Inc. Warrant"
  },
  {
    "Symbol": "NEP",
    "Name": "NextEra Energy Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "NEPH",
    "Name": "Nephros Inc. Common Stock"
  },
  {
    "Symbol": "NEPT",
    "Name": "Neptune Wellness Solutions Inc. Ordinary Shares"
  },
  {
    "Symbol": "NERV",
    "Name": "Minerva Neurosciences Inc Common Stock"
  },
  {
    "Symbol": "NET",
    "Name": "Cloudflare Inc. Class A Common Stock"
  },
  {
    "Symbol": "NETC",
    "Name": "Nabors Energy Transition Corp. Class A Common Stock"
  },
  {
    "Symbol": "NETI",
    "Name": "Eneti Inc. Common Stock"
  },
  {
    "Symbol": "NEU",
    "Name": "NewMarket Corp Common Stock"
  },
  {
    "Symbol": "NEWP",
    "Name": "New Pacific Metals Corp. Common Shares"
  },
  {
    "Symbol": "NEWR",
    "Name": "New Relic Inc. Common Stock"
  },
  {
    "Symbol": "NEWT",
    "Name": "NewtekOne Inc. Common Stock"
  },
  {
    "Symbol": "NEWTL",
    "Name": "NewtekOne Inc. 5.75% Notes due 2024"
  },
  {
    "Symbol": "NEWTZ",
    "Name": "NewtekOne Inc. 5.50% Notes Due 2026"
  },
  {
    "Symbol": "NEX",
    "Name": "NexTier Oilfield Solutions Inc. Common Stock"
  },
  {
    "Symbol": "NEXA",
    "Name": "Nexa Resources S.A. Common Shares"
  },
  {
    "Symbol": "NEXI",
    "Name": "NexImmune Inc. Common Stock"
  },
  {
    "Symbol": "NEXT",
    "Name": "NextDecade Corporation Common Stock"
  },
  {
    "Symbol": "NFBK",
    "Name": "Northfield Bancorp Inc. Common Stock (Delaware)"
  },
  {
    "Symbol": "NFE",
    "Name": "New Fortress Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "NFG",
    "Name": "National Fuel Gas Company Common Stock"
  },
  {
    "Symbol": "NFGC",
    "Name": "New Found Gold Corp Common Shares"
  },
  {
    "Symbol": "NFJ",
    "Name": "Virtus Dividend Interest & Premium Strategy Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NFLX",
    "Name": "Netflix Inc. Common Stock"
  },
  {
    "Symbol": "NFNT",
    "Name": "Infinite Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "NFTG",
    "Name": "The NFT Gaming Company Inc. Common Stock"
  },
  {
    "Symbol": "NFYS",
    "Name": "Enphys Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "NG",
    "Name": "Novagold Resources Inc."
  },
  {
    "Symbol": "NGD",
    "Name": "New Gold Inc."
  },
  {
    "Symbol": "NGG",
    "Name": "National Grid Transco PLC National Grid PLC (NEW) American Depositary Shares"
  },
  {
    "Symbol": "NGL",
    "Name": "NGL ENERGY PARTNERS LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "NGL^B",
    "Name": "NGL ENERGY PARTNERS LP 9.00% Class B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partnership interests"
  },
  {
    "Symbol": "NGL^C",
    "Name": "NGL ENERGY PARTNERS LP 9.625% Class C Fixed-to-Floating Rate Cumulative  Redeemable Perpetual Preferred Units representing  limited partner interests"
  },
  {
    "Symbol": "NGM",
    "Name": "NGM Biopharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "NGMS",
    "Name": "NeoGames S.A. Ordinary Shares"
  },
  {
    "Symbol": "NGS",
    "Name": "Natural Gas Services Group Inc. Common Stock"
  },
  {
    "Symbol": "NGVC",
    "Name": "Natural Grocers by Vitamin Cottage Inc. Common Stock"
  },
  {
    "Symbol": "NGVT",
    "Name": "Ingevity Corporation Common Stock"
  },
  {
    "Symbol": "NH",
    "Name": "NantHealth Inc. Common Stock"
  },
  {
    "Symbol": "NHC",
    "Name": "National HealthCare Corporation Common Stock"
  },
  {
    "Symbol": "NHI",
    "Name": "National Health Investors Inc. Common Stock"
  },
  {
    "Symbol": "NHS",
    "Name": "Neuberger Berman High Yield Strategies Fund"
  },
  {
    "Symbol": "NHTC",
    "Name": "Natural Health Trends Corp. Common Stock"
  },
  {
    "Symbol": "NHWK",
    "Name": "NightHawk Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "NI",
    "Name": "NiSource Inc Common Stock"
  },
  {
    "Symbol": "NI^B",
    "Name": "NiSource Inc Depositary Shares representing 1/1000th ownership interest in a share of 6.50% Series B Preferred Stock and 1/1000th ownership interest in a share of Series B-1 Preferred Stock"
  },
  {
    "Symbol": "NIC",
    "Name": "Nicolet Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "NICE",
    "Name": "NICE Ltd American Depositary Shares"
  },
  {
    "Symbol": "NICK",
    "Name": "Nicholas Financial Inc. Common Stock"
  },
  {
    "Symbol": "NIE",
    "Name": "Virtus Equity & Convertible Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NIM",
    "Name": "Nuveen Select Maturities Municipal Fund Common Stock"
  },
  {
    "Symbol": "NIMC",
    "Name": "NiSource Inc Series A Corporate Units"
  },
  {
    "Symbol": "NINE",
    "Name": "Nine Energy Service Inc. Common Stock"
  },
  {
    "Symbol": "NIO",
    "Name": "NIO Inc. American depositary shares each  representing one Class A ordinary share"
  },
  {
    "Symbol": "NIOBW",
    "Name": "NioCorp Developments Ltd. Warrant"
  },
  {
    "Symbol": "NIQ",
    "Name": "Nuveenn Intermediate Duration Quality Municipal Term Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NIR",
    "Name": "Near Intelligence Inc. Common Stock"
  },
  {
    "Symbol": "NIRWW",
    "Name": "Near Intelligence Inc. Warrant"
  },
  {
    "Symbol": "NISN",
    "Name": "NiSun International Enterprise Development Group Co. Ltd. Class A Common Shares"
  },
  {
    "Symbol": "NIU",
    "Name": "Niu Technologies American Depositary Shares"
  },
  {
    "Symbol": "NJR",
    "Name": "NewJersey Resources Corporation Common Stock"
  },
  {
    "Symbol": "NKE",
    "Name": "Nike Inc. Common Stock"
  },
  {
    "Symbol": "NKLA",
    "Name": "Nikola Corporation Common Stock"
  },
  {
    "Symbol": "NKSH",
    "Name": "National Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "NKTR",
    "Name": "Nektar Therapeutics  Common Stock"
  },
  {
    "Symbol": "NKTX",
    "Name": "Nkarta Inc. Common Stock"
  },
  {
    "Symbol": "NKX",
    "Name": "Nuveen California AMT-Free Quality Municipal Income Fund"
  },
  {
    "Symbol": "NL",
    "Name": "NL Industries Inc. Common Stock"
  },
  {
    "Symbol": "NLS",
    "Name": "Nautilus Inc. Common Stock"
  },
  {
    "Symbol": "NLSP",
    "Name": "NLS Pharmaceutics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "NLSPW",
    "Name": "NLS Pharmaceutics Ltd. Warrant"
  },
  {
    "Symbol": "NLTX",
    "Name": "Neoleukin Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "NLY",
    "Name": "Annaly Capital Management Inc. Common Stock"
  },
  {
    "Symbol": "NLY^F",
    "Name": "Annaly Capital Management Inc 6.95% Series F"
  },
  {
    "Symbol": "NLY^G",
    "Name": "Annaly Capital Management Inc 6.50% Series G Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "NLY^I",
    "Name": "Annaly Capital Management Inc 6.750% Series I Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "NM",
    "Name": "Navios Maritime Holdings Inc. Common Stock"
  },
  {
    "Symbol": "NM^G",
    "Name": "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perpetual Preferred Series G (Marshall Islands)"
  },
  {
    "Symbol": "NM^H",
    "Name": "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perp. Preferred Series H%"
  },
  {
    "Symbol": "NMAI",
    "Name": "Nuveen Multi-Asset Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NMCO",
    "Name": "Nuveen Municipal Credit Opportunities Fund Common Shares"
  },
  {
    "Symbol": "NMFC",
    "Name": "New Mountain Finance Corporation Common Stock"
  },
  {
    "Symbol": "NMG",
    "Name": "Nouveau Monde Graphite Inc. Common Shares"
  },
  {
    "Symbol": "NMI",
    "Name": "Nuveen Municipal Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "NMIH",
    "Name": "NMI Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "NMK^B",
    "Name": "Niagara Mohawk Holdings Inc. Preferred Stock"
  },
  {
    "Symbol": "NML",
    "Name": "Neuberger Berman MLP and Energy Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "NMM",
    "Name": "Navios Maritime Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "NMR",
    "Name": "Nomura Holdings Inc ADR American Depositary Shares"
  },
  {
    "Symbol": "NMRD",
    "Name": "Nemaura Medical Inc. Common Stock"
  },
  {
    "Symbol": "NMRK",
    "Name": "Newmark Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "NMS",
    "Name": "Nuveen Minnesota Quality Municipal Income Fund"
  },
  {
    "Symbol": "NMT",
    "Name": "Nuveen Massachusetts Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NMTC",
    "Name": "NeuroOne Medical Technologies Corporation Common Stock"
  },
  {
    "Symbol": "NMTR",
    "Name": "9 Meters Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "NMZ",
    "Name": "Nuveen Municipal High Income Opportunity Fund Common Stock $0.01 par value per share"
  },
  {
    "Symbol": "NN",
    "Name": "NextNav Inc. Common Stock"
  },
  {
    "Symbol": "NNAVW",
    "Name": "NextNav Inc. Warrant"
  },
  {
    "Symbol": "NNBR",
    "Name": "NN Inc. Common Stock"
  },
  {
    "Symbol": "NNDM",
    "Name": "Nano Dimension Ltd. American Depositary Shares"
  },
  {
    "Symbol": "NNI",
    "Name": "Nelnet Inc. Common Stock"
  },
  {
    "Symbol": "NNN",
    "Name": "National Retail Properties Common Stock"
  },
  {
    "Symbol": "NNOX",
    "Name": "NANO-X IMAGING LTD Ordinary Shares"
  },
  {
    "Symbol": "NNVC",
    "Name": "NanoViricides Inc. Common Stock"
  },
  {
    "Symbol": "NNY",
    "Name": "Nuveen New York Municipal Value Fund Common Stock"
  },
  {
    "Symbol": "NOA",
    "Name": "North American Construction Group Ltd. Common Shares (no par)"
  },
  {
    "Symbol": "NOAH",
    "Name": "Noah Holdings Limited"
  },
  {
    "Symbol": "NOC",
    "Name": "Northrop Grumman Corporation Common Stock"
  },
  {
    "Symbol": "NODK",
    "Name": "NI Holdings Inc. Common Stock"
  },
  {
    "Symbol": "NOG",
    "Name": "Northern Oil and Gas Inc. Common Stock"
  },
  {
    "Symbol": "NOGN",
    "Name": "Nogin Inc. Common Stock"
  },
  {
    "Symbol": "NOGNW",
    "Name": "Nogin Inc. Warrant"
  },
  {
    "Symbol": "NOK",
    "Name": "Nokia Corporation Sponsored American Depositary Shares"
  },
  {
    "Symbol": "NOM",
    "Name": "Nuveen Missouri Quality Municipal Income Fund"
  },
  {
    "Symbol": "NOMD",
    "Name": "Nomad Foods Limited Ordinary Shares"
  },
  {
    "Symbol": "NOTE",
    "Name": "FiscalNote Holdings Inc. Class A common stock"
  },
  {
    "Symbol": "NOTV",
    "Name": "Inotiv Inc. Common Stock"
  },
  {
    "Symbol": "NOV",
    "Name": "NOV Inc. Common Stock"
  },
  {
    "Symbol": "NOVA",
    "Name": "Sunnova Energy International Inc. Common Stock"
  },
  {
    "Symbol": "NOVN",
    "Name": "Novan Inc. Common Stock"
  },
  {
    "Symbol": "NOVT",
    "Name": "Novanta Inc. Common Stock"
  },
  {
    "Symbol": "NOVV",
    "Name": "Nova Vision Acquisition Corp. Ordinary share"
  },
  {
    "Symbol": "NOVVW",
    "Name": "Nova Vision Acquisition Corp. Warrant"
  },
  {
    "Symbol": "NOW",
    "Name": "ServiceNow Inc. Common Stock"
  },
  {
    "Symbol": "NPAB",
    "Name": "New Providence Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "NPABW",
    "Name": "New Providence Acquisition Corp. II Warrant"
  },
  {
    "Symbol": "NPCE",
    "Name": "Neuropace Inc. Common Stock"
  },
  {
    "Symbol": "NPCT",
    "Name": "Nuveen Core Plus Impact Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NPFD",
    "Name": "Nuveen Variable Rate Preferred & Income Fund Common Shares"
  },
  {
    "Symbol": "NPK",
    "Name": "National Presto Industries Inc. Common Stock"
  },
  {
    "Symbol": "NPO",
    "Name": "EnPro Industries Inc"
  },
  {
    "Symbol": "NPV",
    "Name": "Nuveen Virginia Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NQP",
    "Name": "Nuveen Pennsylvania Quality Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "NR",
    "Name": "Newpark Resources Inc. Common Stock"
  },
  {
    "Symbol": "NRAC",
    "Name": "Northern Revival Acquisition Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "NRBO",
    "Name": "NeuroBo Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "NRC",
    "Name": "National Research Corporation Common Stock (Delaware)"
  },
  {
    "Symbol": "NRDS",
    "Name": "NerdWallet Inc. Class A Common Stock"
  },
  {
    "Symbol": "NRDY",
    "Name": "Nerdy Inc. Class A Common Stock"
  },
  {
    "Symbol": "NREF",
    "Name": "NexPoint Real Estate Finance Inc. Common Stock"
  },
  {
    "Symbol": "NREF^A",
    "Name": "NexPoint Real Estate Finance Inc. 8.50% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "NRG",
    "Name": "NRG Energy Inc. Common Stock"
  },
  {
    "Symbol": "NRGV",
    "Name": "Energy Vault Holdings Inc. Common Stock"
  },
  {
    "Symbol": "NRGX",
    "Name": "PIMCO Energy and Tactical Credit Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NRIM",
    "Name": "Northrim BanCorp Inc Common Stock"
  },
  {
    "Symbol": "NRIX",
    "Name": "Nurix Therapeutics Inc. Common stock"
  },
  {
    "Symbol": "NRK",
    "Name": "Nuveen New York AMT-Free Quality Municipal Income Fund"
  },
  {
    "Symbol": "NRO",
    "Name": "Neuberger Berman Real Estate Securities Income Fund Inc. Neuberger Berman Real Estate Securities Income Fund Inc."
  },
  {
    "Symbol": "NRP",
    "Name": "Natural Resource Partners LP Limited Partnership"
  },
  {
    "Symbol": "NRSN",
    "Name": "NeuroSense Therapeutics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "NRSNW",
    "Name": "NeuroSense Therapeutics Ltd. Warrant"
  },
  {
    "Symbol": "NRT",
    "Name": "North European Oil Royality Trust Common Stock"
  },
  {
    "Symbol": "NRUC",
    "Name": "National Rural Utilities Cooperative Finance Corporation 5.500% Subordinated Notes due 2064 (Subordinated Deferrable Interest Notes)"
  },
  {
    "Symbol": "NRXP",
    "Name": "NRX Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "NRXPW",
    "Name": "NRX Pharmaceuticals Inc. Warrant"
  },
  {
    "Symbol": "NS",
    "Name": "Nustar Energy L.P.  Common Units"
  },
  {
    "Symbol": "NS^A",
    "Name": "Nustar Energy L.P. 8.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "NS^B",
    "Name": "Nustar Energy L.P. 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
  },
  {
    "Symbol": "NS^C",
    "Name": "Nustar Energy L.P. 9.00% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "NSA",
    "Name": "National Storage Affiliates Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NSA^A",
    "Name": "National Storage Affiliates Trust 6.000% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest (Liquidation Preference $25.00 per share)"
  },
  {
    "Symbol": "NSC",
    "Name": "Norfolk Southern Corporation Common Stock"
  },
  {
    "Symbol": "NSIT",
    "Name": "Insight Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "NSL",
    "Name": "Nuveen Senior Income Fund Common Stock"
  },
  {
    "Symbol": "NSP",
    "Name": "Insperity Inc. Common Stock"
  },
  {
    "Symbol": "NSPR",
    "Name": "InspireMD Inc. Common Stock"
  },
  {
    "Symbol": "NSS",
    "Name": "NuStar Logistics L.P. 7.625% Fixed-to-Floating Rate Subordinated Notes due 2043"
  },
  {
    "Symbol": "NSSC",
    "Name": "NAPCO Security Technologies Inc. Common Stock"
  },
  {
    "Symbol": "NSTB",
    "Name": "Northern Star Investment Corp. II Class A Common stock"
  },
  {
    "Symbol": "NSTC",
    "Name": "Northern Star Investment Corp. III Class A Common Stock"
  },
  {
    "Symbol": "NSTD",
    "Name": "Northern Star Investment Corp. IV Class A Common Stock"
  },
  {
    "Symbol": "NSTG",
    "Name": "NanoString Technologies Inc. Common Stock"
  },
  {
    "Symbol": "NSTS",
    "Name": "NSTS Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "NSYS",
    "Name": "Nortech Systems Incorporated Common Stock"
  },
  {
    "Symbol": "NTAP",
    "Name": "NetApp Inc. Common Stock"
  },
  {
    "Symbol": "NTB",
    "Name": "Bank of N.T. Butterfield & Son Limited (The) Voting Ordinary Shares"
  },
  {
    "Symbol": "NTCO",
    "Name": "Natura &Co Holding S.A. American Depositary Shares"
  },
  {
    "Symbol": "NTCT",
    "Name": "NetScout Systems Inc. Common Stock"
  },
  {
    "Symbol": "NTES",
    "Name": "NetEase Inc. American Depositary Shares"
  },
  {
    "Symbol": "NTG",
    "Name": "Tortoise Midstream Energy Fund Inc. Common Stock"
  },
  {
    "Symbol": "NTGR",
    "Name": "NETGEAR Inc. Common Stock"
  },
  {
    "Symbol": "NTIC",
    "Name": "Northern Technologies International Corporation Common Stock"
  },
  {
    "Symbol": "NTIP",
    "Name": "Network-1 Technologies Inc. Common Stock"
  },
  {
    "Symbol": "NTLA",
    "Name": "Intellia Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "NTNX",
    "Name": "Nutanix Inc. Class A Common Stock"
  },
  {
    "Symbol": "NTR",
    "Name": "Nutrien Ltd. Common Shares"
  },
  {
    "Symbol": "NTRA",
    "Name": "Natera Inc. Common Stock"
  },
  {
    "Symbol": "NTRB",
    "Name": "Nutriband Inc. Common Stock"
  },
  {
    "Symbol": "NTRBW",
    "Name": "Nutriband Inc. Warrant"
  },
  {
    "Symbol": "NTRS",
    "Name": "Northern Trust Corporation Common Stock"
  },
  {
    "Symbol": "NTRSO",
    "Name": "Northern Trust Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of Series E Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "NTST",
    "Name": "NetSTREIT Corp. Common Stock"
  },
  {
    "Symbol": "NTWK",
    "Name": "NetSol Technologies Inc. Common  Stock"
  },
  {
    "Symbol": "NTZ",
    "Name": "Natuzzi S.p.A."
  },
  {
    "Symbol": "NU",
    "Name": "Nu Holdings Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "NUBI",
    "Name": "Nubia Brand International Corp. Class A Common Stock"
  },
  {
    "Symbol": "NUE",
    "Name": "Nucor Corporation Common Stock"
  },
  {
    "Symbol": "NURO",
    "Name": "NeuroMetrix Inc. Common Stock"
  },
  {
    "Symbol": "NUS",
    "Name": "Nu Skin Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "NUTX",
    "Name": "Nutex Health Inc. Common Stock"
  },
  {
    "Symbol": "NUV",
    "Name": "Nuveen Municipal Value Fund Inc. Common Stock"
  },
  {
    "Symbol": "NUVA",
    "Name": "NuVasive Inc. Common Stock"
  },
  {
    "Symbol": "NUVB",
    "Name": "Nuvation Bio Inc. Class A Common Stock"
  },
  {
    "Symbol": "NUVL",
    "Name": "Nuvalent Inc. Class A Common Stock"
  },
  {
    "Symbol": "NUW",
    "Name": "Nuveen AMT-Free Municipal Value Fund"
  },
  {
    "Symbol": "NUWE",
    "Name": "Nuwellis Inc. Common Stock"
  },
  {
    "Symbol": "NUZE",
    "Name": "NuZee Inc. Common Stock"
  },
  {
    "Symbol": "NVAC",
    "Name": "NorthView Acquisition Corporation Common Stock"
  },
  {
    "Symbol": "NVACR",
    "Name": "NorthView Acquisition Corporation Rights"
  },
  {
    "Symbol": "NVACW",
    "Name": "NorthView Acquisition Corporation Warrant"
  },
  {
    "Symbol": "NVAX",
    "Name": "Novavax Inc. Common Stock"
  },
  {
    "Symbol": "NVCR",
    "Name": "NovoCure Limited Ordinary Shares"
  },
  {
    "Symbol": "NVCT",
    "Name": "Nuvectis Pharma Inc. Common Stock"
  },
  {
    "Symbol": "NVDA",
    "Name": "NVIDIA Corporation Common Stock"
  },
  {
    "Symbol": "NVEC",
    "Name": "NVE Corporation Common Stock"
  },
  {
    "Symbol": "NVEE",
    "Name": "NV5 Global Inc. Common Stock"
  },
  {
    "Symbol": "NVEI",
    "Name": "Nuvei Corporation Subordinate Voting Shares"
  },
  {
    "Symbol": "NVFY",
    "Name": "Nova Lifestyle Inc. Common Stock"
  },
  {
    "Symbol": "NVG",
    "Name": "Nuveen AMT-Free Municipal Credit Income Fund"
  },
  {
    "Symbol": "NVGS",
    "Name": "Navigator Holdings Ltd. Ordinary Shares (Marshall Islands)"
  },
  {
    "Symbol": "NVIV",
    "Name": "InVivo Therapeutics Holdings Corp Common Stock"
  },
  {
    "Symbol": "NVMI",
    "Name": "Nova Ltd. Ordinary Shares"
  },
  {
    "Symbol": "NVNO",
    "Name": "enVVeno Medical Corporation Common Stock"
  },
  {
    "Symbol": "NVNOW",
    "Name": "enVVeno Medical Corporation Warrants"
  },
  {
    "Symbol": "NVO",
    "Name": "Novo Nordisk A/S Common Stock"
  },
  {
    "Symbol": "NVOS",
    "Name": "Novo Integrated Sciences Inc. Common Stock"
  },
  {
    "Symbol": "NVR",
    "Name": "NVR Inc. Common Stock"
  },
  {
    "Symbol": "NVRO",
    "Name": "Nevro Corp. Common Stock"
  },
  {
    "Symbol": "NVS",
    "Name": "Novartis AG Common Stock"
  },
  {
    "Symbol": "NVST",
    "Name": "Envista Holdings Corporation Common Stock"
  },
  {
    "Symbol": "NVT",
    "Name": "nVent Electric plc Ordinary Shares"
  },
  {
    "Symbol": "NVTA",
    "Name": "Invitae Corporation Common Stock"
  },
  {
    "Symbol": "NVTS",
    "Name": "Navitas Semiconductor Corporation Common Stock"
  },
  {
    "Symbol": "NVVE",
    "Name": "Nuvve Holding Corp. Common Stock"
  },
  {
    "Symbol": "NVVEW",
    "Name": "Nuvve Holding Corp. Warrant"
  },
  {
    "Symbol": "NVX",
    "Name": "NOVONIX Limited American Depository Shares"
  },
  {
    "Symbol": "NWBI",
    "Name": "Northwest Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "NWE",
    "Name": "NorthWestern Corporation Common Stock"
  },
  {
    "Symbol": "NWFL",
    "Name": "Norwood Financial Corp. Common Stock"
  },
  {
    "Symbol": "NWG",
    "Name": "NatWest Group plc American Depositary Shares (each representing two (2) Ordinary Shares)"
  },
  {
    "Symbol": "NWL",
    "Name": "Newell Brands Inc. Common Stock"
  },
  {
    "Symbol": "NWLI",
    "Name": "National Western Life Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "NWN",
    "Name": "Northwest Natural Holding Company Common Stock"
  },
  {
    "Symbol": "NWPX",
    "Name": "Northwest Pipe Company Common Stock"
  },
  {
    "Symbol": "NWS",
    "Name": "News Corporation Class B Common Stock"
  },
  {
    "Symbol": "NWSA",
    "Name": "News Corporation Class A Common Stock"
  },
  {
    "Symbol": "NWTN",
    "Name": "NWTN Inc. Class B Ordinary Shares"
  },
  {
    "Symbol": "NWTNW",
    "Name": "NWTN Inc. Warrant"
  },
  {
    "Symbol": "NX",
    "Name": "Quanex Building Products Corporation Common Stock"
  },
  {
    "Symbol": "NXC",
    "Name": "Nuveen California Select Tax-Free Income Portfolio Common Stock"
  },
  {
    "Symbol": "NXDT",
    "Name": "NexPoint Diversified Real Estate Trust Common Stock"
  },
  {
    "Symbol": "NXDT^A",
    "Name": "NexPoint Diversified Real Estate Trust 5.50% Series A Cumulative Preferred Shares ($25.00 liquidation preference per share)"
  },
  {
    "Symbol": "NXE",
    "Name": "Nexgen Energy Ltd. Common Shares"
  },
  {
    "Symbol": "NXG",
    "Name": "NXG NextGen Infrastructure Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "NXGL",
    "Name": "NexGel Inc Common Stock"
  },
  {
    "Symbol": "NXGLW",
    "Name": "NexGel Inc Warrant"
  },
  {
    "Symbol": "NXGN",
    "Name": "NextGen Healthcare Inc. Common Stock"
  },
  {
    "Symbol": "NXJ",
    "Name": "Nuveen New Jersey Qualified Municipal Fund"
  },
  {
    "Symbol": "NXL",
    "Name": "Nexalin Technology Inc. Common Stock"
  },
  {
    "Symbol": "NXN",
    "Name": "Nuveen New York Select Tax-Free Income Portfolio Common Stock"
  },
  {
    "Symbol": "NXP",
    "Name": "Nuveen Select Tax Free Income Portfolio Common Stock"
  },
  {
    "Symbol": "NXPI",
    "Name": "NXP Semiconductors N.V. Common Stock"
  },
  {
    "Symbol": "NXPL",
    "Name": "NextPlat Corp Common Stock"
  },
  {
    "Symbol": "NXPLW",
    "Name": "NextPlat Corp Warrants"
  },
  {
    "Symbol": "NXRT",
    "Name": "NexPoint Residential Trust Inc. Common Stock"
  },
  {
    "Symbol": "NXST",
    "Name": "Nexstar Media Group Inc. Common Stock"
  },
  {
    "Symbol": "NXT",
    "Name": "Nextracker Inc. Class A Common Stock"
  },
  {
    "Symbol": "NXTC",
    "Name": "NextCure Inc. Common Stock"
  },
  {
    "Symbol": "NXTP",
    "Name": "NextPlay Technologies Inc. Common Stock"
  },
  {
    "Symbol": "NYAX",
    "Name": "Nayax Ltd. Ordinary Shares"
  },
  {
    "Symbol": "NYC",
    "Name": "American Strategic Investment Co. Class A Common Stock"
  },
  {
    "Symbol": "NYCB",
    "Name": "New York Community Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "NYCB^A",
    "Name": "New York Community Bancorp Inc. Depositary shares each representing a 1/40th interest in a share of Fixed-to-Floating Rate Series A Noncumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "NYCB^U",
    "Name": "New York Community Bancorp Inc. New York Community Capital Tr V (BONUSES)"
  },
  {
    "Symbol": "NYMT",
    "Name": "New York Mortgage Trust Inc. Common Stock"
  },
  {
    "Symbol": "NYMTL",
    "Name": "New York Mortgage Trust Inc. 6.875% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "NYMTM",
    "Name": "New York Mortgage Trust Inc. 7.875% Series E Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "NYMTN",
    "Name": "New York Mortgage Trust Inc. 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "NYMTZ",
    "Name": "New York Mortgage Trust Inc. 7.000% Series G Cumulative Redeemable Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "NYMX",
    "Name": "Nymox Pharmaceutical Corporation Common Stock (Bahamas)"
  },
  {
    "Symbol": "NYT",
    "Name": "New York Times Company (The) Common Stock"
  },
  {
    "Symbol": "NYXH",
    "Name": "Nyxoah SA Ordinary Shares"
  },
  {
    "Symbol": "NZF",
    "Name": "Nuveen Municipal Credit Income Fund"
  },
  {
    "Symbol": "O",
    "Name": "Realty Income Corporation Common Stock"
  },
  {
    "Symbol": "OABI",
    "Name": "OmniAb Inc. Common Stock"
  },
  {
    "Symbol": "OABIW",
    "Name": "OmniAb Inc. Warrant"
  },
  {
    "Symbol": "OAK^A",
    "Name": "Oaktree Capital Group LLC 6.625% Series A Preferred units"
  },
  {
    "Symbol": "OAK^B",
    "Name": "Oaktree Capital Group LLC 6.550% Series B Preferred Units"
  },
  {
    "Symbol": "OAKUU",
    "Name": "Oak Woods Acquisition Corporation Unit"
  },
  {
    "Symbol": "OB",
    "Name": "Outbrain Inc. Common Stock"
  },
  {
    "Symbol": "OBE",
    "Name": "Obsidian Energy Ltd. Common Shares"
  },
  {
    "Symbol": "OBIO",
    "Name": "Orchestra BioMed Holdings Inc. Ordinary Shares"
  },
  {
    "Symbol": "OBLG",
    "Name": "Oblong Inc. Common Stock"
  },
  {
    "Symbol": "OBNK",
    "Name": "Origin Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "OBT",
    "Name": "Orange County Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "OC",
    "Name": "Owens Corning Inc Common Stock New"
  },
  {
    "Symbol": "OCAXW",
    "Name": "OCA Acquisition Corp. Warrant"
  },
  {
    "Symbol": "OCC",
    "Name": "Optical Cable Corporation Common Stock"
  },
  {
    "Symbol": "OCCI",
    "Name": "OFS Credit Company Inc. Common Stock"
  },
  {
    "Symbol": "OCCIN",
    "Name": "OFS Credit Company Inc. 5.25% Series E Term Preferred Stock Due 2026"
  },
  {
    "Symbol": "OCCIO",
    "Name": "OFS Credit Company Inc. 6.125% Series C Term Preferred Stock"
  },
  {
    "Symbol": "OCEA",
    "Name": "Ocean Biomedical Inc. Common Stock"
  },
  {
    "Symbol": "OCEAW",
    "Name": "Ocean Biomediacal Inc. Warrants"
  },
  {
    "Symbol": "OCFC",
    "Name": "OceanFirst Financial Corp. Common Stock"
  },
  {
    "Symbol": "OCFCP",
    "Name": "OceanFirst Financial Corp. Depositary Shares"
  },
  {
    "Symbol": "OCFT",
    "Name": "OneConnect Financial Technology Co. Ltd. American Depositary Shares each representing thirty ordinary shares"
  },
  {
    "Symbol": "OCG",
    "Name": "Oriental Culture Holding LTD Ordinary Shares"
  },
  {
    "Symbol": "OCGN",
    "Name": "Ocugen Inc. Common Stock"
  },
  {
    "Symbol": "OCN",
    "Name": "Ocwen Financial Corporation NEW Common Stock"
  },
  {
    "Symbol": "OCS",
    "Name": "Oculis Holding AG Ordinary shares"
  },
  {
    "Symbol": "OCSAW",
    "Name": "Oculis Holding AG Warrants"
  },
  {
    "Symbol": "OCSL",
    "Name": "Oaktree Specialty Lending Corporation Common Stock"
  },
  {
    "Symbol": "OCTO",
    "Name": "Eightco Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OCUL",
    "Name": "Ocular Therapeutix Inc. Common Stock"
  },
  {
    "Symbol": "OCUP",
    "Name": "Ocuphire Pharma Inc. Common Stock"
  },
  {
    "Symbol": "OCX",
    "Name": "Oncocyte Corporation Common Stock"
  },
  {
    "Symbol": "ODC",
    "Name": "Oil-Dri Corporation Of America Common Stock"
  },
  {
    "Symbol": "ODFL",
    "Name": "Old Dominion Freight Line Inc. Common Stock"
  },
  {
    "Symbol": "ODP",
    "Name": "The ODP Corporation Common Stock"
  },
  {
    "Symbol": "ODV",
    "Name": "Osisko Development Corp. Common Shares"
  },
  {
    "Symbol": "OEC",
    "Name": "Orion Engineered Carbons S.A Common Shares"
  },
  {
    "Symbol": "OESX",
    "Name": "Orion Energy Systems Inc. Common Stock"
  },
  {
    "Symbol": "OFC",
    "Name": "Corporate Office Properties Trust Common Stock"
  },
  {
    "Symbol": "OFED",
    "Name": "Oconee Federal Financial Corp. Common Stock"
  },
  {
    "Symbol": "OFG",
    "Name": "OFG Bancorp Common Stock"
  },
  {
    "Symbol": "OFIX",
    "Name": "Orthofix Medical Inc. Common Stock (DE)"
  },
  {
    "Symbol": "OFLX",
    "Name": "Omega Flex Inc. Common Stock"
  },
  {
    "Symbol": "OFS",
    "Name": "OFS Capital Corporation Common Stock"
  },
  {
    "Symbol": "OFSSH",
    "Name": "OFS Capital Corporation 4.95% Notes due 2028"
  },
  {
    "Symbol": "OGE",
    "Name": "OGE Energy Corp Common Stock"
  },
  {
    "Symbol": "OGEN",
    "Name": "Oragenics Inc. Common Stock"
  },
  {
    "Symbol": "OGI",
    "Name": "Organigram Holdings Inc. Common Shares"
  },
  {
    "Symbol": "OGN",
    "Name": "Organon & Co. Common Stock"
  },
  {
    "Symbol": "OGS",
    "Name": "ONE Gas Inc. Common Stock"
  },
  {
    "Symbol": "OHAA",
    "Name": "OPY Acquisition Corp. I Class A Common Stock"
  },
  {
    "Symbol": "OHAAW",
    "Name": "OPY Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "OHI",
    "Name": "Omega Healthcare Investors Inc. Common Stock"
  },
  {
    "Symbol": "OI",
    "Name": "O-I Glass Inc. Common Stock"
  },
  {
    "Symbol": "OIA",
    "Name": "Invesco Municipal Income Opportunities Trust Common Stock"
  },
  {
    "Symbol": "OIG",
    "Name": "Orbital Infrastructure Group Inc. Common Stock"
  },
  {
    "Symbol": "OII",
    "Name": "Oceaneering International Inc. Common Stock"
  },
  {
    "Symbol": "OIS",
    "Name": "Oil States International Inc. Common Stock"
  },
  {
    "Symbol": "OKE",
    "Name": "ONEOK Inc. Common Stock"
  },
  {
    "Symbol": "OKTA",
    "Name": "Okta Inc. Class A Common Stock"
  },
  {
    "Symbol": "OKYO",
    "Name": "OKYO Pharma Limited American Depositary Shares"
  },
  {
    "Symbol": "OLB",
    "Name": "The OLB Group Inc. Common Stock"
  },
  {
    "Symbol": "OLED",
    "Name": "Universal Display Corporation Common Stock"
  },
  {
    "Symbol": "OLIT",
    "Name": "OmniLit Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "OLITW",
    "Name": "OmniLit Acquisition Corp. Warrants."
  },
  {
    "Symbol": "OLK",
    "Name": "Olink Holding AB (publ) American Depositary Shares"
  },
  {
    "Symbol": "OLLI",
    "Name": "Ollie's Bargain Outlet Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OLMA",
    "Name": "Olema Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "OLN",
    "Name": "Olin Corporation Common Stock"
  },
  {
    "Symbol": "OLO",
    "Name": "Olo Inc. Class A Common Stock"
  },
  {
    "Symbol": "OLP",
    "Name": "One Liberty Properties Inc. Common Stock"
  },
  {
    "Symbol": "OLPX",
    "Name": "Olaplex Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OM",
    "Name": "Outset Medical Inc. Common Stock"
  },
  {
    "Symbol": "OMAB",
    "Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V. ADS"
  },
  {
    "Symbol": "OMC",
    "Name": "Omnicom Group Inc. Common Stock"
  },
  {
    "Symbol": "OMCL",
    "Name": "Omnicell Inc. Common Stock ($0.001 par value)"
  },
  {
    "Symbol": "OMER",
    "Name": "Omeros Corporation Common Stock"
  },
  {
    "Symbol": "OMEX",
    "Name": "Odyssey Marine Exploration Inc. Common Stock"
  },
  {
    "Symbol": "OMF",
    "Name": "OneMain Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OMGA",
    "Name": "Omega Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "OMH",
    "Name": "Ohmyhome Limited Ordinary Shares"
  },
  {
    "Symbol": "OMI",
    "Name": "Owens & Minor Inc. Common Stock"
  },
  {
    "Symbol": "OMIC",
    "Name": "Singular Genomics Systems Inc. Common Stock"
  },
  {
    "Symbol": "OMQS",
    "Name": "OMNIQ Corp. Common Stock"
  },
  {
    "Symbol": "ON",
    "Name": "ON Semiconductor Corporation Common Stock"
  },
  {
    "Symbol": "ONB",
    "Name": "Old National Bancorp Common Stock"
  },
  {
    "Symbol": "ONBPO",
    "Name": "Old National Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of Series C Preferred Stock"
  },
  {
    "Symbol": "ONBPP",
    "Name": "Old National Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of Series A Preferred Stock"
  },
  {
    "Symbol": "ONCR",
    "Name": "Oncorus Inc. Common Stock"
  },
  {
    "Symbol": "ONCS",
    "Name": "OncoSec Medical Incorporated Common Stock"
  },
  {
    "Symbol": "ONCT",
    "Name": "Oncternal Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ONCY",
    "Name": "Oncolytics Biotech Inc. Common Shares"
  },
  {
    "Symbol": "ONDS",
    "Name": "Ondas Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ONEW",
    "Name": "OneWater Marine Inc. Class A Common Stock"
  },
  {
    "Symbol": "ONFO",
    "Name": "Onfolio Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ONFOW",
    "Name": "Onfolio Holdings Inc. Warrant"
  },
  {
    "Symbol": "ONL",
    "Name": "Orion Office REIT Inc. Common Stock"
  },
  {
    "Symbol": "ONON",
    "Name": "On Holding AG Class A Ordinary Shares"
  },
  {
    "Symbol": "ONTF",
    "Name": "ON24 Inc. Common Stock"
  },
  {
    "Symbol": "ONTO",
    "Name": "Onto Innovation Inc. Common Stock"
  },
  {
    "Symbol": "ONTX",
    "Name": "Onconova Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ONVO",
    "Name": "Organovo Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ONYX",
    "Name": "Onyx Acquisition Co. I Class A Ordinary Shares"
  },
  {
    "Symbol": "OOMA",
    "Name": "Ooma Inc. Common Stock"
  },
  {
    "Symbol": "OP",
    "Name": "OceanPal Inc. Common Stock"
  },
  {
    "Symbol": "OPA",
    "Name": "Magnum Opus Acquisition Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "OPAD",
    "Name": "Offerpad Solutions Inc. Class A Common Stock"
  },
  {
    "Symbol": "OPAL",
    "Name": "OPAL Fuels Inc. Class A Common Stock"
  },
  {
    "Symbol": "OPBK",
    "Name": "OP Bancorp Common Stock"
  },
  {
    "Symbol": "OPCH",
    "Name": "Option Care Health Inc. Common Stock"
  },
  {
    "Symbol": "OPEN",
    "Name": "Opendoor Technologies Inc Common Stock"
  },
  {
    "Symbol": "OPFI",
    "Name": "OppFi Inc. Class A Common Stock"
  },
  {
    "Symbol": "OPGN",
    "Name": "OpGen Inc. Common Stock"
  },
  {
    "Symbol": "OPHC",
    "Name": "OptimumBank Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OPI",
    "Name": "Office Properties Income Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "OPINL",
    "Name": "Office Properties Income Trust 6.375% Senior Notes due 2050"
  },
  {
    "Symbol": "OPK",
    "Name": "OPKO Health Inc. Common Stock"
  },
  {
    "Symbol": "OPOF",
    "Name": "Old Point Financial Corporation Common Stock"
  },
  {
    "Symbol": "OPP",
    "Name": "RiverNorth/DoubleLine Strategic Opportunity Fund Inc. Common Stock"
  },
  {
    "Symbol": "OPP^A",
    "Name": "RiverNorth/DoubleLine Strategic Opportunity Fund Inc. 4.375% Series A Cumulative Preferred Stock"
  },
  {
    "Symbol": "OPP^B",
    "Name": "RiverNorth/DoubleLine Strategic Opportunity Fund Inc. 4.75% Series B Cumulative Preferred Stock"
  },
  {
    "Symbol": "OPRA",
    "Name": "Opera Limited American Depositary Shares"
  },
  {
    "Symbol": "OPRT",
    "Name": "Oportun Financial Corporation Common Stock"
  },
  {
    "Symbol": "OPRX",
    "Name": "OptimizeRx Corporation Common Stock"
  },
  {
    "Symbol": "OPT",
    "Name": "Opthea Limited American Depositary Shares"
  },
  {
    "Symbol": "OPTN",
    "Name": "OptiNose Inc. Common Stock"
  },
  {
    "Symbol": "OPTT",
    "Name": "Ocean Power Technologies Inc. Common Stock"
  },
  {
    "Symbol": "OPXS",
    "Name": "Optex Systems Holdings Inc. Common Stock"
  },
  {
    "Symbol": "OPY",
    "Name": "Oppenheimer Holdings Inc. Class A Common Stock (DE)"
  },
  {
    "Symbol": "OR",
    "Name": "Osisko Gold Royalties Ltd Common Shares"
  },
  {
    "Symbol": "ORA",
    "Name": "Ormat Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ORAN",
    "Name": "Orange"
  },
  {
    "Symbol": "ORC",
    "Name": "Orchid Island Capital Inc. Common Stock"
  },
  {
    "Symbol": "ORCC",
    "Name": "Owl Rock Capital Corporation Common Stock"
  },
  {
    "Symbol": "ORCL",
    "Name": "Oracle Corporation Common Stock"
  },
  {
    "Symbol": "ORGN",
    "Name": "Origin Materials Inc. Common Stock"
  },
  {
    "Symbol": "ORGNW",
    "Name": "Origin Materials Inc. Warrants"
  },
  {
    "Symbol": "ORGO",
    "Name": "Organogenesis Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "ORGS",
    "Name": "Orgenesis Inc. Common Stock"
  },
  {
    "Symbol": "ORI",
    "Name": "Old Republic International Corporation Common Stock"
  },
  {
    "Symbol": "ORIC",
    "Name": "Oric Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ORLA",
    "Name": "Orla Mining Ltd. Common Shares"
  },
  {
    "Symbol": "ORLY",
    "Name": "O'Reilly Automotive Inc. Common Stock"
  },
  {
    "Symbol": "ORMP",
    "Name": "Oramed Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ORN",
    "Name": "Orion Group Holdings Inc. Common"
  },
  {
    "Symbol": "ORRF",
    "Name": "Orrstown Financial Services Inc Common Stock"
  },
  {
    "Symbol": "ORTX",
    "Name": "Orchard Therapeutics plc American Depositary Shares"
  },
  {
    "Symbol": "OSA",
    "Name": "ProSomnus Inc. Common Stock"
  },
  {
    "Symbol": "OSAAW",
    "Name": "ProSomnus Inc. Warrant"
  },
  {
    "Symbol": "OSBC",
    "Name": "Old Second Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "OSCR",
    "Name": "Oscar Health Inc. Class A Common Stock"
  },
  {
    "Symbol": "OSG",
    "Name": "Overseas Shipholding Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "OSI",
    "Name": "Osiris Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "OSIS",
    "Name": "OSI Systems Inc. Common Stock (DE)"
  },
  {
    "Symbol": "OSK",
    "Name": "Oshkosh Corporation (Holding Company)Common Stock"
  },
  {
    "Symbol": "OSPN",
    "Name": "OneSpan Inc. Common Stock"
  },
  {
    "Symbol": "OSS",
    "Name": "One Stop Systems Inc. Common Stock"
  },
  {
    "Symbol": "OST",
    "Name": "Ostin Technology Group Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "OSTK",
    "Name": "Overstock.com Inc. Common Stock"
  },
  {
    "Symbol": "OSUR",
    "Name": "OraSure Technologies Inc. Common Stock"
  },
  {
    "Symbol": "OSW",
    "Name": "OneSpaWorld Holdings Limited Common Shares"
  },
  {
    "Symbol": "OTEC",
    "Name": "OceanTech Acquisitions I Corp. Class A Common Stock"
  },
  {
    "Symbol": "OTECW",
    "Name": "OceanTech Acquisitions I Corp. Warrant"
  },
  {
    "Symbol": "OTEX",
    "Name": "Open Text Corporation Common Shares"
  },
  {
    "Symbol": "OTIS",
    "Name": "Otis Worldwide Corporation Common Stock"
  },
  {
    "Symbol": "OTLK",
    "Name": "Outlook Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "OTLY",
    "Name": "Oatly Group AB American Depositary Shares"
  },
  {
    "Symbol": "OTMO",
    "Name": "Otonomo Technologies Ltd. Ordinary shares"
  },
  {
    "Symbol": "OTMOW",
    "Name": "Otonomo Technologies Ltd. Warrant"
  },
  {
    "Symbol": "OTRK",
    "Name": "Ontrak Inc. Common Stock"
  },
  {
    "Symbol": "OTRKP",
    "Name": "Ontrak Inc. 9.50% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "OTTR",
    "Name": "Otter Tail Corporation Common Stock"
  },
  {
    "Symbol": "OUST",
    "Name": "Ouster Inc. Common Stock"
  },
  {
    "Symbol": "OUT",
    "Name": "OUTFRONT Media Inc. Common Stock"
  },
  {
    "Symbol": "OVBC",
    "Name": "Ohio Valley Banc Corp. Common Stock"
  },
  {
    "Symbol": "OVID",
    "Name": "Ovid Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "OVLY",
    "Name": "Oak Valley Bancorp (CA) Common Stock"
  },
  {
    "Symbol": "OVV",
    "Name": "Ovintiv Inc. (DE)"
  },
  {
    "Symbol": "OWL",
    "Name": "Blue Owl Capital Inc. Class A Common Stock"
  },
  {
    "Symbol": "OWLT",
    "Name": "Owlet Inc. Class A Common Stock"
  },
  {
    "Symbol": "OXAC",
    "Name": "Oxbridge Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "OXACW",
    "Name": "Oxbridge Acquisition Corp. Warrant"
  },
  {
    "Symbol": "OXBR",
    "Name": "Oxbridge Re Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "OXBRW",
    "Name": "Oxbridge Re Holdings Limited Warrant expiring 3/26/2024"
  },
  {
    "Symbol": "OXLC",
    "Name": "Oxford Lane Capital Corp. Common Stock"
  },
  {
    "Symbol": "OXLCL",
    "Name": "Oxford Lane Capital Corp. 6.75% Notes due 2031"
  },
  {
    "Symbol": "OXLCM",
    "Name": "Oxford Lane Capital Corp. 6.75% Series 2024 Term Preferred Stock"
  },
  {
    "Symbol": "OXLCN",
    "Name": "Oxford Lane Capital Corp. 7.125% Series 2029 Term Preferred Stock"
  },
  {
    "Symbol": "OXLCO",
    "Name": "Oxford Lane Capital Corp. Preferred Stock Shares 6.00% Series 2029"
  },
  {
    "Symbol": "OXLCP",
    "Name": "Oxford Lane Capital Corp. 6.25% Series 2027 Term Preferred Shares"
  },
  {
    "Symbol": "OXLCZ",
    "Name": "Oxford Lane Capital Corp. 5.00% Notes due 2027"
  },
  {
    "Symbol": "OXM",
    "Name": "Oxford Industries Inc. Common Stock"
  },
  {
    "Symbol": "OXSQ",
    "Name": "Oxford Square Capital Corp. Common Stock"
  },
  {
    "Symbol": "OXSQG",
    "Name": "Oxford Square Capital Corp. 5.50% Notes due 2028"
  },
  {
    "Symbol": "OXSQL",
    "Name": "Oxford Square Capital Corp. 6.50% Notes due 2024"
  },
  {
    "Symbol": "OXSQZ",
    "Name": "Oxford Square Capital Corp. 6.25% Notes due 2026"
  },
  {
    "Symbol": "OXUS",
    "Name": "Oxus Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "OXUSW",
    "Name": "Oxus Acquisition Corp. Warrant"
  },
  {
    "Symbol": "OXY",
    "Name": "Occidental Petroleum Corporation Common Stock"
  },
  {
    "Symbol": "OZ",
    "Name": "Belpointe PREP LLC Class A Units"
  },
  {
    "Symbol": "OZK",
    "Name": "Bank OZK Common Stock"
  },
  {
    "Symbol": "OZKAP",
    "Name": "Bank OZK 4.625% Series A Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "PAA",
    "Name": "Plains All American Pipeline L.P. Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "PAAS",
    "Name": "Pan American Silver Corp. Common Stock"
  },
  {
    "Symbol": "PAC",
    "Name": "Grupo Aeroportuario Del Pacifico S.A. B. de C.V. Grupo Aeroportuario Del Pacifico S.A. de C.V. (each representing 10 Series B shares)"
  },
  {
    "Symbol": "PACB",
    "Name": "Pacific Biosciences of California Inc. Common Stock"
  },
  {
    "Symbol": "PACI",
    "Name": "PROOF Acquisition Corp I Class A Common Stock"
  },
  {
    "Symbol": "PACK",
    "Name": "Ranpak Holdings Corp Class A Common Stock"
  },
  {
    "Symbol": "PACW",
    "Name": "PacWest Bancorp Common Stock"
  },
  {
    "Symbol": "PACWP",
    "Name": "PacWest Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of 7.75% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "PAG",
    "Name": "Penske Automotive Group Inc. Common Stock"
  },
  {
    "Symbol": "PAGP",
    "Name": "Plains GP Holdings L.P. Class A Units representing Limited Partner Interests"
  },
  {
    "Symbol": "PAGS",
    "Name": "PagSeguro Digital Ltd. Class A Common Shares"
  },
  {
    "Symbol": "PAHC",
    "Name": "Phibro Animal Health Corporation Class A Common Stock"
  },
  {
    "Symbol": "PAI",
    "Name": "Western Asset Investment Grade Income Fund Inc."
  },
  {
    "Symbol": "PALI",
    "Name": "Palisade Bio Inc. Common Stock"
  },
  {
    "Symbol": "PALT",
    "Name": "Paltalk Inc. Common Stock"
  },
  {
    "Symbol": "PAM",
    "Name": "Pampa Energia S.A. Pampa Energia S.A."
  },
  {
    "Symbol": "PANL",
    "Name": "Pangaea Logistics Solutions Ltd. Common Shares"
  },
  {
    "Symbol": "PANW",
    "Name": "Palo Alto Networks Inc. Common Stock"
  },
  {
    "Symbol": "PAR",
    "Name": "PAR Technology Corporation Common Stock"
  },
  {
    "Symbol": "PARA",
    "Name": "Paramount Global Class B Common Stock"
  },
  {
    "Symbol": "PARAA",
    "Name": "Paramount Global Class A Common Stock"
  },
  {
    "Symbol": "PARAP",
    "Name": "Paramount Global 5.75% Series A Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "PARR",
    "Name": "Par Pacific Holdings Inc.  Common Stock"
  },
  {
    "Symbol": "PASG",
    "Name": "Passage Bio Inc. Common Stock"
  },
  {
    "Symbol": "PATH",
    "Name": "UiPath Inc. Class A Common Stock"
  },
  {
    "Symbol": "PATI",
    "Name": "Patriot Transportation Holding Inc. Common Stock"
  },
  {
    "Symbol": "PATK",
    "Name": "Patrick Industries Inc. Common Stock"
  },
  {
    "Symbol": "PAVM",
    "Name": "PAVmed Inc. Common Stock"
  },
  {
    "Symbol": "PAVMZ",
    "Name": "PAVmed Inc. Series Z Warrant"
  },
  {
    "Symbol": "PAVS",
    "Name": "Paranovus Entertainment Technology Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "PAX",
    "Name": "Patria Investments Limited Class A Common Shares"
  },
  {
    "Symbol": "PAXS",
    "Name": "PIMCO Access Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PAY",
    "Name": "Paymentus Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "PAYC",
    "Name": "Paycom Software Inc. Common Stock"
  },
  {
    "Symbol": "PAYO",
    "Name": "Payoneer Global Inc. Common Stock"
  },
  {
    "Symbol": "PAYOW",
    "Name": "Payoneer Global Inc. Warrant"
  },
  {
    "Symbol": "PAYS",
    "Name": "Paysign Inc. Common Stock"
  },
  {
    "Symbol": "PAYX",
    "Name": "Paychex Inc. Common Stock"
  },
  {
    "Symbol": "PB",
    "Name": "Prosperity Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "PBA",
    "Name": "Pembina Pipeline Corp. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "PBAX",
    "Name": "Phoenix Biotech Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "PBAXW",
    "Name": "Phoenix Biotech Acquisition Corp. Warrants"
  },
  {
    "Symbol": "PBBK",
    "Name": "PB Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "PBF",
    "Name": "PBF Energy Inc. Class A Common Stock"
  },
  {
    "Symbol": "PBFS",
    "Name": "Pioneer Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "PBH",
    "Name": "Prestige Consumer Healthcare Inc. Common Stock"
  },
  {
    "Symbol": "PBHC",
    "Name": "Pathfinder Bancorp Inc. Common Stock (MD)"
  },
  {
    "Symbol": "PBI",
    "Name": "Pitney Bowes Inc. Common Stock"
  },
  {
    "Symbol": "PBI^B",
    "Name": "Pitney Bowes Inc 6.70% Notes Due 2043"
  },
  {
    "Symbol": "PBLA",
    "Name": "Panbela Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PBPB",
    "Name": "Potbelly Corporation Common Stock"
  },
  {
    "Symbol": "PBR",
    "Name": "Petroleo Brasileiro S.A.- Petrobras Common Stock"
  },
  {
    "Symbol": "PBT",
    "Name": "Permian Basin Royalty Trust Common Stock"
  },
  {
    "Symbol": "PBTS",
    "Name": "Powerbridge Technologies Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "PBYI",
    "Name": "Puma Biotechnology Inc Common Stock"
  },
  {
    "Symbol": "PCAR",
    "Name": "PACCAR Inc. Common Stock"
  },
  {
    "Symbol": "PCB",
    "Name": "PCB Bancorp Common Stock"
  },
  {
    "Symbol": "PCCT",
    "Name": "Perception Capital Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "PCCTU",
    "Name": "Perception Capital Corp. II Units"
  },
  {
    "Symbol": "PCF",
    "Name": "High Income Securities Fund Common Stock"
  },
  {
    "Symbol": "PCG",
    "Name": "Pacific Gas & Electric Co. Common Stock"
  },
  {
    "Symbol": "PCG^A",
    "Name": "Pacific Gas & Electric Co. 6% Preferred Stock"
  },
  {
    "Symbol": "PCG^B",
    "Name": "Pacific Gas & Electric Co. 5 1/2% Preferred Stock"
  },
  {
    "Symbol": "PCG^C",
    "Name": "Pacific Gas & Electric Co. 5% 1st Preferred Stock"
  },
  {
    "Symbol": "PCG^D",
    "Name": "Pacific Gas & Electric Co. 5% 1st  Red. Preferred Stock"
  },
  {
    "Symbol": "PCG^E",
    "Name": "Pacific Gas & Electric Co. 5% 1st A Preferred Stock"
  },
  {
    "Symbol": "PCG^G",
    "Name": "Pacific Gas & Electric Co. 4.80% 1st Preferred Stock"
  },
  {
    "Symbol": "PCG^H",
    "Name": "Pacific Gas & Electric Co. 4.50% 1st Preferred Stock"
  },
  {
    "Symbol": "PCG^I",
    "Name": "Pacific Gas & Electric Co. 4.36% 1st Preferred Stock"
  },
  {
    "Symbol": "PCGU",
    "Name": "Pacific Gas & Electric Co. Equity Unit"
  },
  {
    "Symbol": "PCH",
    "Name": "PotlatchDeltic Corporation Common Stock"
  },
  {
    "Symbol": "PCK",
    "Name": "Pimco California Municipal Income Fund II Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PCM",
    "Name": "PCM Fund Inc. Common Stock"
  },
  {
    "Symbol": "PCN",
    "Name": "Pimco Corporate & Income Strategy Fund Common Stock"
  },
  {
    "Symbol": "PCOR",
    "Name": "Procore Technologies Inc. Common Stock"
  },
  {
    "Symbol": "PCQ",
    "Name": "PIMCO California Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "PCRX",
    "Name": "Pacira BioSciences Inc. Common Stock"
  },
  {
    "Symbol": "PCSA",
    "Name": "Processa Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PCT",
    "Name": "PureCycle Technologies Inc. Common stock"
  },
  {
    "Symbol": "PCTI",
    "Name": "PCTEL Inc. Common Stock"
  },
  {
    "Symbol": "PCTTU",
    "Name": "PureCycle Technologies Inc. Unit"
  },
  {
    "Symbol": "PCTTW",
    "Name": "PureCycle Technologies Inc. Warrant"
  },
  {
    "Symbol": "PCTY",
    "Name": "Paylocity Holding Corporation Common Stock"
  },
  {
    "Symbol": "PCVX",
    "Name": "Vaxcyte Inc. Common Stock"
  },
  {
    "Symbol": "PCYG",
    "Name": "Park City Group Inc. Common Stock"
  },
  {
    "Symbol": "PCYO",
    "Name": "Pure Cycle Corporation Common Stock"
  },
  {
    "Symbol": "PD",
    "Name": "PagerDuty Inc. Common Stock"
  },
  {
    "Symbol": "PDCE",
    "Name": "PDC Energy Inc. Common Stock (Delaware)"
  },
  {
    "Symbol": "PDCO",
    "Name": "Patterson Companies Inc. Common Stock"
  },
  {
    "Symbol": "PDD",
    "Name": "PDD Holdings Inc. American Depositary Shares"
  },
  {
    "Symbol": "PDEX",
    "Name": "Pro-Dex Inc. Common Stock"
  },
  {
    "Symbol": "PDFS",
    "Name": "PDF Solutions Inc. Common Stock"
  },
  {
    "Symbol": "PDI",
    "Name": "PIMCO Dynamic Income Fund Common Stock"
  },
  {
    "Symbol": "PDLB",
    "Name": "Ponce Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "PDM",
    "Name": "Piedmont Office Realty Trust Inc. Class A Common Stock"
  },
  {
    "Symbol": "PDO",
    "Name": "PIMCO Dynamic Income Opportunities Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PDS",
    "Name": "Precision Drilling Corporation Common Stock"
  },
  {
    "Symbol": "PDSB",
    "Name": "PDS Biotechnology Corporation Common Stock"
  },
  {
    "Symbol": "PDT",
    "Name": "John Hancock Premium Dividend Fund"
  },
  {
    "Symbol": "PEAK",
    "Name": "Healthpeak Properties Inc. Common Stock"
  },
  {
    "Symbol": "PEB",
    "Name": "Pebblebrook Hotel Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PEB^E",
    "Name": "Pebblebrook Hotel Trust 6.375% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PEB^F",
    "Name": "Pebblebrook Hotel Trust 6.3% Series F Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PEB^G",
    "Name": "Pebblebrook Hotel Trust 6.375% Series G Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PEB^H",
    "Name": "Pebblebrook Hotel Trust 5.700% Series H Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PEBK",
    "Name": "Peoples Bancorp of North Carolina Inc. Common Stock"
  },
  {
    "Symbol": "PEBO",
    "Name": "Peoples Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "PECO",
    "Name": "Phillips Edison & Company Inc. Common Stock"
  },
  {
    "Symbol": "PED",
    "Name": "Pedevco Corp. Common Stock"
  },
  {
    "Symbol": "PEG",
    "Name": "Public Service Enterprise Group Incorporated Common Stock"
  },
  {
    "Symbol": "PEGA",
    "Name": "Pegasystems Inc. Common Stock"
  },
  {
    "Symbol": "PEGR",
    "Name": "Project Energy Reimagined Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "PEGRU",
    "Name": "Project Energy Reimagined Acquisition Corp. Unit"
  },
  {
    "Symbol": "PEGRW",
    "Name": "Project Energy Reimagined Acquisition Corp. Warrant"
  },
  {
    "Symbol": "PEGY",
    "Name": "Pineapple Energy Inc. Common Stock"
  },
  {
    "Symbol": "PEN",
    "Name": "Penumbra Inc. Common Stock"
  },
  {
    "Symbol": "PENN",
    "Name": "PENN Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "PEO",
    "Name": "Adams Natural Resources Fund Inc. Common Stock"
  },
  {
    "Symbol": "PEP",
    "Name": "PepsiCo Inc. Common Stock"
  },
  {
    "Symbol": "PEPG",
    "Name": "PepGen Inc. Common Stock"
  },
  {
    "Symbol": "PEPL",
    "Name": "PepperLime Health Acquisition Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "PEPLU",
    "Name": "PepperLime Health Acquisition Corporation Unit"
  },
  {
    "Symbol": "PEPLW",
    "Name": "PepperLime Health Acquisition Corporation Warrrant"
  },
  {
    "Symbol": "PERF",
    "Name": "Perfect Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "PERI",
    "Name": "Perion Network Ltd. Ordinary Shares"
  },
  {
    "Symbol": "PESI",
    "Name": "Perma-Fix Environmental Services Inc. Common Stock"
  },
  {
    "Symbol": "PET",
    "Name": "Wag! Group Co. Common Stock"
  },
  {
    "Symbol": "PETQ",
    "Name": "PetIQ Inc. Class A Common Stock"
  },
  {
    "Symbol": "PETS",
    "Name": "PetMed Express Inc. Common Stock"
  },
  {
    "Symbol": "PETV",
    "Name": "PetVivo Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PETVW",
    "Name": "PetVivo Holdings Inc. Warrant"
  },
  {
    "Symbol": "PETWW",
    "Name": "Wag! Group Co Warrant"
  },
  {
    "Symbol": "PETZ",
    "Name": "TDH Holdings Inc. Common Shares"
  },
  {
    "Symbol": "PEV",
    "Name": "Phoenix Motor Inc. Common Stock"
  },
  {
    "Symbol": "PFBC",
    "Name": "Preferred Bank Common Stock"
  },
  {
    "Symbol": "PFC",
    "Name": "Premier Financial Corp. Common Stock"
  },
  {
    "Symbol": "PFD",
    "Name": "Flaherty & Crumrine Preferred and Income Fund Incorporated"
  },
  {
    "Symbol": "PFE",
    "Name": "Pfizer Inc. Common Stock"
  },
  {
    "Symbol": "PFG",
    "Name": "Principal Financial Group Inc Common Stock"
  },
  {
    "Symbol": "PFGC",
    "Name": "Performance Food Group Company Common Stock"
  },
  {
    "Symbol": "PFH",
    "Name": "Prudential Financial Inc. 4.125% Junior Subordinated Notes due 2060"
  },
  {
    "Symbol": "PFIE",
    "Name": "Profire Energy Inc. Common Stock"
  },
  {
    "Symbol": "PFIN",
    "Name": "P & F Industries Inc. Class A Common Stock"
  },
  {
    "Symbol": "PFIS",
    "Name": "Peoples Financial Services Corp. Common Stock"
  },
  {
    "Symbol": "PFL",
    "Name": "PIMCO Income Strategy Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "PFLT",
    "Name": "PennantPark Floating Rate Capital Ltd. Common Stock"
  },
  {
    "Symbol": "PFMT",
    "Name": "Performant Financial Corporation Common Stock"
  },
  {
    "Symbol": "PFN",
    "Name": "PIMCO Income Strategy Fund II"
  },
  {
    "Symbol": "PFO",
    "Name": "Flaherty & Crumrine Preferred and Income Opportunity Fund Incorporated"
  },
  {
    "Symbol": "PFS",
    "Name": "Provident Financial Services Inc Common Stock"
  },
  {
    "Symbol": "PFSI",
    "Name": "PennyMac Financial Services Inc. Common Stock"
  },
  {
    "Symbol": "PFSW",
    "Name": "PFSweb Inc. Common Stock"
  },
  {
    "Symbol": "PFTA",
    "Name": "Portage Fintech Acquisition Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "PFTAU",
    "Name": "Portage Fintech Acquisition Corporation Unit"
  },
  {
    "Symbol": "PFTAW",
    "Name": "Portage Fintech Acquisition Corporation Warrant"
  },
  {
    "Symbol": "PFX",
    "Name": "PhenixFIN Corporation Common Stock"
  },
  {
    "Symbol": "PG",
    "Name": "Procter & Gamble Company (The) Common Stock"
  },
  {
    "Symbol": "PGC",
    "Name": "Peapack-Gladstone Financial Corporation Common Stock"
  },
  {
    "Symbol": "PGEN",
    "Name": "Precigen Inc. Common Stock"
  },
  {
    "Symbol": "PGNY",
    "Name": "Progyny Inc. Common Stock"
  },
  {
    "Symbol": "PGP",
    "Name": "Pimco Global Stocksplus & Income Fund Pimco Global StocksPlus & Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PGR",
    "Name": "Progressive Corporation (The) Common Stock"
  },
  {
    "Symbol": "PGRE",
    "Name": "Paramount Group Inc. Common Stock"
  },
  {
    "Symbol": "PGRU",
    "Name": "PropertyGuru Group Limited Ordinary Shares"
  },
  {
    "Symbol": "PGRW",
    "Name": "Progress Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "PGRWU",
    "Name": "Progress Acquisition Corp. Units"
  },
  {
    "Symbol": "PGRWW",
    "Name": "Progress Acquisition Corp. Warrant"
  },
  {
    "Symbol": "PGSS",
    "Name": "Pegasus Digital Mobility Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PGTI",
    "Name": "PGT Innovations Inc."
  },
  {
    "Symbol": "PGY",
    "Name": "Pagaya Technologies Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "PGYWW",
    "Name": "Pagaya Technologies Ltd. Warrants"
  },
  {
    "Symbol": "PGZ",
    "Name": "Principal Real Estate Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PH",
    "Name": "Parker-Hannifin Corporation Common Stock"
  },
  {
    "Symbol": "PHAR",
    "Name": "Pharming Group N.V. ADS each representing 10 ordinary shares"
  },
  {
    "Symbol": "PHAT",
    "Name": "Phathom Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PHD",
    "Name": "Pioneer Floating Rate Fund Inc."
  },
  {
    "Symbol": "PHG",
    "Name": "Koninklijke Philips N.V. NY Registry Shares"
  },
  {
    "Symbol": "PHGE",
    "Name": "BiomX Inc. COmmon Stock"
  },
  {
    "Symbol": "PHI",
    "Name": "PLDT Inc. Sponsored ADR"
  },
  {
    "Symbol": "PHIO",
    "Name": "Phio Pharmaceuticals Corp. Common Stock"
  },
  {
    "Symbol": "PHK",
    "Name": "Pimco High Income Fund Pimco High Income Fund"
  },
  {
    "Symbol": "PHM",
    "Name": "PulteGroup Inc. Common Stock"
  },
  {
    "Symbol": "PHR",
    "Name": "Phreesia Inc. Common Stock"
  },
  {
    "Symbol": "PHT",
    "Name": "Pioneer High Income Fund Inc."
  },
  {
    "Symbol": "PHUN",
    "Name": "Phunware Inc. Common Stock"
  },
  {
    "Symbol": "PHUNW",
    "Name": "Phunware Inc. Warrants"
  },
  {
    "Symbol": "PHVS",
    "Name": "Pharvaris N.V. Ordinary Shares"
  },
  {
    "Symbol": "PHX",
    "Name": "PHX Minerals Inc. Common Stock"
  },
  {
    "Symbol": "PHYT",
    "Name": "Pyrophyte Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PI",
    "Name": "Impinj Inc. Common Stock"
  },
  {
    "Symbol": "PIAI",
    "Name": "Prime Impact Acquisition I Class A Ordinary Shares"
  },
  {
    "Symbol": "PII",
    "Name": "Polaris Inc. Common Stock"
  },
  {
    "Symbol": "PIII",
    "Name": "P3 Health Partners Inc. Class A Common Stock"
  },
  {
    "Symbol": "PIIIW",
    "Name": "P3 Health Partners Inc. Warrant"
  },
  {
    "Symbol": "PIK",
    "Name": "Kidpik Corp. Common Stock"
  },
  {
    "Symbol": "PIM",
    "Name": "Putnam Master Intermediate Income Trust Common Stock"
  },
  {
    "Symbol": "PINC",
    "Name": "Premier Inc. Class A Common Stock"
  },
  {
    "Symbol": "PINE",
    "Name": "Alpine Income Property Trust Inc. Common Stock"
  },
  {
    "Symbol": "PINS",
    "Name": "Pinterest Inc. Class A Common Stock"
  },
  {
    "Symbol": "PIPR",
    "Name": "Piper Sandler Companies Common Stock"
  },
  {
    "Symbol": "PIRS",
    "Name": "Pieris Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PIXY",
    "Name": "ShiftPixy Inc. Common Stock"
  },
  {
    "Symbol": "PJT",
    "Name": "PJT Partners Inc. Class A Common Stock"
  },
  {
    "Symbol": "PK",
    "Name": "Park Hotels & Resorts Inc. Common Stock"
  },
  {
    "Symbol": "PKBK",
    "Name": "Parke Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "PKE",
    "Name": "Park Aerospace Corp. Common Stock"
  },
  {
    "Symbol": "PKG",
    "Name": "Packaging Corporation of America Common Stock"
  },
  {
    "Symbol": "PKI",
    "Name": "PerkinElmer Inc. Common Stock"
  },
  {
    "Symbol": "PKOH",
    "Name": "Park-Ohio Holdings Corp. Common Stock"
  },
  {
    "Symbol": "PKST",
    "Name": "Peakstone Realty Trust Common Shares"
  },
  {
    "Symbol": "PKX",
    "Name": "POSCO Holdings Inc. American Depositary Shares (Each representing 1/4th of a share of Common Stock)"
  },
  {
    "Symbol": "PL",
    "Name": "Planet Labs PBC Class A Common Stock"
  },
  {
    "Symbol": "PLAB",
    "Name": "Photronics Inc. Common Stock"
  },
  {
    "Symbol": "PLAG",
    "Name": "Planet Green Holdings Corp. Common Stock"
  },
  {
    "Symbol": "PLAO",
    "Name": "Patria Latin American Opportunity Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PLAOU",
    "Name": "Patria Latin American Opportunity Acquisition Corp. Unit"
  },
  {
    "Symbol": "PLAY",
    "Name": "Dave & Buster's Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "PLBC",
    "Name": "Plumas Bancorp"
  },
  {
    "Symbol": "PLBY",
    "Name": "PLBY Group Inc. Common Stock"
  },
  {
    "Symbol": "PLCE",
    "Name": "Children's Place Inc. (The) Common Stock"
  },
  {
    "Symbol": "PLD",
    "Name": "Prologis Inc. Common Stock"
  },
  {
    "Symbol": "PLG",
    "Name": "Platinum Group Metals Ltd. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "PLL",
    "Name": "Piedmont Lithium Inc. Common Stock"
  },
  {
    "Symbol": "PLM",
    "Name": "Polymet Mining Corporation Ordinary Shares (Canada)"
  },
  {
    "Symbol": "PLMI",
    "Name": "Plum Acquisition Corp. I Class A Ordinary Share"
  },
  {
    "Symbol": "PLMIW",
    "Name": "Plum Acquisition Corp. I Warrant"
  },
  {
    "Symbol": "PLMR",
    "Name": "Palomar Holdings Inc. Common stock"
  },
  {
    "Symbol": "PLNT",
    "Name": "Planet Fitness Inc. Common Stock"
  },
  {
    "Symbol": "PLOW",
    "Name": "Douglas Dynamics Inc. Common Stock"
  },
  {
    "Symbol": "PLPC",
    "Name": "Preformed Line Products Company Common Stock"
  },
  {
    "Symbol": "PLRX",
    "Name": "Pliant Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PLSE",
    "Name": "Pulse Biosciences Inc Common Stock (DE)"
  },
  {
    "Symbol": "PLTK",
    "Name": "Playtika Holding Corp. Common Stock"
  },
  {
    "Symbol": "PLTN",
    "Name": "Plutonian Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "PLTNR",
    "Name": "Plutonian Acquisition Corp. Rights"
  },
  {
    "Symbol": "PLTNW",
    "Name": "Plutonian Acquisition Corp. Warrant"
  },
  {
    "Symbol": "PLTR",
    "Name": "Palantir Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "PLUG",
    "Name": "Plug Power Inc. Common Stock"
  },
  {
    "Symbol": "PLUR",
    "Name": "Pluri Inc. Common Stock"
  },
  {
    "Symbol": "PLUS",
    "Name": "ePlus inc. Common Stock"
  },
  {
    "Symbol": "PLX",
    "Name": "Protalix BioTherapeutics Inc. (DE) Common Stock"
  },
  {
    "Symbol": "PLXS",
    "Name": "Plexus Corp. Common Stock"
  },
  {
    "Symbol": "PLYA",
    "Name": "Playa Hotels & Resorts N.V. Ordinary Shares"
  },
  {
    "Symbol": "PLYM",
    "Name": "Plymouth Industrial REIT Inc. Common Stock"
  },
  {
    "Symbol": "PLYM^A",
    "Name": "Plymouth Industrial REIT Inc. 7.50% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "PM",
    "Name": "Philip Morris International Inc Common Stock"
  },
  {
    "Symbol": "PMCB",
    "Name": "PharmaCyte  Biotech Inc. Common Stock"
  },
  {
    "Symbol": "PMD",
    "Name": "Psychemedics Corporation"
  },
  {
    "Symbol": "PMF",
    "Name": "PIMCO Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "PMGM",
    "Name": "Priveterra Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "PMGMU",
    "Name": "Priveterra Acquisition Corp. Units"
  },
  {
    "Symbol": "PMGMW",
    "Name": "Priveterra Acquisition Corp. Warrant"
  },
  {
    "Symbol": "PML",
    "Name": "Pimco Municipal Income Fund II Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PMM",
    "Name": "Putnam Managed Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "PMN",
    "Name": "ProMIS Neurosciences Inc. Common Shares"
  },
  {
    "Symbol": "PMO",
    "Name": "Putnam Municipal Opportunities Trust Common Stock"
  },
  {
    "Symbol": "PMT",
    "Name": "PennyMac Mortgage Investment Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PMT^A",
    "Name": "PennyMac Mortgage Investment Trust 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PMT^B",
    "Name": "PennyMac Mortgage Investment Trust 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PMT^C",
    "Name": "PennyMac Mortgage Investment Trust 6.75% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "PMTS",
    "Name": "CPI Card Group Inc. Common Stock"
  },
  {
    "Symbol": "PMVP",
    "Name": "PMV Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PMX",
    "Name": "PIMCO Municipal Income Fund III Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PNAC",
    "Name": "Prime Number Acquisition I Corp. Class A Common Stock"
  },
  {
    "Symbol": "PNACR",
    "Name": "Prime Number Acquisition I Corp. Right"
  },
  {
    "Symbol": "PNBK",
    "Name": "Patriot National Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "PNC",
    "Name": "PNC Financial Services Group Inc. (The) Common Stock"
  },
  {
    "Symbol": "PNF",
    "Name": "PIMCO New York Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "PNFP",
    "Name": "Pinnacle Financial Partners Inc. Common Stock"
  },
  {
    "Symbol": "PNFPP",
    "Name": "Pinnacle Financial Partners Inc. Depositary shares of Pinnacle Financial Partners Inc. each representing a 1/40th Interest in a share of its 6.75% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series B"
  },
  {
    "Symbol": "PNI",
    "Name": "Pimco New York Municipal Income Fund II Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PNM",
    "Name": "PNM Resources Inc. (Holding Co.) Common Stock"
  },
  {
    "Symbol": "PNNT",
    "Name": "PennantPark Investment Corporation Common Stock"
  },
  {
    "Symbol": "PNR",
    "Name": "Pentair plc. Ordinary Share"
  },
  {
    "Symbol": "PNRG",
    "Name": "PrimeEnergy Resources Corporation Common Stock"
  },
  {
    "Symbol": "PNT",
    "Name": "POINT Biopharma Global Inc. Common Stock"
  },
  {
    "Symbol": "PNTG",
    "Name": "The Pennant Group Inc. Common Stock"
  },
  {
    "Symbol": "PNTM",
    "Name": "Pontem Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "PNW",
    "Name": "Pinnacle West Capital Corporation Common Stock"
  },
  {
    "Symbol": "POAI",
    "Name": "Predictive Oncology Inc. Common Stock"
  },
  {
    "Symbol": "POCI",
    "Name": "Precision Optics Corporation Inc. Common stock"
  },
  {
    "Symbol": "PODD",
    "Name": "Insulet Corporation Common Stock"
  },
  {
    "Symbol": "POET",
    "Name": "POET Technologies Inc. Common Shares"
  },
  {
    "Symbol": "POL",
    "Name": "Polished Inc. Common Stock"
  },
  {
    "Symbol": "POLA",
    "Name": "Polar Power Inc. Common Stock"
  },
  {
    "Symbol": "POOL",
    "Name": "Pool Corporation Common Stock"
  },
  {
    "Symbol": "POR",
    "Name": "Portland General Electric Co Common Stock"
  },
  {
    "Symbol": "PORT",
    "Name": "Southport Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "POST",
    "Name": "Post Holdings Inc. Common Stock"
  },
  {
    "Symbol": "POWI",
    "Name": "Power Integrations Inc. Common Stock"
  },
  {
    "Symbol": "POWL",
    "Name": "Powell Industries Inc. Common Stock"
  },
  {
    "Symbol": "POWW",
    "Name": "AMMO Inc. Common Stock"
  },
  {
    "Symbol": "POWWP",
    "Name": "AMMO Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "PPBI",
    "Name": "Pacific Premier Bancorp Inc"
  },
  {
    "Symbol": "PPBT",
    "Name": "Purple Biotech Ltd. American Depositary Shares"
  },
  {
    "Symbol": "PPC",
    "Name": "Pilgrim's Pride Corporation Common Stock"
  },
  {
    "Symbol": "PPG",
    "Name": "PPG Industries Inc. Common Stock"
  },
  {
    "Symbol": "PPHP",
    "Name": "PHP Ventures Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "PPHPW",
    "Name": "PHP Ventures Acquisition Corp. Warrants"
  },
  {
    "Symbol": "PPIH",
    "Name": "Perma-Pipe International Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PPL",
    "Name": "PPL Corporation Common Stock"
  },
  {
    "Symbol": "PPSI",
    "Name": "Pioneer Power Solutions Inc. Common Stock"
  },
  {
    "Symbol": "PPT",
    "Name": "Putnam Premier Income Trust Common Stock"
  },
  {
    "Symbol": "PPTA",
    "Name": "Perpetua Resources Corp. Common Shares"
  },
  {
    "Symbol": "PPYA",
    "Name": "Papaya Growth Opportunity Corp. I Class A Common Stock"
  },
  {
    "Symbol": "PPYAU",
    "Name": "Papaya Growth Opportunity Corp. I Unit"
  },
  {
    "Symbol": "PPYAW",
    "Name": "Papaya Growth Opportunity Corp. I Warrant"
  },
  {
    "Symbol": "PR",
    "Name": "Permian Resources Corporation Class A Common Stock"
  },
  {
    "Symbol": "PRA",
    "Name": "ProAssurance Corporation Common Stock"
  },
  {
    "Symbol": "PRAA",
    "Name": "PRA Group Inc. Common Stock"
  },
  {
    "Symbol": "PRAX",
    "Name": "Praxis Precision Medicines Inc. Common Stock"
  },
  {
    "Symbol": "PRCH",
    "Name": "Porch Group Inc. Common Stock"
  },
  {
    "Symbol": "PRCT",
    "Name": "PROCEPT BioRobotics Corporation Common Stock"
  },
  {
    "Symbol": "PRDO",
    "Name": "Perdoceo Education Corporation Common Stock"
  },
  {
    "Symbol": "PRDS",
    "Name": "Pardes Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "PRE",
    "Name": "Prenetics Global Limited Class A Ordinary Share"
  },
  {
    "Symbol": "PRE^J",
    "Name": "PartnerRe Ltd. 4.875% Fixed Rate Non-Cumulative Redeemable Preferred Shares Series J"
  },
  {
    "Symbol": "PRENW",
    "Name": "Prenetics Global Limited Warrant"
  },
  {
    "Symbol": "PRFT",
    "Name": "Perficient Inc. Common Stock"
  },
  {
    "Symbol": "PRFX",
    "Name": "PainReform Ltd. Ordinary Shares"
  },
  {
    "Symbol": "PRG",
    "Name": "PROG Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PRGO",
    "Name": "Perrigo Company plc Ordinary Shares"
  },
  {
    "Symbol": "PRGS",
    "Name": "Progress Software Corporation Common Stock (DE)"
  },
  {
    "Symbol": "PRH",
    "Name": "Prudential Financial Inc. 5.950% Junior Subordinated Notes due 2062"
  },
  {
    "Symbol": "PRI",
    "Name": "Primerica Inc. Common Stock"
  },
  {
    "Symbol": "PRIF^D",
    "Name": "Priority Income Fund Inc. 7.00% Series D Term Preferred Stock due 2029"
  },
  {
    "Symbol": "PRIF^F",
    "Name": "Priority Income Fund Inc. 6.625% Series F Term Preferred Stock due 2027"
  },
  {
    "Symbol": "PRIF^G",
    "Name": "Priority Income Fund Inc. 6.25% Series G Preferred Stock Due 2026"
  },
  {
    "Symbol": "PRIF^H",
    "Name": "Priority Income Fund Inc. 6.00% Series H Term Preferred Stock due 2026"
  },
  {
    "Symbol": "PRIF^I",
    "Name": "Priority Income Fund Inc. 6.125% Series I Term Preferred Stock due 2028"
  },
  {
    "Symbol": "PRIF^J",
    "Name": "Priority Income Fund Inc. 6.000% Series J Term Preferred Stock due 2028"
  },
  {
    "Symbol": "PRIF^K",
    "Name": "Priority Income Fund Inc. 7.000% Series K Cumulative Preferred Stock"
  },
  {
    "Symbol": "PRIF^L",
    "Name": "Priority Income Fund Inc. 6.375% Series L Term Preferred Stock Due 2029"
  },
  {
    "Symbol": "PRIM",
    "Name": "Primoris Services Corporation Common Stock"
  },
  {
    "Symbol": "PRK",
    "Name": "Park National Corporation Common Stock"
  },
  {
    "Symbol": "PRLB",
    "Name": "Proto Labs Inc. Common stock"
  },
  {
    "Symbol": "PRLD",
    "Name": "Prelude Therapeutics Incorporated Common Stock"
  },
  {
    "Symbol": "PRLH",
    "Name": "Pearl Holdings Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "PRLHU",
    "Name": "Pearl Holdings Acquisition Corp Unit"
  },
  {
    "Symbol": "PRLHW",
    "Name": "Pearl Holdings Acquisition Corp Warrant"
  },
  {
    "Symbol": "PRM",
    "Name": "Perimeter Solutions SA Ordinary Shares"
  },
  {
    "Symbol": "PRME",
    "Name": "Prime Medicine Inc. Common Stock"
  },
  {
    "Symbol": "PRMW",
    "Name": "Primo Water Corporation Common Stock"
  },
  {
    "Symbol": "PRO",
    "Name": "PROS Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PROC",
    "Name": "Procaps Group S.A. Ordinary Shares"
  },
  {
    "Symbol": "PROF",
    "Name": "Profound Medical Corp. Common Stock"
  },
  {
    "Symbol": "PROK",
    "Name": "ProKidney Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PROV",
    "Name": "Provident Financial Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PRPC",
    "Name": "CC Neuberger Principal Holdings III Class A Ordinary Shares"
  },
  {
    "Symbol": "PRPH",
    "Name": "ProPhase Labs Inc. Common Stock (DE)"
  },
  {
    "Symbol": "PRPL",
    "Name": "Purple Innovation Inc. Common Stock"
  },
  {
    "Symbol": "PRPO",
    "Name": "Precipio Inc.  Common Stock"
  },
  {
    "Symbol": "PRQR",
    "Name": "ProQR Therapeutics N.V. Ordinary Shares"
  },
  {
    "Symbol": "PRS",
    "Name": "Prudential Financial Inc. 5.625% Junior Subordinated Notes due 2058"
  },
  {
    "Symbol": "PRSO",
    "Name": "Peraso Inc. Common Stock"
  },
  {
    "Symbol": "PRSR",
    "Name": "Prospector Capital Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PRSRU",
    "Name": "Prospector Capital Corp. Unit"
  },
  {
    "Symbol": "PRSRW",
    "Name": "Prospector Capital Corp. Warrants"
  },
  {
    "Symbol": "PRST",
    "Name": "Presto Automation Inc. Common Stock"
  },
  {
    "Symbol": "PRSTW",
    "Name": "Presto Automation Inc. Warrant"
  },
  {
    "Symbol": "PRT",
    "Name": "PermRock Royalty Trust Trust Units"
  },
  {
    "Symbol": "PRTA",
    "Name": "Prothena Corporation plc Ordinary Shares"
  },
  {
    "Symbol": "PRTC",
    "Name": "PureTech Health plc American Depositary Shares"
  },
  {
    "Symbol": "PRTG",
    "Name": "Portage Biotech Inc. Common Stock"
  },
  {
    "Symbol": "PRTH",
    "Name": "Priority Technology Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PRTK",
    "Name": "Paratek Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PRTS",
    "Name": "CarParts.com Inc. Common Stock"
  },
  {
    "Symbol": "PRU",
    "Name": "Prudential Financial Inc. Common Stock"
  },
  {
    "Symbol": "PRVA",
    "Name": "Privia Health Group Inc. Common Stock"
  },
  {
    "Symbol": "PSA",
    "Name": "Public Storage Common Stock"
  },
  {
    "Symbol": "PSA^F",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 5.15% Cumulative Preferred Share of Beneficial Interest Series F par value $0.01 per share"
  },
  {
    "Symbol": "PSA^G",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 5.05% Cumulative Preferred Share of Beneficial Interest Series G"
  },
  {
    "Symbol": "PSA^H",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a  5.60% Cumulative Preferred  Share of Beneficial Interest Series H"
  },
  {
    "Symbol": "PSA^I",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.875% Cumulative Preferred Share of Beneficial Interest Series I par value $0.01 per share"
  },
  {
    "Symbol": "PSA^J",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.700% Cumulative Preferred Share of Beneficial Interest Series J par value $0.01 per share"
  },
  {
    "Symbol": "PSA^K",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.75% Cumulative Preferred Share of Beneficial Interest Series K"
  },
  {
    "Symbol": "PSA^L",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.625% Cumulative Preferred Share of Beneficial Interest Series L par value $0.01 per share"
  },
  {
    "Symbol": "PSA^M",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.125% Cumulative Preferred Share of Beneficial Interest Series M"
  },
  {
    "Symbol": "PSA^N",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 3.875% Cumulative Preferred Share of Beneficial Interest Series N"
  },
  {
    "Symbol": "PSA^O",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 3.900% Cumulative Preferred Share of Beneficial Interest Series O"
  },
  {
    "Symbol": "PSA^P",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.000% Cumulative Preferred Share of Bene cial Interest Series P"
  },
  {
    "Symbol": "PSA^Q",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 3.950% Cumulative Preferred Share of Beneficial Interest Series Q par value $0.01 per share"
  },
  {
    "Symbol": "PSA^R",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.00% Cumulative Preferred Share of Bene cial Interest Series R"
  },
  {
    "Symbol": "PSA^S",
    "Name": "Public Storage Depositary Shares Each Representing 1/1000 of a 4.100% Cumulative Preferred Share of Beneficial Interest Series S"
  },
  {
    "Symbol": "PSEC",
    "Name": "Prospect Capital Corporation Common Stock"
  },
  {
    "Symbol": "PSEC^A",
    "Name": "Prospect Capital Corporation 5.35% Series A Fixed Rate Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "PSF",
    "Name": "Cohen & Steers Select Preferred and Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "PSFE",
    "Name": "Paysafe Limited Common Shares"
  },
  {
    "Symbol": "PSHG",
    "Name": "Performance Shipping Inc. Common Shares"
  },
  {
    "Symbol": "PSMT",
    "Name": "PriceSmart Inc. Common Stock"
  },
  {
    "Symbol": "PSN",
    "Name": "Parsons Corporation Common Stock"
  },
  {
    "Symbol": "PSNL",
    "Name": "Personalis Inc. Common Stock"
  },
  {
    "Symbol": "PSNY",
    "Name": "Polestar Automotive Holding UK PLC Class A ADS"
  },
  {
    "Symbol": "PSNYW",
    "Name": "Polestar Automotive Holding UK PLC Class C-1 ADS (ADW)"
  },
  {
    "Symbol": "PSO",
    "Name": "Pearson Plc Common Stock"
  },
  {
    "Symbol": "PSPC",
    "Name": "Post Holdings Partnering Corporation Series A Common Stock"
  },
  {
    "Symbol": "PSTG",
    "Name": "Pure Storage Inc. Class A Common Stock"
  },
  {
    "Symbol": "PSTL",
    "Name": "Postal Realty Trust Inc. Class A Common Stock"
  },
  {
    "Symbol": "PSTV",
    "Name": "PLUS THERAPEUTICS Inc. Common Stock"
  },
  {
    "Symbol": "PSTX",
    "Name": "Poseida Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PSX",
    "Name": "Phillips 66 Common Stock"
  },
  {
    "Symbol": "PT",
    "Name": "Pintec Technology Holdings Limited American Depositary Shares"
  },
  {
    "Symbol": "PTA",
    "Name": "Cohen & Steers Tax-Advantaged Preferred Securities and Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PTC",
    "Name": "PTC Inc. Common Stock"
  },
  {
    "Symbol": "PTCT",
    "Name": "PTC Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PTE",
    "Name": "PolarityTE Inc. Common Stock"
  },
  {
    "Symbol": "PTEN",
    "Name": "Patterson-UTI Energy Inc. Common Stock"
  },
  {
    "Symbol": "PTGX",
    "Name": "Protagonist Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PTHR",
    "Name": "Pono Capital Three Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "PTHRU",
    "Name": "Pono Capital Three Inc. Unit"
  },
  {
    "Symbol": "PTHRW",
    "Name": "Pono Capital Three Inc. Warrant"
  },
  {
    "Symbol": "PTIX",
    "Name": "Protagenic Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "PTIXW",
    "Name": "Protagenic Therapeutics Inc. Warrant"
  },
  {
    "Symbol": "PTLO",
    "Name": "Portillo's Inc. Class A Common Stock"
  },
  {
    "Symbol": "PTMN",
    "Name": "Portman Ridge Finance Corporation Common Stock"
  },
  {
    "Symbol": "PTN",
    "Name": "Palatin Technologies Inc. Common Stock"
  },
  {
    "Symbol": "PTON",
    "Name": "Peloton Interactive Inc. Class A Common Stock"
  },
  {
    "Symbol": "PTPI",
    "Name": "Petros Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "PTRA",
    "Name": "Proterra Inc. Common Stock"
  },
  {
    "Symbol": "PTRS",
    "Name": "Partners Bancorp Common Stock"
  },
  {
    "Symbol": "PTSI",
    "Name": "P.A.M. Transportation Services Inc. Common Stock"
  },
  {
    "Symbol": "PTVE",
    "Name": "Pactiv Evergreen Inc. Common stock"
  },
  {
    "Symbol": "PTWO",
    "Name": "Pono Capital Two Inc. Class A Common Stock"
  },
  {
    "Symbol": "PTWOU",
    "Name": "Pono Capital Two Inc. Unit"
  },
  {
    "Symbol": "PTWOW",
    "Name": "Pono Capital Two Inc. Warrants"
  },
  {
    "Symbol": "PTY",
    "Name": "Pimco Corporate & Income Opportunity Fund"
  },
  {
    "Symbol": "PUBM",
    "Name": "PubMatic Inc. Class A Common Stock"
  },
  {
    "Symbol": "PUCK",
    "Name": "Goal Acquisitions Corp. Common Stock"
  },
  {
    "Symbol": "PUCKW",
    "Name": "Goal Acquisitions Corp. Warrant"
  },
  {
    "Symbol": "PUK",
    "Name": "Prudential Public Limited Company Common Stock"
  },
  {
    "Symbol": "PULM",
    "Name": "Pulmatrix Inc. Common Stock"
  },
  {
    "Symbol": "PUMP",
    "Name": "ProPetro Holding Corp. Common Stock"
  },
  {
    "Symbol": "PUYI",
    "Name": "Puyi Inc. American Depository Shares"
  },
  {
    "Symbol": "PVBC",
    "Name": "Provident Bancorp Inc. (MD) Common Stock"
  },
  {
    "Symbol": "PVH",
    "Name": "PVH Corp. Common Stock"
  },
  {
    "Symbol": "PVL",
    "Name": "Permianville Royalty Trust Trust Units"
  },
  {
    "Symbol": "PW",
    "Name": "Power REIT (MD) Common Stock"
  },
  {
    "Symbol": "PW^A",
    "Name": "Power REIT 7.75% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "PWFL",
    "Name": "PowerFleet Inc. Common Stock"
  },
  {
    "Symbol": "PWOD",
    "Name": "Penns Woods Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "PWP",
    "Name": "Perella Weinberg Partners Class A Common Stock"
  },
  {
    "Symbol": "PWR",
    "Name": "Quanta Services Inc. Common Stock"
  },
  {
    "Symbol": "PWSC",
    "Name": "PowerSchool Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "PWUP",
    "Name": "PowerUp Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "PWUPU",
    "Name": "PowerUp Acquisition Corp. Unit"
  },
  {
    "Symbol": "PWUPW",
    "Name": "PowerUp Acquisition Corp. Warrant"
  },
  {
    "Symbol": "PX",
    "Name": "P10 Inc. Class A Common Stock"
  },
  {
    "Symbol": "PXD",
    "Name": "Pioneer Natural Resources Company Common Stock"
  },
  {
    "Symbol": "PXLW",
    "Name": "Pixelworks Inc.  Common Stock"
  },
  {
    "Symbol": "PXMD",
    "Name": "PaxMedica Inc. Common Stock"
  },
  {
    "Symbol": "PXS",
    "Name": "Pyxis Tankers Inc. Common Stock"
  },
  {
    "Symbol": "PXSAP",
    "Name": "Pyxis Tankers Inc. 7.75% Series A Cumulative Convertible Preferred Shares"
  },
  {
    "Symbol": "PXSAW",
    "Name": "Pyxis Tankers Inc. Warrant"
  },
  {
    "Symbol": "PYCR",
    "Name": "Paycor HCM Inc. Common Stock"
  },
  {
    "Symbol": "PYN",
    "Name": "PIMCO New York Municipal Income Fund III Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PYPD",
    "Name": "PolyPid Ltd. Ordinary Shares"
  },
  {
    "Symbol": "PYPL",
    "Name": "PayPal Holdings Inc. Common Stock"
  },
  {
    "Symbol": "PYR",
    "Name": "PyroGenesis Canada Inc. Common Shares"
  },
  {
    "Symbol": "PYT",
    "Name": "PPlus Tr GSC-2 Tr Ctf Fltg Rate"
  },
  {
    "Symbol": "PYXS",
    "Name": "Pyxis Oncology Inc. Common Stock"
  },
  {
    "Symbol": "PZC",
    "Name": "PIMCO California Municipal Income Fund III Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "PZG",
    "Name": "Paramount Gold Nevada Corp. Common Stock"
  },
  {
    "Symbol": "PZZA",
    "Name": "Papa John's International Inc. Common Stock"
  },
  {
    "Symbol": "QBTS",
    "Name": "D-Wave Quantum Inc. Common Shares"
  },
  {
    "Symbol": "QCOM",
    "Name": "QUALCOMM Incorporated Common Stock"
  },
  {
    "Symbol": "QCRH",
    "Name": "QCR Holdings Inc. Common Stock"
  },
  {
    "Symbol": "QD",
    "Name": "Qudian Inc. American Depositary Shares each representing one Class A Ordinary Share"
  },
  {
    "Symbol": "QDEL",
    "Name": "QuidelOrtho Corporation Common Stock"
  },
  {
    "Symbol": "QDROU",
    "Name": "Quadro Acquisition One Corp. Unit"
  },
  {
    "Symbol": "QDROW",
    "Name": "Quadro Acquisition One Corp.  Warrant"
  },
  {
    "Symbol": "QFIN",
    "Name": "360 DigiTech Inc. American Depositary Shares"
  },
  {
    "Symbol": "QFTA",
    "Name": "Quantum FinTech Acquisition Corporation Common Stock"
  },
  {
    "Symbol": "QGEN",
    "Name": "Qiagen N.V. Common Shares"
  },
  {
    "Symbol": "QH",
    "Name": "Quhuo Limited American Depository Shares"
  },
  {
    "Symbol": "QIPT",
    "Name": "Quipt Home Medical Corp. Common Shares"
  },
  {
    "Symbol": "QLGN",
    "Name": "Qualigen Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "QLI",
    "Name": "Qilian International Holding Group Ltd. Ordinary Shares"
  },
  {
    "Symbol": "QLYS",
    "Name": "Qualys Inc. Common Stock"
  },
  {
    "Symbol": "QMCO",
    "Name": "Quantum Corporation Common Stock"
  },
  {
    "Symbol": "QNCX",
    "Name": "Quince Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "QNRX",
    "Name": "Quoin Pharmaceuticals Ltd. American Depositary Shares"
  },
  {
    "Symbol": "QNST",
    "Name": "QuinStreet Inc. Common Stock"
  },
  {
    "Symbol": "QOMO",
    "Name": "Qomolangma Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "QOMOU",
    "Name": "Qomolangma Acquisition Corp. Unit"
  },
  {
    "Symbol": "QQQX",
    "Name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "QRHC",
    "Name": "Quest Resource Holding Corporation Common Stock"
  },
  {
    "Symbol": "QRTEA",
    "Name": "Qurate Retail Inc. Series A Common Stock"
  },
  {
    "Symbol": "QRTEB",
    "Name": "Qurate Retail Inc. Series B Common Stock"
  },
  {
    "Symbol": "QRTEP",
    "Name": "Qurate Retail Inc. 8.0% Fixed Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "QRVO",
    "Name": "Qorvo Inc. Common Stock"
  },
  {
    "Symbol": "QS",
    "Name": "QuantumScape Corporation Class A Common Stock"
  },
  {
    "Symbol": "QSG",
    "Name": "QuantaSing Group Limited American Depositary Shares"
  },
  {
    "Symbol": "QSI",
    "Name": "Quantum-Si Incorporated Class A Common Stock"
  },
  {
    "Symbol": "QSIAW",
    "Name": "Quantum-Si Incorporated Warrant"
  },
  {
    "Symbol": "QSR",
    "Name": "Restaurant Brands International Inc. Common Shares"
  },
  {
    "Symbol": "QTEK",
    "Name": "QualTek Services Inc. Class A Common Stock"
  },
  {
    "Symbol": "QTEKW",
    "Name": "QualTek Services Inc. Warrant"
  },
  {
    "Symbol": "QTRX",
    "Name": "Quanterix Corporation Common Stock"
  },
  {
    "Symbol": "QTWO",
    "Name": "Q2 Holdings Inc. Common Stock"
  },
  {
    "Symbol": "QUAD",
    "Name": "Quad Graphics Inc Class A Common Stock"
  },
  {
    "Symbol": "QUBT",
    "Name": "Quantum Computing Inc. Common Stock"
  },
  {
    "Symbol": "QUIK",
    "Name": "QuickLogic Corporation Common Stock"
  },
  {
    "Symbol": "QUOT",
    "Name": "Quotient Technology Inc. Common Stock"
  },
  {
    "Symbol": "QURE",
    "Name": "uniQure N.V. Ordinary Shares"
  },
  {
    "Symbol": "QVCC",
    "Name": "QVC Inc. 6.250% Senior Secured Notes due 2068"
  },
  {
    "Symbol": "QVCD",
    "Name": "QVC Inc. 6.375% Senior Secured Notes due 2067"
  },
  {
    "Symbol": "R",
    "Name": "Ryder System Inc. Common Stock"
  },
  {
    "Symbol": "RA",
    "Name": "Brookfield Real Assets Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "RAAS",
    "Name": "Cloopen Group Holding Limited American Depositary Shares (each representing six (6) Class A Ordinary Shares)"
  },
  {
    "Symbol": "RACE",
    "Name": "Ferrari N.V. Common Shares"
  },
  {
    "Symbol": "RAD",
    "Name": "Rite Aid Corporation Common Stock"
  },
  {
    "Symbol": "RADI",
    "Name": "Radius Global Infrastructure Inc. Class A Common Stock"
  },
  {
    "Symbol": "RAIL",
    "Name": "FreightCar America Inc. Common Stock"
  },
  {
    "Symbol": "RAIN",
    "Name": "Rain Oncology Inc. Common Stock"
  },
  {
    "Symbol": "RAMP",
    "Name": "LiveRamp Holdings Inc. Common Stock"
  },
  {
    "Symbol": "RAND",
    "Name": "Rand Capital Corporation Common Stock"
  },
  {
    "Symbol": "RANI",
    "Name": "Rani Therapeutics Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "RAPT",
    "Name": "RAPT Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RARE",
    "Name": "Ultragenyx Pharmaceutical Inc. Common Stock"
  },
  {
    "Symbol": "RAVE",
    "Name": "Rave Restaurant Group Inc. Common Stock"
  },
  {
    "Symbol": "RAYA",
    "Name": "Erayak Power Solution Group Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "RBA",
    "Name": "Ritchie Bros. Auctioneers Incorporated Common Stock"
  },
  {
    "Symbol": "RBB",
    "Name": "RBB Bancorp Common Stock"
  },
  {
    "Symbol": "RBBN",
    "Name": "Ribbon Communications Inc. Common Stock"
  },
  {
    "Symbol": "RBC",
    "Name": "RBC Bearings Incorporated Common Stock"
  },
  {
    "Symbol": "RBCAA",
    "Name": "Republic Bancorp Inc. Class A Common Stock"
  },
  {
    "Symbol": "RBCP",
    "Name": "RBC Bearings Incorporated 5.00% Series A Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "RBKB",
    "Name": "Rhinebeck Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "RBLX",
    "Name": "Roblox Corporation Class A Common Stock"
  },
  {
    "Symbol": "RBOT",
    "Name": "Vicarious Surgical Inc. Class A Common Stock"
  },
  {
    "Symbol": "RBT",
    "Name": "Rubicon Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "RC",
    "Name": "Ready Capital Corproation Common Stock"
  },
  {
    "Symbol": "RC^C",
    "Name": "Ready Capital Corporation 6.25% Series C Cumulative Convertible Preferred Stock"
  },
  {
    "Symbol": "RC^E",
    "Name": "Ready Capital Corporation 6.50% Series E Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RCA",
    "Name": "Ready Capital Corporation 7.00% Convertible Senior Notes due 2023"
  },
  {
    "Symbol": "RCAC",
    "Name": "Revelstone Capital Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "RCACU",
    "Name": "Revelstone Capital Acquisition Corp. Unit"
  },
  {
    "Symbol": "RCACW",
    "Name": "Revelstone Capital Acquisition Corp. Warrant"
  },
  {
    "Symbol": "RCAT",
    "Name": "Red Cat Holdings Inc. Common Stock"
  },
  {
    "Symbol": "RCB",
    "Name": "Ready Capital Corporation 6.20% Senior Notes due 2026"
  },
  {
    "Symbol": "RCC",
    "Name": "Ready Capital Corporation 5.75% Senior Notes due 2026"
  },
  {
    "Symbol": "RCEL",
    "Name": "Avita Medical Inc. Common Stock"
  },
  {
    "Symbol": "RCFA",
    "Name": "RCF Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "RCG",
    "Name": "RENN Fund Inc Common Stock"
  },
  {
    "Symbol": "RCI",
    "Name": "Rogers Communication Inc. Common Stock"
  },
  {
    "Symbol": "RCKT",
    "Name": "Rocket Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "RCKTW",
    "Name": "Rocket Pharmaceuticals Inc. Warrant"
  },
  {
    "Symbol": "RCKY",
    "Name": "Rocky Brands Inc. Common Stock"
  },
  {
    "Symbol": "RCL",
    "Name": "D/B/A Royal Caribbean Cruises Ltd. Common Stock"
  },
  {
    "Symbol": "RCLF",
    "Name": "Rosecliff Acquisition Corp I Class A Common Stock"
  },
  {
    "Symbol": "RCLFU",
    "Name": "Rosecliff Acquisition Corp I Unit"
  },
  {
    "Symbol": "RCLFW",
    "Name": "Rosecliff Acquisition Corp I Warrants"
  },
  {
    "Symbol": "RCM",
    "Name": "R1 RCM Inc. Common Stock"
  },
  {
    "Symbol": "RCMT",
    "Name": "RCM Technologies Inc. Common Stock"
  },
  {
    "Symbol": "RCON",
    "Name": "Recon Technology Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "RCRT",
    "Name": "Recruiter.com Group Inc. Common Stock"
  },
  {
    "Symbol": "RCS",
    "Name": "PIMCO Strategic Income Fund Inc."
  },
  {
    "Symbol": "RCUS",
    "Name": "Arcus Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "RDCM",
    "Name": "Radcom Ltd. Ordinary Shares"
  },
  {
    "Symbol": "RDFN",
    "Name": "Redfin Corporation Common Stock"
  },
  {
    "Symbol": "RDHL",
    "Name": "Redhill Biopharma Ltd. American Depositary Shares"
  },
  {
    "Symbol": "RDI",
    "Name": "Reading International Inc Class A Common Stock"
  },
  {
    "Symbol": "RDIB",
    "Name": "Reading International Inc Class B Common Stock"
  },
  {
    "Symbol": "RDN",
    "Name": "Radian Group Inc. Common Stock"
  },
  {
    "Symbol": "RDNT",
    "Name": "RadNet Inc. Common Stock"
  },
  {
    "Symbol": "RDVT",
    "Name": "Red Violet Inc. Common Stock"
  },
  {
    "Symbol": "RDW",
    "Name": "Redwire Corporation Common Stock"
  },
  {
    "Symbol": "RDWR",
    "Name": "Radware Ltd. Ordinary Shares"
  },
  {
    "Symbol": "RDY",
    "Name": "Dr. Reddy's Laboratories Ltd Common Stock"
  },
  {
    "Symbol": "RE",
    "Name": "Everest Re Group Ltd. Common Stock"
  },
  {
    "Symbol": "REAL",
    "Name": "The RealReal Inc. Common Stock"
  },
  {
    "Symbol": "REAX",
    "Name": "The Real Brokerage Inc. Common Shares"
  },
  {
    "Symbol": "REBN",
    "Name": "Reborn Coffee Inc. Common Stock"
  },
  {
    "Symbol": "REE",
    "Name": "REE Automotive Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "REFI",
    "Name": "Chicago Atlantic Real Estate Finance Inc. Common Stock"
  },
  {
    "Symbol": "REFR",
    "Name": "Research Frontiers Incorporated Common Stock"
  },
  {
    "Symbol": "REG",
    "Name": "Regency Centers Corporation Common Stock"
  },
  {
    "Symbol": "REGN",
    "Name": "Regeneron Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "REI",
    "Name": "Ring Energy Inc. Common Stock"
  },
  {
    "Symbol": "REKR",
    "Name": "Rekor Systems Inc. Common Stock"
  },
  {
    "Symbol": "RELI",
    "Name": "Reliance Global Group Inc. Common Stock"
  },
  {
    "Symbol": "RELIW",
    "Name": "Reliance Global Group Inc. Series A Warrants"
  },
  {
    "Symbol": "RELL",
    "Name": "Richardson Electronics Ltd. Common Stock"
  },
  {
    "Symbol": "RELX",
    "Name": "RELX PLC PLC American Depositary Shares (Each representing One Ordinary Share)"
  },
  {
    "Symbol": "RELY",
    "Name": "Remitly Global Inc. Common Stock"
  },
  {
    "Symbol": "RENE",
    "Name": "Cartesian Growth Corporation II Class A Ordinary Shares"
  },
  {
    "Symbol": "RENEU",
    "Name": "Cartesian Growth Corporation II Unit"
  },
  {
    "Symbol": "RENN",
    "Name": "Renren Inc. American Depositary Shares each representing fifteen Class A ordinary shares"
  },
  {
    "Symbol": "RENT",
    "Name": "Rent the Runway Inc. Class A Common Stock"
  },
  {
    "Symbol": "REPL",
    "Name": "Replimune Group Inc. Common Stock"
  },
  {
    "Symbol": "REPX",
    "Name": "Riley Exploration Permian Inc. Common Stock"
  },
  {
    "Symbol": "RERE",
    "Name": "ATRenew Inc. American Depositary Shares (every three of which representing two Class A ordinary shares)"
  },
  {
    "Symbol": "RES",
    "Name": "RPC Inc. Common Stock"
  },
  {
    "Symbol": "RETA",
    "Name": "Reata Pharmaceuticals Inc. Class A Common Stock"
  },
  {
    "Symbol": "RETO",
    "Name": "ReTo Eco-Solutions Inc. Common Shares"
  },
  {
    "Symbol": "REUN",
    "Name": "Reunion Neuroscience Inc. Common Shares"
  },
  {
    "Symbol": "REVB",
    "Name": "Revelation Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "REVBW",
    "Name": "Revelation Biosciences Inc. Warrant"
  },
  {
    "Symbol": "REVG",
    "Name": "REV Group Inc. Common Stock"
  },
  {
    "Symbol": "REX",
    "Name": "REX American Resources Corporation"
  },
  {
    "Symbol": "REXR",
    "Name": "Rexford Industrial Realty Inc. Common Stock"
  },
  {
    "Symbol": "REXR^B",
    "Name": "Rexford Industrial Realty Inc. 5.875% Series B Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "REXR^C",
    "Name": "Rexford Industrial Realty Inc. 5.625% Series C Cumulative Redeemable Preferred Stock par value $0.01 per share"
  },
  {
    "Symbol": "REYN",
    "Name": "Reynolds Consumer Products Inc. Common Stock"
  },
  {
    "Symbol": "REZI",
    "Name": "Resideo Technologies Inc. Common Stock"
  },
  {
    "Symbol": "RF",
    "Name": "Regions Financial Corporation Common Stock"
  },
  {
    "Symbol": "RF^B",
    "Name": "Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series B"
  },
  {
    "Symbol": "RF^C",
    "Name": "Regions Financial Corporation Depositary Shares each Representing a 1/40th Interest in a  Share of 5.700% Fixed-to-Floating Rate Non-Cumulative  Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "RF^E",
    "Name": "Regions Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.45% Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "RFAC",
    "Name": "RF Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "RFACR",
    "Name": "RF Acquisition Corp. Rights"
  },
  {
    "Symbol": "RFI",
    "Name": "Cohen & Steers Total Return Realty Fund Inc. Common Stock"
  },
  {
    "Symbol": "RFIL",
    "Name": "RF Industries Ltd. Common Stock"
  },
  {
    "Symbol": "RFL",
    "Name": "Rafael Holdings Inc. Class B Common Stock"
  },
  {
    "Symbol": "RFM",
    "Name": "RiverNorth Flexible Municipal Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "RFMZ",
    "Name": "RiverNorth Flexible Municipal Income Fund II Inc. Common Stock"
  },
  {
    "Symbol": "RGA",
    "Name": "Reinsurance Group of America Incorporated Common Stock"
  },
  {
    "Symbol": "RGC",
    "Name": "Regencell Bioscience Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "RGCO",
    "Name": "RGC Resources Inc. Common Stock"
  },
  {
    "Symbol": "RGEN",
    "Name": "Repligen Corporation Common Stock"
  },
  {
    "Symbol": "RGF",
    "Name": "The Real Good Food Company Inc. Class A Common Stock"
  },
  {
    "Symbol": "RGLD",
    "Name": "Royal Gold Inc. Common Stock"
  },
  {
    "Symbol": "RGLS",
    "Name": "Regulus Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RGNX",
    "Name": "REGENXBIO Inc. Common Stock"
  },
  {
    "Symbol": "RGP",
    "Name": "Resources Connection Inc. Common Stock"
  },
  {
    "Symbol": "RGR",
    "Name": "Sturm Ruger & Company Inc. Common Stock"
  },
  {
    "Symbol": "RGS",
    "Name": "Regis Corporation Common Stock"
  },
  {
    "Symbol": "RGT",
    "Name": "Royce Global Value Trust Inc. Common Stock"
  },
  {
    "Symbol": "RGTI",
    "Name": "Rigetti Computing Inc. Common Stock"
  },
  {
    "Symbol": "RGTIW",
    "Name": "Rigetti Computing Inc. Warrants"
  },
  {
    "Symbol": "RH",
    "Name": "RH Common Stock"
  },
  {
    "Symbol": "RHE",
    "Name": "Regional Health Properties Inc. Common Stock"
  },
  {
    "Symbol": "RHI",
    "Name": "Robert Half International Inc. Common Stock"
  },
  {
    "Symbol": "RHP",
    "Name": "Ryman Hospitality Properties Inc. (REIT)"
  },
  {
    "Symbol": "RIBT",
    "Name": "RiceBran Technologies Common Stock"
  },
  {
    "Symbol": "RICK",
    "Name": "RCI Hospitality Holdings Inc. Common Stock"
  },
  {
    "Symbol": "RIDE",
    "Name": "Lordstown Motors Corp. Class A Common Stock"
  },
  {
    "Symbol": "RIG",
    "Name": "Transocean Ltd (Switzerland) Common Stock"
  },
  {
    "Symbol": "RIGL",
    "Name": "Rigel Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "RILY",
    "Name": "B. Riley Financial Inc. Common Stock"
  },
  {
    "Symbol": "RILYG",
    "Name": "B. Riley Financial Inc. 5.00% Senior Notes due 2026"
  },
  {
    "Symbol": "RILYK",
    "Name": "B. Riley Financial Inc. 5.50% Senior Notes Due 2026"
  },
  {
    "Symbol": "RILYL",
    "Name": "B. Riley Financial Inc. Depositary Shares each representing 1/1000th in a share of 7.375% Series B Cumulative Perpetual Preferred Stock par value $0.0001"
  },
  {
    "Symbol": "RILYM",
    "Name": "B. Riley Financial Inc. 6.375% Senior Notes due 2025"
  },
  {
    "Symbol": "RILYN",
    "Name": "B. Riley Financial Inc. 6.50% Senior Notes Due 2026"
  },
  {
    "Symbol": "RILYO",
    "Name": "B. Riley Financial Inc. 6.75% Senior Notes due 2024"
  },
  {
    "Symbol": "RILYP",
    "Name": "B. Riley Financial Inc. Depositary Shares each representing a 1/1000th fractional interest in a share of Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "RILYT",
    "Name": "B. Riley Financial Inc. 6.00% Senior Notes Due 2028"
  },
  {
    "Symbol": "RILYZ",
    "Name": "B. Riley Financial Inc. 5.25% Senior Notes due 2028"
  },
  {
    "Symbol": "RIO",
    "Name": "Rio Tinto Plc Common Stock"
  },
  {
    "Symbol": "RIOT",
    "Name": "Riot Platforms Inc. Common Stock"
  },
  {
    "Symbol": "RITM",
    "Name": "Rithm Capital Corp. Common Stock"
  },
  {
    "Symbol": "RITM^A",
    "Name": "Rithm Capital Corp. 7.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RITM^B",
    "Name": "Rithm Capital Corp. 7.125% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RITM^C",
    "Name": "Rithm Capital Corp. 6.375% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RITM^D",
    "Name": "Rithm Capital Corp. 7.00% Fixed-Rate Reset Series D Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RIV",
    "Name": "RiverNorth Opportunities Fund Inc. Common Stock"
  },
  {
    "Symbol": "RIV^A",
    "Name": "RiverNorth Opportunities Fund Inc. 6.00% Series A Perpetual Preferred Stock"
  },
  {
    "Symbol": "RIVN",
    "Name": "Rivian Automotive Inc. Class A Common Stock"
  },
  {
    "Symbol": "RJF",
    "Name": "Raymond James Financial Inc. Common Stock"
  },
  {
    "Symbol": "RJF^B",
    "Name": "Raymond James Financial Inc. Depositary Shares each representing a 1/40th interest in a share of 6.375% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "RKDA",
    "Name": "Arcadia Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "RKLB",
    "Name": "Rocket Lab USA Inc. Common Stock"
  },
  {
    "Symbol": "RKT",
    "Name": "Rocket Companies Inc. Class A Common Stock"
  },
  {
    "Symbol": "RL",
    "Name": "Ralph Lauren Corporation Common Stock"
  },
  {
    "Symbol": "RLAY",
    "Name": "Relay Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RLGT",
    "Name": "Radiant Logistics Inc. Common Stock"
  },
  {
    "Symbol": "RLI",
    "Name": "RLI Corp. Common Stock (DE)"
  },
  {
    "Symbol": "RLJ",
    "Name": "RLJ Lodging Trust Common Shares of Beneficial Interest $0.01 par value"
  },
  {
    "Symbol": "RLJ^A",
    "Name": "RLJ Lodging Trust $1.95 Series A Cumulative Convertible  Preferred Shares"
  },
  {
    "Symbol": "RLMD",
    "Name": "Relmada Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RLTY",
    "Name": "Cohen & Steers Real Estate Opportunities and Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "RLX",
    "Name": "RLX Technology Inc. American Depositary Shares each representing the right to receive one (1) Class A ordinary share"
  },
  {
    "Symbol": "RLYB",
    "Name": "Rallybio Corporation Common Stock"
  },
  {
    "Symbol": "RM",
    "Name": "Regional Management Corp. Common Stock"
  },
  {
    "Symbol": "RMAX",
    "Name": "RE/MAX Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "RMBI",
    "Name": "Richmond Mutual Bancorporation Inc. Common Stock"
  },
  {
    "Symbol": "RMBL",
    "Name": "RumbleOn Inc. Class B Common Stock"
  },
  {
    "Symbol": "RMBS",
    "Name": "Rambus Inc. Common Stock"
  },
  {
    "Symbol": "RMCF",
    "Name": "Rocky Mountain Chocolate Factory Inc. Common Stock"
  },
  {
    "Symbol": "RMD",
    "Name": "ResMed Inc. Common Stock"
  },
  {
    "Symbol": "RMED",
    "Name": "Ra Medical Systems Inc. Common Stock"
  },
  {
    "Symbol": "RMGC",
    "Name": "RMG Acquisition Corp. III Class A Ordinary Shares"
  },
  {
    "Symbol": "RMGCW",
    "Name": "RMG Acquisition Corp. III Warrant"
  },
  {
    "Symbol": "RMI",
    "Name": "RiverNorth Opportunistic Municipal Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "RMM",
    "Name": "RiverNorth Managed Duration Municipal Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "RMMZ",
    "Name": "RiverNorth Managed Duration Municipal Income Fund II Inc. Common Stock"
  },
  {
    "Symbol": "RMNI",
    "Name": "Rimini Street Inc. (DE) Common Stock"
  },
  {
    "Symbol": "RMPL^",
    "Name": "RiverNorth Capital and Income Fund 5.875%% Series A Term Preferred Stock $0.0001 par value per share"
  },
  {
    "Symbol": "RMR",
    "Name": "The RMR Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "RMT",
    "Name": "Royce Micro-Cap Trust Inc. Common Stock"
  },
  {
    "Symbol": "RMTI",
    "Name": "Rockwell Medical Inc. Common Stock"
  },
  {
    "Symbol": "RNA",
    "Name": "Avidity Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "RNAZ",
    "Name": "TransCode Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RNG",
    "Name": "RingCentral Inc. Class A Common Stock"
  },
  {
    "Symbol": "RNGR",
    "Name": "Ranger Energy Services Inc. Class A Common Stock"
  },
  {
    "Symbol": "RNLX",
    "Name": "Renalytix plc American Depositary Shares"
  },
  {
    "Symbol": "RNP",
    "Name": "Cohen & Steers REIT and Preferred and Income Fund Inc. Common Shares"
  },
  {
    "Symbol": "RNR",
    "Name": "RenaissanceRe Holdings Ltd. Common Stock"
  },
  {
    "Symbol": "RNR^F",
    "Name": "RenaissanceRe Holdings Ltd. Depositary Shares each Representing a 1/1000th Interest in a 5.750% Series F Preference Share"
  },
  {
    "Symbol": "RNR^G",
    "Name": "RenaissanceRe Holdings Ltd. Depositary Shares each representing a 1/1000th interest in a share of 4.20% Series G Preference Shares"
  },
  {
    "Symbol": "RNST",
    "Name": "Renasant Corporation Common Stock"
  },
  {
    "Symbol": "RNW",
    "Name": "ReNew Energy Global plc Class A Ordinary Shares"
  },
  {
    "Symbol": "RNWWW",
    "Name": "ReNew Energy Global plc Warrant"
  },
  {
    "Symbol": "RNXT",
    "Name": "RenovoRx Inc. Common Stock"
  },
  {
    "Symbol": "ROAD",
    "Name": "Construction Partners Inc. Class A Common Stock"
  },
  {
    "Symbol": "ROC",
    "Name": "ROC Energy Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "ROCC",
    "Name": "Ranger Oil Corporation Class A Common Stock"
  },
  {
    "Symbol": "ROCG",
    "Name": "Roth CH Acquisition IV Co. Common Stock"
  },
  {
    "Symbol": "ROCGW",
    "Name": "Roth CH Acquisition IV Co. Warrant"
  },
  {
    "Symbol": "ROCK",
    "Name": "Gibraltar Industries Inc. Common Stock"
  },
  {
    "Symbol": "ROCL",
    "Name": "Roth CH Acquisition V Co. Common Stock"
  },
  {
    "Symbol": "ROCLW",
    "Name": "Roth CH Acquisition V Co. Warrant"
  },
  {
    "Symbol": "ROG",
    "Name": "Rogers Corporation Common Stock"
  },
  {
    "Symbol": "ROIC",
    "Name": "Retail Opportunity Investments Corp. Common Stock (MD)"
  },
  {
    "Symbol": "ROIV",
    "Name": "Roivant Sciences Ltd. Common Shares"
  },
  {
    "Symbol": "ROIVW",
    "Name": "Roivant Sciences Ltd. Warrant"
  },
  {
    "Symbol": "ROK",
    "Name": "Rockwell Automation Inc. Common Stock"
  },
  {
    "Symbol": "ROKU",
    "Name": "Roku Inc. Class A Common Stock"
  },
  {
    "Symbol": "ROL",
    "Name": "Rollins Inc. Common Stock"
  },
  {
    "Symbol": "RONI",
    "Name": "Rice Acquisition Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "ROOT",
    "Name": "Root Inc. Class A Common Stock"
  },
  {
    "Symbol": "ROP",
    "Name": "Roper Technologies Inc. Common Stock"
  },
  {
    "Symbol": "ROSE",
    "Name": "Rose Hill Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "ROSEW",
    "Name": "Rose Hill Acquisition Corporation Warrant"
  },
  {
    "Symbol": "ROSS",
    "Name": "Ross Acquisition Corp II Class A Ordinary Shares"
  },
  {
    "Symbol": "ROST",
    "Name": "Ross Stores Inc. Common Stock"
  },
  {
    "Symbol": "ROVR",
    "Name": "Rover Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "RPAY",
    "Name": "Repay Holdings Corporation Class A Common Stock"
  },
  {
    "Symbol": "RPD",
    "Name": "Rapid7 Inc. Common Stock"
  },
  {
    "Symbol": "RPHM",
    "Name": "Reneo Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "RPID",
    "Name": "Rapid Micro Biosystems Inc. Class A Common Stock"
  },
  {
    "Symbol": "RPM",
    "Name": "RPM International Inc. Common Stock"
  },
  {
    "Symbol": "RPRX",
    "Name": "Royalty Pharma plc Class A Ordinary Shares"
  },
  {
    "Symbol": "RPT",
    "Name": "RPT Realty Common Stock"
  },
  {
    "Symbol": "RPT^D",
    "Name": "RPT Realty 7.25%"
  },
  {
    "Symbol": "RPTX",
    "Name": "Repare Therapeutics Inc. Common Shares"
  },
  {
    "Symbol": "RQI",
    "Name": "Cohen & Steers Quality Income Realty Fund Inc Common Shares"
  },
  {
    "Symbol": "RRAC",
    "Name": "Rigel Resource Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "RRBI",
    "Name": "Red River Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "RRC",
    "Name": "Range Resources Corporation Common Stock"
  },
  {
    "Symbol": "RRGB",
    "Name": "Red Robin Gourmet Burgers Inc. Common Stock"
  },
  {
    "Symbol": "RRR",
    "Name": "Red Rock Resorts Inc. Class A Common Stock"
  },
  {
    "Symbol": "RRX",
    "Name": "Regal Rexnord Corporation Common Stock"
  },
  {
    "Symbol": "RS",
    "Name": "Reliance Steel & Aluminum Co. Common Stock (DE)"
  },
  {
    "Symbol": "RSF",
    "Name": "RiverNorth Capital and Income Fund Common Stock"
  },
  {
    "Symbol": "RSG",
    "Name": "Republic Services Inc. Common Stock"
  },
  {
    "Symbol": "RSI",
    "Name": "Rush Street Interactive Inc. Class A Common Stock"
  },
  {
    "Symbol": "RSKD",
    "Name": "Riskified Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "RSLS",
    "Name": "ReShape Lifesciences Inc. Common Stock"
  },
  {
    "Symbol": "RSSS",
    "Name": "Research Solutions Inc Common Stock"
  },
  {
    "Symbol": "RSVR",
    "Name": "Reservoir Media Inc. Common Stock"
  },
  {
    "Symbol": "RSVRW",
    "Name": "Reservoir Media Inc. Warrant"
  },
  {
    "Symbol": "RTC",
    "Name": "Baijiayun Group Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "RTL",
    "Name": "The Necessity Retail REIT Inc. Class A Common Stock"
  },
  {
    "Symbol": "RTLPO",
    "Name": "The Necessity Retail REIT Inc. 7.375% Series C Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RTLPP",
    "Name": "The Necessity Retail REIT Inc. 7.50% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "RTO",
    "Name": "Rentokil Initial plc American Depositary Shares (each representing five (5) Ordinary Shares)"
  },
  {
    "Symbol": "RTX",
    "Name": "Raytheon Technologies Corporation Common Stock"
  },
  {
    "Symbol": "RUM",
    "Name": "Rumble Inc. Class A Common Stock"
  },
  {
    "Symbol": "RUMBW",
    "Name": "Rumble Inc. Warrant"
  },
  {
    "Symbol": "RUN",
    "Name": "Sunrun Inc. Common Stock"
  },
  {
    "Symbol": "RUSHA",
    "Name": "Rush Enterprises Inc. Common Stock Cl A"
  },
  {
    "Symbol": "RUSHB",
    "Name": "Rush Enterprises Inc. Class B"
  },
  {
    "Symbol": "RUTH",
    "Name": "Ruth's Hospitality Group Inc. Common Stock"
  },
  {
    "Symbol": "RVLP",
    "Name": "RVL Pharmaceuticals plc Ordinary Shares"
  },
  {
    "Symbol": "RVLV",
    "Name": "Revolve Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "RVMD",
    "Name": "Revolution Medicines Inc. Common Stock"
  },
  {
    "Symbol": "RVNC",
    "Name": "Revance Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "RVP",
    "Name": "Retractable Technologies Inc. Common Stock"
  },
  {
    "Symbol": "RVPH",
    "Name": "Reviva Pharmaceuticals Holdings Inc. Common Stock"
  },
  {
    "Symbol": "RVPHW",
    "Name": "Reviva Pharmaceuticals Holdings Inc. Warrants"
  },
  {
    "Symbol": "RVSB",
    "Name": "Riverview Bancorp Inc Common Stock"
  },
  {
    "Symbol": "RVSN",
    "Name": "Rail Vision Ltd. Ordinary Share"
  },
  {
    "Symbol": "RVSNW",
    "Name": "Rail Vision Ltd. Warrant"
  },
  {
    "Symbol": "RVT",
    "Name": "Royce Value Trust Inc. Common Stock"
  },
  {
    "Symbol": "RVYL",
    "Name": "Ryvyl Inc. Common Stock"
  },
  {
    "Symbol": "RWAY",
    "Name": "Runway Growth Finance Corp. Common Stock"
  },
  {
    "Symbol": "RWAYL",
    "Name": "Runway Growth Finance Corp. 7.50% Notes due 2027"
  },
  {
    "Symbol": "RWAYZ",
    "Name": "Runway Growth Finance Corp. 8.00% Notes due 2027"
  },
  {
    "Symbol": "RWLK",
    "Name": "ReWalk Robotics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "RWOD",
    "Name": "Redwoods Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "RWODR",
    "Name": "Redwoods Acquisition Corp. Rights"
  },
  {
    "Symbol": "RWODU",
    "Name": "Redwoods Acquisition Corp. Unit"
  },
  {
    "Symbol": "RWODW",
    "Name": "Redwoods Acquisition Corp. Warrants"
  },
  {
    "Symbol": "RWT",
    "Name": "Redwood Trust Inc. Common Stock"
  },
  {
    "Symbol": "RWT^A",
    "Name": "Redwood Trust Inc. 10.00% Series A Fixed-Rate Reset Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "RXDX",
    "Name": "Prometheus Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "RXO",
    "Name": "RXO Inc. Common Stock"
  },
  {
    "Symbol": "RXRX",
    "Name": "Recursion Pharmaceuticals Inc. Class A Common Stock"
  },
  {
    "Symbol": "RXST",
    "Name": "RxSight Inc. Common Stock"
  },
  {
    "Symbol": "RXT",
    "Name": "Rackspace Technology Inc. Common Stock"
  },
  {
    "Symbol": "RY",
    "Name": "Royal Bank Of Canada Common Stock"
  },
  {
    "Symbol": "RY^T",
    "Name": "Royal Bank Of Canada 6.750% Fixed Rate/Floating Rate Noncumulative First Preferred Shares Series C-2"
  },
  {
    "Symbol": "RYAAY",
    "Name": "Ryanair Holdings plc American Depositary Shares"
  },
  {
    "Symbol": "RYAM",
    "Name": "Rayonier Advanced Materials Inc. Common Stock"
  },
  {
    "Symbol": "RYAN",
    "Name": "Ryan Specialty Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "RYI",
    "Name": "Ryerson Holding Corporation Common Stock"
  },
  {
    "Symbol": "RYN",
    "Name": "Rayonier Inc. REIT Common Stock"
  },
  {
    "Symbol": "RYTM",
    "Name": "Rhythm Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "RZB",
    "Name": "Reinsurance Group of America Incorporated 5.75% Fixed-To-Floating Rate Subordinated Debentures due 2056"
  },
  {
    "Symbol": "RZC",
    "Name": "Reinsurance Group of America Incorporated 7.125% Fixed-Rate Reset Subordinated Debentures due 2052"
  },
  {
    "Symbol": "RZLT",
    "Name": "Rezolute Inc. Common Stock (NV)"
  },
  {
    "Symbol": "S",
    "Name": "SentinelOne Inc. Class A Common Stock"
  },
  {
    "Symbol": "SA",
    "Name": "Seabridge Gold Inc. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "SABR",
    "Name": "Sabre Corporation Common Stock"
  },
  {
    "Symbol": "SABRP",
    "Name": "Sabre Corporation 6.50% Series A Mandatory Convertible Preferred Stock"
  },
  {
    "Symbol": "SABS",
    "Name": "SAB Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SABSW",
    "Name": "SAB Biotherapeutics Inc. Warrant"
  },
  {
    "Symbol": "SACC",
    "Name": "Sachem Capital Corp. 6.875% Notes due 2024"
  },
  {
    "Symbol": "SACH",
    "Name": "Sachem Capital Corp. Common Shares"
  },
  {
    "Symbol": "SACH^A",
    "Name": "Sachem Capital Corp. 7.75% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "SAFE",
    "Name": "Safehold Inc. New Common Stock"
  },
  {
    "Symbol": "SAFT",
    "Name": "Safety Insurance Group Inc. Common Stock"
  },
  {
    "Symbol": "SAGA",
    "Name": "Sagaliam Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "SAGAR",
    "Name": "Sagaliam Acquisition Corp. Rights"
  },
  {
    "Symbol": "SAGE",
    "Name": "Sage Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SAH",
    "Name": "Sonic Automotive Inc. Common Stock"
  },
  {
    "Symbol": "SAI",
    "Name": "SAI.TECH Global Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "SAIA",
    "Name": "Saia Inc. Common Stock"
  },
  {
    "Symbol": "SAIC",
    "Name": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION Common Stock"
  },
  {
    "Symbol": "SAITW",
    "Name": "SAI.TECH Global Corporation Warrant"
  },
  {
    "Symbol": "SAJ",
    "Name": "Saratoga Investment Corp 8.00% Notes due 2027"
  },
  {
    "Symbol": "SAL",
    "Name": "Salisbury Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SALM",
    "Name": "Salem Media Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "SAM",
    "Name": "Boston Beer Company Inc. (The) Common Stock"
  },
  {
    "Symbol": "SAMA",
    "Name": "Schultze Special Purpose Acquisition Corp. II Class A Common Stock"
  },
  {
    "Symbol": "SAMAU",
    "Name": "Schultze Special Purpose Acquisition Corp. II Units"
  },
  {
    "Symbol": "SAMAW",
    "Name": "Schultze Special Purpose Acquisition Corp. II Warrant"
  },
  {
    "Symbol": "SAMG",
    "Name": "Silvercrest Asset Management Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "SAN",
    "Name": "Banco Santander S.A. Sponsored ADR (Spain)"
  },
  {
    "Symbol": "SANA",
    "Name": "Sana Biotechnology Inc. Common Stock"
  },
  {
    "Symbol": "SAND",
    "Name": "Sandstorm Gold Ltd. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "SANG",
    "Name": "Sangoma Technologies Corporation Common Shares"
  },
  {
    "Symbol": "SANM",
    "Name": "Sanmina Corporation Common Stock"
  },
  {
    "Symbol": "SANW",
    "Name": "S&W Seed Company Common Stock (NV)"
  },
  {
    "Symbol": "SAP",
    "Name": "SAP  SE ADS"
  },
  {
    "Symbol": "SAR",
    "Name": "Saratoga Investment Corp New"
  },
  {
    "Symbol": "SASI",
    "Name": "Sigma Additive Solutions Inc. Common Stock"
  },
  {
    "Symbol": "SASR",
    "Name": "Sandy Spring Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SAT",
    "Name": "Saratoga Investment Corp 6.00% Notes due 2027"
  },
  {
    "Symbol": "SATL",
    "Name": "Satellogic Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "SATS",
    "Name": "EchoStar  Corporation Common Stock"
  },
  {
    "Symbol": "SATX",
    "Name": "SatixFy Communications Ltd. Ordinary Share"
  },
  {
    "Symbol": "SAVA",
    "Name": "Cassava Sciences Inc. Common Stock"
  },
  {
    "Symbol": "SAVE",
    "Name": "Spirit Airlines Inc. Common Stock"
  },
  {
    "Symbol": "SAY",
    "Name": "Saratoga Investment Corp 8.125% Notes due 2027"
  },
  {
    "Symbol": "SAZ",
    "Name": "Saratoga Investment Corp 8.50% Notes due 2028"
  },
  {
    "Symbol": "SB",
    "Name": "Safe Bulkers Inc Common Stock ($0.001 par value)"
  },
  {
    "Symbol": "SB^C",
    "Name": "Safe Bulkers Inc Cumulative Redeemable Perpetual Preferred Series C (Marshall Islands)"
  },
  {
    "Symbol": "SB^D",
    "Name": "Safe Bulkers Inc Perpetual Preferred Series D (Marshall Islands)"
  },
  {
    "Symbol": "SBAC",
    "Name": "SBA Communications Corporation Class A Common Stock"
  },
  {
    "Symbol": "SBBA",
    "Name": "Scorpio Tankers Inc. 7.00% Senior Notes due 2025"
  },
  {
    "Symbol": "SBCF",
    "Name": "Seacoast Banking Corporation of Florida Common Stock"
  },
  {
    "Symbol": "SBET",
    "Name": "SharpLink Gaming Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SBEV",
    "Name": "Splash Beverage Group Inc. (NV) Common Stock"
  },
  {
    "Symbol": "SBFG",
    "Name": "SB Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "SBFM",
    "Name": "Sunshine Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "SBFMW",
    "Name": "Sunshine Biopharma Inc. Warrant"
  },
  {
    "Symbol": "SBGI",
    "Name": "Sinclair Broadcast Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "SBH",
    "Name": "Sally Beauty Holdings Inc. (Name to be changed from Sally Holdings Inc.) Common Stock"
  },
  {
    "Symbol": "SBI",
    "Name": "Western Asset Intermediate Muni Fund Inc Common Stock"
  },
  {
    "Symbol": "SBIG",
    "Name": "SpringBig Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SBIGW",
    "Name": "SpringBig Holdings Inc. Warrant"
  },
  {
    "Symbol": "SBLK",
    "Name": "Star Bulk Carriers Corp. Common Shares"
  },
  {
    "Symbol": "SBOW",
    "Name": "SilverBow Resorces Inc. Common Stock"
  },
  {
    "Symbol": "SBR",
    "Name": "Sabine Royalty Trust Common Stock"
  },
  {
    "Symbol": "SBRA",
    "Name": "Sabra Health Care REIT Inc. Common Stock"
  },
  {
    "Symbol": "SBS",
    "Name": "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares (Each repstg 250 Common Shares)"
  },
  {
    "Symbol": "SBSI",
    "Name": "Southside Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "SBSW",
    "Name": "D/B/A Sibanye-Stillwater Limited ADS"
  },
  {
    "Symbol": "SBT",
    "Name": "Sterling Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SBUX",
    "Name": "Starbucks Corporation Common Stock"
  },
  {
    "Symbol": "SBXC",
    "Name": "SilverBox Corp III Class A Common Stock"
  },
  {
    "Symbol": "SCAQ",
    "Name": "Stratim Cloud Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "SCAQU",
    "Name": "Stratim Cloud Acquisition Corp. Unit"
  },
  {
    "Symbol": "SCAQW",
    "Name": "Stratim Cloud Acquisition Corp. Warrant"
  },
  {
    "Symbol": "SCCB",
    "Name": "Sachem Capital Corp. 7.125% Notes due 2024"
  },
  {
    "Symbol": "SCCC",
    "Name": "Sachem Capital Corp. 7.75% Notes due 2025"
  },
  {
    "Symbol": "SCCD",
    "Name": "Sachem Capital Corp. 6.00% Notes due 2026"
  },
  {
    "Symbol": "SCCE",
    "Name": "Sachem Capital Corp. 6.00% Notes due 2027"
  },
  {
    "Symbol": "SCCF",
    "Name": "Sachem Capital Corp. 7.125% Notes due 2027"
  },
  {
    "Symbol": "SCCG",
    "Name": "Sachem Capital Corp. 8.00% Notes due 2027"
  },
  {
    "Symbol": "SCCO",
    "Name": "Southern Copper Corporation Common Stock"
  },
  {
    "Symbol": "SCD",
    "Name": "LMP Capital and Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "SCE^G",
    "Name": "SCE Trust II Trust Preferred Securities"
  },
  {
    "Symbol": "SCE^H",
    "Name": "SCE Trust III Fixed/Floating Rate Trust Preference Securities"
  },
  {
    "Symbol": "SCE^J",
    "Name": "Southern California Edison Company 5.375% Fixed-to-Floating Rate Trust Preference Securities"
  },
  {
    "Symbol": "SCE^K",
    "Name": "Southern California Edison Company 5.45% Fixed-to-Floating Rate Trust Preference Securities"
  },
  {
    "Symbol": "SCE^L",
    "Name": "SCE TRUST VI"
  },
  {
    "Symbol": "SCHL",
    "Name": "Scholastic Corporation Common Stock"
  },
  {
    "Symbol": "SCHN",
    "Name": "Schnitzer Steel Industries Inc. Class A Common Stock"
  },
  {
    "Symbol": "SCHW",
    "Name": "Charles Schwab Corporation (The) Common Stock"
  },
  {
    "Symbol": "SCHW^D",
    "Name": "The Charles Schwab Corporation Depositary Shares each representing 1/40th interest in a share of 5.95% Non-Cumulative Perpetual Preferred Stock Series D"
  },
  {
    "Symbol": "SCHW^J",
    "Name": "The Charles Schwab Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.450% Non-Cumulative Perpetual Preferred Stock Series J"
  },
  {
    "Symbol": "SCI",
    "Name": "Service Corporation International Common Stock"
  },
  {
    "Symbol": "SCKT",
    "Name": "Socket Mobile Inc. Common Stock"
  },
  {
    "Symbol": "SCL",
    "Name": "Stepan Company Common Stock"
  },
  {
    "Symbol": "SCLX",
    "Name": "Scilex Holding Company Common Stock"
  },
  {
    "Symbol": "SCLXW",
    "Name": "Scilex Holding Company Warrant"
  },
  {
    "Symbol": "SCM",
    "Name": "Stellus Capital Investment Corporation Common Stock"
  },
  {
    "Symbol": "SCOR",
    "Name": "comScore Inc. Common Stock"
  },
  {
    "Symbol": "SCPH",
    "Name": "scPharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SCPL",
    "Name": "SciPlay Corporation Class A Common Stock"
  },
  {
    "Symbol": "SCRM",
    "Name": "Screaming Eagle Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "SCRMU",
    "Name": "Screaming Eagle Acquisition Corp. Unit"
  },
  {
    "Symbol": "SCRMW",
    "Name": "Screaming Eagle Acquisition Corp. Warrant"
  },
  {
    "Symbol": "SCS",
    "Name": "Steelcase Inc. Common Stock"
  },
  {
    "Symbol": "SCSC",
    "Name": "ScanSource Inc. Common Stock"
  },
  {
    "Symbol": "SCTL",
    "Name": "Societal CDMO Inc. Common Stock"
  },
  {
    "Symbol": "SCU",
    "Name": "Sculptor Capital Management Inc. Class A Common Stock"
  },
  {
    "Symbol": "SCUA",
    "Name": "Sculptor Acquisition Corp I Class A Ordinary Shares"
  },
  {
    "Symbol": "SCVL",
    "Name": "Shoe Carnival Inc. Common Stock"
  },
  {
    "Symbol": "SCWO",
    "Name": "374Water Inc. Common Stock"
  },
  {
    "Symbol": "SCWX",
    "Name": "SecureWorks Corp. Class A Common Stock"
  },
  {
    "Symbol": "SCX",
    "Name": "L.S. Starrett Company (The) Common Stock"
  },
  {
    "Symbol": "SCYX",
    "Name": "SCYNEXIS Inc. Common Stock"
  },
  {
    "Symbol": "SD",
    "Name": "SandRidge Energy Inc. Common Stock"
  },
  {
    "Symbol": "SDAC",
    "Name": "Sustainable Development Acquisition I Corp. Class A Common Stock"
  },
  {
    "Symbol": "SDACU",
    "Name": "Sustainable Development Acquisition I Corp. Unit"
  },
  {
    "Symbol": "SDACW",
    "Name": "Sustainable Development Acquisition I Corp. Warrant"
  },
  {
    "Symbol": "SDC",
    "Name": "SmileDirectClub Inc. Class A Common Stock"
  },
  {
    "Symbol": "SDGR",
    "Name": "Schrodinger Inc. Common Stock"
  },
  {
    "Symbol": "SDHY",
    "Name": "PGIM Short Duration High Yield Opportunities Fund Common Shares"
  },
  {
    "Symbol": "SDIG",
    "Name": "Stronghold Digital Mining Inc. Class A Common Stock"
  },
  {
    "Symbol": "SDPI",
    "Name": "Superior Drilling Products Inc. Common Stock"
  },
  {
    "Symbol": "SDRL",
    "Name": "Seadrill Limited Common Shares"
  },
  {
    "Symbol": "SE",
    "Name": "Sea Limited American Depositary Shares each representing one Class A Ordinary Share"
  },
  {
    "Symbol": "SEAC",
    "Name": "SeaChange International Inc. Common Stock"
  },
  {
    "Symbol": "SEAL^A",
    "Name": "Seapeak LLC 9.00% Series A Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "SEAL^B",
    "Name": "Seapeak LLC 8.50% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
  },
  {
    "Symbol": "SEAS",
    "Name": "SeaWorld Entertainment Inc. Common Stock"
  },
  {
    "Symbol": "SEAT",
    "Name": "Vivid Seats Inc. Class A Common Stock"
  },
  {
    "Symbol": "SEATW",
    "Name": "Vivid Seats Inc. Warrant"
  },
  {
    "Symbol": "SEB",
    "Name": "Seaboard Corporation Common Stock"
  },
  {
    "Symbol": "SECO",
    "Name": "Secoo Holding Limited ADS"
  },
  {
    "Symbol": "SEDA",
    "Name": "SDCL EDGE Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "SEDG",
    "Name": "SolarEdge Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SEE",
    "Name": "Sealed Air Corporation Common Stock"
  },
  {
    "Symbol": "SEED",
    "Name": "Origin Agritech Limited Common Stock"
  },
  {
    "Symbol": "SEEL",
    "Name": "Seelos Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SEER",
    "Name": "Seer Inc. Class A Common Stock"
  },
  {
    "Symbol": "SEIC",
    "Name": "SEI Investments Company Common Stock"
  },
  {
    "Symbol": "SELB",
    "Name": "Selecta Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "SELF",
    "Name": "Global Self Storage Inc. Common Stock"
  },
  {
    "Symbol": "SEM",
    "Name": "Select Medical Holdings Corporation Common Stock"
  },
  {
    "Symbol": "SEMR",
    "Name": "SEMrush Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "SENEA",
    "Name": "Seneca Foods Corp. Class A Common Stock"
  },
  {
    "Symbol": "SENEB",
    "Name": "Seneca Foods Corp. Class B Common Stock"
  },
  {
    "Symbol": "SENS",
    "Name": "Senseonics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SEPA",
    "Name": "SEP Acquisition Corp Class A Common Stock"
  },
  {
    "Symbol": "SEPAW",
    "Name": "SEP Acquisition Corp Warrants"
  },
  {
    "Symbol": "SERA",
    "Name": "Sera Prognostics Inc. Class A Common Stock"
  },
  {
    "Symbol": "SES",
    "Name": "SES AI Corporation Class A Common Stock"
  },
  {
    "Symbol": "SEV",
    "Name": "Sono Group N.V. Common Shares"
  },
  {
    "Symbol": "SEVN",
    "Name": "Seven Hills Realty Trust Common Stock"
  },
  {
    "Symbol": "SF",
    "Name": "Stifel Financial Corporation Common Stock"
  },
  {
    "Symbol": "SF^B",
    "Name": "Stifel Financial Corporation Depositary Shares Each Representing 1/1000th  Interest in a Share of 6.25% Non-Cumulative  Preferred Stock Series B"
  },
  {
    "Symbol": "SF^C",
    "Name": "Stifel Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 6.125% Non Cumulative Preferred Stock Series C"
  },
  {
    "Symbol": "SF^D",
    "Name": "Stifel Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 4.50% Non-Cumulative Preferred Stock Series D"
  },
  {
    "Symbol": "SFB",
    "Name": "Stifel Financial Corporation 5.20% Senior Notes due 2047"
  },
  {
    "Symbol": "SFBC",
    "Name": "Sound Financial Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SFBS",
    "Name": "ServisFirst Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "SFE",
    "Name": "Safeguard Scientifics Inc. Common Stock"
  },
  {
    "Symbol": "SFIX",
    "Name": "Stitch Fix Inc. Class A Common Stock"
  },
  {
    "Symbol": "SFL",
    "Name": "SFL Corporation Ltd"
  },
  {
    "Symbol": "SFM",
    "Name": "Sprouts Farmers Market Inc. Common Stock"
  },
  {
    "Symbol": "SFNC",
    "Name": "Simmons First National Corporation Class A Common Stock"
  },
  {
    "Symbol": "SFR",
    "Name": "Appreciate Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "SFRWW",
    "Name": "Appreciate Holdings Inc. Warrant"
  },
  {
    "Symbol": "SFST",
    "Name": "Southern First Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "SFT",
    "Name": "Shift Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "SFWL",
    "Name": "Shengfeng Development Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "SG",
    "Name": "Sweetgreen Inc. Class A Common Stock"
  },
  {
    "Symbol": "SGA",
    "Name": "Saga Communications Inc. Class A Common Stock (FL)"
  },
  {
    "Symbol": "SGBX",
    "Name": "Safe & Green Holdings Corp. Common Stock"
  },
  {
    "Symbol": "SGC",
    "Name": "Superior Group of Companies Inc. Common Stock"
  },
  {
    "Symbol": "SGEN",
    "Name": "Seagen Inc. Common Stock"
  },
  {
    "Symbol": "SGH",
    "Name": "SMART Global Holdings Inc. Ordinary Shares"
  },
  {
    "Symbol": "SGHC",
    "Name": "Super Group (SGHC) Limited Ordinary Shares"
  },
  {
    "Symbol": "SGHL",
    "Name": "Signal Hill Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "SGHT",
    "Name": "Sight Sciences Inc. Common Stock"
  },
  {
    "Symbol": "SGII",
    "Name": "Seaport Global Acquisition II Corp. Class A Common Stock"
  },
  {
    "Symbol": "SGIIU",
    "Name": "Seaport Global Acquisition II Corp. Unit"
  },
  {
    "Symbol": "SGLY",
    "Name": "Singularity Future Technology Ltd. Common Stock"
  },
  {
    "Symbol": "SGMA",
    "Name": "SigmaTron International Inc. Common Stock"
  },
  {
    "Symbol": "SGML",
    "Name": "Sigma Lithium Corporation Common Shares"
  },
  {
    "Symbol": "SGMO",
    "Name": "Sangamo Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SGRP",
    "Name": "SPAR Group Inc. Common Stock"
  },
  {
    "Symbol": "SGRY",
    "Name": "Surgery Partners Inc. Common Stock"
  },
  {
    "Symbol": "SGTX",
    "Name": "Sigilon Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SGU",
    "Name": "Star Group L.P. Common Stock"
  },
  {
    "Symbol": "SHAK",
    "Name": "Shake Shack Inc. Class A Common Stock"
  },
  {
    "Symbol": "SHAP",
    "Name": "Spree Acquisition Corp. 1 Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "SHBI",
    "Name": "Shore Bancshares Inc Common Stock"
  },
  {
    "Symbol": "SHC",
    "Name": "Sotera Health Company Common Stock"
  },
  {
    "Symbol": "SHCO",
    "Name": "Soho House & Co Inc. Class A Common Stock"
  },
  {
    "Symbol": "SHCR",
    "Name": "Sharecare Inc. Class A Common Stock"
  },
  {
    "Symbol": "SHCRW",
    "Name": "Sharecare Inc. Warrant"
  },
  {
    "Symbol": "SHEL",
    "Name": "Royal Dutch Shell PLC American Depositary Shares (each representing two (2) Ordinary Shares)"
  },
  {
    "Symbol": "SHEN",
    "Name": "Shenandoah Telecommunications Co Common Stock"
  },
  {
    "Symbol": "SHFS",
    "Name": "SHF Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "SHFSW",
    "Name": "SHF Holdings Inc. Warrants"
  },
  {
    "Symbol": "SHG",
    "Name": "Shinhan Financial Group Co Ltd American Depositary Shares"
  },
  {
    "Symbol": "SHIP",
    "Name": "Seanergy Maritime Holdings Corp Common Stock"
  },
  {
    "Symbol": "SHLS",
    "Name": "Shoals Technologies Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "SHLT",
    "Name": "SHL Telemedicine Ltd American Depositary Shares"
  },
  {
    "Symbol": "SHO",
    "Name": "Sunstone Hotel Investors Inc. Sunstone Hotel Investors Inc. Common Shares"
  },
  {
    "Symbol": "SHO^H",
    "Name": "Sunstone Hotel Investors Inc. 6.125% Series H Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "SHO^I",
    "Name": "Sunstone Hotel Investors Inc. 5.70% Series I Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "SHOO",
    "Name": "Steven Madden Ltd. Common Stock"
  },
  {
    "Symbol": "SHOP",
    "Name": "Shopify Inc. Class A Subordinate Voting Shares"
  },
  {
    "Symbol": "SHPH",
    "Name": "Shuttle Pharmaceuticals Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SHPW",
    "Name": "Shapeways Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SHUA",
    "Name": "SHUAA Partners Acquisition Corp I Class A Ordinary Share"
  },
  {
    "Symbol": "SHUAW",
    "Name": "SHUAA Partners Acquisition Corp I Warrant"
  },
  {
    "Symbol": "SHW",
    "Name": "Sherwin-Williams Company (The) Common Stock"
  },
  {
    "Symbol": "SHYF",
    "Name": "The Shyft Group Inc. Common Stock"
  },
  {
    "Symbol": "SI",
    "Name": "Silvergate Capital Corporation Class A Common Stock"
  },
  {
    "Symbol": "SI^A",
    "Name": "Silvergate Capital Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 5.375% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "SIBN",
    "Name": "SI-BONE Inc. Common Stock"
  },
  {
    "Symbol": "SID",
    "Name": "Companhia Siderurgica Nacional S.A. Common Stock"
  },
  {
    "Symbol": "SIDU",
    "Name": "Sidus Space Inc. Class A Common Stock"
  },
  {
    "Symbol": "SIEB",
    "Name": "Siebert Financial Corp. Common Stock"
  },
  {
    "Symbol": "SIEN",
    "Name": "Sientra Inc. Common Stock"
  },
  {
    "Symbol": "SIF",
    "Name": "SIFCO Industries Inc. Common Stock"
  },
  {
    "Symbol": "SIFY",
    "Name": "Sify Technologies Limited American Depositary Shares"
  },
  {
    "Symbol": "SIG",
    "Name": "Signet Jewelers Limited Common Shares"
  },
  {
    "Symbol": "SIGA",
    "Name": "SIGA Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SIGI",
    "Name": "Selective Insurance Group Inc. Common Stock"
  },
  {
    "Symbol": "SIGIP",
    "Name": "Selective Insurance Group Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.60% Non-Cumulative Preferred Stock Series B"
  },
  {
    "Symbol": "SII",
    "Name": "Sprott Inc. Common Shares"
  },
  {
    "Symbol": "SILC",
    "Name": "Silicom Ltd Ordinary Shares"
  },
  {
    "Symbol": "SILK",
    "Name": "Silk Road Medical Inc. Common Stock"
  },
  {
    "Symbol": "SILO",
    "Name": "Silo Pharma Inc. Common Stock"
  },
  {
    "Symbol": "SILV",
    "Name": "SilverCrest Metals Inc. Common Shares"
  },
  {
    "Symbol": "SIM",
    "Name": "Grupo Simec S.A.B. de C.V. American Depositary Shares"
  },
  {
    "Symbol": "SIMO",
    "Name": "Silicon Motion Technology Corporation American Depositary Shares"
  },
  {
    "Symbol": "SINT",
    "Name": "SiNtx Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SIRE",
    "Name": "Sisecam Resources LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "SIRI",
    "Name": "Sirius XM Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SISI",
    "Name": "Shineco Inc. Common Stock"
  },
  {
    "Symbol": "SITC",
    "Name": "SITE Centers Corp. Common Stock"
  },
  {
    "Symbol": "SITC^A",
    "Name": "SITE Centers Corp. 6.375% Class A Preferred Shares"
  },
  {
    "Symbol": "SITE",
    "Name": "SiteOne Landscape Supply Inc. Common Stock"
  },
  {
    "Symbol": "SITM",
    "Name": "SiTime Corporation Common Stock"
  },
  {
    "Symbol": "SIX",
    "Name": "Six Flags Entertainment Corporation New Common Stock"
  },
  {
    "Symbol": "SJ",
    "Name": "Scienjoy Holding Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "SJM",
    "Name": "J.M. Smucker Company (The) New Common Stock"
  },
  {
    "Symbol": "SJT",
    "Name": "San Juan Basin Royalty Trust Common Stock"
  },
  {
    "Symbol": "SJW",
    "Name": "SJW Group Common Stock (DE)"
  },
  {
    "Symbol": "SKE",
    "Name": "Skeena Resources Limited Common Shares"
  },
  {
    "Symbol": "SKGR",
    "Name": "SK Growth Opportunities Corporation Class A Common Stock"
  },
  {
    "Symbol": "SKGRU",
    "Name": "SK Growth Opportunities Corporation Unit"
  },
  {
    "Symbol": "SKIL",
    "Name": "Skillsoft Corp. Class A Common Stock"
  },
  {
    "Symbol": "SKIN",
    "Name": "The Beauty Health Company Class A Common Stock"
  },
  {
    "Symbol": "SKLZ",
    "Name": "Skillz Inc. Class A Common Stock"
  },
  {
    "Symbol": "SKM",
    "Name": "SK Telecom Co. Ltd. Common Stock"
  },
  {
    "Symbol": "SKT",
    "Name": "Tanger Factory Outlet Centers Inc. Common Stock"
  },
  {
    "Symbol": "SKWD",
    "Name": "Skyward Specialty Insurance Group Inc. Common Stock"
  },
  {
    "Symbol": "SKX",
    "Name": "Skechers U.S.A. Inc. Common Stock"
  },
  {
    "Symbol": "SKY",
    "Name": "Skyline Champion Corporation Common Stock"
  },
  {
    "Symbol": "SKYH",
    "Name": "Sky Harbour Group Corporation Class A Common Stock"
  },
  {
    "Symbol": "SKYT",
    "Name": "SkyWater Technology Inc. Common Stock"
  },
  {
    "Symbol": "SKYW",
    "Name": "SkyWest Inc. Common Stock"
  },
  {
    "Symbol": "SKYX",
    "Name": "SKYX Platforms Corp. Common Stock"
  },
  {
    "Symbol": "SLAB",
    "Name": "Silicon Laboratories Inc. Common Stock"
  },
  {
    "Symbol": "SLAC",
    "Name": "Social Leverage Acquisition Corp I Class A Common Stock"
  },
  {
    "Symbol": "SLACU",
    "Name": "Social Leverage Acquisition Corp I Units each consisting of one share of Class A common stock and one-fourth of one redeemable warrant"
  },
  {
    "Symbol": "SLACW",
    "Name": "Social Leverage Acquisition Corp I Redeemable warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of $11.50"
  },
  {
    "Symbol": "SLAM",
    "Name": "Slam Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "SLAMU",
    "Name": "Slam Corp. Unit"
  },
  {
    "Symbol": "SLB",
    "Name": "Schlumberger N.V. Common Stock"
  },
  {
    "Symbol": "SLCA",
    "Name": "U.S. Silica Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SLDB",
    "Name": "Solid Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "SLDP",
    "Name": "Solid Power Inc. Class A Common Stock"
  },
  {
    "Symbol": "SLDPW",
    "Name": "Solid Power Inc. Warrant"
  },
  {
    "Symbol": "SLF",
    "Name": "Sun Life Financial Inc. Common Stock"
  },
  {
    "Symbol": "SLG",
    "Name": "SL Green Realty Corp Common Stock"
  },
  {
    "Symbol": "SLG^I",
    "Name": "SL Green Realty Corporation Preferred Series I"
  },
  {
    "Symbol": "SLGC",
    "Name": "SomaLogic Inc. Class A Common Stock"
  },
  {
    "Symbol": "SLGCW",
    "Name": "SomaLogic Inc. Warrant"
  },
  {
    "Symbol": "SLGG",
    "Name": "Super League Gaming Inc. Common Stock"
  },
  {
    "Symbol": "SLGL",
    "Name": "Sol-Gel Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SLGN",
    "Name": "Silgan Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SLI",
    "Name": "Standard Lithium Ltd. Common Shares"
  },
  {
    "Symbol": "SLM",
    "Name": "SLM Corporation Common Stock"
  },
  {
    "Symbol": "SLMBP",
    "Name": "SLM Corporation Floating Rate Non-Cumulative Preferred Stock Series B"
  },
  {
    "Symbol": "SLN",
    "Name": "Silence Therapeutics Plc American Depository Share"
  },
  {
    "Symbol": "SLNA",
    "Name": "Selina Hospitality PLC Ordinary Shares"
  },
  {
    "Symbol": "SLNAW",
    "Name": "Selina Hospitality PLC Warrant"
  },
  {
    "Symbol": "SLND",
    "Name": "Southland Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SLNG",
    "Name": "Stabilis Solutions Inc. Common Stock"
  },
  {
    "Symbol": "SLNH",
    "Name": "Soluna Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SLNHP",
    "Name": "Soluna Holdings Inc 9.0% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "SLNO",
    "Name": "Soleno Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SLP",
    "Name": "Simulations Plus Inc. Common Stock"
  },
  {
    "Symbol": "SLQT",
    "Name": "SelectQuote Inc. Common Stock"
  },
  {
    "Symbol": "SLRC",
    "Name": "SLR Investment Corp. Common Stock"
  },
  {
    "Symbol": "SLRX",
    "Name": "Salarius Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SLS",
    "Name": "SELLAS Life Sciences Group Inc. Common Stock"
  },
  {
    "Symbol": "SLVM",
    "Name": "Sylvamo Corporation Common Stock"
  },
  {
    "Symbol": "SLVR",
    "Name": "SilverSPAC Inc. Class A Ordinary Share"
  },
  {
    "Symbol": "SLVRU",
    "Name": "SilverSPAC Inc. Unit"
  },
  {
    "Symbol": "SM",
    "Name": "SM Energy Company Common Stock"
  },
  {
    "Symbol": "SMAP",
    "Name": "SportsMap Tech Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "SMAR",
    "Name": "Smartsheet Inc. Class A Common Stock"
  },
  {
    "Symbol": "SMBC",
    "Name": "Southern Missouri Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SMBK",
    "Name": "SmartFinancial Inc. Common Stock"
  },
  {
    "Symbol": "SMCI",
    "Name": "Super Micro Computer Inc. Common Stock"
  },
  {
    "Symbol": "SMFG",
    "Name": "Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)"
  },
  {
    "Symbol": "SMFL",
    "Name": "Smart for Life Inc. Common Stock"
  },
  {
    "Symbol": "SMG",
    "Name": "Scotts Miracle-Gro Company (The) Common Stock"
  },
  {
    "Symbol": "SMHI",
    "Name": "SEACOR Marine Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SMID",
    "Name": "Smith-Midland Corporation Common Stock"
  },
  {
    "Symbol": "SMLP",
    "Name": "Summit Midstream Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "SMLR",
    "Name": "Semler Scientific Inc. Common Stock"
  },
  {
    "Symbol": "SMMF",
    "Name": "Summit Financial Group Inc. Common Stock"
  },
  {
    "Symbol": "SMMT",
    "Name": "Summit Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SMP",
    "Name": "Standard Motor Products Inc. Common Stock"
  },
  {
    "Symbol": "SMPL",
    "Name": "The Simply Good Foods Company Common Stock"
  },
  {
    "Symbol": "SMR",
    "Name": "NuScale Power Corporation Class A Common Stock"
  },
  {
    "Symbol": "SMRT",
    "Name": "SmartRent Inc. Class A Common Stock"
  },
  {
    "Symbol": "SMSI",
    "Name": "Smith Micro Software Inc. Common Stock"
  },
  {
    "Symbol": "SMTC",
    "Name": "Semtech Corporation Common Stock"
  },
  {
    "Symbol": "SMTI",
    "Name": "Sanara MedTech Inc. Common Stock"
  },
  {
    "Symbol": "SMWB",
    "Name": "Similarweb Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SMX",
    "Name": "SMX (Security Matters) Public Limited Company Class A Ordinary Shares"
  },
  {
    "Symbol": "SMXWW",
    "Name": "SMX (Security Matters) Public Limited Company Warrant"
  },
  {
    "Symbol": "SNA",
    "Name": "Snap-On Incorporated Common Stock"
  },
  {
    "Symbol": "SNAL",
    "Name": "Snail Inc. Class A Common Stock"
  },
  {
    "Symbol": "SNAP",
    "Name": "Snap Inc. Class A Common Stock"
  },
  {
    "Symbol": "SNAX",
    "Name": "Stryve Foods Inc. Class A Common Stock"
  },
  {
    "Symbol": "SNAXW",
    "Name": "Stryve Foods Inc. Warrant"
  },
  {
    "Symbol": "SNBR",
    "Name": "Sleep Number Corporation Common Stock"
  },
  {
    "Symbol": "SNCE",
    "Name": "Science 37 Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SNCR",
    "Name": "Synchronoss Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SNCRL",
    "Name": "Synchronoss Technologies Inc. 8.375% Senior Notes due 2026"
  },
  {
    "Symbol": "SNCY",
    "Name": "Sun Country Airlines Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SND",
    "Name": "Smart Sand Inc. Common Stock"
  },
  {
    "Symbol": "SNDA",
    "Name": "Sonida Senior Living Inc. Common Stock"
  },
  {
    "Symbol": "SNDL",
    "Name": "SNDL Inc. Common Shares"
  },
  {
    "Symbol": "SNDR",
    "Name": "Schneider National Inc. Common Stock"
  },
  {
    "Symbol": "SNDX",
    "Name": "Syndax Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SNES",
    "Name": "SenesTech Inc. Common Stock"
  },
  {
    "Symbol": "SNEX",
    "Name": "StoneX Group Inc. Common Stock"
  },
  {
    "Symbol": "SNFCA",
    "Name": "Security National Financial Corporation Class A Common Stock"
  },
  {
    "Symbol": "SNGX",
    "Name": "Soligenix Inc. Common Stock"
  },
  {
    "Symbol": "SNMP",
    "Name": "Evolve Transition Infrastructure LP Common Stock"
  },
  {
    "Symbol": "SNN",
    "Name": "Smith & Nephew SNATS Inc. Common Stock"
  },
  {
    "Symbol": "SNOA",
    "Name": "Sonoma Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SNOW",
    "Name": "Snowflake Inc. Class A Common Stock"
  },
  {
    "Symbol": "SNPO",
    "Name": "Snap One Holdings Corp. Common Stock"
  },
  {
    "Symbol": "SNPS",
    "Name": "Synopsys Inc. Common Stock"
  },
  {
    "Symbol": "SNPX",
    "Name": "Synaptogenix Inc. Common Stock"
  },
  {
    "Symbol": "SNRHU",
    "Name": "Senior Connect Acquisition Corp. I Unit"
  },
  {
    "Symbol": "SNSE",
    "Name": "Sensei Biotherapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SNT",
    "Name": "Senstar Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SNTG",
    "Name": "Sentage Holdings Inc. Ordinary Shares"
  },
  {
    "Symbol": "SNTI",
    "Name": "Senti Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "SNV",
    "Name": "Synovus Financial Corp. Common Stock"
  },
  {
    "Symbol": "SNV^D",
    "Name": "Synovus Financial Corp. Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D Liquation Preference $25.00 per Share"
  },
  {
    "Symbol": "SNV^E",
    "Name": "Synovus Financial Corp. 5.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "SNX",
    "Name": "TD SYNNEX Corporation Common Stock"
  },
  {
    "Symbol": "SNY",
    "Name": "Sanofi ADS"
  },
  {
    "Symbol": "SO",
    "Name": "Southern Company (The) Common Stock"
  },
  {
    "Symbol": "SOBR",
    "Name": "SOBR Safe Inc. Common Stock"
  },
  {
    "Symbol": "SOFI",
    "Name": "SoFi Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SOFO",
    "Name": "Sonic Foundry Inc. Common Stock"
  },
  {
    "Symbol": "SOHO",
    "Name": "Sotherly Hotels Inc. Common Stock"
  },
  {
    "Symbol": "SOHOB",
    "Name": "Sotherly Hotels Inc. 8.0% Series B Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "SOHON",
    "Name": "Sotherly Hotels Inc. 8.25% Series D Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "SOHOO",
    "Name": "Sotherly Hotels Inc. 7.875% Series C Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "SOHU",
    "Name": "Sohu.com Limited American Depositary Shares"
  },
  {
    "Symbol": "SOI",
    "Name": "Solaris Oilfield Infrastructure Inc. Class A Common Stock"
  },
  {
    "Symbol": "SOJC",
    "Name": "Southern Company (The) Series 2017B 5.25% Junior Subordinated Notes due December 1 2077"
  },
  {
    "Symbol": "SOJD",
    "Name": "Southern Company (The) Series 2020A 4.95% Junior Subordinated Notes due January 30 2080"
  },
  {
    "Symbol": "SOJE",
    "Name": "Southern Company (The) Series 2020C 4.20% Junior Subordinated Notes due October 15 2060"
  },
  {
    "Symbol": "SOL",
    "Name": "Emeren Group Ltd American Depositary Shares each representing 10 shares"
  },
  {
    "Symbol": "SOLO",
    "Name": "Electrameccanica Vehicles Corp. Ltd. Common Stock"
  },
  {
    "Symbol": "SOLOW",
    "Name": "Electrameccanica Vehicles Corp. Ltd. Warrants"
  },
  {
    "Symbol": "SON",
    "Name": "Sonoco Products Company Common Stock"
  },
  {
    "Symbol": "SOND",
    "Name": "Sonder Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "SONDW",
    "Name": "Sonder Holdings Inc. Warrants"
  },
  {
    "Symbol": "SONM",
    "Name": "Sonim Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SONN",
    "Name": "Sonnet BioTherapeutics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SONO",
    "Name": "Sonos Inc. Common Stock"
  },
  {
    "Symbol": "SONX",
    "Name": "Sonendo Inc. Common Stock"
  },
  {
    "Symbol": "SONY",
    "Name": "Sony Group Corporation American Depositary Shares"
  },
  {
    "Symbol": "SOPA",
    "Name": "Society Pass Incorporated Common Stock"
  },
  {
    "Symbol": "SOPH",
    "Name": "SOPHiA GENETICS SA Ordinary Shares"
  },
  {
    "Symbol": "SOR",
    "Name": "Source Capital Inc. Common Stock"
  },
  {
    "Symbol": "SOS",
    "Name": "SOS Limited American Depositary Shares"
  },
  {
    "Symbol": "SOTK",
    "Name": "Sono-Tek Corporation Common Stock"
  },
  {
    "Symbol": "SOUN",
    "Name": "SoundHound AI Inc Class A Common Stock"
  },
  {
    "Symbol": "SOUNW",
    "Name": "SoundHound AI Inc. Warrant"
  },
  {
    "Symbol": "SOVO",
    "Name": "Sovos Brands Inc. Common Stock"
  },
  {
    "Symbol": "SP",
    "Name": "SP Plus Corporation Common Stock"
  },
  {
    "Symbol": "SPB",
    "Name": "Spectrum Brands Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SPCB",
    "Name": "SuperCom Ltd. Ordinary Shares (Israel)"
  },
  {
    "Symbol": "SPCE",
    "Name": "Virgin Galactic Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SPCM",
    "Name": "Sound Point Acquisition Corp I Ltd Class A Ordinary Share"
  },
  {
    "Symbol": "SPCMU",
    "Name": "Sound Point Acquisition Corp I Ltd Unit"
  },
  {
    "Symbol": "SPCMW",
    "Name": "Sound Point Acquisition Corp I Ltd Warrant"
  },
  {
    "Symbol": "SPE",
    "Name": "Special Opportunities Fund Inc Common Stock"
  },
  {
    "Symbol": "SPE^C",
    "Name": "Special Opportunities Fund Inc. 2.75% Convertible Preferred Stock Series C"
  },
  {
    "Symbol": "SPFI",
    "Name": "South Plains Financial Inc. Common Stock"
  },
  {
    "Symbol": "SPG",
    "Name": "Simon Property Group Inc. Common Stock"
  },
  {
    "Symbol": "SPG^J",
    "Name": "Simon Property Group Inc. Simon Property Group 8 3/8% Series J Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "SPGI",
    "Name": "S&P Global Inc. Common Stock"
  },
  {
    "Symbol": "SPH",
    "Name": "Suburban Propane Partners L.P. Common Stock"
  },
  {
    "Symbol": "SPHR",
    "Name": "Sphere Entertainment Co. Class A Common Stock"
  },
  {
    "Symbol": "SPI",
    "Name": "SPI Energy Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SPIR",
    "Name": "Spire Global Inc. Class A Common Stock"
  },
  {
    "Symbol": "SPLK",
    "Name": "Splunk Inc. Common Stock"
  },
  {
    "Symbol": "SPLP",
    "Name": "Steel Partners Holdings LP LTD PARTNERSHIP UNIT"
  },
  {
    "Symbol": "SPLP^A",
    "Name": "Steel Partners Holdings LP 6.0% Series A Preferred Units no par value"
  },
  {
    "Symbol": "SPNS",
    "Name": "Sapiens International Corporation N.V. Common Shares (Cayman Islands)"
  },
  {
    "Symbol": "SPNT",
    "Name": "SiriusPoint Ltd. Common Shares"
  },
  {
    "Symbol": "SPNT^B",
    "Name": "SiriusPoint Ltd. 8.00% Resettable Fixed Rate Preference Shares Series B $25.00 liquidation preference per share"
  },
  {
    "Symbol": "SPOK",
    "Name": "Spok Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SPOT",
    "Name": "Spotify Technology S.A. Ordinary Shares"
  },
  {
    "Symbol": "SPPI",
    "Name": "Spectrum Pharmaceuticals Inc.Common Stock"
  },
  {
    "Symbol": "SPR",
    "Name": "Spirit Aerosystems Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SPRB",
    "Name": "Spruce Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "SPRC",
    "Name": "SciSparc Ltd. Ordinary Shares"
  },
  {
    "Symbol": "SPRO",
    "Name": "Spero Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SPRU",
    "Name": "Spruce Power Holding Corporation Class A Common Stock"
  },
  {
    "Symbol": "SPRY",
    "Name": "ARS Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SPSC",
    "Name": "SPS Commerce Inc. Common Stock"
  },
  {
    "Symbol": "SPT",
    "Name": "Sprout Social Inc Class A Common Stock"
  },
  {
    "Symbol": "SPTN",
    "Name": "SpartanNash Company Common Stock"
  },
  {
    "Symbol": "SPWH",
    "Name": "Sportsman's Warehouse Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SPWR",
    "Name": "SunPower Corporation Common Stock"
  },
  {
    "Symbol": "SPXC",
    "Name": "SPX Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SPXX",
    "Name": "Nuveen S&P 500 Dynamic Overwrite Fund"
  },
  {
    "Symbol": "SQ",
    "Name": "Block Inc. Class A Common Stock"
  },
  {
    "Symbol": "SQFT",
    "Name": "Presidio Property Trust Inc. Class A Common Stock"
  },
  {
    "Symbol": "SQFTP",
    "Name": "Presidio Property Trust Inc. 9.375% Series D Cumulative Redeemable Perpetual Preferred Stock $0.01 par value per share"
  },
  {
    "Symbol": "SQFTW",
    "Name": "Presidio Property Trust Inc. Series A Common Stock Purchase Warrants"
  },
  {
    "Symbol": "SQL",
    "Name": "SeqLL Inc. Common stock"
  },
  {
    "Symbol": "SQLLW",
    "Name": "SeqLL Inc. Warrant"
  },
  {
    "Symbol": "SQM",
    "Name": "Sociedad Quimica y Minera S.A. Common Stock"
  },
  {
    "Symbol": "SQNS",
    "Name": "Sequans Communications S.A. American Depositary Shares"
  },
  {
    "Symbol": "SQSP",
    "Name": "Squarespace Inc. Class A Common Stock"
  },
  {
    "Symbol": "SQZ",
    "Name": "SQZ Biotechnologies Company Common Stock"
  },
  {
    "Symbol": "SR",
    "Name": "Spire Inc. Common Stock"
  },
  {
    "Symbol": "SR^A",
    "Name": "Spire Inc. Depositary Shares each representing a 1/1000th interest in a share of 5.90% Series A Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "SRAD",
    "Name": "Sportradar Group AG Class A Ordinary Shares"
  },
  {
    "Symbol": "SRC",
    "Name": "Spirit Realty Capital Inc. Common Stock"
  },
  {
    "Symbol": "SRC^A",
    "Name": "Spirit Realty Capital Inc. 6.000% Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "SRCE",
    "Name": "1st Source Corporation Common Stock"
  },
  {
    "Symbol": "SRCL",
    "Name": "Stericycle Inc. Common Stock"
  },
  {
    "Symbol": "SRDX",
    "Name": "Surmodics Inc. Common Stock"
  },
  {
    "Symbol": "SRE",
    "Name": "DBA Sempra Common Stock"
  },
  {
    "Symbol": "SREA",
    "Name": "DBA Sempra 5.750% Junior Subordinated Notes due 2079"
  },
  {
    "Symbol": "SRG",
    "Name": "Seritage Growth Properties Class A Common Stock"
  },
  {
    "Symbol": "SRG^A",
    "Name": "Seritage Growth Properties 7.00% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
  },
  {
    "Symbol": "SRGA",
    "Name": "Surgalign Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SRI",
    "Name": "Stoneridge Inc. Common Stock"
  },
  {
    "Symbol": "SRL",
    "Name": "Scully Royalty Ltd."
  },
  {
    "Symbol": "SRPT",
    "Name": "Sarepta Therapeutics Inc. Common Stock (DE)"
  },
  {
    "Symbol": "SRRK",
    "Name": "Scholar Rock Holding Corporation Common Stock"
  },
  {
    "Symbol": "SRT",
    "Name": "StarTek Inc. Common Stock"
  },
  {
    "Symbol": "SRTS",
    "Name": "Sensus Healthcare Inc. Common Stock"
  },
  {
    "Symbol": "SRV",
    "Name": "NXG Cushing Midstream Energy Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "SRZN",
    "Name": "Surrozen Inc. Common Stock"
  },
  {
    "Symbol": "SRZNW",
    "Name": "Surrozen Inc. Warrant"
  },
  {
    "Symbol": "SSB",
    "Name": "SouthState Corporation Common Stock"
  },
  {
    "Symbol": "SSBI",
    "Name": "Summit State Bank Common Stock"
  },
  {
    "Symbol": "SSBK",
    "Name": "Southern States Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "SSD",
    "Name": "Simpson Manufacturing Company Inc. Common Stock"
  },
  {
    "Symbol": "SSIC",
    "Name": "Silver Spike Investment Corp. Common Stock"
  },
  {
    "Symbol": "SSKN",
    "Name": "Strata Skin Sciences Inc. Common Stock"
  },
  {
    "Symbol": "SSL",
    "Name": "Sasol Ltd. American Depositary Shares"
  },
  {
    "Symbol": "SSNC",
    "Name": "SS&C Technologies Holdings Inc. Common Stock"
  },
  {
    "Symbol": "SSNT",
    "Name": "SilverSun Technologies Inc. Common Stock"
  },
  {
    "Symbol": "SSP",
    "Name": "E.W. Scripps Company (The) Class A Common Stock"
  },
  {
    "Symbol": "SSRM",
    "Name": "SSR Mining Inc. Common Stock"
  },
  {
    "Symbol": "SSSS",
    "Name": "SuRo Capital Corp. Common Stock"
  },
  {
    "Symbol": "SSSSL",
    "Name": "SuRo Capital Corp. 6.00% Notes due 2026"
  },
  {
    "Symbol": "SST",
    "Name": "System1 Inc. Class A Common Stock"
  },
  {
    "Symbol": "SSTI",
    "Name": "SoundThinking Inc. Common Stock"
  },
  {
    "Symbol": "SSTK",
    "Name": "Shutterstock Inc. Common Stock"
  },
  {
    "Symbol": "SSU",
    "Name": "SIGNA Sports United N.V. Ordinary Share"
  },
  {
    "Symbol": "SSY",
    "Name": "SunLink Health Systems Inc. Common Stock"
  },
  {
    "Symbol": "SSYS",
    "Name": "Stratasys Ltd. Ordinary Shares (Israel)"
  },
  {
    "Symbol": "ST",
    "Name": "Sensata Technologies Holding plc Ordinary Shares"
  },
  {
    "Symbol": "STAA",
    "Name": "STAAR Surgical Company Common Stock"
  },
  {
    "Symbol": "STAF",
    "Name": "Staffing 360 Solutions Inc. Common Stock (DE)"
  },
  {
    "Symbol": "STAG",
    "Name": "Stag Industrial Inc. Common Stock"
  },
  {
    "Symbol": "STBA",
    "Name": "S&T Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "STBX",
    "Name": "Starbox Group Holdings Ltd. Ordinary Shares"
  },
  {
    "Symbol": "STC",
    "Name": "Stewart Information Services Corporation Common Stock"
  },
  {
    "Symbol": "STCN",
    "Name": "Steel Connect Inc. Common Stock"
  },
  {
    "Symbol": "STE",
    "Name": "STERIS plc (Ireland) Ordinary Shares"
  },
  {
    "Symbol": "STEL",
    "Name": "Stellar Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "STEM",
    "Name": "Stem Inc. Class A Common Stock"
  },
  {
    "Symbol": "STEP",
    "Name": "StepStone Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "STER",
    "Name": "Sterling Check Corp. Common Stock"
  },
  {
    "Symbol": "STET",
    "Name": "ST Energy Transition I Ltd. Class A Ordinary Shares"
  },
  {
    "Symbol": "STEW",
    "Name": "SRH Total Return Fund Inc. Common Stock"
  },
  {
    "Symbol": "STG",
    "Name": "Sunlands Technology Group American Depositary Shares representing Class A ordinary shares"
  },
  {
    "Symbol": "STGW",
    "Name": "Stagwell Inc. Class A Common Stock"
  },
  {
    "Symbol": "STHO",
    "Name": "Star Holdings Shares of Beneficial Interest"
  },
  {
    "Symbol": "STIM",
    "Name": "Neuronetics Inc. Common Stock"
  },
  {
    "Symbol": "STIX",
    "Name": "Semantix Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "STIXW",
    "Name": "Semantix Inc. Warrant"
  },
  {
    "Symbol": "STK",
    "Name": "Columbia Seligman Premium Technology Growth Fund Inc"
  },
  {
    "Symbol": "STKH",
    "Name": "Steakholder Foods Ltd. American Depositary Shares"
  },
  {
    "Symbol": "STKL",
    "Name": "SunOpta Inc. Common Stock"
  },
  {
    "Symbol": "STKS",
    "Name": "The ONE Group Hospitality Inc. Common Stock"
  },
  {
    "Symbol": "STLA",
    "Name": "Stellantis N.V. Common Shares"
  },
  {
    "Symbol": "STLD",
    "Name": "Steel Dynamics Inc."
  },
  {
    "Symbol": "STM",
    "Name": "STMicroelectronics N.V. Common Stock"
  },
  {
    "Symbol": "STN",
    "Name": "Stantec Inc Common Stock"
  },
  {
    "Symbol": "STNE",
    "Name": "StoneCo Ltd. Class A Common Shares"
  },
  {
    "Symbol": "STNG",
    "Name": "Scorpio Tankers Inc. Common Shares"
  },
  {
    "Symbol": "STOK",
    "Name": "Stoke Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "STR",
    "Name": "Sitio Royalties Corp. Class A Common Stock"
  },
  {
    "Symbol": "STRA",
    "Name": "Strategic Education Inc. Common Stock"
  },
  {
    "Symbol": "STRC",
    "Name": "Sarcos Technology and Robotics Corporation Common Stock"
  },
  {
    "Symbol": "STRCW",
    "Name": "Sarcos Technology and Robotics Corporation Warrants"
  },
  {
    "Symbol": "STRL",
    "Name": "Sterling Infrastructure Inc. Common Stock"
  },
  {
    "Symbol": "STRM",
    "Name": "Streamline Health Solutions Inc. Common Stock"
  },
  {
    "Symbol": "STRO",
    "Name": "Sutro Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "STRR",
    "Name": "Star Equity Holdings Inc. Common Stock"
  },
  {
    "Symbol": "STRRP",
    "Name": "Star Equity Holdings Inc. Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "STRS",
    "Name": "Stratus Properties Inc. Common Stock"
  },
  {
    "Symbol": "STRT",
    "Name": "STRATTEC SECURITY CORPORATION Common Stock"
  },
  {
    "Symbol": "STRW",
    "Name": "Strawberry Fields REIT Inc. Common Stock"
  },
  {
    "Symbol": "STSA",
    "Name": "Satsuma Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "STSS",
    "Name": "Sharps Technology Inc. Common Stock"
  },
  {
    "Symbol": "STSSW",
    "Name": "Sharps Technology Inc. Warrant"
  },
  {
    "Symbol": "STT",
    "Name": "State Street Corporation Common Stock"
  },
  {
    "Symbol": "STT^D",
    "Name": "State Street Corporation Depositary Shares representing 1/4000th Perpetual Preferred Series D"
  },
  {
    "Symbol": "STT^G",
    "Name": "State Street Corporation Depositary shares each representing a 1/4000th ownership interest in a share of Fixed-to-Floating Rate Non-Cumulative"
  },
  {
    "Symbol": "STTK",
    "Name": "Shattuck Labs Inc. Common Stock"
  },
  {
    "Symbol": "STVN",
    "Name": "Stevanato Group S.p.A. Ordinary Shares"
  },
  {
    "Symbol": "STWD",
    "Name": "STARWOOD PROPERTY TRUST INC. Starwood Property Trust Inc."
  },
  {
    "Symbol": "STX",
    "Name": "Seagate Technology Holdings PLC Ordinary Shares (Ireland)"
  },
  {
    "Symbol": "STXS",
    "Name": "Stereotaxis Inc. Common Stock"
  },
  {
    "Symbol": "STZ",
    "Name": "Constellation Brands Inc. Common Stock"
  },
  {
    "Symbol": "SU",
    "Name": "Suncor Energy  Inc. Common Stock"
  },
  {
    "Symbol": "SUAC",
    "Name": "ShoulderUp Technology Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "SUI",
    "Name": "Sun Communities Inc. Common Stock"
  },
  {
    "Symbol": "SUM",
    "Name": "Summit Materials Inc. Class A Common Stock"
  },
  {
    "Symbol": "SUMO",
    "Name": "Sumo Logic Inc. Common Stock"
  },
  {
    "Symbol": "SUN",
    "Name": "Sunoco LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "SUNL",
    "Name": "Sunlight Financial Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "SUNW",
    "Name": "Sunworks Inc. Common Stock"
  },
  {
    "Symbol": "SUP",
    "Name": "Superior Industries International Inc. Common Stock (DE)"
  },
  {
    "Symbol": "SUPN",
    "Name": "Supernus Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SUPV",
    "Name": "Grupo Supervielle S.A. American Depositary Shares each Representing five Class B shares"
  },
  {
    "Symbol": "SURF",
    "Name": "Surface Oncology Inc. Common Stock"
  },
  {
    "Symbol": "SURG",
    "Name": "SurgePays Inc. Common Stock"
  },
  {
    "Symbol": "SURGW",
    "Name": "SurgePays Inc. Warrant"
  },
  {
    "Symbol": "SUZ",
    "Name": "Suzano S.A. American Depositary Shares (each representing One Ordinary Share)"
  },
  {
    "Symbol": "SVC",
    "Name": "Service Properties Trust Common Stock"
  },
  {
    "Symbol": "SVFD",
    "Name": "Save Foods Inc. Common Stock"
  },
  {
    "Symbol": "SVII",
    "Name": "Spring Valley Acquisition Corp. II Class A Ordinary Shares"
  },
  {
    "Symbol": "SVIIU",
    "Name": "Spring Valley Acquisition Corp. II Unit"
  },
  {
    "Symbol": "SVM",
    "Name": "Silvercorp Metals Inc. Common Shares"
  },
  {
    "Symbol": "SVNA",
    "Name": "7 Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "SVNAU",
    "Name": "7 Acquisition Corporation Unit"
  },
  {
    "Symbol": "SVNAW",
    "Name": "7 Acquisition Corporation Warrant"
  },
  {
    "Symbol": "SVRA",
    "Name": "Savara Inc. Common Stock"
  },
  {
    "Symbol": "SVRE",
    "Name": "SaverOne 2014 Ltd. American Depositary Shares"
  },
  {
    "Symbol": "SVREW",
    "Name": "SaverOne 2014 Ltd. Warrant"
  },
  {
    "Symbol": "SVT",
    "Name": "Servotronics Inc. Common Stock"
  },
  {
    "Symbol": "SVVC",
    "Name": "Firsthand Technology Value Fund Inc. Common Stock"
  },
  {
    "Symbol": "SWAG",
    "Name": "Stran & Company Inc. Common Stock"
  },
  {
    "Symbol": "SWAV",
    "Name": "ShockWave Medical Inc. Common Stock"
  },
  {
    "Symbol": "SWBI",
    "Name": "Smith & Wesson Brands Inc. Common Stock"
  },
  {
    "Symbol": "SWI",
    "Name": "SolarWinds Corporation Common Stock"
  },
  {
    "Symbol": "SWIM",
    "Name": "Latham Group Inc. Common Stock"
  },
  {
    "Symbol": "SWK",
    "Name": "Stanley Black & Decker Inc. Common Stock"
  },
  {
    "Symbol": "SWKH",
    "Name": "SWK Holdings Corporation Common Stock"
  },
  {
    "Symbol": "SWKS",
    "Name": "Skyworks Solutions Inc. Common Stock"
  },
  {
    "Symbol": "SWN",
    "Name": "Southwestern Energy Company Common Stock"
  },
  {
    "Symbol": "SWSS",
    "Name": "Springwater Special Situations Corp. Common stock"
  },
  {
    "Symbol": "SWSSU",
    "Name": "Springwater Special Situations Corp. Unit"
  },
  {
    "Symbol": "SWTX",
    "Name": "SpringWorks Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "SWVL",
    "Name": "Swvl Holdings Corp Class A Common Shares"
  },
  {
    "Symbol": "SWVLW",
    "Name": "Swvl Holdings Corp Warrant"
  },
  {
    "Symbol": "SWX",
    "Name": "Southwest Gas Holdings Inc. Common Stock (DE)"
  },
  {
    "Symbol": "SWZ",
    "Name": "Swiss Helvetia Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "SXC",
    "Name": "SunCoke Energy Inc. Common Stock"
  },
  {
    "Symbol": "SXI",
    "Name": "Standex International Corporation Common Stock"
  },
  {
    "Symbol": "SXT",
    "Name": "Sensient Technologies Corporation Common Stock"
  },
  {
    "Symbol": "SXTC",
    "Name": "China SXT Pharmaceuticals Inc. Ordinary Shares"
  },
  {
    "Symbol": "SY",
    "Name": "So-Young International Inc. American Depository Shares"
  },
  {
    "Symbol": "SYBT",
    "Name": "Stock Yards Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "SYBX",
    "Name": "Synlogic Inc. Common Stock"
  },
  {
    "Symbol": "SYF",
    "Name": "Synchrony Financial Common Stock"
  },
  {
    "Symbol": "SYF^A",
    "Name": "Synchrony Financial Depositary Shares each Representing a 1/40th Interest in a Share of 5.625% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "SYK",
    "Name": "Stryker Corporation Common Stock"
  },
  {
    "Symbol": "SYM",
    "Name": "Symbotic Inc. Class A Common Stock"
  },
  {
    "Symbol": "SYNA",
    "Name": "Synaptics Incorporated Common Stock $0.001 Par Value"
  },
  {
    "Symbol": "SYNH",
    "Name": "Syneos Health Inc. Class A Common Stock"
  },
  {
    "Symbol": "SYPR",
    "Name": "Sypris Solutions Inc. Common Stock"
  },
  {
    "Symbol": "SYRS",
    "Name": "Syros Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "SYT",
    "Name": "SYLA Technologies Co. Ltd. American Depositary Shares"
  },
  {
    "Symbol": "SYTA",
    "Name": "Siyata Mobile Inc. Common Shares"
  },
  {
    "Symbol": "SYTAW",
    "Name": "Siyata Mobile Inc. Warrant"
  },
  {
    "Symbol": "SYY",
    "Name": "Sysco Corporation Common Stock"
  },
  {
    "Symbol": "SZZL",
    "Name": "Sizzle Acquisition Corp. Common stock"
  },
  {
    "Symbol": "T",
    "Name": "AT&T Inc."
  },
  {
    "Symbol": "T^A",
    "Name": "AT&T Inc. Depositary Shares each representing a 1/1000th interest in a share of 5.000% Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "T^C",
    "Name": "AT&T Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.750% Perpetual Preferred Stock Series C"
  },
  {
    "Symbol": "TA",
    "Name": "TravelCenters of America Inc. Common Stock"
  },
  {
    "Symbol": "TAC",
    "Name": "TransAlta Corporation Ordinary Shares"
  },
  {
    "Symbol": "TACT",
    "Name": "TransAct Technologies Incorporated Common Stock"
  },
  {
    "Symbol": "TAIT",
    "Name": "Taitron Components Incorporated Class A Common Stock"
  },
  {
    "Symbol": "TAK",
    "Name": "Takeda Pharmaceutical Company Limited American Depositary Shares (each representing 1/2 of a share of Common Stock)"
  },
  {
    "Symbol": "TAL",
    "Name": "TAL Education Group American Depositary Shares"
  },
  {
    "Symbol": "TALK",
    "Name": "Talkspace Inc. Common Stock"
  },
  {
    "Symbol": "TALKW",
    "Name": "Talkspace Inc. Warrant"
  },
  {
    "Symbol": "TALO",
    "Name": "Talos Energy Inc. Common Stock"
  },
  {
    "Symbol": "TALS",
    "Name": "Talaris Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TANH",
    "Name": "Tantech Holdings Ltd. Common Shares"
  },
  {
    "Symbol": "TANNI",
    "Name": "TravelCenters of America Inc. 8.25% Senior Notes due 2028"
  },
  {
    "Symbol": "TANNL",
    "Name": "TravelCenters of America Inc. 8.00% Senior Notes due 2029"
  },
  {
    "Symbol": "TANNZ",
    "Name": "TravelCenters of America Inc. 8.00% Senior Notes due 2030"
  },
  {
    "Symbol": "TAOP",
    "Name": "Taoping Inc. Ordinary Shares"
  },
  {
    "Symbol": "TAP",
    "Name": "Molson Coors Beverage Company Class B Common Stock"
  },
  {
    "Symbol": "TARA",
    "Name": "Protara Therapeutics Inc.  Common Stock"
  },
  {
    "Symbol": "TARO",
    "Name": "Taro Pharmaceutical Industries Ltd. Ordinary Shares"
  },
  {
    "Symbol": "TARS",
    "Name": "Tarsus Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TASK",
    "Name": "TaskUs Inc. Class A Common Stock"
  },
  {
    "Symbol": "TAST",
    "Name": "Carrols Restaurant Group Inc. Common Stock"
  },
  {
    "Symbol": "TATT",
    "Name": "TAT Technologies Ltd. Ordinary Shares"
  },
  {
    "Symbol": "TAYD",
    "Name": "Taylor Devices Inc. Common Stock"
  },
  {
    "Symbol": "TBB",
    "Name": "AT&T Inc. 5.350% Global Notes due 2066"
  },
  {
    "Symbol": "TBBK",
    "Name": "The Bancorp Inc Common Stock"
  },
  {
    "Symbol": "TBC",
    "Name": "AT&T Inc. 5.625% Global Notes due 2067"
  },
  {
    "Symbol": "TBCP",
    "Name": "Thunder Bridge Capital Partners III Inc. Class A Common Stock"
  },
  {
    "Symbol": "TBCPW",
    "Name": "Thunder Bridge Capital Partners III Inc. Warrant"
  },
  {
    "Symbol": "TBI",
    "Name": "TrueBlue Inc. Common Stock"
  },
  {
    "Symbol": "TBIO",
    "Name": "Telesis Bio Inc. Common Stock"
  },
  {
    "Symbol": "TBLA",
    "Name": "Taboola.com Ltd. Ordinary Shares"
  },
  {
    "Symbol": "TBLD",
    "Name": "Thornburg Income Builder Opportunities Trust Common Stock"
  },
  {
    "Symbol": "TBLT",
    "Name": "ToughBuilt Industries Inc. Common Stock"
  },
  {
    "Symbol": "TBLTW",
    "Name": "ToughBuilt Industries Inc. Warrant"
  },
  {
    "Symbol": "TBMCU",
    "Name": "Trailblazer Merger Corporation I Unit"
  },
  {
    "Symbol": "TBNK",
    "Name": "Territorial Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "TBPH",
    "Name": "Theravance Biopharma Inc. Ordinary Shares"
  },
  {
    "Symbol": "TC",
    "Name": "TuanChe Limited American Depositary Shares"
  },
  {
    "Symbol": "TCBC",
    "Name": "TC Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "TCBI",
    "Name": "Texas Capital Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "TCBIO",
    "Name": "Texas Capital Bancshares Inc. Depositary Shares 5.75% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series B"
  },
  {
    "Symbol": "TCBK",
    "Name": "TriCo Bancshares Common Stock"
  },
  {
    "Symbol": "TCBP",
    "Name": "TC BioPharm (Holdings) plc American Depositary Shares"
  },
  {
    "Symbol": "TCBPW",
    "Name": "TC BioPharm (Holdings) plc Warrants"
  },
  {
    "Symbol": "TCBS",
    "Name": "Texas Community Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "TCBX",
    "Name": "Third Coast Bancshares Inc. Common Stock"
  },
  {
    "Symbol": "TCFC",
    "Name": "The Community Financial Corporation Common Stock"
  },
  {
    "Symbol": "TCI",
    "Name": "Transcontinental Realty Investors Inc. Common Stock"
  },
  {
    "Symbol": "TCJH",
    "Name": "Top KingWin Ltd Class A Ordinary Shares"
  },
  {
    "Symbol": "TCMD",
    "Name": "Tactile Systems Technology Inc. Common Stock"
  },
  {
    "Symbol": "TCN",
    "Name": "Tricon Residential Inc. Common Shares"
  },
  {
    "Symbol": "TCOA",
    "Name": "Trajectory Alpha Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "TCOM",
    "Name": "Trip.com Group Limited American Depositary Shares"
  },
  {
    "Symbol": "TCON",
    "Name": "TRACON Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TCPC",
    "Name": "BlackRock TCP Capital Corp. Common Stock"
  },
  {
    "Symbol": "TCRR",
    "Name": "TCR2 Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TCRT",
    "Name": "Alaunos Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TCRX",
    "Name": "TScan Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TCS",
    "Name": "Container Store (The) Common Stock"
  },
  {
    "Symbol": "TCX",
    "Name": "Tucows Inc. Class A Common Stock"
  },
  {
    "Symbol": "TD",
    "Name": "Toronto Dominion Bank (The) Common Stock"
  },
  {
    "Symbol": "TDC",
    "Name": "Teradata Corporation Common Stock"
  },
  {
    "Symbol": "TDCX",
    "Name": "TDCX Inc. American Depositary Shares each representing one Class A ordinary share"
  },
  {
    "Symbol": "TDF",
    "Name": "Templeton Dragon Fund Inc. Common Stock"
  },
  {
    "Symbol": "TDG",
    "Name": "Transdigm Group Incorporated Common Stock"
  },
  {
    "Symbol": "TDOC",
    "Name": "Teladoc Health Inc. Common Stock"
  },
  {
    "Symbol": "TDS",
    "Name": "Telephone and Data Systems Inc. Common Shares"
  },
  {
    "Symbol": "TDS^U",
    "Name": "Telephone and Data Systems Inc. Depositary Shares Each Representing a 1/1000th Interest in a 6.625% Series UU Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "TDS^V",
    "Name": "Telephone and Data Systems Inc. Depositary Shares Each Representing a 1/1000th Interest in a 6.000% Series VV Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "TDUP",
    "Name": "ThredUp Inc. Class A Common Stock"
  },
  {
    "Symbol": "TDW",
    "Name": "Tidewater Inc. Common Stock"
  },
  {
    "Symbol": "TDY",
    "Name": "Teledyne Technologies Incorporated Common Stock"
  },
  {
    "Symbol": "TEAF",
    "Name": "Ecofin Sustainable and Social Impact Term Fund"
  },
  {
    "Symbol": "TEAM",
    "Name": "Atlassian Corporation Class A Common Stock"
  },
  {
    "Symbol": "TECH",
    "Name": "Bio-Techne Corp Common Stock"
  },
  {
    "Symbol": "TECK",
    "Name": "Teck Resources Ltd Ordinary Shares"
  },
  {
    "Symbol": "TECTP",
    "Name": "Tectonic Financial Inc. 9.00% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "TEDU",
    "Name": "Tarena International Inc. American Depositary Shares"
  },
  {
    "Symbol": "TEF",
    "Name": "Telefonica SA Common Stock"
  },
  {
    "Symbol": "TEI",
    "Name": "Templeton Emerging Markets Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "TEL",
    "Name": "TE Connectivity Ltd. New Switzerland Registered Shares"
  },
  {
    "Symbol": "TELA",
    "Name": "TELA Bio Inc. Common Stock"
  },
  {
    "Symbol": "TELL",
    "Name": "Tellurian Inc. Common Stock"
  },
  {
    "Symbol": "TELZ",
    "Name": "Tellurian Inc. 8.25% Senior Notes due 2028"
  },
  {
    "Symbol": "TENB",
    "Name": "Tenable Holdings Inc. Common Stock"
  },
  {
    "Symbol": "TENKU",
    "Name": "TenX Keane Acquisition Unit"
  },
  {
    "Symbol": "TENX",
    "Name": "Tenax Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TEO",
    "Name": "Telecom Argentina SA"
  },
  {
    "Symbol": "TER",
    "Name": "Teradyne Inc. Common Stock"
  },
  {
    "Symbol": "TERN",
    "Name": "Terns Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TESS",
    "Name": "TESSCO Technologies Incorporated Common Stock"
  },
  {
    "Symbol": "TETE",
    "Name": "Technology & Telecommunication Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "TETEU",
    "Name": "Technology & Telecommunication Acquisition Corporation Unit"
  },
  {
    "Symbol": "TEVA",
    "Name": "Teva Pharmaceutical Industries Limited American Depositary Shares"
  },
  {
    "Symbol": "TEX",
    "Name": "Terex Corporation Common Stock"
  },
  {
    "Symbol": "TFC",
    "Name": "Truist Financial Corporation Common Stock"
  },
  {
    "Symbol": "TFC^I",
    "Name": "Truist Financial Corporation Depositary Shares"
  },
  {
    "Symbol": "TFC^O",
    "Name": "Truist Financial Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of Series O Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "TFC^R",
    "Name": "Truist Financial Corporation Depositary Shares each representing 1/1000th interest in a share of Series R Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "TFFP",
    "Name": "TFF Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TFII",
    "Name": "TFI International Inc. Common Shares"
  },
  {
    "Symbol": "TFIN",
    "Name": "Triumph Financial Inc. Common Stock"
  },
  {
    "Symbol": "TFINP",
    "Name": "Triumph Financial Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 7.125% Series C Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "TFPM",
    "Name": "Triple Flag Precious Metals Corp. Common Shares"
  },
  {
    "Symbol": "TFSA",
    "Name": "Terra Income Fund 6 LLC 7.00% Notes due 2026"
  },
  {
    "Symbol": "TFSL",
    "Name": "TFS Financial Corporation Common Stock"
  },
  {
    "Symbol": "TFX",
    "Name": "Teleflex Incorporated Common Stock"
  },
  {
    "Symbol": "TG",
    "Name": "Tredegar Corporation Common Stock"
  },
  {
    "Symbol": "TGAA",
    "Name": "Target Global Acquisition I Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "TGAAU",
    "Name": "Target Global Acquisition I Corp. Unit"
  },
  {
    "Symbol": "TGAAW",
    "Name": "Target Global Acquisition I Corp. Warrant"
  },
  {
    "Symbol": "TGAN",
    "Name": "Transphorm Inc. Common Stock"
  },
  {
    "Symbol": "TGB",
    "Name": "Taseko Mines Ltd. Common Stock"
  },
  {
    "Symbol": "TGH",
    "Name": "Textainer Group Holdings Limited Common Shares"
  },
  {
    "Symbol": "TGH^A",
    "Name": "Textainer Group Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 7.000% Series A Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TGH^B",
    "Name": "Textainer Group Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 6.250% Series B Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TGI",
    "Name": "Triumph Group Inc. Common Stock"
  },
  {
    "Symbol": "TGL",
    "Name": "Treasure Global Inc. Common Stock"
  },
  {
    "Symbol": "TGLS",
    "Name": "Tecnoglass Inc. Ordinary Shares"
  },
  {
    "Symbol": "TGNA",
    "Name": "TEGNA Inc"
  },
  {
    "Symbol": "TGR",
    "Name": "Kimbell Tiger Acquisition Corporation Class A Common Stock"
  },
  {
    "Symbol": "TGS",
    "Name": "Transportadora de Gas del Sur SA TGS Common Stock"
  },
  {
    "Symbol": "TGT",
    "Name": "Target Corporation Common Stock"
  },
  {
    "Symbol": "TGTX",
    "Name": "TG Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TGVC",
    "Name": "TG Venture Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "TGVCW",
    "Name": "TG Venture Acquisition Corp. Warrants"
  },
  {
    "Symbol": "TH",
    "Name": "Target Hospitality Corp. Common Stock"
  },
  {
    "Symbol": "THC",
    "Name": "Tenet Healthcare Corporation Common Stock"
  },
  {
    "Symbol": "THCH",
    "Name": "TH International Limited Ordinary shares"
  },
  {
    "Symbol": "THCHW",
    "Name": "TH International Limited Warrant"
  },
  {
    "Symbol": "THCP",
    "Name": "Thunder Bridge Capital Partners IV Inc. Class A Common Stock"
  },
  {
    "Symbol": "THCPU",
    "Name": "Thunder Bridge Capital Partners IV Inc. Unit"
  },
  {
    "Symbol": "THCPW",
    "Name": "Thunder Bridge Capital Partners IV Inc. Warrant"
  },
  {
    "Symbol": "THFF",
    "Name": "First Financial Corporation Indiana Common Stock"
  },
  {
    "Symbol": "THG",
    "Name": "Hanover Insurance Group Inc"
  },
  {
    "Symbol": "THM",
    "Name": "International Tower Hill Mines Ltd. Ordinary Shares (Canada)"
  },
  {
    "Symbol": "THMO",
    "Name": "ThermoGenesis Holdings Inc. Common Stock"
  },
  {
    "Symbol": "THO",
    "Name": "Thor Industries Inc. Common Stock"
  },
  {
    "Symbol": "THQ",
    "Name": "Tekla Healthcare Opportunies Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "THR",
    "Name": "Thermon Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "THRD",
    "Name": "Third Harmonic Bio Inc. Common Stock"
  },
  {
    "Symbol": "THRM",
    "Name": "Gentherm Inc Common Stock"
  },
  {
    "Symbol": "THRN",
    "Name": "Thorne Healthtech Inc. Common Stock"
  },
  {
    "Symbol": "THRX",
    "Name": "Theseus Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "THRY",
    "Name": "Thryv Holdings Inc. Common Stock"
  },
  {
    "Symbol": "THS",
    "Name": "Treehouse Foods Inc. Common Stock"
  },
  {
    "Symbol": "THTX",
    "Name": "Theratechnologies Inc. Common Shares"
  },
  {
    "Symbol": "THW",
    "Name": "Tekla World Healthcare Fund Shares of Beneficial Interest"
  },
  {
    "Symbol": "THWWW",
    "Name": "Target Hospitality Corp. Warrant expiring 3/15/2024"
  },
  {
    "Symbol": "TIGO",
    "Name": "Millicom International Cellular S.A. Common Stock"
  },
  {
    "Symbol": "TIGR",
    "Name": "UP Fintech Holding Ltd American Depositary Share representing fifteen Class A Ordinary Shares"
  },
  {
    "Symbol": "TIL",
    "Name": "Instil Bio Inc. Common Stock"
  },
  {
    "Symbol": "TILE",
    "Name": "Interface Inc. Common Stock"
  },
  {
    "Symbol": "TIMB",
    "Name": "TIM S.A. American Depositary Shares (Each representing 5 Common Shares)"
  },
  {
    "Symbol": "TIO",
    "Name": "Tingo Group Inc. Common Stock"
  },
  {
    "Symbol": "TIPT",
    "Name": "Tiptree Inc. Common Stock"
  },
  {
    "Symbol": "TIRX",
    "Name": "TIAN RUIXIANG Holdings Ltd Class A Ordinary Shares"
  },
  {
    "Symbol": "TISI",
    "Name": "Team Inc. Common Stock"
  },
  {
    "Symbol": "TITN",
    "Name": "Titan Machinery Inc. Common Stock"
  },
  {
    "Symbol": "TIVC",
    "Name": "Tivic Health Systems Inc. Common Stock"
  },
  {
    "Symbol": "TIXT",
    "Name": "TELUS International (Cda) Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "TJX",
    "Name": "TJX Companies Inc. (The) Common Stock"
  },
  {
    "Symbol": "TK",
    "Name": "Teekay Corporation Common Stock"
  },
  {
    "Symbol": "TKAT",
    "Name": "Takung Art Co. Ltd. Common Stock"
  },
  {
    "Symbol": "TKC",
    "Name": "Turkcell Iletisim Hizmetleri AS Common Stock"
  },
  {
    "Symbol": "TKLF",
    "Name": "Yoshitsu Co. Ltd American Depositary Shares"
  },
  {
    "Symbol": "TKNO",
    "Name": "Alpha Teknova Inc. Common Stock"
  },
  {
    "Symbol": "TKR",
    "Name": "Timken Company (The) Common Stock"
  },
  {
    "Symbol": "TLF",
    "Name": "Tandy Leather Factory Inc. Common Stock"
  },
  {
    "Symbol": "TLGA",
    "Name": "TLG Acquisition One Corp. Class A Common Stock"
  },
  {
    "Symbol": "TLGY",
    "Name": "TLGY Acquisition Corporation Class A Ordinary Share"
  },
  {
    "Symbol": "TLGYW",
    "Name": "TLGY Acquisition Corporation Warrant"
  },
  {
    "Symbol": "TLIS",
    "Name": "Talis Biomedical Corporation Common Stock"
  },
  {
    "Symbol": "TLK",
    "Name": "PT Telekomunikasi Indonesia Tbk"
  },
  {
    "Symbol": "TLRY",
    "Name": "Tilray Brands Inc. Common Stock"
  },
  {
    "Symbol": "TLS",
    "Name": "Telos Corporation Common Stock"
  },
  {
    "Symbol": "TLSA",
    "Name": "Tiziana Life Sciences Ltd. Common Shares"
  },
  {
    "Symbol": "TLYS",
    "Name": "Tilly's Inc. Common Stock"
  },
  {
    "Symbol": "TM",
    "Name": "Toyota Motor Corporation Common Stock"
  },
  {
    "Symbol": "TMBR",
    "Name": "Timber Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TMC",
    "Name": "TMC the metals company Inc. Common Stock"
  },
  {
    "Symbol": "TMCI",
    "Name": "Treace Medical Concepts Inc. Common Stock"
  },
  {
    "Symbol": "TMCWW",
    "Name": "TMC the metals company Inc. Warrants"
  },
  {
    "Symbol": "TMDX",
    "Name": "TransMedics Group Inc. Common Stock"
  },
  {
    "Symbol": "TME",
    "Name": "Tencent Music Entertainment Group American Depositary Shares each representing two Class A Ordinary Shares"
  },
  {
    "Symbol": "TMHC",
    "Name": "Taylor Morrison Home Corporation Common Stock"
  },
  {
    "Symbol": "TMKR",
    "Name": "Tastemaker Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "TMO",
    "Name": "Thermo Fisher Scientific Inc Common Stock"
  },
  {
    "Symbol": "TMP",
    "Name": "Tompkins Financial Corporation Common Stock"
  },
  {
    "Symbol": "TMPO",
    "Name": "Tempo Automation Holdings Inc. Common Stock"
  },
  {
    "Symbol": "TMPOW",
    "Name": "Tempo Automation Holdings Inc. Warrant"
  },
  {
    "Symbol": "TMQ",
    "Name": "Trilogy Metals Inc. Common Stock"
  },
  {
    "Symbol": "TMST",
    "Name": "TimkenSteel Corporation Common Shares"
  },
  {
    "Symbol": "TMTC",
    "Name": "TMT Acquisition Corp Ordinary Shares"
  },
  {
    "Symbol": "TMTCR",
    "Name": "TMT Acquisition Corp Rights"
  },
  {
    "Symbol": "TMTCU",
    "Name": "TMT Acquisition Corp Unit"
  },
  {
    "Symbol": "TMUS",
    "Name": "T-Mobile US Inc. Common Stock"
  },
  {
    "Symbol": "TNC",
    "Name": "Tennant Company Common Stock"
  },
  {
    "Symbol": "TNDM",
    "Name": "Tandem Diabetes Care Inc. Common Stock"
  },
  {
    "Symbol": "TNET",
    "Name": "TriNet Group Inc. Common Stock"
  },
  {
    "Symbol": "TNGX",
    "Name": "Tango Therapeutics Inc."
  },
  {
    "Symbol": "TNK",
    "Name": "Teekay Tankers Ltd."
  },
  {
    "Symbol": "TNL",
    "Name": "Travel   Leisure Co. Common  Stock"
  },
  {
    "Symbol": "TNON",
    "Name": "Tenon Medical Inc. Common Stock"
  },
  {
    "Symbol": "TNP",
    "Name": "Tsakos Energy Navigation Ltd Common Shares"
  },
  {
    "Symbol": "TNP^D",
    "Name": "Tsakos Energy Navigation Ltd 8.75% Series D Cumulative Redeemable Perpetual Preferred Shares"
  },
  {
    "Symbol": "TNP^E",
    "Name": "Tsakos Energy Navigation Ltd Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00"
  },
  {
    "Symbol": "TNP^F",
    "Name": "Tsakos Energy Navigation Ltd Series F Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00"
  },
  {
    "Symbol": "TNXP",
    "Name": "Tonix Pharmaceuticals Holding Corp. Common Stock"
  },
  {
    "Symbol": "TNYA",
    "Name": "Tenaya Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TOAC",
    "Name": "Talon 1 Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "TOI",
    "Name": "The Oncology Institute Inc. Common Stock"
  },
  {
    "Symbol": "TOIIW",
    "Name": "The Oncology Institute Inc. Warrant"
  },
  {
    "Symbol": "TOL",
    "Name": "Toll Brothers Inc. Common Stock"
  },
  {
    "Symbol": "TOMZ",
    "Name": "TOMI Environmental Solutions Inc. Common Stock"
  },
  {
    "Symbol": "TOP",
    "Name": "TOP Financial Group Limited Ordinary Shares"
  },
  {
    "Symbol": "TOPS",
    "Name": "TOP Ships Inc. Common Stock"
  },
  {
    "Symbol": "TORO",
    "Name": "Toro Corp. Common Stock"
  },
  {
    "Symbol": "TOST",
    "Name": "Toast Inc. Class A Common Stock"
  },
  {
    "Symbol": "TOUR",
    "Name": "Tuniu Corporation American Depositary Shares"
  },
  {
    "Symbol": "TOVX",
    "Name": "Theriva Biologics Inc. Common Stock"
  },
  {
    "Symbol": "TOWN",
    "Name": "TowneBank Common Stock"
  },
  {
    "Symbol": "TPB",
    "Name": "Turning Point Brands Inc. Common Stock"
  },
  {
    "Symbol": "TPC",
    "Name": "Tutor Perini Corporation Common Stock"
  },
  {
    "Symbol": "TPET",
    "Name": "Trio Petroleum Corp. Common Stock"
  },
  {
    "Symbol": "TPG",
    "Name": "TPG Inc. Class A Common Stock"
  },
  {
    "Symbol": "TPH",
    "Name": "Tri Pointe Homes Inc. Common Stock"
  },
  {
    "Symbol": "TPHS",
    "Name": "Trinity Place Holdings Inc. Common Stock"
  },
  {
    "Symbol": "TPIC",
    "Name": "TPI Composites Inc. Common Stock"
  },
  {
    "Symbol": "TPL",
    "Name": "Texas Pacific Land Corporation Common Stock"
  },
  {
    "Symbol": "TPR",
    "Name": "Tapestry Inc. Common Stock"
  },
  {
    "Symbol": "TPST",
    "Name": "Tempest Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TPVG",
    "Name": "TriplePoint Venture Growth BDC Corp. Common Stock"
  },
  {
    "Symbol": "TPX",
    "Name": "Tempur Sealy International Inc. Common Stock"
  },
  {
    "Symbol": "TPZ",
    "Name": "Tortoise Power and Energy Infrastructure Fund Inc Common Stock"
  },
  {
    "Symbol": "TR",
    "Name": "Tootsie Roll Industries Inc. Common Stock"
  },
  {
    "Symbol": "TRC",
    "Name": "Tejon Ranch Co Common Stock"
  },
  {
    "Symbol": "TRCA",
    "Name": "Twin Ridge Capital Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "TRDA",
    "Name": "Entrada Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TREE",
    "Name": "LendingTree Inc. Common Stock"
  },
  {
    "Symbol": "TREX",
    "Name": "Trex Company Inc. Common Stock"
  },
  {
    "Symbol": "TRGP",
    "Name": "Targa Resources Inc. Common Stock"
  },
  {
    "Symbol": "TRHC",
    "Name": "Tabula Rasa HealthCare Inc. Common Stock"
  },
  {
    "Symbol": "TRI",
    "Name": "Thomson Reuters Corp Ordinary Shares"
  },
  {
    "Symbol": "TRIB",
    "Name": "Trinity Biotech plc American Depositary Shares"
  },
  {
    "Symbol": "TRIN",
    "Name": "Trinity Capital Inc. Common Stock"
  },
  {
    "Symbol": "TRINL",
    "Name": "Trinity Capital Inc. 7.00% Notes Due 2025"
  },
  {
    "Symbol": "TRIP",
    "Name": "TripAdvisor Inc. Common Stock"
  },
  {
    "Symbol": "TRIS",
    "Name": "Tristar Acquisition I Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "TRKA",
    "Name": "Troika Media Group Inc. Common Stock"
  },
  {
    "Symbol": "TRKAW",
    "Name": "Troika Media Group Inc. Warrant"
  },
  {
    "Symbol": "TRMB",
    "Name": "Trimble Inc. Common Stock"
  },
  {
    "Symbol": "TRMD",
    "Name": "TORM plc Class A Common Stock"
  },
  {
    "Symbol": "TRMK",
    "Name": "Trustmark Corporation Common Stock"
  },
  {
    "Symbol": "TRMR",
    "Name": "Tremor International Ltd. American Depository Shares"
  },
  {
    "Symbol": "TRN",
    "Name": "Trinity Industries Inc. Common Stock"
  },
  {
    "Symbol": "TRNO",
    "Name": "Terreno Realty Corporation Common Stock"
  },
  {
    "Symbol": "TRNR",
    "Name": "Interactive Strength Inc. Common Stock"
  },
  {
    "Symbol": "TRNS",
    "Name": "Transcat Inc. Common Stock"
  },
  {
    "Symbol": "TRON",
    "Name": "Corner Growth Acquisition Corp. 2 Class A Ordinary Share"
  },
  {
    "Symbol": "TRONU",
    "Name": "Corner Growth Acquisition Corp. 2 Units"
  },
  {
    "Symbol": "TROO",
    "Name": "TROOPS Inc. Ordinary Shares"
  },
  {
    "Symbol": "TROW",
    "Name": "T. Rowe Price Group Inc. Common Stock"
  },
  {
    "Symbol": "TROX",
    "Name": "Tronox Holdings plc Ordinary Shares (UK)"
  },
  {
    "Symbol": "TRP",
    "Name": "TC Energy Corporation Common Stock"
  },
  {
    "Symbol": "TRS",
    "Name": "TriMas Corporation Common Stock"
  },
  {
    "Symbol": "TRST",
    "Name": "TrustCo Bank Corp NY Common Stock"
  },
  {
    "Symbol": "TRT",
    "Name": "Trio-Tech International Common Stock"
  },
  {
    "Symbol": "TRTL",
    "Name": "TortoiseEcofin Acquisition Corp. III Class A Ordinary Shares"
  },
  {
    "Symbol": "TRTN",
    "Name": "Triton International Limited Common Shares"
  },
  {
    "Symbol": "TRTN^A",
    "Name": "Triton International Limited 8.50% Series A Cumulative Redeemable Perpetual  Preference Shares"
  },
  {
    "Symbol": "TRTN^B",
    "Name": "Triton International Limited 8.00% Series B Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TRTN^C",
    "Name": "Triton International Limited 7.375% Series C Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TRTN^D",
    "Name": "Triton International Limited 6.875% Series D Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TRTN^E",
    "Name": "Triton International Limited 5.75% Series E Cumulative Redeemable Perpetual Preference Shares"
  },
  {
    "Symbol": "TRTX",
    "Name": "TPG RE Finance Trust Inc. Common Stock"
  },
  {
    "Symbol": "TRTX^C",
    "Name": "TPG RE Finance Trust Inc. 6.25% Series C Cumulative Redeemable Preferred Stock $0.001 par value per share"
  },
  {
    "Symbol": "TRU",
    "Name": "TransUnion Common Stock"
  },
  {
    "Symbol": "TRUE",
    "Name": "TrueCar Inc. Common Stock"
  },
  {
    "Symbol": "TRUP",
    "Name": "Trupanion Inc. Common Stock"
  },
  {
    "Symbol": "TRV",
    "Name": "The Travelers Companies Inc. Common Stock"
  },
  {
    "Symbol": "TRVG",
    "Name": "trivago N.V. American Depositary Shares"
  },
  {
    "Symbol": "TRVI",
    "Name": "Trevi Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TRVN",
    "Name": "Trevena Inc. Common Stock"
  },
  {
    "Symbol": "TRX",
    "Name": "TRX Gold Corporation Common Stock"
  },
  {
    "Symbol": "TS",
    "Name": "Tenaris S.A. American Depositary Shares"
  },
  {
    "Symbol": "TSAT",
    "Name": "Telesat Corporation Class A Common Shares and Class B Variable Voting Shares"
  },
  {
    "Symbol": "TSBK",
    "Name": "Timberland Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "TSCO",
    "Name": "Tractor Supply Company Common Stock"
  },
  {
    "Symbol": "TSE",
    "Name": "Trinseo PLC Ordinary Shares"
  },
  {
    "Symbol": "TSEM",
    "Name": "Tower Semiconductor Ltd. Ordinary Shares"
  },
  {
    "Symbol": "TSHA",
    "Name": "Taysha Gene Therapies Inc. Common Stock"
  },
  {
    "Symbol": "TSI",
    "Name": "TCW Strategic Income Fund Inc. Common Stock"
  },
  {
    "Symbol": "TSLA",
    "Name": "Tesla Inc. Common Stock"
  },
  {
    "Symbol": "TSLX",
    "Name": "Sixth Street Specialty Lending Inc. Common Stock"
  },
  {
    "Symbol": "TSM",
    "Name": "Taiwan Semiconductor Manufacturing Company Ltd."
  },
  {
    "Symbol": "TSN",
    "Name": "Tyson Foods Inc. Common Stock"
  },
  {
    "Symbol": "TSP",
    "Name": "TuSimple Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "TSQ",
    "Name": "Townsquare Media Inc. Class A Common Stock"
  },
  {
    "Symbol": "TSRI",
    "Name": "TSR Inc. Common Stock"
  },
  {
    "Symbol": "TSVT",
    "Name": "2seventy bio Inc. Common Stock"
  },
  {
    "Symbol": "TT",
    "Name": "Trane Technologies plc"
  },
  {
    "Symbol": "TTC",
    "Name": "Toro Company (The) Common Stock"
  },
  {
    "Symbol": "TTCF",
    "Name": "Tattooed Chef Inc Class A Common Stock"
  },
  {
    "Symbol": "TTD",
    "Name": "The Trade Desk Inc. Class A Common Stock"
  },
  {
    "Symbol": "TTE",
    "Name": "TotalEnergies SE"
  },
  {
    "Symbol": "TTEC",
    "Name": "TTEC Holdings Inc. Common Stock"
  },
  {
    "Symbol": "TTEK",
    "Name": "Tetra Tech Inc. Common Stock"
  },
  {
    "Symbol": "TTGT",
    "Name": "TechTarget Inc. Common Stock"
  },
  {
    "Symbol": "TTI",
    "Name": "Tetra Technologies Inc. Common Stock"
  },
  {
    "Symbol": "TTMI",
    "Name": "TTM Technologies Inc. Common Stock"
  },
  {
    "Symbol": "TTNP",
    "Name": "Titan Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "TTOO",
    "Name": "T2 Biosystems Inc. Common Stock"
  },
  {
    "Symbol": "TTP",
    "Name": "Tortoise Pipeline & Energy Fund Inc. Common Stock"
  },
  {
    "Symbol": "TTSH",
    "Name": "Tile Shop Holdings Inc. Common Stock"
  },
  {
    "Symbol": "TTWO",
    "Name": "Take-Two Interactive Software Inc. Common Stock"
  },
  {
    "Symbol": "TU",
    "Name": "Telus Corporation Ordinary Shares"
  },
  {
    "Symbol": "TUP",
    "Name": "Tupperware Brands Corporation Common Stock"
  },
  {
    "Symbol": "TURN",
    "Name": "180 Degree Capital Corp. Common Stock"
  },
  {
    "Symbol": "TUSK",
    "Name": "Mammoth Energy Services Inc. Common Stock"
  },
  {
    "Symbol": "TUYA",
    "Name": "Tuya Inc. American Depositary Shares each representing one Class A Ordinary Share"
  },
  {
    "Symbol": "TV",
    "Name": "Grupo Televisa S.A. Common Stock"
  },
  {
    "Symbol": "TVC",
    "Name": "Tennessee Valley Authority Common Stock"
  },
  {
    "Symbol": "TVE",
    "Name": "Tennessee Valley Authority"
  },
  {
    "Symbol": "TVTX",
    "Name": "Travere Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "TW",
    "Name": "Tradeweb Markets Inc. Class A Common Stock"
  },
  {
    "Symbol": "TWCB",
    "Name": "Bilander Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "TWCBU",
    "Name": "Bilander Acquisition Corp. Unit"
  },
  {
    "Symbol": "TWCBW",
    "Name": "Bilander Acquisition Corp. Warrant"
  },
  {
    "Symbol": "TWI",
    "Name": "Titan International Inc. (DE) Common Stock"
  },
  {
    "Symbol": "TWIN",
    "Name": "Twin Disc Incorporated Common Stock"
  },
  {
    "Symbol": "TWKS",
    "Name": "Thoughtworks Holding Inc. Common Stock"
  },
  {
    "Symbol": "TWLO",
    "Name": "Twilio Inc. Class A Common Stock"
  },
  {
    "Symbol": "TWLVW",
    "Name": "Twelve Seas Investment Company II Warrant"
  },
  {
    "Symbol": "TWN",
    "Name": "Taiwan Fund Inc. (The) Common Stock"
  },
  {
    "Symbol": "TWNK",
    "Name": "Hostess Brands Inc. Class A Common Stock"
  },
  {
    "Symbol": "TWO",
    "Name": "Two Harbors Investment Corp"
  },
  {
    "Symbol": "TWO^A",
    "Name": "Two Harbors Investments Corp 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock ($25.00 liquidation preference per share)"
  },
  {
    "Symbol": "TWO^B",
    "Name": "Two Harbors Investments Corp 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "TWO^C",
    "Name": "Two Harbors Investments Corp 7.25% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "TWOA",
    "Name": "two Class A Ordinary Shares"
  },
  {
    "Symbol": "TWOU",
    "Name": "2U Inc. Common Stock"
  },
  {
    "Symbol": "TWST",
    "Name": "Twist Bioscience Corporation Common Stock"
  },
  {
    "Symbol": "TX",
    "Name": "Ternium S.A. Ternium S.A. American Depositary Shares (each representing ten shares USD1.00 par value)"
  },
  {
    "Symbol": "TXG",
    "Name": "10x Genomics Inc. Class A Common Stock"
  },
  {
    "Symbol": "TXMD",
    "Name": "TherapeuticsMD Inc. Common Stock"
  },
  {
    "Symbol": "TXN",
    "Name": "Texas Instruments Incorporated Common Stock"
  },
  {
    "Symbol": "TXO",
    "Name": "TXO Energy Partners L.P. Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "TXRH",
    "Name": "Texas Roadhouse Inc. Common Stock"
  },
  {
    "Symbol": "TXT",
    "Name": "Textron Inc. Common Stock"
  },
  {
    "Symbol": "TY",
    "Name": "Tri Continental Corporation Common Stock"
  },
  {
    "Symbol": "TY^",
    "Name": "Tri Continental Corporation Preferred Stock"
  },
  {
    "Symbol": "TYG",
    "Name": "Tortoise Energy Infrastructure Corporation Common Stock"
  },
  {
    "Symbol": "TYL",
    "Name": "Tyler Technologies Inc. Common Stock"
  },
  {
    "Symbol": "TYRA",
    "Name": "Tyra Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "TZOO",
    "Name": "Travelzoo Common Stock"
  },
  {
    "Symbol": "U",
    "Name": "Unity Software Inc. Common Stock"
  },
  {
    "Symbol": "UA",
    "Name": "Under Armour Inc. Class C Common Stock"
  },
  {
    "Symbol": "UAA",
    "Name": "Under Armour Inc. Class A Common Stock"
  },
  {
    "Symbol": "UAL",
    "Name": "United Airlines Holdings Inc. Common Stock"
  },
  {
    "Symbol": "UAMY",
    "Name": "United States Antimony Corporation Common Stock"
  },
  {
    "Symbol": "UAN",
    "Name": "CVR Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "UAVS",
    "Name": "AgEagle Aerial Systems Inc. Common Stock"
  },
  {
    "Symbol": "UBA",
    "Name": "Urstadt Biddle Properties Inc. Common Stock"
  },
  {
    "Symbol": "UBCP",
    "Name": "United Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "UBER",
    "Name": "Uber Technologies Inc. Common Stock"
  },
  {
    "Symbol": "UBFO",
    "Name": "United Security Bancshares Common Stock"
  },
  {
    "Symbol": "UBP",
    "Name": "Urstadt Biddle Properties Inc. Common Stock"
  },
  {
    "Symbol": "UBP^H",
    "Name": "Urstadt Biddle Properties Inc. 6.250% Series H Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "UBP^K",
    "Name": "Urstadt Biddle Properties Inc. 5.875% Series K Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "UBS",
    "Name": "UBS Group AG Registered Ordinary Shares"
  },
  {
    "Symbol": "UBSI",
    "Name": "United Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "UBX",
    "Name": "Unity Biotechnology Inc. Common Stock"
  },
  {
    "Symbol": "UCAR",
    "Name": "U Power Limited Ordinary Shares"
  },
  {
    "Symbol": "UCBI",
    "Name": "United Community Banks Inc. Common Stock"
  },
  {
    "Symbol": "UCBIO",
    "Name": "United Community Banks Inc. Depositary Shares each representing 1/1000th interest in a share of Series I Non-CumulativePreferred Stock"
  },
  {
    "Symbol": "UCL",
    "Name": "uCloudlink Group Inc. American Depositary Shares"
  },
  {
    "Symbol": "UCTT",
    "Name": "Ultra Clean Holdings Inc. Common Stock"
  },
  {
    "Symbol": "UDMY",
    "Name": "Udemy Inc. Common Stock"
  },
  {
    "Symbol": "UDR",
    "Name": "UDR Inc. Common Stock"
  },
  {
    "Symbol": "UE",
    "Name": "Urban Edge Properties Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "UEC",
    "Name": "Uranium Energy Corp. Common Stock"
  },
  {
    "Symbol": "UEIC",
    "Name": "Universal Electronics Inc. Common Stock"
  },
  {
    "Symbol": "UFAB",
    "Name": "Unique Fabricating Inc. Common Stock"
  },
  {
    "Symbol": "UFCS",
    "Name": "United Fire Group Inc. Common Stock"
  },
  {
    "Symbol": "UFI",
    "Name": "Unifi Inc. New Common Stock"
  },
  {
    "Symbol": "UFPI",
    "Name": "UFP Industries Inc. Common Stock"
  },
  {
    "Symbol": "UFPT",
    "Name": "UFP Technologies Inc. Common Stock"
  },
  {
    "Symbol": "UG",
    "Name": "United-Guardian Inc. Common Stock"
  },
  {
    "Symbol": "UGI",
    "Name": "UGI Corporation Common Stock"
  },
  {
    "Symbol": "UGIC",
    "Name": "UGI Corporation Corporate Units"
  },
  {
    "Symbol": "UGP",
    "Name": "Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one Common Share)"
  },
  {
    "Symbol": "UGRO",
    "Name": "urban-gro Inc. Common Stock"
  },
  {
    "Symbol": "UHAL",
    "Name": "U-Haul Holding Company Common Stock"
  },
  {
    "Symbol": "UHG",
    "Name": "United Homes Group Inc Class A Common Stock"
  },
  {
    "Symbol": "UHGWW",
    "Name": "United Homes Group Inc. Warrant"
  },
  {
    "Symbol": "UHS",
    "Name": "Universal Health Services Inc. Common Stock"
  },
  {
    "Symbol": "UHT",
    "Name": "Universal Health Realty Income Trust Common Stock"
  },
  {
    "Symbol": "UI",
    "Name": "Ubiquiti Inc. Common Stock"
  },
  {
    "Symbol": "UIHC",
    "Name": "United Insurance Holdings Corp. Common Stock"
  },
  {
    "Symbol": "UIS",
    "Name": "Unisys Corporation New Common Stock"
  },
  {
    "Symbol": "UK",
    "Name": "Ucommune International Ltd Ordinary Shares"
  },
  {
    "Symbol": "UKOMW",
    "Name": "Ucommune International Ltd Warrant expiring 11/17/2025"
  },
  {
    "Symbol": "UL",
    "Name": "Unilever PLC Common Stock"
  },
  {
    "Symbol": "ULBI",
    "Name": "Ultralife Corporation Common Stock"
  },
  {
    "Symbol": "ULCC",
    "Name": "Frontier Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ULH",
    "Name": "Universal Logistics Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ULTA",
    "Name": "Ulta Beauty Inc. Common Stock"
  },
  {
    "Symbol": "UMBF",
    "Name": "UMB Financial Corporation Common Stock"
  },
  {
    "Symbol": "UMC",
    "Name": "United Microelectronics Corporation (NEW) Common Stock"
  },
  {
    "Symbol": "UMH",
    "Name": "UMH Properties Inc. Common Stock"
  },
  {
    "Symbol": "UMH^D",
    "Name": "UMH Properties Inc. 6.375% Series D Cumulative Redeemable Preferred Stock Liquidation Preference $25 per share"
  },
  {
    "Symbol": "UNAM",
    "Name": "Unico American Corporation Common Stock"
  },
  {
    "Symbol": "UNB",
    "Name": "Union Bankshares Inc. Common Stock"
  },
  {
    "Symbol": "UNCY",
    "Name": "Unicycive Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "UNF",
    "Name": "Unifirst Corporation Common Stock"
  },
  {
    "Symbol": "UNFI",
    "Name": "United Natural Foods Inc. Common Stock"
  },
  {
    "Symbol": "UNH",
    "Name": "UnitedHealth Group Incorporated Common Stock (DE)"
  },
  {
    "Symbol": "UNIT",
    "Name": "Uniti Group Inc. Common Stock"
  },
  {
    "Symbol": "UNM",
    "Name": "Unum Group Common Stock"
  },
  {
    "Symbol": "UNMA",
    "Name": "Unum Group 6.250% Junior Subordinated Notes due 2058"
  },
  {
    "Symbol": "UNP",
    "Name": "Union Pacific Corporation Common Stock"
  },
  {
    "Symbol": "UNTY",
    "Name": "Unity Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "UNVR",
    "Name": "Univar Solutions Inc. Common Stock"
  },
  {
    "Symbol": "UONE",
    "Name": "Urban One Inc. Class A Common Stock"
  },
  {
    "Symbol": "UONEK",
    "Name": "Urban One Inc. Class D Common Stock"
  },
  {
    "Symbol": "UP",
    "Name": "Wheels Up Experience Inc. Class A Common Stock"
  },
  {
    "Symbol": "UPBD",
    "Name": "Upbound Group Inc. Common Stock"
  },
  {
    "Symbol": "UPC",
    "Name": "Universe Pharmaceuticals Inc. Ordinary Shares"
  },
  {
    "Symbol": "UPH",
    "Name": "UpHealth Inc. Common Stock"
  },
  {
    "Symbol": "UPLD",
    "Name": "Upland Software Inc. Common Stock"
  },
  {
    "Symbol": "UPS",
    "Name": "United Parcel Service Inc. Common Stock"
  },
  {
    "Symbol": "UPST",
    "Name": "Upstart Holdings Inc. Common stock"
  },
  {
    "Symbol": "UPTD",
    "Name": "TradeUP Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "UPTDW",
    "Name": "TradeUP Acquisition Corp. Warrant"
  },
  {
    "Symbol": "UPWK",
    "Name": "Upwork Inc. Common Stock"
  },
  {
    "Symbol": "UPXI",
    "Name": "Upexi Inc. Common Stock"
  },
  {
    "Symbol": "URBN",
    "Name": "Urban Outfitters Inc. Common Stock"
  },
  {
    "Symbol": "URG",
    "Name": "Ur Energy Inc Common Shares (Canada)"
  },
  {
    "Symbol": "URGN",
    "Name": "UroGen Pharma Ltd. Ordinary Shares"
  },
  {
    "Symbol": "URI",
    "Name": "United Rentals Inc. Common Stock"
  },
  {
    "Symbol": "UROY",
    "Name": "Uranium Royalty Corp. Common Stock"
  },
  {
    "Symbol": "USA",
    "Name": "Liberty All-Star Equity Fund Common Stock"
  },
  {
    "Symbol": "USAC",
    "Name": "USA Compression Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "USAP",
    "Name": "Universal Stainless & Alloy Products Inc. Common Stock"
  },
  {
    "Symbol": "USAS",
    "Name": "Americas Gold and Silver Corporation Common Shares no par value"
  },
  {
    "Symbol": "USAU",
    "Name": "U.S. Gold Corp. Common Stock"
  },
  {
    "Symbol": "USB",
    "Name": "U.S. Bancorp Common Stock"
  },
  {
    "Symbol": "USB^A",
    "Name": "U.S. Bancorp Depositary Shares Each representing a 1/100th interest in a share of Series A Non-CumulativePerpetual Pfd Stock"
  },
  {
    "Symbol": "USB^H",
    "Name": "U.S. Bancorp Depositary Shares repstg 1/1000th Pfd Ser B"
  },
  {
    "Symbol": "USB^P",
    "Name": "U.S. Bancorp Depositary Shares each representing a 1/1000th interest in a share of Series K Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "USB^Q",
    "Name": "U.S. Bancorp Depositary Shares Each Representing a 1/1000th Interest in a Share of Series L Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "USB^R",
    "Name": "U.S. Bancorp Depositary Shares Each Representing a 1/1000th Interest in a Share of Series M Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "USB^S",
    "Name": "U.S. Bancorp Depositary Shares each representing a 1/1000th interest in a share of Series O Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "USCB",
    "Name": "USCB Financial Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "USCTW",
    "Name": "TKB Critical Technologies 1 Warrant"
  },
  {
    "Symbol": "USDP",
    "Name": "USD Partners LP Common Units representing limited partner interest"
  },
  {
    "Symbol": "USEA",
    "Name": "United Maritime Corporation Common Stock"
  },
  {
    "Symbol": "USEG",
    "Name": "U.S. Energy Corp. Common Stock (DE)"
  },
  {
    "Symbol": "USFD",
    "Name": "US Foods Holding Corp. Common Stock"
  },
  {
    "Symbol": "USGO",
    "Name": "U.S. GoldMining Inc. Common stock"
  },
  {
    "Symbol": "USGOW",
    "Name": "U.S. GoldMining Inc. Warrant"
  },
  {
    "Symbol": "USIO",
    "Name": "Usio Inc. Common Stock"
  },
  {
    "Symbol": "USLM",
    "Name": "United States Lime & Minerals Inc. Common Stock"
  },
  {
    "Symbol": "USM",
    "Name": "United States Cellular Corporation Common Stock"
  },
  {
    "Symbol": "USNA",
    "Name": "USANA Health Sciences Inc. Common Stock"
  },
  {
    "Symbol": "USPH",
    "Name": "U.S. Physical Therapy Inc. Common Stock"
  },
  {
    "Symbol": "USX",
    "Name": "U.S. Xpress Enterprises Inc. Class A Common Stock"
  },
  {
    "Symbol": "UTAA",
    "Name": "UTA Acquisition Corporation Class A Ordinary Shares"
  },
  {
    "Symbol": "UTAAU",
    "Name": "UTA Acquisition Corporation Units"
  },
  {
    "Symbol": "UTAAW",
    "Name": "UTA Acquisition Corporation Warrants"
  },
  {
    "Symbol": "UTF",
    "Name": "Cohen & Steers Infrastructure Fund Inc Common Stock"
  },
  {
    "Symbol": "UTG",
    "Name": "Reaves Utility Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "UTHR",
    "Name": "United Therapeutics Corporation Common Stock"
  },
  {
    "Symbol": "UTI",
    "Name": "Universal Technical Institute Inc Common Stock"
  },
  {
    "Symbol": "UTL",
    "Name": "UNITIL Corporation Common Stock"
  },
  {
    "Symbol": "UTMD",
    "Name": "Utah Medical Products Inc. Common Stock"
  },
  {
    "Symbol": "UTME",
    "Name": "UTime Limited Ordinary Shares"
  },
  {
    "Symbol": "UTRS",
    "Name": "Minerva Surgical Inc. Common Stock"
  },
  {
    "Symbol": "UTSI",
    "Name": "UTStarcom Holdings Corp. Ordinary Shares"
  },
  {
    "Symbol": "UTZ",
    "Name": "Utz Brands Inc Class A Common Stock"
  },
  {
    "Symbol": "UUU",
    "Name": "Universal Security Instruments Inc. Common Stock"
  },
  {
    "Symbol": "UUUU",
    "Name": "Energy Fuels Inc Ordinary Shares (Canada)"
  },
  {
    "Symbol": "UVE",
    "Name": "UNIVERSAL INSURANCE HOLDINGS INC Common Stock"
  },
  {
    "Symbol": "UVSP",
    "Name": "Univest Financial Corporation Common Stock"
  },
  {
    "Symbol": "UVV",
    "Name": "Universal Corporation Common Stock"
  },
  {
    "Symbol": "UWMC",
    "Name": "UWM Holdings Corporation Class A Common Stock"
  },
  {
    "Symbol": "UXIN",
    "Name": "Uxin Limited ADS"
  },
  {
    "Symbol": "UZD",
    "Name": "United States Cellular Corporation 6.250% Senior Notes due 2069"
  },
  {
    "Symbol": "UZE",
    "Name": "United States Cellular Corporation 5.500% Senior Notes due 2070"
  },
  {
    "Symbol": "UZF",
    "Name": "United States Cellular Corporation 5.500% Senior Notes due 2070"
  },
  {
    "Symbol": "V",
    "Name": "Visa Inc."
  },
  {
    "Symbol": "VABK",
    "Name": "Virginia National Bankshares Corporation Common Stock"
  },
  {
    "Symbol": "VAC",
    "Name": "Marriott Vacations Worldwide Corporation Common Stock"
  },
  {
    "Symbol": "VACC",
    "Name": "Vaccitech plc American Depositary Shares"
  },
  {
    "Symbol": "VAL",
    "Name": "Valaris Limited Common Shares"
  },
  {
    "Symbol": "VALE",
    "Name": "VALE S.A.  American Depositary Shares Each Representing one common share"
  },
  {
    "Symbol": "VALN",
    "Name": "Valneva SE American Depositary Shares"
  },
  {
    "Symbol": "VALU",
    "Name": "Value Line Inc. Common Stock"
  },
  {
    "Symbol": "VANI",
    "Name": "Vivani Medical Inc. Common Stock"
  },
  {
    "Symbol": "VAPO",
    "Name": "Vapotherm Inc. Common Stock"
  },
  {
    "Symbol": "VAQC",
    "Name": "Vector Acquisition Corporation II Class A Ordinary Shares"
  },
  {
    "Symbol": "VATE",
    "Name": "INNOVATE Corp. Common Stock"
  },
  {
    "Symbol": "VAXX",
    "Name": "Vaxxinity Inc. Class A Common Stock"
  },
  {
    "Symbol": "VBF",
    "Name": "Invesco Bond Fund Common Stock"
  },
  {
    "Symbol": "VBFC",
    "Name": "Village Bank and Trust Financial Corp. Common Stock"
  },
  {
    "Symbol": "VBIV",
    "Name": "VBI Vaccines Inc. New Common Stock (Canada)"
  },
  {
    "Symbol": "VBLT",
    "Name": "Vascular Biogenics Ltd. Ordinary Shares"
  },
  {
    "Symbol": "VBNK",
    "Name": "VersaBank Common Shares"
  },
  {
    "Symbol": "VBOC",
    "Name": "Viscogliosi Brothers Acquisition Corp Common Stock"
  },
  {
    "Symbol": "VBOCU",
    "Name": "Viscogliosi Brothers Acquisition Corp Unit"
  },
  {
    "Symbol": "VBOCW",
    "Name": "Viscogliosi Brothers Acquisition Corp Warrant"
  },
  {
    "Symbol": "VBTX",
    "Name": "Veritex Holdings Inc. Common Stock"
  },
  {
    "Symbol": "VC",
    "Name": "Visteon Corporation Common Stock"
  },
  {
    "Symbol": "VCEL",
    "Name": "Vericel Corporation Common Stock"
  },
  {
    "Symbol": "VCIF",
    "Name": "Vertical Capital Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "VCIG",
    "Name": "VCI Global Limited Ordinary Share"
  },
  {
    "Symbol": "VCNX",
    "Name": "Vaccinex Inc. Common Stock"
  },
  {
    "Symbol": "VCSA",
    "Name": "Vacasa Inc. Class A Common Stock"
  },
  {
    "Symbol": "VCTR",
    "Name": "Victory Capital Holdings Inc. Class A Common Stock"
  },
  {
    "Symbol": "VCV",
    "Name": "Invesco California Value Municipal Income Trust Common Stock"
  },
  {
    "Symbol": "VCXA",
    "Name": "10X Capital Venture Acquisition Corp. II Class A Ordinary Share"
  },
  {
    "Symbol": "VCXAU",
    "Name": "10X Capital Venture Acquisition Corp. II Unit"
  },
  {
    "Symbol": "VCXAW",
    "Name": "10X Capital Venture Acquisition Corp. II Warrant"
  },
  {
    "Symbol": "VCXB",
    "Name": "10X Capital Venture Acquisition Corp. III Class A Ordinary Shares"
  },
  {
    "Symbol": "VCYT",
    "Name": "Veracyte Inc. Common Stock"
  },
  {
    "Symbol": "VECO",
    "Name": "Veeco Instruments Inc. Common Stock"
  },
  {
    "Symbol": "VECT",
    "Name": "VectivBio Holding AG Ordinary Shares"
  },
  {
    "Symbol": "VEDU",
    "Name": "Visionary Education Technology Holdings Group Inc. Common Shares"
  },
  {
    "Symbol": "VEEE",
    "Name": "Twin Vee PowerCats Co. Common Stock"
  },
  {
    "Symbol": "VEEV",
    "Name": "Veeva Systems Inc. Class A Common Stock"
  },
  {
    "Symbol": "VEL",
    "Name": "Velocity Financial Inc. Common Stock"
  },
  {
    "Symbol": "VEON",
    "Name": "VEON Ltd. ADS"
  },
  {
    "Symbol": "VERA",
    "Name": "Vera Therapeutics Inc. Class A Common Stock"
  },
  {
    "Symbol": "VERB",
    "Name": "Verb Technology Company Inc. Common Stock"
  },
  {
    "Symbol": "VERBW",
    "Name": "Verb Technology Company Inc. Warrant"
  },
  {
    "Symbol": "VERI",
    "Name": "Veritone Inc. Common Stock"
  },
  {
    "Symbol": "VERO",
    "Name": "Venus Concept Inc. Common Stock"
  },
  {
    "Symbol": "VERU",
    "Name": "Veru Inc. Common Stock"
  },
  {
    "Symbol": "VERV",
    "Name": "Verve Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VERX",
    "Name": "Vertex Inc. Class A Common Stock"
  },
  {
    "Symbol": "VERY",
    "Name": "Vericity Inc. Common Stock"
  },
  {
    "Symbol": "VET",
    "Name": "Vermilion Energy Inc. Common (Canada)"
  },
  {
    "Symbol": "VEV",
    "Name": "Vicinity Motor Corp. Common Stock"
  },
  {
    "Symbol": "VFC",
    "Name": "V.F. Corporation Common Stock"
  },
  {
    "Symbol": "VFF",
    "Name": "Village Farms International Inc. Common Shares"
  },
  {
    "Symbol": "VFL",
    "Name": "Delaware Investments National Municipal Income Fund Common Stock"
  },
  {
    "Symbol": "VGAS",
    "Name": "Verde Clean Fuels Inc. Class A Common Stock"
  },
  {
    "Symbol": "VGASW",
    "Name": "Verde Clean Fuels Inc. Warrant"
  },
  {
    "Symbol": "VGI",
    "Name": "Virtus Global Multi-Sector Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "VGM",
    "Name": "Invesco Trust for Investment Grade Municipals Common Stock (DE)"
  },
  {
    "Symbol": "VGR",
    "Name": "Vector Group Ltd. Common Stock"
  },
  {
    "Symbol": "VGZ",
    "Name": "Vista Gold Corp Common Stock"
  },
  {
    "Symbol": "VHAQ",
    "Name": "Viveon Health Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "VHC",
    "Name": "VirnetX Holding Corp Common Stock"
  },
  {
    "Symbol": "VHI",
    "Name": "Valhi Inc. Common Stock"
  },
  {
    "Symbol": "VHNA",
    "Name": "Vahanna Tech Edge Acquisition I Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "VHNAW",
    "Name": "Vahanna Tech Edge Acquisition I Corp. Warrants"
  },
  {
    "Symbol": "VIA",
    "Name": "Via Renewables Inc. Class A Common Stock"
  },
  {
    "Symbol": "VIAO",
    "Name": "VIA optronics AG American Depositary Shares each representing one-fifth of an Ordinary Share"
  },
  {
    "Symbol": "VIASP",
    "Name": "Via Renewables Inc. 8.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock"
  },
  {
    "Symbol": "VIAV",
    "Name": "Viavi Solutions Inc. Common Stock"
  },
  {
    "Symbol": "VICI",
    "Name": "VICI Properties Inc. Common Stock"
  },
  {
    "Symbol": "VICR",
    "Name": "Vicor Corporation Common Stock"
  },
  {
    "Symbol": "VIEW",
    "Name": "View Inc. Class A Common Stock"
  },
  {
    "Symbol": "VIEWW",
    "Name": "View Inc. Warrant"
  },
  {
    "Symbol": "VIGL",
    "Name": "Vigil Neuroscience Inc. Common Stock"
  },
  {
    "Symbol": "VII",
    "Name": "7GC & Co. Holdings Inc. Class A common stock"
  },
  {
    "Symbol": "VIIAW",
    "Name": "7GC & Co. Holdings Inc. Warrant"
  },
  {
    "Symbol": "VINC",
    "Name": "Vincerx Pharma Inc. Common Stock"
  },
  {
    "Symbol": "VINE",
    "Name": "Fresh Vine Wine Inc. Common Stock"
  },
  {
    "Symbol": "VINO",
    "Name": "Gaucho Group Holdings Inc. Common Stock"
  },
  {
    "Symbol": "VINP",
    "Name": "Vinci Partners Investments Ltd. Class A Common Shares"
  },
  {
    "Symbol": "VIOT",
    "Name": "Viomi Technology Co. Ltd American Depositary Shares"
  },
  {
    "Symbol": "VIPS",
    "Name": "Vipshop Holdings Limited American Depositary Shares each representing two ordinary shares"
  },
  {
    "Symbol": "VIR",
    "Name": "Vir Biotechnology Inc. Common Stock"
  },
  {
    "Symbol": "VIRC",
    "Name": "Virco Manufacturing Corporation Common Stock"
  },
  {
    "Symbol": "VIRI",
    "Name": "Virios Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VIRT",
    "Name": "Virtu Financial Inc. Class A Common Stock"
  },
  {
    "Symbol": "VIRX",
    "Name": "Viracta Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VISL",
    "Name": "Vislink Technologies Inc. Common Stock"
  },
  {
    "Symbol": "VIST",
    "Name": "Vista Energy S.A.B. de C.V. American Depositary Shares each representing one series A share with no par value"
  },
  {
    "Symbol": "VITL",
    "Name": "Vital Farms Inc. Common Stock"
  },
  {
    "Symbol": "VIV",
    "Name": "Telefonica Brasil S.A. American Depositary Shares (Each representing One Common Share)"
  },
  {
    "Symbol": "VIVK",
    "Name": "Vivakor Inc. Common Stock"
  },
  {
    "Symbol": "VJET",
    "Name": "voxeljet AG American Depositary Shares"
  },
  {
    "Symbol": "VKI",
    "Name": "Invesco Advantage Municipal Income Trust II Common Shares of Beneficial Interest (DE)"
  },
  {
    "Symbol": "VKQ",
    "Name": "Invesco Municipal Trust Common Stock"
  },
  {
    "Symbol": "VKTX",
    "Name": "Viking Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VLATU",
    "Name": "Valor Latitude Acquisition Corp. Unit"
  },
  {
    "Symbol": "VLATW",
    "Name": "Valor Latitude Acquisition Corp. Warrant"
  },
  {
    "Symbol": "VLCN",
    "Name": "Volcon Inc. Common stock"
  },
  {
    "Symbol": "VLD",
    "Name": "Velo3D Inc. Common Stock"
  },
  {
    "Symbol": "VLGEA",
    "Name": "Village Super Market Inc. Class A Common Stock"
  },
  {
    "Symbol": "VLN",
    "Name": "Valens Semiconductor Ltd. Ordinary Shares"
  },
  {
    "Symbol": "VLO",
    "Name": "Valero Energy Corporation Common Stock"
  },
  {
    "Symbol": "VLRS",
    "Name": "Controladora Vuela Compania de Aviacion S.A.B. de C.V. American Depositary Shares each representing ten (10) Ordinary Participation Certificates"
  },
  {
    "Symbol": "VLT",
    "Name": "Invesco High Income Trust II"
  },
  {
    "Symbol": "VLY",
    "Name": "Valley National Bancorp Common Stock"
  },
  {
    "Symbol": "VLYPO",
    "Name": "Valley National Bancorp 5.50% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series B"
  },
  {
    "Symbol": "VLYPP",
    "Name": "Valley National Bancorp 6.25% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "VMAR",
    "Name": "Vision Marine Technologies Inc. Common Shares"
  },
  {
    "Symbol": "VMC",
    "Name": "Vulcan Materials Company (Holding Company) Common Stock"
  },
  {
    "Symbol": "VMCA",
    "Name": "Valuence Merger Corp. I Class A Ordinary Shares"
  },
  {
    "Symbol": "VMCAU",
    "Name": "Valuence Merger Corp. I Unit"
  },
  {
    "Symbol": "VMCAW",
    "Name": "Valuence Merger Corp. I Warrant"
  },
  {
    "Symbol": "VMD",
    "Name": "Viemed Healthcare Inc. Common Shares"
  },
  {
    "Symbol": "VMEO",
    "Name": "Vimeo Inc. Common Stock"
  },
  {
    "Symbol": "VMGA",
    "Name": "VMG Consumer Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "VMGAU",
    "Name": "VMG Consumer Acquisition Corp. Unit"
  },
  {
    "Symbol": "VMGAW",
    "Name": "VMG Consumer Acquisition Corp. Warrant"
  },
  {
    "Symbol": "VMI",
    "Name": "Valmont Industries Inc. Common Stock"
  },
  {
    "Symbol": "VMO",
    "Name": "Invesco Municipal Opportunity Trust Common Stock"
  },
  {
    "Symbol": "VMW",
    "Name": "Vmware Inc. Common stock Class A"
  },
  {
    "Symbol": "VNCE",
    "Name": "Vince Holding Corp. Common Stock"
  },
  {
    "Symbol": "VNDA",
    "Name": "Vanda Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "VNET",
    "Name": "VNET Group Inc. American Depositary Shares"
  },
  {
    "Symbol": "VNO",
    "Name": "Vornado Realty Trust Common Stock"
  },
  {
    "Symbol": "VNO^L",
    "Name": "Vornado Realty Trust Pfd Ser L %"
  },
  {
    "Symbol": "VNO^M",
    "Name": "Vornado Realty Trust 5.25% Series M Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference $25.00 per share no par value per share"
  },
  {
    "Symbol": "VNO^N",
    "Name": "Vornado Realty Trust 5.25% Series N Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference $25.00 per share"
  },
  {
    "Symbol": "VNO^O",
    "Name": "Vornado Realty Trust 4.45% Series O Cumulative Redeemable Preferred Shares Liquidation Preference $25.00 Per Share"
  },
  {
    "Symbol": "VNOM",
    "Name": "Viper Energy Partners LP Common Unit"
  },
  {
    "Symbol": "VNRX",
    "Name": "VolitionRX Limited Common Stock"
  },
  {
    "Symbol": "VNT",
    "Name": "Vontier Corporation Common Stock"
  },
  {
    "Symbol": "VNTR",
    "Name": "Venator Materials PLC Ordinary Shares"
  },
  {
    "Symbol": "VOC",
    "Name": "VOC Energy Trust Units of Beneficial Interest"
  },
  {
    "Symbol": "VOD",
    "Name": "Vodafone Group Plc American Depositary Shares"
  },
  {
    "Symbol": "VOR",
    "Name": "Vor Biopharma Inc. Common Stock"
  },
  {
    "Symbol": "VOXR",
    "Name": "Vox Royalty Corp. Common Stock"
  },
  {
    "Symbol": "VOXX",
    "Name": "VOXX International Corporation Class A Common Stock"
  },
  {
    "Symbol": "VOYA",
    "Name": "Voya Financial Inc. Common Stock"
  },
  {
    "Symbol": "VOYA^B",
    "Name": "Voya Financial Inc. Depositary Shares each representing a 1/40th interest in a share of 5.35% Fixed-Rate Reset Non-Cumulative Preferred Stock Series B"
  },
  {
    "Symbol": "VPG",
    "Name": "Vishay Precision Group Inc. Common Stock"
  },
  {
    "Symbol": "VPV",
    "Name": "Invesco Pennsylvania Value Municipal Income Trust Common Stock (DE)"
  },
  {
    "Symbol": "VQS",
    "Name": "VIQ Solutions Inc. Common Shares"
  },
  {
    "Symbol": "VRA",
    "Name": "Vera Bradley Inc. Common Stock"
  },
  {
    "Symbol": "VRAR",
    "Name": "The Glimpse Group Inc. Common Stock"
  },
  {
    "Symbol": "VRAX",
    "Name": "Virax Biolabs Group Limited Ordinary Shares"
  },
  {
    "Symbol": "VRAY",
    "Name": "ViewRay Inc. Common Stock"
  },
  {
    "Symbol": "VRCA",
    "Name": "Verrica Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "VRDN",
    "Name": "Viridian Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VRE",
    "Name": "Veris Residential Inc. Common Stock"
  },
  {
    "Symbol": "VREX",
    "Name": "Varex Imaging Corporation Common Stock"
  },
  {
    "Symbol": "VRM",
    "Name": "Vroom Inc. Common Stock"
  },
  {
    "Symbol": "VRME",
    "Name": "VerifyMe Inc. Common Stock"
  },
  {
    "Symbol": "VRMEW",
    "Name": "VerifyMe Inc. Warrant"
  },
  {
    "Symbol": "VRNA",
    "Name": "Verona Pharma plc American Depositary Share"
  },
  {
    "Symbol": "VRNS",
    "Name": "Varonis Systems Inc. Common Stock"
  },
  {
    "Symbol": "VRNT",
    "Name": "Verint Systems Inc. Common Stock"
  },
  {
    "Symbol": "VRPX",
    "Name": "Virpax Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "VRRM",
    "Name": "Verra Mobility Corporation Class A Common Stock"
  },
  {
    "Symbol": "VRSK",
    "Name": "Verisk Analytics Inc. Common Stock"
  },
  {
    "Symbol": "VRSN",
    "Name": "VeriSign Inc. Common Stock"
  },
  {
    "Symbol": "VRT",
    "Name": "Vertiv Holdings LLC Class A Common Stock"
  },
  {
    "Symbol": "VRTS",
    "Name": "Virtus Investment Partners Inc. Common Stock"
  },
  {
    "Symbol": "VRTV",
    "Name": "Veritiv Corporation Common Stock"
  },
  {
    "Symbol": "VRTX",
    "Name": "Vertex Pharmaceuticals Incorporated Common Stock"
  },
  {
    "Symbol": "VS",
    "Name": "Versus Systems Inc. Common Shares"
  },
  {
    "Symbol": "VSAC",
    "Name": "Vision Sensing Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "VSACW",
    "Name": "Vision Sensing Acquisition Corp. Warrants"
  },
  {
    "Symbol": "VSAT",
    "Name": "ViaSat Inc. Common Stock"
  },
  {
    "Symbol": "VSCO",
    "Name": "Victorias Secret & Co. Common Stock"
  },
  {
    "Symbol": "VSEC",
    "Name": "VSE Corporation Common Stock"
  },
  {
    "Symbol": "VSH",
    "Name": "Vishay Intertechnology Inc. Common Stock"
  },
  {
    "Symbol": "VSSYW",
    "Name": "Versus Systems Inc. Class A Warrants"
  },
  {
    "Symbol": "VST",
    "Name": "Vistra Corp. Common Stock"
  },
  {
    "Symbol": "VSTA",
    "Name": "Vasta Platform Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "VSTM",
    "Name": "Verastem Inc. Common Stock"
  },
  {
    "Symbol": "VSTO",
    "Name": "Vista Outdoor Inc. Common Stock"
  },
  {
    "Symbol": "VTEX",
    "Name": "VTEX Class A Common Shares"
  },
  {
    "Symbol": "VTGN",
    "Name": "VistaGen Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VTLE",
    "Name": "Vital Energy Inc. Common Stock par value $0.01 per share"
  },
  {
    "Symbol": "VTN",
    "Name": "Invesco Trust for Investment Grade New York Municipals Common Stock"
  },
  {
    "Symbol": "VTNR",
    "Name": "Vertex Energy Inc Common Stock"
  },
  {
    "Symbol": "VTOL",
    "Name": "Bristow Group Inc. Common Stock"
  },
  {
    "Symbol": "VTR",
    "Name": "Ventas Inc. Common Stock"
  },
  {
    "Symbol": "VTRS",
    "Name": "Viatris Inc. Common Stock"
  },
  {
    "Symbol": "VTRU",
    "Name": "Vitru Limited Common Shares"
  },
  {
    "Symbol": "VTS",
    "Name": "Vitesse Energy Inc. Common Stock"
  },
  {
    "Symbol": "VTSI",
    "Name": "VirTra Inc. Common Stock"
  },
  {
    "Symbol": "VTVT",
    "Name": "vTv Therapeutics Inc. Class A Common Stock"
  },
  {
    "Symbol": "VTYX",
    "Name": "Ventyx Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "VUZI",
    "Name": "Vuzix Corporation Common Stock"
  },
  {
    "Symbol": "VVI",
    "Name": "Viad Corp Common Stock"
  },
  {
    "Symbol": "VVOS",
    "Name": "Vivos Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VVPR",
    "Name": "VivoPower International PLC Ordinary Shares"
  },
  {
    "Symbol": "VVR",
    "Name": "Invesco Senior Income Trust Common Stock (DE)"
  },
  {
    "Symbol": "VVV",
    "Name": "Valvoline Inc. Common Stock"
  },
  {
    "Symbol": "VVX",
    "Name": "V2X Inc. Common Stock"
  },
  {
    "Symbol": "VWE",
    "Name": "Vintage Wine Estates Inc. Common Stock"
  },
  {
    "Symbol": "VWEWW",
    "Name": "Vintage Wine Estates Inc. Warrants"
  },
  {
    "Symbol": "VXRT",
    "Name": "Vaxart Inc Common Stock"
  },
  {
    "Symbol": "VYGR",
    "Name": "Voyager Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VYNE",
    "Name": "VYNE Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "VYNT",
    "Name": "Vyant Bio Inc. Common Stock"
  },
  {
    "Symbol": "VZ",
    "Name": "Verizon Communications Inc. Common Stock"
  },
  {
    "Symbol": "VZIO",
    "Name": "VIZIO Holding Corp. Class A Common Stock"
  },
  {
    "Symbol": "VZLA",
    "Name": "Vizsla Silver Corp. Common Shares"
  },
  {
    "Symbol": "W",
    "Name": "Wayfair Inc. Class A Common Stock"
  },
  {
    "Symbol": "WAB",
    "Name": "Westinghouse Air Brake Technologies Corporation Common Stock"
  },
  {
    "Symbol": "WABC",
    "Name": "Westamerica Bancorporation Common Stock"
  },
  {
    "Symbol": "WAFD",
    "Name": "Washington Federal Inc. Common Stock"
  },
  {
    "Symbol": "WAFDP",
    "Name": "Washington Federal Inc. Depositary Shares"
  },
  {
    "Symbol": "WAFU",
    "Name": "Wah Fu Education Group Limited Ordinary Shares"
  },
  {
    "Symbol": "WAL",
    "Name": "Western Alliance Bancorporation Common Stock (DE)"
  },
  {
    "Symbol": "WAL^A",
    "Name": "Western Alliance Bancorporation Depositary Shares Each Representing a 1/400th Interest in a Share of 4.250% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "WALD",
    "Name": "Waldencast plc Class A Ordinary Share"
  },
  {
    "Symbol": "WALDW",
    "Name": "Waldencast plc Warrant"
  },
  {
    "Symbol": "WASH",
    "Name": "Washington Trust Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "WAT",
    "Name": "Waters Corporation Common Stock"
  },
  {
    "Symbol": "WATT",
    "Name": "Energous Corporation Common Stock"
  },
  {
    "Symbol": "WAVC",
    "Name": "Waverley Capital Acquisition Corp. 1 Class A Ordinary Shares"
  },
  {
    "Symbol": "WAVD",
    "Name": "WaveDancer Inc. Common Stock"
  },
  {
    "Symbol": "WAVE",
    "Name": "Eco Wave Power Global AB (publ) American Depositary Shares"
  },
  {
    "Symbol": "WAVS",
    "Name": "Western Acquisition Ventures Corp. Common Stock"
  },
  {
    "Symbol": "WAVSW",
    "Name": "Western Acquisition Ventures Corp. Warrant"
  },
  {
    "Symbol": "WB",
    "Name": "Weibo Corporation American Depositary Share"
  },
  {
    "Symbol": "WBA",
    "Name": "Walgreens Boots Alliance Inc. Common Stock"
  },
  {
    "Symbol": "WBD",
    "Name": "Warner Bros. Discovery Inc. Series A Common Stock"
  },
  {
    "Symbol": "WBS",
    "Name": "Webster Financial Corporation Common Stock"
  },
  {
    "Symbol": "WBS^F",
    "Name": "Webster Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 5.25% Series F Non-Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "WBS^G",
    "Name": "Webster Financial Corporation Depositary Shares each representing a 1/40th interest in a share of 6.50% Series G non-cumulative perpetual preferred stock"
  },
  {
    "Symbol": "WBX",
    "Name": "Wallbox N.V. Class A Ordinary Shares"
  },
  {
    "Symbol": "WCC",
    "Name": "WESCO International Inc. Common Stock"
  },
  {
    "Symbol": "WCC^A",
    "Name": "WESCO International Inc. Depositary Shares each representing 1/1000th interest in a share of Series A Fixed-Rate Reset Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "WCN",
    "Name": "Waste Connections Inc. Common Shares"
  },
  {
    "Symbol": "WD",
    "Name": "Walker & Dunlop Inc Common Stock"
  },
  {
    "Symbol": "WDAY",
    "Name": "Workday Inc. Class A Common Stock"
  },
  {
    "Symbol": "WDC",
    "Name": "Western Digital Corporation Common Stock"
  },
  {
    "Symbol": "WDFC",
    "Name": "WD-40 Company Common Stock"
  },
  {
    "Symbol": "WDH",
    "Name": "Waterdrop Inc. American Depositary Shares (each representing the right to receive 10 Class A Ordinary Shares)"
  },
  {
    "Symbol": "WDI",
    "Name": "Western Asset Diversified Income Fund Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "WDS",
    "Name": "Woodside Energy Group Limited American Depositary Shares each representing one Ordinary Share"
  },
  {
    "Symbol": "WE",
    "Name": "WeWork Inc. Class A Common Stock"
  },
  {
    "Symbol": "WEA",
    "Name": "Western Asset Bond Fund Share of Beneficial Interest"
  },
  {
    "Symbol": "WEAV",
    "Name": "Weave Communications Inc. Common Stock"
  },
  {
    "Symbol": "WEC",
    "Name": "WEC Energy Group Inc. Common Stock"
  },
  {
    "Symbol": "WEJO",
    "Name": "Wejo Group Limited Common Shares"
  },
  {
    "Symbol": "WEJOW",
    "Name": "Wejo Group Limited Warrant"
  },
  {
    "Symbol": "WEL",
    "Name": "Integrated Wellness Acquisition Corp Class A Ordinary Shares"
  },
  {
    "Symbol": "WELL",
    "Name": "Welltower Inc. Common Stock"
  },
  {
    "Symbol": "WEN",
    "Name": "Wendy's Company (The) Common Stock"
  },
  {
    "Symbol": "WERN",
    "Name": "Werner Enterprises Inc. Common Stock"
  },
  {
    "Symbol": "WES",
    "Name": "Western Midstream Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "WEST",
    "Name": "Westrock Coffee Company Common Stock"
  },
  {
    "Symbol": "WESTW",
    "Name": "Westrock Coffee Company Warrants"
  },
  {
    "Symbol": "WETG",
    "Name": "WeTrade Group Inc. Ordinary Shares"
  },
  {
    "Symbol": "WEX",
    "Name": "WEX Inc. common stock"
  },
  {
    "Symbol": "WEYS",
    "Name": "Weyco Group Inc. Common Stock"
  },
  {
    "Symbol": "WF",
    "Name": "Woori Financial Group Inc. American Depositary Shares (each representing three (3) shares of Common Stock)"
  },
  {
    "Symbol": "WFC",
    "Name": "Wells Fargo & Company Common Stock"
  },
  {
    "Symbol": "WFC^A",
    "Name": "Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series AA"
  },
  {
    "Symbol": "WFC^C",
    "Name": "Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series CC"
  },
  {
    "Symbol": "WFC^D",
    "Name": "Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in  a share of Non-Cumulative Perpetual Class A Preferred Stock Series DD"
  },
  {
    "Symbol": "WFC^L",
    "Name": "Wells Fargo & Company Wells Fargo & Company 7.50% Non-Cumulative Perpetual Convertible Class A Preferred Stock Series L"
  },
  {
    "Symbol": "WFC^Q",
    "Name": "Wells Fargo & Company Depositary Shares Representing 1/1000th Interest Perpetual Preferred Class A Series Q Fixed to Floating"
  },
  {
    "Symbol": "WFC^R",
    "Name": "Wells Fargo & Company Dep Shs Repstg 1/1000th Int Perp Pfd Cl A (Ser R Fixed To Flltg)"
  },
  {
    "Symbol": "WFC^Y",
    "Name": "Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series Y"
  },
  {
    "Symbol": "WFC^Z",
    "Name": "Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series Z"
  },
  {
    "Symbol": "WFCF",
    "Name": "Where Food Comes From Inc. Common Stock"
  },
  {
    "Symbol": "WFG",
    "Name": "West Fraser Timber Co. Ltd Common stock"
  },
  {
    "Symbol": "WFRD",
    "Name": "Weatherford International plc Ordinary Shares"
  },
  {
    "Symbol": "WGO",
    "Name": "Winnebago Industries Inc. Common Stock"
  },
  {
    "Symbol": "WGS",
    "Name": "GeneDx Holdings Corp. Class A Common Stock"
  },
  {
    "Symbol": "WGSWW",
    "Name": "GeneDx Holdings Corp. Warrant"
  },
  {
    "Symbol": "WH",
    "Name": "Wyndham Hotels & Resorts Inc. Common Stock"
  },
  {
    "Symbol": "WHD",
    "Name": "Cactus Inc. Class A Common Stock"
  },
  {
    "Symbol": "WHF",
    "Name": "WhiteHorse Finance Inc. Common Stock"
  },
  {
    "Symbol": "WHG",
    "Name": "Westwood Holdings Group Inc Common Stock"
  },
  {
    "Symbol": "WHLM",
    "Name": "Wilhelmina International Inc. Common Stock"
  },
  {
    "Symbol": "WHLR",
    "Name": "Wheeler Real Estate Investment Trust Inc. Common Stock"
  },
  {
    "Symbol": "WHLRD",
    "Name": "Wheeler Real Estate Investment Trust Inc. Series D Cumulative Preferred Stock"
  },
  {
    "Symbol": "WHLRL",
    "Name": "Wheeler Real Estate Investment Trust Inc. 7.00% Senior Subordinated Convertible Notes Due 2031"
  },
  {
    "Symbol": "WHLRP",
    "Name": "Wheeler Real Estate Investment Trust Inc. Class B Preferred Stock"
  },
  {
    "Symbol": "WHR",
    "Name": "Whirlpool Corporation Common Stock"
  },
  {
    "Symbol": "WIA",
    "Name": "Western Asset Inflation-Linked Income Fund"
  },
  {
    "Symbol": "WILC",
    "Name": "G. Willi-Food International  Ltd. Ordinary Shares"
  },
  {
    "Symbol": "WIMI",
    "Name": "WiMi Hologram Cloud Inc. American Depositary Share"
  },
  {
    "Symbol": "WINA",
    "Name": "Winmark Corporation Common Stock"
  },
  {
    "Symbol": "WING",
    "Name": "Wingstop Inc. Common Stock"
  },
  {
    "Symbol": "WINT",
    "Name": "Windtree Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "WINV",
    "Name": "WinVest Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "WINVR",
    "Name": "WinVest Acquisition Corp. Right"
  },
  {
    "Symbol": "WIRE",
    "Name": "Encore Wire Corporation Common Stock"
  },
  {
    "Symbol": "WISA",
    "Name": "WiSA Technologies Inc. Common Stock"
  },
  {
    "Symbol": "WISH",
    "Name": "ContextLogic Inc. Class A Common Stock"
  },
  {
    "Symbol": "WIT",
    "Name": "Wipro Limited Common Stock"
  },
  {
    "Symbol": "WIW",
    "Name": "Western Asset Inflation-Linked Opportunities & Income Fund"
  },
  {
    "Symbol": "WIX",
    "Name": "Wix.com Ltd. Ordinary Shares"
  },
  {
    "Symbol": "WK",
    "Name": "Workiva Inc. Class A Common Stock"
  },
  {
    "Symbol": "WKEY",
    "Name": "WISeKey International Holding AG American Depositary Shares"
  },
  {
    "Symbol": "WKHS",
    "Name": "Workhorse Group Inc. Common Stock"
  },
  {
    "Symbol": "WKME",
    "Name": "WalkMe Ltd. Ordinary Shares"
  },
  {
    "Symbol": "WKSP",
    "Name": "Worksport Ltd. Common Stock"
  },
  {
    "Symbol": "WKSPW",
    "Name": "Worksport Ltd. Warrant"
  },
  {
    "Symbol": "WLDN",
    "Name": "Willdan Group Inc. Common Stock"
  },
  {
    "Symbol": "WLDS",
    "Name": "Wearable Devices Ltd. Ordinary Share"
  },
  {
    "Symbol": "WLDSW",
    "Name": "Wearable Devices Ltd. Warrant"
  },
  {
    "Symbol": "WLFC",
    "Name": "Willis Lease Finance Corporation Common Stock"
  },
  {
    "Symbol": "WLGS",
    "Name": "Wang & Lee Group Inc. Ordinary Shares"
  },
  {
    "Symbol": "WLK",
    "Name": "Westlake Corporation Common Stock"
  },
  {
    "Symbol": "WLKP",
    "Name": "Westlake Chemical Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "WLMS",
    "Name": "Williams Industrial Services Group Inc. Common Stock"
  },
  {
    "Symbol": "WLY",
    "Name": "John Wiley & Sons Inc. Common Stock"
  },
  {
    "Symbol": "WLYB",
    "Name": "John Wiley & Sons Inc. Common Stock"
  },
  {
    "Symbol": "WM",
    "Name": "Waste Management Inc. Common Stock"
  },
  {
    "Symbol": "WMB",
    "Name": "Williams Companies Inc. (The) Common Stock"
  },
  {
    "Symbol": "WMC",
    "Name": "Western Asset Mortgage Capital Corporation Common Stock"
  },
  {
    "Symbol": "WMG",
    "Name": "Warner Music Group Corp. Class A Common Stock"
  },
  {
    "Symbol": "WMK",
    "Name": "Weis Markets Inc. Common Stock"
  },
  {
    "Symbol": "WMPN",
    "Name": "William Penn Bancorporation Common Stock"
  },
  {
    "Symbol": "WMS",
    "Name": "Advanced Drainage Systems Inc. Common Stock"
  },
  {
    "Symbol": "WMT",
    "Name": "Walmart Inc. Common Stock"
  },
  {
    "Symbol": "WNC",
    "Name": "Wabash National Corporation Common Stock"
  },
  {
    "Symbol": "WNEB",
    "Name": "Western New England Bancorp Inc. Common Stock"
  },
  {
    "Symbol": "WNNR",
    "Name": "Andretti Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "WNS",
    "Name": "WNS (Holdings) Limited Sponsored ADR (Jersey)"
  },
  {
    "Symbol": "WNW",
    "Name": "Meiwu Technology Company Limited Ordinary Shares"
  },
  {
    "Symbol": "WOLF",
    "Name": "Wolfspeed Inc. Common Stock"
  },
  {
    "Symbol": "WOOF",
    "Name": "Petco Health and Wellness Company Inc. Class A Common Stock"
  },
  {
    "Symbol": "WOR",
    "Name": "Worthington Industries Inc. Common Stock"
  },
  {
    "Symbol": "WORX",
    "Name": "SCWorx Corp. Common Stock"
  },
  {
    "Symbol": "WOW",
    "Name": "WideOpenWest Inc. Common Stock"
  },
  {
    "Symbol": "WPC",
    "Name": "W. P. Carey Inc. REIT"
  },
  {
    "Symbol": "WPM",
    "Name": "Wheaton Precious Metals Corp Common Shares (Canada)"
  },
  {
    "Symbol": "WPP",
    "Name": "WPP plc American Depositary Shares"
  },
  {
    "Symbol": "WPRT",
    "Name": "Westport Fuel Systems Inc Common Shares"
  },
  {
    "Symbol": "WRAC",
    "Name": "Williams Rowland Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "WRAP",
    "Name": "Wrap Technologies Inc. Common Stock"
  },
  {
    "Symbol": "WRB",
    "Name": "W.R. Berkley Corporation Common Stock"
  },
  {
    "Symbol": "WRB^E",
    "Name": "W.R. Berkley Corporation 5.70% Subordinated Debentures due 2058"
  },
  {
    "Symbol": "WRB^F",
    "Name": "W.R. Berkley Corporation 5.10% Subordinated Debentures due 2059"
  },
  {
    "Symbol": "WRB^G",
    "Name": "W.R. Berkley Corporation 4.25% Subordinated Debentures due 2060"
  },
  {
    "Symbol": "WRB^H",
    "Name": "W.R. Berkley Corporation 4.125% Subordinated Debentures due 2061"
  },
  {
    "Symbol": "WRBY",
    "Name": "Warby Parker Inc. Class A Common Stock"
  },
  {
    "Symbol": "WRK",
    "Name": "Westrock Company Common Stock"
  },
  {
    "Symbol": "WRLD",
    "Name": "World Acceptance Corporation Common Stock"
  },
  {
    "Symbol": "WRN",
    "Name": "Western Copper and Gold Corporation Common Stock"
  },
  {
    "Symbol": "WSBC",
    "Name": "WesBanco Inc. Common Stock"
  },
  {
    "Symbol": "WSBCP",
    "Name": "WesBanco Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 6.75% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "WSBF",
    "Name": "Waterstone Financial Inc. Common Stock (MD)"
  },
  {
    "Symbol": "WSC",
    "Name": "WillScot Mobile Mini Holdings Corp. Class A Common Stock"
  },
  {
    "Symbol": "WSFS",
    "Name": "WSFS Financial Corporation Common Stock"
  },
  {
    "Symbol": "WSM",
    "Name": "Williams-Sonoma Inc. Common Stock (DE)"
  },
  {
    "Symbol": "WSO",
    "Name": "Watsco Inc. Common Stock"
  },
  {
    "Symbol": "WSO/B",
    "Name": "Watsco Inc."
  },
  {
    "Symbol": "WSR",
    "Name": "Whitestone REIT Common Shares"
  },
  {
    "Symbol": "WST",
    "Name": "West Pharmaceutical Services Inc. Common Stock"
  },
  {
    "Symbol": "WT",
    "Name": "WisdomTree Inc. Common Stock"
  },
  {
    "Symbol": "WTBA",
    "Name": "West Bancorporation Common Stock"
  },
  {
    "Symbol": "WTER",
    "Name": "The Alkaline Water Company Inc. Common Stock"
  },
  {
    "Symbol": "WTFC",
    "Name": "Wintrust Financial Corporation Common Stock"
  },
  {
    "Symbol": "WTFCM",
    "Name": "Wintrust Financial Corporation Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D"
  },
  {
    "Symbol": "WTFCP",
    "Name": "Wintrust Financial Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
  },
  {
    "Symbol": "WTI",
    "Name": "W&T Offshore Inc. Common Stock"
  },
  {
    "Symbol": "WTM",
    "Name": "White Mountains Insurance Group Ltd. Common Stock"
  },
  {
    "Symbol": "WTMA",
    "Name": "Welsbach Technology Metals Acquisition Corp. Common Stock"
  },
  {
    "Symbol": "WTMAR",
    "Name": "Welsbach Technology Metals Acquisition Corp. one right to receive 1/10th of a share of common stock"
  },
  {
    "Symbol": "WTRG",
    "Name": "Essential Utilities Inc. Common Stock"
  },
  {
    "Symbol": "WTS",
    "Name": "Watts Water Technologies Inc. Class A Common Stock"
  },
  {
    "Symbol": "WTT",
    "Name": "Wireless Telecom Group  Inc. Common Stock"
  },
  {
    "Symbol": "WTTR",
    "Name": "Select Energy Services Inc. Class A Common Stock"
  },
  {
    "Symbol": "WTW",
    "Name": "Willis Towers Watson Public Limited Company Ordinary Shares"
  },
  {
    "Symbol": "WU",
    "Name": "Western Union Company (The) Common Stock"
  },
  {
    "Symbol": "WULF",
    "Name": "TeraWulf Inc. Common Stock"
  },
  {
    "Symbol": "WVE",
    "Name": "Wave Life Sciences Ltd. Ordinary Shares"
  },
  {
    "Symbol": "WVVI",
    "Name": "Willamette Valley Vineyards Inc. Common Stock"
  },
  {
    "Symbol": "WVVIP",
    "Name": "Willamette Valley Vineyards Inc. Series A Redeemable Preferred Stock"
  },
  {
    "Symbol": "WW",
    "Name": "WW International Inc. Common Stock"
  },
  {
    "Symbol": "WWAC",
    "Name": "Worldwide Webb Acquisition Corp. Class A Ordinary Share"
  },
  {
    "Symbol": "WWACW",
    "Name": "Worldwide Webb Acquisition Corp. Warrant"
  },
  {
    "Symbol": "WWD",
    "Name": "Woodward Inc. Common Stock"
  },
  {
    "Symbol": "WWE",
    "Name": "World Wrestling Entertainment Inc. Class A Common Stock"
  },
  {
    "Symbol": "WWR",
    "Name": "Westwater Resources Inc. Common Stock"
  },
  {
    "Symbol": "WWW",
    "Name": "Wolverine World Wide Inc. Common Stock"
  },
  {
    "Symbol": "WY",
    "Name": "Weyerhaeuser Company Common Stock"
  },
  {
    "Symbol": "WYNN",
    "Name": "Wynn Resorts Limited Common stock"
  },
  {
    "Symbol": "WYY",
    "Name": "WidePoint Corporation Common Stock"
  },
  {
    "Symbol": "X",
    "Name": "United States Steel Corporation Common Stock"
  },
  {
    "Symbol": "XAIR",
    "Name": "Beyond Air Inc. Common Stock"
  },
  {
    "Symbol": "XBIO",
    "Name": "Xenetic Biosciences Inc. Common Stock"
  },
  {
    "Symbol": "XBIT",
    "Name": "XBiotech Inc. Common Stock"
  },
  {
    "Symbol": "XCUR",
    "Name": "Exicure Inc. Common Stock"
  },
  {
    "Symbol": "XEL",
    "Name": "Xcel Energy Inc. Common Stock"
  },
  {
    "Symbol": "XELA",
    "Name": "Exela Technologies Inc. Common Stock"
  },
  {
    "Symbol": "XELAP",
    "Name": "Exela Technologies Inc. 6.00% Series B Cumulative Convertible Perpetual Preferred Stock"
  },
  {
    "Symbol": "XELB",
    "Name": "Xcel Brands Inc. Common Stock"
  },
  {
    "Symbol": "XENE",
    "Name": "Xenon Pharmaceuticals Inc. Common Shares"
  },
  {
    "Symbol": "XERS",
    "Name": "Xeris Biopharma Holdings Inc. Common Stock"
  },
  {
    "Symbol": "XFIN",
    "Name": "ExcelFin Acquisition Corp Class A Common Stock"
  },
  {
    "Symbol": "XFINU",
    "Name": "ExcelFin Acquisition Corp Unit"
  },
  {
    "Symbol": "XFLT",
    "Name": "XAI Octagon Floating Rate & Alternative Income Term Trust Common Shares of Beneficial Interest"
  },
  {
    "Symbol": "XFLT^A",
    "Name": "XAI Octagon Floating Rate & Alternative Income Term Trust 6.50% Series 2026 Term Preferred Shares (Liquidation Preference $25.00)"
  },
  {
    "Symbol": "XFOR",
    "Name": "X4 Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "XGN",
    "Name": "Exagen Inc. Common Stock"
  },
  {
    "Symbol": "XHR",
    "Name": "Xenia Hotels & Resorts Inc. Common Stock"
  },
  {
    "Symbol": "XIN",
    "Name": "Xinyuan Real Estate Co Ltd American Depositary Shares"
  },
  {
    "Symbol": "XLO",
    "Name": "Xilio Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "XM",
    "Name": "Qualtrics International Inc. Class A Common Stock"
  },
  {
    "Symbol": "XMTR",
    "Name": "Xometry Inc. Class A Common Stock"
  },
  {
    "Symbol": "XNCR",
    "Name": "Xencor Inc. Common Stock"
  },
  {
    "Symbol": "XNET",
    "Name": "Xunlei Limited American Depositary Shares"
  },
  {
    "Symbol": "XOM",
    "Name": "Exxon Mobil Corporation Common Stock"
  },
  {
    "Symbol": "XOMA",
    "Name": "XOMA Corporation Common Stock"
  },
  {
    "Symbol": "XOMAO",
    "Name": "XOMA Corporation Depositary Shares Rep Series B 8.375% Cumulative Preferred Stock"
  },
  {
    "Symbol": "XOMAP",
    "Name": "XOMA Corporation 8.625% Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "XOS",
    "Name": "Xos Inc. Common Stock"
  },
  {
    "Symbol": "XOSWW",
    "Name": "Xos Inc. Warrants"
  },
  {
    "Symbol": "XP",
    "Name": "XP Inc. Class A Common Stock"
  },
  {
    "Symbol": "XPAX",
    "Name": "XPAC Acquisition Corp. Class A Ordinary Shares"
  },
  {
    "Symbol": "XPAXU",
    "Name": "XPAC Acquisition Corp. Unit"
  },
  {
    "Symbol": "XPAXW",
    "Name": "XPAC Acquisition Corp. Warrant"
  },
  {
    "Symbol": "XPDB",
    "Name": "Power & Digital Infrastructure Acquisition II Corp. Class A Common Stock"
  },
  {
    "Symbol": "XPDBW",
    "Name": "Power & Digital Infrastructure Acquisition II Corp. Warrant"
  },
  {
    "Symbol": "XPEL",
    "Name": "XPEL Inc. Common Stock"
  },
  {
    "Symbol": "XPER",
    "Name": "Xperi Inc. Common Stock"
  },
  {
    "Symbol": "XPEV",
    "Name": "XPeng Inc. American depositary shares each representing two Class A ordinary shares"
  },
  {
    "Symbol": "XPL",
    "Name": "Solitario Zinc Corp. Common Stock"
  },
  {
    "Symbol": "XPO",
    "Name": "XPO Inc. Common Stock"
  },
  {
    "Symbol": "XPOF",
    "Name": "Xponential Fitness Inc. Class A Common Stock"
  },
  {
    "Symbol": "XPON",
    "Name": "Expion360 Inc. Common Stock"
  },
  {
    "Symbol": "XPRO",
    "Name": "Expro Group Holdings N.V. Common Stock"
  },
  {
    "Symbol": "XRAY",
    "Name": "DENTSPLY SIRONA Inc. Common Stock"
  },
  {
    "Symbol": "XRTX",
    "Name": "XORTX Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "XRX",
    "Name": "Xerox Holdings Corporation Common Stock"
  },
  {
    "Symbol": "XTLB",
    "Name": "XTL Biopharmaceuticals Ltd. American Depositary Shares"
  },
  {
    "Symbol": "XTNT",
    "Name": "Xtant Medical Holdings Inc. Common Stock"
  },
  {
    "Symbol": "XWEL",
    "Name": "XWELL Inc. Common Stock"
  },
  {
    "Symbol": "XXII",
    "Name": "22nd Century Group Inc. Common Stock"
  },
  {
    "Symbol": "XYF",
    "Name": "X Financial American Depositary Shares each representing six Class A Ordinary Shares"
  },
  {
    "Symbol": "XYL",
    "Name": "Xylem Inc. Common Stock New"
  },
  {
    "Symbol": "YALA",
    "Name": "Yalla Group Limited American Depositary Shares each representing one Class A Ordinary Share"
  },
  {
    "Symbol": "YCBD",
    "Name": "cbdMD Inc. Common Stock"
  },
  {
    "Symbol": "YCBD^A",
    "Name": "cbdMD Inc. 8.0% Series A Cumulative Convertible Preferred Stock"
  },
  {
    "Symbol": "YELL",
    "Name": "Yellow Corporation Common Stock"
  },
  {
    "Symbol": "YELP",
    "Name": "Yelp Inc. Common Stock"
  },
  {
    "Symbol": "YETI",
    "Name": "YETI Holdings Inc. Common Stock"
  },
  {
    "Symbol": "YEXT",
    "Name": "Yext Inc. Common Stock"
  },
  {
    "Symbol": "YGF",
    "Name": "YanGuFang International Group Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "YGMZ",
    "Name": "MingZhu Logistics Holdings Limited Ordinary Shares"
  },
  {
    "Symbol": "YI",
    "Name": "111 Inc. American Depositary Shares"
  },
  {
    "Symbol": "YJ",
    "Name": "Yunji Inc. American Depository Shares"
  },
  {
    "Symbol": "YMAB",
    "Name": "Y-mAbs Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "YMM",
    "Name": "Full Truck Alliance Co. Ltd. American Depositary Shares (each representing 20 Class A Ordinary Shares)"
  },
  {
    "Symbol": "YORW",
    "Name": "York Water Company (The) Common Stock"
  },
  {
    "Symbol": "YOSH",
    "Name": "Yoshiharu Global Co. Class A Common Stock"
  },
  {
    "Symbol": "YOTA",
    "Name": "Yotta Acquisition Corporation Common Stock"
  },
  {
    "Symbol": "YOTAR",
    "Name": "Yotta Acquisition Corporation Right"
  },
  {
    "Symbol": "YOTAU",
    "Name": "Yotta Acquisition Corporation Unit"
  },
  {
    "Symbol": "YOTAW",
    "Name": "Yotta Acquisition Corporation Warrant"
  },
  {
    "Symbol": "YOU",
    "Name": "Clear Secure Inc. Class A Common Stock"
  },
  {
    "Symbol": "YPF",
    "Name": "YPF Sociedad Anonima Common Stock"
  },
  {
    "Symbol": "YQ",
    "Name": "17 Education & Technology Group Inc. American Depositary Shares"
  },
  {
    "Symbol": "YRD",
    "Name": "Yiren Digital Ltd. American Depositary Shares each representing two ordinary shares"
  },
  {
    "Symbol": "YS",
    "Name": "YS Biopharma Co. Ltd. Ordinary Shares"
  },
  {
    "Symbol": "YSBPW",
    "Name": "YS Biopharma Co. Ltd. Warrants"
  },
  {
    "Symbol": "YSG",
    "Name": "Yatsen Holding Limited American Depositary Shares each representing four Class A ordinary shares"
  },
  {
    "Symbol": "YTEN",
    "Name": "Yield10 Bioscience Inc. Common Stock"
  },
  {
    "Symbol": "YTRA",
    "Name": "Yatra Online Inc. Ordinary Shares"
  },
  {
    "Symbol": "YUM",
    "Name": "Yum! Brands Inc."
  },
  {
    "Symbol": "YUMC",
    "Name": "Yum China Holdings Inc. Common Stock"
  },
  {
    "Symbol": "YVR",
    "Name": "Liquid Media Group Ltd. Common Shares"
  },
  {
    "Symbol": "YY",
    "Name": "JOYY Inc. American Depositary Shares"
  },
  {
    "Symbol": "Z",
    "Name": "Zillow Group Inc. Class C Capital Stock"
  },
  {
    "Symbol": "ZAPP",
    "Name": "Zapp Electric Vehicles Group Limited Ordinary Shares"
  },
  {
    "Symbol": "ZAPPW",
    "Name": "Zapp Electric Vehicles Group Limited Warrant"
  },
  {
    "Symbol": "ZBH",
    "Name": "Zimmer Biomet Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ZBRA",
    "Name": "Zebra Technologies Corporation Class A Common Stock"
  },
  {
    "Symbol": "ZCMD",
    "Name": "Zhongchao Inc. Class A Ordinary Shares"
  },
  {
    "Symbol": "ZD",
    "Name": "Ziff Davis Inc. Common Stock"
  },
  {
    "Symbol": "ZDGE",
    "Name": "Zedge Inc. Class B Common Stock"
  },
  {
    "Symbol": "ZENV",
    "Name": "Zenvia Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZEPP",
    "Name": "Zepp Health Corporation American Depositary Shares"
  },
  {
    "Symbol": "ZETA",
    "Name": "Zeta Global Holdings Corp. Class A Common Stock"
  },
  {
    "Symbol": "ZEUS",
    "Name": "Olympic Steel Inc. Common Stock"
  },
  {
    "Symbol": "ZEV",
    "Name": "Lightning eMotors Inc Common Stock"
  },
  {
    "Symbol": "ZFOX",
    "Name": "ZeroFox Holdings Inc. Common Stock"
  },
  {
    "Symbol": "ZFOXW",
    "Name": "ZeroFox Holdings Inc. Warrants"
  },
  {
    "Symbol": "ZG",
    "Name": "Zillow Group Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZGN",
    "Name": "Ermenegildo Zegna N.V. Ordinary Shares"
  },
  {
    "Symbol": "ZH",
    "Name": "Zhihu Inc. American Depositary Shares (every two of each representing one Class A ordinary share)"
  },
  {
    "Symbol": "ZI",
    "Name": "ZoomInfo Technologies Inc Common Stock"
  },
  {
    "Symbol": "ZIM",
    "Name": "ZIM Integrated Shipping Services Ltd. Ordinary Shares"
  },
  {
    "Symbol": "ZIMV",
    "Name": "ZimVie Inc. Common Stock"
  },
  {
    "Symbol": "ZING",
    "Name": "FTAC Zeus Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ZINGU",
    "Name": "FTAC Zeus Acquisition Corp. Unit"
  },
  {
    "Symbol": "ZINGW",
    "Name": "FTAC Zeus Acquisition Corp. Warrant"
  },
  {
    "Symbol": "ZION",
    "Name": "Zions Bancorporation N.A. Common Stock"
  },
  {
    "Symbol": "ZIONL",
    "Name": "Zions Bancorporation 6.95% Fixed-to-Floating Rate Subordinated Notes"
  },
  {
    "Symbol": "ZIONO",
    "Name": "Zions Bancorporation N.A. Dep Shs Repstg 1/40th Perp Pfd Ser G"
  },
  {
    "Symbol": "ZIONP",
    "Name": "Zions Bancorporation N.A. Depositary Shares (Each representing 1/40th Interest in a Share of Series A Floating-Rate Non-Cumulative Perpetual Preferred Stock)"
  },
  {
    "Symbol": "ZIP",
    "Name": "ZipRecruiter Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZIVO",
    "Name": "Zivo Bioscience Inc. Common Stock"
  },
  {
    "Symbol": "ZIVOW",
    "Name": "Zivo Bioscience Inc. Warrants"
  },
  {
    "Symbol": "ZJYL",
    "Name": "JIN MEDICAL INTERNATIONAL LTD. Ordinary Shares"
  },
  {
    "Symbol": "ZKIN",
    "Name": "ZK International Group Co. Ltd Ordinary Share"
  },
  {
    "Symbol": "ZLAB",
    "Name": "Zai Lab Limited American Depositary Shares"
  },
  {
    "Symbol": "ZM",
    "Name": "Zoom Video Communications Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZNTL",
    "Name": "Zentalis Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ZOM",
    "Name": "Zomedica Corp. Common Shares"
  },
  {
    "Symbol": "ZS",
    "Name": "Zscaler Inc. Common Stock"
  },
  {
    "Symbol": "ZT",
    "Name": "Zimmer Energy Transition Acquisition Corp. Class A Common Stock"
  },
  {
    "Symbol": "ZTAQU",
    "Name": "Zimmer Energy Transition Acquisition Corp. Units"
  },
  {
    "Symbol": "ZTAQW",
    "Name": "Zimmer Energy Transition Acquisition Corp. Warrants"
  },
  {
    "Symbol": "ZTEK",
    "Name": "Zentek Ltd. Common Stock"
  },
  {
    "Symbol": "ZTO",
    "Name": "ZTO Express (Cayman) Inc. American Depositary Shares each representing one Class A ordinary share."
  },
  {
    "Symbol": "ZTR",
    "Name": "Virtus Total Return Fund Inc."
  },
  {
    "Symbol": "ZTS",
    "Name": "Zoetis Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZUMZ",
    "Name": "Zumiez Inc. Common Stock"
  },
  {
    "Symbol": "ZUO",
    "Name": "Zuora Inc. Class A Common Stock"
  },
  {
    "Symbol": "ZURA",
    "Name": "Zura Bio Limited Class A Ordinary Shares"
  },
  {
    "Symbol": "ZURAW",
    "Name": "Zura Bio Limited Warrants"
  },
  {
    "Symbol": "ZVIA",
    "Name": "Zevia PBC Class A Common Stock"
  },
  {
    "Symbol": "ZVRA",
    "Name": "Zevra Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ZVSA",
    "Name": "ZyVersa Therapeutics Inc. Common Stock"
  },
  {
    "Symbol": "ZWS",
    "Name": "Zurn Elkay Water Solutions Corporation Common Stock"
  },
  {
    "Symbol": "ZYME",
    "Name": "Zymeworks Inc. Common Stock"
  },
  {
    "Symbol": "ZYNE",
    "Name": "Zynerba Pharmaceuticals Inc. Common Stock"
  },
  {
    "Symbol": "ZYXI",
    "Name": "Zynex Inc. Common Stock"
  }
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value.toUpperCase();
  if (input.length) {
    result = tickers.filter((ticker) => {
      return ticker.Symbol.toUpperCase().startsWith(input) ||
        ticker.Name.toUpperCase().startsWith(input);
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultsBox.innerHTML = '';
  }
}

function display(result) {
  const content = result.map((ticker) => {
    return `<li onclick=selectInput(this) data-symbol="${ticker.Symbol}">${ticker.Symbol} (${ticker.Name})</li>`;
  });

  resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.getAttribute('data-symbol');
  resultsBox.innerHTML = '';
}
